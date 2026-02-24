
export const NOTES = [
    {
        id: 'agency-pivot',
        title: 'The "Agency" Pivot',
        subtitle: 'Redesigning Algorithms',
        desc: 'Treating users like pilots, not dopamine junkies.',
        tldr: "Giving the steering wheel back to your own attention span.",
        tldr_id: "Mengembalikan kemudi setir kepada atensi Anda sendiri.",
        desc_id: "Memperlakukan pengguna sebagai pilot, bukan pecandu dopamin.",
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
        coverImage: "airy:hierarchy",
        snapshot: {
            tagline: "Redesigning Algorithms",
            heroImage: "airy:hierarchy"
        },
        context: {
            role: "Product Owner",
            timeline: "Mar 2026",
            team: "Social Media Giant",
            client: "Internal Research"
        },
        challenge: "Social media transitioned from Connecting People to Retaining Attention. This stripped users of agency, creating a 'Feed of Slop' that prioritizes cheap dopamine. Users feel manipulated and anxious.",
        process: [
            {
                title: "The Protagonist: Sarah",
                desc: "Sarah wants updates from friends but gets ads and viral screamers. She feels 'digital loneliness' even while scrolling. Our goal: Give her back the steering wheel.",
                image: "airy:hierarchy"
            },
            {
                title: "Failed Attempt: The Cockpit",
                desc: "We tried a complex settings panel with sliders. Users hated it. 'This looks like work. I don't want to calibrate my feed like a sound engineer.'",
                image: "airy:kanban"
            }
        ],
        insights: [
            {
                title: "From Settings to Vibes",
                desc: "Users don't have static preferences; they have Contextual Moods. Sometimes they want 'Doom Scroll', sometimes 'Friends Only'.",
                image: "airy:venn"
            }
        ],
        solution: [
            {
                title: "Stealth Mode Switcher",
                desc: "Turned the 'For You' header into a dropdown. Sarah can switch to 'Friends Only' instantly. Noise vanishes.",
                image: "airy:ui"
            },
            {
                title: "Chill Mode",
                desc: "Filters out high-BPM audio and rapid cuts. The feed becomes a digital magazine, not a slot machine.",
                image: "airy:layers"
            },
            {
                title: "Micro-Blocking",
                desc: "One-tap removal of AI/spam content via tags, training the algorithm without leaving the feed.",
                image: "airy:radar"
            }
        ],
        metrics: [
            { label: "Trust Score", value: "High Increase" },
            { label: "Friend Interaction", value: "Tripled" }
        ],
        learnings: "Technology should be a bicycle for the mind, not a conveyor belt for the eyes.",
        designProcess: [
            {
                type: "research",
                title: "The Attention Trap",
                desc: "Social media transitioned from Connecting People to Retaining Attention. Ideally, users should be pilots, not passengers.",
                title_id: "Perangkap Atensi",
                desc_id: "Medsos beralih dari Koneksi ke Retensi Atensi. Idealnya, user harus jadi pilot, bukan penumpang.",
                image: "airy:hierarchy"
            },
            {
                type: "insight",
                title: "Mood Kontekstual",
                desc: "Users don't have static preferences; they have moods. Sometimes 'Doom Scroll', sometimes 'Friends Only'. Settings menus are too rigid.",
                title_id: "Mood Kontekstual",
                desc_id: "User gak punya preferensi statis; punya mood. Kadang 'Doom Scroll', kadang 'Hanya Teman'. Menu setting terlalu kaku.",
                image: "airy:venn"
            },
            {
                type: "design",
                title: "Stealth Mode Switcher",
                desc: "Turned the 'For You' header into a dropdown. Users can switch to 'Friends Only' instantly. Noise vanishes.",
                title_id: "Stealth Mode Switcher",
                desc_id: "Ubah header 'For You' jadi dropdown. User bisa switch ke 'Hanya Teman' instan. Bising hilang.",
                image: "airy:ui"
            },
            {
                type: "ship",
                title: "Chill Mode",
                desc: "Implemented filters for high-BPM audio and rapid cuts. The feed becomes a digital magazine, not a slot machine.",
                title_id: "Mode Santai",
                desc_id: "Implementasi filter audio cepat dan potongan kasar. Feed jadi majalah digital, bukan mesin slot.",
                image: "airy:layers"
            },
            {
                type: "measure",
                title: "Trust Score",
                desc: "Giving control back increased trust. Friend interactions tripled when the noise was removed.",
                title_id: "Skor Kepercayaan",
                desc_id: "Memberi kontrol balik meningkatkan kepercayaan. Interaksi teman naik 3x lipat saat noise hilang.",
                image: "airy:radar"
            }
        ],
        challenge_id: "Medsos beralih dari Koneksi ke Retensi Atensi. Ini mencuri agensi user, menciptakan 'Feed Sampah' demi dopamin murah. User merasa dimanipulasi.",
        process_id: [
            {
                title: "Protagonis: Sarah",
                desc: "Sarah mau update teman tapi dapet iklan dan video teriak. Dia merasa kesepian digital. Goal kami: Kembalikan kemudi ke dia.",
                image: "airy:hierarchy"
            },
            {
                title: "Gagal: Kokpit",
                desc: "Kami coba panel setting rumit. User benci. 'Ini kayak kerjaan. Gue gak mau kalibrasi feed kayak sound engineer.'",
                image: "airy:kanban"
            }
        ],
        insights_id: [
            {
                title: "Dari Setting ke Vibe",
                desc: "User gak punya preferensi statis; mereka punya Mood Kontekstual. Kadang mau 'Doom Scroll', kadang 'Hanya Teman'.",
                image: "airy:venn"
            }
        ],
        solution_id: [
            {
                title: "Stealth Mode Switcher",
                desc: "Ubah header 'For You' jadi dropdown. Bisa switch ke 'Hanya Teman' instan. Bising hilang.",
                image: "airy:ui"
            },
            {
                title: "Mode Santai",
                desc: "Filter audio cepat dan potongan kasar. Feed jadi majalah digital, bukan mesin slot.",
                image: "airy:layers"
            },
            {
                title: "Micro-Blocking",
                desc: "Hapus konten AI/spam sekali tap lewat tag, melatih algoritma tanpa keluar feed.",
                image: "airy:radar"
            }
        ],
        learnings_id: "Teknologi harusnya jadi sepeda buat pikiran, bukan ban berjalan buat mata."
    },
    {
        id: 'price-lock',
        title: 'Price Lock',
        subtitle: 'Fintech Feature for OTA',
        desc: "A 'pause button' for flight price inflation.",
        tldr: "We built a 'pause button' on inflation for anxious travelers.",
        tldr_id: "Kami membuat tombol 'pause' untuk inflasi bagi traveler yang cemas.",
        desc_id: "Tombol jeda untuk menahan inflasi harga tiket pesawat.",
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
        coverImage: "airy:chart",
        brandColor: "#10B981", // Fintech Green
        snapshot: {
            tagline: "Fintech Feature for OTA",
            heroImage: "airy:chart"
        },
        context: {
            role: "Product Owner",
            timeline: "Feb 2026",
            team: "Growth Team",
            client: "Internal Product"
        },
        challenge: "The specific anxiety of watching a flight price jump $50 while you wait for your boss\'s approval. In a world of dynamic pricing, the user is always the loser.",
        process: [
            {
                title: "The Anxiety Trigger",
                desc: "The specific anxiety of watching a flight price jump $50 while waiting for leave approval. In dynamic pricing, users always lose.",
                image: "airy:timeline"
            },
            {
                title: "Buying Time, Not Tickets",
                desc: "We realized users aren't paying for the ticket; they're paying for the option to wait without risking a sudden price hike.",
                image: "airy:search"
            },
            {
                title: "The Pause Button",
                desc: "A small fee ($2) freezes the algorithm for 24 hours. This simple toggle shifts the user's emotional state from panic to control.",
                image: "airy:ui"
            },
            {
                title: "The Honest Algorithm",
                desc: "To build trust, we exposed the prediction: '85% chance this price rises tomorrow.' It turned a hidden fee into perceived insurance.",
                image: "airy:chart"
            }
        ],
        insights: [
            {
                title: "The Honest Algorithm",
                desc: "To build trust, we showed our work: 'AI Prediction: 85% chance this price rises tomorrow.' This turned a 'Hidden Fee' into 'Insurance'.",
                image: "airy:chart"
            }
        ],
        solution: [
            {
                title: "The Pause Button",
                desc: "A small fee ($2) to freeze the algorithm for 24 hours. Shifts user state from Panic to Control.",
                image: "airy:ui"
            }
        ],
        metrics: [
            { label: "User Anxiety", value: "Reduced" },
            { label: "Trust Score", value: "Elevated" }
        ],
        learnings: "Price Lock is not a fintech product; it's an anxiety medication.",

        challenge_id: "Kecemasan spesifik saat melihat tiket naik 500rb sambil menunggu izin cuti bos. Di dunia 'dynamic pricing', user selalu kalah.",
        process_id: [
            {
                title: "Pemicu Kecemasan",
                desc: "Kecemasan saat melihat tiket naik 500rb sambil menunggu izin cuti bos. Di era harga dinamis, pengguna selalu dirugikan.",
                image: "airy:timeline"
            },
            {
                title: "Beli Waktu, Bukan Tiket",
                desc: "Kami sadar pengguna bayar bukan untuk tiket, tapi untuk opsi menunggu tanpa risiko harga melonjak tiba-tiba.",
                image: "airy:search"
            },
            {
                title: "Tombol Jeda",
                desc: "Biaya kecil (Rp30.000) menunda algoritma selama 24 jam. Ini merubah keadaan emosi pengguna dari panik menjadi pegang kendali.",
                image: "airy:ui"
            },
            {
                title: "Algoritma Jujur",
                desc: "Untuk membangun kepercayaan, kami memunculkan prediksi: 'Prediksi AI: 85% harga naik besok'. Mengubah biaya tersembunyi menjadi asuransi.",
                image: "airy:chart"
            }
        ],
        insights_id: [
            {
                title: "Algoritma Jujur",
                desc: "Kami buka dapur: 'Prediksi AI: 85% peluang naik besok.' Ini ubah 'Biaya Admin' jadi 'Asuransi'.",
                image: "airy:chart"
            }
        ],
        solution_id: [
            {
                title: "Tombol Pause",
                desc: "Bayar receh buat bekukan algoritma 24 jam. Ubah user dari Panik ke Kontrol.",
                image: "airy:ui"
            }
        ],
        learnings_id: "Price Lock bukan produk fintech; ini obat anti-cemas."
    },
    {
        id: 'project-kinship',
        title: 'The Science of Care',
        subtitle: 'Grab Merantau',
        desc: "A platform to help perantau send care home, not just cash.",
        tldr: "We built 'Grab Bakti': an emotional infrastructure that converts remittance into a tangible act of love.",
        tldr_id: "Kami membangun 'Grab Bakti': infrastruktur emosional yang mengkonversi remitansi menjadi aksi kasih sayang nyata.",
        desc_id: "Platform bagi perantau untuk mengirim perhatian, bukan sekadar uang.",
        title_id: 'The Science of Care',
        subtitle_id: 'Grab Merantau',
        stack: ["React", "LLM / AI Concierge", "Fintech (Remittance)"],
        links: {
            demo: "https://gemini.google.com/share/bd973765947a",
            repo: "#"
        },
        iconName: 'Gift',
        featured: true,
        type: 'Logistics Kinship',
        date: "February 2026",
        coverImage: "airy:venn",
        brandColor: "#EC4899", // Kinship Pink
        snapshot: {
            tagline: "Grab Merantau",
            heroImage: "airy:venn"
        },
        context: {
            role: "Product Owner",
            timeline: "Feb 2026",
            team: "Logistics Team",
            client: "Grab (Internal Product)"
        },
        challenge: "I am a perantau. Far from Padang. When I hear Mom is sick in Padang, I want to send her Martabak Hayuda or Sate Mak Syukur. But GPS locks me in Jakarta. Grab exists in Jakarta, and Grab exists in Padang. Why can't I bridge them? Technology today forces you to 'be there' to order. We set out to fix that.",
        process: [
            {
                title: "Grab Bakti: Emotional Infrastructure",
                desc: "This isn't just a 'change address' feature. It's emotional infrastructure. For the Sender: the ability to 'be present' instantly. For the Receiver: the joy of a surprise without needing an app. For Grab: becoming part of the most intimate moments in Indonesian families.",
                image: "airy:flow"
            },
            {
                title: "The Business Case: Ekonomi Kasih Sayang",
                desc: "Emotional Remittance: Indonesians send trillions of Rupiah home every year. We convert that cash into GTV directly in the Grab ecosystem. Inclusive Acquisition: When Mom in Padang receives food via a WhatsApp link without installing an app, we're building brand trust with a generation previously unreachable. Gift orders have higher AOV because senders want to give the best.",
                image: "airy:ecosystem"
            }
        ],
        insights: [
            {
                title: "AI as 'The Smart Cousin'",
                desc: "In Padang, there are many food choices. But which resto is open today? Which is most authentic? The AI Concierge acts like a local cousin. User says: 'Find warm food for Mom who has the flu,' and AI scans the best merchants in Padang serving quality soup or porridge.",
                image: "airy:cycle"
            }
        ],
        solution: [
            {
                title: "Ibu-Friendly UX Design",
                desc: "Video Message: Sender records a short video. When food arrives, the Driver says 'This is a message from your child in Jakarta,' and Mom clicks a big play button in her browser. Web-Microsite: Because Mom might not have phone memory to install an app, the system sends a unique link. One click, she can track the driver. Voice Reply: Mom doesn't need to type — just press the mic icon.",
                image: "airy:ui"
            }
        ],
        metrics: [
            { label: "Target AOV", value: "2.5x" },
            { label: "App Penetration", value: "90%" }
        ],
        learnings: "I brought this idea not only because I understand APIs or GTV calculations. I brought it because I personally feel the pain of distance. I want to build a Grab that doesn't just move people and goods, but also moves love.",
        designProcess: [
            {
                type: "research",
                title: "The Perantau's Pain",
                desc: "I am a perantau, far from Padang. When Mom is sick, I want to send her favorite food. But GPS locks me in Jakarta. Grab exists in both cities — why can't I bridge them?",
                title_id: "Sakit Hati Perantau",
                desc_id: "Saya perantau, jauh dari Padang. Saat Ibu sakit, saya ingin kirim makanan kesukaannya. Tapi GPS mengunci saya di Jakarta. Grab ada di dua kota — kenapa tidak bisa dijembatani?",
                image: "airy:radar"
            },
            {
                type: "insight",
                title: "Ekonomi Kasih Sayang",
                desc: "Indonesians send trillions home yearly. We convert cash remittance into GTV. Gift orders have 2.5x higher AOV. When Mom receives food via WhatsApp link without installing an app, we build trust with an unreachable generation.",
                title_id: "Ekonomi Kasih Sayang",
                desc_id: "Perantau Indonesia kirim triliunan tiap tahun. Kami konversi remitansi jadi GTV. Pesanan hadiah punya AOV 2.5x lebih tinggi. Saat Ibu terima makanan via link WhatsApp tanpa install aplikasi, kita bangun kepercayaan.",
                image: "airy:chart"
            },
            {
                type: "design",
                title: "AI Concierge + Zero-UI Receiver",
                desc: "AI acts like a local cousin: 'Find warm food for Mom who has the flu.' Web-Microsite means Mom doesn't need to install anything — one click to track the driver in her browser.",
                title_id: "AI Concierge + Penerima Tanpa-UI",
                desc_id: "AI bertindak seperti sepupu lokal: 'Cari makanan hangat buat Ibu yang flu.' Web-Microsite artinya Ibu gak perlu install apa-apa — satu klik untuk lacak driver di browser.",
                image: "airy:ecosystem"
            },
            {
                type: "ship",
                title: "Ibu-Friendly UX",
                desc: "Video Message from sender played on delivery. Voice Reply so Mom doesn't need to type. Big buttons, browser-based — designed for the least tech-savvy user.",
                title_id: "UX Ramah Ibu",
                desc_id: "Pesan Video dari pengirim diputar saat makanan tiba. Balas Suara supaya Ibu gak perlu ngetik. Tombol besar, berbasis browser — didesain untuk pengguna paling gaptek.",
                image: "airy:ui"
            },
            {
                type: "measure",
                title: "Moving Love, Not Just Goods",
                desc: "I brought this idea because I personally feel the pain of distance. I want to build a Grab that moves love — with 2.5x AOV target and 90% messaging app penetration as the bridge.",
                title_id: "Memindahkan Kasih, Bukan Cuma Barang",
                desc_id: "Saya bawa ide ini karena saya merasakan sendiri sakitnya jarak. Saya ingin membangun Grab yang memindahkan kasih sayang — dengan target AOV 2.5x dan penetrasi 90% aplikasi pesan sebagai jembatan.",
                image: "airy:venn"
            }
        ],
        challenge_id: "Saya perantau. Jauh dari Padang. Saat Ibu kurang enak badan, saya ingin kirim Martabak Hayuda atau Sate Mak Syukur. Tapi GPS mengunci saya di Jakarta. Grab ada di Jakarta, Grab ada di Padang. Kenapa tidak bisa dijembatani? Teknologi hari ini memaksa kita 'ada di sana' untuk bisa memesan.",
        process_id: [
            {
                title: "Grab Bakti: Infrastruktur Emosional",
                desc: "Ini bukan sekadar fitur ganti alamat. Bagi Pengirim: kemudahan untuk 'hadir' secara instan. Bagi Penerima: kebahagiaan menerima kejutan tanpa pusing dengan aplikasi. Bagi Grab: menjadi bagian dari momen paling intim dalam keluarga Indonesia.",
                image: "airy:flow"
            },
            {
                title: "Strategi Bisnis: Ekonomi Kasih Sayang",
                desc: "Remitansi Emosional: konversi uang tunai jadi GTV di ekosistem Grab. Akuisisi Inklusif: Ibu terima makanan via WhatsApp tanpa install aplikasi. Pesanan hadiah punya AOV lebih tinggi karena pengirim ingin kasih yang terbaik.",
                image: "airy:ecosystem"
            }
        ],
        insights_id: [
            {
                title: "AI Sebagai 'Sepupu yang Pintar'",
                desc: "Di Padang banyak pilihan makanan. Tapi resto mana yang buka? Mana yang paling autentik? AI Concierge bertindak seperti sepupu yang tinggal di Padang. Cukup bilang 'Cari makanan hangat buat Ibu yang flu.'",
                image: "airy:cycle"
            }
        ],
        solution_id: [
            {
                title: "Desain UX Ramah Ibu",
                desc: "Pesan Video: Pengirim rekam video pendek, diputar saat makanan tiba. Web-Microsite: Ibu gak perlu install aplikasi, satu klik di browser bisa lihat driver. Voice Reply: Ibu gak perlu ngetik, cukup tekan ikon mic.",
                image: "airy:ui"
            }
        ],
        learnings_id: "Saya bawa ide ini bukan hanya karena mengerti API atau cara menghitung GTV. Saya membawanya karena merasakan sendiri sakitnya jarak. Saya ingin membangun Grab yang memindahkan kasih sayang."
    },
    {
        id: 'flood-alert',
        title: 'Flood Alert',
        subtitle: 'Civic Resilience System',
        desc: "Real-time crowdsourced flood evacuation for Jakarta.",
        desc_id: "Evakuasi banjir berbasis komunitas real-time untuk Jakarta.",
        tldr: "Zero-blindspot geospatial alerting during critical flood events.",
        tldr_id: "Peringatan geospasial tanpa blindspot selama kejadian banjir kritis.",
        snapshot: {
            tagline: "Civic Resilience System",
            heroImage: "airy:map"
        },
        context: {
            role: "Product Owner",
            timeline: "2024",
            team: "Solo",
            client: "Jakarta Smart City (Unofficial)"
        },
        challenge: "Jakarta sinks 10cm/year. Traditional alerts are city-wide and vague, leaving citizens trapped in 'blindspot' neighborhoods during flash floods.",
        process: [
            {
                title: "Mapping the Blindspots",
                desc: "Government sensors cover major rivers, but micro-drainage in slums is unmonitored. We needed crowdsourced data.",
                image: "airy:ecosystem"
            }
        ],
        insights: [
            {
                title: "Trust in Neighbors",
                desc: "People trust their neighbors more than the government during disasters. A P2P verification system was essential.",
                image: "airy:network"
            }
        ],
        solution: [
            {
                title: "Waze for Disasters",
                desc: "Built using PostGIS & Node.js. It aggregates government sensor data and crowdsouces reports to generate safe evacuation routes in real-time.",
                image: "airy:architecture"
            }
        ],
        metrics: [
            { label: "Response", value: "Real-time" },
            { label: "Trust", value: "High" }
        ],
        learnings: "In disaster UI, 'Red' is not enough. You need specific, actionable directives.",
        designProcess: [
            {
                type: "research",
                title: "Mapping Blindspots",
                desc: "Jakarta sinks 10cm/year. Government sensors cover rivers, but micro-drainage in slums is unmonitored.",
                title_id: "Memetakan Blindspot",
                desc_id: "Jakarta tenggelam 10cm/tahun. Sensor pemerintah cover sungai, tapi got mikro di pemukiman gak terpantau.",
                image: "airy:ecosystem"
            },
            {
                type: "insight",
                title: "Trust in Neighbors",
                desc: "People trust their neighbors more than the government during disasters. A P2P verification system was essential.",
                title_id: "Percaya Tetangga",
                desc_id: "Orang lebih percaya tetangga daripada pemerintah saat bencana. Sistem verifikasi P2P itu krusial.",
                image: "airy:network"
            },
            {
                type: "design",
                title: "Waze for Disasters",
                desc: "We designed a crowdsourced alert system. It aggregates sensor data and user reports to generate safe evacuation routes.",
                title_id: "Waze untuk Bencana",
                desc_id: "Kami desain sistem peringatan crowdsource. Agregasi data sensor dan laporan warga buat rute evakuasi aman.",
                image: "airy:architecture"
            },
            {
                type: "ship",
                title: "Peringatan Real-time",
                desc: "Built using PostGIS & Node.js for geospatial accuracy. Alerts are pushed in real-time to affected neighborhoods.",
                title_id: "Peringatan Real-time",
                desc_id: "Dibangun pakai PostGIS & Node.js untuk akurasi spasial. Peringatan di-push real-time ke warga terdampak.",
                image: "airy:radar"
            },
            {
                type: "measure",
                title: "Civic Resilience",
                desc: "Zero-blindspot coverage during critical flood events. High trust from the community.",
                title_id: "Ketahanan Warga",
                desc_id: "Cakupan tanpa blindspot selama banjir kritis. Kepercayaan tinggi dari komunitas.",
                image: "airy:chart"
            }
        ],
        challenge_id: "Jakarta tenggelam 10cm/tahun. Peringatan tradisional terlalu umum, membuat warga terjebak di area 'blindspot' saat banjir bandang.",
        process_id: [
            {
                title: "Memetakan Blindspot",
                desc: "Sensor pemerintah cuma cover sungai besar. Got mikro di pemukiman gak terpantau. Butuh data crowdsource.",
                image: "airy:ecosystem"
            }
        ],
        insights_id: [
            {
                title: "Percaya Tetangga",
                desc: "Orang lebih percaya tetangga daripada pemerintah saat bencana. Sistem verifikasi P2P itu krusial.",
                image: "airy:network"
            }
        ],
        solution_id: [
            {
                title: "Waze untuk Bencana",
                desc: "Dibangun pakai PostGIS & Node.js. Agregasi data sensor dan laporan warga buat rute evakuasi real-time.",
                image: "airy:architecture"
            }
        ],
        learnings_id: "Dalam UI bencana, warna 'Merah' aja gak cukup. Butuh arahan spesifik yang bisa dilakukan.",
        stack: ["Node.js", "PostGIS", "Flutter"],
        links: { demo: "#", repo: "#" },
        iconName: 'AlertTriangle',
        type: 'IoT Prototype',
        coverImage: "airy:map",
        hidden: false,
        featured: false
    },
    {
        id: 'project-zen',
        title: 'Project Zen',
        subtitle: 'Netflix "Context-First"',
        desc: "Filtering content based on available time and cognitive load.",
        tldr: 'A frontend redesign that filters content based on Available Time and Cognitive Load.',
        tldr_id: 'Desain ulang frontend yang memfilter konten berdasarkan Waktu Tersedia dan Beban Kognitif.',
        desc_id: "Memfilter konten berdasarkan waktu luang dan beban kognitif.",
        title_id: 'Proyek Zen',
        subtitle_id: 'Netflix "Konteks-Pertama"',
        stack: ["UX Research", "Heuristic Analysis", "Frontend Architecture"],
        links: {
            demo: "#",
            repo: "#"
        },
        iconName: 'Zap',
        featured: true,
        type: 'Conceptual Redesign',
        date: "October 2023",
        coverImage: "airy:funnel",
        brandColor: "#E50914",
        snapshot: {
            tagline: "Context-First Discovery",
            heroImage: "airy:funnel"
        },
        context: {
            role: "Product Design (Outsider)",
            timeline: "Oct 2023",
            team: "Solo / Concept",
            client: "Netflix (Conceptual)"
        },
        challenge: "Current streaming interfaces prioritize content inventory (Genres) over user context (Time & Energy). This mismatch causes 'Decision Fatigue', leading to high abandonment rates where users leave to consume passive content like TikTok.",
        process: [
            {
                title: "The Problem: Decision Fatigue",
                desc: "Users open the app with a constraint ('I have 20 mins') or state ('I'm tired'). The interface forces them to browse generic silos. Consequence: 15 mins scrolling, then abandonment.",
                image: "airy:chart"
            },
            {
                title: "The Strategy: Context Bar",
                desc: "A sticky navigation rail that filters content based on 'Available Time' and 'Cognitive Load' before the click. Instantly re-sorting the grid without reload.",
                image: "airy:funnel"
            }
        ],
        insights: [
            {
                title: "The 'Dinner Timer' Persona",
                desc: "Budi has exactly 25 minutes to eat. He needs a show that finishes when his food finishes. Current UI fails him.",
                image: "airy:clock"
            },
            {
                title: "Heuristic Attention Score",
                desc: "We assigned scores based on metadata: 'Sitcom' = Low Load (Green), 'Sci-Fi' = High Load (Red). Promoting 'Calm Mode' for tired users.",
                image: "airy:radar"
            }
        ],
        solution: [
            {
                title: "Context-First Interface",
                desc: "Filters for 'Quick Bites' (<30m) and 'Chill' (Low Energy). Calm Mode disables auto-play trailers to reduce anxiety.",
                image: "airy:ui"
            }
        ],
        metrics: [
            { label: "Time-to-Play", value: "-40%" },
            { label: "Bounce Rate", value: "-15%" }
        ],
        learnings: "By surfacing duration and energy-level metadata before the click, we align the library with the user's immediate reality.",
        designProcess: [
            {
                type: "research",
                title: "Decision Fatigue",
                desc: "Users open the app with a constraint ('I have 20 mins') or state ('I'm tired'). The interface forces them to browse generic silos.",
                title_id: "Kelelahan Keputusan",
                desc_id: "Pengguna buka aplikasi dengan batasan ('Cuma punya 20 menit') atau kondisi ('Lagi capek'). Antarmuka memaksa mereka menelusuri silo generik.",
                image: "airy:chart"
            },
            {
                type: "insight",
                title: "The Dinner Timer",
                desc: "Persona 'Budi' has exactly 25 minutes to eat. He needs a show that finishes when his food finishes.",
                title_id: "Pengatur Waktu Makan Malam",
                desc_id: "Persona 'Budi' punya tepat 25 menit untuk makan. Dia butuh tontonan yang selesai pas makanannya habis.",
                image: "airy:timeline"
            },
            {
                type: "design",
                title: "Context Bar",
                desc: "A sticky navigation rail that filters content based on 'Available Time' and 'Cognitive Load'.",
                title_id: "Bar Konteks",
                desc_id: "Rel navigasi lengket yang memfilter konten berdasarkan 'Waktu Tersedia' dan 'Beban Kognitif'.",
                image: "airy:funnel"
            },
            {
                type: "ship",
                title: "Calm Mode",
                desc: "Disabling auto-play trailers and muting colors when 'Chill' mode is active to match the user's low energy state.",
                title_id: "Mode Tenang",
                desc_id: "Menonaktifkan trailer auto-play dan memudarkan warna saat mode 'Santai' aktif untuk menyesuaikan energi rendah pengguna.",
                image: "airy:ui"
            },
            {
                type: "measure",
                title: "Reducing TTP",
                desc: "Targeting a 40% reduction in Time-to-Play by aligning content with immediate user context.",
                title_id: "Mengurangi TTP",
                desc_id: "Menargetkan pengurangan 40% dalam Time-to-Play (Waktu-ke-Putar) dengan menyelaraskan konten dengan konteks pengguna.",
                image: "airy:chart"
            }
        ],
        challenge_id: "Antarmuka streaming saat ini memprioritaskan inventaris konten (Genre) daripada konteks pengguna (Waktu & Energi). Ketidakcocokan ini menyebabkan 'Kelelahan Keputusan', membuat pengguna pergi ke TikTok.",
        process_id: [
            {
                title: "Masalah: Kelelahan Keputusan",
                desc: "Pengguna bingung mau nonton apa. Akibatnya: 15 menit scrolling, lalu keluar aplikasi.",
                image: "airy:chart"
            },
            {
                title: "Strategi: Bar Konteks",
                desc: "Filter konten berdasarkan 'Waktu Tersedia' dan 'Beban Kognitif' sebelum klik. Mengurutkan ulang grid secara instan.",
                image: "airy:funnel"
            }
        ],
        insights_id: [
            {
                title: "Persona 'Makan Malam'",
                desc: "Butuh tontonan yang pas sama durasi makan 25 menit.",
                image: "airy:clock"
            },
            {
                title: "Skor Perhatian Heuristik",
                desc: "Sitkom = Beban Rendah (Hijau). Sci-Fi = Beban Tinggi (Merah).",
                image: "airy:radar"
            }
        ],
        solution_id: [
            {
                title: "Antarmuka Konteks-Pertama",
                desc: "Filter 'Camilan Cepat' (<30m) dan 'Santai'. Mode Tenang mematikan auto-play.",
                image: "airy:ui"
            }
        ],
        learnings_id: "Dengan memunculkan metadata durasi dan energi sebelum klik, kita menyelaraskan perpustakaan dengan realitas pengguna."
    },
    {
        id: 'filter-me',
        title: 'FilterMe',
        subtitle: 'AR Commerce Experiment',
        desc: "Fixing the 'Trust Gap' in cosmetics with AR.",
        tldr: "Using AR to kill the 'Trust Gap' in online cosmetics shopping.",
        tldr_id: "Menggunakan AR untuk membunuh 'Celah Kepercayaan' dalam belanja kosmetik online.",
        desc_id: "Menutup 'Celah Kepercayaan' kosmetik online dengan AR.",
        title_id: 'FilterMe',
        subtitle_id: 'Eksperimen AR Commerce',
        stack: ["Sketch", "Principle", "AR Design"],
        links: { demo: "", repo: "#" },
        iconName: 'Camera',
        featured: false,
        type: 'AR Camera',
        date: "January 2018",
        coverImage: "airy:face",
        snapshot: {
            tagline: "AR Commerce Experiment",
            heroImage: "airy:face"
        },
        context: {
            role: "Product Designer",
            timeline: "Jan 2018 (3 Weeks)",
            team: "SUX Team (Ifa, Kevin, Zaki)",
            client: "CHIuXID 2018 Design Challenge"
        },
        challenge: "The 'Trust Gap' in online shopping is real. Users hesitate to buy because they can't physically try products on. In the CHIuXID 2018 challenge, we explored how 'Intelligence' could solve this lack of 'Realness' in the digital journey.",
        challenge_id: "'Celah Kepercayaan' dalam belanja online itu nyata. User ragu beli karena gak bisa coba fisik. Di CHIuXID 2018, kami cari tahu gimana 'Intelligence' bisa kasih rasa 'Realness' di perjalanan digital.",
        metrics: [
            { label: "Confidence", value: "Boosted" },
            { label: "Return Rate", value: "Lowered" }
        ],
        designProcess: [
            {
                type: "research",
                title: "Understanding Realness",
                desc: "Surveying users revealed the most painful problem: they can't touch or try the product. We needed a technology to bridge this physical gap.",
                title_id: "Memahami Realitas",
                desc_id: "Survei user mengungkap masalah paling perih: mereka gak bisa pegang atau coba produknya. Butuh teknologi buat jembatanin celah fisik ini.",
                image: "airy:radar"
            },
            {
                type: "insight",
                title: "Social Filter Inspiration",
                desc: "Social media 'Filters' (Snapchat/IG) were already familiar to millennials. We hypothesized: what if we used this familiar interaction for commerce?",
                title_id: "Inspirasi Filter Sosial",
                desc_id: "Filter media sosial (Snapchat/IG) udah akrab buat milenial. Hipotesis kami: gimana kalau interaksi akrab ini dipake buat belanja?",
                image: "airy:venn"
            },
            {
                type: "design",
                title: "The Google Design Sprint",
                desc: "We used the Google Design Sprint framework to condense the journey into 3 weeks. Sketching flows specifically for 'facial' products to test our AR hypothesis.",
                title_id: "Google Design Sprint",
                desc_id: "Kami pake framework Google Design Sprint buat padetin journey dalam 3 minggu. Sketsa flow khusus buat produk wajah buat tes hipotesis AR.",
                image: "airy:layers"
            },
            {
                type: "ship",
                title: "Prototyping & Iteration",
                desc: "Built with Sketch and Principle. We iterated twice, conducting usability testing with 4 participants per iteration to refine the AR interaction.",
                title_id: "Prototipe & Iterasi",
                desc_id: "Dibangun pake Sketch dan Principle. Kami iterasi dua kali, tes usability ke 4 partisipan per iterasi buat poles interaksi AR.",
                image: "airy:ui"
            },
            {
                type: "measure",
                title: "Lesson Learned",
                desc: "Participants loved the interaction (engagement), but still questioned color accuracy. Conclusion: AR solves for 'Form', but trust still needs 'Texture' validation.",
                title_id: "Pelajaran Berharga",
                desc_id: "Partisipan suka interaksinya (engagement), tapi masih nanya soal akurasi warna. Kesimpulan: AR beresin soal 'Bentuk', tapi trust butuh validasi 'Tekstur'.",
                image: "airy:chart"
            }
        ],
        insights: [
            {
                title: "The 'AR as a Toy' Trap",
                desc: "We realized that AR can easily become a gimmick. Users play with it, but don't convert. The trajectory shifted to making AR functional rather than just playful."
            },
            {
                title: "Environmental Variables",
                desc: "Physical trust requires physical accuracy. Poor room lighting ruined the cosmetic color matching, highlighting that AR commerce depends heavily on the user's environment."
            }
        ],
        insights_id: [
            {
                title: "Jebakan 'AR sebagai Mainan'",
                desc: "Kami sadar AR gampang banget jadi sekadar gimmick. User main-main aja, tapi gak beli. Lintasannya berubah dari sekadar lucu-lucuan jadi bikin AR yang fungsional."
            },
            {
                title: "Variabel Lingkungan",
                desc: "Kepercayaan fisik butuh akurasi fisik. Cahaya ruangan yang jelek ngerusak warna kosmetik, ini nunjukkin kalau AR commerce sangat bergantung sama lingkungan user."
            }
        ],
        learnings: "A flashy interface isn't enough to build trust. When bridging physical products into a digital space, users need 'Texture' validation—proof that the digital translation exactly matches the physical reality.",
        learnings_id: "Tampilan keren aja gak cukup buat ngebangun rasa percaya. Saat ngebawa produk fisik ke dunia digital, user butuh validasi 'Tekstur'—bukti kalau versi digital itu sama persis dengan aslinya.",
        modules: [
            {
                title: "The CHIuXID 2018 Journey",
                content: "Participating in CHIuXID 2018 theme 'Designing for Intelligences'. Our SUX Team (Ifa, Kevin, Zaki) used a high-intensity Google Design Sprint to transform the 'social filter' behavior into a functional commerce tool called FilterMe."
            },
            {
                title: "Closing the Trust Gap",
                content: "FilterMe changes the question from 'Is this product good?' to 'Is this product good *on me*?'. While we didn't win first place, the process taught us that fun and engagement are only the first steps toward building technical trust."
            }
        ],
        modules_id: [
            {
                title: "Perjalanan CHIuXID 2018",
                content: "Ikut CHIuXID 2018 tema 'Designing for Intelligences'. Tim SUX kami (Ifa, Kevin, Zaki) pake Google Design Sprint intensitas tinggi buat ubah perilaku 'filter sosial' jadi alat belanja fungsional bernama FilterMe."
            },
            {
                title: "Menutup Celah Kepercayaan",
                content: "FilterMe ubah pertanyaan dari 'Produk ini bagus gak?' jadi 'Produk ini bagus gak *di saya*?'. Meski gak juara satu, prosesnya ngajarin kalau seru dan engagement baru langkah awal buat bangun trust teknis."
            }
        ]
    }
];
