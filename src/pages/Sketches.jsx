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

  const handleOpenMenu = useCallback(() => setIsMenuOpen(true), []);
  const handleCloseMenu = useCallback(() => setIsMenuOpen(false), []);

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
          <h2 id="sketches-archive-title" className="sr-only">
            {t("sketches.archive_sr_title") || "Sketches Archive"}
          </h2>
          <div className="w-full overflow-hidden rounded border border-[var(--border-color)] bg-[var(--bg-surface)]/40 p-2 shadow-2xl backdrop-blur-sm sm:p-4">
            <iframe
              src="https://widgets.sociablekit.com/instagram-story-highlights/iframe/25684322"
              frameBorder="0"
              width="100%"
              height="1000px"
              title={t("sketches.archive_label") || "Sketches Gallery"}
              className="w-full rounded"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sketches;
