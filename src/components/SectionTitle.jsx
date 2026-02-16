import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SectionTitle = ({ number, title, id, link, linkText }) => (
    <div id={id} className="flex items-center gap-3 mb-10 group scroll-mt-32">
        <span className="font-mono text-[var(--accent-amber)] text-sm opacity-60">0{number}_</span>
        <h2 className="font-mono text-xl tracking-tight text-[var(--text-primary)] uppercase group-hover:tracking-widest transition-all duration-300">
            {title}
        </h2>
        <div className="h-px bg-gradient-to-r from-[var(--border-color)] to-transparent flex-grow ml-4"></div>
        {link && (
            link.startsWith('http') ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors whitespace-nowrap">
                    {linkText || 'VIEW ALL'} <ArrowRight size={12} />
                </a>
            ) : (
                <Link to={link} className="hidden md:flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors whitespace-nowrap">
                    {linkText || 'VIEW ALL'} <ArrowRight size={12} />
                </Link>
            )
        )}
    </div>
);

export default SectionTitle;
