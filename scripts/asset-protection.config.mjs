import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));

export const rootDir = path.resolve(scriptDir, "..");
export const publicDir = path.join(rootDir, "public");
export const optimizedDir = path.join(publicDir, "optimized");
export const optimizedManifestPath = path.join(rootDir, "src/data/optimizedImages.js");
export const originalsDir = path.join(rootDir, "asset-sources/originals");
export const protectionReportPath = path.join(rootDir, "asset-sources/protection-report.json");

export const RASTER_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);
export const RESPONSIVE_WIDTHS = [480, 960, 1440];
export const MAX_SAFE_WIDTH = 1440;
export const PHOTO_QUALITY = 0.82;
export const SPRITE_QUALITY = 0.82;
export const WATERMARK_TEXT = "Fadly Zaki \u00b7 portfolio";
export const FINGERPRINT_SALT =
  process.env.ASSET_FINGERPRINT_SALT || "human-algorithm-portfolio-assets-v1";

const GENERATED_PREFIXES = ["/optimized/"];
const EXEMPT_PREFIXES = ["/optimized/", "/prototype-gada/", "/logos/"];
const PROTECTED_PREFIXES = [
  "/case-studies/",
  "/images/gudangada/",
  "/work/",
];
const OPTIMIZATION_EXCLUDED_PREFIXES = [];

const EXEMPT_EXACT_PATHS = new Set([
  "/assets/favicon.png",
  "/gudangada-logo.png",
  "/og-image.png",
  "/stoqo-logo.png",
]);

const PROTECTED_EXACT_PATHS = new Set([
  "/about-fadly.jpg",
  "/about-portrait-new.jpg",
  "/commerce_hero.png",
  "/efficiency_hero.png",
  "/hero-id-v2.jpg",
  "/hero-lumina-new.jpg",
  "/hero-running.jpg",
  "/hero-stoqo.jpg",
  "/images/[core-journey] learning-progress-architect.png",
]);

const EXEMPT_BASENAME_PATTERNS = [/favicon/i, /logo/i, /sprite-/i];

export const normalizePublicPath = (value) => {
  let publicPath = String(value).replaceAll("\\", "/");
  const normalizedPublicDir = publicDir.replaceAll("\\", "/");

  if (path.isAbsolute(publicPath) && publicPath.startsWith(normalizedPublicDir)) {
    publicPath = `/${path.relative(publicDir, publicPath).replaceAll(path.sep, "/")}`;
  }

  return publicPath.startsWith("/") ? publicPath : `/${publicPath}`;
};

export const toPublicPath = (filePath) =>
  `/${path.relative(publicDir, filePath).replaceAll(path.sep, "/")}`;

export const publicPathToFilePath = (publicPath) =>
  path.join(publicDir, decodeURI(normalizePublicPath(publicPath)).slice(1));

export const isRasterPublicPath = (publicPath) =>
  RASTER_EXTENSIONS.has(path.extname(normalizePublicPath(publicPath)).toLowerCase());

export const isGeneratedPublicPath = (publicPath) => {
  const normalized = normalizePublicPath(publicPath);
  return GENERATED_PREFIXES.some((prefix) => normalized.startsWith(prefix));
};

export const isExemptPublicPath = (publicPath) => {
  const normalized = normalizePublicPath(publicPath);
  const basename = path.posix.basename(normalized);

  return (
    EXEMPT_EXACT_PATHS.has(normalized) ||
    EXEMPT_PREFIXES.some((prefix) => normalized.startsWith(prefix)) ||
    EXEMPT_BASENAME_PATTERNS.some((pattern) => pattern.test(basename))
  );
};

export const shouldProtectPublicPath = (publicPath) => {
  const normalized = normalizePublicPath(publicPath);

  if (!isRasterPublicPath(normalized)) return false;
  if (isGeneratedPublicPath(normalized) || isExemptPublicPath(normalized)) return false;

  return (
    PROTECTED_EXACT_PATHS.has(normalized) ||
    PROTECTED_PREFIXES.some((prefix) => normalized.startsWith(prefix))
  );
};

export const shouldOptimizePublicPath = (publicPath) => {
  const normalized = normalizePublicPath(publicPath);

  return (
    shouldProtectPublicPath(normalized) &&
    !OPTIMIZATION_EXCLUDED_PREFIXES.some((prefix) => normalized.startsWith(prefix))
  );
};

export const toOptimizedOutputPath = (publicPath, width) => {
  const parsed = path.posix.parse(normalizePublicPath(publicPath));
  const dir = parsed.dir === "/" ? "" : parsed.dir;

  return `/optimized${dir}/${parsed.name}-${width}.webp`;
};

export const getOptimizedSourceItems = (publicPaths) => {
  const protectedSources = [...new Set(publicPaths.filter(shouldOptimizePublicPath))]
    .sort()
    .map((src) => ({
      src,
      widths: RESPONSIVE_WIDTHS,
      quality: PHOTO_QUALITY,
    }));

  const spriteSources = ["idle", "think", "walk"].map((state) => ({
    src: `/images/sprite-${state}.png`,
    widths: [1024],
    quality: SPRITE_QUALITY,
  }));

  return [...protectedSources, ...spriteSources];
};
