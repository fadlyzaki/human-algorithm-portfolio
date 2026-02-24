/**
 * Centralized route-to-metadata mapping for OG tags.
 * Used by both og-html.js (meta tags) and og.js (image generation).
 *
 * IMPORTANT: Dynamic route data (side projects, companies, case studies)
 * is imported directly from the source data files to prevent data drift.
 * Static page OG descriptions are curated separately since they serve
 * a different purpose (social sharing vs. page content).
 */

import { NOTES } from '../src/data/notes.js';
import { stoqo } from '../src/data/projects/stoqo.js';
import { gudangAda } from '../src/data/projects/gudangAda.js';
import { lumina } from '../src/data/projects/lumina.js';
import { humanAlgorithm } from '../src/data/projects/humanAlgorithm.js';
import { dolphi } from '../src/data/projects/dolphi.js';
import { yearInReview } from '../src/data/projects/yearInReview.js';
import { interactiveWorkbook } from '../src/data/projects/interactiveWorkbook.js';
import { productivityIllusion } from '../src/data/projects/productivityIllusion.js';
import { procurement } from '../src/data/projects/procurement.js';

const SITE_URL = 'https://fadlyzaki-design.vercel.app';
const DEFAULT_OG = {
    title: 'Fadlyzaki Portfolio',
    description: "Product Designer · Systems Thinker. I don't chase chaos—I contain it.",
    color: '#10b981',
    emoji: '🧢'
};

// --- Static Pages (curated OG descriptions) ---
const STATIC_ROUTES = {
    '/': {
        title: 'Fadlyzaki Portfolio',
        description: "Product Designer · Systems Thinker. Building resilient tools for people who need them to just work.",
        color: '#10b981'
    },
    '/about': {
        title: 'About — Fadly Uzzaki',
        description: "The person behind the system. A decade of designing for humans in chaos.",
        color: '#8B5CF6'
    },
    '/contact': {
        title: 'Get In Touch',
        description: "Let's talk about design, systems, or your next big thing.",
        color: '#3B82F6'
    },
    '/cv': {
        title: 'System Manifest',
        description: "A living document of skills, experience, and design philosophy.",
        color: '#F59E0B'
    },
    '/process': {
        title: 'Design Process',
        description: "How I think, research, design, and ship. The framework behind the work.",
        color: '#EC4899'
    },
    '/design-system': {
        title: 'Design System',
        description: "The atomic building blocks behind the Fadlyzaki Portfolio.",
        color: '#06B6D4'
    },
    '/sketches': {
        title: 'Sketches',
        description: "Interactive experiments and creative explorations.",
        color: '#F97316'
    },
    '/side-projects': {
        title: 'Side Projects',
        description: "Experiments, concepts, and passion projects outside the 9-to-5.",
        color: '#8B5CF6'
    }
};

// --- Build dynamic routes from source data (Single Source of Truth) ---

// Company brand colors
const COMPANY_COLORS = {
    'efficiency': '#FA6130',  // Stoqo
    'commerce': '#2563EB',    // GudangAda
    'workforce': '#7C3AED',   // Lumina
};

const COMPANY_NAMES = {
    'efficiency': 'Stoqo',
    'commerce': 'GudangAda',
    'workforce': 'Lumina',
};

// Build WORK_ROUTES from source data
const COMPANIES = [stoqo, gudangAda, lumina];
const WORK_ROUTES = {};
for (const company of COMPANIES) {
    WORK_ROUTES[company.id] = {
        title: `${COMPANY_NAMES[company.id] || company.id} — ${company.title}`,
        description: company.hook || company.miniDesc || DEFAULT_OG.description,
        color: COMPANY_COLORS[company.id] || DEFAULT_OG.color,
    };
}

// Build CASE_STUDY_ROUTES from source data (projects inside companies)
const CASE_STUDY_ROUTES = {};
for (const company of COMPANIES) {
    if (!company.projects) continue;
    for (const project of company.projects) {
        CASE_STUDY_ROUTES[project.id] = {
            title: project.title,
            description: project.caseStudy?.snapshot?.tagline || project.desc || '',
            color: COMPANY_COLORS[company.id] || DEFAULT_OG.color,
            company: COMPANY_NAMES[company.id] || company.id,
        };
    }
}

// Build SIDE_PROJECT_ROUTES from NOTES + standalone side-project data
const SIDE_PROJECT_SOURCES = [
    ...NOTES,
    humanAlgorithm,
    dolphi,
    yearInReview,
    interactiveWorkbook,
    productivityIllusion,
    procurement,
];

const SIDE_PROJECT_ROUTES = {};
for (const sp of SIDE_PROJECT_SOURCES) {
    const id = sp.id;
    if (!id) continue;
    // Handle titles that may be objects { en, id } or plain strings
    const titleStr = typeof sp.title === 'object' ? (sp.title.en || sp.title.id) : sp.title;
    const descStr = sp.tldr || sp.desc || sp.hook ||
        (typeof sp.miniDesc === 'string' ? sp.miniDesc : '') ||
        DEFAULT_OG.description;
    SIDE_PROJECT_ROUTES[id] = {
        title: titleStr,
        description: typeof descStr === 'object' ? (descStr.en || '') : descStr,
        color: sp.brandColor || DEFAULT_OG.color,
    };
}

/**
 * Resolve a URL pathname to its OG metadata.
 */
export function resolveOGMeta(pathname) {
    // Normalize: remove trailing slash
    const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

    // 1. Static routes
    if (STATIC_ROUTES[path]) {
        return { ...STATIC_ROUTES[path], path };
    }

    // 2. Dynamic routes
    const segments = path.split('/').filter(Boolean);

    if (segments[0] === 'work' && segments[1]) {
        const meta = WORK_ROUTES[segments[1]];
        if (meta) return { ...meta, path };
    }

    if (segments[0] === 'case-study' && segments[1]) {
        const meta = CASE_STUDY_ROUTES[segments[1]];
        if (meta) {
            return {
                title: `${meta.title} — ${meta.company}`,
                description: meta.description,
                color: meta.color,
                path
            };
        }
    }

    if (segments[0] === 'side-project' && segments[1]) {
        const meta = SIDE_PROJECT_ROUTES[segments[1]];
        if (meta) return { ...meta, path };
    }

    if (segments[0] === 'blog' && segments[1]) {
        return {
            title: segments[1].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
            description: 'A design note by Fadly Uzzaki.',
            color: '#8B5CF6',
            path
        };
    }

    // Fallback
    return { ...DEFAULT_OG, path };
}

export { SITE_URL, DEFAULT_OG };
