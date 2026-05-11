export const learningProgressArchitect = {
  id: "learning-progress-architect",
  title: {
    en: "Learning Progress Architect",
    id: "Arsitek Kemajuan Belajar",
  },
  subtitle: {
    en: "The default operating system for self-directed learning.",
    id: "Sistem operasi default untuk pembelajaran mandiri.",
  },
  desc: {
    en: "Learning Progress Architect sits at the intersection of a curriculum planner, an execution environment, and a spaced-repetition engine. It provides more structure than a blank notes app and exponentially more personalization than a rigid LMS. We turn a broad goal into a sequenced roadmap, guide the learner through focused study sessions, capture comprehension, and autonomously schedule reinforcement reviews—all while keeping the resulting knowledge universally portable.",
    id: "Learning Progress Architect berada di persimpangan antara perencana kurikulum, lingkungan eksekusi, dan mesin pengulangan berjarak. Ini memberikan lebih banyak struktur daripada aplikasi catatan kosong dan personalisasi yang jauh lebih besar daripada LMS yang kaku. Kami mengubah tujuan luas menjadi peta jalan yang terurut, memandu pelajar melalui sesi belajar terfokus, menangkap pemahaman, dan menjadwalkan ulasan penguatan secara otonom—sambil menjaga agar pengetahuan yang dihasilkan tetap portabel.",
  },
  tldr: {
    en: "A private, AI-guided execution workspace that transforms ambiguous learning aspirations into concrete, momentum-driven reality.",
    id: "Ruang kerja eksekusi yang dipandu AI dan privat yang mengubah aspirasi belajar yang ambigu menjadi kenyataan yang konkret dan didorong oleh momentum.",
  },
  humanImpact: {
    en: "Self-directed learners don't fail because they lack ambition; they fail because the operational burden of planning, finding resources, and maintaining discipline is too high.",
    id: "Pelajar mandiri tidak gagal karena mereka kurang ambisi; mereka gagal karena beban operasional perencanaan, pencarian sumber daya, dan mempertahankan disiplin terlalu tinggi.",
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
    role: { en: "Team Leader & Engineer", id: "Ketua Tim & Insinyur" },
    timeline: { en: "April 2026", id: "April 2026" },
    team: { en: "The Autodidact Project (2-person team)", id: "The Autodidact Project (Tim 2 orang)" },
    client: { en: "Google Cloud Hackathon", id: "Hackathon Google Cloud" },
  },
  challenge: {
    en: "Motivated knowledge workers constantly attempt to upskill, but the failure rate of self-taught learning is high because the friction is operational: deciding what to learn next consumes energy, jumping between tools breaks flow, passive reading creates an illusion of competence, and without resurfacing weak concepts, learners abandon their goals.",
    id: "Pekerja berpengetahuan yang termotivasi terus berupaya meningkatkan keterampilan, tetapi tingkat kegagalan pembelajaran otodidak tinggi karena friksinya bersifat operasional: memutuskan apa yang akan dipelajari selanjutnya menghabiskan energi, melompat antar alat merusak alur kerja, membaca pasif menciptakan ilusi kompetensi, dan tanpa memunculkan kembali konsep yang lemah, pelajar meninggalkan tujuan mereka.",
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
        en: "Core User Journeys",
        id: "Perjalanan Pengguna Inti",
      },
      desc: {
        en: "The system orchestrates three core journeys: The Cold Start (AI-generated syllabus and resource ingestion), The Focused Execution (deep work sessions with contextual AI Quick Actions), and Reflection & Reinforcement (comprehension capture and spaced review scheduling).",
        id: "Sistem ini mengatur tiga perjalanan inti: The Cold Start (silabus yang dihasilkan AI dan konsumsi sumber daya), The Focused Execution (sesi kerja mendalam dengan Tindakan Cepat AI kontekstual), dan Reflection & Reinforcement (penangkapan pemahaman dan penjadwalan ulasan berjarak).",
      },
      image: "/images/[core-journey] learning-progress-architect.png",
    },
  ],
  metrics: [
    { label: { en: "Achievement", id: "Pencapaian" }, value: "Top 10 in APAC (from 3,147)" },
    { label: { en: "Architecture", id: "Arsitektur" }, value: "Web → ADK → MCP" },
    { label: { en: "Deployment", id: "Deployment" }, value: "Cloud Run" },
    { label: { en: "AI Model", id: "Model AI" }, value: "Gemini" },
    { label: { en: "Stage", id: "Tahap" }, value: "MVP → v1" },
  ],
  learnings: {
    en: "The product already has the right shape: plan, execute, reflect, reinforce. The next step is not adding breadth — it is making the existing loop more coherent, trustworthy, and decisive. The most important design lesson: an AI-powered learning product must still build trust when the AI is unavailable. Designing for graceful degradation forced every feature to justify its existence independent of model quality.",
    id: "Produk sudah memiliki bentuk yang tepat: rencanakan, laksanakan, refleksikan, perkuat. Langkah selanjutnya bukan keluasan — melainkan membuat loop yang ada lebih koheren, dapat dipercaya, dan tegas. Pelajaran desain terpenting: produk pembelajaran bertenaga AI harus tetap membangun kepercayaan ketika AI tidak tersedia.",
  },
};
