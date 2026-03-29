import React, { Suspense, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ScanEye, Sun, Moon, Globe } from "lucide-react";
import { lazyWithRetry } from "../utils/lazyWithRetry";

import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import NavigationMenu from "../components/NavigationMenu";
import useProjectData from "../hooks/useProjectData";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";

// Sub-components
import CompanyHero from "../components/company/CompanyHero";
import CompanyStats from "../components/company/CompanyStats";
import CompanySidebar from "../components/company/CompanySidebar";
import CompanyProjects from "../components/company/CompanyProjects";
import CompanyCulture from "../components/company/CompanyCulture";
import SystemLoader from "../components/SystemLoader";

const ChaosCanvas = lazyWithRetry(() => import("../components/ChaosCanvas"));

// Dynamic Imports for AI Interactions with Retry Logic
const WorkforceAI = lazyWithRetry(
  () => import("../components/interactions/WorkforceAI"),
);
const CommerceAI = lazyWithRetry(
  () => import("../components/interactions/CommerceAI"),
);
const EfficiencyAI = lazyWithRetry(
  () => import("../components/interactions/EfficiencyAI"),
);

const CompanyDetail = () => {
  const { t, language } = useLanguage();
  const { id } = useParams();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { project: cluster, loading } = useProjectData(id);

  if (loading) return <div className="min-h-screen bg-black" />; // Minimal loader
  if (!cluster) return null; // Or 404

  // Defensive routing: If this ID is a sub-project (no .projects array), redirect to case-study
  if (!cluster.projects) {
    return <Navigate to={`/case-study/${id}`} replace />;
  }

  const brandColor = cluster.brandColor || "var(--accent-blue)";
  const isId = language === "id";

  // Map ID to Component
  const InteractionComponent =
    {
      workforce: WorkforceAI,
      commerce: CommerceAI,
      efficiency: EfficiencyAI,
    }[cluster.id] || WorkforceAI; // Fallback

  const themeStyles = {
    "--brand": brandColor,
  };

  return (
    <div
      style={themeStyles}
      className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500 selection:bg-[var(--brand)] selection:text-white"
    >
      <SEO
        title={`${cluster.company}  -  ${cluster.title}`}
        description={isId ? cluster.hook_id || cluster.hook : cluster.hook}
        image={cluster.logo}
        type="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "Project",
          name: `${cluster.company}`,
          headline: cluster.title,
          description: cluster.hook,
          image: cluster.logo,
          url: window.location.href,
          creator: {
            "@type": "Person",
            name: "Fadly Uzzaki",
          },
        }}
      />

      {/* --- 0. AMBIENCE --- */}
      <Suspense fallback={<SystemLoader />}>
        <ChaosCanvas />
      </Suspense>
      {/* Vignette */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--bg-void)_120%)]"></div>

      {/* --- NAVIGATION SYSTEM --- */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        title={cluster.company}
        backPath="/"
      />

      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <main className="relative z-10 w-full">
        {/* 1. IMMERSIVE HERO SECTION */}
        <CompanyHero
          cluster={cluster}
          t={t}
          isId={isId}
          InteractionComponent={InteractionComponent}
          brandColor={brandColor}
        />

        {/* Stats Bar */}
        <div className="relative z-20 bg-[var(--bg-void)]">
          <CompanyStats cluster={cluster} t={t} />
        </div>

        {/* 2. SPLIT SCROLL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24 max-w-7xl mx-auto px-6 py-24">
          {/* Sticky Sidebar: Context */}
          <CompanySidebar cluster={cluster} t={t} isId={isId} id={id} />

          {/* Main Content: Projects List */}
          <CompanyProjects cluster={cluster} t={t} isId={isId} />
        </div>

        {/* 3. CULTURE GALLERY (Dynamic) */}
        <CompanyCulture cluster={cluster} isId={isId} />
      </main>
      <Footer />
    </div>
  );
};

export default CompanyDetail;
