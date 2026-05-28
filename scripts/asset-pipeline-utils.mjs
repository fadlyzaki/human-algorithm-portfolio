import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { publicDir, RASTER_EXTENSIONS, toPublicPath } from "./asset-protection.config.mjs";

export const fileExists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

export const walkFiles = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const filePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walkFiles(filePath)));
    } else if (entry.isFile()) {
      files.push(filePath);
    }
  }

  return files;
};

export const listPublicRasterFiles = async () => {
  const files = await walkFiles(publicDir);

  return files
    .filter((filePath) => RASTER_EXTENSIONS.has(path.extname(filePath).toLowerCase()))
    .sort((a, b) => toPublicPath(a).localeCompare(toPublicPath(b)));
};

export const hashBuffer = (buffer) =>
  crypto.createHash("sha256").update(buffer).digest("hex");

export const hashFile = async (filePath) => hashBuffer(await fs.readFile(filePath));

export const mimeForPath = (filePath) => {
  const ext = path.extname(filePath).toLowerCase();

  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".webp") return "image/webp";
  return "image/png";
};

export const readDataUrl = async (filePath) => {
  const buffer = await fs.readFile(filePath);
  return `data:${mimeForPath(filePath)};base64,${buffer.toString("base64")}`;
};

export const readImageDimensions = async (page, filePath) => {
  const dataUrl = await readDataUrl(filePath);

  return page.evaluate(
    async ({ dataUrl: imageUrl }) => {
      const img = new Image();
      img.decoding = "async";
      img.src = imageUrl;
      await img.decode();

      return {
        width: img.naturalWidth,
        height: img.naturalHeight,
      };
    },
    { dataUrl },
  );
};
