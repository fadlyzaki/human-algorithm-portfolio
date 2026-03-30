export const competitorSummarizer = {
  id: "competitor-summarizer",
  title: { en: "Competitor Landing Page Summarizer", id: "Ringkasan Halaman Arahan Kompetitor" },
  subtitle: { en: "Turn competitor pages into structured product-design insights", id: "Ubah halaman kompetitor menjadi wawasan desain produk terstruktur" },
  desc: { 
    en: "A web application that helps product designers transform competitor landing pages into structured product-design insights utilizing an ADK-powered agent via Model Context Protocol (MCP).",
    id: "Aplikasi web yang membantu desainer produk mengubah halaman arahan kompetitor menjadi wawasan desain produk terstruktur memanfaatkan agen bertenaga ADK melalui Model Context Protocol (MCP)."
  },
  tldr: {
    en: "Built an ADK + MCP powered tool that fetches and analyzes public landing pages to auto-generate structured, product-design focused benchmarking insights.",
    id: "Membangun alat bertenaga ADK + MCP yang mengambil dan menganalisis halaman arahan publik untuk membuat wawasan benchmarking fokus desain produk yang terstruktur secara otomatis."
  },
  humanImpact: {
    en: "Reduces repetitive manual scanning for designers, freeing up time for actual interpretation and decision-making.",
    id: "Mengurangi pemindaian manual berulang bagi pembuat desain, meluangkan waktu untuk interpretasi aktual dan pengambilan keputusan."
  },
  stack: ["React", "Vite", "Tailwind", "Google ADK", "MCP", "Python", "Gemini 2.5 Flash"],
  links: {
    demo: "https://competitor-summarizer-frontend-593545324546.us-central1.run.app",
    repo: "https://github.com/fadlyzaki/comp-landing-page-summarizer-",
  },
  prototypeLink: "https://competitor-summarizer-frontend-593545324546.us-central1.run.app",
  iconName: "Globe", 
  featured: false,
  type: { en: "Full-Stack Web App", id: "Aplikasi Web Full-Stack" },
  date: { en: "March 2026", id: "Maret 2026" },
  coverImage: "airy:architecture", 
  snapshot: {
    tagline: { en: "Turn competitor pages into structured product-design insights", id: "Ubah halaman kompetitor menjadi wawasan desain produk terstruktur" },
    heroImage: "airy:architecture", 
  },
  context: {
    role: { en: "Creator & Developer", id: "Kreator & Pengembang" },
    timeline: { en: "March 2026", id: "Maret 2026" },
    team: { en: "Solo", id: "Sendiri" },
    client: { en: "Personal Project", id: "Proyek Pribadi" },
  },
  challenge: {
    en: "Product designers frequently analyze competitor landing pages to understand positioning, value proposition, CTA strategy, and structure. However, this workflow remains highly manual, repetitive, inconsistent, and difficult to document in a reusable format.",
    id: "Desainer produk sering menganalisis halaman arahan kompetitor untuk memahami positioning, proposisi nilai, strategi CTA, dan struktur. Namun, alur kerja ini tetap sangat manual, repetitif, tidak konsisten, dan sulit didokumentasikan dalam format yang dapat digunakan kembali."
  },
  process: [
    {
      title: { en: "The Problem", id: "Masalah" },
      desc: {
        en: "Designers often open several competitor websites, scan each page manually, take fragmented notes, and spend time converting those into benchmarking documents. This slows down early-stage discovery and creates unnecessary cognitive load.",
        id: "Desainer sering membuka beberapa situs web kompetitor, memindai setiap halaman secara manual, membuat catatan terpisah, dan menghabiskan waktu mengubahnya menjadi dokumen benchmarking."
      },
      image: "airy:flow",
    },
    {
      title: { en: "Meeting the Build Criteria with ADK + MCP", id: "Memenuhi Kriteria Build dengan ADK + MCP" },
      desc: {
        en: "The solution uses ADK as the reasoning layer and MCP as the tool integration layer. The backend runs the official ADK runtime hosting a 'competitor_summarizer' LlmAgent (gemini-2.5-flash). An MCP server exposes a 'load_web_page' tool, enabling the agent to retrieve and analyze webpages through standardized stdio transport.",
        id: "Solusi menggunakan ADK sebagai lapisan penalaran dan MCP sebagai lapisan integrasi alat. Backend menjalankan agen ADK resmi menghosting LlmAgent 'competitor_summarizer'."
      },
      image: "airy:architecture",
    },
    {
      title: { en: "Unique Value Proposition", id: "Proposisi Nilai Unik" },
      desc: {
        en: "Unlike generic summarizers, this is tailored for product-design analysis. The agent's system instruction enforces analysis through UX-specific lenses: value proposition clarity, CTA strategy, trust signals, friction points, and design opportunities, outputting a consistent structured JSON.",
        id: "Tidak seperti perangkum generik, ini disesuaikan untuk analisis desain produk. Instruksi sistem agen memaksakan analisis melalui lensa khusus UX."
      },
      image: "airy:data",
    },
    {
      title: { en: "Key Features & UI", id: "Fitur Utama & UI" },
      desc: {
        en: "Features include a monospace single-URL input, loading states with spinning icons, an animated card-based layout for the structured JSON response, and 1-click export to JSON or Markdown. The UX bridges raw API output and a polished product designer's tool.",
        id: "Fitur-fitur mencakup input URL tunggal monospace, status pemuatan dengan ikon berputar, tata letak berbasis kartu animasi untuk respons JSON terstruktur."
      },
      image: "airy:radar",
    }
  ],
  insights: [
    {
      title: { en: "ADK + MCP as Core Engine", id: "ADK + MCP Sebagai Mesin Inti" },
      desc: {
        en: "The pattern of Webapp UI → ADK API Server → ADK Agent → MCP Server Tool (load_web_page) proved to be powerful, decoupling reasoning from external capability execution securely via stdio.",
        id: "Pola UI Webapp → Server API ADK → ADK Agen → Alat Server MCP terbukti tangguh."
      },
      image: "airy:network"
    },
    {
      title: { en: "Prompt Engineering for UX Extraction", id: "Rekayasa Prompt untuk Ekstraksi UX" },
      desc: {
        en: "We found that enforcing a structured JSON output with very specific UX and Product Design constraints forced the LLM to skip generic marketing fluff and deliver actionable benchmarking insights.",
        id: "Kami menemukan bahwa memaksakan output JSON terstruktur dengan batasan UX dan Desain Produk yang sangat spesifik memaksa LLM untuk memberikan wawasan."
      },
      image: "airy:data"
    }
  ],
  solution: [
    {
      title: { en: "Competitor Landing Page Summarizer", id: "Perangkum Halaman Arahan Kompetitor" },
      desc: {
        en: "A fully live web application combining a React frontend and Python ADK backend, deployed on Google Cloud Run, allowing instant extraction of design-focused insights from any public URL.",
        id: "Aplikasi web aktif sepenuhnya yang menggabungkan frontend React dan backend Python ADK."
      },
      image: "airy:architecture"
    }
  ],
  metrics: [
    { label: { en: "Target Audience", id: "Target Audiens" }, value: "Product Designers" },
    { label: { en: "Architecture", id: "Arsitektur" }, value: "ADK + MCP" },
    { label: { en: "LLM Model", id: "Model LLM" }, value: "Gemini 2.5 Flash" },
  ],
  learnings: {
    en: "Orchestrating ADK and MCP successfully transformed a conceptual learning exercise into a real-world product prototype. It demonstrated how standardizing tool calls through MCP vastly simplifies giving LLMs capability, opening doors for broader design research automation.",
    id: "Mengorkestrasi ADK dan MCP berhasil mengubah latihan pembelajaran konseptual menjadi prototipe produk dunia nyata."
  }
};
