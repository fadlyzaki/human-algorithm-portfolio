
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
