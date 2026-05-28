import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import puppeteer from "puppeteer";
import {
  FINGERPRINT_SALT,
  MAX_SAFE_WIDTH,
  PHOTO_QUALITY,
  WATERMARK_TEXT,
  originalsDir,
  protectionReportPath,
  publicPathToFilePath,
  shouldProtectPublicPath,
  toPublicPath,
} from "./asset-protection.config.mjs";
import {
  fileExists,
  hashFile,
  listPublicRasterFiles,
  mimeForPath,
  readDataUrl,
} from "./asset-pipeline-utils.mjs";

const execFileAsync = promisify(execFile);

const fingerprintFor = (publicPath) =>
  crypto
    .createHash("sha256")
    .update(`${FINGERPRINT_SALT}:${publicPath}`)
    .digest("hex");

const originalPathFor = (publicPath) =>
  path.join(originalsDir, publicPath.replace(/^\//, ""));

const ensureOriginalBackup = async (publicPath, publicFilePath) => {
  const originalPath = originalPathFor(publicPath);

  if (!(await fileExists(originalPath))) {
    await fs.mkdir(path.dirname(originalPath), { recursive: true });
    await fs.copyFile(publicFilePath, originalPath);
  }

  return originalPath;
};

const protectImage = async (page, sourcePath, publicPath) => {
  const outputMime = mimeForPath(sourcePath);
  const fingerprint = fingerprintFor(publicPath);

  const encode = (dataUrl) => page.evaluate(
    async ({
      dataUrl: imageUrl,
      fingerprintHex,
      maxWidth,
      outputMime: mime,
      quality,
      watermarkText,
    }) => {
      const img = new Image();
      img.decoding = "async";
      img.src = imageUrl;
      await img.decode();

      const width = Math.max(1, Math.min(maxWidth, img.naturalWidth));
      const height = Math.max(1, Math.round((img.naturalHeight / img.naturalWidth) * width));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d", { alpha: mime !== "image/jpeg" });
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, width, height);

      const bytes = fingerprintHex.match(/.{1,2}/g).map((byte) => Number.parseInt(byte, 16));
      const markerSize = Math.max(1, Math.round(Math.min(width, height) / 640));
      const markerY = Math.max(0, height - markerSize * 4 - 2);

      for (let index = 0; index < 64; index += 1) {
        const byte = bytes[index % bytes.length];
        const bit = (byte >> (index % 8)) & 1;
        const x = 2 + (index % 32) * markerSize;
        const y = markerY + Math.floor(index / 32) * markerSize;
        ctx.fillStyle = bit ? "rgba(255,255,255,0.035)" : "rgba(0,0,0,0.035)";
        ctx.fillRect(x, y, markerSize, markerSize);
      }

      const drawRoundRect = (x, y, rectWidth, rectHeight, radius) => {
        const r = Math.min(radius, rectWidth / 2, rectHeight / 2);
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + rectWidth, y, x + rectWidth, y + rectHeight, r);
        ctx.arcTo(x + rectWidth, y + rectHeight, x, y + rectHeight, r);
        ctx.arcTo(x, y + rectHeight, x, y, r);
        ctx.arcTo(x, y, x + rectWidth, y, r);
        ctx.closePath();
      };

      const label = width < 360 ? "Fadly Zaki" : watermarkText;
      const fontSize = Math.max(11, Math.min(22, Math.round(width * 0.018)));
      const paddingX = Math.round(fontSize * 0.72);
      const paddingY = Math.round(fontSize * 0.46);
      const margin = Math.max(8, Math.round(fontSize * 0.8));

      ctx.font =
        `600 ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
      const metrics = ctx.measureText(label);
      const boxWidth = Math.min(width - margin * 2, Math.ceil(metrics.width + paddingX * 2));
      const boxHeight = Math.ceil(fontSize + paddingY * 2);
      const x = Math.max(margin, width - boxWidth - margin);
      const y = Math.max(margin, height - boxHeight - margin);

      ctx.save();
      drawRoundRect(x, y, boxWidth, boxHeight, Math.round(boxHeight / 2));
      ctx.fillStyle = "rgba(0,0,0,0.24)";
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.66)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.shadowColor = "rgba(0,0,0,0.32)";
      ctx.shadowBlur = Math.max(2, Math.round(fontSize * 0.16));
      ctx.fillText(label, x + boxWidth / 2, y + boxHeight / 2 + 0.5, boxWidth - paddingX * 2);
      ctx.restore();

      const encoded =
        mime === "image/png"
          ? canvas.toDataURL(mime)
          : canvas.toDataURL(mime, quality);

      return {
        data: encoded.split(",")[1],
        fingerprint: fingerprintHex.slice(0, 16),
        height,
        naturalHeight: img.naturalHeight,
        naturalWidth: img.naturalWidth,
        width,
      };
    },
    {
      dataUrl,
      fingerprintHex: fingerprint,
      maxWidth: MAX_SAFE_WIDTH,
      outputMime,
      quality: PHOTO_QUALITY,
      watermarkText: WATERMARK_TEXT,
    },
  );

  try {
    return await encode(await readDataUrl(sourcePath));
  } catch (error) {
    const tempDir = await fs.mkdtemp(path.join("/private/tmp", "portfolio-asset-"));
    const tempPath = path.join(tempDir, `${path.basename(sourcePath)}-browser-readable.jpg`);

    await execFileAsync("sips", [
      "-s",
      "format",
      "jpeg",
      "-s",
      "formatOptions",
      "90",
      "-Z",
      String(Math.max(MAX_SAFE_WIDTH, 2400)),
      sourcePath,
      "--out",
      tempPath,
    ]);

    return encode(await readDataUrl(tempPath));
  }
};

const main = async () => {
  const publicFiles = await listPublicRasterFiles();
  const protectedFiles = publicFiles.filter((filePath) =>
    shouldProtectPublicPath(toPublicPath(filePath)),
  );

  if (protectedFiles.length === 0) {
    console.log("No protected assets found.");
    return;
  }

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  const report = [];

  try {
    for (const publicFilePath of protectedFiles) {
      const publicPath = toPublicPath(publicFilePath);
      const originalPath = await ensureOriginalBackup(publicPath, publicFilePath);
      const beforeHash = await hashFile(originalPath);
      const result = await protectImage(page, originalPath, publicPath);

      await fs.writeFile(publicPathToFilePath(publicPath), Buffer.from(result.data, "base64"));

      const afterHash = await hashFile(publicPathToFilePath(publicPath));
      report.push({
        path: publicPath,
        sourceHash: beforeHash,
        protectedHash: afterHash,
        fingerprint: result.fingerprint,
        sourceSize: {
          width: result.naturalWidth,
          height: result.naturalHeight,
        },
        protectedSize: {
          width: result.width,
          height: result.height,
        },
      });

      console.log(`Protected ${publicPath}`);
    }
  } finally {
    await browser.close();
  }

  await fs.mkdir(path.dirname(protectionReportPath), { recursive: true });
  await fs.writeFile(
    protectionReportPath,
    `${JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        count: report.length,
        maxWidth: MAX_SAFE_WIDTH,
        watermark: WATERMARK_TEXT,
        assets: report,
      },
      null,
      2,
    )}\n`,
  );

  console.log(`Protected ${report.length} assets. Original backups are in ${originalsDir}.`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
