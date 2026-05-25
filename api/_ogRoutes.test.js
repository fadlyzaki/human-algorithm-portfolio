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
});
