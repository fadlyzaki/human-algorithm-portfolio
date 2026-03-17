import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import { useRecruiterMode } from "../context/RecruiterModeContext";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { MessageSquare } from "lucide-react";

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
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [currentScene, setCurrentScene] = useState(SCENES.IDLE);
  const [facingRight, setFacingRight] = useState(true);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [currentSection, setCurrentSection] = useState("hero");
  const [showMessage, setShowMessage] = useState(false);
  const [tipMessage, setTipMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  // Section thresholds based on typical portfolio layout
  // 0-0.2: Hero, 0.2-0.5: Work, 0.5-0.7: About, 0.7-0.9: Thoughts, 0.9+: Contact
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
    
    // Determine direction
    if (latest > previous) {
      setFacingRight(true);   // Scrolling down
    } else if (latest < previous) {
      setFacingRight(false);  // Scrolling up
    }

    // Update section detection
    const section = getSection(latest);
    if (section !== currentSection) {
      setCurrentSection(section);
    }

    // Set animation to walk if scrolling, otherwise idle
    if (Math.abs(latest - previous) > 0.0001) {
      setCurrentScene(SCENES.WALK);
      setLastScrollTime(now);
      // Hide message while moving aggressively
      if (showMessage) setShowMessage(false);
    }
  });

  // Check if we stopped scrolling recently
  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastScrollTime > 200) { 
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

    // Auto-hide the tip
    tipTimerRef.current = setTimeout(() => {
      setShowMessage(false);
      setCurrentScene(SCENES.IDLE);
    }, 5000);
  };

  if (isRecruiterMode) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full h-[120px] sm:h-[160px] pointer-events-none z-40">
      <motion.div
        className="absolute bottom-0 w-20 h-28 sm:w-24 sm:h-32 pointer-events-auto cursor-pointer group flex flex-col items-center justify-end"
        onClick={handleSpriteClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          x: smoothProgress,
          left: 0,
        }}
        transformTemplate={(_, generated) => {
          const pct = Math.max(0, Math.min(1, scrollYProgress.get()));
          return `translateX(calc(${pct} * (100vw - min(128px, 20vw)))) scaleX(${facingRight ? 1 : -1})`;
        }}
      >
        {/* Section Label / Tooltip - Positioned absolutely above the sprite */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isHovered || showMessage ? 1 : 0.6, 
            y: isHovered || showMessage ? -110 : -90
          }}
          className="absolute left-1/2 -translate-x-1/2 bg-[var(--bg-card)] border border-[var(--border-color)] px-2 py-1 rounded-md shadow-lg backdrop-blur-md z-10"
          style={{ transform: `scaleX(${facingRight ? 1 : -1})` }} // Keep text readable
        >
          <p className="text-[10px] font-mono whitespace-nowrap text-[var(--text-primary)] uppercase tracking-tighter">
            {showMessage ? tipMessage : t(`scroll_guide.sections.${currentSection}`)}
          </p>
        </motion.div>

        {/* Character Container with Squash & Stretch */}
        <motion.div 
          className={`w-full h-full drop-shadow-md opacity-40 sm:opacity-60 ${isDark ? "brightness-90" : ""} overflow-hidden transition-opacity duration-300 ${isHovered ? "opacity-100" : ""}`}
          animate={{
            scaleY: currentScene === SCENES.WALK ? [1, 0.95, 1] : 1,
            scaleX: currentScene === SCENES.WALK ? [1, 1.05, 1] : 1,
          }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            ease: "easeInOut"
          }}
        >
          <img 
            key={currentScene}
            src={`/images/sprite-${currentScene}.png`} 
            alt="Scroll Journey Sprite" 
            className={`sprite-img sprite-anim-${currentScene}`} 
            style={{ imageRendering: 'pixelated' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollJourneyGuide;
