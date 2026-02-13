import React, { useRef } from 'react';
import {
    Search, Lightbulb, PenTool, Rocket, BarChart,
    ArrowRight, ArrowLeft, ScanEye, Sun, Moon, Globe,
    ChevronDown, GitBranch, Cpu, Database, Network
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import useThemeStyles from '../hooks/useThemeStyles';
import { useLanguage } from '../context/LanguageContext';
import { useHandCursor } from '../context/HandCursorContext';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import ScrollProgressBar from '../components/ScrollProgressBar';
import AiryDiagram from '../components/AiryDiagram';

const DesignProcess = () => {
    const { isDark, setIsDark } = useTheme();
    const themeStyles = useThemeStyles();
    const { t, language, toggleLanguage } = useLanguage();
    const { isGestureMode, toggleGestureMode } = useHandCursor();

    const steps = [
        {
            id: 1,
            key: 'research',
            airyType: 'radar',
            methods: ['User Interviews', 'Data Mining', 'Competitor Analysis', 'Heuristic Eval'],
            color: 'text-[var(--accent-blue)]',
            borderColor: 'border-[var(--accent-blue)]'
        },
        {
            id: 2,
            key: 'insight',
            airyType: 'venn',
            methods: ['Synthesis', 'Problem Definition', 'How Might We', 'Journey Mapping'],
            color: 'text-[var(--accent-amber)]',
            borderColor: 'border-[var(--accent-amber)]'
        },
        {
            id: 3,
            key: 'design',
            airyType: 'architecture',
            methods: ['Wireframing', 'Prototyping', 'Design Systems', 'UI Craft'],
            color: 'text-[var(--accent-purple)]',
            borderColor: 'border-[var(--accent-purple)]'
        },
        {
            id: 4,
            key: 'ship',
            airyType: 'flow',
            methods: ['Hand-off', 'QA Tuning', 'Documentation', 'Release Strategy'],
            color: 'text-[var(--accent-green)]',
            borderColor: 'border-[var(--accent-green)]'
        },
        {
            id: 5,
            key: 'measure',
            airyType: 'chart',
            methods: ['Analytics', 'A/B Testing', 'Feedback Loops', 'Iteration'],
            color: 'text-[var(--accent-red)]',
            borderColor: 'border-[var(--accent-red)]'
        }
    ];

    return (
        <div
            style={themeStyles}
            className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-blue)] selection:text-[#F4F4F5] transition-colors duration-500 overflow-x-hidden"
        >
            <SEO
                title="The Human Algorithm | Process"
                description="My recursive design system: Input -> Process -> Output -> Feedback."
            />

            {/* 1. TEXTURE & LIGHTING */}
            <div className={`fixed inset-0 z-0 pointer-events-none opacity-[0.15] ${isDark ? 'mix-blend-overlay' : 'mix-blend-multiply'}`}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            ></div>
            <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`}
                style={{ background: 'radial-gradient(circle at 50% 10%, rgba(50,50,50,0.4), rgba(17,17,17,1) 80%)' }}>
            </div>
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(${isDark ? '#A1A1AA' : '#000000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#A1A1AA' : '#000000'} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <ScrollProgressBar />

            {/* HEADER */}
            <div className="fixed top-0 left-0 w-full z-50">
                <header className="relative flex justify-between items-center px-6 py-6 bg-[var(--bg-void)]/95 backdrop-blur border-b border-[var(--border-color)]">
                    <BackButton to="/" label={t('nav.home') || 'Home'} />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] hidden md:block opacity-70">
                        // SYSTEM_OVERVIEW
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={toggleGestureMode} className={`transition-colors ${isGestureMode ? 'text-[var(--accent-red)] animate-pulse' : 'text-[var(--text-secondary)] hover:text-[var(--accent-blue)]'}`}>
                            <ScanEye size={18} />
                        </button>
                        <button onClick={() => setIsDark(!isDark)} className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors">
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button onClick={toggleLanguage} className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            <Globe size={18} />
                            <span className="font-mono text-xs uppercase tracking-widest">{language}</span>
                        </button>
                    </div>
                </header>
            </div>

            {/* MAIN CONTENT */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 min-h-screen">
                <div className="h-24 md:h-32"></div>

                {/* HERO */}
                <section className="mb-32 md:mb-48 text-center fade-in relative">
                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand)] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

                    <ScrollReveal>
                        <div className="inline-block px-3 py-1 mb-6 border border-[var(--border-color)] rounded-full bg-[var(--bg-card)]/50 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-green)]"></span>
                                </span>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">Algorithm Active</span>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-[var(--text-primary)] uppercase leading-[0.9] mb-8 tracking-tighter">
                            The Human<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] opacity-50">Algorithm</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto font-light leading-relaxed mb-12">
                            {t('process.description') || "Architecture of a recursive design loop."}
                        </p>

                        <ChevronDown className="mx-auto text-[var(--text-secondary)] animate-bounce" size={32} />
                    </ScrollReveal>
                </section>

                {/* PROCESS STEPS - ZIG ZAG / SYSTEM LAYOUT */}
                <section className="relative space-y-0 mb-32">
                    {/* Central Connecting Line (Desktop) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border-color)] -translate-x-1/2 hidden md:block z-0 opacity-30"></div>

                    {steps.map((step, index) => {
                        const stepTitle = t(`process.steps.${step.key}.title`) || step.key;
                        const stepDesc = t(`process.steps.${step.key}.desc`) || '';
                        const isEven = index % 2 === 0;

                        return (
                            <div key={step.id} className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-0 py-16 md:py-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                {/* Content Side */}
                                <div className={`w-full md:w-1/2 relative z-10 ${isEven ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'} text-center md:text-left`}>
                                    <ScrollReveal delay={100} direction={isEven ? 'right' : 'left'}>
                                        <div className={`inline-flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} items-center`}>
                                            <div className="flex items-center gap-4 mb-4 opacity-70">
                                                <span className={`font-mono text-sm uppercase tracking-widest ${step.color}`}>0{index + 1}</span>
                                                <div className={`h-px w-12 bg-current ${step.color}`}></div>
                                                <span className={`font-mono text-sm uppercase tracking-widest ${step.color}`}>// {step.key}</span>
                                            </div>

                                            <h3 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-serif italic">
                                                {stepTitle}
                                            </h3>
                                            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-light mb-8 max-w-md">
                                                {stepDesc}
                                            </p>

                                            {/* Methodology Tags */}
                                            <div className={`flex flex-wrap gap-2 max-w-sm ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                                                {step.methods.map((method, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] text-[10px] uppercase tracking-wider font-mono rounded hover:border-[var(--text-primary)] transition-colors cursor-default">
                                                        {method}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </div>

                                {/* Center Node (Desktop) */}
                                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--bg-void)] border-2 border-[var(--text-secondary)] z-20 items-center justify-center">
                                    <div className={`w-2 h-2 rounded-full ${step.color.replace('text-', 'bg-')}`}></div>
                                </div>

                                {/* Visual Side */}
                                <div className="w-full md:w-1/2 px-6 md:px-12 relative z-10">
                                    <ScrollReveal delay={300}>
                                        <div className={`relative aspect-square md:aspect-[4/3] bg-[var(--bg-card)]/30 border border-[var(--border-color)] rounded-xl overflow-hidden group hover:border-[var(--text-primary)] transition-colors duration-500`}>
                                            {/* Technical HUD Overlay */}
                                            <div className="absolute top-4 left-4 right-4 flex justify-between z-20 pointer-events-none">
                                                <Cpu size={14} className="text-[var(--text-secondary)] opacity-50" />
                                                <span className="font-mono text-[9px] text-[var(--text-secondary)] opacity-50">{step.airyType.toUpperCase()}_MODULE_V.{index + 1}.0</span>
                                            </div>

                                            {/* The Airy Diagram */}
                                            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                                                <AiryDiagram type={step.airyType} />
                                            </div>

                                            {/* Hover Glow */}
                                            <div className={`absolute inset-0 bg-gradient-to-tr ${step.color.replace('text-', 'from-')}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            </div>
                        );
                    })}
                </section>

                {/* RECURSIVE LOOP CONNECTOR */}
                <section className="mb-32 text-center relative max-w-4xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="border border-dashed border-[var(--border-color)] rounded-3xl p-12 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[var(--bg-card)]/20"></div>

                            <GitBranch className="mx-auto text-[var(--text-secondary)] mb-6 opacity-50" size={48} />
                            <h3 className="text-2xl font-mono text-[var(--text-primary)] mb-4 uppercase tracking-widest">
                                Recursion Point
                            </h3>
                            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto md:text-lg">
                                Design is never done. The output of "Measure" becomes the input for the next cycle of "Research".
                            </p>

                            <div className="flex justify-center">
                                <div className="h-16 w-px bg-gradient-to-b from-[var(--text-secondary)] to-transparent opacity-30"></div>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>

                {/* CTA */}
                <section className="mb-20">
                    <ScrollReveal>
                        <div className="p-8 md:p-16 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl text-center group hover:border-[var(--accent-blue)] transition-all relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-blue)] via-[var(--accent-purple)] to-[var(--accent-red)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <h3 className="text-3xl md:text-5xl font-serif italic text-[var(--text-primary)] mb-6 relative z-10">
                                {t('process.cta_title') || "Make it real."}
                            </h3>
                            <p className="text-[var(--text-secondary)] mb-10 max-w-lg mx-auto relative z-10 text-lg">
                                {t('process.cta_desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                                <a href="/#work" className="px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-void)] font-mono text-sm uppercase tracking-wider rounded hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl">
                                    {t('nav.work')} <ArrowRight size={16} />
                                </a>
                                <a href="mailto:fadly.uzzaki@gmail.com" className="px-8 py-4 border border-[var(--border-color)] text-[var(--text-primary)] font-mono text-sm uppercase tracking-wider rounded hover:bg-[var(--bg-surface)] transition-colors flex items-center justify-center">
                                    {t('nav.contact')}
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>

                <section>
                    <Footer />
                </section>

            </main>
        </div>
    );
};

export default DesignProcess;
