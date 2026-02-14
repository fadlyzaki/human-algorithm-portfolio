import React, { Suspense } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Box, Maximize2, Cpu, Activity, Share2, MessageSquare, Users, MessageCircle, Layout, ShoppingBag, ShieldCheck, Tag, Truck, Trophy, Scan, GitCommit, Mail, Globe, MapPin, Code, Monitor, Smartphone, Video, Linkedin, BookOpen, Calendar, Shield, Gift, Camera, Heart, AlertTriangle, FileText, ToggleRight, TrendingUp, ScanEye, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import useThemeStyles from '../hooks/useThemeStyles';
import { useLanguage } from '../context/LanguageContext';
import { useHandCursor } from '../context/HandCursorContext';
import { WORK_CLUSTERS } from '../data/portfolioData';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import BackButton from '../components/BackButton';
import ProjectCard from '../components/ProjectCard';
import Treasure from '../components/Treasure';
import ZoomableImage from '../components/ZoomableImage';

// Dynamic Imports for AI Interactions
const WorkforceAI = React.lazy(() => import('../components/interactions/WorkforceAI'));
const CommerceAI = React.lazy(() => import('../components/interactions/CommerceAI'));
const EfficiencyAI = React.lazy(() => import('../components/interactions/EfficiencyAI'));

// --- HELPERS ---
const IconMapper = ({ iconName, ...props }) => {
    const icons = {
        MessageSquare, Users, MessageCircle, Layout, ShoppingBag, ShieldCheck, Tag, Box, Truck, Trophy, Scan, Mail, Globe, MapPin, Code, Monitor, Smartphone, Video, GitCommit, BookOpen, Calendar, Shield, Gift, Camera, Heart, AlertTriangle, FileText, ToggleRight, TrendingUp
    };
    const IconComponent = icons[iconName] || GitCommit;
    return <IconComponent {...props} />;
};

