
export const dolphi = {
    id: 'dolphi',
    title: { en: 'Dolphi', id: 'Dolphi' },
    subtitle: { en: 'Gamified Meta-Tracker', id: 'Meta-Tracker Gamifikasi' },
    desc: {
        en: 'A "Cosmic Pop" habit arena that bridges the gap between siloed productivity apps. Centralized dopamine for the optimized self.',
        id: "'Arena Kebiasaan' bergaya Cosmic Pop yang menjembatani aplikasi produktivitas yang terpisah. Dopamin terpusat untuk diri yang optimal."
    },
    tldr: {
        en: "Aggregates wins from Duolingo, Strava, and Finch into a single, gamified ecosystem led by a mascot.",
        id: "Menggabungkan kemenangan dari Duolingo, Strava, dan Finch menjadi satu ekosistem gamifikasi yang dipimpin oleh maskot."
    },
    stack: ["SwiftUI", "Combine", "CoreData", "WidgetKit"],
    links: { demo: "#", repo: "#" },
    iconName: 'Activity',
    featured: true,
    type: 'iOS Ecosystem',
    date: "2026",
    coverImage: "airy:ui",
    brandColor: "#00C2FF",
    snapshot: {
        tagline: { en: "Gamified Habits v1.5", id: "Kebiasaan Gamifikasi v1.5" },
        heroImage: "airy:ui"
    },
    context: {
        role: "Product Owner",
        timeline: "2026",
        team: "Solo Venture",
        client: "Indie Ship"
    },
    challenge: {
        en: "The Fragmented Self: Users rely on specific apps for specific habits (Duolingo for language, Strava for runs), but there's no centralized 'Arena' to visualize total daily progress. Breaking a streak in one app feels like a total failure.",
        id: "Diri yang Terfragmentasi: Pengguna bergantung pada aplikasi khusus untuk kebiasaan tertentu (Duolingo, Strava), tetapi tidak ada 'Arena' terpusat untuk memvisualisasikan kemajuan harian total."
    },
    process: [
        {
            title: { en: "Concept: The Meta-Tracker", id: "Konsep: Meta-Tracker" },
            desc: {
                en: "Instead of building another habit tracker, we built a 'Meta-Layer'. Dolphi doesn't replace your apps; it aggregates their 'Wins'. It turns boring consistency into a 'Cosmic Pop' game.",
                id: "Alih-alih membangun pelacak kebiasaan lain, kami membangun 'Meta-Layer'. Dolphi menggabungkan 'Kemenangan' mereka menjadi game 'Cosmic Pop'."
            },
            image: "airy:layers"
        },
        {
            title: { en: "Mechanic: Streak Saves", id: "Mekanik: Penyelamat Streak" },
            desc: {
                en: "Anxiety kills consistency. We introduced 'Shields'—a forgiveness mechanic where a missed day consumes a shield instead of resetting the global streak. This prioritizes persistence over perfection.",
                id: "Kecemasan membunuh konsistensi. Kami memperkenalkan 'Perisai'—mekanisme pengampunan di mana hari yang terlewat memakan perisai, bukan mereset statistik."
            },
            image: "airy:shield"
        }
    ],
    insights: [
        {
            title: { en: "Centralized Dopamine", id: "Dopamin Terpusat" },
            desc: {
                en: "By unifying progress from disparate sources into one 'Dolphin Level', users feel a holistic sense of achievement that single-vertical apps cannot provide.",
                id: "Dengan menyatukan kemajuan dari berbagai sumber, pengguna merasakan pencapaian holistik."
            },
            image: "airy:chart"
        },
        {
            title: { en: "Forgiveness as a Feature", id: "Pengampunan sebagai Fitur" },
            desc: {
                en: "'Streak Saves' increased long-term retention. Users are more likely to return after a break if they haven't lost everything.",
                id: "'Penyelamat Streak' meningkatkan retensi jangka panjang."
            },
            image: "airy:heart"
        }
    ],
    solution: [
        {
            title: { en: "The Habit Arena", id: "Arena Kebiasaan" },
            desc: {
                en: "A unified dashboard for the 'Optimized Self'. Cross-platform sync (iOS/macOS) ensures the habit loop follows the user.",
                id: "Dashboard terpadu untuk 'Diri yang Optimal'. Sinkronisasi lintas platform (iOS/macOS) memastikan lingkaran kebiasaan mengikuti pengguna."
            },
            image: "airy:ui"
        }
    ],
    metrics: [
        { label: "Retention", value: "High" },
        { label: "Shields Used", value: "Frequent" }
    ],
    learnings: {
        en: "Productivity shouldn't be anxiety-inducing. By adding a layer of 'Cosmic Pop' and forgiveness, we turn chores into quests.",
        id: "Produktivitas tidak boleh memicu kecemasan. Dengan menambahkan lapisan 'Cosmic Pop' dan pengampunan, kami mengubah tugas menjadi quest."
    },
    designProcess: [
        {
            type: "research",
            title: { en: "The Fragmented Self", id: "Diri yang Terfragmentasi" },
            desc: {
                en: "Users use Duolingo for languages, Strava for fitness, and Finch for self-care. But they lack a unified view of their 'Daily Wins'.",
                id: "Pengguna menggunakan Duolingo untuk bahasa, Strava untuk kebugaran. Tapi mereka tidak memiliki tampilan terpadu untuk 'Kemenangan Harian' mereka."
            },
            image: "airy:layers"
        },
        {
            type: "insight",
            title: { en: "Anxiety vs Consistency", id: "Kecemasan vs Konsistensi" },
            desc: {
                en: "Strict streak mechanics cause anxiety. If a user breaks a 100-day streak, they often quit entirely. We needed a 'Soft Landing'.",
                id: "Mekanisme streak yang ketat menyebabkan kecemasan. Jika pengguna memutus streak 100 hari, mereka sering berhenti total."
            },
            image: "airy:shield"
        },
        {
            type: "design",
            title: { en: "Cosmic Pop Aesthetic", id: "Estetika Cosmic Pop" },
            desc: {
                en: "Deep space backgrounds (#260D40) meets Dolphin Blue (#00C2FF) accents. Productivity should feel like an arcade game, not a spreadsheet.",
                id: "Latar belakang luar angkasa bertemu aksen Biru Lumba-lumba. Produktivitas harus terasa seperti game arcade, bukan spreadsheet."
            },
            image: "airy:ui"
        },
        {
            type: "ship",
            title: { en: "Dolphi The Mascot", id: "Maskot Dolphi" },
            desc: {
                en: "A reactive mascot that levels up with you. From 'Idle' breathing to 'Splash Jump' celebrations. He is the emotional anchor of the system.",
                id: "Maskot reaktif yang naik level bersamamu. Dari bernapas 'Idle' hingga perayaan 'Splash Jump'. Dia adalah jangkar emosional sistem."
            },
            image: "airy:ui"
        },
        {
            type: "measure",
            title: { en: "Forgiveness Retention", id: "Retensi Pengampunan" },
            desc: {
                en: "Users who utilized 'Streak Shields' showed higher 30-day retention than those on strict binary streak systems.",
                id: "Pengguna yang menggunakan 'Perisai Streak' menunjukkan retensi 30 hari yang lebih tinggi daripada sistem streak biner ketat."
            },
            image: "airy:chart"
        }
    ]
};
