import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { X, ZoomIn, ZoomOut, Maximize, Activity } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import sketchesData from '../../data/sketches.json';

// --- Data Prep & Positioning ---
// We create a massive virtual canvas. 
// Digital nodes are crisp, neat. Pencil nodes are slightly scattered.
const CANVAS_SIZE = 4000;

const generateNodes = (data, isDigital) => {
  // Use a seeded or consistent spread so it doesn't jump every render
  return data.map((item, index) => {
    // Golden ratio spiral for organic but even distribution
    const golden_angle = 137.508 * (Math.PI / 180);
    const r = 80 * Math.sqrt(index) + 200; // Spread factor
    const theta = index * golden_angle;

    // Add some noise for pencil, keep strict for digital
    const noise = isDigital ? 0 : (Math.random() - 0.5) * 150;

    // Convert polar to cartesian, center in the CANVAS_SIZE
    const x = (CANVAS_SIZE / 2) + r * Math.cos(theta) + noise;
    const y = (CANVAS_SIZE / 2) + r * Math.sin(theta) + noise;

    // Node size: pencil pieces vary more in size
    const size = isDigital ? 160 : Math.random() * 80 + 120;

    return { ...item, x, y, size, rotation: isDigital ? 0 : (Math.random() - 0.5) * 15 };
  });
};

const allDigital = generateNodes(sketchesData.filter(s => s.medium === 'digital'), true);
const allPencil = generateNodes(sketchesData.filter(s => s.medium === 'pencil'), false);

