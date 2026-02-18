
export const yearInReview = {
    id: 'year-in-review',
    title: { en: 'Year in Review', id: 'Year in Review' },
    subtitle: { en: 'Manual Data Visualization', id: 'Visualisasi Data Manual' },
    desc: {
        en: 'Your memories shouldn\'t be held hostage by an algorithm. A manual celebration of the life you actually lived.',
        id: "Kenanganmu tak seharusnya disandera algoritma. Perayaan manual atas hidup yang benar-benar kamu jalani."
    },
    tldr: {
        en: "Reclaiming the joy of 'remembering' from the automated feed.",
        id: "Merebut kembali kegembiraan 'mengenang' dari feed otomatis."
    },
    stack: ["React", "TypeScript", "Canvas API"],
    links: { demo: "https://year-in-review-jak.vercel.app/", repo: "github.com/fadlyzaki/manual-wrapped" },
    iconName: 'Calendar',
    type: 'DataViz',
    date: "December 2025",
    coverImage: "airy:data",
    snapshot: {
        tagline: { en: "Manual Memory v4.2", id: "Ingatan Manual v4.2" },
        heroImage: "airy:data"
    },
    context: {
        role: "Product Owner",
        timeline: "Dec 2025",
        team: "Solo Project",
        client: "Public"
    },
    challenge: {
        en: "Spotify Wrapped is fun, but it's a corporate summary of your consumption. It doesn't know about the breakup, the new puppy, or the night you quit your job. We outsourced our memories to platforms that optimize for engagement, not reflection.",
        id: "Spotify Wrapped itu seru, tapi itu sekadar rangkuman korporat konsumsimu. Ia tak tahu soal putus cinta atau anjing barumu. Kita menyerahkan ingatan pada platform yang peduli engagement, bukan refleksi."
    },
    process: [
        {
            title: { en: "Designing for Nostalgia", id: "Mendesain Nostalgia" },
            desc: {
                en: "We built a tool that asks: 'What actually happened?' The Input is manual—no APIs. The Friction is the point; typing forces reflection.",
                id: "Alat yang bertanya: 'Apa yang sebenarnya terjadi?' Input manual, tanpa API. Friksi mengetik itu memaksa refleksi."
            },
            image: "airy:timeline"
        },
        {
            title: { en: "Visualizing the Invisible", id: "Memvisualisasikan yang Tak Terlihat" },
            desc: {
                en: "How do you visualize 'Heartbreak'? We created abstract 'Aura Themes'. Neon for chaos, Blueprint for structure, Soft Focus for healing.",
                id: "Gimana visualisasi 'Patah Hati'? Kami buat 'Tema Aura': Neon untuk chaos, Blueprint untuk struktur, Soft Focus untuk penyembuhan."
            },
            image: "airy:layers"
        }
    ],
    insights: [
        {
            title: { en: "The 'Share' Paradox", id: "Paradoks 'Share'" },
            desc: {
                en: "People want privacy but love to perform. 'Screenshot Mode' strips the UI, allowing users to perform vulnerability on Instagram Stories while reclaiming the aesthetic for their own narrative.",
                id: "Orang ingin privasi tapi suka tampil. 'Screenshot Mode' membuang UI, memvalidasi user untuk memamerkan kerentanan mereka dengan estetika yang mereka kontrol."
            },
            image: "airy:venn"
        }
    ],
    solution: [
        {
            title: { en: "Manual Entry Interface", id: "Manual Entry Interface" },
            desc: { en: "A quiet space to remember.", id: "A quiet space to remember." },
            image: "airy:ui",
            link: "https://year-in-review-jak.vercel.app/",
            linkLabel: "Launch Wrapped"
        },
        { title: { en: "The Output", id: "The Output" }, desc: { en: "Shareable artifacts of personal history.", id: "Shareable artifacts of personal history." }, image: "airy:data" }
    ],
    metrics: [
        { label: "Nostalgia", value: "Reclaimed" },
        { label: "Privacy", value: "100% Local" }
    ],
    learnings: {
        en: "Your memories shouldn't be held hostage by an algorithm.",
        id: "Kenanganmu tak seharusnya disandera algoritma."
    },
    designProcess: [
        {
            type: "research",
            title: { en: "Designing for Nostalgia", id: "Mendesain Nostalgia" },
            desc: {
                en: "Spotify Wrapped is a corporate summary. We wanted to verify 'What actually happened?'. The friction of manual entry forces reflection.",
                id: "Spotify Wrapped adalah rangkuman korporat. Kami ingin memverifikasi 'Apa yang sebenarnya terjadi?'. Friksi input manual memaksa refleksi."
            },
            image: "airy:timeline"
        },
        {
            type: "insight",
            title: { en: "The 'Share' Paradox", id: "Paradoks 'Share'" },
            desc: {
                en: "People want privacy but love to perform. They needed a way to share the 'aesthetic' of their year without exposing the raw data.",
                id: "Orang ingin privasi tapi suka tampil. Mereka butuh cara untuk membagikan 'estetika' tahun mereka tanpa mengekspos data mentah."
            },
            image: "airy:venn"
        },
        {
            type: "design",
            title: { en: "Aura Themes", id: "Tema Aura" },
            desc: {
                en: "Visualizing the invisible. We created abstract themes like 'Neon Chaos' or 'Blueprint Structure' to represent the feeling of the year.",
                id: "Memvisualisasikan yang tak terlihat. Kami membuat tema abstrak seperti 'Neon Chaos' atau 'Blueprint Structure' untuk mewakili perasaan tahun itu."
            },
            image: "airy:layers"
        },
        {
            type: "ship",
            title: { en: "Manual Entry UI", id: "UI Input Manual" },
            desc: {
                en: "A quiet, focused interface. No APIs, no automation. Just you and your memories.",
                id: "Antarmuka yang tenang dan fokus. Tanpa API, tanpa otomatisasi. Hanya kamu dan kenanganmu."
            },
            image: "airy:ui"
        },
        {
            type: "measure",
            title: { en: "Reclaimed Memory", id: "Ingatan yang Direbut Kembali" },
            desc: {
                en: "Users reported a deeper sense of closure compared to automated summaries. The act of remembering is valuable.",
                id: "Pengguna melaporkan rasa penutupan yang lebih dalam dibandingkan rangkuman otomatis. Tindakan mengingat itu berharga."
            },
            image: "airy:data"
        }
    ]
};
