import React, { useState, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import NavigationMenu from '../components/NavigationMenu';
import ScrollProgressBar from '../components/ScrollProgressBar';
import { useTheme } from '../context/ThemeContext';
import useThemeStyles from '../hooks/useThemeStyles';
import { useLanguage } from '../context/LanguageContext';
import sketchesData from '../data/sketches.json';
import Flipbook from '../components/sketches/Flipbook';

const allDigital = [...sketchesData].filter(s => s.medium === 'digital').reverse();
const allPencil = [...sketchesData].filter(s => s.medium === 'pencil').reverse();

const Sketches = () => {
  const { isDark } = useTheme();
  const themeStyles = useThemeStyles();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMedium, setActiveMedium] = useState('pencil');

  const handleOpenMenu = useCallback(() => setIsMenuOpen(true), []);
  const handleCloseMenu = useCallback(() => setIsMenuOpen(false), []);

  const nodes = useMemo(
    () => (activeMedium === 'digital' ? allDigital : allPencil),
    [activeMedium]
  );
  const isDigital = activeMedium === 'digital';

  return (
    <div
      style={themeStyles}
      className={`min-h-[100dvh] flex flex-col ${isDark ? 'bg-[#1a1a1c]' : 'bg-[#f4f4f6]'} text-[var(--text-primary)] font-sans selection:bg-zinc-800 selection:text-white transition-colors duration-700 overflow-hidden relative`}
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
      <div className={`absolute inset-0 z-0 pointer-events-none opacity-[0.25] mix-blend-overlay`}
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      {/* Ambient lighting (subtle vignette instead of harsh radial spotlight) */}
      <div className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-500`}
        style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.15)' }}>
      </div>

      <ScrollProgressBar />

      {/* --- NAVIGATION SYSTEM --- */}
      <div className="relative z-50">
        <Navbar onOpenMenu={handleOpenMenu} title="SKETCHES" backPath="/" />
        <NavigationMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
      </div>

      <main className="relative z-10 flex-1 w-full flex flex-col items-center justify-center pt-20 pb-10">
        <div className="w-full flex justify-center mb-6">
          {/* Toggle controls */}
          <div className={`flex items-center gap-2 md:gap-4 backdrop-blur-md p-1.5 rounded-full border shadow-2xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
            <button
              onClick={() => setActiveMedium('pencil')}
              className={`relative px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-widest transition-colors ${!isDigital ? 'text-zinc-900' : (isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black')}`}
            >
              {!isDigital && (
                <motion.div
                  layoutId="node-pill"
                  className="absolute inset-0 bg-white shadow-sm rounded-full"
                  style={{ zIndex: -1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              {t('sketches.pencil') || 'GRAPHITE'}
            </button>
            <button
              onClick={() => setActiveMedium('digital')}
              className={`relative px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-widest transition-colors ${isDigital ? (isDark ? 'text-white' : 'text-blue-900') : (isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black')}`}
            >
              {isDigital && (
                <motion.div
                  layoutId="node-pill"
                  className="absolute inset-0 bg-blue-600/20 border border-blue-500/30 rounded-full"
                  style={{ zIndex: -1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              {t('sketches.digital') || 'DIGITAL'}
            </button>
          </div>
        </div>

        <Flipbook pages={nodes} initialPage={0} />
      </main>
      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  );
};

export default Sketches;
