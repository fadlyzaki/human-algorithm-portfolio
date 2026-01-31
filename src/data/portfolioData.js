export const SIDE_PROJECTS = [
    {
        id: 'd1',
        title: 'Interactive Workbook',
        subtitle: 'Bimbel Geera Platform',
        desc: 'Solving the "feedback loop" in non-formal education.',
        tldr: "Bridging the gap between static textbooks and gamified learning via real-time sync.",
        sections: {
            challenge: "Traditional workbooks are 'write-only' memory. Teachers can't track progress until the book is collected, and students lose motivation without instant feedback.",
            approach: "A bilingual interface that syncs student inputs to a teacher dashboard in real-time. It’s not just a quiz app; it’s a digital workbook that respects the classroom workflow."
        },
        stack: ["React", "Firebase", "Tailwind CSS"],
        links: { demo: "https://buku-kerja-interaktif.web.app/", repo: "github.com/fadly/interactive-workbook" },
        featured: true
    },
    {
        id: 'd3',
        title: 'Year in Review',
        subtitle: 'Manual Data Visualization',
        desc: 'Privacy-first life analytics. Zero algorithms.',
        tldr: "Privacy-first analytics for your 'un-tracked' life wins.",
        sections: {
            challenge: "Algorithms track our consumption but ignore our creation. I wanted a way to visualize books read and miles run without handing data to a corporation.",
            approach: "A purely client-side generator. Upload JSON/CSV, pick from 12 editorial themes, and export high-res images. No database, just design tools."
        },
        stack: ["React", "TypeScript", "Canvas API"],
        links: { demo: "https://year-in-review-jak.vercel.app/", repo: "github.com/fadly/manual-wrapped" },
        featured: true
    },
    {
        id: 'filter-me',
        title: 'FilterMe',
        subtitle: 'AR Commerce Experiment',
        desc: 'Can AR filters replace physical touch?',
        tldr: "Can augmented reality bridge the physical trust gap used in beauty e-commerce?",
        sections: {
            challenge: "In beauty e-commerce, the 'Trust Gap' is massive. Users can't touch the product.",
            approach: "A 3-week design sprint using Face Mesh. We focused less on technical perfection and more on the 'Fun Factor'—making shopping feel like social media."
        },
        stack: ["Sketch", "Principle", "AR Design"],
        links: { demo: "#", repo: "#" },
        featured: false
    },
    {
        id: 'grab-merantau',
        title: 'Grab Merantau',
        subtitle: 'Cross-City Emotional Commerce',
        desc: 'Cross-city emotional wiring for the diaspora.',
        tldr: "Empowering the diaspora to care for family remotely via contextual food delivery.",
        sections: {
            challenge: "Sending food to parents in another city feels transactional. It lacks warmth and context.",
            approach: "Designed 'Merantau Mode' with an AI Concierge to recommend food based on texture (e.g., 'Soft meat for mom') and attach voice notes."
        },
        stack: ["UX Research", "Figma", "AI Concept"],
        links: { demo: "#", repo: "#" },
        featured: false
    },
    {
        id: 'flood-alert',
        title: 'Flood Alert',
        subtitle: 'Geospatial Disaster Response',
        desc: 'Zero-blindspot alerting for Jakarta floods.',
        tldr: "A real-time geospatial platform for monsoon season safety.",
        sections: {
            challenge: "Citizens often get flood alerts *after* water enters their homes. Standard routes often lead through other flooded areas.",
            approach: "Integrates BMKG/PetaBencana data for zero-blindspot alerting and safety-aware evacuation routing using PostGIS queries."
        },
        stack: ["Node.js", "PostGIS", "Flutter"],
        links: { demo: "flood.fadly.design", repo: "github.com/fadly/flood-alert" },
        featured: false
    },
    {
        id: 'procurement',
        title: 'Procurement Reform',
        subtitle: 'Civic Tech Action Plan',
        desc: 'A technical framework for government transparency.',
        tldr: "Empowering IT professionals to reform Indonesian government procurement.",
        sections: {
            challenge: "Government procurement is plagued by opacity. Jakarta-centric apps fail in rural Papua due to the 'Archipelago Effect'.",
            approach: "Combines 'Red Flag' data scraping with Offline-First PWA architectures to ensure accessibility in remote areas."
        },
        stack: ["Python", "Pandas", "PWA"],
        links: { demo: "medium.com/procurement", repo: "github.com/fadly/procurement" },
        featured: false
    }
];

