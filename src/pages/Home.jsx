import React, { useState, useEffect } from "react";
import { STORAGE_KEYS } from "../config/constants";
import { lazyWithRetry } from "../utils/lazyWithRetry";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import ProgressBar from "../components/ProgressBar";
import DeferredSection from "../components/DeferredSection";

// Sub-components (Aggressively Lazy-Loaded for Mobile RES fix)
import HomeHero from "../components/home/HomeHero";
const HomeFeaturedWork = lazyWithRetry(
  () => import("../components/home/HomeFeaturedWork"),
);
const HomeWorkSection = lazyWithRetry(
  () => import("../components/home/HomeWorkSection"),
);
const HomeSideProjects = lazyWithRetry(
  () => import("../components/home/HomeSideProjects"),
);
const HomeAbout = lazyWithRetry(() => import("../components/home/HomeAbout"));
const FaqSection = lazyWithRetry(() => import("../components/FaqSection"));
const ChaosCanvas = lazyWithRetry(() => import("../components/ChaosCanvas"));
const Footer = lazyWithRetry(() => import("../components/Footer"));

import useScrollDirection from "../hooks/useScrollDirection";
import { useLanguage } from "../context/LanguageContext";
import { useRecruiterMode } from "../context/RecruiterModeContext";
import PageShell from "../components/PageShell";
import { useAfterFirstPaint } from "../hooks/useAfterFirstPaint";

const ChaosToMatrixIntro = lazyWithRetry(
  () => import("../components/welcome/ChaosToMatrixIntro"),
);

const SectionFallback = ({ className = "h-64" }) => (
  <div
    className={`${className} rounded-lg border border-dashed border-[var(--border-color)]/40 bg-[var(--bg-surface)]/20`}
    aria-hidden="true"
  />
);

