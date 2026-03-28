import { useEffect, useRef } from "react";
import { useScroll, useVelocity, useSpring } from "framer-motion";

/**
 * useVariableTypography — Breath-Synced Font Weight
 *
 * Modulates a CSS custom property (--font-weight-dynamic) on <body>
 * using two behavioral modes:
 *
 *   1. IDLE (reading): A slow sine-wave oscillation between weights
 *      350–420, simulating the rhythm of breathing. This makes the
 *      typography feel alive during long reading sessions.
 *
 *   2. SCANNING (fast scroll): Snaps to a solid 450 weight for
 *      immediate legibility while the eye is moving quickly.
 *
 * All writes go directly to `document.body.style`, bypassing React
 * state entirely to avoid re-render penalties on every animation frame.
 */

const TYPO_CONFIG = {
  SPRING_DAMPING: 50,
  SPRING_STIFFNESS: 300,
  VELOCITY_THRESHOLD: 300,
  IDLE_WEIGHT_MIN: 370,
  IDLE_WEIGHT_MAX: 410,
  SCAN_WEIGHT: 440,
  BREATH_PERIOD_MS: 4000,
};

export const useVariableTypography = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: TYPO_CONFIG.SPRING_DAMPING,
    stiffness: TYPO_CONFIG.SPRING_STIFFNESS,
  });

  const rafId = useRef(null);

  useEffect(() => {
    const tick = () => {
      const velocity = Math.abs(
        typeof smoothVelocity.get === "function" ? smoothVelocity.get() : 0
      );

      let weight;

      if (velocity > TYPO_CONFIG.VELOCITY_THRESHOLD) {
        // Scanning mode: lock to a firm, legible weight
        weight = TYPO_CONFIG.SCAN_WEIGHT;
      } else {
        // Idle/reading mode: gentle sine-wave "breathing"
        const t = Date.now() / TYPO_CONFIG.BREATH_PERIOD_MS;
        const sine = (Math.sin(t * Math.PI * 2) + 1) / 2; // 0 → 1
        weight =
          TYPO_CONFIG.IDLE_WEIGHT_MIN +
          sine * (TYPO_CONFIG.IDLE_WEIGHT_MAX - TYPO_CONFIG.IDLE_WEIGHT_MIN);
      }

      document.body.style.setProperty(
        "--font-weight-dynamic",
        Math.round(weight).toString()
      );

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      // Reset to default on unmount
      document.body.style.removeProperty("--font-weight-dynamic");
    };
  }, [smoothVelocity]);
};
