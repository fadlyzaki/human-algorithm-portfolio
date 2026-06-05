import { describe, expect, it, vi } from "vitest";
import {
  canUseProgressiveEnhancement,
  getProgressiveEnhancementSnapshot,
} from "../progressiveEnhancement";

const makeWindow = ({ matches = {}, width = 1280 } = {}) => ({
  innerWidth: width,
  matchMedia: vi.fn((query) => ({
    matches: Boolean(matches[query]),
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })),
});

describe("progressiveEnhancement", () => {
  it("allows enhancement on capable desktop sessions", () => {
    expect(
      canUseProgressiveEnhancement({
        window: makeWindow(),
        navigator: { connection: {}, deviceMemory: 8 },
      }),
    ).toBe(true);
  });

  it("blocks enhancement on mobile and reduced-motion sessions", () => {
    expect(
      getProgressiveEnhancementSnapshot({
        window: makeWindow({
          width: 390,
          matches: { "(hover: none)": true, "(pointer: coarse)": true },
        }),
        navigator: { connection: {}, deviceMemory: 8 },
      }),
    ).toMatchObject({ canEnhance: false, isMobile: true });

    expect(
      getProgressiveEnhancementSnapshot({
        window: makeWindow({
          matches: { "(prefers-reduced-motion: reduce)": true },
        }),
        navigator: { connection: {}, deviceMemory: 8 },
      }),
    ).toMatchObject({ canEnhance: false, prefersReducedMotion: true });
  });

  it("blocks enhancement for save-data and low-memory devices", () => {
    expect(
      canUseProgressiveEnhancement({
        window: makeWindow(),
        navigator: { connection: { saveData: true }, deviceMemory: 8 },
      }),
    ).toBe(false);

    expect(
      canUseProgressiveEnhancement({
        window: makeWindow(),
        navigator: { connection: {}, deviceMemory: 2 },
      }),
    ).toBe(false);
  });
});
