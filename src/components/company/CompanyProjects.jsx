import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Lock, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';
import ProjectCard from '../ProjectCard';
import IconMapper from '../ui/IconMapper';

const FolderCard = ({ project, isId, t, brandColor, onClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const title = isId ? (project.title_id || project.title) : project.title;
    const problem = isId ? (project.details_id?.problem || project.details.problem) : project.details.problem;
    const outcome = isId ? (project.details_id?.outcome || project.details.outcome) : project.details.outcome;
    const isWip = !['stoqo-logistics', 'stoqo-sales'].includes(project.id);

    const toggleOpen = (e) => {
        // Prevent toggle if clicking the CTA inside the open folder
        if (e.target.closest('button')) return;
        setIsOpen(!isOpen);
    };

    return (
        <div
            className="relative w-full h-[260px] sm:h-[300px] mt-12 cursor-pointer group pointer-events-auto"
            style={{ perspective: '1400px' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={toggleOpen}
        >
            {/* === BACK OF FOLDER === */}
            <div
                className="absolute inset-x-0 bottom-0 top-0 rounded-b-2xl rounded-tr-2xl shadow-xl transition-colors duration-500 overflow-visible"
                style={{ backgroundColor: brandColor }}
            >
                {/* Inside shadow to give depth */}
                <div className="absolute inset-0 bg-black/25 dark:bg-black/60 rounded-b-2xl rounded-tr-2xl" />

                {/* File Folder Tab (Sticks up outside the main container) */}
                <div
                    className="absolute bottom-full left-0 w-1/2 sm:w-2/5 h-10 rounded-t-xl flex items-center px-4 transition-colors duration-500"
                    style={{ backgroundColor: brandColor }}
                >
                    <div className="absolute inset-0 bg-black/25 dark:bg-black/60 rounded-t-xl" />
                    <FileText size={12} className="text-white/80 dark:text-white/60 relative z-10 mr-2 shrink-0" />
                    <span className="relative z-10 text-[10px] sm:text-[11px] font-mono text-white/90 dark:text-white/70 uppercase tracking-widest truncate">
                        {project.type}
                    </span>
                </div>
            </div>

            {/* === INNER DOCUMENT (The Sheet) === */}
            <div className="absolute inset-x-0 bottom-1 sm:bottom-2 flex justify-center pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
                <motion.div
                    className="w-[94%] bg-[#fcfcfc] dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-t-xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto origin-bottom"
                    initial={false}
                    animate={{
                        height: isOpen ? 450 : 240,
                        y: isOpen ? -100 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                >
                    {/* Top: Architectural Diagram / Visual */}
                    <div className="h-[150px] sm:h-[200px] w-full relative bg-white dark:bg-black border-b border-black/5 dark:border-white/5 shrink-0">
                        <ProjectCard type={project.type} id={project.id} expanded={true} />
                    </div>

                    {/* Bottom: Text Content */}
                    <div className="p-4 sm:p-5 flex flex-col flex-grow relative bg-[var(--bg-card)]">
                        <h3 className="text-lg sm:text-xl font-serif italic text-[var(--text-primary)] mb-4">{title}</h3>

                        <div className="grid grid-cols-2 gap-4 flex-grow">
                            <div>
                                <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] flex items-center gap-1.5 text-red-500 mb-1.5">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> {t('company.problem')}
                                </span>
                                <p className="text-[10px] sm:text-[11px] leading-[1.6] text-[var(--text-secondary)] line-clamp-4">
                                    {problem}
                                </p>
                            </div>
                            <div>
                                <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] flex items-center gap-1.5 mb-1.5" style={{ color: brandColor }}>
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandColor }} /> {t('company.fix')}
                                </span>
                                <p className="text-[10px] sm:text-[11px] leading-[1.6] font-medium text-[var(--text-primary)] line-clamp-4">
                                    {outcome}
                                </p>
                            </div>
                        </div>

                        {/* CTA Row */}
                        <div className="mt-4 pt-3 sm:pt-4 border-t border-dashed border-black/10 dark:border-white/10 flex items-center justify-between shrink-0">
                            <span className="text-[8px] sm:text-[9px] font-mono text-[var(--text-secondary)] uppercase tracking-widest">
                                Authorized Personnel Only
                            </span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onClick();
                                }}
                                className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.1em] font-bold px-3 py-2 rounded hover:opacity-80 transition-opacity"
                                style={{ backgroundColor: brandColor, color: '#fff' }}
                            >
                                <Lock size={10} className="mb-[1px]" />
                                {t('company.view_case')}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* === FRONT FLAP === */}
            <motion.div
                className="absolute inset-x-0 bottom-0 h-full rounded-2xl origin-bottom shadow-2xl flex flex-col justify-center items-center pointer-events-none"
                style={{ backgroundColor: brandColor, transformStyle: 'preserve-3d' }}
                animate={{
                    rotateX: isOpen ? -70 : (isHovered ? -5 : 0),
                    y: isOpen ? 30 : 0,
                    scale: isOpen ? 1.05 : 1,
                }}
                transition={{ type: 'spring', stiffness: 180, damping: isOpen ? 22 : 16 }}
            >
                {/* Edge Highlights */}
                <div className="absolute inset-0 rounded-2xl border flex flex-col pointer-events-none border-white/30 dark:border-white/10" />

                {/* Premium Texture Overlay */}
                <div
                    className="absolute inset-0 rounded-2xl opacity-[0.25] dark:opacity-[0.15] mix-blend-overlay pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    }}
                />

                {/* Closed State Graphics */}
                <AnimatePresence>
                    {!isOpen && (
                        <motion.div
                            className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-white text-center pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.1 } }}
                        >
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif italic mb-3 drop-shadow-md px-4">{title}</h3>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm text-[9px] sm:text-[10px] uppercase tracking-widest border border-white/20 dark:border-white/10 shadow-sm">
                                <span>{isWip ? 'Work In Progress' : 'Click to Open'}</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
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
