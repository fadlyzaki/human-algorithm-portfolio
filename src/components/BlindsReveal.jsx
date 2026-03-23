import React from "react";
import { motion } from "framer-motion";

/**
 * BlindsReveal  -  Horizontal slat overlay that opens on hover.
 * Mimics the Framer University "blinds-reveal" interaction.
 *
 * Props:
 * - isOpen: boolean  -  whether the blinds are open (revealing children)
 * - slats: number  -  how many horizontal slats (default 8)
 * - color: string  -  slat color (default themed dark)
 * - staggerDelay: number  -  delay between each slat in seconds (default 0.03)
 * - children: ReactNode  -  the content revealed beneath the blinds
 */
const BlindsReveal = ({
  isOpen = false,
  slats = 8,
  color,
  staggerDelay = 0.03,
  children,
}) => {
  const slatColor = color || "var(--bg-void)";

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ perspective: "800px" }}>
      {/* Content Layer */}
      {children}

      {/* Blinds Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col">
        {Array.from({ length: slats }).map((_, i) => (
          <motion.div
            key={i}
            className="w-full flex-1 origin-top"
            style={{
              backgroundColor: slatColor,
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
            initial={false}
            animate={{
              rotateX: isOpen ? -90 : 0,
              opacity: isOpen ? 0 : 1,
            }}
            transition={{
              duration: 0.5,
              delay: isOpen
                ? i * staggerDelay           // Open: top-to-bottom stagger
                : (slats - 1 - i) * staggerDelay, // Close: bottom-to-top stagger
              ease: [0.4, 0, 0.2, 1],        // Material Design ease
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BlindsReveal;
