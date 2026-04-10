import React from "react";
import { AlertTriangle, Activity, ScanEye } from "lucide-react";
import ProjectCard from "../../ProjectCard";

const HeroSection = ({ project, caseData, isId, t }) => {
  return (
    <section className="flex flex-col items-center relative overflow-hidden px-6 text-center pt-24 md:pt-32 pb-20">
      {/* Technical Illustration Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full opacity-20 grayscale transition-all duration-1000">
          <ProjectCard
            type={project.type}
            expanded={true}
            id={project.id}
            showChrome={true}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-void)] via-[var(--bg-void)]/80 to-[var(--bg-void)]"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* WIP Label for incomplete projects */}
        {!["stoqo-logistics", "stoqo-sales", "design-system-gudangada"].includes(project.id) && (
          <div className="mb-6 flex items-center justify-center">
            <div className="bg-amber-500/10 border border-amber-500/50 text-amber-600 dark:text-amber-400 px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm">
              <AlertTriangle size={14} />
              <span className="font-mono text-[10px] uppercase tracking-widest">
                {t("protected.wip_label") || "Work in Progress"}
              </span>
            </div>
          </div>
        )}

        {/* Cinematic Title */}
        <div className="mb-4">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[var(--brand)] border-b border-[var(--brand)] pb-1 sm:pb-2 inline-block">
            {caseData.snapshot?.tagline || "Confidential Project"}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif italic mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] tracking-tight max-w-[1072px] mx-auto px-4 md:px-0">
          {isId ? project.title_id || project.title : project.title}
        </h1>

        <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto font-light leading-relaxed mb-16">
          {caseData.challenge || project.details.problem}
        </p>

        {/* Hero Visual Hook */}
        <div className="w-full max-w-6xl aspect-[21/9] bg-black dark:bg-white rounded-2xl border border-[var(--border-color)] shadow-2xl relative overflow-hidden group">
          <ProjectCard
            type={project.type}
            expanded={true}
            id={project.id}
            showChrome={true}
            image={null}
            priority={true}
          />
          <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase text-white dark:text-black bg-black/80 dark:bg-white/80 border border-[var(--border-color)] px-3 py-2 rounded shadow-xl hidden">
            Fig. 1.0  -  System Architecture
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
