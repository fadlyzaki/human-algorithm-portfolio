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
            <div className="w-full h-full bg-[var(--bg-card)] border border-[var(--border-color)] relative group overflow-hidden select-none rounded-lg">
              {/* Hero Image Background */}
              <img
                src={currentItem.src}
                alt="Fadly Uzzaki"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />

              {/* Mesh Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-60"></div>

              {/* Metadata */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center border-b border-white/20 pb-2 z-10">
                <span className="font-mono text-[10px] text-white uppercase tracking-widest mix-blend-difference">ID_CARD.001</span>
                <div className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse shadow-[0_0_10px_var(--accent-green)]"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pt-12 z-10">
                <h3 className="font-serif italic text-2xl text-white">Fadly Uzzaki</h3>
                <p className="font-mono text-[10px] text-gray-300 uppercase tracking-widest mt-1">Product Designer</p>
              </div>

              {/* Helper Label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                <span className="bg-white text-black text-[10px] font-mono px-2 py-1 rounded shadow-xl">
                  CLICK TO SWAP
                </span>
              </div>
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
