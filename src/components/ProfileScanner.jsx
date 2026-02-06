import React, { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { Scan, Shield, Fingerprint, Activity, Zap } from 'lucide-react';
import Treasure from './Treasure';

const ProfileScanner = ({
    imageSrc = "/about-portrait-new.jpg",
    aspectRatio = "aspect-[3/4]",
    showBadge = true,
    className = ""
}) => {
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [hasScanned, setHasScanned] = useState(false);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    // Trigger "scanned" state after animation completes (2.5s + 0.5s delay = 3s)
    useEffect(() => {
        if (isInView && !hasScanned) {
            const timer = setTimeout(() => {
                setHasScanned(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isInView, hasScanned]);

    // --- 3D TILT LOGIC ---
    const x = useSpring(0, { stiffness: 100, damping: 30 });
    const y = useSpring(0, { stiffness: 100, damping: 30 });

    const ticking = useRef(false);

    const handleMouseMove = (e) => {
        if (!ticking.current) {
            requestAnimationFrame(() => {
                if (!containerRef.current) return;
                const rect = containerRef.current.getBoundingClientRect();
                const width = rect.width;
                const height = rect.height;
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;

                const xPct = mouseX / width - 0.5;
                const yPct = mouseY / height - 0.5;

                x.set(xPct * 20); // rotateY
                y.set(yPct * -20); // rotateX

                ticking.current = false;
            });
            ticking.current = true;
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    // Transform springs into rotation values
    const rotateX = useTransform(y, (val) => val);
    const rotateY = useTransform(x, (val) => val);

    // Dynamic glare effect based on tilt
    const glareX = useTransform(x, [-10, 10], [0, 100]);
    const glareY = useTransform(y, [-10, 10], [0, 100]);

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            className={`relative w-full ${aspectRatio} rounded-lg perspective-1000 group cursor-crosshair ${className}`}
        >
            {/* CARD CONTAINER */}
            <div className={`relative w-full h-full rounded-lg overflow-hidden border border-[var(--border-color)] group-hover:border-[var(--accent-blue)] transition-colors duration-500 shadow-2xl bg-[var(--bg-card)]`}>

                {/* TREASURE HUNT (Preserved) */}
                <div className="absolute top-4 right-4 z-50 transform translate-z-20">
                    <Treasure id="about-photo" type="coins">PIRATE'S GOLD!</Treasure>
                </div>

                {/* LAYERS CONTAINER */}
                <div className="absolute inset-0 z-0">

                    {/* 1. BASE LAYER (BLURRED & GRAYSCALE) - Always visible underneath */}
                    <div className="absolute inset-0">
                        <img
                            src={imageSrc}
                            alt="Scan Target"
                            className="w-full h-full object-cover grayscale opacity-50 blur-[4px] scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    {/* 2. REVEAL LAYER (CLEAR) - Wipes vertically */}
                    <motion.div
                        initial={{ clipPath: 'inset(0 0 100% 0)' }}
                        whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
                        className="absolute inset-0 z-10"
                    >
                        <img
                            src={imageSrc}
                            alt="Target Revealed"
                            className={`w-full h-full object-cover transition-all duration-700 ease-out ${hasScanned || isHovered ? 'grayscale-0 opacity-100 scale-105' : 'grayscale opacity-80'}`}
                        />
                        {/* Tints inside the clear layer so they appear with it */}
                        <div className={`absolute inset-0 bg-[var(--accent-blue)]/10 mix-blend-overlay transition-opacity duration-500 ${hasScanned || isHovered ? 'opacity-0' : ''}`}></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-void)]/80 via-transparent to-transparent opacity-60 z-10"></div>
                    </motion.div>
                </div>


                {/* --- IDENTITY SCAN LAYER (The "Algorithm" Part) --- */}

                {/* 1. Scanning Light Beam (Synchronized with Reveal) */}
                <motion.div
                    initial={{ top: '0%', opacity: 0 }}
                    whileInView={{
                        top: ['0%', '100%'],
                        opacity: [0, 1, 1, 0]
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 2.5,
                        ease: 'easeInOut',
                        delay: 0.5,
                        times: [0, 0.1, 0.9, 1]
                    }}
                    onAnimationComplete={() => setIsHovered(true)}
                    className="absolute left-0 w-full h-[2px] bg-[var(--accent-blue)] shadow-[0_0_20px_var(--accent-blue)] z-20"
                />

                {/* 2. Continuous Monitoring Beam (Subtle, loops after main scan) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.3, top: ['0%', '100%', '0%'] }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 3.5 }}
                    className="absolute left-0 w-full h-px bg-[var(--accent-blue)] z-20"
                />

                {/* 2. SVG Data Overlay (HUD) */}
                <div className="absolute inset-0 z-30 pointer-events-none p-4 flex flex-col justify-between">

                    {/* Top HUD */}
                    <div className="flex justify-between items-start opacity-60 group-hover:opacity-100 transition-opacity">
                        <Scan size={20} className="text-[var(--accent-blue)]" />
                        <div className="flex flex-col items-end">
                            <span className="font-mono text-[9px] text-[var(--accent-blue)] uppercase tracking-widest">Target_ID: Uzzaki</span>
                            <span className="font-mono text-[8px] text-[var(--text-secondary)]">Class: Human_Designer</span>
                        </div>
                    </div>

                    {/* Center Reticle (Appears on Hover) */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isHovered ? 'scale-100 opacity-100' : 'scale-75 opacity-20'}`}>
                        <div className="relative w-32 h-32 border border-[var(--accent-blue)]/30 rounded-full animate-[spin_10s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 -ml-0.5 w-1 h-2 bg-[var(--accent-blue)]"></div>
                            <div className="absolute bottom-0 left-1/2 -ml-0.5 w-1 h-2 bg-[var(--accent-blue)]"></div>
                            <div className="absolute left-0 top-1/2 -mt-0.5 h-1 w-2 bg-[var(--accent-blue)]"></div>
                            <div className="absolute right-0 top-1/2 -mt-0.5 h-1 w-2 bg-[var(--accent-blue)]"></div>
                        </div>
                        <div className="absolute inset-0 border border-[var(--accent-blue)]/50 rounded-full w-24 h-24 m-auto"></div>
                        <Activity size={16} className="absolute inset-0 m-auto text-[var(--accent-red)] animate-pulse" />
                    </div>

                    {/* Bottom HUD */}
                    <div className="flex justify-between items-end">
                        <div className="flex gap-2">
                            <Fingerprint size={20} className="text-[var(--text-secondary)] opacity-50" />
                            <Shield size={20} className="text-[var(--text-secondary)] opacity-50" />
                        </div>
                        <div className="font-mono text-[9px] text-[var(--text-secondary)] uppercase">
                            Status: {isHovered ? <span className="text-[var(--accent-green)] animate-pulse">DETECTED</span> : 'SCANNING...'}
                        </div>
                    </div>
                </div>

                {/* 3. Glare / Reflection Effect */}
                <motion.div
                    style={{
                        left: glareX,
                        top: glareY,
                        opacity: isHovered ? 0.3 : 0
                    }}
                    className="absolute -inset-full bg-gradient-to-br from-transparent via-white/20 to-transparent z-40 rotate-45 pointer-events-none transition-opacity"
                />

                {/* Corner Glitch Markers */}
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--accent-blue)] z-30 opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--accent-blue)] z-30 opacity-60"></div>

            </div>

            {/* Floating Elements (Parallax) */}
            <motion.div
                style={{ x: useTransform(x, val => val * 1.5), y: useTransform(y, val => val * 1.5) }}
                className="absolute -right-6 top-12 z-0 opacity-20"
            >
                <Zap size={64} className="text-[var(--accent-blue)] rotate-12" />
            </motion.div>

            {/* Status Badge (Moved outside for 3D depth) */}
            {showBadge && (
                <motion.div
                    style={{ z: 50, x: useTransform(x, val => val * -0.5), y: useTransform(y, val => val * -0.5) }}
                    className="absolute -bottom-4 -right-4 bg-[var(--bg-surface)] border border-[var(--border-color)] px-4 py-2 flex items-center gap-2 shadow-xl rounded-full z-50"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-green)]"></span>
                    </span>
                    <span className="font-mono text-[10px] text-[var(--text-secondary)] font-bold tracking-widest">OPEN TO WORK</span>
                </motion.div>
            )}

        </motion.div>
    );
};

export default ProfileScanner;
