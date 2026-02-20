import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DraggablePhoto = () => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [designVariant, setDesignVariant] = useState('industrial'); // industrial, cyberpunk, swiss

  const items = [
    { type: 'identity', src: '/hero-id-v2.jpg' },
    { type: 'image', src: '/hero-stoqo.jpg', alt: 'byebye STOQO' },
    { type: 'image', src: '/hero-lumina.jpg', alt: 'Career clinic from LUMINA' },
    { type: 'image', src: '/hero-running.jpg', alt: 'run 5k weekly' },
  ];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const toggleVariant = (e) => {
    e.stopPropagation();
    const variants = ['industrial', 'cyberpunk', 'swiss', 'glassmorphism', 'retro'];
    const nextIndex = (variants.indexOf(designVariant) + 1) % variants.length;
    setDesignVariant(variants[nextIndex]);
  };

  const currentItem = items[index];

  // --- VARIANTS RENDERERS ---

  const RenderIndustrial = () => (
    <div className="w-full h-full bg-black dark:bg-white border-[1px] border-white/20 dark:border-black/20 relative group overflow-hidden rounded-xl flex flex-col shadow-xl">
      {/* Punch Hole */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-2 bg-[#222] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] z-30 flex items-center justify-center">
        <div className="w-6 h-0.5 bg-black/50 rounded-full"></div>
      </div>
      {/* Holographic Sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-duration-700 pointer-events-none z-20 mix-blend-overlay bg-no-repeat" style={{ backgroundSize: '200% 200%' }}></div>
      {/* Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-color-burn z-10"></div>

      {/* Header */}
      <div className="h-24 bg-white dark:bg-black relative flex items-center justify-between px-4 pt-4 border-b-2 border-[var(--accent)]">
        <div className="flex flex-col">
          <span className="text-[var(--accent)] font-mono text-[10px] font-bold tracking-[0.2em]">{t('id_card.access_level') || 'ACCESS_LEVEL_4'}</span>
          <span className="text-black dark:text-white font-sans text-xs font-bold tracking-wide mt-1">{t('id_card.human') || 'HUMAN BY DESIGN'}</span>
        </div>
        <div className="w-8 h-8 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center">
          <User size={14} className="text-black/60 dark:text-white/60" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow p-4 bg-black dark:bg-white relative">
        <div className="absolute top-4 right-4 w-10 h-8 bg-gradient-to-br from-yellow-200 to-yellow-600 rounded-md border border-yellow-700 shadow-sm flex flex-wrap gap-[1px] content-center justify-center p-[2px] opacity-90">
          <div className="w-2.5 h-3 border border-yellow-800/20 rounded-tl-sm"></div>
          <div className="w-2.5 h-3 border border-yellow-800/20 rounded-tr-sm"></div>
          <div className="w-2.5 h-3 border border-yellow-800/20 rounded-bl-sm"></div>
          <div className="w-2.5 h-3 border border-yellow-800/20 rounded-br-sm"></div>
        </div>
        <div className="w-28 h-36 bg-gray-300 border border-black/10 shadow-inner mb-4 relative overflow-hidden grayscale contrast-125 brightness-110">
          <img src={currentItem.src} alt="Fadly" className="w-full h-full object-cover" fetchPriority="high" loading="eager" />
        </div>
        <div className="space-y-3">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-white dark:text-black leading-none uppercase tracking-tight">UZZAKI, FADLY 🧢</h2>
            <span className="text-[10px] font-mono text-gray-400 dark:text-gray-600 uppercase tracking-widest mt-1">{t('id_card.role') || 'Product Designer // System Thinker'}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <label className="text-[8px] font-mono text-gray-500 dark:text-gray-400 uppercase block">{t('id_card.id_no') || 'ID_NO'}</label>
              <span className="text-xs font-mono font-medium text-white dark:text-black">1407-1995</span>
            </div>
            <div>
              <label className="text-[8px] font-mono text-gray-500 dark:text-gray-400 uppercase block">{t('id_card.exp') || 'EXP'}</label>
              <span className="text-xs font-mono font-medium text-white dark:text-black">{t('id_card.indefinite') || 'INDEFINITE'}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="h-12 bg-white dark:bg-[#222] border-t border-black/5 dark:border-white/5 flex items-center justify-between px-4 relative overflow-hidden">
        <div className="flex items-center gap-[2px] h-6 opacity-40 mix-blend-multiply dark:mix-blend-screen w-full">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="bg-black dark:bg-white" style={{ width: (i * 13) % 7 > 3 ? '2px' : '4px', height: '100%' }}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const RenderCyberpunk = () => (
    <div className="w-full h-full bg-black border-2 border-cyan-500 relative group overflow-hidden rounded-xl flex flex-col shadow-[0_0_20px_rgba(6,182,212,0.3)]">
      {/* Grid Bg */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      {/* Header */}
      <div className="h-20 bg-cyan-950/30 flex items-center justify-between px-4 border-b border-cyan-500/50 backdrop-blur-sm z-10">
        <div className="flex flex-col">
          <span className="text-cyan-400 font-mono text-xs font-bold animate-pulse uppercase">{t('id_card.access_level') || 'ACCESS_LEVEL_4'}</span>
          <span className="text-white font-mono text-[10px] opacity-70">{t('id_card.human') || 'HUMAN BY DESIGN'}</span>
        </div>
        <div className="w-8 h-8 border border-cyan-400 rotate-45 flex items-center justify-center">
          <div className="w-6 h-6 bg-cyan-400/20 -rotate-45"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow p-4 relative z-10">
        <div className="flex gap-4">
          <div className="w-24 h-32 border border-cyan-500/50 relative overflow-hidden">
            <img src={currentItem.src} alt="Fadly" className="w-full h-full object-cover grayscale contrast-150 mix-blend-luminosity" fetchPriority="high" loading="eager" />
            <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay"></div>
          </div>
          <div className="flex-1 space-y-2">
            <div>
              <label className="text-[9px] text-cyan-700 font-mono block">{t('id_card.identity') || 'IDENTITY'}</label>
              <h2 className="text-lg text-white font-bold font-mono tracking-tighter leading-tight">UZZAKI,<br />FADLY 🧢</h2>
            </div>
            <div>
              <label className="text-[9px] text-cyan-700 font-mono block">{t('company.role') || 'ROLE'}</label>
              <span className="text-xs text-cyan-100 font-mono">{t('id_card.role') || 'Product Designer // System Thinker'}</span>
            </div>
            <div className="pt-2">
              <span className="text-[8px] text-cyan-500 font-mono block mb-1">{t('id_card.exp')}: {t('id_card.indefinite')}</span>
              <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 w-[100%] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="h-10 bg-cyan-950/80 border-t border-cyan-500/50 flex items-center justify-between px-4 z-10">
        <span className="text-[10px] font-mono text-cyan-400">{t('id_card.id_no')}: 1407-1995</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></div>
          <span className="text-[8px] font-mono text-cyan-300">{t('id_card.online') || 'ONLINE'}</span>
        </div>
      </div>
    </div>
  );

  const RenderSwiss = () => (
    <div className="w-full h-full bg-[#E5E5E5] border-none relative group overflow-hidden rounded-md flex flex-col shadow-2xl">
      {/* Bold Header */}
      <div className="h-32 bg-[#FF3333] p-4 text-white flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="font-bold text-2xl tracking-tighter leading-none">ID.<br />CARD</span>
          <div className="w-4 h-4 rounded-full bg-white"></div>
        </div>
        <span className="font-mono text-xs opacity-80 uppercase">{t('id_card.human') || 'Human By Design'}</span>
      </div>

      {/* Content */}
      <div className="flex-grow p-4 bg-white relative">
        <div className="absolute -top-12 right-4 w-24 h-32 bg-gray-200 border-4 border-white shadow-lg z-10">
          <img src={currentItem.src} alt="Fadly" className="w-full h-full object-cover grayscale" fetchPriority="high" loading="eager" />
        </div>

        <div className="mt-8 space-y-4">
          <div>
            <h2 className="text-3xl font-black text-black tracking-tighter leading-none">UZZAKI</h2>
            <h2 className="text-3xl font-black text-transparent stroke-black tracking-tighter leading-none" style={{ WebkitTextStroke: '1px black' }}>FADLY 🧢</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <label className="font-bold text-xs block mb-1 text-black">{t('id_card.id_no') || 'ID NO'}</label>
              <span className="font-mono text-sm text-black">1407-1995</span>
            </div>
            <div>
              <label className="font-bold text-xs block mb-1 text-black">{t('company.role') || 'Role'}</label>
              <span className="font-mono text-sm leading-tight block text-black">{t('id_card.role') || 'Product Designer // System Thinker'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const RenderGlassmorphism = () => (
    <div className="w-full h-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 backdrop-blur-xl border border-white/30 relative group overflow-hidden rounded-2xl flex flex-col shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
      {/* Header */}
      <div className="h-20 flex items-center justify-between px-6 pt-4 border-b border-white/20">
        <div className="flex flex-col">
          <span className="text-white/80 font-mono text-xs tracking-widest">{t('id_card.access_level') || 'ACCESS_LEVEL_4'}</span>
          <span className="text-white font-sans text-xs font-medium tracking-tight mt-1">{t('id_card.human') || 'HUMAN BY DESIGN'}</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/40 shadow-inner">
          <User size={14} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow p-6 relative flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border-4 border-white/40 shadow-xl mb-4 relative overflow-hidden ring-4 ring-purple-500/20">
          <img src={currentItem.src} alt="Fadly" className="w-full h-full object-cover" fetchPriority="high" loading="eager" />
        </div>
        <div className="text-center space-y-2 w-full">
          <h2 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">UZZAKI, FADLY</h2>
          <span className="text-xs font-medium text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/10 inline-block">{t('id_card.role') || 'Product Designer // System Thinker'}</span>

          <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/20">
            <div>
              <span className="text-[9px] text-white/60 uppercase block">{t('id_card.id_no') || 'ID_NO'}</span>
              <span className="text-sm font-mono text-white drop-shadow-sm">1407-1995</span>
            </div>
            <div>
              <span className="text-[9px] text-white/60 uppercase block">{t('id_card.exp') || 'EXP'}</span>
              <span className="text-sm font-mono text-white drop-shadow-sm">{t('id_card.indefinite') || 'INDEFINITE'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const RenderRetro = () => (
    <div className="w-full h-full bg-[#E8E8E8] border-4 border-black border-t-8 border-b-8 relative group overflow-hidden rounded-md flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-1">
      {/* Header */}
      <div className="h-16 flex items-center justify-center border-b-2 border-black border-dashed mb-2">
        <span className="text-black font-mono text-xl font-bold uppercase tracking-widest leading-none text-center">
          * IDENTITY *<br />
          <span className="text-[10px] tracking-normal">{t('id_card.human') || 'HUMAN BY DESIGN'}</span>
        </span>
      </div>

      {/* Content */}
      <div className="flex-grow p-2 relative flex gap-4 items-start">
        <div className="w-24 h-28 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 p-1">
          <img src={currentItem.src} alt="Fadly" className="w-full h-full object-cover grayscale contrast-200" fetchPriority="high" loading="eager" />
        </div>
        <div className="flex-1 space-y-2 pt-2">
          <div>
            <label className="text-[9px] text-black font-mono block uppercase underline">{t('id_card.id_no') || 'ID_NO'}</label>
            <span className="text-sm font-mono text-black font-bold">1407-1995</span>
          </div>
          <div>
            <label className="text-[9px] text-black font-mono block uppercase underline">{t('company.role') || 'ROLE'}</label>
            <span className="text-[10px] leading-tight text-black font-mono font-bold block">{t('id_card.role') || 'Product Designer // System Thinker'}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="h-14 bg-black flex items-center justify-between px-4 mt-auto">
        <h2 className="text-xl font-black text-white font-mono tracking-tighter">FADLY.U 🧢</h2>
        <div className="px-2 py-1 bg-white border border-black text-[10px] font-bold font-mono">
          {t('id_card.access_level') || 'ACCESS_LEVEL_4'}
        </div>
      </div>
    </div>
  );

  const renderCard = () => {
    switch (designVariant) {
      case 'cyberpunk': return <RenderCyberpunk />;
      case 'swiss': return <RenderSwiss />;
      case 'glassmorphism': return <RenderGlassmorphism />;
      case 'retro': return <RenderRetro />;
      default: return <RenderIndustrial />;
    }
  };

  return (
    <div className="relative inline-block w-full mb-10"> {/* Wrapper with extra bottom space */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.15}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        whileHover={{ scale: 1.02, rotate: 0, cursor: 'grab' }}
        whileTap={{ scale: 0.98, cursor: 'grabbing' }}
        initial={{ rotate: 2 }}
        animate={{ rotate: 0 }}
        whileDrag={{ scale: 1.05, rotate: 0, zIndex: 10 }}
        onClick={handleNext}
        className="md:block relative cursor-grab active:cursor-grabbing w-full aspect-[3/4.2] select-none group"
      >
        {/* Lanyard Clip Construction */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-4 h-20 z-0 pointer-events-none">
          {/* Strap Loop */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-[300px] border-[12px] border-[#1a1a1a] dark:border-zinc-400 rounded-[50%] -z-10 shadow-xl"></div>

          {/* Metal Clip Body */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-10 bg-gradient-to-b from-zinc-300 to-zinc-500 rounded-md shadow-md flex flex-col items-center justify-end pb-1 border border-zinc-600 z-10">
            {/* Clip Spring */}
            <div className="w-4 h-3 bg-zinc-700 rounded-sm mb-1 opacity-80"></div>
          </div>

          {/* Connection to Card */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-4 bg-zinc-800/80 rounded-full z-20"></div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={designVariant + index} // Key includes design to trigger transition on switch
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="w-full h-full"
          >
            {currentItem.type === 'identity' ? (
              renderCard()
            ) : (
              /* Generic Card Back / Alt Image */
              <div className="w-full h-full border border-[var(--border-color)] overflow-hidden relative select-none rounded-xl bg-black group-inner shadow-2xl">
                <img
                  src={currentItem.src}
                  alt={currentItem.alt}
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="bg-black/60 backdrop-blur-md px-2 py-1 text-[9px] font-mono text-white uppercase border border-white/10 pt-1.5">
                    REF_IMG_{index}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 backdrop-blur-md px-3 py-2 text-xs font-mono text-white leading-tight border border-white/10">
                    {currentItem.alt}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* DESIGN SWITCHER CONTROL - Repositioned to bottom right */}
      <div className="absolute right-0 -bottom-10 flex flex-col gap-2">
        <button
          onClick={toggleVariant}
          className="w-8 h-8 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-lg flex items-center justify-center text-[10px] font-bold hover:scale-110 active:scale-95 transition-transform z-10"
          title="Switch Design Style"
        >
          🎨
        </button>
      </div>
    </div>
  );
};

export default DraggablePhoto;
