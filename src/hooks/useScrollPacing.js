import { useScroll, useVelocity, useSpring, useTransform } from "framer-motion";

const PACING_CONFIG = {
  SPRING_DAMPING: 50,
  SPRING_STIFFNESS: 400,
  VELOCITY_RANGE: [-2000, 0, 2000],
  PACING_MULTIPLIERS: [2.0, 0.2, 2.0]
};

export const useScrollPacing = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  // Smooth the velocity to prevent jagged jumps
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: PACING_CONFIG.SPRING_DAMPING,
    stiffness: PACING_CONFIG.SPRING_STIFFNESS
  });

  // Map velocity to a pacing factor
  // 0 velocity (idle/reading) -> 0.2 pacing (slow, calm)
  // High velocity (scanning) -> 2.0 pacing (fast, energetic)
  const pace = useTransform(smoothVelocity, PACING_CONFIG.VELOCITY_RANGE, PACING_CONFIG.PACING_MULTIPLIERS, {
    clamp: true
  });

  return pace;
};
