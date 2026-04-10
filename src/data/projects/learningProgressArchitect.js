export const learningProgressArchitect = {
  id: "learning-progress-architect",
  title: {
    en: "Learning Progress Architect",
    id: "Arsitek Kemajuan Belajar",
  },
  subtitle: {
    en: "The operational layer for self-directed learning — plan, execute, reflect, reinforce",
    id: "Lapisan operasional untuk pembelajaran mandiri — rencanakan, laksanakan, refleksikan, perkuat",
  },
  desc: {
    en: "Motivated learners don't fail because they lack ambition. They fail because the operational burden of learning is too high. Learning Progress Architect solves the end-to-end problem: convert an ambiguous goal into a clear plan, turn the plan into a next action, support the learner during study, capture understanding after each effort, and bring weak topics back at the right time.",
    id: "Pelajar yang termotivasi tidak gagal karena kurang ambisi. Mereka gagal karena beban operasional belajar terlalu tinggi. Learning Progress Architect menyelesaikan masalah dari ujung ke ujung: mengubah tujuan ambigu menjadi rencana jelas, mengubah rencana menjadi tindakan berikutnya, mendukung pelajar saat belajar, menangkap pemahaman setelah setiap usaha, dan membawa topik lemah kembali pada waktu yang tepat.",
  },
  tldr: {
    en: "A calm, opinionated AI workspace that always answers one question first: what should I do next to make real progress on this goal?",
    id: "Ruang kerja AI yang tenang dan tegas yang selalu menjawab satu pertanyaan terlebih dahulu: apa yang harus saya lakukan selanjutnya untuk membuat kemajuan nyata pada tujuan ini?",
  },
  humanImpact: {
    en: "People should spend their cognitive energy learning the subject, not maintaining the machinery around the learning. This system holds the operational shape of the study process so the learner does not have to.",
    id: "Orang harus menghabiskan energi kognitif mereka untuk belajar materi, bukan memelihara mesin di sekitar pembelajaran. Sistem ini memegang bentuk operasional proses belajar sehingga pelajar tidak perlu melakukannya.",
  },
  stack: [
    "React 19",
    "React Router 7",
    "Express",
    "TypeScript",
    "Python ADK",
    "MCP",
    "SQLite",
    "Gemini",
    "Cloud Run",
  ],
  links: {
    demo: "https://learning-architect-service-423182843084.us-central1.run.app/",
    repo: null,
  },
  iconName: "GraduationCap",
  featured: false,
  type: { en: "Full-Stack AI Workspace", id: "Ruang Kerja AI Full-Stack" },
  date: { en: "April 2026", id: "April 2026" },
  coverImage: "airy:network",
  snapshot: {
    tagline: {
      en: "The operational layer for self-directed learning",
      id: "Lapisan operasional untuk pembelajaran mandiri",
    },
    heroImage: "airy:network",
  },
  context: {
    role: { en: "Co-Creator & Engineer", id: "Ko-Kreator & Insinyur" },
    timeline: { en: "April 2026", id: "April 2026" },
    team: { en: "2-person team", id: "Tim 2 orang" },
    client: { en: "Personal Project", id: "Proyek Pribadi" },
  },
  challenge: {
    en: "Most tools solve only one slice of the learning problem: planners create a plan but do not drive execution; note apps capture information but do not schedule reinforcement; chatbots answer questions but do not preserve learning state; course platforms provide content but do not adapt around the learner's real constraints. No single system holds the operational shape of the full learning loop — and so the cognitive burden of maintaining it falls entirely on the learner.",
    id: "Sebagian besar alat hanya menyelesaikan satu bagian masalah belajar: perencana membuat rencana tetapi tidak mendorong eksekusi; aplikasi catatan menangkap informasi tetapi tidak menjadwalkan penguatan; chatbot menjawab pertanyaan tetapi tidak mempertahankan status belajar; platform kursus menyediakan konten tetapi tidak beradaptasi dengan batasan nyata pelajar. Tidak ada sistem tunggal yang memegang bentuk operasional dari loop pembelajaran penuh.",
  },
  // 7 process entries — one per step in the learning loop
  process: [
    {
      title: { en: "Goal Creation and Active-Goal Semantics", id: "Pembuatan Tujuan dan Semantik Tujuan Aktif" },
      desc: {
        en: "The learner defines a goal, experience level, weekly time budget, target date, study style, and resource mode. The product formalizes a clear active-goal model — one goal drives the entire workspace at a time. Dashboard, Roadmap, Session, Reviews, and Progress all reference the same active goal consistently. Workflow creation is designed to succeed or fail as one atomic unit: no partial goals.",
        id: "Pelajar mendefinisikan tujuan, tingkat pengalaman, anggaran waktu mingguan, tanggal target, gaya belajar, dan mode sumber daya. Produk memformalkan model tujuan-aktif yang jelas — satu tujuan menggerakkan seluruh ruang kerja sekaligus. Pembuatan alur kerja dirancang untuk berhasil atau gagal sebagai satu unit atomik.",
      },
      image: "airy:flow",
    },
    {
      title: { en: "ADK Workflow Planning Runtime", id: "Runtime Perencanaan Alur Kerja ADK" },
      desc: {
        en: "The public Express app calls an internal planner abstraction. In ADK mode, the request is routed to the Python service which orchestrates a Gemini agent to generate a structured, sequenced starter roadmap. Each task includes a title, description, and study objective. The system degrades gracefully — falling back to deterministic, context-aware planning when AI services are constrained, so the learner is never blocked.",
        id: "Aplikasi Express publik memanggil abstraksi perencana internal. Dalam mode ADK, permintaan diarahkan ke layanan Python yang mengatur agen Gemini untuk menghasilkan peta jalan starter yang terstruktur. Sistem merosot dengan baik ke perencanaan deterministik ketika layanan AI terbatas.",
      },
      image: "airy:architecture",
    },
    {
      title: { en: "Resource Pairing and Task Context", id: "Pemasangan Sumber Daya dan Konteks Tugas" },
      desc: {
        en: "Each generated task is paired with learner-provided or system-suggested reference materials. Attached resources are accessible in-session, keeping study context grounded to the current task objective. The MCP tool layer handles trusted workspace reads so resource lookup does not couple to the public API surface. System-generated references supplement missing materials.",
        id: "Setiap tugas yang dihasilkan dipasangkan dengan materi referensi yang disediakan pelajar atau disarankan sistem. Sumber daya yang terlampir dapat diakses dalam sesi, menjaga konteks belajar terkait pada tujuan tugas saat ini.",
      },
      image: "airy:data",
    },
    {
      title: { en: "Session-Scoped Study Coach", id: "Pelatih Belajar Berbasis Sesi" },
      desc: {
        en: "The session page is built around one task, one objective, and one active study state. Session state (not started, in progress, paused, completed) is made explicit at all times. A visible timer anchors the session. All learner inputs during the session are intentionally handled — persisted with clear save behavior, so no authored text appears permanent if it is not.",
        id: "Halaman sesi dibangun di sekitar satu tugas, satu tujuan, dan satu status belajar aktif. Status sesi dibuat eksplisit sepanjang waktu. Semua input pelajar selama sesi ditangani dengan sengaja — disimpan dengan perilaku penyimpanan yang jelas.",
      },
      image: "airy:radar",
    },
    {
      title: { en: "Quick Action Intelligence", id: "Kecerdasan Aksi Cepat" },
      desc: {
        en: "In-session AI support is exposed as four discrete, task-contextual actions: explain, example, analogy, confused. Keeping actions bounded prevents unbounded conversational drift and keeps AI anchored to the learner's current task context. Generated outputs are cached for the same task and action combination. If AI generation is unavailable, the learner receives a graceful, understandable failure state rather than a silent error.",
        id: "Dukungan AI dalam sesi diekspos sebagai empat aksi diskrit yang kontekstual terhadap tugas: jelaskan, contoh, analogi, bingung. Tindakan yang terbatas mencegah drift percakapan dan menjaga AI tertambat pada konteks tugas pelajar saat ini. Output yang dihasilkan di-cache untuk kombinasi tugas dan tindakan yang sama.",
      },
      image: "airy:network",
    },
    {
      title: { en: "Reflection and Confidence Capture", id: "Tangkapan Refleksi dan Kepercayaan Diri" },
      desc: {
        en: "After each session, the learner records what they understood, where they are confused, and how confident they feel on a scale from 1 to 5. Reflection is operational input for retention — not journaling fluff. Submission reliably completes the task session. The product makes it clear what was saved and what happens next. This data directly powers the adaptive review scheduler.",
        id: "Setelah setiap sesi, pelajar merekam apa yang mereka pahami, di mana mereka bingung, dan seberapa percaya diri mereka. Refleksi adalah input operasional untuk retensi. Pengiriman menyelesaikan sesi tugas dengan andal dan langsung menggerakkan penjadwal ulasan adaptif.",
      },
      image: "airy:flow",
    },
    {
      title: { en: "Spaced Review Lifecycle", id: "Siklus Hidup Ulasan Terspasi" },
      desc: {
        en: "Reviews are scheduled based on post-session confidence scores. Low confidence triggers sooner review; stronger topics are spaced farther out. Reviews have a dedicated learner flow and clear completion behavior — not just a scheduled reminder. Completing a review updates review state and future spacing logic, preserving the reinforcement promise over time. Due-now items are clearly separated from upcoming ones.",
        id: "Ulasan dijadwalkan berdasarkan skor kepercayaan diri setelah sesi. Kepercayaan diri rendah memicu ulasan lebih cepat; topik yang lebih kuat dijarakkan lebih jauh. Ulasan memiliki alur pelajar yang didedikasikan dan perilaku penyelesaian yang jelas, bukan hanya pengingat terjadwal.",
      },
      image: "airy:data",
    },
  ],
  insights: [
    {
      title: {
        en: "Architecture: Web → ADK → MCP",
        id: "Arsitektur: Web → ADK → MCP",
      },
      desc: {
        en: "The three-layer orchestration pattern proved powerful for separating concerns: Express holds the stable public contract; Python ADK handles reasoning and planning; MCP exposes trusted workspace tool operations. The public API surface stays unchanged even as internal intelligence paths evolve — the frontend never needs to care whether the path is legacy, ADK-backed, or retrieval-enriched.",
        id: "Pola orkestrasi tiga lapisan terbukti efektif: Express memegang kontrak publik yang stabil; Python ADK menangani penalaran; MCP mengekspos operasi alat yang tepercaya. Permukaan API publik tetap tidak berubah meski jalur kecerdasan internal berkembang.",
      },
      image: "airy:network",
    },
    {
      title: {
        en: "Graceful Degradation as a Product Principle",
        id: "Degradasi Anggun Sebagai Prinsip Produk",
      },
      desc: {
        en: "Educational trust is not only about output quality — it is about behavioral consistency when infrastructure is imperfect. Every core learning workflow must remain operable without AI provider availability. If ADK is unavailable, the system falls back to legacy in-process behavior. If Gemini quota is constrained, deterministic context-aware content is returned. Cached outputs are reused for continuity.",
        id: "Kepercayaan pendidikan bukan hanya tentang kualitas output — ini tentang konsistensi perilaku ketika infrastruktur tidak sempurna. Setiap alur kerja pembelajaran inti harus tetap dapat dioperasikan tanpa ketersediaan penyedia AI.",
      },
      image: "airy:flow",
    },
    {
      title: {
        en: "Trust Through State Clarity",
        id: "Kepercayaan Melalui Kejelasan Status",
      },
      desc: {
        en: "The hardest product constraint was not the AI integration — it was ensuring every action has a clear outcome state. If something is saved, scheduled, completed, or still draft-only, the UI must make that explicit. No important learner-authored input should appear persistent if it is not. This principle — and its absence in the MVP — shaped every persistence and UX decision in v1 hardening.",
        id: "Kendala produk terpaling sulit bukan integrasi AI — melainkan memastikan setiap tindakan memiliki status hasil yang jelas. Jika ada yang tersimpan, dijadwalkan, selesai, atau masih draft, UI harus membuatnya eksplisit.",
      },
      image: "airy:data",
    },
  ],
  solution: [
    {
      title: {
        en: "The Learning Loop",
        id: "Loop Pembelajaran",
      },
      desc: {
        en: "One continuous loop: define goal → generate roadmap → resource pairing → focused session → contextual AI help → reflection capture → adaptive review. The product holds the operational shape of the study process itself — replacing raw willpower with a reliable operational scaffold that persists across sessions.",
        id: "Satu loop berkelanjutan: definisikan tujuan → buat peta jalan → pasangkan sumber daya → sesi fokus → bantuan AI kontekstual → tangkapan refleksi → ulasan adaptif. Produk memegang bentuk operasional dari proses belajar itu sendiri.",
      },
      image: "airy:architecture",
    },
  ],
  metrics: [
    { label: { en: "Architecture", id: "Arsitektur" }, value: "Web → ADK → MCP" },
    { label: { en: "Deployment", id: "Deployment" }, value: "Cloud Run" },
    { label: { en: "AI Model", id: "Model AI" }, value: "Gemini" },
    { label: { en: "Stage", id: "Tahap" }, value: "MVP → v1" },
    { label: { en: "Team", id: "Tim" }, value: "2 Engineers" },
  ],
  learnings: {
    en: "The product already has the right shape: plan, execute, reflect, reinforce. The next step is not adding breadth — it is making the existing loop more coherent, trustworthy, and decisive. The most important design lesson: an AI-powered learning product must still build trust when the AI is unavailable. Designing for graceful degradation forced every feature to justify its existence independent of model quality.",
    id: "Produk sudah memiliki bentuk yang tepat: rencanakan, laksanakan, refleksikan, perkuat. Langkah selanjutnya bukan keluasan — melainkan membuat loop yang ada lebih koheren, dapat dipercaya, dan tegas. Pelajaran desain terpenting: produk pembelajaran bertenaga AI harus tetap membangun kepercayaan ketika AI tidak tersedia.",
  },
};
