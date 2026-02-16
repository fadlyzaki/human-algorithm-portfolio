import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Terminal, Cpu, BookOpen, ArrowRight, ArrowUp, GitCommit,
  Maximize2, Minimize2, Mail, FileText, User, Headphones,
  MapPin, Coffee, Sun, Moon, X, Grid, Activity, Users,
  Heart, PenTool, Languages, Video, ScanEye, FileJson,
  CalendarClock, ExternalLink, Layers, Smartphone, Filter, Siren,
  FileSearch, Utensils, LayoutGrid, Archive, ArrowUpRight, Linkedin, Instagram, Dribbble,
  MessageSquare, MessageCircle, ShoppingBag, ShieldCheck, Tag, Box, Truck, Trophy, Scan, Layout, AlertTriangle, Monitor,
  Flame, PenLine, Globe
} from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Treasure from '../components/Treasure';
import DraggablePhoto from '../components/DraggablePhoto';
import ProfileScanner from '../components/ProfileScanner';
import ProjectCard from '../components/ProjectCard';
import ScrollReveal from '../components/ScrollReveal';
import WorkBento from '../components/WorkBento';
import { useTheme } from '../context/ThemeContext';
import useThemeStyles from '../hooks/useThemeStyles';
import { useHandCursor } from '../context/HandCursorContext';
import { useLanguage } from '../context/LanguageContext';
import { SIDE_PROJECTS, WORK_CLUSTERS } from '../data/portfolioData';
import RichText from '../components/RichText';
import ProgressBar from '../components/ProgressBar';
import StickyNote from '../components/StickyNote';
import SectionTitle from '../components/SectionTitle';
import NavigationMenu from '../components/NavigationMenu';

// --- HELPERS ---
const IconMapper = ({ iconName, ...props }) => {
  const icons = {
    Terminal, Cpu, BookOpen, GitCommit, Users, Heart, PenTool, Activity,
    MessageSquare, MessageCircle, ShoppingBag, ShieldCheck, Tag, Box,
    Truck, Trophy, Scan, Layout, Calendar: CalendarClock, FileText, AlertTriangle,
    Layers, Smartphone, Languages, Video, ScanEye, User, Mail, Monitor
  };
  const IconComponent = icons[iconName] || GitCommit;
  return <IconComponent {...props} />;
};

// --- COMPONENTS ---




// --- MAIN APP ---

