
import { SIDE_PROJECTS, WORK_CLUSTERS, NOTES } from './src/data/portfolioData.js';

console.log('SIDE_PROJECTS length:', SIDE_PROJECTS.length);
console.log('WORK_CLUSTERS length:', WORK_CLUSTERS.length);
console.log('WORK_CLUSTERS IDs:', WORK_CLUSTERS.map(c => c.id).join(', '));
console.log('NOTES length:', NOTES.length);
