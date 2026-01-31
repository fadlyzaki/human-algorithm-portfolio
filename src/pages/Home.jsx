import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Terminal, Cpu, BookOpen, ArrowRight, ArrowUp, GitCommit,
  Maximize2, Minimize2, Mail, FileText, User, Headphones,
  MapPin, Coffee, Sun, Moon, X, Grid, Activity, Users,
  Heart, PenTool, Languages, Video, ScanEye, FileJson,
  CalendarClock, ExternalLink, Layers, Smartphone, Filter, Siren,
  FileSearch, Utensils
} from 'lucide-react';
import DraggablePhoto from '../components/DraggablePhoto';
import { useTheme } from '../context/ThemeContext';
import { useHandCursor } from '../context/HandCursorContext';

/* --- THEME CONFIGURATION ---
   Dynamic CSS variables are used to handle the switch between:
   Dark: Void (#111111) & Charcoal (#1F1F1F)
   Light: Paper (#F4F4F5) & Surface (#FFFFFF)
*/

// --- DATA STRUCTURES ---

const clusters = [
  {
    id: 'A',
    title: 'THE WORKFORCE ECOSYSTEM',
    subtitle: 'Humanizing Ops',
    hook: 'Connecting blue-collar workers to jobs without digital friction.',
    miniDesc: 'I reduce cognitive load for users who are not tech-native. Every component is built with strict simplicity.',
    projects: [
      {
        id: 'p1',
        title: 'In-App Chat & Candidate Tracker',
        tag: 'Communication',
        type: 'Mobile App',
        role: 'Lead Product Designer',
        timeline: '3 Months',
        route: '/case-study/protected', // Updated Route
        details: {
          problem: 'Recruiters struggled to track 200+ candidate conversations per day.',
          system: 'Built a low-friction, latency-friendly chat architecture.',
          outcome: 'Reduced drop-off by 37%.'
        }
      },
      {
        id: 'p2',
        title: 'ATS Dashboard for HR',
        tag: 'Management',
        type: 'Web Dashboard',
        role: 'UI/UX Designer',
        timeline: '4 Months',
        route: '/case-study/protected', // Updated Route
        details: {
          problem: 'Data fragmentation across spreadsheets.',
          system: 'Unified dashboard with drag-and-drop pipelines.',
          outcome: 'Hiring speed improved by 20%.'
        }
      },
      {
        id: 'p3',
        title: 'Chat Your Employer',
        tag: 'Direct Access',
        type: 'Mobile Feature',
        role: 'Product Designer',
        timeline: '2 Months',
        route: '/case-study/protected', // Updated Route
        details: {
          problem: 'Candidates intimidated by formal applications.',
          system: 'WhatsApp-like interface for formal requests.',
          outcome: 'Application starts increased by 45%.'
        }
      },
      {
        id: 'p4',
        title: 'Main App (Navigation & Discovery)',
        tag: 'Core UX',
        type: 'App Architecture',
        role: 'Interaction Designer',
        timeline: 'Ongoing',
        route: '/case-study/protected', // Updated Route
        details: {
          problem: 'Users getting lost in complex job filters.',
          system: 'Simplified faceted search.',
          outcome: 'Retention D1 increased by 15%.'
        }
      },
    ]
  },
  {
    id: 'B',
    title: 'THE COMMERCE ENGINE',
    subtitle: 'Managing Scale',
    hook: 'Organizing the chaos of the B2B supply chain.',
    miniDesc: 'Scalable systems for massive SKU lists and complex transactions. Designed for reliability.',
    projects: [
      { id: 'p5', title: 'Marketplace', tag: 'Transactions', type: 'Web Platform', role: 'Lead Designer', timeline: '6 Months', route: '/case-study/protected', details: { problem: 'Inefficient ordering process.', system: 'Streamlined checkout flow.', outcome: 'Cart abandonment -12%.' } },
      { id: 'p6', title: 'Official Store', tag: 'Branding', type: 'System Feature', role: 'System Designer', timeline: '3 Months', route: '/case-study/protected', details: { problem: 'Brands lacked identity.', system: 'Store builder engine.', outcome: 'Onboarded 50+ brands.' } },
      { id: 'p7', title: 'Promo Center', tag: 'Marketing', type: 'Dashboard', role: 'UX Researcher', timeline: '2 Months', route: '/case-study/protected', details: { problem: 'Complex discount logic.', system: 'Automated promo engine.', outcome: 'Utilization +25%.' } },
      { id: 'p8', title: 'GudangAda Design System', tag: 'Architecture', type: 'Design System', role: 'Design Ops', timeline: '1 Year', route: '/case-study/protected', details: { problem: 'Inconsistent UI.', system: 'Unified React library.', outcome: 'Dev velocity +30%.' } },
    ]
  },
  {
    id: 'C',
    title: 'OPERATIONAL EFFICIENCY',
    subtitle: 'Digitizing Habits',
    hook: 'Helping SMEs transition from messy offline routines to stable digital workflows.',
    miniDesc: 'Behavior change through clarity, simplicity, and rhythm.',
    projects: [
      { id: 'p9', title: 'Delivery Methods', tag: 'Logistics', type: 'Service Design', role: 'Product Designer', timeline: '2 Months', route: '/case-study/protected', details: { problem: 'Unclear shipping costs.', system: 'Real-time tracking.', outcome: 'Tickets dropped 60%.' } },
      { id: 'p10', title: 'Incentive Sales Agent', tag: 'Gamification', type: 'Mobile App', role: 'UX Strategist', timeline: '3 Months', route: '/case-study/protected', details: { problem: 'Low motivation.', system: 'Streak-based reward dashboard.', outcome: 'DAU up 40%.' } },
      { id: 'p11', title: 'Paper-to-Paperless (Concept)', tag: 'Sustainability', type: 'Concept', role: 'Concept Artist', timeline: '1 Month', route: '/case-study/protected', details: { problem: 'Lost invoices.', system: 'OCR-assisted filing.', outcome: '90% paper reduction.' } },
    ]
  }
];

