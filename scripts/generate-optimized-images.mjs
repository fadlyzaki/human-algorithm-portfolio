import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const execFileAsync = promisify(execFile);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const outDir = path.join(publicDir, "optimized");
const manifestPath = path.join(root, "src/data/optimizedImages.js");

const RESPONSIVE_WIDTHS = [480, 960, 1440];
const PHOTO_QUALITY = 0.78;
const SPRITE_QUALITY = 0.82;

const responsiveSources = [
  "/efficiency_hero.png",
  "/commerce_hero.png",
  "/hero-lumina-new.jpg",
  "/about-fadly.jpg",
  "/images/[core-journey] learning-progress-architect.png",
  "/images/gudangada/setup_wide.jpg",
  "/images/gudangada/team_gathering.jpg",
  "/images/gudangada/culture_pose.jpg",
  "/images/gudangada/workspace_detail.jpg",
  "/images/gudangada/gudangada_mural.jpg",
  "/case-studies/stoqo-sales/exploration.jpg",
  "/case-studies/stoqo-sales/wireframe.jpg",
  "/case-studies/stoqo-logistics/research-analysis.jpg",
  "/case-studies/stoqo-logistics/ideation-notes.jpg",
  "/case-studies/stoqo-logistics/delivery-experience-1.png",
  "/case-studies/stoqo-logistics/delivery-experience-2.png",
  "/work/stoqo-batik.jpg",
  "/work/stoqo-hawaiian.jpg",
  "/work/lumina_arena_2.jpg",
  "/work/lumina_arena_5.jpg",
  "/work/lumina_arena_6.jpg",
].map((src) => ({ src, widths: RESPONSIVE_WIDTHS, quality: PHOTO_QUALITY }));

const spriteSources = ["idle", "think", "walk"].map((state) => ({
  src: `/images/sprite-${state}.png`,
  widths: [1024],
  quality: SPRITE_QUALITY,
}));

const toOutputPath = (src, width) => {
  const parsed = path.parse(src);
  const dir = parsed.dir === "/" ? "" : parsed.dir;
  return `/optimized${dir}/${parsed.name}-${width}.webp`;
};

const encodeWebp = async (page, sourcePath, width, quality) => {
  const sourceBuffer = await fs.readFile(sourcePath);
  const base64 = sourceBuffer.toString("base64");
  const ext = path.extname(sourcePath).slice(1).toLowerCase();
  const mime = ext === "jpg" || ext === "jpeg" ? "image/jpeg" : "image/png";

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
    return await evaluate(`data:${mime};base64,${base64}`);
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
  await fs.mkdir(outDir, { recursive: true });

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  const manifest = {};

  for (const item of [...responsiveSources, ...spriteSources]) {
    const sourcePath = path.join(publicDir, item.src);
    const variants = [];

    for (const width of item.widths) {
      const outputPublicPath = toOutputPath(item.src, width);
      const outputPath = path.join(publicDir, outputPublicPath);
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
  await fs.writeFile(manifestPath, moduleSource);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
