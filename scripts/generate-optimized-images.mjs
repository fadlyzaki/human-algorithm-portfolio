import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import puppeteer from "puppeteer";
import {
  getOptimizedSourceItems,
  optimizedDir,
  optimizedManifestPath,
  publicPathToFilePath,
  toOptimizedOutputPath,
  toPublicPath,
} from "./asset-protection.config.mjs";
import {
  fileExists,
  listPublicRasterFiles,
  readDataUrl,
} from "./asset-pipeline-utils.mjs";

const execFileAsync = promisify(execFile);

const encodeWebp = async (page, sourcePath, width, quality) => {
  const evaluate = (dataUrl) => page.evaluate(
    async ({ dataUrl, targetWidth, targetQuality }) => {
      const img = new Image();
      img.decoding = "async";
      img.src = dataUrl;
      await img.decode();

      const width = Math.min(targetWidth, img.naturalWidth);
      const height = Math.max(1, Math.round((img.naturalHeight / img.naturalWidth) * width));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d", { alpha: true });
      ctx.drawImage(img, 0, 0, width, height);

      return canvas.toDataURL("image/webp", targetQuality).split(",")[1];
    },
    {
      dataUrl,
      targetWidth: width,
      targetQuality: quality,
    },
  );

  try {
    return await evaluate(await readDataUrl(sourcePath));
  } catch (error) {
    const tempDir = await fs.mkdtemp(path.join("/private/tmp", "portfolio-image-"));
    const tempPath = path.join(tempDir, `${path.basename(sourcePath)}-${width}.jpg`);
    await execFileAsync("sips", [
      "-s",
      "format",
      "jpeg",
      "-s",
      "formatOptions",
      "85",
      "-Z",
      String(width),
      sourcePath,
      "--out",
      tempPath,
    ]);

    const fallbackBuffer = await fs.readFile(tempPath);
    return evaluate(`data:image/jpeg;base64,${fallbackBuffer.toString("base64")}`);
  }
};

const main = async () => {
  await fs.rm(optimizedDir, { recursive: true, force: true });
  await fs.mkdir(optimizedDir, { recursive: true });

  const publicRasters = await listPublicRasterFiles();
  const candidateItems = getOptimizedSourceItems(publicRasters.map(toPublicPath));
  const sourceItems = [];

  for (const item of candidateItems) {
    if (await fileExists(publicPathToFilePath(item.src))) {
      sourceItems.push(item);
    }
  }

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  const manifest = {};

  for (const item of sourceItems) {
    const sourcePath = publicPathToFilePath(item.src);
    const variants = [];

    for (const width of item.widths) {
      const outputPublicPath = toOptimizedOutputPath(item.src, width);
      const outputPath = publicPathToFilePath(outputPublicPath);
      await fs.mkdir(path.dirname(outputPath), { recursive: true });

      console.log(`Encoding ${item.src} -> ${outputPublicPath}`);
      const encoded = await encodeWebp(page, sourcePath, width, item.quality);
      await fs.writeFile(outputPath, Buffer.from(encoded, "base64"));
      variants.push({ width, src: encodeURI(outputPublicPath) });
    }

    manifest[item.src] = { webp: variants };
  }

  await browser.close();

  const moduleSource = `export const OPTIMIZED_IMAGES = ${JSON.stringify(manifest, null, 2)};\n\nexport default OPTIMIZED_IMAGES;\n`;
  await fs.writeFile(optimizedManifestPath, moduleSource);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
