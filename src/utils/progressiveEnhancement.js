const MOBILE_WIDTH = 768;
const LOW_MEMORY_GB = 2;

const mediaMatches = (win, query) => {
  if (!win || typeof win.matchMedia !== "function") return false;
  return Boolean(win.matchMedia(query).matches);
};

export const getProgressiveEnhancementSnapshot = ({
  window: win = typeof window !== "undefined" ? window : undefined,
  navigator: nav = typeof navigator !== "undefined" ? navigator : undefined,
} = {}) => {
  const prefersReducedMotion = mediaMatches(
    win,
    "(prefers-reduced-motion: reduce)",
  );
  const isCoarsePointer =
    mediaMatches(win, "(hover: none)") || mediaMatches(win, "(pointer: coarse)");
  const isNarrowViewport = typeof win?.innerWidth === "number" && win.innerWidth < MOBILE_WIDTH;
  const isMobile = isCoarsePointer || isNarrowViewport;
  const saveData = Boolean(nav?.connection?.saveData);
  const lowMemory =
    typeof nav?.deviceMemory === "number" && nav.deviceMemory <= LOW_MEMORY_GB;

  return {
    canEnhance: Boolean(win) && !isMobile && !prefersReducedMotion && !saveData && !lowMemory,
    isMobile,
    prefersReducedMotion,
    saveData,
    lowMemory,
  };
};

export const canUseProgressiveEnhancement = (environment) =>
  getProgressiveEnhancementSnapshot(environment).canEnhance;

export const scheduleIdleCallback = (callback, timeout = 3000) => {
  if (typeof window === "undefined") return undefined;
  if ("requestIdleCallback" in window) {
    return window.requestIdleCallback(callback, { timeout });
  }
  return window.setTimeout(callback, timeout);
};

export const cancelIdleCallback = (id) => {
  if (typeof window === "undefined" || id === undefined) return;
  if ("cancelIdleCallback" in window) {
    window.cancelIdleCallback(id);
    return;
  }
  window.clearTimeout(id);
};
