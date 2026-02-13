import React from 'react';
import {
    Search, Lightbulb, PenTool, Rocket, BarChart,
    ArrowRight, ArrowLeft, ScanEye, Sun, Moon, Globe
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

const DesignProcess = () => {
    const { isDark, setIsDark } = useTheme();
    const themeStyles = useThemeStyles();
    const { t, language, toggleLanguage } = useLanguage();
    const { isGestureMode, toggleGestureMode } = useHandCursor();

    const steps = [
        {
            id: 1,
            key: 'research',
            icon: Search,
            color: 'text-[var(--accent-blue)]',
            borderColor: 'border-[var(--accent-blue)]'
        },
        {
            id: 2,
            key: 'insight',
            icon: Lightbulb,
            color: 'text-[var(--accent-amber)]',
            borderColor: 'border-[var(--accent-amber)]'
        },
        {
            id: 3,
            key: 'design',
            icon: PenTool,
            color: 'text-[var(--accent-purple)]',
            borderColor: 'border-[var(--accent-purple)]'
        },
        {
            id: 4,
            key: 'ship',
            icon: Rocket,
            color: 'text-[var(--accent-green)]',
            borderColor: 'border-[var(--accent-green)]'
        },
        {
            id: 5,
            key: 'measure',
            icon: BarChart,
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
                title="Design Process"
                description="My end-to-end design process: From research to measurement."
            />

            {/* 1. TEXTURE & LIGHTING */}
            <div className={`fixed inset-0 z-0 pointer-events-none opacity-[0.15] ${isDark ? 'mix-blend-overlay' : 'mix-blend-multiply'}`}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            ></div>
            <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`}
                style={{ background: 'radial-gradient(circle at 30% 20%, rgba(50,50,50,0.4), rgba(17,17,17,1) 80%)' }}>
            </div>
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
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

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-sm uppercase tracking-widest text-[var(--text-secondary)] hidden md:block">
                        {t('nav.process')}
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleGestureMode}
                            className={`transition-colors ${isGestureMode ? 'text-[var(--accent-red)] animate-pulse' : 'text-[var(--text-secondary)] hover:text-[var(--accent-blue)]'}`}
                            title="Toggle Hand Tracking"
                        >
                            <ScanEye size={18} />
                        </button>
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                            title="Switch Language"
                        >
                            <Globe size={18} />
                            <span className="font-mono text-xs uppercase tracking-widest">{language}</span>
                        </button>
                    </div>
                </header>
            </div>

            {/* MAIN CONTENT */}
            <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20 border-x border-[var(--border-color)] min-h-screen bg-[var(--bg-void)]/80 backdrop-blur-sm shadow-2xl">
                <div className="h-24 md:h-32"></div>

                {/* HERO */}
                <section className="mb-24 fade-in">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-6xl font-mono text-[var(--text-primary)] uppercase leading-[1.1] mb-6 tracking-tight">
                            {t('process.title')}
                        </h1>
                        <h2 className="text-xl md:text-2xl text-[var(--accent-blue)] font-serif italic mb-8">
                            {t('process.subtitle')}
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] max-w-2xl font-light leading-relaxed">
                            {t('process.description')}
                        </p>
                    </ScrollReveal>
                </section>

                {/* PROCESS STEPS */}
                <section className="space-y-24 mb-32">
                    {steps.map((step, index) => {
                        const stepTitle = t(`process.steps.${step.key}.title`) || step.key;
                        const stepDesc = t(`process.steps.${step.key}.desc`) || '';
                        const stepNum = index + 1;

                        return (
                            <ScrollReveal key={step.id} delay={index * 100}>
                                <div className="group relative pl-4 md:pl-0">
                                    {/* Connecting Line (except for last item) */}
                                    {index !== steps.length - 1 && (
                                        <div className="absolute left-[24px] md:left-[32px] top-[60px] md:top-[80px] bottom-[-96px] w-px bg-gradient-to-b from-[var(--border-color)] to-transparent group-hover:from-[var(--text-primary)] transition-colors duration-500 hidden md:block"></div>
                                    )}

                                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                                        {/* Icon Node */}
                                        <div className="relative shrink-0 flex items-start">
                                            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--bg-card)] border-2 ${step.borderColor} flex items-center justify-center z-10 relative shadow-[0_0_20px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-300`}>
                                                <step.icon size={24} className={step.color} />
                                            </div>
                                            <div className={`absolute inset-0 rounded-full ${step.color} opacity-20 blur-md group-hover:opacity-40 transition-opacity`}></div>
                                        </div>

                                        {/* Content */}
                                        <div className="pt-2">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`font-mono text-xs uppercase tracking-widest ${step.color} opacity-80`}>
                                                    Step 0{stepNum}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 group-hover:translate-x-1 transition-transform">
                                                {stepTitle}
                                            </h3>
                                            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-light max-w-xl group-hover:text-[var(--text-primary)] transition-colors">
                                                {stepDesc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </section>

                {/* CTA */}
                <section className="mb-20">
                    <ScrollReveal>
                        <div className="p-8 md:p-12 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl text-center group hover:border-[var(--accent-blue)] transition-all relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-blue)]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                            <h3 className="text-2xl font-serif italic text-[var(--text-primary)] mb-4 relative z-10">
                                {t('process.cta_title')}
                            </h3>
                            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto relative z-10">
                                {t('process.cta_desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                                <a href="/#work" className="px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-void)] font-mono text-sm uppercase tracking-wider rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform">
                                    {t('nav.work')} <ArrowRight size={16} />
                                </a>
                                <a href="mailto:fadly.uzzaki@gmail.com" className="px-6 py-3 border border-[var(--border-color)] text-[var(--text-primary)] font-mono text-sm uppercase tracking-wider rounded hover:bg-[var(--bg-surface)] transition-colors flex items-center justify-center">
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
