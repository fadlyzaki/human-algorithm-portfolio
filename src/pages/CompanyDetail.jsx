import React, { Suspense } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Box, Maximize2, Cpu, Activity, Share2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { WORK_CLUSTERS } from '../data/portfolioData';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

// Dynamic Imports for AI Interactions
const WorkforceAI = React.lazy(() => import('../components/interactions/WorkforceAI'));
const CommerceAI = React.lazy(() => import('../components/interactions/CommerceAI'));
const EfficiencyAI = React.lazy(() => import('../components/interactions/EfficiencyAI'));

const CompanyDetail = () => {
    const { isDark } = useTheme();
    const { id } = useParams();
    const navigate = useNavigate();

    const cluster = WORK_CLUSTERS.find(c => c.id === id) || WORK_CLUSTERS[0];
    const brandColor = cluster.brandColor || 'var(--accent-blue)';

    // Map ID to Component
    const InteractionComponent = {
        'workforce': WorkforceAI,
        'commerce': CommerceAI,
        'efficiency': EfficiencyAI
    }[cluster.id] || WorkforceAI; // Fallback

    const themeStyles = {
        '--bg-void': isDark ? '#0a0a0a' : '#FFFFFF',
        '--text-primary': isDark ? '#F3F4F6' : '#111827',
        '--text-secondary': isDark ? '#A1A1AA' : '#6B7280',
        '--border-color': isDark ? '#262626' : '#E5E7EB',
        '--bg-card': isDark ? '#111' : '#F9FAFB',
        '--brand': brandColor,
    };

    return (
        <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500 selection:bg-[var(--brand)] selection:text-white">

            {/* BACKGROUND NOISE TEXTURE */}
            <div className={`fixed inset-0 z-0 pointer-events-none opacity-[0.05] ${isDark ? 'mix-blend-overlay' : 'mix-blend-multiply'}`}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            ></div>

            {/* NAVIGATION */}
            <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-sm border-b border-transparent hover:border-[var(--border-color)] transition-all">
                <Link to="/" className="text-xs font-mono uppercase tracking-widest hover:text-[var(--brand)] transition-colors flex items-center gap-2 group">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Index
                </Link>
                <div className="font-mono text-xs text-[var(--text-secondary)]">Case Study: {cluster.id.toUpperCase()}</div>
            </nav>

            <main className="relative z-10 w-full">

                {/* 1. IMMERSIVE HERO SECTION */}
                <header className="min-h-screen flex flex-col pt-32 px-6 lg:px-12 relative overflow-hidden border-b border-[var(--border-color)]">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center flex-grow mb-12">
                        {/* Text Content */}
                        <ScrollReveal>
                            <div className="relative z-20">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-px w-8 bg-[var(--brand)]"></div>
                                    <span className="text-[var(--brand)] font-mono text-xs uppercase tracking-[0.2em]">
                                        {cluster.title}
                                    </span>
                                </div>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic mb-8 leading-[0.9] tracking-tight">
                                    {cluster.subtitle}
                                </h1>
                                <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-xl font-light leading-relaxed border-l-2 border-[var(--border-color)] pl-6">
                                    {cluster.hook}
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Interactive AI Visualization */}
                        <ScrollReveal delay={200} className="w-full h-[500px] relative">
                            <div className="absolute -inset-4 bg-[var(--brand)] opacity-10 blur-3xl rounded-full"></div>
                            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-2xl bg-[var(--bg-card)]">
                                <div className="absolute top-4 left-4 z-10 flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                </div>
                                <Suspense fallback={<div className="flex items-center justify-center h-full text-[var(--brand)] animate-pulse">LOADING_SIMULATION...</div>}>
                                    <InteractionComponent color={brandColor} />
                                </Suspense>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Stats Ticker */}
                    <div className="border-t border-[var(--border-color)] py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Role', value: 'Lead Product Designer' },
                            { label: 'Timeline', value: '2020 - 2023' },
                            { label: 'Impact', value: 'Scale & Reliability' },
                            { label: 'System', value: 'AI-Driven' }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest mb-1">{stat.label}</span>
                                <span className="font-medium text-sm md:text-base">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </header>

                {/* 2. SPLIT SCROLL LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24 max-w-7xl mx-auto px-6 py-24">

                    {/* Sticky Sidebar: Context */}
                    <aside className="hidden lg:block h-full">
                        <div className="sticky top-32 space-y-12">
                            <div>
                                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                                    <Activity size={14} /> System Context
                                </h3>
                                <p className="text-[var(--text-primary)] text-sm leading-relaxed opacity-80">
                                    {cluster.miniDesc || "This ecosystem required a shift from manual boolean logic to fuzzy, human-centric algorithms."}
                                </p>
                            </div>

                            <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg">
                                <Cpu size={24} className="text-[var(--brand)] mb-4" />
                                <h4 className="font-serif italic text-lg mb-2">Technological Core</h4>
                                <ul className="space-y-2">
                                    {['React Ecosystem', 'Node.js', 'Python Data Science'].map((t, i) => (
                                        <li key={i} className="text-xs font-mono text-[var(--text-secondary)] flex items-center gap-2">
                                            <span className="w-1 h-1 bg-[var(--text-primary)] rounded-full"></span> {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content: Projects List */}
                    <div className="space-y-24">
                        {cluster.projects.map((project, idx) => (
                            <ScrollReveal key={idx} delay={idx * 100}>
                                <div
                                    onClick={() => navigate(project.route)}
                                    className="group cursor-pointer"
                                >
                                    <h3 className="text-3xl md:text-4xl font-serif italic mb-6 group-hover:text-[var(--brand)] transition-colors inline-block">
                                        {project.title}
                                    </h3>

                                    <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8 border border-[var(--border-color)]">
                                        {/* Overlay */}
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>

                                        <img
                                            src={project.previewImage}
                                            alt={project.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        />

                                        {/* Action Button */}
                                        <div className="absolute bottom-6 right-6 z-20">
                                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-xs font-mono uppercase tracking-widest group-hover:bg-[var(--brand)] group-hover:border-[var(--brand)] transition-all">
                                                Based on True Story <ArrowUpRight size={14} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[var(--border-color)] pt-6">
                                        <div>
                                            <span className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest block mb-2">The Challenge</span>
                                            <p className="text-sm leading-relaxed opacity-80">{project.details.problem}</p>
                                        </div>
                                        <div>
                                            <span className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest block mb-2">The Algorithmic Fix</span>
                                            <p className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--brand)] transition-colors">{project.details.outcome}</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                </div>

            </main>
            <Footer />
        </div>
    );
};

export default CompanyDetail;
