export const competitorSummarizer = {
  id: "competitor-summarizer",
  title: { en: "Competitor Landing Page Summarizer", id: "Ringkasan Halaman Arahan Kompetitor" },
  subtitle: { en: "Turn competitor pages into structured product-design insights", id: "Ubah halaman kompetitor menjadi wawasan desain produk terstruktur" },
  desc: { 
    en: "A resilient extraction engine powered by Google ADK and MCP. Engineered to autonomously parse live competitor DOM architectures and output clean, structured benchmarking data—replacing manual scanning with high-fidelity signal.",
    id: "Mesin ekstraksi tangguh yang ditenagai oleh Google ADK dan MCP. Direkayasa untuk secara otonom mengurai arsitektur DOM kompetitor secara langsung dan menghasilkan data benchmarking yang terstruktur—menggantikan pemindaian manual dengan sinyal fidelitas tinggi."
  },
  tldr: {
    en: "An autonomous agent leveraging Google ADK to parse competitor architectures into structured JSON benchmarks, eradicating repetitive cognitive load.",
    id: "Agen otonom yang memanfaatkan Google ADK untuk mengurai arsitektur kompetitor menjadi tolok ukur JSON terstruktur, menghentikan beban kognitif yang berulang."
  },
  humanImpact: {
    en: "Eliminates repetitive manual scanning for designers, freeing up cognitive bandwidth for high-leverage interpretation and strategic decision-making.",
    id: "Menghilangkan pemindaian manual berulang bagi desainer, membebaskan ruang kognitif untuk interpretasi tingkat tinggi dan pengambilan keputusan strategis."
  },
  stack: ["React", "Vite", "Tailwind", "Google ADK", "MCP", "Python", "Gemini 2.5 Flash"],
  links: {
    demo: "https://competitor-summarizer-frontend-593545324546.us-central1.run.app",
    repo: "https://github.com/fadlyzaki/comp-landing-page-summarizer-",
    pitch_deck: "https://docs.google.com/presentation/d/1P_c7JoDaEcb1ddnNYLKY2RhwUXyumv0B/edit?usp=sharing",
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
    event: { en: "APAC GenAI Academy Hackathon", id: "Hackathon APAC GenAI Academy" },
    event_url: "https://vision.hack2skill.com/event/apac-genaiacademy/?utm_source=hack2skill&utm_medium=homepage"
  },
  challenge: {
    en: "Product designers frequently analyze competitor landing pages to understand positioning, value proposition, CTA strategy, and structure. However, this workflow remains highly manual and chaotic, consuming massive cognitive bandwidth just to generate fragmented, inconsistent notes.",
    id: "Desainer produk sering menganalisis halaman arahan kompetitor untuk memahami positioning, proposisi nilai, strategi CTA, dan struktur. Namun, alur kerja ini tetap sangat manual dan kacau, memakan ruang kognitif besar hanya untuk menghasilkan catatan yang terpisah dan tidak konsisten."
  },
  process: [
    {
      title: { en: "The Cognitive Drain", id: "Pengurasan Kognitif" },
      desc: {
        en: "When analyzing competitors, designers often drown in a sea of disconnected tabs framing isolated screenshots. This brutally slows down early-stage discovery and active erasure of human agency through repetitive 'copy-pasting' labor.",
        id: "Saat menganalisis kompetitor, desainer sering tenggelam dalam lautan tab yang tidak terhubung membingkai tangkapan layar yang terisolasi. Ini secara brutal memperlambat penemuan tahap awal."
      },
      image: "airy:flow",
    },
    {
      title: { en: "Architecting the Logic (ADK + MCP)", id: "Merancang Logika (ADK + MCP)" },
      desc: {
        en: "I engineered a resilient solution combining Google's Agent Development Kit (ADK) as the reasoning core and Model Context Protocol (MCP) as the strict capability bridge. A dedicated 'load_web_page' tool acts locally via stdio, feeding the parsed DOM into a Gemini 2.5 Flash agent.",
        id: "Saya merekayasa solusi tangguh yang menggabungkan Google Agent Development Kit (ADK) sebagai inti penalaran dan Model Context Protocol (MCP) sebagai jembatan kapabilitas."
      },
      image: "airy:architecture",
    },
    {
      title: { en: "Strict Schema Enforcement", id: "Pemberlakuan Skema Ketat" },
      desc: {
        en: "Unlike generic LLM wrappers, this system operates on a zero-friction constraint. The agent's system prompt restricts output to specifically structured JSON parameters (Value Prop, Audience, CTA, Trust Signals), stripping away marketing fluff.",
        id: "Tidak seperti pembungkus LLM generik, sistem ini beroperasi pada batasan tanpa gesekan. Perintah sistem agen membatasi output ke parameter JSON yang terstruktur."
      },
      image: "airy:data",
    },
    {
      title: { en: "The Terminal Output", id: "Output Terminal" },
      desc: {
        en: "The interface respects the viewport. It features a monospace URL injector, definitive system-loading mechanics, and 1-click JSON or Markdown extraction. High-bandwidth collaboration extracted instantly.",
        id: "Antarmuka menghormati area pandang. Menampilkan injektor URL monospace, mekanik pemuatan sistem definitif, dan ekstraksi 1-klik JSON. Kolaborasi bandwidth tinggi diekstraksi."
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
