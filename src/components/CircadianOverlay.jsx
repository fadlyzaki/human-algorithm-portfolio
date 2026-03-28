import React, { useState, useEffect } from "react";

/**
 * CircadianOverlay — Biological Time Sync
 * 
 * A fixed, full-screen overlay that shifts the global color temperature
 * based on the user's local time. The effect is purely subconscious:
 * a low-opacity wash that respects the existing Light/Dark theme.
 * 
 * Phase Map:
 *   06:00 – 11:00  → Morning   (cool blue wash)
 *   11:00 – 16:00  → Midday    (neutral, no interference)
 *   16:00 – 20:00  → Golden Hr (warm amber wash)
 *   20:00 – 06:00  → Night     (deep indigo wash)
 */

const CIRCADIAN_PHASES = {
  MORNING:  { gradient: "radial-gradient(ellipse at 30% 20%, rgba(147, 197, 253, 0.06), transparent 70%)", blend: "soft-light" },
  MIDDAY:   { gradient: "none", blend: "normal" },
  GOLDEN:   { gradient: "radial-gradient(ellipse at 70% 80%, rgba(251, 191, 36, 0.05), transparent 70%)", blend: "soft-light" },
  NIGHT:    { gradient: "radial-gradient(ellipse at 50% 50%, rgba(99, 102, 241, 0.04), transparent 70%)", blend: "color" },
};

const getPhase = (hour) => {
  if (hour >= 6 && hour < 11) return CIRCADIAN_PHASES.MORNING;
  if (hour >= 11 && hour < 16) return CIRCADIAN_PHASES.MIDDAY;
  if (hour >= 16 && hour < 20) return CIRCADIAN_PHASES.GOLDEN;
  return CIRCADIAN_PHASES.NIGHT;
};

const CircadianOverlay = () => {
  const [phase, setPhase] = useState(() => getPhase(new Date().getHours()));

  useEffect(() => {
    // Re-evaluate the phase every 10 minutes to catch transitions
    const intervalId = setInterval(() => {
      setPhase(getPhase(new Date().getHours()));
    }, 10 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  // During midday, render nothing to avoid pointless DOM nodes
  if (phase.gradient === "none") return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        backgroundImage: phase.gradient,
        mixBlendMode: phase.blend,
        transition: "background-image 2s ease, mix-blend-mode 2s ease",
      }}
    />
  );
};

export default CircadianOverlay;
