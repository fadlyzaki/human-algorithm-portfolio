import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import FrequencyVisualizer from './FrequencyVisualizer';
import { SYSTEM_CONFIG } from '../config/constants';

/**
 * FooterTooltipLink — A link with a contextual tooltip that animates in on hover.
 * Inspired by footer-tooltip.learnframer.site
 */
const FooterTooltipLink = ({ to, href, children, tooltip, external = false }) => {
    const [show, setShow] = useState(false);
    const timeoutRef = useRef(null);

    const handleEnter = () => {
        clearTimeout(timeoutRef.current);
        setShow(true);
    };

    const handleLeave = () => {
        timeoutRef.current = setTimeout(() => setShow(false), 150);
    };

    useEffect(() => () => clearTimeout(timeoutRef.current), []);

    const linkClass = "relative group text-sm hover:text-[var(--text-primary)] transition-colors duration-200";

    const tooltipEl = (
        <span
            className={`absolute left-0 bottom-full mb-2 px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap
                bg-[var(--text-primary)] text-[var(--bg-footer)]
                shadow-lg shadow-black/20
                transition-all duration-200 ease-out pointer-events-none z-50
                ${show
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-2 scale-95'
                }`}
        >
            {tooltip}
            {/* Arrow */}
            <span className="absolute left-4 top-full w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[var(--text-primary)]" />
        </span>
    );

    if (external || href) {
        return (
            <a
                href={href || to}
                target="_blank"
                rel="noreferrer"
                className={linkClass}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            >
                {tooltipEl}
                {children}
            </a>
        );
    }

    return (
        <Link
            to={to}
            className={linkClass}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            {tooltipEl}
            {children}
        </Link>
    );
};

const Footer = () => {
    const { isDark } = useTheme();
    const { t } = useLanguage();
    const year = new Date().getFullYear();
    const footerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!footerRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        observer.observe(footerRef.current);
        return () => observer.disconnect();
    }, []);

    const themeStyles = {
        '--text-primary': isDark ? '#F3F4F6' : '#111827',
        '--text-secondary': isDark ? '#A1A1AA' : '#6B7280',
        '--bg-footer': isDark ? '#09090b' : '#fafafa',
    };

    return (
        <>
            {/* Content-end curtain: this div creates the visual "edge" of the main page */}
            <div
                className="relative z-10 h-20 -mb-1 pointer-events-none"
                style={{
                    background: `linear-gradient(to bottom, transparent, ${isDark ? '#09090b' : '#fafafa'})`,
                    borderRadius: '0 0 24px 24px',
                }}
            />

            <footer
                ref={footerRef}
                style={themeStyles}
                className="sticky bottom-0 z-0 w-full pt-32 pb-6 px-6 md:px-12 bg-[var(--bg-footer)] text-[var(--text-primary)] font-sans transition-colors duration-500 overflow-hidden"
            >

                {/* 0. FREQUENCY VISUALIZER BACKGROUND */}
                <div className="absolute bottom-0 left-0 right-0 z-0 opacity-40 pointer-events-none">
                    <FrequencyVisualizer />
                </div>

                <div className={`relative z-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                    {/* 1. MAIN HEADLINE (Editorial Style) */}
                    <div className="max-w-7xl mx-auto mb-24">
                        <h2 className={`text-4xl md:text-6xl lg:text-7xl font-serif italic leading-tight mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                            {t('footer.title')} <br />
                            <span className="text-[var(--text-secondary)] not-italic font-light">{t('footer.subtitle')}</span>
                        </h2>

                        <a
                            href="mailto:fadly.uzzaki@gmail.com"
                            className={`inline-flex items-center gap-2 text-lg md:text-xl font-mono uppercase tracking-wide border-b border-[var(--text-primary)] pb-1 hover:text-[var(--text-secondary)] hover:border-[var(--text-secondary)] transition-all duration-300 group delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        >
                            fadly.uzzaki@gmail.com
                            <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>
                    </div>

                    {/* 2. CLUSTER NAVIGATION */}
                    <div className={`max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-24 border-t border-[var(--text-secondary)]/20 pt-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                        {/* COL 1: SITEMAP */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">{t('footer.index')}</h4>
                            <FooterTooltipLink to="/" tooltip="Start here">{t('nav.home')}</FooterTooltipLink>
                            <FooterTooltipLink to="/#work" tooltip="Case studies & impact">{t('nav.work')}</FooterTooltipLink>
                            <FooterTooltipLink to="/side-projects" tooltip="Where ideas ship">{t('nav.side_projects')}</FooterTooltipLink>
                            <FooterTooltipLink to="/about" tooltip="The full picture">{t('nav.about')}</FooterTooltipLink>
                            <FooterTooltipLink to="/design-system" tooltip="Visual DNA">Design System</FooterTooltipLink>
                            <FooterTooltipLink to="/contact" tooltip="Let's talk">{t('nav.contact')}</FooterTooltipLink>
                        </div>

                        {/* COL 2: SOCIALS */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">{t('footer.connect')}</h4>
                            <FooterTooltipLink href="https://www.linkedin.com/in/fadlyzaki/" external tooltip="Professional network">LinkedIn</FooterTooltipLink>
                            <FooterTooltipLink href="https://www.instagram.com/fadlyzaki" external tooltip="Behind the scenes">Instagram</FooterTooltipLink>
                            <FooterTooltipLink href="https://dribbble.com/fadlyzaki" external tooltip="Visual explorations">Dribbble</FooterTooltipLink>
                            <FooterTooltipLink href="https://github.com/fadlyzaki/" external tooltip="Open source & code">GitHub</FooterTooltipLink>
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
                    <div className={`max-w-7xl mx-auto mb-16 flex justify-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="group flex flex-col items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
                        >
                            <div className="w-px h-12 bg-[var(--text-secondary)]/30 group-hover:bg-[var(--text-primary)] transition-colors duration-300"></div>
                            <span className="font-mono text-[10px] uppercase tracking-widest">{t('footer.return') || 'Return to Surface'}</span>
                        </button>
                    </div>

                    {/* 3. SIGNATURE */}
                    <div className={`max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end md:items-center text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider transition-all duration-700 delay-[600ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <div>
                            © {year} Fadly Uzzaki. <span className="opacity-50">{t('footer.rights')}</span>
                        </div>
                        <div className="mt-4 md:mt-0 flex items-center gap-2">
                            Human-Algorithm <Heart size={10} className="fill-current" /> {SYSTEM_CONFIG.VERSION}
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;
