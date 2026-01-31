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
        brandColor: '#1AA8B4', // Lumina Teal
        heroImage: '/workforce_hero.png',
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
                route: '/case-study/p1',
                previewImage: '/workforce_hero.png',
                details: {
                    problem: 'Recruiters struggled to track 200+ candidate conversations per day.',
                    system: 'Built a low-friction, latency-friendly chat architecture.',
                    outcome: 'Reduced drop-off by 37%.'
                },
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "Why do we treat recruitment like email when candidates live on WhatsApp?",
                        heroImage: "/workforce_hero.png"
                    },
                    context: {
                        client: "Internal Product",
                        role: "I led the UX & UI",
                        timeline: "3 Months",
                        team: "1 PM, 2 FE, 1 BE"
                    },
                    challenge: "Recruiters were drowning. Managing 200+ candidates via Excel and personal WhatsApp accounts meant data was scattered and response times averaged 4 days. Candidates were ghosting us because we were too slow.",
                    process: [
                        { title: "The Shadow", desc: "I sat with 5 recruiters for a shift. I watched them copy-paste the same message 50 times. It wasn't a 'tracking' problem; it was a 'typing' problem." },
                        { title: "The Conflict", desc: "Engineering wanted to build a ticketing system. I argued for a Chat interface. Tickets feel like work; Chat feels like a conversation." },
                        { title: "Prototyping", desc: "I built a 'Whatsapp-lookalike' prototype and verified it with actual blue-collar workers. If they could use WhatsApp, they could use this." }
                    ],
                    insights: [
                        { title: "Fear of Formality", desc: "I discovered that candidates ignored emails because they felt too formal. Chat felt safe. The medium was the message." },
                        { title: "Batching vs. Real-time", desc: "Recruiters work in batches; candidates work in real-time. I had to design a system that bridged this async/sync gap." }
                    ],
                    solution: [
                        { title: "Universal Inbox", desc: "I consolidated SMS, WhatsApp, and In-App messages into one unified thread. No more tab switching." },
                        { title: "One-Tap Speed", desc: "I designed 'Smart Templates' that allowed recruiters to send commonly used replies (e.g., 'Interview Scheduled') in a single tap." }
                    ],
                    metrics: [
                        { label: "Response Rate", value: "+45%" },
                        { label: "Time-to-Hire", value: "-3 Days" },
                        { label: "NPS", value: "78" }
                    ],
                    learnings: "This project taught me that 'features' don't solve problems; 'workflows' do. By mimicking the tool they already used (WhatsApp) but adding structure, I won adoption without training."
                }
            },
            {
                id: 'p2',
                title: 'ATS Dashboard for HR',
                tag: 'Management',
                type: 'Web Dashboard',
                role: 'UI/UX Designer',
                timeline: '4 Months',
                route: '/case-study/p2',
                previewImage: '/workforce_hero.png',
                details: {
                    problem: 'Data fragmentation across spreadsheets.',
                    system: 'Unified dashboard with drag-and-drop pipelines.',
                    outcome: 'Hiring speed improved by 20%.'
                },
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "Replacing the 'Excel Comfort Blanket' with something better.",
                        heroImage: "/workforce_hero.png"
                    },
                    context: {
                        client: "Internal Product",
                        role: "I designed the Dashboard",
                        timeline: "4 Months",
                        team: "2 Designers, 4 Devs"
                    },
                    challenge: "HR data was fragmented across 5 different tools and giant spreadsheets. The team couldn't answer simple questions like 'How many drivers did we hire today?' without a standardizing ease.",
                    process: [
                        { title: "The Audit", desc: "I printed out the spreadsheets and highlighted every duplicate column. We were asking for the same data 4 times." },
                        { title: "Friction", desc: "Users resisted the new dashboard. They loved Excel's flexibility. I had to prove that 'structure' was worth the loss of 'freedom'." }
                    ],
                    insights: [
                        { title: "Density is King", desc: "Most dashboards drown in whitespace. HR users needed density. I designed for maximum information per vertical pixel." }
                    ],
                    solution: [
                        { title: "The Pipeline", desc: "I built a drag-and-drop Kanban board that visualized the candidate journey, instantly highlighting bottlenecks." },
                        { title: "Bulk Acts", desc: "I realized users never act on one person at a time. I added 'Select All' actions to every stage." }
                    ],
                    metrics: [
                        { label: "Efficiency", value: "+20%" },
                        { label: "Data Accuracy", value: "99%" },
                        { label: "Adoption", value: "100%" }
                    ],
                    learnings: "Replacing a spreadsheet is the hardest design challenge. You can't just be prettier; you have to be faster. I learned to respect the utility of a grid."
                }
            },
            {
                id: 'p3',
                title: 'Chat Your Employer',
                tag: 'Direct Access',
                type: 'Mobile Feature',
                role: 'Product Designer',
                timeline: '2 Months',
                route: '/case-study/p3',
                previewImage: '/workforce_hero.png',
                details: {
                    problem: 'Candidates intimidated by formal applications.',
                    system: 'WhatsApp-like interface for formal requests.',
                    outcome: 'Application starts increased by 45%.'
                },
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "What if applying for a job was as easy as saying 'Hi'?",
                        heroImage: "/workforce_hero.png"
                    },
                    context: {
                        client: "Consumer App",
                        role: "I led the Product Design",
                        timeline: "2 Months",
                        team: "Growth Team"
                    },
                    challenge: "We had a 90% drop-off rate on our application forms. Blue-collar workers weren't comfortable typing out long resumes on mobile screens. The 'Resume Wall' was killing our growth.",
                    process: [
                        { title: "The Bet", desc: "I hypothesized that users didn't lack qualification; they lacked confidence. A form feels like a test. A chat feels like a hello." },
                        { title: "Trimming", desc: "I fought to remove 80% of the required fields. We only needed a name and a phone number to start." }
                    ],
                    insights: [
                        { title: "Trust Deficiency", desc: "Users didn't trust a faceless form. They trusted a person. I added 'Recruiter Avatars' to humanize the screen." }
                    ],
                    solution: [
                        { title: "One-Tap Apply", desc: "I replaced the 'Apply Now' form with a pre-filled message: 'Hi, I'm interested in this job.'." },
                        { title: "Voice Notes", desc: "For users who struggled with typing, I added a 'Record Audio' feature. It became the most used feature." }
                    ],
                    metrics: [
                        { label: "App Starts", value: "+45%" },
                        { label: "Completed", value: "+60%" },
                        { label: "Trust", value: "High" }
                    ],
                    learnings: "Lowering the barrier to entry increases volume, but you need checks for quality. Voice notes were the perfect middle ground—easy to send, but rich in signal."
                }
            },
            {
                id: 'p4',
                title: 'Main App (Navigation & Discovery)',
                tag: 'Core UX',
                type: 'App Architecture',
                role: 'Interaction Designer',
                timeline: 'Ongoing',
                route: '/case-study/p4',
                previewImage: '/workforce_hero.png',
                details: {
                    problem: 'Users getting lost in complex job filters.',
                    system: 'Simplified faceted search.',
                    outcome: 'Retention D1 increased by 15%'
                },
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "Helping users find their way without a map.",
                        heroImage: "/workforce_hero.png"
                    },
                    context: {
                        client: "Core Product",
                        role: "I redesigned the Navigation",
                        timeline: "Ongoing",
                        team: "Core Experience"
                    },
                    challenge: "Our analytics showed users were getting stuck in deep navigation trees and abandoning the app. We had over-engineered the category structure, assuming users knew exactly what they wanted. They didn't.",
                    process: [
                        { title: "Card Sorting", desc: "I ran a card-sorting exercise with actual users. Their mental model was flat, not hierarchical." },
                        { title: "Hard Choices", desc: "I had to convince the PMs to kill their favorite 'Advanced Search' features. Simplicity requires sacrifice." }
                    ],
                    insights: [
                        { title: "Visual vs. Text", desc: "Our users were visual learners. They ignored text labels but clicked instantly on icons. I pivoted the design to be icon-first." }
                    ],
                    solution: [
                        { title: "Flat Hierarchy", desc: "I flattened the navigation depth from 4 levels to 2. Every job was now reachable in 2 taps." },
                        { title: "Visual Tags", desc: "I designed a distinct icon set for every job category, acting as visual anchors for scanning." }
                    ],
                    metrics: [
                        { label: "Retention D1", value: "+15%" },
                        { label: "Search Success", value: "85%" },
                        { label: "Bounce Rate", value: "-10%" }
                    ],
                    learnings: "Navigation is not just about structure; it's about confidence. If a user feels lost for 1 second, they are gone. I learned to count clicks like currency."
                }
            },
        ]
    },
    {
        id: 'commerce',
        title: 'THE COMMERCE ENGINE',
        subtitle: 'Managing Scale',
        brandColor: '#00D1C7', // GudangAda Cyan
        heroImage: '/commerce_hero.png',
        hook: 'Organizing the chaos of the B2B supply chain.',
        miniDesc: 'Scalable systems for massive SKU lists and complex transactions. Designed for reliability.',
        projects: [
            {
                id: 'p5',
                title: 'Marketplace',
                tag: 'Transactions',
                type: 'Web Platform',
                role: 'Lead Designer',
                timeline: '6 Months',
                route: '/case-study/p5',
                previewImage: '/commerce_hero.png',
                details: { problem: 'Inefficient ordering process.', system: 'Streamlined checkout flow.', outcome: 'Cart abandonment -12%.' },
                caseStudy: {
                    locked: true,
                    memo: "The checkout flow had 7 steps. We cut it to 3. Friction implies lack of trust.",
                    metrics: [
                        { label: "Cart Abandon", value: "-12%" },
                        { label: "Conversion", value: "+8%" },
                        { label: "AOV", value: "+15%" }
                    ]
                }
            },
            {
                id: 'p6',
                title: 'Official Store',
                tag: 'Branding',
                type: 'System Feature',
                role: 'System Designer',
                timeline: '3 Months',
                route: '/case-study/p6',
                previewImage: '/commerce_hero.png',
                details: { problem: 'Brands lacked identity.', system: 'Store builder engine.', outcome: 'Onboarded 50+ brands.' },
                caseStudy: {
                    locked: true,
                    memo: "Brands wanted control. We gave them a CMS inside the marketplace.",
                    metrics: [
                        { label: "Onboarded", value: "50+" },
                        { label: "GMV Uplift", value: "+22%" },
                        { label: "Brand NPS", value: "65" }
                    ]
                }
            },
            {
                id: 'p7',
                title: 'Promo Center',
                tag: 'Marketing',
                type: 'Dashboard',
                role: 'UX Researcher',
                timeline: '2 Months',
                route: '/case-study/p7',
                previewImage: '/commerce_hero.png',
                details: { problem: 'Complex discount logic.', system: 'Automated promo engine.', outcome: 'Utilization +25%.' },
                caseStudy: {
                    locked: true,
                    memo: "Discounts were confusing. We built a 'Promo Calculator' to show exact savings.",
                    metrics: [
                        { label: "Utilization", value: "+25%" },
                        { label: "Errors", value: "0%" },
                        { label: "Sales Spikes", value: "High" }
                    ]
                }
            },
            {
                id: 'p8',
                title: 'GudangAda Design System',
                tag: 'Architecture',
                type: 'Design System',
                role: 'Design Ops',
                timeline: '1 Year',
                route: '/case-study/p8',
                previewImage: '/commerce_hero.png',
                details: { problem: 'Inconsistent UI.', system: 'Unified React library.', outcome: 'Dev velocity +30%.' },
                caseStudy: {
                    locked: true,
                    memo: "Every dev was reinventing the button. We standardized the atomic core.",
                    metrics: [
                        { label: "Dev Velocity", value: "+30%" },
                        { label: "Code Size", value: "-15%" },
                        { label: "Consistency", value: "100%" }
                    ]
                }
            },
        ]
    },
    {
        id: 'efficiency',
        title: 'OPERATIONAL EFFICIENCY',
        subtitle: 'Digitizing Habits',
        brandColor: '#FA6130', // Stoqo Orange
        heroImage: '/efficiency_hero.png',
        hook: 'Helping SMEs transition from messy offline routines to stable digital workflows.',
        miniDesc: 'Behavior change through clarity, simplicity, and rhythm.',
        projects: [
            {
                id: 'p9',
                title: 'Delivery Methods',
                tag: 'Logistics',
                type: 'Service Design',
                role: 'Product Designer',
                timeline: '2 Months',
                route: '/case-study/p9',
                previewImage: '/efficiency_hero.png',
                details: { problem: 'Unclear shipping costs.', system: 'Real-time tracking.', outcome: 'Tickets dropped 60%.' },
                caseStudy: {
                    locked: true,
                    memo: "Users were calling support just to ask 'Where is my truck?'. We put it on a map.",
                    metrics: [
                        { label: "Support Tix", value: "-60%" },
                        { label: "Trust", value: "+40%" },
                        { label: "Repeat Order", value: "+10%" }
                    ]
                }
            },
            {
                id: 'p10',
                title: 'Incentive Sales Agent',
                tag: 'Gamification',
                type: 'Mobile App',
                role: 'UX Strategist',
                timeline: '3 Months',
                route: '/case-study/p10',
                previewImage: '/efficiency_hero.png',
                details: { problem: 'Low motivation.', system: 'Streak-based reward dashboard.', outcome: 'DAU up 40%.' },
                caseStudy: {
                    locked: true,
                    memo: "Sales agents are competitive. We added leaderboards and daily streaks.",
                    metrics: [
                        { label: "DAU", value: "+40%" },
                        { label: "Sales Vol", value: "+18%" },
                        { label: "Engagement", value: "High" }
                    ]
                }
            },
            {
                id: 'p11',
                title: 'Paper-to-Paperless (Concept)',
                tag: 'Sustainability',
                type: 'Concept',
                role: 'Concept Artist',
                timeline: '1 Month',
                route: '/case-study/p11',
                previewImage: '/efficiency_hero.png',
                details: { problem: 'Lost invoices.', system: 'OCR-assisted filing.', outcome: '90% paper reduction.' },
                caseStudy: {
                    locked: true,
                    memo: "Paper gets lost. Digital is forever (and searchable).",
                    metrics: [
                        { label: "Paper Redux", value: "90%" },
                        { label: "Search Speed", value: "100x" },
                        { label: "Cost Save", value: "High" }
                    ]
                }
            },
        ]
    }
];
