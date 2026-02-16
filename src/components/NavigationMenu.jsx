import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Globe, FileText, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const NavigationMenu = ({ isOpen, onClose }) => {
    const location = useLocation();
    const { t, language, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const links = [
        { label: t('nav.home'), href: "/" },
        { label: t('nav.about'), href: "#about" },
        { label: t('nav.work'), href: "#work" },
        { label: t('nav.side_projects'), href: "/side-projects" },
        { label: t('nav.process'), href: "/process" },
        { label: 'PROJECTS', href: "#side-projects" },
    ];
    const metaLinks = [
        { label: t('nav.cv'), icon: FileText, href: "/cv" },
        { label: t('nav.contact'), icon: Mail, href: "/contact" },
    ];

    const isActive = (path) => {
        if (path.startsWith('#')) return false; // Hash links handled by scroll or manual check
        return location.pathname === path;
    };

    return (
        <div className="fixed inset-0 z-[100] bg-[var(--bg-void)]/95 backdrop-blur-xl flex flex-col justify-center items-center animate-in fade-in duration-200" role="dialog" aria-modal="true" aria-label="Main Navigation">
            <button onClick={onClose} className="absolute top-6 right-6 p-4 text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors" aria-label="Close Menu">
                <X size={32} />
            </button>
            <div className="space-y-8 text-center">
                <div className="font-mono text-xs text-[var(--accent-amber)] uppercase tracking-widest mb-8">{t('nav.system_directory')}</div>
                <nav className="flex flex-col gap-6">
                    {links.map((link, idx) => (
                        <Link
                            key={idx}
                            to={link.href.startsWith('/') ? link.href : '/' + link.href}
                            onClick={onClose}
                            className={`font-mono text-2xl md:text-4xl transition-all ${isActive(link.href)
                                ? 'text-[var(--accent-blue)] scale-105 font-bold'
                                : 'text-[var(--text-primary)] hover:text-[var(--accent-blue)] hover:scale-105'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    {/* Mobile Language Toggle */}
                    <button
                        onClick={() => { toggleLanguage(); onClose(); }}
                        className="flex items-center justify-center gap-2 font-mono text-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] uppercase tracking-widest mt-4"
                    >
                        <Globe size={20} />
                        <span>{language === 'en' ? 'Bahasa Indonesia' : 'English'}</span>
                    </button>
                </nav>
                <div className="w-16 h-px bg-[var(--border-color)] mx-auto my-8"></div>
                <div className="flex gap-6 justify-center">
                    {metaLinks.map((link, idx) => (
                        <Link key={idx} to={link.href} className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-sm uppercase">
                            <link.icon size={16} />{link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavigationMenu;
