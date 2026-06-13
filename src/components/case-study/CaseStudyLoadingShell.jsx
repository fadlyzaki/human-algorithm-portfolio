/**
 * CaseStudyLoadingShell — Shared contextual loading fallback for case study pages.
 *
 * Used in two contexts:
 * 1. App.jsx PageLoader  — route-level Suspense fallback (static meta from caseStudyLoadingMeta.js)
 * 2. ProtectedCaseStudy   — component-level Suspense fallback (live project data)
 *
 * Props accept the union of both shapes so one component serves both call-sites.
 */
const CaseStudyLoadingShell = ({
  project,
  parentCluster,
  isId = false,
  titleId,
  "data-testid": dataTestId,
}) => {
  const projectTitle = isId
    ? project.title_id || project.title
    : project.title;

  const clusterLabel =
    (isId
      ? parentCluster?.title_id || parentCluster?.title
      : parentCluster?.title) ||
    parentCluster?.name ||
    "Case File";

  const projectProblem = isId
    ? project.details_id?.problem || project.details?.problem
    : project.details?.problem;

  return (
    <main
      aria-labelledby={titleId || "case-loading-title"}
      style={{ "--brand": parentCluster?.brandColor || "var(--accent-amber)" }}
      className="min-h-[100dvh] bg-[var(--bg-void)] px-6 pt-32 pb-20 text-[var(--text-primary)]"
      {...(dataTestId ? { "data-testid": dataTestId } : {})}
    >
      <div className="mx-auto flex min-h-[calc(100dvh-10rem)] max-w-5xl flex-col justify-center">
        <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--brand)]">
          <span className="h-2 w-2 rounded-full bg-current" />
          <span>{clusterLabel}</span>
          <span className="text-[var(--text-secondary)]">Loading case file</span>
        </div>

        <h1
          id={titleId || "case-loading-title"}
          className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight text-[var(--text-primary)] sm:text-6xl md:text-7xl"
        >
          {projectTitle}
        </h1>

        {projectProblem && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
            {projectProblem}
          </p>
        )}
      </div>
    </main>
  );
};

export default CaseStudyLoadingShell;
