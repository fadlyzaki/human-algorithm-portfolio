import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * ScrollReveal — Hardware-accelerated entry animation using framer-motion.
 * Provides a premium, spring-based scroll reveal effect.
 */
const ScrollReveal = ({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
    margin: "0px 0px -50px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
        mass: 1,
        delay: delay ? delay / 1000 : 0, // Convert ms to seconds
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
