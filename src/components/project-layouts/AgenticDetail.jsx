import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Terminal,
  FileCode2,
  ListTree,
  Activity,
  Box,
  Cpu,
  ArrowRight,
} from "lucide-react";
import AiryDiagram from "../AiryDiagram";

const AgenticDetail = ({
  project,
  activeContext,
  activeChallenge,
  activeProcess,
  activeInsights,
  activeMetrics,
  activeLearnings,
  InteractionComponent,
  activeTitle,
  activeTldr,
  activeSnapshot,
  t,
}) => {
  const containerRef = useRef(null);
  const accentColor = "var(--accent-purple, #8b5cf6)";

  return (
    <div
      ref={containerRef}
      className="text-[var(--text-primary)] font-sans min-h-screen pt-24 pb-32 px-4 md:px-8 selection:bg-[var(--accent-purple)] selection:text-white"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* IDE SHELL CONTAINER */}
        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-void)] overflow-hidden shadow-2xl flex flex-col min-h-[85vh]">
          
          {/* 1. IDE TOP BAR */}
          <div className="h-12 bg-[var(--bg-surface)] border-b border-[var(--border-color)] flex items-center px-4 justify-between shrink-0">
            <div className="flex items-center gap-2 w-1/3">
              <div className="w-3 h-3 rounded-full bg-red-400 opacity-80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"></div>
              <div className="w-3 h-3 rounded-full bg-green-400 opacity-80"></div>
            </div>
            
            <div className="w-1/3 text-center opacity-60">
              <div className="inline-flex items-center justify-center gap-2 px-6 py-1 bg-[var(--bg-card)] rounded-md border border-[var(--border-color)] text-[10px] font-mono tracking-widest text-[var(--accent-purple)] truncate">
                <Activity size={12} />
                HUMAN_ALGORITHM_OS // {project.id}_workspace
              </div>
            </div>

            <div className="w-1/3 flex justify-end">
               {/* Decorative dots */}
               <div className="flex gap-1 opacity-20">
                 <div className="w-1 h-1 rounded-full bg-current"></div>
                 <div className="w-1 h-1 rounded-full bg-current"></div>
                 <div className="w-1 h-1 rounded-full bg-current"></div>
               </div>
            </div>
          </div>

          {/* 2. IDE WORKSPACE SPLIT */}
          <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
            
            {/* -- LEFT PANE: EXPLORER / CONTEXT -- */}
            <div className="w-full lg:w-64 shrink-0 border-r border-[var(--border-color)] bg-[var(--bg-surface)] overflow-y-auto">
              {/* Explorer Header */}
              <div className="p-4 border-b border-[var(--border-color)] text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2">
                <ListTree size={12} /> EXPLORER
              </div>
              
              <div className="p-4 font-mono text-xs">
                 <div className="mb-6">
                   <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold mb-3 cursor-pointer">
                     <span className="opacity-50">▾</span> metadata.json
                   </div>
                   <div className="pl-4 space-y-3 border-l border-[var(--border-color)] ml-1">
                     <div>
                       <div className="text-[var(--text-secondary)] opacity-60 uppercase text-[9px] tracking-wider mb-1">Type</div>
                       <div className="text-[var(--accent-purple)]">{project.type}</div>
                     </div>
                     <div>
                       <div className="text-[var(--text-secondary)] opacity-60 uppercase text-[9px] tracking-wider mb-1">Role</div>
                       <div className="text-[var(--accent-purple)]">{activeContext.role}</div>
                     </div>
                     <div>
                       <div className="text-[var(--text-secondary)] opacity-60 uppercase text-[9px] tracking-wider mb-1">Timeline</div>
                       <div className="text-[var(--accent-purple)]">{activeContext.timeline}</div>
                     </div>
                   </div>
                 </div>

                 <div className="mb-6">
                   <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold mb-3 cursor-pointer">
                     <span className="opacity-50">▾</span> dependencies.lock
                   </div>
                   <div className="pl-4 border-l border-[var(--border-color)] ml-1 flex flex-col gap-2">
                     {project.stack.map(tech => (
                        <div key={tech} className="text-[#ce9178] before:content-['>'] before:opacity-30 before:mr-2">
                           {tech}
                        </div>
                     ))}
                   </div>
                 </div>

                 {activeMetrics && activeMetrics.length > 0 && (
                   <div className="mb-6">
                     <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold mb-3 cursor-pointer">
                       <span className="opacity-50">▾</span> signals.log
                     </div>
                     <div className="pl-4 border-l border-[var(--border-color)] ml-1 space-y-4">
                       {activeMetrics.map((m, i) => (
                         <div key={i}>
                           <div className="text-xl font-bold tracking-tight text-[var(--text-primary)]">{m.value}</div>
                           <div className="text-[8px] uppercase tracking-wider text-[var(--text-secondary)] mt-1">{m.label}</div>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}
              </div>
            </div>

            {/* -- CENTER PANE: EDITOR (NARRATIVE) -- */}
            <div className="flex-1 flex flex-col bg-[var(--bg-card)] overflow-y-auto relative">
              {/* Editor Tabs bar */}
              <div className="flex bg-[var(--bg-surface)] border-b border-[var(--border-color)] overflow-x-auto hide-scrollbar sticky top-0 z-20">
                <div className="px-6 py-2.5 bg-[var(--bg-card)] border-t-2 border-[var(--accent-purple)] border-r border-[var(--border-color)] text-xs font-mono flex items-center gap-2 text-[var(--text-primary)] shrink-0">
                  <FileCode2 size={14} className="text-[var(--accent-purple)]" /> Readme.md
                </div>
                <div className="px-6 py-2.5 bg-transparent border-t-2 border-transparent border-r border-[var(--border-color)] text-xs font-mono flex items-center gap-2 text-[var(--text-secondary)] opacity-60 shrink-0">
                  <Terminal size={14} /> console.sh
                </div>
              </div>

              {/* Editor Content Area (Human readable!) */}
              <div className="p-8 lg:p-12 max-w-4xl pt-16">
                 {/* Hero Title injected as a markdown H1 */}
                 <div className="mb-16">
                    <div className="text-[var(--accent-purple)] font-mono text-sm mb-4"># {project.id}</div>
                    <h1 className="text-4xl lg:text-5xl font-serif italic font-bold mb-6 text-[var(--text-primary)] leading-[1.1]">
                      {activeTitle}
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-[var(--text-secondary)] leading-relaxed">
                      {activeTldr}
                    </p>
                 </div>

                 {/* The Challenge */}
                 <div className="mb-20">
                    <div className="text-[var(--accent-purple)] font-mono text-sm mb-6 flex items-center gap-2">
                       <span>## The_Challenge</span>
                    </div>
                    <div className="prose prose-lg max-w-none text-[var(--text-primary)]">
                       <p className="text-xl leading-relaxed font-light border-l-2 border-[var(--border-color)] pl-6">
                           {activeChallenge}
                       </p>
                    </div>
                 </div>

                 {/* The Process */}
                 {activeProcess && (
                   <div className="mb-20">
                      <div className="text-[var(--accent-purple)] font-mono text-sm mb-10 flex items-center gap-2">
                         <span>## Methodology_Execution</span>
                      </div>
                      
                      <div className="space-y-16">
                        {activeProcess.map((step, idx) => (
                           <div key={idx} className="relative group">
                              <div className="absolute -left-6 top-1 text-[var(--border-color)] font-mono text-xl group-hover:text-[var(--accent-purple)] transition-colors">
                                 {idx + 1}
                              </div>
                              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                              <p className="text-[var(--text-secondary)] leading-relaxed mb-6 font-light">
                                 {step.desc}
                              </p>
                              {step.image && (
                                <div className="rounded-xl border border-[var(--border-color)] overflow-hidden bg-[var(--bg-surface)] p-2">
                                  {step.image.startsWith("airy:") ? (
                                    <div className="h-64 flex items-center justify-center">
                                      <AiryDiagram type={step.image.split(":")[1]} />
                                    </div>
                                  ) : (
                                    <img src={step.image} alt={step.title} className="w-full object-cover rounded-lg" />
                                  )}
                                </div>
                              )}
                           </div>
                        ))}
                      </div>
                   </div>
                 )}

                 {/* Learnings */}
                 {activeLearnings && (
                   <div className="mb-10">
                      <div className="text-[var(--accent-purple)] font-mono text-sm mb-6 flex items-center gap-2">
                         <span>## Post_Mortem</span>
                      </div>
                      <div className="p-8 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl">
                         <p className="font-serif italic text-lg text-[var(--text-secondary)] leading-relaxed">
                           "{activeLearnings}"
                         </p>
                      </div>
                   </div>
                 )}
              </div>
            </div>

            {/* -- RIGHT PANE: PREVIEW / RUNTIME TERMINAL -- */}
            {InteractionComponent && (
              <div className="w-full lg:w-96 shrink-0 border-l border-[var(--border-color)] flex flex-col bg-[var(--bg-void)]">
                {/* Terminal Header */}
                <div className="p-4 border-b border-[var(--border-color)] text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 shrink-0">
                  <Terminal size={12} /> RUNTIME_ENVIRONMENT
                </div>

                <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
                   <div className="sticky top-0 mb-6">
                      <div className="text-[10px] font-mono text-emerald-500 mb-2">
                         $ pnpm run start:agent --watch
                      </div>
                      <div className="text-[10px] font-mono text-[var(--text-secondary)] opacity-60">
                         Starting live interaction environment...
                      </div>
                   </div>

                   {/* The Actual Component mounted right inside the terminal pane! */}
                   <div className="w-full h-[500px] border border-[var(--accent-purple)]/20 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.05)] bg-[var(--bg-card)]">
                      <InteractionComponent />
                   </div>
                </div>
              </div>
            )}
            
          </div>
          
          {/* 3. IDE BOTTOM STATUS BAR */}
          <div className="h-6 bg-[#007acc] dark:bg-[var(--accent-purple)] text-white flex items-center justify-between px-4 text-[9px] font-mono uppercase tracking-widest shrink-0">
            <div className="flex gap-4">
              <span className="flex items-center gap-1"><Cpu size={10}/> STATUS: 200 OK</span>
              <span className="hidden sm:inline">UTF-8</span>
              <span className="hidden sm:inline">React/ADK</span>
            </div>
            <div className="flex gap-4">
               {project.links?.repo && (
                 <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 flex items-center gap-1">
                   View Source <ArrowRight size={10} />
                 </a>
               )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AgenticDetail;
