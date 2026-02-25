export const yearInReview = {
    id: 'year-in-review',
    title: { en: 'Year in Review', id: 'Year in Review' },
    subtitle: { en: 'Privacy-First wrapped generator', id: 'Generator wrapped berbasis privasi' },
    desc: {
        en: 'A privacy-first, client-side yearly wrap generator. Inspired by Spotify Wrapped, it creates aesthetic milestone stories entirely in the browser without backend tracking.',
        id: "Generator ringkasan tahunan berbasis privasi. Terinspirasi Spotify Wrapped, membuat cerita pencapaian estetik langsung di browser tanpa pelacakan data."
    },
    tldr: {
        en: "A secure, zero-backend tool to generate aesthetic yearly summaries, putting privacy and creative control in the user's hands.",
        id: "Alat tanpa backend yang aman untuk membuat ringkasan tahunan estetik, menempatkan privasi dan kontrol kreatif di tangan pengguna."
    },
    stack: ["React 18", "Tailwind CSS", "Vite", "Lucide React"],
    links: { demo: "https://year-in-review-jak.vercel.app/", repo: "github.com/fadlyzaki/manual-wrapped" },
    iconName: 'Calendar',
    type: 'Web App',
    date: "December 2025",
    coverImage: "airy:data",
    snapshot: {
        tagline: { en: "Your Year, Your Data", id: "Tahunmu, Datamu" },
        heroImage: "airy:data"
    },
    context: {
        role: "Product Owner / Developer",
        timeline: "Dec 2025",
        team: "Solo Project",
        client: "Public"
    },
    challenge: {
        en: "Users want to summarize and share their yearly achievements creatively like 'Spotify Wrapped', but hesitate to use third-party apps that demand excessive backend data access. The challenge was building an engaging, aesthetic, mobile-first generator that runs entirely locally in the browser.",
        id: "Pengguna ingin merangkum dan membagikan pencapaian tahunan mereka secara kreatif, tetapi ragu menggunakan aplikasi pihak ketiga yang meminta akses data berlebih. Tantangannya adalah membangun generator estetik dan mobile-first yang berjalan sepenuhnya secara lokal di browser."
    },
    designProcess: [
        {
            type: "research",
            title: { en: "Privacy First Concept", id: "Konsep Mengutamakan Privasi" },
            desc: {
                en: "The target audience wants a way to share their personal year without sacrificing privacy. We designed a zero-backend architecture where all inputs, including stats and base64 photo data, auto-save to local storage.",
                id: "Audiens target menginginkan cara untuk membagikan tahun pribadi mereka tanpa mengorbankan privasi. Kami merancang arsitektur tanpa backend di mana semua input tersimpan otomatis di penyimpanan lokal."
            },
            image: "airy:timeline"
        },
        {
            type: "insight",
            title: { en: "Aesthetic Customization", id: "Kustomisasi Estetika" },
            desc: {
                en: "To cater to different personal brands, we implemented 12 distinct stylistic themes (from 8-Bit Retro to Cyberpunk Neon and Dark Academia) with native support for English and Indonesian languages.",
                id: "Untuk memenuhi beragam personal brand, kami mengimplementasikan 12 tema gaya berbeda (dari 8-Bit Retro hingga Cyberpunk Neon) dengan dukungan bahasa Inggris dan Indonesia."
            },
            image: "airy:layers"
        },
        {
            type: "design",
            title: { en: "Split-Pane Interface", id: "Antarmuka Split-Pane" },
            desc: {
                en: "We created a mobile-first, intuitive split-pane layout featuring an interactive editor for entering personalized stats and core memories next to a real-time live preview.",
                id: "Kami membuat tata letak split-pane mobile-first yang intuitif, menampilkan editor interaktif untuk memasukkan statistik dan memori di sebelah pratinjau langsung secara real-time."
            },
            image: "airy:ui"
        },
        {
            type: "ship",
            title: { en: "Export & Shareability", id: "Ekspor & Kemampuan Berbagi" },
            desc: {
                en: "Since canvas-based downloads often fail on mobile webviews, we built a 'Screenshot Mode' that hides all UI elements, prompting users to take high-quality native device screenshots.",
                id: "Karena unduhan kanvas sering gagal di mobile webview, kami membuat 'Screenshot Mode' yang menyembunyikan semua elemen UI agar pengguna dapat mengambil screenshot berkualitas tinggi."
            },
            image: "airy:venn"
        },
        {
            type: "measure",
            title: { en: "Smart Generation & AI", id: "Generasi Cerdas & AI" },
            desc: {
                en: "Introduced a 'Magic Write' algorithm for instant personalized summaries. The future roadmap includes LLM integration for adaptive tone, AI vibe matching, and smart photo framing.",
                id: "Memperkenalkan algoritma 'Tulis Ajaib' untuk ringkasan personal. Peta jalan masa depan mencakup integrasi LLM untuk nada adaptif, pencocokan getaran (vibe) AI, dan pembingkaian foto pintar."
            },
            image: "airy:data"
        }
    ],
    learnings: {
        en: "Privacy doesn't have to mean boring. By keeping everything client-side, we proved that a zero-backend tool can still deliver the delight and shareability users expect from a 'Wrapped' experience.",
        id: "Privasi tidak harus membosankan. Dengan menjalankan semuanya di sisi klien, kami membuktikan bahwa alat tanpa backend tetap bisa memberikan pengalaman menarik dan mudah dibagikan seperti 'Wrapped'."
    }
};
