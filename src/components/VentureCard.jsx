import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Cpu,
  Activity,
  Calendar,
  BookOpen,
  Layers,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import ProjectCard from "./ProjectCard";
import BlindsReveal from "./BlindsReveal";

const MOTION_CONFIG = {
  HOVER_SPRING: { type: "spring", stiffness: 300, damping: 20 },
  IDLE_SYSTEM: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  IDLE_COSMIC: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  IDLE_BRUTALIST: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
  IDLE_BENTO: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
};

const VentureCard = ({ project, isIndonesian, onClick }) => {
  const { isDark } = useTheme();
  const [isManualHover, setIsManualHover] = useState(false);
  const [isAutoHover, setIsAutoHover] = useState(false);
  const containerRef = React.useRef(null);

  const isHovered = isManualHover || isAutoHover;

  useEffect(() => {
    const isMobile =
      window.innerWidth < 768 ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;
    
    if (!isMobile) return;

    let intervalId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAutoHover(true);
          intervalId = setInterval(() => {
            setIsAutoHover((prev) => !prev);
          }, 4000);
        } else {
          setIsAutoHover(false);
          if (intervalId) clearInterval(intervalId);
        }
      },
      { threshold: 0.6 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [project.id]);

  const resolveText = (field) => {
    if (!field) return "";
    if (typeof field === "object") {
      return isIndonesian ? field.id || field.en : field.en;
    }
    return field;
  };

  const title =
    isIndonesian && project.title_id
      ? project.title_id
      : resolveText(project.title);
  const desc =
    isIndonesian && project.desc_id
      ? project.desc_id
      : resolveText(project.desc);

  // Dynamic Archetype Selection
  const commonProps = {
    project,
    title,
    desc,
    isIndonesian,
    onClick,
    isHovered,
    ref: containerRef,
    onMouseEnter: () => setIsManualHover(true),
    onMouseLeave: () => setIsManualHover(false),
  };

  switch (project.id) {
    case "human-algorithm":
      return <SystemCoreCard {...commonProps} isDark={isDark} />;
    case "dolphi":
      return <CosmicPopCard {...commonProps} isDark={isDark} />;
    case "productivity-illusion":
      return <BrutalistCard {...commonProps} isDark={isDark} />;
    case "year-in-review":
      return <BentoCard {...commonProps} isDark={isDark} />;
    case "interactive-workbook":
      return <BlueprintCard {...commonProps} isDark={isDark} />;
    default:
      return null;
  }
};

// 1. THE SYSTEM CORE (Human Algorithm)
const SystemCoreCard = ({ project, title, desc, onClick, isHovered, isIndonesian, ref, onMouseEnter, onMouseLeave }) => (
  <motion.div
    ref={ref}
    id={`venture-card-${project.id}`}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="group relative h-[450px] rounded-3xl border-2 border-[var(--border-color)] bg-[var(--bg-void)] overflow-hidden cursor-pointer flex flex-col"
    animate={isHovered ? { borderColor: "rgba(var(--bg-surface-rgb), 0.4)", scale: 0.98, y: 0 } : { borderColor: "var(--border-color)", scale: 1, y: [0, -3, 0] }}
    transition={isHovered ? MOTION_CONFIG.HOVER_SPRING : MOTION_CONFIG.IDLE_SYSTEM}
    whileHover={{ borderColor: "rgba(var(--bg-surface-rgb), 0.4)", scale: 0.98 }}
  >
    <BlindsReveal isOpen={isHovered} slats={8} color="var(--bg-void)">
      {/* Terminal Text Background */}
      <div className="absolute inset-0 opacity-5 font-mono text-[8px] leading-none pointer-events-none select-none overflow-hidden p-4 text-[var(--text-primary)]">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="mb-1 whitespace-nowrap">
            {`INIT_CORE_PORTFOLIO_V2.9 >> AGENT_00${i} >> STATUS_ACTIVE >> RECURSIVE_TRUE >> PATH=/root/human-algorithm/${project.id}/kernel >> `}
            {Math.floor((i + 1) * project.id.length * 1234567)
              .toString(36)
              .substring(0, 13)}
          </div>
        ))}
      </div>

      {/* Scanning Line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-[var(--accent-blue)]/20 z-10 pointer-events-none"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Top Image Section */}
      <div className="h-[40%] relative overflow-hidden bg-[var(--bg-card)] border-b border-[var(--border-color)] flex-shrink-0">
        <div className={`absolute inset-0 transition-all duration-700 ${isHovered ? 'grayscale-0 opacity-100 scale-100' : 'grayscale opacity-60 scale-110 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-100'}`}>
          <ProjectCard
            id={project.id}
            expanded={true}
            image={project.coverImage}
            backgroundOnly
          />
        </div>
        {/* Visual Redactions */}
        <div className="absolute top-4 left-4 w-16 h-1 bg-[var(--accent-blue)]/30 blur-md"></div>
        <div className="absolute bottom-4 right-4 w-16 h-1 bg-[var(--accent-purple)]/30 blur-md"></div>
      </div>

      {/* Bottom Content Section */}
      <div className="flex-1 p-6 relative z-20 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 border border-[var(--accent-blue)]/30 rounded bg-[var(--accent-blue)]/10">
              <Cpu size={14} className="text-[var(--accent-blue)]" />
            </div>
            <span className="font-mono text-[9px] tracking-widest text-[var(--accent-blue)] uppercase">
              {isIndonesian
                ? "Sistem Inti // Alur Kerja Agen"
                : "System Core // Agentic Workflow"}
            </span>
          </div>

          <h3 className={`text-3xl font-serif italic mb-3 transition-colors ${isHovered ? 'text-[var(--accent-blue)]' : 'text-[var(--text-primary)] group-hover:text-[var(--accent-blue)]'}`}>
            {title}
          </h3>
          <p className="text-[var(--text-secondary)] text-sm font-light mb-4 line-clamp-3">
            {desc}
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 border border-[var(--border-color)] rounded-full font-mono text-[8px] text-[var(--text-secondary)] uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </BlindsReveal>
  </motion.div>
);

