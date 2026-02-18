
export const productivityIllusion = {
    id: 'productivity-illusion',
    title: { en: 'The Productivity Illusion', id: 'The Productivity Illusion' },
    subtitle: { en: 'Gamification vs. Cognitive Mastery', id: 'Gamifikasi vs. Penguasaan Kognitif' },
    desc: {
        en: 'Decoding the Gap Between Gamified Engagement and Cognitive Mastery.',
        id: "Mendekode Kesenjangan Antara Keterlibatan Gamifikasi dan Penguasaan Kognitif."
    },
    tldr: {
        en: "Gamification can mask a lack of progress. We redesigned learning to prioritize cognitive mastery over surface-level engagement.",
        id: "Gamifikasi dapat menutupi kurangnya kemajuan. Kami mendesain ulang pembelajaran untuk memprioritaskan penguasaan kognitif di atas keterlibatan permukaan."
    },
    stack: ["Python (Colab)", "Behavioral Analytics", "Z-Score Modeling"],
    links: { demo: "#", repo: "#" },
    iconName: 'Activity',
    featured: true,
    type: 'Research',
    date: "2025-2026",
    coverImage: "airy:radar",
    snapshot: {
        tagline: { en: "Cognitive Mastery v1.0", id: "Cognitive Mastery v1.0" },
        heroImage: "airy:radar"
    },
    context: {
        role: "Product Owner",
        timeline: "2025-2026",
        team: "Solo Research",
        client: "Academic"
    },
    challenge: {
        en: "In the age of digital accessibility, why does academic performance often remain stagnant? Students at tutoring centers were experiencing 'cognitive burnout'. Mobile devices—which should be tools for high-efficiency learning—were primarily sources of passive distraction.",
        id: "Di era aksesibilitas digital, mengapa kinerja akademik seringkali stagnan? Perangkat seluler—yang seharusnya menjadi alat efisiensi tinggi—malah jadi sumber gangguan pasif."
    },
    process: [
        {
            title: { en: "The Station Rotation Model", id: "Model Rotasi Stasiun" },
            desc: {
                en: "I designed a Blended Learning framework that integrated a 15-minute gamified 'Digital Closure' into the physical classroom flow. Teacher-Led: Direct instruction. Collaborative: Peer-to-peer. Digital Closure: High-intensity sprint.",
                id: "Kerangka Blended Learning yang mengintegrasikan 'Penutupan Digital' gamifikasi 15 menit ke dalam alur kelas fisik."
            },
            image: "airy:cycle"
        },
        {
            title: { en: "The Data Engine: Modeling", id: "Mesin Data: Pemodelan" },
            desc: {
                en: "To move beyond surface-level metrics, I used Google Colab to process raw behavioral logs. Normalization: Standardizing diverse metrics (XP, time) into a single Z-score index to find the truth.",
                id: "Untuk melampaui metrik permukaan, saya menggunakan Google Colab untuk memproses log perilaku mentah. Normalisasi metrik menjadi indeks Z-score tunggal."
            },
            image: "airy:funnel"
        }
    ],
    insights: [
        {
            title: { en: "The Productivity Illusion", id: "Ilusi Produktivitas" },
            desc: {
                en: "Students reported high Perception (Mean 3.44) due to constant positive reinforcement (streaks, sounds). However, actual logs showed 'low-intensity' states. Engagement != Learning.",
                id: "Siswa melaporkan Persepsi tinggi (Mean 3.44) karena penguatan positif konstan. Namun, log aktual menunjukkan keadaan 'intensitas rendah'."
            },
            image: "airy:chart"
        }
    ],
    solution: [
        {
            title: { en: "Cognitive Integrity Widget", id: "Widget Integritas Kognitif" },
            desc: {
                en: "We proposed a new widget that visualizes 'Active Focus Time' vs 'Total App Time', grounding users in reality and promoting high-efficiency bursts.",
                id: "Widget yang memvisualisasikan 'Waktu Fokus Aktif' vs 'Total Waktu Aplikasi', membumikan pengguna dalam realitas."
            },
            image: "airy:ui"
        }
    ],
    metrics: [
        { label: "Mastery Score", value: "+9%" },
        { label: "Effect Size", value: "r=0.62" }
    ],
    learnings: {
        en: "By using data modeling to peel back the layers of user perception, we can design interfaces that don't just keep users engaged, but actually empower them to achieve mastery.",
        id: "Dengan menggunakan pemodelan data untuk mengupas lapisan persepsi pengguna, kita dapat merancang antarmuka yang benar-benar memberdayakan mereka untuk mencapai penguasaan."
    },
    designProcess: [
        {
            type: "research",
            title: { en: "The Digital Paradox", id: "Paradoks Digital" },
            desc: {
                en: "In West Sumatra, junior high students have high mobile access but low learning initiative. We explored why gamified apps weren't translating to grades.",
                id: "Di Sumatera Barat, siswa SMP memiliki akses seluler tinggi tetapi inisiatif belajar rendah. Kami mengeksplorasi mengapa aplikasi gamifikasi tidak berdampak pada nilai."
            },
            image: "airy:radar"
        },
        {
            type: "insight",
            title: { en: "The Productivity Illusion", id: "Ilusi Produktivitas" },
            desc: {
                en: "Gamification can mask a lack of progress. Users are 'hooked' on the reward loop, creating an illusion of productivity while actual learning is low.",
                id: "Gamifikasi bisa menutupi kurangnya kemajuan. Pengguna 'terpancing' pada lingkaran hadiah, menciptakan ilusi produktivitas padahal pembelajaran nyata rendah."
            },
            image: "airy:chart"
        },
        {
            type: "design",
            title: { en: "Station Rotation", id: "Rotasi Stasiun" },
            desc: {
                en: "We didn't ditch digital. We time-boxed it. 15-minute high-intensity sprints at the end of class proved more effective than hour-long passive sessions.",
                id: "Kami tidak membuang digital. Kami membatasinya. Sprint intensitas tinggi 15 menit di akhir kelas terbukti lebih efektif daripada sesi pasif berjam-jam."
            },
            image: "airy:cycle"
        },
        {
            type: "ship",
            title: { en: "Data-Driven Reality", id: "Realitas Berbasis Data" },
            desc: {
                en: "Using Python & Z-Scores to normalize 'XP' against 'Test Scores' revealed the truth: engagement does not equal mastery.",
                id: "Menggunakan Python & Z-Score untuk menormalkan 'XP' terhadap 'Nilai Tes' mengungkapkan kebenaran: keterlibatan tidak sama dengan penguasaan."
            },
            image: "airy:funnel"
        },
        {
            type: "measure",
            title: { en: "Impact: Large Effect", id: "Dampak: Efek Besar" },
            desc: {
                en: "The intervention showed a 'Large Effect' (r=0.62) on student outcomes. Mastery scores increased significantly.",
                id: "Intervensi menunjukkan 'Efek Besar' (r=0.62) pada hasil siswa. Skor penguasaan meningkat secara signifikan."
            },
            image: "airy:ui"
        }
    ]
};
