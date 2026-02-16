
export const stoqo = {
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
    motivation: "Coming from a non-urban city like Padang—where culinary culture is global—made me deeply aware of how supply chains impact daily life. I wanted to help ease the pain points of my fellow people from Padang, ensuring they get fresher ingredients at cheaper prices.",
    motivation_id: "Berasal dari kota non-metropolitan seperti Padang—di mana budaya kulinernya mendunia—membuat saya sadar betapa rantai pasok berdampak pada hidup sehari-hari. Saya ingin membantu meringankan beban sesama perantau Minang, memastikan mereka mendapatkan bahan baku lebih segar dengan harga lebih murah.",
    brandColor: '#FA6130', // Stoqo Orange
    linkedinUrl: 'https://www.linkedin.com/company/stoqo-technologies/about/',
    heroImage: '/work/stoqo-hero.png',
    hook: 'Designing for Operational Resilience. Ensuring the people who feed Jakarta have the information bandwidth to sleep until the truck arrives.',
    miniDesc: 'Logistics isn\'t just about moving boxes; it\'s about managing entropy. We built information systems that turn "Unknown Chaos" into "Predictable Data", reducing the cognitive toll on business owners.',
    hook_id: 'Mendesain untuk jam-jam tak terlihat. Memastikan mereka yang memberi makan Jakarta bisa tidur nyenyak sampai truk datang.',
    miniDesc_id: 'Logistik bukan cuma soal mindahin kardus. Ini soal kecemasan pemilik restoran yang nunggu jam 4 pagi, bertanya-tanya apakah bahan masakannya bakal nyampe.',
    stats: [
        { label: 'Role', value: 'Product Designer' },
        { label: 'Teams', value: 'Sales App, Customer App, Warehouse, Design Ops' },
        { label: 'Timeline', value: 'March 2018 - April 2020' },
        { label: 'Impact', value: 'Operational Efficiency' },
        { label: 'Platform', value: 'Mobile Apps & Website' }
    ],
    culture: {
        title: "The Arena",
        description: "I worked there as one of the early product designers, touching almost every product line—from customer-facing apps to complex warehousing logistics. I also contributed to Design Ops by mentoring interns and supporting the hiring process. We built a culture of 'Get Your Hands Dirty'.",
        disclaimer: "If anyone on the team is uncomfortable with their image being featured here, please reach out to me and I'll remove it immediately.",
        layout: "symmetric-grid",
        images: [
            { src: "/work/stoqo-team.jpg", caption: "My Birthday years ago!", span: "md:col-start-1 md:row-start-1" },
            { src: "/work/stoqo-hawaiian.jpg", caption: "Halloween day at the office", span: "md:col-start-1 md:row-start-2" },
            { src: "/work/stoqo-office.jpg", caption: "At the HQ", span: "md:col-start-2 md:row-start-1 md:row-span-2 h-full" },
            { src: "/work/stoqo-batik.jpg", caption: "Early days of Stoqo", span: "md:col-start-3 md:row-start-1" },
            { src: "/work/stoqo-remote.jpg", caption: "Design Team Assemble", span: "md:col-start-3 md:row-start-2" }
        ]
    },
    culture_id: {
        title: "Garis Depan",
        description: "Sebagai salah satu desainer awal, saya menyentuh hampir semua lini produk—mulai dari aplikasi pelanggan hingga logistik gudang yang kompleks. Kami membangun budaya untuk berani 'Turun Tangan' (Get Your Hands Dirty).",
        disclaimer: "Jika ada anggota tim yang tidak nyaman dengan fotonya ditampilkan di sini, silakan hubungi saya dan saya akan segera menghapusnya."
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
                        text: "Solved a critical anxiety point by implementing real-time logistics tracking. Reduced support tickets significantly and increased customer reliance."
                    },
                    technical: {
                        label: "🤖 System",
                        title: "Telemetry & Push",
                        text: "Designed a real-time tracking interface. Replaced anxiety with visibility using live status updates."
                    }
                },
                snapshot: {
                    tagline: "Solving the 'Where is my truck?' anxiety loop.",
                    heroImage: "airy:network"
                },
                context: {
                    client: "STOQO Logistics",
                    role: "End-to-End Experience",
                    timeline: "2 Months",
                    team: "Ops & Engineering"
                },
                challenge: "I discovered a harsh reality: our users were waking up at 4 AM not to work, but to wait. Late deliveries weren't just an inconvenience; they were an existential threat. My challenge was to break this cycle of anxiety without having the budget to buy 100 new trucks.",
                process: [

                    { title: "Methodology", desc: "I didn't trust the Jira tickets, so I rode in the delivery trucks. I saw drivers struggling to text while driving. The 'system' wasn't broken; it was dangerous.", image: "airy:timeline" },
                    { title: "The Insight", desc: "Talking to 5 owners, I found the real conflict: It wasn't about speed. It was about silence. They could handle a late truck; they couldn't handle not knowing.", image: "airy:venn" },
                    { title: "Field Study", desc: "I joined the Field Activators to see the chaos on the ground. This bridged the gap between 'Customer Complaints' and 'Operational Reality'.", image: "airy:ecosystem" },
                    { title: "Analysis Workshop", desc: "I facilitated the journey mapping session where we identified 4 pain points: Mental Model Mismatch, Uncertainty, Lack of Communication, and Lack of Awareness.", image: "airy:matrix" },
                    { title: "Co-Creation", desc: "I didn't design in a silo. I led a full-day workshop with the Engineering and Ops leads to ensure technical feasibility wasn't an afterthought.", image: "airy:flow" },
                    { title: "Ideation", desc: "The focus shifted to: 'How Might We manage user anxiety?'. The answer wasn't just 'faster trucks'—it was 'better information'.", image: "airy:architecture" },
                    { title: "Validation", desc: "I took the high-fidelity prototypes back to the users for a 3-day testing sprint. Watching them struggle is the best validity test.", image: "airy:chart" }
                ],
                insights: [
                    { title: "Psychology of Waiting", desc: "I learned that known waits feel shorter than unknown waits. Even a rough estimate calms the user." },
                    { title: "The 'Early' Problem", desc: "Surprisingly, drivers arriving too early was also a disruption. Customers weren't ready to receive goods at 3 AM if they expected 5 AM." }
                ],
                solution: [
                    {
                        title: "Live Logistics Prototype",
                        desc: "Experience the real-time delivery tracking interface. Note: This is a high-fidelity recreation of the original 2018 prototype.",
                        componentId: "stoqo-logistics-live"
                    },
                    {
                        title: "B2B Delivery Experience (1)",
                        desc: "3 hours after purchase cut-off time, user will receive a delivery status notification as reminder for tomorrow delivery.",
                        image: "/case-studies/stoqo-logistics/delivery-experience-1.png"
                    },
                    {
                        title: "B2B Delivery Experience (2)",
                        desc: "User will receive a delivery status notification informing that the delivery is on the way (Ready to deliver) or already arrived.",
                        image: "/case-studies/stoqo-logistics/delivery-experience-2.png"
                    }
                ],
                metrics: [
                    { label: "Support Tix", value: "Drastically Reduced" },
                    { label: "Trust", value: "Increased Trust" },
                    { label: "Repeat Order", value: "Improved Retention" }
                ],
                learnings: "Transparency is cheaper than speed. Users will wait if they know why. This project wasn't about UI; it was about selling 'peace of mind' as a feature.",

                aiHypotheses: [
                    {
                        tech: "Computer Vision & IoT",
                        title: "Smart Loading Docks",
                        desc: "Cameras at the warehouse scan the volume of goods being loaded. The AI predicts the exact truck fill-rate and notifies the customer: 'Your order consumes 40% of the truck, arriving in 2 hours.'",
                        impact: "Optimized Capacity"
                    },
                    {
                        tech: "Predictive ML & Weather API",
                        title: "Traffic-Aware ETAs",
                        desc: "Machine learning model trained on historical delivery data, real-time traffic, and weather patterns. Auto-adjusts ETAs and proactively notifies users before delays happen.",
                        impact: "Higher ETA Accuracy"
                    },
                    {
                        tech: "LLM & Voice Interface",
                        title: "WhatsApp AI Concierge",
                        desc: "An AI assistant that users can text naturally: 'Where's my order?' It understands context, checks the system, and replies in Bahasa Indonesia with real-time updates.",
                        impact: "Reduced Support Load"
                    },
                    {
                        tech: "Dynamic Routing Optimization",
                        title: "Mid-Route Correction",
                        desc: "Traffic jam ahead? AI re-routes the entire fleet in real-time, swapping drop-off orders between trucks to ensure every warung gets goods before opening time.",
                        impact: "Fewer Late Deliveries"
                    },
                    {
                        tech: "Load Balancing AI",
                        title: "Perfect Tetris",
                        desc: "AI simulates 1,000 loading configurations to maximize truck fill rate while minimizing 'Last In, First Out' friction for drivers.",
                        impact: "Better Fuel Efficiency"
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
                        text: "Menyelesaikan masalah kecemasan kritis dengan pelacakan logistik real-time. Mengurangi tiket support secara drastis dan menaikkan kepercayaan."
                    },
                    technical: {
                        label: "🤖 Sistem",
                        title: "Telemetri & Push",
                        text: "Integrasi telemetri GPS untuk update status real-time. Mendesain sistem push-notification untuk info proaktif, mengurangi polling server."
                    }
                },
                snapshot: {
                    tagline: "Mengakhiri siklus cemas 'Truk saya di mana?'",
                    heroImage: "airy:network"
                },
                context: {
                    client: "STOQO Logistics",
                    role: "End-to-End Experience",
                    timeline: "2 Bulan",
                    team: "Ops & Engineering"
                },
                challenge: "Saya menemukan fakta pahit: pengguna kami bangun jam 4 pagi bukan untuk bekerja, tapi untuk menunggu. Pengiriman terlambat bukan cuma ketidaknyamanan; ini ancaman eksistensial bagi usaha warung mereka. Tantangan saya adalah memutus siklus kecemasan ini tanpa punya budget untuk beli 100 truk baru.",
                process: [
                    { title: "Metodologi", desc: "Saya tidak percaya tiket Jira, jadi saya ikut naik truk pengiriman. Saya melihat sopir kesulitan SMS sambil menyetir. Sistemnya bukan rusak; tapi berbahaya.", image: "airy:timeline" },
                    { title: "Insight Utama", desc: "Setelah bicara dengan 5 pemilik warung, saya temukan konflik aslinya: Masalahnya bukan kecepatan. Tapi kesunyian (ketidaktahuan). Mereka bisa terima telat; tapi nggak bisa terima kalau nggak dikabarin.", image: "airy:venn" },
                    { title: "Studi Lapangan", desc: "Saya bergabung dengan Field Activators untuk melihat kekacauan di lapangan. Ini menjembatani 'Keluhan Pelanggan' dengan 'Realita Operasional'.", image: "airy:ecosystem" },
                    { title: "Workshop Analisis", desc: "Saya memfasilitasi sesi journey mapping di mana kami identifikasi 4 pain points: Mismacth Mental Model, Ketidakpastian, Kurang Komunikasi, dan Kurang Awareness.", image: "airy:matrix" },
                    { title: "Ko-Kreasi", desc: "Saya tidak mendesain sendirian. Saya pimpin workshop seharian bareng Lead Engineering dan Ops untuk memastikan desain ini bisa dibangun (feasible).", image: "airy:flow" },
                    { title: "Ideasi", desc: "Fokus berubah ke: 'Gimana cara kita kelola kecemasan user?'. Jawabannya bukan 'truk lebih cepat'—tapi 'informasi yang lebih baik'.", image: "airy:architecture" },
                    { title: "Validasi", desc: "Saya bawa high-fidelity prototype kembali ke user untuk testing sprint 3 hari. Melihat mereka bingung adalah validasi terbaik.", image: "airy:chart" }
                ],
                insights: [
                    { title: "Psikologi Menunggu", desc: "Menunggu yang jelas estimasinya terasa lebih cepat daripada menunggu tanpa kabar. Estimasi kasar pun bisa menenangkan user." },
                    { title: "Masalah 'Kepagian'", desc: "Ternyata, sopir yang datang kepagian juga masalah. Warung belum siap terima barang jam 3 pagi kalau janjinya jam 5." }
                ],
                solution: [
                    { title: "Pelacakan Status", desc: "Saya curi mental model dari Domino's Pizza. Kalau pizza 50 ribu aja bisa dilacak, kenapa beras 500 ribu enggak?", image: "airy:radar" },
                    { title: "Notifikasi Proaktif", desc: "Berhenti nunggu user nanya. Saya desain notifikasi yang otomatis dikirim begitu truk keluar dari gudang.", image: "airy:flow" },
                    { title: "Info Pengemudi", desc: "Info kontak sopir yang aman, memberi user jalur langsung ke barang mereka.", image: "airy:ui" }
                ],
                metrics: [
                    { label: "Tiket Support", value: "Berkurang Drastis" },
                    { label: "Trust", value: "Kepercayaan Naik" },
                    { label: "Repeat Order", value: "Retensi Membaik" }
                ],
                learnings: "Transparansi itu lebih murah daripada kecepatan. User mau nunggu kalau mereka tau alasannya. Proyek ini bukan soal UI; ini soal menjual 'ketenangan pikiran' sebagai fitur.",
                aiHypotheses: [
                    {
                        tech: "Computer Vision & IoT",
                        title: "Loading Dock Pintar",
                        desc: "Kamera di gudang men-scan volume barang yang dimuat. AI memprediksi seberapa penuh truk dan memberi notifikasi ke user: 'Pesanan Anda memakan 40% kapasitas truk, tiba dalam 2 jam.'",
                        impact: "Kapasitas Optimal"
                    },
                    {
                        tech: "Predictive ML & Weather API",
                        title: "ETA Sadar-Lalu Lintas",
                        desc: "Model machine learning yang dilatih dari data historis pengiriman, lalu lintas real-time, dan pola cuaca. Auto-adjust ETA dan proaktif notifikasi user sebelum keterlambatan terjadi.",
                        impact: "Akurasi ETA Lebih Tinggi"
                    },
                    {
                        tech: "LLM & Voice Interface",
                        title: "Concierge AI WhatsApp",
                        desc: "Asisten AI yang bisa diajak chat natural: 'Pesanan saya dimana?' Dia paham konteks, cek sistem, dan balas dalam Bahasa Indonesia dengan update real-time.",
                        impact: "Beban Support Berkurang"
                    },
                    {
                        tech: "Optimasi Rute Dinamis",
                        title: "Koreksi Tengah Jalan",
                        desc: "Macet di depan? AI rute ulang seluruh armada real-time, tukar urutan drop-off antar truk biar setiap warung dapat barang sebelum buka.",
                        impact: "Keterlambatan Berkurang"
                    },
                    {
                        tech: "AI Penyeimbang Muatan",
                        title: "Tetris Sempurna",
                        desc: "AI simulasi 1.000 konfigurasi muat buat maksimalkan isi truk sambil minimalkan gesekan 'Masuk Terakhir, Keluar Pertama' buat sopir.",
                        impact: "Efisiensi Bensin Lebih Baik"
                    }
                ]
            },
            caseStudy_id: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "Truk Saya Dimana?",
                        text: "Nunggu truk dalam gelap itu menakutkan. Saya buat aplikasi yang kasih tahu persis posisi truk, jadi Anda bisa berhenti cemas dan lanjut tidur."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Keandalan Layanan",
                        text: "Mengatasi titik kecemasan kritis dengan mengimplementasikan pelacakan logistik real-time. Mengurangi tiket support secara signifikan dan meningkatkan kepercayaan pelanggan."
                    },
                    technical: {
                        label: "🤖 Sistem",
                        title: "Telemetri & Push",
                        text: "Mendesain antarmuka pelacakan real-time. Mengganti kecemasan dengan visibilitas menggunakan update status langsung."
                    }
                },
                snapshot: {
                    tagline: "Memutus siklus cemas 'Truk saya di mana?'.",
                    heroImage: "airy:network"
                },
                context: {
                    client: "STOQO Logistics",
                    role: "End-to-End Experience",
                    timeline: "2 Bulan",
                    team: "Ops & Engineering"
                },
                challenge: "Saya menemukan realita pahit: pengguna kami bangun jam 4 pagi bukan untuk kerja, tapi untuk menunggu. Pengiriman telat bukan cuma ketidaknyamanan; ini ancaman eksistensi. Tantangan saya adalah memutus siklus kecemasan ini tanpa budget buat beli 100 truk baru.",
                process: [
                    { title: "Metodologi", desc: "Saya gak percaya tiket Jira, jadi saya ikut naik truk pengiriman. Saya lihat sopir susah payah SMS sambil nyetir. Sistemnya bukan rusak; tapi berbahaya.", image: "airy:timeline" },
                    { title: "Insight Utama", desc: "Ngobrol sama 5 pemilik warung, saya temukan konflik aslinya: Masalahnya bukan kecepatan. Tapi keheningan (ketidaktahuan). Mereka bisa terima telat; tapi gak bisa terima kalau gak dikabarin.", image: "airy:venn" },
                    { title: "Studi Lapangan", desc: "Saya gabung sama Field Activators buat lihat kekacauan di lapangan. Ini menjembatani 'Keluhan Pelanggan' dengan 'Realita Operasional'.", image: "airy:ecosystem" },
                    { title: "Workshop Analisis", desc: "Saya fasilitasi sesi journey mapping dimana kami identifikasi 4 pain points: Mismacth Mental Model, Ketidakpastian, Kurang Komunikasi, dan Kurang Awareness.", image: "airy:matrix" },
                    { title: "Ko-Kreasi", desc: "Saya gak desain sendirian. Saya pimpin workshop seharian bareng Lead Engineering dan Ops buat pastiin desain ini bisa dibangun (feasible).", image: "airy:flow" },
                    { title: "Ideasi", desc: "Fokus berubah ke: 'Gimana cara kita kelola kecemasan user?'. Jawabannya bukan 'truk lebih cepat'—tapi 'informasi yang lebih baik'.", image: "airy:architecture" },
                    { title: "Validasi", desc: "Saya bawa high-fidelity prototype kembali ke user untuk testing sprint 3 hari. Melihat mereka bingung adalah validasi terbaik.", image: "airy:chart" }
                ],
                insights: [
                    { title: "Psikologi Menunggu", desc: "Saya belajar kalau menunggu yang jelas estimasinya terasa lebih cepat daripada menunggu tanpa kabar. Estimasi kasar pun bisa menenangkan user." },
                    { title: "Masalah 'Kepagian'", desc: "Ternyata, sopir yang datang kepagian juga masalah. Warung belum siap terima barang jam 3 pagi kalau janjinya jam 5." }
                ],
                solution: [
                    {
                        title: "Prototipe Logistik Langsung",
                        desc: "Rasakan antarmuka pelacakan pengiriman real-time. Catatan: Ini adalah rekreasi high-fidelity dari prototipe asli tahun 2018.",
                        componentId: "stoqo-logistics-live"
                    },
                    {
                        title: "Pengalaman Pengiriman B2B (1)",
                        desc: "3 jam setelah batas waktu pembelian, pengguna akan menerima notifikasi status pengiriman sebagai pengingat untuk pengiriman besok.",
                        image: "/case-studies/stoqo-logistics/delivery-experience-1.png"
                    },
                    {
                        title: "Pengalaman Pengiriman B2B (2)",
                        desc: "Pengguna akan menerima notifikasi status pengiriman yang menginformasikan bahwa pengiriman sedang dalam perjalanan (Siap dikirim) atau sudah sampai.",
                        image: "/case-studies/stoqo-logistics/delivery-experience-2.png"
                    }
                ],
                metrics: [
                    { label: "Tiket Support", value: "Berkurang Drastis" },
                    { label: "Kepercayaan", value: "Kepercayaan Naik" },
                    { label: "Repeat Order", value: "Retensi Membaik" }
                ],
                learnings: "Transparansi itu lebih murah daripada kecepatan. User mau nunggu kalau mereka tau alasannya. Proyek ini bukan soal UI; ini soal menjual 'ketenangan pikiran' sebagai fitur.",
                aiHypotheses: [
                    {
                        tech: "Computer Vision & IoT",
                        title: "Loading Dock Pintar",
                        desc: "Kamera di gudang men-scan volume barang yang dimuat. AI memprediksi seberapa penuh truk dan memberi notifikasi ke user: 'Pesanan Anda memakan 40% kapasitas truk, tiba dalam 2 jam.'",
                        impact: "Kapasitas Optimal"
                    },
                    {
                        tech: "Predictive ML & Weather API",
                        title: "ETA Sadar-Lalu Lintas",
                        desc: "Model machine learning yang dilatih dari data historis pengiriman, lalu lintas real-time, dan pola cuaca. Auto-adjust ETA dan proaktif notifikasi user sebelum keterlambatan terjadi.",
                        impact: "Akurasi ETA Lebih Tinggi"
                    },
                    {
                        tech: "LLM & Voice Interface",
                        title: "Concierge AI WhatsApp",
                        desc: "Asisten AI yang bisa diajak chat natural: 'Pesanan saya dimana?' Dia paham konteks, cek sistem, dan balas dalam Bahasa Indonesia dengan update real-time.",
                        impact: "Beban Support Berkurang"
                    },
                    {
                        tech: "Optimasi Rute Dinamis",
                        title: "Koreksi Tengah Jalan",
                        desc: "Macet di depan? AI rute ulang seluruh armada real-time, tukar urutan drop-off antar truk biar setiap warung dapat barang sebelum buka.",
                        impact: "Keterlambatan Berkurang"
                    },
                    {
                        tech: "AI Penyeimbang Muatan",
                        title: "Tetris Sempurna",
                        desc: "AI simulasi 1.000 konfigurasi muat buat maksimalkan isi truk sambil minimalkan gesekan 'Masuk Terakhir, Keluar Pertama' buat sopir.",
                        impact: "Efisiensi Bensin Lebih Baik"
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
            details: {
                problem: 'Agents were flying blind, guessing how to reach their bonus.',
                system: 'Transparent "Playbook" & Commitment.',
                outcome: 'Uncertainty replaced by "Siap Komandan!" (Mission Ready).'
            },
            details_id: {
                problem: 'Agen buta arah, menebak-nebak cara dapat bonus.',
                system: '"Playbook" Transparan & Komitmen.',
                outcome: 'Ketidakpastian diganti dengan "Siap Komandan!".'
            },
            title_id: 'Agen Penjualan Insentif',
            tag_id: 'Gamifikasi',
            caseStudy: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "Mission: Possible",
                        text: "Sales targets were confusing. I made a simple dashboard that says 'Do this to win', and they just have to click 'Ready, Commander!' to start."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Behavior Design",
                        text: "Solved the 'Information Asymmetry' problem by redesigning the performance dashboard. Introduced explicit 'KPI' visual tags and a behavioral commitment ceremony ('Siap Komandan!')."
                    },
                    technical: {
                        label: "🤖 System",
                        title: "Real-time Telemetry",
                        text: "Built a dedicated performance service that aggregates sales data in real-time. Designed a sticky information architecture to ensure target visibility allows checking status while scrolling."
                    }
                },
                snapshot: {
                    tagline: "Converting 'Confusion' into 'Commitment' via Clarity.",
                    heroImage: "airy:chart"
                },
                context: {
                    client: "Sales Force",
                    role: "UX Researcher & Strategist",
                    timeline: "3 Months",
                    team: "Sales Ops & Regional Heads"
                },
                challenge: "Our 'Field Activators' (Sales Team) were churning faster than we could hire them. The root cause wasn't salary; it was 'KPI Anxiety'. They didn't understand how they were being measured, leading to a breakdown of trust.",
                process: [
                    { title: "Raw Data Interview", desc: "We found a critical gap: 'TL doesn't understand definition of the KPI'. If the leaders are confused, the troops are lost.", image: "airy:flow" },
                    { title: "The Trust Equation", desc: "Our research revealed: 'No Trust = No Action'. When data reliability is questioned ('My app says X, your dash says Y'), motivation collapses.", image: "airy:venn" },
                    { title: "Brainstorming: 'Chewable' KPI", desc: "How might we give consistent understanding? We moved from complex dashboards to 'Chewable Information'—breaking down monthly targets into daily, edible goals.", image: "airy:matrix" },
                    { title: "Gamification Strategy", desc: "We introduced a 'Tier System' (General, Kapten) and badges to tap into internal motivation, moving beyond just monetary incentives.", image: "airy:architecture" },
                    { title: "Offline-First Education", desc: "We created 'Video Animasi' and standardized infographics to ensure every FA, regardless of reading level, understood the rules of the game.", image: "airy:ecosystem" }
                ],
                designProcess: [
                    {
                        type: "research",
                        title: "Raw Data Interview",
                        desc: "We found a critical gap: 'TL doesn't understand definition of the KPI'. If the leaders are confused, the troops are lost.",
                        title_id: "Wawancara Data Mentah",
                        desc_id: "Kami temukan celah kritis: 'TL tidak paham definisi KPI'. Kalau pemimpinnya bingung, pasukannya tersesat.",
                        image: "airy:flow"
                    },
                    {
                        type: "insight",
                        title: "The Trust Equation",
                        desc: "Our research revealed: 'No Trust = No Action'. When data reliability is questioned ('My app says X, your dash says Y'), motivation collapses.",
                        title_id: "Persamaan Kepercayaan",
                        desc_id: "Riset kami mengungkap: 'Tidak Ada Kepercayaan = Tidak Ada Aksi'. Saat keandalan data dipertanyakan, motivasi runtuh.",
                        image: "airy:venn"
                    },
                    {
                        type: "design",
                        title: "Brainstorming: 'Chewable' KPI",
                        desc: "How might we give consistent understanding? We moved from complex dashboards to 'Chewable Information'—breaking down monthly targets into daily, edible goals.",
                        title_id: "Brainstorming: KPI 'Kunyahan'",
                        desc_id: "Kami ubah dashboard rumit jadi 'Informasi Kunyahan'—memecah target bulanan jadi tujuan harian yang bisa dimakan.",
                        image: "airy:matrix"
                    },
                    {
                        type: "design",
                        title: "Gamification Strategy",
                        desc: "We introduced a 'Tier System' (General, Kapten) and badges to tap into internal motivation, moving beyond just monetary incentives.",
                        title_id: "Strategi Gamifikasi",
                        desc_id: "Kami perkenalkan 'Sistem Tier' dan lencana untuk menyentuh motivasi internal, lebih dari sekadar uang.",
                        image: "airy:architecture"
                    },
                    {
                        type: "ship",
                        title: "Offline-First Education",
                        desc: "We created 'Video Animasi' and standardized infographics to ensure every FA, regardless of reading level, understood the rules of the game.",
                        title_id: "Edukasi Offline-First",
                        desc_id: "Kami buat 'Video Animasi' dan infografis standar agar setiap FA paham aturan mainnya.",
                        image: "airy:ecosystem"
                    }
                ],
                insights: [
                    { title: "The 'Admin Day' Fix", desc: "We institutionalized 'Admin Day' for Team Leaders to sync data offline, reducing the 'confusion and anxiety' caused by connectivity gaps." },
                    { title: "Melody Bypass", desc: "We found that rhythm helps retention. We used catchy, repetitive formats for KPI updates to bypass cognitive overload." }
                ],
                solution: [
                    {
                        title: "Live Prototype",
                        desc: "Interact with the actual mobile app interface. Experience the 'Siap Komandan!' onboarding, KPI tracking, and real-time performance dashboard. Note: This is a high-fidelity recreation of the original 2018 prototype.",
                        componentId: "stoqo-live-app"
                    },
                    {
                        title: "Incentivize Field Agent",
                        desc: "On-boarding pop-up introducing the new 'Performance' menu. The flow guides agents to a dedicated performance page showing prioritized criteria for tracking achievements and incentives.",
                        image: "/case-studies/stoqo-sales/solution-incentivize.png"
                    },
                    {
                        title: "UI Elements Explained",
                        desc: "A breakdown of the UI components: Sticky headers for context, card hierarchy for detailed versus summary info, and explicit 'KPI' labels to guide agent focus.",
                        image: "/case-studies/stoqo-sales/solution-ui.png"
                    }
                ],
                metrics: [
                    { label: "Commitment", value: "High Agent Commitment" },
                    { label: "Activity", value: "Boosted Activity" },
                    { label: "Disputes", value: "Reduced Disputes" }
                ],
                learnings: "You don't always need complex gamification with avatars and leaderboards. Sometimes, the best game mechanic is just Knowing the Score.",


                aiHypotheses: [
                    {
                        tech: "Personalized Coaching Agents",
                        title: "'Jarvis' for Sales",
                        desc: "An AI voice coach that listens to sales calls (privacy-safe) and gives real-time whispers: 'Talk slower', 'Mention the bundle discount now', 'They sound hesitant about price'.",
                        impact: "Higher Conversion Rate"
                    },
                    {
                        tech: "ML & Performance Analytics",
                        title: "Generator Tantangan",
                        desc: "AI menganalisis performa individu agen dan secara dinamis membuat tantangan harian yang dipersonalisasi untuk mendorong mereka keluar dari zona nyaman.",
                        impact: "Higher Target Achievement"
                    },
                    {
                        tech: "Social AI & Network Analysis",
                        title: "Pencocokan Mentor Peer",
                        desc: "AI mengidentifikasi top performer dan agen yang struggle, lalu membuat pasangan mentor-mentee dengan poin diskusi dan transfer pola sukses yang disarankan.",
                        impact: "Better Team Performance"
                    },
                    {
                        tech: "AI Emosi",
                        title: "Detektor Burnout",
                        desc: "AI analisis nada suara dan jeda aktivitas. Kalau agen kedengeran lelah, dia saranin istirahat 15 menit atau kurangi target harian dikit buat cegah resign.",
                        impact: "Improved Agent Retention"
                    },
                    {
                        tech: "RAG Graf Pengetahuan",
                        title: "Kartu Lawan Kompetitor Instan",
                        desc: "Agen di warung lihat brosur kompetitor. Mereka foto. AI baca dan bisikin: 'Minyak kita lebih murah, bilang itu sekarang!'.",
                        impact: "Higher Win Rate"
                    }
                ]
            },
            caseStudy_id: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "Misi: Mungkin",
                        text: "Target sales itu membingungkan. Saya bikin dashboard simpel yang bilang 'Lakukan ini buat menang', dan mereka cuma perlu klik 'Siap Komandan!' buat mulai."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Desain Perilaku",
                        text: "Memecahkan masalah 'Asimetri Informasi' dengan mendesain ulang dashboard performa. Memperkenalkan tag visual 'KPI' yang eksplisit dan upacara komitmen perilaku ('Siap Komandan!')."
                    },
                    technical: {
                        label: "🤖 Sistem",
                        title: "Telemetri Real-time",
                        text: "Membangun service performa yang mengagregasi data sales secara real-time. Mendesain sticky header untuk memastikan visibilitas target tetap terjaga saat scrolling."
                    }
                },
                snapshot: {
                    tagline: "Mengubah 'Kebingungan' jadi 'Komitmen' lewat Kejelasan.",
                    heroImage: "airy:chart"
                },
                context: {
                    client: "Sales Force",
                    role: "UX Researcher & Strategist",
                    timeline: "3 Bulan",
                    team: "Sales Ops & Regional Heads"
                },
                challenge_id: "Kami menemukan 'Titik Buta' kritis. Agen tidak tahu metrik mana yang benar-benar pengaruh ke bonus. Rumus rumit ini tersembunyi, bikin agen 'Parkir Target' karena gak yakin usaha mereka dihitung. Akar masalahnya bukan gaji, tapi 'Kecemasan KPI'.",
                process_id: [
                    { title: "Wawancara Data Mentah", desc: "Kami temukan celah kritis: 'TL tidak paham definisi KPI'. Kalau pemimpinnya bingung, pasukannya tersesat." },
                    { title: "Persamaan Kepercayaan", desc: "Riset kami mengungkap: 'Tidak Ada Kepercayaan = Tidak Ada Aksi'. Saat keandalan data dipertanyakan ('Aplikasi saya bilang X, dashboard kamu bilang Y'), motivasi runtuh." },
                    { title: "Brainstorming: KPI 'Kunyahan'", desc: "Gimana cara kasih pemahaman konsisten? Kami ubah dashboard rumit jadi 'Informasi Kunyahan'—memecah target bulanan jadi tujuan harian yang bisa dimakan." },
                    { title: "Strategi Gamifikasi", desc: "Kami perkenalkan 'Sistem Tier' (Jenderal, Kapten) dan lencana untuk menyentuh motivasi internal, lebih dari sekadar insentif uang." },
                    { title: "Edukasi Offline-First", desc: "Kami buat 'Video Animasi' dan infografis standar untuk memastikan setiap FA, apapun tingkat literasinya, paham aturan mainnya." }
                ],
                insights_id: [
                    { title: "Perbaikan 'Hari Admin'", desc: "Kami formalkan 'Hari Admin' bagi Team Leader untuk sinkronisasi data offline, mengurangi 'kebingungan dan kecemasan' akibat sinyal jelek." },
                    { title: "Jalur Melodi", desc: "Kami temukan ritme bantu ingatan. Kami pakai format berulang yang catchy untuk update KPI biar gak overload kognitif." }
                ],
                solution: [
                    {
                        title: "Prototipe Langsung",
                        desc: "Interaksi langsung dengan antarmuka aplikasi seluler. Rasakan onboarding 'Siap Komandan!', pelacakan KPI, dan dasbor kinerja waktu nyata. Catatan: Ini adalah rekreasi high-fidelity dari prototipe asli tahun 2018.",
                        componentId: "stoqo-live-app"
                    },
                    {
                        title: "Insentif Agen Lapangan",
                        desc: "Pop-up onboarding yang memperkenalkan menu 'Performa' baru. Alur ini memandu agen ke halaman kinerja khusus yang menampilkan kriteria prioritas untuk melacak pencapaian dan insentif.",
                        image: "/case-studies/stoqo-sales/solution-incentivize.png"
                    },
                    {
                        title: "Penjelasan Elemen UI",
                        desc: "Rincian komponen UI: Header lengket untuk konteks, hierarki kartu untuk info detail vs ringkasan, dan label 'KPI' eksplisit untuk memandu fokus agen.",
                        image: "/case-studies/stoqo-sales/solution-ui.png"
                    }
                ],
                metrics: [
                    { label: "Komitmen", value: "Komitmen Tinggi" },
                    { label: "Aktivitas", value: "Aktivitas Naik" },
                    { label: "Sengketa", value: "Sengketa Berkurang" }
                ],
                learnings: "Gamifikasi gak selalu butuh avatar dan leaderboard. Kadang, mekanika game terbaik adalah cuma 'Tahu Skor-nya'.",
                aiHypotheses: [
                    {
                        tech: "Personalized Coaching Agents",
                        title: "'Jarvis' untuk Sales",
                        desc: "AI voice coach yang dengerin panggilan sales (privacy-safe) dan kasih bisikan real-time: 'Ngomongnya pelan dikit', 'Tawarin diskon bundle sekarang', 'Mereka kedengeran ragu soal harga tuh'.",
                        impact: "Konversi Meningkat"
                    },
                    {
                        tech: "ML & Performance Analytics",
                        title: "Generator Tantangan",
                        desc: "AI menganalisis performa individu agen dan secara dinamis membuat tantangan harian yang dipersonalisasi untuk mendorong mereka keluar dari zona nyaman.",
                        impact: "Pencapaian Target Lebih Tinggi"
                    },
                    {
                        tech: "Social AI & Network Analysis",
                        title: "Pencocokan Mentor Peer",
                        desc: "AI mengidentifikasi top performer dan agen yang struggle, lalu membuat pasangan mentor-mentee dengan poin diskusi dan transfer pola sukses yang disarankan.",
                        impact: "Performa Tim Lebih Baik"
                    },
                    {
                        tech: "AI Emosi",
                        title: "Detektor Burnout",
                        desc: "AI analisis nada suara dan jeda aktivitas. Kalau agen kedengeran lelah, dia saranin istirahat 15 menit atau kurangi target harian dikit buat cegah resign.",
                        impact: "Retensi Agen Membaik"
                    },
                    {
                        tech: "RAG Graf Pengetahuan",
                        title: "Kartu Lawan Kompetitor Instan",
                        desc: "Agen di warung lihat brosur kompetitor. Mereka foto. AI baca dan bisikin: 'Minyak kita lebih murah, bilang itu sekarang!'.",
                        impact: "Win Rate Lebih Tinggi"
                    }
                ]
            },
        },
        {
            id: 'paper-to-paperless',
            title: 'Paper-to-Paperless (Concept)',
            tag: 'Sustainability',
            type: 'Concept',
            role: 'Concept Artist',
            timeline: '1 Month',
            route: '/case-study/paper-to-paperless',
            previewImage: '/efficiency_hero.png',
            iconName: 'Scan',
            details: { problem: 'The panic of a lost invoice in a chaotic kitchen.', system: 'Camera-as-Keyboard.', outcome: 'No more "lost money".' },
            details_id: { problem: 'Paniknya bon hilang di dapur yang chaos.', system: 'Kamera-jadi-Keyboard.', outcome: 'Gak ada lagi "uang hilang".' },
            title_id: 'Paper-to-Paperless (Konsep)',
            tag_id: 'Keberlanjutan',
            caseStudy: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "No More Paper",
                        text: "My office was drowning in paper. I made an app where you take a picture of a receipt, and the computer reads it automatically. No more typing!"
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Operational Digitization",
                        text: "Designed a mobile OCR solution to digitize physical workflows. Reduced manual data entry by 90% and created a searchable digital archive."
                    },
                    technical: {
                        label: "🤖 System",
                        title: "OCR & Confidence",
                        text: "Implemented a camera-first workflow using OCR. Designed a 'Confidence Score' UI to handle imperfect scans, allowing human-in-the-loop verification."
                    }
                },
                snapshot: {
                    tagline: "Killing the filing cabinet, one scan at a time.",
                    heroImage: "airy:layers"
                },
                context: {
                    client: "Internal Ops",
                    role: "I envisioned the Future",
                    timeline: "1 Month",
                    team: "Solo Project"
                },
                challenge: "Our office was drowning in paper. Invoices, delivery orders, receipts. Things got lost, coffee got spilled, and data was dark.",
                process: [
                    { title: "Observation", desc: "I watched the admin team spend 4 hours a day purely on data entry from paper visuals.", image: "airy:cycle" },
                    { title: "Ideation", desc: "What if the camera was the keyboard? I mocked up an OCR flow that auto-filled the form.", image: "airy:flow" }
                ],
                designProcess: [
                    {
                        type: "research",
                        title: "Observation",
                        desc: "I watched the admin team spend 4 hours a day purely on data entry from paper visuals.",
                        title_id: "Observasi",
                        desc_id: "Saya perhatikan tim admin menghabiskan 4 jam sehari cuma buat ketik ulang data dari kertas ke komputer.",
                        image: "airy:cycle"
                    },
                    {
                        type: "design",
                        title: "Ideation",
                        desc: "What if the camera was the keyboard? I mocked up an OCR flow that auto-filled the form.",
                        title_id: "Ideasi",
                        desc_id: "Gimana kalau kamera jadi keyboard-nya? Saya mock-up alur OCR yang otomatis ngisi formulir.",
                        image: "airy:flow"
                    },
                    {
                        type: "insight",
                        title: "Trusting the Machine",
                        desc: "Users were skeptical about OCR accuracy. I designed a 'Confidence Score' UI that highlighted low-confidence fields for human review.",
                        title_id: "Percaya Mesin",
                        desc_id: "User awalnya skeptis sama akurasi OCR. Saya desain UI 'Skor Kepercayaan' untuk highlight field yang meragukan.",
                        image: "airy:venn"
                    }
                ],
                challenge_id: "Kantor kami tenggelam dalam kertas. Faktur, surat jalan, bon. Dokumen hilang, kena tumpahan kopi, dan datanya 'gelap' (tidak bisa diolah).",
                process_id: [
                    { title: "Observasi", desc: "Saya perhatikan tim admin menghabiskan 4 jam sehari cuma buat ketik ulang data dari kertas ke komputer.", image: "airy:cycle" },
                    { title: "Ideasi", desc: "Gimana kalau kamera jadi keyboard-nya? Saya mock-up alur OCR yang otomatis ngisi formulir.", image: "airy:flow" }
                ],
                insights_id: [
                    { title: "Percaya Mesin", desc: "User awalnya skeptis sama akurasi OCR. Saya desain UI 'Skor Kepercayaan' (Confidence Score) yang menghighlight kolom mana yang AI-nya ragu, jadi user bisa cek ulang." }
                ],
                solution: [
                    {
                        title: "Live Picker Prototype",
                        desc: "Replaced paper workflows with a mobile picker app. Experience the scanning, picking, and validation flow directly.",
                        componentId: "stoqo-picker-app"
                    },
                    {
                        title: "Human-in-the-Loop QA",
                        desc: "A dedicated app for checkers to verify packed items against the manifest. Reduced 'wrong item' complaints by 80%.",
                        componentId: "stoqo-checker-app"
                    },
                    { title: "Digital Archive", desc: "A search bar that could find a receipt from 3 years ago in 2 seconds.", image: "airy:chart" }
                ],
                metrics: [
                    { label: "Paper Redux", value: "Eliminated Paperwork" },
                    { label: "Search Speed", value: "Instant Search" },
                    { label: "Cost Save", value: "Significant Savings" }
                ],
                learnings: "The future is inevitable, but it needs a bridge. The 'Confidence Score' was the bridge that let users trust the AI.",
                aiHypotheses: [
                    {
                        tech: "Visual Document Understanding (VDU)",
                        title: "Semantic Search for Paper",
                        desc: "You can ask the system: 'Find me the invoice for the red chair we bought last May.' The AI visualizes the document and highlights the exact line item.",
                        impact: "Instant Audit"
                    },
                    {
                        tech: "Anomaly Detection & Pattern Recognition",
                        title: "Expense Fraud Spotter",
                        desc: "AI analyzes scanned receipts for anomalies like duplicate submissions, unusual vendors, or out-of-policy amounts, flagging suspicious claims before approval.",
                        impact: "Enhanced Fraud Detection"
                    },
                    {
                        tech: "Multi-Document Intelligence",
                        title: "Contract Auto-Reconciler",
                        desc: "Upload a contract and its related invoices. AI automatically matches line items, flags discrepancies, and generates a reconciliation report.",
                        impact: "Instant Reconciliation"
                    },
                    {
                        tech: "Predictive Analytics",
                        title: "Cashflow Crystal Ball",
                        desc: "By digitizing all pending invoices, AI predicts cash flow gaps 30 days out. 'Warning: You will be short on cash on Feb 12th unless you delay payment to Vendor X'.",
                        impact: "Reduced Liquidity Risk"
                    },
                    {
                        tech: "Robotic Process Automation (AI-RPA)",
                        title: "One-Click Pay",
                        desc: "AI verifies the invoice against the delivery order. If they match perfectly, it schedules the payment automatically. Humans only review the mismatches.",
                        impact: "Eliminated Manual Hours"
                    }
                ]
            }
        }
    ]
};
