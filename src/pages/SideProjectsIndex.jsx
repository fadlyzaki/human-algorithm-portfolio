import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Filter, Sun, Moon, Globe, ScanEye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useHandCursor } from '../context/HandCursorContext';
import { SIDE_PROJECTS } from '../data/portfolioData';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import ProjectCard from '../components/ProjectCard';

const SideProjectsIndex = () => {
    const { isDark, setIsDark } = useTheme();
    const { language, toggleLanguage, isIndonesian } = useLanguage();
    const { isGestureMode, toggleGestureMode } = useHandCursor();
    const navigate = useNavigate();

    // Interaction Refs
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const cardsRef = useRef([]);
    const requestRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 }); // Start off-screen

    // Configuration
    const CONFIG = {
        proximity: 400, // Distance to trigger effect
        lineOpacity: 0.15,
        magneticForce: 0.5, // Strength of tilt
        scaleForce: 1.02 // Max scale
    };

    const themeStyles = {
        '--bg-void': isDark ? '#111111' : '#FFFFFF',
        '--text-primary': isDark ? '#F3F4F6' : '#111827',
        '--text-secondary': isDark ? '#9CA3AF' : '#6B7280',
        '--border-color': isDark ? '#374151' : '#E5E7EB',
        '--accent-line': isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
        '--accent-dot': isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
    };

    // Initialize refs array
    useEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, SIDE_PROJECTS.length);
    }, []);

    // Mouse Tracking
    useEffect(() => {
        const handleMouseMove = (e) => {
            // Get relative position to container if possible, or just page coordinates
            // Using page coordinates simplifies canvas drawing relative to window if canvas is fixed
            // But here canvas is absolute in container?
            // Let's assume canvas covers the whole document or fixed.
            // For simplicity in a scrollable page: track ClientX/Y and adjust map.

            // Simpler: Track pageX/Y for absolute canvas, or clientX/Y for fixed.
            // Given the scroll, let's use client coordinates and keeping canvas fixed is easier visual, 
            // BUT lines need to stick to scrollable elements. 
            // Better: Canvas absolute covering the specific section or fixed.
            // Let's make cursor track clientX/Y.
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Animation Loop
    useEffect(() => {
        const animate = () => {
            if (!canvasRef.current) return;

            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            // Resize canvas to match window view (fixed overlay)
            if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Line Style
            const isDarkMode = isDark;
            ctx.strokeStyle = isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)';
            ctx.lineWidth = 1;

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                const rect = card.getBoundingClientRect();
                const cardCx = rect.left + rect.width / 2;
                const cardCy = rect.top + rect.height / 2;

                const dist = Math.hypot(mx - cardCx, my - cardCy);

                // 1. Draw Lines if close
                if (dist < CONFIG.proximity) {
                    ctx.beginPath();
                    ctx.moveTo(mx, my);
                    ctx.lineTo(cardCx, cardCy);
                    // Fade out based on distance
                    ctx.globalAlpha = 1 - Math.pow(dist / CONFIG.proximity, 2);
                    ctx.stroke();
                    ctx.globalAlpha = 1.0;

                    // Draw connection dots
                    ctx.fillStyle = isDarkMode ? '#FFF' : '#000';
                    ctx.beginPath();
                    ctx.arc(cardCx, cardCy, 3, 0, Math.PI * 2);
                    ctx.fill();
                }

                // 2. Magnetic Tilt
                if (dist < CONFIG.proximity * 1.5) { // Slightly larger radius for movement
                    const xRel = (mx - cardCx) / (rect.width / 2); // -1 to 1 mostly
                    const yRel = (my - cardCy) / (rect.height / 2);

                    // Limit rotation
                    const rotX = -yRel * CONFIG.magneticForce * 5; // Rotate X based on Y movement
                    const rotY = xRel * CONFIG.magneticForce * 5;  // Rotate Y based on X movement
                    const scale = 1 + ((1 - Math.min(dist / (CONFIG.proximity * 1.5), 1)) * (CONFIG.scaleForce - 1));

                    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`;
                    card.style.zIndex = 10; // Bring to front
                } else {
                    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
                    card.style.zIndex = 1;
                }
            });

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [isDark]); // Re-bind on theme change for colors

    return (
        <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500 relative">
            <SEO
                title="Archive: Experiments"
                description="Full log of side projects, prototypes, and daemons."
            />

            {/* Neural Network Overlay */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-50 mix-blend-difference" // z-50 but pointer-events-none allows clicks through
            />

            {/* Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
                <BackButton to="/" label="Index" className="text-white hover:text-white/80 mix-blend-difference" />

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-sm uppercase tracking-widest mix-blend-difference text-white hidden md:block">
                    ARCHIVES
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleGestureMode}
                        className={`transition-colors ${isGestureMode ? 'text-[var(--accent-red)] animate-pulse' : 'text-white/80 hover:text-white mix-blend-difference'}`}
                        title="Toggle Hand Tracking"
                    >
                        <ScanEye size={20} />
                    </button>

                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors mix-blend-difference text-white"
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:opacity-80 transition-opacity mix-blend-difference text-white"
                        aria-label="Toggle Language"
                    >
                        <Globe size={14} />
                        <span>{language}</span>
                    </button>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 pt-32 pb-24" ref={containerRef}>
                <header className="mb-24">
                    <h1 className="text-4xl md:text-6xl font-serif italic mb-6">Side Projects</h1>
                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl font-light">
                        Full log of side projects, prototypes, and daemons.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 perspective-1000">
                    {SIDE_PROJECTS.filter(p => !p.hidden).map((project, idx) => (
                        <div
                            key={idx}
                            ref={el => cardsRef.current[idx] = el}
                            onClick={() => navigate(`/side-project/${project.id}`)}
                            className="group cursor-pointer transition-transform duration-100 ease-out will-change-transform" // Optimized for smooth physics, removed duration-700
                        >
                            <div className="aspect-[4/3] bg-[var(--text-secondary)]/10 border border-[var(--border-color)] mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <ProjectCard type={project.type || 'Web'} id={project.id} expanded={true} />
                                </div>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                <div className="absolute bottom-4 left-4 font-mono text-xs text-white/80 bg-black/50 px-2 py-1 backdrop-blur-sm rounded">
                                    0{idx + 1}
                                </div>
                                <ArrowUpRight className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" size={20} />
                            </div>

                            <h3 className="text-2xl font-serif italic text-[var(--text-primary)] mb-2 group-hover:underline decoration-1 underline-offset-4">
                                {(isIndonesian && project.title_id) ? project.title_id : project.title}
                            </h3>
                            <p className="text-[var(--text-secondary)] font-light text-sm leading-relaxed mb-4">
                                {(isIndonesian && project.desc_id) ? project.desc_id : project.desc}
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {project.stack.map((tech, tIdx) => (
                                    <span key={tIdx} className="text-[10px] font-mono border border-[var(--border-color)] px-2 py-1 rounded-sm text-[var(--text-secondary)] uppercase tracking-wider">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div >
    );
};

export default SideProjectsIndex;
