import React, { useState, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
   Sun, Moon, ArrowUpRight, Code, Cpu, Link as LinkIcon, AlertTriangle,
   Terminal, Share2, Box, ArrowLeft, Monitor, Layers, FileText, Globe, ScanEye
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useHandCursor } from '../context/HandCursorContext';
import BackButton from '../components/BackButton';
import useProjectData from '../hooks/useProjectData';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import Treasure from '../components/Treasure';
import ZoomableImage from '../components/ZoomableImage';
import AiryDiagram from '../components/AiryDiagram';
import SkeletonLine from '../components/ui/SkeletonLine';

// Lazy Load Interaction Components
const WorkforceAI = React.lazy(() => import('../components/interactions/WorkforceAI'));
const CommerceAI = React.lazy(() => import('../components/interactions/CommerceAI'));
const EfficiencyAI = React.lazy(() => import('../components/interactions/EfficiencyAI'));
const NexusAI = React.lazy(() => import('../components/interactions/NexusAI'));
const AgencyPivot = React.lazy(() => import('../components/interactions/AgencyPivot'));
const FloodAlert = React.lazy(() => import('../components/interactions/FloodAlert'));
const PriceLock = React.lazy(() => import('../components/interactions/PriceLock'));
const ProjectKinship = React.lazy(() => import('../components/interactions/ProjectKinship'));
const ProjectZen = React.lazy(() => import('../components/interactions/ProjectZen'));

/* --- DESIGN SYSTEM: THE MAKER'S LOG ---
   Aesthetic: "Industrial / Technical Blueprint" (Similar to ProtectedCaseStudy)
   Focus: High-fidelity visual storytelling, schematic layouts, rich typography.
*/

