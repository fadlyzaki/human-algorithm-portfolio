import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
   Sun, Moon, ArrowUpRight, Code, Cpu, Link as LinkIcon, AlertTriangle,
   Terminal, Share2, Box, ArrowLeft, Monitor, Layers, FileText, Globe, ScanEye
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useHandCursor } from '../context/HandCursorContext';
import BackButton from '../components/BackButton';
import { SIDE_PROJECTS } from '../data/portfolioData';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import Treasure from '../components/Treasure';
import ZoomableImage from '../components/ZoomableImage';

// Interaction Components
import WorkforceAI from '../components/interactions/WorkforceAI';
import CommerceAI from '../components/interactions/CommerceAI';
import EfficiencyAI from '../components/interactions/EfficiencyAI';
import NexusAI from '../components/interactions/NexusAI';

/* --- DESIGN SYSTEM: THE MAKER'S LOG ---
   Aesthetic: "Industrial / Technical Blueprint" (Similar to ProtectedCaseStudy)
   Focus: High-fidelity visual storytelling, schematic layouts, rich typography.
*/

const SideProjectDetail = () => {
   const { isDark, setIsDark } = useTheme();
   const { language, toggleLanguage, isIndonesian } = useLanguage();
   const { isGestureMode, toggleGestureMode } = useHandCursor();
   const { id } = useParams();

   // Fetch Data
   const project = SIDE_PROJECTS.find(p => p.id === id);

   if (!project) {
      return (
         <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none"
               style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #333 25%, #333 26%, transparent 27%, transparent 74%, #333 75%, #333 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #333 25%, #333 26%, transparent 27%, transparent 74%, #333 75%, #333 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}>
            </div>
            <div className="z-10 text-center border border-red-900/50 bg-red-950/10 p-12 backdrop-blur-sm max-w-lg w-full">
               <AlertTriangle size={48} className="mx-auto text-red-500 mb-6 animate-pulse" />
               <h1 className="text-2xl font-bold text-red-500 mb-2 uppercase tracking-[0.2em]">Data Corrupted</h1>
               <div className="h-px w-16 bg-red-800 mx-auto mb-6"></div>
               <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  The project file <span className="text-white">"{id}"</span> could not be retrieved from the archives.
               </p>
               <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-400 hover:text-red-300 border border-red-900/50 px-6 py-3 hover:bg-red-950/30 transition-all">
                  <ArrowLeft size={14} /> Return to Base
               </Link>
            </div>
         </div>
      );
   }

   const themeStyles = {
      '--bg-void': isDark ? '#050505' : '#F2F2F5', // Slightly lighter/darker concrete feel
      '--bg-surface': isDark ? '#111' : '#FFFFFF',
      '--bg-card': isDark ? '#161616' : '#FFFFF',
      '--text-primary': isDark ? '#E5E5E5' : '#111827',
      '--text-secondary': isDark ? '#A1A1AA' : '#6B7280',
      '--border-color': isDark ? '#333' : '#E5E7EB',
      '--accent': isDark ? '#3B82F6' : '#000000', // Blue or Strict Black
      '--code-bg': isDark ? '#000' : '#F3F4F6',
      '--brand': isDark ? '#60A5FA' : '#2563EB' // Dynamic brand color fallback
   };

   // Content Resolution Fallbacks
   const activeTitle = (isIndonesian && project.title_id) ? project.title_id : project.title;
   const activeSubtitle = (isIndonesian && project.subtitle_id) ? project.subtitle_id : project.subtitle;
   const activeTldr = (isIndonesian && project.tldr_id) ? project.tldr_id : project.tldr;

   // Framework Data
   const rawSnapshot = project.snapshot || {};
   const activeSnapshot = {
      tagline: (isIndonesian && project.snapshot_id?.tagline) || rawSnapshot.tagline || activeSubtitle,
      heroImage: rawSnapshot.heroImage || project.coverImage
   };

   const rawContext = project.context || {};
   const activeContext = {
      client: (isIndonesian && project.context_id?.client) || rawContext.client || "Personal",
      role: (isIndonesian && project.context_id?.role) || rawContext.role || "Creator",
      timeline: (isIndonesian && project.context_id?.timeline) || rawContext.timeline || project.date,
      team: (isIndonesian && project.context_id?.team) || rawContext.team || "Solo"
   };

   const activeChallenge = (isIndonesian && project.challenge_id) ? project.challenge_id : (project.challenge || project.desc);
   const activeProcess = (isIndonesian && project.process_id) ? project.process_id : project.process;
   const activeInsights = (isIndonesian && project.insights_id) ? project.insights_id : project.insights;
   const activeSolution = (isIndonesian && project.solution_id) ? project.solution_id : project.solution;
   const activeMetrics = (isIndonesian && project.metrics_id) ? project.metrics_id : project.metrics;
   const activeLearnings = (isIndonesian && project.learnings_id) ? project.learnings_id : project.learnings;

   // Interaction Mapping
   const InteractionComponent = {
      'human-algorithm': NexusAI,
      'interactive-workbook': WorkforceAI,
      'year-in-review': NexusAI,
      'price-lock': EfficiencyAI,
      'project-kinship': CommerceAI,
      'agency-pivot': NexusAI
   }[project.id] || NexusAI;

   const brandColor = project.brandColor || (isDark ? '#60A5FA' : '#2563EB');


   return (
      <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500 selection:bg-[var(--accent)] selection:text-white pb-32">
         <SEO
            title={activeTitle}
            description={activeTldr}
         // image={project.coverImage} // If available
         />

         {/* --- 0. AMBIENCE --- */}
         <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
            style={{ backgroundImage: `linear-gradient(${isDark ? '#FFF' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#FFF' : '#000'} 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
         </div>
         {/* Vignette */}
         <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--bg-void)_120%)]"></div>

         {/* --- 1. NAVIGATION --- */}
         <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[var(--bg-void)]/80 backdrop-blur-md border-b border-[var(--border-color)]">
            <div className="flex items-center gap-4">
               <BackButton to="/side-projects" label="Archives" />
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 font-mono text-[10px] uppercase text-[var(--text-secondary)]">
               <Terminal size={12} />
               <span>PROJECT_{project.id.toUpperCase()}</span>
            </div>

            <div className="flex items-center gap-4">
               <button
                  onClick={toggleGestureMode}
                  className={`transition-colors ${isGestureMode ? 'text-[var(--brand)] animate-pulse' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                  title="Toggle Hand Tracking"
               >
                  <ScanEye size={18} />
               </button>

               <button onClick={() => setIsDark(!isDark)} className="p-2 hover:bg-[var(--bg-surface)] rounded-full transition-colors text-[var(--text-primary)]" aria-label="Toggle Theme">
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
               </button>

               <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Toggle Language"
               >
                  <Globe size={14} />
                  <span>{language}</span>
               </button>
            </div>
         </nav>

         <main className="relative z-10">

            {/* --- 2. CINEMATIC HERO --- */}
            {/* --- 2. CINEMATIC HERO --- */}
            <header className="min-h-[90vh] flex flex-col justify-center items-center px-6 pt-24 md:pt-32 text-center relative overflow-hidden">
               {/* Technical Illustration Background */}
               <div className="absolute inset-0 z-0 bg-black dark:bg-white overflow-hidden">
                  <div className="w-full h-full opacity-40 grayscale blur-[1px] transition-all duration-1000">
                     <InteractionComponent color={brandColor} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-void)] via-transparent to-[var(--bg-void)]"></div>
               </div>

               {/* Decorative floating elements */}
               <div className="absolute top-1/4 left-10 w-24 h-24 border border-[var(--border-color)] opacity-20 rounded-full animate-[spin_10s_linear_infinite] z-10"></div>
               <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-dashed border-[var(--border-color)] opacity-20 rounded-full animate-[spin_15s_linear_infinite_reverse] z-10"></div>

               <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-8 max-w-4xl mx-auto relative z-20">
                  <Treasure
                     id="project-detail"
                     className="-top-12 right-0"
                     type="coins"
                  >
                     ANCIENT COINS!
                  </Treasure>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)]">
                     <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></div>
                     <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                        {activeSnapshot.tagline}
                     </span>
                  </div>

                  <h1 className="text-4xl md:text-8xl lg:text-9xl font-serif italic leading-[0.9] tracking-tighter text-white dark:text-black">
                     {activeTitle}
                  </h1>

                  <p className="text-xl md:text-2xl font-light text-white/80 dark:text-black/80 max-w-2xl mx-auto leading-relaxed">
                     {activeTldr}
                  </p>
               </div>

               {/* Scroll Indicator */}
               <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                  <span className="font-mono text-[10px] uppercase tracking-widest">Scroll to Initialize</span>
                  <div className="w-px h-8 bg-[var(--text-primary)]"></div>
               </div>
            </header>

            {/* --- 3. CONTEXT STRIP (METADATA) --- */}
            <section className="border-y border-[var(--border-color)] bg-white dark:bg-black relative z-20">
               <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">

                  {/* Stack */}
                  <div className="space-y-2">
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60 flex items-center gap-2">
                        <Cpu size={12} /> Technology
                     </h3>
                     <div className="flex flex-wrap gap-2">
                        {project.stack.map(tech => (
                           <span key={tech} className="text-sm font-medium text-black dark:text-white border-b border-[var(--border-color)] pb-0.5">{tech}</span>
                        ))}
                     </div>
                  </div>

                  {/* Links */}
                  <div className="space-y-2">
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60 flex items-center gap-2">
                        <LinkIcon size={12} /> Coordinates
                     </h3>
                     <div className="flex flex-col gap-1 text-sm">
                        {project.links.demo && project.links.demo !== '#' ? (
                           <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-black dark:text-white hover:text-[var(--accent)] transition-colors">
                              Live Demo <ArrowUpRight size={12} />
                           </a>
                        ) : <span className="text-black/50 dark:text-white/50 italic">Demo Offline</span>}

                        {project.links.repo && project.links.repo !== '#' && (
                           <a href={`https://${project.links.repo}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-black dark:text-white hover:text-[var(--accent)] transition-colors">
                              Source Code <Code size={12} />
                           </a>
                        )}
                     </div>
                  </div>

                  {/* Context */}
                  <div className="space-y-2">
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60 flex items-center gap-2">
                        <Layers size={12} /> Context
                     </h3>
                     <div className="text-sm font-medium text-black dark:text-white">{activeContext.role}</div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-2">
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60 flex items-center gap-2">
                        <Terminal size={12} /> Timeline
                     </h3>
                     <div className="text-sm font-medium text-black dark:text-white">{activeContext.timeline}</div>
                  </div>
               </div>
            </section>

            {/* --- 4. THE FILE (Content Modules) --- */}
            <section className="max-w-4xl mx-auto px-6 py-24 space-y-32">

               {/* A. CHALLENGE */}
               <article>
                  <div className="flex items-center gap-4 mb-8">
                     <span className="w-12 h-[1px] bg-[var(--accent)]"></span>
                     <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">01 // The Challenge</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif italic mb-8 leading-tight">
                     "{activeChallenge}"
                  </h2>
               </article>

               {/* B. PROCESS */}
               {activeProcess && activeProcess.map((step, idx) => (
                  <article key={idx} className="group grid md:grid-cols-2 gap-12 items-center">
                     <div className={`order-2 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                        <div className="mb-4 font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">
                           Process 0{idx + 1}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                     </div>
                     <div className={`order-1 ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                        {step.image ? (
                           <div className="rounded-lg overflow-hidden border border-[var(--border-color)] shadow-lg rotate-1 group-hover:rotate-0 transition-transform duration-500">
                              <ZoomableImage src={step.image} alt={step.title} className="w-full h-auto" />
                           </div>
                        ) : (
                           <div className="aspect-video bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center opacity-50">
                              <Box size={48} strokeWidth={1} />
                           </div>
                        )}
                     </div>
                  </article>
               ))}

               {/* C. INSIGHTS */}
               {activeInsights && (
                  <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 md:p-12 rounded-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-32 bg-[var(--brand)] opacity-5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                     <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-12">
                           <span className="w-12 h-[1px] bg-[var(--accent)]"></span>
                           <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">02 // Key Insights</span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                           {activeInsights.map((insight, idx) => (
                              <div key={idx} className="space-y-4">
                                 <h3 className="font-serif italic text-2xl text-[var(--text-primary)]">{insight.title}</h3>
                                 <p className="text-[var(--text-secondary)] leading-relaxed">{insight.desc}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               )}

               {/* D. SOLUTION */}
               {activeSolution && (
                  <div className="space-y-16">
                     <div className="flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-[var(--accent)]"></span>
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">03 // The Solution</span>
                     </div>
                     {activeSolution.map((sol, idx) => (
                        <div key={idx} className="space-y-6">
                           {sol.image && (
                              <div className="w-full rounded-xl overflow-hidden border border-[var(--border-color)] shadow-2xl">
                                 <ZoomableImage src={sol.image} alt={sol.title} className="w-full h-auto" />
                              </div>
                           )}
                           <div className="max-w-2xl mx-auto text-center">
                              <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
                              <p className="text-[var(--text-secondary)]">{sol.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               )}

               {/* E. METRICS & LEARNINGS */}
               {(activeMetrics || activeLearnings) && (
                  <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-[var(--border-color)]">
                     {activeMetrics && (
                        <div>
                           <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-6">Impact</h4>
                           <div className="space-y-6">
                              {activeMetrics.map((m, i) => (
                                 <div key={i} className="flex items-baseline justify-between border-b border-[var(--border-color)] pb-2">
                                    <span className="text-lg">{m.label}</span>
                                    <span className="text-2xl font-bold text-[var(--accent)]">{m.value}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}
                     {activeLearnings && (
                        <div>
                           <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-6">Takeaways</h4>
                           <p className="text-xl font-serif italic text-[var(--text-primary)] leading-relaxed">
                              "{activeLearnings}"
                           </p>
                        </div>
                     )}
                  </div>
               )}

            </section>

            {/* --- 5. FOOTER STAMP --- */}
            <footer className="text-center py-24 opacity-60">
               <FileText size={24} className="mx-auto mb-4 text-[var(--text-secondary)]" />
               <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">End of Record</p>
            </footer>

         </main>
      </div >
   );
};

export default SideProjectDetail;