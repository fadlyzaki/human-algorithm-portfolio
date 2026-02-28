import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Sun, Moon, Grid, ArrowUp, ScanEye
} from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ProgressBar from '../components/ProgressBar';
import NavigationMenu from '../components/NavigationMenu';
import Navbar from '../components/Navbar';

// Sub-components
import HomeHero from '../components/home/HomeHero';
import HomeWorkSection from '../components/home/HomeWorkSection';
import HomeSideProjects from '../components/home/HomeSideProjects';
import HomeAbout from '../components/home/HomeAbout';
import HomeBlogSection from '../components/home/HomeBlogSection';


import { useTheme } from '../context/ThemeContext';
import useThemeStyles from '../hooks/useThemeStyles';
import useScrollDirection from '../hooks/useScrollDirection';
import { useHandCursor } from '../context/HandCursorContext';
import { useLanguage } from '../context/LanguageContext';
import ChaosToMatrixIntro from '../components/welcome/ChaosToMatrixIntro';
import { LayoutGroup } from 'framer-motion';

const Portfolio = () => {
  /* --- STATE & HOOKS --- */
  const { isDark } = useTheme();
  const themeStyles = useThemeStyles();
  const { isGestureMode } = useHandCursor();
  const { t, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(() => {
    // Check URL override for testing/debugging
    const params = new URLSearchParams(window.location.search);
    if (params.get('forceIntro') === 'true') {
      sessionStorage.removeItem('hasSeenTerminalIntro');
      return true;
    }
    // Only show intro once per browser session
    return sessionStorage.getItem('hasSeenTerminalIntro') !== 'true';
  });
  const showNav = useScrollDirection(isGestureMode);

  const handleOpenMenu = useCallback(() => setIsMenuOpen(true), []);

  const location = useLocation();

  // Handle Hash Scrolling on Mount
  useEffect(() => {
    if (location.hash && !showIntro) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure rendering
    }
  }, [location.hash, showIntro]);

  // Lock body scroll when intro is showing
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup
    };
  }, [showIntro]);

  const isId = language === 'id';

  // ID Card should be rendered in HomeHero if intro is completely done.
  const shouldRenderHeroIdCard = !showIntro;

  return (
    <LayoutGroup>
      <div
        style={themeStyles}
        className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-blue)] selection:text-[#F4F4F5] overflow-x-hidden transition-colors duration-500"
      >
        <AnimatePresence>
          {showIntro && (
            <ChaosToMatrixIntro
              onComplete={() => {
                sessionStorage.setItem('hasSeenTerminalIntro', 'true');
                setShowIntro(false);
              }}
            />
          )}
        </AnimatePresence>

        <SEO
          schema={{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Fadly Uzzaki",
            "url": "https://fadlyzaki-design.vercel.app",
            "sameAs": [
              "https://www.linkedin.com/in/fadlyzaki/",
              "https://github.com/fadlyzaki",
              "https://dribbble.com/fadlyzaki",
              "https://medium.com/@fadlyzaki"
            ],
            "jobTitle": "Product Designer",
            "description": "Product Designer · Systems Thinker. I don't chase chaos—I contain it."
          }}
        />

        {/* ATMOSPHERE (single composite layer) */}
        <div
          className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-500`}
          style={{
            backgroundImage: [
              `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              isDark ? 'radial-gradient(circle at 50% 0%, rgba(50,50,50,0.4), rgba(17,17,17,1) 80%)' : 'none',
              `linear-gradient(${isDark ? '#A1A1AA' : '#000000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#A1A1AA' : '#000000'} 1px, transparent 1px)`
            ].join(', '),
            backgroundSize: 'auto, auto, 40px 40px',
            opacity: isDark ? 1 : 0.03,
            mixBlendMode: isDark ? 'overlay' : 'multiply',
          }}
        ></div>

        {/* Progress Bar */}
        <ProgressBar />

        {/* --- NAVIGATION SYSTEM --- */}
        <Navbar onOpenMenu={handleOpenMenu} showNavOverride={showNav} />

        <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        {/* Main Container */}
        <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-24 border-x border-[var(--border-color)] min-h-screen bg-[var(--bg-backdrop)] backdrop-blur-sm transition-colors duration-500 overflow-x-hidden">
          <div className="fade-in pt-12">

            {/* HERO & TICKER */}
            <HomeHero t={t} renderIdCard={shouldRenderHeroIdCard} startTyping={!showIntro} />

            {/* SECTION 1: WORK */}
            <HomeWorkSection t={t} />

            {/* SECTION 2: SIDE PROJECTS */}
            <HomeSideProjects t={t} isId={isId} />

            {/* SECTION 3: ABOUT ME */}
            <HomeAbout t={t} />

          </div>

          {/* FOOTER */}
          <section className="mb-0">
            <Footer />
          </section>

        </main>
      </div >
    </LayoutGroup>
  );
};

export default Portfolio;