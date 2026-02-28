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
            className="relative cursor-pointer group"
            style={{ perspective: '1200px' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={toggleOpen}
        >
            {/* === FOLDER TAB === */}
            <div className="relative z-20 ml-6 inline-flex items-center">
                <motion.div
                    className="px-4 py-1.5 rounded-t-lg font-mono text-[10px] uppercase tracking-[0.15em] border border-b-0 flex items-center gap-2"
                    animate={{
                        backgroundColor: (isHovered || isOpen) ? brandColor : 'var(--bg-card)',
                        color: (isHovered || isOpen) ? '#ffffff' : 'var(--text-secondary)',
                        borderColor: (isHovered || isOpen) ? brandColor : 'var(--border-color)',
                        y: isOpen ? 6 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <FileText size={10} />
                    {title}
                </motion.div>
            </div>

            {/* === FOLDER BODY === */}
            <div className="relative h-[380px] sm:h-[420px]" style={{ transformStyle: 'preserve-3d' }}>

                {/* --- BACK FLAP (Inside of Folder) --- */}
                <div className="absolute inset-0 rounded-2xl rounded-tl-none border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden">
                    <div className="absolute inset-0 bg-black/[0.04] dark:bg-black/40 shadow-inner" />
                </div>

                {/* --- THE FANNING CARDS (Emerge from bottom inside) --- */}
                <div className="absolute inset-0 flex justify-center items-end pb-6 sm:pb-8 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>

                    {/* LEFT CARD: Problem/Context */}
                    <motion.div
                        className="absolute w-[220px] sm:w-[240px] h-[280px] sm:h-[300px] bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-xl shadow-lg p-4 sm:p-5 flex flex-col z-10 origin-bottom pointer-events-auto"
                        initial={false}
                        animate={{
                            y: isOpen ? -30 : 20,
                            x: isOpen ? -60 : 0,
                            rotateZ: isOpen ? -10 : 0,
                            scale: isOpen ? 1 : 0.8,
                            opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ type: 'spring', stiffness: 220, damping: 20, delay: isOpen ? 0.05 : 0 }}
                    >
                        <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] flex items-center gap-1.5 text-red-500 mb-2 sm:mb-3">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> {t('company.problem')}
                        </span>
                        <p className="text-[10px] sm:text-[11px] leading-[1.6] text-[var(--text-secondary)]">
                            {problem}
                        </p>
                    </motion.div>

                    {/* RIGHT CARD: Solution/Outcome */}
                    <motion.div
                        className="absolute w-[220px] sm:w-[240px] h-[280px] sm:h-[300px] bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-xl shadow-lg p-4 sm:p-5 flex flex-col z-10 origin-bottom pointer-events-auto"
                        initial={false}
                        animate={{
                            y: isOpen ? -30 : 20,
                            x: isOpen ? 60 : 0,
                            rotateZ: isOpen ? 10 : 0,
                            scale: isOpen ? 1 : 0.8,
                            opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ type: 'spring', stiffness: 220, damping: 20, delay: isOpen ? 0.1 : 0 }}
                    >
                        <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] flex items-center gap-1.5 mb-2 sm:mb-3" style={{ color: brandColor }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandColor }} /> {t('company.fix')}
                        </span>
                        <p className="text-[10px] sm:text-[11px] leading-[1.6] font-medium text-[var(--text-primary)]">
                            {outcome}
                        </p>
                    </motion.div>

                    {/* CENTER CARD: The Hero Visual / CTA */}
                    <motion.div
                        className="absolute w-[240px] sm:w-[260px] h-[300px] sm:h-[320px] bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden z-20 origin-bottom flex flex-col pointer-events-auto"
                        initial={false}
                        animate={{
                            y: isOpen ? -70 : 20,
                            scale: isOpen ? 1.05 : 0.85,
                            opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ type: 'spring', stiffness: 260, damping: 22, delay: isOpen ? 0.15 : 0 }}
                    >
                        <div className="flex-grow relative bg-stone-100 dark:bg-neutral-800">
                            <ProjectCard type={project.type} id={project.id} expanded={true} />
                        </div>
                        <div className="px-3 sm:px-4 py-3 border-t border-[var(--border-color)] bg-[var(--bg-card)] flex justify-between items-center shrink-0">
                            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)]">
                                {project.type}
                            </span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onClick();
                                }}
                                className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.1em] font-bold px-2.5 sm:px-3 py-1.5 rounded hover:opacity-80 transition-opacity"
                                style={{ backgroundColor: brandColor, color: '#fff' }}
                            >
                                <Lock size={10} className="mb-[1px]" />
                                {t('company.view_case')}
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* --- FRONT FLAP (The Cover) --- */}
                <motion.div
                    className="absolute inset-0 z-30 rounded-2xl rounded-tl-none origin-bottom flex flex-col pointer-events-none"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{
                        rotateX: isOpen ? -75 : (isHovered ? -4 : 0),
                        y: isOpen ? 25 : 0,
                        scale: isOpen ? 1.02 : 1,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 160,
                        damping: isOpen ? 24 : 16,
                    }}
                >
                    {/* Cover Material Base */}
                    <div className="absolute inset-0 rounded-2xl rounded-tl-none bg-[#f1f0ea] dark:bg-[#1a1a1a] border border-[var(--border-color)] shadow-xl overflow-hidden pointer-events-none" />

                    {/* Premium Noise Texture */}
                    <div
                        className="absolute inset-0 rounded-2xl rounded-tl-none opacity-[0.4] dark:opacity-[0.15] pointer-events-none mix-blend-overlay"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                        }}
                    />

                    {/* Front Flap Content */}
                    <AnimatePresence>
                        {!isOpen && (
                            <motion.div
                                className="relative z-10 w-full h-full p-5 sm:p-6 flex flex-col justify-between pointer-events-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                            >
                                {/* Top: Badges */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-wrap items-center gap-2">
                                        {isWip && (
                                            <span className="bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 sm:px-2.5 py-1 rounded border border-amber-200/80 dark:border-amber-700/40 text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-widest">
                                                {t('company.wip')}
                                            </span>
                                        )}
                                        <span className="flex items-center gap-1.5 bg-white/50 dark:bg-black/20 px-2 sm:px-2.5 py-1 rounded border border-black/5 dark:border-white/5 text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-[var(--text-secondary)]">
                                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandColor }} />
                                            {project.type}
                                        </span>
                                    </div>
                                    <div className="rotate-[-5deg] border border-red-500/30 dark:border-red-400/20 px-2 sm:px-3 py-1 rounded shrink-0 ml-2">
                                        <span className="font-mono text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] text-red-500/60 dark:text-red-400/50">
                                            Classified
                                        </span>
                                    </div>
                                </div>

                                {/* Middle: Title */}
                                <div className="text-center mt-8 sm:mt-12">
                                    <h3 className="text-xl sm:text-2xl font-serif italic text-[var(--text-primary)] mb-3 px-2 line-clamp-2">{title}</h3>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-[9px] sm:text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                                        <span>{isHovered ? 'Click to examine' : 'Confidential'}</span>
                                    </div>
                                </div>

                                {/* Bottom edge UI */}
                                <div className="mt-auto border-t border-black/5 dark:border-white/5 pt-3 sm:pt-4 flex justify-between items-center opacity-70">
                                    <div className="font-mono text-[7px] sm:text-[8px] uppercase tracking-widest">Auth: F.ZAKI</div>
                                    <div className="flex gap-1">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[var(--text-secondary)] opacity-40" />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
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
