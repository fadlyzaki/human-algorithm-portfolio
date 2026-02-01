export const SIDE_PROJECTS = [
    {
        id: 'interactive-workbook',
        title: 'Interactive Workbook',
        subtitle: 'Bimbel Geera Platform',
        desc: 'Solving the "feedback loop" in non-formal education.',
        tldr: "Bridging the gap between static textbooks and gamified learning via real-time sync.",
        sections: {
            challenge: "Traditional workbooks are 'write-only' memory. Teachers can't track progress until the book is collected, and students lose motivation without instant feedback.",
            approach: "A bilingual interface that syncs student inputs to a teacher dashboard in real-time. It’s not just a quiz app; it’s a digital workbook that respects the classroom workflow."
        },
        stack: ["React", "Firebase", "Tailwind CSS"],
        links: { demo: "https://buku-kerja-interaktif.web.app/", repo: "github.com/fadlyzaki/interactive-workbook" },
        iconName: 'BookOpen',
        featured: true,
        date: "August 2025",
        coverImage: "/interactive-workbook-cover.png",
        modules: [
            {
                title: "Introduction & Product Vision",
                content: "Interactive Workbook is a bilingual educational web app (Indonesian-English) designed to help Junior and Senior High School students improve their English conversational skills. It combines self-paced learning, gamification elements (inspired by Duolingo), and direct supervision by teachers in one interactive platform.\n\nVision: To transform the conventional learning experience from static printed books into a dynamic, fun, and easily trackable digital platform."
            },
            {
                title: "Problem & Solution",
                content: "The Problems:\n• Lack of Motivation: Students are often bored with traditional workbooks containing only static text.\n• Tracking Difficulty: Teachers struggle to monitor homework progress (like Duolingo progress) of dozens of students in real-time.\n• Fear of Speaking: Students need conversation guides that are more interactive than just reading scripts.\n\nThe Solution:\n• Integrated Multimedia: Includes Sing Along features with YouTube videos and chat-style interactive dialogues.\n• Firestore Integration: Uses a cloud database (Firebase Firestore) to save data instantly without page refreshes or complex manual processes.\n• Teacher Dashboard: Provides dedicated access for teachers to grade, comment, and monitor student XP/Streak centrally."
            },
            {
                title: "Target Users",
                content: "• Students (SMP & SMA): Primary users who complete learning units and monitor their ranking on the leaderboard.\n• Teachers/Tutors: Content managers responsible for manual grading and providing feedback to students."
            },
            {
                title: "Functional Requirements",
                content: "F1: Interface & Localization\n• Bilingual System: Toggle button to switch between Indonesian and English across all UI elements.\n• Responsive Design: Mobile-first UI optimized for all devices using Tailwind CSS.\n\nF2: Student User Flow\n• Session Identity: Students select their name and class to start (Sessions are temporary for shared privacy).\n• Learning Units (8 Units): Each unit consists of Sing Along, New Vocabulary, Dialogue Example, Speaking Practice, Duolingo Play (Input XP/Streak), and Self Reflection.\n• Leaderboard: Displays Top 10 Streak, Best Speakers, and Vocab Masters.\n\nF3: Teacher User Flow\n• Protected Access: Login via special access code.\n• Dashboard Tracker: Add new grading entries, duplicate rows for speed, and sync directly to Firestore."
            },
            {
                title: "Technical Specifications",
                content: "• Frontend: HTML5, Tailwind CSS (Styling), JavaScript ES6+ (Logic).\n• Database: Firebase Firestore (NoSQL) for real-time answer storage.\n• Visualization: Chart.js for XP progress charts.\n• Assets: YouTube API, Inline SVG & Emojis.\n• Hosting: Firebase Hosting."
            },
            {
                title: "Roadmap",
                content: "• V1.0: First stable release with Firestore integration (Completed).\n• V1.5: Permanent student login system via Firebase Auth.\n• V2.0: Automatic PDF certificate generation after 8 units.\n• V2.5: Push notifications for study streaks."
            }
        ]
    },
    {
        id: 'year-in-review',
        title: 'Year in Review',
        subtitle: 'Manual Data Visualization',
        desc: 'Privacy-first life analytics. Zero algorithms.',
        tldr: "Privacy-first analytics for your 'un-tracked' life wins.",
        sections: {
            challenge: "Algorithms track our consumption but ignore our creation. I wanted a way to visualize books read and miles run without handing data to a corporation.",
            approach: "A purely client-side generator. Upload JSON/CSV, pick from 12 editorial themes, and export high-res images. No database, just design tools."
        },
        stack: ["React", "TypeScript", "Canvas API"],
        links: { demo: "https://year-in-review-jak.vercel.app/", repo: "github.com/fadlyzaki/manual-wrapped" },
        iconName: 'Calendar',
        date: "December 2025",
        coverImage: "/year-in-review-cover.png",
        modules: [
            {
                title: "Executive Summary",
                content: "Vision: To empower users to turn their raw annual data into compelling, highly shareable visual stories.\n\nThe Opportunity: Users track data across multiple platforms but lack a unified, aesthetic way to visualize this \"life data.\" The Year in Review Generator bridges this gap via \"Story-first\" design (9:16 aspect ratio).\n\nStrategic Objectives:\n• Maximize Shareability: Frictionless flow from input to social share via \"Screenshot Mode\".\n• Visual Excellence: 12 diverse themes catering to different user personas.\n• Engineering Scalability: Transitioning to Domain-Driven Design to support mobile app integration."
            },
            {
                title: "Features & Roadmap",
                content: "A. Core Features\n• Smart Summary: Deterministic algorithm generating personalized summaries based on icon usage.\n• Data Persistence: Auto-save to localStorage.\n\nB. Visual Themes (12 Implemented)\n• Retro (8-Bit), Swiss (Typographic), Neon (Cyberpunk), Brutal (Neo-Brutalism), Blueprint (Technical), and more.\n\nC. Release 2.1 Improvements\n• Screenshot Mode: Hides all UI chrome for clean sharing.\n• Onboarding: 3-step guide for first-time users."
            },
            {
                title: "Architecture 2.0",
                content: "We are refactoring the monolithic prototype into a component-based structure to ensure maintainability and strict type safety.\n\nTech Stack:\n• React 18+ (Vite)\n• TypeScript (Strict)\n• Tailwind CSS\n• html2canvas\n\nKey Changes:\n• Domain-Driven Design: Separating components, hooks, and business logic.\n• Strict Typing: Defining contracts for `StatItem`, `HighlightItem`, and `ThemeConfig`."
            },
            {
                title: "Success Metrics",
                content: "• Technical Debt: Reduction in App.tsx lines of code (Target: < 200 LOC).\n• Performance: Lighthouse Performance Score > 95.\n• Share Rate: % of users who activate \"Screenshot Mode\"."
            }
        ]
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
        links: { demo: "https://uxdesign.cc/enhancing-online-shopping-experience-fbdbd76438e8", repo: "#" },
        iconName: 'Camera',
        featured: false,
        date: "May 2018",
        coverImage: "/filterme-cover.png",
        modules: [
            {
                title: "The Design Challenge",
                content: "This project began as an entry for the CHIuXID 2018 Design Challenge under the theme 'Designing for Intelligences'. Our team (SUX Team: Ifa, Kevin, Zaki) had a 3-week sprint to solve a problem in the online shopping experience.\n\nMethodology: Google Design Sprint (Understand -> Diverge -> Decide -> Prototype -> Validate)."
            },
            {
                title: "Define: The Realness Gap",
                content: "Through user surveys, we identified the single biggest pain point in e-commerce: The inability to validate the physical reality of a product.\n\n• \"Is this lipstick actually that shade of red?\"\n• \"Will these glasses fit my face shape?\"\n\nWe called this the 'Realness Gap'—the friction caused by the lack of touch and trial in the digital space."
            },
            {
                title: "Ideate: Shopping as a 'Story'",
                content: "We observed that our target demographic (Millennials) were heavy users of Snapchat and Instagram Stories. They were comfortable with AR filters and 'selfie' interactions.\n\n**Hypothesis:** What if we could bridge the Realness Gap by using the familiar mental model of 'Social Stories' for product trials?"
            },
            {
                title: "Solution: FilterMe",
                image: "/filterme-prototype.gif",
                content: "FilterMe is a concept feature where facial products (makeup, sunglasses, earrings) function as AR filters. Instead of looking at static photos, users open their camera and 'wear' the product instantly.\n\nKey Interaction:\n1. Browse products in a feed.\n2. Tap 'Try Filter' to launch the camera.\n3. Swipe left/right to change product variants (colors/styles).\n4. Buy directly from the AR view."
            },
            {
                title: "Validation & Learnings",
                content: "We prototyped the experience using Sketch and Principle (simulating facial tracking). Usability testing with 4 participants revealed:\n\n• High Engagement: Users found the 'fun factor' significantly higher than standard browsing.\n• The Trust Issue: While fun, users remained skeptical about color accuracy. \"It looks good as a filter, but will the real pigment match?\"\n\nVerdict: AR drives engagement and reduces hesitation, but it cannot fully replace the physical need for trust in color fidelity."
            }
        ]
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
        iconName: 'Heart',
        hidden: true,
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
        links: { demo: "flood.fadly.design", repo: "github.com/fadlyzaki/flood-alert" },
        iconName: 'AlertTriangle',
        hidden: true,
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
        links: { demo: "medium.com/procurement", repo: "github.com/fadlyzaki/procurement" },
        iconName: 'FileText',
        hidden: true,
        featured: false
    }
];

