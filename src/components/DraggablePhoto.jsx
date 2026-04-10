import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "lucide-react";
import PixelImage from "./PixelImage";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

import {
  IndustrialCard,
  CyberpunkCard,
  SwissCard,
  GlassmorphismCard,
  RetroCard,
  NeoBrutalismCard,
  HolographicCard,
} from "./id-cards";

// Hoisted animation configs to avoid re-creating objects on every render
const DRAG_CONSTRAINTS = { left: -100, right: 100, top: -100, bottom: 100 };
const DRAG_TRANSITION = { bounceStiffness: 600, bounceDamping: 20 };
const HOVER_ANIMATION = { scale: 1.02, rotate: 0, cursor: "grab" };
const TAP_ANIMATION = { scale: 0.98, cursor: "grabbing" };
const DRAG_ANIMATION = { scale: 1.05, rotate: 0, zIndex: 10 };
const CARD_INITIAL = { opacity: 0, rotateY: 90 };
const CARD_ANIMATE = { opacity: 1, rotateY: 0 };
const CARD_EXIT = { opacity: 0, rotateY: -90 };
const CARD_TRANSITION = { duration: 0.4, ease: "circOut" };

const DraggablePhoto = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const [index, setIndex] = useState(0);
  const [designVariant] = useState(() => {
    const variants = [
      "industrial",
      "cyberpunk",
      "swiss",
      "glassmorphism",
      "retro",
      "neo-brutalism",
      "holographic",
    ];
    return variants[Math.floor(Math.random() * variants.length)];
  });

  const items = [
    { type: "identity", src: "/hero-id-v2.jpg" },
    {
      type: "image",
      src: "/hero-running.jpg",
      alt: "Motion as Medicine: Physical & Mental Recalibration",
    },
    {
      type: "image",
      src: "/hero-lumina-new.jpg",
      alt: "Lumina: Symptoms showing, but not knowing",
    },
    {
      type: "image",
      src: "/hero-stoqo.jpg",
      alt: "Farewell STOQO: Good memories interrupted by COVID",
    },
  ];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const currentItem = items[index];

  // --- VARIANTS RENDERERS ---
  // Extracted to src/components/id-cards/

  const renderCard = () => {
    const VariantMap = {
      cyberpunk: CyberpunkCard,
      swiss: SwissCard,
      glassmorphism: GlassmorphismCard,
      retro: RetroCard,
      "neo-brutalism": NeoBrutalismCard,
      holographic: HolographicCard,
      industrial: IndustrialCard,
    };

    // Fallback to industrial if variant not found
    const SelectedVariant = VariantMap[designVariant] || VariantMap.industrial;
    return <SelectedVariant t={t} isDark={isDark} currentItem={currentItem} />;
  };

  return (
    <div className="relative inline-block w-full mb-10">
      {" "}
      {/* Wrapper with extra bottom space */}
      <motion.div
        drag
        dragConstraints={DRAG_CONSTRAINTS}
        dragElastic={0.15}
        dragTransition={DRAG_TRANSITION}
        whileHover={HOVER_ANIMATION}
        whileTap={TAP_ANIMATION}
        initial={{ rotate: 2 }}
        animate={{ rotate: 0 }}
        whileDrag={DRAG_ANIMATION}
        onClick={handleNext}
        className="md:block relative cursor-grab active:cursor-grabbing w-full aspect-[3/4.2] select-none group"
      >
        {/* Lanyard Clip Construction */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-4 h-20 z-0 pointer-events-none">
          {/* Strap Loop */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-[300px] border-[12px] border-[var(--bg-card)] dark:border-zinc-400 rounded-[50%] -z-10 shadow-xl"></div>

          {/* Metal Clip Body */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-10 bg-gradient-to-b from-zinc-300 to-zinc-500 rounded-md shadow-md flex flex-col items-center justify-end pb-1 border border-zinc-600 z-10">
            {/* Clip Spring */}
            <div className="w-4 h-3 bg-zinc-700 rounded-sm mb-1 opacity-80"></div>
          </div>

          {/* Connection to Card */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-4 bg-zinc-800/80 rounded-full z-20"></div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={designVariant + index}
            initial={CARD_INITIAL}
            animate={CARD_ANIMATE}
            exit={CARD_EXIT}
            transition={CARD_TRANSITION}
            className="w-full h-full"
          >
            {currentItem.type === "identity" ? (
              renderCard()
            ) : (
              /* Generic Card Back / Alt Image */
              <div className="w-full h-full border border-[var(--border-color)] overflow-hidden relative select-none rounded-xl bg-black group-inner shadow-2xl">
                <img loading="lazy" decoding="async"
                  src={currentItem.src}
                  alt={currentItem.alt}
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="bg-black/60 backdrop-blur-md px-2 py-1 text-[9px] font-mono text-white uppercase border border-white/10 pt-1.5">
                    REF_IMG_{index}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 backdrop-blur-md px-3 py-2 text-xs font-mono text-white leading-tight border border-white/10">
                    {currentItem.alt}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DraggablePhoto;
