export const interactiveWorkbook = {
    id: 'interactive-workbook',
    title: { en: 'Interactive Workbook', id: 'Buku Kerja Interaktif' },
    subtitle: { en: 'Bilingual Learning Platform', id: 'Platform Pembelajaran Bilingual' },
    desc: {
        en: 'A web-based, bilingual learning platform designed for secondary school students. It combines structured English conversation lessons with gamified progress tracking.',
        id: "Platform pembelajaran bilingual berbasis web untuk siswa sekolah menengah. Menggabungkan pelajaran percakapan bahasa Inggris terstruktur dengan pelacakan kemajuan yang digamifikasi."
    },
    tldr: {
        en: "A single-page web app delivering 8 learning units with interactive exercises, real-time Firebase tracking, and a teacher dashboard.",
        id: "Aplikasi web satu halaman yang menyajikan 8 unit pembelajaran dengan latihan interaktif, pelacakan Firebase real-time, dan dasbor guru."
    },
    stack: ["Vanilla JS", "Tailwind", "Firebase", "Chart.js"],
    links: { demo: "https://buku-kerja-interaktif.web.app/", repo: "github.com/fadlyzaki/interactive-workbook" },
    prototypeLink: "https://buku-kerja-interaktif.web.app/",
    iconName: 'BookOpen',
    featured: true,
    type: 'Education',
    date: "February 2026",
    coverImage: "airy:flow",
    snapshot: {
        tagline: { en: "Gamified Learning", id: "Pembelajaran Digamifikasi" },
        heroImage: "airy:flow"
    },
    context: {
        role: "Product Owner",
        timeline: "Feb 2026",
        team: "Solo / Internal",
        client: "Rumbel Geera"
    },
    challenge: {
        en: "Traditional English workbooks lack interactivity, real-time progress tracking, and personalized feedback. Students struggle with motivation, and teachers have no centralized way to monitor individual performance across activities.",
        id: "Buku kerja bahasa Inggris tradisional kurang interaktif, tidak memiliki pelacakan kemajuan real-time, dan umpan balik yang dipersonalisasi. Siswa kesulitan dengan motivasi, dan guru tidak memiliki cara terpusat untuk memantau kinerja individu di seluruh aktivitas."
    },
    process: [
        {
            title: { en: "1. Core Experience: Dual Dashboards", id: "1. Pengalaman Inti: Dasbor Ganda" },
            desc: {
                en: "We divided the app into two modes: A Student Mode without passwords for frictionless entry via Anonymous Auth, and a Password-Protected Teacher Mode with manual grading and observation tools.",
                id: "Kami membagi aplikasi menjadi dua mode: Akses Siswa tanpa kata sandi untuk masuk tanpa hambatan melalui Autentikasi Anonim, dan Mode Guru yang dilindungi kata sandi dengan alat penilaian dan observasi manual."
            },
            image: "airy:ui"
        },
        {
            title: { en: "2. The 6-Step Pedagogical Flow", id: "2. Alur Pedagogis 6 Langkah" },
            desc: {
                en: "Each of the 8 units follows a structured pedagogical path: Sing Along (YouTube integration), Vocabulary, Dialogue Reading, Speaking Practice, Duolingo Play (recording XP and Streak), and a 5-star Self Reflection.",
                id: "Setiap dari 8 unit mengikuti jalur pedagogis yang terstruktur: Bernyanyi (Integrasi YouTube), Kosakata, Membaca Dialog, Latihan Berbicara, Bermain Duolingo (mencatat XP dan Streak), dan Refleksi Diri 5 Bintang."
            },
            image: "airy:flow"
        },
        {
            title: { en: "3. Real-Time Tracking Architecture", id: "3. Arsitektur Pelacakan Real-Time" },
            desc: {
                en: "Built using Vanilla JS as a Single Page App. Student contextual data (Pre-tests, Post-tests, Motivation surveys, and Session snapshots) are saved directly to Firestore in real-time.",
                id: "Dibangun menggunakan Vanilla JS sebagai Single Page App. Data kontekstual siswa (Pra-tes, Pasca-tes, Survei motivasi, dan Cuplikan sesi) disimpan langsung ke Firestore secara real-time."
            },
            image: "airy:network"
        }
    ],
    insights: [
        {
            title: { en: "AI Conversation Tutor (Planned)", id: "Tutor Percakapan AI (Direncanakan)" },
            desc: {
                en: "A planned high-priority feature using an AI-powered chatbot (Web Speech API + LLM) to simulate real English conversations, providing pronunciation accuracy and grammar feedback dynamically.",
                id: "Fitur prioritas tinggi yang direncanakan menggunakan chatbot bertenaga AI (Web Speech API + LLM) untuk mensimulasikan percakapan bahasa Inggris asli, memberikan akurasi pengucapan dan umpan balik tata bahasa secara dinamis."
            },
            image: "airy:radar"
        },
        {
            title: { en: "Adaptive Learning Engine (Planned)", id: "Mesin Pembelajaran Adaptif (Direncanakan)" },
            desc: {
                en: "Using student pre-test and unit performance data to automatically adjust question difficulty, combined with spaced repetition algorithms (SM-2) for vocabulary review scheduling.",
                id: "Menggunakan data pra-tes dan kinerja unit siswa untuk secara otomatis menyesuaikan kesulitan pertanyaan, dikombinasikan dengan algoritma pengulangan berjarak (SM-2) untuk penjadwalan tinjauan kosakata."
            },
            image: "airy:venn"
        },
        {
            title: { en: "Automated Assessment (Planned)", id: "Penilaian Otomatis (Direncanakan)" },
            desc: {
                en: "Implementing AI to evaluate free-text sentence examples for grammar, relevance, and creativity. Generating pre/post-test analytics and AI-driven individual student report cards.",
                id: "Mengimplementasikan AI untuk mengevaluasi contoh kalimat teks bebas untuk tata bahasa, relevansi, dan kreativitas. Menghasilkan analitik pra/pasca-tes dan kartu laporan siswa individu yang digerakkan oleh AI."
            },
            image: "airy:network"
        }
    ],
    solution: [
        {
            title: { en: "Seamless Language Switching", id: "Pergantian Bahasa Mulus" },
            desc: {
                en: "A full Indonesia-English language toggle integrated deeply into all parts of the app to assist secondary school learners.",
                id: "Fitur pergantian bahasa Indonesia-Inggris yang terintegrasi secara mendalam di seluruh bagian aplikasi untuk membantu siswa sekolah menengah."
            },
            image: "airy:ui"
        },
        {
            title: { en: "Duolingo for Schools Integration", id: "Integrasi Duolingo for Schools" },
            desc: {
                en: "Connecting app sessions directly with Duolingo classroom codes (wuyzyz) to track Streak and XP progression visually with Chart.js.",
                id: "Menghubungkan sesi aplikasi dengan kode kelas Duolingo (wuyzyz) untuk melacak kemajuan Streak dan XP secara visual menggunakan Chart.js."
            },
            image: "airy:flow"
        }
    ],
    metrics: [
        { label: "Learning Units", value: "8" },
        { label: "Target Audience", value: "7th-11th" }
    ],
    learnings: {
        en: "Digitizing education isn't about replacing the teacher—it's about automating the administrative overhead so the teacher can focus on the human connection. Phase 1 proved that frictionless entry is the gatekeeper of student engagement.",
        id: "Mendigitalkan pendidikan bukan tentang mengganti guru—ini tentang mengotomatiskan beban administratif sehingga guru dapat fokus pada koneksi manusia. Fase 1 membuktikan bahwa orientasi tanpa hambatan adalah kunci keterlibatan siswa."
    },
    designProcess: [
        {
            type: "research",
            title: { en: "Motivation & Measurement", id: "Motivasi & Pengukuran" },
            desc: {
                en: "Classrooms struggle to baseline and track student motivation. We built a 12-question Likert-scale survey integrated directly into the onboarding flow, saving real-time measurements per student.",
                id: "Kelas kesulitan melacak motivasi siswa. Kami membangun survei skala Likert 12 pertanyaan yang diintegrasikan secara langsung ke dalam alur orientasi, menyimpan pengukuran real-time per siswa."
            },
            image: "airy:radar"
        },
        {
            type: "design",
            title: { en: "Pedagogical Structure", id: "Struktur Pedagogis" },
            desc: {
                en: "We standardized the learning flow: Introduction through Music -> Vocabulary Building -> Contextual Dialogue -> Speaking Practice -> Gamified Output (Duolingo) -> Self Reflection.",
                id: "Kami menstandarkan alur pembelajaran: Pengenalan melalui Musik -> Membangun Kosakata -> Dialog Kontekstual -> Latihan Berbicara -> Output Gamifikasi (Duolingo) -> Refleksi Diri."
            },
            image: "airy:flow"
        },
        {
            type: "ship",
            title: { en: "Frictionless Onboarding", id: "Orientasi Tanpa Hambatan" },
            desc: {
                en: "Students can register via dropdowns (name & class) using Firebase Anonymous Auth, bypassing password fatigue and ensuring high participation rates.",
                id: "Siswa dapat mendaftar melalui dropdown (nama & kelas) menggunakan Autentikasi Anonim Firebase, menghindari kelelahan kata sandi dan memastikan tingkat partisipasi yang tinggi."
            },
            image: "airy:ui"
        },
        {
            type: "measure",
            title: { en: "Automated Assessment Future", id: "Masa Depan Penilaian Otomatis" },
            desc: {
                en: "While Phase 1 allows for Teacher Manual Grading via a dashboard, Phase 2 implements AI models (Gemini/OpenAI) to autograde written sentences and generate personalized insight report cards.",
                id: "Sementara Fase 1 memungkinkan Penilaian Manual Guru melalui dasbor, Fase 2 mengimplementasikan model AI (Gemini/OpenAI) untuk menilai kalimat tertulis secara otomatis dan menghasilkan kartu laporan wawasan pribadi."
            },
            image: "airy:network"
        }
    ]
};