// 2. THE COSMIC POP (Dolphi)
const CosmicPopCard = ({ project, title, desc, onClick, isHovered, isIndonesian, ref, onMouseEnter, onMouseLeave }) => (
  <motion.div
    ref={ref}
    id={`venture-card-${project.id}`}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="group relative h-[450px] rounded-3xl border-2 border-transparent bg-gradient-to-br from-[var(--accent-indigo)] to-[var(--accent-indigo)] overflow-hidden cursor-pointer flex flex-col justify-end transition-colors"
    animate={isHovered ? { scale: 0.98, borderColor: "var(--accent-sky)", y: 0 } : { scale: 1, borderColor: "transparent", y: [0, -3, 0] }}
    transition={isHovered ? MOTION_CONFIG.HOVER_SPRING : MOTION_CONFIG.IDLE_COSMIC}
    whileHover={{ scale: 0.98, borderColor: "var(--accent-sky)" }}
  >
    <BlindsReveal isOpen={isHovered} slats={8} color="var(--accent-indigo)">
      <div className="w-full h-full absolute inset-0 p-8 flex flex-col justify-end">
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-[var(--accent-sky)]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <div className="absolute inset-0 opacity-20 sparkle-bg"></div>
        </div>

        <div className="relative z-10">
          <div className={`w-16 h-16 mb-6 rounded-2xl backdrop-blur-xl flex items-center justify-center transition-all ${isHovered ? 'bg-[var(--accent-sky)]/20 border-[var(--accent-sky)]/40' : 'bg-white/5 border-white/10 group-hover:bg-[var(--accent-sky)]/20 group-hover:border-[var(--accent-sky)]/40'}`}>
            <Activity size={32} className="text-[var(--accent-sky)]" />
          </div>
          <h3 className="text-3xl font-serif italic mb-4 text-white">{title}</h3>
          <p className="text-blue-100/60 font-light text-sm mb-6 leading-relaxed line-clamp-5">
            {desc}
          </p>
          <div className="flex gap-2">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[9px] font-mono bg-white/5 px-2 py-1 rounded text-[var(--accent-sky)] uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Background Visual */}
        <div className={`absolute top-0 right-0 w-full h-full -z-0 transition-opacity ${isHovered ? 'opacity-60' : 'opacity-40 group-hover:opacity-60'}`}>
          <ProjectCard id={project.id} backgroundOnly />
        </div>
      </div>
    </BlindsReveal>
  </motion.div>
);

