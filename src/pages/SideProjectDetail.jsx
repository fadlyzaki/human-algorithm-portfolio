import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
   ArrowLeft, Sun, Moon, Github, ExternalLink, Terminal, Cpu,
   GitCommit, Code, Play, AlertCircle, CheckCircle2,
   Layers, Database, Box, ArrowRight, Siren, Globe
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/* --- THEME CONFIGURATION ---
   Aesthetic: "Senior Engineer's Lab Notebook"
   Focus: High-density information, structural clarity, system thinking.
*/

const SideProjectDetail = () => {
   const { isDark, setIsDark } = useTheme();
   const [scrolled, setScrolled] = useState(0);
   const { id } = useParams(); // Get dynamic project ID from URL

   // --- PROJECT DATABASE ---
   const projectDatabase = {
      "d1": {
         title: "Interactive Workbook",
         subtitle: "Bimbel Geera Platform",
         version: "v1.0.0-stable",
         status: "PRODUCTION",
         repo: "github.com/fadly/interactive-workbook",
         demo: "https://buku-kerja-interaktif.web.app/",
         tldr: "A bilingual educational platform bridging the gap between static textbooks and gamified learning. Solves the 'feedback loop' problem in non-formal education via real-time Firestore sync.",
         stack: [
            { name: "React (Vite)", type: "Core" },
            { name: "Tailwind CSS", type: "Styling" },
            { name: "Firebase", type: "Backend" },
            { name: "Chart.js", type: "Viz" }
         ],
         commits: [
            { id: "v1.0-rel", msg: "release: initial stable launch", time: "Jan 7, 2026" },
            { id: "feat-auth", msg: "feat: teacher dashboard rbac", time: "2d ago" },
            { id: "perf-ui", msg: "perf: optimized render cycles", time: "4d ago" }
         ],
         sections: {
            itch: "Traditional workbooks are 'write-only' memory. Teachers can't track progress until the book is collected. Students lose motivation without instant feedback.",
            pipeline: [
               "Student Session Init",
               "Interactive Unit (Video/Vocab)",
               "Real-time Answer Sync",
               "Teacher Dashboard Aggregation"
            ],
         },
         challenges: [
            { type: "win", msg: "Seamlessly integrated YouTube API for 'Sing Along' modules without breaking app state." },
            { type: "fail", msg: "Initial Firestore writes were too frequent. Batched updates to reduce read/write costs by 60%." },
            { type: "win", msg: "Achieved sub-100ms latency for bilingual toggle updates." }
         ]
      },
      "d2": {
         title: "AI Comic Localizer",
         subtitle: "Computer Vision Pipeline",
         version: "v0.4.2-alpha",
         status: "EXPERIMENTAL",
         repo: "github.com/fadly/comic-ocr-agent",
         demo: "comic-translate.vercel.app",
         tldr: "An automated pipeline that detects speech bubbles in manga panels, performs OCR, translates via LLM, and attempts to re-letter the text in-situ while preserving the original art.",
         stack: [
            { name: "Python", type: "Core" },
            { name: "OpenCV", type: "Vision" },
            { name: "Tesseract", type: "OCR" },
            { name: "DeepL API", type: "NLP" }
         ],
         commits: [
            { id: "a1b2c3d", msg: "fix: bubble detection threshold", time: "2h ago" },
            { id: "e4f5g6h", msg: "feat: added manga-v09 weights", time: "1d ago" },
            { id: "i7j8k9l", msg: "docs: updated install steps", time: "2d ago" }
         ],
         sections: {
            itch: "Reading niche indie comics often requires clunky tools like Google Lens. I wanted a pipeline that respected the art—translating text without destroying the speech bubbles.",
            pipeline: [
               "Input Image",
               "OpenCV Contours (Bubble Detection)",
               "Crop & OCR (Tesseract)",
               "Translation (DeepL)",
               "In-painting & Overlay"
            ],
         },
         challenges: [
            { type: "fail", msg: "Standard OCR fails on handwritten comic fonts. Fine-tuned Tesseract on 'Anime Ace' font family." },
            { type: "fail", msg: "White-fill in-painting looks artificial. Currently exploring Generative Fill for background reconstruction." }
         ]
      },
      "d3": {
         title: "Year in Review Generator",
         subtitle: "Manual Data Visualization",
         version: "v2.5.0",
         status: "LIVE PROTOTYPE",
         repo: "github.com/fadly/manual-wrapped",
         demo: "https://year-in-review-jak.vercel.app/",
         tldr: "A privacy-first visualization tool for your 'life data'. 12 distinct themes, 'Screenshot Mode' for viral sharing, and zero-algorithm curation. Built on a strictly typed Domain-Driven Architecture.",
         stack: [
            { name: "React 18", type: "Core" },
            { name: "TypeScript", type: "Strict" },
            { name: "Tailwind", type: "Style" },
            { name: "html2canvas", type: "Export" }
         ],
         commits: [
            { id: "arch-2.0", msg: "refactor: domain-driven design migration", time: "Dec 14" },
            { id: "feat-ss", msg: "feat: implement 'Screenshot Mode'", time: "3d ago" },
            { id: "ui-themes", msg: "style: added 12 visual themes", time: "1w ago" }
         ],
         sections: {
            itch: "Algorithms track consumption, not accomplishment. This tool allows users to visualize their 'un-tracked' wins (books read, miles ran) with the same polish as Spotify Wrapped.",
            pipeline: [
               "User Input (Stats/Photos)",
               "LocalStorage Sync",
               "Theme Engine (12 Variants)",
               "Canvas Rendering",
               "Social Share Export"
            ],
         },
         challenges: [
            { type: "win", msg: "Implemented 'Screenshot Mode' to bypass complex canvas generation issues on mobile browsers." },
            { type: "win", msg: "Stabilized Architecture 2.0 with strict TypeScript contracts." },
            { type: "fail", msg: "Monolithic component structure refactored into modular theme renderers." }
         ]
      },
      "filter-me": {
         title: "FilterMe: AR Experience",
         subtitle: "Cognitive Commerce",
         version: "v1.0 (Prototype)",
         status: "ARCHIVED",
         repo: "github.com/fadly/filter-me-prototype",
         demo: "CHIuXID 2018 Entry",
         tldr: "Bridging the physical-digital gap in e-commerce using AR filters. A 3-week sprint to validate if 'Snapchat-style' interactions can replace physical touch in beauty retail.",
         stack: [
            { name: "Sketch", type: "UI" },
            { name: "Principle", type: "Interaction" },
            { name: "Google Sprint", type: "Process" }
         ],
         commits: [
            { id: "init", msg: "init: google design sprint", time: "Week 1" },
            { id: "feat", msg: "feat: hypothesis definition", time: "Week 2" },
            { id: "test", msg: "test: usability testing cycle", time: "Week 3" }
         ],
         sections: {
            itch: "Online shoppers can't touch or feel products. This 'lack of realness' was the #1 pain point. We hypothesized: 'Could AR filters solve the trust gap?'",
            pipeline: [
               "Understand (Survey)",
               "Sketch (Flows)",
               "Decide (Face Products)",
               "Prototype (Principle)",
               "Validate (Usability Testing)"
            ],
         },
         challenges: [
            { type: "win", msg: "High engagement 'Fun Factor' validated during testing." },
            { type: "fail", msg: "Trust Gap: Users questioned color accuracy of AR overlays vs real product." }
         ]
      },
      "flood-alert": {
         title: "Flood Alert & Smart Evacuation",
         subtitle: "Geospatial Disaster Response",
         version: "v1.0 (Draft)",
         status: "PROTOTYPE",
         repo: "github.com/fadly/flood-alert-jabodetabek",
         demo: "flood.fadly.design",
         tldr: "A real-time geospatial platform for monsoon season safety. Integrates BMKG weather data and PetaBencana reports to provide zero-blindspot alerting and safety-aware evacuation routing using PostGIS spatial queries.",
         stack: [
            { name: "Node.js", type: "Backend" },
            { name: "PostGIS", type: "Database" },
            { name: "Flutter", type: "Mobile" },
            { name: "Docker", type: "Infra" }
         ],
         commits: [
            { id: "feat-geo", msg: "feat: implement ST_DWithin for radius alerts", time: "10h ago" },
            { id: "init-db", msg: "init: postgis docker container setup", time: "1d ago" },
            { id: "fix-idmp", msg: "fix: idempotency key for alert notifications", time: "2d ago" }
         ],
         sections: {
            itch: "Citizens often get flood alerts *after* water enters their homes. Worse, evacuation routes often lead through other flooded areas. We needed a system that understands 'Safe Paths', not just 'Fastest Paths'.",
            pipeline: [
               "Ingest PetaBencana/BMKG Data",
               "Spatial Query (PostGIS)",
               "Filter Hazardous Routes",
               "Push Notification (FCM)"
            ],
         },
         challenges: [
            { type: "win", msg: "Safety-Aware Routing: Successfully excluded shelters intersecting with active flood polygons." },
            { type: "fail", msg: "Battery Drain: Background location updates every 50m killed battery. Optimized to adaptive geofencing." }
         ]
      },
      "procurement": {
         title: "Procurement Reform Action Plan",
         subtitle: "Civic Tech & Data Transparency",
         version: "v1.0-proposal",
         status: "RESEARCH",
         repo: "github.com/fadly/procurement-reform-plan",
         demo: "https://medium.com/@fadlyzaki/procurement-reform",
         tldr: "A comprehensive technical framework empowering IT professionals to reform Indonesian government procurement. Combines 'Red Flag' data scraping, Offline-First PWA architectures for remote areas, and human-centric UX for complex legal forms.",
         stack: [
            { name: "Python (Pandas)", type: "Data" },
            { name: "BeautifulSoup", type: "Scraper" },
            { name: "IndexedDB", type: "Offline" },
            { name: "PWA", type: "Arch" }
         ],
         commits: [
            { id: "doc-init", msg: "docs: published action plan for data scientists", time: "2d ago" },
            { id: "scraper", msg: "feat: prototype LPSE scraper script", time: "1w ago" },
            { id: "ux-audit", msg: "research: usability audit of government forms", time: "2w ago" }
         ],
         sections: {
            itch: "Government procurement is plagued by opacity and complexity. The 'Archipelago Effect' means Jakarta-centric apps fail in rural Papua. We need a technical intervention.",
            pipeline: [
               "Scrape LPSE Data (Detect Anomalies)",
               "Build 'Archipelago-Proof' PWA (Offline-First)",
               "Humanize Legal UX (Plain Indonesian)",
               "Crowdsource Vendor Reputation"
            ],
         },
         challenges: [
            { type: "win", msg: "Defined 'Red Flag' algorithms to detect bid hiding (e.g., midnight postings)." },
            { type: "fail", msg: "Bureaucratic resistance to 'Agile' contracts. Government budgeting prefers Waterfall 'Capex' models over 'Opex' maintenance." }
         ]
      },
      "grab-merantau": {
         title: "Grab Merantau",
         subtitle: "Cross-City Emotional Commerce",
         version: "v1.0-concept",
         status: "PLANNING",
         repo: "github.com/fadly/grab-merantau-concept",
         demo: "grab-merantau.figma.com",
         tldr: "Empowering the diaspora to care for family back home. An AI-powered concierge that overrides geofencing to recommend contextual local food (e.g., 'Soft meat for elderly parents') and attaches voice notes to deliveries.",
         stack: [
            { name: "LLM (OpenAI)", type: "AI Core" },
            { name: "Google Maps SDK", type: "Location" },
            { name: "React Native", type: "Mobile" },
            { name: "Cloud Storage", type: "Media" }
         ],
         commits: [
            { id: "init-prd", msg: "docs: defined AI Concierge flow and persona 'Andi'", time: "1d ago" },
            { id: "mock-ui", msg: "design: wireframe for 'Remote Mode Toggle'", time: "3d ago" },
            { id: "llm-prompt", msg: "feat: prompt engineering for contextual food recs", time: "1w ago" }
         ],
         sections: {
            itch: "Ordering food for parents in another city is a UX nightmare (manual address change). Plus, it feels transactional. I wanted to add 'Warmth' back into the process.",
            pipeline: [
               "User Toggles 'Merantau Mode'",
               "AI Concierge parses intent ('Food for sick mom')",
               "Local Filter (Rating > 4.5, Soft Texture)",
               "User Records Voice Note",
               "Delivery + Digital Card"
            ],
         },
         challenges: [
            { type: "win", msg: "Designed a 'Care Package' wrapping experience that differentiates from standard delivery." },
            { type: "fail", msg: "Technical hurdle: Seamlessly switching app context/currency/promos between two geolocations without lag." }
         ]
      }
   };

   const project = projectDatabase[id] || projectDatabase["d3"]; // Default fallback

   useEffect(() => {
      const handleScroll = () => {
         const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
         const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
         setScrolled((winScroll / height) * 100);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const themeStyles = {
      '--bg-void': isDark ? '#0D1117' : '#FFFFFF',
      '--bg-surface': isDark ? '#161B22' : '#F6F8FA',
      '--border-color': isDark ? '#30363D' : '#D0D7DE',
      '--text-primary': isDark ? '#C9D1D9' : '#24292F',
      '--text-secondary': isDark ? '#8B949E' : '#57606A',
      '--accent-blue': '#58A6FF',
      '--accent-green': '#238636',
      '--accent-orange': '#D29922',
      '--accent-red': '#F85149',
      '--accent-cyan': '#22D3EE', // Added for Grab
   };

   const statusColor =
      project.status === "LIVE" || project.status === "PRODUCTION" || project.status === "DEPLOYED" ? "text-[var(--accent-green)] border-[var(--accent-green)]" :
         project.status === "ARCHIVED" ? "text-[var(--text-secondary)] border-[var(--text-secondary)]" :
            project.status === "PLANNING" ? "text-[var(--accent-cyan)] border-[var(--accent-cyan)]" :
               "text-[var(--accent-orange)] border-[var(--accent-orange)]";

   return (
      <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500">

         {/* Scroll Progress */}
         <div className="fixed top-0 left-0 w-full h-1 z-50 bg-[var(--bg-surface)]">
            <div className={`h-full transition-all duration-100 ${project.status === "ARCHIVED" ? "bg-[var(--text-secondary)]" : "bg-[var(--accent-blue)]"}`} style={{ width: `${scrolled}%` }}></div>
         </div>

         {/* Navigation Header */}
         <nav className="fixed top-0 w-full bg-[var(--bg-void)]/90 backdrop-blur z-40 border-b border-[var(--border-color)] px-6 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-blue)] font-mono text-xs">
               <ArrowLeft size={14} /> cd ..
            </Link>

            <div className="font-mono text-xs text-[var(--text-secondary)] flex items-center gap-2 opacity-70">
               <Terminal size={14} />
               <span>fadly/projects/{project.title.toLowerCase().substring(0, 15).replace(/[^a-z0-9]/g, '-')}...</span>
            </div>

            <button onClick={() => setIsDark(!isDark)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
               {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
         </nav>

         <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-16">

            {/* LEFT COLUMN: NARRATIVE & CONTEXT */}
            <article className="space-y-16">

               {/* Project Identity */}
               <header className="space-y-6">
                  <div className="flex items-center gap-3 font-mono text-xs">
                     <div className={`px-2 py-1 border rounded-sm ${statusColor}`}>
                        {project.status}
                     </div>
                     <span className="text-[var(--text-secondary)]">{project.version}</span>
                  </div>

                  <div className="space-y-2">
                     <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                        {project.title}
                     </h1>
                     <p className="text-xl text-[var(--text-secondary)] font-light leading-relaxed">
                        {project.subtitle}
                     </p>
                  </div>

                  <div className="p-6 border-l-2 border-[var(--accent-blue)] bg-[var(--bg-surface)]">
                     <p className="text-base md:text-lg leading-relaxed text-[var(--text-primary)] font-serif italic">
                        "{project.tldr}"
                     </p>
                  </div>
               </header>

               {/* The "Why" - Problem Statement */}
               <section>
                  <h2 className="text-sm font-mono text-[var(--text-secondary)] uppercase tracking-widest mb-6 flex items-center gap-2">
                     <AlertCircle size={16} /> The Friction Point
                  </h2>
                  <p className="text-lg leading-relaxed text-[var(--text-primary)]">
                     {project.sections?.itch}
                  </p>
               </section>

               {/* The "How" - Architecture */}
               <section>
                  <h2 className="text-sm font-mono text-[var(--text-secondary)] uppercase tracking-widest mb-6 flex items-center gap-2">
                     <Layers size={16} /> System Pipeline
                  </h2>

                  <div className="space-y-4">
                     {Array.isArray(project.sections?.pipeline) ? (
                        project.sections.pipeline.map((step, i) => (
                           <div key={i} className="flex items-center gap-4 group">
                              <div className="font-mono text-xs text-[var(--text-secondary)] w-6 text-right">0{i + 1}</div>
                              <div className="h-px flex-grow bg-[var(--border-color)] group-hover:bg-[var(--accent-blue)] transition-colors"></div>
                              <div className="font-mono text-sm text-[var(--text-primary)]">{step}</div>
                           </div>
                        ))
                     ) : (
                        <p>{project.sections?.pipeline}</p>
                     )}
                  </div>
               </section>

               {/* Retrospective - Post Mortem */}
               <section>
                  <h2 className="text-sm font-mono text-[var(--text-secondary)] uppercase tracking-widest mb-6 flex items-center gap-2">
                     <Database size={16} /> Retrospective Log
                  </h2>
                  <div className="grid gap-4">
                     {project.challenges && project.challenges.map((challenge, i) => (
                        <div key={i} className={`p-5 border rounded-sm flex gap-4 items-start transition-colors ${challenge.type === 'fail'
                           ? 'border-[var(--accent-red)]/30 bg-[var(--accent-red)]/5 hover:border-[var(--accent-red)]/60'
                           : 'border-[var(--accent-green)]/30 bg-[var(--accent-green)]/5 hover:border-[var(--accent-green)]/60'
                           }`}>
                           <div className={`mt-1 ${challenge.type === 'fail' ? 'text-[var(--accent-red)]' : 'text-[var(--accent-green)]'}`}>
                              {challenge.type === 'fail' ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
                           </div>
                           <div>
                              <h4 className={`text-xs font-mono uppercase mb-1 ${challenge.type === 'fail' ? 'text-[var(--accent-red)]' : 'text-[var(--accent-green)]'}`}>
                                 {challenge.type === 'fail' ? 'System Error / Pivot' : 'Successful Deployment'}
                              </h4>
                              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                 {challenge.msg}
                              </p>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>
            </article>

            {/* RIGHT COLUMN: TECHNICAL METADATA (Sticky) */}
            <aside className="space-y-8 lg:sticky lg:top-32 h-fit">

               {/* Actions */}
               <div className="grid grid-cols-2 gap-3">
                  <a
                     href={project.demo.startsWith('http') ? project.demo : `https://${project.demo}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="col-span-2 flex items-center justify-center gap-2 bg-[var(--text-primary)] text-[var(--bg-void)] font-bold py-3 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wide"
                  >
                     <Play size={16} /> Launch Demo
                  </a>
                  <a
                     href={project.repo.startsWith('http') ? project.repo : `https://${project.repo}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="col-span-2 flex items-center justify-center gap-2 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] font-bold py-3 rounded-sm transition-all text-sm uppercase tracking-wide"
                  >
                     <Github size={16} /> Source Code
                  </a>
               </div>

               {/* Tech Stack */}
               <div>
                  <h3 className="font-mono text-xs text-[var(--text-secondary)] uppercase mb-4 tracking-widest flex items-center gap-2">
                     <Box size={14} /> Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                     {project.stack.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-sm text-xs group hover:border-[var(--text-secondary)] transition-colors cursor-default">
                           <span className="text-[var(--text-primary)] font-medium">{item.name}</span>
                           <span className="w-px h-3 bg-[var(--border-color)]"></span>
                           <span className="text-[var(--text-secondary)] font-mono text-[10px]">{item.type}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Commit Log */}
               <div className="border border-[var(--border-color)] bg-[var(--bg-surface)] rounded-sm p-4 font-mono text-xs">
                  <div className="flex items-center justify-between text-[var(--text-secondary)] mb-4 border-b border-[var(--border-color)] pb-2">
                     <span className="flex items-center gap-2"><GitCommit size={14} /> Changelog</span>
                     <span className="text-[10px] opacity-50">HEAD -&gt; main</span>
                  </div>
                  <div className="space-y-3 relative">
                     <div className="absolute left-[5px] top-1 bottom-1 w-px bg-[var(--border-color)]"></div>
                     {project.commits.map((commit, idx) => (
                        <div key={idx} className="relative pl-4 group">
                           <div className="absolute left-[3px] top-[5px] w-[5px] h-[5px] rounded-full bg-[var(--text-secondary)] group-hover:bg-[var(--accent-blue)] transition-colors"></div>
                           <div className="flex justify-between text-[var(--text-secondary)] mb-0.5">
                              <span className="opacity-50">{commit.id}</span>
                              <span className="opacity-50">{commit.time}</span>
                           </div>
                           <p className="text-[var(--text-primary)] truncate">
                              {commit.msg}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>

            </aside>

         </main>

         <footer className="border-t border-[var(--border-color)] py-12 text-center">
            <p className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">
           // End of File · Fadly Uzzaki © 2025
            </p>
         </footer>
      </div>
   );
};

export default SideProjectDetail;