import { describe, expect, it } from "vitest";
import { getNavLinks, getMetaLinks } from "../navigationData";

const t = (key) => ({
  "nav.home": "Home",
  "nav.about": "About",
  "nav.work": "Work",
  "nav.side_projects": "Projects",
  "nav.contact": "Contact",
  "nav.cv": "Resume / CV",
}[key] || key);

describe("navigationData", () => {
  it("uses canonical global routes instead of hash-only links", () => {
    const hrefs = getNavLinks(t).map((link) => link.href);

    expect(hrefs).toEqual([
      "/",
      "/about",
      "/#work",
      "/side-projects",
      "/thoughts",
      "/contact",
    ]);
    expect(hrefs.every((href) => !href.startsWith("#"))).toBe(true);
  });

  it("does not duplicate nav labels or routes", () => {
    const links = getNavLinks(t);
    const labels = links.map((link) => link.label);
    const hrefs = links.map((link) => link.href);

    expect(new Set(labels).size).toBe(labels.length);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("keeps recruiter meta actions available", () => {
    const metaHrefs = getMetaLinks(t).map((link) => link.href);

    expect(metaHrefs).toEqual(["/cv", "/contact"]);
  });
});
