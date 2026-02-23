import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Filter, Sun, Moon, Globe, ScanEye } from 'lucide-react';
import Navbar from '../components/Navbar';
import NavigationMenu from '../components/NavigationMenu';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
// import { useHandCursor } from '../context/HandCursorContext';
import { SIDE_PROJECTS, NOTES } from '../data/portfolioData';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import ProjectCard from '../components/ProjectCard';
import Treasure from '../components/Treasure';

// Interaction Components
import NexusAI from '../components/interactions/NexusAI';

// Configuration
const CONFIG = {
    proximity: 400, // Distance to trigger effect
    lineOpacity: 0.15,
    magneticForce: 0.5, // Strength of tilt
    scaleForce: 1.02 // Max scale
};

const SideProjectsIndex = () => {
    const { isDark } = useTheme();
    const { isIndonesian, t } = useLanguage();
    // const { isGestureMode, toggleGestureMode } = useHandCursor();
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Interaction Refs
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const cardsRef = useRef([]);
    const requestRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 }); // Start off-screen

    // Configuration
    // Moved to outside component to avoid re-creation


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
        cardsRef.current = cardsRef.current.slice(0, SIDE_PROJECTS.length + NOTES.length);
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

            cardsRef.current.forEach((card) => {
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

            {/* --- NAVIGATION SYSTEM --- */}
            <Navbar onOpenMenu={() => setIsMenuOpen(true)} title="Project Archives" backPath="/" />

            <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <main className="max-w-6xl mx-auto px-6 pt-32 pb-24" ref={containerRef}>
                <header className="mb-32 relative min-h-[50vh] flex flex-col justify-center text-center md:text-left">
                    {/* Background Visual */}
                    <div className="absolute inset-0 z-0 opacity-40 grayscale blur-[1px]">
                        <NexusAI color={isDark ? '#60A5FA' : '#2563EB'} />
                    </div>

                    <div className="relative z-10 max-w-4xl">
                        <Treasure
                            id="projects-index"
                            className="top-0 right-0"
                            type="gem"
                        >
                            RARE RUBY FOUND!
                        </Treasure>
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] backdrop-blur-md">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-red)] animate-pulse"></div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">Venture Portfolio 2024-2026</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-serif italic mb-8 tracking-tighter leading-[0.9]">
                            Ship. Measure. <br /><span className="text-[var(--text-secondary)]">Repeat.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl">
                            A showcase of independent products, from 0 to 1. <br className="hidden md:block" />
                            <span className="opacity-80 text-lg">{t('project_archive.subtitle')}</span>
                        </p>
                    </div>
                </header>

                {SIDE_PROJECTS.length > 0 && (
                    <div className="mb-32">
                        <h2 className="text-sm font-mono uppercase tracking-widest text-[var(--accent-line)] mb-12 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-[var(--accent-line)]"></span>
                            Launched Ventures
                            <span className="flex-1 h-[1px] bg-[var(--accent-line)]"></span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 perspective-1000">
                            {SIDE_PROJECTS.filter(p => !p.hidden).map((project, idx) => (
                                <div
                                    key={project.id}
                                    ref={el => cardsRef.current[idx] = el}
                                    onClick={() => navigate(`/side-project/${project.id}`)}
                                    className="group cursor-pointer transition-transform duration-100 ease-out will-change-transform"
                                >
                                    <div className="aspect-[4/3] bg-black dark:bg-white border border-[var(--border-color)] mb-6 overflow-hidden relative">
                                        <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                                            <ProjectCard type={project.type || 'Web'} id={project.id} expanded={true} image={project.coverImage} />
                                        </div>
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <div className="absolute bottom-4 left-4 font-mono text-[11px] text-black dark:text-white bg-white/90 dark:bg-black/90 px-2 py-1 backdrop-blur-sm rounded border border-black/10 dark:border-white/10">
                                            0{idx + 1}
                                        </div>
                                        <ArrowUpRight className="absolute top-4 right-4 text-white dark:text-black opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" size={20} />
                                    </div>

                                    <h3 className="text-2xl font-serif italic text-[var(--text-primary)] mb-2 group-hover:underline decoration-1 underline-offset-4">
                                        {(isIndonesian && project.title_id) ? project.title_id : project.title}
                                    </h3>
                                    <p className="text-[var(--text-secondary)] font-light text-sm leading-relaxed mb-4">
                                        {(isIndonesian && project.desc_id) ? project.desc_id : project.desc}
                                    </p>
                                    <div className="flex gap-2 flex-wrap">
                                        {project.stack.map((tech, tIdx) => (
                                            <span key={tIdx} className="text-[11px] font-mono border border-[var(--border-color)] px-2 py-1 rounded-sm text-[var(--text-secondary)] uppercase tracking-wider">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* NOTES Section */}
                {NOTES.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-sm font-mono uppercase tracking-widest text-[var(--accent-line)] mb-12 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-[var(--accent-line)]"></span>
                            <span>
                                Prototypes
                                <span className="block text-[10px] text-[var(--text-secondary)] normal-case mt-1 max-w-md">
                                    Thinking, building, and attempts to solve problems.
                                </span>
                            </span>
                            <span className="flex-1 h-[1px] bg-[var(--accent-line)]"></span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 perspective-1000">
                            {NOTES.map((project, idx) => (
                                <div
                                    key={project.id}
                                    ref={el => cardsRef.current[SIDE_PROJECTS.length + idx] = el}
                                    onClick={() => navigate(`/side-project/${project.id}`)}
                                    className="group cursor-pointer transition-transform duration-100 ease-out will-change-transform opacity-80 hover:opacity-100"
                                >
                                    <div className="aspect-[4/3] bg-black dark:bg-white border border-[var(--border-color)] border-dashed mb-6 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                                        <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                            <ProjectCard type={project.type || 'Web'} id={project.id} expanded={true} image={project.coverImage} />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-serif italic text-[var(--text-primary)] mb-2 group-hover:underline decoration-1 underline-offset-4 decoration-dotted">
                                        {(isIndonesian && project.title_id) ? project.title_id : project.title}
                                    </h3>
                                    <p className="text-[var(--text-secondary)] font-light text-sm leading-relaxed mb-4 line-clamp-2">
                                        {(isIndonesian && project.desc_id) ? project.desc_id : project.desc}
                                    </p>
                                    <div className="flex gap-2 flex-wrap opacity-60">
                                        {project.stack.map((tech, tIdx) => (
                                            <span key={tIdx} className="text-[11px] font-mono border border-[var(--border-color)] px-2 py-1 rounded-sm text-[var(--text-secondary)] uppercase tracking-wider">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div >
    );
};

export default SideProjectsIndex;