const SideProjectDetail = () => {
   const { isDark, setIsDark } = useTheme();
   const { language, toggleLanguage, isIndonesian } = useLanguage();
   const { isGestureMode, toggleGestureMode } = useHandCursor();
   const { id } = useParams();

   // Use Centralized Data Hook
   const { project, loading } = useProjectData(id);

   const [showLivePreview, setShowLivePreview] = useState(true);

   if (loading) {
      return (
         <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="animate-pulse text-gray-500">Loading...</div>
         </div>
      );
   }

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
      '--bg-card': isDark ? '#161616' : '#FFFFFF',
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
      'agency-pivot': AgencyPivot,
      'flood-alert': FloodAlert,
      'price-lock': PriceLock,
      'project-kinship': ProjectKinship,
      'project-zen': ProjectZen
   }[project.id] || null;



   return (
      <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500 selection:bg-[var(--accent)] selection:text-white pb-32">
         <SEO
            title={activeTitle}
            description={activeTldr}
            // image={project.coverImage} // If available
            schema={{
               "@context": "https://schema.org",
               "@type": "SoftwareApplication",
               "name": activeTitle,
               "description": activeTldr,
               "applicationCategory": "misc",
               "operatingSystem": "Web",
               "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
               }
            }}
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

            {/* --- 2. PRODUCT HERO --- */}
            <header className="min-h-[85vh] flex flex-col justify-center items-center px-6 pt-24 md:pt-32 text-center relative overflow-hidden bg-[var(--bg-void)] text-[var(--text-primary)] transition-colors duration-500 border-b border-[var(--border-color)]">
               {/* Product Visual Background (Airy Diagram) */}
               <div className="absolute inset-0 z-0 pointer-events-none">
                  <div className="w-full h-full opacity-[0.15] dark:opacity-[0.25] grayscale hover:grayscale-0 transition-all duration-1000 scale-105">
                     <ProjectCard
                        id={project.id}
                        type={project.type || 'Web'}
                        expanded={true}
                        backgroundOnly={true}
                     />
                  </div>
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-void)] via-[var(--bg-void)]/80 to-transparent"></div>
                  <div className="absolute inset-0 bg-[var(--bg-void)]/20 backdrop-blur-[1px]"></div>
               </div>

               <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-8 max-w-5xl mx-auto relative z-20">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)]/80 backdrop-blur-md shadow-sm">
                     <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
                     <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-primary)]">
                        {activeSnapshot.tagline}
                     </span>
                  </div>

                  <h1 className="text-5xl md:text-8xl lg:text-9xl font-sans font-bold tracking-tighter text-[var(--text-primary)]">
                     {activeTitle}
                  </h1>

                  <p className="text-xl md:text-3xl font-light text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                     {activeTldr}
                  </p>
               </div>

               {/* Scroll Indicator */}
               <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce text-[var(--text-secondary)]">
                  <span className="font-mono text-[10px] uppercase tracking-widest">Market Analysis</span>
                  <div className="w-px h-8 bg-current"></div>
               </div>
            </header>

            {/* --- 3. VENTURE SPECS --- */}
            <section className="border-b border-[var(--border-color)] bg-[var(--bg-surface)] sticky top-0 z-40 backdrop-blur-md bg-opacity-90">
               <div className="max-w-7xl mx-auto px-6 py-6 overflow-x-auto no-scrollbar">
                  <div className="flex items-center justify-between min-w-max gap-12">

                     {/* Links (Primary CTA) */}
                     <div className="flex items-center gap-4">
                        {project.links.demo && project.links.demo !== '#' && (
                           <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-card)] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity">
                              Launch Product <ArrowUpRight size={14} />
                           </a>
                        )}
                        {project.links.repo && project.links.repo !== '#' && (
                           <a href={`https://${project.links.repo}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-[var(--border-color)] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[var(--bg-void)] transition-colors">
                              <Code size={14} /> Source
                           </a>
                        )}
                     </div>

                     {/* Stats/Meta */}
                     <div className="flex items-center gap-8 text-[var(--text-secondary)]">
                        <div className="flex flex-col">
                           <span className="font-mono text-[9px] uppercase tracking-widest opacity-60">Role</span>
                           <span className="text-xs font-bold text-[var(--text-primary)]">{activeContext.role}</span>
                        </div>
                        <div className="flex flex-col">
                           <span className="font-mono text-[9px] uppercase tracking-widest opacity-60">Timeline</span>
                           <span className="text-xs font-bold text-[var(--text-primary)]">{activeContext.timeline}</span>
                        </div>
                        <div className="flex flex-col">
                           <span className="font-mono text-[9px] uppercase tracking-widest opacity-60">Tech Stack</span>
                           <span className="text-xs font-bold text-[var(--text-primary)]">{project.stack.slice(0, 3).join(', ')}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* --- 4. PRODUCT NARRATIVE --- */}
            <section className="max-w-4xl mx-auto px-6 py-24 space-y-32">

               {/* A. OPPORTUNITY (The "Why") */}
               <article>
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                        <ScanEye size={16} />
                     </div>
                     <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">The Opportunity</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-sans font-bold mb-8 leading-tight">
                     {activeChallenge}
                  </h2>
               </article>

               {/* B. STRATEGY (The "How" & "What") */}
               {activeProcess && (
                  <div className="border-l-2 border-[var(--border-color)] pl-8 md:pl-12 space-y-16">
                     {activeProcess.map((step, idx) => (
                        <article key={idx} className="relative group">
                           <span className="absolute -left-[41px] md:-left-[57px] top-0 w-4 h-4 rounded-full bg-[var(--bg-void)] border-2 border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors"></span>
                           <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                              {step.title}
                           </h3>
                           <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">{step.desc}</p>
                           {step.image && (
                              <div className="rounded-xl overflow-hidden border border-[var(--border-color)] shadow-sm bg-[var(--bg-surface)]">
                                 {step.image.startsWith('airy:') ? (
                                    <div className="w-full h-[300px] p-8">
                                       <AiryDiagram type={step.image.split(':')[1]} />
                                    </div>
                                 ) : (
                                    <ZoomableImage src={step.image} alt={step.title} className="w-full h-auto" />
                                 )}
                              </div>
                           )}
                        </article>
                     ))}
                  </div>
               )}

               {/* B.5. KEY INSIGHTS */}
               {activeInsights && activeInsights.length > 0 && (
                  <div className="space-y-8">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                           <Layers size={16} />
                        </div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">Key Insights</span>
                     </div>
                     <div className="grid gap-6">
                        {activeInsights.map((insight, idx) => (
                           <div key={idx} className="bg-[var(--bg-surface)] border-l-4 border-[var(--accent)] rounded-r-xl p-6 md:p-8 space-y-4">
                              <h3 className="text-xl font-bold">{insight.title}</h3>
                              <p className="text-[var(--text-secondary)] leading-relaxed">{insight.desc}</p>
                              {insight.image && (
                                 <div className="rounded-xl overflow-hidden border border-[var(--border-color)] shadow-sm bg-[var(--bg-surface)] mt-4">
                                    {insight.image.startsWith('airy:') ? (
                                       <div className="w-full h-[300px] p-8">
                                          <AiryDiagram type={insight.image.split(':')[1]} />
                                       </div>
                                    ) : (
                                       <ZoomableImage src={insight.image} alt={insight.title} className="w-full h-auto" />
                                    )}
                                 </div>
                              )}
                           </div>
                        ))}
                     </div>
                  </div>
               )}

               {/* C. PRODUCT SHOWCASE - CONDITIONAL RENDER */}
               {activeSolution && (!project.prototypeLink || !showLivePreview) && (
                  <div className="space-y-16 bg-[var(--bg-surface)] p-8 md:p-12 rounded-3xl border border-[var(--border-color)] animate-in fade-in zoom-in duration-500">
                     <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4">The Solution</h2>
                        <p className="text-[var(--text-secondary)]">Delivered as a robust, scalable product.</p>
                     </div>

                     <div className="grid gap-12">
                        {activeSolution.map((sol, idx) => (
                           <div key={idx} className="space-y-6">
                              {sol.image && (
                                 <div className="w-full rounded-xl overflow-hidden shadow-2xlring-1 ring-black/5 bg-[var(--bg-surface)]">
                                    {sol.image.startsWith('airy:') ? (
                                       <div className="w-full h-[300px] p-8">
                                          <AiryDiagram type={sol.image.split(':')[1]} />
                                       </div>
                                    ) : (
                                       <ZoomableImage src={sol.image} alt={sol.title} className="w-full h-auto" />
                                    )}
                                 </div>
                              )}
                              <div className="text-left">
                                 <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
                                 <p className="text-[var(--text-secondary)] mb-4">{sol.desc}</p>
                                 {sol.link && (
                                    <a
                                       href={sol.link}
                                       target="_blank"
                                       rel="noreferrer"
                                       className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand)] hover:underline"
                                    >
                                       {sol.linkLabel || (isIndonesian ? "Lihat Demo" : "View Live Demo")} <ArrowUpRight size={14} />
                                    </a>
                                 )}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               )}


               {/* C.5. LIVE PREVIEW */}
               {project.prototypeLink && showLivePreview && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                     <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                           <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                              <Monitor size={16} />
                           </div>
                           <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
                              {isIndonesian ? "Pratinjau Langsung" : "Live Preview"}
                           </span>
                        </div>
                        <div className="flex items-center gap-4">
                           <button
                              onClick={() => setShowLivePreview(false)}
                              className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                           >
                              {isIndonesian ? "Ganti ke Galeri Statis" : "Switch to Static Gallery"}
                           </button>
                           <a
                              href={project.prototypeLink}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand)] hover:underline"
                           >
                              {isIndonesian ? "Buka di Tab Baru" : "Open in New Tab"} <ArrowUpRight size={14} />
                           </a>
                        </div>
                     </div>

                     <div className="w-full h-[600px] bg-[var(--bg-card)] rounded-xl overflow-hidden border border-[var(--border-color)] shadow-2xl relative group">
                        <iframe
                           src={project.prototypeLink}
                           title="Live Preview"
                           className="w-full h-full"
                           loading="lazy"
                        />
                     </div>
                  </div>
               )}


               {/* Toggle Back to Live Preview Button (If in Static Mode and Prototype Exists) */}
               {project.prototypeLink && !showLivePreview && (
                  <div className="flex justify-center mb-12">
                     <button
                        onClick={() => setShowLivePreview(true)}
                        className="flex items-center gap-2 mx-auto px-6 py-3 rounded-full border border-[var(--border-color)] hover:bg-[var(--bg-card)] transition-colors text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]"
                     >
                        <Monitor size={14} />
                        {isIndonesian ? "Tampilkan Pratinjau Langsung" : "Show Live Preview"}
                     </button>
                  </div>
               )}


               {/* C.6. LIVE INTERACTION COMPONENT (Fallback if no external link) */}
               {!project.prototypeLink && InteractionComponent && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 mb-24">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                           <Cpu size={16} />
                        </div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
                           {isIndonesian ? "Demo Interaktif" : "Interactive Demo"}
                        </span>
                     </div>

                     <div className={`mx-auto bg-[var(--bg-card)] rounded-xl overflow-hidden border border-[var(--border-color)] shadow-2xl relative ${project.id === 'project-zen' ? 'max-w-5xl' : 'max-w-sm'}`}>
                        <Suspense fallback={
                           <div className="p-8 space-y-4">
                              <SkeletonLine className="w-1/2 h-6" />
                              <SkeletonLine className="w-full h-32" />
                           </div>
                        }>
                           <InteractionComponent />
                        </Suspense>
                     </div>
                  </div>
               )}

               {/* D. TRACTION & METRICS */}
               {(activeMetrics || activeLearnings) && (
                  <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                     {activeMetrics && (
                        <div className="bg-[var(--bg-surface)] p-8 rounded-2xl border border-[var(--border-color)]">
                           <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-8 flex items-center gap-2">
                              <Box size={14} /> Key Metrics
                           </h4>
                           <div className="space-y-8">
                              {activeMetrics.map((m, i) => (
                                 <div key={i}>
                                    <div className="text-4xl font-bold text-[var(--text-primary)] mb-1">{m.value}</div>
                                    <div className="text-sm text-[var(--text-secondary)] uppercase tracking-wide opacity-80">{m.label}</div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}

                     {activeLearnings && (
                        <div className="bg-[var(--accent)] text-white p-8 rounded-2xl flex flex-col justify-between">
                           <h4 className="font-mono text-xs uppercase tracking-widest opacity-70 mb-8">Founder's Note</h4>
                           <p className="text-xl md:text-2xl font-serif italic leading-relaxed">
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