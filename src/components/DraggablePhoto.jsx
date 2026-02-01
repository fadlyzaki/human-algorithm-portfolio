import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from 'lucide-react';

const DraggablePhoto = () => {
  const [index, setIndex] = useState(0);

  // Using placeholders for now - in a real scenario these would be actual image URLs
  // For the first item, we keep the original "Identity Anchor" style
  const items = [
    { type: 'identity', src: '/hero-fadly.jpg' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop', alt: 'Coding Setup' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop', alt: 'Abstract Design' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop', alt: 'Code Screen' },
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
      className="md:block relative cursor-grab active:cursor-grabbing w-full aspect-[3/4] mb-6"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -90 }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="w-full h-full shadow-2xl"
        >
          {currentItem.type === 'identity' ? (
            <div className="w-full h-full bg-[#E5E5E5] dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 relative group overflow-hidden select-none rounded-[16px] flex flex-col shadow-2xl">

              {/* Lanyard Slot */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-black/80 dark:bg-white/20 rounded-full shadow-inner z-20"></div>

              {/* Card Header */}
              <div className="pt-10 pb-4 px-6 text-center border-b border-black/5 dark:border-white/5 bg-white dark:bg-[#222]">
                <h3 className="font-mono text-[10px] tracking-[0.2em] font-bold text-[var(--accent)] uppercase">Human Algorithm</h3>
                <p className="text-[8px] font-mono text-gray-400 mt-1 uppercase">Access Pass v2.0</p>
              </div>

              {/* Photo Area */}
              <div className="p-6 pb-2 flex-grow flex flex-col items-center justify-center">
                <div className="w-32 h-40 bg-gray-200 relative mb-4 overflow-hidden rounded-sm border-2 border-white dark:border-gray-700 shadow-sm">
                  <img
                    src={currentItem.src}
                    alt="Fadly Uzzaki"
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                  {/* Holographic sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay"></div>
                </div>

                <h2 className="font-serif italic text-2xl text-[var(--text-primary)]">Fadly Uzzaki</h2>
                <p className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest mt-1">Product Designer</p>
              </div>

              {/* Footer / Barcode */}
              <div className="p-4 bg-white dark:bg-[#222] border-t border-black/5 dark:border-white/5 flex justify-between items-end relative">
                <div className="space-y-1">
                  <div className="text-[8px] font-mono text-gray-400">ID: 8829-2025</div>
                  <div className="text-[8px] font-mono text-gray-400">LOC: JAKARTA, ID</div>
                </div>
                {/* Fake Barcode */}
                <div className="flex items-end gap-[2px] h-6 opacity-60">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-[var(--text-primary)]"
                      style={{
                        width: Math.random() > 0.5 ? '2px' : '4px',
                        height: `${40 + Math.random() * 60}%`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Click Hint */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="bg-[var(--accent)] text-white text-[8px] font-mono px-2 py-1 rounded shadow-xl">
                    TAP_TO_SWAP
                  </span>
                </div>
              </div>

              {/* Texture Overlay */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10 pointer-events-none"></div>

            </div>
          ) : (
            <div className="w-full h-full border border-[var(--border-color)] overflow-hidden relative select-none rounded-lg">
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[var(--border-color)]"></div>
              <div className="absolute bottom-4 left-4 font-mono text-xs text-white bg-black/50 backdrop-blur-sm px-2 py-1">
                {currentItem.alt}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--accent-blue)]/20 to-[var(--accent-amber)]/20 -z-10 blur-2xl opacity-40 rounded-full group-hover:opacity-60 transition-opacity"></div>
    </motion.div>
  );
};

export default DraggablePhoto;