const CompanyDetail = () => {
    const { isDark, setIsDark } = useTheme();
    const { t, language, toggleLanguage } = useLanguage();
    const { isGestureMode, toggleGestureMode } = useHandCursor();
    const { id } = useParams();
    const navigate = useNavigate();

    const cluster = WORK_CLUSTERS.find(c => c.id === id) || WORK_CLUSTERS[0];
    const brandColor = cluster.brandColor || 'var(--accent-blue)';

    const isId = language === 'id';

    // Map ID to Component
    const InteractionComponent = {
        'workforce': WorkforceAI,
        'commerce': CommerceAI,
        'efficiency': EfficiencyAI
    }[cluster.id] || WorkforceAI; // Fallback

    const [showNarrative, setShowNarrative] = React.useState(false);

    const baseThemeStyles = useThemeStyles();
    const themeStyles = {
        ...baseThemeStyles,
        '--brand': brandColor,
    };

    return (
        <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500 selection:bg-[var(--brand)] selection:text-white">
            <SEO
                title={`${cluster.company} — ${cluster.title}`}
                description={isId ? (cluster.hook_id || cluster.hook) : cluster.hook}
                image={cluster.logo}
            />

            {/* BACKGROUND NOISE TEXTURE */}
            <div className={`fixed inset-0 z-0 pointer-events-none opacity-[0.05] ${isDark ? 'mix-blend-overlay' : 'mix-blend-multiply'}`}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            ></div>

            {/* NAVIGATION */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[var(--bg-void)]/80 backdrop-blur-md border-b border-transparent hover:border-[var(--border-color)] transition-all">
                <BackButton to="/" label={t('company.index')} />

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest hidden md:block">
                    {cluster.company} {t('company.case_study')}
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleGestureMode}
                        className={`transition-colors p-1 ${isGestureMode ? 'text-[var(--brand)] animate-pulse' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                        title="Toggle Hand Tracking"
                    >
                        <ScanEye size={16} />
                    </button>
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors p-1"
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] uppercase tracking-widest transition-colors"
                    >
                        <Globe size={14} /> {language}
                    </button>
                </div>
            </nav>

            <main className="relative z-10 w-full">

                {/* 1. IMMERSIVE HERO SECTION */}
                <header className="min-h-screen flex flex-col pt-24 md:pt-32 px-6 lg:px-12 relative overflow-hidden border-b border-[var(--border-color)]">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center flex-grow mb-12">
                        {/* Text Content */}
                        <ScrollReveal>
                            <div className="relative z-20">
                                {/* Company Logo Space */}
                                <div className="mb-6 h-12 flex items-center">
                                    {cluster.logo ? (
                                        <img
                                            src={cluster.logo}
                                            alt={`${cluster.company} Logo`}
                                            className="h-full w-auto object-contain"
                                        />
                                    ) : (
                                        <div className="h-10 w-10 rounded bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center opacity-50 border-dashed">
                                            <span className="text-[8px] font-mono text-[var(--text-secondary)]">LOGO</span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-px w-8 bg-[var(--brand)]"></div>
                                    <span className="text-[var(--brand)] font-mono text-xs uppercase tracking-[0.2em]">
                                        {cluster.company} — {cluster.title}
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif italic mb-8 leading-[0.9] tracking-tight">
                                    {isId ? (cluster.subtitle_id || cluster.subtitle) : cluster.subtitle}
                                </h1>
                                <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-xl font-light leading-relaxed border-l-2 border-[var(--border-color)] pl-6">
                                    {isId ? (cluster.hook_id || cluster.hook) : cluster.hook}
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Interactive AI Visualization */}
                        <ScrollReveal delay={200} className="w-full h-[500px] relative">
                            <Treasure
                                id="company-detail"
                                className="top-4 right-4"
                                type="crown"
                            >
                                KING'S TREASURE!
                            </Treasure>
                            <div className="absolute -inset-4 bg-[var(--brand)] opacity-10 blur-3xl rounded-full"></div>
                            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-2xl bg-black dark:bg-white">
                                <div className="absolute top-4 left-4 z-40 flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                </div>

                                <div className="absolute top-4 right-4 z-40">
                                    <button
                                        onClick={() => setShowNarrative(!showNarrative)}
                                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 font-mono text-[10px] uppercase tracking-widest ${showNarrative ? 'bg-[var(--brand)] text-white border-[var(--brand)]' : 'bg-black/50 text-white/70 border-white/20 hover:border-white/40'}`}
                                    >
                                        {showNarrative ? <Cpu size={12} /> : <Scan size={12} />}
                                        {showNarrative ? 'System_View' : 'Human_Narrative'}
                                    </button>
                                </div>

                                <Suspense fallback={<div className="flex items-center justify-center h-full text-[var(--brand)] animate-pulse">LOADING_SIMULATION...</div>}>
                                    <div className={`relative h-full w-full transition-all duration-700 ${showNarrative ? 'blur-xl scale-110 opacity-30 px-12' : 'blur-0 scale-100 opacity-100'}`}>
                                        <InteractionComponent color={brandColor} />
                                    </div>

                                    {showNarrative && (
                                        <div className="absolute inset-0 z-30 flex items-center justify-center p-8 md:p-12 animate-in fade-in zoom-in duration-500 overflow-y-auto">
                                            <div className="max-w-md bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-3xl">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="w-8 h-px bg-[var(--brand)]"></div>
                                                    <span className="font-mono text-[10px] text-[var(--brand)] uppercase tracking-[0.3em]">The_Motivation</span>
                                                </div>
                                                <p className="text-lg md:text-xl font-serif italic text-white leading-relaxed mb-6">
                                                    "{isId ? (cluster.motivation_id || cluster.motivation) : cluster.motivation}"
                                                </p>
                                                <div className="flex items-center gap-4 text-[10px] font-mono text-white/40 uppercase tracking-widest">
                                                    <span>LOG_SOURCE: INTERNAL_MEMO</span>
                                                    <span>STATUS: DECLASSIFIED</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Suspense>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Stats Bar */}
                    <div className="border-t border-[var(--border-color)] relative">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent opacity-30"></div>
                        <div className="py-6 grid grid-cols-3 md:grid-cols-5 gap-y-5 gap-x-6">
                            {(cluster.stats || [
                                { label: 'Role', value: 'Lead Product Designer' },
                                { label: 'Timeline', value: '2020 - 2023' },
                                { label: 'Impact', value: 'Workforce Accessibility' },
                                { label: 'Platform', value: 'Mobile Apps & Website' }
                            ]).map((stat, i, arr) => {
                                const labelMap = {
                                    'Role': t('company.role'),
                                    'Teams': t('company.teams') || 'Teams',
                                    'Timeline': t('company.period'),
                                    'Impact': t('company.impact'),
                                    'Platform': t('company.platform')
                                };
                                return (
                                    <div key={i} className={`flex flex-col ${i > 0 ? 'md:border-l md:border-[var(--border-color)] md:pl-6' : ''}`}>
                                        <span className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest mb-1.5">{labelMap[stat.label] || stat.label}</span>
                                        <span className="font-medium text-sm text-[var(--text-primary)]">{stat.value}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </header>

                {/* 2. SPLIT SCROLL LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24 max-w-7xl mx-auto px-6 py-24">

                    {/* Sticky Sidebar: Context */}
                    <aside className="hidden lg:block h-full">
                        <div className="sticky top-32 space-y-12">
                            <div>
                                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                                    <Activity size={14} /> {t('company.context_title')}
                                </h3>
                                <p className="text-[var(--text-primary)] text-sm leading-relaxed opacity-80">
                                    {isId ?
                                        ((cluster.miniDesc_id || cluster.miniDesc) || "This ecosystem required a shift from manual boolean logic to fuzzy, human-centric algorithms.") :
                                        (cluster.miniDesc || "This ecosystem required a shift from manual boolean logic to fuzzy, human-centric algorithms.")
                                    }
                                </p>
                            </div>

                            <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg">
                                <div className="text-[var(--brand)] mb-4">
                                    <IconMapper iconName={cluster.companyFocus?.icon || 'Cpu'} size={24} />
                                </div>
                                <h4 className="font-serif italic text-lg mb-2">
                                    {isId ? (cluster.companyFocus_id?.title || cluster.companyFocus?.title || t('company.tech_core')) : (cluster.companyFocus?.title || t('company.tech_core'))}
                                </h4>
                                <ul className="space-y-2">
                                    {(isId ? (cluster.companyFocus_id?.items || cluster.companyFocus?.items || ['React Ecosystem', 'Node.js', 'Python Data Science']) : (cluster.companyFocus?.items || ['React Ecosystem', 'Node.js', 'Python Data Science'])).map((t, i) => (
                                        <li key={i} className="text-xs font-mono text-[var(--text-secondary)] flex items-center gap-2">
                                            <span className="w-1 h-1 bg-[var(--text-primary)] rounded-full"></span> {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Designer's Log / Motivation */}
                            <div className="relative p-6 pt-10 border border-[var(--border-color)] rounded-lg bg-[var(--bg-card)] overflow-hidden group">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--brand)] opacity-50 group-hover:h-full group-hover:opacity-[0.03] transition-all duration-500"></div>
                                <div className="absolute top-3 left-4 font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--text-secondary)] flex items-center gap-2">
                                    <Scan size={10} className="text-[var(--brand)]" /> Designer's_Log // {id}
                                </div>

                                <blockquote className="relative">
                                    <span className="absolute -top-4 -left-2 text-4xl text-[var(--brand)] opacity-20 font-serif">"</span>
                                    <p className="text-sm font-serif italic leading-relaxed text-[var(--text-primary)] relative z-10">
                                        {isId ? (cluster.motivation_id || cluster.motivation) : cluster.motivation}
                                    </p>
                                    <footer className="mt-4 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-mono text-[var(--brand)] uppercase tracking-wider">FADLY_ZAKI</span>
                                            <span className="text-[8px] font-mono text-[var(--text-secondary)] opacity-60">LEAD_PRODUCT_DESIGNER</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full border border-[var(--border-color)] p-1 bg-[var(--bg-void)]">
                                            <img src="/about-portrait-new.jpg" alt="Author" className="w-full h-full object-cover rounded-full grayscale" />
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>

                            {/* LinkedIn Link */}
                            {cluster.linkedinUrl && (
                                <a
                                    href={cluster.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 p-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg hover:border-[var(--brand)] hover:bg-[var(--brand)]/5 transition-all duration-300 group"
                                >
                                    <Linkedin size={18} className="text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors" />
                                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors">{t('company.company_page')}</span>
                                    <ArrowUpRight size={14} className="text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors" />
                                </a>
                            )}
                        </div>
                    </aside>

                    {/* Main Content: Projects List */}
                    <div className="space-y-24">
                        {cluster.projects.map((project, idx) => (
                            <ScrollReveal key={idx} delay={idx * 100}>
                                <div
                                    onClick={() => navigate(project.route)}
                                    className="group bg-[var(--bg-card)] border border-[var(--border-color)] cursor-pointer hover:border-[var(--brand)] transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-2xl rounded-2xl flex flex-col"
                                >
                                    {/* 1. UI PREVIEW (Top, Full Bleed) */}
                                    <div className="h-64 w-full overflow-hidden relative border-b border-[var(--border-color)] bg-black dark:bg-white">
                                        <div className="absolute inset-0 bg-[var(--brand)] mix-blend-overlay opacity-0 group-hover:opacity-10 transition-opacity z-10 pointer-events-none"></div>

                                        {/* Abstract UI Component */}
                                        <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out">
                                            <ProjectCard type={project.type} id={project.id} />
                                        </div>

                                        {/* Overlay Pattern */}
                                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20 pointer-events-none"></div>

                                        {/* Floating Badge */}
                                        <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-2">
                                            {/* WIP Label */}
                                            {(!['stoqo-logistics', 'stoqo-sales'].includes(project.id)) && (
                                                <div className="bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 px-3 py-1.5 rounded-full border border-amber-200 dark:border-amber-700/50 text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm backdrop-blur-md">
                                                    WORK IN PROGRESS
                                                </div>
                                            )}
                                            {/* Project Type Badge */}
                                            <div className="flex items-center gap-2 bg-white dark:bg-black text-black dark:text-white px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-[11px] font-mono uppercase tracking-widest shadow-lg">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] animate-pulse"></div>
                                                {project.type}
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2. TEXT CONTENT (Padded) */}
                                    <div className="p-8 flex flex-col gap-6">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 border border-[var(--border-color)] bg-[var(--bg-void)] group-hover:border-[var(--brand)] transition-all rounded-xl shadow-inner group-hover:shadow-[0_0_15px_var(--brand)]/20">
                                                    <IconMapper iconName={project.iconName} size={24} className="text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors" />
                                                </div>
                                                <h3 className="text-3xl font-serif italic group-hover:text-[var(--brand)] transition-colors">
                                                    {isId ? (project.title_id || project.title) : project.title}
                                                </h3>
                                            </div>
                                            <div className="hidden md:flex items-center gap-2 text-[var(--brand)] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                                                <span className="text-xs font-mono uppercase tracking-widest">{t('company.view_case')}</span>
                                                <ArrowUpRight size={16} />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[var(--border-color)] pt-6">
                                            <div className="space-y-2">
                                                <span className="font-mono text-[11px] text-[var(--text-primary)] uppercase tracking-widest flex items-center gap-2">
                                                    <span className="w-1 h-1 bg-red-400 rounded-full"></span> {t('company.problem')}
                                                </span>
                                                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                                                    {isId ? (project.details_id?.problem || project.details.problem) : project.details.problem}
                                                </p>
                                            </div>
                                            <div className="space-y-2">
                                                <span className="font-mono text-[11px] text-[var(--text-primary)] uppercase tracking-widest flex items-center gap-2">
                                                    <span className="w-1 h-1 bg-[var(--brand)] rounded-full"></span> {t('company.fix')}
                                                </span>
                                                <p className="text-sm font-medium text-[var(--text-primary)]">
                                                    {isId ? (project.details_id?.outcome || project.details.outcome) : project.details.outcome}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                </div>

                {/* 3. CULTURE GALLERY (Dynamic) */}
                {cluster.culture && (
                    <section className="py-24 border-t border-[var(--border-color)] relative">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent opacity-30"></div>

                        <div className="max-w-7xl mx-auto px-6">
                            <ScrollReveal>
                                <div className="mb-12 max-w-4xl">
                                    <h3 className="font-serif italic text-4xl mb-4">{isId ? (cluster.culture_id?.title || cluster.culture.title) : cluster.culture.title}</h3>
                                    <p className="text-[var(--text-secondary)] leading-relaxed">
                                        {isId ? (cluster.culture_id?.description || cluster.culture.description) : cluster.culture.description}
                                    </p>
                                    {(isId ? (cluster.culture_id?.disclaimer || cluster.culture.disclaimer) : cluster.culture.disclaimer) && (
                                        <p className="text-xs text-[var(--text-secondary)] opacity-60 mt-3 italic">
                                            ✉ {isId ? (cluster.culture_id?.disclaimer || cluster.culture.disclaimer) : cluster.culture.disclaimer}
                                        </p>
                                    )}
                                </div>
                            </ScrollReveal>

                            {cluster.culture.layout === 'masonry' ? (
                                <div className="columns-1 md:columns-3 gap-4 space-y-4">
                                    {cluster.culture.images.map((img, i) => (
                                        <ScrollReveal key={i} delay={i * 80} className="break-inside-avoid relative group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]">
                                            <ZoomableImage
                                                src={img.src}
                                                alt={img.caption}
                                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                                <div className="absolute bottom-4 left-4">
                                                    <span className="text-xs font-mono text-white/90 uppercase tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10">
                                                        {img.caption}
                                                    </span>
                                                </div>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
                                    {cluster.culture.images.map((img, i) => (
                                        <ScrollReveal key={i} delay={i * 100} className={`relative group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] ${img.span || 'col-span-1'}`}>
                                            <ZoomableImage
                                                src={img.src}
                                                alt={img.caption}
                                                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 ${img.pos || 'object-top'}`}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                                <div className="absolute bottom-4 left-4">
                                                    <span className="text-xs font-mono text-white/90 uppercase tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10">
                                                        {img.caption}
                                                    </span>
                                                </div>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                )}

            </main>
            <Footer />
        </div>
    );
};

export default CompanyDetail;
