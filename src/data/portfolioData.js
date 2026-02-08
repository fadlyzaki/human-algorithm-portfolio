export const SIDE_PROJECTS = [
    {
        id: 'human-algorithm',
        title: 'The Human Algorithm',
        subtitle: 'Recursive Portfolio',
        desc: 'The very site you are scrolling. Built with an Agentic workflow.',
        tldr: "A recursive portfolio built by an AI agent.",
        tldr_id: "Portofolio rekursif yang dibangun oleh agen AI.",
        desc_id: "Situs yang sedang Anda scroll ini. Dibangun dengan workflow Agentic.",
        title_id: 'The Human Algorithm',
        subtitle_id: 'Portofolio Rekursif',
        stack: ["React", "Gemini", "Cortex"],
        links: { demo: "#", repo: "https://github.com/fadlyzaki/human-algorithm-portfolio" },
        iconName: 'Cpu',
        featured: true,
        type: 'Meta-Project',
        date: "February 2026",
        coverImage: "/human-algorithm-cover.png",
        snapshot: {
            tagline: "Recursive Portfolio",
            heroImage: "/human-algorithm-cover.png"
        },
        context: {
            role: "Product Designer // Design Engineer",
            timeline: "February 2026",
            team: "Human + AI Agents (Gemini & Cortex)",
            client: "Personal"
        },
        challenge: "Building a portfolio that isn't just a container for work, but a demonstration of the 'Human Algorithm' itself—showcasing the messy, recursive collaboration between human creativity and AI execution.",
        process: [
            {
                title: "The Architect is an Agent",
                desc: "This portfolio wasn't just 'coded'; it was negotiated. I acted as the Product Lead, and my AI agents acted as the implementation team. We pair-programmed through complex routing logic, debated design system tokens, and refactored legacy code—all in natural language.",
                image: "/human-algorithm-cover.png" // Fallback
            },
            {
                title: "Recursive Design",
                desc: "The site is self-aware. It lists itself as a project. It uses a 'Chaos System' design language—glitch effects, scanlines, and raw data—to represent the 'ghost in the machine'. It's not just a showcase of work; it's a showcase of *how* we will work in the future."
            }
        ],
        insights: [
            {
                title: "Context over Code",
                desc: "The real stack wasn't React; it was the 'Context Window'. Maintaining the entire codebase in memory allowed for holistic refactors that would usually take days to complete in minutes."
            },
            {
                title: "Open Source by Default",
                desc: "We didn't hide the hallucinations or the bugs. The entire conversation history is public. This is a transparent look at the messy, beautiful reality of AI-assisted engineering."
            }
        ],
        solution: [
            {
                title: "The Artifact",
                desc: "A living, breathing system that evolves with each conversation.",
                image: "/human-algorithm-cover.png"
            }
        ],
        metrics: [
            { label: "Transparency", value: "100%" },
            { label: "AI Collaboration", value: "Deep" }
        ],
        learnings: "This project proved that AI isn't just a tool for generation, but for architecture and reasoning. The role of the designer is shifting from 'Pixel Pusher' to 'System Orchestrator'.",
        // ID Translations
        challenge_id: "Membangun portofolio yang bukan sekadar wadah karya, tapi demonstrasi 'Algoritma Manusia' itu sendiri—menampilkan kolaborasi rekursif yang berantakan antara kreativitas manusia dan eksekusi AI.",
        process_id: [
            {
                title: "Arsiteknya adalah Agen",
                desc: "Portofolio ini tidak hanya 'dikoding'; ini dinegosiasikan. Saya berperan sebagai Product Lead, dan agen AI saya bertindak sebagai tim implementasi. Kami melakukan pair-programming melewati logika routing yang rumit, mendebatkan token sistem desain, dan merefaktor kode lama—semuanya dalam bahasa manusia."
            },
            {
                title: "Desain Rekursif",
                desc: "Situs ini sadar diri. Ia mencantumkan dirinya sendiri sebagai proyek. Menggunakan bahasa desain 'Chaos System'—efek glitch, scanlines, dan data mentah—untuk merepresentasikan 'hantu di dalam mesin'. Ini bukan sekadar pameran karya; ini pameran tentang *bagaimana* kita akan bekerja di masa depan."
            }
        ],
        insights_id: [
            {
                title: "Konteks di atas Kode",
                desc: "Stack utamanya bukan React, tapi 'Context Window'. Mempertahankan seluruh basis kode dalam memori memungkinkan refaktor holistik yang biasanya memakan waktu berhari-hari selesai dalam hitungan menit."
            },
            {
                title: "Open Source Sejak Awal",
                desc: "Kami tidak menyembunyikan halusinasi atau bug. Seluruh riwayat percakapan bersifat publik. Ini adalah pandangan transparan pada realitas yang berantakan namun indah dari rekayasa berbantuan AI."
            }
        ],
        learnings_id: "Proyek ini membuktikan bahwa AI bukan hanya alat untuk generasi, tapi untuk arsitektur dan penalaran. Peran desainer bergeser dari 'Pendorong Piksel' menjadi 'Orkestrator Sistem'."
    },
    {
        id: 'interactive-workbook',
        title: 'Interactive Workbook',
        subtitle: 'Bimbel Geera Platform',
        desc: 'When a student feels lost, their cognitive load spikes. This tool reduces the "Fear of Failure" friction, making the struggle visible before they quit.',
        tldr: "Scaffolding the learning process to turn 'Silence' into 'Signal' for teachers.",
        tldr_id: "Mengubah kebisuan siswa yang tertinggal menjadi data real-time bagi guru.",
        desc_id: "Saat siswa merasa tertinggal, mereka diam. Tool ini membuat kesulitan mereka terlihat sebelum mereka menyerah.",
        title_id: 'Buku Kerja Interaktif',
        subtitle_id: 'Platform Bimbel Geera',
        stack: ["React", "Firebase", "Tailwind CSS"],
        links: { demo: "https://buku-kerja-interaktif.web.app/", repo: "github.com/fadlyzaki/interactive-workbook" },
        iconName: 'BookOpen',
        featured: true,
        type: 'Education',
        date: "August 2025",
        coverImage: "/interactive-workbook-cover.png",
        snapshot: {
            tagline: "Bimbel Geera Platform",
            heroImage: "/interactive-workbook-cover.png"
        },
        context: {
            role: "Product Designer",
            timeline: "August 2025",
            team: "Geera Education Team",
            client: "Internal Product"
        },
        challenge: "In every classroom, there is a student who knows the answer but stays silent. They are terrified of pronunciation mistakes or being 'seen' failing. Traditional workbooks are silent and static—they don't encourage.",
        process: [
            {
                title: "Why Raisa Stopped Raising Her Hand",
                desc: "We followed 'Raisa' (a persona based on real student interviews). She loves English songs but hates English class. Her fear: 'If I say it wrong, they will laugh.' Use case: She practices in the shower (safe) but freezes in class (unsafe).",
                image: "/interactive-workbook-cover.png"
            },
            {
                title: "A Safe Space to Stutter",
                desc: "We built a 'Digital Practice Room' where mistakes don't have an audience. 'Sing Along Mode' allows learning through melody, bypassing anxiety. 'Private Recording' lets students self-correct before the teacher ever hears it."
            }
        ],
        insights: [
            {
                title: "Teacher as Guide, Not Grader",
                desc: "For teachers, the dashboard isn't a grade book—it's a 'Confidence Monitor'. They can see who is trying (Streak) and who is struggling, intervening with encouragement rather than red ink."
            },
            {
                title: "Technical Empathy",
                desc: "We chose Firebase Realtime Database for its feedback loop. That millisecond of 'Ding! You did it!' is the dopamine hit they need to keep going."
            }
        ],
        solution: [
            {
                title: "Confidence Dashboard",
                desc: "Real-time view of student attempts and struggles.",
                image: "/interactive-workbook-status.png"
            }
        ],
        metrics: [
            { label: "Engagement", value: "High" },
            { label: "Anxiety", value: "Reduced" }
        ],
        learnings: "It's not about perfect grammar; it's about the courage to speak. Technology should lower the stakes of failure, not raise them.",
        challenge_id: "Di setiap kelas, ada siswa yang tahu jawabannya tapi diam. Mereka takut salah ucap atau 'terlihat' gagal. LKS tradisional itu diam dan statis—mereka tidak menyemangati.",
        process_id: [
            {
                title: "Kenapa Raisa Berhenti Tunjuk Tangan",
                desc: "Kami mengikuti 'Raisa' (persona dari interview siswa). Dia takut: 'Kalau salah ngomong, diketawain.' Dia latihan di kamar mandi (aman) tapi membeku di kelas (tidak aman)."
            },
            {
                title: "Ruang Aman untuk Terbata-bata",
                desc: "Kami bangun 'Ruang Latihan Digital' tanpa penonton. Mode 'Sing Along' untuk belajar lewat melodi. 'Rekaman Pribadi' untuk koreksi mandiri sebelum didengar guru."
            }
        ],
        insights_id: [
            {
                title: "Guru sebagai Pemandu",
                desc: "Dashboard ini bukan buku nilai, tapi 'Monitor Kepercayaan Diri'. Guru bisa lihat siapa yang berjuang dan memberi semangat, bukan tinta merah."
            },
            {
                title: "Empati Teknis",
                desc: "Firebase Realtime dipilih untuk feedback loop instan. Suara 'Ting!' saat berhasil adalah dopamin yang mereka butuhkan."
            }
        ],
        learnings_id: "Ini bukan soal grammar sempurna; tapi soal keberanian bicara. Teknologi harus menurunkan risiko kegagalan, bukan menaikkannya."
    },
    {
        id: 'year-in-review',
        title: 'Year in Review',
        subtitle: 'Manual Data Visualization',
        desc: 'Your memories shouldn\'t be held hostage by an algorithm. A manual celebration of the life you actually lived.',
        tldr: "Reclaiming the joy of 'remembering' from the automated feed.",
        tldr_id: "Merebut kembali kegembiraan 'mengenang' dari feed otomatis.",
        desc_id: "Kenanganmu tak seharusnya disandera algoritma. Perayaan manual atas hidup yang benar-benar kamu jalani.",
        title_id: 'Year in Review',
        subtitle_id: 'Visualisasi Data Manual',
        stack: ["React", "TypeScript", "Canvas API"],
        links: { demo: "https://year-in-review-jak.vercel.app/", repo: "github.com/fadlyzaki/manual-wrapped" },
        iconName: 'Calendar',
        type: 'DataViz',
        date: "December 2025",
        coverImage: "/year-in-review-cover.png",
        snapshot: {
            tagline: "Manual Data Visualization",
            heroImage: "/year-in-review-cover.png"
        },
        context: {
            role: "Creator",
            timeline: "December 2025",
            team: "Solo Project",
            client: "Public"
        },
        challenge: "Spotify Wrapped is fun, but it's a corporate summary of your consumption. It doesn't know about the breakup, the new puppy, or the night you quit your job. We outsourced our memories to platforms that optimize for engagement, not reflection.",
        process: [
            {
                title: "Designing for Nostalgia",
                desc: "We built a tool that asks: 'What actually happened?' The Input is manual—no APIs. The Friction is the point; typing forces reflection."
            },
            {
                title: "Visualizing the Invisible",
                desc: "How do you visualize 'Heartbreak'? We created abstract 'Aura Themes'. Neon for chaos, Blueprint for structure, Soft Focus for healing."
            }
        ],
        insights: [
            {
                title: "The 'Share' Paradox",
                desc: "People want privacy but love to perform. 'Screenshot Mode' strips the UI, allowing users to perform vulnerability on Instagram Stories while reclaiming the aesthetic for their own narrative."
            }
        ],
        solution: [
            { title: "Manual Entry Interface", desc: "A quiet space to remember." },
            { title: "The Output", desc: "Shareable artifacts of personal history." }
        ],
        metrics: [],
        learnings: "Your memories shouldn't be held hostage by an algorithm.",
        challenge_id: "Spotify Wrapped itu seru, tapi itu sekadar rangkuman korporat konsumsimu. Ia tak tahu soal putus cinta atau anjing barumu. Kita menyerahkan ingatan pada platform yang peduli engagement, bukan refleksi.",
        process_id: [
            {
                title: "Mendesain Nostalgia",
                desc: "Alat yang bertanya: 'Apa yang sebenarnya terjadi?' Input manual, tanpa API. Friksi mengetik itu memaksa refleksi."
            },
            {
                title: "Memvisualisasikan yang Tak Terlihat",
                desc: "Gimana visualisasi 'Patah Hati'? Kami buat 'Tema Aura': Neon untuk chaos, Blueprint untuk struktur, Soft Focus untuk penyembuhan."
            }
        ],
        insights_id: [
            {
                title: "Paradoks 'Share'",
                desc: "Orang ingin privasi tapi suka tampil. 'Screenshot Mode' membuang UI, memvalidasi user untuk memamerkan kerentanan mereka dengan estetika yang mereka kontrol."
            }
        ],
        learnings_id: "Kenanganmu tak seharusnya disandera algoritma."
    },

    {
        id: 'grab-merantau',
        title: 'Grab Merantau',
        subtitle: 'Emotional Remittance',
        desc: 'Redefining the "Remittance" flow for the Southeast Asian diaspora. Sending care, not just cash.',
        desc_id: 'Mendefinisikan ulang arus "Remitansi" bagi diaspora Asia Tenggara. Mengirim perhatian, bukan cuma uang.',
        tldr: "Bridging the emotional gap for 5M+ migrant workers who support families back home.",
        tldr_id: "Menjembatani jarak emosional bagi 5 juta+ pekerja migran yang menafkahi keluarga di kampung.",
        snapshot: {
            tagline: "Emotional Remittance",
            heroImage: "/grab-merantau-cover.png" // Mock
        },
        context: {
            role: "Service Designer",
            timeline: "March 2026",
            team: "Solo / Concept",
            client: "Hackathon"
        },
        challenge: "Migrant workers (TKW/TKI) send billions in remittance, but the process is transactional and cold. They often feel disconnected from the daily impact of their support. Money says 'I support you', but not 'I miss you'.",
        process: [
            {
                title: "Digital Ethnography",
                desc: "Interviews with 5 migrant workers in Hong Kong revealed a pattern: they video call while their family eats, just to feel present."
            }
        ],
        insights: [
            {
                title: "The Care Package Paradox",
                desc: "Workers prefer sending goods (packages) over cash because it feels more personal, but logistics are slow and expensive."
            }
        ],
        solution: [
            {
                title: "Merantau Mode",
                desc: "A contextual layer on the Superapp that allows cross-border food delivery with voice-notes, turning a financial transaction into a care package."
            }
        ],
        metrics: [
            { label: "Emotional Connection", value: "High" }
        ],
        learnings: "Fintech products often ignore the emotional context of money.",
        challenge_id: "Pekerja migran (TKW/TKI) kirim miliaran remitansi, tapi prosesnya transaksional dan dingin. Uang bilang 'Aku nafkahi kamu', tapi gak bilang 'Aku kangen kamu'.",
        process_id: [
            {
                title: "Etnografi Digital",
                desc: "Interview dengan 5 TKW di Hong Kong mengungkap pola: mereka video call saat keluarga makan, demi merasa hadir."
            }
        ],
        insights_id: [
            {
                title: "Paradoks Paket",
                desc: "Pekerja lebih suka kirim barang daripada tunai karena terasa lebih personal, tapi logistik mahal dan lama."
            }
        ],
        solution_id: [
            {
                title: "Mode Merantau",
                desc: "Layer kontekstual di Superapp buat kirim makanan lintas-negara pakai voice-note. Ubah transaksi jadi perhatian."
            }
        ],
        learnings_id: "Produk fintech sering melupakan konteks emosional dari uang.",
        stack: ["UX Research", "Service Design", "Fintech"],
        links: { demo: "#", repo: "#" },
        iconName: 'Heart',
        type: 'Service Design',
        hidden: false,
        featured: false
    },
    {
        id: 'flood-alert',
        title: 'Flood Alert',
        subtitle: 'Civic Resilience System',
        desc: 'A hyper-local disaster response system for Jakarta\'s monsoon season.',
        desc_id: 'Sistem respon bencana hyper-local untuk musim hujan Jakarta.',
        tldr: "Zero-blindspot geospatial alerting during critical flood events.",
        tldr_id: "Peringatan geospasial tanpa blindspot selama kejadian banjir kritis.",
        snapshot: {
            tagline: "Civic Resilience System",
            heroImage: "/flood-alert-cover.png"
        },
        context: {
            role: "IoT Engineer",
            timeline: "Flash Project",
            team: "Solo",
            client: "Jakarta Smart City (Unofficial)"
        },
        challenge: "Jakarta sinks 10cm/year. Traditional alerts are city-wide and vague, leaving citizens trapped in 'blindspot' neighborhoods during flash floods.",
        process: [
            {
                title: "Mapping the Blindspots",
                desc: "Government sensors cover major rivers, but micro-drainage in slums is unmonitored. We needed crowdsourced data."
            }
        ],
        insights: [
            {
                title: "Trust in Neighbors",
                desc: "People trust their neighbors more than the government during disasters. A P2P verification system was essential."
            }
        ],
        solution: [
            {
                title: "Waze for Disasters",
                desc: "Built using PostGIS & Node.js. It aggregates government sensor data and crowdsouces reports to generate safe evacuation routes in real-time."
            }
        ],
        metrics: [],
        learnings: "In disaster UI, 'Red' is not enough. You need specific, actionable directives.",
        challenge_id: "Jakarta tenggelam 10cm/tahun. Peringatan tradisional terlalu umum, membuat warga terjebak di area 'blindspot' saat banjir bandang.",
        process_id: [
            {
                title: "Memetakan Blindspot",
                desc: "Sensor pemerintah cuma cover sungai besar. Got mikro di pemukiman gak terpantau. Butuh data crowdsource."
            }
        ],
        insights_id: [
            {
                title: "Percaya Tetangga",
                desc: "Orang lebih percaya tetangga daripada pemerintah saat bencana. Sistem verifikasi P2P itu krusial."
            }
        ],
        solution_id: [
            {
                title: "Waze untuk Bencana",
                desc: "Dibangun pakai PostGIS & Node.js. Agregasi data sensor dan laporan warga buat rute evakuasi real-time."
            }
        ],
        learnings_id: "Dalam UI bencana, warna 'Merah' aja gak cukup. Butuh arahan spesifik yang bisa dilakukan.",
        stack: ["Node.js", "PostGIS", "Flutter"],
        links: { demo: "flood.fadly.design", repo: "github.com/fadlyzaki/flood-alert" },
        iconName: 'AlertTriangle',
        type: 'IoT Prototype',
        hidden: false,
        featured: false
    },
    {
        id: 'procurement',
        title: 'Procurement Reform',
        subtitle: 'Civic Tech Action Plan',
        desc: 'A technical framework for government transparency.',
        desc_id: 'Kerangka kerja teknis untuk transparansi pemerintah.',
        tldr: "Empowering IT professionals to reform Indonesian government procurement.",
        tldr_id: "Memberdayakan profesional IT untuk mereformasi pengadaan pemerintah Indonesia.",
        snapshot: {
            tagline: "Civic Tech Action Plan",
            heroImage: "/procurement-cover.png"
        },
        context: {
            role: "Researcher",
            timeline: "2024",
            team: "Open Data Lab",
            client: "NGO"
        },
        challenge: "Government procurement is plagued by opacity. Jakarta-centric apps fail in rural Papua due to the 'Archipelago Effect'—low bandwidth and distinct local contexts.",
        process: [
            {
                title: "The Archipelago Effect",
                desc: "We found that 4G is a myth in rural outdoors. Apps must work offline-first."
            }
        ],
        insights: [
            {
                title: "Red Flags are Hidden",
                desc: "Corruption isn't obvious. It's hidden in the metadata (e.g., timestamps of midnight uploads)."
            }
        ],
        solution: [
            {
                title: "Offline-First PWA",
                desc: "Combines 'Red Flag' data scraping with accessible PWA architectures."
            }
        ],
        metrics: [],
        learnings: "Transparency tools useless if they can't be loaded on a 3G network.",
        challenge_id: "Pengadaan pemerintah penuh ketertutupan. Aplikasi yang Jakarta-sentris gagal di pelosok Papua karena 'Efek Kepulauan'—sinyal jelek dan konteks lokal beda.",
        process_id: [
            {
                title: "Efek Kepulauan",
                desc: "4G itu mitos di pedalaman. Aplikasi wajib offline-first."
            }
        ],
        insights_id: [
            {
                title: "Bendera Merah Tersembunyi",
                desc: "Korupsi itu gak gamblang. Dia sembunyi di metadata (contoh: upload dokumen tengah malam)."
            }
        ],
        solution_id: [
            {
                title: "PWA Offline-First",
                desc: "Gabungin scraping 'Red Flag' dengan arsitektur PWA yang ringan."
            }
        ],
        learnings_id: "Alat transparansi percuma kalau gak bisa dibuka di sinyal 3G.",
        stack: ["Python", "Pandas", "PWA"],
        links: { demo: "medium.com/procurement", repo: "github.com/fadlyzaki/procurement" },
        iconName: 'FileText',
        type: 'Dashboard Platform',
        hidden: true,
        featured: false
    }
];

