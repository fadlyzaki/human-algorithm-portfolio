import React, { useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import NavigationMenu from "../components/NavigationMenu";
import ScrollProgressBar from "../components/ScrollProgressBar";
import { useLanguage } from "../context/LanguageContext";

const Sketches = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleOpenMenu = useCallback(() => setIsMenuOpen(true), []);
  const handleCloseMenu = useCallback(() => setIsMenuOpen(false), []);
  const handleIframeLoad = useCallback(() => setIframeLoaded(true), []);

  const intentText =
    t("sketches.intent_text") ||
    "Visual thinking made public — sketches, experiments, and ideas that didn't make it to production. Yet.";

  const loadingText =
    t("sketches.loading_text") || "Loading visual archive…";

  return (
    <div
      className="min-h-[100dvh] flex flex-col bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-700 overflow-hidden relative"
    >
      <Helmet>
        <title>{t("sketches.helmet_title") || "Sketches | Fadly Zaki"}</title>
        <meta
          name="description"
          content={t("sketches.seo_desc") || "Sketches visual archive"}
        />
      </Helmet>

      <SEO
        title={t("sketches.seo_title") || "Sketches & Visual Archive"}
        description={t("sketches.seo_desc") || "Sketches visual archive"}
        type="website"
      />

      <ScrollProgressBar />

      {/* --- NAVIGATION SYSTEM --- */}
      <div className="relative z-50">
        <Navbar onOpenMenu={handleOpenMenu} title={t("sketches.nav_title") || "SKETCHES"} backPath="/" />
        <NavigationMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
      </div>

      <main className="relative z-10 flex-1 w-full pt-24 pb-20">
        <section
          className="mx-auto flex min-h-[70dvh] w-full max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8"
          aria-labelledby="sketches-archive-title"
        >
          <h1 id="sketches-archive-title" className="sr-only">
            {t("sketches.archive_sr_title") || "Sketches Archive"}
          </h1>

          {/* Intent copy — orients the recruiter before the widget loads */}
          <p className="mb-6 max-w-xl font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] opacity-70">
            {intentText}
          </p>

          {/* Widget wrapper with loading skeleton */}
          <div
            className="w-full overflow-hidden rounded border border-[var(--border-color)] bg-[var(--bg-surface)]/40 p-2 shadow-2xl backdrop-blur-sm sm:p-4 relative"
            aria-busy={!iframeLoaded}
            aria-live="polite"
          >
            {/* Skeleton shimmer — visible until iframe fires onLoad */}
            {!iframeLoaded && (
              <div
                className="absolute inset-2 sm:inset-4 rounded overflow-hidden"
                aria-label={loadingText}
                role="status"
              >
                <div
                  className="w-full h-full rounded"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--bg-surface) 0%, var(--bg-card) 50%, var(--bg-surface) 100%)",
                    backgroundSize: "200% 100%",
                    animation: "sketchesSkeleton 1.6s ease-in-out infinite",
                  }}
                />
                <p className="absolute bottom-4 left-0 right-0 text-center font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)] opacity-50">
                  {loadingText}
                </p>
              </div>
            )}

            <iframe
              src="https://widgets.sociablekit.com/instagram-story-highlights/iframe/25684322"
              frameBorder="0"
              width="100%"
              onLoad={handleIframeLoad}
              title={t("sketches.archive_label") || "Sketches Gallery"}
              className="w-full rounded transition-opacity duration-500"
              style={{
                height: "min(85dvh, 1000px)",
                opacity: iframeLoaded ? 1 : 0,
              }}
            />
          </div>
        </section>
      </main>

      {/* Skeleton animation keyframe */}
      <style>{`
        @keyframes sketchesSkeleton {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
};

export default Sketches;
