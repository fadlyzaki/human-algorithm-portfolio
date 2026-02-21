import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { motion, AnimatePresence } from 'framer-motion';

import sketchesData from '../../data/sketches.json';

const allDigital = sketchesData.filter(s => s.medium === 'digital');
const allPencil = sketchesData.filter(s => s.medium === 'pencil');

const MasonryGallery = () => {
  const [activeMedium, setActiveMedium] = useState('digital'); // 'digital' or 'pencil'
  const [images, setImages] = useState(allDigital);

  useEffect(() => {
    // Slight delay to allow AnimatePresence to exit before fresh images arrive
    setImages([]);
    const timer = setTimeout(() => {
      setImages(activeMedium === 'digital' ? allDigital : allPencil);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeMedium]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className={`min-h-[100vh] w-[100vw] transition-colors duration-700 pt-[120px] pb-24 ${activeMedium === 'digital' ? 'bg-[#0a0a0a] text-zinc-200' : 'bg-[#f4f1ea] text-zinc-900'}`}>

      {/* Header & Toggle */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-5xl md:text-7xl font-bold tracking-tight mb-4 transition-colors duration-700 ${activeMedium === 'digital' ? 'text-white' : 'text-zinc-900'}`}
            >
              Sketches.
            </motion.h1>
            <p className={`max-w-lg text-lg transition-colors duration-700 ${activeMedium === 'digital' ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {activeMedium === 'digital'
                ? "Highly structured, systematic visual design and digital compositions."
                : "Raw, unfiltered graphite studies. The foundation of the algorithm."}
            </p>
          </div>

          {/* The Material Toggle */}
          <div className={`p-1 flex rounded-full transition-all duration-500 ring-1 ${activeMedium === 'digital' ? 'bg-black/50 ring-white/10' : 'bg-white/50 ring-black/5 shadow-inner'}`}>
            <button
              onClick={() => setActiveMedium('digital')}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-colors ${activeMedium === 'digital' ? 'text-white' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
              {activeMedium === 'digital' && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 bg-zinc-800 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              Systematic Digital
            </button>
            <button
              onClick={() => setActiveMedium('pencil')}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-colors ${activeMedium === 'pencil' ? 'text-zinc-900' : 'text-zinc-500 hover:text-white'}`}
            >
              {activeMedium === 'pencil' && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 bg-white rounded-full shadow-sm"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              Raw Pencil
            </button>
          </div>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          <AnimatePresence mode="popLayout">
            {images.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
                className="mb-4 relative group cursor-zoom-in"
              >
                <div className={`overflow-hidden transition-all duration-500 ${activeMedium === 'digital'
                  ? 'rounded-xl ring-1 ring-white/10 group-hover:ring-white/30 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] bg-zinc-900'
                  : 'rounded-sm drop-shadow-md group-hover:drop-shadow-xl bg-white'
                  }`}>
                  <img
                    src={img.url}
                    alt={img.title}
                    loading="lazy"
                    className={`w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${activeMedium === 'pencil' ? 'mix-blend-multiply contrast-125 grayscale-[0.2]' : ''
                      }`}
                  />

                  {/* Overlay Info */}
                  <div className={`absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeMedium === 'digital'
                    ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'
                    : 'bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent'
                    }`}>
                    <span className={`text-sm font-medium tracking-wide ${activeMedium === 'digital' ? 'text-white' : 'text-white mix-blend-overlay'}`}>
                      {img.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </Masonry>
      </div>

    </div>
  );
};

export default MasonryGallery;
