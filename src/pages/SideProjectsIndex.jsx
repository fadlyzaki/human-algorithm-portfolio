import React, { useEffect, useRef } from "react";
import SystemLoader from "../components/SystemLoader";
import { Link, useNavigate } from "react-router-dom";
import { lazyWithRetry } from "../utils/lazyWithRetry";
import {
  ArrowLeft,
  ArrowUpRight,
  Filter,
  Sun,
  Moon,
  Globe,
  ScanEye,
} from "lucide-react";
import Navbar from "../components/Navbar";
import NavigationMenu from "../components/NavigationMenu";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { SIDE_PROJECTS, EXPERIMENTS } from "../data/portfolioData";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";
import ProjectCard from "../components/ProjectCard";
import VentureCard from "../components/VentureCard";
import NexusAI from "../components/interactions/NexusAI";
import BlindsReveal from "../components/BlindsReveal";
import PageShell from "../components/PageShell";
const ChaosCanvas = lazyWithRetry(() => import("../components/ChaosCanvas"));

// Configuration
const CONFIG = {
  proximity: 400, // Distance to trigger effect
  lineOpacity: 0.15,
  magneticForce: 0.5, // Strength of tilt
  scaleForce: 1.02, // Max scale
};

/**
 * ExperimentCard — Inline experiment card with BlindsReveal on the image area.
 */
import { useState } from "react";

