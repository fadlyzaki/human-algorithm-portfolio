import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Filter, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { SIDE_PROJECTS } from '../data/portfolioData';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import ProjectCard from '../components/ProjectCard';

const SideProjectsIndex = () => {
    const { isDark, setIsDark } = useTheme();
    const navigate = useNavigate();

    const themeStyles = {
        '--bg-void': isDark ? '#111111' : '#FFFFFF',
        '--text-primary': isDark ? '#F3F4F6' : '#111827',
        '--text-secondary': isDark ? '#9CA3AF' : '#6B7280',
        '--border-color': isDark ? '#374151' : '#E5E7EB',
    };

    return (
        <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500">
            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
                <BackButton to="/" label="Index" className="text-white hover:text-white/80 mix-blend-difference" />

                <button
                    onClick={() => setIsDark(!isDark)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors mix-blend-difference text-white"
                    aria-label="Toggle Theme"
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </nav>

            <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
                <header className="mb-24">
                    <h1 className="text-4xl md:text-6xl font-serif italic mb-6">Archive: Experiments</h1>
                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl font-light">
                        Full log of side projects, prototypes, and daemons.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {SIDE_PROJECTS.filter(p => !p.hidden).map((project, idx) => (
                        <div key={idx} onClick={() => navigate(`/side-project/${project.id}`)} className="group cursor-pointer">
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
                                {project.title}
                            </h3>
                            <p className="text-[var(--text-secondary)] font-light text-sm leading-relaxed mb-4">
                                {project.desc}
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
