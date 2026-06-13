export const CASE_STUDY_LOADING_META = {
  "stoqo-logistics": {
    title: "Stoqo Logistics",
    problem: "Designing reliable mobile workflows for warehouse and delivery operations.",
    clusterLabel: "Logistics Case File",
    brandColor: "var(--accent-amber)",
    parentId: "efficiency",
  },
  "stoqo-sales": {
    title: "Incentive Sales Agent",
    problem: "Converting confusion into commitment through clearer field-sales incentive logic.",
    clusterLabel: "Sales Case File",
    brandColor: "var(--accent-green)",
    parentId: "efficiency",
  },
  "design-system-gudangada": {
    title: "GudangAda Design System",
    problem: "Turning fragmented marketplace UI into a reusable design operating system.",
    clusterLabel: "Design System Case File",
    brandColor: "var(--accent-blue)",
    parentId: "commerce",
  },
};

const toTitleCase = (value = "case-study") =>
  value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export const getCaseStudyLoadingMeta = (id) => {
  const meta = CASE_STUDY_LOADING_META[id] || {
    title: toTitleCase(id),
    problem: "Loading the case-study context and evidence.",
    clusterLabel: "Case File",
    brandColor: "var(--accent-amber)",
    parentId: "",
  };

  return {
    project: {
      id,
      title: meta.title,
      details: { problem: meta.problem },
    },
    parentCluster: {
      id: meta.parentId,
      title: meta.clusterLabel,
      brandColor: meta.brandColor,
    },
  };
};