const ExperimentCard = ({ project, idx, cardsRef, sideProjectsLength, isIndonesian, navigate }) => {
  const [isManualHover, setIsManualHover] = useState(false);
  const [isAutoHover, setIsAutoHover] = useState(false);
  const cardRef = useRef(null);

  const isHovered = isManualHover || isAutoHover;

  // Mobile: auto-cycle BlindsReveal when card scrolls into view
  useEffect(() => {
    const isMobile =
      window.innerWidth < 768 ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (!isMobile) return;

    let intervalId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAutoHover(true);
          intervalId = setInterval(() => {
            setIsAutoHover((prev) => !prev);
          }, 4000);
        } else {
          setIsAutoHover(false);
          if (intervalId) clearInterval(intervalId);
        }
      },
      { threshold: 0.6 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [project.id]);

  return (
    <div
      ref={(el) => {
        cardsRef.current[sideProjectsLength + idx] = el;
        cardRef.current = el;
      }}
      onClick={() => navigate(`/side-project/${project.id}`)}
      onMouseEnter={() => setIsManualHover(true)}
      onMouseLeave={() => setIsManualHover(false)}
      className="group cursor-pointer transition-transform duration-100 ease-out will-change-transform opacity-80 hover:opacity-100"
    >
      <div className="aspect-[4/3] bg-black dark:bg-white border border-[var(--border-color)] border-dashed mb-6 overflow-hidden relative">
        <BlindsReveal isOpen={isHovered} slats={6} color="black">
          <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            <ProjectCard
              type={project.type || "Web"}
              id={project.id}
              expanded={true}
              image={project.coverImage}
            />
          </div>
        </BlindsReveal>
      </div>

      <h3 className="text-xl font-serif italic text-[var(--text-primary)] mb-2 group-hover:underline decoration-1 underline-offset-4 decoration-dotted">
        {isIndonesian && project.title_id ? project.title_id : project.title}
      </h3>
      <p className="text-[var(--text-secondary)] font-light text-sm leading-relaxed mb-4 line-clamp-2">
        {isIndonesian && project.desc_id ? project.desc_id : project.desc}
      </p>
      <div className="flex gap-2 flex-wrap opacity-60">
        {project.stack.map((tech, tIdx) => (
          <span
            key={tIdx}
            className="text-[11px] font-mono border border-[var(--border-color)] px-2 py-1 rounded-sm text-[var(--text-secondary)] uppercase tracking-wider"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const SideProjectsIndex = () => {
  const { isDark } = useTheme();
  const { isIndonesian, t } = useLanguage();
  const navigate = useNavigate();

  // Interaction Refs
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const requestRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 }); // Start off-screen

  // Configuration
  // Moved to outside component to avoid re-creation

  const themeStyles = {
    "--accent-line": isDark ? "rgba(var(--bg-surface-rgb), 0.2)" : "rgba(var(--bg-void-rgb), 0.1)",
    "--accent-dot": isDark ? "rgba(var(--bg-surface-rgb), 0.5)" : "rgba(var(--bg-void-rgb), 0.5)",
  };

  // Initialize refs array
  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(
      0,
      SIDE_PROJECTS.length + EXPERIMENTS.length,
    );
  }, []);

  // Mouse Tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Get relative position to container if possible, or just page coordinates
      // Using page coordinates simplifies canvas drawing relative to window if canvas is fixed
      // But here canvas is absolute in container?
      // Let's assume canvas covers the whole document or fixed.
      // For simplicity in a scrollable page: track ClientX/Y and adjust map.

      // Simpler: Track pageX/Y for absolute canvas, or clientX/Y for fixed.
      // Given the scroll, let's use client coordinates and keeping canvas fixed is easier visual,
      // BUT lines need to stick to scrollable elements.
      // Better: Canvas absolute covering the specific section or fixed.
      // Let's make cursor track clientX/Y.
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation Loop
  useEffect(() => {
    const animate = () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Resize canvas to match window view (fixed overlay)
      if (
        canvas.width !== window.innerWidth ||
        canvas.height !== window.innerHeight
      ) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Line Style
      const isDarkMode = isDark;
      ctx.strokeStyle = isDarkMode
        ? "rgba(var(--bg-surface-rgb), 0.15)"
        : "rgba(var(--bg-void-rgb), 0.08)";
      ctx.lineWidth = 1;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      cardsRef.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCx = rect.left + rect.width / 2;
        const cardCy = rect.top + rect.height / 2;

        const dist = Math.hypot(mx - cardCx, my - cardCy);

        // 1. Draw Lines if close
        if (dist < CONFIG.proximity) {
          ctx.beginPath();
          ctx.moveTo(mx, my);
          ctx.lineTo(cardCx, cardCy);
          // Fade out based on distance
          ctx.globalAlpha = 1 - Math.pow(dist / CONFIG.proximity, 2);
          ctx.stroke();
          ctx.globalAlpha = 1.0;

          // Draw connection dots
          ctx.fillStyle = isDarkMode ? "var(--bg-void)" : "var(--bg-void)";
          ctx.beginPath();
          ctx.arc(cardCx, cardCy, 3, 0, Math.PI * 2);
          ctx.fill();
        }

        // 2. Magnetic Tilt
        if (dist < CONFIG.proximity * 1.5) {
          // Slightly larger radius for movement
          const xRel = (mx - cardCx) / (rect.width / 2); // -1 to 1 mostly
          const yRel = (my - cardCy) / (rect.height / 2);

          // Limit rotation
          const rotX = -yRel * CONFIG.magneticForce * 5; // Rotate X based on Y movement
          const rotY = xRel * CONFIG.magneticForce * 5; // Rotate Y based on X movement
          const scale =
            1 +
            (1 - Math.min(dist / (CONFIG.proximity * 1.5), 1)) *
            (CONFIG.scaleForce - 1);

          card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`;
          card.style.zIndex = 10; // Bring to front
        } else {
          card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
          card.style.zIndex = 1;
        }
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isDark]); // Re-bind on theme change for colors

  return (
    <div
      style={themeStyles}
      className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500 relative"
    >
      <SEO
        title="Side Projects & Experiments"
        description="Browse Fadly Uzzaki's side projects, experiments, and prototypes — from The Human Algorithm (AI-built portfolio) to interactive workbooks and design research tools."
      />

      {/* Background Atmosphere */}
      <React.Suspense fallback={<SystemLoader />}>
        <ChaosCanvas />
      </React.Suspense>

      <PageShell navbarProps={{ title: "Project Archives", backPath: "/" }}>

      <main className="relative z-10 w-full max-w-[1072px] mx-auto px-4 sm:px-6 pt-24 md:pt-24 pb-0 md:border-x border-[var(--border-color)] min-h-screen bg-white/95 dark:bg-black/95 backdrop-blur-md transition-colors duration-500 overflow-x-hidden shadow-2xl" ref={containerRef}>
        <header className="mb-32 relative min-h-[50vh] flex flex-col justify-center text-center md:text-left">
          {/* Background Visual */}
          <div className="absolute inset-0 z-0 opacity-40 grayscale blur-[1px]">
            <NexusAI color={isDark ? "some" : "some"} />
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-red)] animate-pulse"></div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                Venture Portfolio 2024-2026
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif italic mb-8 tracking-tighter leading-[0.9]">
              Ship. Measure. <br />
              <span className="text-[var(--text-secondary)]">Repeat.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl">
              A showcase of independent products, from 0 to 1.{" "}
              <br className="hidden md:block" />
              <span className="opacity-80 text-lg">
                {t("project_archive.subtitle")}
              </span>
            </p>
          </div>
        </header>

        {SIDE_PROJECTS.length > 0 && (
          <div className="mb-32">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-12 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[var(--border-color)]"></span>
              Launched Ventures
              <span className="flex-1 h-[1px] bg-[var(--border-color)]"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 perspective-1000 auto-rows-auto">
              {SIDE_PROJECTS.filter((p) => !p.hidden).map((project, idx) => (
                <VentureCard
                  key={project.id}
                  project={project}
                  index={idx}
                  isIndonesian={isIndonesian}
                  onClick={() => navigate(`/side-project/${project.id}`)}
                />
              ))}
            </div>
          </div>
        )}

        {/* EXPERIMENTS Section */}
        {EXPERIMENTS.length > 0 && (
          <div className="mb-12">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-12 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[var(--border-color)]"></span>
              <span>
                Experiments & Explorations
                <span className="block text-[10px] text-[var(--text-secondary)] normal-case mt-1 max-w-md">
                  Thinking, building, and attempts to solve problems.
                </span>
              </span>
              <span className="flex-1 h-[1px] bg-[var(--border-color)]"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 perspective-1000">
              {EXPERIMENTS.map((project, idx) => (
                <ExperimentCard
                  key={project.id}
                  project={project}
                  idx={idx}
                  cardsRef={cardsRef}
                  sideProjectsLength={SIDE_PROJECTS.length}
                  isIndonesian={isIndonesian}
                  navigate={navigate}
                />
              ))}
            </div>
          </div>
        )}
        <section className="mb-0">
          <Footer />
        </section>
      </main>
      </PageShell>
    </div>
  );
};

export default SideProjectsIndex;
