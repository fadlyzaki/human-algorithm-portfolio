export const SIDE_PROJECTS = [
    {
        id: 'interactive-workbook',
        title: 'Interactive Workbook',
        subtitle: 'Bimbel Geera Platform',
        desc: 'When a student feels lost, they stop raising their hand. This tool makes their struggle visible before they quit.',
        tldr: "Turning the silence of a struggling student into real-time data for teachers.",
        tldr_id: "Mengubah kebisuan siswa yang tertinggal menjadi data real-time bagi guru.",
        desc_id: "Saat siswa merasa tertinggal, mereka diam. Tool ini membuat kesulitan mereka terlihat sebelum mereka menyerah.",
        title_id: 'Buku Kerja Interaktif',
        subtitle_id: 'Platform Bimbel Geera',
        stack: ["React", "Firebase", "Tailwind CSS"],
        links: { demo: "https://buku-kerja-interaktif.web.app/", repo: "github.com/fadlyzaki/interactive-workbook" },
        iconName: 'BookOpen',
        featured: true,
        type: 'Education',
        date: "August 2025",
        coverImage: "/interactive-workbook-cover.png",
        modules: [
            {
                title: "The Silent Crisis",
                content: "In every classroom, there is a student who knows the answer but stays silent. They are terrified of pronunciation mistakes, of the giggles from the back row, of being 'seen' failing.\n\nTraditional workbooks don't help. They are silent, static, and lonely. They don't listen, and they certainly don't encourage."
            },
            {
                title: "Why Raisa Stopped Raising Her Hand",
                content: "We followed 'Raisa' (a persona based on real student interviews). She loves English songs but hates English class.\n\n• The Fear: \"If I say it wrong, they will laugh.\"\n• The Gap: She practices in the shower (safe) but freezes in class (unsafe).\n• The need: A bridge between the safety of solitude and the pressure of performance."
            },
            {
                title: "A Safe Space to Stutter",
                content: "We built a 'Digital Practice Room' where mistakes don't have an audience.\n\n• Sing Along Mode: Learning through melody bypasses the anxiety center of the brain.\n• Private Recording: Students record their voice, listen back, and self-correct before the teacher ever hears it.\n• The Outcome: It's not about perfect grammar; it's about the courage to speak."
            },
            {
                title: "Teacher as a Guide, Not a Grader",
                content: "For teachers, the dashboard isn't a grade book—it's a 'Confidence Monitor'.\n\nThey can see who is trying (Streak), who is struggling (repeated attempts), and intervene with encouragement rather than red ink. We turned 'Homework' into 'Home Practice'."
            },
            {
                title: "Technical Empathy",
                content: "We chose Firebase Realtime Database not for its speed, but for its feedback loop. When a student completes a task, the feedback is instant. That millisecond of 'Ding! You did it!' is the dopamine hit they need to keep going."
            }
        ],
        modules_id: [
            {
                title: "Krisis Kebisuan",
                content: "Di setiap kelas, ada siswa yang tahu jawabannya tapi memilih diam. Mereka takut salah ucap, takut ditertawakan teman belakang, takut 'terlihat' gagal.\n\nLKS tradisional tidak membantu. Mereka diam, statis, dan sepi. Mereka tidak mendengar, dan pastinya tidak menyemangati."
            },
            {
                title: "Kenapa Raisa Berhenti Tunjuk Tangan",
                content: "Kami mengikuti persona 'Raisa'. Dia hafal semua lagu Taylor Swift tapi benci pelajaran Bahasa Inggris.\n\n• Ketakutan: \"Kalau aku salah ngomong, mereka bakal ketawa.\"\n• Kesenjangan: Dia berlatih di kamar mandi (aman) tapi membeku di kelas (tidak aman).\n• Kebutuhan: Sebuah jembatan antara keamanan kesendirian dan tekanan performa."
            },
            {
                title: "Ruang Aman untuk Terbata-bata",
                content: "Kami membangun 'Ruang Latihan Digital' di mana kesalahan tidak punya penonton.\n\n• Mode Sing Along: Belajar lewat melodi memintas pusat kecemasan di otak.\n• Rekaman Pribadi: Siswa merekam suara, dengar ulang, dan koreksi sendiri sebelum guru mendengarnya.\n• Hasilnya: Bukan soal grammar sempurna; tapi soal keberanian untuk bersuara."
            },
            {
                title: "Guru sebagai Pemandu, Bukan Penilai",
                content: "Bagi guru, dashboard ini bukan buku nilai—ini 'Monitor Kepercayaan Diri'.\n\nMereka bisa lihat siapa yang mencoba (Streak), siapa yang berjuang (percobaan berulang), dan masuk dengan dorongan semangat, bukan tinta merah."
            },
            {
                title: "Empati Teknis",
                content: "Kami pilih Firebase Realtime Database bukan karena kecepatannya, tapi karena loop umpan baliknya. Saat siswa selesai tugas, feedback-nya instan. Milidetik 'Ting! Kamu bisa!' itu adalah suntikan dopamin yang mereka butuhkan untuk lanjut."
            }
        ]
    },
    {
        id: 'year-in-review',
        title: 'Year in Review',
        subtitle: 'Manual Data Visualization',
        desc: 'Your memories shouldn\'t be held hostage by an algorithm. A manual celebration of the life you actually lived.',
        tldr: "Reclaiming the joy of 'remembering' from the automated feed.",
        tldr_id: "Merebut kembali kegembiraan 'mengenang' dari feed otomatis.",
        desc_id: "Kenanganmu tak seharusnya disandera algoritma. Perayaan manual atas hidup yang benar-benar kamu jalani.",
        title_id: 'Year in Review',
        subtitle_id: 'Visualisasi Data Manual',
        stack: ["React", "TypeScript", "Canvas API"],
        links: { demo: "https://year-in-review-jak.vercel.app/", repo: "github.com/fadlyzaki/manual-wrapped" },
        iconName: 'Calendar',
        type: 'DataViz',
        date: "December 2025",
        coverImage: "/year-in-review-cover.png",
        modules: [
            {
                title: "The Algorithm is Not Your Diarist",
                content: "Spotify Wrapped is fun, but it's a corporate summary of your consumption, not your creation. It tells you what you bought, watched, and listened to. It doesn't know about the breakup, the new puppy, or the night you finally quit your toxic job.\n\nWe outsourced our memories to platforms that optimize for engagement, not reflection."
            },
            {
                title: "Designing for Nostalgia",
                content: "We built a tool that asks: \"What actually happened?\"\n\n• The Input: A simple, manual entry form. No API connections. You have to remember it yourself.\n• The Friction: The act of typing is the point. It forces reflection.\n• The Output: A beautiful, shareable 'story' card that looks like it came from a major app, but contains deeply personal data."
            },
            {
                title: "Visualizing the Invisible",
                content: "How do you visualize 'Heartbreak'? Or 'Growth'?\n\nWe created a series of abstract 'Aura Themes'.\n• Neon: For a high-energy, chaotic year.\n• Blueprint: For a year of building and structure.\n• Soft Focus: For a year of healing and quiet."
            },
            {
                title: "The 'Share' Paradox",
                content: "People want to be private, but they love to perform.\n\nWe added a 'Screenshot Mode' that strips away the UI chrome, leaving only the art. It allows users to perform their vulnerability on Instagram Stories, reclaiming the 'Wrapped' aesthetic for their own human narrative."
            }
        ],
        modules_id: [
            {
                title: "Algoritma Bukan Penulis Diarimu",
                content: "Spotify Wrapped itu seru, tapi itu sekadar rangkuman korporat dari apa yang kamu konsumsi. Mereka tahu lagumu, tapi mereka tidak tahu soal putus cinta, anjing barumu, atau malam di mana kamu akhirnya resign dari kerjaan toxic.\n\nKita menyerahkan ingatan kita pada platform yang mengurusi engagement, bukan refleksi diri."
            },
            {
                title: "Mendesain Nostalgia",
                content: "Kami membuat alat yang bertanya: \"Apa yang sebenarnya terjadi?\"\n\n• Input: Form manual sederhana. Tanpa koneksi API. Kamu harus mengingatnya sendiri.\n• Friksi: Proses mengetik itulah intinya. Itu memaksanmu berefleksi.\n• Output: Kartu 'story' cantik yang terlihat seperti buatan app besar, tapi berisi data personal yang intim."
            },
            {
                title: "Memvisualisasikan yang Tak Terlihat",
                content: "Gimana cara visualisasi 'Patah Hati'? Atau 'Pertumbuhan'?\n\nKami buat seri 'Tema Aura' abstrak.\n• Neon: Untuk tahun yang penuh energi dan chaos.\n• Blueprint: Untuk tahun membangun struktur.\n• Soft Focus: Untuk tahun penyembuhan dan ketenangan."
            },
            {
                title: "Paradoks 'Share'",
                content: "Orang ingin privasi, tapi suka 'tampil'.\n\nKami tambahkan 'Screenshot Mode' yang menyembunyikan tombol UI, menyisakan hanya seninya. Ini memvalidasi pengguna untuk memamerkan kerentanan mereka di Instagram Stories, merebut kembali estetika 'Wrapped' untuk narasi manusiawi mereka sendiri."
            }
        ]
    },
    {
        id: 'price-lock',
        title: 'Price Lock',
        subtitle: 'Fintech Feature for OTA',
        desc: 'The specific anxiety of watching a flight price jump $50 while you wait for your boss\'s approval.',
        tldr: "We built a 'pause button' on inflation for anxious travelers.",
        tldr_id: "Kami membuat tombol 'pause' untuk inflasi bagi traveler yang cemas.",
        desc_id: "Kecemasan spesifik saat melihat tiket naik 500rb sambil menunggu izin cuti bos.",
        title_id: 'Price Lock',
        subtitle_id: 'Fitur Fintech untuk OTA',
        stack: ["React", "Python (Algorithm Logic)", "Fintech Integration"],
        links: {
            demo: "https://gemini.google.com/share/e12fc1c0dab2",
            repo: "#"
        },
        iconName: 'Shield',
        featured: true,
        type: 'Fintech Lock',
        date: "February 2026",
        coverImage: "/price-lock-cover.png",
        modules: [
            {
                title: "The $50 Heartbeat Skip",
                content: "You find the perfect flight to Bali. It's $100. You text your friends. They take 3 hours to reply. You refresh the page. It's now $150.\n\nThat physical feeling of regret? That's what we are designing against. In a world of dynamic pricing, the user is always the loser. We wanted to give them a weapon."
            },
            {
                title: "The Pause Button",
                content: "Price Lock is not a fintech product; it's an anxiety medication.\n\n• The Promise: \"Pause the world for 24 hours.\"\n• The Mechanism: A small fee ($2) to freeze the algorithm.\n• The Psychology: It shifts the user from a state of Panic (\"I must buy now!\") to a state of Control (\"I have time to decide.\")."
            },
            {
                title: "Buying Time, Not Tickets",
                content: "We discovered that users weren't paying for the ticket; they were paying for the *option* to buy the ticket.\n\nThey were buying the ability to wait for their paycheck. They were buying the ability to ask their boss for leave without risking a price hike. They were buying peace of mind."
            },
            {
                title: "The Honest Algorithm",
                content: "To build trust, we couldn't just guess the fee. We showed our work.\n\n\"AI Prediction: 85% chance this price rises tomorrow.\"\n\nBy being transparent about the volatility, the fee stopped feeling like an extra cost and started feeling like insurance. We turned a 'Hidden Fee' into a 'Hero Feature'."
            }
        ],
        modules_id: [
            {
                title: "Jantung Copot Karena 500 Ribu",
                content: "Kamu nemu tiket ke Bali harga 1 juta. Kamu chat temen-temen di grup. Mereka balesnya 3 jam kemudian. Kamu refresh halamannya. Harganya sekarang 1,5 juta.\n\nPerasaan nyesek di dada itu? Itu yang kami desain solusinya. Di dunia 'dynamic pricing', user selalu jadi pihak yang kalah. Kami ingin memberi mereka senjata."
            },
            {
                title: "Tombol Pause",
                content: "Price Lock bukan produk fintech; ini obat anti-cemas.\n\n• Janjinya: \"Pause dunia selama 24 jam.\"\n• Mekanismenya: Bayar receh (20rb) buat bekukan algoritma.\n• Psikologinya: Mengubah user dari mode Panik (\"Harus beli sekarang!\") ke mode Kontrol (\"Gue punya waktu buat mikir.\")."
            },
            {
                title: "Beli Waktu, Bukan Tiket",
                content: "Kami menemukan bahwa user itu sebenarnya bukan bayar buat tiketnya; mereka bayar buat *opsi* untuk membeli tiketnya.\n\nMereka membeli kemampuan buat nunggu gajian. Mereka membeli kemampuan buat minta izin cuti ke bos tanpa takut harga naik. Mereka membeli ketenangan pikiran."
            },
            {
                title: "Algoritma yang Jujur",
                content: "Untuk membangun trust, kami gak bisa asal nembak harga. Kami buka dapur kami.\n\n\"Prediksi AI: 85% peluang harga naik besok.\"\n\nDengan transparan soal volatilitas, biaya lock ini berhenti terasa sebagai 'biaya tambahan' dan mulai terasa sebagai 'asuransi'. Kami mengubah 'Hidden Fee' jadi 'Hero Feature'."
            }
        ]
    },
    {
        id: 'project-kinship',
        title: 'Project Kinship',
        subtitle: 'Social Logistics & Gifting',
        desc: 'Transferring money is easy; showing care is hard. Helping the diaspora send a meaningful meal home.',
        tldr: "Bridging the emotional distance between 'Sender' and 'Receiver' in the remittance flow.",
        tldr_id: "Menjembatani jarak emosional antara 'Pengirim' dan 'Penerima' dalam arus remitansi.",
        desc_id: "Transfer uang itu gampang; menunjukkan kepedulian itu susah. Bantu perantau kirim makanan penuh makna.",
        title_id: 'Project Kinship',
        subtitle_id: 'Logistik Sosial & Hadiah',
        stack: ["React", "LMM / AI", "Fintech (Remittance)"],
        links: {
            demo: "https://gemini.google.com/share/bd973765947a",
            repo: "#"
        },
        iconName: 'Gift',
        featured: true,
        type: 'Logistics Kinship',
        date: "February 2026",
        coverImage: "/project-kinship-cover.png",
        modules: [
            {
                title: "Why Cash Feels Cold",
                content: "Every month, millions of migrant workers send money home. It's a transaction of love, but the interface is cold, sterile, and purely numeric.\n\nMoney says \"I support you,\" but it doesn't say \"I miss you.\"\n\nWe wanted to build a remittance tool that carried the warmth of the hand that sent it."
            },
            {
                title: "Delivering Warmth, Not Just Funds",
                content: "Kinship isn't about sending Rupiah; it's about sending 'Care Packages'.\n\n• The Context: Instead of just wiring $50, the user sends a 'Sunday Dinner' (a curated basket of groceries).\n• The Bridge: The sender (in the city) navigates the village map remotely. They become present in their family's daily life, even from 500km away."
            },
            {
                title: "The Zero-UI Receiver",
                content: "The harsh reality: The people who need care the most often have the oldest phones.\n\nWe built a 'Zero-UI' receiver experience.\n• No App Install: The receiver gets a WhatsApp link.\n• SMS Fallback: If data fails, the updates arrive via SMS.\n• Empathy-First: The driver is trained not just to drop off a package, but to deliver a greeting."
            },
            {
                title: "Closing the Loop",
                content: "A transaction ends when money arrives. A relationship continues.\n\nWe added a 'Video Receipt' feature. When the package arrives, the driver records the family's reaction (with consent). The sender doesn't just see a 'delivered' checkmark; they see their mother smiling."
            }
        ],
        modules_id: [
            {
                title: "Kenapa Uang Tunai Terasa Dingin",
                content: "Setiap bulan, jutaan perantau kirim uang ke kampung. Itu transaksi penuh cinta, tapi antarmukanya dingin, steril, dan cuma angka.\n\nUang bilang \"Aku support kamu,\" tapi dia gak bilang \"Aku kangen kamu.\"\n\nKami ingin bangun alat remitansi yang membawa kehangatan tangan yang mengirimnya."
            },
            {
                title: "Mengirim Kehangatan, Bukan Cuma Dana",
                content: "Kinship bukan soal kirim Rupiah; ini soal kirim 'Paket Perhatian'.\n\n• Konteks: Daripada cuma transfer 500rb, user kirim 'Makan Malam Minggu' (paket sembako terkurasi).\n• Jembatan: Pengirim (di kota) menavigasi peta kampung dari jauh. Mereka hadir di keseharian keluarga, walau jarak 500km."
            },
            {
                title: "Penerima Tanpa-UI",
                content: "Realita pahit: Orang yang paling butuh perhatian seringkali punya HP paling jadul.\n\nKami bangun pengalaman penerima 'Zero-UI'.\n• Tanpa Install App: Penerima dapat link WhatsApp.\n• Fallback SMS: Kalau data mati, update masuk lewat SMS.\n• Empati-Dulu: Driver dilatih bukan cuma lempar paket, tapi sampaikan salam."
            },
            {
                title: "Menutup Lingkaran",
                content: "Transaksi berakhir saat uang sampai. Hubungan berlanjut.\n\nKami tambah fitur 'Resi Video'. Saat paket sampai, driver rekam reaksi keluarga (dengan izin). Pengirim gak cuma lihat centang 'delivered'; mereka lihat Ibu mereka tersenyum."
            }
        ]
    },
    {
        id: 'filter-me',
        title: 'FilterMe',
        subtitle: 'AR Commerce Experiment',
        desc: 'The moment of hesitation before clicking "Buy"—"Will this actually look good on me?"',
        tldr: "Using AR to kill the 'Trust Gap' in online cosmetics shopping.",
        tldr_id: "Menggunakan AR untuk membunuh 'Celah Kepercayaan' dalam belanja kosmetik online.",
        desc_id: "Momen keraguan sebelum klik 'Beli'—'Ini beneran bagus gak ya di muka gue?'",
        title_id: 'FilterMe',
        subtitle_id: 'Eksperimen AR Commerce',
        stack: ["Sketch", "Principle", "AR Design"],
        links: { demo: "https://uxdesign.cc/enhancing-online-shopping-experience-fbdbd76438e8", repo: "#" },
        iconName: 'Camera',
        featured: false,
        type: 'AR Camera',
        date: "January 2018",
        coverImage: "/filterme-cover.png",
        modules: [
            {
                title: "The Mirror Test",
                content: "We've all been there: You see sunglasses online. They look cool on the model. You buy them. They arrive. You put them on. You look ridiculous.\n\nThis gap between 'Pixel Perfection' and 'Physical Reality' is why 40% of fashion e-commerce is returned. It's a trust deficit."
            },
            {
                title: "Trying It On (Digitally)",
                content: "We asked: Why do we trust a mirror? Because it moves with us.\n\nFilterMe isn't a catalog; it's a mirror. using AR, we let users 'wear' the product before they buy it. It changes the question from \"Is this product good?\" to \"Is this product good *on me*?\""
            },
            {
                title: "The Social Proof",
                content: "Shopping is inherently social. \"Does this look good?\" is a question we ask friends, not algorithms.\n\nWe integrated 'Share to Story'. Users could snap a selfie wearing the AR lipstick, post it to Instagram, and get real-time validation from their friends before spending a dime."
            },
            {
                title: "The Limits of Tech",
                content: "We learned a hard lesson: Fun does not equal Trust.\n\nUsers loved playing with the filters (Engagement), but they still hesitated to buy (Conversion). Why? Because they didn't trust the color accuracy of their phone screen.\n\nConclusion: AR can solve for 'Shape' and 'Vibe', but it struggles to solve for 'Texture' and 'Shade'."
            }
        ],
        modules_id: [
            {
                title: "Ujian Cermin",
                content: "Kita semua pernah mengalaminya: Lihat kacamata online. Keren di model. Beli. Sampai rumah. Pakai. Kelihatan konyol.\n\nJarak antara 'Kesempurnaan Piksel' dan 'Realitas Fisik' inilah alasan kenapa 40% barang fashion dikembalikan. Ini adalah defisit kepercayaan."
            },
            {
                title: "Mencoba Secara Digital",
                content: "Kami bertanya: Kenapa kita percaya cermin? Karena dia bergerak mengikuti kita.\n\nFilterMe bukan katalog; ini cermin. Pakai AR, kami biarkan user 'memakai' produk sebelum beli. Ini mengubah pertanyaan dari \"Produk ini bagus gak?\" jadi \"Produk ini bagus gak *di gue*?\""
            },
            {
                title: "Bukti Sosial",
                content: "Belanja itu kegiatan sosial. \"Ini cocok gak?\" adalah pertanyaan buat teman, bukan algoritma.\n\nKami integrasikan 'Share to Story'. User bisa selfie pakai lipstik AR, post ke Instagram, dan dapat validasi real-time dari teman sebelum keluar uang."
            },
            {
                title: "Batas Teknologi",
                content: "Kami belajar hal sulit: Seru bukan berarti Percaya.\n\nUser suka main filter (Engagement), tapi masih ragu beli (Konversi). Kenapa? Karena mereka gak percaya akurasi warna layar HP mereka.\n\nKesimpulan: AR bisa selesaikan masalah 'Bentuk' dan 'Vibe', tapi kesulitan selesaikan 'Tekstur' dan 'Warna Asli'."
            }
        ]
    },
    {
        id: 'grab-merantau',
        title: 'Grab Merantau',
        subtitle: 'Cross-City Emotional Commerce',
        desc: 'Cross-city emotional wiring for the diaspora.',
        desc_id: 'Koneksi emosional antar-kota bagi para perantau.',
        tldr: "Empowering the diaspora to care for family remotely via contextual food delivery.",
        tldr_id: "Memberdayakan perantau untuk merawat keluarga dari jauh lewat pengiriman makanan kontekstual.",
        sections: {
            challenge: "Sending food to parents in another city feels transactional. It lacks warmth and context.",
            approach: "Designed 'Merantau Mode' with an AI Concierge to recommend food based on texture (e.g., 'Soft meat for mom') and attach voice notes."
        },
        sections_id: {
            challenge: "Kirim makanan ke orang tua di luar kota rasanya transaksional banget. Kurang hangat dan konteks.",
            approach: "Mendesain 'Mode Merantau' dengan AI Concierge buat rekomendasi makanan berdasarkan tekstur (misal: 'Daging empuk buat Ibu') dan lampirkan voice note."
        },
        stack: ["UX Research", "Figma", "AI Concept"],
        links: { demo: "#", repo: "#" },
        iconName: 'Heart',
        type: 'Service Delivery',
        hidden: true,
        featured: false
    },
    {
        id: 'flood-alert',
        title: 'Flood Alert',
        subtitle: 'Geospatial Disaster Response',
        desc: 'Zero-blindspot alerting for Jakarta floods.',
        desc_id: 'Peringatan tanpa blindspot untuk banjir Jakarta.',
        tldr: "A real-time geospatial platform for monsoon season safety.",
        tldr_id: "Platform geospasial real-time untuk keselamatan musim hujan.",
        sections: {
            challenge: "Citizens often get flood alerts *after* water enters their homes. Standard routes often lead through other flooded areas.",
            approach: "Integrates BMKG/PetaBencana data for zero-blindspot alerting and safety-aware evacuation routing using PostGIS queries."
        },
        sections_id: {
            challenge: "Warga sering dapet info banjir *setelah* air masuk rumah. Rute standar sering malah ngarahin ke jalan banjir.",
            approach: "Integrasi data BMKG/PetaBencana buat peringatan tanpa blindspot dan rute evakuasi aman pakai query PostGIS."
        },
        stack: ["Node.js", "PostGIS", "Flutter"],
        links: { demo: "flood.fadly.design", repo: "github.com/fadlyzaki/flood-alert" },
        iconName: 'AlertTriangle',
        type: 'Service Map',
        hidden: true,
        featured: false
    },
    {
        id: 'procurement',
        title: 'Procurement Reform',
        subtitle: 'Civic Tech Action Plan',
        desc: 'A technical framework for government transparency.',
        desc_id: 'Kerangka kerja teknis untuk transparansi pemerintah.',
        tldr: "Empowering IT professionals to reform Indonesian government procurement.",
        tldr_id: "Memberdayakan profesional IT untuk mereformasi pengadaan pemerintah Indonesia.",
        sections: {
            challenge: "Government procurement is plagued by opacity. Jakarta-centric apps fail in rural Papua due to the 'Archipelago Effect'.",
            approach: "Combines 'Red Flag' data scraping with Offline-First PWA architectures to ensure accessibility in remote areas."
        },
        sections_id: {
            challenge: "Pengadaan pemerintah penuh ketertutupan. Aplikasi yang Jakarta-sentris gagal di pelosok Papua karena 'Efek Kepulauan'.",
            approach: "Gabungin scraping data 'Red Flag' dengan arsitektur PWA Offline-First biar bisa diakses di daerah terpencil."
        },
        stack: ["Python", "Pandas", "PWA"],
        links: { demo: "medium.com/procurement", repo: "github.com/fadlyzaki/procurement" },
        iconName: 'FileText',
        type: 'Dashboard Platform',
        hidden: true,
        featured: false
    },
    {
        id: 'agency-pivot',
        title: 'The "Agency" Pivot',
        subtitle: 'Redesigning Algorithms',
        desc: 'We stopped treating users like dopamine junkies and started treating them like pilots.',
        tldr: "Giving the steering wheel back to your own attention span.",
        tldr_id: "Mengembalikan kemudi setir kepada atensi Anda sendiri.",
        desc_id: "Kami berhenti memperlakukan user seperti pecandu dopamin dan mulai memperlakukan mereka sebagai pilot.",
        sections_id: {
            challenge: "Medsos sekarang cuma mau nyuri perhatian kita. Akibatnya user gak punya kendali, cuma dikasih konten sampah biar terus scroll.",
            challenge: "Medsos sekarang cuma mau nyuri perhatian kita. Akibatnya user gak punya kendali, cuma dikasih konten sampah biar terus scroll.",
            approach: "Kita sadar user itu mood-nya berubah-ubah. Jadi kita pindahin kontrolnya langsung ke Feed, pake cara yang halus (Stealth UX)."
        },
        stack: ["UX Research", "Behavioral Psych", "Figma"],
        links: { demo: "#", repo: "#" },
        iconName: 'Brain',
        type: 'Case Study',
        date: "March 2026",
        coverImage: "/about-portrait-new.jpg",
        modules_id: [
            {
                title: "Protagonis: Berkencan dengan Sarah",
                content: "Sarah adalah Desainer Grafis berusia 24 tahun. Dia tumbuh besar dengan Instagram. Dia ingat ketika feed masih kronologis dan isinya hanya teman-temannya.\n\nSituasi (2025):\nSarah membuka aplikasi sosial favoritnya. Dia langsung disambut dengan:\n• Iklan pemutih gigi dropship.\n• Video viral orang asing berteriak tentang politik.\n• Gambar kucing di luar angkasa buatan AI yang agak meresahkan.\n\nKonflik:\nDia menggulir selama 10 menit. Dia merasa cemas sekaligus bosan. Tiba-tiba, dia mendapat pesan dari sahabatnya, Mike: \"Kamu lihat foto tunanganku? Aku posting kemarin!\"\nSarah belum melihatnya. Algoritma memutuskan dia lebih suka \"Kucing Angkasa\" daripada Mike. Dia menutup aplikasi, merasakan kesepian digital.\n\nMasalah:\nMedia sosial telah beralih dari Menghubungkan Orang menjadi Retensi Perhatian. Ini menghilangkan agensi pengguna, menciptakan \"Feed Sampah\" yang memprioritaskan dopamin murah."
            },
            {
                title: "Percobaan Pertama: Solusi \"Kokpit\"",
                content: "Hipotesis: Jika pengguna membenci algoritma, biarkan mereka membangunnya kembali secara manual.\n\nKami merancang \"Panel Kontrol Algoritma.\" Itu adalah layar pengaturan yang penuh dengan slider, persentase, dan tombol beralih. Kami memberi Sarah kunci kerajaan. Dia bisa mengatur \"Politik\" ke 0% dan \"Teman\" ke 100%.\n\nUji Pengguna:\nSarah membuka menu Pengaturan. Dia menatap 12 slider yang berbeda. Dia mengerutkan kening.\n\"Ini terlihat seperti pekerjaan rumah,\" katanya. \"Saya tidak ingin mengkalibrasi feed saya seperti insinyur suara. Saya hanya ingin isinya bagus.\"\n\nKegagalan:\nKami jatuh ke dalam Perangkap Rekayasa. Kami menyamakan \"Kontrol\" dengan \"Kompleksitas.\" Pengguna menginginkan agensi, tetapi mereka tidak menginginkan friksi. Panel Kontrol itu kuat, tetapi terlalu tersembunyi dan berat untuk digunakan setiap hari."
            },
            {
                title: "Pivot: Dari \"Pengaturan\" ke \"Vibe\"",
                content: "Wawasan:\nKami menyadari bahwa pengguna tidak memiliki preferensi statis (misalnya, \"Saya selalu benci video\"). Mereka memiliki Mood Kontekstual.\n• Kadang Sarah ingin merusak otaknya dengan video viral (\"Doom Scroll\").\n• Kadang dia hanya ingin melihat apa yang dilakukan Mike (\"Update\").\n\nKami perlu memindahkan kontrol dari Menu Pengaturan ke Feed itu sendiri, tetapi tanpa membuat antarmuka berantakan."
            },
            {
                title: "Solusi: Stealth UX & Desain \"Mode\"",
                content: "Kami membangun Antarmuka SocialFlux Kompak.\n\nA. Mode Switcher \"Stealth\"\nAlih-alih deretan tombol yang memakan ruang layar, kami memanfaatkan model mental UI yang ada.\nDesain: Kami mengubah teks \"Untuk Anda\" di kiri atas menjadi menu dropdown.\nCerita: Sarah membuka aplikasi. Defaultnya ke \"Untuk Anda\" (campuran standar). Dia merasa kewalahan. Dia mengetuk header dan memilih \"Hanya Teman.\"\nHasilnya: Seketika, kebisingan lenyap. Tidak ada iklan, tidak ada AI, tidak ada orang asing. Hanya foto tunangan Mike.\n\nB. \"Mode Santai\"\nSarah ingin menjelajah, tapi dia lelah dengan video berteriak energi tinggi.\nDesain: Dia memilih \"Mode Santai\" dari dropdown.\nLogika: Mode ini menyaring audio BPM tinggi, potongan cepat, dan tag \"viral/hype\" di backend. Ini memprioritaskan foto, alam, dan seni.\nHasilnya: Feed menjadi majalah digital, bukan mesin slot.\n\nC. \"Micro-Blocking\" Kontekstual\nSarah melihat gambar selebriti buatan AI yang terasa palsu.\nDesain: Kami menambahkan tag kecil berbentuk pil abu-abu di bagian bawah posting: #AI, #Celebrity.\nInteraksi: Sarah tidak perlu mencari tombol \"Laporkan\". Dia cukup mengetuk tag #AI. Aplikasi bertanya: \"Sembunyikan konten seperti ini?\" Dia mengklik Ya.\nHasilnya: Dia telah melatih algoritmanya dalam 2 detik tanpa meninggalkan feed."
            },
            {
                title: "Hasil: Mengapa Ini Berhasil",
                content: "Dengan beralih dari \"Panel Kontrol\" (Prototipe 1) ke \"Feed Terpadu\" (Prototipe 3), kami mencapai hal berikut:\n\nSkor Kepercayaan ⬆️ Peningkatatn Tinggi\nPengguna berhenti merasa \"dimanipulasi\" karena kontrol terlihat dan responsif.\n\nDurasi Sesi ↔️ Stabil\nPengguna menghabiskan waktu yang sama, tetapi melaporkan merasa 50% lebih sedikit \"bersalah\" setelahnya.\n\nInteraksi Teman ⬆️ 300% Peningkatan\nMode \"Hanya Teman\" menghilangkan hambatan untuk menemukan orang-orang terkasih."
            },
            {
                title: "Kesimpulan",
                content: "Masa depan media sosial bukan tentang AI yang lebih baik memprediksi apa yang Anda inginkan. Ini tentang AI yang mendengarkan apa yang Anda katakan.\n\nSarah tidak butuh aplikasi baru. Dia hanya butuh aplikasi saat ini untuk cukup menghormatinya untuk menyerahkan kemudi.\n\n\"Teknologi seharusnya menjadi sepeda untuk pikiran, bukan ban berjalan untuk mata.\""
            }
        ],

        modules: [
            {
                title: "The Protagonist: Meet Sarah",
                content: "Sarah is a 24-year-old Graphic Designer. She grew up on Instagram. She remembers when the feed was chronological and just her friends.\n\nThe Situation (2025):\nSarah opens her favorite social app. She is immediately hit with:\n• An ad for drop-shipped teeth whitener.\n• A viral video of a stranger screaming about politics.\n• An AI-generated image of a cat in space that looks vaguely unsettling.\n\nThe Conflict:\nShe scrolls for 10 minutes. She feels anxious and bored simultaneously. Suddenly, she gets a text from her best friend, Mike: \"Did you see my engagement photos? I posted them yesterday!\"\nSarah hadn't seen them. The algorithm decided she liked \"Space Cats\" more than Mike. She closes the app, feeling a distinct sense of digital loneliness.\n\nThe Problem Statement:\nSocial media has transitioned from Connecting People to Retaining Attention. In doing so, it has stripped the user of agency, creating a \"Feed of Slop\" that prioritizes cheap dopamine over meaningful connection."
            },
            {
                title: "The First Attempt: The \"Cockpit\" Solution",
                content: "The Hypothesis: If users hate the algorithm, let them rebuild it manually.\n\nWe designed the \"Algorithm Control Panel.\" It was a settings screen filled with sliders, percentages, and toggles. We gave Sarah the keys to the kingdom. She could set \"Politics\" to 0% and \"Friends\" to 100%.\n\nThe User Test:\nSarah opened the Settings menu. She stared at the 12 different sliders. She frowned.\n\"This looks like work,\" she said. \"I don't want to calibrate my feed like a sound engineer. I just want it to be good.\"\n\nThe Failure:\nWe fell into the Engineering Trap. We confused \"Control\" with \"Complexity.\" Users want agency, but they don't want friction. The Control Panel was powerful, but it was too buried and too heavy to use daily."
            },
            {
                title: "The Pivot: From \"Settings\" to \"Vibes\"",
                content: "The Insight:\nWe realized that users don't have static preferences (e.g., \"I always hate video\"). They have Contextual Moods.\n• Sometimes Sarah wants to rot her brain with viral videos (The \"Doom Scroll\").\n• Sometimes she just wants to see what Mike is doing (The \"Update\").\n\nWe needed to move the controls out of the Settings Menu and onto the Feed itself, but without cluttering the interface."
            },
            {
                title: "The Solution: Stealth UX & The \"Modes\" Design",
                content: "We built the Compact SocialFlux Interface.\n\nA. The \"Stealth\" Mode Switcher\nInstead of a row of buttons taking up screen space, we utilized the existing UI mental model.\nThe Design: We turned the \"For You\" text at the top left into a dropdown menu.\nThe Story: Sarah opens the app. It defaults to \"For You\" (the standard mix). She feels overwhelmed. She taps the header and selects \"Friends Only.\"\nThe Result: Instantly, the noise vanishes. No ads, no AI, no strangers. Just Mike’s engagement photos.\n\nB. The \"Chill Mode\"\nSarah wants to browse, but she's tired of high-energy screaming videos.\nThe Design: She selects \"Chill Mode\" from the dropdown.\nThe Logic: This mode filters out high-BPM audio, rapid cuts, and \"viral/hype\" tags in the backend. It prioritizes photos, nature, and art.\nThe Result: The feed becomes a digital magazine, not a slot machine.\n\nC. Contextual \"Micro-Blocking\"\nSarah sees an AI-generated image of a celebrity that feels fake.\nThe Design: We added tiny, grey, pill-shaped tags at the bottom of the post: #AI, #Celebrity.\nThe Interaction: Sarah doesn't need to find a \"Report\" button. She just taps the #AI tag. The app asks: \"Hide content like this?\" She clicks Yes.\nThe Result: She has trained her algorithm in 2 seconds without leaving the feed."
            },
            {
                title: "The Outcome: Why It Worked",
                content: "By moving from a \"Control Panel\" (Prototype 1) to a \"Streamlined Feed\" (Prototype 3), we achieved the following:\n\nTrust Score ⬆️ High Increase\nUsers stopped feeling \"manipulated\" because the controls were visible and responsive.\n\nSession Length ↔️ Stable\nUsers spent the same amount of time, but reported feeling 50% less \"guilty\" afterwards.\n\nFriend Interaction ⬆️ 300% Increase\nThe \"Friends Only\" mode removed the friction of finding loved ones."
            },
            {
                title: "Conclusion",
                content: "The future of social media isn't about better AI predicting what you want. It's about AI listening to what you say.\n\nSarah didn't need a new app. She just needed the current app to respect her enough to hand over the steering wheel.\n\n\"Technology should be a bicycle for the mind, not a conveyor belt for the eyes.\""
            }
        ]
    }
];

