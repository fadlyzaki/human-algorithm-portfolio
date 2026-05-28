/**
 * Centralized route-to-metadata mapping for OG tags.
 * Used by both og-html.js (meta tags) and og.js (image generation).
 *
 * IMPORTANT: Dynamic route data (side projects, companies, case studies)
 * is imported directly from the source data files to prevent data drift.
 * Static page OG descriptions are curated separately since they serve
 * a different purpose (social sharing vs. page content).
 */

import { EXPERIMENTS } from '../src/data/experiments.js';
import { stoqo } from '../src/data/projects/stoqo.js';
import { gudangAda } from '../src/data/projects/gudangAda.js';
import { lumina } from '../src/data/projects/lumina.js';
import { humanAlgorithm } from '../src/data/projects/humanAlgorithm.js';
import { yearInReview } from '../src/data/projects/yearInReview.js';
import { interactiveWorkbook } from '../src/data/projects/interactiveWorkbook.js';
import { productivityIllusion } from '../src/data/projects/productivityIllusion.js';
import { competitorSummarizer } from '../src/data/projects/competitorSummarizer.js';
import { learningProgressArchitect } from '../src/data/projects/learningProgressArchitect.js';
import { muezza } from '../src/data/projects/muezza.js';

const SITE_URL = 'https://fadlyzaki-design.vercel.app';
const DEFAULT_OG = {
    title: 'Fadly Uzzaki Portfolio',
    description: 'Current portfolio and resume: B2B SaaS, workforce tech, logistics, AI learning systems, and unlocked public case studies.',
    color: '#10b981',
    kind: 'portfolio',
    eyebrow: 'CURRENT PORTFOLIO'
};

const TOKEN_COLORS = {
    'var(--accent-red)': '#ef4444',
    'var(--accent-blue)': '#3b82f6',
    'var(--accent-amber)': '#f59e0b',
    'var(--accent-green)': '#10b981',
    'var(--accent-purple)': '#8b5cf6',
    'var(--accent-sky)': '#00C2FF',
    'var(--accent-pink)': '#EC4899',
    'var(--accent-orange)': '#f97316',
    'var(--accent-teal)': '#1AA8B4',
};

const FALLBACK_COLORS = [
    '#10b981',
    '#8b5cf6',
    '#f97316',
    '#3b82f6',
    '#EC4899',
    '#00C2FF',
    '#f59e0b',
];

const PUBLIC_CASE_STUDY_IDS = new Set([
    'stoqo-logistics',
    'stoqo-sales',
    'design-system-gudangada',
]);

const normalizeText = (value) => {
    if (!value) return '';
    const text = typeof value === 'object' ? value.en || value.id || '' : value;
    return String(text).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
};

