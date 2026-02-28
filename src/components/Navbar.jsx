import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Sun, Moon, ScanEye, Grid, Clock, FileText, Printer } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useHandCursor } from '../context/HandCursorContext';

import BackButton from './BackButton';
import useScrollDirection from '../hooks/useScrollDirection';

// Shared layoutId ensures the underline "glides" between active items
const HoverNavLink = ({ to, label, isActive }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link
            to={to}
            className="px-4 py-1.5 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="relative z-10 block whitespace-nowrap">{label}</span>
            {isHovered && (
                <motion.svg
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 w-full h-[8px] pointer-events-none text-[var(--text-primary)]"
                    viewBox="0 0 890 14"
                    preserveAspectRatio="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                    }}
                >
                    <path
                        d="M 0 10.035 C 0 10.035 17.402 2.561 25.137 2.035 C 32.872 1.51 39.068 9.419 50.274 6.035 C 57.086 3.978 61.278 1.942 66.828 2.035 C 75.922 2.188 83.251 10.035 91.002 10.035 C 102.667 10.035 111.411 2.035 125.109 2.035 C 131.791 2.035 140.404 9.077 146.331 10.035 C 158.337 11.977 167.311 2.035 179.352 2.035 C 187.351 2.035 194.205 9.011 202.138 10.035 C 213.916 11.556 222.094 2.035 233.915 2.035 C 241.674 2.035 248.868 9.49 256.591 10.035 C 267.896 10.833 275.95 2.035 287.487 2.035 C 295.424 2.035 301.996 9.176 309.845 10.035 C 321.439 11.305 329.871 2.035 341.657 2.035 C 349.034 2.035 355.858 8.435 363.385 10.035 C 375.253 12.556 384.053 2.035 396.111 2.035 C 403.957 2.035 410.59 9.387 418.539 10.035 C 430.144 10.982 438.169 2.035 449.882 2.035 C 457.755 2.035 464.331 9.467 472.296 10.035 C 483.926 10.866 491.956 2.035 503.626 2.035 C 511.401 2.035 518.232 9.043 525.992 10.035 C 537.766 11.54 546.046 2.035 558.055 2.035 C 565.659 2.035 572.585 9.204 580.124 10.035 C 591.921 11.336 600.375 2.035 612.274 2.035 C 619.664 2.035 626.685 8.783 634.172 10.035 C 646.035 12.021 654.516 2.035 666.452 2.035 C 674.249 2.035 681.42 10.035 689.431 10.035 C 700.72 10.035 709.689 3.067 721.232 2.035 C 727.653 1.46 732.122 2.775 738.487 5.035 C 748.113 8.454 754.766 11.758 765.176 10.035 C 777.625 7.973 787.202 2.035 799.394 2.035 C 807.5 2.035 814.183 10.035 822.463 10.035 C 833.649 10.035 842.139 3.197 853.486 2.035 C 859.907 1.378 873.359 5.86 881.338 10.035 C 884.606 11.745 890 0 890 0"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                </motion.svg>
            )}
        </Link>
    );
};

