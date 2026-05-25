import { describe, expect, it } from "vitest";
import { WORK_CLUSTERS } from "../../data/portfolioData";
import {
  getUnlockedFeaturedProjects,
  getUnlockedFeaturedStudies,
} from "../../utils/featuredCaseStudies";

describe("HomeFeaturedWork public filtering", () => {
  it("returns only unlocked case studies in public portfolio order", () => {
    const featuredProjects = getUnlockedFeaturedProjects(WORK_CLUSTERS);
    const ids = featuredProjects.map(({ project }) => project.id);

    expect(ids).toEqual([
      "stoqo-logistics",
      "stoqo-sales",
      "design-system-gudangada",
    ]);
    expect(featuredProjects.every(({ project }) => project.caseStudy)).toBe(true);
  });

  it("maps public projects into unlocked CloneCard studies", () => {
    const studies = getUnlockedFeaturedStudies(WORK_CLUSTERS, false);

    expect(studies).toHaveLength(3);
    expect(studies.every((study) => study.locked === false)).toBe(true);
    expect(studies.map((study) => study.route)).toEqual([
      "/case-study/stoqo-logistics",
      "/case-study/stoqo-sales",
      "/case-study/design-system-gudangada",
    ]);
  });
});