const writings = [
  { id: 'log-001', title: 'Why Reducing Steps Is Better Than Adding Delight', category: 'The Logic Bridge', tag: 'Dev-Design Collab' },
  { id: 'log-002', title: 'My Master’s Thesis on Cognitive Load: Early Insights', category: 'The System Check', tag: 'Research' },
  { id: 'log-003', title: 'What Flooded Streets Taught Me About System Bottlenecks', category: 'The Mundane Analyst', tag: 'Observation' },
];

const humanContext = [
  { icon: MapPin, label: 'Location', value: 'Jakarta, Indonesia' },
  { icon: BookOpen, label: 'Reading', value: 'The Design of Everyday Things' },
  { icon: Headphones, label: 'Listening', value: 'Lo-Fi Beats for Coding' },
];

// --- COMPONENTS ---

const StickyNote = ({ text, color = 'text-[var(--text-secondary)]', className = '', rotate = 'lg:rotate-1' }) => (
  <div className={`font-serif italic text-base ${color} opacity-90 mt-6 lg:absolute lg:right-0 lg:mr-[-15rem] lg:w-52 lg:mt-0 p-4 bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xl ${rotate} transition-transform hover:rotate-0 duration-300 ${className}`}>
    <div className="w-2 h-2 rounded-full bg-current opacity-50 mb-2"></div>
    "{text}"
  </div>
);

