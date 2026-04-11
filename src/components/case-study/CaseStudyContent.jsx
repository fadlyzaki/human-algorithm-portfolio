import React from "react";
import { Sun, Moon, Globe, FileText } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import BackButton from "../BackButton";
import SEO from "../SEO";
import AIBrainstorm from "../AIBrainstorm";
import Footer from "../Footer";

import HeroSection from "./sections/HeroSection";
import ContextStrip from "./sections/ContextStrip";
import ProcessFramework from "./sections/ProcessFramework";
import KeyInsights from "./sections/KeyInsights";
import SolutionSection from "./sections/SolutionSection";
import PrototypeViewer from "./sections/PrototypeViewer";
import ImpactMetrics from "./sections/ImpactMetrics";
import DesignSystemCaseStudy from "./DesignSystemCaseStudy";
import StoqoSalesCaseStudy from "./StoqoSalesCaseStudy";
import StoqoLogisticsCaseStudy from "./StoqoLogisticsCaseStudy";

const CaseStudyContent = ({ project, parentCluster }) => {
  const { t, language, toggleLanguage } = useLanguage();
  const { isDark, setIsDark } = useTheme();

  // Resolve Case Data (Bilingual)
  const isId = language === "id";
  const rawCaseData = project.caseStudy || {
    locked: true,
    memo: "CONFIDENTIAL DATA NOT AVAILABLE",
    metrics: [],
  };

  const caseData =
    isId && project.caseStudy_id ? project.caseStudy_id : rawCaseData;

  const themeStyles = {
    "--brand": parentCluster?.brandColor || "var(--accent-amber)",
  };

  return (
    <div
      style={themeStyles}
      className="min-h-[100dvh] bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-[var(--brand)] selection:text-white transition-colors duration-500"
    >
      <SEO
        title={isId ? project.title_id || project.title : project.title}
        description={
          caseData.challenge ||
          (isId
            ? project.details_id?.problem || project.details.problem
            : project.details.problem)
        }
      />

      {/* AMBIENT MOOD BACKGROUND */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${themeStyles["--brand"]} 0%, transparent 70%)`,
        }}
      ></div>

      {/* Navbar Mock */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[var(--bg-void)]/80 backdrop-blur-md border-b border-[var(--border-color)] transition-all duration-500">
        <BackButton
          to={`/work/${parentCluster.id}`}
          label="Close"
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-[var(--brand)] font-mono text-xs tracking-widest hidden md:flex">
          <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
          CASE_FILE_{project.id.toUpperCase()}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors p-1"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title="Switch Language"
            >
              <Globe size={16} />
              <span className="font-mono text-xs uppercase tracking-widest">
                {language}
              </span>
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 w-full pb-32">
        {/* Design System gets its own custom layout, decoupled from ProcessFramework */}
        {project.id === "design-system-gudangada" ? (
          <DesignSystemCaseStudy caseData={caseData} t={t} />
        ) : project.id === "stoqo-logistics" ? (
          <StoqoLogisticsCaseStudy caseData={caseData} project={project} t={t} language={language} />
        ) : project.id === "stoqo-sales" ? (
          <>
            <StoqoSalesCaseStudy caseData={caseData} project={project} t={t} />

            {/* AI BRAINSTORM */}
            {(caseData.aiHypotheses || caseData.aiHypothesis) && (
              <AIBrainstorm
                hypotheses={caseData.aiHypotheses || [caseData.aiHypothesis]}
                t={t}
              />
            )}

            {/* TAKEAWAYS (ARCHITECT'S NOTE) */}
            <section className="max-w-3xl mx-auto px-6 py-40 text-center">
              <FileText
                className="mx-auto text-[var(--text-secondary)] mb-8"
                size={32}
              />
              <h4 className="font-mono text-xs uppercase mb-8 opacity-50 tracking-[0.2em]">
                {t("protected.architect_debrief") || "// Architect's Debrief"}
              </h4>
              <p className="text-2xl md:text-3xl font-serif leading-relaxed text-[var(--text-primary)]">
                "{caseData.learnings || caseData.memo || "Confidential"}"
              </p>
              <div className="mt-12 w-24 h-1 bg-[var(--brand)] mx-auto"></div>
            </section>
          </>
        ) : (
          <>
            <HeroSection project={project} caseData={caseData} isId={isId} t={t} />
            
            <ContextStrip project={project} caseData={caseData} />

            <ProcessFramework caseData={caseData} t={t} />

            <KeyInsights caseData={caseData} t={t} />

            <SolutionSection caseData={caseData} t={t} />

            <PrototypeViewer caseData={caseData} t={t} />

            <ImpactMetrics caseData={caseData} t={t} />

            {/* AI BRAINSTORM */}
            {(caseData.aiHypotheses || caseData.aiHypothesis) && (
              <AIBrainstorm
                hypotheses={caseData.aiHypotheses || [caseData.aiHypothesis]}
                t={t}
              />
            )}

            {/* TAKEAWAYS (ARCHITECT'S NOTE) */}
            <section className="max-w-3xl mx-auto px-6 py-40 text-center">
              <FileText
                className="mx-auto text-[var(--text-secondary)] mb-8"
                size={32}
              />
              <h4 className="font-mono text-xs uppercase mb-8 opacity-50 tracking-[0.2em]">
                {t("protected.architect_debrief") || "// Architect's Debrief"}
              </h4>
              <p className="text-2xl md:text-3xl font-serif leading-relaxed text-[var(--text-primary)]">
                "{caseData.learnings || caseData.memo || "Confidential"}"
              </p>
              <div className="mt-12 w-24 h-1 bg-[var(--brand)] mx-auto"></div>
            </section>
          </>
        )}

        <Footer />
      </main>
    </div>
  );
};

export default CaseStudyContent;
