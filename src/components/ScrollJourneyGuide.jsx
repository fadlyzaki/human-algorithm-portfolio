import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRecruiterMode } from "../context/RecruiterModeContext";
import { useTheme } from "../context/ThemeContext";

const SCENES = {
  IDLE: "idle",
  WALK: "walk",
};

const ScrollJourneyGuide = () => {
  const { isRecruiterMode } = useRecruiterMode();
  const { isDark } = useTheme();
  const { scrollYProgress } = useScroll();
  
  const [currentScene, setCurrentScene] = useState(SCENES.IDLE);
  const [facingRight, setFacingRight] = useState(true);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const now = Date.now();
    const previous = scrollYProgress.getPrevious();
    
    // Determine direction
    if (latest > previous) {
      setFacingRight(true);   // Scrolling down
    } else if (latest < previous) {
      setFacingRight(false);  // Scrolling up
    }

    // Set animation to walk if scrolling, otherwise idle
    if (latest !== previous) {
      setCurrentScene(SCENES.WALK);
      setLastScrollTime(now);
    }
  });

  // Check if we stopped scrolling recently
  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastScrollTime > 150) { 
        setCurrentScene(SCENES.IDLE);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [lastScrollTime]);

  if (isRecruiterMode) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full h-[80px] sm:h-[128px] pointer-events-none z-40 overflow-hidden">
      <motion.div
        className="absolute bottom-0 h-20 w-20 sm:h-32 sm:w-32"
        style={{
          // Map scroll progress (0-1) to translateX string (0% to calc(100vw - 128px))
          x: scrollYProgress,
          left: 0,
        }}
        transformTemplate={(_, generated) => {
          // Framer motion gives x as a float 0 to 1 based on the useScroll binding.
          // We need to convert it manually for a clean layout mapping
          const pct = Math.max(0, Math.min(1, scrollYProgress.get()));
          // Use CSS max to bind it to the screen size dynamically, subtracting character width
          return `translateX(calc(${pct} * (100vw - min(128px, 20vw)))) scaleX(${facingRight ? 1 : -1})`;
        }}
      >
        <div 
          className={`w-full h-full bg-[url('/images/sprite-transparent.png')] sprite-anim-${currentScene} drop-shadow-md opacity-30 sm:opacity-50 ${isDark ? "brightness-90" : ""}`}
          style={{
            backgroundSize: "800% 800%", /* 8 columns, 8 rows */
            imageRendering: "pixelated"
          }}
        />
      </motion.div>
    </div>
  );
};

export default ScrollJourneyGuide;
