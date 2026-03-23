import React, { useState, useEffect } from "react";
import SystemLoader, { SystemSectionLoader } from "../components/SystemLoader";
import { STORAGE_KEYS } from "../config/constants";
import { lazyWithRetry } from "../utils/lazyWithRetry";
import { useLocation, Link } from "react-router-dom";
import { Sun, Moon, Grid, ArrowUp, ScanEye } from "lucide-react";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ProgressBar from "../components/ProgressBar";
import NavigationMenu from "../components/NavigationMenu";
import Navbar from "../components/Navbar";

// Sub-components (Aggressively Lazy-Loaded for Mobile RES fix)
import HomeHero from "../components/home/HomeHero";
import HomeWorkSection from "../components/home/HomeWorkSection";
const HomeSideProjects = lazyWithRetry(
  () => import("../components/home/HomeSideProjects"),
);
const HomeAbout = lazyWithRetry(() => import("../components/home/HomeAbout"));
const FaqSection = lazyWithRetry(() => import("../components/FaqSection"));
const ChaosCanvas = lazyWithRetry(() => import("../components/ChaosCanvas"));

import BackgroundTexture from "../components/BackgroundTexture";
import useScrollDirection from "../hooks/useScrollDirection";
import { useLanguage } from "../context/LanguageContext";
import { useRecruiterMode } from "../context/RecruiterModeContext";
import ChaosToMatrixIntro from "../components/welcome/ChaosToMatrixIntro";
import { LayoutGroup, AnimatePresence } from "framer-motion";
import PageShell from "../components/PageShell";

const Home = () => {
  /* --- STATE & HOOKS --- */
  /* --- STATE & HOOKS --- */

  const { t, language } = useLanguage();
  const [showIntro, setShowIntro] = useState(() => {
    // Check URL override for testing/debugging
    const params = new URLSearchParams(window.location.search);
    if (params.get("forceIntro") === "true") {
      localStorage.removeItem(STORAGE_KEYS.INTRO_SEEN);
      return true;
    }
    // Automatically skip intro for recruiter mode
    if (params.get("recruiter") === "true") {
      return false;
    }
    // Only show intro once for first-time visitors (persists across tabs/restarts)
    return localStorage.getItem(STORAGE_KEYS.INTRO_SEEN) !== "true";
  });
  const showNav = useScrollDirection(false);

  const location = useLocation();
  const { isRecruiterMode } = useRecruiterMode();

  // Handle Hash Scrolling on Mount
  useEffect(() => {
    if (location.hash && !showIntro) {
      // Use requestAnimationFrame to ensure DOM is painted before scrolling
      requestAnimationFrame(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
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
    <LayoutGroup>
      <div
        className={`min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-blue)] selection:text-[some] overflow-x-hidden transition-colors duration-500 ${isRecruiterMode ? "recruiter-mode" : ""}`}
      >
        <AnimatePresence>
          {showIntro && (
            <ChaosToMatrixIntro
              onComplete={() => {
                localStorage.setItem(STORAGE_KEYS.INTRO_SEEN, "true");
                setShowIntro(false);
              }}
            />
          )}
        </AnimatePresence>

        <SEO
          title="Fadly Uzzaki  -  Product Designer"
          description="Fadly Uzzaki (Fadlyzaki) is a Senior Product Designer and Systems Thinker specializing in B2B SaaS, EdTech, and human-centered design. Explore case studies, experiments, and design philosophy."
          schema={{
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: "Fadly Uzzaki",
              alternateName: ["Fadlyzaki", "Jaki"],
              url: "https://fadlyzaki-design.vercel.app",
              image: "https://fadlyzaki-design.vercel.app/og-square.png",
              sameAs: [
                "https://www.linkedin.com/in/fadlyzaki/",
                "https://github.com/fadlyzaki",
                "https://dribbble.com/fadlyzaki",
                "https://medium.com/@fadlyzaki",
                "https://fadlyzaki.substack.com",
              ],
              jobTitle: "Senior Product Designer",
              description:
                "Senior Product Designer & Systems Thinker specializing in B2B SaaS, recruitment technology, and EdTech. Building resilient tools for people who need them to just work.",
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
        <React.Suspense fallback={<SystemLoader />}>
          <ChaosCanvas />
        </React.Suspense>

        <PageShell navbarProps={{ showNavOverride: showNav }}>
          {/* Progress Bar */}
          <ProgressBar />

          {/* Main Container */}
          <main className="relative z-10 w-full max-w-[1072px] mx-auto px-4 sm:px-6 pt-24 md:pt-24 pb-0 md:border-x border-[var(--border-color)] min-h-screen bg-white/95 dark:bg-black/95 backdrop-blur-md transition-colors duration-500 overflow-x-hidden shadow-2xl">
            <div className="fade-in text-left">
              {/* HERO & TICKER */}
              <HomeHero
                t={t}
                renderIdCard={shouldRenderHeroIdCard}
                startTyping={!showIntro}
              />

              {/* SECTION 1: WORK */}
              <HomeWorkSection t={t} />

              {/* SECTION 2: SIDE PROJECTS (LAZY) */}
              <React.Suspense
                fallback={<SystemSectionLoader />}
              >
                <HomeSideProjects t={t} isId={isId} />
              </React.Suspense>

              {/* SECTION 3: ABOUT ME (LAZY) */}
              <React.Suspense
                fallback={<SystemSectionLoader />}
              >
                <HomeAbout t={t} />
              </React.Suspense>

              {/* SECTION 4: FAQs (LAZY) */}
              <React.Suspense
                fallback={<SystemSectionLoader height="h-48" />}
              >
                <FaqSection />
              </React.Suspense>
            </div>

            {/* FOOTER */}
            <section className="mb-0">
              <Footer />
            </section>
          </main>
        </PageShell>
      </div>
    </LayoutGroup>
  );
};

export default Home;
