
import { normalizeProject } from './utils';
import { NOTES as RAW_NOTES } from './notes';

// Import Side Projects
import { humanAlgorithm } from './projects/humanAlgorithm';
import { productivityIllusion } from './projects/productivityIllusion';
import { interactiveWorkbook } from './projects/interactiveWorkbook';
import { yearInReview } from './projects/yearInReview';
import { procurement } from './projects/procurement';
import { dolphi } from './projects/dolphi';

// Import Work Clusters
import { lumina } from './projects/lumina';
import { gudangAda } from './projects/gudangAda';
import { stoqo } from './projects/stoqo';

// -----------------------------------------------------------------------------
// AGGREGATION & NORMALIZATION
// -----------------------------------------------------------------------------

export const SIDE_PROJECTS = [
    humanAlgorithm,
    productivityIllusion,
    interactiveWorkbook,
    yearInReview,
    procurement,
    dolphi
].map(normalizeProject);

export const WORK_CLUSTERS = [
    lumina,
    gudangAda,
    stoqo
].map(cluster => ({
    ...cluster,
    // Normalize nested projects within the work cluster
    projects: cluster.projects.map(normalizeProject)
}));

export const NOTES = RAW_NOTES;

export const SUBSTACK_POSTS = [
    {
        title: "Why Reducing Steps Is Better Than Adding Delight",
        description: "Delight is often a mask for poor usability. In this log, I explore why removing friction is the highest form of respect for the user.",
        pubDate: "2026-01-28",
        link: "https://fadlyzaki.substack.com"
    },
    {
        title: "The Human Algorithm: Designing for Resilience",
        description: "Resilient systems aren't the ones that never break—they're the ones designed to hold you when you do. A deep dive into my design philosophy.",
        pubDate: "2026-01-15",
        link: "https://fadlyzaki.substack.com"
    },
    {
        title: "Cognitive Load and the Paradox of Choice",
        description: "Every unnecessary feature is a tax on the user's attention. How we can build more focused, purposeful tools.",
        pubDate: "2026-01-05",
        link: "https://fadlyzaki.substack.com"
    }
];
