import fs from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer";
import {
  MAX_SAFE_WIDTH,
  originalsDir,
  publicDir,
  rootDir,
  isExemptPublicPath,
  isGeneratedPublicPath,
  publicPathToFilePath,
  shouldProtectPublicPath,
  toPublicPath,
} from "./asset-protection.config.mjs";
import {
  fileExists,
  hashFile,
  listPublicRasterFiles,
  readImageDimensions,
  walkFiles,
} from "./asset-pipeline-utils.mjs";

const originalPathFor = (publicPath) =>
  path.join(originalsDir, publicPath.replace(/^\//, ""));

const scanReferences = async () => {
  const roots = ["api", "src", "public"].map((dir) => path.join(rootDir, dir));
  const files = [];

  for (const root of roots) {
    if (await fileExists(root)) {
      files.push(...(await walkFiles(root)));
    }
  }

  const scannedExtensions = new Set([".css", ".html", ".js", ".jsx", ".json", ".md", ".mjs"]);
  const assetRegex =
    /["'`(]\s*(\/[^"'`()?#]+?\.(?:png|jpe?g|webp|gif|svg|pdf|html))/gi;
  const missing = [];

  for (const filePath of files.filter((file) =>
    scannedExtensions.has(path.extname(file).toLowerCase()),
  )) {
    const source = await fs.readFile(filePath, "utf8");
    let match;

    while ((match = assetRegex.exec(source))) {
      const rawAssetPath = match[1];
      if (rawAssetPath.includes("${")) continue;

      const decodedPath = decodeURI(rawAssetPath);
      const targetPath = publicPathToFilePath(decodedPath);

      if (!(await fileExists(targetPath))) {
        missing.push({
          reference: rawAssetPath,
          file: path.relative(rootDir, filePath),
        });
      }
    }
  }

  return missing;
};

const main = async () => {
  const publicFiles = await listPublicRasterFiles();
  const unmanaged = [];
  const protectedFiles = [];
  const exemptFiles = [];
  const generatedFiles = [];

  for (const filePath of publicFiles) {
    const publicPath = toPublicPath(filePath);

    if (shouldProtectPublicPath(publicPath)) {
      protectedFiles.push(filePath);
    } else if (isGeneratedPublicPath(publicPath)) {
      generatedFiles.push(filePath);
    } else if (isExemptPublicPath(publicPath)) {
      exemptFiles.push(filePath);
    } else {
      unmanaged.push(publicPath);
    }
  }

  const failures = [];
  const originalHashes = new Map();
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  try {
    for (const filePath of protectedFiles) {
      const publicPath = toPublicPath(filePath);
      const originalPath = originalPathFor(publicPath);

      if (!(await fileExists(originalPath))) {
        failures.push(`Missing original backup for ${publicPath}`);
        continue;
      }

      const originalHash = await hashFile(originalPath);
      const publicHash = await hashFile(filePath);
      originalHashes.set(originalHash, publicPath);

      if (originalHash === publicHash) {
        failures.push(`${publicPath} is still byte-identical to its original source`);
      }

      const dimensions = await readImageDimensions(page, filePath);
      if (dimensions.width > MAX_SAFE_WIDTH) {
        failures.push(
          `${publicPath} is ${dimensions.width}px wide; expected <= ${MAX_SAFE_WIDTH}px`,
        );
      }
    }

    for (const filePath of publicFiles) {
      const publicPath = toPublicPath(filePath);
      if (isGeneratedPublicPath(publicPath)) continue;

      const hash = await hashFile(filePath);
      if (originalHashes.has(hash)) {
        failures.push(
          `${publicPath} matches a protected original backup (${originalHashes.get(hash)})`,
        );
      }
    }
  } finally {
    await browser.close();
  }

  if (unmanaged.length > 0) {
    failures.push(`Unclassified public raster assets: ${unmanaged.join(", ")}`);
  }

  const missingReferences = await scanReferences();
  if (missingReferences.length > 0) {
    failures.push(
      `Missing referenced public assets: ${missingReferences
        .map((item) => `${item.reference} in ${item.file}`)
        .join(", ")}`,
    );
  }

  if (!(await fileExists(originalsDir))) {
    failures.push(`Missing local original source directory: ${originalsDir}`);
  }

  if (failures.length > 0) {
    console.error("Asset protection audit failed:");
    for (const failure of failures) console.error(`- ${failure}`);
    process.exit(1);
  }

  console.log(
    [
      "Asset protection audit passed:",
      `${protectedFiles.length} protected`,
      `${generatedFiles.length} generated`,
      `${exemptFiles.length} exempt`,
    ].join(" "),
  );
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
