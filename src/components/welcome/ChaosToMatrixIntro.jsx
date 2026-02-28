import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TOTAL_NODES = 100;
const COLS = 10;
const ROWS = 10;
const GRID_SIZE = 45; // Spacing between nodes

const ChaosToMatrixIntro = ({ onComplete }) => {
    const [phase, setPhase] = useState('chaos'); // 'chaos' -> 'initializing' -> 'matrix' -> 'portal'

    // Capture window dimensions once on mount
    const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
        setIsMounted(true);
    }, []);

    // Generate physics data for each node
    const nodes = useMemo(() => {
        const { width, height } = dimensions;
        const gridWidth = (COLS - 1) * GRID_SIZE;
        const gridHeight = (ROWS - 1) * GRID_SIZE;
        const startX = (width / 2) - (gridWidth / 2);
        const startY = (height / 2) - (gridHeight / 2);

        return Array.from({ length: TOTAL_NODES }).map((_, i) => {
            const col = i % COLS;
            const row = Math.floor(i / COLS);

            // Matrix Target Position (Centered)
            const matrixX = startX + col * GRID_SIZE;
            const matrixY = startY + row * GRID_SIZE;

            // Chaos Initial Position
            const chaosX = Math.random() * width;
            const chaosY = Math.random() * height;
            const chaosRotate = Math.random() * 360;

            // Floating Animation Offsets
            const floatDuration = 3 + Math.random() * 4;
            const floatOffsetX = (Math.random() - 0.5) * 100;
            const floatOffsetY = (Math.random() - 0.5) * 100;

            return {
                id: i, col, row,
                chaosX, chaosY, chaosRotate,
                matrixX, matrixY,
                floatDuration, floatOffsetX, floatOffsetY
            };
        });
    }, [dimensions]);

    // Generate connecting line paths for the Matrix phase
    const gridLines = useMemo(() => {
        if (!isMounted) return [];
        const lines = [];
        const { width, height } = dimensions;
        const gridWidth = (COLS - 1) * GRID_SIZE;
        const gridHeight = (ROWS - 1) * GRID_SIZE;
        const startX = (width / 2) - (gridWidth / 2);
        const startY = (height / 2) - (gridHeight / 2);

        // Horizontal Lines
        for (let row = 0; row < ROWS; row++) {
            const y = startY + row * GRID_SIZE;
            lines.push(`M ${startX} ${y} L ${startX + gridWidth} ${y}`);
        }
        // Vertical Lines
        for (let col = 0; col < COLS; col++) {
            const x = startX + col * GRID_SIZE;
            lines.push(`M ${x} ${startY} L ${x} ${startY + gridHeight}`);
        }
        return lines;
    }, [dimensions, isMounted]);

    // --- STAGE CHOREOGRAPHY ---
    useEffect(() => {
        if (!isMounted) return;

        // 1. Let chaos float briefly, then type the initialize text
        const initTimer = setTimeout(() => {
            setPhase('initializing');
        }, 1500);

        // 2. Snap to Matrix
        const matrixTimer = setTimeout(() => {
            setPhase('matrix');
        }, 4000);

        return () => {
            clearTimeout(initTimer);
            clearTimeout(matrixTimer);
        };
    }, [isMounted]);

    // --- INTERACTION HANDLING ---
    const handleInteraction = () => {
        if (phase !== 'matrix') return;
        setPhase('portal');

        // Zoom out and reveal homepage
        setTimeout(() => {
            if (onComplete) onComplete();
        }, 1200);
    };

    useEffect(() => {
        const handleKeyDown = () => handleInteraction();
        const handleClick = () => handleInteraction();

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('click', handleClick);
        };
    }, [phase]);

    if (!isMounted) return null;

    return (
        <AnimatePresence>
            <motion.div
                key="chaos-container"
                initial={{ opacity: 1 }}
                animate={{ opacity: phase === 'portal' ? 0 : 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="fixed inset-0 z-[100] bg-[#050505] overflow-hidden flex items-center justify-center pointer-events-auto"
            >
                {/* --- DYNAMIC PHYSICS SCENE --- */}
                <motion.div
                    className="absolute inset-0 w-full h-full transform-gpu"
                    animate={
                        phase === 'portal'
                            ? { scale: 5, opacity: 0, filter: "blur(10px)" }
                            : { scale: 1, opacity: 1, filter: "blur(0px)" }
                    }
                    transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1.000] }}
                >
                    {/* SVG Connecting Lines (Only visible in Matrix phase) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                        <g stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none">
                            {gridLines.map((path, i) => (
                                <motion.path
                                    key={`line-${i}`}
                                    d={path}
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: phase === 'matrix' || phase === 'portal' ? 1 : 0,
                                        opacity: phase === 'matrix' || phase === 'portal' ? 1 : 0
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeInOut",
                                        // Stagger the drawing of the lines slightly for a cool assembly effect
                                        delay: phase === 'matrix' ? i * 0.02 : 0
                                    }}
                                />
                            ))}
                        </g>
                    </svg>

                    {/* Floating/Snapping Nodes */}
                    {nodes.map(node => {
                        const isMatrix = phase === 'matrix' || phase === 'portal';

                        // In chaos, we use a keyframe array to make them wander
                        const currentX = isMatrix ? node.matrixX : [node.chaosX, node.chaosX + node.floatOffsetX, node.chaosX];
                        const currentY = isMatrix ? node.matrixY : [node.chaosY, node.chaosY + node.floatOffsetY, node.chaosY];
                        const currentRotate = isMatrix ? 0 : [node.chaosRotate, node.chaosRotate + 90, node.chaosRotate];

                        return (
                            <motion.div
                                key={`node-${node.id}`}
                                className={`absolute w-1.5 h-1.5 z-20 ${isMatrix ? 'bg-white' : 'bg-emerald-400'}`}
                                style={{
                                    // Center the square on the coordinate
                                    marginLeft: -3,
                                    marginTop: -3,
                                    boxShadow: isMatrix ? "0 0 10px rgba(255,255,255,0.5)" : "0 0 5px rgba(52,211,153,0.5)"
                                }}
                                initial={{
                                    x: node.chaosX,
                                    y: node.chaosY,
                                    rotate: node.chaosRotate,
                                    opacity: 0
                                }}
                                animate={{
                                    x: currentX,
                                    y: currentY,
                                    rotate: currentRotate,
                                    opacity: 1
                                }}
                                transition={
                                    isMatrix
                                        ? { type: "spring", stiffness: 60, damping: 12, mass: 0.5, delay: Math.random() * 0.4 } // Snapping physics
                                        : { duration: node.floatDuration, repeat: Infinity, ease: "easeInOut", opacity: { duration: 1 } } // Wandering physics
                                }
                            />
                        );
                    })}
                </motion.div>

                {/* --- TYPOGRAPHY & INTERACTION LAYER --- */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
                    <AnimatePresence>
                        {(phase === 'initializing' || phase === 'chaos') && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                                transition={{ duration: 0.5 }}
                                className="bg-black/50 backdrop-blur-sm border border-emerald-500/30 px-6 py-3 rounded-sm"
                            >
                                <div className="font-mono text-emerald-400 text-sm overflow-hidden whitespace-nowrap border-r-2 border-emerald-400 pr-1 typewriter-text">
                                    {phase === 'initializing' ? '> Initializing Human Algorithm...' : '> Awaiting inputs...'}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {phase === 'matrix' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="absolute bottom-24 flex flex-col items-center gap-2"
                            >
                                <span className="font-mono text-xs tracking-widest text-white/50 animate-pulse uppercase">
                                    [ System Structured. Click to Access. ]
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Adding CSS for the blink cursor effect locally since this is a self-contained sequence */}
                <style dangerouslySetInnerHTML={{
                    __html: `
          .typewriter-text {
            animation: typing 2s steps(40, end), blink-caret .75s step-end infinite;
          }
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: #34d399; }
          }
        `}} />
            </motion.div>
        </AnimatePresence>
    );
};

export default ChaosToMatrixIntro;
