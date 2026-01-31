import React from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { isDark } = useTheme();
    const year = new Date().getFullYear();

    const themeStyles = {
        '--text-primary': isDark ? '#F3F4F6' : '#111827',
        '--text-secondary': isDark ? '#A1A1AA' : '#6B7280',
        '--bg-footer': 'transparent', // Seamless integration
    };

    return (
        <footer style={themeStyles} className="w-full pt-32 pb-16 px-6 md:px-12 bg-[var(--bg-footer)] text-[var(--text-primary)] font-sans transition-colors duration-500">

            {/* 1. MAIN HEADLINE (Editorial Style) */}
            <div className="max-w-7xl mx-auto mb-24">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic leading-tight mb-8">
                    Let's build something <br />
                    <span className="text-[var(--text-secondary)] not-italic font-light">resilient together.</span>
                </h2>

                <a
                    href="mailto:hello@fadlyzaki.com"
                    className="inline-flex items-center gap-2 text-lg md:text-xl font-mono uppercase tracking-wide border-b border-[var(--text-primary)] pb-1 hover:text-[var(--text-secondary)] hover:border-[var(--text-secondary)] transition-all group"
                >
                    hello@fadlyzaki.com
                    <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
            </div>

            {/* 2. CLUSTER NAVIGATION */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-24 border-t border-[var(--text-secondary)]/20 pt-12">

                {/* COL 1: SITEMAP */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">Index</h4>
                    <Link to="/" className="hover:underline text-sm">Home</Link>
                    <Link to="/about" className="hover:underline text-sm">About</Link>
                    <Link to="/side-projects" className="hover:underline text-sm">Archive</Link>
                    <Link to="/cv" className="hover:underline text-sm">System CV</Link>
                </div>

                {/* COL 2: SOCIALS */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">Connect</h4>
                    <a href="https://linkedin.com/in/fadlyzaki" target="_blank" rel="noreferrer" className="hover:underline text-sm">LinkedIn</a>
                    <a href="https://instagram.com/fadlyzaki" target="_blank" rel="noreferrer" className="hover:underline text-sm">Instagram</a>
                    <a href="https://dribbble.com/fadlyzaki" target="_blank" rel="noreferrer" className="hover:underline text-sm">Dribbble</a>
                    <a href="https://github.com/fadlyzaki" target="_blank" rel="noreferrer" className="hover:underline text-sm">GitHub</a>
                </div>

                {/* COL 3: CONTEXT */}
                <div className="hidden md:flex flex-col gap-4">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">Location</h4>
                    <span className="text-[var(--text-secondary)] text-sm">Jakarta, Indonesia</span>
                    <span className="text-[var(--text-secondary)] text-sm">GMT+7 / WIB</span>
                </div>

                {/* COL 4: META */}
                <div className="hidden md:flex flex-col gap-4">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">Colophon</h4>
                    <span className="text-[var(--text-secondary)] text-sm leading-relaxed">Designed in Figma. <br /> Built with React & Tailwind. <br /> Deployed on Vercel.</span>
                </div>

            </div>

            {/* 3. SIGNATURE */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end md:items-center text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                <div>
                    © {year} Fadly Uzzaki. <span className="opacity-50">All Rights Reserved.</span>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-2">
                    Human-Algorithm <Heart size={10} className="fill-current" /> v2.5
                </div>
            </div>

        </footer>
    );
};

export default Footer;
