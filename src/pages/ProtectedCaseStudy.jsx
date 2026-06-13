import React, { useState, Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { ShieldAlert, ArrowLeft, FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { lazyWithRetry } from "../utils/lazyWithRetry";
import PageShell from "../components/PageShell";
import useProjectData from "../hooks/useProjectData";
import LockScreen from "../components/auth/LockScreen";
import { isProjectLocked, isProjectBypassed } from "../utils/projectMappers";
import ChaosMatrixBackground from "../components/auth/ChaosMatrixBackground";
import SEO from "../components/SEO";
import { getCaseStudyLoadingMeta } from "../utils/caseStudyLoadingMeta";
import CaseStudyLoadingShell from "../components/case-study/CaseStudyLoadingShell";

// Lazy Load Heavy Content with Retry Logic
const CaseStudyContent = lazyWithRetry(
  () => import("../components/case-study/CaseStudyContent"),
);

const CASE_FILE_SHELL_MS = 900;


const ProtectedCaseStudy = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const isId = language === "id";
  const [isLocked, setIsLocked] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const [authPhase, setAuthPhase] = useState("chaos");
  const [showCaseContent, setShowCaseContent] = useState(false);

  // Use Centralized Data Hook
  const { project, parentCluster, loading, error } = useProjectData(id);
  const projectId = project?.id;

  // Sync lock state once project data is loaded
  React.useEffect(() => {
    if (project && !isInitialized) {
      const locked = isProjectLocked(project);
      const bypassed = isProjectBypassed(project);
      const finalLockedState = locked && !bypassed;
      setIsLocked(finalLockedState);
      if (!finalLockedState) {
        setAuthPhase("unlocked");
      }
      setIsInitialized(true);
    }
  }, [project, isInitialized]);

  React.useEffect(() => {
    if (!isInitialized || isLocked || !projectId) {
      setShowCaseContent(false);
      return undefined;
    }

    setShowCaseContent(false);
    const timer = window.setTimeout(() => setShowCaseContent(true), CASE_FILE_SHELL_MS);
    return () => window.clearTimeout(timer);
  }, [id, isInitialized, isLocked, projectId]);

  // --- LOADING PROTOTYPE ---
  if (loading) {
    const loadingMeta = getCaseStudyLoadingMeta(id);

    return (
      <>
        <SEO title={loadingMeta.project.title} />
        <CaseStudyLoadingShell
          project={loadingMeta.project}
          parentCluster={loadingMeta.parentCluster}
          isId={isId}
        />
      </>
    );
  }

  // --- ERROR / 404 HANDLING ---
  if (error || !project) {
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
          <ShieldAlert
            size={48}
            className="mx-auto text-red-500 mb-6 animate-pulse"
          />
          <h1 className="text-2xl font-bold text-red-500 mb-2 uppercase tracking-[0.12em]">
            {t("protected.access_denied") || "Access Denied"}
          </h1>
          <div className="h-px w-16 bg-red-800 mx-auto mb-6"></div>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            {t("protected.file_not_exist") ||
              `The requested case file "${id}" does not exist or has been redacted from the archives.`}
          </p>
          {/* Request Access Button (Safety Net for 404/Missing Files) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`mailto:fadly.uzzaki@gmail.com?subject=Request%20Access%3A%20${id}&body=Hello%20Fadly%2C%0A%0AI%20would%20like%20to%20request%20an%20access%20key%20for%20the%20project%20"${id}".%0A%0AThank%20you!`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-red-400 hover:text-red-300 border border-red-900/50 px-6 py-3 hover:bg-red-950/30 transition-all font-mono"
            >
              <FileText size={14} /> {t("protected.request_access") || "Request Access Key"}
            </a>
            
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 hover:text-white transition-all font-mono"
            >
              <ArrowLeft size={14} /> {t("project_layouts.return_base") || "Return to Base"}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDER ---
  return (
    <>
      <SEO title={isId ? project.title_id || project.title : project.title} />

      {/* Only show Chaos Matrix during auth/lock phase */}
      {isLocked && <ChaosMatrixBackground phase={authPhase} />}

      {isLocked ? (
        <LockScreen
          project={project}
          parentCluster={parentCluster}
          onDecryptStart={() => setAuthPhase("matrix")}
          onSuccess={() => {
            setAuthPhase("unlocked");
            setIsLocked(false);
          }}
        />
      ) : (
        <PageShell
          navbarProps={{
            title: isId ? "Akses Terbatas" : "Restricted Access",
            backPath: `/work/${parentCluster?.id || ""}`,
          }}
          showTexture={false}
        >

          {showCaseContent ? (
            <Suspense
              fallback={
                <CaseStudyLoadingShell
                  project={project}
                  parentCluster={parentCluster}
                  isId={isId}
                />
              }
            >
              <CaseStudyContent project={project} parentCluster={parentCluster} />
            </Suspense>
          ) : (
            <CaseStudyLoadingShell
              project={project}
              parentCluster={parentCluster}
              isId={isId}
            />
          )}
        </PageShell>
      )}
    </>
  );
};

export default ProtectedCaseStudy;
