import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Box, Maximize2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { WORK_CLUSTERS } from '../data/portfolioData';

const CompanyDetail = () => {
    const { isDark } = useTheme();
    const { id } = useParams();
    const navigate = useNavigate();

    const cluster = WORK_CLUSTERS.find(c => c.id === id) || WORK_CLUSTERS[0];

    const themeStyles = {
        '--bg-void': isDark ? '#111111' : '#FFFFFF',
        '--text-primary': isDark ? '#F3F4F6' : '#111827',
        '--text-secondary': isDark ? '#9CA3AF' : '#6B7280',
        '--border-color': isDark ? '#374151' : '#E5E7EB',
        '--bg-card': isDark ? '#1C1C1C' : '#F9FAFB',
    };

    return (
        <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500">
            <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
                <Link to="/" className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity flex items-center gap-2">
                    <ArrowLeft size={16} /> WORK INDEX
                </Link>
            </nav>

            <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
                <header className="mb-20 border-b border-[var(--border-color)] pb-12 relative overflow-hidden rounded-sm">
                    {/* Background Hero */}
                    <div className="absolute inset-0 z-0">
                        <img src={cluster.heroImage} alt="" className="w-full h-full object-cover opacity-20 grayscale brightness-50" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-void)] via-[var(--bg-void)]/90 to-transparent"></div>
                    </div>

                    <div className="relative z-10 p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 border border-[var(--text-primary)] rounded-full text-xs font-mono uppercase tracking-widest backdrop-blur-sm">
                                {cluster.title}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">
                            "{cluster.subtitle}"
                        </h1>
                        <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl font-light leading-relaxed">
                            {cluster.hook}
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Sidebar Context */}
                    <aside className="lg:col-span-1 space-y-12">
                        <div>
                            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-4">Context</h3>
                            <p className="text-[var(--text-primary)] leading-relaxed">
                                {cluster.miniDesc}
                            </p>
                        </div>
                    </aside>

                    {/* Project Grid */}
                    <div className="lg:col-span-2 grid gap-8">
                        {cluster.projects.map((project, idx) => (
                            <div key={idx} onClick={() => navigate(project.route)} className="group bg-[var(--bg-card)] border border-[var(--border-color)] p-8 cursor-pointer hover:border-[var(--text-primary)] transition-colors relative overflow-hidden">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                                        <span className="text-xs font-mono text-[var(--text-secondary)] border border-[var(--border-color)] px-2 py-1 rounded bg-[var(--bg-void)]">
                                            {project.tag}
                                        </span>
                                    </div>
                                    <ArrowUpRight className="text-[var(--text-secondary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-sm text-[var(--text-secondary)] border-t border-[var(--border-color)] pt-6">
                                    <div>
                                        <span className="block text-[10px] uppercase tracking-widest mb-1 opacity-70">Problem</span>
                                        <p>{project.details.problem}</p>
                                    </div>
                                    <div>
                                        <span className="block text-[10px] uppercase tracking-widest mb-1 opacity-70">Outcome</span>
                                        <p className="text-[var(--text-primary)]">{project.details.outcome}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CompanyDetail;
