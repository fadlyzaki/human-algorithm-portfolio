import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MasonryGallery from '../components/sketches/MasonryGallery';
import SEO from '../components/SEO';
import NavigationMenu from '../components/NavigationMenu';
import ScrollProgressBar from '../components/ScrollProgressBar';
import { useTheme } from '../context/ThemeContext';
import useThemeStyles from '../hooks/useThemeStyles';
import { useLanguage } from '../context/LanguageContext';

const Sketches = () => {
  const { isDark } = useTheme();
  const themeStyles = useThemeStyles();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = useCallback(() => setIsMenuOpen(true), []);
  const handleCloseMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <div
      style={themeStyles}
      className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-zinc-800 selection:text-white transition-colors duration-700 overflow-x-hidden"
    >
      <Helmet>
        <title>Sketches | Fadly Zaki</title>
        <meta name="description" content="An archive of systematic digital designs and raw pencil sketches." />
      </Helmet>

      <SEO
        title="Sketches"
        description="An archive of systematic digital designs and raw pencil sketches."
        type="website"
      />

      {/* --- BACKGROUND ELEMENTS --- */}
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

      <ScrollProgressBar />

      {/* --- NAVIGATION SYSTEM --- */}
      <Navbar onOpenMenu={handleOpenMenu} title="SKETCHES" backPath="/" />
      <NavigationMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 border-x border-[var(--border-color)] min-h-screen bg-[var(--bg-void)]/80 backdrop-blur-sm shadow-2xl overflow-x-hidden px-4 md:px-8">
        {/* Padding for fixed header */}
        <div className="h-16 md:h-24"></div>
        <MasonryGallery />
      </main>

      <Footer />
    </div>
  );
};

export default Sketches;
