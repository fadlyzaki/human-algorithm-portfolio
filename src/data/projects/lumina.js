
export const lumina = {
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
    subtitle_id: 'Memanusiakan Operasional',
    hook_id: 'Memberi martabat pada pencarian kerja. Platform komunitas yang memastikan pekerja kerah biru tidak merasa seperti sedang mengemis pekerjaan.',
    miniDesc_id: 'Membangun "LinkedIn" untuk pekerja tangan. Merancang sistem reputasi dan membangun praktik Design Ops untuk mengelola alur kerja freelance.',
    companyFocus_id: {
        title: "Konteks Unik",
        items: ["Pengguna Kerah Biru", "Pasar Android-First", "UX Siap Offline"]
    },
    motivation: "As a 'merantau' (migrant) worker myself, I share the pain of the blue-collar workforce, who are mostly migrants too. I decided to join this company to help build a system that respects their journey and dignity.",
    motivation_id: "Sebagai seorang perantau, saya merasakan peliknya kehidupan pekerja kerah biru yang mayoritas juga perantau. Saya bergabung untuk membantu membangun sistem yang menghargai perjuangan dan martabat mereka.",
    brandColor: '#1AA8B4', // Lumina Teal
    linkedinUrl: 'https://www.linkedin.com/company/luminatechnologies/about/',
    heroImage: '/work/lumina-hero.png',
    hook: 'Engineering dignity into the blue-collar job hunt. Reducing the cognitive load of application forms for millions of workers.',
    miniDesc: 'Building a "Trust Layer" for the blue-collar economy. Architected a reputation system and established Design Ops practices to manage freelance workflows.',
    stats: [
        { label: 'Role', value: 'Senior Product Designer' },
        { label: 'Teams', value: 'Recruiter ATS, Worker App, Design Ops' },
        { label: 'Timeline', value: 'May 2022 - Nov 2022' },
        { label: 'Impact', value: 'Workforce Accessibility' },
        { label: 'Platform', value: 'Mobile Apps & Website' }
    ],
    culture: {
        title: "The Arena",
        description: "High volume, low margin, fast pace. We shipped daily. I also established Design Ops practices: mentoring interns, conducting design reviews, and interviewing new hires. We weren't just building an app; we were building a livelihood. I also managed freelance designers to scale our assets. Every design decision was tested in the field, not just in Figma.",
        images: [
            { src: "/workforce_hero.png", caption: "Field Research", span: "col-span-1 md:col-span-2 row-span-2" },
            { src: "/workforce_hero.png", caption: "Driver Onboarding", span: "col-span-1 row-span-1" },
            { src: "/workforce_hero.png", caption: "Design Sprint", span: "col-span-1 row-span-1" },
            { src: "/workforce_hero.png", caption: "Townhall", span: "col-span-1 md:col-span-2 row-span-1" }
        ]
    },
    culture_id: {
        title: "Medan Juang",
        description: "Volume tinggi, margin rendah, cepat. Kami ship tiap hari. Saya juga membangun Design Ops: mementori magang, review desain, dan interview karyawan baru. Kami bukan cuma bikin aplikasi; kami bikin mata pencarian. Saya juga mengelola desainer freelance untuk skala aset. Setiap keputusan desain diuji di lapangan, bukan cuma di Figma."
    },
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
                problem: 'Candidates felt ignored by a silent, cold system.',
                system: 'A fast, informal chat interface that feels safe.',
                outcome: 'Turned "Applicants" into "Conversations".'
            },
            details_id: {
                problem: 'Kandidat merasa dicuekin sistem yang dingin.',
                system: 'Antarmuka chat santai yang terasa aman.',
                outcome: 'Mengubah "Pelamar" jadi "Percakapan".'
            },
            title_id: 'In-App Chat & Pelacak Kandidat',
            tag_id: 'Komunikasi',
            caseStudy: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "Like WhatsApp, but Organized",
                        text: "Imagine if your text messages were mixed up with work emails. It's messy. We built a special inbox that keeps them separate so no message gets lost."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Impact: Response Rate Boost",
                        text: "Led the redesigned candidate communication module. Solved a critical bottleneck where recruiters were overwhelmed by unstructured data. Result: Reduced time-to-hire by 3 days and improved candidate NPS by 78 points."
                    },
                    technical: {
                        label: "🤖 System",
                        title: "The Async/Sync Gap",
                        text: "Recruiters work in batches (Async), while candidates expect real-time responses (Sync). The challenge was bridging these two mental models without forcing behavior change."
                    }
                },
                snapshot: {
                    tagline: "Why do we treat recruitment like email when candidates live on WhatsApp?",
                    heroImage: "airy:flow"
                },
                context: {
                    client: "Internal Product",
                    role: "I led the UX & UI",
                    timeline: "3 Months",
                    team: "1 PM, 2 FE, 1 BE"
                },
                challenge: "Recruiters were drowning. Managing 200+ candidates via Excel and personal WhatsApp accounts meant data was scattered and response times averaged 4 days. Candidates were ghosting us because we were too slow.",
                process: [
                    { title: "The Shadow", desc: "I sat with 5 recruiters for a shift. I watched them copy-paste the same message 50 times. It wasn't a 'tracking' problem; it was a 'typing' problem.", image: "airy:timeline" },
                    { title: "The Conflict", desc: "Engineering wanted to build a ticketing system. I argued for a Chat interface. Tickets feel like work; Chat feels like a conversation.", image: "airy:venn" },
                    { title: "Prototyping", desc: "I built a 'Whatsapp-lookalike' prototype and verified it with actual blue-collar workers. If they could use WhatsApp, they could use this.", image: "airy:ui" }
                ],
                insights: [
                    { title: "Fear of Formality", desc: "I discovered that candidates ignored emails because they felt too formal. Chat felt safe. The medium was the message." },
                    { title: "Batching vs. Real-time", desc: "Recruiters work in batches; candidates work in real-time. I had to design a system that bridged this async/sync gap." }
                ],
                solution: [
                    { title: "Universal Inbox", desc: "I consolidated SMS, WhatsApp, and In-App messages into one unified thread. No more tab switching.", image: "airy:layers" },
                    { title: "One-Tap Speed", desc: "I designed 'Smart Templates' that allowed recruiters to send commonly used replies (e.g., 'Interview Scheduled') in a single tap.", image: "airy:flow" }
                ],
                metrics: [
                    { label: "Response Rate", value: "Significant Increase" },
                    { label: "Time-to-Hire", value: "Accelerated" },
                    { label: "NPS", value: "High Candidate Satisfaction" }
                ],
                learnings: "This project taught me that 'features' don't solve problems; 'workflows' do. By mimicking the tool they already used (WhatsApp) but adding structure, I won adoption without training.",
                designProcess: [
                    {
                        type: "research",
                        title: "The Shadow",
                        desc: "I sat with 5 recruiters for a shift. I watched them copy-paste the same message 50 times. It wasn't a 'tracking' problem; it was a 'typing' problem.",
                        title_id: "Observasi Langsung",
                        desc_id: "Saya duduk bareng 5 rekruter selama satu shift. Saya liat mereka copy-paste pesan yang sama 50 kali. Ini bukan masalah 'tracking', ini masalah 'ngetik'.",
                        image: "airy:timeline"
                    },
                    {
                        type: "insight",
                        title: "Fear of Formality",
                        desc: "I discovered that candidates ignored emails because they felt too formal. Chat felt safe. The medium was the message.",
                        title_id: "Takut Formalitas",
                        desc_id: "Kandidat nyuekin email karena terlalu formal. Chat terasa aman. Mediumnya adalah pesannya.",
                        image: "airy:venn"
                    },
                    {
                        type: "design",
                        title: "Prototyping",
                        desc: "I built a 'Whatsapp-lookalike' prototype and verified it with actual blue-collar workers. If they could use WhatsApp, they could use this.",
                        title_id: "Prototipe",
                        desc_id: "Saya bikin prototipe mirip WhatsApp dan verifikasi langsung sama pekerja kerah biru. Kalau mereka bisa pake WhatsApp, mereka pasti bisa pake ini.",
                        image: "airy:ui"
                    },
                    {
                        type: "ship",
                        title: "Universal Inbox",
                        desc: "I consolidated SMS, WhatsApp, and In-App messages into one unified thread. No more tab switching.",
                        title_id: "Inbox Terpadu",
                        desc_id: "Saya gabungin SMS, WhatsApp, dan In-App jadi satu thread. Gak perlu gonta-ganti tab lagi.",
                        image: "airy:layers"
                    },
                    {
                        type: "measure",
                        title: "Response Rate",
                        desc: "Recruiters saw a significant increase in response rates due to the familiar chat interface.",
                        title_id: "Rate Respon",
                        desc_id: "Rekruter melihat peningkatan signifikan dalam tingkat respon karena antarmuka chat yang familiar.",
                        image: "airy:chart"
                    }
                ],
                aiHypotheses: [
                    {
                        tech: "LLM Agents & Sentiment Analysis",
                        title: "Auto-Negotiation Bot",
                        desc: "Instead of recruiters manually typing replies, an Agent would draft responses based on the candidate's sentiment and availability. It could schedule interviews automatically by syncing with calendar APIs.",
                        impact: "Near-Instant Response"
                    },
                    {
                        tech: "Voice AI & Speech-to-Text",
                        title: "Voice-First Screening",
                        desc: "Candidates record voice answers to screening questions. AI transcribes, analyzes tone and confidence, and auto-generates a candidate summary score for recruiters.",
                        impact: "Drastic Screening Reduction"
                    },
                    {
                        tech: "Predictive Analytics & ML",
                        title: "Candidate Fit Predictor",
                        desc: "ML model trained on historical hiring data predicts which candidates are most likely to accept offers and stay long-term, helping recruiters prioritize high-value leads.",
                        impact: "Higher Offer Acceptance"
                    },
                    {
                        tech: "Voice-to-Action Agents",
                        title: "Interview on the Go",
                        desc: "Candidates can answer screening questions via voice note while commuting. AI transcribes, summarizes key competencies, and updates their profile capability match.",
                        impact: "Top-Tier Candidate Experience"
                    },
                    {
                        tech: "Large Reasoning Models (LRM)",
                        title: "Bias Auditor Bot",
                        desc: "A silent observer AI that flags potential unconscious bias in recruiter messages or job descriptions before they are sent, suggesting more inclusive phrasing.",
                        impact: "Improved Diversity Hiring"
                    }
                ]
            },
            caseStudy_id: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "Mirip WhatsApp, Tapi Rapi",
                        text: "Bayangkan kalau SMS pribadi campur sama email kerjaan. Pusing kan? Kita bikin inbox khusus biar pesan kerjaan gak ketimbun."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Dampak: Lonjakan Respon",
                        text: "Memimpin redesign modul komunikasi kandidat. Menyelesaikan bottleneck di mana rekruter kewalahan data tidak terstruktur. Hasil: Waktu rekrutmen turun drastis & kepuasan kandidat meningkat tajam."
                    },
                    technical: {
                        label: "🤖 Sistem",
                        title: "Celah Async/Sync",
                        text: "Rekruter kerja per-batch (Async), tapi kandidat mau respon real-time (Sync). Tantangannya: menjembatani dua model mental ini tanpa maksa ubah kebiasaan."
                    }
                },
                snapshot: {
                    tagline: "Kenapa rekrutmen kaku kayak email, padahal kandidat hidup di WhatsApp?",
                    heroImage: "/workforce_hero.png"
                },
                context: {
                    client: "Produk Internal",
                    role: "Lead UX & UI",
                    timeline: "3 Bulan",
                    team: "1 PM, 2 FE, 1 BE"
                },
                challenge: "Rekruter kewalahan. Ngurus 200+ kandidat cuma pake Excel sama WhatsApp pribadi bikin data berantakan dan respon jadi lambat banget (rata-rata 4 hari). Kandidat kabur gara-gara kita lelet.",
                process: [
                    { title: "Observasi Langsung", desc: "Saya duduk bareng 5 rekruter selama satu shift. Saya liat mereka copy-paste pesan yang sama 50 kali. Ini bukan masalah 'tracking', ini masalah 'ngetik'.", image: "airy:timeline" },
                    { title: "Konflik", desc: "Tim Engineering mau bikin sistem tiket. Saya ngotot minta antarmuka Chat. Tiket rasanya kayak kerjaan admin; Chat rasanya kayak ngobrol.", image: "airy:venn" },
                    { title: "Prototipe", desc: "Saya bikin prototipe mirip WhatsApp dan verifikasi langsung sama pekerja kerah biru. Kalau mereka bisa pake WhatsApp, mereka pasti bisa pake ini.", image: "airy:ui" }
                ],
                insights: [
                    { title: "Takut Formalitas", desc: "Kandidat nyuekin email karena terlalu formal. Chat terasa aman. Mediumnya adalah pesannya." },
                    { title: "Batch vs Real-time", desc: "Rekruter kerja numpuk (batching); kandidat maunya real-time. Saya harus desain sistem yang ngejembatanin kesenjangan ini." }
                ],
                solution: [
                    { title: "Inbox Terpadu", desc: "Saya gabungin SMS, WhatsApp, dan In-App jadi satu thread. Gak perlu gonta-ganti tab lagi.", image: "airy:layers" },
                    { title: "Kecepatan Satu Tap", desc: "Saya desain 'Template Pintar' buat jawaban umum (misal: 'Interview Dijadwalkan') cuma pake satu tap.", image: "airy:flow" }
                ],
                metrics: [
                    { label: "Rate Respon", value: "Meningkat Signifikan" },
                    { label: "Waktu Rekrut", value: "Lebih Cepat" },
                    { label: "NPS", value: "Kepuasan Tinggi" }
                ],
                learnings: "Proyek ini ngajarin saya kalo fitur gak nyelesain masalah; alur kerja (workflow) yang nyelesain. Dengan niru alat yang udah biasa mereka pake (WhatsApp) tapi dikasih struktur, saya dapet adopsi tanpa perlu training ribet.",
                aiHypotheses: [
                    {
                        tech: "Agen LLM & Analisa Sentimen",
                        title: "Bot Negosiasi Otomatis",
                        desc: "Daripada rekruter ngetik manual, Agen bakal nulis draft jawaban berdasarkan mood kandidat dan ketersediaan waktu. Bisa jadwalin interview otomatis lho.",
                        impact: "Waktu Respon Cepat"
                    },
                    {
                        tech: "Voice AI & Speech-to-Text",
                        title: "Screening Berbasis Suara",
                        desc: "Kandidat rekam jawaban suara untuk pertanyaan screening. AI transkripsi, analisa nada dan kepercayaan diri, dan auto-generate skor ringkasan kandidat untuk rekruter.",
                        impact: "Waktu Screening Berkurang Drastis"
                    },
                    {
                        tech: "Predictive Analytics & ML",
                        title: "Prediktor Kecocokan Kandidat",
                        desc: "Model ML yang dilatih dari data rekrutmen historis memprediksi kandidat mana yang kemungkinan besar terima offer dan bertahan lama, bantu rekruter prioritaskan lead bernilai tinggi.",
                        impact: "Penerimaan Offer Lebih Tinggi"
                    },
                    {
                        tech: "Voice-to-Action Agents",
                        title: "Wawancara Sambil Jalan",
                        desc: "Kandidat bisa jawab pertanyaan screening lewat voice note sambil di jalan. AI transkrip, ringkas kompetensi inti, dan update kecocokan profil.",
                        impact: "Pengalaman Kandidat Terbaik"
                    },
                    {
                        tech: "Model Penalaran Besar",
                        title: "Bot Auditor Bias",
                        desc: "AI pengamat diam yang menandai potensi bias bawah sadar di pesan rekruter atau deskripsi kerja sebelum dikirim, menyarankan bahasa yang lebih inklusif.",
                        impact: "Perekrutan Diversifikasi Meningkat"
                    }
                ]
            },
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
                problem: 'HR lost the human story in the spreadsheet grid.',
                system: 'Visual pipelines that respect the candidate.',
                outcome: 'Hiring became significantly faster & more humane.'
            },
            details_id: {
                problem: 'Cerita manusia hilang tertelan grid Excel.',
                system: 'Pipeline visual yang menghargai kandidat.',
                outcome: 'Rekrutmen jadi jauh lebih cepat & manusiawi.'
            },
            title_id: 'Dashboard ATS untuk HR',
            tag_id: 'Manajemen',
            caseStudy: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "Moving Cards, Not Cells",
                        text: "Big spreadsheets are hard to read. I made a board where you can drag and drop candidates like cards, so it's easy to see who is hired and who needs a follow-up."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Workflow Optimization",
                        text: "Redesigned the internal ATS to replace Excel-based tracking. Introduced a Kanban-style pipeline that improved data accuracy significantly and achieved full adoption among the HR team."
                    },
                    technical: {
                        label: "🤖 System",
                        title: "Centralized Data View",
                        text: "Replaced fragmented data sources with a centralized dashboard. Optimized information density for high-volume scanning and implemented bulk actions to reduce click-fatigue."
                    }
                },
                snapshot: {
                    tagline: "Replacing the 'Excel Comfort Blanket' with something better.",
                    heroImage: "airy:kanban"
                },
                context: {
                    client: "Internal Product",
                    role: "I designed the Dashboard",
                    timeline: "4 Months",
                    team: "2 Designers, 4 Devs"
                },
                challenge: "HR data was fragmented across 5 different tools and giant spreadsheets. The team couldn't answer simple questions like 'How many drivers did we hire today?' without a standardizing ease.",
                process: [
                    { title: "The Audit", desc: "I printed out the spreadsheets and highlighted every duplicate column. We were asking for the same data 4 times.", image: "airy:matrix" },
                    { title: "Friction", desc: "Users resisted the new dashboard. They loved Excel's flexibility. I had to prove that 'structure' was worth the loss of 'freedom'.", image: "airy:kanban" }
                ],
                insights: [
                    { title: "Density is King", desc: "Most dashboards drown in whitespace. HR users needed density. I designed for maximum information per vertical pixel." }
                ],
                solution: [
                    { title: "The Pipeline", desc: "I built a drag-and-drop Kanban board that visualized the candidate journey, instantly highlighting bottlenecks.", image: "airy:funnel" },
                    { title: "Bulk Acts", desc: "I realized users never act on one person at a time. I added 'Select All' actions to every stage.", image: "airy:data" }
                ],
                metrics: [
                    { label: "Efficiency", value: "Improved Recruiter Speed" },
                    { label: "Data Accuracy", value: "Near Perfect" },
                    { label: "Adoption", value: "Full Team Adoption" }
                ],
                learnings: "Replacing a spreadsheet is the hardest design challenge. You can't just be prettier; you have to be faster. I learned to respect the utility of a grid.",
                designProcess: [
                    {
                        type: "research",
                        title: "The Audit",
                        desc: "I printed out the spreadsheets and highlighted every duplicate column. We were asking for the same data 4 times.",
                        title_id: "Audit Total",
                        desc_id: "Saya print semua spreadsheet dan stabilo-in setiap kolom yang duplikat. Ternyata kami minta data yang sama sampe 4 kali.",
                        image: "airy:matrix"
                    },
                    {
                        type: "insight",
                        title: "Density is King",
                        desc: "Most dashboards drown in whitespace. HR users needed density. I designed for maximum information per vertical pixel.",
                        title_id: "Kepadatan itu Raja",
                        desc_id: "Kebanyakan dashboard modern kebanyakan ruang kosong (whitespace). User HR butuh kepadatan data. Saya desain supaya informasi maksimal per piksel.",
                        image: "airy:kanban"
                    },
                    {
                        type: "design",
                        title: "The Pipeline",
                        desc: "I built a drag-and-drop Kanban board that visualized the candidate journey, instantly highlighting bottlenecks.",
                        title_id: "Pipeline Visual",
                        desc_id: "Saya bikin papan Kanban drag-and-drop yang memvisualisasikan perjalanan kandidat. Langsung keliatan macetnya di mana.",
                        image: "airy:funnel"
                    },
                    {
                        type: "ship",
                        title: "Bulk Acts",
                        desc: "I realized users never act on one person at a time. I added 'Select All' actions to every stage.",
                        title_id: "Aksi Massal",
                        desc_id: "User gak pernah kerja satu-satu. Saya tambahin fitur 'Pilih Semua' (Select All) di setiap tahap.",
                        image: "airy:data"
                    },
                    {
                        type: "measure",
                        title: "Efficiency",
                        desc: "Recruiter speed improved significantly, with near-perfect data accuracy and full team adoption.",
                        title_id: "Efisiensi",
                        desc_id: "Kecepatan rekruter meningkat signifikan, dengan akurasi data hampir sempurna dan adopsi tim penuh.",
                        image: "airy:chart"
                    }
                ],
                aiHypotheses: [
                    {
                        tech: "RAG (Retrieval-Augmented Generation)",
                        title: "The 'Chief of Staff' Sidebar",
                        desc: "A natural language sidebar where HR can ask: 'Who are the top 3 drivers for East Jakarta?' The AI retrieves data from the pipeline and summarizes it, eliminating the need for complex filters.",
                        impact: "Instant Data Retrieval"
                    },
                    {
                        tech: "Computer Vision & Document AI",
                        title: "Auto-Resume Parsing",
                        desc: "AI extracts structured data from uploaded resumes (PDFs, images) automatically, populating candidate profiles without manual data entry. Handles Indonesian and English resumes.",
                        impact: "Eliminated Manual Entry"
                    },
                    {
                        tech: "Anomaly Detection & ML",
                        title: "Pipeline Health Monitor",
                        desc: "Real-time ML model detects unusual patterns like sudden drop-offs at specific stages, alerting HR to process bottlenecks before they impact hiring goals.",
                        impact: "Proactive Issue Detection"
                    },
                    {
                        tech: "Predictive attrition Modeling",
                        title: "Resignation Radar",
                        desc: "AI analyzes public activity (GitHub, LinkedIn) to predict which 'Passive' candidates are about to open to opportunities, alerting recruiters to reach out first.",
                        impact: "High First-to-Contact Rate"
                    },
                    {
                        tech: "Generative UI (GenUI)",
                        title: "Dynamic Pipeline View",
                        desc: "Instead of static columns, the dashboard rebuilds itself based on the recruiter's intent. 'Show me bottlenecks' transforms the UI into a heatmap of stalled candidates.",
                        impact: "Instant Insight Generation"
                    }
                ]
            },
            caseStudy_id: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "Geser Kartu, Bukan Sel",
                        text: "Spreadsheet raksasa itu susah dibaca. Saya bikin papan di mana HR bisa geser kandidat kayak kartu, jadi gampang lihat siapa yang udah direkrut."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Optimasi Alur Kerja",
                        text: "Merancang ulang ATS internal untuk menggantikan tracking berbasis Excel. Memperkenalkan pipeline gaya Kanban yang meningkatkan akurasi data dan mencapai adopsi tim sepenuhnya."
                    },
                    technical: {
                        label: "🤖 Sistem",
                        title: "Sentralisasi Data",
                        text: "Mengganti sumber data yang terfragmentasi dengan dashboard terpusat. Mengoptimalkan kepadatan informasi untuk scanning cepat dan mengimplementasikan aksi massal."
                    }
                },
                snapshot: {
                    tagline: "Ganti 'Selimut Nyaman' Excel dengan sesuatu yang lebih baik, tanpa bikin kaget.",
                    heroImage: "airy:kanban"
                },
                context: {
                    client: "Produk Internal",
                    role: "Desainer Dashboard",
                    timeline: "4 Bulan",
                    team: "2 Desainer, 4 Devs"
                },
                challenge: "Data HR berantakan di 5 tools beda dan spreadsheet raksasa. Tim gak bisa jawab pertanyaan simpel kayak 'Berapa driver yang kita rekrut hari ini?' tanpa pusing dulu.",
                process: [
                    { title: "Audit Total", desc: "Saya print semua spreadsheet dan stabilo-in setiap kolom yang duplikat. Ternyata kami minta data yang sama sampe 4 kali.", image: "airy:matrix" },
                    { title: "Friksi", desc: "User nolak dashboard baru. Mereka cinta banget fleksibilitas Excel. Saya harus buktiin kalau 'struktur' itu sepadan dengan hilangnya 'kebebasan'.", image: "airy:kanban" }
                ],
                insights: [
                    { title: "Kepadatan itu Raja", desc: "Kebanyakan dashboard modern kebanyakan ruang kosong (whitespace). User HR butuh kepadatan data. Saya desain supaya informasi maksimal per piksel." }
                ],
                solution: [
                    { title: "Pipeline Visual", desc: "Saya bikin papan Kanban drag-and-drop yang memvisualisasikan perjalanan kandidat. Langsung keliatan macetnya di mana.", image: "airy:funnel" },
                    { title: "Aksi Massal", desc: "User gak pernah kerja satu-satu. Saya tambahin fitur 'Pilih Semua' (Select All) di setiap tahap.", image: "airy:data" }
                ],
                metrics: [
                    { label: "Efisiensi", value: "Lebih Cepat" },
                    { label: "Akurasi Data", value: "Hampir Sempurna" },
                    { label: "Adopsi", value: "Adopsi Penuh" }
                ],
                learnings: "Gantiin Excel itu tantangan desain paling susah. Gak bisa cuma main cantik; harus lebih cepet. Saya belajar buat menghargai fungsi grid.",
                aiHypotheses: [
                    {
                        tech: "RAG (Retrieval-Augmented Generation)",
                        title: "Sidebar 'Chief of Staff'",
                        desc: "Sidebar chat di mana HR bisa tanya: 'Siapa 3 driver terbaik di Jakarta Timur?' AI bakal ambil data dari pipeline dan ngerangkum, gak perlu filter ribet lagi.",
                        impact: "Akses Data Instan"
                    },
                    {
                        tech: "Computer Vision & Document AI",
                        title: "Parsing CV Otomatis",
                        desc: "AI mengekstrak data terstruktur dari CV yang diupload (PDF, gambar) secara otomatis, mengisi profil kandidat tanpa input manual. Support CV Indonesia dan Inggris.",
                        impact: "Input Manual Dihapus"
                    },
                    {
                        tech: "Anomaly Detection & ML",
                        title: "Monitor Kesehatan Pipeline",
                        desc: "Model ML real-time mendeteksi pola tidak biasa seperti drop-off mendadak di tahap tertentu, alert HR tentang bottleneck proses sebelum impact hiring goals.",
                        impact: "Deteksi Masalah Proaktif"
                    },
                    {
                        tech: "Pemodelan Attrition Prediktif",
                        title: "Radar Resign",
                        desc: "AI analisis aktivitas publik (GitHub, LinkedIn) untuk prediksi kandidat 'Pasif' mana yang bakal terbuka sama peluang, ngasih tahu rekruter buat kontak duluan.",
                        impact: "Tingkat Kontak Pertama Tinggi"
                    },
                    {
                        tech: "Generative UI (GenUI)",
                        title: "Tampilan Pipeline Dinamis",
                        desc: "Alih-alih kolom statis, dashboard membangun ulang dirinya berdasarkan niat rekruter. 'Tunjukkan bottleneck' mengubah UI jadi heatmap kandidat yang macet.",
                        impact: "Insight Instan"
                    }
                ]
            },
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
                problem: 'Asking a driver for a CV creates panic, not data.',
                system: 'One-tap "Hello" instead of a 10-page form.',
                outcome: 'More people dared to apply.'
            },
            details_id: {
                problem: 'Minta CV ke supir bikin panik, bukan dapet data.',
                system: 'Cukup "Halo" sekali tap, bukan formulir 10 hal.',
                outcome: 'Lebih banyak orang berani melamar.'
            },
            title_id: 'Chat Your Employer',
            tag_id: 'Akses Langsung',
            caseStudy: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "Applying by Voice",
                        text: "Filling out forms on a phone is annoying. I changed it so you can just send a voice note to apply for a job. It's as easy as saying 'Hello'."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Removing Friction",
                        text: "Addressed high drop-off rates by replacing long forms with a chat-first application flow. This reduced friction significantly and increased application completion rates."
                    },
                    technical: {
                        label: "🤖 System",
                        title: "Audio-First Interface",
                        text: "Implemented an audio-first interface utilizing native media capabilities. Focused on reducing input latency and creating a conversational conversational UI pattern to replace static forms."
                    }
                },
                snapshot: {
                    tagline: "What if applying for a job was as easy as saying 'Hi'?",
                    heroImage: "airy:flow"
                },
                context: {
                    client: "Consumer App",
                    role: "I led the Product Design",
                    timeline: "2 Months",
                    team: "Growth Team"
                },
                challenge: "We had a 90% drop-off rate on our application forms. Blue-collar workers weren't comfortable typing out long resumes on mobile screens. The 'Resume Wall' was killing our growth.",
                process: [
                    { title: "Trust Audit", desc: "We mapped the entire user journey and identified 4 'Anxiety Spikes': Signup, Search, Cart, and Payment. The highest drop-off was at Payment.", image: "airy:funnel" },
                    { title: "Competitor Analysis", desc: "We looked at Tokopedia and Shopee. They all had 'Escrow' badges. B2B users expected consumer-grade safety.", image: "airy:venn" }
                ],
                insights: [
                    { title: "Trust Deficiency", desc: "Users didn't trust a faceless form. They trusted a person. I added 'Recruiter Avatars' to humanize the screen." }
                ],
                solution: [
                    { title: "One-Tap Apply", desc: "I replaced the 'Apply Now' form with a pre-filled message: 'Hi, I'm interested in this job.'.", image: "airy:flow" },
                    { title: "Voice Notes", desc: "For users who struggled with typing, I added a 'Record Audio' feature. It became the most used feature.", image: "airy:ui" }
                ],
                metrics: [
                    { label: "App Starts", value: "Boosted Volume" },
                    { label: "Completed", value: "Higher Completion" },
                    { label: "Trust", value: "High Candidate Trust" }
                ],
                learnings: "Lowering the barrier to entry increases volume, but you need checks for quality. Voice notes were the perfect middle ground—easy to send, but rich in signal.",
                designProcess: [
                    {
                        type: "research",
                        title: "Trust Audit",
                        desc: "We mapped the entire user journey and identified 4 'Anxiety Spikes': Signup, Search, Cart, and Payment. The highest drop-off was at Payment.",
                        title_id: "Taruhan",
                        desc_id: "Hipotesis saya: User bukan gak berkualitas, tapi kurang PD. Formulir rasanya kayak ujian. Chat rasanya kayak nyapa.",
                        image: "airy:funnel"
                    },
                    {
                        type: "insight",
                        title: "Trust Deficiency",
                        desc: "Users didn't trust a faceless form. They trusted a person. I added 'Recruiter Avatars' to humanize the screen.",
                        title_id: "Defisit Kepercayaan",
                        desc_id: "User gak percaya sama formulir tanpa wajah. Mereka percaya sama orang. Saya tambahin 'Avatar Rekruter' buat memanusiakan layar.",
                        image: "airy:venn"
                    },
                    {
                        type: "design",
                        title: "One-Tap Apply",
                        desc: "I replaced the 'Apply Now' form with a pre-filled message: 'Hi, I'm interested in this job.'.",
                        title_id: "Lamar Satu Tap",
                        desc_id: "Saya ganti formulir 'Apply Now' dengan pesan template: 'Halo, saya tertarik sama kerjaan ini.'.",
                        image: "airy:flow"
                    },
                    {
                        type: "ship",
                        title: "Voice Notes",
                        desc: "For users who struggled with typing, I added a 'Record Audio' feature. It became the most used feature.",
                        title_id: "Voice Notes",
                        desc_id: "Buat user yang susah ngetik, saya tambahin fitur 'Rekam Suara'. Jadi fitur paling laku.",
                        image: "airy:ui"
                    },
                    {
                        type: "measure",
                        title: "App Starts",
                        desc: "Boosted volume of applications and higher completion rates due to reduced friction.",
                        title_id: "Mulai Lamar",
                        desc_id: "Volume lamaran melonjak dan tingkat penyelesaian lebih tinggi karena pengurangan friksi.",
                        image: "airy:chart"
                    }
                ],
                aiHypotheses: [
                    {
                        tech: "Audio-to-Structured-Data (Whisper)",
                        title: "Instant Resume Generator",
                        desc: "Candidates simply talk about their experience for 1 minute. The AI transcribes the audio, extracts skills/dates, and builds a formatted tabular resume automatically.",
                        impact: "Rocketing Completion Rate"
                    },
                    {
                        tech: "NLP & Intent Classification",
                        title: "Smart Job Matching",
                        desc: "AI analyzes voice note content to understand candidate skills and preferences, then auto-suggests relevant job openings instead of requiring manual search.",
                        impact: "Better Job Matching"
                    },
                    {
                        tech: "Emotion AI & Tone Analysis",
                        title: "Candidate Confidence Scorer",
                        desc: "AI analyzes voice recordings for confidence, enthusiasm, and communication clarity, providing recruiters with soft-skill insights before interviews.",
                        impact: "Higher Quality Interviews"
                    },
                    {
                        tech: "Multimodal Resume Parsing",
                        title: "Portfolio-First Scanning",
                        desc: "For creative roles, AI ignores the text resume and scans the portfolio images/videos first, matching visual style and technical complexity to the job vibe.",
                        impact: "Better Quality Hires"
                    },
                    {
                        tech: "Real-time Translation & Cultural Adaptation",
                        title: "Border-Free Chat",
                        desc: "Enables seamless chat between a recruiter in Tokyo and a worker in Jakarta. Not just translation, but cultural nuance adjustment (politeness levels).",
                        impact: "Expanded Global Placement"
                    }
                ]
            },
            caseStudy_id: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "Melamar Pakai Suara",
                        text: "Isi formulir di HP itu ribet. Saya ubah jadi cukup kirim voice note buat melamar kerja. Segampang bilang 'Halo'."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Menghapus Hambatan",
                        text: "Mengatasi drop-off tinggi dengan mengganti formulir panjang jadi alur berbasis chat. Ini mengurangi friksi dan menaikkan tingkat penyelesaian lamaran secara signifikan."
                    },
                    technical: {
                        label: "🤖 Sistem",
                        title: "Antarmuka Audio-First",
                        text: "Mengimplementasikan antarmuka audio-first menggunakan kapabilitas media native. Fokus pada pengurangan latensi input dan membuat pola UI percakapan."
                    }
                },
                snapshot: {
                    tagline: "Gimana kalau ngelamar kerja itu segampang bilang 'Halo'?",
                    heroImage: "airy:flow"
                },
                context: {
                    client: "Aplikasi Konsumen",
                    role: "Lead Desain Produk",
                    timeline: "2 Bulan",
                    team: "Tim Growth"
                },
                challenge: "90% pelamar kabur pas liat formulir lamaran. Pekerja kerah biru gak nyaman ngetik CV panjang di layar HP. 'Tembok CV' ini membunuh pertumbuhan user kami.",
                process: [
                    { title: "Taruhan", desc: "Hipotesis saya: User bukan gak berkualitas, tapi kurang PD. Formulir rasanya kayak ujian. Chat rasanya kayak nyapa.", image: "airy:funnel" },
                    { title: "Pangkas Habis", desc: "Saya debatin buat hapus 80% kolom isian. Kita cuma butuh Nama dan Nomor HP buat mulai.", image: "airy:venn" }
                ],
                insights: [
                    { title: "Defisit Kepercayaan", desc: "User gak percaya sama formulir tanpa wajah. Mereka percaya sama orang. Saya tambahin 'Avatar Rekruter' buat memanusiakan layar." }
                ],
                solution: [
                    { title: "Lamar Satu Tap", desc: "Saya ganti formulir 'Apply Now' dengan pesan template: 'Halo, saya tertarik sama kerjaan ini.'.", image: "airy:flow" },
                    { title: "Voice Notes", desc: "Buat user yang susah ngetik, saya tambahin fitur 'Rekam Suara'. Jadi fitur paling laku.", image: "airy:ui" }
                ],
                metrics: [
                    { label: "Mulai Lamar", value: "Volume Naik" },
                    { label: "Selesai", value: "Penyelesaian Tinggi" },
                    { label: "Trust", value: "Kepercayaan Tinggi" }
                ],
                learnings: "Nurunin hambatan masuk ningkatin volume, tapi butuh filter kualitas. Voice note itu jalan tengah sempurna—gampang dikirim, tapi kaya info.",
                aiHypotheses: [
                    {
                        tech: "Audio-ke-Data-Terstruktur (Whisper)",
                        title: "Generator CV Instan",
                        desc: "Kandidat cukup ngomong soal pengalaman mereka selama 1 menit. AI bakal transkrip audio, ekstrak skill/tanggal, dan bikin CV rapi secara otomatis.",
                        impact: "Tingkat Penyelesaian Melonjak"
                    },
                    {
                        tech: "NLP & Klasifikasi Intent",
                        title: "Pencocokan Kerja Pintar",
                        desc: "AI menganalisa konten voice note untuk memahami skill dan preferensi kandidat, lalu auto-suggest lowongan relevan tanpa perlu cari manual.",
                        impact: "Akurasi Match Lebih Baik"
                    },
                    {
                        tech: "Emotion AI & Analisis Nada",
                        title: "Skor Kepercayaan Diri Kandidat",
                        desc: "AI menganalisa rekaman suara untuk kepercayaan diri, antusiasme, dan kejelasan komunikasi, memberikan insight soft-skill ke rekruter sebelum interview.",
                        impact: "Kualitas Interview Naik"
                    },
                    {
                        tech: "Parsing Resume Multimodal",
                        title: "Scanning Portfolio-First",
                        desc: "Buat posisi kreatif, AI abaikan teks resume dan scan gambar/video portofolio duluan, mencocokkan gaya visual dan kompleksitas teknis sama vibe kerjaan.",
                        impact: "Kualitas Hire Lebih Baik"
                    },
                    {
                        tech: "Transalasi & Adaptasi Budaya Real-time",
                        title: "Chat Tanpa Batas",
                        desc: "Memungkinkan chat mulus antara rekruter di Tokyo dan pekerja di Jakarta. Bukan cuma terjemahan, tapi penyesuaian nuansa budaya (tingkat kesopanan).",
                        impact: "Penempatan Global Meluas"
                    }
                ]
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
                problem: 'Getting lost in filters when you need a job today.',
                system: 'Visual-first discovery for rapid scanning.',
                outcome: 'Users found hope (jobs) much faster.'
            },
            details_id: {
                problem: 'Tersesat di filter saat butuh kerja hari ini juga.',
                system: 'Penemuan berbasis visual buat scanning cepat.',
                outcome: 'User nemu harapan (kerjaan) jauh lebih cepat.'
            },
            title_id: 'App Utama (Navigasi & Penemuan)',
            tag_id: 'UX Inti',
            caseStudy: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "No More Getting Lost",
                        text: "The app was like a maze. I knocked down the walls so you can find a job in just two clicks. I made everything use pictures instead of confusing words."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Navigation Redesign",
                        text: "Revamped core navigation based on card-sorting research. Flattened the hierarchy from 4 levels to 2, improving Day-1 retention significantly."
                    },
                    technical: {
                        label: "🤖 System",
                        title: "Shallow Routing",
                        text: "Redesigned the navigation structure to be shallow and icon-driven. Removed deep nesting to align with the 'visual-first' mental model of the user base."
                    }
                },
                snapshot: {
                    tagline: "Helping users find their way without a map.",
                    heroImage: "airy:ecosystem"
                },
                context: {
                    client: "Core Product",
                    role: "I redesigned the Navigation",
                    timeline: "Ongoing",
                    team: "Core Experience"
                },
                challenge: "Our analytics showed users were getting stuck in deep navigation trees and abandoning the app. We had over-engineered the category structure, assuming users knew exactly what they wanted. They didn't.",
                process: [
                    { title: "Card Sorting", desc: "I ran a card-sorting exercise with actual users. Their mental model was flat, not hierarchical.", image: "airy:hierarchy" },
                    { title: "Hard Choices", desc: "I had to convince the PMs to kill their favorite 'Advanced Search' features. Simplicity requires sacrifice.", image: "airy:funnel" }
                ],
                insights: [
                    { title: "Visual vs. Text", desc: "Our users were visual learners. They ignored text labels but clicked instantly on icons. I pivoted the design to be icon-first." }
                ],
                solution: [
                    { title: "Flat Hierarchy", desc: "I flattened the navigation depth from 4 levels to 2. Every job was now reachable in 2 taps.", image: "airy:layers" },
                    { title: "Visual Tags", desc: "I designed a distinct icon set for every job category, acting as visual anchors for scanning.", image: "airy:ecosystem" }
                ],
                metrics: [
                    { label: "Retention D1", value: "Improved Retention" },
                    { label: "Search Success", value: "High Success Rate" },
                    { label: "Bounce Rate", value: "Reduced Drop-offs" }
                ],
                learnings: "Navigation is not just about structure; it's about confidence. If a user feels lost for 1 second, they are gone. I learned to count clicks like currency.",
                designProcess: [
                    {
                        type: "research",
                        title: "Card Sorting",
                        desc: "I ran a card-sorting exercise with actual users. Their mental model was flat, not hierarchical.",
                        title_id: "Card Sorting",
                        desc_id: "Saya lakukan card-sorting dengan user asli. Mental model mereka itu datar (flat), bukan hirarkis macam pohon.",
                        image: "airy:hierarchy"
                    },
                    {
                        type: "insight",
                        title: "Visual vs. Text",
                        desc: "Our users were visual learners. They ignored text labels but clicked instantly on icons. I pivoted the design to be icon-first.",
                        title_id: "Visual vs Teks",
                        desc_id: "User kami adalah pembelajar visual. Mereka mengabaikan label teks tapi langsung klik ikon. Saya ubah desain jadi icon-first.",
                        image: "airy:venn"
                    },
                    {
                        type: "design",
                        title: "Flat Hierarchy",
                        desc: "I flattened the navigation depth from 4 levels to 2. Every job was now reachable in 2 taps.",
                        title_id: "Hirarki Datar",
                        desc_id: "Saya pangkas kedalaman navigasi dari 4 level jadi 2. Setiap lowongan kerja kini bisa dijangkau dalam 2 tap.",
                        image: "airy:layers"
                    },
                    {
                        type: "ship",
                        title: "Visual Tags",
                        desc: "I designed a distinct icon set for every job category, acting as visual anchors for scanning.",
                        title_id: "Tag Visual",
                        desc_id: "Saya desain set ikon unik untuk setiap kategori pekerjaan, berfungsi sebagai jangkar visual saat scanning cepat.",
                        image: "airy:ecosystem"
                    },
                    {
                        type: "measure",
                        title: "Retention D1",
                        desc: "Improved Day-1 retention and high search success rate with reduced bounce rates.",
                        title_id: "Retensi D1",
                        desc_id: "Meningkatkan retensi Hari-1 dan tingkat keberhasilan pencarian yang tinggi dengan penurunan bounce rate.",
                        image: "airy:chart"
                    }
                ],
                aiHypotheses: [
                    {
                        tech: "Predictive UI",
                        title: "Zero-Click Discovery",
                        desc: "The app anticipates user intent based on time-of-day and location. If a user opens the app at 8 AM in a warehouse district, the 'Forklift Driver' jobs appear instantly on the home screen.",
                        impact: "Faster Application Time"
                    },
                    {
                        tech: "Conversational AI & NLP",
                        title: "Voice-Driven Navigation",
                        desc: "Users can say 'Find me cleaning jobs near Tangerang' and the app instantly filters and displays results, eliminating the need for manual filter selection.",
                        impact: "Faster Navigation"
                    },
                    {
                        tech: "Behavioral Analytics & Personalization",
                        title: "Learning Home Screen",
                        desc: "The home screen dynamically reorganizes based on user behavior patterns, surfacing the most relevant categories and jobs without requiring any user input.",
                        impact: "Higher Engagement"
                    },
                    {
                        tech: "Behavioral Transformers",
                        title: "Morning vs Evening Mode",
                        desc: "AI learns that in the morning you check 'Status', but at night you check 'Jobs'. The home screen layout physically morphs to prioritize relevant modules based on time of day.",
                        impact: "Instant Access"
                    },
                    {
                        tech: "Voice Command Interface",
                        title: "Blue-Collar Hands-Free",
                        desc: "Designed for workers with dirty hands/gloves. 'Lumina, find me a driver job near here' triggers a full search and apply flow without touching the screen.",
                        impact: "Universal Access"
                    }
                ]
            }
        },
    ]
};
