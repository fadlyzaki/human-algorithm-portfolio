import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import {
  Sun, Moon, Grid, ArrowUp, ScanEye
} from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ProgressBar from '../components/ProgressBar';
import NavigationMenu from '../components/NavigationMenu';

// Sub-components
import HomeHero from '../components/home/HomeHero';
import HomeWorkSection from '../components/home/HomeWorkSection';
import HomeSideProjects from '../components/home/HomeSideProjects';
import HomeAbout from '../components/home/HomeAbout';

import { useTheme } from '../context/ThemeContext';
import useThemeStyles from '../hooks/useThemeStyles';
import { useHandCursor } from '../context/HandCursorContext';
import { useLanguage } from '../context/LanguageContext';

const Portfolio = () => {
  /* --- STATE & HOOKS --- */
  const { isDark, setIsDark } = useTheme();
  const themeStyles = useThemeStyles();
  const { isGestureMode, toggleGestureMode } = useHandCursor();
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

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

  // Handle Hash Scrolling on Mount
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure rendering
    }
  }, [location.hash]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

          {/* HERO & TICKER */}
          <HomeHero t={t} />

          {/* SECTION 1: WORK */}
          <HomeWorkSection t={t} />

          {/* SECTION 2: SIDE PROJECTS */}
          <HomeSideProjects t={t} isId={isId} />

          {/* SECTION 3: ABOUT ME */}
          <HomeAbout t={t} />

          {/* SECTION 4: NOTES (HIDDEN) */}
          {/* Notes section intentionally left out as it was commented in original */}

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