import { normalizeProject } from "./utils";
import { EXPERIMENTS as RAW_EXPERIMENTS } from "./experiments";

// Import Side Projects
import { humanAlgorithm } from "./projects/humanAlgorithm";
import { productivityIllusion } from "./projects/productivityIllusion";
import { interactiveWorkbook } from "./projects/interactiveWorkbook";
import { yearInReview } from "./projects/yearInReview";

// Import Work Clusters
import { lumina } from "./projects/lumina";
import { gudangAda } from "./projects/gudangAda";
import { stoqo } from "./projects/stoqo";

// -----------------------------------------------------------------------------
// AGGREGATION & NORMALIZATION
// -----------------------------------------------------------------------------

export const SIDE_PROJECTS = [
  humanAlgorithm, // Feb 2026
  productivityIllusion, // 2025-2026
  yearInReview, // Dec 2025
  interactiveWorkbook, // Aug 2025
].map(normalizeProject);

export const WORK_CLUSTERS = [lumina, gudangAda, stoqo].map((cluster) => ({
  ...cluster,
  featured: false, // Ensure no cluster is marked as featured to remove the label
  // Normalize nested projects within the work cluster
  projects: cluster.projects.map(normalizeProject),
}));

export const EXPERIMENTS = RAW_EXPERIMENTS;

export const SUBSTACK_POSTS = [
  {
    title: "Why Reducing Steps Is Better Than Adding Delight",
    description:
      "Delight is often a mask for poor usability. In this log, I explore why removing friction is the highest form of respect for the user.",
    pubDate: "2026-01-28",
    link: "https://fadlyzaki.substack.com",
  },
  {
    title: "The Human Algorithm: Designing for Resilience",
    description:
      "Sustainable systems don't just push you to your peak; they support you realistically when bandwidth is low. A deep dive into my design philosophy.",
    pubDate: "2026-01-15",
    link: "https://fadlyzaki.substack.com",
  },
  {
    title: "Cognitive Load and the Paradox of Choice",
    description:
      "Every unnecessary feature is a tax on the user's attention. How we can build more focused, purposeful tools.",
    pubDate: "2026-01-05",
    link: "https://fadlyzaki.substack.com",
  },
];

export const PORTFOLIO = {
  categories: [
    { id: "work", title: "Work", items: WORK_CLUSTERS },
    { id: "side-projects", title: "Side Projects", items: SIDE_PROJECTS },
  ],
};
