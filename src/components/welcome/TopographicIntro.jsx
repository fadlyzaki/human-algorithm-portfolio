import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TopographicIntro = ({ onComplete }) => {
    const [phase, setPhase] = useState('breath'); // 'breath' -> 'collapse' -> 'reveal'

    // --- PROCEDURAL MESH GENERATION ---
    // We generate a 2D grid of points and use a Math.sin wave to offset their Y coordinates,
    // creating the illusion of a 3D topographic terrain map.

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Grid properties
    const rows = 15;
    const cols = 40;
    const spacingX = width / cols;

    // We wrap the path generation in useMemo so it doesn't recalculate unless window resizes
    const meshPaths = useMemo(() => {
        let paths = [];

        // Generate horizontal lines across the mesh
        for (let r = 0; r <= rows; r++) {
            let pathD = `M 0,${(r * height / rows)}`;
            for (let c = 0; c <= cols; c++) {
                const x = c * spacingX;
                // The Y coordinate bases off the row, but is modified by a layered sine wave
                // to create natural "hills" and "valleys".
                const baseY = r * height / rows;
                // We'll calculate the dynamic Y offset using framer-motion inside the component render
                // This static path represents the flat baseline.
                pathD += ` L ${x},${baseY}`;
            }
            paths.push(pathD);
        }

        // Generate vertical lines to complete the wireframe grid
        for (let c = 0; c <= cols; c++) {
            const x = c * spacingX;
            let pathD = `M ${x},0`;
            for (let r = 0; r <= rows; r++) {
                const baseY = r * height / rows;
                pathD += ` L ${x},${baseY}`;
            }
            paths.push(pathD);
        }

        return paths;
    }, [width, height, cols, rows, spacingX]);

    // --- INTERACTION HANDLING ---
    const handleInitialize = () => {
        if (phase !== 'breath') return;
        setPhase('collapse');

        // Wait for the collapse animation (flattening to a 2D line) to complete
        setTimeout(() => {
            // Then trigger the final reveal (fading the void to transparent)
            setPhase('reveal');

            // Wait for the fade before completely unmounting and returning control to Home.jsx
            setTimeout(() => {
                if (onComplete) onComplete();
            }, 800);
        }, 1200);
    };

    // Allow clicking anywhere or pressing space to trigger
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Space' || e.code === 'Enter') {
                handleInitialize();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [phase]);

    return (
        <AnimatePresence>
            <motion.div
                key="topographic-container"
                initial={{ opacity: 1, backgroundColor: '#000000' }}
                animate={{
                    opacity: 1,
                    backgroundColor: phase === 'reveal' ? 'transparent' : '#000000'
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="fixed inset-0 z-[100] overflow-hidden flex items-center justify-center font-mono pointer-events-auto"
            >

                {/* --- THE 3D WIREFRAME MESH --- */}
                {/* We wrap the entire SVG in a motion div to control the 3D-to-2D collapse */}
                <motion.div
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    initial={{
                        rotateX: 60, // Angle the grid to look like a floor/terrain
                        scaleY: 1.5,
                        y: "20%", // Push it down towards the bottom
                        opacity: 0,
                        filter: "blur(2px)"
                    }}
                    animate={{
                        rotateX: phase === 'collapse' || phase === 'reveal' ? 0 : 60,
                        scaleY: phase === 'collapse' || phase === 'reveal' ? 0 : 1.5, // Flatten to 0 height
                        y: phase === 'collapse' || phase === 'reveal' ? "-50%" : "20%", // Move to the top of the viewport
                        opacity: phase === 'reveal' ? 0 : 0.6,
                        filter: phase === 'collapse' ? "blur(0px)" : "blur(2px)"
                    }}
                    transition={{
                        duration: phase === 'collapse' ? 1.2 : 3, // Fast collapse, slow initial fade in
                        ease: [0.645, 0.045, 0.355, 1.000],
                        opacity: { duration: phase === 'reveal' ? 0.3 : 3 }
                    }}
                    style={{ transformPerspective: 800 }}
                >
                    {/* 
            To get the "breathing" effect, we animate the children grouping elements up and down
            infinitely on a sine wave using framer motion.
          */}
                    <motion.svg
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        className="w-full h-full"
                        initial={{ y: -50 }}
                        animate={{ y: 50 }}
                        transition={{
                            y: {
                                duration: 8,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }
                        }}
                    >
                        <g stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none">
                            {meshPaths.map((path, i) => (
                                <path key={`mesh-line-${i}`} d={path} />
                            ))}
                        </g>
                    </motion.svg>
                </motion.div>


                {/* --- THE CORE UI PANEL (The Monolith) --- */}
                <AnimatePresence>
                    {phase === 'breath' && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20, filter: "blur(10px)" }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1 }}
                            className="relative z-10 flex flex-col items-center gap-8"
                        >
                            {/* Abstract Symbol */}
                            <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center relative overflow-hidden backdrop-blur-md">
                                <motion.div
                                    className="absolute w-full h-[1px] bg-white/50"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                />
                                <div className="w-2 h-2 bg-white rounded-full z-10"></div>
                            </div>

                            {/* Typography */}
                            <div className="text-center flex flex-col gap-2">
                                <h1 className="text-2xl tracking-[0.2em] font-light text-white uppercase">
                                    Fadly Zaki
                                </h1>
                                <p className="text-[10px] tracking-widest text-white/40 uppercase">
                                    Human Algorithm // System Architecture v5.0
                                </p>
                            </div>

                            {/* The Action Button */}
                            <button
                                onClick={handleInitialize}
                                className="mt-8 px-8 py-3 bg-white/5 border border-white/10 text-white text-xs tracking-widest uppercase hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md relative group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                Initialize System
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

            </motion.div>
        </AnimatePresence>
    );
};

export default TopographicIntro;
