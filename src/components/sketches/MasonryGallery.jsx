import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { X, ZoomIn, ZoomOut, Maximize, Activity } from 'lucide-react';
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
  const [activeMedium, setActiveMedium] = useState('digital');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // We mount the nodes after client-side hydration to avoid SSR mismatch, 
  // though Vercel builds might be fine.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const nodes = useMemo(
    () => (activeMedium === 'digital' ? allDigital : allPencil),
    [activeMedium]
  );

  const isDigital = activeMedium === 'digital';

  const handleNodeClick = (img, e) => {
    // Prevent click if the user was just dragging the canvas
    if (isDragging) return;
    setSelectedImage(img);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {selectedImage && <Lightbox image={selectedImage} onClose={handleClose} />}
      </AnimatePresence>

      <div
        className={`relative w-full h-screen overflow-hidden transition-colors duration-1000 ${isDigital ? 'bg-[#050505] text-white' : 'bg-[#e5e1d5] text-zinc-900'
          }`}
      >
        {/* --- UI OVERLAY --- */}
        <div className="absolute top-28 md:top-36 left-0 right-0 z-50 px-6 md:px-12 pointer-events-none flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <Activity size={18} className={isDigital ? 'text-zinc-500' : 'text-zinc-400'} />
              <span className={`font-mono text-xs tracking-[0.2em] uppercase ${isDigital ? 'text-zinc-500' : 'text-zinc-500'}`}>
                Constellation Map
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tight pointer-events-auto"
            >
              Sketches.
            </motion.h1>
          </div>

          {/* Toggle controls */}
          <div className="pointer-events-auto flex items-center gap-4 bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-2xl">
            <button
              onClick={() => setActiveMedium('digital')}
              className={`relative px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-colors ${isDigital ? 'text-white' : 'text-zinc-400 hover:text-white'
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
              Digital
            </button>
            <button
              onClick={() => setActiveMedium('pencil')}
              className={`relative px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-colors ${!isDigital ? 'text-zinc-900' : 'text-zinc-400 hover:text-white'
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
              Pencil
            </button>
          </div>
        </div>

        {/* --- MAP LEGEND --- */}
        <div className="absolute bottom-8 left-6 md:left-12 z-50 pointer-events-none">
          <div className={`font-mono text-xs tracking-widest flex flex-col gap-2 ${isDigital ? 'text-zinc-600' : 'text-zinc-400'}`}>
            <p>[ DRAG TO EXPLORE ]</p>
            <p>[ SCROLL TO ZOOM ]</p>
            <p>NODES FOUND: {nodes.length}</p>
          </div>
        </div>


        {/* --- INTERACTIVE CANVAS --- */}
        <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
          <TransformWrapper
            initialScale={1}
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
                    backgroundImage: `linear-gradient(${isDigital ? '#333' : '#a1a1aa'} 1px, transparent 1px), linear-gradient(90deg, ${isDigital ? '#333' : '#a1a1aa'} 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                  }}
                />

                {/* Map Controls */}
                <div className="absolute bottom-8 right-6 md:right-12 z-50 flex flex-col gap-2 pointer-events-auto">
                  <button onClick={() => zoomIn()} className={`p-3 rounded-xl backdrop-blur-md border transition-all ${isDigital ? 'bg-zinc-900/50 border-white/10 text-white hover:bg-zinc-800' : 'bg-white/50 border-black/10 text-black hover:bg-white'}`}>
                    <ZoomIn size={18} />
                  </button>
                  <button onClick={() => zoomOut()} className={`p-3 rounded-xl backdrop-blur-md border transition-all ${isDigital ? 'bg-zinc-900/50 border-white/10 text-white hover:bg-zinc-800' : 'bg-white/50 border-black/10 text-black hover:bg-white'}`}>
                    <ZoomOut size={18} />
                  </button>
                  <button onClick={() => resetTransform()} className={`p-3 rounded-xl backdrop-blur-md border transition-all ${isDigital ? 'bg-zinc-900/50 border-white/10 text-white hover:bg-zinc-800' : 'bg-white/50 border-black/10 text-black hover:bg-white'}`}>
                    <Maximize size={18} />
                  </button>
                </div>

                <TransformComponent wrapperStyle={{ width: '100vw', height: '100vh' }}>
                  <div
                    style={{
                      width: CANVAS_SIZE,
                      height: CANVAS_SIZE,
                      position: 'relative'
                    }}
                  >
                    {/* SVG Connecting Lines (Constellation Effect) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                      {nodes.map((node, i) => {
                        // Connect to the next 2 nodes to form a web
                        const next1 = nodes[i + 1];
                        const next2 = nodes[i + 2];
                        return (
                          <g key={`lines-${i}`}>
                            {next1 && (
                              <line
                                x1={node.x + node.size / 2} y1={node.y + node.size / 2}
                                x2={next1.x + next1.size / 2} y2={next1.y + next1.size / 2}
                                stroke={isDigital ? '#3b82f6' : '#71717a'}
                                strokeWidth={isDigital ? 1 : 2}
                                strokeDasharray={isDigital ? "4 4" : "none"}
                              />
                            )}
                            {next2 && i % 3 === 0 && (
                              <line
                                x1={node.x + node.size / 2} y1={node.y + node.size / 2}
                                x2={next2.x + next2.size / 2} y2={next2.y + next2.size / 2}
                                stroke={isDigital ? '#3b82f6' : '#71717a'}
                                strokeWidth={1}
                                opacity={0.5}
                              />
                            )}
                          </g>
                        )
                      })}
                    </svg>

                    {/* Image Nodes */}
                    <AnimatePresence>
                      {nodes.map((node) => (
                        <motion.div
                          key={node.id}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                          style={{
                            position: 'absolute',
                            left: node.x,
                            top: node.y,
                            width: node.size,
                            height: node.size,
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
                            className={`w-full h-full object-cover transition-transform duration-500 ${isDigital ? 'opacity-90 group-hover:scale-110 group-hover:opacity-100' : 'contrast-125 sepia-[0.1]'
                              }`}
                          />

                          {/* Node Label Tooltip */}
                          <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded ${isDigital ? 'bg-blue-600 outline outline-1 outline-blue-400 text-white' : 'bg-black text-white'
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
