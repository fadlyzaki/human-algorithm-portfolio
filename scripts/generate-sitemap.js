import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SIDE_PROJECTS, WORK_CLUSTERS } from '../src/data/portfolioData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, '../public');
const BASE_URL = 'https://fadlyzaki-design.vercel.app';

const staticRoutes = [
    '/',
    '/about',
    '/contact',
    '/cv',
    '/side-projects'
];

const generateSitemap = () => {
    let urls = [...staticRoutes];

    // 1. Work Clusters
    WORK_CLUSTERS.forEach(cluster => {
        urls.push(`/work/${cluster.id}`);

        // 2. Case Studies within Clusters
        if (cluster.projects) {
            cluster.projects.forEach(project => {
                if (project.route) {
                    urls.push(project.route);
                }
            });
        }
    });

    // 3. Side Projects
    SIDE_PROJECTS.forEach(project => {
        if (!project.hidden) {
            urls.push(`/side-project/${project.id}`);
        }
    });

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${BASE_URL}${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapContent);
    console.log(`✅ Sitemap generated with ${urls.length} URLs at public/sitemap.xml`);
};

generateSitemap();
