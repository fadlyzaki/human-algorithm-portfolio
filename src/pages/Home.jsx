import React, { useState, useEffect } from 'react';
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
import ProjectCard from '../components/ProjectCard';
import ScrollReveal from '../components/ScrollReveal';
import WorkHoloDeck from '../components/WorkHoloDeck';
import { useTheme } from '../context/ThemeContext';
import { useHandCursor } from '../context/HandCursorContext';
import { useLanguage } from '../context/LanguageContext';
import { SIDE_PROJECTS, WORK_CLUSTERS } from '../data/portfolioData';

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

const StickyNote = ({ text, color = 'text-[var(--text-secondary)]', className = '', rotate = 'lg:rotate-1' }) => (
  <div className={`font-serif italic text-base ${color} opacity-90 mt-8 p-4 bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xl ${rotate} transition-transform hover:rotate-0 duration-300 rounded-lg max-w-md ${className}`}>
    <div className="w-2 h-2 rounded-full bg-current opacity-50 mb-2"></div>
    "{text}"
  </div>
);

const SectionTitle = ({ number, title, id, link, linkText }) => (
  <div id={id} className="flex items-center gap-3 mb-10 group scroll-mt-32">
    <span className="font-mono text-[var(--accent-amber)] text-sm opacity-60">0{number}_</span>
    <h2 className="font-mono text-xl tracking-tight text-[var(--text-primary)] uppercase group-hover:tracking-widest transition-all duration-300">
      {title}
    </h2>
    <div className="h-px bg-gradient-to-r from-[var(--border-color)] to-transparent flex-grow ml-4"></div>
    {link && (
      <Link to={link} className="hidden md:flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors whitespace-nowrap">
        {linkText || 'VIEW ALL'} <ArrowRight size={12} />
      </Link>
    )}
  </div>
);

// WorkClusterCard has been replaced by WorkBento in separate file

