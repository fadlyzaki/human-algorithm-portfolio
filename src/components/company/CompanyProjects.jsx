import React, { useState } from 'react';
import { ArrowUpRight, Lock, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';
import ProjectCard from '../ProjectCard';
import IconMapper from '../ui/IconMapper';

const FolderCard = ({ project, isId, t, brandColor, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const title = isId ? (project.title_id || project.title) : project.title;
    const problem = isId ? (project.details_id?.problem || project.details.problem) : project.details.problem;
    const outcome = isId ? (project.details_id?.outcome || project.details.outcome) : project.details.outcome;
    const isWip = !['stoqo-logistics', 'stoqo-sales'].includes(project.id);

    return (
        <div
            className="relative cursor-pointer group"
            style={{ perspective: '800px' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {/* === FOLDER TAB === */}
            <div className="relative z-20 ml-6 inline-flex items-center">
                <motion.div
                    className="px-4 py-1.5 rounded-t-lg font-mono text-[10px] uppercase tracking-[0.15em] border border-b-0 flex items-center gap-2"
                    animate={{
                        backgroundColor: isHovered ? brandColor : 'var(--bg-card)',
                        color: isHovered ? '#ffffff' : 'var(--text-secondary)',
                        borderColor: isHovered ? brandColor : 'var(--border-color)',
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <FileText size={10} />
                    {title}
                </motion.div>
            </div>

            {/* === FOLDER BODY === */}
            <div className="relative h-[400px]" style={{ clipPath: 'inset(-8px -4px -10px -4px)' }}>

                {/* ——— INNER LAYER: "Documents Inside the Folder" ——— */}
                <div className="absolute inset-0 rounded-2xl rounded-tl-none border border-[var(--border-color)] bg-[var(--bg-card)]">
                    {/* Stacked paper edge lines for depth */}
                    <div className="absolute -bottom-[3px] left-3 right-3 h-[3px] rounded-b-xl bg-[var(--bg-card)] border border-t-0 border-[var(--border-color)] opacity-60" />
                    <div className="absolute -bottom-[6px] left-6 right-6 h-[3px] rounded-b-xl bg-[var(--bg-card)] border border-t-0 border-[var(--border-color)] opacity-30" />

                    {/* Inner Content — problem/outcome at bottom so it's revealed by cover lift */}
                    <div className="h-full flex flex-col justify-end p-5 pb-6">

                        {/* Problem / Outcome Grid (bottom area — visible when cover peeks) */}
                        <div className="grid grid-cols-2 gap-5 mb-4">
                            <div className="space-y-2">
                                <span className="font-mono text-[9px] uppercase tracking-[0.2em] flex items-center gap-1.5 text-red-400">
                                    <span className="w-1 h-1 bg-red-400 rounded-full" /> {t('company.problem')}
                                </span>
                                <p className="text-[11px] leading-[1.6] text-[var(--text-secondary)] line-clamp-4">
                                    {problem}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <span className="font-mono text-[9px] uppercase tracking-[0.2em] flex items-center gap-1.5" style={{ color: brandColor }}>
                                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: brandColor }} /> {t('company.fix')}
                                </span>
                                <p className="text-[11px] leading-[1.6] font-medium text-[var(--text-primary)] line-clamp-4">
                                    {outcome}
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 pt-3 border-t border-dashed border-[var(--border-color)]">
                            <Lock size={10} style={{ color: brandColor }} />
                            <span className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: brandColor }}>
                                {t('company.view_case')}
                            </span>
                            <ArrowUpRight size={11} style={{ color: brandColor }} className="ml-auto" />
                        </div>
                    </div>
                </div>

                {/* ——— COVER LAYER: Lifts to reveal documents ——— */}
                <motion.div
                    className="absolute inset-0 z-10 rounded-2xl rounded-tl-none"
                    style={{
                        transformOrigin: 'top center',
                        transformStyle: 'preserve-3d',
                    }}
                    animate={{
                        rotateX: isHovered ? -8 : 0,
                        y: isHovered ? -120 : 0,
                        scale: isHovered ? 0.97 : 1,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 180,
                        damping: 22,
                    }}
                >
                    {/* Cover Material */}
                    <div className="absolute inset-0 rounded-2xl rounded-tl-none bg-stone-100 dark:bg-neutral-800 border border-[var(--border-color)] shadow-lg transition-shadow duration-300 group-hover:shadow-2xl" />

                    {/* Paper Texture */}
                    <div
                        className="absolute inset-0 rounded-2xl rounded-tl-none opacity-[0.04] dark:opacity-[0.03] pointer-events-none mix-blend-overlay"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                        }}
                    />

                    {/* Cover Content */}
                    <div className="relative z-10 h-full flex flex-col p-4">

                        {/* Top Row: Badges + Classified */}
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-1.5">
                                {isWip && (
                                    <span className="bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-md border border-amber-200/80 dark:border-amber-700/40 text-[8px] font-mono font-bold uppercase tracking-widest">
                                        {t('company.wip')}
                                    </span>
                                )}
                                <span className="flex items-center gap-1 bg-white/70 dark:bg-black/40 px-2 py-0.5 rounded-md border border-black/5 dark:border-white/10 text-[8px] font-mono uppercase tracking-widest text-[var(--text-secondary)]">
                                    <span className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: brandColor }} />
                                    {project.type}
                                </span>
                            </div>
                            <div className="rotate-[-5deg] select-none border border-red-500/25 dark:border-red-400/20 px-2 py-0.5 rounded-[3px]">
                                <span className="font-mono text-[7px] font-black uppercase tracking-[0.3em] text-red-500/40 dark:text-red-400/30">
                                    Classified
                                </span>
                            </div>
                        </div>

                        {/* Airy Diagram (main visual) */}
                        <div className="flex-grow rounded-xl overflow-hidden border border-black/5 dark:border-white/5 bg-white dark:bg-neutral-900 relative">
                            <div className="absolute inset-0">
                                <ProjectCard type={project.type} id={project.id} expanded={true} />
                            </div>
                            {/* Subtle vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/[0.03] to-transparent pointer-events-none" />
                        </div>

                        {/* Bottom Bar: Title + Arrow */}
                        <div className="flex items-center justify-between mt-3">
                            <h3 className="text-sm font-serif italic text-[var(--text-primary)] truncate pr-4">{title}</h3>
                            <motion.div
                                animate={{ x: isHovered ? 2 : 0, y: isHovered ? -2 : 0, opacity: isHovered ? 1 : 0.4 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ArrowUpRight size={14} className="text-[var(--text-secondary)] shrink-0" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom edge for thickness illusion */}
                    <motion.div
                        className="absolute -bottom-1 left-1 right-1 h-3 rounded-b-2xl pointer-events-none"
                        style={{
                            background: 'linear-gradient(to top, rgba(0,0,0,0.08), transparent)',
                        }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

const CompanyProjects = ({ cluster, t, isId }) => {
    const navigate = useNavigate();
    const brandColor = cluster.brandColor || 'var(--accent-blue)';

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {cluster.projects.map((project, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                    <FolderCard
                        project={project}
                        isId={isId}
                        t={t}
                        brandColor={brandColor}
                        onClick={() => navigate(project.route)}
                    />
                </ScrollReveal>
            ))}
        </div>
    );
};

export default CompanyProjects;