export const NOTES = [
    {
        id: 'price-lock',
        title: 'Price Lock',
        subtitle: 'Fintech Feature for OTA',
        desc: 'The specific anxiety of watching a flight price jump $50 while you wait for your boss\'s approval.',
        tldr: "We built a 'pause button' on inflation for anxious travelers.",
        tldr_id: "Kami membuat tombol 'pause' untuk inflasi bagi traveler yang cemas.",
        desc_id: "Kecemasan spesifik saat melihat tiket naik 500rb sambil menunggu izin cuti bos.",
        title_id: 'Price Lock',
        subtitle_id: 'Fitur Fintech untuk OTA',
        stack: ["React", "Python (Algorithm Logic)", "Fintech Integration"],
        links: {
            demo: "https://gemini.google.com/share/e12fc1c0dab2",
            repo: "#"
        },
        iconName: 'Shield',
        featured: true,
        type: 'Fintech Lock',
        date: "February 2026",
        coverImage: "/price-lock-cover.png",
        brandColor: "#10B981", // Fintech Green
        modules: [
            {
                title: "The $50 Heartbeat Skip",
                content: "You find the perfect flight to Bali. It's $100. You text your friends. They take 3 hours to reply. You refresh the page. It's now $150.\n\nThat physical feeling of regret? That's what we are designing against. In a world of dynamic pricing, the user is always the loser. We wanted to give them a weapon."
            },
            {
                title: "The Pause Button",
                content: "Price Lock is not a fintech product; it's an anxiety medication.\n\n• The Promise: \"Pause the world for 24 hours.\"\n• The Mechanism: A small fee ($2) to freeze the algorithm.\n• The Psychology: It shifts the user from a state of Panic (\"I must buy now!\") to a state of Control (\"I have time to decide.\")."
            },
            {
                title: "Buying Time, Not Tickets",
                content: "We discovered that users weren't paying for the ticket; they were paying for the *option* to buy the ticket.\n\nThey were buying the ability to wait for their paycheck. They were buying the ability to ask their boss for leave without risking a price hike. They were buying peace of mind."
            },
            {
                title: "The Honest Algorithm",
                content: "To build trust, we couldn't just guess the fee. We showed our work.\n\n\"AI Prediction: 85% chance this price rises tomorrow.\"\n\nBy being transparent about the volatility, the fee stopped feeling like an extra cost and started feeling like insurance. We turned a 'Hidden Fee' into a 'Hero Feature'."
            }
        ],
        modules_id: [
            {
                title: "Jantung Copot Karena 500 Ribu",
                content: "Kamu nemu tiket ke Bali harga 1 juta. Kamu chat temen-temen di grup. Mereka balesnya 3 jam kemudian. Kamu refresh halamannya. Harganya sekarang 1,5 juta.\n\nPerasaan nyesek di dada itu? Itu yang kami desain solusinya. Di dunia 'dynamic pricing', user selalu jadi pihak yang kalah. Kami ingin memberi mereka senjata."
            },
            {
                title: "Tombol Pause",
                content: "Price Lock bukan produk fintech; ini obat anti-cemas.\n\n• Janjinya: \"Pause dunia selama 24 jam.\"\n• Mekanismenya: Bayar receh (20rb) buat bekukan algoritma.\n• Psikologinya: Mengubah user dari mode Panik (\"Harus beli sekarang!\") ke mode Kontrol (\"Gue punya waktu buat mikir.\")."
            },
            {
                title: "Beli Waktu, Bukan Tiket",
                content: "Kami menemukan bahwa user itu sebenarnya bukan bayar buat tiketnya; mereka bayar buat *opsi* untuk membeli tiketnya.\n\nMereka membeli kemampuan buat nunggu gajian. Mereka membeli kemampuan buat minta izin cuti ke bos tanpa takut harga naik. Mereka membeli ketenangan pikiran."
            },
            {
                title: "Algoritma yang Jujur",
                content: "Untuk membangun trust, kami gak bisa asal nembak harga. Kami buka dapur kami.\n\n\"Prediksi AI: 85% peluang harga naik besok.\"\n\nDengan transparan soal volatilitas, biaya lock ini berhenti terasa sebagai 'biaya tambahan' dan mulai terasa sebagai 'asuransi'. Kami mengubah 'Hidden Fee' jadi 'Hero Feature'."
            }
        ]
    },
    {
        id: 'project-kinship',
        title: 'Project Kinship',
        subtitle: 'Social Logistics & Gifting',
        desc: 'Transferring money is easy; showing care is hard. Helping the diaspora send a meaningful meal home.',
        tldr: "Bridging the emotional distance between 'Sender' and 'Receiver' in the remittance flow.",
        tldr_id: "Menjembatani jarak emosional antara 'Pengirim' dan 'Penerima' dalam arus remitansi.",
        desc_id: "Transfer uang itu gampang; menunjukkan kepedulian itu susah. Bantu perantau kirim makanan penuh makna.",
        title_id: 'Project Kinship',
        subtitle_id: 'Logistik Sosial & Hadiah',
        stack: ["React", "LMM / AI", "Fintech (Remittance)"],
        links: {
            demo: "https://gemini.google.com/share/bd973765947a",
            repo: "#"
        },
        iconName: 'Gift',
        featured: true,
        type: 'Logistics Kinship',
        date: "February 2026",
        coverImage: "/project-kinship-cover.png",
        brandColor: "#EC4899", // Kinship Pink
        modules: [
            {
                title: "Why Cash Feels Cold",
                content: "Every month, millions of migrant workers send money home. It's a transaction of love, but the interface is cold, sterile, and purely numeric.\n\nMoney says \"I support you,\" but it doesn't say \"I miss you.\"\n\nWe wanted to build a remittance tool that carried the warmth of the hand that sent it."
            },
            {
                title: "Delivering Warmth, Not Just Funds",
                content: "Kinship isn't about sending Rupiah; it's about sending 'Care Packages'.\n\n• The Context: Instead of just wiring $50, the user sends a 'Sunday Dinner' (a curated basket of groceries).\n• The Bridge: The sender (in the city) navigates the village map remotely. They become present in their family's daily life, even from 500km away."
            },
            {
                title: "The Zero-UI Receiver",
                content: "The harsh reality: The people who need care the most often have the oldest phones.\n\nWe built a 'Zero-UI' receiver experience.\n• No App Install: The receiver gets a WhatsApp link.\n• SMS Fallback: If data fails, the updates arrive via SMS.\n• Empathy-First: The driver is trained not just to drop off a package, but to deliver a greeting."
            },
            {
                title: "Closing the Loop",
                content: "A transaction ends when money arrives. A relationship continues.\n\nWe added a 'Video Receipt' feature. When the package arrives, the driver records the family's reaction (with consent). The sender doesn't just see a 'delivered' checkmark; they see their mother smiling."
            }
        ],
        modules_id: [
            {
                title: "Kenapa Uang Tunai Terasa Dingin",
                content: "Setiap bulan, jutaan perantau kirim uang ke kampung. Itu transaksi penuh cinta, tapi antarmukanya dingin, steril, dan cuma angka.\n\nUang bilang \"Aku support kamu,\" tapi dia gak bilang \"Aku kangen kamu.\"\n\nKami ingin bangun alat remitansi yang membawa kehangatan tangan yang mengirimnya."
            },
            {
                title: "Mengirim Kehangatan, Bukan Cuma Dana",
                content: "Kinship bukan soal kirim Rupiah; ini soal kirim 'Paket Perhatian'.\n\n• Konteks: Daripada cuma transfer 500rb, user kirim 'Makan Malam Minggu' (paket sembako terkurasi).\n• Jembatan: Pengirim (di kota) menavigasi peta kampung dari jauh. Mereka hadir di keseharian keluarga, walau jarak 500km."
            },
            {
                title: "Penerima Tanpa-UI",
                content: "Realita pahit: Orang yang paling butuh perhatian seringkali punya HP paling jadul.\n\nKami bangun pengalaman penerima 'Zero-UI'.\n• Tanpa Install App: Penerima dapat link WhatsApp.\n• Fallback SMS: Kalau data mati, update masuk lewat SMS.\n• Empati-Dulu: Driver dilatih bukan cuma lempar paket, tapi sampaikan salam."
            },
            {
                title: "Menutup Lingkaran",
                content: "Transaksi berakhir saat uang sampai. Hubungan berlanjut.\n\nKami tambah fitur 'Resi Video'. Saat paket sampai, driver rekam reaksi keluarga (dengan izin). Pengirim gak cuma lihat centang 'delivered'; mereka lihat Ibu mereka tersenyum."
            }
        ]
    },
    {
        id: 'agency-pivot',
        title: 'The "Agency" Pivot',
        subtitle: 'Redesigning Algorithms',
        desc: 'We stopped treating users like dopamine junkies and started treating them like pilots.',
        tldr: "Giving the steering wheel back to your own attention span.",
        tldr_id: "Mengembalikan kemudi setir kepada atensi Anda sendiri.",
        desc_id: "Kami berhenti memperlakukan user seperti pecandu dopamin dan mulai memperlakukan mereka sebagai pilot.",
        sections_id: {
            challenge: "Medsos sekarang cuma mau nyuri perhatian kita. Akibatnya user gak punya kendali, cuma dikasih konten sampah biar terus scroll.",
            approach: "Kita sadar user itu mood-nya berubah-ubah. Jadi kita pindahin kontrolnya langsung ke Feed, pake cara yang halus (Stealth UX)."
        },
        stack: ["UX Research", "Behavioral Psych", "Figma"],
        links: { demo: "#", repo: "#" },
        iconName: 'Brain',
        type: 'Case Study',
        date: "March 2026",
        brandColor: "#8B5CF6", // Pivot Purple
        coverImage: "/about-portrait-new.jpg",
        modules_id: [
            {
                title: "Protagonis: Berkencan dengan Sarah",
                content: "Sarah adalah Desainer Grafis berusia 24 tahun. Dia tumbuh besar dengan Instagram. Dia ingat ketika feed masih kronologis dan isinya hanya teman-temannya.\n\nSituasi (2025):\nSarah membuka aplikasi sosial favoritnya. Dia langsung disambut dengan:\n• Iklan pemutih gigi dropship.\n• Video viral orang asing berteriak tentang politik.\n• Gambar kucing di luar angkasa buatan AI yang agak meresahkan.\n\nKonflik:\nDia menggulir selama 10 menit. Dia merasa cemas sekaligus bosan. Tiba-tiba, dia mendapat pesan dari sahabatnya, Mike: \"Kamu lihat foto tunanganku? Aku posting kemarin!\"\nSarah belum melihatnya. Algoritma memutuskan dia lebih suka \"Kucing Angkasa\" daripada Mike. Dia menutup aplikasi, merasakan kesepian digital.\n\nMasalah:\nMedia sosial telah beralih dari Menghubungkan Orang menjadi Retensi Perhatian. Ini menghilangkan agensi pengguna, menciptakan \"Feed Sampah\" yang memprioritaskan dopamin murah."
            },
            {
                title: "Percobaan Pertama: Solusi \"Kokpit\"",
                content: "Hipotesis: Jika pengguna membenci algoritma, biarkan mereka membangunnya kembali secara manual.\n\nKami merancang \"Panel Kontrol Algoritma.\" Itu adalah layar pengaturan yang penuh dengan slider, persentase, dan tombol beralih. Kami memberi Sarah kunci kerajaan. Dia bisa mengatur \"Politik\" ke 0% dan \"Teman\" ke 100%.\n\nUji Pengguna:\nSarah membuka menu Pengaturan. Dia menatap 12 slider yang berbeda. Dia mengerutkan kening.\n\"Ini terlihat seperti pekerjaan rumah,\" katanya. \"Saya tidak ingin mengkalibrasi feed saya seperti insinyur suara. Saya hanya ingin isinya bagus.\"\n\nKegagalan:\nKami jatuh ke dalam Perangkap Rekayasa. Kami menyamakan \"Kontrol\" dengan \"Kompleksitas.\" Pengguna menginginkan agensi, tetapi mereka tidak menginginkan friksi. Panel Kontrol itu kuat, tetapi terlalu tersembunyi dan berat untuk digunakan setiap hari."
            },
            {
                title: "Pivot: Dari \"Pengaturan\" ke \"Vibe\"",
                content: "Wawasan:\nKami menyadari bahwa pengguna tidak memiliki preferensi statis (misalnya, \"Saya selalu benci video\"). Mereka memiliki Mood Kontekstual.\n• Kadang Sarah ingin merusak otaknya dengan video viral (\"Doom Scroll\").\n• Kadang dia hanya ingin melihat apa yang dilakukan Mike (\"Update\").\n\nKami perlu memindahkan kontrol dari Menu Pengaturan ke Feed itu sendiri, tetapi tanpa membuat antarmuka berantakan."
            },
            {
                title: "Solusi: Stealth UX & Desain \"Mode\"",
                content: "Kami membangun Antarmuka SocialFlux Kompak.\n\nA. Mode Switcher \"Stealth\"\nAlih-alih deretan tombol yang memakan ruang layar, kami memanfaatkan model mental UI yang ada.\nDesain: Kami mengubah teks \"Untuk Anda\" di kiri atas menjadi menu dropdown.\nCerita: Sarah membuka aplikasi. Defaultnya ke \"Untuk Anda\" (campuran standar). Dia merasa kewalahan. Dia mengetuk header dan memilih \"Hanya Teman.\"\nHasilnya: Seketika, kebisingan lenyap. Tidak ada iklan, tidak ada AI, tidak ada orang asing. Hanya foto tunangan Mike.\n\nB. \"Mode Santai\"\nSarah ingin menjelajah, tapi dia lelah dengan video berteriak energi tinggi.\nDesain: Dia memilih \"Mode Santai\" dari dropdown.\nLogika: Mode ini menyaring audio BPM tinggi, potongan cepat, dan tag \"viral/hype\" di backend. Ini memprioritaskan foto, alam, dan seni.\nHasilnya: Feed menjadi majalah digital, bukan mesin slot.\n\nC. \"Micro-Blocking\" Kontekstual\nSarah melihat gambar selebriti buatan AI yang terasa palsu.\nDesain: Kami menambahkan tag kecil berbentuk pil abu-abu di bagian bawah posting: #AI, #Celebrity.\nInteraksi: Sarah tidak perlu mencari tombol \"Laporkan\". Dia cukup mengetuk tag #AI. Aplikasi bertanya: \"Sembunyikan konten seperti ini?\" Dia mengklik Ya.\nHasilnya: Dia telah melatih algoritmanya dalam 2 detik tanpa meninggalkan feed."
            },
            {
                title: "Hasil: Mengapa Ini Berhasil",
                content: "Dengan beralih dari \"Panel Kontrol\" (Prototipe 1) ke \"Feed Terpadu\" (Prototipe 3), kami mencapai hal berikut:\n\nSkor Kepercayaan ⬆️ Peningkatatn Tinggi\nPengguna berhenti merasa \"dimanipulasi\" karena kontrol terlihat dan responsif.\n\nDurasi Sesi ↔️ Stabil\nPengguna menghabiskan waktu yang sama, tetapi melaporkan merasa 50% lebih sedikit \"bersalah\" setelahnya.\n\nInteraksi Teman ⬆️ 300% Peningkatan\nMode \"Hanya Teman\" menghilangkan hambatan untuk menemukan orang-orang terkasih."
            },
            {
                title: "Kesimpulan",
                content: "Masa depan media sosial bukan tentang AI yang lebih baik memprediksi apa yang Anda inginkan. Ini tentang AI yang mendengarkan apa yang Anda katakan.\n\nSarah tidak butuh aplikasi baru. Dia hanya butuh aplikasi saat ini untuk cukup menghormatinya untuk menyerahkan kemudi.\n\n\"Teknologi seharusnya menjadi sepeda untuk pikiran, bukan ban berjalan untuk mata.\""
            }
        ],

        modules: [
            {
                title: "The Protagonist: Meet Sarah",
                content: "Sarah is a 24-year-old Graphic Designer. She grew up on Instagram. She remembers when the feed was chronological and just her friends.\n\nThe Situation (2025):\nSarah opens her favorite social app. She is immediately hit with:\n• An ad for drop-shipped teeth whitener.\n• A viral video of a stranger screaming about politics.\n• An AI-generated image of a cat in space that looks vaguely unsettling.\n\nThe Conflict:\nShe scrolls for 10 minutes. She feels anxious and bored simultaneously. Suddenly, she gets a text from her best friend, Mike: \"Did you see my engagement photos? I posted them yesterday!\"\nSarah hadn't seen them. The algorithm decided she liked \"Space Cats\" more than Mike. She closes the app, feeling a distinct sense of digital loneliness.\n\nThe Problem Statement:\nSocial media has transitioned from Connecting People to Retaining Attention. In doing so, it has stripped the user of agency, creating a \"Feed of Slop\" that prioritizes cheap dopamine over meaningful connection."
            },
            {
                title: "The First Attempt: The \"Cockpit\" Solution",
                content: "The Hypothesis: If users hate the algorithm, let them rebuild it manually.\n\nWe designed the \"Algorithm Control Panel.\" It was a settings screen filled with sliders, percentages, and toggles. We gave Sarah the keys to the kingdom. She could set \"Politics\" to 0% and \"Friends\" to 100%.\n\nThe User Test:\nSarah opened the Settings menu. She stared at the 12 different sliders. She frowned.\n\"This looks like work,\" she said. \"I don't want to calibrate my feed like a sound engineer. I just want it to be good.\"\n\nThe Failure:\nWe fell into the Engineering Trap. We confused \"Control\" with \"Complexity.\" Users want agency, but they don't want friction. The Control Panel was powerful, but it was too buried and too heavy to use daily."
            },
            {
                title: "The Pivot: From \"Settings\" to \"Vibes\"",
                content: "The Insight:\nWe realized that users don't have static preferences (e.g., \"I always hate video\"). They have Contextual Moods.\n• Sometimes Sarah wants to rot her brain with viral videos (The \"Doom Scroll\").\n• Sometimes she just wants to see what Mike is doing (The \"Update\").\n\nWe needed to move the controls out of the Settings Menu and onto the Feed itself, but without cluttering the interface."
            },
            {
                title: "The Solution: Stealth UX & The \"Modes\" Design",
                content: "We built the Compact SocialFlux Interface.\n\nA. The \"Stealth\" Mode Switcher\nInstead of a row of buttons taking up screen space, we utilized the existing UI mental model.\nThe Design: We turned the \"For You\" text at the top left into a dropdown menu.\nThe Story: Sarah opens the app. It defaults to \"For You\" (the standard mix). She feels overwhelmed. She taps the header and selects \"Friends Only.\"\nThe Result: Instantly, the noise vanishes. No ads, no AI, no strangers. Just Mike’s engagement photos.\n\nB. The \"Chill Mode\"\nSarah wants to browse, but she's tired of high-energy screaming videos.\nThe Design: She selects \"Chill Mode\" from the dropdown.\nThe Logic: This mode filters out high-BPM audio, rapid cuts, and \"viral/hype\" tags in the backend. It prioritizes photos, nature, and art.\nThe Result: The feed becomes a digital magazine, not a slot machine.\n\nC. Contextual \"Micro-Blocking\"\nSarah sees an AI-generated image of a celebrity that feels fake.\nThe Design: We added tiny, grey, pill-shaped tags at the bottom of the post: #AI, #Celebrity.\nThe Interaction: Sarah doesn't need to find a \"Report\" button. She just taps the #AI tag. The app asks: \"Hide content like this?\" She clicks Yes.\nThe Result: She has trained her algorithm in 2 seconds without leaving the feed."
            },
            {
                title: "The Outcome: Why It Worked",
                content: "By moving from a \"Control Panel\" (Prototype 1) to a \"Streamlined Feed\" (Prototype 3), we achieved the following:\n\nTrust Score ⬆️ High Increase\nUsers stopped feeling \"manipulated\" because the controls were visible and responsive.\n\nSession Length ↔️ Stable\nUsers spent the same amount of time, but reported feeling 50% less \"guilty\" afterwards.\n\nFriend Interaction ⬆️ 300% Increase\nThe \"Friends Only\" mode removed the friction of finding loved ones."
            },
            {
                title: "Conclusion",
                content: "The future of social media isn't about better AI predicting what you want. It's about AI listening to what you say.\n\nSarah didn't need a new app. She just needed the current app to respect her enough to hand over the steering wheel.\n\n\"Technology should be a bicycle for the mind, not a conveyor belt for the eyes.\""
            }
        ]
    },
    {
        id: 'filter-me',
        title: 'FilterMe',
        subtitle: 'AR Commerce Experiment',
        desc: 'The moment of hesitation before clicking "Buy"—"Will this actually look good on me?"',
        tldr: "Using AR to kill the 'Trust Gap' in online cosmetics shopping.",
        tldr_id: "Menggunakan AR untuk membunuh 'Celah Kepercayaan' dalam belanja kosmetik online.",
        desc_id: "Momen keraguan sebelum klik 'Beli'—'Ini beneran bagus gak ya di muka gue?'",
        title_id: 'FilterMe',
        subtitle_id: 'Eksperimen AR Commerce',
        stack: ["Sketch", "Principle", "AR Design"],
        links: { demo: "https://uxdesign.cc/enhancing-online-shopping-experience-fbdbd76438e8", repo: "#" },
        iconName: 'Camera',
        featured: false,
        type: 'AR Camera',
        date: "January 2018",
        coverImage: "/filterme-cover.png",
        modules: [
            {
                title: "The Mirror Test",
                content: "We've all been there: You see sunglasses online. They look cool on the model. You buy them. They arrive. You put them on. You look ridiculous.\n\nThis gap between 'Pixel Perfection' and 'Physical Reality' is why 40% of fashion e-commerce is returned. It's a trust deficit."
            },
            {
                title: "Trying It On (Digitally)",
                content: "We asked: Why do we trust a mirror? Because it moves with us.\n\nFilterMe isn't a catalog; it's a mirror. using AR, we let users 'wear' the product before they buy it. It changes the question from \"Is this product good?\" to \"Is this product good *on me*?\""
            },
            {
                title: "The Social Proof",
                content: "Shopping is inherently social. \"Does this look good?\" is a question we ask friends, not algorithms.\n\nWe integrated 'Share to Story'. Users could snap a selfie wearing the AR lipstick, post it to Instagram, and get real-time validation from their friends before spending a dime."
            },
            {
                title: "The Limits of Tech",
                content: "We learned a hard lesson: Fun does not equal Trust.\n\nUsers loved playing with the filters (Engagement), but they still hesitated to buy (Conversion). Why? Because they didn't trust the color accuracy of their phone screen.\n\nConclusion: AR can solve for 'Shape' and 'Vibe', but it struggles to solve for 'Texture' and 'Shade'."
            }
        ],
        modules_id: [
            {
                title: "Ujian Cermin",
                content: "Kita semua pernah mengalaminya: Lihat kacamata online. Keren di model. Beli. Sampai rumah. Pakai. Kelihatan konyol.\n\nJarak antara 'Kesempurnaan Piksel' dan 'Realitas Fisik' inilah alasan kenapa 40% barang fashion dikembalikan. Ini adalah defisit kepercayaan."
            },
            {
                title: "Mencoba Secara Digital",
                content: "Kami bertanya: Kenapa kita percaya cermin? Karena dia bergerak mengikuti kita.\n\nFilterMe bukan katalog; ini cermin. Pakai AR, kami biarkan user 'memakai' produk sebelum beli. Ini mengubah pertanyaan dari \"Produk ini bagus gak?\" jadi \"Produk ini bagus gak *di gue*?\""
            },
            {
                title: "Bukti Sosial",
                content: "Belanja itu kegiatan sosial. \"Ini cocok gak?\" adalah pertanyaan buat teman, bukan algoritma.\n\nKami integrasikan 'Share to Story'. User bisa selfie pakai lipstik AR, post ke Instagram, dan dapat validasi real-time dari teman sebelum keluar uang."
            },
            {
                title: "Batas Teknologi",
                content: "Kami belajar hal sulit: Seru bukan berarti Percaya.\n\nUser suka main filter (Engagement), tapi masih ragu beli (Konversi). Kenapa? Karena mereka gak percaya akurasi warna layar HP mereka.\n\nKesimpulan: AR bisa selesaikan masalah 'Bentuk' dan 'Vibe', tapi kesulitan selesaikan 'Tekstur' dan 'Warna Asli'."
            }
        ]
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
        subtitle_id: 'Memanusiakan Operasional',
        hook_id: 'Memberi martabat pada pencarian kerja. Platform komunitas yang memastikan pekerja kerah biru tidak merasa seperti sedang mengemis pekerjaan.',
        miniDesc_id: 'Membangun "LinkedIn" untuk mereka yang bekerja dengan tangan. Membantu ribuan sopir, pelayan, dan pekerja gudang menemukan pekerjaan yang layak tanpa perantara.',
        companyFocus_id: {
            title: "Konteks Unik",
            items: ["Pengguna Kerah Biru", "Pasar Android-First", "UX Siap Offline"]
        },
        motivation: "I saw my father, a middle-manager in a factory, struggle to find reliable people while thousands were looking for work. The gap wasn't skill; it was trust. I wanted to build a bridge made of pixels that felt like a handshake.",
        motivation_id: "Saya melihat ayah saya, seorang manajer pabrik, kesulitan mencari pekerja jujur padahal ribuan orang butuh kerja. Celahnya bukan skill, tapi kepercayaan. Saya ingin membangun jembatan digital yang rasanya seperti jabat tangan.",
        brandColor: '#1AA8B4', // Lumina Teal
        linkedinUrl: 'https://www.linkedin.com/company/luminatechnologies/about/',
        heroImage: '/workforce_hero.png',
        hook: 'Engineering dignity into the blue-collar job hunt. Reducing the cognitive load of application forms for millions of workers.',
        miniDesc: 'Building a "Trust Layer" for the blue-collar economy. We didn\'t just digitize resumes; we architected a reputation system that bridges the gap between informal skills and formal employment.',
        stats: [
            { label: 'Role', value: 'Lead Product Designer' },
            { label: 'Timeline', value: 'May 2022 - Nov 2022' },
            { label: 'Impact', value: 'Scale & Reliability' },
            { label: 'Platform', value: 'Mobile app (android) & Websites' }
        ],
        culture: {
            title: "The Arena",
            description: "We built a culture of 'Radical Honesty'. We weren't just building an app; we were building a livelihood for thousands. Every design decision was tested in the field, not just in Figma.",
            images: [
                { src: "/workforce_hero.png", caption: "Field Research", span: "col-span-1 md:col-span-2 row-span-2" },
                { src: "/workforce_hero.png", caption: "Driver Onboarding", span: "col-span-1 row-span-1" },
                { src: "/workforce_hero.png", caption: "Design Sprint", span: "col-span-1 row-span-1" },
                { src: "/workforce_hero.png", caption: "Townhall", span: "col-span-1 md:col-span-2 row-span-1" }
            ]
        },
        culture_id: {
            title: "Medan Juang",
            description: "Kami membangun budaya 'Kejujuran Radikal'. Kami bukan cuma bikin aplikasi; kami bikin mata pencaharian buat ribuan orang. Setiap keputusan desain diuji di lapangan, bukan cuma di Figma."
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
                            title: "Impact: +45% Response Rate",
                            text: "Led the redesign of the candidate communication module. Solved a critical bottleneck where recruiters were overwhelmed by unstructured data. Result: Reduced time-to-hire by 3 days and improved candidate NPS by 78 points."
                        },
                        technical: {
                            label: "🤖 System",
                            title: "The Async/Sync Gap",
                            text: "Recruiters work in batches (Async), while candidates expect real-time responses (Sync). The challenge was bridging these two mental models without forcing behavior change."
                        }
                    },
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
                    aiHypotheses: [
                        {
                            tech: "LLM Agents & Sentiment Analysis",
                            title: "Auto-Negotiation Bot",
                            desc: "Instead of recruiters manually typing replies, an Agent would draft responses based on the candidate's sentiment and availability. It could schedule interviews automatically by syncing with calendar APIs.",
                            impact: "Response Time < 5 mins"
                        },
                        {
                            tech: "Voice AI & Speech-to-Text",
                            title: "Voice-First Screening",
                            desc: "Candidates record voice answers to screening questions. AI transcribes, analyzes tone and confidence, and auto-generates a candidate summary score for recruiters.",
                            impact: "Screening Time -80%"
                        },
                        {
                            tech: "Predictive Analytics & ML",
                            title: "Candidate Fit Predictor",
                            desc: "ML model trained on historical hiring data predicts which candidates are most likely to accept offers and stay long-term, helping recruiters prioritize high-value leads.",
                            impact: "Offer Acceptance +25%"
                        },
                        {
                            tech: "Voice-to-Action Agents",
                            title: "Interview on the Go",
                            desc: "Candidates can answer screening questions via voice note while commuting. AI transcribes, summarizes key competencies, and updates their profile capability match.",
                            impact: "Candidate Experience 4.9/5"
                        },
                        {
                            tech: "Large Reasoning Models (LRM)",
                            title: "Bias Auditor Bot",
                            desc: "A silent observer AI that flags potential unconscious bias in recruiter messages or job descriptions before they are sent, suggesting more inclusive phrasing.",
                            impact: "Diversity Hiring +20%"
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
                            title: "Dampak: +45% Respon Rate",
                            text: "Memimpin redesign modul komunikasi kandidat. Menyelesaikan bottleneck di mana rekruter kewalahan data tidak terstruktur. Hasil: Waktu rekrutmen turun 3 hari & NPS kandidat naik 78 poin."
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
                        { title: "Observasi Langsung", desc: "Saya duduk bareng 5 rekruter selama satu shift. Saya liat mereka copy-paste pesan yang sama 50 kali. Ini bukan masalah 'tracking', ini masalah 'ngetik'." },
                        { title: "Konflik", desc: "Tim Engineering mau bikin sistem tiket. Saya ngotot minta antarmuka Chat. Tiket rasanya kayak kerjaan admin; Chat rasanya kayak ngobrol." },
                        { title: "Prototipe", desc: "Saya bikin prototipe mirip WhatsApp dan verifikasi langsung sama pekerja kerah biru. Kalau mereka bisa pake WhatsApp, mereka pasti bisa pake ini." }
                    ],
                    insights: [
                        { title: "Takut Formalitas", desc: "Kandidat nyuekin email karena terlalu formal. Chat terasa aman. Mediumnya adalah pesannya." },
                        { title: "Batch vs Real-time", desc: "Rekruter kerja numpuk (batching); kandidat maunya real-time. Saya harus desain sistem yang ngejembatanin kesenjangan ini." }
                    ],
                    solution: [
                        { title: "Inbox Terpadu", desc: "Saya gabungin SMS, WhatsApp, dan In-App jadi satu thread. Gak perlu gonta-ganti tab lagi." },
                        { title: "Kecepatan Satu Tap", desc: "Saya desain 'Template Pintar' buat jawaban umum (misal: 'Interview Dijadwalkan') cuma pake satu tap." }
                    ],
                    metrics: [
                        { label: "Rate Respon", value: "+45%" },
                        { label: "Waktu Rekrut", value: "-3 Hari" },
                        { label: "NPS", value: "78" }
                    ],
                    learnings: "Proyek ini ngajarin saya kalo fitur gak nyelesain masalah; alur kerja (workflow) yang nyelesain. Dengan niru alat yang udah biasa mereka pake (WhatsApp) tapi dikasih struktur, saya dapet adopsi tanpa perlu training ribet.",
                    aiHypotheses: [
                        {
                            tech: "Agen LLM & Analisa Sentimen",
                            title: "Bot Negosiasi Otomatis",
                            desc: "Daripada rekruter ngetik manual, Agen bakal nulis draft jawaban berdasarkan mood kandidat dan ketersediaan waktu. Bisa jadwalin interview otomatis lho.",
                            impact: "Waktu Respon < 5 menit"
                        },
                        {
                            tech: "Voice AI & Speech-to-Text",
                            title: "Screening Berbasis Suara",
                            desc: "Kandidat rekam jawaban suara untuk pertanyaan screening. AI transkripsi, analisa nada dan kepercayaan diri, dan auto-generate skor ringkasan kandidat untuk rekruter.",
                            impact: "Waktu Screening -80%"
                        },
                        {
                            tech: "Predictive Analytics & ML",
                            title: "Prediktor Kecocokan Kandidat",
                            desc: "Model ML yang dilatih dari data rekrutmen historis memprediksi kandidat mana yang kemungkinan besar terima offer dan bertahan lama, bantu rekruter prioritaskan lead bernilai tinggi.",
                            impact: "Penerimaan Offer +25%"
                        },
                        {
                            tech: "Voice-to-Action Agents",
                            title: "Wawancara Sambil Jalan",
                            desc: "Kandidat bisa jawab pertanyaan screening lewat voice note sambil di jalan. AI transkrip, ringkas kompetensi inti, dan update kecocokan profil.",
                            impact: "Pengalaman Kandidat 4.9/5"
                        },
                        {
                            tech: "Model Penalaran Besar",
                            title: "Bot Auditor Bias",
                            desc: "AI pengamat diam yang menandai potensi bias bawah sadar di pesan rekruter atau deskripsi kerja sebelum dikirim, menyarankan bahasa yang lebih inklusif.",
                            impact: "Perekrutan Diversifikasi +20%"
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
                    outcome: 'Hiring became 20% faster & more humane.'
                },
                details_id: {
                    problem: 'Cerita manusia hilang tertelan grid Excel.',
                    system: 'Pipeline visual yang menghargai kandidat.',
                    outcome: 'Rekrutmen jadi 20% lebih cepat & manusiawi.'
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
                            text: "Redesigned the internal ATS to replace Excel-based tracking. Introduced a Kanban-style pipeline that improved data accuracy by 99% and achieved 100% adoption among the HR team."
                        },
                        technical: {
                            label: "🤖 System",
                            title: "Centralized Data View",
                            text: "Replaced fragmented data sources with a centralized dashboard. Optimized information density for high-volume scanning and implemented bulk actions to reduce click-fatigue."
                        }
                    },
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
                    aiHypotheses: [
                        {
                            tech: "RAG (Retrieval-Augmented Generation)",
                            title: "The 'Chief of Staff' Sidebar",
                            desc: "A natural language sidebar where HR can ask: 'Who are the top 3 drivers for East Jakarta?' The AI retrieves data from the pipeline and summarizes it, eliminating the need for complex filters.",
                            impact: "Data Retrieval Speed 10x"
                        },
                        {
                            tech: "Computer Vision & Document AI",
                            title: "Auto-Resume Parsing",
                            desc: "AI extracts structured data from uploaded resumes (PDFs, images) automatically, populating candidate profiles without manual data entry. Handles Indonesian and English resumes.",
                            impact: "Data Entry Time -90%"
                        },
                        {
                            tech: "Anomaly Detection & ML",
                            title: "Pipeline Health Monitor",
                            desc: "Real-time ML model detects unusual patterns like sudden drop-offs at specific stages, alerting HR to process bottlenecks before they impact hiring goals.",
                            impact: "Issue Detection +3 days earlier"
                        },
                        {
                            tech: "Predictive attrition Modeling",
                            title: "Resignation Radar",
                            desc: "AI analyzes public activity (GitHub, LinkedIn) to predict which 'Passive' candidates are about to open to opportunities, alerting recruiters to reach out first.",
                            impact: "First-to-Contact Rate 80%"
                        },
                        {
                            tech: "Generative UI (GenUI)",
                            title: "Dynamic Pipeline View",
                            desc: "Instead of static columns, the dashboard rebuilds itself based on the recruiter's intent. 'Show me bottlenecks' transforms the UI into a heatmap of stalled candidates.",
                            impact: "Time-to-Insight -90%"
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
                            text: "Merancang ulang ATS internal untuk menggantikan tracking berbasis Excel. Memperkenalkan pipeline gaya Kanban yang meningkatkan akurasi data hingga 99% dan mencapai adopsi 100%."
                        },
                        technical: {
                            label: "🤖 Sistem",
                            title: "Sentralisasi Data",
                            text: "Mengganti sumber data yang terfragmentasi dengan dashboard terpusat. Mengoptimalkan kepadatan informasi untuk scanning cepat dan mengimplementasikan aksi massal."
                        }
                    },
                    snapshot: {
                        tagline: "Ganti 'Selimut Nyaman' Excel dengan sesuatu yang lebih baik, tanpa bikin kaget.",
                        heroImage: "/workforce_hero.png"
                    },
                    context: {
                        client: "Produk Internal",
                        role: "Desainer Dashboard",
                        timeline: "4 Bulan",
                        team: "2 Desainer, 4 Devs"
                    },
                    challenge: "Data HR berantakan di 5 tools beda dan spreadsheet raksasa. Tim gak bisa jawab pertanyaan simpel kayak 'Berapa driver yang kita rekrut hari ini?' tanpa pusing dulu.",
                    process: [
                        { title: "Audit Total", desc: "Saya print semua spreadsheet dan stabilo-in setiap kolom yang duplikat. Ternyata kita minta data yang sama sampe 4 kali." },
                        { title: "Friksi", desc: "User nolak dashboard baru. Mereka cinta banget fleksibilitas Excel. Saya harus buktiin kalau 'struktur' itu sepadan dengan hilangnya 'kebebasan'." }
                    ],
                    insights: [
                        { title: "Kepadatan itu Raja", desc: "Kebanyakan dashboard modern kebanyakan ruang kosong (whitespace). User HR butuh kepadatan data. Saya desain supaya informasi maksimal per piksel." }
                    ],
                    solution: [
                        { title: "Pipeline Visual", desc: "Saya bikin papan Kanban drag-and-drop yang memvisualisasikan perjalanan kandidat. Langsung keliatan macetnya di mana." },
                        { title: "Aksi Massal", desc: "User gak pernah kerja satu-satu. Saya tambahin fitur 'Pilih Semua' (Select All) di setiap tahap." }
                    ],
                    metrics: [
                        { label: "Efisiensi", value: "+20%" },
                        { label: "Akurasi Data", value: "99%" },
                        { label: "Adopsi", value: "100%" }
                    ],
                    learnings: "Gantiin Excel itu tantangan desain paling susah. Gak bisa cuma main cantik; harus lebih cepet. Saya belajar buat menghargai fungsi grid.",
                    aiHypotheses: [
                        {
                            tech: "RAG (Retrieval-Augmented Generation)",
                            title: "Sidebar 'Chief of Staff'",
                            desc: "Sidebar chat di mana HR bisa tanya: 'Siapa 3 driver terbaik di Jakarta Timur?' AI bakal ambil data dari pipeline dan ngerangkum, gak perlu filter ribet lagi.",
                            impact: "Kecepatan Data 10x"
                        },
                        {
                            tech: "Computer Vision & Document AI",
                            title: "Parsing CV Otomatis",
                            desc: "AI mengekstrak data terstruktur dari CV yang diupload (PDF, gambar) secara otomatis, mengisi profil kandidat tanpa input manual. Support CV Indonesia dan Inggris.",
                            impact: "Waktu Input Data -90%"
                        },
                        {
                            tech: "Anomaly Detection & ML",
                            title: "Monitor Kesehatan Pipeline",
                            desc: "Model ML real-time mendeteksi pola tidak biasa seperti drop-off mendadak di tahap tertentu, alert HR tentang bottleneck proses sebelum impact hiring goals.",
                            impact: "Deteksi Masalah +3 hari lebih cepat"
                        },
                        {
                            tech: "Pemodelan Attrition Prediktif",
                            title: "Radar Resign",
                            desc: "AI analisis aktivitas publik (GitHub, LinkedIn) untuk prediksi kandidat 'Pasif' mana yang bakal terbuka sama peluang, ngasih tahu rekruter buat kontak duluan.",
                            impact: "Tingkat Kontak Pertama 80%"
                        },
                        {
                            tech: "Generative UI (GenUI)",
                            title: "Tampilan Pipeline Dinamis",
                            desc: "Alih-alih kolom statis, dashboard membangun ulang dirinya berdasarkan niat rekruter. 'Tunjukkan bottleneck' mengubah UI jadi heatmap kandidat yang macet.",
                            impact: "Waktu-ke-Insight -90%"
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
                    outcome: '45% more people dared to apply.'
                },
                details_id: {
                    problem: 'Minta CV ke supir bikin panik, bukan dapet data.',
                    system: 'Cukup "Halo" sekali tap, bukan formulir 10 hal.',
                    outcome: '45% lebih banyak orang berani melamar.'
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
                            text: "Addressed high drop-off rates by replacing long forms with a chat-first application flow. This reduced friction significantly and increased application completion rates by 60%."
                        },
                        technical: {
                            label: "🤖 System",
                            title: "Audio-First Interface",
                            text: "Implemented an audio-first interface utilizing native media capabilities. Focused on reducing input latency and creating a conversational conversational UI pattern to replace static forms."
                        }
                    },
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
                    aiHypotheses: [
                        {
                            tech: "Audio-to-Structured-Data (Whisper)",
                            title: "Instant Resume Generator",
                            desc: "Candidates simply talk about their experience for 1 minute. The AI transcribes the audio, extracts skills/dates, and builds a formatted tabular resume automatically.",
                            impact: "Completion Rate +90%"
                        },
                        {
                            tech: "NLP & Intent Classification",
                            title: "Smart Job Matching",
                            desc: "AI analyzes voice note content to understand candidate skills and preferences, then auto-suggests relevant job openings instead of requiring manual search.",
                            impact: "Job Match Accuracy +40%"
                        },
                        {
                            tech: "Emotion AI & Tone Analysis",
                            title: "Candidate Confidence Scorer",
                            desc: "AI analyzes voice recordings for confidence, enthusiasm, and communication clarity, providing recruiters with soft-skill insights before interviews.",
                            impact: "Interview Quality +30%"
                        },
                        {
                            tech: "Multimodal Resume Parsing",
                            title: "Portfolio-First Scanning",
                            desc: "For creative roles, AI ignores the text resume and scans the portfolio images/videos first, matching visual style and technical complexity to the job vibe.",
                            impact: "Quality Hire +30%"
                        },
                        {
                            tech: "Real-time Translation & Cultural Adaptation",
                            title: "Border-Free Chat",
                            desc: "Enables seamless chat between a recruiter in Tokyo and a worker in Jakarta. Not just translation, but cultural nuance adjustment (politeness levels).",
                            impact: "Global Placement +40%"
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
                            text: "Mengatasi drop-off tinggi dengan mengganti formulir panjang jadi alur berbasis chat. Ini mengurangi friksi dan menaikkan tingkat penyelesaian lamaran sebesar 60%."
                        },
                        technical: {
                            label: "🤖 Sistem",
                            title: "Antarmuka Audio-First",
                            text: "Mengimplementasikan antarmuka audio-first menggunakan kapabilitas media native. Fokus pada pengurangan latensi input dan membuat pola UI percakapan."
                        }
                    },
                    snapshot: {
                        tagline: "Gimana kalau ngelamar kerja itu segampang bilang 'Halo'?",
                        heroImage: "/workforce_hero.png"
                    },
                    context: {
                        client: "Aplikasi Konsumen",
                        role: "Lead Desain Produk",
                        timeline: "2 Bulan",
                        team: "Tim Growth"
                    },
                    challenge: "90% pelamar kabur pas liat formulir lamaran. Pekerja kerah biru gak nyaman ngetik CV panjang di layar HP. 'Tembok CV' ini membunuh pertumbuhan user kami.",
                    process: [
                        { title: "Taruhan", desc: "Hipotesis saya: User bukan gak berkualitas, tapi kurang PD. Formulir rasanya kayak ujian. Chat rasanya kayak nyapa." },
                        { title: "Pangkas Habis", desc: "Saya debatin buat hapus 80% kolom isian. Kita cuma butuh Nama dan Nomor HP buat mulai." }
                    ],
                    insights: [
                        { title: "Defisit Kepercayaan", desc: "User gak percaya sama formulir tanpa wajah. Mereka percaya sama orang. Saya tambahin 'Avatar Rekruter' buat memanusiakan layar." }
                    ],
                    solution: [
                        { title: "Lamar Satu Tap", desc: "Saya ganti formulir 'Apply Now' dengan pesan template: 'Halo, saya tertarik sama kerjaan ini.'." },
                        { title: "Voice Notes", desc: "Buat user yang susah ngetik, saya tambahin fitur 'Rekam Suara'. Jadi fitur paling laku." }
                    ],
                    metrics: [
                        { label: "Mulai Lamar", value: "+45%" },
                        { label: "Selesai", value: "+60%" },
                        { label: "Trust", value: "Tinggi" }
                    ],
                    learnings: "Nurunin hambatan masuk ningkatin volume, tapi butuh filter kualitas. Voice note itu jalan tengah sempurna—gampang dikirim, tapi kaya info.",
                    aiHypotheses: [
                        {
                            tech: "Audio-ke-Data-Terstruktur (Whisper)",
                            title: "Generator CV Instan",
                            desc: "Kandidat cukup ngomong soal pengalaman mereka selama 1 menit. AI bakal transkrip audio, ekstrak skill/tanggal, dan bikin CV rapi secara otomatis.",
                            impact: "Tingkat Penyelesaian +90%"
                        },
                        {
                            tech: "NLP & Klasifikasi Intent",
                            title: "Pencocokan Kerja Pintar",
                            desc: "AI menganalisa konten voice note untuk memahami skill dan preferensi kandidat, lalu auto-suggest lowongan relevan tanpa perlu cari manual.",
                            impact: "Akurasi Match Kerja +40%"
                        },
                        {
                            tech: "Emotion AI & Analisis Nada",
                            title: "Skor Kepercayaan Diri Kandidat",
                            desc: "AI menganalisa rekaman suara untuk kepercayaan diri, antusiasme, dan kejelasan komunikasi, memberikan insight soft-skill ke rekruter sebelum interview.",
                            impact: "Kualitas Interview +30%"
                        },
                        {
                            tech: "Parsing Resume Multimodal",
                            title: "Scanning Portfolio-First",
                            desc: "Buat posisi kreatif, AI abaikan teks resume dan scan gambar/video portofolio duluan, mencocokkan gaya visual dan kompleksitas teknis sama vibe kerjaan.",
                            impact: "Kualitas Hire +30%"
                        },
                        {
                            tech: "Transalasi & Adaptasi Budaya Real-time",
                            title: "Chat Tanpa Batas",
                            desc: "Memungkinkan chat mulus antara rekruter di Tokyo dan pekerja di Jakarta. Bukan cuma terjemahan, tapi penyesuaian nuansa budaya (tingkat kesopanan).",
                            impact: "Penempatan Global +40%"
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
                    outcome: 'Users found hope (jobs) 15% faster.'
                },
                details_id: {
                    problem: 'Tersesat di filter saat butuh kerja hari ini juga.',
                    system: 'Penemuan berbasis visual buat scanning cepat.',
                    outcome: 'User nemu harapan (kerjaan) 15% lebih cepat.'
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
                            text: "Revamped core navigation based on card-sorting research. Flattened the hierarchy from 4 levels to 2, improving Day-1 retention by 15%."
                        },
                        technical: {
                            label: "🤖 System",
                            title: "Shallow Routing",
                            text: "Redesigned the navigation structure to be shallow and icon-driven. Removed deep nesting to align with the 'visual-first' mental model of the user base."
                        }
                    },
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
                    aiHypotheses: [
                        {
                            tech: "Predictive UI",
                            title: "Zero-Click Discovery",
                            desc: "The app anticipates user intent based on time-of-day and location. If a user opens the app at 8 AM in a warehouse district, the 'Forklift Driver' jobs appear instantly on the home screen.",
                            impact: "Time-to-Apply -40%"
                        },
                        {
                            tech: "Conversational AI & NLP",
                            title: "Voice-Driven Navigation",
                            desc: "Users can say 'Find me cleaning jobs near Tangerang' and the app instantly filters and displays results, eliminating the need for manual filter selection.",
                            impact: "Navigation Speed +60%"
                        },
                        {
                            tech: "Behavioral Analytics & Personalization",
                            title: "Learning Home Screen",
                            desc: "The home screen dynamically reorganizes based on user behavior patterns, surfacing the most relevant categories and jobs without requiring any user input.",
                            impact: "Engagement +35%"
                        },
                        {
                            tech: "Behavioral Transformers",
                            title: "Morning vs Evening Mode",
                            desc: "AI learns that in the morning you check 'Status', but at night you check 'Jobs'. The home screen layout physically morphs to prioritize relevant modules based on time of day.",
                            impact: "Time-to-Target -3s"
                        },
                        {
                            tech: "Voice Command Interface",
                            title: "Blue-Collar Hands-Free",
                            desc: "Designed for workers with dirty hands/gloves. 'Lumina, find me a driver job near here' triggers a full search and apply flow without touching the screen.",
                            impact: "Accessibility 100%"
                        }
                    ]
                },
                caseStudy_id: {
                    locked: true,
                    summaries: {
                        eli5: {
                            label: "👶 ELI5",
                            title: "Gak Nyasar Lagi",
                            text: "Aplikasinya kayak labirin. Saya rubuhkan temboknya jadi kamu bisa nemu kerjaan cuma dalam 2 klik. Saya ganti kata-kata rumit dengan gambar."
                        },
                        recruiter: {
                            label: "👔 Recruiter",
                            title: "Redesain Navigasi",
                            text: "Merombak navigasi inti berdasarkan riset card-sorting. Mendatarkan hirarki dari 4 level jadi 2, meningkatkan retensi Hari-1 sebesar 15%."
                        },
                        technical: {
                            label: "🤖 Sistem",
                            title: "Routing Dangkal",
                            text: "Merenstrukturisasi arsitektur routing jadi dangkal dan berbasis ikon. Menghapus nesting dalam untuk menyesuaikan dengan mental model 'visual-first' pengguna."
                        }
                    },
                    snapshot: {
                        tagline: "Bantu user temukan jalan tanpa peta.",
                        heroImage: "/workforce_hero.png"
                    },
                    context: {
                        client: "Produk Utama",
                        role: "Redesain Navigasi",
                        timeline: "Berjalan",
                        team: "Core Experience"
                    },
                    challenge: "Data menunjukkan user terjebak di menu navigasi yang dalam lalu keluar dari aplikasi. Kami terlalu memperumit struktur kategori (over-engineered), berasumsi user tahu persis apa yang dicari. Ternyata tidak.",
                    process: [
                        { title: "Card Sorting", desc: "Saya lakukan card-sorting dengan user asli. Mental model mereka itu datar (flat), bukan hirarkis macam pohon." },
                        { title: "Pilihan Sulit", desc: "Saya harus meyakinkan PM untuk membunuh fitur 'Advanced Search' kesayangan mereka. Kesederhanaan butuh pengorbanan." }
                    ],
                    insights: [
                        { title: "Visual vs Teks", desc: "User kami adalah pembelajar visual. Mereka mengabaikan label teks tapi langsung klik ikon. Saya ubah desain jadi icon-first." }
                    ],
                    solution: [
                        { title: "Hirarki Datar", desc: "Saya pangkas kedalaman navigasi dari 4 level jadi 2. Setiap lowongan kerja kini bisa dijangkau dalam 2 tap." },
                        { title: "Tag Visual", desc: "Saya desain set ikon unik untuk setiap kategori pekerjaan, berfungsi sebagai jangkar visual saat scanning cepat." }
                    ],
                    metrics: [
                        { label: "Retensi D1", value: "+15%" },
                        { label: "Sukses Cari", value: "85%" },
                        { label: "Bounce Rate", value: "-10%" }
                    ],
                    learnings: "Navigasi bukan cuma soal struktur; ini soal kepercayaan diri. Kalau user merasa tersesat 1 detik saja, mereka pergi. Saya belajar menghargai setiap klik.",
                    aiHypotheses: [
                        {
                            tech: "Predictive UI",
                            title: "Penemuan Tanpa-Klik",
                            desc: "Aplikasi mengantisipasi niat user berdasarkan waktu dan lokasi. Jika user buka aplikasi jam 8 pagi di area pergudangan, lowongan 'Supir Forklift' langsung muncul di layar utama.",
                            impact: "Waktu-Lamar -40%"
                        },
                        {
                            tech: "Conversational AI & NLP",
                            title: "Navigasi Berbasis Suara",
                            desc: "User bisa bilang 'Carikan kerja cleaning di Tangerang' dan aplikasi langsung filter dan tampilkan hasilnya, tanpa perlu pilih filter manual.",
                            impact: "Kecepatan Navigasi +60%"
                        },
                        {
                            tech: "Behavioral Analytics & Personalization",
                            title: "Home Screen yang Belajar",
                            desc: "Home screen secara dinamis mereorganisasi berdasarkan pola perilaku user, memunculkan kategori dan lowongan paling relevan tanpa perlu input user.",
                            impact: "Engagement +35%"
                        },
                        {
                            tech: "Transformer Perilaku",
                            title: "Mode Pagi vs Malam",
                            desc: "AI belajar kalau pagi kamu cek 'Status', tapi malam cek 'Loker'. Layout home screen berubah fisik buat prioritasin modul relevan berdasar waktu.",
                            impact: "Waktu-ke-Tujuan -3s"
                        },
                        {
                            tech: "Antarmuka Perintah Suara",
                            title: "Hands-Free Pekerja Lapangan",
                            desc: "Didesain buat pekerja dengan tangan kotor/sarung tangan. 'Lumina, cariin kerjaan supir dekat sini' memicu flow cari dan lamar tanpa sentuh layar.",
                            impact: "Aksesibilitas 100%"
                        }
                    ]
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
        companyFocus_id: {
            title: "Faktor Skala",
            items: ["Pasar B2B $100M", "Rantai Pasokan FMCG", "Logistik Terfragmentasi"]
        },
        motivation: "My grandmother ran a small warung in the village. Every week, she'd travel hours to the city just to restock. I watched technology disrupt big malls while she was left behind. I built this to give her—and millions like her—the same power as the giants.",
        motivation_id: "Nenek saya punya warung kecil di desa. Tiap minggu dia harus ke kota berjam-jam cuma buat stok barang. Saya lihat teknologi cuma bantu mal besar sementara dia ditinggal. Saya bangun ini supaya dia punya kekuatan yang sama dengan raksasa retail.",
        hook_id: 'Membangun rasa aman di pasar low-trust. Memastikan pemilik warung merasa setenang belanja stok 5 juta seperti saat jajan 5 ribu.',
        brandColor: '#00D1C7', // GudangAda Cyan
        linkedinUrl: 'https://www.linkedin.com/company/gudangada/about/',
        heroImage: '/commerce_hero.png',
        hook: 'Systematizing trust in a chaotic market. Designing fail-safe transaction flows for the $100B B2B supply chain.',
        miniDesc: 'Digitizing the supply chain not by disrupting it, but by scaffolding the existing relationships. We built a "Digital Handshake" protocol that respects the informal nature of traditional trade.',
        stats: [
            { label: 'Role', value: 'Product Designer' },
            { label: 'Timeline', value: 'April 2020 - April 2022' },
            { label: 'Impact', value: 'Marketplace Liquidity' },
            { label: 'Platform', value: 'Web Dashboard & PWA' }
        ],
        culture: {
            title: "The Arena",
            description: "Building a digital layer on top of a chaotic, traditional supply chain wasn't easy. We spent days in hot warehouses and crowded markets to understand the real users.",
            images: [
                { src: "/commerce_hero.png", caption: "Warehouse Audit", span: "col-span-1 md:col-span-2 row-span-2" },
                { src: "/commerce_hero.png", caption: "Market Visit", span: "col-span-1 row-span-1" },
                { src: "/commerce_hero.png", caption: "Team Briefing", span: "col-span-1 row-span-1" },
                { src: "/commerce_hero.png", caption: "Strategy Session", span: "col-span-1 md:col-span-2 row-span-1" }
            ]
        },
        culture_id: {
            title: "Medan Juang",
            description: "Membangun lapisan digital di atas rantai pasokan tradisional yang kacau bukanlah hal mudah. Kami menghabiskan hari-hari di gudang panas dan pasar padat untuk memahami pengguna sebenarnya."
        },
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
                details: { problem: 'Fear of sending money into the void.', system: 'The "Money Back" Shield.', outcome: 'Trust increased, Abandonment -12%.' },
                details_id: { problem: 'Takut kirim uang ke tempat antah berantah.', system: 'Perisai "Uang Kembali".', outcome: 'Kepercayaan naik, Abandonment -12%.' },
                title_id: 'Marketplace',
                tag_id: 'Transaksi',
                caseStudy: {
                    locked: true,
                    summaries: {
                        eli5: {
                            label: "👶 ELI5",
                            title: "Safe Shopping",
                            text: "Buying stuff for a shop was too scary. I made it simple like buying a pizza, and promised money back if things go wrong, so shop owners feel safe."
                        },
                        recruiter: {
                            label: "👔 Recruiter",
                            title: "Trust Engineering",
                            text: "Simplified a complex B2B checkout from 7 steps to 3. Added trust signals like an escrow badge, reducing cart abandonment by 12%."
                        },
                        technical: {
                            label: "🤖 System",
                            title: "Checkout State Machine",
                            text: "Refactored the checkout flow to be less rigid. Integrated real-time validation and localized error handling to prevent user frustration during high-value transactions."
                        }
                    },
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
                    aiHypotheses: [
                        {
                            tech: "Predictive Fraud Detection",
                            title: "The 'Green Light' Checkout",
                            desc: "An AI analyzes the buyer's purchase history and creditworthiness in real-time. If they are trusted, they skip the 'Payment Proof' step entirely. Instant credit approval.",
                            impact: "Friction Reduced 100%"
                        },
                        {
                            tech: "Dynamic Pricing & ML",
                            title: "Smart Bundle Suggestions",
                            desc: "AI analyzes cart contents and suggests complementary products with optimized bundle pricing, increasing average order value while providing genuine value to buyers.",
                            impact: "AOV +25%"
                        },
                        {
                            tech: "Computer Vision & OCR",
                            title: "Scan-to-Reorder",
                            desc: "Store owners photograph their empty shelves. AI identifies products and auto-fills a reorder cart based on previous purchase patterns and current stock levels.",
                            impact: "Reorder Time -70%"
                        },
                        {
                            tech: "Federated Learning",
                            title: "Neighborhood Buying Group",
                            desc: "AI notices 5 shops in the same zip code ordering similar items. It prompts them to 'Pool Order' for a bulk discount, orchestrating the logistics automatically.",
                            impact: "Logistics Cost -25%"
                        },
                        {
                            tech: "Computer Vision (Inventory)",
                            title: "Shelf-to-Cart",
                            desc: "Shop owner takes a photo of their empty shelf. AI identifies missing SKUs, estimates quantity needed based on shelf size, and auto-fills the cart.",
                            impact: "Order Speed 10x"
                        }
                    ]
                },
                caseStudy_id: {
                    locked: true,
                    summaries: {
                        eli5: {
                            label: "👶 ELI5",
                            title: "Belanja Aman",
                            text: "Belanja stok toko itu nyeremin. Saya bikin simpel kayak beli pizza, dan janji uang kembali kalau ada masalah, biar pemilik warung tenang."
                        },
                        recruiter: {
                            label: "👔 Recruiter",
                            title: "Rekayasa Kepercayaan",
                            text: "Menyederhanakan checkout B2B kompleks dari 7 langkah jadi 3. Menambah sinyal kepercayaan seperti badge escrow, mengurangi cart abandonment 12%."
                        },
                        technical: {
                            label: "🤖 Sistem",
                            title: "State Machine Checkout",
                            text: "Merefaktor alur checkout agar tidak kaku. Integrasi validasi real-time dan penanganan error yang terlokalisasi untuk mencegah frustrasi saat transaksi nilai tinggi."
                        }
                    },
                    snapshot: {
                        tagline: "7 langkah buat beli semardus mie? Kami harus perbaiki gap kepercayaan.",
                        heroImage: "/commerce_hero.png"
                    },
                    context: {
                        client: "GudangAda",
                        role: "Lead Squad Checkout",
                        timeline: "6 Bulan",
                        team: "4 PM, 8 Engineer"
                    },
                    challenge: "Alur checkout kami adalah 'monster' 7 langkah. User meninggalkan keranjang (abandon cart) sebesar 65% karena mereka tidak percaya uang mereka aman. Di B2B, 'trust' bukan sekadar perasaan; itu jaminan transaksi.",
                    process: [
                        { title: "Audit Total", desc: "Saya print setiap layar alur checkout. Panjangnya 3 meter di dinding. Ternyata kami minta alamat yang sama 3 kali." },
                        { title: "Perdebatan", desc: "Tim Finance mau mempertahankan 'cek keamanan'. Saya berargumen bahwa friksi *adalah* risiko. Kalau terlalu ribet, mereka pergi." }
                    ],
                    insights: [
                        { title: "Kecemasan Bayar", desc: "Saya temukan user cuma peduli satu hal: 'Uang saya balik nggak kalau ini gagal?' Kami harus taruh jaminan itu di depan." }
                    ],
                    solution: [
                        { title: "Alur 3-Langkah", desc: "Saya ringkas 7 langkah jadi 3: Keranjang, Bayar, Konfirmasi. Penyederhanaan radikal." },
                        { title: "Badge Escrow", desc: "Saya tambah perisai visual 'Jaminan Uang Kembali' di sebelah tombol Bayar. Ini menaikkan konversi 5% sendirian." }
                    ],
                    metrics: [
                        { label: "Cart Abandon", value: "-12%" },
                        { label: "Konversi", value: "+8%" },
                        { label: "AOV", value: "+15%" }
                    ],
                    learnings: "Kepercayaan dibangun dalam milidetik. Anda nggak bisa minta uang kalau tampilan berantakan. UI yang rapi adalah UI yang bisa dipercaya.",
                    aiHypotheses: [
                        {
                            tech: "Predictive Fraud Detection",
                            title: "Checkout 'Lampu Hijau'",
                            desc: "AI menganalisis riwayat belanja dan kredit pembeli secara real-time. Jika terpercaya, mereka bisa skip tahap 'Bukti Bayar' sepenuhnya. Persetujuan kredit instan.",
                            impact: "Friksi Berkurang 100%"
                        },
                        {
                            tech: "Dynamic Pricing & ML",
                            title: "Saran Bundle Pintar",
                            desc: "AI menganalisis isi keranjang dan menyarankan produk pelengkap dengan harga bundle yang optimal, meningkatkan nilai order rata-rata sambil memberikan nilai nyata ke pembeli.",
                            impact: "AOV +25%"
                        },
                        {
                            tech: "Computer Vision & OCR",
                            title: "Scan-untuk-Pesan Ulang",
                            desc: "Pemilik toko memfoto rak kosong mereka. AI mengidentifikasi produk dan auto-fill keranjang reorder berdasarkan pola pembelian sebelumnya dan level stok saat ini.",
                            impact: "Waktu Reorder -70%"
                        },
                        {
                            tech: "Federated Learning",
                            title: "Beli Bareng Tetangga",
                            desc: "AI sadar ada 5 warung di kode pos sama pesan barang mirip. Dia ajak mereka 'Beli Bareng' buat diskon grosir, atur logistik otomatis.",
                            impact: "Biaya Logistik -25%"
                        },
                        {
                            tech: "Computer Vision (Inventaris)",
                            title: "Rak-ke-Keranjang",
                            desc: "Pemilik warung foto rak kosong mereka. AI identifikasi barang hilang, estimasi jumlah butuh berdasar ukuran rak, dan auto-isi keranjang.",
                            impact: "Kecepatan Pesan 10x"
                        }
                    ]
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
                details: { problem: 'Big brands felt homeless in a messy market.', system: 'Digital Real Estate for Unilever.', outcome: 'Premiums felt Premium again.' },
                details_id: { problem: 'Brand besar merasa "gelandangan" di pasar becek.', system: 'Real Estate Digital buat Unilever.', outcome: 'Premium terasa Premium lagi.' },
                title_id: 'Official Store',
                tag_id: 'Branding',
                caseStudy: {
                    locked: true,
                    summaries: {
                        eli5: {
                            label: "👶 ELI5",
                            title: "Digital Shop Window",
                            text: "Big brands wanted their own fancy space. I built a tool so they can decorate their own little shops inside our app, just like they do in a real mall."
                        },
                        recruiter: {
                            label: "👔 Recruiter",
                            title: "B2B Branding",
                            text: "Created a 'Shop-in-Shop' CMS for major FMCG partners. Allowed brands to manage their own assets, resulting in 50+ onboarded partners."
                        },
                        technical: {
                            label: "🤖 System",
                            title: "Modular CMS",
                            text: "Built a modular CMS with JSON-schema based templates. Enabled dynamic rendering of brand assets while maintaining platform performance guardrails."
                        }
                    },
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
                    aiHypotheses: [
                        {
                            tech: "Generative Design (StyleGAN)",
                            title: "Brand Asset Autopilot",
                            desc: "Brands upload 1 logo and 1 product image. The AI automatically generates 50 variations of banners, social posts, and store themes that adhere to their brand guidelines.",
                            impact: "Onboarding Time -90%"
                        },
                        {
                            tech: "Multimodal LLM & Product Data",
                            title: "AI Product Copywriter",
                            desc: "AI analyzes product images and specs to auto-generate compelling product descriptions, SEO tags, and promotional copy in multiple languages.",
                            impact: "Catalog Setup -80%"
                        },
                        {
                            tech: "Real-time Analytics & Personalization",
                            title: "Dynamic Store Personalization",
                            desc: "Store layout auto-adjusts based on visitor behavior—showing trending products to browsers and reorder suggestions to returning buyers.",
                            impact: "Store Conversion +30%"
                        },
                        {
                            tech: "Generative Video (GenAI)",
                            title: "Instant Ad Creator",
                            desc: "Brands upload static assets. AI generates 15-second high-energy video ads tailored to local trends, ready to be blasted to retailer WhatsApp groups.",
                            impact: "Conversion Rate +15%"
                        },
                        {
                            tech: "Sentiment Analysis Agents",
                            title: "Review Defender",
                            desc: "AI monitors retailer reviews 24/7. Upon spotting a complaint, it drafts a solution-oriented reply and issues an automated apology voucher instantly.",
                            impact: "Churn Rate -10%"
                        }
                    ]
                },
                caseStudy_id: {
                    locked: true,
                    summaries: {
                        eli5: {
                            label: "👶 ELI5",
                            title: "Etalase Digital",
                            text: "Brand besar mau tempat mewah. Saya bikin alat biar mereka bisa hias toko kecil mereka sendiri di dalam aplikasi kami, persis kayak di mall beneran."
                        },
                        recruiter: {
                            label: "👔 Recruiter",
                            title: "Branding B2B",
                            text: "Membuat CMS 'Shop-in-Shop' untuk mitra FMCG besar. Memungkinkan brand mengelola aset mereka sendiri, menghasilkan 50+ mitra onboard."
                        },
                        technical: {
                            label: "🤖 Sistem",
                            title: "CMS Modular",
                            text: "Membangun CMS modular dengan template berbasis skema JSON. Memungkinkan rendering dinamis aset brand sambil menjaga performa platform."
                        }
                    },
                    snapshot: {
                        tagline: "Memberi Unilever dan P&G 'lahan real estate' di pasar yang chaotic.",
                        heroImage: "/commerce_hero.png"
                    },
                    context: {
                        client: "Partnership Strategis",
                        role: "Desainer CMS",
                        timeline: "3 Bulan",
                        team: "Tim Brand"
                    },
                    challenge: "Prinsipal FMCG besar menolak bergabung karena tidak bisa kontrol brand image mereka. Mereka nggak mau sabun premium mereka dipajang di sebelah foto buram kardus berdebu.",
                    process: [
                        { title: "Ketegangan", desc: "Brand minta 'microsites'. Engineering minta 'template standar'. Saya harus desain sistem yang terasa custom tapi digenerate dari skema JSON standar." },
                        { title: "Desain Modular", desc: "Saya buat 'Store Builder' drag-and-drop yang bikin manajer brand bisa atur banner dan karos tanpa coding." }
                    ],
                    insights: [
                        { title: "Vanity Metrics", desc: "Brand lebih peduli 'Total Views' daripada 'Sales'. Saya highlight analitik trafik di dashboard mereka untuk memuaskan kebutuhan ini." }
                    ],
                    solution: [
                        { title: "Store Builder", desc: "Editor WYSIWYG buat manajer brand kustomisasi landing page mereka." },
                        { title: "Badge Terverifikasi", desc: "Centang visual yang menandakan 'Distributor Resmi', meningkatkan kepercayaan pembeli." }
                    ],
                    metrics: [
                        { label: "Onboarded", value: "50+" },
                        { label: "Kenaikan GMV", value: "+22%" },
                        { label: "NPS Brand", value: "65" }
                    ],
                    learnings: "Pembeli B2B juga manusia. Mereka tertarik pada konten yang 'poles' karena itu sinyal keandalan.",
                    aiHypotheses: [
                        {
                            tech: "Generative Design (StyleGAN)",
                            title: "Autopilot Aset Brand",
                            desc: "Brand upload 1 logo dan 1 gambar produk. AI otomatis generate 50 variasi banner, posting sosial, dan tema toko yang sesuai panduan brand mereka.",
                            impact: "Waktu Onboarding -90%"
                        },
                        {
                            tech: "Multimodal LLM & Data Produk",
                            title: "AI Copywriter Produk",
                            desc: "AI menganalisis gambar dan spesifikasi produk untuk auto-generate deskripsi produk yang menarik, tag SEO, dan copy promosi dalam berbagai bahasa.",
                            impact: "Setup Katalog -80%"
                        },
                        {
                            tech: "Real-time Analytics & Personalization",
                            title: "Personalisasi Toko Dinamis",
                            desc: "Layout toko auto-adjust berdasarkan perilaku pengunjung—menampilkan produk trending ke browser dan saran reorder ke pembeli langganan.",
                            impact: "Konversi Toko +30%"
                        },
                        {
                            tech: "Video Generatif",
                            title: "Kreator Iklan Instan",
                            desc: "Brand upload aset statis. AI generate video iklan 15 detik yang energik sesuai tren lokal, siap di-blast ke grup WhatsApp warung.",
                            impact: "Konversi +15%"
                        },
                        {
                            tech: "Agen Analisis Sentimen",
                            title: "Pembela Review",
                            desc: "AI pantau review warung 24/7. Pas nemu komplain, dia draft balasan solutif dan terbitkan voucher maaf otomatis saat itu juga.",
                            impact: "Rate Churn -10%"
                        }
                    ]
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
                details: { problem: 'The anxiety of a math error costing a month\'s profit.', system: 'Conflict-Free Promo Engine.', outcome: 'Zero accidental giveaways.' },
                details_id: { problem: 'Cemas salah hitung yang bikin rugi sebulan.', system: 'Mesin Promo Anti-Konflik.', outcome: 'Nol sedekah tak sengaja.' },
                title_id: 'Promo Center',
                tag_id: 'Pemasaran',
                caseStudy: {
                    locked: true,
                    summaries: {
                        eli5: {
                            label: "👶 ELI5",
                            title: "No More Bad Math",
                            text: "Giving discounts is hard math. I built a calculator that stops you from accidentally giving away too much money or stacking coupons that shouldn't be together."
                        },
                        recruiter: {
                            label: "👔 Recruiter",
                            title: "Operational Safeguards",
                            text: "Designed a conflict-free promotion engine for internal teams. Eliminated pricing errors and increased promo utilization by 25%."
                        },
                        technical: {
                            label: "🤖 System",
                            title: "Dependency Logic",
                            text: "Mapped complex dependency trees to a visual UI. Implemented a logic layer that prevents overlapping rules, ensuring data integrity for pricing."
                        }
                    },
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
                    aiHypotheses: [
                        {
                            tech: "Reinforcement Learning",
                            title: "Dynamic Discount Optimization",
                            desc: "Instead of fixed rules, the AI simulates 10,000 potential cart combinations to find the 'Sweet Spot' discount that maximizes volume without eroding margin. It accepts or rejects the promo for the user.",
                            impact: "Margin Protected +15%"
                        },
                        {
                            tech: "Demand Forecasting & Time Series ML",
                            title: "Optimal Timing Predictor",
                            desc: "AI analyzes historical sales patterns and external factors (holidays, weather) to recommend when to launch promos for maximum impact.",
                            impact: "Promo ROI +40%"
                        },
                        {
                            tech: "Causal Inference & A/B Testing AI",
                            title: "Cannibalization Detector",
                            desc: "Before approving promos, AI predicts if the discount will genuinely drive new sales or just cannibalize organic purchases, saving budget for true growth.",
                            impact: "Wasted Promo Spend -50%"
                        },
                        {
                            tech: "Agentic Negotiation",
                            title: "Supplier-Retailer Haggling",
                            desc: "Retailers can 'make an offer' on bulk buys. An AI agent representing the Principal negotiates based on margin limits, closing deals without human approval.",
                            impact: "Clearence Rate +40%"
                        },
                        {
                            tech: "Graph Neural Networks",
                            title: "Viral Loop Predictor",
                            desc: "AI identifies 'Key Opinion Leaders' (influential warungs) in the graph. It targets promos specifically to them, knowing they influence the purchasing behavior of neighbors.",
                            impact: "Organic Growth +30%"
                        }
                    ]
                },
                caseStudy_id: {
                    locked: true,
                    summaries: {
                        eli5: {
                            label: "👶 ELI5",
                            title: "Anti Salah Hitung",
                            text: "Ngasih diskon itu itungan susah. Saya bikin kalkulator yang nyegah kamu sedekah kebanyakan atau numpuk kupon yang gak seharusnya bareng."
                        },
                        recruiter: {
                            label: "👔 Recruiter",
                            title: "Pengaman Operasional",
                            text: "Mendesain mesin promo anti-konflik untuk tim internal. Menghilangkan error harga dan menaikkan penggunaan promo sebesar 25%."
                        },
                        technical: {
                            label: "🤖 Sistem",
                            title: "Logika Dependensi",
                            text: "Memetakan pohon dependensi kompleks ke UI visual. Implementasi layer logika yang mencegah aturan tumpang tindih, menjaga integritas harga."
                        }
                    },
                    snapshot: {
                        tagline: "Mengubah sakit kepala matematika jadi mesin diskon 1-klik.",
                        heroImage: "/commerce_hero.png"
                    },
                    context: {
                        client: "Internal Tool",
                        role: "Penyederhana Logika",
                        timeline: "2 Bulan",
                        team: "Tim Growth"
                    },
                    challenge: "Mesin promo kami sangat rumit sampai Account Manager (AM) harus pakai kalkulator buat cek logika. Sering terjadi diskon bertumpuk (stacking) yang bikin rugi bandar.",
                    process: [
                        { title: "Mapping Logika", desc: "Saya petakan pohon dependensi diskon kami. Bentuknya kayak benang kusut." },
                        { title: "Perbaikan", desc: "Saya usulkan UI 'Aturan Tumpuk': Kategori tegas (Ongkir, Produk, Bundling) yang tidak boleh tumpang tindih." }
                    ],
                    insights: [
                        { title: "Takut Rugi", desc: "User takut banget 'sedekah tak sengaja'. Saya tambah kalkulator 'Potensi Loss' yang nunjukin maksimal uang terbakar sebelum mereka publish promo." }
                    ],
                    solution: [
                        { title: "Simulator Promo", desc: "Tool yang membiarkan AM ngetes promo mereka lawan keranjang palsu buat lihat harga akhir." },
                        { title: "Mesin Aturan", desc: "Toggle visual untuk promo 'Bisa Digabung' vs 'Eksklusif'." }
                    ],
                    metrics: [
                        { label: "Utilisasi", value: "+25%" },
                        { label: "Error", value: "0%" },
                        { label: "Lonjakan Sales", value: "Tinggi" }
                    ],
                    learnings: "Di sistem kompleks, kejelasan adalah fitur terbaik. Kalau user nggak bisa prediksi hasilnya, sistemnya rusak.",
                    aiHypotheses: [
                        {
                            tech: "Reinforcement Learning",
                            title: "Optimasi Diskon Dinamis",
                            desc: "Alih-alih aturan kaku, AI mensimulasikan 10.000 kombinasi keranjang untuk cari 'Sweet Spot' diskon yang maksimalkan volume tanpa menggerus margin. AI yang accept/reject promo user.",
                            impact: "Margin Terlindungi +15%"
                        },
                        {
                            tech: "Demand Forecasting & Time Series ML",
                            title: "Prediktor Waktu Optimal",
                            desc: "AI menganalisis pola penjualan historis dan faktor eksternal (libur, cuaca) untuk merekomendasikan kapan meluncurkan promo untuk dampak maksimal.",
                            impact: "ROI Promo +40%"
                        },
                        {
                            tech: "Causal Inference & A/B Testing AI",
                            title: "Detektor Kanibalisasi",
                            desc: "Sebelum menyetujui promo, AI memprediksi apakah diskon akan benar-benar mendorong penjualan baru atau hanya kanibalisasi pembelian organik, menghemat budget untuk pertumbuhan nyata.",
                            impact: "Pemborosan Promo -50%"
                        },
                        {
                            tech: "Negosiasi Agentic",
                            title: "Tawar-menawar Supplier-Warung",
                            desc: "Warung bisa 'tawar harga' buat beli banyak. Agen AI mewakili Principal negosiasi berdasar batas margin, deal tanpa persetujuan manusia.",
                            impact: "Rate Habis Stok +40%"
                        },
                        {
                            tech: "Jaringan Saraf Graf",
                            title: "Prediktor Viral Loop",
                            desc: "AI identifikasi 'Tokoh Kunci' (warung berpengaruh) di graf. Dia target promo khusus ke mereka, tau mereka pengaruhi belanja tetangganya.",
                            impact: "Pertumbuhan Organik +30%"
                        }
                    ]
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
                details: { problem: '50 shades of grey buttons created chaos.', system: 'A shared language for devs.', outcome: 'Peace due to consistency.' },
                details_id: { problem: '50 warna tombol abu-abu bikin kacau.', system: 'Bahasa bersama buat developer.', outcome: 'Damai karena konsistensi.' },
                title_id: 'GudangAda Design System',
                tag_id: 'Arsitektur',
                caseStudy: {
                    locked: true,
                    summaries: {
                        eli5: {
                            label: "👶 ELI5",
                            title: "Button Rulebook",
                            text: "We had too many different buttons. I made a rulebook so all buttons look the same and work perfectly, anywhere in the app."
                        },
                        recruiter: {
                            label: "👔 Recruiter",
                            title: "Scalable Design System",
                            text: "Established a comprehensive Design System to unify UI across products. Accelerated developer velocity by 30% and reduced technical debt."
                        },
                        technical: {
                            label: "🤖 System",
                            title: "Tokenized UI Library",
                            text: "Designed a tokenized UI kit synced with Figma tokens. Enforced atomic design principles to ensure consistency and maintainability across the codebase."
                        }
                    },
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
                        { title: "Synced Components", desc: "A design-to-code workflow. Update Figma, sync to production." }
                    ],
                    metrics: [
                        { label: "Dev Velocity", value: "+30%" },
                        { label: "Design Debt", value: "0%" },
                        { label: "Consistency", value: "100%" }
                    ],
                    learnings: "A design system is a product, not a project. It needs maintenance, versioning, and a roadmap.",
                    aiHypotheses: [
                        {
                            tech: "Multimodal LLM (Vision-to-Code)",
                            title: "Screenshot-to-Component",
                            desc: "Designers upload a screenshot of a new UI pattern. The AI scans it against our existing component library and outputs the exact React code using our Design System tokens.",
                            impact: "Design Handoff 0m"
                        },
                        {
                            tech: "Automated Accessibility Testing",
                            title: "A11y Guardian",
                            desc: "AI continuously scans all components for WCAG violations, color contrast issues, and screen reader compatibility, auto-generating fix suggestions.",
                            impact: "Accessibility Score 100%"
                        },
                        {
                            tech: "Change Impact Analysis",
                            title: "Token Change Predictor",
                            desc: "Before updating a design token, AI simulates the visual impact across all screens and apps, showing previews of affected components to prevent breaking changes.",
                            impact: "Breaking Changes -95%"
                        },
                        {
                            tech: "Self-Healing UI",
                            title: "Runtime Error Shim",
                            desc: "If a component crashes in production, the Design System AI swaps it with a 'Safe Mode' fallback version instantly, keeping the app functional while alerting devs.",
                            impact: "Uptime 99.99%"
                        },
                        {
                            tech: "Natural Language to Design",
                            title: "Figma Copilot",
                            desc: "Designers describe a flow: 'Login screen with OTP and social auth'. AI assembles the screen using existing atomic tokens, adhering strictly to spacing guidelines.",
                            impact: "Prototyping Speed 5x"
                        }
                    ]
                },
                caseStudy_id: {
                    locked: true,
                    summaries: {
                        eli5: {
                            label: "👶 ELI5",
                            title: "Buku Aturan Tombol",
                            text: "Tombol kita kebanyakan gaya. Saya bikin buku aturan biar semua tombol kelihatannya sama dan kerjanya bener, di mana aja."
                        },
                        recruiter: {
                            label: "👔 Recruiter",
                            title: "Design System Berskala",
                            text: "Membangun Design System komprehensif untuk menyatukan UI. Mempercepat kerja developer 30% dan mengurangi hutang teknis."
                        },
                        technical: {
                            label: "🤖 Sistem",
                            title: "Library UI Ter-tokenisasi",
                            text: "Membuat library komponen React yang sinkron dengan token Figma. Menegakkan prinsip desain atomik untuk konsistensi dan kemudahan maintenance."
                        }
                    },
                    snapshot: {
                        tagline: "Mengakhiri kekacauan tombol '50 Shades of Grey'.",
                        heroImage: "/commerce_hero.png"
                    },
                    context: {
                        client: "Infrastruktur",
                        role: "Pembangun Sistem",
                        timeline: "1 Tahun",
                        team: "Semua Desainer"
                    },
                    challenge: "Kami punya 15 varian warna biru dan 4 date picker beda. Setiap fitur baru butuh 3 hari cuma buat styling. Utang desain (design debt) memperlambat kami.",
                    process: [
                        { title: "Inventaris", desc: "Saya kumpulkan semua tombol di aplikasi. Melihat semuanya di satu tempat adalah tamparan yang dibutuhkan manajemen." },
                        { title: "Token Atomik", desc: "Saya definisikan variabel inti: Warna, Spasi, Tipografi. Kalau bukan token, berarti nggak ada." }
                    ],
                    insights: [
                        { title: "Dev First", desc: "Saya sadar design system bukan buat desainer; tapi buat developer. Saya tulis dokumentasi pakai bahasa mereka (Props, API), bukan bahasa desain." }
                    ],
                    solution: [
                        { title: "UI Kit", desc: "Library Figma komprehensif dengan komponen auto-layout." },
                        { title: "Library React", desc: "Paket npm yang tersinkronisasi sempurna. Desain sekali, impor di mana saja." }
                    ],
                    metrics: [
                        { label: "Kecepatan Dev", value: "+30%" },
                        { label: "Ukuran Kode", value: "-15%" },
                        { label: "Konsistensi", value: "100%" }
                    ],
                    learnings: "Design system itu produk, bukan proyek. Butuh maintenance, versioning, dan roadmap.",
                    aiHypotheses: [
                        {
                            tech: "Multimodal LLM (Vision-to-Code)",
                            title: "Screenshot-to-Component",
                            desc: "Desainer upload screenshot pola UI baru. AI scan komponen itu lawan library yang ada dan output kode React persis pakai token Design System kami.",
                            impact: "Handoff Desain 0m"
                        },
                        {
                            tech: "Automated Accessibility Testing",
                            title: "A11y Guardian",
                            desc: "AI terus-menerus scan semua komponen untuk pelanggaran WCAG, masalah kontras warna, dan kompatibilitas screen reader, auto-generate saran perbaikan.",
                            impact: "Skor Aksesibilitas 100%"
                        },
                        {
                            tech: "Change Impact Analysis",
                            title: "Prediktor Perubahan Token",
                            desc: "Sebelum update design token, AI simulasikan dampak visual di semua layar dan aplikasi, menampilkan preview komponen yang terpengaruh untuk mencegah breaking changes.",
                            impact: "Breaking Changes -95%"
                        },
                        {
                            tech: "UI Sembuh Sendiri",
                            title: "Penambal Error Runtime",
                            desc: "Kalau komponen crash di produksi, AI Design System tukar sama versi cadangan 'Safe Mode' instan, jaga aplikasi jalan sambil lapor dev.",
                            impact: "Uptime 99.99%"
                        },
                        {
                            tech: "Bahasa Natural ke Desain",
                            title: "Copilot Figma",
                            desc: "Desainer jelasin flow: 'Layar login pakai OTP dan sosmed'. AI rakit layar pakai token atomik yang ada, patuh banget sama aturan spasi.",
                            impact: "Kecepatan Prototyping 5x"
                        }
                    ]
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
        subtitle_id: 'Digitalisasi Kebiasaan',
        companyFocus_id: {
            title: "Realita Operasional",
            items: ["Bahan Baku Segar", "Pengiriman Just-In-Time", "Turnover Pekerja Tinggi"]
        },
        motivation: "Food waste is a logistics failure, not a production one. I spent nights in damp markets watching tons of fresh chili go to rot because the supply chain was a black hole. I wanted to turn that chaos into a symphony of data.",
        motivation_id: "Limbah makanan itu kegagalan logistik, bukan produksi. Saya habiskan malam di pasar lembap melihat berton-ton cabai busuk cuma karena rantai pasoknya gelap gulita. Saya ingin mengubah kekacauan itu jadi simfoni data.",
        brandColor: '#FA6130', // Stoqo Orange
        linkedinUrl: 'https://www.linkedin.com/company/stoqo-technologies/about/',
        heroImage: '/efficiency_hero.png',
        hook: 'Designing for Operational Resilience. Ensuring the people who feed Jakarta have the information bandwidth to sleep until the truck arrives.',
        miniDesc: 'Logistics isn\'t just about moving boxes; it\'s about managing entropy. We built information systems that turn "Unknown Chaos" into "Predictable Data", reducing the cognitive toll on business owners.',
        hook_id: 'Mendesain untuk jam-jam tak terlihat. Memastikan mereka yang memberi makan Jakarta bisa tidur nyenyak sampai truk datang.',
        miniDesc_id: 'Logistik bukan cuma soal mindahin kardus. Ini soal kecemasan pemilik restoran yang nunggu jam 4 pagi, bertanya-tanya apakah bahan masakannya bakal nyampe.',
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
        culture_id: {
            title: "Garis Depan",
            description: "Sebagai salah satu desainer awal, saya menyentuh hampir semua lini produk—mulai dari aplikasi pelanggan hingga logistik gudang yang kompleks. Kami membangun budaya untuk berani 'Turun Tangan' (Get Your Hands Dirty)."
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
                details: { problem: 'Waking up at 3 AM just to stare at an empty road.', system: 'Peace-of-Mind Tracking.', outcome: 'They finally slept in.' },
                details_id: { problem: 'Bangun jam 3 pagi cuma buat melototin jalan kosong.', system: 'Pelacakan Penenang Hati.', outcome: 'Akhirnya mereka bisa tidur.' },
                title_id: 'Transformasi Pengiriman Logistik',
                tag_id: 'Logistik',
                caseStudy: {
                    locked: true,
                    summaries: {
                        eli5: {
                            label: "👶 ELI5",
                            title: "Where's My Truck?",
                            text: "Waiting for a truck in the dark is scary. I made an app that tells you exactly where the truck is, so you can stop worrying and go to sleep."
                        },
                        recruiter: {
                            label: "👔 Recruiter",
                            title: "Service Reliability",
                            text: "Solved a critical anxiety point by implementing real-time logistics tracking. Reduced support tickets by 60% and increased customer reliance."
                        },
                        technical: {
                            label: "🤖 System",
                            title: "Telemetry & Push",
                            text: "Designed a real-time tracking interface. Replaced anxiety with visibility using live status updates."
                        }
                    },
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
                    aiHypotheses: [
                        {
                            tech: "Computer Vision & IoT",
                            title: "Smart Loading Docks",
                            desc: "Cameras at the warehouse scan the volume of goods being loaded. The AI predicts the exact truck fill-rate and notifies the customer: 'Your order consumes 40% of the truck, arriving in 2 hours.'",
                            impact: "Capacity Usage +20%"
                        },
                        {
                            tech: "Predictive ML & Weather API",
                            title: "Traffic-Aware ETAs",
                            desc: "Machine learning model trained on historical delivery data, real-time traffic, and weather patterns. Auto-adjusts ETAs and proactively notifies users before delays happen.",
                            impact: "ETA Accuracy +35%"
                        },
                        {
                            tech: "LLM & Voice Interface",
                            title: "WhatsApp AI Concierge",
                            desc: "An AI assistant that users can text naturally: 'Where's my order?' It understands context, checks the system, and replies in Bahasa Indonesia with real-time updates.",
                            impact: "Support Load -70%"
                        },
                        {
                            tech: "Dynamic Routing Optimization",
                            title: "Mid-Route Correction",
                            desc: "Traffic jam ahead? AI re-routes the entire fleet in real-time, swapping drop-off orders between trucks to ensure every warung gets goods before opening time.",
                            impact: "Late Deliveries -40%"
                        },
                        {
                            tech: "Load Balancing AI",
                            title: "Perfect Tetris",
                            desc: "AI simulates 1,000 loading configurations to maximize truck fill rate while minimizing 'Last In, First Out' friction for drivers.",
                            impact: "Fuel Efficiency +15%"
                        }
                    ]
                },
                caseStudy_id: {
                    locked: true,
                    summaries: {
                        eli5: {
                            label: "👶 ELI5",
                            title: "Truk Saya Dimana?",
                            text: "Nunggu truk pas gelap itu nyeremin. Saya bikin aplikasi yang kasih tau posisi truk, jadi kamu bisa tenang dan tidur."
                        },
                        recruiter: {
                            label: "👔 Recruiter",
                            title: "Keandalan Layanan",
                            text: "Menyelesaikan masalah kecemasan kritis dengan pelacakan logistik real-time. Mengurangi tiket support 60% dan menaikkan kepercayaan."
                        },
                        technical: {
                            label: "🤖 Sistem",
                            title: "Telemetri & Push",
                            text: "Integrasi telemetri GPS untuk update status real-time. Mendesain sistem push-notification untuk info proaktif, mengurangi polling server."
                        }
                    },
                    snapshot: {
                        tagline: "Mengakhiri siklus cemas 'Truk saya di mana?'",
                        heroImage: null
                    },
                    context: {
                        client: "STOQO Logistics",
                        role: "End-to-End Experience",
                        timeline: "2 Bulan",
                        team: "Ops & Engineering"
                    },
                    challenge: "Saya menemukan fakta pahit: pengguna kami bangun jam 4 pagi bukan untuk bekerja, tapi untuk menunggu. Pengiriman terlambat bukan cuma ketidaknyamanan; ini ancaman eksistensial bagi usaha warung mereka. Tantangan saya adalah memutus siklus kecemasan ini tanpa punya budget untuk beli 100 truk baru.",
                    process: [
                        { title: "Metodologi", desc: "Saya tidak percaya tiket Jira, jadi saya ikut naik truk pengiriman. Saya melihat sopir kesulitan SMS sambil menyetir. Sistemnya bukan rusak; tapi berbahaya.", image: "/case-studies/delivery-methods/screen-shot-2020.png" },
                        { title: "Insight Utama", desc: "Setelah bicara dengan 5 pemilik warung, saya temukan konflik aslinya: Masalahnya bukan kecepatan. Tapi kesunyian (ketidaktahuan). Mereka bisa terima telat; tapi nggak bisa terima kalau nggak dikabarin.", image: "/case-studies/delivery-methods/untitled.png" },
                        { title: "Studi Lapangan", desc: "Saya bergabung dengan Field Activators untuk melihat kekacauan di lapangan. Ini menjembatani 'Keluhan Pelanggan' dengan 'Realita Operasional'.", image: "/case-studies/delivery-methods/img-20190502.jpg" },
                        { title: "Workshop Analisis", desc: "Saya memfasilitasi sesi journey mapping di mana kami identifikasi 4 pain points: Mismacth Mental Model, Ketidakpastian, Kurang Komunikasi, dan Kurang Awareness.", image: "/case-studies/delivery-methods/customer-app-board.jpg" },
                        { title: "Ko-Kreasi", desc: "Saya tidak mendesain sendirian. Saya pimpin workshop seharian bareng Lead Engineering dan Ops untuk memastikan desain ini bisa dibangun (feasible).", image: "/case-studies/delivery-methods/img-20190507.jpg" },
                        { title: "Ideasi", desc: "Fokus berubah ke: 'Gimana cara kita kelola kecemasan user?'. Jawabannya bukan 'truk lebih cepat'—tapi 'informasi yang lebih baik'.", image: "/case-studies/delivery-methods/customer-app-board-1.jpg" },
                        { title: "Validasi", desc: "Saya bawa high-fidelity prototype kembali ke user untuk testing sprint 3 hari. Melihat mereka bingung adalah validasi terbaik.", image: "/case-studies/delivery-methods/untitled-1.png" }
                    ],
                    insights: [
                        { title: "Psikologi Menunggu", desc: "Menunggu yang jelas estimasinya terasa lebih cepat daripada menunggu tanpa kabar. Estimasi kasar pun bisa menenangkan user." },
                        { title: "Masalah 'Kepagian'", desc: "Ternyata, sopir yang datang kepagian juga masalah. Warung belum siap terima barang jam 3 pagi kalau janjinya jam 5." }
                    ],
                    solution: [
                        { title: "Pelacakan Status", desc: "Saya curi mental model dari Domino's Pizza. Kalau pizza 50 ribu aja bisa dilacak, kenapa beras 500 ribu enggak?", image: "/case-studies/delivery-methods/tes.png" },
                        { title: "Notifikasi Proaktif", desc: "Berhenti nunggu user nanya. Saya desain notifikasi yang otomatis dikirim begitu truk keluar dari gudang.", image: "/case-studies/delivery-methods/tes2.png" },
                        { title: "Info Pengemudi", desc: "Info kontak sopir yang aman, memberi user jalur langsung ke barang mereka.", image: "/case-studies/delivery-methods/tes3.png" }
                    ],
                    metrics: [
                        { label: "Tiket Support", value: "-60%" },
                        { label: "Trust", value: "+40%" },
                        { label: "Repeat Order", value: "+10%" }
                    ],
                    learnings: "Transparansi itu lebih murah daripada kecepatan. User mau nunggu kalau mereka tau alasannya. Proyek ini bukan soal UI; ini soal menjual 'ketenangan pikiran' sebagai fitur.",
                    aiHypotheses: [
                        {
                            tech: "Computer Vision & IoT",
                            title: "Loading Dock Pintar",
                            desc: "Kamera di gudang men-scan volume barang yang dimuat. AI memprediksi seberapa penuh truk dan memberi notifikasi ke user: 'Pesanan Anda memakan 40% kapasitas truk, tiba dalam 2 jam.'",
                            impact: "Kapasitas Terpakai +20%"
                        },
                        {
                            tech: "Predictive ML & Weather API",
                            title: "ETA Sadar-Lalu Lintas",
                            desc: "Model machine learning yang dilatih dari data historis pengiriman, lalu lintas real-time, dan pola cuaca. Auto-adjust ETA dan proaktif notifikasi user sebelum keterlambatan terjadi.",
                            impact: "Akurasi ETA +35%"
                        },
                        {
                            tech: "LLM & Voice Interface",
                            title: "Concierge AI WhatsApp",
                            desc: "Asisten AI yang bisa diajak chat natural: 'Pesanan saya dimana?' Dia paham konteks, cek sistem, dan balas dalam Bahasa Indonesia dengan update real-time.",
                            impact: "Beban Support -70%"
                        },
                        {
                            tech: "Optimasi Rute Dinamis",
                            title: "Koreksi Tengah Jalan",
                            desc: "Macet di depan? AI rute ulang seluruh armada real-time, tukar urutan drop-off antar truk biar setiap warung dapat barang sebelum buka.",
                            impact: "Terlambat -40%"
                        },
                        {
                            tech: "AI Penyeimbang Muatan",
                            title: "Tetris Sempurna",
                            desc: "AI simulasi 1.000 konfigurasi muat buat maksimalkan isi truk sambil minimalkan gesekan 'Masuk Terakhir, Keluar Pertama' buat sopir.",
                            impact: "Efisiensi Bensin +15%"
                        }
                    ]
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
                details: { problem: 'The lonely road of a solo sales agent.', system: 'Gamified Team Structure.', outcome: 'Work felt like a sport.' },
                details_id: { problem: 'Jalan sepi seorang agen sales sendirian.', system: 'Struktur Tim Tergamifikasi.', outcome: 'Kerja rasa olahraga.' },
                title_id: 'Agen Penjualan Insentif',
                tag_id: 'Gamifikasi',
                caseStudy: {
                    locked: true,
                    summaries: {
                        eli5: {
                            label: "👶 ELI5",
                            title: "Work as a Game",
                            text: "Sales work is boring. I turned it into a game with flames and high scores, so it feels fun to try harder."
                        },
                        recruiter: {
                            label: "👔 Recruiter",
                            title: "Behavior Modification",
                            text: "Gamified the sales agent experience to boost motivation. Introduced streaks and leaderboards, increasing Daily Active Users (DAU) by 40%."
                        },
                        technical: {
                            label: "🤖 System",
                            title: "Gamification Engine",
                            text: "Designed gamification mechanics (streaks, badges) to drive user engagement. Used local storage and backend sync to maintain real-time engagement data."
                        }
                    },
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
                    aiHypotheses: [
                        {
                            tech: "Personalized Coaching Agents",
                            title: "The 'Jarvis' for Sales",
                            desc: "An AI voice coach that listens to sales calls (privacy-safe) and gives real-time whispers: 'Talk slower', 'Mention the bundle discount now', 'They sound hesitant about price'.",
                            impact: "Conversion Rate +25%"
                        },
                        {
                            tech: "ML & Performance Analytics",
                            title: "Challenge Generator",
                            desc: "AI analyzes individual agent performance and dynamically creates personalized daily challenges calibrated to push them just outside their comfort zone.",
                            impact: "Target Achievement +40%"
                        },
                        {
                            tech: "Social AI & Network Analysis",
                            title: "Peer Mentor Matching",
                            desc: "AI identifies top performers and struggling agents, then creates mentor-mentee pairings with suggested talking points and success pattern transfers.",
                            impact: "Team Performance +20%"
                        },
                        {
                            tech: "Emotion AI",
                            title: "Burnout Detector",
                            desc: "AI analyzes voice tone and activity pauses. If an agent sounds exhausted, it auto-suggests a 15-min break or lowers the daily target slightly to prevent churn.",
                            impact: "Agent Retention +25%"
                        },
                        {
                            tech: "Knowledge Graph RAG",
                            title: "Instant Competitor Battlecard",
                            desc: "Agent at a shop sees a competitor's brochure. They snap a pic. AI reads it and whispers: 'We are cheaper on oil, mention that now!'.",
                            impact: "Win Rate +20%"
                        }
                    ]
                },
                caseStudy_id: {
                    locked: true,
                    summaries: {
                        eli5: {
                            label: "👶 ELI5",
                            title: "Kerja Rasa Main",
                            text: "Kerja sales itu bosenin. Saya ubah jadi game dengan api dan skor tinggi, jadi rasanya seru buat kerja lebih keras."
                        },
                        recruiter: {
                            label: "👔 Recruiter",
                            title: "Modifikasi Perilaku",
                            text: "Meng-gamifikasi pengalaman agen sales untuk dongkrak motivasi. Memperkenalkan streak dan leaderboard, menaikkan DAU sebesar 40%."
                        },
                        technical: {
                            label: "🤖 Sistem",
                            title: "Mesin Gamifikasi",
                            text: "Implementasi mekanika game (streak, badges) di aplikasi sales. Menggunakan local storage dan sync backend untuk data engagement real-time."
                        }
                    },
                    snapshot: {
                        tagline: "Pakai mekanika video game buat genjot penjualan nyata.",
                        heroImage: "/efficiency_hero.png"
                    },
                    context: {
                        client: "Sales Force",
                        role: "Saya Gamifikasi Apps",
                        timeline: "3 Bulan",
                        team: "Sales Ops"
                    },
                    challenge: "Agen lapangan kami kurang termotivasi. Mereka anggap aplikasi itu beban administrasi. Tingkat login rendah, input data asal-asalan. Kami harus bikin kerjaan 'membosankan' ini jadi terasa rewarding.",
                    process: [
                        { title: "User Interviews", desc: "Saya temukan kalau agen itu sangat kompetitif. Mereka suka banding-bandingin stats di grup WhatsApp. Saya harus bawa kompetisi itu masuk ke aplikasi." },
                        { title: "Design Sprint", desc: "Kami tes leaderboard, badges, dan streaks. Konsep 'Streak' (berturut-turut) menang telak." }
                    ],
                    insights: [
                        { title: "Loss Aversion", desc: "Agen bekerja lebih keras untuk 'menjaga streak' daripada untuk 'dapet bonus'. Psikologi takut kehilangan itu kuat banget." }
                    ],
                    solution: [
                        { title: "Daily Streak", desc: "Ikon api yang makin panas setiap hari mereka capai target. Memutus streak rasanya sakit." },
                        { title: "Leaderboard Regional", desc: "Ranking live agen terbaik di kota mereka. Hak pamer (bragging rights) memacu performa." }
                    ],
                    metrics: [
                        { label: "DAU", value: "+40%" },
                        { label: "Vol Penjualan", value: "+18%" },
                        { label: "Engagement", value: "Tinggi" }
                    ],
                    learnings: "Gamifikasi bukan cuma tempel lencana. Ini soal memanfaatkan dorongan alami manusia: penguasaan skill, status sosial, dan FOMO.",
                    aiHypotheses: [
                        {
                            tech: "Personalized Coaching Agents",
                            title: "'Jarvis' untuk Sales",
                            desc: "AI voice coach yang dengerin panggilan sales (privacy-safe) dan kasih bisikan real-time: 'Ngomongnya pelan dikit', 'Tawarin diskon bundle sekarang', 'Mereka kedengeran ragu soal harga tuh'.",
                            impact: "Konversi +25%"
                        },
                        {
                            tech: "ML & Performance Analytics",
                            title: "Generator Tantangan",
                            desc: "AI menganalisis performa individu agen dan secara dinamis membuat tantangan harian yang dipersonalisasi untuk mendorong mereka keluar dari zona nyaman.",
                            impact: "Pencapaian Target +40%"
                        },
                        {
                            tech: "Social AI & Network Analysis",
                            title: "Pencocokan Mentor Peer",
                            desc: "AI mengidentifikasi top performer dan agen yang struggle, lalu membuat pasangan mentor-mentee dengan poin diskusi dan transfer pola sukses yang disarankan.",
                            impact: "Performa Tim +20%"
                        },
                        {
                            tech: "AI Emosi",
                            title: "Detektor Burnout",
                            desc: "AI analisis nada suara dan jeda aktivitas. Kalau agen kedengeran lelah, dia saranin istirahat 15 menit atau kurangi target harian dikit buat cegah resign.",
                            impact: "Retensi Agen +25%"
                        },
                        {
                            tech: "RAG Graf Pengetahuan",
                            title: "Kartu Lawan Kompetitor Instan",
                            desc: "Agen di warung lihat brosur kompetitor. Mereka foto. AI baca dan bisikin: 'Minyak kita lebih murah, bilang itu sekarang!'.",
                            impact: "Win Rate +20%"
                        }
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
                iconName: 'Scan',
                details: { problem: 'The panic of a lost invoice in a chaotic kitchen.', system: 'Camera-as-Keyboard.', outcome: 'No more "lost money".' },
                details_id: { problem: 'Paniknya bon hilang di dapur yang chaos.', system: 'Kamera-jadi-Keyboard.', outcome: 'Gak ada lagi "uang hilang".' },
                title_id: 'Paper-to-Paperless (Konsep)',
                tag_id: 'Keberlanjutan',
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
                    aiHypotheses: [
                        {
                            tech: "Visual Document Understanding (VDU)",
                            title: "Semantic Search for Paper",
                            desc: "You can ask the system: 'Find me the invoice for the red chair we bought last May.' The AI visualizes the document and highlights the exact line item.",
                            impact: "Audit Speed 100x"
                        },
                        {
                            tech: "Anomaly Detection & Pattern Recognition",
                            title: "Expense Fraud Spotter",
                            desc: "AI analyzes scanned receipts for anomalies like duplicate submissions, unusual vendors, or out-of-policy amounts, flagging suspicious claims before approval.",
                            impact: "Fraud Detection +85%"
                        },
                        {
                            tech: "Multi-Document Intelligence",
                            title: "Contract Auto-Reconciler",
                            desc: "Upload a contract and its related invoices. AI automatically matches line items, flags discrepancies, and generates a reconciliation report.",
                            impact: "Reconciliation Time -90%"
                        },
                        {
                            tech: "Predictive Analytics",
                            title: "Cashflow Crystal Ball",
                            desc: "By digitizing all pending invoices, AI predicts cash flow gaps 30 days out. 'Warning: You will be short on cash on Feb 12th unless you delay payment to Vendor X'.",
                            impact: "Liquidity Crisis -80%"
                        },
                        {
                            tech: "Robotic Process Automation (AI-RPA)",
                            title: "One-Click Pay",
                            desc: "AI verifies the invoice against the delivery order. If they match perfectly, it schedules the payment automatically. Humans only review the mismatches.",
                            impact: "Manual Org Hours -95%"
                        }
                    ]
                },
                caseStudy_id: {
                    locked: true,
                    snapshot: {
                        tagline: "Memusnahkan lemari arsip, satu scan tiap kali.",
                        heroImage: "/efficiency_hero.png"
                    },
                    context: {
                        client: "Ops Internal",
                        role: "Visi Masa Depan",
                        timeline: "1 Bulan",
                        team: "Proyek Solo"
                    },
                    challenge: "Kantor kami tenggelam dalam kertas. Faktur, surat jalan, bon. Dokumen hilang, kena tumpahan kopi, dan datanya 'gelap' (tidak bisa diolah).",
                    process: [
                        { title: "Observasi", desc: "Saya perhatikan tim admin menghabiskan 4 jam sehari cuma buat ketik ulang data dari kertas ke komputer." },
                        { title: "Ideasi", desc: "Gimana kalau kamera jadi keyboard-nya? Saya mock-up alur OCR yang otomatis ngisi formulir." }
                    ],
                    insights: [
                        { title: "Percaya Mesin", desc: "User awalnya skeptis sama akurasi OCR. Saya desain UI 'Skor Kepercayaan' (Confidence Score) yang menghighlight kolom mana yang AI-nya ragu, jadi user bisa cek ulang." }
                    ],
                    solution: [
                        { title: "Smart Scan", desc: "Arahkan kamera ke faktur, dan aplikasi langsung ekstrak Tanggal, Total, dan Vendor." },
                        { title: "Arsip Digital", desc: "Kolom pencarian yang bisa nemuin bon dari 3 tahun lalu dalam 2 detik." }
                    ],
                    metrics: [
                        { label: "Kertas Turun", value: "90%" },
                        { label: "Cari Cepat", value: "100x" },
                        { label: "Hemat Biaya", value: "Tinggi" }
                    ],
                    learnings: "Masa depan itu pasti, tapi butuh jembatan. 'Confidence Score' adalah jembatan yang bikin user berani percaya sama AI.",
                    aiHypotheses: [
                        {
                            tech: "Visual Document Understanding (VDU)",
                            title: "Pencarian Semantik Kertas",
                            desc: "Anda bisa tanya sistem: 'Cariin faktur kursi merah yang kita beli Mei lalu.' AI bakal visualisasikan dokumen dan highlight baris item yang dimaksud.",
                            impact: "Kecepatan Audit 100x"
                        },
                        {
                            tech: "Anomaly Detection & Pattern Recognition",
                            title: "Pendeteksi Fraud Pengeluaran",
                            desc: "AI menganalisis bon yang di-scan untuk anomali seperti pengajuan ganda, vendor tidak biasa, atau jumlah di luar kebijakan, menandai klaim mencurigakan sebelum disetujui.",
                            impact: "Deteksi Fraud +85%"
                        },
                        {
                            tech: "Multi-Document Intelligence",
                            title: "Auto-Rekonsiliasi Kontrak",
                            desc: "Upload kontrak dan faktur terkait. AI otomatis mencocokkan item baris, menandai perbedaan, dan menghasilkan laporan rekonsiliasi.",
                            impact: "Waktu Rekonsiliasi -90%"
                        },
                        {
                            tech: "Analitik Prediktif",
                            title: "Bola Kristal Arus Kas",
                            desc: "Dengan digitalisasi semua tagihan tunda, AI prediksi celah arus kas 30 hari ke depan. 'Awas: Kas bakal kurang tgl 12 Feb kecuali tunda bayar Vendor X'.",
                            impact: "Krisis Likuiditas -80%"
                        },
                        {
                            tech: "Otomasi Proses Robotik (AI-RPA)",
                            title: "Bayar Satu Klik",
                            desc: "AI verifikasi tagihan lawan surat jalan. Kalau cocok sempurna, dia jadwalin pembayaran otomatis. Manusia cuma review yang gak cocok.",
                            impact: "Jam Kerja Manual -95%"
                        }
                    ]
                }
            }
        ]
    }
];
