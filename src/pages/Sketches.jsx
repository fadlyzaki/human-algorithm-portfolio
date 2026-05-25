import React, { useCallback, useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import NavigationMenu from "../components/NavigationMenu";
import ScrollProgressBar from "../components/ScrollProgressBar";

export const SOCIABLEKIT_HIGHLIGHTS_EMBED_ID = "25684322";
export const SOCIABLEKIT_HIGHLIGHTS_SCRIPT_ID =
  "sociablekit-instagram-story-highlights-script";
export const SOCIABLEKIT_HIGHLIGHTS_SCRIPT_SRC =
  "https://widgets.sociablekit.com/instagram-story-highlights/widget.js";

const loadSociableKitHighlights = () => {
  if (typeof document === "undefined") return;

  if (document.getElementById(SOCIABLEKIT_HIGHLIGHTS_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = SOCIABLEKIT_HIGHLIGHTS_SCRIPT_ID;
  script.src = SOCIABLEKIT_HIGHLIGHTS_SCRIPT_SRC;
  script.defer = true;
  script.async = true;
  document.body.appendChild(script);
};

export const SociableKitInstagramHighlights = () => {
  useEffect(() => {
    loadSociableKitHighlights();
  }, []);

  return (
    <div
      className="sk-ww-instagram-story-highlights"
      data-embed-id={SOCIABLEKIT_HIGHLIGHTS_EMBED_ID}
      data-testid="sociablekit-instagram-story-highlights"
      aria-label="Instagram story highlights archive"
    />
  );
};

const Sketches = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = useCallback(() => setIsMenuOpen(true), []);
  const handleCloseMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <div
      className={`min-h-[100dvh] flex flex-col bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-zinc-800 selection:text-white transition-colors duration-700 overflow-hidden relative`}
    >
      <Helmet>
        <title>Sketches | Fadly Zaki</title>
        <meta
          name="description"
          content="A lightweight visual archive of sketches and creative exploration."
        />
      </Helmet>

      <SEO
        title="Sketches & Visual Archive"
        description="Sketches by Fadly Uzzaki  -  a lightweight visual archive of design thinking, ideation, and creative exploration."
        type="website"
      />

      {/* --- BACKGROUND ELEMENTS --- */}
      {/* Subtle wall texture noise overlay */}
      <div
        className={`absolute inset-0 z-0 pointer-events-none opacity-[0.25] mix-blend-overlay`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Ambient lighting (subtle vignette instead of harsh radial spotlight) */}
      <div
        className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-500`}
        style={{ boxShadow: "inset 0 0 200px rgba(var(--bg-void-rgb), 0.15)" }}
      ></div>

      <ScrollProgressBar />

      {/* --- NAVIGATION SYSTEM --- */}
      <div className="relative z-50">
        <Navbar onOpenMenu={handleOpenMenu} title="SKETCHES" backPath="/" />
        <NavigationMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
      </div>

      <main className="relative z-10 flex-1 w-full pt-24 pb-20">
        <section
          className="mx-auto flex min-h-[70dvh] w-full max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8"
          aria-labelledby="sketches-archive-title"
        >
          <h2 id="sketches-archive-title" className="sr-only">
            Sketches visual archive
          </h2>
          <div className="w-full overflow-hidden rounded border border-[var(--border-color)] bg-[var(--bg-surface)]/40 p-2 shadow-2xl backdrop-blur-sm sm:p-4">
            <SociableKitInstagramHighlights />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sketches;
