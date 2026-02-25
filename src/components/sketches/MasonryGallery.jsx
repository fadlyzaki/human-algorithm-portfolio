import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { X, ZoomIn, ZoomOut, Maximize, Activity, ImageOff } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import sketchesData from '../../data/sketches.json';

// --- Data Prep & Positioning ---
// We create a massive virtual gallery wall
const CANVAS_SIZE = 4000;

const generateNodes = (data, isDigital) => {
  return data.map((item, index) => {
    // Initial organic but structured distribution (base scatter)
    const golden_angle = 137.508 * (Math.PI / 180);
    const r = 80 * Math.sqrt(index) + 200; // Spread factor
    const theta = index * golden_angle;

    // Add some noise for pencil, keep strict for digital
    const noise = isDigital ? 0 : (Math.random() - 0.5) * 150;

    // Convert polar to cartesian, center in the CANVAS_SIZE
    const x = (CANVAS_SIZE / 2) + r * Math.cos(theta) + noise;
    const y = (CANVAS_SIZE / 2) + r * Math.sin(theta) + noise;

    // Node size matches physical artworks (digital are consistent, pencil vary)
    const size = isDigital ? 240 : Math.random() * 80 + 160;

    return { ...item, x, y, size, rotation: isDigital ? 0 : (Math.random() - 0.5) * 5 };
  });
};

const allDigital = generateNodes(sketchesData.filter(s => s.medium === 'digital'), true);
const allPencil = generateNodes(sketchesData.filter(s => s.medium === 'pencil'), false);

