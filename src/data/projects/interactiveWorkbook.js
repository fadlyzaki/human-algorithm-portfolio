
export const interactiveWorkbook = {
    id: 'interactive-workbook',
    title: { en: 'Interactive Workbook', id: 'Buku Kerja Interaktif' },
    subtitle: { en: 'Bimbel Geera Platform', id: 'Platform Bimbel Geera' },
    desc: {
        en: 'A digital safe space for students to fail without fear. Reducing cognitive load in language learning.',
        id: "Ruang aman digital bagi siswa untuk gagal tanpa rasa takut. Mengurangi beban kognitif dalam pembelajaran bahasa."
    },
    tldr: {
        en: "Turning 'Silence' into 'Signal'. A tool that helps teachers identify struggling students before they quit.",
        id: "Mengubah kebisuan siswa menjadi data. Alat yang membantu guru mengidentifikasi siswa yang kesulitan sebelum mereka menyerah."
    },
    stack: ["React", "Firebase", "Realtime DB"],
    links: { demo: "https://buku-kerja-interaktif.web.app/", repo: "github.com/fadlyzaki/interactive-workbook" },
    prototypeLink: "https://buku-kerja-interaktif.web.app/",
    iconName: 'BookOpen',
    featured: true,
    type: 'Education',
    date: "August 2025",
    coverImage: "airy:flow",
    snapshot: {
        tagline: { en: "Psychological Safety v3.1", id: "Keamanan Psikologis v3.1" },
        heroImage: "airy:flow"
    },
    context: {
        role: "Product Owner",
        timeline: "Aug 2025",
        team: "Geera Education Team",
        client: "Internal Venture"
    },
    challenge: {
        en: "The Silent Failure: In every classroom, there are students who know the answer but are terrified of public failure. They disengage to protect their ego. Traditional LMS tools track 'grades', but they fail to track 'struggle' or 'confidence'. We needed a way to make the invisible struggle visible.",
        id: "Kebisuan yang Gagal: Di setiap kelas, ada siswa yang tahu jawabannya tetapi takut gagal di depan umum. Kami membutuhkan cara untuk membuat perjuangan yang tak terlihat menjadi terlihat."
    },
    process: [
        {
            title: { en: "Product Strategy: Psychological Safety", id: "Strategi Produk: Keamanan Psikologis" },
            desc: {
                en: "We hypothesized that if we removed the 'Audience', we would increase the 'Attempts'. We built a 'Private Mode' where students could record themselves and self-correct before hitting submit. This shifted the UX from 'Performance' to 'Practice'.",
                id: "Kami membangun 'Mode Pribadi' di mana siswa dapat merekam diri mereka sendiri dan mengoreksi diri sebelum mengirimkan. Ini menggeser UX dari 'Pertunjukan' ke 'Latihan'."
            },
            image: "airy:flow"
        },
        {
            title: { en: "Technical Execution: Latency as Feedback", id: "Eksekusi Teknis: Latensi sebagai Umpan Balik" },
            desc: {
                en: "We used Firebase Realtime Database to provide millisecond-level feedback. The 'Ding!' sound effect wasn't just polish; it was a dopamine trigger to reinforce the behavior of 'trying'. We optimized for low-bandwidth environments common in our target demographic.",
                id: "Kami menggunakan Firebase Realtime Database untuk memberikan umpan balik tingkat milidetik. Efek suara 'Ding!' adalah pemicu dopamin untuk memperkuat perilaku 'mencoba'."
            },
            image: "airy:network"
        }
    ],
    insights: [
        {
            title: { en: "Confidence Monitor", id: "Dashboard 'Monitor Kepercayaan Diri'" },
            desc: {
                en: "Teachers prefer a simple pulse check over complex analytics.",
                id: "Guru membutuhkan nadi langsung kelas. Kami membangun dashboard yang menyoroti siswa yang *berusaha* tetapi *gagal* sehingga guru dapat melakukan intervensi dengan dorongan."
            },
            image: "airy:radar"
        },
        {
            title: { en: "Singing Bypass", id: "Jalur Bernyanyi" },
            desc: {
                en: "Karaoke mode uses melody to bypass stuttering blocks.",
                id: "Kami menemukan bahwa siswa yang gagap dalam berbicara dapat bernyanyi dengan lancar. Kami beralih untuk menyertakan 'Mode Karaoke' untuk latihan kosakata."
            },
            image: "airy:venn"
        }
    ],
    solution: [
        {
            title: { en: "The Product", id: "The Product" }, // ID Content not distinctly translated in file, fallback to EN or implied
            desc: {
                en: "A realtime interactive workbook that rewards 'Start' not just 'Finish'.",
                id: "A realtime interactive workbook that rewards 'Start' not just 'Finish'."
            },
            image: "airy:ui"
        }
    ],
    metrics: [
        { label: "Participation", value: "Surged" },
        { label: "Anxiety Rpt", value: "Minimized" }
    ],
    learnings: {
        en: "Technology shouldn't just digitize the textbook; it should fix the psychology of the classroom. Lowering the stakes of failure raises the rate of learning.",
        id: "Teknologi tidak boleh sekadar mendigitalkan buku teks; itu harus memperbaiki psikologi kelas. Menurunkan taruhan kegagalan meningkatkan tingkat pembelajaran."
    },
    designProcess: [
        {
            type: "research",
            title: { en: "The Silent Failure", id: "Kebisuan yang Gagal" },
            desc: {
                en: "In every classroom, students who know the answer remain silent due to fear of public failure. Traditional tools track grades, not confidence.",
                id: "Di setiap kelas, siswa yang tahu jawabannya tetap diam karena takut gagal di depan umum. Alat tradisional melacak nilai, bukan kepercayaan diri."
            },
            image: "airy:flow"
        },
        {
            type: "insight",
            title: { en: "Singing Bypass", id: "Jalur Bernyanyi" },
            desc: {
                en: "We found that students who stutter when speaking can often sing fluently. Melody bypasses the neural blockages of anxiety.",
                id: "Kami menemukan bahwa siswa yang gagap saat berbicara seringkali bisa bernyanyi dengan lancar. Melodi memintas hambatan saraf kecemasan."
            },
            image: "airy:venn"
        },
        {
            type: "design",
            title: { en: "Private Mode", id: "Mode Pribadi" },
            desc: {
                en: "We removed the 'Audience'. Students record themselves in a safe space, self-correcting before they submit. UX shifted from 'Performance' to 'Practice'.",
                id: "Kami menghapus 'Penonton'. Siswa merekam diri di ruang aman, mengoreksi diri sebelum mengirim. UX bergeser dari 'Pertunjukan' ke 'Latihan'."
            },
            image: "airy:ui"
        },
        {
            type: "ship",
            title: { en: "Latency as Feedback", id: "Latensi sebagai Umpan Balik" },
            desc: {
                en: "Used Firebase for millisecond-level feedback. The 'Ding!' sound became a dopamine trigger to reinforce the behavior of 'trying'.",
                id: "Menggunakan Firebase untuk umpan balik milidetik. Suara 'Ding!' menjadi pemicu dopamin untuk memperkuat perilaku 'mencoba'."
            },
            image: "airy:network"
        },
        {
            type: "measure",
            title: { en: "Psychological Safety", id: "Keamanan Psikologis" },
            desc: {
                en: "lowering the stakes of failure raises the rate of learning. Participation surged when the fear of judgment was removed.",
                id: "Menurunkan taruhan kegagalan meningkatkan tingkat pembelajaran. Partisipasi melonjak saat ketakutan akan penghakiman dihilangkan."
            },
            image: "airy:radar"
        }
    ]
};
