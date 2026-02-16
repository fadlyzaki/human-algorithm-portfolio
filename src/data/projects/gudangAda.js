
export const gudangAda = {
    id: 'commerce',
    title: 'THE COMMERCE ENGINE',
    company: 'GudangAda',
    logo: '/gudangada-logo.png', // Placeholder for company logo
    subtitle: 'Managing Scale',
    companyFocus: {
        title: "Unique Context",
        icon: "TrendingUp",
        items: ["$100B B2B Market", "FMCG Supply Chain", "Fragmented Logistics"]
    },
    companyFocus_id: {
        title: "Faktor Skala",
        items: ["Pasar B2B $100M", "Rantai Pasokan FMCG", "Logistik Terfragmentasi"]
    },
    motivation: "When COVID hit, I saw my aunt's Mom & Pop store struggle to get supplies. It wasn't just a business problem; it was personal. When I got the opportunity to help, I joined to improve the transaction flow, specifically easing the burden for buyers like her.",
    motivation_id: "Saat COVID melanda, saya melihat warung tante saya kesulitan mendapatkan stok. Itu bukan sekadar masalah bisnis; itu personal. Saat kesempatan untuk membantu datang, saya bergabung untuk memperbaiki alur transaksi, meringankan beban bagi pembeli seperti beliau.",
    hook_id: 'Membangun rasa aman di pasar low-trust. Memastikan pemilik warung merasa setenang belanja stok 5 juta seperti saat jajan 5 ribu.',
    brandColor: '#00D1C7', // GudangAda Cyan
    linkedinUrl: 'https://www.linkedin.com/company/gudangada/about/',
    heroImage: '/work/gudangada-hero.png',
    hook: 'Systematizing trust in a chaotic market. Designing fail-safe transaction flows for the $100B B2B supply chain.',
    miniDesc: 'Digitizing the supply chain by scaffolding existing relationships. Established Design Ops, mentored interns, and scaled the design team.',
    stats: [
        { label: 'Role', value: 'Product Designer 2' },
        { label: 'Teams', value: 'B2B Marketplace, Logistics Tech, Design Ops' },
        { label: 'Timeline', value: 'April 2020 - April 2022' },
        { label: 'Impact', value: 'Trust & Transaction Safety' },
        { label: 'Platform', value: 'Mobile Apps & Website' }
    ],
    culture: {
        title: "The Arena",
        description: "As Product Designer 2, I orchestrated the digital transformation of a traditional supply chain. Beyond pixels, I built the design culture from scratch—establishing Design Ops, mentoring a growing team, and bridging the gap between chaotic offline markets and intuitive digital tools.",
        disclaimer: "If anyone on the team is uncomfortable with their image being featured here, please reach out to me and I'll remove it immediately.",
        layout: "symmetric-grid",
        images: [
            { src: "/images/gudangada/setup_wide.jpg", caption: "when we work remote while COVID", span: "md:col-start-1 md:row-start-1" },
            { src: "/images/gudangada/workspace_detail.jpg", caption: "Design Team Review and Meet", span: "md:col-start-1 md:row-start-2" },
            { src: "/images/gudangada/culture_pose.jpg", caption: "Me at HQ.", span: "md:col-start-2 md:row-start-1 md:row-span-2 h-full" },
            { src: "/images/gudangada/gudangada_mural.jpg", caption: "GudangAda Culture Mural", span: "md:col-start-3 md:row-start-1" },
            { src: "/images/gudangada/team_gathering.jpg", caption: "Team Gathering", span: "md:col-start-3 md:row-start-2" }
        ]
    },
    culture_id: {
        title: "Medan Juang",
        description: "Membangun lapisan digital di atas rantai pasokan tradisional yang kacau bukanlah hal mudah. Kami menghabiskan hari-hari di gudang panas dan pasar padat untuk memahami pengguna sebenarnya."
    },
    projects: [
        {
            id: 'marketplace-checkout',
            title: 'Marketplace',
            tag: 'Transactions',
            type: 'Web Platform',
            role: 'Lead Designer',
            timeline: '6 Months',
            route: '/case-study/marketplace-checkout',
            previewImage: '/commerce_hero.png',
            iconName: 'ShoppingBag',
            details: { problem: 'Fear of sending money into the void.', system: 'The "Money Back" Shield.', outcome: 'Trust increased, Abandonment Reduced.' },
            details_id: { problem: 'Takut kirim uang ke tempat antah berantah.', system: 'Perisai "Uang Kembali".', outcome: 'Kepercayaan naik, Abandonment Berkurang.' },
            title_id: 'Marketplace',
            tag_id: 'Transaksi',
            caseStudy: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "Safe Shopping",
                        text: "Buying stuff for a shop was too scary. I made it simple like buying a pizza, and promised money back if things go wrong, so shop owners feel safe."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Trust Engineering",
                        text: "Simplified a complex B2B checkout from 7 steps to 3. Added trust signals like an escrow badge, reducing cart abandonment significantly."
                    },
                    technical: {
                        label: "🤖 System",
                        title: "Checkout State Machine",
                        text: "Refactored the checkout flow to be less rigid. Integrated real-time validation and localized error handling to prevent user frustration during high-value transactions."
                    }
                },
                snapshot: {
                    tagline: "7 steps to buy a box of noodles? We had to fix the trust gap.",
                    heroImage: "airy:flow"
                },
                context: {
                    client: "GudangAda",
                    role: "I led the Checkout Squad",
                    timeline: "6 Months",
                    team: "4 PMs, 8 Engineers"
                },
                challenge: "Our checkout flow was a 7-step monster. Users were abandoning carts at a rate of 65% because they didn't trust that their money was safe. In B2B, 'trust' isn't just a feeling; it's a transaction guarantee.",
                process: [
                    { title: "The Audit", desc: "I printed every screen of the checkout flow. It spanned 3 meters on the wall. We were asking for the same address 3 times." },
                    { title: "The Fight", desc: "Finance wanted to keep the 'safety checks'. I argued that friction *is* risk. If it's too hard, they leave." }
                ],
                insights: [
                    { title: "Payment Anxiety", desc: "I found that users only cared about one thing: 'Will I get my refund if this goes wrong?' We needed to front-load that assurance." }
                ],
                solution: [
                    { title: "3-Step Flow", desc: "I collapsed the 7 steps into 3: Cart, Payment, Confirmation. Radical simplification.", image: "airy:flow" },
                    { title: "Escrow Badge", desc: "I added a visual 'Money Back Guarantee' shield next to the Pay button. It increased conversion alone.", image: "airy:ui" }
                ],
                metrics: [
                    { label: "Cart Abandon", value: "Reduced Abandonment" },
                    { label: "Conversion", value: "Boosted Conversion" },
                    { label: "AOV", value: "Increased Order Value" }
                ],
                learnings: "Trust is built in milliseconds. You can't ask for money if you look messy. A clean UI is a trustworthy UI.",
                designProcess: [
                    {
                        type: "research",
                        title: "The Audit",
                        desc: "I printed every screen of the checkout flow. It spanned 3 meters on the wall. We were asking for the same address 3 times.",
                        title_id: "Audit Total",
                        desc_id: "Saya print setiap layar alur checkout. Panjangnya 3 meter di dinding. Ternyata kami minta alamat yang sama 3 kali.",
                        image: "airy:timeline"
                    },
                    {
                        type: "insight",
                        title: "Payment Anxiety",
                        desc: "I found that users only cared about one thing: 'Will I get my refund if this goes wrong?' We needed to front-load that assurance.",
                        title_id: "Kecemasan Bayar",
                        desc_id: "Saya temukan user cuma peduli satu hal: 'Uang saya balik nggak kalau ini gagal?' Kami harus taruh jaminan itu di depan.",
                        image: "airy:venn"
                    },
                    {
                        type: "design",
                        title: "3-Step Flow",
                        desc: "I collapsed the 7 steps into 3: Cart, Payment, Confirmation. Radical simplification.",
                        title_id: "Alur 3-Langkah",
                        desc_id: "Saya ringkas 7 langkah jadi 3: Keranjang, Bayar, Konfirmasi. Penyederhanaan radikal.",
                        image: "airy:flow"
                    },
                    {
                        type: "ship",
                        title: "Escrow Badge",
                        desc: "I added a visual 'Money Back Guarantee' shield next to the Pay button. It increased conversion alone.",
                        title_id: "Badge Escrow",
                        desc_id: "Saya tambah perisai visual 'Jaminan Uang Kembali' di sebelah tombol Bayar. Ini menaikkan konversi 5% sendirian.",
                        image: "airy:ui"
                    },
                    {
                        type: "measure",
                        title: "Cart Abandon",
                        desc: "Significantly reduced cart abandonment rate and increased average order value (AOV).",
                        title_id: "Cart Abandon",
                        desc_id: "Mengurangi tingkat pengabaian keranjang secara signifikan dan meningkatkan nilai pesanan rata-rata (AOV).",
                        image: "airy:chart"
                    }
                ],
                aiHypotheses: [
                    {
                        tech: "Predictive Fraud Detection",
                        title: "The 'Green Light' Checkout",
                        desc: "An AI analyzes the buyer's purchase history and creditworthiness in real-time. If they are trusted, they skip the 'Payment Proof' step entirely. Instant credit approval.",
                        impact: "Friction Eliminated"
                    },
                    {
                        tech: "Dynamic Pricing & ML",
                        title: "Smart Bundle Suggestions",
                        desc: "AI analyzes cart contents and suggests complementary products with optimized bundle pricing, increasing average order value while providing genuine value to buyers.",
                        impact: "Higher Order Value"
                    },
                    {
                        tech: "Computer Vision & OCR",
                        title: "Scan-to-Reorder",
                        desc: "Store owners photograph their empty shelves. AI identifies products and auto-fills a reorder cart based on previous purchase patterns and current stock levels.",
                        impact: "Instant Reorder"
                    },
                    {
                        tech: "Federated Learning",
                        title: "Neighborhood Buying Group",
                        desc: "AI notices 5 shops in the same zip code ordering similar items. It prompts them to 'Pool Order' for a bulk discount, orchestrating the logistics automatically.",
                        impact: "Cost Savings"
                    },
                    {
                        tech: "Computer Vision (Inventory)",
                        title: "Shelf-to-Cart",
                        desc: "Shop owner takes a photo of their empty shelf. AI identifies missing SKUs, estimates quantity needed based on shelf size, and auto-fills the cart.",
                        impact: "Lightning Fast"
                    }
                ]
            },
            caseStudy_id: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "Belanja Aman",
                        text: "Belanja stok toko itu nyeremin. Saya bikin simpel kayak beli pizza, dan janji uang kembali kalau ada masalah, biar pemilik warung tenang."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Rekayasa Kepercayaan",
                        text: "Menyederhanakan checkout B2B kompleks dari 7 langkah jadi 3. Menambah sinyal kepercayaan seperti badge escrow, mengurangi tingkat pengabaian keranjang secara signifikan."
                    },
                    technical: {
                        label: "🤖 Sistem",
                        title: "State Machine Checkout",
                        text: "Merefaktor alur checkout agar tidak kaku. Integrasi validasi real-time dan penanganan error yang terlokalisasi untuk mencegah frustrasi saat transaksi nilai tinggi."
                    }
                },
                snapshot: {
                    tagline: "7 langkah buat beli semardus mie? Kami harus perbaiki gap kepercayaan.",
                    heroImage: "airy:flow"
                },
                context: {
                    client: "GudangAda",
                    role: "Lead Squad Checkout",
                    timeline: "6 Bulan",
                    team: "4 PM, 8 Engineer"
                },
                challenge: "Alur checkout kami adalah 'monster' 7 langkah. User meninggalkan keranjang (abandon cart) sebesar 65% karena mereka tidak percaya uang mereka aman. Di B2B, 'trust' bukan sekadar perasaan; itu jaminan transaksi.",
                process: [
                    { title: "Audit Total", desc: "Saya print setiap layar alur checkout. Panjangnya 3 meter di dinding. Ternyata kami minta alamat yang sama 3 kali.", image: "airy:timeline" },
                    { title: "Perdebatan", desc: "Tim Finance mau mempertahankan 'cek keamanan'. Saya berargumen bahwa friksi *adalah* risiko. Kalau terlalu ribet, mereka pergi.", image: "airy:venn" }
                ],
                insights: [
                    { title: "Kecemasan Bayar", desc: "Saya temukan user cuma peduli satu hal: 'Uang saya balik nggak kalau ini gagal?' Kami harus taruh jaminan itu di depan." }
                ],
                solution: [
                    { title: "Alur 3-Langkah", desc: "Saya ringkas 7 langkah jadi 3: Keranjang, Bayar, Konfirmasi. Penyederhanaan radikal.", image: "airy:flow" },
                    { title: "Badge Escrow", desc: "Saya tambah perisai visual 'Jaminan Uang Kembali' di sebelah tombol Bayar. Ini menaikkan konversi 5% sendirian.", image: "airy:ui" }
                ],
                metrics: [
                    { label: "Cart Abandon", value: "Abandonment Turun" },
                    { label: "Konversi", value: "Konversi Naik" },
                    { label: "AOV", value: "Nilai Order Naik" }
                ],
                learnings: "Kepercayaan dibangun dalam milidetik. Anda nggak bisa minta uang kalau tampilan berantakan. UI yang rapi adalah UI yang bisa dipercaya.",
                aiHypotheses: [
                    {
                        tech: "Predictive Fraud Detection",
                        title: "Checkout 'Lampu Hijau'",
                        desc: "AI menganalisis riwayat belanja dan kredit pembeli secara real-time. Jika terpercaya, mereka bisa skip tahap 'Bukti Bayar' sepenuhnya. Persetujuan kredit instan.",
                        impact: "Friksi Berkurang 100%"
                    },
                    {
                        tech: "Dynamic Pricing & ML",
                        title: "Saran Bundle Pintar",
                        desc: "AI menganalisis isi keranjang dan menyarankan produk pelengkap dengan harga bundle yang optimal, meningkatkan nilai order rata-rata sambil memberikan nilai nyata ke pembeli.",
                        impact: "AOV +25%"
                    },
                    {
                        tech: "Computer Vision & OCR",
                        title: "Scan-untuk-Pesan Ulang",
                        desc: "Pemilik toko memfoto rak kosong mereka. AI mengidentifikasi produk dan auto-fill keranjang reorder berdasarkan pola pembelian sebelumnya dan level stok saat ini.",
                        impact: "Waktu Reorder -70%"
                    },
                    {
                        tech: "Federated Learning",
                        title: "Beli Bareng Tetangga",
                        desc: "AI sadar ada 5 warung di kode pos sama pesan barang mirip. Dia ajak mereka 'Beli Bareng' buat diskon grosir, atur logistik otomatis.",
                        impact: "Biaya Logistik -25%"
                    },
                    {
                        tech: "Computer Vision (Inventaris)",
                        title: "Rak-ke-Keranjang",
                        desc: "Pemilik warung foto rak kosong mereka. AI identifikasi barang hilang, estimasi jumlah butuh berdasar ukuran rak, dan auto-isi keranjang.",
                        impact: "Kecepatan Pesan 10x"
                    }
                ]
            }
        },
        {
            id: 'brand-official-store',
            title: 'Official Store',
            tag: 'Branding',
            type: 'System Feature',
            role: 'System Designer',
            timeline: '3 Months',
            route: '/case-study/brand-official-store',
            previewImage: '/commerce_hero.png',
            iconName: 'ShieldCheck',
            details: { problem: 'Big brands felt homeless in a messy market.', system: 'Digital Real Estate for Unilever.', outcome: 'Premiums felt Premium again.' },
            details_id: { problem: 'Brand besar merasa "gelandangan" di pasar becek.', system: 'Real Estate Digital buat Unilever.', outcome: 'Premium terasa Premium lagi.' },
            title_id: 'Official Store',
            tag_id: 'Branding',
            caseStudy: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "Digital Shop Window",
                        text: "Big brands wanted their own fancy space. I built a tool so they can decorate their own little shops inside our app, just like they do in a real mall."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "B2B Branding",
                        text: "Created a 'Shop-in-Shop' CMS for major FMCG partners. Allowed brands to manage their own assets, resulting in successful onboarding of major partners."
                    },
                    technical: {
                        label: "🤖 System",
                        title: "Modular CMS",
                        text: "Built a modular CMS with JSON-schema based templates. Enabled dynamic rendering of brand assets while maintaining platform performance guardrails."
                    }
                },
                snapshot: {
                    tagline: "Giving Unilever and P&G their own real estate in a chaotic marketplace.",
                    heroImage: "airy:architecture"
                },
                context: {
                    client: "Strategic Partnership",
                    role: "I designed the CMS",
                    timeline: "3 Months",
                    team: "Brand Team"
                },
                challenge: "Major FMCG principals refused to join our platform because they couldn't control their brand presence. They didn't want their premium soap listed next to a grainy photo of a dusty box.",
                process: [
                    { title: "The Tension", desc: "Brands wanted 'microsites'. Engineering wanted 'standard templates'. I had to design a system that felt custom but was generated from a standard JSON schema.", image: "airy:architecture" },
                    { title: "Modular Design", desc: "I created a drag-and-drop 'Store Builder' that allowed brands to arrange banners and carousels without writing code.", image: "airy:kanban" }
                ],
                insights: [
                    { title: "Vanity Metrics", desc: "Brands cared more about 'Total Views' than 'Sales'. I highlighted traffic analytics in their dashboard to satisfy this need." }
                ],
                solution: [
                    { title: "Store Builder", desc: "A WYSIWYG editor for brand managers to customize their landing pages.", image: "airy:ui" },
                    { title: "Verified Badge", desc: "A visual tick that signaled 'Official Distributor', boosting trust for buyers.", image: "airy:ecosystem" }
                ],
                metrics: [
                    { label: "Onboarded", value: "Major Partners Onboarded" },
                    { label: "GMV Uplift", value: "Significant GMV Growth" },
                    { label: "Brand NPS", value: "High Partner Satisfaction" }
                ],
                learnings: "B2B buyers are still human. They gravitate towards 'polished' content because it signals reliability.",
                designProcess: [
                    {
                        type: "research",
                        title: "The Tension",
                        desc: "Brands wanted 'microsites'. Engineering wanted 'standard templates'. I had to design a system that felt custom but was generated from a standard JSON schema.",
                        title_id: "Ketegangan",
                        desc_id: "Brand minta 'microsites'. Engineering minta 'template standar'. Saya harus desain sistem yang terasa custom tapi digenerate dari skema JSON standar.",
                        image: "airy:architecture"
                    },
                    {
                        type: "insight",
                        title: "Vanity Metrics",
                        desc: "Brands cared more about 'Total Views' than 'Sales'. I highlighted traffic analytics in their dashboard to satisfy this need.",
                        title_id: "Vanity Metrics",
                        desc_id: "Brand lebih peduli 'Total Views' daripada 'Sales'. Saya highlight analitik trafik di dashboard mereka untuk memuaskan kebutuhan ini.",
                        image: "airy:chart"
                    },
                    {
                        type: "design",
                        title: "Store Builder",
                        desc: "A WYSIWYG editor for brand managers to customize their landing pages.",
                        title_id: "Store Builder",
                        desc_id: "Editor WYSIWYG buat manajer brand kustomisasi landing page mereka.",
                        image: "airy:ui"
                    },
                    {
                        type: "ship",
                        title: "Verified Badge",
                        desc: "A visual tick that signaled 'Official Distributor', boosting trust for buyers.",
                        title_id: "Badge Terverifikasi",
                        desc_id: "Centang visual yang menandakan 'Distributor Resmi', meningkatkan kepercayaan pembeli.",
                        image: "airy:ecosystem"
                    },
                    {
                        type: "measure",
                        title: "Onboarded",
                        desc: "Successfully onboarded major partners and achieved significant GMV growth.",
                        title_id: "Onboarded",
                        desc_id: "Berhasil onboarding mitra utama dan mencapai pertumbuhan GMV yang signifikan.",
                        image: "airy:radar"
                    }
                ],
                aiHypotheses: [
                    {
                        tech: "Generative Design (StyleGAN)",
                        title: "Brand Asset Autopilot",
                        desc: "Brands upload 1 logo and 1 product image. The AI automatically generates 50 variations of banners, social posts, and store themes that adhere to their brand guidelines.",
                        impact: "Instant Onboarding"
                    },
                    {
                        tech: "Multimodal LLM & Product Data",
                        title: "AI Product Copywriter",
                        desc: "AI analyzes product images and specs to auto-generate compelling product descriptions, SEO tags, and promotional copy in multiple languages.",
                        impact: "Rapid Catalog Setup"
                    },
                    {
                        tech: "Real-time Analytics & Personalization",
                        title: "Dynamic Store Personalization",
                        desc: "Store layout auto-adjusts based on visitor behavior—showing trending products to browsers and reorder suggestions to returning buyers.",
                        impact: "Higher Store Conversion"
                    },
                    {
                        tech: "Generative Video (GenAI)",
                        title: "Instant Ad Creator",
                        desc: "Brands upload static assets. AI generates 15-second high-energy video ads tailored to local trends, ready to be blasted to retailer WhatsApp groups.",
                        impact: "Boosted Conversion Rate"
                    },
                    {
                        tech: "Sentiment Analysis Agents",
                        title: "Review Defender",
                        desc: "AI monitors retailer reviews 24/7. Upon spotting a complaint, it drafts a solution-oriented reply and issues an automated apology voucher instantly.",
                        impact: "Better Retention"
                    }
                ]
            },
            caseStudy_id: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "Etalase Digital",
                        text: "Brand besar mau tempat mewah. Saya bikin alat biar mereka bisa hias toko kecil mereka sendiri di dalam aplikasi kami, persis kayak di mall beneran."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Branding B2B",
                        text: "Membuat CMS 'Shop-in-Shop' untuk mitra FMCG besar. Memungkinkan brand mengelola aset mereka sendiri, menghasilkan onboarding mitra utama yang sukses."
                    },
                    technical: {
                        label: "🤖 Sistem",
                        title: "CMS Modular",
                        text: "Membangun CMS modular dengan template berbasis skema JSON. Memungkinkan rendering dinamis aset brand sambil menjaga performa platform."
                    }
                },
                snapshot: {
                    tagline: "Memberi Unilever dan P&G 'lahan real estate' di pasar yang chaotic.",
                    heroImage: "airy:architecture"
                },
                context: {
                    client: "Partnership Strategis",
                    role: "Desainer CMS",
                    timeline: "3 Bulan",
                    team: "Tim Brand"
                },
                challenge: "Prinsipal FMCG besar menolak bergabung karena tidak bisa kontrol brand image mereka. Mereka nggak mau sabun premium mereka dipajang di sebelah foto buram kardus berdebu.",
                process: [
                    { title: "Ketegangan", desc: "Brand minta 'microsites'. Engineering minta 'template standar'. Saya harus desain sistem yang terasa custom tapi digenerate dari skema JSON standar.", image: "airy:architecture" },
                    { title: "Desain Modular", desc: "Saya buat 'Store Builder' drag-and-drop yang bikin manajer brand bisa atur banner dan karos tanpa coding.", image: "airy:kanban" }
                ],
                insights: [
                    { title: "Vanity Metrics", desc: "Brand lebih peduli 'Total Views' daripada 'Sales'. Saya highlight analitik trafik di dashboard mereka untuk memuaskan kebutuhan ini." }
                ],
                solution: [
                    { title: "Store Builder", desc: "Editor WYSIWYG buat manajer brand kustomisasi landing page mereka.", image: "airy:ui" },
                    { title: "Badge Terverifikasi", desc: "Centang visual yang menandakan 'Distributor Resmi', meningkatkan kepercayaan pembeli.", image: "airy:ecosystem" }
                ],
                metrics: [
                    { label: "Onboarded", value: "Mitra Utama Onboard" },
                    { label: "Kenaikan GMV", value: "Pertumbuhan GMV Signifikan" },
                    { label: "NPS Brand", value: "Kepuasan Mitra Tinggi" }
                ],
                learnings: "Pembeli B2B juga manusia. Mereka tertarik pada konten yang 'poles' karena itu sinyal keandalan.",
                aiHypotheses: [
                    {
                        tech: "Generative Design (StyleGAN)",
                        title: "Autopilot Aset Brand",
                        desc: "Brand upload 1 logo dan 1 gambar produk. AI otomatis generate 50 variasi banner, posting sosial, dan tema toko yang sesuai panduan brand mereka.",
                        impact: "Onboarding Instan"
                    },
                    {
                        tech: "Multimodal LLM & Data Produk",
                        title: "AI Copywriter Produk",
                        desc: "AI menganalisis gambar dan spesifikasi produk untuk auto-generate deskripsi produk yang menarik, tag SEO, dan copy promosi dalam berbagai bahasa.",
                        impact: "Setup Lebih Cepat"
                    },
                    {
                        tech: "Real-time Analytics & Personalization",
                        title: "Personalisasi Toko Dinamis",
                        desc: "Layout toko auto-adjust berdasarkan perilaku pengunjung—menampilkan produk trending ke browser dan saran reorder ke pembeli langganan.",
                        impact: "Konversi Lebih Tinggi"
                    },
                    {
                        tech: "Video Generatif",
                        title: "Kreator Iklan Instan",
                        desc: "Brand upload aset statis. AI generate video iklan 15 detik yang energik sesuai tren lokal, siap di-blast ke grup WhatsApp warung.",
                        impact: "Konversi Meningkat"
                    },
                    {
                        tech: "Agen Analisis Sentimen",
                        title: "Pembela Review",
                        desc: "AI pantau review warung 24/7. Pas nemu komplain, dia draft balasan solutif dan terbitkan voucher maaf otomatis saat itu juga.",
                        impact: "Retensi Terjaga"
                    }
                ]
            }
        },
        {
            id: 'promo-engine',
            title: 'Promo Center',
            tag: 'Marketing',
            type: 'Dashboard',
            role: 'UX Researcher',
            timeline: '2 Months',
            route: '/case-study/promo-engine',
            previewImage: '/commerce_hero.png',
            iconName: 'Tag',
            details: { problem: 'The anxiety of a math error costing a month\'s profit.', system: 'Conflict-Free Promo Engine.', outcome: 'Zero accidental giveaways.' },
            details_id: { problem: 'Cemas salah hitung yang bikin rugi sebulan.', system: 'Mesin Promo Anti-Konflik.', outcome: 'Nol sedekah tak sengaja.' },
            title_id: 'Promo Center',
            tag_id: 'Pemasaran',
            caseStudy: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "No More Bad Math",
                        text: "Giving discounts is hard math. I built a calculator that stops you from accidentally giving away too much money or stacking coupons that shouldn't be together."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Operational Safeguards",
                        text: "Designed a conflict-free promotion engine for internal teams. Eliminated pricing errors and increased promo utilization significantly."
                    },
                    technical: {
                        label: "🤖 System",
                        title: "Dependency Logic",
                        text: "Mapped complex dependency trees to a visual UI. Implemented a logic layer that prevents overlapping rules, ensuring data integrity for pricing."
                    }
                },
                snapshot: {
                    tagline: "Turning a math headache into a 1-click discount engine.",
                    heroImage: "airy:radar"
                },
                context: {
                    client: "Internal Tool",
                    role: "I simplified the Logic",
                    timeline: "2 Months",
                    team: "Growth Team"
                },
                challenge: "Our promo engine was so complex that account managers were using calculators to double-check the logic. We were seeing errors where discounts were stacking uncontrollably, causing loss.",
                process: [
                    { title: "Logic Mapping", desc: "I mapped out the dependency tree of our discounts. It looked like a bowl of spaghetti.", image: "airy:network" },
                    { title: "The Fix", desc: "I proposed a 'Stacking Rule' UI: Distinct categories (Shipping, Product, Bundle) that could not overlap.", image: "airy:layers" }
                ],
                insights: [
                    { title: "Fear of Loss", desc: "Users were terrified of 'accidental giveaways'. I added a 'Potential Loss' calculator that showed the max burn before they published." }
                ],
                solution: [
                    { title: "Promo Simulator", desc: "A tool that let AMs test their promo against a fake cart to see the final price.", image: "airy:chart" },
                    { title: "Rule Engine", desc: "Visual toggles for 'Combinable' vs 'Exclusive' promos.", image: "airy:radar" }
                ],
                metrics: [
                    { label: "Utilization", value: "Improved Utilization" },
                    { label: "Errors", value: "Eliminated Errors" },
                    { label: "Sales Spikes", value: "Generated Sales Spikes" }
                ],
                learnings: "In complex systems, clarity is the best feature. If the user can't predict the outcome, the system is broken.",
                designProcess: [
                    {
                        type: "research",
                        title: "Logic Mapping",
                        desc: "I mapped out the dependency tree of our discounts. It looked like a bowl of spaghetti.",
                        title_id: "Mapping Logika",
                        desc_id: "Saya petakan pohon dependensi diskon kami. Bentuknya kayak benang kusut.",
                        image: "airy:network"
                    },
                    {
                        type: "insight",
                        title: "Fear of Loss",
                        desc: "Users were terrified of 'accidental giveaways'. I added a 'Potential Loss' calculator that showed the max burn before they published.",
                        title_id: "Takut Rugi",
                        desc_id: "User takut banget 'sedekah tak sengaja'. Saya tambah kalkulator 'Potensi Loss' yang nunjukkin maksimal uang terbakar sebelum mereka publish promo.",
                        image: "airy:chart"
                    },
                    {
                        type: "design",
                        title: "Promo Simulator",
                        desc: "A tool that let AMs test their promo against a fake cart to see the final price.",
                        title_id: "Simulator Promo",
                        desc_id: "Tool yang membiarkan AM ngetes promo mereka lawan keranjang palsu buat lihat harga akhir.",
                        image: "airy:ui"
                    },
                    {
                        type: "ship",
                        title: "Rule Engine",
                        desc: "Visual toggles for 'Combinable' vs 'Exclusive' promos.",
                        title_id: "Mesin Aturan",
                        desc_id: "Toggle visual untuk promo 'Bisa Digabung' vs 'Eksklusif'.",
                        image: "airy:radar"
                    },
                    {
                        type: "measure",
                        title: "Utilization",
                        desc: "Eliminated pricing errors and generated sales spikes through improved promo utilization.",
                        title_id: "Utilisasi",
                        desc_id: "Menghilangkan error harga dan menghasilkan lonjakan penjualan melalui penggunaan promo yang lebih baik.",
                        image: "airy:chart"
                    }
                ],
                aiHypotheses: [
                    {
                        tech: "Reinforcement Learning",
                        title: "Dynamic Discount Optimization",
                        desc: "Instead of fixed rules, the AI simulates 10,000 potential cart combinations to find the 'Sweet Spot' discount that maximizes volume without eroding margin. It accepts or rejects the promo for the user.",
                        impact: "Margin Protected"
                    },
                    {
                        tech: "Demand Forecasting & Time Series ML",
                        title: "Optimal Timing Predictor",
                        desc: "AI analyzes historical sales patterns and external factors (holidays, weather) to recommend when to launch promos for maximum impact.",
                        impact: "Higher ROI"
                    },
                    {
                        tech: "Causal Inference & A/B Testing AI",
                        title: "Cannibalization Detector",
                        desc: "Before approving promos, AI predicts if the discount will genuinely drive new sales or just cannibalize organic purchases, saving budget for true growth.",
                        impact: "Focused Spend"
                    },
                    {
                        tech: "Agentic Negotiation",
                        title: "Supplier-Retailer Haggling",
                        desc: "Retailers can 'make an offer' on bulk buys. An AI agent representing the Principal negotiates based on margin limits, closing deals without human approval.",
                        impact: "Clearance Rate Up"
                    },
                    {
                        tech: "Graph Neural Networks",
                        title: "Viral Loop Predictor",
                        desc: "AI identifies 'Key Opinion Leaders' (influential warungs) in the graph. It targets promos specifically to them, knowing they influence the purchasing behavior of neighbors.",
                        impact: "Organic Growth"
                    }
                ]
            },
            caseStudy_id: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "Anti Salah Hitung",
                        text: "Ngasih diskon itu itungan susah. Saya bikin kalkulator yang nyegah kamu sedekah kebanyakan atau numpuk kupon yang gak seharusnya bareng."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Pengaman Operasional",
                        text: "Mendesain mesin promo anti-konflik untuk tim internal. Menghilangkan error harga dan menaikkan penggunaan promo sebesar 25%."
                    },
                    technical: {
                        label: "🤖 Sistem",
                        title: "Logika Dependensi",
                        text: "Memetakan pohon dependensi kompleks ke UI visual. Implementasi layer logika yang mencegah aturan tumpang tindih, menjaga integritas harga."
                    }
                },
                snapshot: {
                    tagline: "Mengubah sakit kepala matematika jadi mesin diskon 1-klik.",
                    heroImage: "airy:radar"
                },
                context: {
                    client: "Internal Tool",
                    role: "Penyederhana Logika",
                    timeline: "2 Bulan",
                    team: "Tim Growth"
                },
                challenge: "Mesin promo kami sangat rumit sampai Account Manager (AM) harus pakai kalkulator buat cek logika. Sering terjadi diskon bertumpuk (stacking) yang bikin rugi bandar.",
                process: [
                    { title: "Mapping Logika", desc: "Saya petakan pohon dependensi diskon kami. Bentuknya kayak benang kusut.", image: "airy:network" },
                    { title: "Perbaikan", desc: "Saya usulkan UI 'Aturan Tumpuk': Kategori tegas (Ongkir, Produk, Bundling) yang tidak boleh tumpang tindih.", image: "airy:layers" }
                ],
                insights: [
                    { title: "Takut Rugi", desc: "User takut banget 'sedekah tak sengaja'. Saya tambah kalkulator 'Potensi Loss' yang nunjukkin maksimal uang terbakar sebelum mereka publish promo." }
                ],
                solution: [
                    { title: "Simulator Promo", desc: "Tool yang membiarkan AM ngetes promo mereka lawan keranjang palsu buat lihat harga akhir.", image: "airy:chart" },
                    { title: "Mesin Aturan", desc: "Toggle visual untuk promo 'Bisa Digabung' vs 'Eksklusif'.", image: "airy:radar" }
                ],
                metrics: [
                    { label: "Utilisasi", value: "Utilisasi Membaik" },
                    { label: "Error", value: "Nihil Error" },
                    { label: "Lonjakan Sales", value: "Lonjakan Penjualan" }
                ],
                learnings: "Di sistem kompleks, kejelasan adalah fitur terbaik. Kalau user nggak bisa prediksi hasilnya, sistemnya rusak.",
                aiHypotheses: [
                    {
                        tech: "Reinforcement Learning",
                        title: "Optimasi Diskon Dinamis",
                        desc: "Alih-alih aturan kaku, AI mensimulasikan 10.000 kombinasi keranjang untuk cari 'Sweet Spot' diskon yang maksimalkan volume tanpa menggerus margin. AI yang accept/reject promo user.",
                        impact: "Margin Terlindungi"
                    },
                    {
                        tech: "Demand Forecasting & Time Series ML",
                        title: "Prediktor Waktu Optimal",
                        desc: "AI menganalisis pola penjualan historis dan faktor eksternal (libur, cuaca) untuk merekomendasikan kapan meluncurkan promo untuk dampak maksimal.",
                        impact: "ROI Promo Meningkat"
                    },
                    {
                        tech: "Causal Inference & A/B Testing AI",
                        title: "Detektor Kanibalisasi",
                        desc: "Sebelum menyetujui promo, AI memprediksi apakah diskon akan benar-benar mendorong penjualan baru atau hanya kanibalisasi pembelian organik, menghemat budget untuk pertumbuhan nyata.",
                        impact: "Pemborosan Promo Berkurang"
                    },
                    {
                        tech: "Negosiasi Agentic",
                        title: "Tawar-menawar Supplier-Warung",
                        desc: "Warung bisa 'tawar harga' buat beli banyak. Agen AI mewakili Principal negosiasi berdasar batas margin, deal tanpa persetujuan manusia.",
                        impact: "Stok Lebih Terjaga"
                    },
                    {
                        tech: "Jaringan Saraf Graf",
                        title: "Prediktor Viral Loop",
                        desc: "AI identifikasi 'Tokoh Kunci' (warung berpengaruh) di graf. Dia target promo khusus ke mereka, tau mereka pengaruhi belanja tetangganya.",
                        impact: "Pertumbuhan Organik"
                    }
                ]
            }
        },
        {
            id: 'design-system-gudangada',
            title: 'GudangAda Design System',
            tag: 'Architecture',
            type: 'Design System',
            role: 'Design Ops',
            timeline: '1 Year',
            route: '/case-study/design-system-gudangada',
            previewImage: '/commerce_hero.png',
            iconName: 'Box',
            details: { problem: '50 shades of grey buttons created chaos.', system: 'A shared language for devs.', outcome: 'Peace due to consistency.' },
            details_id: { problem: '50 warna tombol abu-abu bikin kacau.', system: 'Bahasa bersama buat developer.', outcome: 'Damai karena konsistensi.' },
            title_id: 'GudangAda Design System',
            tag_id: 'Arsitektur',
            caseStudy: {
                locked: true,
                summaries: {
                    eli5: {
                        label: "👶 ELI5",
                        title: "Button Rulebook",
                        text: "We had too many different buttons. I made a rulebook so all buttons look the same and work perfectly, anywhere in the app."
                    },
                    recruiter: {
                        label: "👔 Recruiter",
                        title: "Scalable Design System",
                        text: "Established a comprehensive Design System to unify UI across products. Accelerated developer velocity and reduced technical debt."
                    },
                    technical: {
                        label: "🤖 System",
                        title: "Tokenized UI Library",
                        text: "Designed a tokenized UI kit synced with Figma tokens. Enforced atomic design principles to ensure consistency and maintainability across the codebase."
                    }
                },
                snapshot: {
                    tagline: "Ending the '50 Shades of Grey' button chaos.",
                    heroImage: "airy:architecture"
                },
                context: {
                    client: "Infrastructure",
                    role: "I built the System",
                    timeline: "1 Year",
                    team: "All Designers"
                },
                challenge: "We had 15 different shades of blue and 4 different date pickers. Every new feature took 3 days just to style. Our design debt was slowing us down.",
                process: [
                    { title: "Inventory", desc: "I collected every button in the app. Seeing them all in one place was the wake-up call management needed.", image: "airy:matrix" },
                    { title: "Atomic Tokens", desc: "I defined the core variables: Color, Spacing, Typography. If it wasn't a token, it didn't exist.", image: "airy:hierarchy" }
                ],
                insights: [
                    { title: "Dev First", desc: "I realized a design system isn't for designers; it's for developers. I wrote the documentation in their language (Props, API), not ours." }
                ],
                solution: [
                    { title: "UI Kit", desc: "A comprehensive Figma library with auto-layout components.", image: "airy:ui" },
                    { title: "Synced Components", desc: "A design-to-code workflow. Update Figma, sync to production.", image: "airy:cycle" }
                ],
                metrics: [
                    { label: "Dev Velocity", value: "Accelerated Development" },
                    { label: "Design Debt", value: "Eliminated Debt" },
                    { label: "Consistency", value: "Unified UI" }
                ],
                learnings: "A design system is a product, not a project. It needs maintenance, versioning, and a roadmap.",
                designProcess: [
                    {
                        type: "research",
                        title: "Inventory",
                        desc: "I collected every button in the app. Seeing them all in one place was the wake-up call management needed.",
                        title_id: "Inventaris",
                        desc_id: "Saya kumpulkan semua tombol di aplikasi. Melihat semuanya di satu tempat adalah tamparan yang dibutuhkan manajemen.",
                        image: "airy:matrix"
                    },
                    {
                        type: "insight",
                        title: "Dev First",
                        desc: "I realized a design system isn't for designers; it's for developers. I wrote the documentation in their language (Props, API), not ours.",
                        title_id: "Dev First",
                        desc_id: "Saya sadar design system bukan buat desainer; tapi buat developer. Saya tulis dokumentasi pakai bahasa mereka (Props, API), bukan bahasa desain.",
                        image: "airy:kanban"
                    },
                    {
                        type: "design",
                        title: "UI Kit",
                        desc: "A comprehensive Figma library with auto-layout components.",
                        title_id: "UI Kit",
                        desc_id: "Library Figma komprehensif dengan komponen auto-layout.",
                        image: "airy:ui"
                    },
                    {
                        type: "ship",
                        title: "Synced Components",
                        desc: "A design-to-code workflow. Update Figma, sync to production.",
                        title_id: "Library React",
                        desc_id: "Paket npm yang tersinkronisasi sempurna. Desain sekali, impor di mana saja.",
                        image: "airy:cycle"
                    },
                    {
                        type: "measure",
                        title: "Dev Velocity",
                        desc: "Accelerated development velocity and eliminated design debt through a unified UI.",
                        title_id: "Kecepatan Dev",
                        desc_id: "Mempercepat kecepatan pengembangan dan menghilangkan hutang desain melalui UI yang terpadu.",
                        image: "airy:chart"
                    }
                ],
                aiHypotheses: [
                    {
                        tech: "Multimodal LLM (Vision-to-Code)",
                        title: "Screenshot-to-Component",
                        desc: "Designers upload a screenshot of a new UI pattern. The AI scans it against our existing component library and outputs the exact React code using our Design System tokens.",
                        impact: "Instant Handoff"
                    },
                    {
                        tech: "Automated Accessibility Testing",
                        title: "A11y Guardian",
                        desc: "AI continuously scans all components for WCAG violations, color contrast issues, and screen reader compatibility, auto-generating fix suggestions.",
                        impact: "Fully Accessible"
                    },
                    {
                        tech: "Change Impact Analysis",
                        title: "Token Change Predictor",
                        desc: "Before updating a design token, AI simulates the visual impact across all screens and apps, showing previews of affected components to prevent breaking changes.",
                        impact: "Breaking Changes Eliminated"
                    },
                    {
                        tech: "Self-Healing UI",
                        title: "Runtime Error Shim",
                        desc: "If a component crashes in production, the Design System AI swaps it with a 'Safe Mode' fallback version instantly, keeping the app functional while alerting devs.",
                        impact: "Maximum Uptime"
                    },
                    {
                        tech: "Natural Language to Design",
                        title: "Figma Copilot",
                        desc: "Designers describe a flow: 'Login screen with OTP and social auth'. AI assembles the screen using existing atomic tokens, adhering strictly to spacing guidelines.",
                        impact: "Rapid Prototyping"
                    },
                    {
                        tech: "Multimodal LLM (Vision-to-Code)",
                        title: "Screenshot-to-Component",
                        desc: "Desainer upload screenshot pola UI baru. AI scan komponen itu lawan library yang ada dan output kode React persis pakai token Design System kami.",
                        impact: "Handoff Desain Instan"
                    },
                    {
                        tech: "Automated Accessibility Testing",
                        title: "A11y Guardian",
                        desc: "AI terus-menerus scan semua komponen untuk pelanggaran WCAG, masalah kontras warna, dan kompatibilitas screen reader, auto-generate saran perbaikan.",
                        impact: "Aksesibilitas Penuh"
                    },
                    {
                        tech: "Change Impact Analysis",
                        title: "Prediktor Perubahan Token",
                        desc: "Sebelum update design token, AI simulasikan dampak visual di semua layar dan aplikasi, menampilkan preview komponen yang terpengaruh untuk mencegah breaking changes.",
                        impact: "Breaking Changes Dihapus"
                    },
                    {
                        tech: "UI Sembuh Sendiri",
                        title: "Penambal Error Runtime",
                        desc: "Kalau komponen crash di produksi, AI Design System tukar sama versi cadangan 'Safe Mode' instan, jaga aplikasi jalan sambil lapor dev.",
                        impact: "Uptime Maksimal"
                    },
                    {
                        tech: "Bahasa Natural ke Desain",
                        title: "Copilot Figma",
                        desc: "Desainer jelasin flow: 'Layar login pakai OTP dan sosmed'. AI rakit layar pakai token atomik yang ada, patuh banget sama aturan spasi.",
                        impact: "Prototyping Cepat"
                    }
                ]
            }
        },
    ]
};
