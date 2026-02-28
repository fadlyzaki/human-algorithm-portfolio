import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TactileDeskIntro = ({ onComplete }) => {
    const [phase, setPhase] = useState('scatter'); // scatter -> write -> wait -> zoom
    const [exiting, setExiting] = useState(false);
    const skipRef = useRef(false);

    // --- STAGE CHOREOGRAPHY ---
    useEffect(() => {
        // 1. Initial scatter animation takes ~1.5s
        const writeTimer = setTimeout(() => {
            if (!skipRef.current) setPhase('write');
        }, 1500);

        // 2. Handwriting animation takes ~2s
        const waitTimer = setTimeout(() => {
            if (!skipRef.current) setPhase('wait');
        }, 3500);

        return () => {
            clearTimeout(writeTimer);
            clearTimeout(waitTimer);
        };
    }, []);

    // --- INTERACTION HANDLING ---
    const handleComplete = () => {
        if (skipRef.current) return;
        skipRef.current = true;
        setPhase('zoom');
        setExiting(true);

        // Allow the massive portal zoom to run before unmounting
        setTimeout(() => {
            if (onComplete) onComplete();
        }, 1200);
    };

    useEffect(() => {
        const handleKeyDown = () => {
            if (phase === 'wait' || phase === 'write' || phase === 'scatter') {
                handleComplete();
            }
        };

        const handleClick = () => {
            if (phase === 'wait' || phase === 'write' || phase === 'scatter') {
                handleComplete();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('click', handleClick);
        };
    }, [phase]);

    // If we are currently zooming out, we stop rendering the "desk" and 
    // only render the portal.
    return (
        <AnimatePresence>
            {!exiting && (
                <motion.div
                    key="desk-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8 } }}
                    className="fixed inset-0 z-[100] bg-[#111111] overflow-hidden flex items-center justify-center pointer-events-none"
                >
                    {/* Subtle desk texture / Blueprint grid */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(#A1A1AA 1px, transparent 1px), linear-gradient(90deg, #A1A1AA 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    />

                    {/* Subtle noise texture */}
                    <div
                        className="absolute inset-0 opacity-10 mix-blend-overlay"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                        }}
                    />

                    {/* --- THE OBJECTS --- */}
                    <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center">

                        {/* 1. Yellow Sticky Note */}
                        <motion.div
                            initial={{ y: -500, x: -200, rotate: -45, opacity: 0, scale: 0.8 }}
                            animate={{ y: -40, x: -120, rotate: -12, opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
                            className="absolute w-48 h-48 bg-[#FDE68A] shadow-xl flex items-center justify-center z-10"
                            style={{
                                boxShadow: "2px 4px 15px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.05)"
                            }}
                        >
                            <div className="w-full h-full relative p-6">
                                {/* SVG Handwriting path (Hello) */}
                                <svg viewBox="0 0 100 50" className="w-full h-full stroke-black stroke-2 fill-none overflow-visible">
                                    <motion.path
                                        d="M 10 25 C 20 15, 30 35, 40 25 C 50 15, 60 35, 70 25 C 80 15, 90 35, 100 25"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{
                                            pathLength: phase === 'write' || phase === 'wait' ? 1 : 0,
                                            opacity: phase === 'write' || phase === 'wait' ? 0.8 : 0
                                        }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
                                    />
                                </svg>
                            </div>
                        </motion.div>

                        {/* 2. Silver/Graphite Pencil */}
                        <motion.div
                            initial={{ y: -300, x: 300, rotate: 90, opacity: 0 }}
                            animate={{ y: 80, x: 150, rotate: 18, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.5 }}
                            className="absolute z-20"
                            style={{ filter: "drop-shadow(5px 10px 10px rgba(0,0,0,0.4))" }}
                        >
                            <svg width="20" height="200" viewBox="0 0 20 200">
                                <path d="M0 20 L0 180 L10 200 L20 180 L20 20 Z" fill="#FACC15" />
                                <rect x="0" y="20" width="20" height="150" fill="#EAB308" />
                                <rect x="0" y="0" width="20" height="20" fill="#ef4444" /> {/* Eraser */}
                                <rect x="0" y="20" width="20" height="5" fill="#9CA3AF" /> {/* Metal band */}
                                <path d="M5 180 L10 200 L15 180 Z" fill="#374151" /> {/* Graphite tip */}
                            </svg>
                        </motion.div>

                        {/* 3. The Polaroid (The Portal) */}
                        <motion.div
                            initial={{ y: 500, x: 0, rotate: 20, opacity: 0 }}
                            animate={{ y: 20, x: 60, rotate: 4, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 90, damping: 14, delay: 0.8 }}
                            className="absolute w-56 bg-white p-4 pb-12 shadow-2xl z-30"
                            style={{
                                boxShadow: "5px 15px 30px rgba(0,0,0,0.6), inset 0 0 10px rgba(0,0,0,0.05)"
                            }}
                        >
                            {/* Photo Area */}
                            <div className="w-full aspect-square bg-[#222] overflow-hidden relative">
                                <img
                                    src="/hero-id-v2.jpg"
                                    alt="Fadly"
                                    className="w-full h-full object-cover grayscale opacity-80"
                                />
                            </div>
                            <div className="absolute bottom-4 left-0 w-full text-center font-mono text-xs text-gray-500 font-bold opacity-60">
                                FADLY ZAKI
                            </div>
                        </motion.div>

                    </div>

                    {/* Interactive instruction */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: phase === 'wait' ? 1 : 0 }}
                        className="absolute bottom-12 flex flex-col items-center gap-2"
                    >
                        <span className="font-mono text-xs tracking-widest text-white/50 animate-pulse">
                            [ Click anywhere to enter ]
                        </span>
                    </motion.div>
                </motion.div>
            )}

            {/* --- THE PORTAL ZOOM OUT (Phase 3) --- */}
            {exiting && (
                <motion.div
                    key="zoom-portal"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 30, opacity: 0 }}
                    transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1.000] }}
                    className="fixed inset-0 z-[110] pointer-events-none flex items-center justify-center origin-center"
                >
                    <div className="w-56 aspect-[4/5] bg-white p-4 pb-12 relative">
                        <div className="w-full aspect-square bg-[#222] overflow-hidden">
                            <img
                                src="/hero-id-v2.jpg"
                                alt="Fadly"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TactileDeskIntro;
