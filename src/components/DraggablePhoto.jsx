import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from 'lucide-react';

const DraggablePhoto = () => {
  const [index, setIndex] = useState(0);

  const items = [
    { type: 'identity', src: '/hero-id-v2.jpg' },
    { type: 'image', src: '/hero-stoqo.jpg', alt: 'byebye STOQO' },
    { type: 'image', src: '/hero-lumina.jpg', alt: 'Career clinic from LUMINA' },
    { type: 'image', src: '/hero-running.jpg', alt: 'run 5k weekly' },
  ];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const currentItem = items[index];

  return (
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
      className="md:block relative cursor-grab active:cursor-grabbing w-full aspect-[3/4.2] mb-6 select-none group"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -90 }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="w-full h-full shadow-2xl rounded-xl"
        >
          {currentItem.type === 'identity' ? (
            <div className="w-full h-full bg-[#f0f0f4] dark:bg-[#1a1a1c] border-[1px] border-white/20 relative group overflow-hidden rounded-xl flex flex-col shadow-xl">

              {/* --- 1. PHYSICAL ACCENTS --- */}
              {/* Punch Hole */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-2 bg-[#222] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] z-30 flex items-center justify-center">
                <div className="w-6 h-0.5 bg-black/50 rounded-full"></div>
              </div>

              {/* Holographic Sheen Layer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-duration-700 pointer-events-none z-20 mix-blend-overlay bg-no-repeat" style={{ backgroundSize: '200% 200%' }}></div>

              {/* Noise Texture */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-color-burn z-10"></div>

              {/* --- 2. HEADER --- */}
              <div className="h-24 bg-[#0a0a0a] relative flex items-center justify-between px-4 pt-4 border-b-2 border-[var(--accent)]">
                <div className="flex flex-col">
                  <span className="text-[var(--accent)] font-mono text-[10px] font-bold tracking-[0.2em]">ACCESS_LEVEL_4</span>
                  <span className="text-white font-sans text-xs font-bold tracking-wide mt-1">HUMAN ALGORITHM</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <User size={14} className="text-white/60" />
                </div>
              </div>

              {/* --- 3. CORE CONTENT --- */}
              <div className="flex-grow p-4 bg-[#f0f0f4] dark:bg-[#1C1C1E] relative">
                {/* Smart Chip */}
                <div className="absolute top-4 right-4 w-10 h-8 bg-gradient-to-br from-yellow-200 to-yellow-600 rounded-md border border-yellow-700 shadow-sm flex flex-wrap gap-[1px] content-center justify-center p-[2px] opacity-90">
                  <div className="w-2.5 h-3 border border-yellow-800/20 rounded-tl-sm"></div>
                  <div className="w-2.5 h-3 border border-yellow-800/20 rounded-tr-sm"></div>
                  <div className="w-2.5 h-3 border border-yellow-800/20 rounded-bl-sm"></div>
                  <div className="w-2.5 h-3 border border-yellow-800/20 rounded-br-sm"></div>
                </div>

                {/* Photo */}
                <div className="w-28 h-36 bg-gray-300 border border-black/10 shadow-inner mb-4 relative overflow-hidden grayscale contrast-125 brightness-110">
                  <img src={currentItem.src} alt="Fadly" className="w-full h-full object-cover" />
                </div>

                {/* Data Fields */}
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-none uppercase tracking-tight">UZZAKI, FADLY</h2>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">Product Designer // SysOp</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <label className="text-[8px] font-mono text-gray-400 uppercase block">ID_NO</label>
                      <span className="text-xs font-mono font-medium text-gray-800 dark:text-gray-200">8829-2025</span>
                    </div>
                    <div>
                      <label className="text-[8px] font-mono text-gray-400 uppercase block">EXP</label>
                      <span className="text-xs font-mono font-medium text-gray-800 dark:text-gray-200">INDEFINITE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- 4. FOOTER --- */}
              <div className="h-12 bg-white dark:bg-[#222] border-t border-black/5 dark:border-white/5 flex items-center justify-between px-4 relative overflow-hidden">
                {/* Barcode Strip */}
                <div className="flex items-center gap-[2px] h-6 opacity-40 mix-blend-multiply dark:mix-blend-screen w-full">
                  {/* Pseudo-random barcode using index for determinism */}
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="bg-black dark:bg-white" style={{ width: (i * 13) % 7 > 3 ? '2px' : '4px', height: '100%' }}></div>
                  ))}
                </div>

                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-[#222] to-transparent"></div>
              </div>

              {/* TAP HINT */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 backdrop-blur-[1px] z-50 pointer-events-none">
                <span className="bg-black/80 text-white text-[9px] font-mono px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/20">
                  Tap to Flip
                </span>
              </div>

            </div>
          ) : (
            /* Generic Card Back / Alt Image */
            <div className="w-full h-full border border-[var(--border-color)] overflow-hidden relative select-none rounded-xl bg-black group-inner">
              <img
                src={currentItem.src}
                alt={currentItem.alt}
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
  );
};

export default DraggablePhoto;
