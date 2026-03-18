import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Premium Framer Cursor
 * - Globally hides native pointer.
 * - Dual-layer micro-dot and trailing spring ring.
 */
const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Exact coordinates for the inner dot (no delay)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics trailing ring mapped to Framer's "Smoothing: 20"
  const springConfig = { damping: 20, stiffness: 300, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Touch device detection to gracefully disable the custom cursor globally
    const handleTouchStart = () => setIsTouch(true);
    window.addEventListener("touchstart", handleTouchStart, { once: true });

    // Inject CSS to globally suppress the native hardware pointer
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      @media (pointer: fine) {
        * { cursor: none !important; }
      }
    `;
    document.head.appendChild(styleEl);

    const moveCursor = (e) => {
      if (isTouch) return;
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
      document.head.removeChild(styleEl);
    };
  }, [cursorX, cursorY, isTouch, isVisible]);

  if (isTouch) return null;

  return (
    <>
      {/* INNER DOT - 1:1 Instant Tracking */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none mix-blend-difference hidden md:block z-[99999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "white",
          opacity: isVisible && !isHovering ? 1 : 0,
        }}
      />
      
      {/* OUTER RING - Spring Trailing Effect */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none mix-blend-difference hidden md:flex items-center justify-center z-[99998]"
        initial={false}
        animate={{
          width: isHovering ? 64 : 32,
          height: isHovering ? 64 : 32,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          border: isHovering ? "0px solid white" : "1.5px solid rgba(255, 255, 255, 0.4)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
