import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

/**
 * A wrapper component that shows a magnetic custom cursor tooltip when hovering over its children.
 * 
 * @param {React.ReactNode} children - The elements that trigger the tooltip on hover.
 * @param {string} text - The text to display inside the magnetic tooltip.
 * @param {string} className - Optional styling for the wrapper div.
 */
const MagneticTooltip = ({ children, text = "VIEW", className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (isHovered) {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }
    };
    if (isHovered) {
      window.addEventListener("mousemove", handleGlobalMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [isHovered, cursorX, cursorY]);

  const handleMouseEnter = (e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    setIsHovered(true);
  };

  const tooltipPortal = typeof document !== "undefined" ? createPortal(
    <AnimatePresence>
      {isHovered && (
        <motion.div
          style={{ x: smoothX, y: smoothY }}
          className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="bg-[var(--text-primary)] text-[var(--bg-void)] px-3 py-1.5 rounded-full font-mono text-[10px] whitespace-nowrap uppercase tracking-widest shadow-2xl flex items-center gap-2 border border-white/10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-pulse"></div>
            {text}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  ) : null;

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative [&_*]:cursor-none cursor-none ${className}`}
      >
        {children}
      </div>
      {tooltipPortal}
    </>
  );
};

export default MagneticTooltip;
