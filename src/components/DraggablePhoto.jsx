import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { User } from 'lucide-react';
import PixelImage from './PixelImage';
import { useLanguage } from '../context/LanguageContext';

const DraggablePhoto = () => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [designVariant, setDesignVariant] = useState(() => {
    const variants = ['industrial', 'cyberpunk', 'swiss', 'glassmorphism', 'retro', 'neo-brutalism', 'holographic'];
    return variants[Math.floor(Math.random() * variants.length)];
  });

  const items = [
    { type: 'identity', src: '/hero-id-v2.jpg' },
    { type: 'image', src: '/hero-running.jpg', alt: 'run 5k weekly' },
    { type: 'image', src: '/hero-lumina.jpg', alt: 'Career clinic from LUMINA' },
    { type: 'image', src: '/hero-stoqo.jpg', alt: 'byebye STOQO' },
  ];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const toggleVariant = (e) => {
    e.stopPropagation();
    const variants = ['industrial', 'cyberpunk', 'swiss', 'glassmorphism', 'retro', 'neo-brutalism', 'holographic'];
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
          <span className="text-[var(--accent)] font-mono text-[10px] font-bold tracking-[0.2em]">{t('id_card.access_level') || 'ROOT_ACCESS'}</span>
          <span className="text-black dark:text-white font-sans text-xs font-bold tracking-wide mt-1">{t('id_card.human') || 'HUMAN BY DESIGN'}</span>
        </div>
        <div className="w-8 h-8 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center">
          <User size={14} className="text-black/60 dark:text-white/60" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow p-4 bg-black dark:bg-white relative">
        <div className="absolute top-4 right-4 w-10 h-8 bg-gray-200 dark:bg-gray-800 rounded-md border border-gray-400 dark:border-gray-600 shadow-sm flex flex-wrap gap-[1px] content-center justify-center p-[2px] opacity-90">
          <div className="w-2.5 h-3 border border-gray-400/50 dark:border-gray-500/50 rounded-tl-sm"></div>
          <div className="w-2.5 h-3 border border-gray-400/50 dark:border-gray-500/50 rounded-tr-sm"></div>
          <div className="w-2.5 h-3 border border-gray-400/50 dark:border-gray-500/50 rounded-bl-sm"></div>
          <div className="w-2.5 h-3 border border-gray-400/50 dark:border-gray-500/50 rounded-br-sm"></div>
        </div>
        <div className="w-28 h-36 bg-gray-300 border border-black/10 shadow-inner mb-4 relative overflow-hidden contrast-125 brightness-110">
          <PixelImage src={currentItem.src} alt="Fadly" />
        </div>
        <div className="space-y-3">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-white dark:text-black leading-none uppercase tracking-tight">UZZAKI, FADLY 🧢</h2>
            <span className="text-[10px] font-mono text-gray-400 dark:text-gray-600 uppercase tracking-widest mt-1">{t('id_card.role') || 'Product Designer // Systems Thinker'}</span>
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
    <div className="w-full h-full bg-black dark:bg-white border-2 border-white/20 dark:border-black/50 relative group overflow-hidden rounded-xl flex flex-col shadow-2xl">
      {/* Grid Bg */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      {/* Header */}
      <div className="h-20 bg-white/5 dark:bg-black/5 flex items-center justify-between px-4 border-b border-white/10 dark:border-black/10 backdrop-blur-sm z-10">
        <div className="flex flex-col">
          <span className="text-white dark:text-black font-mono text-xs font-bold animate-pulse uppercase">{t('id_card.access_level') || 'ROOT_ACCESS'}</span>
          <span className="text-white/70 dark:text-black/70 font-mono text-[10px]">{t('id_card.human') || 'HUMAN BY DESIGN'}</span>
        </div>
        <div className="w-8 h-8 border border-white/40 dark:border-black/40 rotate-45 flex items-center justify-center">
          <div className="w-6 h-6 bg-white/10 dark:bg-black/10 -rotate-45"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow p-4 relative z-10">
        <div className="flex gap-4">
          <div className="w-24 h-32 border border-white/20 dark:border-black/20 relative overflow-hidden bg-gray-900">
            <PixelImage src={currentItem.src} alt="Fadly" />
            <div className="absolute inset-0 bg-white/5 dark:bg-black/5 mix-blend-overlay"></div>
          </div>
          <div className="flex-1 space-y-2">
            <div>
              <label className="text-[9px] text-gray-400 dark:text-gray-500 font-mono block">{t('id_card.identity') || 'IDENTITY'}</label>
              <h2 className="text-lg text-white dark:text-black font-bold font-mono tracking-tighter leading-tight">UZZAKI,<br />FADLY 🧢</h2>
            </div>
            <div>
              <label className="text-[9px] text-gray-400 dark:text-gray-500 font-mono block">{t('company.role') || 'ROLE'}</label>
              <span className="text-xs text-gray-300 dark:text-gray-600 font-mono">{t('id_card.role') || 'Product Designer // Systems Thinker'}</span>
            </div>
            <div className="pt-2">
              <span className="text-[8px] text-gray-500 dark:text-gray-400 font-mono block mb-1">{t('id_card.exp')}: {t('id_card.indefinite')}</span>
              <div className="h-1 w-full bg-gray-800 dark:bg-gray-300 rounded-full overflow-hidden">
                <div className="h-full bg-white dark:bg-black w-[100%] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="h-10 bg-white/10 dark:bg-black/10 border-t border-white/10 dark:border-black/10 flex items-center justify-between px-4 z-10">
        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-600">{t('id_card.id_no')}: 1407-1995</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-white dark:bg-black animate-ping"></div>
          <span className="text-[8px] font-mono text-gray-300 dark:text-gray-700">{t('id_card.online') || 'ONLINE'}</span>
        </div>
      </div>
    </div>
  );

  const RenderSwiss = () => (
    <div className="w-full h-full bg-white dark:bg-black border border-black/10 dark:border-white/10 relative group overflow-hidden rounded-md flex flex-col shadow-2xl">
      {/* Bold Header */}
      <div className="h-32 bg-black dark:bg-white p-4 text-white dark:text-black flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="font-bold text-2xl tracking-tighter leading-none text-white dark:text-black">ID.<br />CARD</span>
          <div className="w-4 h-4 rounded-full bg-white dark:bg-black"></div>
        </div>
        <span className="font-mono text-xs opacity-80 uppercase text-white dark:text-black">{t('id_card.human') || 'Human By Design'}</span>
      </div>

      {/* Content */}
      <div className="flex-grow p-4 bg-white dark:bg-black relative">
        <div className="absolute -top-12 right-4 w-24 h-32 bg-gray-200 dark:bg-gray-800 border-4 border-white dark:border-black shadow-lg z-10">
          <PixelImage src={currentItem.src} alt="Fadly" />
        </div>

        <div className="mt-8 space-y-4">
          <div>
            <h2 className="text-3xl font-black text-black dark:text-white tracking-tighter leading-none">UZZAKI</h2>
            <h2 className="text-3xl font-black tracking-tighter leading-none dark:[--sw-stroke:#fff]" style={{ WebkitTextStroke: '1px var(--sw-stroke, #000)', WebkitTextFillColor: 'transparent' }}>FADLY 🧢</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <label className="font-bold text-xs block mb-1 text-black dark:text-white">{t('id_card.id_no') || 'ID NO'}</label>
              <span className="font-mono text-sm text-black dark:text-white">1407-1995</span>
            </div>
            <div>
              <label className="font-bold text-xs block mb-1 text-black dark:text-white">{t('company.role') || 'Role'}</label>
              <span className="font-mono text-sm leading-tight block text-black dark:text-white">{t('id_card.role') || 'Product Designer // Systems Thinker'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const RenderGlassmorphism = () => (
    <div className="w-full h-full bg-white/10 dark:bg-black/10 backdrop-blur-2xl border border-white/40 dark:border-white/10 relative group overflow-hidden rounded-xl flex flex-col shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">

      {/* Glassmorphism Sheen/Noise */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/5 dark:from-white/10 dark:via-transparent dark:to-transparent opacity-70 pointer-events-none z-20"></div>

      {/* Floating Header badge over image */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-30 px-1">
        <div className="flex flex-col bg-white/40 dark:bg-black/40 backdrop-blur-md px-2 py-1 rounded border border-white/40 dark:border-white/10 shadow-sm">
          <span className="text-black/90 dark:text-white/90 font-mono text-[9px] font-bold tracking-[0.1em]">{t('id_card.access_level') || 'ROOT_ACCESS'}</span>
        </div>
        <div className="w-8 h-8 rounded-full border border-white/40 dark:border-white/20 flex items-center justify-center bg-white/40 dark:bg-black/40 backdrop-blur-md shadow-sm">
          <User size={14} className="text-black/80 dark:text-white/80" />
        </div>
      </div>

      {/* Floating Photo Frame */}
      <div className="w-full mt-14 flex items-center justify-center relative z-10 p-2">
        {/* Beautiful frosted frame for photo */}
        <div className="w-28 h-36 p-1.5 rounded-2xl bg-white/30 dark:bg-black/40 backdrop-blur-xl border-t border-l border-white/60 dark:border-white/20 border-r border-b border-black/5 dark:border-black/40 shadow-xl relative overflow-hidden group/frame transition-transform hover:scale-105 duration-300">
          <div className="w-full h-full rounded-xl overflow-hidden relative shadow-inner">
            <PixelImage src={currentItem.src} alt="Fadly" />
            <div className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-xl pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Bottom Half: Content */}
      <div className="flex-grow px-5 pb-5 relative z-30 flex flex-col justify-end">
        <div className="space-y-4">
          <div className="flex flex-col">
            <h2 className="text-3xl font-black text-black drop-shadow-sm dark:text-white dark:drop-shadow-none leading-[0.9] tracking-tighter">UZZAKI<br />FADLY 🧢</h2>
            <span className="text-[9px] font-mono text-black/80 dark:text-white/90 uppercase tracking-widest mt-2 font-bold">{t('id_card.role') || 'Product Designer // Systems Thinker'}</span>
          </div>

          <div className="h-[1px] w-full bg-gradient-to-r from-black/20 via-black/10 to-transparent dark:from-white/20 dark:via-white/10 dark:to-transparent"></div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[8px] font-mono text-black/50 dark:text-white/40 block font-bold uppercase">{t('id_card.id_no') || 'ID_NO'}</label>
              <span className="text-xs font-mono font-black text-black/90 dark:text-white/90">1407-1995</span>
            </div>
            <div className="">
              <label className="text-[8px] font-mono text-black/50 dark:text-white/40 block font-bold uppercase">{t('company.role') || 'TYPE'}</label>
              <span className="text-[9px] font-mono font-bold text-black/90 dark:text-white/90 leading-tight block uppercase">{t('id_card.human') || 'HUMAN BY DESIGN'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const RenderRetro = () => (
    <div className="w-full h-full bg-white dark:bg-black border-4 border-black dark:border-white border-t-8 border-b-8 relative group overflow-hidden rounded-md flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] p-1">
      {/* Header */}
      <div className="h-16 flex items-center justify-center border-b-2 border-black dark:border-white border-dashed mb-2">
        <span className="text-black dark:text-white font-mono text-xl font-bold uppercase tracking-widest leading-none text-center">
          * IDENTITY *<br />
          <span className="text-[10px] tracking-normal">{t('id_card.human') || 'HUMAN BY DESIGN'}</span>
        </span>
      </div>

      {/* Content */}
      <div className="flex-grow p-2 relative flex gap-4 items-start">
        <div className="w-24 h-28 border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] z-10 p-1">
          <PixelImage src={currentItem.src} alt="Fadly" />
        </div>
        <div className="flex-1 space-y-2 pt-2">
          <div>
            <label className="text-[9px] text-black dark:text-white font-mono block uppercase underline">{t('id_card.id_no') || 'ID_NO'}</label>
            <span className="text-sm font-mono text-black dark:text-white font-bold">1407-1995</span>
          </div>
          <div>
            <label className="text-[9px] text-black dark:text-white font-mono block uppercase underline">{t('company.role') || 'ROLE'}</label>
            <span className="text-[10px] leading-tight text-black dark:text-white font-mono font-bold block">{t('id_card.role') || 'Product Designer // Systems Thinker'}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="h-14 bg-black dark:bg-white flex items-center justify-between px-4 mt-auto">
        <h2 className="text-xl font-black text-white dark:text-black font-mono tracking-tighter">FADLY UZZAKI 🧢</h2>
        <div className="px-2 py-1 bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white text-[10px] font-bold font-mono">
          {t('id_card.access_level') || 'ROOT_ACCESS'}
        </div>
      </div>
    </div>
  );

  const RenderNeoBrutalism = () => (
    <div className="w-full h-full bg-white dark:bg-black border-[6px] border-black dark:border-white relative group overflow-hidden rounded-none flex flex-col shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] p-2">
      {/* Header */}
      <div className="h-16 flex items-center justify-between border-b-4 border-black dark:border-white pb-2 mb-2">
        <span className="text-black dark:text-white font-mono text-2xl font-black uppercase tracking-tighter leading-none">
          ID_CARD<br />
          <span className="text-[10px] tracking-normal font-bold">{t('id_card.human') || 'HUMAN BY DESIGN'}</span>
        </span>
        <div className="w-8 h-8 rounded-full border-4 border-black dark:border-white bg-white dark:bg-black flex items-center justify-center">
          <User size={16} className="text-black dark:text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow relative flex flex-col items-center">
        <div className="w-[120px] h-[160px] border-[4px] border-black dark:border-white bg-white dark:bg-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] z-10 p-1 mb-4 rotate-2 group-hover:-rotate-2 transition-transform duration-300">
          <PixelImage src={currentItem.src} alt="Fadly" />
        </div>
        <div className="w-full bg-white dark:bg-black border-4 border-black dark:border-white p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
          <h2 className="text-2xl font-black text-black dark:text-white tracking-tighter leading-none mb-1 uppercase">🧢 FADLY UZZAKI</h2>
          <span className="text-[10px] leading-tight text-black dark:text-white font-mono font-bold block uppercase">{t('id_card.role') || 'Product Designer // Systems Thinker'}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="h-12 border-t-4 border-black dark:border-white flex items-center justify-between mt-auto pt-2">
        <span className="text-sm font-mono text-black dark:text-white font-black uppercase">{t('id_card.id_no') || 'ID_NO'}: 1407-1995</span>
        <div className="px-2 py-1 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white text-[10px] font-black font-mono uppercase">
          {t('id_card.access_level') || 'ROOT_ACCESS'}
        </div>
      </div>
    </div>
  );

  const RenderHolographic = () => (
    <div className="w-full h-full relative group overflow-hidden rounded-[20px] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
      {/* Dynamic Mono Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-400 to-black dark:from-black dark:via-gray-600 dark:to-white opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-1000 z-10 mix-blend-overlay"></div>

      {/* Inner card */}
      <div className="w-full h-full bg-gray-100/40 dark:bg-black/40 backdrop-blur-xl relative flex flex-col overflow-hidden border border-white/40 dark:border-white/10 z-20">

        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 z-10 pt-2 border-b border-gray-400/20 dark:border-gray-500/20">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] font-black tracking-widest uppercase text-gray-800 dark:text-gray-200">{t('id_card.access_level') || 'ROOT_ACCESS'}</span>
            <span className="text-gray-600 dark:text-gray-400 font-sans text-[10px] font-bold mt-1 uppercase">{t('id_card.human') || 'HUMAN BY DESIGN'}</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/40 dark:bg-black/40 border border-gray-400/40 dark:border-gray-600/40 flex items-center justify-center backdrop-blur-md">
            <User size={14} className="text-gray-800 dark:text-gray-200" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow p-4 relative z-10 flex flex-col items-center justify-center">
          <div className="w-28 h-36 rounded-2xl p-[2px] bg-gradient-to-br from-white/60 to-black/10 dark:from-white/20 dark:to-white/5 border border-white/60 dark:border-white/20 shadow-xl relative overflow-hidden group/frame">
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <PixelImage src={currentItem.src} alt="Fadly" />
            </div>
            {/* Gloss overlay on photo */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent dark:from-white/10 pointer-events-none rounded-xl"></div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 z-10 bg-white/30 dark:bg-black/30 backdrop-blur-md border-t border-gray-400/20 dark:border-gray-500/20">
          <div className="flex justify-between items-end mb-2">
            <div>
              <h2 className="text-2xl font-black tracking-tighter leading-none mb-1 text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500">🧢 FADLY UZZAKI</h2>
              <span className="text-[9px] font-mono text-gray-700 dark:text-gray-400 uppercase tracking-widest block font-bold">{t('id_card.role') || 'Product Designer'}</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono font-bold text-gray-800 dark:text-gray-300">1407-1995</span>
            </div>
          </div>
          {/* Tech grid bottom detail */}
          <div className="flex gap-[2px] mt-3 h-[2px]">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="flex-1 bg-gray-500/30 dark:bg-gray-400/30 h-full rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCard = () => {
    const VariantMap = {
      cyberpunk: RenderCyberpunk,
      swiss: RenderSwiss,
      glassmorphism: RenderGlassmorphism,
      retro: RenderRetro,
      'neo-brutalism': RenderNeoBrutalism,
      holographic: RenderHolographic,
      industrial: RenderIndustrial
    };

    // Fallback to industrial if variant not found
    const SelectedVariant = VariantMap[designVariant] || VariantMap.industrial;
    return <SelectedVariant />;
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
