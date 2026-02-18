import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, ScanEye, Grid, Clock, Activity } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useHandCursor } from '../context/HandCursorContext';

import BackButton from './BackButton';

const Navbar = ({ onOpenMenu, title, backPath }) => {
    const { isDark, setIsDark } = useTheme();
    const { t, language, toggleLanguage } = useLanguage();
    const { isGestureMode, toggleGestureMode } = useHandCursor();
    const [showNav, setShowNav] = useState(true);
    const [time, setTime] = useState(new Date());
    const [timeZone, setTimeZone] = useState('LOC');
    const lastScrollY = useRef(0);
    const location = useLocation();

    // 1. SCROLL LOGIC
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
                if (currentScrollY > lastScrollY.current && currentScrollY > 50 && !isGestureMode) {
                    setShowNav(false);
                } else {
                    setShowNav(true);
                }
                lastScrollY.current = currentScrollY;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isGestureMode]);

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
                                <Link to="/" className="flex items-center gap-3 group">
                                    {/* Logo / Glitch Text */}
                                    <span className="font-mono font-bold text-lg tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors">
                                        FADLY.ZAKI<span className="animate-pulse">_</span>
                                    </span>
                                </Link>

                                {/* System Status Indicator */}
                                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)]">
                                    <div className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </div>
                                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                                        Sys: Normal
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
                                {[
                                    { path: '/about', label: t('nav.about') },
                                    { path: '#work', label: t('nav.work'), external: true },
                                    { path: '#side-projects', label: 'Projects', external: true },
                                    { path: '/process', label: t('nav.process') },
                                    { path: '/contact', label: t('nav.contact') }
                                ].map((link) => (
                                    link.external ? (
                                        <a
                                            key={link.path}
                                            href={link.path}
                                            className="px-4 py-1.5 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--text-secondary)]/10 rounded transition-all duration-300 relative group overflow-hidden"
                                        >
                                            <span className="relative z-10">{link.label}</span>
                                        </a>
                                    ) : (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            className="px-4 py-1.5 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--text-secondary)]/10 rounded transition-all duration-300 relative group overflow-hidden"
                                        >
                                            <span className="relative z-10">{link.label}</span>
                                        </Link>
                                    )
                                ))}
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
                            <button
                                onClick={toggleGestureMode}
                                className={`p-2 rounded hover:bg-[var(--text-secondary)]/10 transition-colors ${isGestureMode ? 'text-[var(--accent-red)] animate-pulse bg-red-500/10' : 'text-[var(--text-secondary)] hover:text-[var(--accent-blue)]'}`}
                                title="Enable Hand Tracking"
                            >
                                <ScanEye size={16} />
                            </button>

                            <button
                                onClick={() => setIsDark(!isDark)}
                                className="p-2 rounded text-[var(--text-secondary)] hover:text-[var(--accent-amber)] hover:bg-[var(--text-secondary)]/10 transition-colors"
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
                <div className="bg-[var(--bg-surface)]/90 backdrop-blur-xl border border-[var(--border-color)] rounded-full px-6 py-3 shadow-2xl flex items-center gap-6">
                    <button
                        onClick={onOpenMenu}
                        className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex flex-col items-center gap-1"
                        aria-label="Open Menu"
                    >
                        <Grid size={20} />
                    </button>

                    <div className="w-px h-6 bg-[var(--border-color)]"></div>

                    {/* Mobile System Status */}
                    <div className="flex items-center gap-2">
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </div>
                        <span className="font-mono text-[10px] text-[var(--text-secondary)]">{formatTime(time)}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