// 3. THE BRUTALIST (Productivity Illusion)
const BrutalistCard = ({ project, title, desc, onClick, isHovered, isIndonesian, ref, onMouseEnter, onMouseLeave }) => (
  <motion.div
    ref={ref}
    id={`venture-card-${project.id}`}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="group relative h-[450px] rounded-3xl bg-[#E2E2E2] dark:bg-[var(--bg-card)] border-[4px] border-black dark:border-white overflow-hidden cursor-pointer"
    animate={isHovered ? { x: -4, y: -4, boxShadow: "8px 8px 0px 0px var(--accent-red)" } : { x: 0, y: [0, -2, 0], boxShadow: "0px 0px 0px 0px var(--accent-red)" }}
    transition={isHovered ? MOTION_CONFIG.HOVER_SPRING : MOTION_CONFIG.IDLE_BRUTALIST}
    whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px 0px var(--accent-red)" }}
  >
    {/* Blinds Reveal over full card */}
    <BlindsReveal isOpen={isHovered} slats={10} color="#1a1a1a">
      <div className="absolute top-4 right-4 z-20">
        <ArrowUpRight size={24} className="text-black dark:text-white" />
      </div>

      <div className="p-8 h-full flex flex-col relative z-10">
        <div className="mb-auto">
          <div className="inline-block bg-[var(--accent-red)] text-white px-3 py-1 font-mono text-[10px] uppercase font-bold mb-4">
            {isIndonesian
              ? "Riset // Penguasaan Kognitif"
              : "Research // Cognitive Mastery"}
          </div>
          <h3 className="text-3xl md:text-2xl font-serif font-black italic uppercase leading-tight text-black dark:text-white mb-6">
            {title}
          </h3>
        </div>

        <div className="mt-auto">
          <p className="text-black dark:text-white font-bold text-sm mb-6 leading-tight border-l-4 border-[var(--accent-red)] pl-4 line-clamp-3">
            {desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="bg-black dark:bg-white text-white dark:text-black text-[9px] font-bold px-2 py-0.5 uppercase tracking-tighter"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Glitch Overlay Effect */}
      <div className={`absolute inset-0 bg-[var(--accent-red)]/10 mix-blend-multiply transition-opacity pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
    </BlindsReveal>
  </motion.div>
);

// 4. THE BENTO MAGAZINE (Year in Review)
const BentoCard = ({ project, title, desc, onClick, isHovered, isIndonesian, ref, onMouseEnter, onMouseLeave }) => (
  <motion.div
    ref={ref}
    id={`venture-card-${project.id}`}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="group relative h-[450px] rounded-3xl bg-[var(--bg-surface)] dark:bg-[var(--bg-void)] border border-[var(--border-color)] overflow-hidden cursor-pointer flex flex-col"
    animate={isHovered ? { scale: 1.02, y: 0 } : { scale: 1, y: [0, -3, 0] }}
    transition={isHovered ? MOTION_CONFIG.HOVER_SPRING : MOTION_CONFIG.IDLE_BENTO}
    whileHover={{ scale: 1.02 }}
  >
    <BlindsReveal isOpen={isHovered} slats={8} color="rgb(251, 207, 232)">
      {/* Visual Top Half */}
      <div className="h-[55%] bg-gradient-to-tr from-pink-100 to-orange-100 dark:from-pink-900/20 dark:to-orange-900/20 relative overflow-hidden">
        <div className={`absolute inset-0 transition-all duration-1000 ${isHovered ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}>
          <ProjectCard id={project.id} backgroundOnly />
        </div>
        {/* Sticker Style Tag */}
        <div className={`absolute top-6 left-6 rotate-[-5deg] bg-white dark:bg-black border border-black dark:border-white px-4 py-1 flex items-center gap-2 shadow-lg transition-transform z-10 ${isHovered ? 'scale-100' : 'scale-90 group-hover:scale-100'}`}>
          <Calendar size={14} />
          <span className="font-mono text-[10px] font-bold">WRAPPED_2025</span>
        </div>
      </div>

      {/* Content Bottom Half */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-serif italic mb-2 text-[var(--text-primary)] line-clamp-1">
            {title}
          </h3>
          <p className="text-[var(--text-secondary)] text-sm font-light mb-4 line-clamp-3 leading-relaxed">
            {desc}
          </p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex gap-1.5">
            {project.stack.slice(0, 3).map((tech) => (
              <div
                key={tech}
                className="w-2 h-2 rounded-full bg-[var(--border-color)]"
                title={tech}
              ></div>
            ))}
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest opacity-40">
            {isIndonesian
              ? "Mode Bento // 1.0"
              : "Bento Mode // 1.0"}
          </span>
        </div>
      </div>
    </BlindsReveal>
  </motion.div>
);

// 5. THE BLUEPRINT (Interactive Workbook)
const BlueprintCard = ({ project, title, desc, onClick, isHovered, isIndonesian, ref, onMouseEnter, onMouseLeave }) => (
  <motion.div
    ref={ref}
    id={`venture-card-${project.id}`}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="group relative h-[450px] rounded-3xl bg-blue-50 dark:bg-[var(--bg-void)] border border-blue-200 dark:border-blue-900 overflow-hidden cursor-pointer"
    animate={isHovered ? { scale: 1.02, y: -4 } : { scale: 1, y: [0, -3, 0] }}
    whileHover={{ scale: 1.02, y: -4 }}
    transition={isHovered ? MOTION_CONFIG.HOVER_SPRING : MOTION_CONFIG.IDLE_SYSTEM}
  >
    {/* Blinds Reveal over full blueprint card */}
    <BlindsReveal isOpen={isHovered} slats={8} color="rgb(219, 234, 254)">
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
            <div className="font-mono text-[9px] text-blue-500/60 uppercase">
              Dwg No. 2026-08
            </div>
            <div className="font-mono text-[9px] text-blue-500/60 uppercase">
              Scale: 1:1
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl font-serif italic text-blue-900 dark:text-blue-100 leading-tight">
            {title}
          </h3>
          <div className="w-full h-px bg-blue-500/30"></div>
          <p className="text-blue-700/70 dark:text-blue-200 text-sm font-light leading-relaxed line-clamp-5">
            {desc}
          </p>
          <div className="flex gap-4 font-mono text-[9px] text-blue-500/60">
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className="flex items-center gap-1">
                <Layers size={10} /> {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Dimension Labels */}
        <div className="absolute left-2 top-1/2 -rotate-90 origin-center text-[8px] font-mono text-blue-500/40 uppercase">
          Height: 450px
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-mono text-blue-500/40 uppercase">
          {isIndonesian
            ? "Cetak Biru Konseptual // Edukasi"
            : "Conceptual Blueprint // Education"}
        </div>
      </div>
    </BlindsReveal>
  </motion.div>
);

export default VentureCard;
