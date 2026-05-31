import React, { useRef, useEffect, useState } from "react";

/**
 * ScrollReveal  -  Hardware-accelerated entry animation using native IntersectionObserver.
 * Visually identical to the previous Framer Motion implementation:
 *   - opacity: 0 → 1
 *   - transform: translateY(30px) → translateY(0)
 *   - spring-like easing via cubic-bezier, fires once on scroll
 *
 * Replaces framer-motion `motion.div` + `useInView` to eliminate Framer's JS animation
 * scheduler as a source of INP (Interaction to Next Paint) failures.
 */
const ScrollReveal = ({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
}) => {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If IntersectionObserver not available (SSR edge case), reveal immediately
    if (!("IntersectionObserver" in window)) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -50px 0px",
        threshold,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0px)" : "translateY(30px)",
        // Mimics framer spring: stiffness 80, damping 20, mass 1 (overdamped, no bounce)
        // cubic-bezier approximation + duration match the visual feel
        transition: revealed
          ? `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`
          : "none",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
