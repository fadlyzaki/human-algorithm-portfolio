import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, useSpring, useTransform } from "framer-motion";
import { useRecruiterMode } from "../context/RecruiterModeContext";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const SCENES = {
  IDLE: "idle",
  WALK: "walk",
  THINK: "think",
};

const ScrollJourneyGuide = () => {
  const { isRecruiterMode } = useRecruiterMode();
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  
  // Smooth spring motion for the sprite position
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  });

  // Map progress to X position
  const xPos = useTransform(
    smoothProgress, 
    [0, 1], 
    ["0%", "calc(100vw - 96px)"] // 96px is sm:w-24
  );
  
  const [currentScene, setCurrentScene] = useState(SCENES.IDLE);
  const [facingRight, setFacingRight] = useState(true);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [currentSection, setCurrentSection] = useState("hero");
  const [showMessage, setShowMessage] = useState(false);
  const [tipMessage, setTipMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const getSection = (progress) => {
    if (progress < 0.15) return "hero";
    if (progress < 0.45) return "work";
    if (progress < 0.75) return "about";
    if (progress < 0.9) return "thoughts";
    return "contact";
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const now = Date.now();
    const previous = scrollYProgress.getPrevious();
    
    if (latest > previous) {
      setFacingRight(true);
    } else if (latest < previous) {
      setFacingRight(false);
    }

    const section = getSection(latest);
    if (section !== currentSection) {
      setCurrentSection(section);
    }

    if (Math.abs(latest - previous) > 0.0001) {
      setCurrentScene(SCENES.WALK);
      setLastScrollTime(now);
      if (showMessage) setShowMessage(false);
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastScrollTime > 150) { 
        setCurrentScene(SCENES.IDLE);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [lastScrollTime]);

  const tipTimerRef = useRef(null);

  const handleSpriteClick = () => {
    const tips = t("scroll_guide.tips", { returnObjects: true });
    if (!tips || !Array.isArray(tips)) return;
    
    if (tipTimerRef.current) clearTimeout(tipTimerRef.current);

    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTipMessage(randomTip);
    setShowMessage(true);
    setCurrentScene(SCENES.THINK);

    tipTimerRef.current = setTimeout(() => {
      setShowMessage(false);
      setCurrentScene(SCENES.IDLE);
    }, 5000);
  };

  if (isRecruiterMode) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full h-24 sm:h-32 pointer-events-none z-40">
      {/* Visual Track - mirroring the scroll bar metaphor */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--border-color)] opacity-20" />
      
      <motion.div
        className="absolute bottom-0 w-20 h-28 sm:w-24 sm:h-32 pointer-events-auto cursor-pointer group flex flex-col items-center justify-end"
        onClick={handleSpriteClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ x: xPos }}
      >
        {/* Container that flips for direction */}
        <motion.div 
          className="relative w-full h-full flex flex-col items-center justify-end"
          animate={{ scaleX: facingRight ? 1 : -1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Label: We flip it back to keep text readable */}
          <motion.div 
            key={currentSection}
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ 
              opacity: isHovered || showMessage ? 1 : 0.6, 
              y: isHovered || showMessage ? -110 : -90,
              scale: 1,
              scaleX: facingRight ? 1 : -1 // Counter-flip the parent's scaleX
            }}
            className="absolute left-1/2 -translate-x-1/2 bg-[var(--bg-card)] border border-[var(--border-color)] px-3 py-1.5 rounded-xl shadow-xl backdrop-blur-md z-10 flex flex-col items-center min-w-[60px]"
          >
            <p className="text-[10px] font-mono whitespace-nowrap text-[var(--text-primary)] uppercase tracking-tighter">
              {showMessage ? tipMessage : t(`scroll_guide.sections.${currentSection}`)}
            </p>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[var(--bg-card)] border-r border-b border-[var(--border-color)] rotate-45" />
          </motion.div>

          {/* Sprite Character */}
          <motion.div 
            className={`w-full h-full drop-shadow-lg opacity-40 sm:opacity-60 ${isDark ? "brightness-95" : ""} overflow-hidden transition-opacity duration-300 ${isHovered ? "opacity-100" : ""}`}
            animate={{
              scaleY: currentScene === SCENES.WALK ? [1, 0.92, 1] : 1,
              scaleX: currentScene === SCENES.WALK ? [1, 1.08, 1] : 1,
            }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              ease: "easeInOut"
            }}
          >
            <img 
              key={currentScene}
              src={`/images/sprite-${currentScene}.png`} 
              alt="Scroll Journey" 
              className={`sprite-img sprite-anim-${currentScene}`} 
              style={{ imageRendering: 'pixelated' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollJourneyGuide;