export const WORK_CLUSTERS = [
    {
        id: 'workforce',
        title: 'THE WORKFORCE ECOSYSTEM',
        subtitle: 'Humanizing Ops',
        heroImage: '/workforce_hero.png', // Generated Artifact
        hook: 'Connecting blue-collar workers to jobs without digital friction.',
        miniDesc: 'Reduced cognitive load for users who are not tech-native. Built with strict simplicity.',
        projects: [
            {
                id: 'p1',
                title: 'In-App Chat & Candidate Tracker',
                tag: 'Communication',
                type: 'Mobile App',
                role: 'Lead Product Designer',
                timeline: '3 Months',
                route: '/case-study/protected',
                details: {
                    problem: 'Recruiters struggled to track 200+ candidate conversations per day.',
                    system: 'Built a low-friction, latency-friendly chat architecture.',
                    outcome: 'Reduced drop-off by 37%.'
                }
            },
            {
                id: 'p2',
                title: 'ATS Dashboard for HR',
                tag: 'Management',
                type: 'Web Dashboard',
                role: 'UI/UX Designer',
                timeline: '4 Months',
                route: '/case-study/protected',
                details: {
                    problem: 'Data fragmentation across spreadsheets.',
                    system: 'Unified dashboard with drag-and-drop pipelines.',
                    outcome: 'Hiring speed improved by 20%.'
                }
            },
            {
                id: 'p3',
                title: 'Chat Your Employer',
                tag: 'Direct Access',
                type: 'Mobile Feature',
                role: 'Product Designer',
                timeline: '2 Months',
                route: '/case-study/protected',
                details: {
                    problem: 'Candidates intimidated by formal applications.',
                    system: 'WhatsApp-like interface for formal requests.',
                    outcome: 'Application starts increased by 45%.'
                }
            },
            {
                id: 'p4',
                title: 'Main App (Navigation & Discovery)',
                tag: 'Core UX',
                type: 'App Architecture',
                role: 'Interaction Designer',
                timeline: 'Ongoing',
                route: '/case-study/protected',
                details: {
                    problem: 'Users getting lost in complex job filters.',
                    system: 'Simplified faceted search.',
                    outcome: 'Retention D1 increased by 15%'
                }
            },
        ]
    },
    {
        id: 'commerce',
        title: 'THE COMMERCE ENGINE',
        subtitle: 'Managing Scale',
        heroImage: '/commerce_hero.png', // Generated Artifact
        hook: 'Organizing the chaos of the B2B supply chain.',
        miniDesc: 'Scalable systems for massive SKU lists and complex transactions. Designed for reliability.',
        projects: [
            { id: 'p5', title: 'Marketplace', tag: 'Transactions', type: 'Web Platform', role: 'Lead Designer', timeline: '6 Months', route: '/case-study/protected', details: { problem: 'Inefficient ordering process.', system: 'Streamlined checkout flow.', outcome: 'Cart abandonment -12%.' } },
            { id: 'p6', title: 'Official Store', tag: 'Branding', type: 'System Feature', role: 'System Designer', timeline: '3 Months', route: '/case-study/protected', details: { problem: 'Brands lacked identity.', system: 'Store builder engine.', outcome: 'Onboarded 50+ brands.' } },
            { id: 'p7', title: 'Promo Center', tag: 'Marketing', type: 'Dashboard', role: 'UX Researcher', timeline: '2 Months', route: '/case-study/protected', details: { problem: 'Complex discount logic.', system: 'Automated promo engine.', outcome: 'Utilization +25%.' } },
            { id: 'p8', title: 'GudangAda Design System', tag: 'Architecture', type: 'Design System', role: 'Design Ops', timeline: '1 Year', route: '/case-study/protected', details: { problem: 'Inconsistent UI.', system: 'Unified React library.', outcome: 'Dev velocity +30%.' } },
        ]
    },
    {
        id: 'efficiency',
        title: 'OPERATIONAL EFFICIENCY',
        subtitle: 'Digitizing Habits',
        heroImage: '/efficiency_hero.png', // Generated Artifact
        hook: 'Helping SMEs transition from messy offline routines to stable digital workflows.',
        miniDesc: 'Behavior change through clarity, simplicity, and rhythm.',
        projects: [
            { id: 'p9', title: 'Delivery Methods', tag: 'Logistics', type: 'Service Design', role: 'Product Designer', timeline: '2 Months', route: '/case-study/protected', details: { problem: 'Unclear shipping costs.', system: 'Real-time tracking.', outcome: 'Tickets dropped 60%.' } },
            { id: 'p10', title: 'Incentive Sales Agent', tag: 'Gamification', type: 'Mobile App', role: 'UX Strategist', timeline: '3 Months', route: '/case-study/protected', details: { problem: 'Low motivation.', system: 'Streak-based reward dashboard.', outcome: 'DAU up 40%.' } },
            { id: 'p11', title: 'Paper-to-Paperless (Concept)', tag: 'Sustainability', type: 'Concept', role: 'Concept Artist', timeline: '1 Month', route: '/case-study/protected', details: { problem: 'Lost invoices.', system: 'OCR-assisted filing.', outcome: '90% paper reduction.' } },
        ]
    }
];
