import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
   Sun, Moon, ArrowUpRight, Minus, Code, Cpu, Link as LinkIcon, AlertTriangle, Layers,
   Database, Terminal, Share2, Box
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import BackButton from '../components/BackButton';
import { SIDE_PROJECTS } from '../data/portfolioData';

/* --- DESIGN SYSTEM: THE SCHEMATIC ---
   Aesthetic: "Technical Blueprint / Hacker Terminal"
   Focus: High data density, monospaced typography, structural lines.
*/

const SideProjectDetail = () => {
   const { isDark, setIsDark } = useTheme();
   const { id } = useParams();

   // Fetch from centralized data
   const project = SIDE_PROJECTS.find(p => p.id === id);

   // Handle 404
   if (!project) {
      return <Navigate to="/side-projects" replace />;
   }

   const themeStyles = {
      '--bg-void': isDark ? '#050505' : '#F0F0F3',
      '--bg-surface': isDark ? '#111' : '#FFFFFF',
      '--text-primary': isDark ? '#E5E5E5' : '#111827',
      '--text-secondary': isDark ? '#A1A1AA' : '#6B7280',
      '--border-color': isDark ? '#333' : '#E5E7EB',
      '--accent': isDark ? '#3B82F6' : '#2563EB', // Blue accent
      '--code-bg': isDark ? '#000' : '#F3F4F6'
   };

   return (
      <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500 selection:bg-[var(--accent)] selection:text-white">

         {/* BACKGROUND GRID */}
         <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.05]"
            style={{ backgroundImage: `linear-gradient(${isDark ? '#FFF' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#FFF' : '#000'} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
         </div>

         {/* NAVIGATION (Floating) */}
         <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-gradient-to-b from-[var(--bg-void)] via-[var(--bg-void)]/80 to-transparent backdrop-blur-[2px]">
            <BackButton to="/side-projects" label="Back to Archive" />
            <div className="flex items-center gap-4">
               <div className="hidden md:flex items-center gap-2 font-mono text-[10px] uppercase text-[var(--text-secondary)] border border-[var(--border-color)] px-2 py-1 rounded">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></div>
                  System_Status: Online
               </div>
               <button onClick={() => setIsDark(!isDark)} className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
               </button>
            </div>
         </nav>

         <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">

            {/* HEADER BLOCK */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-24 items-end mb-24 pb-12 border-b border-[var(--border-color)]">
               <div>
                  <div className="inline-flex items-center gap-2 mb-6 text-[var(--accent)] font-mono text-xs uppercase tracking-widest border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 rounded-sm">
                     <Terminal size={12} />
                     Experiment Log #{project.id}
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[0.9]">
                     {project.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl font-mono text-[var(--text-secondary)]">
                     // {project.subtitle}
                  </h2>
               </div>

               <div className="space-y-6 lg:text-right">
                  <div className="bg-[var(--bg-surface)] p-6 border border-[var(--border-color)] shadow-sm">
                     <p className="text-sm font-mono leading-relaxed text-[var(--text-secondary)]">
                        "{project.tldr}"
                     </p>
                  </div>
               </div>
            </div>

            {/* MAIN CONTENT GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">

               {/* LEFT: The Narrative */}
               <div className="space-y-16">

                  {project.modules ? (
                     // Dynamic Modules (PRD Mode)
                     project.modules.map((module, idx) => (
                        <section key={idx} className="relative pl-8 border-l-2 border-[var(--border-color)]">
                           <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--bg-void)] border-2 ${idx === 0 ? 'border-[var(--accent)]' : 'border-[var(--text-secondary)]'}`}></div>
                           <h3 className={`font-mono text-xs uppercase tracking-widest ${idx === 0 ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'} mb-4 flex items-center gap-2`}>
                              {String(idx + 1).padStart(2, '0')}__{module.title.replace(/\s+/g, '_')}
                           </h3>
                           <div className="text-lg md:text-xl leading-relaxed text-[var(--text-primary)] opacity-90 whitespace-pre-line">
                              {module.content}
                           </div>
                        </section>
                     ))
                  ) : (
                     // Legacy Mode
                     <>
                        {/* Challenge Section */}
                        <section className="relative pl-8 border-l-2 border-[var(--border-color)]">
                           <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--bg-void)] border-2 border-[var(--accent)]"></div>
                           <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4 flex items-center gap-2">
                              01__Problem_Statement
                           </h3>
                           <p className="text-lg md:text-xl leading-relaxed text-[var(--text-primary)] opacity-90">
                              {project.sections.challenge}
                           </p>
                        </section>

                        {/* Solution Section */}
                        <section className="relative pl-8 border-l-2 border-[var(--border-color)]">
                           <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--bg-void)] border-2 border-[var(--text-secondary)]"></div>
                           <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                              02__Execution_Protocol
                           </h3>
                           <p className="text-lg md:text-xl leading-relaxed text-[var(--text-primary)] opacity-90">
                              {project.sections.approach}
                           </p>
                        </section>
                     </>
                  )}

               </div>

               {/* RIGHT: Technical Specs Sidebar */}
               <aside className="lg:sticky lg:top-32 space-y-8 h-fit">

                  {/* Tech Stack Card */}
                  <div className="group bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 hover:border-[var(--accent)] transition-all">
                     <div className="flex items-center gap-2 mb-4 text-[var(--text-secondary)]">
                        <Cpu size={16} />
                        <h4 className="font-mono text-xs uppercase tracking-widest">Tech Stack</h4>
                     </div>
                     <div className="flex flex-wrap gap-2">
                        {project.stack.map((item, i) => (
                           <span key={i} className="px-3 py-1 bg-[var(--code-bg)] text-[var(--text-primary)] text-xs font-mono border border-[var(--border-color)] rounded-sm">
                              {item}
                           </span>
                        ))}
                     </div>
                  </div>

                  {/* Actions Card */}
                  <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-6">
                     <div className="flex items-center gap-2 mb-4 text-[var(--text-secondary)]">
                        <LinkIcon size={16} />
                        <h4 className="font-mono text-xs uppercase tracking-widest">Access Points</h4>
                     </div>
                     <div className="space-y-3">
                        {project.links.demo && project.links.demo !== '#' ? (
                           <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 bg-[var(--text-primary)] text-[var(--bg-void)] hover:opacity-90 transition-opacity rounded-sm group">
                              <span className="font-mono text-xs uppercase font-bold">Launch Demo</span>
                              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                           </a>
                        ) : (
                           <div className="p-3 bg-[var(--bg-void)] border border-[var(--border-color)] text-[var(--text-secondary)] font-mono text-xs italic flex items-center gap-2 cursor-not-allowed">
                              <AlertTriangle size={12} />
                              Demo Offline
                           </div>
                        )}

                        {project.links.repo && project.links.repo !== '#' && (
                           <a href={`https://${project.links.repo}`} target="_blank" rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 border border-[var(--border-color)] hover:bg-[var(--code-bg)] transition-colors rounded-sm group">
                              <span className="font-mono text-xs uppercase">Source Code</span>
                              <Code size={14} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors" />
                           </a>
                        )}
                     </div>
                  </div>

               </aside>

            </div>

         </main>

      </div>
   );
};

export default SideProjectDetail;