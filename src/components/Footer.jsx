import React from 'react';
import { Linkedin, Instagram, Dribbble, Mail, ArrowUpRight, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { isDark } = useTheme();

    return (
        <footer className="border-t border-[var(--border-color)] pt-12 text-center pb-24 fade-in">
            <div className="mb-16">
                <h2 className="text-2xl font-mono text-[var(--text-primary)] uppercase tracking-tight mb-8">
                    Initialize Handshake
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-card)] rounded-lg text-left">
                        <h3 className="text-sm font-mono text-[var(--text-secondary)] uppercase mb-2">Collaboration Mode</h3>
                        <p className="text-[var(--text-primary)] mb-4">Open to freelance projects and consulting.</p>
                        <div className="flex items-center gap-2 text-[var(--accent-green)] text-xs font-mono uppercase">
                            <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse"></span>
                            System Ready
                        </div>
                    </div>

                    <div className="space-y-4">
                        {[
                            { label: "LinkedIn", val: "Connect", icon: Linkedin, href: "https://linkedin.com/in/fadlyzaki" },
                            { label: "Instagram", val: "Follow", icon: Instagram, href: "https://instagram.com/fadlyzaki" },
                            { label: "Dribbble", val: "View", icon: Dribbble, href: "https://dribbble.com/fadlyzaki" },
                            { label: "Email", val: "Write", icon: Mail, href: "mailto:hello@fadlyzaki.com" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent-blue)] transition-colors group cursor-pointer rounded-lg"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-[var(--bg-surface)] rounded text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-hover:bg-[var(--bg-void)] transition-colors">
                                        <social.icon size={18} />
                                    </div>
                                    <span className="font-mono text-sm text-[var(--text-primary)] tracking-wide">{social.label}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-wider bg-[var(--bg-surface)] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {social.val}
                                    </span>
                                    <ArrowUpRight size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-blue)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright / Credits */}
            <div className="border-t border-[var(--border-color)] pt-8 mt-16 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                    <span>&copy; {new Date().getFullYear()} Fadly Uzzaki. All System Rights Reserved.</span>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <span>Designed & Developed with</span>
                    <Heart size={12} className="text-[var(--accent-red)] fill-[var(--accent-red)] animate-pulse" />
                    <span>by Fadlyzaki</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
