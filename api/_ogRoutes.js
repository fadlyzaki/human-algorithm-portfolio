/**
 * Centralized route-to-metadata mapping for OG tags.
 * Used by both og-html.js (meta tags) and og.js (image generation).
 */

const SITE_URL = 'https://fadlyzaki-design.vercel.app';
const DEFAULT_OG = {
    title: 'Fadlyzaki Portfolio',
    description: "Product Designer · Systems Thinker. I don't chase chaos—I contain it.",
    color: '#10b981',
    emoji: '🧢'
};

// --- Static Pages ---
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

// --- Dynamic: Company Work Pages (/work/:id) ---
const WORK_ROUTES = {
    'commerce': {
        title: 'GudangAda — THE COMMERCE ENGINE',
        description: "Systematizing trust in a chaotic market. Designing fail-safe transaction flows for the $100B B2B supply chain.",
        color: '#2563EB'
    },
    'efficiency': {
        title: 'Stoqo — OPERATIONAL EFFICIENCY',
        description: "Designing for Operational Resilience. Ensuring the people who feed Jakarta have the information bandwidth to sleep until the truck arrives.",
        color: '#FA6130'
    },
    'workforce': {
        title: 'Lumina — THE WORKFORCE ECOSYSTEM',
        description: "Engineering dignity into the blue-collar job hunt. Reducing the cognitive load of application forms for millions of workers.",
        color: '#7C3AED'
    }
};

// --- Dynamic: Case Studies (/case-study/:id) ---
const CASE_STUDY_ROUTES = {
    'stoqo-logistics': {
        title: 'Transforming Logistics Delivery',
        description: "Solving the 'Where is my truck?' anxiety loop with real-time tracking.",
        color: '#FA6130',
        company: 'Stoqo'
    },
    'stoqo-sales': {
        title: 'Incentive Sales Agent',
        description: "Converting 'Confusion' into 'Commitment' via Clarity. Behavior design for field agents.",
        color: '#FA6130',
        company: 'Stoqo'
    },
    'paper-to-paperless': {
        title: 'Paper-to-Paperless',
        description: "Killing the filing cabinet, one scan at a time. OCR-powered operational digitization.",
        color: '#FA6130',
        company: 'Stoqo'
    },
    'marketplace-checkout': {
        title: 'Marketplace Checkout',
        description: "Designing the checkout flow for Indonesia's largest B2B supply chain marketplace.",
        color: '#2563EB',
        company: 'GudangAda'
    },
    'brand-official-store': {
        title: 'Brand Official Store',
        description: "Building trust between brands and retailers in a digital marketplace.",
        color: '#2563EB',
        company: 'GudangAda'
    },
    'promo-engine': {
        title: 'Promo Engine',
        description: "Designing a scalable promotion system for B2B commerce.",
        color: '#2563EB',
        company: 'GudangAda'
    },
    'design-system-gudangada': {
        title: 'Design System',
        description: "Building the atomic component library for GudangAda's product ecosystem.",
        color: '#2563EB',
        company: 'GudangAda'
    },
    'workforce-chat': {
        title: 'Workforce Chat',
        description: "Designing communication tools for blue-collar workers in the gig economy.",
        color: '#7C3AED',
        company: 'Lumina'
    },
    'ats-dashboard': {
        title: 'ATS Dashboard',
        description: "Applicant Tracking System redesign for high-volume hiring.",
        color: '#7C3AED',
        company: 'Lumina'
    },
    'direct-apply': {
        title: 'Direct Apply',
        description: "Reducing friction in blue-collar job applications.",
        color: '#7C3AED',
        company: 'Lumina'
    },
    'app-navigation': {
        title: 'App Navigation',
        description: "Redesigning the information architecture for a workforce platform.",
        color: '#7C3AED',
        company: 'Lumina'
    }
};

// --- Dynamic: Side Projects (/side-project/:id) ---
const SIDE_PROJECT_ROUTES = {
    'agency-pivot': {
        title: 'The "Agency" Pivot',
        description: "Giving the steering wheel back to your own attention span. Redesigning algorithms for user agency.",
        color: '#8B5CF6'
    },
    'price-lock': {
        title: 'Price Lock',
        description: "A 'pause button' for flight price inflation. Fintech feature for OTA.",
        color: '#F59E0B'
    },
    'project-kinship': {
        title: 'Project Kinship',
        description: "Bridging the gap between diaspora communities and their roots through technology.",
        color: '#EC4899'
    },
    'flood-alert': {
        title: 'Flood Alert',
        description: "A citizen-powered real-time flood warning system for Jakarta.",
        color: '#3B82F6'
    },
    'project-zen': {
        title: 'Project Zen',
        description: "Designing for digital well-being. A mindful content consumption experience.",
        color: '#10b981'
    },
    'filter-me': {
        title: 'FilterMe',
        description: "Fixing the 'Trust Gap' in cosmetics with AR. CHIuXID 2018 Design Challenge.",
        color: '#F97316'
    },
    'human-algorithm': {
        title: 'The Human Algorithm',
        description: "A self-aware portfolio built by AI agents. From 'Pixel Pushing' to 'System Orchestration'.",
        color: '#10b981'
    },
    'dolphi': {
        title: 'Dolphi',
        description: "AI-powered design exploration tool.",
        color: '#06B6D4'
    },
    'year-in-review': {
        title: 'Year In Review',
        description: "A data-driven annual reflection generator.",
        color: '#F59E0B'
    },
    'interactive-workbook': {
        title: 'Interactive Workbook',
        description: "A digital workbook for interactive learning experiences.",
        color: '#EC4899'
    },
    'productivity-illusion': {
        title: 'The Productivity Illusion',
        description: "Exposing the gap between perceived and actual productivity through data visualization.",
        color: '#EF4444'
    },
    'procurement': {
        title: 'Procurement System',
        description: "Designing a procurement ecosystem for operational efficiency.",
        color: '#8B5CF6'
    }
};

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
