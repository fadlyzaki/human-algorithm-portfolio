import { useScroll, useVelocity, useSpring, useTransform } from "framer-motion";

export const useScrollPacing = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  // Smooth the velocity to prevent jagged jumps
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  // Map velocity to a pacing factor
  // 0 velocity (idle/reading) -> 0.2 pacing (slow, calm)
  // High velocity (scanning) -> 2.0 pacing (fast, energetic)
  const pace = useTransform(smoothVelocity, [-2000, 0, 2000], [2.0, 0.2, 2.0], {
    clamp: true
  });

  return pace;
};
