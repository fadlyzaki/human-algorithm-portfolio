import React, { useState, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
   Sun, Moon, ArrowUpRight, Code, Cpu, Link as LinkIcon, AlertTriangle,
   Terminal, Share2, Box, ArrowLeft, Monitor, Layers, FileText, Globe, ScanEye
} from 'lucide-react';
import Navbar from '../components/Navbar';
import NavigationMenu from '../components/NavigationMenu';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
// import { useHandCursor } from '../context/HandCursorContext';
import BackButton from '../components/BackButton';
import useProjectData from '../hooks/useProjectData';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import Treasure from '../components/Treasure';
import ZoomableImage from '../components/ZoomableImage';
import AiryDiagram from '../components/AiryDiagram';
import SkeletonLine from '../components/ui/SkeletonLine';

// Import New Layout Architectures
import SystemCoreDetail from '../components/project-layouts/SystemCoreDetail';
import CosmicPopDetail from '../components/project-layouts/CosmicPopDetail';
import BrutalistDetail from '../components/project-layouts/BrutalistDetail';
import BentoDetail from '../components/project-layouts/BentoDetail';
import BlueprintDetail from '../components/project-layouts/BlueprintDetail';

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
const FilterMeApp = React.lazy(() => import('../components/interactions/FilterMeApp'));

/* --- DESIGN SYSTEM: THE MAKER'S LOG ---
   Aesthetic: "Industrial / Technical Blueprint" (Similar to ProtectedCaseStudy)
   Focus: High-fidelity visual storytelling, schematic layouts, rich typography.
*/

const SideProjectDetail = () => {
   const { isDark } = useTheme();
   const { isIndonesian, t } = useLanguage();
   // const { isGestureMode, toggleGestureMode } = useHandCursor();
   const { id } = useParams();

   // Use Centralized Data Hook
   const { project, loading, type } = useProjectData(id);

   const [showLivePreview, setShowLivePreview] = useState(true);
   const [, setIsMenuOpen] = useState(false); // Added for Navbar

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
      tagline: (isIndonesian
         ? (project.snapshot_id?.tagline || (typeof rawSnapshot.tagline === 'object' ? rawSnapshot.tagline.id : rawSnapshot.tagline))
         : (typeof rawSnapshot.tagline === 'object' ? rawSnapshot.tagline.en : rawSnapshot.tagline))
         || activeSubtitle,
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
   const activeProcess = (isIndonesian && (project.designProcess_id || project.process_id)) ? (project.designProcess_id || project.process_id) : (project.designProcess || project.process);
   const activeInsights = (isIndonesian && project.insights_id) ? project.insights_id : project.insights;
   const activeSolution = (isIndonesian && project.solution_id) ? project.solution_id : project.solution;
   const activeMetrics = (isIndonesian && project.metrics_id) ? project.metrics_id : project.metrics;
   const activeLearnings = (isIndonesian && project.learnings_id) ? project.learnings_id : project.learnings;
   const activeModules = (isIndonesian && project.modules_id) ? project.modules_id : project.modules;

   // Interaction Mapping
   const InteractionComponent = {
      'human-algorithm': NexusAI,
      'interactive-workbook': WorkforceAI,
      'agency-pivot': AgencyPivot,
      'flood-alert': FloodAlert,
      'price-lock': PriceLock,
      'project-kinship': ProjectKinship,
      'project-zen': ProjectZen,
      'filter-me': FilterMeApp
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

         {/* --- NAVIGATION SYSTEM --- */}
         <Navbar onOpenMenu={() => setIsMenuOpen(true)} title={activeTitle} backPath="/side-projects" />

         {/* <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} /> */}

         <main className="relative z-10">
            {/* --- LAYOUT ORCHESTRATOR --- */}
            {(() => {
               const commonProps = {
                  project,
                  activeContext,
                  activeChallenge,
                  activeProcess,
                  activeInsights,
                  activeSolution,
                  activeMetrics,
                  activeLearnings,
                  InteractionComponent: InteractionComponent ? () => (
                     <Suspense fallback={
                        <div className="p-8 space-y-4">
                           <SkeletonLine className="w-1/2 h-6" />
                           <SkeletonLine className="w-full h-32" />
                        </div>
                     }>
                        <InteractionComponent />
                     </Suspense>
                  ) : null,
                  showLivePreview,
                  setShowLivePreview,
                  t,
                  isIndonesian,
                  activeTitle,
                  activeTldr,
                  activeSnapshot,
               };

               switch (project.id) {
                  case 'human-algorithm':
                     return <SystemCoreDetail {...commonProps} />;
                  case 'dolphi':
                     return <CosmicPopDetail {...commonProps} />;
                  case 'productivity-illusion':
                     return <BrutalistDetail {...commonProps} />;
                  case 'year-in-review':
                     return <BentoDetail {...commonProps} />;
                  case 'interactive-workbook':
                     return <BlueprintDetail {...commonProps} />;
                  default:
                     return (
                        <div className="pt-32 text-center text-red-500 font-mono">
                           Error: Layout architecture missing for '{project.id}'
                        </div>
                     );
               }
            })()}
         </main>

         {/* --- 5. FOOTER STAMP --- */}
         <footer className="text-center py-24 opacity-60 relative z-10">
            <FileText size={24} className="mx-auto mb-4 text-[var(--text-secondary)]" />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">End of Record</p>
         </footer>

      </div>
   );
};

export default SideProjectDetail;