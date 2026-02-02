import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
   Sun, Moon, ArrowUpRight, Code, Cpu, Link as LinkIcon, AlertTriangle,
   Terminal, Share2, Box, ArrowLeft, Monitor, Layers, FileText, Globe
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import BackButton from '../components/BackButton';
import { SIDE_PROJECTS } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

/* --- DESIGN SYSTEM: THE MAKER'S LOG ---
   Aesthetic: "Industrial / Technical Blueprint" (Similar to ProtectedCaseStudy)
   Focus: High-fidelity visual storytelling, schematic layouts, rich typography.
*/

const SideProjectDetail = () => {
   const { isDark, setIsDark } = useTheme();
   const { language, toggleLanguage, isIndonesian } = useLanguage();
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
   const activeModules = (isIndonesian && project.modules_id) ? project.modules_id : project.modules;
   const activeSections = (isIndonesian && project.sections_id) ? project.sections_id : project.sections;


   return (
      <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500 selection:bg-[var(--accent)] selection:text-white pb-32">

         {/* --- 0. AMBIENCE --- */}
         <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
            style={{ backgroundImage: `linear-gradient(${isDark ? '#FFF' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#FFF' : '#000'} 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
         </div>
         {/* Vignette */}
         <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--bg-void)_120%)]"></div>

         {/* --- 1. NAVIGATION --- */}
         <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-[var(--bg-void)]/80 backdrop-blur-md border-b border-[var(--border-color)]">
            <div className="flex items-center gap-4">
               <BackButton to="/side-projects" label="Archives" />
               <div className="hidden md:flex items-center gap-2 font-mono text-[10px] uppercase text-[var(--text-secondary)] border-l border-[var(--border-color)] pl-4">
                  <Terminal size={12} />
                  <span>PROJECT_{project.id.toUpperCase()}</span>
               </div>
            </div>

            <div className="flex items-center gap-4">
               <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Toggle Language"
               >
                  <Globe size={14} />
                  <span>{language}</span>
               </button>

               <button onClick={() => setIsDark(!isDark)} className="p-2 hover:bg-[var(--bg-surface)] rounded-full transition-colors text-[var(--text-primary)]" aria-label="Toggle Theme">
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
               </button>
            </div>
         </nav>

         <main className="relative z-10">

            {/* --- 2. CINEMATIC HERO --- */}
            {/* --- 2. CINEMATIC HERO --- */}
            <header className="min-h-[90vh] flex flex-col justify-center items-center px-6 pt-24 md:pt-32 text-center relative overflow-hidden">
               {/* Technical Illustration Background */}
               <div className="absolute inset-0 z-0">
                  <div className="w-full h-full opacity-30 grayscale blur-[2px] transition-all duration-1000 group-hover:blur-0">
                     <ProjectCard type={project.type || 'Web'} expanded={true} id={project.id} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-void)] via-transparent to-[var(--bg-void)]"></div>
               </div>

               {/* Decorative floating elements */}
               <div className="absolute top-1/4 left-10 w-24 h-24 border border-[var(--border-color)] opacity-20 rounded-full animate-[spin_10s_linear_infinite] z-10"></div>
               <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-dashed border-[var(--border-color)] opacity-20 rounded-full animate-[spin_15s_linear_infinite_reverse] z-10"></div>

               <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-8 max-w-4xl mx-auto relative z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)]">
                     <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></div>
                     <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                        Experimental Build
                     </span>
                  </div>

                  <h1 className="text-4xl md:text-8xl lg:text-9xl font-serif italic leading-[0.9] tracking-tighter text-[var(--text-primary)]">
                     {activeTitle}
                  </h1>

                  <p className="text-xl md:text-2xl font-light text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                     {activeTldr}
                  </p>
               </div>

               {/* Scroll Indicator */}
               <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                  <span className="font-mono text-[10px] uppercase tracking-widest">Scroll to Decrypt</span>
                  <div className="w-px h-8 bg-[var(--text-primary)]"></div>
               </div>
            </header>

            {/* --- 3. CONTEXT STRIP (METADATA) --- */}
            <section className="border-y border-[var(--border-color)] bg-[var(--bg-surface)] relative z-20">
               <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">

                  {/* Stack */}
                  <div className="space-y-2">
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2">
                        <Cpu size={12} /> Technology
                     </h3>
                     <div className="flex flex-wrap gap-2">
                        {project.stack.map(tech => (
                           <span key={tech} className="text-sm font-medium border-b border-[var(--border-color)] pb-0.5">{tech}</span>
                        ))}
                     </div>
                  </div>

                  {/* Links */}
                  <div className="space-y-2">
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2">
                        <LinkIcon size={12} /> Coordinates
                     </h3>
                     <div className="flex flex-col gap-1 text-sm">
                        {project.links.demo && project.links.demo !== '#' ? (
                           <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors">
                              Live Demo <ArrowUpRight size={12} />
                           </a>
                        ) : <span className="text-[var(--text-secondary)] italic">Demo Offline</span>}

                        {project.links.repo && project.links.repo !== '#' && (
                           <a href={`https://${project.links.repo}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors">
                              Source Code <Code size={12} />
                           </a>
                        )}
                     </div>
                  </div>

                  {/* Date/Year (Mocked for now) */}
                  <div className="space-y-2">
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2">
                        <Terminal size={12} /> Year
                     </h3>
                     <div className="text-sm font-medium">{project.date || '2023 — Present'}</div>
                  </div>

                  {/* Context */}
                  <div className="space-y-2">
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2">
                        <Layers size={12} /> Context
                     </h3>
                     <div className="text-sm font-medium">{activeSubtitle}</div>
                  </div>
               </div>
            </section>

            {/* --- 4. THE FILE (Content Modules) --- */}
            <section className="max-w-4xl mx-auto px-6 py-24 space-y-24">

               {activeModules ? (
                  activeModules.map((module, idx) => (
                     <article key={idx} className="group">
                        {/* Module Header */}
                        <div className="flex items-baseline gap-4 mb-8 border-b border-[var(--border-color)] pb-4">
                           <span className="font-mono text-4xl font-bold text-[var(--border-color)] group-hover:text-[var(--accent)] transition-colors duration-500">
                              0{idx + 1}
                           </span>
                           <h2 className="text-2xl md:text-3xl font-serif italic">
                              {module.title}
                           </h2>
                        </div>

                        {/* Module Content */}
                        {/* Module Image (Optional) */}
                        {module.image && (
                           <div className="mb-8 rounded-lg overflow-hidden border border-[var(--border-color)]">
                              <img
                                 src={module.image}
                                 alt={module.title}
                                 className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                              />
                           </div>
                        )}

                        {/* Module Content */}
                        <div className="prose prose-lg dark:prose-invert max-w-none text-[var(--text-secondary)] leading-relaxed whitespace-pre-line font-light">
                           {module.content.split('\n').map((line, i) => {
                              if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
                                 return <li key={i} className="list-inside pl-4 marker:text-[var(--accent)]">{line.replace(/^[•-]\s*/, '')}</li>;
                              }
                              return <p key={i}>{line}</p>;
                           })}
                        </div>
                     </article>
                  ))
               ) : (
                  // LEGACY CONTENT FALLBACK
                  <>
                     <article>
                        <div className="flex items-baseline gap-4 mb-8 border-b border-[var(--border-color)] pb-4">
                           <span className="font-mono text-4xl font-bold text-[var(--border-color)]">01</span>
                           <h2 className="text-2xl md:text-3xl font-serif italic">The Challenge</h2>
                        </div>
                        <p className="text-xl text-[var(--text-secondary)] leading-relaxed font-light">
                           {activeSections?.challenge || project.sections.challenge}
                        </p>
                     </article>

                     <article>
                        <div className="flex items-baseline gap-4 mb-8 border-b border-[var(--border-color)] pb-4">
                           <span className="font-mono text-4xl font-bold text-[var(--border-color)]">02</span>
                           <h2 className="text-2xl md:text-3xl font-serif italic">The Approach</h2>
                        </div>
                        <p className="text-xl text-[var(--text-secondary)] leading-relaxed font-light">
                           {activeSections?.approach || project.sections.approach}
                        </p>
                     </article>
                  </>
               )}

            </section>

            {/* --- 5. FOOTER STAMP --- */}
            <footer className="text-center py-24 opacity-60">
               <FileText size={24} className="mx-auto mb-4 text-[var(--text-secondary)]" />
               <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">End of Record</p>
            </footer>

         </main>
      </div>
   );
};

export default SideProjectDetail;