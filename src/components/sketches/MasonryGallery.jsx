import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import sketchesData from '../../data/sketches.json';

const allDigital = sketchesData.filter(s => s.medium === 'digital');
const allPencil = sketchesData.filter(s => s.medium === 'pencil');

/* ─── Lightbox Modal ─── */
const Lightbox = ({ image, onClose }) => {
  if (!image) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md cursor-zoom-out p-4 md:p-12"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[110] p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X size={20} />
      </button>
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        src={image.url}
        alt={image.title}
        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm font-mono tracking-wide"
      >
        {image.title}
      </motion.p>
    </motion.div>
  );
};

/* ─── Main Gallery ─── */
const MasonryGallery = () => {
  const [activeMedium, setActiveMedium] = useState('digital');
  const [selectedImage, setSelectedImage] = useState(null);

  const images = useMemo(
    () => (activeMedium === 'digital' ? allDigital : allPencil),
    [activeMedium]
  );

  const handleImageClick = useCallback((img) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleClose = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  }, []);

  const isDigital = activeMedium === 'digital';

  return (
    <>
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && <Lightbox image={selectedImage} onClose={handleClose} />}
      </AnimatePresence>

      <div
        className={`min-h-screen w-full transition-colors duration-700 pt-28 md:pt-36 pb-24 ${isDigital ? 'bg-[#09090b] text-zinc-200' : 'bg-[#f5f2eb] text-zinc-900'
          }`}
      >
        {/* ─── Header ─── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 md:mb-16">
          <div className="flex flex-col gap-8">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-4xl md:text-6xl font-bold tracking-tight mb-3 transition-colors duration-700 ${isDigital ? 'text-white' : 'text-zinc-900'
                  }`}
              >
                Sketches.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`max-w-md text-base transition-colors duration-700 ${isDigital ? 'text-zinc-500' : 'text-zinc-500'
                  }`}
              >
                {isDigital
                  ? 'Digital illustrations and compositions.'
                  : 'Raw pencil studies, drawn by hand.'}
              </motion.p>
            </div>

            {/* ─── Toggle ─── */}
            <div className="flex items-center gap-3">
              <div
                className={`p-1 inline-flex rounded-full transition-all duration-500 ${isDigital
                    ? 'bg-zinc-900 ring-1 ring-zinc-800'
                    : 'bg-white ring-1 ring-zinc-200 shadow-sm'
                  }`}
              >
                <button
                  onClick={() => setActiveMedium('digital')}
                  className={`relative px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-colors ${isDigital ? 'text-white' : 'text-zinc-400 hover:text-zinc-700'
                    }`}
                >
                  {isDigital && (
                    <motion.div
                      layoutId="sketch-pill"
                      className="absolute inset-0 bg-zinc-800 rounded-full ring-1 ring-zinc-700"
                      style={{ zIndex: -1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  Digital
                </button>
                <button
                  onClick={() => setActiveMedium('pencil')}
                  className={`relative px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-colors ${!isDigital ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                >
                  {!isDigital && (
                    <motion.div
                      layoutId="sketch-pill"
                      className="absolute inset-0 bg-zinc-100 rounded-full ring-1 ring-zinc-200"
                      style={{ zIndex: -1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  Pencil
                </button>
              </div>

              <span
                className={`text-[10px] font-mono uppercase tracking-widest ${isDigital ? 'text-zinc-600' : 'text-zinc-400'
                  }`}
              >
                {images.length} pieces
              </span>
            </div>
          </div>
        </div>

        {/* ─── Masonry Grid (CSS Columns) ─── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="gap-3 md:gap-4"
            style={{
              columnCount: 'auto',
              columnWidth: '280px',
              columnGap: '16px',
            }}
          >
            <AnimatePresence mode="popLayout">
              {images.map((img, i) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.35, delay: Math.min(i * 0.015, 0.6) }}
                  className="mb-3 md:mb-4 break-inside-avoid"
                  style={{ breakInside: 'avoid' }}
                >
                  <div
                    onClick={() => handleImageClick(img)}
                    className={`group relative overflow-hidden cursor-zoom-in transition-all duration-500 ${isDigital
                        ? 'rounded-lg ring-1 ring-white/[0.06] hover:ring-white/20'
                        : 'rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]'
                      }`}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      loading="lazy"
                      className={`w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-[1.03] ${!isDigital ? 'contrast-[1.05]' : ''
                        }`}
                    />

                    {/* Hover overlay */}
                    <div
                      className={`absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDigital
                          ? 'bg-gradient-to-t from-black/70 via-transparent to-transparent'
                          : 'bg-gradient-to-t from-black/50 via-transparent to-transparent'
                        }`}
                    >
                      <span className="text-white text-xs font-mono tracking-wide drop-shadow-md">
                        {img.title}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasonryGallery;
