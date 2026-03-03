export const procurement = {
  id: "procurement",
  title: { en: "Procurement Reform", id: "Procurement Reform" },
  subtitle: { en: "Civic Tech Action Plan", id: "Civic Tech Action Plan" },
  desc: {
    en: "A technical framework for government transparency.",
    id: "Kerangka kerja teknis untuk transparansi pemerintah.",
  },
  tldr: {
    en: "Empowering IT professionals to reform Indonesian government procurement.",
    id: "Memberdayakan profesional IT untuk mereformasi pengadaan pemerintah Indonesia.",
  },
  stack: ["Python", "Pandas", "PWA"],
  links: {
    demo: "medium.com/procurement",
    repo: "github.com/fadlyzaki/procurement",
  },
  iconName: "FileText",
  type: "Dashboard Platform",
  hidden: true,
  featured: false,
  coverImage: "airy:ecosystem",
  snapshot: {
    tagline: { en: "Civic Transparency v2.0", id: "Transparansi Sipil v2.0" },
    heroImage: "airy:ecosystem",
  },
  context: {
    role: "Product Owner",
    timeline: "2024",
    team: "Open Data Lab",
    client: "NGO",
  },
  challenge: {
    en: "Government procurement is plagued by opacity. Jakarta-centric apps fail in rural Papua due to the 'Archipelago Effect'—low bandwidth and distinct local contexts.",
    id: "Pengadaan pemerintah penuh ketertutupan. Aplikasi yang Jakarta-sentris gagal di pelosok Papua karena 'Efek Kepulauan'—sinyal jelek dan konteks lokal beda.",
  },
  process: [
    {
      title: { en: "The Archipelago Effect", id: "Efek Kepulauan" },
      desc: {
        en: "We found that 4G is a myth in rural outdoors. Apps must work offline-first.",
        id: "4G itu mitos di pedalaman. Aplikasi wajib offline-first.",
      },
      image: "airy:ecosystem",
    },
  ],
  insights: [
    {
      title: { en: "Red Flags are Hidden", id: "Bendera Merah Tersembunyi" },
      desc: {
        en: "Corruption isn't obvious. It's hidden in the metadata (e.g., timestamps of midnight uploads).",
        id: "Korupsi itu gak gamblang. Dia sembunyi di metadata (contoh: upload dokumen tengah malam).",
      },
      image: "airy:radar",
    },
  ],
  solution: [
    {
      title: { en: "Offline-First PWA", id: "PWA Offline-First" },
      desc: {
        en: "Combines 'Red Flag' data scraping with accessible PWA architectures.",
        id: "Gabungin scraping 'Red Flag' dengan arsitektur PWA yang ringan.",
      },
      image: "airy:architecture",
    },
  ],
  metrics: [
    { label: "Transparency", value: "Radical" },
    { label: "Offline Access", value: "Enabled" },
  ],
  learnings: {
    en: "This project taught me a humbling truth: the most elegant dashboard is worthless if it can't load on a 3G connection. I learned to design for the infrastructure I wished didn't exist, not the one I wanted. Offline-first isn't a feature, it's a moral obligation in a country like Indonesia.",
    id: "Proyek ini mengajarkan kebenaran yang menohok: dashboard paling elegan sekalipun tak berguna kalau nggak bisa dibuka di sinyal 3G. Saya belajar mendesain untuk infrastruktur yang ada, bukan yang saya inginkan. Offline-first bukan fitur, tapi kewajiban moral di negara seperti Indonesia.",
  },
  designProcess: [
    {
      type: "research",
      title: { en: "The Archipelago Effect", id: "Efek Kepulauan" },
      desc: {
        en: "Government procurement needs to reach rural Papua, but 4G is a myth there. Apps must work offline-first.",
        id: "Pengadaan pemerintah perlu menjangkau pedalaman Papua, tapi 4G itu mitos di sana. Aplikasi wajib offline-first.",
      },
      image: "airy:ecosystem",
    },
    {
      type: "insight",
      title: { en: "Red Flags are Hidden", id: "Bendera Merah Tersembunyi" },
      desc: {
        en: "Corruption isn't obvious. It's hidden in the metadata (e.g., timestamps of midnight uploads).",
        id: "Korupsi itu gak gamblang. Dia sembunyi di metadata (contoh: upload dokumen tengah malam).",
      },
      image: "airy:radar",
    },
    {
      type: "design",
      title: { en: "Offline Architecture", id: "Arsitektur Offline" },
      desc: {
        en: "Designed a local-first sync engine. Data is stored on the device and syncs only when a connection is stable.",
        id: "Mendesain mesin sinkronisasi local-first. Data disimpan di perangkat dan hanya sinkron saat koneksi stabil.",
      },
      image: "airy:architecture",
    },
    {
      type: "ship",
      title: { en: "PWA Implementation", id: "Implementasi PWA" },
      desc: {
        en: "Built as a Progressive Web App to ensure accessibility on low-end devices without requiring a heavy store download.",
        id: "Dibangun sebagai Progressive Web App untuk memastikan aksesibilitas di perangkat low-end tanpa download berat.",
      },
      image: "airy:layers",
    },
    {
      type: "measure",
      title: { en: "Radical Transparency", id: "Transparansi Radikal" },
      desc: {
        en: "By enabling access in remote areas, we increased the surface area for public oversight significantly.",
        id: "Dengan memungkinkan akses di area terpencil, kami meningkatkan area pengawasan publik secara signifikan.",
      },
      image: "airy:chart",
    },
  ],
};
