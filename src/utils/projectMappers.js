/**
 * Utility to map standard portfolio project data to the specialized 
 * format required by the 3D Flip (CloneCard) interaction.
 */
 
export const unlockedIds = ["stoqo-logistics", "stoqo-sales", "design-system-gudangada"];

export const isProjectWip = (proj) => {
  return !proj.caseStudy;
};

export const isProjectLocked = (proj) => {
  // If no case study exists, it's not "locked", it's "WIP"
  if (isProjectWip(proj)) return false;
  
  // Permanent public files
  if (unlockedIds.includes(proj.id)) return false;
  
  return proj.caseStudy?.locked ?? false;
};

export const isProjectBypassed = (proj) => {
  if (isProjectWip(proj)) return true;
  if (import.meta.env.DEV) return true;
  return !isProjectLocked(proj);
};

export const mapProjectToStudy = (proj, cluster, isId) => {
  // Generate an image specifically for the app preview sticker
  let previewImage = proj.previewImage;

  // List of generic images we want to replace with Diagrams if possible
  const genericImages = ["/workforce_hero.png", "/efficiency_hero.png", "/commerce_hero.png"];

  // 1. Identify potential airy diagrams from various metadata fields
  const snapshotHero = proj.snapshot?.heroImage || proj.caseStudy?.snapshot?.heroImage;
  const firstProcessImage = (proj.process?.[0]?.image) || (proj.caseStudy?.process?.[0]?.image);
  const firstSolutionImage = (proj.solution?.[0]?.image) || (proj.caseStudy?.solution?.[0]?.image);
  
  const foundAiry = [snapshotHero, firstProcessImage, firstSolutionImage].find(img => img?.startsWith("airy:"));

  // 2. Decide whether to use the found diagram or the existing previewImage
  // We use the diagram if:
  // - previewImage is missing
  // - previewImage is generic/placeholder
  // - A specific airy diagram was found in metadata (proactive replacement for better aesthetics)
  const allGenericImages = [...genericImages, "/case-studies/"];
  const isPlaceholder = !previewImage || allGenericImages.some(img => previewImage.includes(img));

  if (foundAiry && (isPlaceholder || !previewImage.startsWith("http"))) {
    previewImage = foundAiry;
  }

  // 3. Final fallback if still missing - try to infer from project type/id
  if (!previewImage || isPlaceholder) {
    const typeFallbacks = {
      "Mobile App": "airy:ui",
      "Web Dashboard": "airy:kanban",
      "Service Design": "airy:flow",
      "Product Design Research": "airy:radar",
      "System Feature": "airy:architecture"
    };
    previewImage = typeFallbacks[proj.type] || "airy:default";
  }

  // Support runtime translation for all text fields
  const problemText = isId 
    ? (proj.details_id?.problem || proj.details?.problem)
    : proj.details?.problem;
  const challengeText = isId 
    ? (proj.caseStudy_id?.challenge || proj.caseStudy?.challenge) 
    : proj.caseStudy?.challenge;
  const tagText = isId 
    ? (proj.tag_id || proj.tag) 
    : proj.tag;
  const titleText = isId 
    ? (proj.title_id || proj.title) 
    : proj.title;

  // Generate fragments for the front side headline
  const mainHeadline = problemText || challengeText || titleText || "";
  const words = mainHeadline.split(" ");
  
  // Theme Logic
  let frontBg = cluster?.brandColor || "var(--accent-orange)";
  let backBg = "var(--bg-void)";
  let logoColor = "#000000";
  let baseTextColor = "rgba(0,0,0,0.8)";
  let highlightColor = "#ffffff";

  // GudangAda & Lumina differentiation
  if (cluster?.id === "commerce" || cluster?.id === "lumina") {
    frontBg = "#f4f4f4";
    logoColor = "#1a1a1a";
    baseTextColor = "rgba(0,0,0,0.6)";
    highlightColor = cluster.brandColor || "var(--accent-teal)";
  }

  const titleFragments = words.map((w, idx) => ({
    text: w,
    color: idx < 2 ? highlightColor : baseTextColor
  }));

  const isLocked = isProjectLocked(proj);

  return {
    id: proj.id,
    titleFragments,
    fullText: mainHeadline + " ",
    tag: tagText || proj.type?.split(',')[0] || (isId ? "STUDI KASUS" : "CASE STUDY"),
    logo: cluster?.logo,
    company: cluster?.company || "Project",
    locked: isLocked,
    isId,
    frontBg,
    tagBg: cluster?.brandColor || "var(--accent-orange)",
    backBg,
    logoColor,
    route: proj.route || `/case-study/${proj.id}`,
    stickers: [
      { 
        src: previewImage, 
        alt: "App Preview",
        className: "w-[120px] h-auto right-[-20px] bottom-[20px] rotate-[6deg] rounded-[14px] object-cover shadow-2xl border border-white/20" 
      }
    ]
  };
};
