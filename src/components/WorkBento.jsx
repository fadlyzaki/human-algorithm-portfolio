import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from './ProjectCard';

const WorkBento = ({ cluster }) => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const isId = language === 'id';

    // Extract data
    const title = isId ? (cluster.title_id || cluster.title) : cluster.title;
    const subtitle = isId ? (cluster.subtitle_id || cluster.subtitle) : cluster.subtitle;
    const desc = isId ? (cluster.hook_id || cluster.hook) : cluster.hook;
    const brandColor = cluster.brandColor || '#3B82F6';

    return (
        <div
            onClick={() => navigate(`/work/${cluster.id}`)}
            className="group relative flex flex-col h-full bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl overflow-hidden cursor-pointer hover:border-[var(--accent-blue)]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
        >
            {/* 1. HERO VISUAL AREA (Top Half) */}
            <div className="relative h-64 md:h-80 overflow-hidden bg-gray-100 dark:bg-gray-900">
                {/* Background Image / Airy Diagram */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    {/* If heroImage exists and is an image path, use img. If it's 'airy:', use ProjectCard? 
               Actually, ProjectCard might be too complex for a small preview if not careful, 
               but let's stick to the reference style: Product Showcase. 
               The reference shows specific product UI. 
               We'll use the 'heroImage' from cluster if available, or fall back to ProjectCard visual.
           */}
                    {cluster.heroImage && cluster.heroImage.startsWith('/') ? (
                        <img
                            src={cluster.heroImage}
                            alt={title}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                    ) : (
                        <div className="w-full h-full p-8 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                            <ProjectCard id={cluster.id} expanded={true} showChrome={false} backgroundOnly={true} />
                        </div>
                    )}
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-80"></div>

                {/* Floating Logo/Icon */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center shadow-lg">
                    {cluster.logo ? (
                        <img src={cluster.logo} alt="logo" className="w-8 h-8 object-contain" />
                    ) : (
                        <div className="w-full h-full bg-current opacity-20" style={{ color: brandColor }}></div>
                    )}
                </div>

                {/* Hover Action */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                        View Case <ArrowUpRight size={14} />
                    </div>
                </div>
            </div>

            {/* 2. CONTENT AREA (Bottom Half) */}
            <div className="flex flex-col flex-grow p-8 pt-2 relative">
                <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-blue)] border border-[var(--accent-blue)]/20 px-2 py-1 rounded bg-[var(--accent-blue)]/5">
                            {subtitle}
                        </span>
                    </div>
                    <h3 className="text-3xl font-serif italic text-[var(--text-primary)] leading-tight mb-3 group-hover:text-[var(--accent-blue)] transition-colors">
                        {title}
                    </h3>
                    <p className="text-[var(--text-secondary)] font-light leading-relaxed line-clamp-3">
                        {desc}
                    </p>
                </div>

                {/* Footer / Stats or mini-projects */}
                <div className="mt-auto pt-6 border-t border-[var(--border-color)] flex items-center justify-between">
                    <div className="flex -space-x-2 overflow-hidden">
                        {/* Maps small circles for project previews or just abstract dots */}
                        {cluster.projects.slice(0, 3).map((p, i) => (
                            <div key={i} className="inline-block h-6 w-6 rounded-full ring-2 ring-[var(--bg-card)] bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-[8px] font-mono text-[var(--text-secondary)]">
                                {i + 1}
                            </div>
                        ))}
                        {cluster.projects.length > 3 && (
                            <div className="inline-block h-6 w-6 rounded-full ring-2 ring-[var(--bg-card)] bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[8px] font-mono text-[var(--text-secondary)]">
                                +
                            </div>
                        )}
                    </div>

                    <span className="font-mono text-xs text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors flex items-center gap-2">
                        {cluster.projects.length} {isId ? 'Proyek' : 'Projects'} <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default WorkBento;
