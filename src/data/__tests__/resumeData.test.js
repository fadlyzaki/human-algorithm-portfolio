import { describe, expect, it } from "vitest";
import { RESUME_PDF_PATH, resumeData } from "../resumeData";

describe("resumeData", () => {
  it("points to the public May 2026 PDF asset", () => {
    expect(RESUME_PDF_PATH).toBe(
      "/assets/general-product-designer-cv-fadly-uzzaki-2026-05-08.pdf",
    );
    expect(resumeData.updated).toBe("May 8, 2026");
  });

  it("contains recruiter-critical resume content from the PDF", () => {
    expect(resumeData.name).toBe("Fadly Uzzaki");
    expect(resumeData.headline).toContain("Product Designer");
    expect(resumeData.summary).toContain("cognitive-load-aware product design");
    expect(resumeData.experience.map((job) => job.company)).toEqual([
      "Lumina",
      "GudangAda",
      "STOQO",
      "Early Experience and Internships",
    ]);
    expect(resumeData.caseStudies.some((study) => study.title === "GudangAda Design System")).toBe(true);
    expect(resumeData.portfolioEvidence).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          claim: expect.stringContaining("B2B commerce"),
          links: expect.arrayContaining([
            expect.objectContaining({
              href: "https://fadlyzaki-design.vercel.app/case-study/design-system-gudangada",
            }),
          ]),
        }),
      ]),
    );
    expect(resumeData.keywords).toContain("AI Product Design");
  });
});