const colorFor = (seed, preferredColor) => {
    if (preferredColor && TOKEN_COLORS[preferredColor]) return TOKEN_COLORS[preferredColor];
    if (preferredColor && /^#[0-9a-f]{3,8}$/i.test(preferredColor)) return preferredColor;

    const source = seed || DEFAULT_OG.title;
    let total = 0;
    for (let i = 0; i < source.length; i += 1) total += source.charCodeAt(i);
    return FALLBACK_COLORS[total % FALLBACK_COLORS.length];
};

const compactList = (items) => items.map(normalizeText).filter(Boolean).slice(0, 4);

const metricCardsFor = (...metricSources) => {
    const metrics = metricSources.flat().filter(Boolean);
    return metrics.slice(0, 3).map((metric) => ({
        label: normalizeText(metric.label),
        value: normalizeText(metric.value),
    })).filter((metric) => metric.label && metric.value);
};

// --- Static Pages (curated OG descriptions) ---
const STATIC_ROUTES = {
    '/': {
        title: 'Fadly Uzzaki — Product Designer & Design Engineer',
        description: 'Current portfolio: B2B SaaS, workforce tech, logistics, AI learning systems, and public case studies backed by a recruiter-ready CV.',
        color: '#10b981',
        kind: 'portfolio',
        eyebrow: 'CURRENT PORTFOLIO',
        chips: ['B2B SaaS', 'AI learning systems', 'Public case studies'],
    },
    '/about': {
        title: 'About — Fadly Uzzaki',
        description: "The person behind the system. A decade of designing for humans in chaos.",
        color: '#8B5CF6',
        kind: 'profile',
        eyebrow: 'ABOUT',
        chips: ['Product design', 'Systems thinking', 'Cognitive load'],
    },
    '/contact': {
        title: 'Get In Touch',
        description: "Let's talk about design, systems, or your next big thing.",
        color: '#3B82F6',
        kind: 'contact',
        eyebrow: 'CONTACT',
        chips: ['Jakarta', 'Remote-ready', 'Collaboration'],
    },
    '/cv': {
        title: 'Resume / CV — Fadly Uzzaki',
        description: 'Recruiter-ready resume backed by live portfolio evidence, public case studies, and a downloadable May 2026 PDF.',
        color: '#F59E0B',
        kind: 'resume',
        eyebrow: 'RESUME / CV',
        chips: ['ATS-ready', 'May 2026 PDF', 'Portfolio evidence'],
    },
    '/design-system': {
        title: 'Design System',
        description: "The atomic building blocks behind the Fadlyzaki Portfolio.",
        color: '#06B6D4',
        kind: 'system',
        eyebrow: 'SYSTEM DNA',
        chips: ['Tokens', 'Components', 'Interaction rules'],
    },
    '/side-projects': {
        title: 'Side Projects',
        description: "Experiments, concepts, and passion projects outside the 9-to-5.",
        color: '#8B5CF6',
        kind: 'side-project-index',
        eyebrow: 'SIDE PROJECTS',
        chips: ['AI labs', 'Research tools', 'Weekend builds'],
    },
    '/thoughts': {
        title: 'Unprovoked Thoughts',
        description: "Essays, reflections, and unsolicited opinions on design, technology, and the spaces between.",
        color: '#F59E0B',
        kind: 'writing',
        eyebrow: 'THOUGHTS',
        chips: ['Essays', 'Design philosophy', 'Technology'],
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
        kind: 'work-cluster',
        eyebrow: 'WORK CLUSTER',
        chips: compactList([
            COMPANY_NAMES[company.id],
            company.subtitle,
            company.companyFocus?.items?.[0],
            company.companyFocus?.items?.[1],
        ]),
    };
}

// Build CASE_STUDY_ROUTES from source data (projects inside companies)
const CASE_STUDY_ROUTES = {};
for (const company of COMPANIES) {
    if (!company.projects) continue;
    for (const project of company.projects) {
        const isPublic = PUBLIC_CASE_STUDY_IDS.has(project.id);
        CASE_STUDY_ROUTES[project.id] = {
            title: normalizeText(project.title),
            description: normalizeText(
                project.caseStudy?.snapshot?.tagline ||
                project.details?.problem ||
                project.desc ||
                DEFAULT_OG.description,
            ),
            color: COMPANY_COLORS[company.id] || DEFAULT_OG.color,
            company: COMPANY_NAMES[company.id] || company.id,
            kind: 'case-study',
            eyebrow: isPublic ? 'PUBLIC CASE STUDY' : 'PROTECTED CASE FILE',
            chips: compactList([
                COMPANY_NAMES[company.id],
                project.tag,
                project.type,
                project.timeline,
            ]),
            metrics: metricCardsFor(project.caseStudy?.metrics, project.metrics),
            signature: project.id,
        };
    }
}

// Build SIDE_PROJECT_ROUTES from NOTES + standalone side-project data
const SIDE_PROJECT_SOURCES = [
    ...EXPERIMENTS,
    learningProgressArchitect,
    competitorSummarizer,
    humanAlgorithm,
    yearInReview,
    interactiveWorkbook,
    productivityIllusion,
    muezza,
];

const SIDE_PROJECT_ROUTES = {};
for (const sp of SIDE_PROJECT_SOURCES) {
    const id = sp.id;
    if (!id) continue;
    // Handle titles that may be objects { en, id } or plain strings
    const titleStr = normalizeText(sp.title);
    const descStr = sp.tldr || sp.desc || sp.hook ||
        (typeof sp.miniDesc === 'string' ? sp.miniDesc : '') ||
        DEFAULT_OG.description;
    SIDE_PROJECT_ROUTES[id] = {
        title: titleStr,
        description: normalizeText(descStr),
        color: colorFor(id, sp.brandColor),
        kind: 'side-project',
        eyebrow: 'SIDE PROJECT',
        chips: compactList([
            sp.type,
            sp.date,
            sp.context?.client,
            sp.context?.event,
        ]),
        metrics: metricCardsFor(sp.metrics),
        signature: id,
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
                kind: meta.kind,
                eyebrow: meta.eyebrow,
                chips: meta.chips,
                metrics: meta.metrics,
                signature: meta.signature,
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
            kind: 'writing',
            eyebrow: 'BLOG',
            chips: ['Design note', 'Fadly Uzzaki'],
            path
        };
    }

    if (segments[0] === 'thoughts' && segments[1]) {
        return {
            title: segments[1].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
            description: 'An unprovoked thought by Fadly Uzzaki — essays on design, technology, and the spaces between.',
            color: '#F59E0B',
            kind: 'writing',
            eyebrow: 'THOUGHT',
            chips: ['Essay', 'Design', 'Technology'],
            path
        };
    }

    // Fallback
    return { ...DEFAULT_OG, path };
}

export { SITE_URL, DEFAULT_OG };