const SectionTitle = ({ number, title, id }) => (
  <div id={id} className="flex items-center gap-3 mb-10 group scroll-mt-32">
    <span className="font-mono text-[var(--accent-amber)] text-sm opacity-60">0{number}_</span>
    <h2 className="font-mono text-xl tracking-tight text-[var(--text-primary)] uppercase group-hover:tracking-widest transition-all duration-300">
      {title}
    </h2>
    <div className="h-px bg-gradient-to-r from-[var(--border-color)] to-transparent flex-grow ml-4"></div>
  </div>
);

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleAccess = (e) => {
    e.stopPropagation();
    // Default to protected route for all main projects
    navigate(project.route || '/case-study/protected');
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-[var(--bg-card)] border ${isOpen ? 'border-[var(--accent-amber)]/50' : 'border-[var(--border-color)]'} hover:border-[var(--accent-amber)]/30 transition-all duration-500 p-6 group cursor-pointer rounded-sm relative overflow-hidden`}
      onClick={handleToggle}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--bg-shine)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      <div className="flex justify-between items-start relative z-10">
        <div>
          <h4 className="font-mono text-[var(--text-primary)] text-base lg:text-lg mb-2 group-hover:text-[var(--accent-amber)] transition-colors">
            {project.title}
          </h4>
          <span className="inline-block px-2 py-1 bg-[var(--bg-tag)] text-[var(--text-secondary)] text-[10px] font-mono tracking-wider uppercase rounded-sm border border-[var(--border-tag)] mr-2">
            {project.tag}
          </span>
          <span className="text-[10px] text-[var(--text-secondary)] font-mono opacity-50 hidden sm:inline-block">
            // {project.type}
          </span>
        </div>
        <div className="text-[var(--text-secondary)] group-hover:text-[var(--accent-amber)] transition-colors">
          {isOpen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </div>
      </div>

      <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="border-t border-[var(--border-color)] pt-6 mt-2 grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* LEFT: Data & Context */}
            <div className="space-y-6">
              <div className="grid gap-4 font-mono text-sm">
                {Object.entries(project.details).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-[var(--accent-blue)] uppercase text-[10px] tracking-widest opacity-80 mb-1 block">{key}</span>
                    <span className="text-[var(--text-secondary)] font-sans leading-relaxed text-sm">{value}</span>
                  </div>
                ))}
              </div>

              {/* CTA BUTTON */}
              <button
                onClick={handleAccess}
                className="flex items-center gap-3 px-5 py-3 bg-[var(--bg-tag)] border border-[var(--accent-amber)] text-[var(--accent-amber)] hover:bg-[var(--accent-amber)] hover:text-black transition-all font-mono text-xs uppercase tracking-widest w-full md:w-auto justify-center group/btn"
              >
                <span>{'>'} ACCESS_CASE_FILE</span>
                <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* RIGHT: Visual Teaser (The Blueprint) */}
            <div className="relative aspect-video bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-sm overflow-hidden hidden lg:flex items-center justify-center group/preview">
              {/* Mock Wireframe UI */}
              <div className="w-3/4 h-3/4 border border-[var(--border-color)] rounded bg-[var(--bg-card)] relative shadow-xl transform group-hover/preview:scale-105 transition-transform duration-700">
                {/* Header */}
                <div className="h-4 border-b border-[var(--border-color)] flex items-center px-2 gap-1">
                  <div className="w-1 h-1 rounded-full bg-[var(--text-secondary)]"></div>
                  <div className="w-1 h-1 rounded-full bg-[var(--text-secondary)]"></div>
                </div>
                {/* Body */}
                <div className="p-3 space-y-2 opacity-50">
                  <div className="h-2 w-1/2 bg-[var(--text-secondary)] rounded-sm"></div>
                  <div className="h-16 w-full border border-[var(--border-color)] border-dashed rounded-sm"></div>
                  <div className="flex gap-2">
                    <div className="h-8 w-1/3 bg-[var(--accent-blue)] rounded-sm opacity-20"></div>
                    <div className="h-8 w-2/3 bg-[var(--border-color)] rounded-sm"></div>
                  </div>
                </div>
                {/* Overlay Tag */}
                <div className="absolute bottom-2 right-2 bg-[var(--bg-void)] border border-[var(--border-color)] px-2 py-1 text-[8px] font-mono text-[var(--accent-green)]">
                  UI_PREVIEW.v1
                </div>
              </div>

              {/* Background Grid inside preview */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(var(--text-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--text-secondary) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// --- NAVIGATION COMPONENTS ---

const NavigationMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const links = [
    { label: "Home / Terminal", href: "#" },
    { label: "About / Log", href: "#about" },
    { label: "Work / Diagnostics", href: "#work" },
    { label: "Philosophy / Core", href: "#philosophy" },
    { label: "Notes / Journal", href: "#notes" },
  ];

  const metaLinks = [
    { label: "Download CV", icon: FileText, href: "/cv" },
    { label: "Contact Uplink", icon: Mail, href: "/contact" },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-[var(--bg-void)]/95 backdrop-blur-xl flex flex-col justify-center items-center animate-in fade-in duration-200">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-4 text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors"
      >
        <X size={32} />
      </button>

      <div className="space-y-8 text-center">
        <div className="font-mono text-xs text-[var(--accent-amber)] uppercase tracking-widest mb-8">System Directory</div>

        <nav className="flex flex-col gap-6">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={onClose}
              className="font-mono text-2xl md:text-4xl text-[var(--text-primary)] hover:text-[var(--accent-blue)] hover:scale-105 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="w-16 h-px bg-[var(--border-color)] mx-auto my-8"></div>

        <div className="flex gap-6 justify-center">
          {metaLinks.map((link, idx) => (
            <Link key={idx} to={link.href} className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-sm uppercase">
              <link.icon size={16} />
              {link.label}
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  // Dynamic Theme Variables
  const themeStyles = {
    '--bg-void': isDark ? '#111111' : '#F0F0F3',
    '--bg-backdrop': isDark ? '#11111180' : '#F0F0F3CC',
    '--bg-surface': isDark ? '#1F1F1F' : '#FFFFFF',
    '--bg-card': isDark ? '#181818' : '#FFFFFF',
    '--bg-tag': isDark ? '#111111' : '#F4F4F5',
    '--bg-shine': isDark ? '#ffffff05' : '#00000005',

    '--text-primary': isDark ? '#F4F4F5' : '#18181B',
    '--text-secondary': isDark ? '#A1A1AA' : '#52525B',
    '--text-inverse': isDark ? '#111111' : '#FFFFFF',

    '--border-color': isDark ? '#262626' : '#E4E4E7',
    '--border-tag': isDark ? '#222' : '#E4E4E7',

    '--accent-amber': isDark ? '#F59E0B' : '#D97706',
    '--accent-blue': isDark ? '#3B82F6' : '#2563EB',
    '--accent-green': isDark ? '#10B981' : '#059669',
    '--accent-red': isDark ? '#EF4444' : '#DC2626',
    '--accent-purple': isDark ? '#A855F7' : '#9333EA', // Added for FilterMe
    '--accent-cyan': isDark ? '#06B6D4' : '#0891B2',   // Added for Grab

    '--shadow-color': isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.05)'
  };

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScrollY = window.scrollY;

      setScrolled((winScroll / height) * 100);

      // Smart Navbar Logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false); // Hide on scroll down
      } else {
        setShowNav(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={themeStyles}
      className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-blue)] selection:text-[#F4F4F5] overflow-x-hidden transition-colors duration-500"
    >

      {/* 1. TEXTURE: Noise Overlay */}
      <div className={`fixed inset-0 z-0 pointer-events-none opacity-[0.15] ${isDark ? 'mix-blend-overlay' : 'mix-blend-multiply'}`}
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      {/* 2. LIGHTING: Radial Gradient */}
      <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(50,50,50,0.4), rgba(17,17,17,1) 80%)' }}>
      </div>

      {/* 3. STRUCTURE: Subtle Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${isDark ? '#A1A1AA' : '#000000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#A1A1AA' : '#000000'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Progress Bar (System Status) */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-[var(--bg-surface)]">
        <div className="h-full bg-[var(--accent-amber)] shadow-[0_0_10px_var(--accent-amber)]" style={{ width: `${scrolled}%` }}></div>
      </div>

      {/* --- NAVIGATION SYSTEM --- */}

      {/* 1. Desktop Top Bar (Smart Hide) */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-[var(--bg-backdrop)] backdrop-blur-md border-b border-[var(--border-color)] px-6 py-3 flex justify-between items-center max-w-5xl mx-auto">
          <Link to="/" className="font-mono text-[var(--text-primary)] font-bold text-lg hover:text-[var(--accent-blue)] transition-colors tracking-tight">
            Fadlyzaki
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop Links */}
            <div className="hidden md:flex gap-6 font-mono text-xs text-[var(--text-secondary)]">
              <Link to="/about" className="hover:text-[var(--text-primary)] transition-colors">/ABOUT</Link>
              <a href="#work" className="hover:text-[var(--text-primary)] transition-colors">/WORK</a>
              <a href="#notes" className="hover:text-[var(--text-primary)] transition-colors">/NOTES</a>
            </div>

            <button
              onClick={toggleGestureMode}
              className={`p-1 transition-colors ${isGestureMode ? 'text-[var(--accent-red)] animate-pulse' : 'text-[var(--text-secondary)] hover:text-[var(--accent-blue)]'}`}
              title="Toggle Gesture Control"
            >
              <ScanEye size={16} />
            </button>

            <button
              onClick={() => setIsDark(!isDark)}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors p-1"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Mobile Control Deck (Bottom Sticky) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden animate-in slide-in-from-bottom-10 fade-in duration-700">
        <div className="bg-[var(--bg-surface)]/90 backdrop-blur-xl border border-[var(--border-color)] rounded-full px-6 py-3 shadow-2xl flex items-center gap-8">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex flex-col items-center gap-1"
          >
            <Grid size={20} />
          </button>
          <div className="w-px h-6 bg-[var(--border-color)]"></div>
          <button
            onClick={scrollToTop}
            className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      {/* 3. Full Screen Menu Overlay */}
      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />


      {/* Main Container */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-24 border-x border-[var(--border-color)] min-h-screen bg-[var(--bg-backdrop)] backdrop-blur-sm transition-colors duration-500">

        <div className="fade-in pt-12">

          {/* Top System Status Bar */}
          <div className="flex justify-between items-center border-b border-[var(--border-color)] pb-4 mb-12">
            {/* System Online Indicator to Green */}
            <div className="font-mono text-[var(--accent-green)] text-xs flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-green)]"></span>
              </span>
              Open for collaboration
            </div>

            <div className="flex items-center gap-6">
              <div className="font-mono text-[var(--text-secondary)] text-xs hidden sm:block">
                {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              </div>
            </div>
          </div>

          {/* HERO SECTION */}
          <section className="relative mb-40">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 items-start">
              <div>
                <h1 className="font-mono text-4xl md:text-6xl uppercase leading-tight tracking-tight mb-8 text-[var(--text-primary)]">
                  Product Designer · <br />
                  <span className="text-[var(--text-secondary)] font-serif italic lowercase tracking-normal">systems thinker</span>
                </h1>

                <h2 className="text-xl md:text-2xl font-mono text-[var(--text-primary)] mb-8 pb-4 inline-block border-b-2 border-[var(--accent-amber)]">
                  THE HUMAN ALGORITHM.
                </h2>

                <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-light">
                  Bridging the gap between <strong className="text-[var(--text-primary)] font-medium">Computer Science logic</strong> and <strong className="text-[var(--text-primary)] font-serif italic font-medium">human chaos</strong>. I design systems that feel inevitable, not forced.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#work"
                    className="px-8 py-4 bg-[var(--text-primary)] text-[var(--text-inverse)] font-mono text-sm font-bold uppercase tracking-wider hover:bg-[var(--text-secondary)] transition-all flex items-center justify-center gap-3 shadow-[4px_4px_0px_var(--accent-blue)] hover:shadow-[2px_2px_0px_var(--accent-blue)] hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    View Case Studies
                    <ArrowRight size={16} />
                  </a>
                  <Link to="/cv" className="px-8 py-4 border border-[var(--border-tag)] text-[var(--text-secondary)] font-mono text-sm uppercase tracking-wide hover:border-[var(--accent-amber)] hover:text-[var(--accent-amber)] transition-all flex items-center justify-center gap-3">
                    <FileText size={16} />
                    CV
                  </Link>
                </div>
              </div>

              {/* IDENTITY ANCHOR */}
              <div className="hidden md:block">
                <DraggablePhoto />

                <div className="space-y-4 font-mono text-xs text-[var(--text-secondary)]">
                  {humanContext.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2 border-b border-[var(--border-color)] last:border-0">
                      <item.icon size={14} className="text-[var(--accent-amber)]" />
                      <div>
                        <span className="block opacity-50 text-[10px] uppercase tracking-widest">{item.label}</span>
                        <span className="text-[var(--text-primary)]">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <StickyNote text="Antidote to digital fatigue." className="top-48 text-[var(--accent-blue)]" rotate="lg:-rotate-2" />
          </section>

          {/* ACTIVE DAEMONS (SIDE PROJECTS) */}
          <section className="mb-40">
            <SectionTitle number="1" title="ACTIVE DAEMONS" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Editorial Column 1 */}
              <div className="space-y-12">
                {[
                  { id: 'd1', title: 'Interactive Workbook', desc: 'Solving the "feedback loop" in non-formal education.', link: '/side-project/d1' },
                  { id: 'd3', title: 'Year in Review', desc: 'Privacy-first life analytics. Zero algorithms.', link: '/side-project/d3' }
                ].map((item, i) => (
                  <div key={i} className="group cursor-pointer" onClick={() => navigate(item.link)}>
                    <div className="aspect-[4/3] bg-[var(--bg-card)] border border-[var(--border-color)] mb-6 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-void)] opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
                      {/* Minimal Icon Overlay */}
                      <div className="absolute bottom-4 left-4 font-mono text-xs text-[var(--text-secondary)]">0{i + 1}</div>
                      <div className="absolute top-4 right-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                        <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-serif italic text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] font-light max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Editorial Column 2 (Offset) */}
              <div className="space-y-12 md:mt-24">
                {[
                  { id: 'filter-me', title: 'FilterMe: AR Commerce', desc: 'Can AR filters replace physical touch?', link: '/side-project/filter-me' },
                  { id: 'grab-merantau', title: 'Grab Merantau', desc: 'Cross-city emotional wiring for the diaspora.', link: '/side-project/grab-merantau' }
                ].map((item, i) => (
                  <div key={i} className="group cursor-pointer" onClick={() => navigate(item.link)}>
                    <div className="aspect-[4/3] bg-[var(--bg-card)] border border-[var(--border-color)] mb-6 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-void)] opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
                      <div className="absolute bottom-4 left-4 font-mono text-xs text-[var(--text-secondary)]">0{i + 3}</div>
                      <div className="absolute top-4 right-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                        <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-serif italic text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] font-light max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PORTFOLIO CLUSTERS */}
          <section id="work" className="mb-40 scroll-mt-24">
            <SectionTitle number="2" title="WORK" />

            <div className="space-y-32">
              {clusters.map((cluster) => (
                <div key={cluster.id} className="relative">
                  {/* Cluster Header */}
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-10 border-b border-[var(--border-color)] pb-6">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[var(--accent-amber)] text-[var(--accent-amber)] font-mono text-xs font-bold">
                        {cluster.id}
                      </span>
                      <h3 className="font-mono text-2xl text-[var(--text-primary)]">{cluster.title}</h3>
                    </div>
                    <span className="font-serif italic text-[var(--text-secondary)] text-lg">"{cluster.subtitle}"</span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Column: Context */}
                    <div className="lg:col-span-4">
                      <p className="text-[var(--text-primary)] font-medium mb-6 text-xl leading-snug">
                        {cluster.hook}
                      </p>
                      <div className="text-[var(--text-secondary)] text-sm leading-relaxed font-mono bg-[var(--bg-card)] p-5 border-l-2 border-[var(--accent-blue)]">
                        <span className="text-[var(--accent-blue)] block mb-2 text-xs uppercase tracking-widest">Diagnostics</span>
                        {cluster.miniDesc}
                      </div>
                    </div>

                    {/* Right Column: Projects */}
                    <div className="lg:col-span-8 grid gap-4">
                      {cluster.projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 03: THE OPERATOR (Unified About/Philosophy/Hobbies) */}
          <section id="about" className="mb-40 scroll-mt-24">
            <SectionTitle number="3" title="THE OPERATOR" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-12 lg:gap-20">

              {/* LEFT COLUMN: Narrative & Logic */}
              <div className="space-y-16">

                {/* 3.1: BIO & CORE */}
                <div>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-xl md:text-3xl text-[var(--text-primary)] leading-tight mb-8 font-serif italic opacity-90">
                      "I design tools that respect your attention span."
                    </p>

                    <div className="text-[var(--text-secondary)] space-y-6 text-lg font-light leading-relaxed">
                      <p>
                        My design career started in <span className="text-[var(--text-primary)] font-medium">Computer Science</span>—data structures, logic, constraints.
                      </p>
                      <p>
                        But life forced me into a <strong className="text-[var(--text-primary)]">nearly three-year pause</strong> due to a major health issue. This "downtime" wasn't a loss; it was an upgrade. It taught me how fragile human systems are and how essential well-designed support structures become when we are at our limit.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3.2: PHILOSOPHY (Integrated) */}
                <div id="philosophy" className="scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px flex-grow bg-[var(--border-color)]"></div>
                    <span className="font-mono text-xs uppercase text-[var(--accent-amber)] tracking-widest">Core Philosophy</span>
                    <div className="h-px flex-grow bg-[var(--border-color)]"></div>
                  </div>

                  <blockquote className="border-l-2 border-[var(--accent-amber)] pl-6 py-2 mb-8 text-xl md:text-2xl text-[var(--text-primary)] font-light">
                    I design against <span className="text-[var(--text-primary)] font-medium bg-[var(--accent-amber)]/20 px-1">fragile complexity</span>. Modern apps burn people out. My job is to build resilient systems that support human energy—not drain it.
                  </blockquote>

                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { title: 'Principle 01', text: 'Feasibility is empathy.' },
                      { title: 'Principle 02', text: 'Resilience over perfection.' },
                      { title: 'Principle 03', text: 'Clarity over clutter.' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent-green)] transition-colors group">
                        <GitCommit size={18} className="text-[var(--accent-green)]" />
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                          <span className="font-mono text-xs uppercase text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">{item.title} //</span>
                          <span className="text-[var(--text-primary)]">{item.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Runtime Modules (Data/Hobbies) */}
              <div className="space-y-10">

                {/* CURRENT FOCUS CARD */}
                <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-50 transition-opacity">
                    <Cpu size={48} strokeWidth={1} />
                  </div>
                  <h4 className="font-mono text-[var(--accent-amber)] text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent-amber)] rounded-full animate-pulse"></span>
                    Current Focus
                  </h4>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed relative z-10">
                    Deepening craft with a <strong className="text-[var(--text-primary)]">Master’s in EdTech</strong>. Studying cognitive load and how humans learn.
                  </p>
                </div>

                {/* RUNTIME MODULES (Hobbies Re-imagined) */}
                <div>
                  <h4 className="font-mono text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-6 border-b border-[var(--border-color)] pb-2">
                    Background Processes
                  </h4>

                  <div className="space-y-3">
                    {/* Collaboration */}
                    <div className="flex items-center gap-4 p-3 border border-[var(--border-color)] hover:bg-[var(--bg-card)] transition-colors group">
                      <div className="p-2 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--accent-blue)] group-hover:scale-110 transition-transform">
                        <Users size={16} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-[var(--text-primary)] font-bold">PROTOCOL: SYNC</div>
                        <div className="text-xs text-[var(--text-secondary)]">Thriving in clusters.</div>
                      </div>
                    </div>

                    {/* Video Editing */}
                    <div className="flex items-center gap-4 p-3 border border-[var(--border-color)] hover:bg-[var(--bg-card)] transition-colors group">
                      <div className="p-2 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--accent-red)] group-hover:scale-110 transition-transform">
                        <Video size={16} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-[var(--text-primary)] font-bold">FRAME_INTERPOLATION</div>
                        <div className="text-xs text-[var(--text-secondary)]">Storytelling via CapCut.</div>
                      </div>
                    </div>

                    {/* Sketching */}
                    <div className="flex items-center gap-4 p-3 border border-[var(--border-color)] hover:bg-[var(--bg-card)] transition-colors group">
                      <div className="p-2 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--accent-amber)] group-hover:scale-110 transition-transform">
                        <PenTool size={16} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-[var(--text-primary)] font-bold">ANALOG_INPUT</div>
                        <div className="text-xs text-[var(--text-secondary)]">Sketching concepts.</div>
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="flex items-center gap-4 p-3 border border-[var(--border-color)] hover:bg-[var(--bg-card)] transition-colors group">
                      <div className="p-2 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--accent-green)] group-hover:scale-110 transition-transform">
                        <Languages size={16} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-[var(--text-primary)] font-bold">LANG_PACK</div>
                        <div className="text-xs text-[var(--text-secondary)]">Duolingo streak active.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <StickyNote text="Feasibility is empathy." className="relative text-[var(--accent-green)] mt-8 w-full" rotate="rotate-1" />

              </div>
            </div>
          </section>

          {/* CONTENT/WRITING */}
          <section id="notes" className="mb-40 scroll-mt-24">
            <SectionTitle number="4" title="NOTES" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {writings.map((post, idx) => (
                <div key={idx} onClick={() => navigate(`/blog/${post.id}`)} className="group bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] p-8 transition-all flex flex-col justify-between h-64 hover:-translate-y-1 duration-300 shadow-lg cursor-pointer">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <BookOpen size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-blue)] transition-colors" />
                      <span className="font-mono text-[10px] text-[var(--text-secondary)] border border-[var(--border-tag)] px-2 py-1 rounded">
                        LOG_{idx + 1}
                      </span>
                    </div>
                    <h4 className="font-serif italic text-xl text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors leading-snug">
                      {post.title}
                    </h4>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs text-[var(--accent-amber)] uppercase tracking-wider">{post.category}</span>
                    <div className="h-px w-full bg-[var(--border-color)] group-hover:bg-[var(--accent-blue)]/30 transition-colors"></div>
                    <span className="font-mono text-[10px] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">#{post.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* CONTACT / FOOTER */}
        <section className="border-t border-[var(--border-color)] pt-16 pb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-mono text-[var(--text-primary)] uppercase mb-8 leading-tight">
                Let's build something <br /> <span className="font-serif italic lowercase text-[var(--text-secondary)]">resilient</span>.
              </h2>
              <Link to="/contact" className="px-10 py-5 bg-[var(--text-primary)] text-[var(--text-inverse)] font-mono font-bold uppercase tracking-wider hover:bg-[var(--text-secondary)] transition-all flex items-center gap-3 shadow-xl">
                <Mail size={20} />
                Initiate Contact
              </Link>
            </div>

            <div className="font-mono text-xs text-[var(--text-secondary)] text-right">
              <p className="mb-2">Fadly Uzzaki © 2025</p>
              <p className="text-[var(--accent-amber)] opacity-80 mb-1">// Value: high function, low friction.</p>
              <p className="text-[var(--text-secondary)] opacity-60">Human Algorithm v2.3</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Portfolio;