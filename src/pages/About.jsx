import React, { useState, useEffect, useMemo, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Terminal, Cpu, BookOpen, Coffee, MapPin, Headphones,
  Activity, AlertTriangle, GitCommit, Download, Sun, Moon,
  PenTool, Zap, Flame, PenLine, Layers, Briefcase, User,
  Database, Server, Wifi, Layout, Shield, Globe, ScanEye, Award, Search,
  ArrowUpRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import useThemeStyles from '../hooks/useThemeStyles';
import { useLanguage } from '../context/LanguageContext';
import { useHandCursor } from '../context/HandCursorContext';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import Treasure from '../components/Treasure';
import SystemMonitor from '../components/SystemMonitor';
import ChaosSlider from '../components/ChaosSlider';
const NeuralEcho = lazy(() => import('../components/NeuralEcho'));
import Footer from '../components/Footer';
import RichText from '../components/RichText';
import ProfileScanner from '../components/ProfileScanner';
import BackButton from '../components/BackButton';
import ScrollProgressBar from '../components/ScrollProgressBar';

/* --- THEME CONFIGURATION ---
   Consistent with Human By Design System v2.0
*/

const AboutPage = () => {
  const { isDark, setIsDark } = useTheme();
  const themeStyles = useThemeStyles();
  const { t, language, toggleLanguage } = useLanguage();
  const { isGestureMode, toggleGestureMode } = useHandCursor();
  const [chaosStrength, setChaosStrength] = useState(0);


  // JSON Config State

  // --- MERGED DATA: SYSTEM RUNTIME LOG (Chronological) ---
  const runtimeLog = [
    {
      year: '2025 - Present',
      type: 'ACTIVE_DEPLOYMENT',
      title: t('about.log_7_title'),
      desc: t('about.log_7_desc'),
      icon: Zap,
      color: 'text-[var(--accent-green)]',
      category: 'bio'
    },
    {
      year: 'July 2024 - Jan 2026',
      type: 'KNOWLEDGE_INSTALL',
      title: t('about.log_master_title'),
      desc: t('about.log_master_desc'),
      icon: BookOpen,
      color: 'text-[var(--accent-blue)]',
      category: 'bio'
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
      year: '2015 - 2018',
      type: 'BOOT_SEQUENCE',
      title: t('about.log_1_title'),
      desc: t('about.log_1_desc'),
      icon: Terminal,
      color: 'text-[var(--accent-blue)]',
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



  // --- DATA: CREATIVE PROCESSES (Habits) ---
  const creativeProcesses = [
    { name: "PIANO_DRIVER.EXE", icon: Headphones, url: "https://www.instagram.com/stories/highlights/18053183015382725/" },
    { name: "ANALOG_SKETCH", icon: PenLine, url: "https://www.instagram.com/stories/highlights/18100704214828888/" },
    { name: "DIGITAL_CANVAS", icon: PenTool, url: "https://www.instagram.com/stories/highlights/18140818381062819/" },
    { name: "SYSTEM_IDLE", icon: Coffee } // Filler process
  ];

  // --- DATA: KNOWLEDGE UPGRADES (Certifications) ---
  const certifications = [
    {
      title: "Become Product Manager",
      issuer: "Udemy",
      date: "Jul 2023",
      skills: ["Product Design", "Product Management", "Product Development"],
      icon: Briefcase,
      url: "https://www.udemy.com/certificate/UC-b40694fa-a656-48f3-b8e9-3dd6c9b70acb/"
    },
    {
      title: "Digital Marketing Workshop",
      issuer: "RevoU",
      date: "Oct 2021",
      skills: ["Digital Marketing", "SEO", "Content Strategy"],
      icon: Globe,
      url: "https://certificates.revou.co/fadly-uzzaki-certificate-attendance-gadmw21.pdf"
    },
    {
      title: "Input and Interaction",
      issuer: "Coursera",
      date: "Aug 2019",
      skills: ["Interaction Design", "UI Design", "HCI"],
      id: "GE4JFF2ZZHYK",
      icon: Layout,
      url: "https://www.coursera.org/account/accomplishments/verify/GE4JFF2ZZHYK"
    },
    {
      title: "Information Design",
      issuer: "Coursera",
      date: "Jul 2019",
      skills: ["Data Visualization", "Information Architecture", "Visual Design"],
      id: "VLX7M5BE5TFF",
      icon: Layers,
      url: "https://www.coursera.org/account/accomplishments/verify/VLX7M5BE5TFF"
    },
    {
      title: "Design Kit: Human-Centered Design",
      issuer: "+Acumen / IDEO.org",
      date: "May 2018",
      skills: ["HCD", "Prototyping", "Design Research"],
      id: "3385-1632464",
      icon: User,
      url: "https://plusacumen.novoed.com/#!/courses/design-kit-2018-2/statements/1632464"
    },
    {
      title: "Conducting Usability Testing",
      issuer: "IxDF",
      date: "Oct 2018",
      skills: ["Usability Testing", "User Research", "Test Facilitation"],
      id: "35436",
      icon: Shield,
      url: "https://www.interaction-design.org/members/muhammad-fadly-uzzaki/certificate/course/PjL4tmJSJ"
    }
  ];



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



  return (
    <div
      style={themeStyles}
      className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-blue)] selection:text-[#F4F4F5] transition-colors duration-500 overflow-x-hidden"
    >
      <SEO
        title="About Me"
        description="A timeline of my design career, philosophy, and chaos containment strategies."
      />

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

      {/* Progress Bar (Isolated Component) */}
      <ScrollProgressBar />

      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full z-50">
        <header className="relative flex justify-between items-center px-6 py-6 bg-[var(--bg-void)]/95 backdrop-blur border-b border-[var(--border-color)]">
          <BackButton to="/" label={t('about.main_terminal')} />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-sm uppercase tracking-widest text-[var(--text-secondary)] hidden md:block">
            ABOUT
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleGestureMode}
              className={`transition-colors ${isGestureMode ? 'text-[var(--accent-red)] animate-pulse' : 'text-[var(--text-secondary)] hover:text-[var(--accent-blue)]'}`}
              title="Toggle Hand Tracking"
            >
              <ScanEye size={18} />
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title="Switch Language"
            >
              <Globe size={18} />
              <span className="font-mono text-xs uppercase tracking-widest">{language}</span>
            </button>
          </div>
        </header>
      </div>

      {/* --- CONTENT --- */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 border-x border-[var(--border-color)] min-h-screen bg-[var(--bg-void)]/80 backdrop-blur-sm shadow-2xl">

        {/* Padding for fixed header */}
        <div className="h-24 md:h-32"></div>

        {/* PROFILE HERO - INTERACTIVE */}
        <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 mb-24 fade-in items-start">

          {/* Avatar Area */}
          <div className="flex flex-col gap-6">
            <div className="relative group" style={getChaosStyle()}>
              <ProfileScanner isDark={isDark} />
            </div>

            {/* Download CV Button - Moved here */}
            <div className="mt-6 flex justify-center">
              <Link to="/cv" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] text-[var(--text-card-secondary)] hover:text-[var(--accent-blue)] transition-all font-mono text-sm uppercase rounded-lg shadow-sm hover:shadow-md group">
                <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                <span>{t('about.download_cv')}</span>
              </Link>
            </div>
          </div>

          {/* Intro Text & Chaos Control */}
          <div>
            <div style={getChaosStyle()}>
              <h1 className="text-4xl md:text-5xl font-mono text-[var(--text-primary)] uppercase leading-[1.1] mb-6 tracking-tight">
                Fadly Uzzaki 🧢 (Zaki)
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
                  <p><RichText text={t('about.intro_p1')} /></p>
                  <p><RichText text={t('about.intro_p2')} /></p>
                  <p><RichText text={t('about.intro_p3')} /></p>
                  <p><RichText text={t('about.intro_p4')} /></p>
                </div>
                <ScrollReveal>
                  <blockquote className="border-l-2 border-[var(--accent-amber)] pl-6 py-2 mt-8 text-xl md:text-2xl text-[var(--text-primary)] font-light">
                    <RichText text={t('about.quote_full')} />
                  </blockquote>
                </ScrollReveal>
              </div>
            </div>

            {/* INTERACTIVE COMPONENT: Chaos Slider */}
            <div className="mt-12 max-w-sm relative">
              <Treasure
                id="about-chaos"
                className="top-0 right-0"
                type="gem"
              >
                CHAOS_LEVEL = MAX
              </Treasure>
              <ChaosSlider value={chaosStrength} onChange={setChaosStrength} />
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
                  <div className="font-mono text-sm text-[var(--text-card)] font-bold mb-1">{habit.label}</div>
                  <div className="font-mono text-[10px] text-[var(--text-card-secondary)] uppercase tracking-widest mb-3 opacity-60">{habit.frequency}</div>
                  <div className="font-serif italic text-xs text-[var(--text-card-secondary)] border-t border-[var(--border-color)]/20 pt-3 mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    "{habit.note}"
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </section>
        {/* KNOWLEDGE UPGRADES (Certifications) */}
        <section className="mb-32">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-12 border-b border-[var(--border-color)] pb-4">
              <span className="font-mono text-4xl text-[var(--text-primary)] opacity-20 font-bold">{t('about.section_edu')}</span>
              <h2 className="text-2xl font-mono text-[var(--text-primary)] uppercase tracking-tight">{t('about.section_knowledge_upgrades')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] p-0 hover:border-[var(--accent-blue)] transition-all duration-500 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-xl hover:shadow-[var(--accent-blue)]/5 origin-center"
                >
                  {/* Visual ID / Side Bar */}
                  <div className="md:w-16 bg-[var(--bg-void)]/50 md:border-r border-[var(--border-color)] flex md:flex-col items-center justify-center p-3 gap-3">
                    <div className="p-2 bg-[var(--bg-card)] rounded-lg text-[var(--accent-blue)] shadow-inner border border-[var(--border-color)]/20">
                      <cert.icon size={20} />
                    </div>
                    <div className="font-mono text-[8px] text-[var(--text-card-secondary)] opacity-40 uppercase tracking-tighter md:rotate-180 md:[writing-mode:vertical-lr]">
                      REF_{2048 + idx}
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-grow p-6 relative">
                    {/* Background ID Watermark */}
                    <div className="absolute top-4 right-4 font-mono text-[40px] font-black text-[var(--text-card)] opacity-[0.02] select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                      0{idx + 1}
                    </div>

                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-[9px] px-2 py-0.5 bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] rounded-full font-bold uppercase tracking-widest border border-[var(--accent-blue)]/20">
                            {cert.issuer}
                          </span>
                          <span className="font-mono text-[10px] text-[var(--text-card-secondary)] opacity-60">
                            {cert.date}
                          </span>
                        </div>
                        <h3 className="font-mono text-base md:text-lg text-[var(--text-card)] font-bold leading-tight group-hover:text-[var(--accent-blue)] transition-colors">
                          {cert.title}
                        </h3>
                      </div>

                      {cert.skills && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {cert.skills.map(skill => (
                            <span key={skill} className="text-[9px] font-mono text-[var(--text-card-secondary)] py-0.5 px-2 rounded-md bg-[var(--bg-void)]/30 border border-[var(--border-color)]/20 whitespace-nowrap">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto flex justify-between items-center pt-4 border-t border-[var(--border-color)]/10">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-mono text-[8px] text-[var(--text-card-secondary)] opacity-40 uppercase">Certificate_ID</span>
                          <span className="font-mono text-[9px] text-[var(--text-card-secondary)] opacity-80 select-all">
                            {cert.id || 'N/A'}
                          </span>
                        </div>
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-void)]/20 border border-[var(--border-color)] hover:border-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] rounded-lg transition-all font-mono text-[10px] uppercase tracking-widest font-bold"
                        >
                          {t('about.show_credential')}
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                    <div className="absolute top-0 right-0 border-t-2 border-r-2 border-[var(--accent-blue)] w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* BACKGROUND PROCESSES (Creative Habits) */}
        <section className="mb-32">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-mono text-sm text-[var(--accent-blue)] opacity-60 uppercase tracking-widest">// BACKGROUND_TASKS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-mono text-[var(--text-primary)] uppercase tracking-tight mb-4"> Creative Subroutines</h2>
                <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-6">
                  These non-essential processes run in the background to prevent system overheating.
                  Click on a process to view the raw output log (Instagram).
                </p>
              </div>
              <div>
                <SystemMonitor skills={creativeProcesses} />
              </div>
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
                          <p className="font-serif italic text-sm text-[var(--text-card)]">
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
                <h2 className="text-2xl font-mono text-[var(--text-card)] mb-2">{t('about.neural_echo.title')}</h2>
              </div>

              <Suspense fallback={<div className="h-64 flex items-center justify-center text-[var(--accent-blue)] animate-pulse">Initializing Semantic Core...</div>}>
                <NeuralEcho />
              </Suspense>
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