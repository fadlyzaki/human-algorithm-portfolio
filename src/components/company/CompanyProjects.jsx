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
                className="absolute inset-x-0 bottom-0 top-0 rounded-b-2xl rounded-tr-2xl shadow-xl transition-colors duration-500 overflow-visible z-10"
                style={{ backgroundColor: brandColor }}
            >
                {/* Inside shadow to give depth */}
                <div className="absolute inset-0 bg-black/25 dark:bg-black/60 rounded-b-2xl rounded-tr-2xl" />

                {/* File Folder Tab */}
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

            {/* === THE 3 FANNING CARDS === */}
            <div className="absolute inset-x-0 bottom-2 sm:bottom-4 flex justify-center pointer-events-none z-20" style={{ transformStyle: 'preserve-3d' }}>

                {/* 1. LEFT BACKGROUND CARD (Project Diagram) */}
                <motion.div
                    className="absolute w-[80%] bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-xl shadow-xl flex flex-col overflow-hidden origin-bottom pointer-events-auto"
                    initial={false}
                    animate={{
                        height: isOpen ? 280 : 220,
                        y: isOpen ? -60 : 36,
                        x: isOpen ? -40 : 0,
                        rotateZ: isOpen ? -8 : 0,
                        opacity: isOpen ? 1 : 0
                    }}
                    transition={{ type: 'spring', stiffness: 220, damping: 22, delay: isOpen ? 0.05 : 0 }}
                >
                    <div className="w-full h-full relative bg-stone-100 dark:bg-black">
                        <ProjectCard type={project.type} id={project.id} expanded={true} />
                        <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-[1px]" />
                    </div>
                </motion.div>

                {/* 2. RIGHT BACKGROUND CARD (Metadata) */}
                <motion.div
                    className="absolute w-[80%] bg-[#fcfcfc] dark:bg-neutral-800 border border-black/10 dark:border-white/10 rounded-xl shadow-xl p-5 origin-bottom flex flex-col pointer-events-auto"
                    initial={false}
                    animate={{
                        height: isOpen ? 280 : 220,
                        y: isOpen ? -40 : 36,
                        x: isOpen ? 50 : 0,
                        rotateZ: isOpen ? 12 : 0,
                        opacity: isOpen ? 1 : 0
                    }}
                    transition={{ type: 'spring', stiffness: 220, damping: 22, delay: isOpen ? 0.1 : 0 }}
                >
                    <div className="flex flex-col h-full opacity-60">
                        <div className="w-12 h-12 rounded-full border border-dashed border-black/20 dark:border-white/20 flex items-center justify-center mb-4">
                            <span className="font-mono text-[8px] uppercase">{project.type.substring(0, 3)}</span>
                        </div>
                        <div className="space-y-3 w-full">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="h-2 rounded bg-black/5 dark:bg-white/5 w-full" style={{ width: `${Math.random() * 40 + 60}%` }} />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* 3. CENTER FRONT CARD (The Readable Document) */}
                <motion.div
                    className="absolute w-[88%] bg-[#ffffff] dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-xl shadow-2xl flex flex-col origin-bottom pointer-events-auto z-20"
                    initial={false}
                    animate={{
                        height: isOpen ? 340 : 240,
                        y: isOpen ? -110 : 36,
                        rotateZ: isOpen ? 0 : 0, // Stays straight for reading
                    }}
                    transition={{ type: 'spring', stiffness: 240, damping: 25, delay: isOpen ? 0.15 : 0 }}
                >
                    <div className="p-5 flex flex-col h-full bg-[var(--bg-card)] rounded-xl">
                        <h3 className="text-xl sm:text-2xl font-serif italic text-[var(--text-primary)] mb-4">{title}</h3>

                        {/* Readable Text Grid */}
                        <div className="grid grid-cols-2 gap-4 flex-grow">
                            <div>
                                <span className="font-mono text-[8.5px] uppercase tracking-[0.2em] flex items-center gap-1.5 text-red-500 mb-2">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> {t('company.problem')}
                                </span>
                                <p className="text-[11px] leading-[1.6] text-[var(--text-secondary)] line-clamp-4 pr-1">
                                    {problem}
                                </p>
                            </div>
                            <div>
                                <span className="font-mono text-[8.5px] uppercase tracking-[0.2em] flex items-center gap-1.5 mb-2" style={{ color: brandColor }}>
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandColor }} /> {t('company.fix')}
                                </span>
                                <p className="text-[11px] leading-[1.6] font-medium text-[var(--text-primary)] line-clamp-4 pr-1">
                                    {outcome}
                                </p>
                            </div>
                        </div>

                        {/* CTA Row */}
                        <div className="mt-4 pt-4 border-t border-dashed border-black/10 dark:border-white/10 flex items-center justify-between shrink-0">
                            <span className="text-[9px] font-mono text-[var(--text-secondary)] uppercase tracking-widest hidden sm:block">
                                Authorized Personnel Only
                            </span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onClick();
                                }}
                                className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.1em] font-bold px-4 py-2 rounded hover:opacity-80 transition-opacity ml-auto"
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
                className="absolute inset-0 rounded-2xl flex flex-col pointer-events-none z-30"
                style={{ backgroundColor: brandColor, transformOrigin: 'bottom center', transformStyle: 'preserve-3d' }}
                animate={{
                    rotateX: isOpen ? -75 : (isHovered ? -5 : 0),
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