export const WORK_CLUSTERS = [
    {
        id: 'workforce',
        title: 'THE WORKFORCE ECOSYSTEM',
        company: 'Lumina',
        logo: '/logos/lumina-logo.png', // Lumina Logo
        subtitle: 'Humanizing Ops',
        companyFocus: {
            title: "Unique Context",
            icon: "Users",
            items: ["Blue Collar Users", "Android-First Market", "Offline-Ready UX"]
        },
        subtitle_id: 'Memanusiakan Operasional',
        hook_id: 'Memberi martabat pada pencarian kerja. Platform komunitas yang memastikan pekerja kerah biru tidak merasa seperti sedang mengemis pekerjaan.',
        miniDesc_id: 'Membangun "LinkedIn" untuk mereka yang bekerja dengan tangan. Membantu ribuan sopir, pelayan, dan pekerja gudang menemukan pekerjaan yang layak tanpa perantara.',
        companyFocus_id: {
            title: "Konteks Unik",
            items: ["Pengguna Kerah Biru", "Pasar Android-First", "UX Siap Offline"]
        },
        brandColor: '#1AA8B4', // Lumina Teal
        linkedinUrl: 'https://www.linkedin.com/company/luminatechnologies/about/',
        heroImage: '/workforce_hero.png',
        hook: 'Giving dignity to the blue-collar job hunt. Because finding honest work shouldn\'t feel like begging.',
        miniDesc: 'Building "LinkedIn" for those who work with their hands. Helping thousands of drivers, servers, and warehouse workers find decent jobs without middlemen.',
        stats: [
            { label: 'Role', value: 'Lead Product Designer' },
            { label: 'Timeline', value: 'May 2022 - Nov 2022' },
            { label: 'Impact', value: 'Scale & Reliability' },
            { label: 'Platform', value: 'Mobile app (android) & Websites' }
        ],
        projects: [
            {
                id: 'workforce-chat',
                title: 'In-App Chat & Candidate Tracker',
                tag: 'Communication',
                type: 'Mobile App',
                role: 'Lead Product Designer',
                timeline: '3 Months',
                route: '/case-study/workforce-chat',
                previewImage: '/workforce_hero.png',
                iconName: 'MessageSquare',
                details: {
                    problem: 'Candidates felt ignored by a silent, cold system.',
                    system: 'A fast, informal chat interface that feels safe.',
                    outcome: 'Turned "Applicants" into "Conversations".'
                },
                details_id: {
                    problem: 'Kandidat merasa dicuekin sistem yang dingin.',
                    system: 'Antarmuka chat santai yang terasa aman.',
                    outcome: 'Mengubah "Pelamar" jadi "Percakapan".'
                },
                title_id: 'In-App Chat & Pelacak Kandidat',
                tag_id: 'Komunikasi',
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "Why do we treat recruitment like email when candidates live on WhatsApp?",
                        heroImage: "/workforce_hero.png"
                    },
                    context: {
                        client: "Internal Product",
                        role: "I led the UX & UI",
                        timeline: "3 Months",
                        team: "1 PM, 2 FE, 1 BE"
                    },
                    challenge: "Recruiters were drowning. Managing 200+ candidates via Excel and personal WhatsApp accounts meant data was scattered and response times averaged 4 days. Candidates were ghosting us because we were too slow.",
                    process: [
                        { title: "The Shadow", desc: "I sat with 5 recruiters for a shift. I watched them copy-paste the same message 50 times. It wasn't a 'tracking' problem; it was a 'typing' problem." },
                        { title: "The Conflict", desc: "Engineering wanted to build a ticketing system. I argued for a Chat interface. Tickets feel like work; Chat feels like a conversation." },
                        { title: "Prototyping", desc: "I built a 'Whatsapp-lookalike' prototype and verified it with actual blue-collar workers. If they could use WhatsApp, they could use this." }
                    ],
                    insights: [
                        { title: "Fear of Formality", desc: "I discovered that candidates ignored emails because they felt too formal. Chat felt safe. The medium was the message." },
                        { title: "Batching vs. Real-time", desc: "Recruiters work in batches; candidates work in real-time. I had to design a system that bridged this async/sync gap." }
                    ],
                    solution: [
                        { title: "Universal Inbox", desc: "I consolidated SMS, WhatsApp, and In-App messages into one unified thread. No more tab switching." },
                        { title: "One-Tap Speed", desc: "I designed 'Smart Templates' that allowed recruiters to send commonly used replies (e.g., 'Interview Scheduled') in a single tap." }
                    ],
                    metrics: [
                        { label: "Response Rate", value: "+45%" },
                        { label: "Time-to-Hire", value: "-3 Days" },
                        { label: "NPS", value: "78" }
                    ],
                    learnings: "This project taught me that 'features' don't solve problems; 'workflows' do. By mimicking the tool they already used (WhatsApp) but adding structure, I won adoption without training.",
                    aiHypothesis: {
                        tech: "LLM Agents & Sentiment Analysis",
                        title: "Auto-Negotiation Bot",
                        desc: "Instead of recruiters manually typing replies, an Agent would draft responses based on the candidate's sentiment and availability. It could schedule interviews automatically by syncing with calendar APIs.",
                        impact: "Response Time < 5 mins"
                    }
                },
                caseStudy_id: {
                    locked: true,
                    snapshot: {
                        tagline: "Kenapa rekrutmen kaku kayak email, padahal kandidat hidup di WhatsApp?",
                        heroImage: "/workforce_hero.png"
                    },
                    context: {
                        client: "Produk Internal",
                        role: "Lead UX & UI",
                        timeline: "3 Bulan",
                        team: "1 PM, 2 FE, 1 BE"
                    },
                    challenge: "Rekruter kewalahan. Ngurus 200+ kandidat cuma pake Excel sama WhatsApp pribadi bikin data berantakan dan respon jadi lambat banget (rata-rata 4 hari). Kandidat kabur gara-gara kita lelet.",
                    process: [
                        { title: "Observasi Langsung", desc: "Saya duduk bareng 5 rekruter selama satu shift. Saya liat mereka copy-paste pesan yang sama 50 kali. Ini bukan masalah 'tracking', ini masalah 'ngetik'." },
                        { title: "Konflik", desc: "Tim Engineering mau bikin sistem tiket. Saya ngotot minta antarmuka Chat. Tiket rasanya kayak kerjaan admin; Chat rasanya kayak ngobrol." },
                        { title: "Prototipe", desc: "Saya bikin prototipe mirip WhatsApp dan verifikasi langsung sama pekerja kerah biru. Kalau mereka bisa pake WhatsApp, mereka pasti bisa pake ini." }
                    ],
                    insights: [
                        { title: "Takut Formalitas", desc: "Kandidat nyuekin email karena terlalu formal. Chat terasa aman. Mediumnya adalah pesannya." },
                        { title: "Batch vs Real-time", desc: "Rekruter kerja numpuk (batching); kandidat maunya real-time. Saya harus desain sistem yang ngejembatanin kesenjangan ini." }
                    ],
                    solution: [
                        { title: "Inbox Terpadu", desc: "Saya gabungin SMS, WhatsApp, dan In-App jadi satu thread. Gak perlu gonta-ganti tab lagi." },
                        { title: "Kecepatan Satu Tap", desc: "Saya desain 'Template Pintar' buat jawaban umum (misal: 'Interview Dijadwalkan') cuma pake satu tap." }
                    ],
                    metrics: [
                        { label: "Rate Respon", value: "+45%" },
                        { label: "Waktu Rekrut", value: "-3 Hari" },
                        { label: "NPS", value: "78" }
                    ],
                    learnings: "Proyek ini ngajarin saya kalo fitur gak nyelesain masalah; alur kerja (workflow) yang nyelesain. Dengan niru alat yang udah biasa mereka pake (WhatsApp) tapi dikasih struktur, saya dapet adopsi tanpa perlu training ribet.",
                    aiHypothesis: {
                        tech: "Agen LLM & Analisa Sentimen",
                        title: "Bot Negosiasi Otomatis",
                        desc: "Daripada rekruter ngetik manual, Agen bakal nulis draft jawaban berdasarkan mood kandidat dan ketersediaan waktu. Bisa jadwalin interview otomatis lho.",
                        impact: "Waktu Respon < 5 menit"
                    }
                },
            },
            {
                id: 'ats-dashboard',
                title: 'ATS Dashboard for HR',
                tag: 'Management',
                type: 'Web Dashboard',
                role: 'UI/UX Designer',
                timeline: '4 Months',
                route: '/case-study/ats-dashboard',
                previewImage: '/workforce_hero.png',
                iconName: 'Users',
                details: {
                    problem: 'HR lost the human story in the spreadsheet grid.',
                    system: 'Visual pipelines that respect the candidate.',
                    outcome: 'Hiring became 20% faster & more humane.'
                },
                details_id: {
                    problem: 'Cerita manusia hilang tertelan grid Excel.',
                    system: 'Pipeline visual yang menghargai kandidat.',
                    outcome: 'Rekrutmen jadi 20% lebih cepat & manusiawi.'
                },
                title_id: 'Dashboard ATS untuk HR',
                tag_id: 'Manajemen',
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "Replacing the 'Excel Comfort Blanket' with something better.",
                        heroImage: "/workforce_hero.png"
                    },
                    context: {
                        client: "Internal Product",
                        role: "I designed the Dashboard",
                        timeline: "4 Months",
                        team: "2 Designers, 4 Devs"
                    },
                    challenge: "HR data was fragmented across 5 different tools and giant spreadsheets. The team couldn't answer simple questions like 'How many drivers did we hire today?' without a standardizing ease.",
                    process: [
                        { title: "The Audit", desc: "I printed out the spreadsheets and highlighted every duplicate column. We were asking for the same data 4 times." },
                        { title: "Friction", desc: "Users resisted the new dashboard. They loved Excel's flexibility. I had to prove that 'structure' was worth the loss of 'freedom'." }
                    ],
                    insights: [
                        { title: "Density is King", desc: "Most dashboards drown in whitespace. HR users needed density. I designed for maximum information per vertical pixel." }
                    ],
                    solution: [
                        { title: "The Pipeline", desc: "I built a drag-and-drop Kanban board that visualized the candidate journey, instantly highlighting bottlenecks." },
                        { title: "Bulk Acts", desc: "I realized users never act on one person at a time. I added 'Select All' actions to every stage." }
                    ],
                    metrics: [
                        { label: "Efficiency", value: "+20%" },
                        { label: "Data Accuracy", value: "99%" },
                        { label: "Adoption", value: "100%" }
                    ],
                    learnings: "Replacing a spreadsheet is the hardest design challenge. You can't just be prettier; you have to be faster. I learned to respect the utility of a grid.",
                    aiHypothesis: {
                        tech: "RAG (Retrieval-Augmented Generation)",
                        title: "The 'Chief of Staff' Sidebar",
                        desc: "A natural language sidebar where HR can ask: 'Who are the top 3 drivers for East Jakarta?' The AI retrieves data from the pipeline and summarizes it, eliminating the need for complex filters.",
                        impact: "Data Retrieval Speed 10x"
                    }
                },
                caseStudy_id: {
                    locked: true,
                    snapshot: {
                        tagline: "Ganti 'Selimut Nyaman' Excel dengan sesuatu yang lebih baik, tanpa bikin kaget.",
                        heroImage: "/workforce_hero.png"
                    },
                    context: {
                        client: "Produk Internal",
                        role: "Desainer Dashboard",
                        timeline: "4 Bulan",
                        team: "2 Desainer, 4 Devs"
                    },
                    challenge: "Data HR berantakan di 5 tools beda dan spreadsheet raksasa. Tim gak bisa jawab pertanyaan simpel kayak 'Berapa driver yang kita rekrut hari ini?' tanpa pusing dulu.",
                    process: [
                        { title: "Audit Total", desc: "Saya print semua spreadsheet dan stabilo-in setiap kolom yang duplikat. Ternyata kita minta data yang sama sampe 4 kali." },
                        { title: "Friksi", desc: "User nolak dashboard baru. Mereka cinta banget fleksibilitas Excel. Saya harus buktiin kalau 'struktur' itu sepadan dengan hilangnya 'kebebasan'." }
                    ],
                    insights: [
                        { title: "Kepadatan itu Raja", desc: "Kebanyakan dashboard modern kebanyakan ruang kosong (whitespace). User HR butuh kepadatan data. Saya desain supaya informasi maksimal per piksel." }
                    ],
                    solution: [
                        { title: "Pipeline Visual", desc: "Saya bikin papan Kanban drag-and-drop yang memvisualisasikan perjalanan kandidat. Langsung keliatan macetnya di mana." },
                        { title: "Aksi Massal", desc: "User gak pernah kerja satu-satu. Saya tambahin fitur 'Pilih Semua' (Select All) di setiap tahap." }
                    ],
                    metrics: [
                        { label: "Efisiensi", value: "+20%" },
                        { label: "Akurasi Data", value: "99%" },
                        { label: "Adopsi", value: "100%" }
                    ],
                    learnings: "Gantiin Excel itu tantangan desain paling susah. Gak bisa cuma main cantik; harus lebih cepet. Saya belajar buat menghargai fungsi grid.",
                    aiHypothesis: {
                        tech: "RAG (Retrieval-Augmented Generation)",
                        title: "Sidebar 'Chief of Staff'",
                        desc: "Sidebar chat di mana HR bisa tanya: 'Siapa 3 driver terbaik di Jakarta Timur?' AI bakal ambil data dari pipeline dan ngerangkum, gak perlu filter ribet lagi.",
                        impact: "Kecepatan Data 10x"
                    }
                },
            },
            {
                id: 'direct-apply',
                title: 'Chat Your Employer',
                tag: 'Direct Access',
                type: 'Mobile Feature',
                role: 'Product Designer',
                timeline: '2 Months',
                route: '/case-study/direct-apply',
                previewImage: '/workforce_hero.png',
                iconName: 'MessageCircle',
                details: {
                    problem: 'Asking a driver for a CV creates panic, not data.',
                    system: 'One-tap "Hello" instead of a 10-page form.',
                    outcome: '45% more people dared to apply.'
                },
                details_id: {
                    problem: 'Minta CV ke supir bikin panik, bukan dapet data.',
                    system: 'Cukup "Halo" sekali tap, bukan formulir 10 hal.',
                    outcome: '45% lebih banyak orang berani melamar.'
                },
                title_id: 'Chat Your Employer',
                tag_id: 'Akses Langsung',
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "What if applying for a job was as easy as saying 'Hi'?",
                        heroImage: "/workforce_hero.png"
                    },
                    context: {
                        client: "Consumer App",
                        role: "I led the Product Design",
                        timeline: "2 Months",
                        team: "Growth Team"
                    },
                    challenge: "We had a 90% drop-off rate on our application forms. Blue-collar workers weren't comfortable typing out long resumes on mobile screens. The 'Resume Wall' was killing our growth.",
                    process: [
                        { title: "The Bet", desc: "I hypothesized that users didn't lack qualification; they lacked confidence. A form feels like a test. A chat feels like a hello." },
                        { title: "Trimming", desc: "I fought to remove 80% of the required fields. We only needed a name and a phone number to start." }
                    ],
                    insights: [
                        { title: "Trust Deficiency", desc: "Users didn't trust a faceless form. They trusted a person. I added 'Recruiter Avatars' to humanize the screen." }
                    ],
                    solution: [
                        { title: "One-Tap Apply", desc: "I replaced the 'Apply Now' form with a pre-filled message: 'Hi, I'm interested in this job.'." },
                        { title: "Voice Notes", desc: "For users who struggled with typing, I added a 'Record Audio' feature. It became the most used feature." }
                    ],
                    metrics: [
                        { label: "App Starts", value: "+45%" },
                        { label: "Completed", value: "+60%" },
                        { label: "Trust", value: "High" }
                    ],
                    learnings: "Lowering the barrier to entry increases volume, but you need checks for quality. Voice notes were the perfect middle ground—easy to send, but rich in signal.",
                    aiHypothesis: {
                        tech: "Audio-to-Structured-Data (Whisper)",
                        title: "Instant Resume Generator",
                        desc: "Candidates simply talk about their experience for 1 minute. The AI transcribes the audio, extracts skills/dates, and builds a formatted tabular resume automatically.",
                        impact: "Completion Rate +90%"
                    }
                },
                caseStudy_id: {
                    locked: true,
                    snapshot: {
                        tagline: "Gimana kalau ngelamar kerja itu segampang bilang 'Halo'?",
                        heroImage: "/workforce_hero.png"
                    },
                    context: {
                        client: "Aplikasi Konsumen",
                        role: "Lead Desain Produk",
                        timeline: "2 Bulan",
                        team: "Tim Growth"
                    },
                    challenge: "90% pelamar kabur pas liat formulir lamaran. Pekerja kerah biru gak nyaman ngetik CV panjang di layar HP. 'Tembok CV' ini membunuh pertumbuhan user kami.",
                    process: [
                        { title: "Taruhan", desc: "Hipotesis saya: User bukan gak berkualitas, tapi kurang PD. Formulir rasanya kayak ujian. Chat rasanya kayak nyapa." },
                        { title: "Pangkas Habis", desc: "Saya debatin buat hapus 80% kolom isian. Kita cuma butuh Nama dan Nomor HP buat mulai." }
                    ],
                    insights: [
                        { title: "Defisit Kepercayaan", desc: "User gak percaya sama formulir tanpa wajah. Mereka percaya sama orang. Saya tambahin 'Avatar Rekruter' buat memanusiakan layar." }
                    ],
                    solution: [
                        { title: "Lamar Satu Tap", desc: "Saya ganti formulir 'Apply Now' dengan pesan template: 'Halo, saya tertarik sama kerjaan ini.'." },
                        { title: "Voice Notes", desc: "Buat user yang susah ngetik, saya tambahin fitur 'Rekam Suara'. Jadi fitur paling laku." }
                    ],
                    metrics: [
                        { label: "Mulai Lamar", value: "+45%" },
                        { label: "Selesai", value: "+60%" },
                        { label: "Trust", value: "Tinggi" }
                    ],
                    learnings: "Nurunin hambatan masuk ningkatin volume, tapi butuh filter kualitas. Voice note itu jalan tengah sempurna—gampang dikirim, tapi kaya info.",
                    aiHypothesis: {
                        tech: "Audio-ke-Data-Terstruktur (Whisper)",
                        title: "Generator CV Instan",
                        desc: "Kandidat cukup ngomong soal pengalaman mereka selama 1 menit. AI bakal transkrip audio, ekstrak skill/tanggal, dan bikin CV rapi secara otomatis.",
                        impact: "Tingkat Penyelesaian +90%"
                    }
                }
            },
            {
                id: 'app-navigation',
                title: 'Main App (Navigation & Discovery)',
                tag: 'Core UX',
                type: 'App Architecture',
                role: 'Interaction Designer',
                timeline: 'Ongoing',
                route: '/case-study/app-navigation',
                previewImage: '/workforce_hero.png',
                iconName: 'Layout',
                details: {
                    problem: 'Getting lost in filters when you need a job today.',
                    system: 'Visual-first discovery for rapid scanning.',
                    outcome: 'Users found hope (jobs) 15% faster.'
                },
                details_id: {
                    problem: 'Tersesat di filter saat butuh kerja hari ini juga.',
                    system: 'Penemuan berbasis visual buat scanning cepat.',
                    outcome: 'User nemu harapan (kerjaan) 15% lebih cepat.'
                },
                title_id: 'App Utama (Navigasi & Penemuan)',
                tag_id: 'UX Inti',
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "Helping users find their way without a map.",
                        heroImage: "/workforce_hero.png"
                    },
                    context: {
                        client: "Core Product",
                        role: "I redesigned the Navigation",
                        timeline: "Ongoing",
                        team: "Core Experience"
                    },
                    challenge: "Our analytics showed users were getting stuck in deep navigation trees and abandoning the app. We had over-engineered the category structure, assuming users knew exactly what they wanted. They didn't.",
                    process: [
                        { title: "Card Sorting", desc: "I ran a card-sorting exercise with actual users. Their mental model was flat, not hierarchical." },
                        { title: "Hard Choices", desc: "I had to convince the PMs to kill their favorite 'Advanced Search' features. Simplicity requires sacrifice." }
                    ],
                    insights: [
                        { title: "Visual vs. Text", desc: "Our users were visual learners. They ignored text labels but clicked instantly on icons. I pivoted the design to be icon-first." }
                    ],
                    solution: [
                        { title: "Flat Hierarchy", desc: "I flattened the navigation depth from 4 levels to 2. Every job was now reachable in 2 taps." },
                        { title: "Visual Tags", desc: "I designed a distinct icon set for every job category, acting as visual anchors for scanning." }
                    ],
                    metrics: [
                        { label: "Retention D1", value: "+15%" },
                        { label: "Search Success", value: "85%" },
                        { label: "Bounce Rate", value: "-10%" }
                    ],
                    learnings: "Navigation is not just about structure; it's about confidence. If a user feels lost for 1 second, they are gone. I learned to count clicks like currency.",
                    aiHypothesis: {
                        tech: "Predictive UI",
                        title: "Zero-Click Discovery",
                        desc: "The app anticipates user intent based on time-of-day and location. If a user opens the app at 8 AM in a warehouse district, the 'Forklift Driver' jobs appear instantly on the home screen.",
                        impact: "Time-to-Apply -40%"
                    }
                },
                caseStudy_id: {
                    locked: true,
                    snapshot: {
                        tagline: "Bantu user temukan jalan tanpa peta.",
                        heroImage: "/workforce_hero.png"
                    },
                    context: {
                        client: "Produk Utama",
                        role: "Redesain Navigasi",
                        timeline: "Berjalan",
                        team: "Core Experience"
                    },
                    challenge: "Data menunjukkan user terjebak di menu navigasi yang dalam lalu keluar dari aplikasi. Kami terlalu memperumit struktur kategori (over-engineered), berasumsi user tahu persis apa yang dicari. Ternyata tidak.",
                    process: [
                        { title: "Card Sorting", desc: "Saya lakukan card-sorting dengan user asli. Mental model mereka itu datar (flat), bukan hirarkis macam pohon." },
                        { title: "Pilihan Sulit", desc: "Saya harus meyakinkan PM untuk membunuh fitur 'Advanced Search' kesayangan mereka. Kesederhanaan butuh pengorbanan." }
                    ],
                    insights: [
                        { title: "Visual vs Teks", desc: "User kami adalah pembelajar visual. Mereka mengabaikan label teks tapi langsung klik ikon. Saya ubah desain jadi icon-first." }
                    ],
                    solution: [
                        { title: "Hirarki Datar", desc: "Saya pangkas kedalaman navigasi dari 4 level jadi 2. Setiap lowongan kerja kini bisa dijangkau dalam 2 tap." },
                        { title: "Tag Visual", desc: "Saya desain set ikon unik untuk setiap kategori pekerjaan, berfungsi sebagai jangkar visual saat scanning cepat." }
                    ],
                    metrics: [
                        { label: "Retensi D1", value: "+15%" },
                        { label: "Sukses Cari", value: "85%" },
                        { label: "Bounce Rate", value: "-10%" }
                    ],
                    learnings: "Navigasi bukan cuma soal struktur; ini soal kepercayaan diri. Kalau user merasa tersesat 1 detik saja, mereka pergi. Saya belajar menghargai setiap klik.",
                    aiHypothesis: {
                        tech: "Predictive UI",
                        title: "Penemuan Tanpa-Klik",
                        desc: "Aplikasi mengantisipasi niat user berdasarkan waktu dan lokasi. Jika user buka aplikasi jam 8 pagi di area pergudangan, lowongan 'Supir Forklift' langsung muncul di layar utama.",
                        impact: "Waktu-Lamar -40%"
                    }
                }
            },
        ]
    },
    {
        id: 'commerce',
        title: 'THE COMMERCE ENGINE',
        company: 'GudangAda',
        logo: '/gudangada-logo.png', // Placeholder for company logo
        subtitle: 'Managing Scale',
        companyFocus: {
            title: "Scale Factor",
            icon: "TrendingUp",
            items: ["$100B B2B Market", "FMCG Supply Chain", "Fragmented Logistics"]
        },
        companyFocus_id: {
            title: "Faktor Skala",
            items: ["Pasar B2B $100M", "Rantai Pasokan FMCG", "Logistik Terfragmentasi"]
        },
        hook_id: 'Membangun rasa aman di pasar low-trust. Memastikan pemilik warung merasa setenang belanja stok 5 juta seperti saat jajan 5 ribu.',
        brandColor: '#00D1C7', // GudangAda Cyan
        linkedinUrl: 'https://www.linkedin.com/company/gudangada/about/',
        heroImage: '/commerce_hero.png',
        hook: 'Building trust in a low-trust market. Ensuring a warung owner feels as safe buying $500 of stock as they do buying a $1 snack.',
        miniDesc: 'Digitizing the $100B supply chain not by disrupting it, but by respecting the handshake deals that have worked for decades.',
        stats: [
            { label: 'Role', value: 'Product Designer' },
            { label: 'Timeline', value: 'April 2020 - April 2022' },
            { label: 'Impact', value: 'Marketplace Liquidity' },
            { label: 'Platform', value: 'Web Dashboard & PWA' }
        ],
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
                details: { problem: 'Fear of sending money into the void.', system: 'The "Money Back" Shield.', outcome: 'Trust increased, Abandonment -12%.' },
                details_id: { problem: 'Takut kirim uang ke tempat antah berantah.', system: 'Perisai "Uang Kembali".', outcome: 'Kepercayaan naik, Abandonment -12%.' },
                title_id: 'Marketplace',
                tag_id: 'Transaksi',
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "7 steps to buy a box of noodles? We had to fix the trust gap.",
                        heroImage: "/commerce_hero.png"
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
                        { title: "3-Step Flow", desc: "I collapsed the 7 steps into 3: Cart, Payment, Confirmation. Radical simplification." },
                        { title: "Escrow Badge", desc: "I added a visual 'Money Back Guarantee' shield next to the Pay button. It increased conversion by 5% alone." }
                    ],
                    metrics: [
                        { label: "Cart Abandon", value: "-12%" },
                        { label: "Conversion", value: "+8%" },
                        { label: "AOV", value: "+15%" }
                    ],
                    learnings: "Trust is built in milliseconds. You can't ask for money if you look messy. A clean UI is a trustworthy UI.",
                    aiHypothesis: {
                        tech: "Predictive Fraud Detection",
                        title: "The 'Green Light' Checkout",
                        desc: "An AI analyzes the buyer's purchase history and creditworthiness in real-time. If they are trusted, they skip the 'Payment Proof' step entirely. Instant credit approval.",
                        impact: "Friction Reduced 100%"
                    }
                },
                caseStudy_id: {
                    locked: true,
                    snapshot: {
                        tagline: "7 langkah buat beli semardus mie? Kami harus perbaiki gap kepercayaan.",
                        heroImage: "/commerce_hero.png"
                    },
                    context: {
                        client: "GudangAda",
                        role: "Lead Squad Checkout",
                        timeline: "6 Bulan",
                        team: "4 PM, 8 Engineer"
                    },
                    challenge: "Alur checkout kami adalah 'monster' 7 langkah. User meninggalkan keranjang (abandon cart) sebesar 65% karena mereka tidak percaya uang mereka aman. Di B2B, 'trust' bukan sekadar perasaan; itu jaminan transaksi.",
                    process: [
                        { title: "Audit Total", desc: "Saya print setiap layar alur checkout. Panjangnya 3 meter di dinding. Ternyata kami minta alamat yang sama 3 kali." },
                        { title: "Perdebatan", desc: "Tim Finance mau mempertahankan 'cek keamanan'. Saya berargumen bahwa friksi *adalah* risiko. Kalau terlalu ribet, mereka pergi." }
                    ],
                    insights: [
                        { title: "Kecemasan Bayar", desc: "Saya temukan user cuma peduli satu hal: 'Uang saya balik nggak kalau ini gagal?' Kami harus taruh jaminan itu di depan." }
                    ],
                    solution: [
                        { title: "Alur 3-Langkah", desc: "Saya ringkas 7 langkah jadi 3: Keranjang, Bayar, Konfirmasi. Penyederhanaan radikal." },
                        { title: "Badge Escrow", desc: "Saya tambah perisai visual 'Jaminan Uang Kembali' di sebelah tombol Bayar. Ini menaikkan konversi 5% sendirian." }
                    ],
                    metrics: [
                        { label: "Cart Abandon", value: "-12%" },
                        { label: "Konversi", value: "+8%" },
                        { label: "AOV", value: "+15%" }
                    ],
                    learnings: "Kepercayaan dibangun dalam milidetik. Anda nggak bisa minta uang kalau tampilan berantakan. UI yang rapi adalah UI yang bisa dipercaya.",
                    aiHypothesis: {
                        tech: "Predictive Fraud Detection",
                        title: "Checkout 'Lampu Hijau'",
                        desc: "AI menganalisis riwayat belanja dan kredit pembeli secara real-time. Jika terpercaya, mereka bisa skip tahap 'Bukti Bayar' sepenuhnya. Persetujuan kredit instan.",
                        impact: "Friksi Berkurang 100%"
                    }
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
                    snapshot: {
                        tagline: "Giving Unilever and P&G their own real estate in a chaotic marketplace.",
                        heroImage: "/commerce_hero.png"
                    },
                    context: {
                        client: "Strategic Partnership",
                        role: "I designed the CMS",
                        timeline: "3 Months",
                        team: "Brand Team"
                    },
                    challenge: "Major FMCG principals refused to join our platform because they couldn't control their brand presence. They didn't want their premium soap listed next to a grainy photo of a dusty box.",
                    process: [
                        { title: "The Tension", desc: "Brands wanted 'microsites'. Engineering wanted 'standard templates'. I had to design a system that felt custom but was generated from a standard JSON schema." },
                        { title: "Modular Design", desc: "I created a drag-and-drop 'Store Builder' that allowed brands to arrange banners and carousels without writing code." }
                    ],
                    insights: [
                        { title: "Vanity Metrics", desc: "Brands cared more about 'Total Views' than 'Sales'. I highlighted traffic analytics in their dashboard to satisfy this need." }
                    ],
                    solution: [
                        { title: "Store Builder", desc: "A WYSIWYG editor for brand managers to customize their landing pages." },
                        { title: "Verified Badge", desc: "A visual tick that signaled 'Official Distributor', boosting trust for buyers." }
                    ],
                    metrics: [
                        { label: "Onboarded", value: "50+" },
                        { label: "GMV Uplift", value: "+22%" },
                        { label: "Brand NPS", value: "65" }
                    ],
                    learnings: "B2B buyers are still human. They gravitate towards 'polished' content because it signals reliability.",
                    aiHypothesis: {
                        tech: "Generative Design (StyleGAN)",
                        title: "Brand Asset Autopilot",
                        desc: "Brands upload 1 logo and 1 product image. The AI automatically generates 50 variations of banners, social posts, and store themes that adhere to their brand guidelines.",
                        impact: "Onboarding Time -90%"
                    }
                },
                caseStudy_id: {
                    locked: true,
                    snapshot: {
                        tagline: "Memberi Unilever dan P&G 'lahan real estate' di pasar yang chaotic.",
                        heroImage: "/commerce_hero.png"
                    },
                    context: {
                        client: "Partnership Strategis",
                        role: "Desainer CMS",
                        timeline: "3 Bulan",
                        team: "Tim Brand"
                    },
                    challenge: "Prinsipal FMCG besar menolak bergabung karena tidak bisa kontrol brand image mereka. Mereka nggak mau sabun premium mereka dipajang di sebelah foto buram kardus berdebu.",
                    process: [
                        { title: "Ketegangan", desc: "Brand minta 'microsites'. Engineering minta 'template standar'. Saya harus desain sistem yang terasa custom tapi digenerate dari skema JSON standar." },
                        { title: "Desain Modular", desc: "Saya buat 'Store Builder' drag-and-drop yang bikin manajer brand bisa atur banner dan karos tanpa coding." }
                    ],
                    insights: [
                        { title: "Vanity Metrics", desc: "Brand lebih peduli 'Total Views' daripada 'Sales'. Saya highlight analitik trafik di dashboard mereka untuk memuaskan kebutuhan ini." }
                    ],
                    solution: [
                        { title: "Store Builder", desc: "Editor WYSIWYG buat manajer brand kustomisasi landing page mereka." },
                        { title: "Badge Terverifikasi", desc: "Centang visual yang menandakan 'Distributor Resmi', meningkatkan kepercayaan pembeli." }
                    ],
                    metrics: [
                        { label: "Onboarded", value: "50+" },
                        { label: "Kenaikan GMV", value: "+22%" },
                        { label: "NPS Brand", value: "65" }
                    ],
                    learnings: "Pembeli B2B juga manusia. Mereka tertarik pada konten yang 'poles' karena itu sinyal keandalan.",
                    aiHypothesis: {
                        tech: "Generative Design (StyleGAN)",
                        title: "Autopilot Aset Brand",
                        desc: "Brand upload 1 logo dan 1 gambar produk. AI otomatis generate 50 variasi banner, posting sosial, dan tema toko yang sesuai panduan brand mereka.",
                        impact: "Waktu Onboarding -90%"
                    }
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
                    snapshot: {
                        tagline: "Turning a math headache into a 1-click discount engine.",
                        heroImage: "/commerce_hero.png"
                    },
                    context: {
                        client: "Internal Tool",
                        role: "I simplified the Logic",
                        timeline: "2 Months",
                        team: "Growth Team"
                    },
                    challenge: "Our promo engine was so complex that account managers were using calculators to double-check the logic. We were seeing errors where discounts were stacking uncontrollably, causing loss.",
                    process: [
                        { title: "Logic Mapping", desc: "I mapped out the dependency tree of our discounts. It looked like a bowl of spaghetti." },
                        { title: "The Fix", desc: "I proposed a 'Stacking Rule' UI: Distinct categories (Shipping, Product, Bundle) that could not overlap." }
                    ],
                    insights: [
                        { title: "Fear of Loss", desc: "Users were terrified of 'accidental giveaways'. I added a 'Potential Loss' calculator that showed the max burn before they published." }
                    ],
                    solution: [
                        { title: "Promo Simulator", desc: "A tool that let AMs test their promo against a fake cart to see the final price." },
                        { title: "Rule Engine", desc: "Visual toggles for 'Combinable' vs 'Exclusive' promos." }
                    ],
                    metrics: [
                        { label: "Utilization", value: "+25%" },
                        { label: "Errors", value: "0%" },
                        { label: "Sales Spikes", value: "High" }
                    ],
                    learnings: "In complex systems, clarity is the best feature. If the user can't predict the outcome, the system is broken.",
                    aiHypothesis: {
                        tech: "Reinforcement Learning",
                        title: "Dynamic Discount Optimization",
                        desc: "Instead of fixed rules, the AI simulates 10,000 potential cart combinations to find the 'Sweet Spot' discount that maximizes volume without eroding margin. It accepts or rejects the promo for the user.",
                        impact: "Margin Protected +15%"
                    }
                },
                caseStudy_id: {
                    locked: true,
                    snapshot: {
                        tagline: "Mengubah sakit kepala matematika jadi mesin diskon 1-klik.",
                        heroImage: "/commerce_hero.png"
                    },
                    context: {
                        client: "Internal Tool",
                        role: "Penyederhana Logika",
                        timeline: "2 Bulan",
                        team: "Tim Growth"
                    },
                    challenge: "Mesin promo kami sangat rumit sampai Account Manager (AM) harus pakai kalkulator buat cek logika. Sering terjadi diskon bertumpuk (stacking) yang bikin rugi bandar.",
                    process: [
                        { title: "Mapping Logika", desc: "Saya petakan pohon dependensi diskon kami. Bentuknya kayak benang kusut." },
                        { title: "Perbaikan", desc: "Saya usulkan UI 'Aturan Tumpuk': Kategori tegas (Ongkir, Produk, Bundling) yang tidak boleh tumpang tindih." }
                    ],
                    insights: [
                        { title: "Takut Rugi", desc: "User takut banget 'sedekah tak sengaja'. Saya tambah kalkulator 'Potensi Loss' yang nunjukin maksimal uang terbakar sebelum mereka publish promo." }
                    ],
                    solution: [
                        { title: "Simulator Promo", desc: "Tool yang membiarkan AM ngetes promo mereka lawan keranjang palsu buat lihat harga akhir." },
                        { title: "Mesin Aturan", desc: "Toggle visual untuk promo 'Bisa Digabung' vs 'Eksklusif'." }
                    ],
                    metrics: [
                        { label: "Utilisasi", value: "+25%" },
                        { label: "Error", value: "0%" },
                        { label: "Lonjakan Sales", value: "Tinggi" }
                    ],
                    learnings: "Di sistem kompleks, kejelasan adalah fitur terbaik. Kalau user nggak bisa prediksi hasilnya, sistemnya rusak.",
                    aiHypothesis: {
                        tech: "Reinforcement Learning",
                        title: "Optimasi Diskon Dinamis",
                        desc: "Alih-alih aturan kaku, AI mensimulasikan 10.000 kombinasi keranjang untuk cari 'Sweet Spot' diskon yang maksimalkan volume tanpa menggerus margin. AI yang accept/reject promo user.",
                        impact: "Margin Terlindungi +15%"
                    }
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
                    snapshot: {
                        tagline: "Ending the '50 Shades of Grey' button chaos.",
                        heroImage: "/commerce_hero.png"
                    },
                    context: {
                        client: "Infrastructure",
                        role: "I built the System",
                        timeline: "1 Year",
                        team: "All Designers"
                    },
                    challenge: "We had 15 different shades of blue and 4 different date pickers. Every new feature took 3 days just to style. Our design debt was slowing us down.",
                    process: [
                        { title: "Inventory", desc: "I collected every button in the app. Seeing them all in one place was the wake-up call management needed." },
                        { title: "Atomic Tokens", desc: "I defined the core variables: Color, Spacing, Typography. If it wasn't a token, it didn't exist." }
                    ],
                    insights: [
                        { title: "Dev First", desc: "I realized a design system isn't for designers; it's for developers. I wrote the documentation in their language (Props, API), not ours." }
                    ],
                    solution: [
                        { title: "UI Kit", desc: "A comprehensive Figma library with auto-layout components." },
                        { title: "React Library", desc: "A perfectly synced npm package. Design once, import everywhere." }
                    ],
                    metrics: [
                        { label: "Dev Velocity", value: "+30%" },
                        { label: "Code Size", value: "-15%" },
                        { label: "Consistency", value: "100%" }
                    ],
                    learnings: "A design system is a product, not a project. It needs maintenance, versioning, and a roadmap.",
                    aiHypothesis: {
                        tech: "Multimodal LLM (Vision-to-Code)",
                        title: "Screenshot-to-Component",
                        desc: "Designers upload a screenshot of a new UI pattern. The AI scans it against our existing component library and outputs the exact React code using our Design System tokens.",
                        impact: "Design Handoff 0m"
                    }
                },
                caseStudy_id: {
                    locked: true,
                    snapshot: {
                        tagline: "Mengakhiri kekacauan tombol '50 Shades of Grey'.",
                        heroImage: "/commerce_hero.png"
                    },
                    context: {
                        client: "Infrastruktur",
                        role: "Pembangun Sistem",
                        timeline: "1 Tahun",
                        team: "Semua Desainer"
                    },
                    challenge: "Kami punya 15 varian warna biru dan 4 date picker beda. Setiap fitur baru butuh 3 hari cuma buat styling. Utang desain (design debt) memperlambat kami.",
                    process: [
                        { title: "Inventaris", desc: "Saya kumpulkan semua tombol di aplikasi. Melihat semuanya di satu tempat adalah tamparan yang dibutuhkan manajemen." },
                        { title: "Token Atomik", desc: "Saya definisikan variabel inti: Warna, Spasi, Tipografi. Kalau bukan token, berarti nggak ada." }
                    ],
                    insights: [
                        { title: "Dev First", desc: "Saya sadar design system bukan buat desainer; tapi buat developer. Saya tulis dokumentasi pakai bahasa mereka (Props, API), bukan bahasa desain." }
                    ],
                    solution: [
                        { title: "UI Kit", desc: "Library Figma komprehensif dengan komponen auto-layout." },
                        { title: "Library React", desc: "Paket npm yang tersinkronisasi sempurna. Desain sekali, impor di mana saja." }
                    ],
                    metrics: [
                        { label: "Kecepatan Dev", value: "+30%" },
                        { label: "Ukuran Kode", value: "-15%" },
                        { label: "Konsistensi", value: "100%" }
                    ],
                    learnings: "Design system itu produk, bukan proyek. Butuh maintenance, versioning, dan roadmap.",
                    aiHypothesis: {
                        tech: "Multimodal LLM (Vision-to-Code)",
                        title: "Screenshot-to-Component",
                        desc: "Desainer upload screenshot pola UI baru. AI scan komponen itu lawan library yang ada dan output kode React persis pakai token Design System kami.",
                        impact: "Handoff Desain 0m"
                    }
                }
            },
        ]
    },
    {
        id: 'efficiency',
        title: 'OPERATIONAL EFFICIENCY',
        company: 'STOQO',
        logo: '/stoqo-logo.png',
        subtitle: 'Digitizing Habits',
        companyFocus: {
            title: "Operational Reality",
            icon: "Truck",
            items: ["Perishable Goods", "Just-In-Time Delivery", "High-Churn Workforce"]
        },
        subtitle_id: 'Digitalisasi Kebiasaan',
        companyFocus_id: {
            title: "Realita Operasional",
            items: ["Bahan Baku Segar", "Pengiriman Just-In-Time", "Turnover Pekerja Tinggi"]
        },
        brandColor: '#FA6130', // Stoqo Orange
        linkedinUrl: 'https://www.linkedin.com/company/stoqo-technologies/about/',
        heroImage: '/efficiency_hero.png',
        hook: 'Designing for the invisible hours. Ensuring the people who feed Jakarta can sleep until the truck arrives.',
        miniDesc: 'Logistics isn\'t just about moving boxes. It is about the anxiety of the restaurant owner waiting at 4 AM, wondering if their ingredients will show up.',
        hook_id: 'Mendesain untuk jam-jam tak terlihat. Memastikan mereka yang memberi makan Jakarta bisa tidur nyenyak sampai truk datang.',
        miniDesc_id: 'Logistik bukan cuma soal mindahin kardus. Ini soal kecemasan pemilik restoran yang nunggu jam 4 pagi, bertanya-tanya apakah bahan masakannya bakal nyampe.',
        stats: [
            { label: 'Role', value: 'Early Product Designer' },
            { label: 'Timeline', value: 'Mar 2018 - April 2020' },
            { label: 'Scope', value: 'Customer, Ops, Warehousing' },
            { label: 'Status', value: 'Closed (Covid-19)' }
        ],
        culture: {
            title: "The Arena",
            description: "I worked there as one of the early product designers, touching almost every product line—from customer-facing apps to complex warehousing logistics. We built a culture of 'Get Your Hands Dirty'.",
            images: [
                { src: "/hero-stoqo.jpg", caption: "Warehouse Visits", span: "col-span-1 md:col-span-2 row-span-2" },
                { src: "/case-studies/delivery-methods/mvimg-20190507.jpg", caption: "The Squad", span: "col-span-1 row-span-1" },
                { src: "/case-studies/delivery-methods/untitled-2.png", caption: "Usability Testing", span: "col-span-1 row-span-1" },
                { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", caption: "Townhall", span: "col-span-1 md:col-span-2 row-span-1" }
            ]
        },
        culture_id: {
            title: "Garis Depan",
            description: "Sebagai salah satu desainer awal, saya menyentuh hampir semua lini produk—mulai dari aplikasi pelanggan hingga logistik gudang yang kompleks. Kami membangun budaya untuk berani 'Turun Tangan' (Get Your Hands Dirty)."
        },
        projects: [
            {
                id: 'stoqo-logistics',
                title: 'Transforming Logistics Delivery',
                tag: 'Logistics',
                type: 'Service Design',
                role: 'Product Designer',
                timeline: '2 Months',
                route: '/case-study/stoqo-logistics',
                previewImage: '/case-studies/delivery-methods/delivery-status-cover.png',
                iconName: 'Truck',
                details: { problem: 'Waking up at 3 AM just to stare at an empty road.', system: 'Peace-of-Mind Tracking.', outcome: 'They finally slept in.' },
                details_id: { problem: 'Bangun jam 3 pagi cuma buat melototin jalan kosong.', system: 'Pelacakan Penenang Hati.', outcome: 'Akhirnya mereka bisa tidur.' },
                title_id: 'Transformasi Pengiriman Logistik',
                tag_id: 'Logistik',
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "Solving the 'Where is my truck?' anxiety loop.",
                        heroImage: null
                    },
                    context: {
                        client: "STOQO Logistics",
                        role: "End-to-End Experience",
                        timeline: "2 Months",
                        team: "Ops & Engineering"
                    },
                    challenge: "I discovered a harsh reality: our users were waking up at 4 AM not to work, but to wait. Late deliveries weren't just an inconvenience; they were an existential threat. My challenge was to break this cycle of anxiety without having the budget to buy 100 new trucks.",
                    process: [
                        { title: "Methodology", desc: "I didn't trust the Jira tickets, so I rode in the delivery trucks. I saw drivers struggling to text while driving. The 'system' wasn't broken; it was dangerous.", image: "/case-studies/delivery-methods/screen-shot-2020.png" },
                        { title: "The Insight", desc: "Talking to 5 owners, I found the real conflict: It wasn't about speed. It was about silence. They could handle a late truck; they couldn't handle not knowing.", image: "/case-studies/delivery-methods/untitled.png" },
                        { title: "Field Study", desc: "I joined the Field Activators to see the chaos on the ground. This bridged the gap between 'Customer Complaints' and 'Operational Reality'.", image: "/case-studies/delivery-methods/img-20190502.jpg" },
                        { title: "Analysis Workshop", desc: "I facilitated the journey mapping session where we identified 4 pain points: Mental Model Mismatch, Uncertainty, Lack of Communication, and Lack of Awareness.", image: "/case-studies/delivery-methods/customer-app-board.jpg" },
                        { title: "Co-Creation", desc: "I didn't design in a silo. I led a full-day workshop with the Engineering and Ops leads to ensure technical feasibility wasn't an afterthought.", image: "/case-studies/delivery-methods/img-20190507.jpg" },
                        { title: "Ideation", desc: "The focus shifted to: 'How Might We manage user anxiety?'. The answer wasn't just 'faster trucks'—it was 'better information'.", image: "/case-studies/delivery-methods/customer-app-board-1.jpg" },
                        { title: "Validation", desc: "I took the high-fidelity prototypes back to the users for a 3-day testing sprint. Watching them struggle is the best validity test.", image: "/case-studies/delivery-methods/untitled-1.png" }
                    ],
                    insights: [
                        { title: "Psychology of Waiting", desc: "I learned that known waits feel shorter than unknown waits. Even a rough estimate calms the user." },
                        { title: "The 'Early' Problem", desc: "Surprisingly, drivers arriving too early was also a disruption. Customers weren't ready to receive goods at 3 AM if they expected 5 AM." }
                    ],
                    solution: [
                        { title: "Status Tracking", desc: "I stole the mental model from Domino's. If you can track a $10 pizza, why not a $500 pallet of rice?", image: "/case-studies/delivery-methods/tes.png" },
                        { title: "Proactive Push", desc: "I stopped waiting for them to ask. I designed notifications that triggered the moment the truck left the warehouse.", image: "/case-studies/delivery-methods/tes2.png" },
                        { title: "Driver Info", desc: "Secure contact info for the driver, giving users a direct line to their goods.", image: "/case-studies/delivery-methods/tes3.png" }
                    ],
                    metrics: [
                        { label: "Support Tix", value: "-60%" },
                        { label: "Trust", value: "+40%" },
                        { label: "Repeat Order", value: "+10%" }
                    ],
                    learnings: "Transparency is cheaper than speed. Users will wait if they know why. This project wasn't about UI; it was about selling 'peace of mind' as a feature.",
                    aiHypothesis: {
                        tech: "Computer Vision & IoT",
                        title: "Smart Loading Docks",
                        desc: "Cameras at the warehouse scan the volume of goods being loaded. The AI predicts the exact truck fill-rate and notifies the customer: 'Your order consumes 40% of the truck, arriving in 2 hours.'",
                        impact: "Capacity Usage +20%"
                    }
                },
                caseStudy_id: {
                    locked: true,
                    snapshot: {
                        tagline: "Mengakhiri siklus cemas 'Truk saya di mana?'",
                        heroImage: null
                    },
                    context: {
                        client: "STOQO Logistics",
                        role: "End-to-End Experience",
                        timeline: "2 Bulan",
                        team: "Ops & Engineering"
                    },
                    challenge: "Saya menemukan fakta pahit: pengguna kami bangun jam 4 pagi bukan untuk bekerja, tapi untuk menunggu. Pengiriman terlambat bukan cuma ketidaknyamanan; ini ancaman eksistensial bagi usaha warung mereka. Tantangan saya adalah memutus siklus kecemasan ini tanpa punya budget untuk beli 100 truk baru.",
                    process: [
                        { title: "Metodologi", desc: "Saya tidak percaya tiket Jira, jadi saya ikut naik truk pengiriman. Saya melihat sopir kesulitan SMS sambil menyetir. Sistemnya bukan rusak; tapi berbahaya.", image: "/case-studies/delivery-methods/screen-shot-2020.png" },
                        { title: "Insight Utama", desc: "Setelah bicara dengan 5 pemilik warung, saya temukan konflik aslinya: Masalahnya bukan kecepatan. Tapi kesunyian (ketidaktahuan). Mereka bisa terima telat; tapi nggak bisa terima kalau nggak dikabarin.", image: "/case-studies/delivery-methods/untitled.png" },
                        { title: "Studi Lapangan", desc: "Saya bergabung dengan Field Activators untuk melihat kekacauan di lapangan. Ini menjembatani 'Keluhan Pelanggan' dengan 'Realita Operasional'.", image: "/case-studies/delivery-methods/img-20190502.jpg" },
                        { title: "Workshop Analisis", desc: "Saya memfasilitasi sesi journey mapping di mana kami identifikasi 4 pain points: Mismacth Mental Model, Ketidakpastian, Kurang Komunikasi, dan Kurang Awareness.", image: "/case-studies/delivery-methods/customer-app-board.jpg" },
                        { title: "Ko-Kreasi", desc: "Saya tidak mendesain sendirian. Saya pimpin workshop seharian bareng Lead Engineering dan Ops untuk memastikan desain ini bisa dibangun (feasible).", image: "/case-studies/delivery-methods/img-20190507.jpg" },
                        { title: "Ideasi", desc: "Fokus berubah ke: 'Gimana cara kita kelola kecemasan user?'. Jawabannya bukan 'truk lebih cepat'—tapi 'informasi yang lebih baik'.", image: "/case-studies/delivery-methods/customer-app-board-1.jpg" },
                        { title: "Validasi", desc: "Saya bawa high-fidelity prototype kembali ke user untuk testing sprint 3 hari. Melihat mereka bingung adalah validasi terbaik.", image: "/case-studies/delivery-methods/untitled-1.png" }
                    ],
                    insights: [
                        { title: "Psikologi Menunggu", desc: "Menunggu yang jelas estimasinya terasa lebih cepat daripada menunggu tanpa kabar. Estimasi kasar pun bisa menenangkan user." },
                        { title: "Masalah 'Kepagian'", desc: "Ternyata, sopir yang datang kepagian juga masalah. Warung belum siap terima barang jam 3 pagi kalau janjinya jam 5." }
                    ],
                    solution: [
                        { title: "Pelacakan Status", desc: "Saya curi mental model dari Domino's Pizza. Kalau pizza 50 ribu aja bisa dilacak, kenapa beras 500 ribu enggak?", image: "/case-studies/delivery-methods/tes.png" },
                        { title: "Notifikasi Proaktif", desc: "Berhenti nunggu user nanya. Saya desain notifikasi yang otomatis dikirim begitu truk keluar dari gudang.", image: "/case-studies/delivery-methods/tes2.png" },
                        { title: "Info Pengemudi", desc: "Info kontak sopir yang aman, memberi user jalur langsung ke barang mereka.", image: "/case-studies/delivery-methods/tes3.png" }
                    ],
                    metrics: [
                        { label: "Tiket Support", value: "-60%" },
                        { label: "Trust", value: "+40%" },
                        { label: "Repeat Order", value: "+10%" }
                    ],
                    learnings: "Transparansi itu lebih murah daripada kecepatan. User mau nunggu kalau mereka tau alasannya. Proyek ini bukan soal UI; ini soal menjual 'ketenangan pikiran' sebagai fitur.",
                    aiHypothesis: {
                        tech: "Computer Vision & IoT",
                        title: "Loading Dock Pintar",
                        desc: "Kamera di gudang men-scan volume barang yang dimuat. AI memprediksi seberapa penuh truk dan memberi notifikasi ke user: 'Pesanan Anda memakan 40% kapasitas truk, tiba dalam 2 jam.'",
                        impact: "Kapasitas Terpakai +20%"
                    }
                }
            },
            {
                id: 'stoqo-sales',
                title: 'Incentive Sales Agent',
                tag: 'Gamification',
                type: 'Mobile App',
                role: 'UX Strategist',
                timeline: '3 Months',
                route: '/case-study/stoqo-sales',
                previewImage: '/efficiency_hero.png',
                iconName: 'Trophy',
                details: { problem: 'The lonely road of a solo sales agent.', system: 'Gamified Team Structure.', outcome: 'Work felt like a sport.' },
                details_id: { problem: 'Jalan sepi seorang agen sales sendirian.', system: 'Struktur Tim Tergamifikasi.', outcome: 'Kerja rasa olahraga.' },
                title_id: 'Agen Penjualan Insentif',
                tag_id: 'Gamifikasi',
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "Using video game mechanics to drive real-world sales.",
                        heroImage: "/efficiency_hero.png"
                    },
                    context: {
                        client: "Sales Force",
                        role: "I Gamified the App",
                        timeline: "3 Months",
                        team: "Sales Ops"
                    },
                    challenge: "Our field agents were unmotivated. They treated the app like a chore. Login rates were low, and data entry was sloppy. We needed to make the 'boring' work feel rewarding.",
                    process: [
                        { title: "User Interviews", desc: "I found that agents were highly competitive. They compared stats in their WhatsApp group. I needed to bring that competition into the app." },
                        { title: "Design Sprint", desc: "We tested leaderboards, badges, and streaks. Streaks won by a landslide." }
                    ],
                    insights: [
                        { title: "Loss Aversion", desc: "Agents worked harder to 'keep a streak' than to 'gain a bonus'. The psychology of loss is powerful." }
                    ],
                    solution: [
                        { title: "Daily Streak", desc: "A flame icon that grew hotter every day they hit their target. Breaking the streak felt painful." },
                        { title: "Regional Leaderboard", desc: "A live ranking of the top agents in their city. Bragging rights drove performance." }
                    ],
                    metrics: [
                        { label: "DAU", value: "+40%" },
                        { label: "Sales Vol", value: "+18%" },
                        { label: "Engagement", value: "High" }
                    ],
                    learnings: "Gamification isn't just badges. It's about tapping into intrinsic human drives: mastery, status, and fear of missing out.",
                    aiHypothesis: {
                        tech: "Personalized Coaching Agents",
                        title: "The 'Jarvis' for Sales",
                        desc: "An AI voice coach that listens to sales calls (privacy-safe) and gives real-time whispers: 'Talk slower', 'Mention the bundle discount now', 'They sound hesitant about price'.",
                        impact: "Conversion Rate +25%"
                    }
                },
                caseStudy_id: {
                    locked: true,
                    snapshot: {
                        tagline: "Pakai mekanika video game buat genjot penjualan nyata.",
                        heroImage: "/efficiency_hero.png"
                    },
                    context: {
                        client: "Sales Force",
                        role: "Saya Gamifikasi Apps",
                        timeline: "3 Bulan",
                        team: "Sales Ops"
                    },
                    challenge: "Agen lapangan kami kurang termotivasi. Mereka anggap aplikasi itu beban administrasi. Tingkat login rendah, input data asal-asalan. Kami harus bikin kerjaan 'membosankan' ini jadi terasa rewarding.",
                    process: [
                        { title: "User Interviews", desc: "Saya temukan kalau agen itu sangat kompetitif. Mereka suka banding-bandingin stats di grup WhatsApp. Saya harus bawa kompetisi itu masuk ke aplikasi." },
                        { title: "Design Sprint", desc: "Kami tes leaderboard, badges, dan streaks. Konsep 'Streak' (berturut-turut) menang telak." }
                    ],
                    insights: [
                        { title: "Loss Aversion", desc: "Agen bekerja lebih keras untuk 'menjaga streak' daripada untuk 'dapet bonus'. Psikologi takut kehilangan itu kuat banget." }
                    ],
                    solution: [
                        { title: "Daily Streak", desc: "Ikon api yang makin panas setiap hari mereka capai target. Memutus streak rasanya sakit." },
                        { title: "Leaderboard Regional", desc: "Ranking live agen terbaik di kota mereka. Hak pamer (bragging rights) memacu performa." }
                    ],
                    metrics: [
                        { label: "DAU", value: "+40%" },
                        { label: "Vol Penjualan", value: "+18%" },
                        { label: "Engagement", value: "Tinggi" }
                    ],
                    learnings: "Gamifikasi bukan cuma tempel lencana. Ini soal memanfaatkan dorongan alami manusia: penguasaan skill, status sosial, dan FOMO.",
                    aiHypothesis: {
                        tech: "Personalized Coaching Agents",
                        title: "'Jarvis' untuk Sales",
                        desc: "AI voice coach yang dengerin panggilan sales (privacy-safe) dan kasih bisikan real-time: 'Ngomongnya pelan dikit', 'Tawarin diskon bundle sekarang', 'Mereka kedengeran ragu soal harga tuh'.",
                        impact: "Konversi +25%"
                    }
                }
            },
            {
                id: 'p11',
                title: 'Paper-to-Paperless (Concept)',
                tag: 'Sustainability',
                type: 'Concept',
                role: 'Concept Artist',
                timeline: '1 Month',
                route: '/case-study/p11',
                previewImage: '/efficiency_hero.png',
                iconName: 'Scan',
                details: { problem: 'The panic of a lost invoice in a chaotic kitchen.', system: 'Camera-as-Keyboard.', outcome: 'No more "lost money".' },
                details_id: { problem: 'Paniknya bon hilang di dapur yang chaos.', system: 'Kamera-jadi-Keyboard.', outcome: 'Gak ada lagi "uang hilang".' },
                title_id: 'Paper-to-Paperless (Konsep)',
                tag_id: 'Keberlanjutan',
                caseStudy: {
                    locked: true,
                    snapshot: {
                        tagline: "Killing the filing cabinet, one scan at a time.",
                        heroImage: "/efficiency_hero.png"
                    },
                    context: {
                        client: "Internal Ops",
                        role: "I envisioned the Future",
                        timeline: "1 Month",
                        team: "Solo Project"
                    },
                    challenge: "Our office was drowning in paper. Invoices, delivery orders, receipts. Things got lost, coffee got spilled, and data was dark.",
                    process: [
                        { title: "Observation", desc: "I watched the admin team spend 4 hours a day purely on data entry from paper visuals." },
                        { title: "Ideation", desc: "What if the camera was the keyboard? I mocked up an OCR flow that auto-filled the form." }
                    ],
                    insights: [
                        { title: "Trust the Machine", desc: "Users were skeptical of OCR accuracy. I designed a 'Confidence Score' UI that highlighted fields the AI wasn't sure about." }
                    ],
                    solution: [
                        { title: "Smart Scan", desc: "Point the camera at an invoice, and the app extracts the Date, Total, and Vendor." },
                        { title: "Digital Archive", desc: "A search bar that could find a receipt from 3 years ago in 2 seconds." }
                    ],
                    metrics: [
                        { label: "Paper Redux", value: "90%" },
                        { label: "Search Speed", value: "100x" },
                        { label: "Cost Save", value: "High" }
                    ],
                    learnings: "The future is inevitable, but it needs a bridge. The 'Confidence Score' was the bridge that let users trust the AI.",
                    aiHypothesis: {
                        tech: "Visual Document Understanding (VDU)",
                        title: "Semantic Search for Paper",
                        desc: "You can ask the system: 'Find me the invoice for the red chair we bought last May.' The AI visualizes the document and highlights the exact line item.",
                        impact: "Audit Speed 100x"
                    }
                },
                caseStudy_id: {
                    locked: true,
                    snapshot: {
                        tagline: "Memusnahkan lemari arsip, satu scan tiap kali.",
                        heroImage: "/efficiency_hero.png"
                    },
                    context: {
                        client: "Ops Internal",
                        role: "Visi Masa Depan",
                        timeline: "1 Bulan",
                        team: "Proyek Solo"
                    },
                    challenge: "Kantor kami tenggelam dalam kertas. Faktur, surat jalan, bon. Dokumen hilang, kena tumpahan kopi, dan datanya 'gelap' (tidak bisa diolah).",
                    process: [
                        { title: "Observasi", desc: "Saya perhatikan tim admin menghabiskan 4 jam sehari cuma buat ketik ulang data dari kertas ke komputer." },
                        { title: "Ideasi", desc: "Gimana kalau kamera jadi keyboard-nya? Saya mock-up alur OCR yang otomatis ngisi formulir." }
                    ],
                    insights: [
                        { title: "Percaya Mesin", desc: "User awalnya skeptis sama akurasi OCR. Saya desain UI 'Skor Kepercayaan' (Confidence Score) yang menghighlight kolom mana yang AI-nya ragu, jadi user bisa cek ulang." }
                    ],
                    solution: [
                        { title: "Smart Scan", desc: "Arahkan kamera ke faktur, dan aplikasi langsung ekstrak Tanggal, Total, dan Vendor." },
                        { title: "Arsip Digital", desc: "Kolom pencarian yang bisa nemuin bon dari 3 tahun lalu dalam 2 detik." }
                    ],
                    metrics: [
                        { label: "Kertas Turun", value: "90%" },
                        { label: "Cari Cepat", value: "100x" },
                        { label: "Hemat Biaya", value: "Tinggi" }
                    ],
                    learnings: "Masa depan itu pasti, tapi butuh jembatan. 'Confidence Score' adalah jembatan yang bikin user berani percaya sama AI.",
                    aiHypothesis: {
                        tech: "Visual Document Understanding (VDU)",
                        title: "Pencarian Semantik Kertas",
                        desc: "Anda bisa tanya sistem: 'Cariin faktur kursi merah yang kita beli Mei lalu.' AI bakal visualisasikan dokumen dan highlight baris item yang dimaksud.",
                        impact: "Kecepatan Audit 100x"
                    }
                }
            }
        ]
    }
];
