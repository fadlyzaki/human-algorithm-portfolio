import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Terminal, Cpu, BookOpen, Coffee, MapPin, Headphones,
  Activity, AlertTriangle, GitCommit, Download, Sun, Moon,
  PenTool, Zap, Flame, PenLine, Layers, Briefcase, User,
  Database, Server, Wifi, Layout, Shield, Globe
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';
import SystemMonitor from '../components/SystemMonitor';
import ChaosSlider from '../components/ChaosSlider';
import SemanticMemory from '../components/SemanticMemory';
import Footer from '../components/Footer';

/* --- THEME CONFIGURATION ---
   Consistent with Human Algorithm Design System v2.0
*/

const AboutPage = () => {
  const { isDark, setIsDark } = useTheme();
  const { t, language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(0);
  const [chaosStrength, setChaosStrength] = useState(0);

  // JSON Config State

  // --- MERGED DATA: SYSTEM RUNTIME LOG (Chronological) ---
  const runtimeLog = [
    {
      year: '2015 - 2018',
      type: 'BOOT_SEQUENCE',
      title: t('about.log_1_title'),
      desc: t('about.log_1_desc'),
      icon: Terminal,
      color: 'text-[var(--accent-blue)]',
      category: 'bio'
    },
    {
      year: 'Mar 2018 - Apr 2020',
      type: 'EXECUTION_LOG',
      title: t('about.log_2_title'),
      company: 'STOQO',
      link: 'efficiency',
      desc: t('about.log_2_desc'),
      tags: ["F&B Supply Chain", "Operations", "Sourcing"],
      icon: Layers,
      color: 'text-[var(--text-primary)]',
      category: 'work'
    },
    {
      year: 'Jun 2020 - Apr 2022',
      type: 'EXECUTION_LOG',
      title: t('about.log_3_title'),
      company: 'GudangAda',
      link: 'commerce',
      desc: t('about.log_3_desc'),
      tags: ["B2B Marketplace", "Logistics", "Design Systems"],
      icon: Layers,
      color: 'text-[var(--text-primary)]',
      category: 'work'
    },
    {
      year: 'Jun 2020 - Dec 2020',
      type: 'EXECUTION_LOG',
      title: t('about.log_4_title'),
      company: 'Du Anyam',
      link: null,
      desc: t('about.log_4_desc'),
      tags: ["Social Enterprise", "Empowerment", "Consulting"],
      icon: Briefcase,
      color: 'text-[var(--text-primary)]',
      category: 'work'
    },
    {
      year: 'May 2022 - Nov 2022',
      type: 'EXECUTION_LOG',
      title: t('about.log_5_title'),
      company: 'Lumina',
      link: 'workforce',
      desc: t('about.log_5_desc'),
      tags: ["Community Platform", "Blue Collar", "Accessibility"],
      icon: Activity,
      color: 'text-[var(--text-primary)]',
      category: 'work'
    },
    {
      year: '2022 - 2025',
      type: 'SYSTEM_UPGRADE',
      title: t('about.log_6_title'),
      desc: t('about.log_6_desc'),
      icon: AlertTriangle,
      color: 'text-[var(--accent-red)]',
      highlight: true,
      category: 'bio'
    },
    {
      year: '2025 - Present',
      type: 'ACTIVE_DEPLOYMENT',
      title: t('about.log_7_title'),
      desc: t('about.log_7_desc'),
      icon: Zap,
      color: 'text-[var(--accent-green)]',
      category: 'bio'
    }
  ];

  // --- DATA: SYSTEM MAINTENANCE (Habits) ---
  const streaks = [
    { label: "Duolingo", frequency: "Daily", icon: Flame, color: "text-orange-500", note: t('about.habit_consistency'), url: "https://www.duolingo.com/profile/fadlyzaki" },
    { label: "Strava", frequency: "Daily", icon: Activity, color: "text-orange-600", note: t('about.habit_cache'), url: "https://www.strava.com/athletes/129304799" },
    { label: "Goodreads", frequency: "Daily 10 mins", icon: BookOpen, color: "text-blue-400", note: t('about.habit_pattern'), url: "https://www.goodreads.com/user/show/32928962-fadlyzaki" },
    { label: "Substack", frequency: "Weekly", icon: PenLine, color: "text-purple-400", note: t('about.habit_noise'), url: "https://substack.com/@fadlyzaki?" }
  ];

  // --- DATA: INSTALLED DRIVERS (Tools Mapped to Icons) ---
  const toolsData = [
    { name: "Figma", icon: Layout },
    { name: "React / Vite", icon: Cpu },
    { name: "Tailwind CSS", icon: PenTool },
    { name: "Node.js", icon: Server },
    { name: "PostgreSQL", icon: Database },
    { name: "Notion", icon: BookOpen },
    { name: "Obsidian", icon: PenLine },
    { name: "Physical Ops", icon: Activity }
  ];

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

  // Chaos Style Generator
  const chaosStyle = useMemo(() => {
    if (chaosStrength === 0) return {};

    // Use deterministic "randomness" based on chaosStrength to satisfy purity
    // We add arbitrary multipliers to create pseudo-random distribution
    const s = chaosStrength;
    const randomX = (Math.sin(s * 12.34) - 0.5) * s * 0.5;
    const randomY = (Math.cos(s * 56.78) - 0.5) * s * 0.5;
    const skew = (Math.sin(s * 90.12) - 0.5) * s * 0.1;
    const blur = s * 0.05;

    return {
      transform: `translate(${randomX}px, ${randomY}px) skew(${skew}deg)`,
      filter: `blur(${blur}px) contrast(${100 + s}%)`,
      transition: 'all 0.1s ease'
    };
  }, [chaosStrength]);

  const getChaosStyle = () => chaosStyle;

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
      className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-blue)] selection:text-[#F4F4F5] transition-colors duration-500 overflow-x-hidden"
    >

      {/* 1. TEXTURE & LIGHTING */}
      <div className={`fixed inset-0 z-0 pointer-events-none opacity-[0.15] ${isDark ? 'mix-blend-overlay' : 'mix-blend-multiply'}`}
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>
      <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'radial-gradient(circle at 70% 20%, rgba(50,50,50,0.4), rgba(17,17,17,1) 80%)' }}>
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${isDark ? '#A1A1AA' : '#000000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#A1A1AA' : '#000000'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-[var(--bg-surface)]">
        <div className="h-full bg-[var(--accent-green)] shadow-[0_0_10px_var(--accent-green)]" style={{ width: `${scrolled}%` }}></div>
      </div>

      {/* --- CONTENT --- */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 border-x border-[var(--border-color)] min-h-screen bg-[var(--bg-void)]/80 backdrop-blur-sm shadow-2xl">

        {/* HEADER */}
        <header className="flex justify-between items-center mb-16 border-b border-[var(--border-color)] pb-6 sticky top-0 bg-[var(--bg-void)]/95 backdrop-blur z-40 pt-4 -mt-4">
          <Link to="/" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-xs uppercase tracking-wider group transition-colors">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>{t('about.main_terminal')}</span>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title="Switch Language"
            >
              <Globe size={18} />
              <span className="font-mono text-xs uppercase tracking-widest">{language}</span>
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </header>

        {/* PROFILE HERO - INTERACTIVE */}
        <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 mb-24 fade-in items-start">

          {/* Avatar Area */}
          <div className="relative group" style={getChaosStyle()}>
            <div className="w-full aspect-[3/4] bg-[var(--bg-card)] border border-[var(--border-color)] relative group-hover:border-[var(--accent-blue)] transition-all duration-700 overflow-hidden rounded-lg shadow-2xl">
              {/* Profile Image */}
              <img
                src="/about-portrait-new.jpg"
                alt="Fadly Uzzaki"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
              />

              {/* Tint Overlays */}
              <div className="absolute inset-0 bg-[var(--accent-blue)]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-void)]/80 via-transparent to-transparent opacity-60 z-10"></div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none z-20"></div>

              {/* Corner Glitch Marker */}
              <div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-white/20 z-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b border-l border-white/20 z-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Status Badge */}
            <div className="absolute -bottom-3 -right-3 bg-[var(--bg-surface)] border border-[var(--border-color)] px-3 py-1 flex items-center gap-2 shadow-lg rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-green)]"></span>
              </span>
              <span className="font-mono text-[10px] text-[var(--text-secondary)]">OPEN TO WORK</span>
            </div>
          </div>

          {/* Intro Text & Chaos Control */}
          <div>
            <div style={getChaosStyle()}>
              <h1 className="text-4xl md:text-5xl font-mono text-[var(--text-primary)] uppercase leading-[1.1] mb-6 tracking-tight">
                Fadly Uzzaki (Zaki)
              </h1>
              <h2 className="text-xl text-[var(--accent-amber)] font-mono mb-8 flex items-center gap-3">
                <span className="opacity-50 text-[var(--text-primary)]">//</span>
                {t('about.intro_title')}
              </h2>

              <div className="prose prose-invert max-w-2xl">
                <p className="text-xl md:text-2xl text-[var(--text-primary)] leading-tight mb-8 font-serif italic opacity-90">
                  {t('home.about_quote')}
                </p>
                <div className="text-[var(--text-secondary)] space-y-6 text-lg font-light leading-relaxed">
                  <p dangerouslySetInnerHTML={{ __html: t('about.intro_p1').replace(/\*\*(.*?)\*\*/g, '<span class="text-[var(--text-primary)] font-medium">$1</span>') }} />
                  <p dangerouslySetInnerHTML={{ __html: t('about.intro_p2').replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--text-primary)]">$1</strong>') }} />
                  <p dangerouslySetInnerHTML={{ __html: t('about.intro_p3').replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--text-primary)]">$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
                  <p dangerouslySetInnerHTML={{ __html: t('about.intro_p4').replace(/\*\*(.*?)\*\*/g, '<span class="text-[var(--text-primary)] font-medium">$1</span>') }} />
                </div>
                <ScrollReveal>
                  <blockquote className="border-l-2 border-[var(--accent-amber)] pl-6 py-2 mt-8 text-xl md:text-2xl text-[var(--text-primary)] font-light">
                    <span dangerouslySetInnerHTML={{ __html: t('about.quote_full').replace(/\*\*(.*?)\*\*/g, '<span class="text-[var(--text-primary)] font-medium bg-[var(--accent-amber)]/20 px-1">$1</span>') }} />
                  </blockquote>
                </ScrollReveal>
              </div>
            </div>

            {/* INTERACTIVE COMPONENT: Chaos Slider */}
            <div className="mt-12 max-w-sm">
              <ChaosSlider value={chaosStrength} onChange={setChaosStrength} />
            </div>

            <div className="mt-8">
              <Link to="/cv" className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors font-mono text-xs uppercase rounded-lg">
                <Download size={14} />
                {t('about.download_cv')}
              </Link>
            </div>
          </div>
        </section>


        {/* SYSTEM MAINTENANCE (Habits) */}
        <section className="mb-32">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-12 border-b border-[var(--border-color)] pb-4">
              <span className="font-mono text-4xl text-[var(--text-primary)] opacity-20 font-bold">{t('about.section_ops')}</span>
              <h2 className="text-2xl font-mono text-[var(--text-primary)] uppercase tracking-tight">{t('about.section_maintenance')}</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {streaks.map((habit, idx) => (
                <a
                  key={idx}
                  href={habit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--bg-card)] border border-[var(--border-color)] p-6 text-center group hover:border-[var(--accent-green)] hover:bg-[var(--accent-green)]/5 transition-all rounded-lg cursor-pointer"
                >
                  <habit.icon size={28} className={`mx-auto mb-3 ${habit.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                  <div className="font-mono text-sm text-[var(--text-primary)] font-bold mb-1">{habit.label}</div>
                  <div className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest mb-3 opacity-60">{habit.frequency}</div>
                  <div className="font-serif italic text-xs text-[var(--text-secondary)] border-t border-[var(--border-color)] pt-3 mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    "{habit.note}"
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* UNIFIED SYSTEM RUNTIME LOG (Bio + Work) */}
        <section className="mb-32 relative">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-12 border-b border-[var(--border-color)] pb-4">
              <span className="font-mono text-4xl text-[var(--text-primary)] opacity-20 font-bold">{t('about.section_log')}</span>
              <h2 className="text-2xl font-mono text-[var(--text-primary)] uppercase tracking-tight">{t('about.section_runtime')}</h2>
            </div>
          </ScrollReveal>

          <div className="relative border-l border-[var(--border-color)] ml-3 md:ml-6 space-y-12">
            {runtimeLog.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative pl-8 md:pl-12 group">
                  {/* Timeline Node */}
                  <div className={`absolute -left-[5px] md:-left-[5px] top-1 w-[11px] h-[11px] rounded-full bg-[var(--bg-void)] border-2 ${item.highlight ? 'border-[var(--accent-red)] animate-pulse' : 'border-[var(--border-color)] group-hover:border-[var(--accent-blue)]'} transition-colors z-10`}></div>

                  <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-12">
                    {/* Date & Type */}
                    <div className="font-mono text-xs">
                      <span className="block text-[var(--text-secondary)] mb-1">{item.year}</span>
                      <span className={`block font-bold ${item.color}`}>{item.type}</span>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon size={18} className={`${item.color} opacity-80`} />
                        <h3 className="text-xl text-[var(--text-primary)] font-medium">{item.title}</h3>
                      </div>

                      <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-4">
                        {item.desc}
                      </p>

                      {/* WORK ITEM SPECIFIC EXTRAS */}
                      {item.category === 'work' && (
                        <>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.tags.map(tag => (
                              <span key={tag} className="font-mono text-[10px] text-[var(--accent-blue)] bg-[var(--bg-void)] px-2 py-1 rounded border border-[var(--border-color)]">
                                #{tag}
                              </span>
                            ))}
                          </div>

                          {item.link && (
                            <Link
                              to={`/work/${item.link}`}
                              className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-primary)] hover:text-[var(--accent-blue)] transition-colors border-b border-[var(--text-primary)] hover:border-[var(--accent-blue)] pb-0.5"
                            >
                              {t('about.log_explore')}
                            </Link>
                          )}
                        </>
                      )}

                      {/* BIO ITEM SPECIFIC EXTRAS */}
                      {item.highlight && (
                        <div className="mt-4 p-4 bg-[var(--bg-card)] border-l-2 border-[var(--accent-red)] inline-block max-w-xl shadow-lg transform -rotate-1 hover:rotate-0 transition-transform rounded-e-lg">
                          <p className="font-serif italic text-sm text-[var(--text-primary)] opacity-90">
                            {t('about.log_6_quote')}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* SEMANTIC MEMORY (Interactive RAG) */}
        <section className="mb-12">
          <ScrollReveal>
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] p-8 rounded-xl shadow-lg relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-green)] opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div className="mb-8">
                <h2 className="text-2xl font-mono text-[var(--text-primary)] mb-2">System Consciousness</h2>
                <p className="text-[var(--text-secondary)] text-sm max-w-2xl">
                  Interact with the system directly. Query the database for insights on my philosophy, protocols, and history.
                </p>
              </div>

              <SemanticMemory />
            </div>
          </ScrollReveal>
        </section>

        {/* FOOTER */}
        <section>
          <Footer />
        </section>

      </main>
    </div>
  );
};

export default AboutPage;