// --- NAVIGATION COMPONENTS ---
const NavigationMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const links = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.work'), href: "#work" },
    { label: t('nav.side_projects'), href: "/side-projects" },
    { label: 'PROJECTS', href: "#side-projects" },
  ];
  const metaLinks = [
    { label: t('nav.cv'), icon: FileText, href: "/cv" },
    { label: t('nav.contact'), icon: Mail, href: "/contact" },
  ];

  const isActive = (path) => {
    if (path.startsWith('#')) return false; // Hash links handled by scroll or manual check
    return location.pathname === path;
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[var(--bg-void)]/95 backdrop-blur-xl flex flex-col justify-center items-center animate-in fade-in duration-200" role="dialog" aria-modal="true" aria-label="Main Navigation">
      <button onClick={onClose} className="absolute top-6 right-6 p-4 text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors" aria-label="Close Menu">
        <X size={32} />
      </button>
      <div className="space-y-8 text-center">
        <div className="font-mono text-xs text-[var(--accent-amber)] uppercase tracking-widest mb-8">{t('nav.system_directory')}</div>
        <nav className="flex flex-col gap-6">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.href.startsWith('/') ? link.href : '/' + link.href}
              onClick={onClose}
              className={`font-mono text-2xl md:text-4xl transition-all ${isActive(link.href)
                ? 'text-[var(--accent-blue)] scale-105 font-bold'
                : 'text-[var(--text-primary)] hover:text-[var(--accent-blue)] hover:scale-105'
                }`}
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile Language Toggle */}
          <button
            onClick={() => { toggleLanguage(); onClose(); }}
            className="flex items-center justify-center gap-2 font-mono text-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] uppercase tracking-widest mt-4"
          >
            <Globe size={20} />
            <span>{language === 'en' ? 'Bahasa Indonesia' : 'English'}</span>
          </button>
        </nav>
        <div className="w-16 h-px bg-[var(--border-color)] mx-auto my-8"></div>
        <div className="flex gap-6 justify-center">
          {metaLinks.map((link, idx) => (
            <Link key={idx} to={link.href} className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-sm uppercase">
              <link.icon size={16} />{link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};


// --- MAIN APP ---

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(0);
  const { isDark, setIsDark } = useTheme();
  const { isGestureMode, toggleGestureMode } = useHandCursor();
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const navigate = useNavigate();
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScrollY = window.scrollY;

      setScrolled((winScroll / height) * 100);

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
  }, [isGestureMode]); // Add isGestureMode dependency

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
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const homeSideProjects = SIDE_PROJECTS.filter(p => !p.hidden).slice(0, 2);
  const isId = language === 'id';

  const themeStyles = {
    '--bg-void': isDark ? '#0a0a0a' : '#FFFFFF',
    '--bg-surface': isDark ? '#1C1C1C' : '#F9FAFB',
    '--bg-card': isDark ? '#111' : '#F9FAFB',
    '--bg-backdrop': isDark ? 'rgba(10, 10, 10, 0.8)' : 'rgba(255, 255, 255, 0.8)',
    '--text-primary': isDark ? '#F3F4F6' : '#111827',
    '--text-secondary': isDark ? '#A1A1AA' : '#6B7280',
    '--text-inverse': isDark ? '#111827' : '#FFFFFF',
    '--border-color': isDark ? '#262626' : '#E5E7EB',
    '--border-tag': isDark ? '#262626' : '#E5E7EB',
    '--bg-tag': isDark ? '#1C1C1C' : '#F3F4F6',
    '--accent-blue': '#3B82F6',
    '--accent-amber': '#F59E0B',
    '--accent-red': '#EF4444',
    '--accent-green': '#10B981',
  };

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
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-[var(--bg-surface)]">
        <div className="h-full bg-[var(--accent-amber)] shadow-[0_0_10px_var(--accent-amber)]" style={{ width: `${scrolled}%` }}></div>
      </div>

      {/* --- NAVIGATION SYSTEM --- */}

      {/* 1. Desktop Top Bar */}
      {/* REC-03: Ensure Navbar stays visible if Gesture Mode is active */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 translate-y-0`}>
        <div className="bg-[var(--bg-backdrop)] backdrop-blur-md border-b border-[var(--border-color)] px-6 py-3 flex justify-between items-center max-w-5xl mx-auto">
          <Link to="/" className="font-mono text-[var(--text-primary)] font-bold text-lg hover:text-[var(--accent-blue)] transition-colors tracking-tight">
            Fadlyzaki
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 font-mono text-xs text-[var(--text-secondary)]">
              <Link to="/about" className="hover:text-[var(--text-primary)] transition-colors">/{t('nav.about').toUpperCase()}</Link>
              <a href="#work" className="hover:text-[var(--text-primary)] transition-colors">/{t('nav.work').toUpperCase()}</a>
              <a href="#side-projects" className="hover:text-[var(--text-primary)] transition-colors">/PROJECTS</a>
              <Link to="/contact" className="hover:text-[var(--text-primary)] transition-colors">/{t('nav.contact').toUpperCase()}</Link>
            </div>

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
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-24 border-x border-[var(--border-color)] min-h-screen bg-[var(--bg-backdrop)] backdrop-blur-sm transition-colors duration-500 overflow-x-hidden">
        <div className="fade-in pt-12">

          {/* Running Ticker - Top of Page */}
          <div className="border-b border-[var(--border-color)] mb-12 overflow-hidden relative group cursor-default">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--bg-backdrop)] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--bg-backdrop)] to-transparent z-10"></div>

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

                <h1 className="font-mono text-4xl md:text-6xl uppercase leading-tight tracking-tight mb-8 text-[var(--text-primary)]">
                  {t('home.role')} · <br />
                  <span className="text-[var(--text-secondary)] font-serif italic lowercase tracking-normal">{t('home.role_sub')}</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-mono text-[var(--text-primary)] mb-8 pb-4 inline-block border-b-2 border-[var(--accent-amber)]">
                  {t('home.intro_title')}
                </h2>
                <div className="text-[var(--text-secondary)] text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-light">
                  {/* Render helper for markdown-like bolding if needed, or just insert text */}
                  <p dangerouslySetInnerHTML={{ __html: t('home.intro_desc').replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--text-primary)] font-medium">$1</strong>') }} />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#work" className="px-8 py-4 bg-[var(--text-primary)] text-[var(--text-inverse)] font-mono text-sm font-bold uppercase tracking-wider hover:bg-[var(--text-secondary)] transition-all flex items-center justify-center gap-3 shadow-[4px_4px_0px_var(--accent-blue)] hover:shadow-[2px_2px_0px_var(--accent-blue)] hover:translate-x-[2px] hover:translate-y-[2px] rounded-lg">
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
            <ScrollReveal delay={500}>
              <div className="flex flex-wrap gap-4">
                <StickyNote text={t('home.sticky_note')} className="text-[var(--accent-blue)]" rotate="lg:-rotate-2" />
                <StickyNote text={t('home.sticky_note_2')} className="text-[var(--accent-amber)]" rotate="lg:rotate-1" />
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

            <div className="space-y-32">
              {WORK_CLUSTERS.map((cluster, idx) => (
                <ScrollReveal key={idx} delay={idx * 150}>
                  <WorkHoloDeck cluster={cluster} />
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


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Editorial Column */}
              <div className="space-y-10">
                {homeSideProjects.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div
                      className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-blue)]/50 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-2xl overflow-hidden rounded-xl"
                      onClick={() => navigate(`/side-project/${item.id}`)}
                    >
                      {/* Technical Illustration Container (Replaces Banner Image) */}
                      <div className="aspect-[21/9] overflow-hidden relative bg-[var(--bg-surface)] border-b border-[var(--border-color)]">
                        <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                          <ProjectCard type={item.type || 'Web'} expanded={true} id={item.id} />
                        </div>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="font-mono text-[10px] text-[var(--text-secondary)] border border-[var(--border-color)] px-2 py-0.5 rounded-full bg-[var(--bg-card)]/80 backdrop-blur-md uppercase tracking-wider">
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
                            <span key={tIdx} className="text-[9px] font-mono border border-[var(--border-color)] px-2 py-0.5 rounded-md text-[var(--text-secondary)] uppercase tracking-wider bg-[var(--bg-surface)]/50">
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

            <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-12 lg:gap-20">
              <div className="space-y-16">
                <div>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-xl md:text-3xl text-[var(--text-primary)] leading-tight mb-8 font-serif italic opacity-90">
                      {t('home.about_quote')}
                    </p>
                    <div className="text-[var(--text-secondary)] space-y-6 text-lg font-light leading-relaxed">
                      <p dangerouslySetInnerHTML={{ __html: t('home.about_p1').replace(/\*\*(.*?)\*\*/g, '<span class="text-[var(--text-primary)] font-medium">$1</span>') }} />
                      <p dangerouslySetInnerHTML={{ __html: t('home.about_p2').replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--text-primary)]">$1</strong>') }} />
                    </div>
                  </div>
                </div>

                <div id="philosophy" className="scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px flex-grow bg-[var(--border-color)]"></div>
                    <span className="font-mono text-xs uppercase text-[var(--accent-amber)] tracking-widest">{t('home.philosophy_title')}</span>
                    <div className="h-px flex-grow bg-[var(--border-color)]"></div>
                  </div>

                  <blockquote className="border-l-2 border-[var(--accent-amber)] pl-6 py-2 mb-8 text-xl md:text-2xl text-[var(--text-primary)] font-light">
                    <span dangerouslySetInnerHTML={{ __html: t('home.philosophy_quote').replace(/\*\*(.*?)\*\*/g, '<span class="text-[var(--text-primary)] font-medium bg-[var(--accent-amber)]/20 px-1">$1</span>') }} />
                  </blockquote>

                  <Link to="/about" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--text-primary)] hover:text-[var(--accent-blue)] transition-colors border-b border-[var(--text-primary)] hover:border-[var(--accent-blue)] pb-1">
                    {t('home.read_philosophy')} <ArrowRight size={14} />
                  </Link>

                  {/* Principles... reduced for brevity in this response, but would exist */}
                </div>
              </div>

              {/* Right Col */}
              <div className="space-y-10">
                {/* High-Fidelity Bio Photo */}
                <div className="w-full aspect-[16/9] bg-[var(--bg-card)] border border-[var(--border-color)] relative flex items-center justify-center overflow-hidden group rounded-lg shadow-xl">
                  <img
                    src="/about-fadly.jpg"
                    alt="Fadly Uzzaki"
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-void)]/60 to-transparent opacity-40"></div>
                  <span className="absolute bottom-4 right-4 font-mono text-[10px] text-white/70 uppercase tracking-widest border border-white/20 px-2 py-1 rounded backdrop-blur-sm z-10">
                    BIO_MODULE.IMG
                  </span>
                </div>

                {/* Current Focus Card... same as before */}
                <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] relative overflow-hidden group rounded-lg">
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-50 transition-opacity">
                    <Cpu size={48} strokeWidth={1} />
                  </div>
                  <h4 className="font-mono text-[var(--accent-amber)] text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent-amber)] rounded-full animate-pulse"></span>
                    {t('home.current_focus')}
                  </h4>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed relative z-10" dangerouslySetInnerHTML={{ __html: t('home.current_focus_desc').replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--text-primary)]">$1</strong>') }} />
                </div>

                {/* Personal Interests / Runtime Modules */}
                <div className="space-y-6">
                  <h4 className="font-mono text-[var(--text-secondary)] text-xs uppercase tracking-widest flex items-center gap-2">
                    <Activity size={14} /> {t('home.personal_interests')}
                  </h4>

                  <div className="space-y-4">
                    {[
                      { label: "Duolingo", val: "Daily", icon: Flame },
                      { label: "Strava", val: "Daily", icon: Activity },
                      { label: "Goodreads", val: "Daily 10m", icon: BookOpen },
                      { label: "Substack", val: "Weekly", icon: PenLine }
                    ].map((interest, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--text-primary)] transition-colors group rounded-lg">
                        <div className="flex items-center gap-3">
                          <interest.icon size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-blue)] transition-colors" />
                          <span className="text-sm text-[var(--text-primary)]">{interest.label}</span>
                        </div>
                        <span className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-wider bg-[var(--bg-void)] px-2 py-1 rounded">
                          {interest.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section >

          {/* SECTION 4: NOTES */}
          < section id="notes" className="mb-40 scroll-mt-24" >
            <SectionTitle number="4" title={t('home.section_notes')} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Note 1 */}
              <div onClick={() => navigate('/blog/log-001')} className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-blue)]/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer h-80 flex flex-col justify-between overflow-hidden rounded-lg">
                {/* Gradient Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="font-mono text-[10px] text-[var(--accent-blue)] border border-[var(--accent-blue)]/30 px-2 py-1 rounded bg-[var(--accent-blue)]/5">
                      LOG_001
                    </span>
                    <ArrowUpRight size={18} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-blue)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                  <h4 className="font-serif italic text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors leading-tight mb-4">
                    Why Reducing Steps Is Better Than Adding Delight
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                    Delight is often a mask for poor usability. In this log, I explore why removing friction is the highest form of respect for the user.
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] opacity-60 group-hover:opacity-100 transition-opacity">
                  <span>Jan 28, 2026</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
              </div>

              {/* Placeholder for future notes */}
              <div className="bg-[var(--bg-surface)]/30 border border-[var(--border-color)] border-dashed p-8 flex flex-col justify-center items-center text-center h-80 opacity-60 hover:opacity-100 transition-opacity rounded-lg">
                <PenTool size={32} className="text-[var(--text-secondary)] mb-4" />
                <p className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">{t('home.more_logs')}</p>
              </div>
            </div>
          </section >

        </div >

        {/* FOOTER */}

        <section className="mb-0">
          <Footer />
        </section>

      </main >
    </div >
  );
};

export default Portfolio;