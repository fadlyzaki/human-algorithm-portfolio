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
      className={`min-h-screen ${isDark ? 'bg-[#1a1a1c]' : 'bg-[#f4f4f6]'} text-[var(--text-primary)] font-sans selection:bg-zinc-800 selection:text-white transition-colors duration-700 overflow-x-hidden`}
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
      {/* Subtle wall texture noise overlay */}
      <div className={`fixed inset-0 z-0 pointer-events-none opacity-[0.25] mix-blend-overlay`}
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      {/* Ambient lighting (subtle vignette instead of harsh radial spotlight) */}
      <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-500`}
        style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.1)' }}>
      </div>

      <ScrollProgressBar />

      {/* --- NAVIGATION SYSTEM --- */}
      <Navbar onOpenMenu={handleOpenMenu} title="SKETCHES" backPath="/" />
      <NavigationMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />

      <main className="relative z-10 w-full min-h-screen overflow-hidden">
        <MasonryGallery />
      </main>
    </div>
  );
};

export default Sketches;