// --- Lightbox Component ---
const Lightbox = ({ image, onClose }) => {
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
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        src={image.url}
        alt={image.title}
        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_100px_rgba(255,255,255,0.05)]"
        onClick={(e) => e.stopPropagation()}
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-white font-mono tracking-widest text-sm uppercase mb-1">
          {image.medium === 'digital' ? 'SYSTEM_NODE' : 'RAW_DATA'} // {image.id.slice(-4)}
        </p>
        <p className="text-white/60 text-xs font-light tracking-wide">
          {image.title}
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

  // --- Shape Shifting Logic (Constellations) ---
  const [currentShapeIndex, setCurrentShapeIndex] = useState(-1);

  // Real constellation approximate coordinate maps (centered around 0,0)
  const CONSTELLATIONS = [
    {
      name: 'ORION',
      points: [
        { x: -50, y: -100 }, // Betelgeuse
        { x: 50, y: -80 },   // Bellatrix
        { x: -20, y: 0 },    // Alnitak (Belt)
        { x: 0, y: 10 },     // Alnilam (Belt)
        { x: 20, y: 20 },    // Mintaka (Belt)
        { x: -40, y: 120 },  // Saiph
        { x: 60, y: 100 },   // Rigel
        { x: 0, y: -140 }, // Head
        { x: -80, y: -60 }, // Bow top
        { x: -100, y: 0 }, // Bow mid
        { x: -70, y: 60 }, // Bow bottom
      ]
    },
    {
      name: 'URSA MAJOR',
      points: [
        { x: -120, y: -20 }, // Alkaid (handle tip)
        { x: -70, y: -10 },  // Mizar
        { x: -20, y: 10 },   // Alioth
        { x: 20, y: 40 },    // Megrez (bowl corner)
        { x: 80, y: 80 },    // Phecda (bowl bottom)
        { x: 120, y: 20 },   // Merak (bowl bottom front)
        { x: 90, y: -40 },   // Dubhe (bowl top front)
      ]
    },
    {
      name: 'CASSIOPEIA',
      points: [
        { x: -100, y: -50 }, // Caph
        { x: -40, y: 20 },   // Schedar
        { x: 0, y: -80 },    // Gamma Cas
        { x: 50, y: 10 },    // Ruchbah
        { x: 100, y: -40 },  // Segin
      ]
    },
    {
      name: 'CYGNUS',
      points: [
        { x: 0, y: -100 },   // Deneb (tail)
        { x: 0, y: -30 },    // Sadr (center)
        { x: 0, y: 100 },    // Albireo (head)
        { x: -80, y: -10 },  // Wing tip left
        { x: -40, y: -20 },  // Wing mid left
        { x: 40, y: -20 },   // Wing mid right
        { x: 80, y: -10 },   // Wing tip right
      ]
    },
    {
      name: 'ORDER',
      isGrid: true
    }
  ];

  const getConstellationPoints = (shape, numNodes) => {
    const scale = 8; // Scale up the local coordinates

    // Base points for the main constellation structure
    const basePoints = shape.points.map(p => ({
      x: (CANVAS_SIZE / 2) + p.x * scale,
      y: (CANVAS_SIZE / 2) + p.y * scale
    }));

    // If we have more nodes than the constellation points, we scatter the rest
    // as "background stars" but clustered around the constellation
    const points = [...basePoints];

    for (let i = basePoints.length; i < numNodes; i++) {
      // Random point near the constellation center but scattered wider
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 800 + 100; // Scatter radius
      points.push({
        x: (CANVAS_SIZE / 2) + Math.cos(angle) * radius,
        y: (CANVAS_SIZE / 2) + Math.sin(angle) * radius
      });
    }

    // Shuffle the points so the images map randomly to the structure vs background
    for (let i = points.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [points[i], points[j]] = [points[j], points[i]];
    }

    return points;
  };

  const handleShapeShift = () => {
    const nextIndex = (currentShapeIndex + 1) % CONSTELLATIONS.length;
    setCurrentShapeIndex(nextIndex);
  };

  const handleResetShape = () => {
    setCurrentShapeIndex(-1);
  }

  // Determine current effective nodes based on scatter vs shape-shift
  const displayNodes = useMemo(() => {
    if (currentShapeIndex === -1) return nodes;

    const shape = CONSTELLATIONS[currentShapeIndex];

    if (shape.isGrid) {
      // Full screen neat collage grid logic
      const gap = 4; // Tiny gap for neatness resembling a tight photo wall
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;

      // Let's decide on a clean number of columns based on screen width
      // Mobile: 3, Tablet: 4, Desktop: 6, Wide: 8
      let cols = 6;
      if (screenWidth < 640) cols = 3;
      else if (screenWidth < 1024) cols = 4;
      else if (screenWidth > 1600) cols = 8;

      const padding = 24; // Small padding around the whole grid edges
      const availableWidth = screenWidth - (padding * 2);

      // Width of each node is perfectly divided into the space minus the gaps
      const nodeWidth = (availableWidth - (gap * (cols - 1))) / cols;

      // Calculate center offsets so the grid sits perfectly in the center of CANVAS_SIZE
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

    const targetPoints = getConstellationPoints(shape, nodes.length);

    if (!targetPoints) return nodes;

    return nodes.map((node, i) => ({
      ...node,
      x: targetPoints[i].x,
      y: targetPoints[i].y,
      rotation: 0, // Keep straight when in shape
      size: node.size * 0.5 // Make them a bit smaller to form the structure better
    }));
  }, [nodes, currentShapeIndex, isDigital]);

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
    if (currentShapeIndex !== -1 && CONSTELLATIONS[currentShapeIndex].isGrid) {
      const gap = 4;
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;

      let cols = 6;
      if (screenWidth < 640) cols = 3;
      else if (screenWidth < 1024) cols = 4;
      else if (screenWidth > 1600) cols = 8;

      const padding = 24;
      const availableWidth = screenWidth - (padding * 2);
      const nodeWidth = (availableWidth - (gap * (cols - 1))) / cols;

      const rows = Math.ceil(nodes.length / cols);
      const gridHeight = rows * nodeWidth + (rows - 1) * gap;

      return Math.max(CANVAS_SIZE, (CANVAS_SIZE / 2) + gridHeight + 1000);
    }
    return CANVAS_SIZE;
  }, [currentShapeIndex, nodes.length]);

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {selectedImage && <Lightbox image={selectedImage} onClose={handleClose} />}
      </AnimatePresence>

      <div
        className={`relative w-full h-screen overflow-hidden transition-colors duration-1000 ${isDark ? 'bg-[#050505] text-white' : 'bg-[#e5e1d5] text-zinc-900'
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
                [ NOTICE ]: {t('sketches.digital_disclaimer')}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Shape Shifter Controls */}
          <div className="pointer-events-auto mt-4">
            <button
              onClick={handleShapeShift}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border transition-all mr-2 ${currentShapeIndex !== -1
                ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                : (isDark ? 'bg-white/5 border-white/10 text-zinc-400 hover:text-white' : 'bg-black/5 border-black/10 text-zinc-500 hover:text-black')
                }`}
            >
              {currentShapeIndex === -1 ? 'FORM: CHAOS' : `FORM: ${CONSTELLATIONS[currentShapeIndex].name}`}
            </button>
            {currentShapeIndex !== -1 && (
              <button
                onClick={handleResetShape}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border transition-all ${isDark ? 'bg-white/5 border-white/10 text-zinc-400 hover:text-white' : 'bg-black/5 border-black/10 text-zinc-500 hover:text-black'}`}
              >
                RESET
              </button>
            )}
          </div>
        </div>

        {/* --- MAP LEGEND --- */}
        <div className="absolute bottom-8 left-6 md:left-12 z-50 pointer-events-none">
          <div className="font-mono text-xs tracking-widest flex flex-col gap-2 text-zinc-500">
            <p>[ {t('sketches.drag_to_explore')} ]</p>
            <p>[ {t('sketches.scroll_to_zoom')} ]</p>
            <p>{t('sketches.nodes_found')}: {displayNodes.length}</p>
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
                {/* Visual grid background */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(${isDark ? '#333' : '#a1a1aa'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#333' : '#a1a1aa'} 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
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
                    {/* SVG Connecting Lines (Constellation Effect) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                      {displayNodes.map((node, i) => {
                        const next1 = displayNodes[i + 1];
                        const next2 = displayNodes[i + 2];
                        return (
                          <g key={`lines-${i}`}>
                            {next1 && (
                              <motion.line
                                initial={{ pathLength: 0, strokeDashoffset: 0 }}
                                animate={{
                                  pathLength: 1,
                                  strokeDashoffset: isDigital ? [0, -20] : 0
                                }}
                                transition={{
                                  pathLength: { duration: 1.5, ease: "easeOut" },
                                  strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" }
                                }}
                                x1={node.x + node.size / 2} y1={node.y + node.size / 2}
                                x2={next1.x + next1.size / 2} y2={next1.y + next1.size / 2}
                                stroke={isDigital ? '#3b82f6' : '#71717a'}
                                strokeWidth={isDigital ? 1 : 2}
                                strokeDasharray={isDigital ? "4 4" : "none"}
                              />
                            )}
                            {next2 && i % 3 === 0 && (
                              <motion.line
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                x1={node.x + node.size / 2} y1={node.y + node.size / 2}
                                x2={next2.x + next2.size / 2} y2={next2.y + next2.size / 2}
                                stroke={isDigital ? '#3b82f6' : '#71717a'}
                                strokeWidth={1}
                              />
                            )}
                          </g>
                        )
                      })}
                    </svg>

                    {/* Image Nodes */}
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
                            scale: 1.1,
                            zIndex: 100,
                            cursor: 'grabbing'
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: 1,
                            opacity: 1,
                            y: [0, Math.sin(i) * 15, 0], // Floating effect
                            x: [0, Math.cos(i) * 15, 0]
                          }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 20,
                            y: {
                              duration: 4 + (i % 3),
                              repeat: Infinity,
                              ease: "easeInOut"
                            },
                            x: {
                              duration: 5 + (i % 2),
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                          style={{
                            position: 'absolute',
                            left: node.x,
                            top: node.y,
                            width: node.size,
                            // Removed height: node.size to allow natural aspect ratio
                            rotate: node.rotation,
                          }}
                          className={`group cursor-pointer pointer-events-auto ${isDigital
                            ? 'rounded-lg border border-blue-500/50 bg-black overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-shadow duration-300'
                            : 'bg-white p-2 shadow-xl hover:shadow-2xl transition-shadow duration-300'
                            }`}
                          onClick={(e) => handleNodeClick(node, e)}
                        >
                          <img
                            src={node.url}
                            alt={node.title}
                            draggable="false"
                            loading="lazy"
                            className={`w-full h-auto block transition-transform duration-500 scale-[1.01] ${isDigital ? 'opacity-90 group-hover:scale-110 group-hover:opacity-100' : 'contrast-125 sepia-[0.1]'
                              }`}
                          />

                          {/* Node Label Tooltip - adjusted position for variable height */}
                          <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded ${isDigital ? 'bg-blue-600 outline outline-1 outline-blue-400 text-white' : 'bg-black text-white'
                            }`}>
                            {node.title}
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
