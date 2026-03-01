import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TOTAL_NODES = 120;
const COLS = 10;
const ROWS = 10;
const GRID_SIZE = 45; // Spacing between nodes

// --- CHAOS BACKGROUND CANVAS ---
const ChaosBackground = ({ phase }) => {
    const canvasRef = useRef(null);
    const animRef = useRef(null);
    const particlesRef = useRef([]);
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;

        const resize = () => {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);
            initParticles();
        };

        const w = () => window.innerWidth;
        const h = () => window.innerHeight;

        const initParticles = () => {
            particlesRef.current = Array.from({ length: 80 }, () => ({
                x: Math.random() * w(),
                y: Math.random() * h(),
                vx: (Math.random() - 0.5) * 2.5,
                vy: (Math.random() - 0.5) * 2.5,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.1,
                hue: Math.random() * 60 + 120, // green-cyan range
            }));
        };

        const animate = () => {
            timeRef.current += 0.016;
            const t = timeRef.current;
            ctx.clearRect(0, 0, w(), h());

            // --- Layer 1: Noise grain ---
            const imgData = ctx.createImageData(w(), h());
            const data = imgData.data;
            for (let i = 0; i < data.length; i += 16) { // Skip pixels for perf
                const noise = Math.random() * 18;
                data[i] = noise;
                data[i + 1] = noise + Math.random() * 8;
                data[i + 2] = noise;
                data[i + 3] = 25;
            }
            ctx.putImageData(imgData, 0, 0);

            // --- Layer 2: Pulsing radial glow ---
            const pulse = 0.3 + Math.sin(t * 1.5) * 0.15;
            const gradient = ctx.createRadialGradient(
                w() / 2, h() / 2, 0,
                w() / 2, h() / 2, Math.max(w(), h()) * 0.6
            );
            gradient.addColorStop(0, `rgba(16, 185, 129, ${pulse * 0.12})`);
            gradient.addColorStop(0.4, `rgba(6, 78, 59, ${pulse * 0.08})`);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, w(), h());

            // --- Layer 3: Floating particles with trails ---
            const particles = particlesRef.current;
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around
                if (p.x < -10) p.x = w() + 10;
                if (p.x > w() + 10) p.x = -10;
                if (p.y < -10) p.y = h() + 10;
                if (p.y > h() + 10) p.y = -10;

                // Draw particle with glow
                const flickerOpacity = p.opacity * (0.6 + Math.sin(t * 3 + i) * 0.4);
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, ${flickerOpacity})`;
                ctx.shadowColor = `hsla(${p.hue}, 90%, 50%, ${flickerOpacity * 0.8})`;
                ctx.shadowBlur = 8;
                ctx.fill();

                // Draw connections between nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        const lineOpacity = (1 - dist / 150) * 0.15;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(52, 211, 153, ${lineOpacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            ctx.shadowBlur = 0;

            // --- Layer 4: Scanlines ---
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            for (let y = 0; y < h(); y += 3) {
                ctx.fillRect(0, y, w(), 1);
            }

            // --- Layer 5: Glitch bars (intermittent) ---
            if (Math.random() < 0.03) {
                const glitchY = Math.random() * h();
                const glitchH = Math.random() * 8 + 2;
                ctx.fillStyle = `rgba(52, 211, 153, ${Math.random() * 0.15})`;
                ctx.fillRect(0, glitchY, w(), glitchH);
            }

            animRef.current = requestAnimationFrame(animate);
        };

        resize();
        animate();
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
            if (animRef.current) cancelAnimationFrame(animRef.current);
        };
    }, []);

    // Fade out background when transitioning to matrix
    const isActive = phase === 'chaos' || phase === 'initializing';

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 transition-opacity duration-1500"
            style={{
                opacity: isActive ? 1 : 0,
                transition: 'opacity 1.5s ease-out'
            }}
        />
    );
};

// --- MAIN COMPONENT ---
const ChaosToMatrixIntro = ({ onComplete }) => {
    const [phase, setPhase] = useState('chaos'); // 'chaos' -> 'initializing' -> 'matrix' -> 'portal'

    // Capture window dimensions once on mount
    const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const initTimer = setTimeout(() => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
            setIsMounted(true);
        }, 0);
        return () => clearTimeout(initTimer);
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

            // Matrix Target Position (Centered grid)
            const matrixX = startX + col * GRID_SIZE;
            const matrixY = startY + row * GRID_SIZE;

            // Chaos Initial Position — TRULY RANDOM across the entire viewport
            const chaosX = Math.random() * width;
            const chaosY = Math.random() * height;
            const chaosRotate = Math.random() * 360;

            // Floating Animation Offsets — large range for dramatic wandering
            const floatDuration = 2.5 + Math.random() * 4;
            const floatOffsetX = (Math.random() - 0.5) * 250;
            const floatOffsetY = (Math.random() - 0.5) * 250;

            // Visual variety
            const size = Math.random() * 3 + 1; // 1px to 4px
            const nodeOpacity = Math.random() * 0.5 + 0.5; // 0.5 to 1.0

            return {
                id: i, col, row,
                chaosX, chaosY, chaosRotate,
                matrixX, matrixY,
                floatDuration, floatOffsetX, floatOffsetY,
                size, nodeOpacity
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
        }, 2500);

        // 2. Snap to Matrix
        const matrixTimer = setTimeout(() => {
            setPhase('matrix');
        }, 5500);

        return () => {
            clearTimeout(initTimer);
            clearTimeout(matrixTimer);
        };
    }, [isMounted]);

    // --- INTERACTION HANDLING ---
    const handleInteraction = useCallback(() => {
        if (phase !== 'matrix') return;
        setPhase('portal');

        // Zoom out and reveal homepage
        setTimeout(() => {
            if (onComplete) onComplete();
        }, 1200);
    }, [phase, onComplete]);

    useEffect(() => {
        const handleKeyDown = () => handleInteraction();
        const handleClick = () => handleInteraction();

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('click', handleClick);
        };
    }, [handleInteraction]);

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
                {/* --- ATMOSPHERIC CHAOS BACKGROUND --- */}
                <ChaosBackground phase={phase} />

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
                                        delay: phase === 'matrix' ? i * 0.02 : 0
                                    }}
                                />
                            ))}
                        </g>
                    </svg>

                    {/* Floating/Snapping Nodes */}
                    {nodes.map(node => {
                        const isMatrix = phase === 'matrix' || phase === 'portal';

                        // Only render grid nodes (first 100) in matrix, all float in chaos
                        if (isMatrix && node.id >= COLS * ROWS) return null;

                        // In chaos: keyframe array to make them wander dramatically
                        const currentX = isMatrix
                            ? node.matrixX
                            : [node.chaosX, node.chaosX + node.floatOffsetX, node.chaosX - node.floatOffsetX * 0.7, node.chaosX];
                        const currentY = isMatrix
                            ? node.matrixY
                            : [node.chaosY, node.chaosY + node.floatOffsetY, node.chaosY - node.floatOffsetY * 0.5, node.chaosY];
                        const currentRotate = isMatrix
                            ? 0
                            : [node.chaosRotate, node.chaosRotate + 180, node.chaosRotate + 90, node.chaosRotate];

                        const nodeSize = isMatrix ? 6 : node.size * 2.5; // px

                        return (
                            <motion.div
                                key={`node-${node.id}`}
                                className={`absolute z-20 rounded-sm`}
                                style={{
                                    width: nodeSize,
                                    height: nodeSize,
                                    marginLeft: -nodeSize / 2,
                                    marginTop: -nodeSize / 2,
                                    backgroundColor: isMatrix ? '#ffffff' : `rgba(52, 211, 153, ${node.nodeOpacity})`,
                                    boxShadow: isMatrix
                                        ? "0 0 10px rgba(255,255,255,0.5)"
                                        : `0 0 ${6 + node.size * 3}px rgba(52, 211, 153, ${node.nodeOpacity * 0.6}), 0 0 ${2 + node.size}px rgba(52, 211, 153, ${node.nodeOpacity * 0.3})`,
                                }}
                                initial={{
                                    x: node.chaosX,
                                    y: node.chaosY,
                                    rotate: node.chaosRotate,
                                    opacity: 0,
                                    scale: isMatrix ? 1 : 0.5 + Math.random() * 1.5
                                }}
                                animate={{
                                    x: currentX,
                                    y: currentY,
                                    rotate: currentRotate,
                                    opacity: 1,
                                    scale: isMatrix ? 1 : [1, 1.3, 0.8, 1]
                                }}
                                transition={
                                    isMatrix
                                        ? { type: "spring", stiffness: 60, damping: 12, mass: 0.5, delay: (node.id % 4) * 0.1 }
                                        : {
                                            duration: node.floatDuration,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            opacity: { duration: 0.8, delay: node.id * 0.02 },
                                            scale: { duration: node.floatDuration * 1.3, repeat: Infinity, ease: "easeInOut" }
                                        }
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
                                <div key={phase} className="font-mono text-emerald-400 text-sm overflow-hidden whitespace-nowrap border-r-2 border-emerald-400 pr-1 typewriter-text">
                                    {phase === 'initializing' ? '> Initializing Human Algorithm...' : '> Awaiting inputs...'}
                                </div>
                                {/* VISIBLE SKIP HINT */}
                                <div className="mt-4 text-center">
                                    <span className="font-mono text-[10px] tracking-widest text-emerald-400/50 uppercase animate-pulse">
                                        [ Press any key to bypass ]
                                    </span>
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

                {/* CSS for the blink cursor effect */}
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
