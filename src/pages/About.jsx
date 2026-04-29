import React, { useState, useMemo, Suspense, lazy } from "react";
import SystemLoader, { SystemSectionLoader } from "../components/SystemLoader";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Terminal,
  Cpu,
  BookOpen,
  Coffee,
  MapPin,
  Headphones,
  Activity,
  AlertTriangle,
  GitCommit,
  Download,
  Sun,
  Moon,
  PenTool,
  Zap,
  Flame,
  PenLine,
  Layers,
  Briefcase,
  User,
  Database,
  Server,
  Wifi,
  Layout,
  Shield,
  Globe,
  ScanEye,
  Award,
  Search,
  ArrowUpRight,
} from "lucide-react";
import {
  getRuntimeLog,
  getStreaks,
  creativeProcesses,
  certifications,
  achievements,
} from "../data/aboutData";
import { useTheme } from "../context/ThemeContext";
import BackgroundTexture from "../components/BackgroundTexture";
import Navbar from "../components/Navbar";
import PageShell from "../components/PageShell";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import SystemMonitor from "../components/SystemMonitor";
import ChaosSlider from "../components/ChaosSlider";
const ChaosCanvas = lazy(() => import("../components/ChaosCanvas"));
const NeuralEcho = lazy(() => import("../components/NeuralEcho"));
import Footer from "../components/Footer";
import RichText from "../components/RichText";
import ProfileScanner from "../components/ProfileScanner";
import BackButton from "../components/BackButton";
import ScrollProgressBar from "../components/ScrollProgressBar";
import NavigationMenu from "../components/NavigationMenu"; // Assuming this is also a new component

import RuntimeLogTimeline from "../components/about/RuntimeLogTimeline";
import CertificationsGrid from "../components/about/CertificationsGrid";
import AchievementsGrid from "../components/about/AchievementsGrid";
import MaintenanceGrid from "../components/about/MaintenanceGrid";
import StickyNote from "../components/StickyNote";

/* --- THEME CONFIGURATION ---
   Consistent with Human By Design System v2.0
*/

