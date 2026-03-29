import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import ProjectCard from "./ProjectCard";

const WorkBento = ({ cluster, priority = false }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isId = language === "id";
  const [isManualHover, setIsManualHover] = useState(false);
  const [isAutoHover, setIsAutoHover] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const containerRef = useRef(null);

  const isHovered = isManualHover || isAutoHover;

  // Auto-hover interaction for mobile devices to reveal the screenshot pan
  useEffect(() => {
    // Only run auto-hover logic on mobile/touch devices
    const isMobile =
      window.innerWidth < 768 ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;
    
    if (!isMobile) return;

    let intervalId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Cycle hover state on mobile for visibility
          setIsAutoHover(true);
          intervalId = setInterval(() => {
            setIsAutoHover((prev) => !prev);
          }, 4000); // Shorter cycle for mobile
        } else {
          setIsAutoHover(false);
          if (intervalId) clearInterval(intervalId);
        }
      },
      { threshold: 0.6 }
    );

    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [cluster.id]);

  // Extract data
  const title = isId ? cluster.title_id || cluster.title : cluster.title;
  const role =
    cluster.stats?.find((s) => s.label === "Role")?.value ||
    cluster.projects[0]?.role ||
    "Product Designer";
  const rawTimeline =
    cluster.stats?.find((s) => s.label === "Timeline")?.value || "2020";

  // Parse Timeline: "May 2022 - Nov 2022" -> "2022", "2021 - Present" -> "2021 - Present"
  const years = rawTimeline.match(/\d{4}|Present/g) || [];
  let yearDisplay = years[0] || rawTimeline;
  if (years.length > 1) {
    if (years[0] === years[1]) {
      yearDisplay = years[0]; // Same year
    } else {
      yearDisplay = `${years[0]} - ${years[1]}`; // Range
    }
  }

  return (
    <motion.div
      ref={containerRef}
      id={`work-bento-${cluster.id}`}
      onClick={() => navigate(`/work/${cluster.id}`)}
      onMouseEnter={() => setIsManualHover(true)}
      onMouseLeave={() => setIsManualHover(false)}
      className="group relative flex flex-col h-[480px] border border-black/5 dark:border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-gray-50 dark:bg-neutral-900"
    >
      {/* Brand Color Overlay (Animated) */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        initial={false}
        animate={{ 
          backgroundColor: cluster.brandColor || "transparent",
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Hover Action (Floating - Top Right) */}
      <div className={`absolute top-6 right-6 z-20 transition-all duration-300 transform ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
        <div className="bg-white text-black px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
          View <ArrowUpRight size={12} />
        </div>
      </div>

      {/* 1. HEADER (Top) - Maximum Logo Impact + Dynamic Text Color */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 sm:p-8 pb-2 z-10 w-full gap-4 relative">
        {/* Left Side: Logo Only (Full Color, Clear, HUGE) */}
        <div className="shrink-0">
          <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
            {cluster.logo ? (
              <img
                src={cluster.logo}
                alt={cluster.company || cluster.title}
                className={`w-full h-full object-contain drop-shadow-sm transition-transform duration-500 ${isHovered ? "scale-110" : ""}`}
              />
            ) : (
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
                animate={{ 
                  backgroundColor: isHovered ? "var(--bg-surface)" : cluster.brandColor,
                  color: isHovered ? cluster.brandColor : "var(--bg-surface)"
                }}
              />
            )}
          </div>
        </div>

        {/* Right Side: Role + Period (Right Aligned on desktop, Left on mobile) */}
        <div className="flex flex-col items-start sm:items-end text-left sm:text-right transition-colors duration-300 sm:max-w-[140px]">
          {/* Featured Tag */}
          {cluster.featured && (
            <motion.span
              className="font-mono text-[9px] uppercase tracking-[0.2em] mb-1.5 px-1.5 py-0.5 rounded border"
              animate={{
                color: isHovered ? "rgba(255, 255, 255, 0.9)" : "var(--accent-blue)",
                borderColor: isHovered ? "rgba(255, 255, 255, 0.3)" : "rgba(var(--accent-blue-rgb), 0.3)",
              }}
            >
              Featured
            </motion.span>
          )}
          {/* Role (Top) */}
          <motion.p
            className="text-sm font-bold leading-tight line-clamp-2"
            animate={{ color: isHovered ? "var(--bg-surface)" : "var(--text-primary)" }}
          >
            {role}
          </motion.p>
          {/* Period (Bottom) */}
          <motion.p
            className="text-xs font-medium mt-1"
            animate={{ color: isHovered ? "rgba(255, 255, 255, 0.8)" : "var(--text-secondary)" }}
          >
            {yearDisplay}
          </motion.p>
        </div>
      </div>

      {/* 2. VISUAL (Bottom / Fill) */}
      <div className="relative flex-grow w-full overflow-hidden flex items-end justify-center px-8 pb-0 mt-4 z-10">
        {/* Gradient Background to blend bottom if needed */}
        <motion.div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none z-10"
          animate={{
            background: isHovered
              ? `linear-gradient(to top, ${cluster.brandColor}, transparent)`
              : `linear-gradient(to top, var(--bg-void), transparent)`,
            opacity: isHovered ? 1 : 0.5
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Device / Visual Frame */}
        <div
          className={`relative transform transition-transform duration-700 ${cluster.heroImage && cluster.heroImage.startsWith("/") && !imgError ? "w-[200px] mx-auto" : `w-full max-w-[90%] origin-bottom ${isHovered ? "scale-105" : ""}`}`}
        >
          {cluster.heroImage &&
            cluster.heroImage.startsWith("/") &&
            !imgError ? (
            <div className="relative rounded-t-[28px] overflow-hidden shadow-[0_12px_50px_-12px_rgba(var(--bg-void-rgb), 0.5)] border-t-[6px] border-x-[6px] border-white/20 dark:border-white/10 bg-white dark:bg-neutral-800 aspect-[9/14] flex flex-col">
              {/* Device Header/Notch Area - Protects mockup headers from card rounding */}
              <div className="h-7 w-full flex items-center justify-center shrink-0 bg-white dark:bg-neutral-800 relative z-20">
                <div className="w-16 h-4 bg-black dark:bg-neutral-900 rounded-b-xl flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white/10 rounded-full blur-[0.5px]"></div>
                </div>
              </div>

              {/* Inner Screen Container */}
              <div className="relative flex-grow overflow-hidden rounded-t-lg">
                {/* Loading skeleton */}
                {!imgLoaded && (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-neutral-700 animate-pulse" />
                )}
                <motion.img
                  src={cluster.heroImage}
                  alt={title}
                  fetchpriority={priority ? "high" : "auto"}
                  loading={priority ? "eager" : "lazy"}
                  className="w-full h-auto object-top"
                  style={{ transformOrigin: "top" }}
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImgError(true)}
                  initial={{ opacity: 0, y: "0%" }}
                  animate={{ 
                    opacity: imgLoaded ? 1 : 0, 
                    y: isHovered ? "calc(-100% + 280px)" : "0%" 
                  }}
                  transition={{
                    y: {
                       duration: isHovered ? 4 : 0.8,
                       ease: isHovered ? "linear" : "easeOut"
                    },
                    opacity: { duration: 0.3 }
                  }}
                />
                {/* Gloss/Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none mix-blend-overlay"></div>
              </div>

              {/* Inner Shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_2px_10px_rgba(var(--bg-void-rgb), 0.1)] pointer-events-none"></div>
            </div>
          ) : (
            <div className="w-full aspect-[4/3] bg-white dark:bg-black/20 rounded-t-2xl border-t border-x border-black/5 flex items-center justify-center relative shadow-xl">
              <ProjectCard
                id={cluster.id}
                expanded={true}
                showChrome={false}
                backgroundOnly={false}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkBento;
