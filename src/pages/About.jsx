import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Terminal, Cpu, BookOpen, Coffee, MapPin, Headphones,
  Activity, AlertTriangle, GitCommit, Download, Sun, Moon, Code,
  PenTool, Brain, Zap, Flame, PenLine, Layers, Smartphone, Briefcase, User
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/* --- THEME CONFIGURATION ---
   Consistent with Human Algorithm Design System v2.0
*/

const AboutPage = () => {
  const { isDark, setIsDark } = useTheme();
  const [scrolled, setScrolled] = useState(0);

  // --- DATA: THE KERNEL LOG (Biography Timeline) ---
  const historyLog = [
    {
      year: '2015 - 2018',
      type: 'BOOT_SEQUENCE',
      title: 'University of Indonesia + Internships',
      desc: 'Initialization phase. From teaching Interaction Design to managing agile products at GDP Labs and researching Fintech UX at Tokopedia. This was the hybridizing of CS logic and Design thinking.',
      icon: Terminal,
      color: 'text-[var(--accent-blue)]'
    },
    {
      year: '2018 - 2022',
      type: 'RUNTIME_EXECUTION',
      title: 'The B2B & Supply Chain Era',
      desc: 'High-load operations. Spent 4 years digitizing Indonesia\'s messy supply chains at STOQO and GudangAda. Learned to hide massive backend complexity behind simple interfaces for warungs and traders.',
      icon: Layers,
      color: 'text-[var(--accent-green)]'
    },
    {
      year: '2022',
      type: 'COMMUNITY_PATCH',
      title: 'Lumina (The Blue Collar Pivot)',
      desc: 'Shifted focus to the working class. Designed job discovery tools for "grey-collar" workers, emphasizing accessibility and high-trust community features.',
      icon: Activity,
      color: 'text-[var(--accent-amber)]'
    },
    {
      year: '2022 - 2025',
      type: 'SYSTEM_UPGRADE',
      title: 'The Great Reshape (Career Break)',
      desc: 'Life forced a hard stop. A major health event triggered a nearly 3-year system refactor. This wasn\'t idle time; it was R&D. I learned to navigate broken healthcare systems, deepening my empathy for users in crisis. I rebuilt my "hardware" (health) and upgraded my "software" (Master\'s degree).',
      icon: AlertTriangle,
      color: 'text-[var(--accent-red)]',
      highlight: true
    },
    {
      year: '2025 - Present',
      type: 'Open for collaboration',
      title: 'Active Deployment',
      desc: 'Back online with a new architecture. Combining Engineering rigor with Design empathy. Currently deploying experimental builds in EdTech and AI.',
      icon: Zap,
      color: 'text-[var(--accent-green)]'
    }
  ];

  // --- DATA: WORK EXPERIENCE (Narration) ---
  const workExperience = [
    {
      company: "Lumina (YC W22)",
      role: "Product Designer",
      period: "May 2022 - Nov 2022",
      narrative: "Designing for the 'working class' economy requires radical honesty. At Lumina, I wasn't just building a job board; I was building a community trust layer for SMEs and blue-collar workers.",
      tags: ["Community Platform", "Blue Collar", "Accessibility"]
    },
    {
      company: "GudangAda",
      role: "Product Designer",
      period: "Jun 2020 - Apr 2022",
      narrative: "This was my crash course in scale. I spearheaded initiatives to optimize the B2B buyer experience within the FMCG supply chain. I learned that in high-volume B2B tools, reducing friction isn't just a UX goal—it's a revenue metric.",
      tags: ["B2B Marketplace", "Logistics", "Design Systems"]
    },
    {
      company: "Du Anyam",
      role: "UI/UX Consultant",
      period: "Jun 2020 - Dec 2020",
      narrative: "A study in social impact. I consulted for a social enterprise empowering rural women through wicker crafts. The interface had to connect rural skills with modern markets.",
      tags: ["Social Enterprise", "Empowerment", "Consulting"]
    },
    {
      company: "STOQO",
      role: "Product Designer",
      period: "Mar 2018 - Apr 2020",
      narrative: "My first deep dive into operational complexity. We helped culinary businesses source materials. My job was to mask the complex backend operations so chefs could focus on cooking.",
      tags: ["F&B Supply Chain", "Operations", "Sourcing"]
    }
  ];

  // --- DATA: SYSTEM MAINTENANCE (Habits) ---
  const streaks = [
    { label: "Learning (Duolingo)", count: "412 Days", icon: Flame, color: "text-orange-500", note: "Consistency over perfection." },
    { label: "Physical Ops (Strava)", count: "Weekly", icon: Activity, color: "text-orange-600", note: "Clearing the cache." },
    { label: "Data Input (Reading)", count: "Daily", icon: BookOpen, color: "text-blue-400", note: "Pattern recognition." },
    { label: "Core Dump (Journal)", count: "Daily", icon: PenLine, color: "text-purple-400", note: "Processing the noise." }
  ];

  // --- DATA: INSTALLED DRIVERS (Tools) ---
  const tools = ["Notion", "Figma", "Strava", "Apple Journal", "VS Code", "Duolingo", "Obsidian"];

  // --- EFFECT: SCROLL PROGRESS ---
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrolled(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- DYNAMIC STYLES ---
  const themeStyles = {
    '--bg-void': isDark ? '#111111' : '#F0F0F3',
    '--bg-surface': isDark ? '#1F1F1F' : '#FFFFFF',
    '--bg-card': isDark ? '#181818' : '#FFFFFF',
    '--text-primary': isDark ? '#F4F4F5' : '#18181B',
    '--text-secondary': isDark ? '#A1A1AA' : '#52525B',
    '--border-color': isDark ? '#262626' : '#E4E4E7',
    '--accent-amber': isDark ? '#F59E0B' : '#D97706',
    '--accent-blue': isDark ? '#3B82F6' : '#2563EB',
    '--accent-green': isDark ? '#10B981' : '#059669',
    '--accent-red': isDark ? '#EF4444' : '#DC2626',
  };

  return (
    <div
      style={themeStyles}
      className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-blue)] selection:text-[#F4F4F5] transition-colors duration-500"
    >

      {/* 1. TEXTURE & LIGHTING */}
      <div className={`fixed inset - 0 z - 0 pointer - events - none opacity - [0.15] ${isDark ? 'mix-blend-overlay' : 'mix-blend-multiply'} `}
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>
      <div className={`fixed inset - 0 z - 0 pointer - events - none transition - opacity duration - 500 ${isDark ? 'opacity-100' : 'opacity-0'} `}
        style={{ background: 'radial-gradient(circle at 70% 20%, rgba(50,50,50,0.4), rgba(17,17,17,1) 80%)' }}>
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear - gradient(${isDark ? '#A1A1AA' : '#000000'} 1px, transparent 1px), linear - gradient(90deg, ${isDark ? '#A1A1AA' : '#000000'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-[var(--bg-surface)]">
        <div className="h-full bg-[var(--accent-green)] shadow-[0_0_10px_var(--accent-green)]" style={{ width: `${scrolled}% ` }}></div>
      </div>

      {/* --- CONTENT --- */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 border-x border-[var(--border-color)] min-h-screen bg-[var(--bg-void)]/80 backdrop-blur-sm shadow-2xl">

        {/* HEADER */}
        <header className="flex justify-between items-center mb-16 border-b border-[var(--border-color)] pb-6 sticky top-0 bg-[var(--bg-void)]/95 backdrop-blur z-40 pt-4 -mt-4">
          <Link to="/" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-xs uppercase tracking-wider group transition-colors">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Main Terminal</span>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </header>

        {/* PROFILE HERO */}
        <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 mb-24 fade-in items-start">

          {/* Avatar Area */}
          <div className="relative group">
            <div className="w-full aspect-square bg-[var(--bg-card)] border border-[var(--border-color)] grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-void)] to-transparent opacity-50 z-10"></div>
              <div className="w-full h-full bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-secondary)]">
                <User size={64} strokeWidth={1} />
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none"></div>
            </div>

            {/* Status Badge */}
            <div className="absolute -bottom-3 -right-3 bg-[var(--bg-surface)] border border-[var(--border-color)] px-3 py-1 flex items-center gap-2 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-green)]"></span>
              </span>
              <span className="font-mono text-[10px] text-[var(--text-secondary)]">ONLINE</span>
            </div>
          </div>

          {/* Intro Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-mono text-[var(--text-primary)] uppercase leading-[1.1] mb-6 tracking-tight">
              Fadly Uzzaki (Zaki)
            </h1>
            <h2 className="text-xl text-[var(--accent-amber)] font-mono mb-8 flex items-center gap-3">
              <span className="opacity-50 text-[var(--text-primary)]">//</span>
              The Human Algorithm
            </h2>

            <div className="prose prose-invert max-w-2xl">
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6 font-light">
                I am a product designer who <strong className="text-[var(--text-primary)]">thinks in systems</strong> but <strong className="text-[var(--text-primary)]">feels in stories</strong>. I hybridize computer science logic with messy, human resilience.
              </p>
              <p className="text-[var(--text-primary)] text-lg leading-relaxed font-serif italic border-l-2 border-[var(--accent-blue)] pl-4">
                "My goal is high function, low friction. I design tools that work for a living—resilient, quiet, and steady—just like the people who use them."
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <MapPin size={14} className="text-[var(--accent-red)]" /> Jakarta
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <Coffee size={14} className="text-[var(--accent-amber)]" /> Fuel: 85%
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <Layers size={14} className="text-[var(--accent-blue)]" /> Stack: Full
              </div>
            </div>

            <div className="mt-8">
              <Link to="/cv" className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors font-mono text-xs uppercase">
                <Download size={14} />
                Download_CV.pdf
              </Link>
            </div>
          </div>
        </section>

        {/* SYSTEM MAINTENANCE (Habits) */}
        <section className="mb-32">
          <div className="flex items-baseline gap-4 mb-12 border-b border-[var(--border-color)] pb-4">
            <span className="font-mono text-4xl text-[var(--text-primary)] opacity-20 font-bold">OPS</span>
            <h2 className="text-2xl font-mono text-[var(--text-primary)] uppercase tracking-tight">System Maintenance</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {streaks.map((habit, idx) => (
              <div key={idx} className="bg-[var(--bg-card)] border border-[var(--border-color)] p-5 text-center group hover:border-[var(--accent-green)] transition-all">
                <habit.icon size={24} className={`mx - auto mb - 3 ${habit.color} opacity - 80 group - hover: opacity - 100 group - hover: scale - 110 transition - transform`} />
                <div className="font-mono text-2xl text-[var(--text-primary)] font-bold mb-1">{habit.count}</div>
                <div className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest mb-2">{habit.label}</div>
                <div className="font-serif italic text-xs text-[var(--text-secondary)] border-t border-[var(--border-color)] pt-2 mt-2 opacity-60 group-hover:opacity-100">
                  "{habit.note}"
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* THE KERNEL LOG (Timeline) */}
        <section className="mb-32 relative">
          <div className="flex items-baseline gap-4 mb-12 border-b border-[var(--border-color)] pb-4">
            <span className="font-mono text-4xl text-[var(--text-primary)] opacity-20 font-bold">LOG</span>
            <h2 className="text-2xl font-mono text-[var(--text-primary)] uppercase tracking-tight">Kernel History</h2>
          </div>

          <div className="relative border-l border-[var(--border-color)] ml-3 md:ml-6 space-y-12">
            {historyLog.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group">

                {/* Timeline Node */}
                <div className={`absolute - left - [5px] md: -left - [5px] top - 1 w - [11px] h - [11px] rounded - full bg - [var(--bg - void)]border - 2 ${item.highlight ? 'border-[var(--accent-red)] animate-pulse' : 'border-[var(--border-color)] group-hover:border-[var(--accent-blue)]'} transition - colors z - 10`}></div>

                <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-12">
                  {/* Date & Type */}
                  <div className="font-mono text-xs">
                    <span className="block text-[var(--text-secondary)] mb-1">{item.year}</span>
                    <span className={`block font - bold ${item.color} `}>{item.type}</span>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon size={18} className={`${item.color} opacity - 80`} />
                      <h3 className="text-xl text-[var(--text-primary)] font-medium">{item.title}</h3>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>
                    {item.highlight && (
                      <div className="mt-4 p-4 bg-[var(--bg-card)] border-l-2 border-[var(--accent-red)] inline-block max-w-xl shadow-lg transform -rotate-1 hover:rotate-0 transition-transform">
                        <p className="font-serif italic text-sm text-[var(--text-primary)] opacity-90">
                          "The 3-year gap wasn't a shutdown. It was a complete system refactor. I am now running on a more resilient kernel."
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RUNTIME EXECUTION LOGS (Work Experience Narration) */}
        <section className="mb-32">
          <div className="flex items-baseline gap-4 mb-12 border-b border-[var(--border-color)] pb-4">
            <span className="font-mono text-4xl text-[var(--text-primary)] opacity-20 font-bold">EXEC</span>
            <h2 className="text-2xl font-mono text-[var(--text-primary)] uppercase tracking-tight">Execution Logs (Experience)</h2>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, idx) => (
              <div key={idx} className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] p-8 md:p-10 hover:border-[var(--accent-blue)] transition-all">
                {/* Decoration: Connection Line */}
                {idx !== workExperience.length - 1 && (
                  <div className="absolute left-10 bottom-0 top-[100%] w-px bg-[var(--border-color)] h-8 z-0"></div>
                )}

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase size={16} className="text-[var(--accent-blue)]" />
                      <h3 className="font-mono text-xl text-[var(--text-primary)]">{job.role}</h3>
                    </div>
                    <span className="font-mono text-sm text-[var(--text-secondary)]">{job.company}</span>
                  </div>
                  <span className="font-mono text-xs text-[var(--text-secondary)] border border-[var(--border-color)] px-3 py-1 rounded-full self-start">
                    {job.period}
                  </span>
                </div>

                <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-light mb-6 font-serif italic border-l-2 border-[var(--border-color)] pl-6 group-hover:border-[var(--accent-blue)] transition-colors">
                  "{job.narrative}"
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] text-[var(--accent-blue)] bg-[var(--bg-void)] px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INSTALLED DRIVERS (Tools) */}
        <section className="mb-24">
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] p-8 text-center">
            <h3 className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest mb-6">Installed Drivers & Protocols</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <span key={tool} className="px-3 py-1 bg-[var(--bg-void)] border border-[var(--border-color)] text-[var(--text-primary)] font-mono text-xs rounded hover:border-[var(--accent-green)] transition-colors cursor-default">
                  {tool}.exe
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SYSTEM CONFIG (Personal JSON) */}
        <section className="mb-12">
          <div className="bg-[#0D0D0D] border border-[var(--border-color)] p-6 md:p-10 font-mono text-sm overflow-x-auto rounded-sm shadow-inner relative group">
            {/* Marginalia Note */}
            <div className="absolute -top-3 right-10 bg-[var(--accent-amber)] text-black px-3 py-1 font-serif italic text-xs transform rotate-2 shadow-lg group-hover:rotate-0 transition-transform">
              Config is stable but weird.
            </div>

            <div className="flex gap-2 mb-4 opacity-50">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="text-[var(--text-secondary)]">
              <span className="text-[var(--accent-blue)]">const</span> <span className="text-[var(--accent-amber)]">Operator</span> = {'{'}
              <br />
              &nbsp;&nbsp;<span className="text-[var(--text-primary)]">"name"</span>: <span className="text-[var(--accent-green)]">"Fadly Uzzaki"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-[var(--text-primary)]">"quirks"</span>: [<span className="text-[var(--accent-green)]">"Talks to rubber ducks"</span>, <span className="text-[var(--accent-green)]">"Over-organizes playlists"</span>],
              <br />
              &nbsp;&nbsp;<span className="text-[var(--text-primary)]">"fuel"</span>: [<span className="text-[var(--accent-green)]">"Coffee"</span>, <span className="text-[var(--accent-green)]">"Lo-Fi Beats"</span>],
              <br />
              &nbsp;&nbsp;<span className="text-[var(--text-primary)]">"principles"</span>: {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[var(--text-primary)]">"feasibility"</span>: <span className="text-[var(--accent-blue)]">true</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[var(--text-primary)]">"empathy"</span>: <span className="text-[var(--accent-blue)]">true</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[var(--text-primary)]">"panic_mode"</span>: <span className="text-[var(--accent-red)]">false</span> <span className="text-[var(--text-secondary)] opacity-50">// Stay calm in floods/crises</span>
              <br />
              &nbsp;&nbsp;{'}'}
              <br />
              {'}'};
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <section className="border-t border-[var(--border-color)] pt-12 text-center pb-24">
          <p className="font-mono text-xs text-[var(--text-secondary)] uppercase">
            // End of Log · Fadly Uzzaki © 2025
          </p>
        </section>

      </main>
    </div>
  );
};

export default AboutPage;