const Navbar = ({ onOpenMenu, title, backPath, onViewCoverLetter, onPrint, showNavOverride }) => {
    const { isDark, setIsDark } = useTheme();
    const { t, language, toggleLanguage } = useLanguage();
    const { isGestureMode, toggleGestureMode, warmupHandTracker } = useHandCursor();

    const hookShowNav = useScrollDirection(isGestureMode);
    const showNav = showNavOverride !== undefined ? showNavOverride : hookShowNav;

    const [time, setTime] = useState(new Date());
    const [timeZone, setTimeZone] = useState('LOC');


    // 2. LIVE CLOCK & TIMEZONE
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);

        // Detect Timezone
        try {
            const short = new Date().toLocaleTimeString('en-US', { timeZoneName: 'short' }).split(' ').pop();
            setTimeZone(short);
        } catch (e) {
            setTimeZone('LOC');
        }

        return () => clearInterval(timer);
    }, []);

    // Format time as HH:MM:SS
    const formatTime = (date) => {
        return date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    };

    return (
        <>
            {/* DESKTOP TOP BAR */}
            <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="bg-[var(--bg-surface)]/80 backdrop-blur-md border-b border-[var(--border-color)] px-6 py-3 flex justify-between items-center shadow-sm">

                    {/* LEFT: IDENTITY or BACK BUTTON */}
                    <div className="flex items-center gap-6">
                        {title ? (
                            <BackButton to={backPath} label="Back" className="hover:bg-[var(--text-secondary)]/10 px-3 py-1.5 rounded-md !text-[var(--text-secondary)] hover:!text-[var(--text-primary)] transition-colors border-r border-[var(--border-color)] pr-6" />
                        ) : (
                            <div className="flex items-center gap-6">
                                <Link
                                    to="/"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="flex items-center gap-3 group"
                                >
                                    {/* Logo / Glitch Text */}
                                    <span className="font-mono font-bold text-lg tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors">
                                        🧢 Fadlyzaki
                                    </span>
                                </Link>

                                {/* System Status Indicator */}
                                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)]">
                                    <div className="relative flex h-2 w-2">
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </div>
                                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                                        Open to Work
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* CENTER: PROCESS LINKS (Home) or TITLE (Subpage) */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {title ? (
                            <h1 className="font-mono text-sm uppercase tracking-widest text-[var(--text-primary)] font-bold">
                                {title}
                            </h1>
                        ) : (
                            <nav className="hidden md:flex items-center gap-1">
                                <HoverNavLink to="/about" label={t('nav.about')} />
                                <HoverNavLink to="/#work" label={t('nav.work')} />
                                <HoverNavLink to="/#side-projects" label="Projects" />
                                <HoverNavLink to="/process" label={t('nav.process')} />
                                <HoverNavLink to="/contact" label={t('nav.contact')} />
                            </nav>
                        )}
                    </div>

                    {/* RIGHT: UTILITIES & CLOCK */}
                    <div className="flex items-center gap-4">
                        {/* Live Clock */}
                        <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)] border-r border-[var(--border-color)] pr-4 mr-1">
                            <Clock size={12} className="opacity-70" />
                            <span>{formatTime(time)}</span>
                            <span className="text-[9px] opacity-50">{timeZone}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            {/* CV Actions */}
                            {onViewCoverLetter && (
                                <button
                                    onClick={onViewCoverLetter}
                                    className="p-2 rounded text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--text-secondary)]/10 transition-colors"
                                    title="View Cover Letter"
                                >
                                    <FileText size={16} />
                                </button>
                            )}
                            {onPrint && (
                                <button
                                    onClick={onPrint}
                                    className="p-2 rounded text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--text-secondary)]/10 transition-colors"
                                    title="Print CV (PDF)"
                                >
                                    <Printer size={16} />
                                </button>
                            )}

                            <button
                                onClick={toggleGestureMode}
                                onMouseEnter={warmupHandTracker}
                                className={`p-2 rounded hover:bg-[var(--text-secondary)]/10 transition-colors ${isGestureMode ? 'text-[var(--accent-red)] animate-pulse bg-red-500/10' : 'text-[var(--text-secondary)] hover:text-[var(--accent-blue)]'}`}
                                title="Enable Hand Tracking"
                            >
                                <ScanEye size={16} />
                            </button>

                            <button
                                onClick={() => setIsDark(!isDark)}
                                className="p-2 rounded text-[var(--text-secondary)] hover:text(--accent-amber)] hover:bg-[var(--text-secondary)]/10 transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                            </button>

                            <button
                                onClick={toggleLanguage}
                                className="px-2 py-1 font-mono text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--text-secondary)]/10 rounded transition-colors text-xs uppercase tracking-widest"
                                title="Switch Language"
                            >
                                {language}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE CONTROL DECK (Floating Bottom) */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden animate-in slide-in-from-bottom-10 fade-in duration-700">
                <div className="bg-[var(--bg-surface)]/90 backdrop-blur-xl border border-[var(--border-color)] rounded-full px-4 py-2.5 shadow-2xl flex items-center gap-3">
                    {/* Quick: Work */}
                    <Link
                        to="/#work"
                        className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors px-2 py-1"
                    >
                        Work
                    </Link>

                    <div className="w-px h-5 bg-[var(--border-color)]"></div>

                    {/* Menu */}
                    <button
                        onClick={onOpenMenu}
                        className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1"
                        aria-label="Open Menu"
                    >
                        <Grid size={18} />
                    </button>

                    <div className="w-px h-5 bg-[var(--border-color)]"></div>

                    {/* Quick: Contact */}
                    <Link
                        to="/contact"
                        className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors px-2 py-1"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
