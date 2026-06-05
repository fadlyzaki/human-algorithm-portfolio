import { useEffect, useRef } from "react";

const PACING_CONFIG = {
  IDLE_PACE: 0.2,
  MAX_PACE: 2,
  MAX_VELOCITY: 2000,
};

export const calculatePaceFromVelocity = (velocity) => {
  const normalizedVelocity = Math.min(
    Math.abs(Number(velocity) || 0),
    PACING_CONFIG.MAX_VELOCITY,
  );
  const progress = normalizedVelocity / PACING_CONFIG.MAX_VELOCITY;

  return PACING_CONFIG.IDLE_PACE +
    (PACING_CONFIG.MAX_PACE - PACING_CONFIG.IDLE_PACE) * progress;
};

export const useScrollPacing = () => {
  const paceRef = useRef(PACING_CONFIG.IDLE_PACE);
  const lastYRef = useRef(
    typeof window !== "undefined" ? window.scrollY : 0,
  );
  const lastTimeRef = useRef(0);

  useEffect(() => {
    let frameId;
    lastTimeRef.current = performance.now();

    const updatePace = () => {
      const now = performance.now();
      const currentY = window.scrollY;
      const deltaMs = Math.max(now - lastTimeRef.current, 16);
      const velocity = ((currentY - lastYRef.current) / deltaMs) * 1000;

      paceRef.current = calculatePaceFromVelocity(velocity);
      lastYRef.current = currentY;
      lastTimeRef.current = now;
      frameId = window.requestAnimationFrame(updatePace);
    };

    frameId = window.requestAnimationFrame(updatePace);
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return {
    get: () => paceRef.current,
  };
};
