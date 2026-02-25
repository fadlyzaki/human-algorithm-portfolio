import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Activity, Calendar, BookOpen, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ProjectCard from './ProjectCard';

const VentureCard = ({ project, index, isIndonesian, onClick }) => {
    const { isDark } = useTheme();
    const title = (isIndonesian && project.title_id) ? project.title_id : (project.title?.en || project.title);
    const desc = (isIndonesian && project.desc_id) ? project.desc_id : (project.desc?.en || project.desc);

    // Dynamic Archetype Selection
    switch (project.id) {
        case 'human-algorithm':
            return <SystemCoreCard project={project} title={title} desc={desc} onClick={onClick} />;
        case 'dolphi':
            return <CosmicPopCard project={project} title={title} desc={desc} onClick={onClick} />;
        case 'productivity-illusion':
            return <BrutalistCard project={project} title={title} desc={desc} onClick={onClick} isDark={isDark} />;
        case 'year-in-review':
            return <BentoCard project={project} title={title} desc={desc} onClick={onClick} />;
        case 'interactive-workbook':
            return <BlueprintCard project={project} title={title} desc={desc} onClick={onClick} isDark={isDark} />;
        default:
            return null;
    }
};

// 1. THE SYSTEM CORE (Human Algorithm)
const SystemCoreCard = ({ project, title, desc, onClick }) => (
    <motion.div
        onClick={onClick}
        className="group relative h-[450px] rounded-3xl border-2 border-[var(--border-color)] bg-[#0A0A0A] overflow-hidden cursor-pointer flex flex-col"
        whileHover={{ borderColor: 'rgba(255,255,255,0.4)', scale: 0.98 }}
    >
        {/* Terminal Text Background */}
        <div className="absolute inset-0 opacity-5 font-mono text-[8px] leading-none pointer-events-none select-none overflow-hidden p-4">
            {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="mb-1 whitespace-nowrap">
                    {`INIT_CORE_PORTFOLIO_V2.9 >> AGENT_00${i} >> STATUS_ACTIVE >> RECURSIVE_TRUE >> PATH=/root/human-algorithm/${project.id}/kernel >> `}
                    {Math.random().toString(36).substring(2, 15)}
                </div>
            ))}
        </div>

        {/* Scanning Line */}
        <motion.div
            className="absolute left-0 right-0 h-px bg-blue-500/20 z-10 pointer-events-none"
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Top Image Section (Replacing right side layout) */}
        <div className="h-[40%] relative overflow-hidden bg-black/40 border-b border-white/5 flex-shrink-0">
            <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 scale-110 group-hover:scale-100">
                <ProjectCard id={project.id} expanded={true} image={project.coverImage} backgroundOnly />
            </div>
            {/* Visual Redactions */}
            <div className="absolute top-4 left-4 w-16 h-1 bg-blue-500/30 blur-md"></div>
            <div className="absolute bottom-4 right-4 w-16 h-1 bg-purple-500/30 blur-md"></div>
        </div>

        {/* Bottom Content Section */}
        <div className="flex-1 p-6 relative z-20 flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 border border-blue-500/30 rounded bg-blue-500/10">
                        <Cpu size={14} className="text-blue-400" />
                    </div>
                    <span className="font-mono text-[9px] tracking-widest text-blue-400 uppercase">System Core // Agentic Workflow</span>
                </div>

                <h3 className="text-3xl font-serif italic mb-3 text-white group-hover:text-blue-100 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm font-light mb-4 line-clamp-3">
                    {desc}
                </p>
            </div>

            <div className="flex gap-2 flex-wrap">
                {project.stack.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 border border-white/10 rounded-full font-mono text-[8px] text-gray-500 uppercase">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);



// 2. THE COSMIC POP (Dolphi)
const CosmicPopCard = ({ project, title, desc, onClick }) => (
    <motion.div
        onClick={onClick}
        className="group relative h-[450px] rounded-3xl border-2 border-transparent bg-gradient-to-br from-[#1A1A2E] to-[#16213E] overflow-hidden cursor-pointer p-8 flex flex-col justify-end"
        whileHover={{ scale: 0.98, borderColor: '#00C2FF' }}
    >
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
            <motion.div
                className="absolute top-20 left-20 w-32 h-32 bg-[#00C2FF]/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="absolute inset-0 opacity-20 sparkle-bg"></div>
        </div>

        <div className="relative z-10">
            <div className="w-16 h-16 mb-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-[#00C2FF]/20 group-hover:border-[#00C2FF]/40 transition-all">
                <Activity size={32} className="text-[#00C2FF]" />
            </div>
            <h3 className="text-3xl font-serif italic mb-4 text-white">
                {title}
            </h3>
            <p className="text-blue-100/60 font-light text-sm mb-6 leading-relaxed line-clamp-3">
                {desc}
            </p>
            <div className="flex gap-2">
                {project.stack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-[9px] font-mono bg-white/5 px-2 py-1 rounded text-[#00C2FF] uppercase tracking-wider">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        {/* Background Visual */}
        <div className="absolute top-0 right-0 w-full h-full -z-0 opacity-40 group-hover:opacity-60 transition-opacity">
            <ProjectCard id={project.id} backgroundOnly />
        </div>
    </motion.div>
);

// 3. THE BRUTALIST (Productivity Illusion)
const BrutalistCard = ({ project, title, desc, onClick }) => (
    <motion.div
        onClick={onClick}
        className="group relative h-[450px] rounded-3xl bg-[#E2E2E2] dark:bg-[#1A1A1A] border-[4px] border-black dark:border-white overflow-hidden cursor-pointer"
        whileHover={{ x: -4, y: -4, boxShadow: '8px 8px 0px 0px #FF3B30' }}
    >
        <div className="absolute top-4 right-4 z-20">
            <ArrowUpRight size={24} className="text-black dark:text-white" />
        </div>

        <div className="p-8 h-full flex flex-col relative z-10">
            <div className="mb-auto">
                <div className="inline-block bg-[#FF3B30] text-white px-3 py-1 font-mono text-[10px] uppercase font-bold mb-4">
                    Research // Cognitive Mastery
                </div>
                <h3 className="text-3xl md:text-2xl font-serif font-black italic uppercase leading-tight text-black dark:text-white mb-6">
                    {title}
                </h3>
            </div>

            <div className="mt-auto">
                <p className="text-black dark:text-white font-bold text-sm mb-6 leading-tight border-l-4 border-[#FF3B30] pl-4 line-clamp-3">
                    {desc}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                        <span key={tech} className="bg-black dark:bg-white text-white dark:text-black text-[9px] font-bold px-2 py-0.5 uppercase tracking-tighter">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* Glitch Overlay Effect */}
        <div className="absolute inset-0 bg-[#FF3B30]/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </motion.div>
);

// 4. THE BENTO MAGAZINE (Year in Review)
const BentoCard = ({ project, title, desc, onClick }) => (
    <motion.div
        onClick={onClick}
        className="group relative h-[450px] rounded-3xl bg-[#F8F8F8] dark:bg-[#0F0F0F] border border-[var(--border-color)] overflow-hidden cursor-pointer flex flex-col"
        whileHover={{ scale: 1.02 }}
    >
        {/* Visual Top Half */}
        <div className="h-2/3 bg-gradient-to-tr from-pink-100 to-orange-100 dark:from-pink-900/20 dark:to-orange-900/20 relative overflow-hidden">
            <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000">
                <ProjectCard id={project.id} backgroundOnly />
            </div>
            {/* Sticker Style Tag */}
            <div className="absolute top-6 left-6 rotate-[-5deg] bg-white dark:bg-black border border-black dark:border-white px-4 py-1 flex items-center gap-2 shadow-lg scale-90 group-hover:scale-100 transition-transform">
                <Calendar size={14} />
                <span className="font-mono text-[10px] font-bold">WRAPPED_2025</span>
            </div>
        </div>

        {/* Content Bottom Half */}
        <div className="flex-1 p-6 flex flex-col justify-center">
            <h3 className="text-3xl font-serif italic mb-3 text-[var(--text-primary)]">
                {title}
            </h3>
            <p className="text-[var(--text-secondary)] text-sm font-light mb-4 line-clamp-3">
                {desc}
            </p>
            <div className="flex justify-between items-center">
                <div className="flex gap-1">
                    {project.stack.slice(0, 3).map(tech => (
                        <div key={tech} className="w-2 h-2 rounded-full bg-[var(--border-color)]" title={tech}></div>
                    ))}
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest opacity-40">Bento Mode // 1.0</span>
            </div>
        </div>
    </motion.div>
);

// 5. THE BLUEPRINT (Interactive Workbook)
const BlueprintCard = ({ project, title, desc, onClick }) => (
    <motion.div
        onClick={onClick}
        className="group relative h-[450px] rounded-3xl bg-blue-50 dark:bg-[#0A1128] border border-blue-200 dark:border-blue-900 overflow-hidden cursor-pointer"
        whileHover={{ backgroundColor: isDark => isDark ? '#0F1A3D' : '#F0F7FF' }}
    >
        {/* Grid Background */}
        <div className="absolute inset-0 blueprint-grid opacity-20 dark:opacity-40"></div>

        {/* Construction Lines */}
        <div className="absolute left-10 top-0 bottom-0 w-px bg-blue-500/20"></div>
        <div className="absolute right-10 top-0 bottom-0 w-px bg-blue-500/20"></div>
        <div className="absolute top-10 left-0 right-0 h-px bg-blue-500/20"></div>
        <div className="absolute bottom-10 left-0 right-0 h-px bg-blue-500/20"></div>

        <div className="relative z-10 p-12 h-full flex flex-col">
            <div className="flex justify-between items-start mb-auto">
                <div className="p-3 border-2 border-dashed border-blue-400/50">
                    <BookOpen className="text-blue-500" />
                </div>
                <div className="text-right">
                    <div className="font-mono text-[9px] text-blue-500/60 uppercase">Dwg No. 2026-08</div>
                    <div className="font-mono text-[9px] text-blue-500/60 uppercase">Scale: 1:1</div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-3xl font-serif italic text-blue-900 dark:text-blue-100 leading-tight">
                    {title}
                </h3>
                <div className="w-full h-px bg-blue-500/30"></div>
                <p className="text-blue-700/70 dark:text-blue-300/60 text-sm font-light leading-relaxed line-clamp-3">
                    {desc}
                </p>
                <div className="flex gap-4 font-mono text-[9px] text-blue-500/60">
                    {project.stack.slice(0, 3).map(tech => (
                        <span key={tech} className="flex items-center gap-1">
                            <Layers size={10} /> {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Dimension Labels */}
            <div className="absolute left-2 top-1/2 -rotate-90 origin-center text-[8px] font-mono text-blue-500/40 uppercase">Height: 450px</div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-mono text-blue-500/40 uppercase">Conceptual Blueprint // Education</div>
        </div>
    </motion.div>
);

export default VentureCard;
