export const productivityIllusion = {
  id: "productivity-illusion",
  title: { en: "The Productivity Illusion", id: "The Productivity Illusion" },
  subtitle: {
    en: "Bridging the Intention–Behavior Gap",
    id: "Menjembatani Kesenjangan Niat–Perilaku",
  },
  desc: {
    en: "Designing for Real Learning: Why high motivation and gamification don't guarantee real engagement — and what to do about it.",
    id: "Mendesain untuk Pembelajaran Nyata: Mengapa motivasi tinggi dan gamifikasi tidak menjamin keterlibatan nyata — dan apa yang harus dilakukan.",
  },
  tldr: {
    en: "A mixed-method research study revealing that gamified language learners systematically overestimate their engagement. Users reported high activity (Mean 3.44) while log data told a different story — exposing a critical intention–behavior gap that demands a shift from engagement-focused to behaviorally-informed product design.",
    id: "Studi riset metode campuran yang mengungkap bahwa pelajar bahasa tergamifikasi secara sistematis melebih-lebihkan keterlibatan mereka. Pengguna melaporkan aktivitas tinggi (Mean 3.44) sementara data log bercerita berbeda — mengekspos kesenjangan niat-perilaku kritis yang menuntut pergeseran dari desain berfokus engagement ke desain produk berbasis perilaku.",
  },
  stack: ["Python (Colab)", "Behavioral Analytics", "SDT Framework", "Mixed-Method Research"],
  links: { demo: "https://doi.org/10.29303/jppipa.v12i2.14036", repo: "#" },
  iconName: "Activity",
  featured: true,
  type: { en: "Product Design Research", id: "Riset Desain Produk" },
  date: { en: "2025-2026", id: "2025-2026" },
  coverImage: "airy:radar",
  snapshot: {
    tagline: { en: "Behavioral Design Research v1.0", id: "Riset Desain Perilaku v1.0" },
    heroImage: "airy:radar",
  },
  context: {
    role: { en: "Product Owner", id: "Pemilik Produk" },
    timeline: { en: "2025-2026", id: "2025-2026" },
    team: { en: "Solo Research", id: "Riset Solo" },
    client: { en: "Academic", id: "Akademik" },
  },
  challenge: {
    en: "Within a gamified Mobile-Assisted Language Learning ecosystem, empirical data revealed a critical behavioral misalignment: users' perceived engagement did not correspond to their actual interaction patterns. Learners reported high engagement (Mean = 3.44), but log data showed significantly lower interaction levels. This intention–behavior gap — where motivation exists but sustained action doesn't follow — constitutes a fundamental product design failure, not a user failure.",
    id: "Dalam ekosistem Mobile-Assisted Language Learning yang tergamifikasi, data empiris mengungkap ketidakselarasan perilaku kritis: persepsi keterlibatan pengguna tidak sesuai dengan pola interaksi aktual mereka. Pelajar melaporkan keterlibatan tinggi (Mean = 3.44), namun data log menunjukkan tingkat interaksi yang jauh lebih rendah. Kesenjangan niat-perilaku ini merupakan kegagalan desain produk fundamental, bukan kegagalan pengguna.",
  },
  process: [
    {
      title: { en: "Research Architecture", id: "Arsitektur Riset" },
      desc: {
        en: "Employed a mixed-method quantitative framework using a split-design model. An experimental one-group pretest–posttest design measured vocabulary acquisition. Behavioral analytics extracted objective usage data from a custom interactive workbook (https://buku-kerja-interaktif.web.app/) and Duolingo For Schools, processed via Google Colab. Motivation was assessed using instruments grounded in Self-Determination Theory (SDT). This triangulation enabled comparison between perceived engagement (self-report), psychological motivation (survey), and actual behavior (log analytics).",
        id: "Menggunakan kerangka kuantitatif metode campuran dengan model desain terpisah. Desain eksperimental satu kelompok pretest-posttest mengukur akuisisi kosakata. Analitik perilaku mengekstrak data penggunaan objektif dari buku kerja interaktif (https://buku-kerja-interaktif.web.app/) dan Duolingo For Schools, diproses menggunakan Google Colab. Motivasi dinilai menggunakan instrumen berbasis Self-Determination Theory (SDT). Triangulasi ini memungkinkan perbandingan antara persepsi engagement, motivasi psikologis, dan perilaku aktual.",
      },
      image: "airy:cycle",
    },
    {
      title: { en: "The Intention–Behavior Gap", id: "Kesenjangan Niat–Perilaku" },
      desc: {
        en: "The core discovery: High motivation (Mean = 3.48, driven by intrinsic factors) did not translate into consistent app usage. Users systematically overestimated their engagement compared to recorded interaction data. Gamification features (streaks, leaderboards, XP) increased momentary engagement but functioned as a motivational layer rather than a behavioral enforcement mechanism. The system's feedback loop was fundamentally broken — users couldn't accurately assess their own learning behavior.",
        id: "Temuan inti: Motivasi tinggi (Mean = 3.48, didorong faktor intrinsik) tidak diterjemahkan menjadi penggunaan aplikasi yang konsisten. Pengguna secara sistematis melebih-lebihkan keterlibatan mereka dibandingkan data interaksi yang tercatat. Fitur gamifikasi meningkatkan engagement sesaat namun berfungsi sebagai lapisan motivasional, bukan mekanisme penegakan perilaku.",
      },
      image: "airy:chart",
    },
    {
      title: { en: "Design Problem Reframing", id: "Pembingkaian Ulang Masalah Desain" },
      desc: {
        en: "The central design issue is not the absence of motivation or content quality but the failure of the system to convert motivation into sustained user behavior. This reframes the problem as a behavioral design challenge — requiring alignment between perceived and actual activity, reinforcement of consistent engagement patterns, and transparent, reality-based feedback loops that replace vanity metrics with performance-based indicators.",
        id: "Masalah desain utama bukanlah ketiadaan motivasi atau kualitas konten, melainkan kegagalan sistem mengkonversi motivasi menjadi perilaku pengguna yang berkelanjutan. Ini membingkai ulang masalah sebagai tantangan desain perilaku — membutuhkan keselarasan antara aktivitas yang dipersepsi dan aktual, penguatan pola engagement konsisten, dan umpan balik transparan berbasis realitas.",
      },
      image: "airy:funnel",
    },
    {
      title: { en: "Design Opportunities", id: "Peluang Desain" },
      desc: {
        en: "Four intervention vectors identified: (1) Behavioral Feedback Systems — replacing XP with time-on-task, retention rates, and spaced repetition adherence. (2) Perception–Reality Alignment — reflective dashboards showing planned vs. completed activity. (3) Habit Formation Design — microlearning structures with adaptive reminders based on behavioral patterns. (4) Context-Aware Adaptation — utilizing behavioral data to personalize session length, difficulty, and trigger adaptive interventions when disengagement is detected.",
        id: "Empat vektor intervensi teridentifikasi: (1) Sistem Umpan Balik Perilaku — mengganti XP dengan waktu-pada-tugas dan tingkat retensi. (2) Penyelarasan Persepsi-Realitas — dasbor reflektif. (3) Desain Pembentukan Kebiasaan — struktur microlearning dengan pengingat adaptif. (4) Adaptasi Sadar Konteks — personalisasi menggunakan data perilaku.",
      },
      image: "airy:ui",
    },
  ],
  insights: [
    {
      title: { en: "Engagement ≠ Learning", id: "Engagement ≠ Pembelajaran" },
      desc: {
        en: "Users systematically overestimated their engagement levels. Abstract gamification metrics (XP, streaks) do not reflect actual learning effort. The system needs metrics grounded in reality: time-on-task, retention performance, and consistency indices.",
        id: "Pengguna secara sistematis melebih-lebihkan tingkat keterlibatan mereka. Metrik gamifikasi abstrak (XP, streak) tidak mencerminkan upaya belajar aktual.",
      },
    },
    {
      title: { en: "Motivation Is Necessary but Not Sufficient", id: "Motivasi Perlu tapi Tidak Cukup" },
      desc: {
        en: "Motivation levels were high (Mean = 3.48), primarily driven by intrinsic factors. But this motivation did not translate into consistent application usage — indicating a breakdown between intention and action that no amount of gamification alone can fix.",
        id: "Tingkat motivasi tinggi (Mean = 3.48), terutama didorong faktor intrinsik. Namun motivasi ini tidak diterjemahkan menjadi penggunaan aplikasi yang konsisten — menunjukkan kerusakan antara niat dan tindakan.",
      },
    },
    {
      title: { en: "Gamification as a Motivational Layer", id: "Gamifikasi sebagai Lapisan Motivasional" },
      desc: {
        en: "Gamification features increase engagement but depend heavily on user discipline. They function as a motivational layer rather than a behavioral enforcement mechanism. The system must shift from rewarding completion to reinforcing consistency.",
        id: "Fitur gamifikasi meningkatkan engagement tapi sangat bergantung pada disiplin pengguna. Sistem harus beralih dari menghargai penyelesaian ke memperkuat konsistensi.",
      },
    },
    {
      title: { en: "Effective but Inefficient", id: "Efektif tapi Tidak Efisien" },
      desc: {
        en: "Vocabulary mastery improved from 73.33 to 80.00 (N-Gain of 0.29, low category). The results demonstrate effectiveness but indicate suboptimal efficiency due to inconsistent engagement patterns. Better behavioral alignment would amplify existing learning gains.",
        id: "Penguasaan kosakata meningkat dari 73.33 ke 80.00 (N-Gain 0.29, kategori rendah). Hasil menunjukkan efektivitas namun efisiensi suboptimal karena pola engagement yang tidak konsisten.",
      },
    },
  ],
  solution: [
    {
      title: {
        en: "Reality-Based Feedback Interface",
        id: "Antarmuka Umpan Balik Berbasis Realitas",
      },
      desc: {
        en: "A dashboard that visualizes discrepancies between intention and behavior, provides actionable insights, and supports self-regulated learning — replacing vanity metrics with consistency indices, retention performance, and meaningful engagement duration.",
        id: "Dasbor yang memvisualisasikan diskrepansi antara niat dan perilaku, memberikan wawasan yang dapat ditindaklanjuti, dan mendukung pembelajaran mandiri.",
      },
      image: "airy:ui",
    },
  ],
  metrics: [
    { label: { en: "Mastery Gain", id: "Peningkatan Penguasaan" }, value: "+9%" },
    { label: { en: "Effect Size", id: "Ukuran Efek" }, value: "r=0.62" },
    { label: { en: "N-Gain Score", id: "Skor N-Gain" }, value: "0.29" },
    { label: { en: "Motivation Mean", id: "Rerata Motivasi" }, value: "3.48" },
  ],
  learnings: {
    en: "Educational product effectiveness is determined not solely by motivation or content quality, but by the system's capacity to translate intention into sustained behavior. The most significant opportunity for product innovation lies in designing systems that provide accurate, behavior-driven feedback — enabling users to align perceived effort with actual learning activity.",
    id: "Efektivitas produk edukasi tidak ditentukan semata oleh motivasi atau kualitas konten, melainkan oleh kapasitas sistem untuk mentranslasikan niat menjadi perilaku berkelanjutan. Peluang inovasi produk terbesar terletak pada perancangan sistem yang memberikan umpan balik akurat berbasis perilaku.",
  },
  designProcess: [
    {
      type: "research",
      title: { en: "The Digital Paradox", id: "Paradoks Digital" },
      desc: {
        en: "Language learning was constrained by three interrelated factors: passive learning culture with reliance on instructor-led environments, digital engagement that doesn't translate into sustained learning, and an intention–behavior gap where users perceive high engagement while logs show otherwise.",
        id: "Pembelajaran bahasa dibatasi tiga faktor: budaya belajar pasif, engagement digital yang tidak diterjemahkan menjadi pembelajaran berkelanjutan, dan kesenjangan niat-perilaku.",
      },
      image: "airy:radar",
    },
    {
      type: "insight",
      title: { en: "The Productivity Illusion", id: "Ilusi Produktivitas" },
      desc: {
        en: "Empirical evidence indicates divergence between perceived and actual usage intensity. Users report high engagement (Mean = 3.44), whereas log data reveals significantly lower interaction levels. This suggests a failure in the product's feedback system, wherein users are unable to accurately assess their own learning behavior.",
        id: "Bukti empiris menunjukkan divergensi antara intensitas penggunaan yang dipersepsi dan aktual. Pengguna melaporkan engagement tinggi (Mean = 3.44), sementara data log mengungkap tingkat interaksi yang jauh lebih rendah.",
      },
      image: "airy:chart",
    },
    {
      type: "design",
      title: { en: "Station Rotation Model", id: "Model Rotasi Stasiun" },
      desc: {
        en: "Integrated a Blended Learning framework with time-boxed 15-minute high-intensity Digital Closure sprints. Three-station rotation: Teacher-Led direct instruction → Collaborative peer-to-peer → Digital Closure gamified micro-session. Structured microlearning with spaced repetition frameworks proved more effective than hour-long passive sessions.",
        id: "Mengintegrasikan kerangka Blended Learning dengan sprint Digital Closure intensitas tinggi 15 menit. Rotasi tiga stasiun terbukti lebih efektif daripada sesi pasif berjam-jam.",
      },
      image: "airy:cycle",
    },
    {
      type: "ship",
      title: { en: "Data-Driven Reality Check", id: "Pemeriksaan Realitas Berbasis Data" },
      desc: {
        en: "Using Python & Z-Scores to normalize XP against actual test performance revealed the truth: engagement does not equal mastery. Behavioral data was extracted from an interactive workbook (https://buku-kerja-interaktif.web.app/) and Duolingo For Schools, processed via Google Colab, cross-referenced with SDT motivation surveys, and compared against self-reported perception — exposing the intention–behavior gap at every layer.",
        id: "Menggunakan Python di Google Colab & Z-Score untuk menormalisasi XP terhadap kinerja tes aktual. Data perilaku diekstrak dari buku kerja interaktif (https://buku-kerja-interaktif.web.app/) dan Duolingo For Schools, mengungkap kebenaran: engagement tidak sama dengan penguasaan.",
      },
      image: "airy:funnel",
    },
    {
      type: "measure",
      title: { en: "Impact: Large Effect Size", id: "Dampak: Ukuran Efek Besar" },
      desc: {
        en: "The intervention demonstrated measurable improvements: vocabulary mastery rose from 73.33 to 80.00, with a Large Effect Size (r=0.62). However, it simultaneously revealed systemic inefficiencies — the impact is constrained by insufficient behavioral alignment mechanisms. The gap between what's possible and what's achieved is the design opportunity.",
        id: "Intervensi menunjukkan peningkatan terukur: penguasaan kosakata naik dari 73.33 ke 80.00, dengan Ukuran Efek Besar (r=0.62). Namun sekaligus mengungkap inefisiensi sistemik.",
      },
      image: "airy:ui",
    },
  ],
};
