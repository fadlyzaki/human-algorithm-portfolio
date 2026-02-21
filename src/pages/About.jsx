import React, { useState, useMemo, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Terminal, Cpu, BookOpen, Coffee, MapPin, Headphones,
  Activity, AlertTriangle, GitCommit, Download, Sun, Moon,
  PenTool, Zap, Flame, PenLine, Layers, Briefcase, User,
  Database, Server, Wifi, Layout, Shield, Globe, ScanEye, Award, Search,
  ArrowUpRight
} from 'lucide-react';
import { getRuntimeLog, getStreaks, creativeProcesses, certifications, achievements } from '../data/aboutData';
import { useTheme } from '../context/ThemeContext';
import useThemeStyles from '../hooks/useThemeStyles';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';
// import { useHandCursor } from '../context/HandCursorContext';
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
import NavigationMenu from '../components/NavigationMenu'; // Assuming this is also a new component

import RuntimeLogTimeline from '../components/about/RuntimeLogTimeline';
import CertificationsGrid from '../components/about/CertificationsGrid';
import AchievementsGrid from '../components/about/AchievementsGrid';
import MaintenanceGrid from '../components/about/MaintenanceGrid';

/* --- THEME CONFIGURATION ---
   Consistent with Human By Design System v2.0
*/

const AboutPage = () => {
  const { isDark } = useTheme();
  const themeStyles = useThemeStyles();
  const { t } = useLanguage();
  // const { isGestureMode, toggleGestureMode } = useHandCursor();
  const [chaosStrength, setChaosStrength] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for menu

  // Use useCallback for stable handlers
  const handleOpenMenu = React.useCallback(() => setIsMenuOpen(true), []);
  const handleCloseMenu = React.useCallback(() => setIsMenuOpen(false), []);

  // JSON Config State

  // --- MERGED DATA: SYSTEM RUNTIME LOG (Chronological) ---
  const runtimeLog = useMemo(() => getRuntimeLog(t), [t]);

  // --- DATA: SYSTEM MAINTENANCE (Habits) ---
  const streaks = useMemo(() => getStreaks(t), [t]);

  // --- DATA: CREATIVE PROCESSES (Habits) ---
  // Imported directly

  // --- DATA: KNOWLEDGE UPGRADES (Certifications) ---
  // Imported directly



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
      filter: `blur(${blur}px) contrast(${100 + s} %)`,
      transition: 'all 0.1s ease'
    };
  }, [chaosStrength]);





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

      {/* Progress Bar (Isolated Component) */}
      <ScrollProgressBar />

      {/* --- NAVIGATION SYSTEM --- */}
      <Navbar onOpenMenu={handleOpenMenu} title="About System" backPath="/" />

      {/* Mobile Menu Overlay */}
      <NavigationMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />

      {/* --- CONTENT --- */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20 border-x border-[var(--border-color)] min-h-screen bg-[var(--bg-void)]/80 backdrop-blur-sm shadow-2xl overflow-x-hidden">

        {/* Padding for fixed header */}
        <div className="h-24 md:h-32"></div>

        {/* PROFILE HERO - INTERACTIVE */}
        <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 mb-24 fade-in items-start">

          {/* Avatar Area */}
          <div className="flex flex-col gap-6">
            <div className="relative group w-64 mx-auto md:w-full" style={chaosStyle}>
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
            <div style={chaosStyle}>
              <h1 className="text-4xl md:text-5xl font-mono text-[var(--text-primary)] uppercase leading-[1.1] mb-6 tracking-tight">
                Fadly Uzzaki 🧢 (Jaki)
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


        {/* UNIFIED SYSTEM RUNTIME LOG (Bio + Work) */}
        <RuntimeLogTimeline runtimeLog={runtimeLog} t={t} />

        {/* KNOWLEDGE UPGRADES (Certifications) */}
        <CertificationsGrid certifications={certifications} t={t} />

        {/* ACHIEVEMENTS (Awards & Competitions) */}
        <AchievementsGrid achievements={achievements} t={t} />

        {/* SYSTEM MAINTENANCE (Habits) */}
        <MaintenanceGrid streaks={streaks} t={t} />

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