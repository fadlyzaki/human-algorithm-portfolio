import React, { useState, Suspense } from "react";
import SystemLoader, { SystemSectionLoader } from "../components/SystemLoader";
import { useParams, Link } from "react-router-dom";
import { lazyWithRetry } from "../utils/lazyWithRetry";
import {
  Sun,
  Moon,
  ArrowUpRight,
  Code,
  Cpu,
  Link as LinkIcon,
  AlertTriangle,
  Terminal,
  Share2,
  Box,
  ArrowLeft,
  Monitor,
  Layers,
  FileText,
  Globe,
  ScanEye,
} from "lucide-react";
import Navbar from "../components/Navbar";
import NavigationMenu from "../components/NavigationMenu";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import BackButton from "../components/BackButton";
import useProjectData from "../hooks/useProjectData";
import SEO from "../components/SEO";
import ProjectCard from "../components/ProjectCard";
import ZoomableImage from "../components/ZoomableImage";
import AiryDiagram from "../components/AiryDiagram";
import SkeletonLine from "../components/ui/SkeletonLine";
import Footer from "../components/Footer";

const ChaosCanvas = lazyWithRetry(() => import("../components/ChaosCanvas"));

// Import New Layout Architectures
import SystemCoreDetail from "../components/project-layouts/SystemCoreDetail";
import CosmicPopDetail from "../components/project-layouts/CosmicPopDetail";
import BrutalistDetail from "../components/project-layouts/BrutalistDetail";
import BentoDetail from "../components/project-layouts/BentoDetail";
import BlueprintDetail from "../components/project-layouts/BlueprintDetail";
import PrototypeDetail from "../components/project-layouts/PrototypeDetail";
import AgenticDetail from "../components/project-layouts/AgenticDetail";
import LearningArchitectDetail from "../components/project-layouts/LearningArchitectDetail";

// Lazy Load Interaction Components with Retry Logic
const WorkforceAI = lazyWithRetry(
  () => import("../components/interactions/WorkforceAI"),
);
const CommerceAI = lazyWithRetry(
  () => import("../components/interactions/CommerceAI"),
);
const EfficiencyAI = lazyWithRetry(
  () => import("../components/interactions/EfficiencyAI"),
);
const NexusAI = lazyWithRetry(() => import("../components/interactions/NexusAI"));
const AgencyPivot = lazyWithRetry(
  () => import("../components/interactions/AgencyPivot"),
);
const FloodAlert = lazyWithRetry(
  () => import("../components/interactions/FloodAlert"),
);
const PriceLock = lazyWithRetry(
  () => import("../components/interactions/PriceLock"),
);
const ProjectKinship = lazyWithRetry(
  () => import("../components/interactions/ProjectKinship"),
);
const ProjectZen = lazyWithRetry(
  () => import("../components/interactions/ProjectZen"),
);
const FilterMeApp = lazyWithRetry(
  () => import("../components/interactions/FilterMeApp"),
);
const SummarizerAI = lazyWithRetry(
  () => import("../components/interactions/SummarizerAI"),
);

/* --- DESIGN SYSTEM: THE MAKER'S LOG ---
   Aesthetic: "Industrial / Technical Blueprint" (Similar to ProtectedCaseStudy)
   Focus: High-fidelity visual storytelling, schematic layouts, rich typography.
*/

const PROJECT_LAYOUT_MAP = {
  "human-algorithm": SystemCoreDetail,
  "productivity-illusion": BrutalistDetail,
  "year-in-review": BentoDetail,
  "interactive-workbook": BlueprintDetail,
  "competitor-summarizer": AgenticDetail,
  "learning-progress-architect": LearningArchitectDetail,
  "muezza": CosmicPopDetail,
};

