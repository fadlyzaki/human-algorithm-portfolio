import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Sun, Moon, ScanEye, Grid, Clock, FileText, Printer } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useHandCursor } from '../context/HandCursorContext';

import BackButton from './BackButton';
import useScrollDirection from '../hooks/useScrollDirection';

const Navbar = ({ onOpenMenu, title, backPath, onViewCoverLetter, onPrint, showNavOverride }) => {
    const { isDark, setIsDark } = useTheme();
    const { t, language, toggleLanguage } = useLanguage();
    const { isGestureMode, toggleGestureMode } = useHandCursor();

    // Use duplicated logic hook, but allow external override if parent manages it (e.g. HomeHero constraints?)
    // Actually, Home.jsx was managing `showNav` state but passing it nowhere? 
    // Wait, Home.jsx passed it... nowhere in original code? 
    // Re-reading Home.jsx original:
    // It calculated `showNav` but didn't pass it to `<Navbar />`.
    // Navbar had its OWN internal `showNav` state.
    // So both were calculating it independently? Yes.
    // We should use the hook here. If `showNavOverride` is provided (e.g. from Home which might have specific needs), use it.

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
                                <Link to="/" className="flex items-center gap-3 group">
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
                                {[
                                    { path: '/about', label: t('nav.about') },
                                    { path: '/#work', label: t('nav.work') },
                                    { path: '/#side-projects', label: 'Projects' },
                                    { path: '/process', label: t('nav.process') },
                                    { path: '/contact', label: t('nav.contact') }
                                ].map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="px-4 py-1.5 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--text-secondary)]/10 rounded transition-all duration-300 relative group overflow-hidden"
                                    >
                                        <span className="relative z-10">{link.label}</span>
                                    </Link>
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
