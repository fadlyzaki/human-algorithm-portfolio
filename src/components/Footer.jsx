import React from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import FrequencyVisualizer from './FrequencyVisualizer';

const Footer = () => {
    const { isDark } = useTheme();
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    const themeStyles = {
        '--text-primary': isDark ? '#F3F4F6' : '#111827',
        '--text-secondary': isDark ? '#A1A1AA' : '#6B7280',
        '--bg-footer': 'transparent', // Seamless integration
    };

    return (
        <footer style={themeStyles} className="w-full pt-32 pb-6 px-6 md:px-12 bg-[var(--bg-footer)] text-[var(--text-primary)] font-sans transition-colors duration-500 relative overflow-hidden">

            {/* 0. FREQUENCY VISUALIZER BACKGROUND */}
            <div className="absolute bottom-0 left-0 right-0 z-0 opacity-40 pointer-events-none">
                <FrequencyVisualizer />
            </div>

            <div className="relative z-10">

                {/* 1. MAIN HEADLINE (Editorial Style) */}
                <div className="max-w-7xl mx-auto mb-24">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic leading-tight mb-8">
                        {t('footer.title')} <br />
                        <span className="text-[var(--text-secondary)] not-italic font-light">{t('footer.subtitle')}</span>
                    </h2>

                    <a
                        href="mailto:fadly.uzzaki@gmail.com"
                        className="inline-flex items-center gap-2 text-lg md:text-xl font-mono uppercase tracking-wide border-b border-[var(--text-primary)] pb-1 hover:text-[var(--text-secondary)] hover:border-[var(--text-secondary)] transition-all duration-200 group"
                    >
                        fadly.uzzaki@gmail.com
                        <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>
                </div>

                {/* 2. CLUSTER NAVIGATION */}
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-24 border-t border-[var(--text-secondary)]/20 pt-12">

                    {/* COL 1: SITEMAP */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">{t('footer.index')}</h4>
                        <Link to="/" className="hover:underline text-sm">{t('nav.home')}</Link>
                        <Link to="/#work" className="hover:underline text-sm">{t('nav.work')}</Link>
                        <Link to="/side-projects" className="hover:underline text-sm">{t('nav.side_projects')}</Link>
                        <Link to="/about" className="hover:underline text-sm">{t('nav.about')}</Link>
                        <Link to="/contact" className="hover:underline text-sm">{t('nav.contact')}</Link>
                    </div>

                    {/* COL 2: SOCIALS */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">{t('footer.connect')}</h4>
                        <a href="https://www.linkedin.com/in/fadlyzaki/" target="_blank" rel="noreferrer" className="hover:underline text-sm">LinkedIn</a>
                        <a href="https://www.instagram.com/fadlyzaki" target="_blank" rel="noreferrer" className="hover:underline text-sm">Instagram</a>
                        <a href="https://dribbble.com/fadlyzaki" target="_blank" rel="noreferrer" className="hover:underline text-sm">Dribbble</a>
                        <a href="https://github.com/fadlyzaki/" target="_blank" rel="noreferrer" className="hover:underline text-sm">GitHub</a>
                    </div>

                    {/* COL 3: CONTEXT */}
                    <div className="hidden md:flex flex-col gap-4">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">{t('footer.location')}</h4>
                        <span className="text-[var(--text-secondary)] text-sm">Jakarta, Indonesia</span>
                        <span className="text-[var(--text-secondary)] text-sm">GMT+7 / WIB</span>
                    </div>

                    {/* COL 4: META */}
                    <div className="hidden md:flex flex-col gap-4">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">{t('footer.colophon')}</h4>
                        <span className="text-[var(--text-secondary)] text-sm leading-relaxed whitespace-pre-line">{t('footer.colophon_desc')}</span>
                    </div>

                </div>

                {/* PEAK-END RULE: A satisfying closure action */}
                <div className="max-w-7xl mx-auto mb-16 flex justify-center">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex flex-col items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
                    >
                        <div className="w-px h-12 bg-[var(--text-secondary)]/30 group-hover:bg-[var(--text-primary)] transition-colors duration-300"></div>
                        <span className="font-mono text-[10px] uppercase tracking-widest">{t('footer.return') || 'Return to Surface'}</span>
                    </button>
                </div>

                {/* 3. SIGNATURE */}
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end md:items-center text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                    <div>
                        © {year} Fadly Uzzaki. <span className="opacity-50">{t('footer.rights')}</span>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center gap-2">
                        Human-Algorithm <Heart size={10} className="fill-current" /> v2.5
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