const Home = () => {
  const { t, language } = useLanguage();
  const [showIntro, setShowIntro] = useState(() => {
    // Check URL override for testing/debugging
    const params = new URLSearchParams(window.location.search);
    if (params.get("forceIntro") === "true") {
      localStorage.removeItem(STORAGE_KEYS.INTRO_SEEN);
      return true;
    }

    // Fast default: never block first content paint with the cinematic intro.
    return false;
  });
  const showNav = useScrollDirection(false);
  const enhanceAfterPaint = useAfterFirstPaint();

  const location = useLocation();
  const { isRecruiterMode } = useRecruiterMode();
  const canUseMotionMedia =
    typeof window !== "undefined" && "matchMedia" in window;
  const enableAtmosphere =
    enhanceAfterPaint &&
    canUseMotionMedia &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!location.hash || showIntro) return undefined;

    let attempts = 0;
    let timeoutId;
    let frameId;

    const scrollToHash = () => {
      frameId = requestAnimationFrame(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return;
        }

        attempts += 1;
        if (attempts < 20) {
          timeoutId = window.setTimeout(scrollToHash, 100);
        }
      });
    };

    scrollToHash();

    return () => {
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, [location.hash, showIntro]);

  // Lock body scroll when intro is showing
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup
    };
  }, [showIntro]);

  const isId = language === "id";

  // ID Card should be rendered in HomeHero if intro is completely done.
  const shouldRenderHeroIdCard = !showIntro;

  return (
    <>
      <div
        className={`min-h-[100dvh] bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-blue)] selection:text-white overflow-x-hidden transition-colors duration-500 ${isRecruiterMode ? "recruiter-mode" : ""}`}
      >
        {showIntro && (
          <React.Suspense fallback={null}>
            <ChaosToMatrixIntro
              onComplete={() => {
                localStorage.setItem(STORAGE_KEYS.INTRO_SEEN, "true");
                setShowIntro(false);
              }}
            />
          </React.Suspense>
        )}

        <SEO
          title="Fadly Uzzaki  -  Product Designer"
          description="Fadly Uzzaki (Fadlyzaki) is a Product Designer and Systems Thinker specializing in B2B SaaS, EdTech, and human-centered design. System-driven and outcome-focused."
          schema={{
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: "Fadly Uzzaki",
              alternateName: ["Fadlyzaki", "Jaki"],
              url: "https://fadlyzaki-design.vercel.app",
              image: "https://fadlyzaki-design.vercel.app/api/og?page=%2F",
              sameAs: [
                "https://www.linkedin.com/in/fadlyzaki/",
                "https://github.com/fadlyzaki",
                "https://dribbble.com/fadlyzaki",
                "https://medium.com/@fadlyzaki",
                "https://fadlyzaki.substack.com",
              ],
              jobTitle: "Product Designer",
              description:
                "Product Designer & Systems Thinker specializing in B2B SaaS, recruitment technology, and EdTech. Building resilient tools with measurable impact.",
              knowsAbout: [
                "Product Design",
                "UX Design",
                "UI Design",
                "Systems Thinking",
                "B2B SaaS",
                "EdTech",
                "Human-Centered Design",
                "Design Systems",
                "Framer Motion",
                "React",
              ],
              knowsLanguage: ["en", "id"],
            },
          }}
        />

        {/* ATMOSPHERE & CHAOS */}
        {enableAtmosphere && (
          <React.Suspense fallback={null}>
            <ChaosCanvas />
          </React.Suspense>
        )}

        <PageShell navbarProps={{ showNavOverride: showNav }}>
          {/* Progress Bar */}
          <ProgressBar />

          {/* Main Container */}
          <main className="relative z-10 w-full max-w-[1072px] mx-auto px-4 sm:px-6 pt-24 md:pt-24 pb-0 md:border-x border-[var(--border-color)] min-h-[100dvh] bg-white/95 dark:bg-black/95 backdrop-blur-md transition-colors duration-500 overflow-x-hidden shadow-2xl">

            <div className="fade-in text-left">
              {/* HERO & TICKER */}
              <HomeHero
                t={t}
                renderIdCard={shouldRenderHeroIdCard}
              />

              <DeferredSection
                deferUntilScroll
                force={location.hash === "#featured-work"}
                minHeight="min-h-[720px]"
              >
                <React.Suspense fallback={<SectionFallback />}>
                  <HomeFeaturedWork />
                </React.Suspense>
              </DeferredSection>

              <DeferredSection
                deferUntilScroll
                force={location.hash === "#work"}
                minHeight="min-h-[720px]"
              >
                <React.Suspense fallback={<SectionFallback />}>
                  <HomeWorkSection t={t} />
                </React.Suspense>
              </DeferredSection>

              <DeferredSection
                deferUntilScroll
                force={location.hash === "#side-projects"}
                minHeight="min-h-[540px]"
              >
                <React.Suspense fallback={<SectionFallback />}>
                  <HomeSideProjects t={t} isId={isId} />
                </React.Suspense>
              </DeferredSection>

              {!import.meta.env.DEV && (
                <DeferredSection
                  deferUntilScroll
                  force={location.hash === "#about"}
                  minHeight="min-h-[760px]"
                >
                  <React.Suspense fallback={<SectionFallback />}>
                    <HomeAbout t={t} />
                  </React.Suspense>
                </DeferredSection>
              )}

              <DeferredSection
                deferUntilScroll
                force={location.hash === "#faqs"}
                minHeight="min-h-[280px]"
              >
                <React.Suspense fallback={<SectionFallback className="h-48" />}>
                  <FaqSection />
                </React.Suspense>
              </DeferredSection>
            </div>

            <DeferredSection
              deferUntilScroll
              minHeight="min-h-[220px]"
              rootMargin="1000px 0px"
            >
              <React.Suspense fallback={<SectionFallback className="h-48" />}>
                <section className="mb-0">
                  <Footer />
                </section>
              </React.Suspense>
            </DeferredSection>
          </main>
        </PageShell>
      </div>
    </>
  );
};

export default Home;