const Portfolio = () => {
  /* --- STATE & HOOKS --- */
  const { isDark, setIsDark } = useTheme();
  const themeStyles = useThemeStyles();
  const { isGestureMode, toggleGestureMode } = useHandCursor();
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const navigate = useNavigate();
  const lastScrollY = useRef(0);
  const [substackPosts] = useState(() => [
    {
      title: "Why Reducing Steps Is Better Than Adding Delight",
      description: "Delight is often a mask for poor usability. In this log, I explore why removing friction is the highest form of respect for the user.",
      pubDate: "2026-01-28",
      link: "https://fadlyzaki.substack.com"
    },
    {
      title: "The Human Algorithm: Designing for Resilience",
      description: "Resilient systems aren't the ones that never break—they're the ones designed to hold you when you do. A deep dive into my design philosophy.",
      pubDate: "2026-01-15",
      link: "https://fadlyzaki.substack.com"
    },
    {
      title: "Cognitive Load and the Paradox of Choice",
      description: "Every unnecessary feature is a tax on the user's attention. How we can build more focused, purposeful tools.",
      pubDate: "2026-01-05",
      link: "https://fadlyzaki.substack.com"
    }
  ]);
  const [isSubstackLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;


      // Smart Navbar Logic
      // Only trigger if difference is substantial to avoid flicker
      if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 50 && !isGestureMode) {
          setShowNav(false); // Scrolling DOWN -> HIDE (Only if NOT in gesture mode)
        } else {
          setShowNav(true);  // Scrolling UP -> SHOW
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isGestureMode]);

  // REC-02: Handle Hash Scrolling on Mount
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure rendering
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const homeSideProjects = SIDE_PROJECTS.filter(p => !p.hidden).slice(0, 2);
  const isId = language === 'id';

  return (
    <div
      style={themeStyles}
      className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-blue)] selection:text-[#F4F4F5] overflow-x-hidden transition-colors duration-500"
    >
      <SEO />

      {/* 1. TEXTURE */}
      <div className={`fixed inset-0 z-0 pointer-events-none opacity-[0.15] ${isDark ? 'mix-blend-overlay' : 'mix-blend-multiply'}`}
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      {/* 2. LIGHTING */}
      <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(50,50,50,0.4), rgba(17,17,17,1) 80%)' }}>
      </div>

      {/* 3. STRUCTURE */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${isDark ? '#A1A1AA' : '#000000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#A1A1AA' : '#000000'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Progress Bar */}
      <ProgressBar />

      {/* --- NAVIGATION SYSTEM --- */}

      {/* 1. Desktop Top Bar */}
      {/* REC-03: Ensure Navbar stays visible if Gesture Mode is active */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg border-b border-black/8 dark:border-white/10 px-8 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-baseline gap-2 group">
            <span className="font-serif italic text-[var(--text-primary)] text-lg tracking-tight group-hover:text-[var(--accent-blue)] transition-colors">
              Fadly Zaki
            </span>
            <span className="text-[var(--text-secondary)] text-sm font-light hidden sm:inline">
              — Design Engineer
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-7 text-sm text-[var(--text-secondary)]">
              <Link to="/about" className="hover:text-[var(--text-primary)] transition-colors">{t('nav.about')}</Link>
              <a href="#work" className="hover:text-[var(--text-primary)] transition-colors">{t('nav.work')}</a>
              <a href="#side-projects" className="hover:text-[var(--text-primary)] transition-colors">Projects</a>
              <Link to="/process" className="hover:text-[var(--text-primary)] transition-colors">{t('nav.process')}</Link>
              <Link to="/contact" className="hover:text-[var(--text-primary)] transition-colors">{t('nav.contact')}</Link>
            </nav>

            <div className="flex items-center gap-3 border-l border-[var(--border-color)] pl-4">
              <button onClick={toggleGestureMode} className={`p-1 transition-colors ${isGestureMode ? 'text-[var(--accent-red)] animate-pulse' : 'text-[var(--text-secondary)] hover:text-[var(--accent-blue)]'}`} title="Enable Hand Tracking for 'Decryption Lens' Experiment">
                <ScanEye size={16} />
              </button>
              <button onClick={() => setIsDark(!isDark)} className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors p-1" aria-label="Toggle Theme">
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={toggleLanguage}
                className="font-mono text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors text-xs uppercase tracking-widest flex items-center gap-1 p-1"
                title="Switch Language"
              >
                {language}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Mobile Control Deck */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden animate-in slide-in-from-bottom-10 fade-in duration-700">
        <div className="bg-[var(--bg-surface)]/90 backdrop-blur-xl border border-[var(--border-color)] rounded-full px-6 py-3 shadow-2xl flex items-center gap-8">
          <button onClick={() => setIsMenuOpen(true)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex flex-col items-center gap-1" aria-label="Open Menu">
            <Grid size={20} />
          </button>
          <div className="w-px h-6 bg-[var(--border-color)]"></div>
          <button onClick={scrollToTop} className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-24 border-x border-[var(--border-color)] min-h-screen bg-[var(--bg-backdrop)] backdrop-blur-sm transition-colors duration-500 overflow-x-hidden">
        <div className="fade-in pt-12">



          {/* HERO */}
          <section className="relative mb-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 items-start">
              <div className="relative">
                {/* Treasure Hunt */}
                <Treasure
                  id="home-hero"
                  className="-top-8 left-0"
                  type="gem"
                >
                  HIDDEN GEM FOUND!
                </Treasure>

                <h1 className="font-mono text-3xl sm:text-4xl md:text-6xl uppercase leading-tight tracking-tight mb-8 text-[var(--text-primary)]">
                  {t('home.role')} · <br />
                  <span className="text-[var(--text-secondary)] font-serif italic lowercase tracking-normal">{t('home.role_sub')}</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-mono text-[var(--text-primary)] mb-8 pb-4 inline-block border-b-2 border-[var(--accent-amber)]">
                  {t('home.intro_title')}
                </h2>
                <div className="text-[var(--text-secondary)] text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-light">
                  {/* Render helper for markdown-like bolding if needed, or just insert text */}
                  <p className="inline-block">
                    <RichText text={t('home.intro_desc')} />
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#work" className="px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-black font-mono text-sm font-bold uppercase tracking-wider hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 shadow-[4px_4px_0px_var(--accent-blue)] hover:shadow-[2px_2px_0px_var(--accent-blue)] hover:translate-x-[2px] hover:translate-y-[2px] rounded-lg">
                    {t('home.cta_work')} <ArrowRight size={16} />
                  </a>
                  <Link to="/cv" className="px-8 py-4 border border-[var(--border-tag)] text-[var(--text-secondary)] font-mono text-sm uppercase tracking-wide hover:border-[var(--accent-amber)] hover:text-[var(--accent-amber)] transition-all flex items-center justify-center gap-3 rounded-lg">
                    <FileText size={16} /> {t('home.cta_cv')}
                  </Link>
                </div>
              </div>

              <div className="hidden md:block">
                <DraggablePhoto />
                <div className="space-y-4 font-mono text-xs text-[var(--text-secondary)]"></div>
              </div>
            </div>

            {/* Relocated Running Ticker */}
            <div className="border-y border-[var(--border-color)] my-12 overflow-hidden relative z-20 group cursor-default mx-[-1rem] sm:mx-0">
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[var(--bg-backdrop)] via-[var(--bg-backdrop)]/80 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[var(--bg-backdrop)] via-[var(--bg-backdrop)]/80 to-transparent z-10"></div>

              <div className="flex whitespace-nowrap animate-marquee pause-on-hover py-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-12 text-xs font-mono text-[var(--text-secondary)] uppercase tracking-widest px-6">
                    <span className="flex items-center gap-3">
                      <MapPin size={14} className="text-[var(--accent-red)]" />
                      {t('home.status_location')}
                    </span>
                    <a
                      href="https://www.goodreads.com/fadlyzaki"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-[var(--accent-amber)] transition-colors cursor-pointer"
                    >
                      <BookOpen size={14} className="text-[var(--accent-amber)]" />
                      {t('home.status_reading')}
                    </a>
                    <a
                      href="https://music.youtube.com/watch?v=S02l82H9yks&si=9yoJMKDyzHDW8vgZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-[var(--accent-blue)] transition-colors cursor-pointer"
                    >
                      <Headphones size={14} className="text-[var(--accent-blue)]" />
                      {t('home.status_listening')}
                    </a>
                    <a
                      href="https://www.strava.com/athletes/129304799"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-orange-500 transition-colors cursor-pointer"
                    >
                      <Activity size={14} className="text-orange-500" />
                      {t('home.status_training')}
                    </a>
                    <a
                      href="https://substack.com/@fadlyzaki?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-purple-400 transition-colors cursor-pointer"
                    >
                      <PenLine size={14} className="text-purple-400" />
                      {t('home.status_reflecting')}
                    </a>
                    <span className="flex items-center gap-2 text-[var(--accent-green)]">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-green)]"></span>
                      </span>
                      {t('home.status_collab')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <ScrollReveal delay={500}>
              <div className="hidden md:flex flex-nowrap items-center gap-3 mt-8 overflow-x-visible">
                <StickyNote text={t('home.sticky_note')} className="text-[var(--accent-blue)] min-w-[200px]" rotate="lg:-rotate-1" />
                <StickyNote text={t('home.sticky_note_2')} className="text-[var(--accent-amber)] min-w-[200px]" rotate="lg:rotate-1" />
                <StickyNote text={t('home.sticky_note_3')} className="text-[var(--accent-green)] min-w-[200px]" rotate="lg:-rotate-1" />
                <StickyNote text={t('home.sticky_note_4')} className="text-[var(--accent-purple)] min-w-[200px]" rotate="lg:rotate-1" />
              </div>
            </ScrollReveal>
          </section>

          {/* SECTION 1: WORK */}
          <section id="work" className="mb-40 scroll-mt-24 relative">
            <Treasure
              id="home-work"
              className="top-0 left-0"
              type="crown"
            >
              ROYAL TREASURE!
            </Treasure>
            <ScrollReveal>
              <SectionTitle number="1" title={t('home.section_work')} />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WORK_CLUSTERS.map((cluster, idx) => (
                <ScrollReveal key={idx} delay={idx * 150}>
                  <WorkBento cluster={cluster} />
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* SECTION 2: SIDE PROJECTS */}
          <section id="side-projects" className="mb-40 scroll-mt-24">
            <ScrollReveal>
              <SectionTitle number="2" title={t('home.section_side_projects')} link="/side-projects" linkText={t('home.view_experiments')} />
            </ScrollReveal>

            {/* Creative Description */}
            <ScrollReveal>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mb-12 font-light leading-relaxed">
                {t('home.side_projects_desc')}
              </p>
            </ScrollReveal>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Editorial Column */}
              <div className="space-y-10">
                {homeSideProjects.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div
                      className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-blue)]/50 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-2xl overflow-hidden rounded-xl"
                      onClick={() => navigate(`/side-project/${item.id}`)}
                    >
                      {/* Technical Illustration Container (Replaces Banner Image) */}
                      <div className="aspect-[21/9] overflow-hidden relative bg-black dark:bg-white border-b border-[var(--border-color)]">
                        <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                          <ProjectCard type={item.type || 'Web'} expanded={true} id={item.id} image={item.coverImage} />
                        </div>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="font-mono text-[11px] text-black dark:text-white border border-black/10 dark:border-white/10 px-2 py-0.5 rounded-full bg-white dark:bg-black backdrop-blur-md uppercase tracking-wider">
                            EXP_0{i + 1}
                          </span>
                        </div>
                      </div>

                      <div className="p-8 relative z-10">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-3">
                            <IconMapper iconName={item.iconName} size={18} className="text-[var(--accent-blue)]" />
                            <h3 className="text-2xl font-serif italic text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors">
                              {isId ? (item.title_id || item.title) : item.title}
                            </h3>
                          </div>
                          <ArrowUpRight size={18} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-blue)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        </div>

                        <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-6 text-sm line-clamp-2">
                          {isId ? (item.desc_id || item.desc) : item.desc}
                        </p>

                        <div className="flex gap-2 flex-wrap">
                          {item.stack.map((tech, tIdx) => (
                            <span key={tIdx} className="text-[11px] font-mono border border-[var(--border-color)] px-2 py-0.5 rounded-md text-[var(--text-secondary)] uppercase tracking-wider bg-[var(--bg-surface)]/50">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent-blue)] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Call to Action Block */}
              <ScrollReveal delay={300} className="flex flex-col justify-center items-start border-l border-[var(--border-color)] pl-12">
                <Link to="/side-projects" className="group block mb-8 p-6 bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm rotate-1 rounded-lg hover:border-[var(--accent-blue)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer hover:rotate-0">
                  <div className="flex justify-between items-start">
                    <Archive size={32} className="text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent-blue)] transition-colors" />
                    <ArrowRight size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-blue)] group-hover:translate-x-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  <h3 className="text-2xl font-serif italic text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">{t('home.archive_title')}</h3>
                  <p className="text-[var(--text-secondary)] text-sm max-w-xs font-light">
                    {t('home.archive_desc')}
                  </p>
                </Link>
              </ScrollReveal>
            </div>
          </section>



          {/* SECTION 3: ABOUT ME */}
          <section id="about" className="mb-40 scroll-mt-24">
            <SectionTitle number="3" title={t('home.section_about')} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* 1. MAIN BIO (Span 2 cols) */}
              <div className="md:col-span-2 p-8 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <User size={120} strokeWidth={0.5} />
                </div>
                <div className="prose prose-invert max-w-none relative z-10">
                  <p className="text-xl md:text-3xl text-[var(--text-primary)] leading-tight mb-8 font-serif italic opacity-90">
                    {t('home.about_quote')}
                  </p>
                  <div className="text-[var(--text-secondary)] space-y-6 text-lg font-light leading-relaxed">
                    <p><RichText text={t('home.about_p1')} /></p>
                    <p><RichText text={t('home.about_p2')} /></p>
                  </div>
                </div>
              </div>

              {/* 2. VISUAL MODULE (Span 1 col) */}
              <div className="md:col-span-1 h-full min-h-[300px]">
                <ProfileScanner
                  imageSrc="/about-fadly.jpg"
                  aspectRatio="h-full"
                  showBadge={true}
                  className="shadow-xl h-full"
                />
              </div>

              {/* 3. PHILOSOPHY (Span 1 col) */}
              <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl flex flex-col justify-between group hover:border-[var(--accent-amber)] transition-colors">
                <div>
                  <h4 className="font-mono text-[var(--accent-amber)] text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Heart size={14} className="text-[var(--accent-amber)]" /> {t('home.philosophy_title')}
                  </h4>
                  <blockquote className="text-lg text-[var(--text-primary)] font-light leading-relaxed mb-6">
                    <RichText text={t('home.philosophy_quote')} />
                  </blockquote>
                </div>
                <Link to="/about" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--accent-amber)] transition-colors">
                  {t('home.read_philosophy')} <ArrowRight size={14} />
                </Link>
              </div>

              {/* 4. CURRENT FOCUS (Span 1 col) */}
              <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl relative overflow-hidden group hover:border-[var(--accent-blue)] transition-colors">
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Cpu size={64} strokeWidth={1} />
                </div>
                <h4 className="font-mono text-[var(--accent-blue)] text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Cpu size={14} className="text-[var(--accent-blue)]" />
                  {t('home.current_focus')}
                </h4>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed relative z-10">
                  <RichText text={t('home.current_focus_desc')} />
                </p>
              </div>

              {/* 5. RUNTIME METRICS (Span 1 col) */}
              <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:border-[var(--text-primary)] transition-colors">
                <h4 className="font-mono text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Activity size={14} className="text-[var(--text-secondary)]" /> {t('home.personal_interests')}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Duolingo", val: "Daily", icon: Flame, color: "text-orange-500" },
                    { label: "Strava", val: "5K/Wk", icon: Activity, color: "text-orange-600" },
                    { label: "Goodreads", val: "Daily", icon: BookOpen, color: "text-amber-200" },
                    { label: "Substack", val: "Weekly", icon: PenLine, color: "text-purple-400" }
                  ].map((interest, i) => (
                    <div key={i} className="flex flex-col p-2 bg-[var(--bg-surface)] rounded border border-[var(--border-color)]">
                      <interest.icon size={16} className={`mb-2 ${interest.color}`} />
                      <span className="text-xs font-bold text-[var(--text-primary)]">{interest.label}</span>
                      <span className="text-[10px] font-mono text-[var(--text-secondary)] opacity-70">{interest.val}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section >

          {/* SECTION 4: NOTES */}
          {/* SECTION 4: NOTES (HIDDEN) */}
          {/*
          <section id="notes" className="mb-40 scroll-mt-24">
            <SectionTitle
              number="4"
              title={t('home.section_notes')}
              link="https://fadlyzaki.substack.com"
              linkText={t('home.more_logs')}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {isSubstackLoading ? (
                // Loading Skeletons
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="bg-[var(--bg-card)] border border-[var(--border-color)] p-8 h-80 rounded-lg animate-pulse flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-16 h-6 bg-[var(--border-color)] rounded"></div>
                      <div className="w-full h-12 bg-[var(--border-color)] rounded"></div>
                      <div className="w-3/4 h-4 bg-[var(--border-color)] rounded"></div>
                    </div>
                    <div className="w-24 h-4 bg-[var(--border-color)] rounded"></div>
                  </div>
                ))
              ) : substackPosts.length > 0 ? (
                substackPosts.slice(0, 3).map((post, i) => (
                  <a
                    key={i}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer min-h-[20rem] h-full flex flex-col justify-between overflow-hidden rounded-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-8">
                        <span className="font-mono text-[10px] text-[var(--accent)] border border-[var(--accent)]/30 px-2 py-1 rounded bg-[var(--accent)]/5">
                          LOG_00{i + 1}
                        </span>
                        <ArrowUpRight size={18} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                      <h4 className="font-serif italic text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-tight mb-4">
                        {post.title}
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                        {post.description.replace(/<[^>]*>/g, '').slice(0, 150)}...
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] opacity-60 group-hover:opacity-100 transition-opacity">
                      <span>{new Date(post.pubDate).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>Substack</span>
                    </div>
                  </a>
                ))
              ) : (
                // Error/Empty State
                <div className="bg-[var(--bg-surface)]/30 border border-[var(--border-color)] border-dashed p-8 flex flex-col justify-center items-center text-center h-80 opacity-60 rounded-lg col-span-1 md:col-span-3">
                  <PenTool size={32} className="text-[var(--text-secondary)] mb-4" />
                  <p className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">Feed connection interrupted. Please try again later.</p>
                </div>
              )}
            </div>
          </section>
          */}

        </div>

        {/* FOOTER */}

        <section className="mb-0">
          <Footer />
        </section>

      </main>
    </div >
  );
};

export default Portfolio;