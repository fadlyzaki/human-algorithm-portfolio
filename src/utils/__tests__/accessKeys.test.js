import { describe, expect, it } from "vitest";
import {
  canUnlockWithAccessKey,
  getConfiguredAccessKeys,
  normalizeAccessKey,
} from "../accessKeys";

describe("accessKeys", () => {
  it("normalizes whitespace and casing", () => {
    expect(normalizeAccessKey("  My Secret Key  ")).toBe("my secret key");
  });

  it("accepts configured primary and alternate keys", () => {
    const env = {
      VITE_PROTECTED_PASSWORD: "PrimaryKey",
      VITE_PROTECTED_PASSWORD_ALT: "AltKey",
    };

    expect(canUnlockWithAccessKey(" primarykey ", env)).toBe(true);
    expect(canUnlockWithAccessKey("ALTKEY", env)).toBe(true);
  });

  it("rejects built-in fallback passkeys unless explicitly configured", () => {
    expect(canUnlockWithAccessKey(["desain", "zaki"].join(""), {})).toBe(false);
    expect(canUnlockWithAccessKey(["design", "by", "zaki"].join(""), {})).toBe(false);
  });

  it("filters empty configured keys", () => {
    expect(
      getConfiguredAccessKeys({
        VITE_PROTECTED_PASSWORD: "  ",
        VITE_PROTECTED_PASSWORD_ALT: " alt ",
      }),
    ).toEqual(["alt"]);
  });
});
