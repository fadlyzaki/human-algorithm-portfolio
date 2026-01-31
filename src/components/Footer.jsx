import React, { useState, useEffect } from 'react';
import { Copy, Check, ArrowUpRight, Globe, Clock, Command } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { isDark } = useTheme();
    const [time, setTime] = useState(new Date());
    const [copied, setCopied] = useState(false);
    const [emailHover, setEmailHover] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("hello@fadlyzaki.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const themeStyles = {
        '--bg-footer': isDark ? '#050505' : '#FFFFFF',
        '--border-color': isDark ? '#333' : '#E5E7EB',
        '--text-primary': isDark ? '#F3F4F6' : '#111827',
        '--text-secondary': isDark ? '#666' : '#9CA3AF',
        '--accent': isDark ? '#10B981' : '#059669', // Emerald
    };

    const SOCIALS = [
        { label: "LinkedIn", href: "https://linkedin.com/in/fadlyzaki" },
        { label: "Instagram", href: "https://instagram.com/fadlyzaki" },
        { label: "Dribbble", href: "https://dribbble.com/fadlyzaki" },
        { label: "Repo", href: "https://github.com/fadlyzaki" },
    ];

    return (
        <footer style={themeStyles} className="w-full bg-[var(--bg-footer)] border-t border-[var(--border-color)] transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 py-6 md:py-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-mono text-xs tracking-wide text-[var(--text-secondary)]">

                    {/* 1. LEFT: IDENTITY */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold">
                            <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse"></div>
                            FADLY.UZZAKI
                        </div>
                        <span className="hidden sm:inline opacity-30">|</span>
                        <span className="opacity-50">© {time.getFullYear()}</span>
                    </div>

                    {/* 2. CENTER: COMMAND CENTER (Socials + Email) */}
                    <div className="flex flex-wrap items-center gap-6 md:gap-8">
                        {/* Social Links */}
                        <nav className="flex items-center gap-6">
                            {SOCIALS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[var(--text-primary)] hover:underline decoration-1 underline-offset-4 transition-all flex items-center gap-1 group"
                                >
                                    {link.label}
                                    <ArrowUpRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </a>
                            ))}
                        </nav>

                        {/* Email Action */}
                        <button
                            onClick={handleCopyEmail}
                            onMouseEnter={() => setEmailHover(true)}
                            onMouseLeave={() => setEmailHover(false)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded bg-[var(--border-color)] bg-opacity-30 hover:bg-opacity-50 text-[var(--text-primary)] transition-all active:scale-95 group relative overflow-hidden"
                            title="Copy to Clipboard"
                        >
                            <span className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-10 transition-opacity"></span>
                            <div className="relative z-10 flex items-center gap-2">
                                {copied ? <Check size={12} /> : <div className="relative"><Command size={12} className={`absolute transition-opacity ${emailHover ? 'opacity-100' : 'opacity-0'}`} /><Copy size={12} className={`transition-opacity ${emailHover ? 'opacity-0' : 'opacity-100'}`} /></div>}
                                <span>{copied ? "COPIED_TO_CLIPBOARD" : "HELLO@FADLYZAKI.COM"}</span>
                            </div>
                        </button>
                    </div>

                    {/* 3. RIGHT: SYSTEM TELEMETRY */}
                    <div className="hidden md:flex items-center gap-6 text-[10px] opacity-60">
                        <div className="flex items-center gap-2">
                            <Clock size={12} />
                            <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} JKT</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe size={12} />
                            <span>JAKARTA, ID</span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