const INTERACTION_MAP = {
  "human-algorithm": NexusAI,
  "interactive-workbook": WorkforceAI,
  "agency-pivot": AgencyPivot,
  "flood-alert": FloodAlert,
  "price-lock": PriceLock,
  "project-kinship": ProjectKinship,
  "project-zen": ProjectZen,
  "filter-me": FilterMeApp,
  "competitor-summarizer": SummarizerAI,
};

const SideProjectDetail = () => {
  const { isDark } = useTheme();
  const { isIndonesian, t } = useLanguage();
  const { id } = useParams();

  // Use Centralized Data Hook
  const { project, loading, type } = useProjectData(id);

  const [showLivePreview, setShowLivePreview] = useState(true);
  const [, setIsMenuOpen] = useState(false); // Added for Navbar

  if (loading) {
    return (
      <div className="min-h-[100dvh] bg-black flex items-center justify-center">
        <div className="animate-pulse text-gray-500">{t("project_layouts.loading")}</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-[100dvh] bg-black text-white font-mono flex items-center justify-center p-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, var(--border-color) 25%, var(--border-color) 26%, transparent 27%, transparent 74%, var(--border-color) 75%, var(--border-color) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, var(--border-color) 25%, var(--border-color) 26%, transparent 27%, transparent 74%, var(--border-color) 75%, var(--border-color) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        ></div>
        <div className="z-10 text-center border border-red-900/50 bg-red-950/10 p-12 backdrop-blur-sm max-w-lg w-full">
          <AlertTriangle
            size={48}
            className="mx-auto text-red-500 mb-6 animate-pulse"
          />
          <h1 className="text-2xl font-bold text-red-500 mb-2 uppercase tracking-[0.2em]">
            {t("project_layouts.data_corrupted")}
          </h1>
          <div className="h-px w-16 bg-red-800 mx-auto mb-6"></div>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            {t("project_layouts.not_retrieved").split('"{id}"')[0]}
            <span className="text-white">"{id}"</span>
            {t("project_layouts.not_retrieved").split('"{id}"')[1]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
            <a
              href={`mailto:fadly.uzzaki@gmail.com?subject=Request%20Access%3A%20${id}&body=Hello%20Fadly%2C%0A%0AI%20would%20like%20to%20request%20an%20access%20key%20for%20the%20project%20"${id}".%0A%0AThank%20you!`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-400 hover:text-red-300 border border-red-900/50 px-6 py-3 hover:bg-red-950/30 transition-all font-mono"
            >
              <FileText size={14} /> {t("protected.request_access") || "Request Access Key"}
            </a>
            
            <Link
              to="/side-projects"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-all font-mono"
            >
              <ArrowLeft size={14} /> {t("project_layouts.return_base")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const themeStyles = {
    "--accent": isDark ? "some" : "some", // Blue or Strict Black
    "--code-bg": isDark ? "var(--bg-void)" : "var(--bg-surface)",
    "--brand": isDark ? "some" : "some", // Dynamic brand color fallback
  };

  // Content Resolution Fallbacks
  const resolveText = (field, fallback) => {
    if (!field) return fallback || null;
    if (typeof field === "object" && field.en)
      return isIndonesian ? field.id || field.en : field.en;
    return field;
  };

  const activeTitle =
    isIndonesian && project.title_id ? project.title_id : resolveText(project.title);
  const activeSubtitle =
    isIndonesian && project.subtitle_id
      ? project.subtitle_id
      : resolveText(project.subtitle);
  const activeTldr =
    isIndonesian && project.tldr_id ? project.tldr_id : resolveText(project.tldr);

  // Framework Data
  const rawSnapshot = project.snapshot || {};
  const activeSnapshot = {
    tagline:
      (isIndonesian
        ? project.snapshot_id?.tagline ||
        (typeof rawSnapshot.tagline === "object"
          ? rawSnapshot.tagline.id
          : rawSnapshot.tagline)
        : typeof rawSnapshot.tagline === "object"
          ? rawSnapshot.tagline.en
          : rawSnapshot.tagline) || activeSubtitle,
    heroImage: rawSnapshot.heroImage || project.coverImage,
  };

  const rawContext = project.context || {};
  const activeContext = {
    client:
      (isIndonesian && project.context_id?.client) ||
      resolveText(rawContext.client) ||
      "Personal",
    role:
      (isIndonesian && project.context_id?.role) ||
      resolveText(rawContext.role) ||
      "Creator",
    timeline:
      (isIndonesian && project.context_id?.timeline) ||
      resolveText(rawContext.timeline) ||
      resolveText(project.date),
    team:
      (isIndonesian && project.context_id?.team) || resolveText(rawContext.team) || "Solo",
    event: resolveText(rawContext.event),
    event_url: rawContext.event_url,
  };


  const resolveArray = (arr) => {
    if (!arr) return null;
    return arr.map((item) => ({
      ...item,
      title: resolveText(item.title),
      desc: resolveText(item.desc),
    }));
  };

  const getLocalArray = (key) => (isIndonesian && project[`${key}_id`] ? project[`${key}_id`] : project[key]);

  const activeChallenge =
    (isIndonesian && project.challenge_id) ||
    resolveText(project.challenge) ||
    (isIndonesian && project.desc_id) ||
    resolveText(project.desc);

  const rawProcess = getLocalArray('designProcess') || getLocalArray('process');
  const activeProcess = resolveArray(rawProcess);
  const activeInsights = resolveArray(getLocalArray('insights'));
  const activeSolution = resolveArray(getLocalArray('solution'));
  
  const rawMetrics = getLocalArray('metrics');
  const activeMetrics = rawMetrics
    ? rawMetrics.map((m) => ({
        ...m,
        label: resolveText(m.label),
        value: resolveText(m.value),
      }))
    : null;
    
  const activeLearnings = (isIndonesian && project.learnings_id) || resolveText(project.learnings);

  // Deeply resolved clone of project properties for sub-components (like project.type)
  const activeProject = {
    ...project,
    type: resolveText(project.type),
    date: resolveText(project.date),
  };
  // Interaction Mapping
  const InteractionComponent = INTERACTION_MAP[project.id] || null;

  return (
    <div
      style={themeStyles}
      className="min-h-[100dvh] bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500 selection:bg-[var(--accent)] selection:text-white pb-32"
    >
      <SEO
        title={activeTitle}
        description={activeTldr}
        image={project.ogImage || (project.coverImage && !project.coverImage.startsWith('airy:') ? project.coverImage : undefined)}
        schema={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: activeTitle,
          description: activeTldr,
          applicationCategory: "misc",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        }}
      />

      {/* --- 0. AMBIENCE --- */}
      <React.Suspense fallback={<SystemLoader />}>
        <ChaosCanvas />
      </React.Suspense>
      {/* Vignette */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--bg-void)_120%)]"></div>

      {/* --- NAVIGATION SYSTEM --- */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        title={activeTitle}
        backPath="/side-projects"
      />

      <main className="relative z-10">
        {/* --- LAYOUT ORCHESTRATOR --- */}
        {(() => {
          const commonProps = {
            project: activeProject,
            activeContext,
            activeChallenge,
            activeProcess,
            activeInsights,
            activeSolution,
            activeMetrics,
            activeLearnings,
            InteractionComponent: InteractionComponent
              ? () => (
                <Suspense
                  fallback={<SystemSectionLoader height="h-64" />}
                >
                  <InteractionComponent />
                </Suspense>
              )
              : null,
            showLivePreview,
            setShowLivePreview,
            t,
            isIndonesian,
            activeTitle,
            activeTldr,
            activeSnapshot,
          };

          if (type === "prototype") {
            return <PrototypeDetail {...commonProps} />;
          }

          const SelectedLayout = PROJECT_LAYOUT_MAP[project.id] || BentoDetail;
          return <SelectedLayout {...commonProps} />;
        })()}
      </main>

      <Footer />
    </div>
  );
};

export default SideProjectDetail;