const AboutPage = () => {
  const { isDark } = useTheme();

  const { t } = useLanguage();
  const [chaosStrength, setChaosStrength] = useState(0);

  // JSON Config State

  // --- MERGED DATA: SYSTEM RUNTIME LOG (Chronological) ---
  const runtimeLog = useMemo(() => getRuntimeLog(t), [t]);

  // --- DATA: SYSTEM MAINTENANCE (Habits) ---
  const streaks = useMemo(() => getStreaks(t), [t]);

  // --- DATA: CREATIVE PROCESSES (Habits) ---
  // Imported directly

  // --- DATA: KNOWLEDGE UPGRADES (Certifications) ---
  // Imported directly

  const chaosStyle = useMemo(() => {
    if (chaosStrength === 0) return {};

    const s = chaosStrength;
    // Non-linear scaling: gets exponentially more chaotic toward 100
    const intensity = Math.pow(s / 100, 2); 

    const randomX = (Math.sin(s * 12.34)) * intensity * 60; // Up to 60px shake
    const randomY = (Math.cos(s * 56.78)) * intensity * 30; // Up to 30px shake
    const skew = (Math.sin(s * 90.12)) * intensity * 25; // Up to 25deg skew
    const blur = intensity * 3; // Keep blur low enough to still see shapes
    
    // Aggressive color warping
    const hueShift = intensity * 180; // Shift colors drastically
    const contrast = 100 + (intensity * 150); // Up to 250% contrast
    
    // Strobe inversion kicks in at high chaos (>80)
    const invert = s > 80 ? (Math.sin(s * 45.67) > 0 ? 100 : 0) : 0;
    
    // RGB Split effect
    const splitDistance = intensity * 20;
    const rgbSplit = `drop-shadow(${splitDistance}px 0 rgba(255,0,0,0.6)) drop-shadow(-${splitDistance}px ${splitDistance/2}px rgba(0,255,255,0.6))`;

    return {
      transform: `translate(${randomX}px, ${randomY}px) skew(${skew}deg) scale(${1 + intensity * 0.1})`,
      filter: `blur(${blur}px) contrast(${contrast}%) hue-rotate(${hueShift}deg) invert(${invert}%) ${rgbSplit}`,
      transition: "all 0.05s linear", // Faster transition for jerkier movement
    };
  }, [chaosStrength]);

  return (
    <div
      className="min-h-[100dvh] bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-blue)] selection:text-[some] transition-colors duration-500 overflow-x-hidden"
    >
      <SEO
        title="About Fadly Uzzaki"
        description="Learn about Fadly Uzzaki (Fadlyzaki)  -  Product Designer with expertise in B2B SaaS, EdTech, and human-centered systems design. Career timeline, certifications, and design philosophy."
      />

      {/* 1. TEXTURE & LIGHTING */}
      <Suspense fallback={<SystemLoader />}>
        <ChaosCanvas intensity={chaosStrength} />
      </Suspense>

      <PageShell navbarProps={{ title: "About System", backPath: "/" }}>
        {/* Progress Bar (Isolated Component) */}
        <ScrollProgressBar />

        {/* --- CONTENT --- */}
        <main className="relative z-10 w-full max-w-[1072px] mx-auto px-4 sm:px-6 pt-24 md:pt-24 pb-0 md:border-x border-[var(--border-color)] min-h-[100dvh] bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-2xl overflow-x-hidden transition-colors duration-500">
          
          {/* Static Sticky Notes Section */}
          <section className="px-4 md:px-0 mb-12 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <StickyNote text={t("home.sticky_note")} color="text-[var(--accent-blue)]" className="!mt-0 w-full" rotate="rotate-[-2deg]" />
              <StickyNote text={t("home.sticky_note_2")} color="text-[var(--accent-amber)]" className="!mt-0 w-full" rotate="rotate-[3deg]" />
              <StickyNote text={t("home.sticky_note_3")} color="text-[var(--accent-green)]" className="!mt-0 w-full" rotate="rotate-[-1deg]" />
              <StickyNote text={t("home.sticky_note_4")} color="text-[var(--accent-purple)]" className="!mt-0 w-full" rotate="rotate-[2deg]" />
            </div>
          </section>

          {/* PROFILE HERO - INTERACTIVE */}
          <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 mb-24 fade-in items-start">
            {/* Avatar Area */}
            <div className="flex flex-col gap-6">
              <div
                className="relative group w-64 mx-auto md:w-full"
                style={chaosStyle}
              >
                <ProfileScanner isDark={isDark} />
              </div>

              {/* Download CV Button - Moved here */}
              <div className="mt-6 flex justify-center">
                <Link
                  to="/cv"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] text-[var(--text-card-secondary)] hover:text-[var(--accent-blue)] transition-all font-mono text-sm uppercase rounded-lg shadow-sm hover:shadow-md group"
                >
                  <Download
                    size={16}
                    className="group-hover:-translate-y-0.5 transition-transform"
                  />
                  <span>{t("about.download_cv")}</span>
                </Link>
              </div>
            </div>

            {/* Intro Text & Chaos Control */}
            <div>
              <div style={chaosStyle}>
                <h1 className="text-4xl md:text-5xl font-mono text-[var(--text-primary)] uppercase leading-[1.1] mb-6 tracking-tight">
                  Fadly Uzzaki 🧢 (Jaki)
                </h1>

                {/* ENFJ-A Core Architecture Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-sm bg-[var(--accent-green)]/10 text-[var(--accent-green)] border border-[var(--accent-green)]/20 font-mono text-[10px] uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse"></span>
                  <span>[ KERNEL: ENFJ-A / PROTAGONIST ]</span>
                </div>

                <h2 className="text-xl text-[var(--accent-amber)] font-mono mb-8 flex items-center gap-3">
                  <span className="opacity-50 text-[var(--text-primary)]">
                  //
                  </span>
                  {t("about.intro_title")}
                </h2>

                <div className="prose prose-invert max-w-2xl">
                  <p className="text-xl md:text-2xl text-[var(--text-primary)] leading-tight mb-8 font-serif italic opacity-90">
                    {t("home.about_quote")}
                  </p>
                  <div className="text-[var(--text-secondary)] space-y-6 text-lg font-light leading-relaxed">
                    <p>
                      <RichText text={t("about.intro_p1")} />
                    </p>
                    <p>
                      <RichText text={t("about.intro_p2")} />
                    </p>
                    <p>
                      <RichText text={t("about.intro_p3")} />
                    </p>
                    <p>
                      <RichText text={t("about.intro_p4")} />
                    </p>
                  </div>
                  <ScrollReveal>
                    <blockquote className="border-l-2 border-[var(--accent-amber)] pl-6 py-2 mt-8 text-xl md:text-2xl text-[var(--text-primary)] font-light">
                      <RichText text={t("about.quote_full")} />
                    </blockquote>
                  </ScrollReveal>
                </div>
              </div>

              {/* INTERACTIVE COMPONENT: Chaos Slider */}
              <div className="mt-12 max-w-sm relative">
                <ChaosSlider value={chaosStrength} onChange={setChaosStrength} />
                <div className={`mt-4 transition-opacity duration-300 ${chaosStrength > 50 ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="font-mono text-[10px] text-[var(--accent-green)] uppercase tracking-widest flex items-center gap-2">
                    <Shield size={12} />
                    WARNING: High Chaos. ENFJ-A (Assertive) Protocol engaged. Performance stable.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* UNIFIED SYSTEM RUNTIME LOG (Bio + Work) */}
          <RuntimeLogTimeline runtimeLog={runtimeLog} t={t} />

          {/* KNOWLEDGE UPGRADES (Certifications) */}
          <CertificationsGrid certifications={certifications} t={t} />

          {/* ACHIEVEMENTS (Awards & Competitions) */}
          <AchievementsGrid achievements={achievements} t={t} />

          {/* SYSTEM MAINTENANCE (Habits) */}
          <MaintenanceGrid streaks={streaks} t={t} />

          {/* BACKGROUND PROCESSES (Creative Habits) */}
          <section className="mb-32">
            <ScrollReveal>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-sm text-[var(--accent-blue)] opacity-60 uppercase tracking-widest">
                // BACKGROUND_TASKS
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl font-mono text-[var(--text-primary)] uppercase tracking-tight mb-4">
                    {" "}
                    Creative Subroutines
                  </h2>
                  <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-6">
                    These non-essential processes run in the background to prevent
                    system overheating. Click on a process to view the raw output
                    log (Instagram).
                  </p>
                </div>
                <div>
                  <SystemMonitor skills={creativeProcesses} />
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* SEMANTIC MEMORY (Interactive RAG) */}
          <section className="mb-12">
            <ScrollReveal>
              <div className="mb-6">
                <h2 className="text-2xl font-mono text-[var(--text-primary)] mb-2 uppercase tracking-tight">
                  {t("about.neural_echo.title")}
                </h2>
              </div>
              <Suspense
                fallback={<SystemSectionLoader height="h-64" />}
              >
                <NeuralEcho />
              </Suspense>
            </ScrollReveal>
          </section>

          {/* FOOTER */}
          <section className="mb-0">
            <Footer />
          </section>
        </main>
      </PageShell>
    </div>
  );
};

export default AboutPage;
