export const competitorSummarizer = {
  id: "competitor-summarizer",
  title: {
    en: "Competitor Landing Page Summarizer",
    id: "Ringkasan Halaman Arahan Kompetitor",
  },
  subtitle: {
    en: "Turn competitor pages into structured product-design insights",
    id: "Ubah halaman kompetitor menjadi wawasan desain produk terstruktur",
  },
  desc: {
    en: "An agentic, zero-latency competitive intelligence platform that ingests live web pages or selects from 100 curated benchmarks across 5 sectors to instantaneously extract structured product design intelligence across 9 standardized dimensions, 4 technical specifications, and a multi-competitor comparison matrix.",
    id: "Platform intelijen kompetitif otonom tanpa latensi yang mengurai halaman web langsung atau memilih dari 100 tolok ukur terkurasi di 5 sektor untuk mengekstrak wawasan desain produk terstruktur di 9 dimensi standar, 4 spesifikasi teknis, dan matriks perbandingan multi-kompetitor.",
  },
  tldr: {
    en: "An isomorphic, zero-cost competitive intelligence engine powered by Gemini 2.5 Flash, React 19, and Google ADK/MCP—transforming chaotic marketing pages into structured product design intelligence across 9 dimensions in <3s.",
    id: "Mesin intelijen kompetitif isomorfik berbiaya nol yang ditenagai Gemini 2.5 Flash, React 19, dan Google ADK/MCP—mengubah halaman pemasaran yang kacau menjadi wawasan desain produk terstruktur di 9 dimensi dalam <3 detik.",
  },
  humanImpact: {
    en: "Replaces the manual friction of opening 15–25 browser tabs and taking messy unstructured notes with instant, standardized positioning intelligence and side-by-side matrices—reducing time-to-insight from 45 minutes to under 30 seconds.",
    id: "Menggantikan friksi manual membuka 15–25 tab peramban dan mencatat secara tidak terstruktur dengan intelijen positioning terstandar instan dan matriks komparatif—memangkas waktu wawasan dari 45 menit menjadi di bawah 30 detik.",
  },
  stack: [
    "React 19",
    "Vite",
    "TypeScript",
    "Tailwind CSS",
    "Gemini 2.5 Flash",
    "Google ADK",
    "MCP",
    "Python FastAPI",
    "Jina Reader API",
  ],
  links: {
    demo: "https://comp-landing-page-summarizer-nine.vercel.app",
    repo: "https://github.com/fadlyzaki/comp-landing-page-summarizer-",
    pitch_deck: "https://docs.google.com/presentation/d/1P_c7JoDaEcb1ddnNYLKY2RhwUXyumv0B/edit?usp=sharing",
  },
  prototypeLink: null,
  iconName: "Globe",
  featured: false,
  type: { en: "Full-Stack Web App", id: "Aplikasi Web Full-Stack" },
  date: { en: "March 2026", id: "Maret 2026" },
  version: "2.0.0",
  status: {
    en: "Approved & Shipped to Production",
    id: "Disetujui & Dikirim ke Produksi",
  },
  hiringSignals: [
    {
      en: "Product Leadership & Architecture: Authored comprehensive PRD v2.0.0 and shipped live to production.",
      id: "Kepemimpinan Produk & Arsitektur: Menyusun PRD v2.0.0 lengkap dan meluncurkannya ke produksi.",
    },
    {
      en: "9-Dimensional Intelligence Taxonomy: Standardized UX/Product benchmarking across 100 enterprise datasets.",
      id: "Taksonomi Intelijen 9-Dimensi: Standarisasi tolok ukur UX/Produk di 100 dataset enterprise.",
    },
    {
      en: "Zero-Cost Serverless Pipeline: BYOK client architecture with Jina Reader API + Gemini 2.5 Flash at $0.00/mo.",
      id: "Pipeline Serverless Tanpa Biaya: Arsitektur klien BYOK dengan API Jina Reader + Gemini 2.5 Flash pada biaya $0.00/bln.",
    },
    {
      en: "Multi-Competitor Matrix Engine: Real-time side-by-side diffing and multi-format PRD/PDF export.",
      id: "Mesin Matriks Multi-Kompetitor: Diffing komparatif real-time dan ekspor PRD/PDF multi-format.",
    },
  ],
  coverImage: "airy:architecture",
  snapshot: {
    tagline: {
      en: "Turn competitor pages into structured product-design insights",
      id: "Ubah halaman kompetitor menjadi wawasan desain produk terstruktur",
    },
    heroImage: "airy:architecture",
  },
  context: {
    role: { en: "Product Lead & Design Technologist", id: "Product Lead & Design Technologist" },
    timeline: { en: "March 2026", id: "Maret 2026" },
    team: { en: "Solo (Product Lead & Design Engineer)", id: "Solo (Product Lead & Design Engineer)" },
    client: { en: "Open Source / Production Platform", id: "Open Source / Platform Produksi" },
    event: { en: "APAC GenAI Academy Hackathon (Approved & Shipped)", id: "Hackathon APAC GenAI Academy (Approved & Shipped)" },
    event_url: "https://vision.hack2skill.com/event/apac-genaiacademy/?utm_source=hack2skill&utm_medium=homepage",
  },
  personas: [
    {
      name: { en: "Lead Product Designer ('The Synthesizer')", id: "Lead Product Designer ('The Synthesizer')" },
      pain: {
        en: "Spends 45+ minutes per competitor collecting messy screenshots and manual notes on value props and conversion funnels.",
        id: "Menghabiskan 45+ menit per kompetitor mengumpulkan tangkapan layar berantakan dan catatan manual tentang proposisi nilai.",
      },
      jtbd: {
        en: "When scoping a new product feature or redesign, quickly deconstruct how market leaders structure value props, hierarchy, and trust signals to design differentiated experiences.",
        id: "Saat melingkupi fitur produk baru atau desain ulang, mengurai dengan cepat struktur proposisi nilai, hierarki, dan sinyal kepercayaan pemimpin pasar.",
      },
    },
    {
      name: { en: "Growth / Product Manager ('The Positioner')", id: "Growth / Product Manager ('The Positioner')" },
      pain: {
        en: "Needs side-by-side positioning matrices for leadership alignment without wrestling spreadsheets.",
        id: "Membutuhkan matriks positioning komparatif berdampingan untuk keselarasan pimpinan tanpa repot mengolah spreadsheet.",
      },
      jtbd: {
        en: "When presenting a competitive teardown to leadership, produce an instant side-by-side matrix comparing 2 to 4 competitors across value props, pricing, and CTA strategies.",
        id: "Saat mempresentasikan teardown kompetitif ke pimpinan, hasilkan matriks komparatif instan 2 hingga 4 kompetitor.",
      },
    },
    {
      name: { en: "Solo Technical Founder ('The Fast Mover')", id: "Solo Technical Founder ('The Fast Mover')" },
      pain: {
        en: "Building an MVP on tight timelines with zero dedicated marketing or design staff.",
        id: "Membangun MVP dengan jadwal ketat tanpa staf pemasaran atau desain khusus.",
      },
      jtbd: {
        en: "When launching a SaaS landing page, explore curated benchmarks in the target category to adopt proven CTA and hierarchy patterns without costly trial and error.",
        id: "Saat meluncurkan landing page SaaS, jelajahi tolok ukur terkurasi di kategori target untuk mengadopsi pola CTA dan hierarki teruji.",
      },
    },
  ],
  taxonomy: [
    {
      number: "01",
      name: { en: "Core Value Proposition", id: "Proposisi Nilai Inti" },
      desc: {
        en: "What concrete outcome the product promises within the first 5 seconds of cognitive attention.",
        id: "Hasil konkret apa yang dijanjikan produk dalam 5 detik pertama perhatian kognitif.",
      },
    },
    {
      number: "02",
      name: { en: "Likely Target Audience", id: "Target Audiens" },
      desc: {
        en: "The specific customer segment, team maturity, and organizational archetype targeted.",
        id: "Segmen pelanggan, kematangan tim, dan arketipe organisasi yang ditargetkan.",
      },
    },
    {
      number: "03",
      name: { en: "CTA Strategy (Conversion Velocity)", id: "Strategi CTA (Kecepatan Konversi)" },
      desc: {
        en: "Primary, secondary, and tertiary conversion routes (self-serve sandbox vs. gated sales demo).",
        id: "Rute konversi utama, sekunder, dan tersier (sandbox mandiri vs. demo penjualan).",
      },
    },
    {
      number: "04",
      name: { en: "Information Hierarchy & Page Flow", id: "Hierarki Informasi & Alur Halaman" },
      desc: {
        en: "How cognitive load is structured sequentially down the page.",
        id: "Bagaimana beban kognitif disusun secara berurutan ke bawah halaman.",
      },
    },
    {
      number: "05",
      name: { en: "Trust Signals & Social Proof", id: "Sinyal Kepercayaan & Bukti Sosial" },
      desc: {
        en: "Enterprise logos, security compliance badges, uptime statistics, and public testimonials.",
        id: "Logo perusahaan, lencana kepatuhan keamanan, statistik uptime, dan testimoni publik.",
      },
    },
    {
      number: "06",
      name: { en: "UX Writing & Tone Observations", id: "Penulisan UX & Nada Bahasa" },
      desc: {
        en: "Linguistic cadence, active verbs, readability, and brand voice characteristics.",
        id: "Kadens linguistik, kata kerja aktif, keterbacaan, dan karakteristik suara merek.",
      },
    },
    {
      number: "07",
      name: { en: "Potential Friction Points", id: "Potensi Titik Friksi" },
      desc: {
        en: "Cognitive hesitation, hidden pricing models, complex onboarding steps, or ambiguous terminology.",
        id: "Keraguan kognitif, model harga tersembunyi, langkah onboarding rumit, atau terminologi ambigu.",
      },
    },
    {
      number: "08",
      name: { en: "Design Opportunities & Strategic Gaps", id: "Peluang Desain & Kesenjangan Strategis" },
      desc: {
        en: "Unaddressed customer segments, missing social proof, or differentiation opportunities.",
        id: "Segmen pelanggan yang belum terlayani, kurangnya bukti sosial, atau peluang diferensiasi.",
      },
    },
    {
      number: "09",
      name: { en: "Product Designer Takeaway", id: "Rangkuman Desainer Produk" },
      desc: {
        en: "An opinionated, editorial synthesis written from the viewpoint of a Staff Product Designer.",
        id: "Sintesis editorial beropini yang ditulis dari sudut pandang Staff Product Designer.",
      },
    },
  ],
  specsGuide: [
    { key: "primary_segment", label: "Primary Segment", desc: "Primary target buyer and user persona archetype" },
    { key: "monetization_model", label: "Monetization Model", desc: "Revenue and packaging structure (Freemium, Tiered, Usage-Based)" },
    { key: "conversion_path", label: "Conversion Path", desc: "Specific acquisition mechanic (Self-Serve vs. Sales-Led Demo)" },
    { key: "design_signature", label: "Design Signature", desc: "Visual aesthetic signature, UI archetype, and interaction feel" },
  ],
  benchmarkCategories: [
    {
      category: "⚡ DevTools & Cloud Infra (20)",
      archetype: "Dark Mode, Code Terminals, Monospace, Low Latency",
      items: ["Linear", "Stripe", "Vercel", "Supabase", "GitHub", "Cloudflare", "Docker", "Postman", "Sentry", "Resend", "Railway", "Neon", "PlanetScale", "Prisma", "GitLab", "Datadog", "HashiCorp", "Render", "Fly.io", "Upstash"],
    },
    {
      category: "🎨 Productivity & Design (20)",
      archetype: "Multiplayer Cursors, Modular Blocks, Fluid Motion",
      items: ["Notion", "Figma", "Raycast", "Miro", "Loom", "Slack", "Coda", "Arc Browser", "Obsidian", "Superhuman", "ClickUp", "Asana", "Monday.com", "Basecamp", "Pitch", "Canva", "Craft", "Bear", "Framer", "Notion Calendar"],
    },
    {
      category: "🤖 Frontier AI & ML (20)",
      archetype: "Split-Canvas Artifacts, Waveform Visualizers, Prompt Inputs",
      items: ["OpenAI", "Claude", "Perplexity", "Cursor", "Midjourney", "Hugging Face", "ElevenLabs", "Replicate", "Mistral AI", "Runway", "Cohere", "Jasper", "Descript", "Synthesia", "Poe", "Character.ai", "Phind", "DeepL", "Suno", "Luma AI"],
    },
    {
      category: "💳 Fintech & B2B SaaS (20)",
      archetype: "High Trust Density, Security Badges, Clean Data Grids",
      items: ["Ramp", "Brex", "Mercury", "Plaid", "Deel", "Gusto", "Intercom", "Webflow", "Square", "Rippling", "Carta", "HubSpot", "Zendesk", "Salesforce", "Attio", "Retool", "Zapier", "Make", "Segment", "Paddle"],
    },
    {
      category: "🌍 Consumer & Commerce (20)",
      archetype: "Full-Bleed Media, Floating Search Capsules, Gamification",
      items: ["Airbnb", "Spotify", "Uber", "Shopify", "Netflix", "Duolingo", "Substack", "DoorDash", "Pinterest", "Etsy", "Robinhood", "Instacart", "Headspace", "Calm", "Coursera", "Strava", "Discord", "Twitch", "Medium", "Kickstarter"],
    },
  ],
  roadmap: [
    { version: "v1.0 (Shipped)", desc: "100 Curated Benchmarks, 5 Categories, Side-by-Side Comparison Matrix, BYOK Free AI Engine, Multi-Format Export." },
    { version: "v1.1 (Target: Q3)", desc: "Multi-Page Deep Crawling (Pricing + Product + Changelog combined analysis)." },
    { version: "v1.2 (Target: Q4)", desc: "Automated Visual UI Token Diffing (Extraction of CSS color palettes, button border radiuses, and font stacks directly from screenshots)." },
    { version: "v2.0 (Target: Next Year)", desc: "Team Collaborative Workspaces (Shared competitor tagboards and automated weekly positioning change alerts)." },
  ],
  challenge: {
    en: "Competitive intelligence is a fundamental requirement of early-stage discovery, feature scoping, and positioning reviews. However, contemporary competitive benchmarking is broken by manual friction: designers and PMs routinely open 15–25 browser tabs across competing products, manually parse through marketing fluff, take scattered unstructured notes, and struggle to translate qualitative observations into structured, comparable dimensions.",
    id: "Intelijen kompetitif adalah kebutuhan fundamental penemuan tahap awal, pelingkupan fitur, dan tinjauan positioning. Namun, benchmarking kompetitif saat ini dirusak oleh friksi manual: desainer dan PM membuka 15–25 tab peramban, menyaring klaim pemasaran secara manual, membuat catatan yang tidak terstruktur, dan kesulitan menerjemahkan observasi kualitatif ke dimensi yang dapat dibandingkan.",
  },
  process: [
    {
      title: { en: "Persona JTBD & Cognitive Deconstruction", id: "JTBD Persona & Dekonstruksi Kognitif" },
      desc: {
        en: "Targeted three distinct user archetypes: Lead Product Designers scoping UX friction and hierarchy, Growth PMs requiring side-by-side positioning teardowns for leadership, and Solo Founders discovering category design patterns. Eliminated the 45-minute manual screenshot and tab-hopping tax.",
        id: "Menargetkan tiga arketipe pengguna: Lead Product Designer yang memetakan friksi UX dan hierarki, Growth PM yang membutuhkan matriks positioning komparatif, dan Solo Founder yang mencari pola desain kategori.",
      },
      image: "airy:flow",
    },
    {
      title: { en: "The 9-Dimension Intelligence Taxonomy", id: "Taksonomi Intelijen 9-Dimensi" },
      desc: {
        en: "Established a rigorous semantic evaluation schema: Core Value Prop, Target Audience, CTA Velocity, Information Hierarchy, Trust Signals, UX Writing Tone, Friction Points, Strategic Design Gaps, and an opinionated Product Designer Takeaway—supplemented by 4 core product specs (segment, monetization, conversion path, design signature).",
        id: "Menetapkan skema evaluasi semantik yang ketat: Proposisi Nilai Inti, Target Audiens, Kecepatan CTA, Hierarki Informasi, Sinyal Kepercayaan, Nada Penulisan UX, Titik Friksi, Peluang Desain Strategis, dan Rangkuman Desainer Produk.",
      },
      image: "airy:data",
    },
    {
      title: { en: "3-Tier Isomorphic Intelligence Architecture", id: "Arsitektur Intelijen Isomorfik 3-Tier" },
      desc: {
        en: "Architected a decoupled multi-tier pipeline: Tier 1 provides 0ms in-memory instant retrieval across 100 curated benchmarks (20 each across DevTools, Productivity, AI, Fintech, Consumer). Tier 2 runs client-side headless DOM ingestion via Jina Reader and Gemini 2.5 Flash REST endpoints. Tier 3 offers local Python ADK + MCP server execution via stdio.",
        id: "Merancang pipeline multi-tier terpisah: Tier 1 menyediakan pengambilan instan in-memory 0ms untuk 100 tolok ukur terkurasi. Tier 2 menjalankan penguraian DOM headless dan inferensi REST Gemini 2.5 Flash. Tier 3 menawarkan eksekusi server ADK + MCP lokal via stdio.",
      },
      image: "airy:architecture",
    },
    {
      title: { en: "Side-by-Side Synchronized Comparison Matrix", id: "Matriks Perbandingan Sinkron Berdampingan" },
      desc: {
        en: "Built an interactive multi-product comparison grid capable of evaluating 2 to 4 competitors simultaneously. Features searchable chip insertion from the 100 benchmark directory, real-time column resizing, and side-by-side dimensional diffing.",
        id: "Membangun grid perbandingan multi-produk interaktif yang mampu mengevaluasi 2 hingga 4 kompetitor secara simultan dengan penambahan chip dari direktori 100 benchmark dan pengubahan ukuran kolom real-time.",
      },
      image: "airy:radar",
    },
    {
      title: { en: "Multi-Format Export & Zero-Cost Sovereignty", id: "Ekspor Multi-Format & Kedaulatan Nol-Biaya" },
      desc: {
        en: "Engineered 1-click export into PRD-ready Markdown, strict JSON contracts, RFC-4180 CSV, and print-styled PDFs. Operates at $0.00/month cloud cost with zero GCP billing requirements, client-side secret isolation in localStorage, and zero remote tracking.",
        id: "Merekayasa ekspor 1-klik ke Markdown siap PRD, kontrak JSON ketat, CSV RFC-4180, dan PDF siap cetak. Beroperasi pada biaya cloud $0.00/bulan tanpa ketergantungan tagihan GCP dengan isolasi rahasia di localStorage.",
      },
      image: "airy:network",
    },
  ],
  insights: [
    {
      title: { en: "Decoupling Semantic Ingestion from Reasoning", id: "Pemisahan Ingesti Semantik dari Penalaran" },
      desc: {
        en: "Stripping CSS, tracking clutter, and SVG bloat into clean structured Markdown before feeding into Gemini 2.5 Flash maximizes token efficiency and eliminates prompt hallucinations.",
        id: "Membersihkan CSS, pelacak, dan sampah SVG menjadi Markdown terstruktur sebelum dimasukkan ke Gemini 2.5 Flash memaksimalkan efisiensi token dan mencegah halusinasi.",
      },
      image: "airy:network",
    },
    {
      title: { en: "Zero-Cost Cloud Sovereignty via BYOK", id: "Kedaulatan Cloud Biaya Nol via BYOK" },
      desc: {
        en: "Leveraging Google AI Studio free tier directly with client-side API keys delivers enterprise-grade inference speeds (<3.5s) without incurring server operational costs or managing authentication databases.",
        id: "Memanfaatkan tingkat gratis Google AI Studio secara langsung dengan kunci API sisi klien memberikan kecepatan inferensi tingkat perusahaan (<3.5s) tanpa biaya operasional server.",
      },
      image: "airy:data",
    },
    {
      title: { en: "Deterministic TypeScript Data Contracts", id: "Kontrak Data TypeScript Deterministik" },
      desc: {
        en: "Constraining LLM responses to strict AnalysisResult interfaces with client-side normalization fallbacks guarantees UI rendering stability and enables synchronized multi-competitor comparison diffs.",
        id: "Membatasi respons LLM ke antarmuka AnalysisResult yang ketat dengan normalisasi fallback menjamin stabilitas rendering UI dan memungkinkan perbandingan diff multi-kompetitor.",
      },
      image: "airy:architecture",
    },
  ],
  solution: [
    {
      title: { en: "100 Curated Benchmarking Directory", id: "Direktori 100 Tolok Ukur Terkurasi" },
      desc: {
        en: "100 verified teardowns evenly balanced across DevTools & Infra, Productivity & Design, Frontier AI & ML, Fintech & B2B SaaS, and Consumer & Commerce with 0ms client-side response time.",
        id: "100 teardown terverifikasi yang seimbang di 5 sektor teknologi utama dengan waktu respons 0ms di sisi klien.",
      },
      image: "airy:data",
    },
    {
      title: { en: "Live URL BYOK Deconstruction Engine", id: "Mesin Dekonstruksi URL Langsung BYOK" },
      desc: {
        en: "Instant deconstruction of any public web address into 9 standardized intelligence dimensions and 4 technical product specs in <3.5 seconds.",
        id: "Dekonstruksi instan halaman web publik mana pun menjadi 9 dimensi intelijen terstandar dan 4 spesifikasi produk teknis dalam <3.5 detik.",
      },
      image: "airy:flow",
    },
    {
      title: { en: "Comparison Matrix & Multi-Format Export", id: "Matriks Perbandingan & Ekspor Multi-Format" },
      desc: {
        en: "Side-by-side 2–4 competitor comparison matrix with 1-click export to PRD Markdown, JSON, CSV, and printable PDF formats.",
        id: "Matriks perbandingan 2–4 kompetitor berdampingan dengan ekspor 1-klik ke format Markdown PRD, JSON, CSV, dan PDF.",
      },
      image: "airy:radar",
    },
  ],
  metrics: [
    { label: { en: "Time to Insight", id: "Waktu ke Wawasan" }, value: "45m → <30s" },
    { label: { en: "Curated Directory", id: "Direktori Kurasi" }, value: "100 Benchmarks" },
    { label: { en: "Cloud Cost", id: "Biaya Cloud" }, value: "$0.00 / mo" },
    { label: { en: "Inference Engine", id: "Mesin Inferensi" }, value: "Gemini 2.5 Flash" },
  ],
  learnings: {
    en: "Architecting a production competitive intelligence engine demonstrated that strict schema enforcement, zero-cost BYOK client pipelines, and instant in-memory benchmark directories deliver exponentially higher user utility than raw conversational chatbots. Eliminating manual tab-hopping unlocks higher-order strategic design thinking.",
    id: "Merancang mesin intelijen kompetitif produksi membuktikan bahwa penegakan skema yang ketat, pipeline BYOK tanpa biaya di sisi klien, dan direktori benchmark in-memory instan memberikan utilitas yang jauh lebih tinggi daripada chatbot percakapan biasa.",
  },
};