export const WORK_CLUSTERS = [
    {
        id: 'workforce',
        title: 'THE WORKFORCE ECOSYSTEM',
        company: 'Lumina',
        logo: '/logos/lumina-logo.png', // Lumina Logo
        subtitle: 'Humanizing Ops',
        companyFocus: {
            title: "Unique Context",
            icon: "Users",
            items: ["Blue Collar Users", "Android-First Market", "Offline-Ready UX"]
        },
        brandColor: '#1AA8B4', // Lumina Teal
        linkedinUrl: 'https://www.linkedin.com/company/luminatechnologies/about/',
        heroImage: '/workforce_hero.png',
        hook: 'Revolutionizing blue-collar recruitment through a highly engaged job community platform connecting hundreds of thousands of workers with SMEs.',
        miniDesc: 'First-of-its-kind job community platform for the working class. Helping tens of thousands of SMEs find suitable workers fast and easily.',
        stats: [
            { label: 'Role', value: 'Lead Product Designer' },
            { label: 'Timeline', value: 'May 2022 - Nov 2022' },
            { label: 'Impact', value: 'Scale & Reliability' },
            { label: 'Platform', value: 'Mobile app (android) & Websites' }
        ],
        projects: [
            {
                id: 'workforce-chat',
                title: 'In-App Chat & Candidate Tracker',
                tag: 'Communication',
                type: 'Mobile App',
                role: 'Lead Product Designer',
                timeline: '3 Months',
                route: '/case-study/workforce-chat',
                previewImage: '/workforce_hero.png',
                iconName: 'MessageSquare',
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
                    learnings: "This project taught me that 'features' don't solve problems; 'workflows' do. By mimicking the tool they already used (WhatsApp) but adding structure, I won adoption without training.",
                    aiHypothesis: {
                        tech: "LLM Agents & Sentiment Analysis",
                        title: "Auto-Negotiation Bot",
                        desc: "Instead of recruiters manually typing replies, an Agent would draft responses based on the candidate's sentiment and availability. It could schedule interviews automatically by syncing with calendar APIs.",
                        impact: "Response Time < 5 mins"
                    }
                }
            },
            {
                id: 'ats-dashboard',
                title: 'ATS Dashboard for HR',
                tag: 'Management',
                type: 'Web Dashboard',
                role: 'UI/UX Designer',
                timeline: '4 Months',
                route: '/case-study/ats-dashboard',
                previewImage: '/workforce_hero.png',
                iconName: 'Users',
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
                    learnings: "Replacing a spreadsheet is the hardest design challenge. You can't just be prettier; you have to be faster. I learned to respect the utility of a grid.",
                    aiHypothesis: {
                        tech: "RAG (Retrieval-Augmented Generation)",
                        title: "The 'Chief of Staff' Sidebar",
                        desc: "A natural language sidebar where HR can ask: 'Who are the top 3 drivers for East Jakarta?' The AI retrieves data from the pipeline and summarizes it, eliminating the need for complex filters.",
                        impact: "Data Retrieval Speed 10x"
                    }
                }
            },
            {
                id: 'direct-apply',
                title: 'Chat Your Employer',
                tag: 'Direct Access',
                type: 'Mobile Feature',
                role: 'Product Designer',
                timeline: '2 Months',
                route: '/case-study/direct-apply',
                previewImage: '/workforce_hero.png',
                iconName: 'MessageCircle',
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
                    learnings: "Lowering the barrier to entry increases volume, but you need checks for quality. Voice notes were the perfect middle ground—easy to send, but rich in signal.",
                    aiHypothesis: {
                        tech: "Audio-to-Structured-Data (Whisper)",
                        title: "Instant Resume Generator",
                        desc: "Candidates simply talk about their experience for 1 minute. The AI transcribes the audio, extracts skills/dates, and builds a formatted tabular resume automatically.",
                        impact: "Completion Rate +90%"
                    }
                }
            },
            {
                id: 'app-navigation',
                title: 'Main App (Navigation & Discovery)',
                tag: 'Core UX',
                type: 'App Architecture',
                role: 'Interaction Designer',
                timeline: 'Ongoing',
                route: '/case-study/app-navigation',
                previewImage: '/workforce_hero.png',
                iconName: 'Layout',
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
                    learnings: "Navigation is not just about structure; it's about confidence. If a user feels lost for 1 second, they are gone. I learned to count clicks like currency.",
                    aiHypothesis: {
                        tech: "Predictive UI",
                        title: "Zero-Click Discovery",
                        desc: "The app anticipates user intent based on time-of-day and location. If a user opens the app at 8 AM in a warehouse district, the 'Forklift Driver' jobs appear instantly on the home screen.",
                        impact: "Time-to-Apply -40%"
                    }
                }
            },
        ]
    },
    {
        id: 'commerce',
        title: 'THE COMMERCE ENGINE',
        company: 'GudangAda',
        logo: '/gudangada-logo.png', // Placeholder for company logo
        subtitle: 'Managing Scale',
        companyFocus: {
            title: "Scale Factor",
            icon: "TrendingUp",
            items: ["$100B B2B Market", "FMCG Supply Chain", "Fragmented Logistics"]
        },
        brandColor: '#00D1C7', // GudangAda Cyan
        linkedinUrl: 'https://www.linkedin.com/company/gudangada/about/',
        heroImage: '/commerce_hero.png',
        hook: 'Transforming Indonesia\'s B2B distribution chain through end-to-end digital solutions connecting principals, distributors, wholesalers, and retailers.',
        miniDesc: 'Building a B2B ecosystem to digitalize Indonesia\'s distribution chain with marketplace, logistics, merchant solutions, and financial services. Series B: $135M from Sequoia, Alpha JWC, and others.',
        stats: [
            { label: 'Role', value: 'Product Designer' },
            { label: 'Timeline', value: 'April 2020 - April 2022' },
            { label: 'Impact', value: 'Marketplace Liquidity' },
            { label: 'Platform', value: 'Web Dashboard & PWA' }
        ],
        projects: [
            {
                id: 'marketplace-checkout',
                title: 'Marketplace',
                tag: 'Transactions',
                type: 'Web Platform',
                role: 'Lead Designer',
                timeline: '6 Months',
                route: '/case-study/marketplace-checkout',
                previewImage: '/commerce_hero.png',
                iconName: 'ShoppingBag',
                details: { problem: 'Inefficient ordering process.', system: 'Streamlined checkout flow.', outcome: 'Cart abandonment -12%.' },
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "7 steps to buy a box of noodles? We had to fix the trust gap.",
                        heroImage: "/commerce_hero.png"
                    },
                    context: {
                        client: "GudangAda",
                        role: "I led the Checkout Squad",
                        timeline: "6 Months",
                        team: "4 PMs, 8 Engineers"
                    },
                    challenge: "Our checkout flow was a 7-step monster. Users were abandoning carts at a rate of 65% because they didn't trust that their money was safe. In B2B, 'trust' isn't just a feeling; it's a transaction guarantee.",
                    process: [
                        { title: "The Audit", desc: "I printed every screen of the checkout flow. It spanned 3 meters on the wall. We were asking for the same address 3 times." },
                        { title: "The Fight", desc: "Finance wanted to keep the 'safety checks'. I argued that friction *is* risk. If it's too hard, they leave." }
                    ],
                    insights: [
                        { title: "Payment Anxiety", desc: "I found that users only cared about one thing: 'Will I get my refund if this goes wrong?' We needed to front-load that assurance." }
                    ],
                    solution: [
                        { title: "3-Step Flow", desc: "I collapsed the 7 steps into 3: Cart, Payment, Confirmation. Radical simplification." },
                        { title: "Escrow Badge", desc: "I added a visual 'Money Back Guarantee' shield next to the Pay button. It increased conversion by 5% alone." }
                    ],
                    metrics: [
                        { label: "Cart Abandon", value: "-12%" },
                        { label: "Conversion", value: "+8%" },
                        { label: "AOV", value: "+15%" }
                    ],
                    learnings: "Trust is built in milliseconds. You can't ask for money if you look messy. A clean UI is a trustworthy UI.",
                    aiHypothesis: {
                        tech: "Predictive Fraud Detection",
                        title: "The 'Green Light' Checkout",
                        desc: "An AI analyzes the buyer's purchase history and creditworthiness in real-time. If they are trusted, they skip the 'Payment Proof' step entirely. Instant credit approval.",
                        impact: "Friction Reduced 100%"
                    }
                }
            },
            {
                id: 'brand-official-store',
                title: 'Official Store',
                tag: 'Branding',
                type: 'System Feature',
                role: 'System Designer',
                timeline: '3 Months',
                route: '/case-study/brand-official-store',
                previewImage: '/commerce_hero.png',
                iconName: 'ShieldCheck',
                details: { problem: 'Brands lacked identity.', system: 'Store builder engine.', outcome: 'Onboarded 50+ brands.' },
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "Giving Unilever and P&G their own real estate in a chaotic marketplace.",
                        heroImage: "/commerce_hero.png"
                    },
                    context: {
                        client: "Strategic Partnership",
                        role: "I designed the CMS",
                        timeline: "3 Months",
                        team: "Brand Team"
                    },
                    challenge: "Major FMCG principals refused to join our platform because they couldn't control their brand presence. They didn't want their premium soap listed next to a grainy photo of a dusty box.",
                    process: [
                        { title: "The Tension", desc: "Brands wanted 'microsites'. Engineering wanted 'standard templates'. I had to design a system that felt custom but was generated from a standard JSON schema." },
                        { title: "Modular Design", desc: "I created a drag-and-drop 'Store Builder' that allowed brands to arrange banners and carousels without writing code." }
                    ],
                    insights: [
                        { title: "Vanity Metrics", desc: "Brands cared more about 'Total Views' than 'Sales'. I highlighted traffic analytics in their dashboard to satisfy this need." }
                    ],
                    solution: [
                        { title: "Store Builder", desc: "A WYSIWYG editor for brand managers to customize their landing pages." },
                        { title: "Verified Badge", desc: "A visual tick that signaled 'Official Distributor', boosting trust for buyers." }
                    ],
                    metrics: [
                        { label: "Onboarded", value: "50+" },
                        { label: "GMV Uplift", value: "+22%" },
                        { label: "Brand NPS", value: "65" }
                    ],
                    learnings: "B2B buyers are still human. They gravitate towards 'polished' content because it signals reliability.",
                    aiHypothesis: {
                        tech: "Generative Design (StyleGAN)",
                        title: "Brand Asset Autopilot",
                        desc: "Brands upload 1 logo and 1 product image. The AI automatically generates 50 variations of banners, social posts, and store themes that adhere to their brand guidelines.",
                        impact: "Onboarding Time -90%"
                    }
                }
            },
            {
                id: 'promo-engine',
                title: 'Promo Center',
                tag: 'Marketing',
                type: 'Dashboard',
                role: 'UX Researcher',
                timeline: '2 Months',
                route: '/case-study/promo-engine',
                previewImage: '/commerce_hero.png',
                iconName: 'Tag',
                details: { problem: 'Complex discount logic.', system: 'Automated promo engine.', outcome: 'Utilization +25%.' },
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "Turning a math headache into a 1-click discount engine.",
                        heroImage: "/commerce_hero.png"
                    },
                    context: {
                        client: "Internal Tool",
                        role: "I simplified the Logic",
                        timeline: "2 Months",
                        team: "Growth Team"
                    },
                    challenge: "Our promo engine was so complex that account managers were using calculators to double-check the logic. We were seeing errors where discounts were stacking uncontrollably, causing loss.",
                    process: [
                        { title: "Logic Mapping", desc: "I mapped out the dependency tree of our discounts. It looked like a bowl of spaghetti." },
                        { title: "The Fix", desc: "I proposed a 'Stacking Rule' UI: Distinct categories (Shipping, Product, Bundle) that could not overlap." }
                    ],
                    insights: [
                        { title: "Fear of Loss", desc: "Users were terrified of 'accidental giveaways'. I added a 'Potential Loss' calculator that showed the max burn before they published." }
                    ],
                    solution: [
                        { title: "Promo Simulator", desc: "A tool that let AMs test their promo against a fake cart to see the final price." },
                        { title: "Rule Engine", desc: "Visual toggles for 'Combinable' vs 'Exclusive' promos." }
                    ],
                    metrics: [
                        { label: "Utilization", value: "+25%" },
                        { label: "Errors", value: "0%" },
                        { label: "Sales Spikes", value: "High" }
                    ],
                    learnings: "In complex systems, clarity is the best feature. If the user can't predict the outcome, the system is broken.",
                    aiHypothesis: {
                        tech: "Reinforcement Learning",
                        title: "Dynamic Discount Optimization",
                        desc: "Instead of fixed rules, the AI simulates 10,000 potential cart combinations to find the 'Sweet Spot' discount that maximizes volume without eroding margin. It accepts or rejects the promo for the user.",
                        impact: "Margin Protected +15%"
                    }
                }
            },
            {
                id: 'design-system-gudangada',
                title: 'GudangAda Design System',
                tag: 'Architecture',
                type: 'Design System',
                role: 'Design Ops',
                timeline: '1 Year',
                route: '/case-study/design-system-gudangada',
                previewImage: '/commerce_hero.png',
                iconName: 'Box',
                details: { problem: 'Inconsistent UI.', system: 'Unified React library.', outcome: 'Dev velocity +30%.' },
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "Ending the '50 Shades of Grey' button chaos.",
                        heroImage: "/commerce_hero.png"
                    },
                    context: {
                        client: "Infrastructure",
                        role: "I built the System",
                        timeline: "1 Year",
                        team: "All Designers"
                    },
                    challenge: "We had 15 different shades of blue and 4 different date pickers. Every new feature took 3 days just to style. Our design debt was slowing us down.",
                    process: [
                        { title: "Inventory", desc: "I collected every button in the app. Seeing them all in one place was the wake-up call management needed." },
                        { title: "Atomic Tokens", desc: "I defined the core variables: Color, Spacing, Typography. If it wasn't a token, it didn't exist." }
                    ],
                    insights: [
                        { title: "Dev First", desc: "I realized a design system isn't for designers; it's for developers. I wrote the documentation in their language (Props, API), not ours." }
                    ],
                    solution: [
                        { title: "UI Kit", desc: "A comprehensive Figma library with auto-layout components." },
                        { title: "React Library", desc: "A perfectly synced npm package. Design once, import everywhere." }
                    ],
                    metrics: [
                        { label: "Dev Velocity", value: "+30%" },
                        { label: "Code Size", value: "-15%" },
                        { label: "Consistency", value: "100%" }
                    ],
                    learnings: "A design system is a product, not a project. It needs maintenance, versioning, and a roadmap.",
                    aiHypothesis: {
                        tech: "Multimodal LLM (Vision-to-Code)",
                        title: "Screenshot-to-Component",
                        desc: "Designers upload a screenshot of a new UI pattern. The AI scans it against our existing component library and outputs the exact React code using our Design System tokens.",
                        impact: "Design Handoff 0m"
                    }
                }
            },
        ]
    },
    {
        id: 'efficiency',
        title: 'OPERATIONAL EFFICIENCY',
        company: 'STOQO',
        logo: '/stoqo-logo.png',
        subtitle: 'Digitizing Habits',
        companyFocus: {
            title: "Operational Reality",
            icon: "Truck",
            items: ["Perishable Goods", "Just-In-Time Delivery", "High-Churn Workforce"]
        },
        brandColor: '#FA6130', // Stoqo Orange
        linkedinUrl: 'https://www.linkedin.com/company/stoqo-technologies/about/',
        heroImage: '/efficiency_hero.png',
        hook: 'Streamlining the F&B supply chain to empower micro & small businesses with easy access to competitively-priced, quality ingredients.',
        miniDesc: 'B2B platform founded in 2017 to transform the F&B supply chain. Serving thousands of culinary businesses daily with reliable, competitively-priced ingredient deliveries so business owners can focus on growing their business.',
        stats: [
            { label: 'Role', value: 'Early Product Designer' },
            { label: 'Timeline', value: 'Mar 2018 - April 2020' },
            { label: 'Scope', value: 'Customer, Ops, Warehousing' },
            { label: 'Status', value: 'Closed (Covid-19)' }
        ],
        culture: {
            title: "The Arena",
            description: "I worked there as one of the early product designers, touching almost every product line—from customer-facing apps to complex warehousing logistics. We built a culture of 'Get Your Hands Dirty'.",
            images: [
                { src: "/hero-stoqo.jpg", caption: "Warehouse Visits", span: "col-span-1 md:col-span-2 row-span-2" },
                { src: "/case-studies/delivery-methods/mvimg-20190507.jpg", caption: "The Squad", span: "col-span-1 row-span-1" },
                { src: "/case-studies/delivery-methods/untitled-2.png", caption: "Usability Testing", span: "col-span-1 row-span-1" },
                { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", caption: "Townhall", span: "col-span-1 md:col-span-2 row-span-1" }
            ]
        },
        projects: [
            {
                id: 'stoqo-logistics',
                title: 'Transforming Logistics Delivery',
                tag: 'Logistics',
                type: 'Service Design',
                role: 'Product Designer',
                timeline: '2 Months',
                route: '/case-study/stoqo-logistics',
                previewImage: '/case-studies/delivery-methods/delivery-status-cover.png',
                iconName: 'Truck',
                details: { problem: 'Anxiety over unknown arrival.', system: 'Real-time Driver Tracking.', outcome: 'Support tickets -60%.' },
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "Solving the 'Where is my truck?' anxiety loop.",
                        heroImage: null
                    },
                    context: {
                        client: "STOQO Logistics",
                        role: "End-to-End Experience",
                        timeline: "2 Months",
                        team: "Ops & Engineering"
                    },
                    challenge: "I discovered a harsh reality: our users were waking up at 4 AM not to work, but to wait. Late deliveries weren't just an inconvenience; they were an existential threat. My challenge was to break this cycle of anxiety without having the budget to buy 100 new trucks.",
                    process: [
                        { title: "Methodology", desc: "I didn't trust the Jira tickets, so I rode in the delivery trucks. I saw drivers struggling to text while driving. The 'system' wasn't broken; it was dangerous.", image: "/case-studies/delivery-methods/screen-shot-2020.png" },
                        { title: "The Insight", desc: "Talking to 5 owners, I found the real conflict: It wasn't about speed. It was about silence. They could handle a late truck; they couldn't handle not knowing.", image: "/case-studies/delivery-methods/untitled.png" },
                        { title: "Field Study", desc: "I joined the Field Activators to see the chaos on the ground. This bridged the gap between 'Customer Complaints' and 'Operational Reality'.", image: "/case-studies/delivery-methods/img-20190502.jpg" },
                        { title: "Analysis Workshop", desc: "I facilitated the journey mapping session where we identified 4 pain points: Mental Model Mismatch, Uncertainty, Lack of Communication, and Lack of Awareness.", image: "/case-studies/delivery-methods/customer-app-board.jpg" },
                        { title: "Co-Creation", desc: "I didn't design in a silo. I led a full-day workshop with the Engineering and Ops leads to ensure technical feasibility wasn't an afterthought.", image: "/case-studies/delivery-methods/img-20190507.jpg" },
                        { title: "Ideation", desc: "The focus shifted to: 'How Might We manage user anxiety?'. The answer wasn't just 'faster trucks'—it was 'better information'.", image: "/case-studies/delivery-methods/customer-app-board-1.jpg" },
                        { title: "Validation", desc: "I took the high-fidelity prototypes back to the users for a 3-day testing sprint. Watching them struggle is the best validity test.", image: "/case-studies/delivery-methods/untitled-1.png" }
                    ],
                    insights: [
                        { title: "Psychology of Waiting", desc: "I learned that known waits feel shorter than unknown waits. Even a rough estimate calms the user." },
                        { title: "The 'Early' Problem", desc: "Surprisingly, drivers arriving too early was also a disruption. Customers weren't ready to receive goods at 3 AM if they expected 5 AM." }
                    ],
                    solution: [
                        { title: "Status Tracking", desc: "I stole the mental model from Domino's. If you can track a $10 pizza, why not a $500 pallet of rice?", image: "/case-studies/delivery-methods/tes.png" },
                        { title: "Proactive Push", desc: "I stopped waiting for them to ask. I designed notifications that triggered the moment the truck left the warehouse.", image: "/case-studies/delivery-methods/tes2.png" },
                        { title: "Driver Info", desc: "Secure contact info for the driver, giving users a direct line to their goods.", image: "/case-studies/delivery-methods/tes3.png" }
                    ],
                    metrics: [
                        { label: "Support Tix", value: "-60%" },
                        { label: "Trust", value: "+40%" },
                        { label: "Repeat Order", value: "+10%" }
                    ],
                    learnings: "Transparency is cheaper than speed. Users will wait if they know why. This project wasn't about UI; it was about selling 'peace of mind' as a feature.",
                    aiHypothesis: {
                        tech: "Computer Vision & IoT",
                        title: "Smart Loading Docks",
                        desc: "Cameras at the warehouse scan the volume of goods being loaded. The AI predicts the exact truck fill-rate and notifies the customer: 'Your order consumes 40% of the truck, arriving in 2 hours.'",
                        impact: "Capacity Usage +20%"
                    }
                }
            },
            {
                id: 'stoqo-sales',
                title: 'Incentive Sales Agent',
                tag: 'Gamification',
                type: 'Mobile App',
                role: 'UX Strategist',
                timeline: '3 Months',
                route: '/case-study/stoqo-sales',
                previewImage: '/efficiency_hero.png',
                iconName: 'Trophy',
                details: { problem: 'Low adoption of sales tools.', system: 'Gamified Streak System.', outcome: 'Daily Usage +40%.' },
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "Using video game mechanics to drive real-world sales.",
                        heroImage: "/efficiency_hero.png"
                    },
                    context: {
                        client: "Sales Force",
                        role: "I Gamified the App",
                        timeline: "3 Months",
                        team: "Sales Ops"
                    },
                    challenge: "Our field agents were unmotivated. They treated the app like a chore. Login rates were low, and data entry was sloppy. We needed to make the 'boring' work feel rewarding.",
                    process: [
                        { title: "User Interviews", desc: "I found that agents were highly competitive. They compared stats in their WhatsApp group. I needed to bring that competition into the app." },
                        { title: "Design Sprint", desc: "We tested leaderboards, badges, and streaks. Streaks won by a landslide." }
                    ],
                    insights: [
                        { title: "Loss Aversion", desc: "Agents worked harder to 'keep a streak' than to 'gain a bonus'. The psychology of loss is powerful." }
                    ],
                    solution: [
                        { title: "Daily Streak", desc: "A flame icon that grew hotter every day they hit their target. Breaking the streak felt painful." },
                        { title: "Regional Leaderboard", desc: "A live ranking of the top agents in their city. Bragging rights drove performance." }
                    ],
                    metrics: [
                        { label: "DAU", value: "+40%" },
                        { label: "Sales Vol", value: "+18%" },
                        { label: "Engagement", value: "High" }
                    ],
                    learnings: "Gamification isn't just badges. It's about tapping into intrinsic human drives: mastery, status, and fear of missing out.",
                    aiHypothesis: {
                        tech: "Personalized Coaching Agents",
                        title: "The 'Jarvis' for Sales",
                        desc: "An AI voice coach that listens to sales calls (privacy-safe) and gives real-time whispers: 'Talk slower', 'Mention the bundle discount now', 'They sound hesitant about price'.",
                        impact: "Conversion Rate +25%"
                    }
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
                iconName: 'Scan',
                details: { problem: 'Lost invoices.', system: 'OCR-assisted filing.', outcome: '90% paper reduction.' },
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "Killing the filing cabinet, one scan at a time.",
                        heroImage: "/efficiency_hero.png"
                    },
                    context: {
                        client: "Internal Ops",
                        role: "I envisioned the Future",
                        timeline: "1 Month",
                        team: "Solo Project"
                    },
                    challenge: "Our office was drowning in paper. Invoices, delivery orders, receipts. Things got lost, coffee got spilled, and data was dark.",
                    process: [
                        { title: "Observation", desc: "I watched the admin team spend 4 hours a day purely on data entry from paper visuals." },
                        { title: "Ideation", desc: "What if the camera was the keyboard? I mocked up an OCR flow that auto-filled the form." }
                    ],
                    insights: [
                        { title: "Trust the Machine", desc: "Users were skeptical of OCR accuracy. I designed a 'Confidence Score' UI that highlighted fields the AI wasn't sure about." }
                    ],
                    solution: [
                        { title: "Smart Scan", desc: "Point the camera at an invoice, and the app extracts the Date, Total, and Vendor." },
                        { title: "Digital Archive", desc: "A search bar that could find a receipt from 3 years ago in 2 seconds." }
                    ],
                    metrics: [
                        { label: "Paper Redux", value: "90%" },
                        { label: "Search Speed", value: "100x" },
                        { label: "Cost Save", value: "High" }
                    ],
                    learnings: "The future is inevitable, but it needs a bridge. The 'Confidence Score' was the bridge that let users trust the AI.",
                    aiHypothesis: {
                        tech: "Visual Document Understanding (VDU)",
                        title: "Semantic Search for Paper",
                        desc: "You can ask the system: 'Find me the invoice for the red chair we bought last May.' The AI visualizes the document and highlights the exact line item.",
                        impact: "Audit Speed 100x"
                    }
                }
            },
        ]
    }
];
