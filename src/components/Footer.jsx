import React, { useState, useEffect } from 'react';
import { Linkedin, Instagram, Dribbble, Mail, ArrowUpRight, Heart, Activity, Wifi, Cpu, Zap, Power } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { isDark } = useTheme();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const themeStyles = {
        '--bg-footer': isDark ? '#0A0A0A' : '#F0F0F3',
        '--grid-color': isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
        '--text-primary': isDark ? '#F3F4F6' : '#111827',
        '--text-secondary': isDark ? '#52525B' : '#6B7280',
        '--accent': isDark ? '#10B981' : '#059669', // Emerald Green for "System Ready"
    };

    return (
        <footer style={themeStyles} className="relative bg-[var(--bg-footer)] text-[var(--text-primary)] font-mono overflow-hidden border-t border-[var(--text-secondary)]/20">

            {/* 1. HOLOGRAPHIC GRID BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    perspective: '500px',
                    transformStyle: 'preserve-3d'
                }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-footer)] via-transparent to-transparent"></div>
            </div>

            {/* 2. STATUS TICKER */}
            <div className="relative z-10 w-full overflow-hidden border-b border-[var(--text-secondary)]/20 bg-[var(--bg-footer)]/50 backdrop-blur-sm">
                <div className="whitespace-nowrap flex items-center gap-12 py-2 text-[10px] text-[var(--accent)] uppercase tracking-widest animate-marquee opacity-80">
                    {Array(4).fill(null).map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-current rounded-full animate-pulse"></div> SYSTEM_STATUS: ONLINE</span>
                            <span className="flex items-center gap-2"><Cpu size={12} /> CORE_TEMP: 34°C</span>
                            <span className="flex items-center gap-2"><Wifi size={12} /> UPLINK_STABLE</span>
                            <span className="flex items-center gap-2"><Zap size={12} /> AVAILABLE_FOR_DEPLOYMENT</span>
                            <span className="text-[var(--text-secondary)]">//</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 relative z-10">

                {/* 3. MAIN DASHBOARD CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-start">

                    {/* LEFT: CTA */}
                    <div className="space-y-8">
                        <div>
                            <div className="text-[var(--accent)] text-xs mb-2 flex items-center gap-2">
                                <Power size={14} />
                                STANDBY_MODE
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-br from-[var(--text-primary)] to-[var(--text-secondary)]/50">
                                Initialize <br /> Handshake
                            </h2>
                            <p className="text-[var(--text-secondary)] max-w-md text-sm leading-relaxed">
                                The system is idling and ready for new task allocation.
                                Send query parameters regarding collaboration, consulting, or general chatter.
                            </p>
                        </div>

                        <a
                            href="mailto:hello@fadlyzaki.com"
                            className="inline-flex items-center gap-4 group relative overflow-hidden px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-footer)] rounded-sm font-bold uppercase tracking-widest transition-transform hover:scale-[1.02]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Mail size={18} /> Transmit Data
                            </span>
                            <div className="absolute inset-0 bg-[var(--accent)] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </a>
                    </div>

                    {/* RIGHT: SOCIAL MATRIX */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { label: "LinkedIn", val: "Connect", icon: Linkedin, href: "https://linkedin.com/in/fadlyzaki" },
                            { label: "Instagram", val: "Follow", icon: Instagram, href: "https://instagram.com/fadlyzaki" },
                            { label: "Dribbble", val: "View", icon: Dribbble, href: "https://dribbble.com/fadlyzaki" },
                            { label: "System CV", val: "Download", icon: Activity, href: "/cv" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target={social.href.startsWith('http') ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="group flex flex-col justify-between p-6 border border-[var(--text-secondary)]/20 hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-300 min-h-[120px] relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent)]">
                                    <ArrowUpRight size={16} />
                                </div>
                                <social.icon size={24} className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors mb-4" />
                                <div>
                                    <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider mb-1 opacity-50 group-hover:opacity-100">{social.val}</div>
                                    <div className="font-bold text-lg">{social.label}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* 4. SYSTEM FOOTER */}
                <div className="border-t border-[var(--text-secondary)]/20 pt-8 flex flex-col md:flex-row justify-between items-end md:items-center text-[10px] text-[var(--text-secondary)] uppercase tracking-widest">
                    <div className="flex flex-col gap-1">
                        <span>FADLY UZZAKI © {time.getFullYear()}</span>
                        <span>HUMAN-ALGORITHM v2.5.0 // BUILD_829A</span>
                    </div>

                    <div className="flex items-center gap-8 mt-6 md:mt-0">
                        <div className="text-right">
                            <div className="opacity-50 mb-1">LOCAL_TIME</div>
                            <div className="text-[var(--text-primary)]">{time.toLocaleTimeString()}</div>
                        </div>
                        <div className="text-right">
                            <div className="opacity-50 mb-1">LOCATION</div>
                            <div className="text-[var(--text-primary)]">JAKARTA, ID</div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
