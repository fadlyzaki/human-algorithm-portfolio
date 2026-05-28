import { describe, expect, it } from "vitest";
import { resolveOGMeta } from "./_ogRoutes.js";

describe("resolveOGMeta", () => {
  it("uses current portfolio messaging for the homepage", () => {
    const meta = resolveOGMeta("/");

    expect(meta.title).toContain("Fadly Uzzaki");
    expect(meta.description).toContain("Current portfolio");
    expect(meta.description).toContain("public case studies");
  });

  it("uses the current resume/CV preview for /cv", () => {
    const meta = resolveOGMeta("/cv");

    expect(meta.title).toBe("Resume / CV — Fadly Uzzaki");
    expect(meta.description).toContain("downloadable May 2026 PDF");
  });

  it("resolves current side-project routes from portfolio data", () => {
    expect(resolveOGMeta("/side-project/learning-progress-architect").title).toBe(
      "Learning Progress Architect",
    );
    expect(resolveOGMeta("/side-project/competitor-summarizer").title).toBe(
      "Competitor Landing Page Summarizer",
    );
  });

  it("marks unlocked case-study routes with distinct OG signatures", () => {
    const metas = [
      resolveOGMeta("/case-study/stoqo-logistics"),
      resolveOGMeta("/case-study/stoqo-sales"),
      resolveOGMeta("/case-study/design-system-gudangada"),
    ];

    expect(new Set(metas.map((meta) => meta.signature)).size).toBe(metas.length);
    metas.forEach((meta) => {
      expect(meta.kind).toBe("case-study");
      expect(meta.eyebrow).toBe("PUBLIC CASE STUDY");
      expect(meta.title).toContain("—");
      expect(meta.chips.length).toBeGreaterThan(0);
    });
  });

  it("resolves side-project OG metadata with safe colors and unique signatures", () => {
    const metas = [
      resolveOGMeta("/side-project/learning-progress-architect"),
      resolveOGMeta("/side-project/muezza"),
      resolveOGMeta("/side-project/competitor-summarizer"),
      resolveOGMeta("/side-project/human-algorithm"),
    ];

    expect(new Set(metas.map((meta) => meta.signature)).size).toBe(metas.length);
    metas.forEach((meta) => {
      expect(meta.kind).toBe("side-project");
      expect(meta.eyebrow).toBe("SIDE PROJECT");
      expect(meta.color).toMatch(/^#[0-9a-f]{6}$/i);
      expect(meta.color).not.toContain("var(");
    });
    expect(metas[1].title).toBe("Muezza — Grounded Quranic Habits");
  });
});
