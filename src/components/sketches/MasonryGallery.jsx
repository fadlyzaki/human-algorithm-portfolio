import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { X, Activity, ImageOff, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import sketchesData from '../../data/sketches.json';

// Reverse arrays so the newest (bottom of JSON) appear first
const allDigital = [...sketchesData].filter(s => s.medium === 'digital').reverse();
const allPencil = [...sketchesData].filter(s => s.medium === 'pencil').reverse();

// --- Image Component with Fallback ---
const NodeImage = ({ node, isDigital }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center p-4 text-center ${isDigital ? 'bg-blue-900/10' : 'bg-zinc-100'} w-[30vw] aspect-[4/3] min-h-[300px]`}>
        <ImageOff size={24} className={isDigital ? 'text-blue-500/30' : 'text-zinc-300'} />
        <p className={`mt-2 font-mono text-[8px] uppercase tracking-tighter ${isDigital ? 'text-blue-500/40' : 'text-zinc-400'}`}>
          Failed to load
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img
        src={node.url}
        alt={node.title}
        draggable="false"
        loading="lazy"
        onError={() => setHasError(true)}
        className={`object-contain max-h-[60vh] max-w-[80vw] transition-transform duration-700 z-10 relative ${isDigital ? 'opacity-95' : 'contrast-110 sepia-[0.05]'
          }`}
      />
      {/* Subtle Matte/Inner Shadow */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] z-20 mix-blend-multiply"></div>
    </div>
  );
};

// --- Artwork Frame Component (Parallax) ---
const ArtworkFrame = ({ node, isDigital, onClick, index, scrollYProgress }) => {

  // Create a slight parallax effect: frames slide slightly at different speeds based on index
  const parallaxShift = useTransform(
    scrollYProgress,
    [0, 1],
    [0, (index % 2 === 0 ? -30 : 30)]
  );

  return (
    <motion.div
      style={{ y: parallaxShift }}
      className={`group cursor-pointer flex-shrink-0 flex flex-col items-center justify-center snap-center px-4 md:px-12 h-full`}
      onClick={(e) => onClick(node, e)}
    >
      <div
        className={`relative transition-all duration-700 ${isDigital
            ? 'p-4 bg-white shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] ring-1 ring-zinc-200/50'
            : 'p-6 bg-[#f8f6f0] shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-[#e8e4d9]'
          }`}
      >
        <NodeImage node={node} isDigital={isDigital} />
      </div>

      {/* Museum Placard */}
      <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center text-center w-full max-w-[200px]">
        <div className="flex flex-col border-b border-zinc-300 pb-3 mb-3 w-full">
          <span className="font-serif italic text-sm text-zinc-800 mb-1">{node.title}</span>
          <span className="font-mono text-[9px] text-zinc-400 tracking-widest">{node.id.slice(-6).toUpperCase()}</span>
        </div>
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-500">
          {isDigital ? 'Digital Format' : 'Graphite on Paper'}
        </span>
      </div>
    </motion.div>
  );
};

// --- Lightbox Component ---
const Lightbox = ({ image, onClose }) => {
  const [hasError, setHasError] = useState(false);
  if (!image) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/98 backdrop-blur-2xl cursor-zoom-out p-4 md:p-12"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X size={24} />
      </button>

      {hasError ? (
        <div className="flex flex-col items-center justify-center p-12 bg-white/5 border border-white/10 rounded-2xl max-w-lg w-full aspect-video">
          <ImageOff size={48} className="text-white/20 mb-4" />
          <p className="text-white/60 font-mono text-xs uppercase tracking-[0.2em]">Image Unavailable</p>
          <p className="text-white/30 text-[10px] mt-2 text-center">{image.title}</p>
        </div>
      ) : (
        <motion.img
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          src={image.url}
          alt={image.title}
          onError={() => setHasError(true)}
          className="max-w-full max-h-[85vh] object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center bg-white text-zinc-900 px-8 py-5 shadow-2xl border border-zinc-200 max-w-[80vw]"
      >
        <p className="font-serif italic text-xl mb-1 truncate">
          {image.title}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
          {image.medium === 'digital' ? 'DIGITAL MEDIA' : 'GRAPHITE ON PAPER'}
        </p>
        <p className="text-zinc-400 font-mono text-[9px] tracking-widest">
          ARCHIVE REF: {image.id.toUpperCase()}
        </p>
      </motion.div>
    </motion.div>
  );
};

// --- Main Component ---
const HorizontalGallery = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [activeMedium, setActiveMedium] = useState('pencil');
  const [selectedImage, setSelectedImage] = useState(null);

  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const nodes = useMemo(
    () => (activeMedium === 'digital' ? allDigital : allPencil),
    [activeMedium]
  );

  const isDigital = activeMedium === 'digital';

  // --- Horizontal Scroll Hijacking ---
  // Translate vertical wheel scroll into horizontal scroll movement
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      // If the event doesn't have horizontal momentum (e.g. standard vertical scroll wheel)
      // we translate deltaY to scrollLeft
      if (e.deltaY !== 0 && e.deltaX === 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 1.5; // Multiplier for speed
      }
    };

    // Passive false is required to call preventDefault
    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  // Use Framer Motion useScroll on the horizontal container
  const { scrollXProgress } = useScroll({
    container: scrollContainerRef
  });

  // Smooth the scroll progress for parallax
  const smoothProgress = useSpring(scrollXProgress, { damping: 20, stiffness: 100 });

  const handleNodeClick = (img, e) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -window.innerWidth / 2, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: window.innerWidth / 2, behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {selectedImage && <Lightbox image={selectedImage} onClose={handleClose} />}
      </AnimatePresence>

      <div
        ref={containerRef}
        className={`relative w-full h-screen overflow-hidden transition-colors duration-1000 ${isDark ? 'bg-[#1a1a1c] text-white' : 'bg-[#f4f4f6] text-zinc-900'
          }`}
      >
        {/* --- BACKGROUND TEXTURES --- */}
        <div className={`absolute inset-0 z-0 pointer-events-none opacity-[0.25] mix-blend-overlay`}
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
        <div className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-500`}
          style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.15)' }}
        />



        {/* --- HORIZONTAL NAVIGATION ARROWS --- */}
        <div className="absolute right-6 md:right-12 bottom-8 z-50 flex gap-2 pointer-events-auto">
          <button
            onClick={scrollLeft}
            className={`p-3 rounded-full backdrop-blur-md border transition-all ${isDark ? 'bg-zinc-900/50 border-white/10 text-white hover:bg-zinc-800' : 'bg-white/50 border-black/10 text-black hover:bg-white'}`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={scrollRight}
            className={`p-3 rounded-full backdrop-blur-md border transition-all ${isDark ? 'bg-zinc-900/50 border-white/10 text-white hover:bg-zinc-800' : 'bg-white/50 border-black/10 text-black hover:bg-white'}`}
          >
            <ChevronRight size={18} />
          </button>
        </div>


        {/* --- HORIZONTAL SCROLL CANVAS --- */}
        <div
          ref={scrollContainerRef}
          className="absolute inset-0 z-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar flex items-center px-[10vw] cursor-ew-resize"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex h-full items-center justify-start gap-12 md:gap-32 min-w-max">

            {/* --- TITLE CARD (Now inside the carousel) --- */}
            <div className="flex flex-col items-start justify-center h-full px-12 md:px-32 w-[90vw] md:w-[60vw] shrink-0 snap-center pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <Activity size={18} className={isDark ? 'text-zinc-500' : 'text-zinc-400'} />
                <span className={`font-mono text-xs tracking-[0.2em] uppercase text-zinc-500`}>
                  {t('sketches.title') || 'ARCHIVE'}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-bold tracking-tight mb-12"
              >
                {t('nav.sketches') || 'Exhibition'}.
              </motion.h1>

              {/* Toggle controls */}
              <div className={`flex items-center gap-4 backdrop-blur-md p-1.5 rounded-full border shadow-2xl mb-8 ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
                <button
                  onClick={() => setActiveMedium('pencil')}
                  className={`relative px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-colors ${!isDigital ? 'text-zinc-900' : (isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black')}`}
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
                  className={`relative px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-colors ${isDigital ? (isDark ? 'text-white' : 'text-blue-900') : (isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black')}`}
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

              {/* Curation Note */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeMedium}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="max-w-md text-zinc-500 font-mono text-[10px] md:text-xs uppercase tracking-widest leading-relaxed"
                >
                  [ CURATOR: {isDigital
                    ? 'SYSTEM NODES REPRESENT POLISHED STRUCTURALLY RIGID DIGITAL ASSETS. DISPLAYED RECENT FIRST.'
                    : 'PRACTICE OBSERVATIONS AND RAW GRAPHITE SKETCHES. DISPLAYED RECENT FIRST.'} ]
                </motion.p>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="popLayout">
              {nodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, delay: i < 5 ? i * 0.1 : 0 }} // Only stagger the first few
                  className="h-full flex items-center"
                >
                  <ArtworkFrame
                    node={node}
                    isDigital={isDigital}
                    index={i}
                    onClick={handleNodeClick}
                    scrollYProgress={smoothProgress}
                  />
                </motion.div>
              ))}
            </AnimatePresence>

            {/* End of Exhibition marker */}
            <div className="h-full flex items-center px-32 snap-center">
              <div className="font-mono text-zinc-400/50 text-xs tracking-[0.5em] uppercase whitespace-nowrap rotate-90 origin-left">
                [ END OF EXHIBITION ]
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Global CSS to hide scrollbar but keep functionality */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </>
  );
};

export default HorizontalGallery;