// --- Image Component with Fallback ---
const NodeImage = ({ node, isDigital }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center p-4 text-center ${isDigital ? 'bg-blue-900/10' : 'bg-zinc-100'} aspect-[4/3] w-full`}>
        <ImageOff size={24} className={isDigital ? 'text-blue-500/30' : 'text-zinc-300'} />
        <p className={`mt-2 font-mono text-[8px] uppercase tracking-tighter ${isDigital ? 'text-blue-500/40' : 'text-zinc-400'}`}>
          Failed to load
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <img
        src={node.url}
        alt={node.title}
        draggable="false"
        loading="lazy"
        onError={() => setHasError(true)}
        className={`w-full h-auto block transition-transform duration-500 z-10 relative ${
          // Removed the scale-on-hover from the image itself, moving it to the container interactions
          isDigital ? 'opacity-95' : 'contrast-110 sepia-[0.05]'
          }`}
      />
      {/* Matte/Shadow effects are applied to the wrapper, but we can add inner frame details here */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] z-20 mix-blend-multiply"></div>
    </div>
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl cursor-zoom-out p-4 md:p-12"
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
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          src={image.url}
          alt={image.title}
          onError={() => setHasError(true)}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_100px_rgba(255,255,255,0.05)]"
          onClick={(e) => e.stopPropagation()}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center bg-white text-zinc-900 px-6 py-4 shadow-xl border border-zinc-200"
      >
        <p className="font-serif italic text-lg mb-1 whitespace-nowrap">
          {image.title}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-2">
          {image.medium === 'digital' ? 'DIGITAL MEDIA' : 'GRAPHITE ON PAPER'}
        </p>
        <p className="text-zinc-400 font-mono text-[8px] tracking-widest">
          ID: {image.id.slice(-6).toUpperCase()}
        </p>
      </motion.div>
    </motion.div>
  );
};

// --- Main Component ---
const NodeGraphGallery = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [activeMedium, setActiveMedium] = useState('pencil');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isNodeDragging, setIsNodeDragging] = useState(false);

  // We mount the nodes after client-side hydration to avoid SSR mismatch, 
  // though Vercel builds might be fine.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const nodes = useMemo(
    () => (activeMedium === 'digital' ? allDigital : allPencil),
    [activeMedium]
  );

  const isDigital = activeMedium === 'digital';

  // --- Exhibition Layout Logic ---
  const [currentLayoutIndex, setCurrentLayoutIndex] = useState(-1);

  const LAYOUTS = [
    {
      name: 'SALON',
      isGrid: false,
      algorithm: 'salon'
    },
    {
      name: 'GALLERY',
      isGrid: true,
      algorithm: 'grid'
    }
  ];

  const getSalonPoints = (numNodes, sizes) => {
    // A simple clustering algorithm for an asymmetrical "Salon" style wall
    const points = [];
    const centerX = CANVAS_SIZE / 2;
    const centerY = CANVAS_SIZE / 2;

    // Grid-based collision detection roughly
    let angle = 0;
    let radius = 100;

    for (let i = 0; i < numNodes; i++) {
      // Create a slightly chaotic but packed arrangement
      const r = radius + (Math.random() * 50);
      const theta = angle + (Math.random() * 0.5 - 0.25);

      points.push({
        x: centerX + r * Math.cos(theta),
        y: centerY + r * Math.sin(theta)
      });

      angle += 0.8;
      if (angle >= Math.PI * 2) {
        angle = 0;
        radius += 150; // Expand ring
      }
    }

    return points;
  };

  const handleLayoutChange = () => {
    const nextIndex = (currentLayoutIndex + 1) % LAYOUTS.length;
    setCurrentLayoutIndex(nextIndex);
  };

  const handleResetLayout = () => {
    setCurrentLayoutIndex(-1);
  }

  // Determine current effective nodes based on scatter vs shape-shift
  const displayNodes = useMemo(() => {
    if (currentLayoutIndex === -1) return nodes;

    const layout = LAYOUTS[currentLayoutIndex];

    if (layout.isGrid) {
      // Uniform Gallery Grid Logic
      const gap = 120; // Wide gallery spacing
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;

      // Generous columns
      let cols = 4;
      if (screenWidth < 640) cols = 2;
      else if (screenWidth < 1024) cols = 3;
      else if (screenWidth > 1600) cols = 6;

      const nodeWidth = isDigital ? 280 : 200;

      const gridWidth = cols * nodeWidth + (cols - 1) * gap;
      const rows = Math.ceil(nodes.length / cols);
      const gridHeight = rows * nodeWidth + (rows - 1) * gap;

      const startX = (CANVAS_SIZE / 2) - (gridWidth / 2);
      const startY = (CANVAS_SIZE / 2) - (gridHeight / 2);

      return nodes.map((node, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        return {
          ...node,
          x: startX + col * (nodeWidth + gap),
          y: startY + row * (nodeWidth + gap),
          rotation: 0,
          size: nodeWidth
        };
      });
    }

    // Salon Layout
    const targetPoints = getSalonPoints(nodes.length);

    if (!targetPoints) return nodes;

    return nodes.map((node, i) => ({
      ...node,
      x: targetPoints[i].x,
      y: targetPoints[i].y,
      rotation: isDigital ? 0 : (Math.random() - 0.5) * 4, // Slight tilt for authenticity
      size: node.size * 0.8 // A bit smaller for clustering
    }));
  }, [nodes, currentLayoutIndex, isDigital]);

  const handleNodeClick = (img, e) => {
    // Prevent click if the user was just dragging the canvas or the node itself
    if (isDragging || isNodeDragging) return;
    setSelectedImage(img);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  // Dynamically extend canvas height if the wrapped grid goes downwards
  const dynamicCanvasHeight = useMemo(() => {
    if (currentLayoutIndex !== -1 && LAYOUTS[currentLayoutIndex].isGrid) {
      const gap = 120;
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;

      let cols = 4;
      if (screenWidth < 640) cols = 2;
      else if (screenWidth < 1024) cols = 3;
      else if (screenWidth > 1600) cols = 6;

      const nodeWidth = isDigital ? 280 : 200;
      const rows = Math.ceil(nodes.length / cols);
      const gridHeight = rows * nodeWidth + (rows - 1) * gap;

      return Math.max(CANVAS_SIZE, (CANVAS_SIZE / 2) + gridHeight + 1000);
    }
    return CANVAS_SIZE;
  }, [currentLayoutIndex, nodes.length, isDigital]);

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {selectedImage && <Lightbox image={selectedImage} onClose={handleClose} />}
      </AnimatePresence>

      <div
        className={`relative w-full h-screen overflow-hidden transition-colors duration-1000 ${isDark ? 'bg-[#1a1a1c] text-white' : 'bg-[#f4f4f6] text-zinc-900'
          }`}
      >
        {/* --- UI OVERLAY --- */}
        <div className="absolute top-28 md:top-36 left-0 right-0 z-50 px-6 md:px-12 pointer-events-none flex flex-col items-start gap-6">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-4"
              >
                <Activity size={18} className={isDark ? 'text-zinc-500' : 'text-zinc-400'} />
                <span className={`font-mono text-xs tracking-[0.2em] uppercase text-zinc-500`}>
                  {t('sketches.title')}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold tracking-tight pointer-events-auto"
              >
                {t('nav.sketches') || 'Sketches'}.
              </motion.h1>
            </div>

            {/* Toggle controls */}
            <div className={`pointer-events-auto flex items-center gap-4 backdrop-blur-md p-1.5 rounded-full border shadow-2xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
              <button
                onClick={() => setActiveMedium('pencil')}
                className={`relative px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-colors ${!isDigital ? 'text-zinc-900' : (isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black')
                  }`}
              >
                {!isDigital && (
                  <motion.div
                    layoutId="node-pill"
                    className="absolute inset-0 bg-white shadow-sm rounded-full"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {t('sketches.pencil')}
              </button>
              <button
                onClick={() => setActiveMedium('digital')}
                className={`relative px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-colors ${isDigital ? (isDark ? 'text-white' : 'text-blue-900') : (isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black')
                  }`}
              >
                {isDigital && (
                  <motion.div
                    layoutId="node-pill"
                    className="absolute inset-0 bg-blue-600/20 border border-blue-500/30 rounded-full"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {t('sketches.digital')}
              </button>
            </div>
          </div>

          {/* Disclaimer - only for digital */}
          <AnimatePresence>
            {isDigital && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="max-w-md text-zinc-500 font-mono text-[10px] uppercase tracking-widest leading-relaxed pointer-events-auto"
              >
                [ CURATOR'S NOTE ]: THESE SYSTEM NODES REPRESENT POLISHED, STRUCTURALLY RIGID DIGITAL ASSETS.
              </motion.p>
            )}
          </AnimatePresence>

          {/* Layout Controls */}
          <div className="pointer-events-auto mt-4">
            <button
              onClick={handleLayoutChange}
              className={`px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] border transition-all mr-2 ${currentLayoutIndex !== -1
                ? 'bg-zinc-900 text-white border-zinc-800 shadow-lg'
                : (isDark ? 'bg-white/5 border-white/10 text-zinc-400 hover:text-white' : 'bg-black/5 border-black/10 text-zinc-500 hover:text-black')
                }`}
            >
              [ {currentLayoutIndex === -1 ? 'CURATION: UNSTRUCTURED' : `CURATION: ${LAYOUTS[currentLayoutIndex].name}`} ]
            </button>
            {currentLayoutIndex !== -1 && (
              <button
                onClick={handleResetLayout}
                className={`px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] border transition-all ${isDark ? 'bg-white/5 border-white/10 text-zinc-400 hover:text-white' : 'bg-black/5 border-black/10 text-zinc-500 hover:text-black'}`}
              >
                [ RESET ]
              </button>
            )}
          </div>
        </div>

        {/* --- MAP LEGEND --- */}
        <div className="absolute bottom-8 left-6 md:left-12 z-50 pointer-events-none">
          <div className="font-mono text-[10px] tracking-[0.2em] flex flex-col gap-2 text-zinc-500 uppercase">
            <p>[ {t('sketches.drag_to_explore') || 'DRAG WALL TO EXPLORE'} ]</p>
            <p>[ {t('sketches.scroll_to_zoom') || 'SCROLL TO INSPECT'} ]</p>
            <p>{t('sketches.nodes_found') || 'ARTWORKS'}: {displayNodes.length}</p>
          </div>
        </div>


        {/* --- INTERACTIVE CANVAS --- */}
        <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
          <TransformWrapper
            initialScale={0.5}
            initialPositionX={-(CANVAS_SIZE / 2) + (window.innerWidth / 2)}
            initialPositionY={-(CANVAS_SIZE / 2) + (window.innerHeight / 2)}
            minScale={0.3}
            maxScale={3}
            centerZoomedOut={true}
            wheel={{ step: 0.1 }}
            onPanningStart={() => setIsDragging(true)}
            onPanningStop={() => {
              // tiny timeout to prevent click firing immediately after drag release
              setTimeout(() => setIsDragging(false), 50);
            }}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                {/* Visual wall texture background */}
                <div
                  className={`absolute inset-0 pointer-events-none ${isDark ? 'opacity-[0.03]' : 'opacity-[0.05]'}`}
                  style={{
                    backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }}
                />

                {/* Map Controls */}
                <div className="absolute bottom-8 right-6 md:right-12 z-50 flex flex-col gap-2 pointer-events-auto">
                  <button onClick={() => zoomIn()} className={`p-3 rounded-xl backdrop-blur-md border transition-all ${isDark ? 'bg-zinc-900/50 border-white/10 text-white hover:bg-zinc-800' : 'bg-white/50 border-black/10 text-black hover:bg-white'}`}>
                    <ZoomIn size={18} />
                  </button>
                  <button onClick={() => zoomOut()} className={`p-3 rounded-xl backdrop-blur-md border transition-all ${isDark ? 'bg-zinc-900/50 border-white/10 text-white hover:bg-zinc-800' : 'bg-white/50 border-black/10 text-black hover:bg-white'}`}>
                    <ZoomOut size={18} />
                  </button>
                  <button onClick={() => resetTransform()} className={`p-3 rounded-xl backdrop-blur-md border transition-all ${isDark ? 'bg-zinc-900/50 border-white/10 text-white hover:bg-zinc-800' : 'bg-white/50 border-black/10 text-black hover:bg-white'}`}>
                    <Maximize size={18} />
                  </button>
                </div>

                <TransformComponent wrapperStyle={{ width: '100vw', height: '100vh' }}>
                  <div
                    style={{
                      width: CANVAS_SIZE,
                      height: dynamicCanvasHeight,
                      position: 'relative'
                    }}
                  >
                    {/* Image Nodes (Frames) */}
                    <AnimatePresence>
                      {displayNodes.map((node, i) => (
                        <motion.div
                          key={node.id}
                          drag
                          dragMomentum={false}
                          dragTransition={{ power: 0, timeConstant: 0 }}
                          onDragStart={() => setIsNodeDragging(true)}
                          onDragEnd={() => {
                            setTimeout(() => setIsNodeDragging(false), 100);
                          }}
                          whileDrag={{
                            scale: 1.05,
                            zIndex: 100,
                            cursor: 'grabbing'
                          }}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{
                            scale: 1,
                            opacity: 1,
                            y: [0, Math.sin(i) * 3, 0], // Very subtle sway, less floating
                            x: [0, Math.cos(i) * 3, 0]
                          }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                            y: {
                              duration: 8 + (i % 4),
                              repeat: Infinity,
                              ease: "easeInOut"
                            },
                            x: {
                              duration: 9 + (i % 3),
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                          style={{
                            position: 'absolute',
                            left: node.x,
                            top: node.y,
                            width: node.size,
                            rotate: node.rotation,
                          }}
                          className={`group cursor-pointer pointer-events-auto flex flex-col items-center ${isDigital
                            ? 'p-3 bg-white shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-shadow duration-500' // Clean white matte for digital
                            : 'p-4 bg-[#f8f6f0] shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-500 border border-zinc-200/50' // Warmer paper/canvas for pencil
                            }`}
                          onClick={(e) => handleNodeClick(node, e)}
                        >
                          <div className={`relative w-full overflow-hidden ${isDigital ? 'border border-zinc-100 shadow-[inset_0_0_10px_rgba(0,0,0,0.05)]' : ''}`}>
                            <NodeImage node={node} isDigital={isDigital} />
                          </div>

                          {/* Museum Placard - replaces tooltip */}
                          <div className={`mt-4 w-full flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
                            <div className="flex items-center justify-between border-b border-zinc-200 pb-2 mb-2">
                              <span className="font-serif italic text-xs text-zinc-800 truncate pr-2">{node.title}</span>
                              <span className="font-mono text-[8px] text-zinc-400">{node.id.slice(-4).toUpperCase()}</span>
                            </div>
                            <span className="font-mono text-[7px] uppercase tracking-widest text-zinc-500">
                              {isDigital ? 'Digital Format' : 'Graphite on Paper'} // {node.medium}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      </div>
    </>
  );
};

export default NodeGraphGallery;
