import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChaosBackground from "./ChaosBackground";

const TOTAL_NODES = 120;
const COLS = 10;
const ROWS = 10;
const GRID_SIZE = 45; // Spacing between nodes



// --- MAIN COMPONENT ---
const ChaosToMatrixIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState("chaos"); // 'chaos' -> 'initializing' -> 'matrix' -> 'portal'

  // Capture window dimensions once on mount
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const initTimer = setTimeout(() => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      setIsMounted(true);
    }, 0);
    return () => clearTimeout(initTimer);
  }, []);

  // Generate physics data for each node
  const nodes = useMemo(() => {
    // Pure deterministic pseudo-random function
    const pseudoRandom = (seed) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    const { width, height } = dimensions;
    const gridWidth = (COLS - 1) * GRID_SIZE;
    const gridHeight = (ROWS - 1) * GRID_SIZE;
    const startX = width / 2 - gridWidth / 2;
    const startY = height / 2 - gridHeight / 2;

    return Array.from({ length: TOTAL_NODES }).map((_, i) => {
      const col = i % COLS;
      const row = Math.floor(i / COLS);

      // Matrix Target Position (Centered grid)
      const matrixX = startX + col * GRID_SIZE;
      const matrixY = startY + row * GRID_SIZE;

      // Chaos Initial Position — deterministic pseudo-random
      const rx = pseudoRandom(i + 1);
      const ry = pseudoRandom(i + 2);
      const rr = pseudoRandom(i + 3);
      const rfD = pseudoRandom(i + 4);
      const rfX = pseudoRandom(i + 5);
      const rfY = pseudoRandom(i + 6);
      const rs = pseudoRandom(i + 7);
      const ro = pseudoRandom(i + 8);
      const rsC = pseudoRandom(i + 9);

      const chaosX = rx * width;
      const chaosY = ry * height;
      const chaosRotate = rr * 360;

      // Floating Animation Offsets — large range for dramatic wandering
      const floatDuration = 2.5 + rfD * 4;
      const floatOffsetX = (rfX - 0.5) * 250;
      const floatOffsetY = (rfY - 0.5) * 250;

      // Visual variety
      const size = rs * 3 + 1; // 1px to 4px
      const nodeOpacity = ro * 0.5 + 0.5; // 0.5 to 1.0
      const initialScale = 0.5 + rsC * 1.5;

      return {
        id: i,
        col,
        row,
        chaosX,
        chaosY,
        chaosRotate,
        matrixX,
        matrixY,
        floatDuration,
        floatOffsetX,
        floatOffsetY,
        size,
        nodeOpacity,
        initialScale,
      };
    });
  }, [dimensions]);

  // Generate connecting line paths for the Matrix phase
  const gridLines = useMemo(() => {
    if (!isMounted) return [];
    const lines = [];
    const { width, height } = dimensions;
    const gridWidth = (COLS - 1) * GRID_SIZE;
    const gridHeight = (ROWS - 1) * GRID_SIZE;
    const startX = width / 2 - gridWidth / 2;
    const startY = height / 2 - gridHeight / 2;

    // Horizontal Lines
    for (let row = 0; row < ROWS; row++) {
      const y = startY + row * GRID_SIZE;
      lines.push(`M ${startX} ${y} L ${startX + gridWidth} ${y}`);
    }
    // Vertical Lines
    for (let col = 0; col < COLS; col++) {
      const x = startX + col * GRID_SIZE;
      lines.push(`M ${x} ${startY} L ${x} ${startY + gridHeight}`);
    }
    return lines;
  }, [dimensions, isMounted]);

  // --- STAGE CHOREOGRAPHY ---
  useEffect(() => {
    if (!isMounted) return;

    // 1. Let chaos float briefly, then type the initialize text
    const initTimer = setTimeout(() => {
      setPhase("initializing");
    }, 1200);

    // 2. Snap to Matrix
    const matrixTimer = setTimeout(() => {
      setPhase("matrix");
    }, 3000);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(matrixTimer);
    };
  }, [isMounted]);

  // --- INTERACTION HANDLING ---
  const handleInteraction = useCallback(() => {
    // Allow skipping from any phase
    setPhase("portal");

    // Zoom out and reveal homepage
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 1200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    const handleKeyDown = () => handleInteraction();
    const handleClick = () => handleInteraction();

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleClick);
    };
  }, [handleInteraction]);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="chaos-container"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "portal" ? 0 : 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] bg-[var(--bg-void)] overflow-hidden flex items-center justify-center pointer-events-auto"
      >
        {/* --- ATMOSPHERIC CHAOS BACKGROUND --- */}
        <ChaosBackground phase={phase} />

        {/* --- DYNAMIC PHYSICS SCENE --- */}
        <motion.div
          className="absolute inset-0 w-full h-full transform-gpu"
          animate={
            phase === "portal"
              ? { scale: 5, opacity: 0, filter: "blur(10px)" }
              : { scale: 1, opacity: 1, filter: "blur(0px)" }
          }
          transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1.0] }}
        >
          {/* SVG Connecting Lines (Only visible in Matrix phase) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <g stroke="rgba(var(--bg-surface-rgb), 0.15)" strokeWidth="1" fill="none">
              {gridLines.map((path, i) => (
                <motion.path
                  key={`line-${i}`}
                  d={path}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength:
                      phase === "matrix" || phase === "portal" ? 1 : 0,
                    opacity: phase === "matrix" || phase === "portal" ? 1 : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: phase === "matrix" ? i * 0.02 : 0,
                  }}
                />
              ))}
            </g>
          </svg>

          {/* Floating/Snapping Nodes */}
          {nodes.map((node) => {
            const isMatrix = phase === "matrix" || phase === "portal";

            // Only render grid nodes (first 100) in matrix, all float in chaos
            if (isMatrix && node.id >= COLS * ROWS) return null;

            // In chaos: keyframe array to make them wander dramatically
            const currentX = isMatrix
              ? node.matrixX
              : [
                node.chaosX,
                node.chaosX + node.floatOffsetX,
                node.chaosX - node.floatOffsetX * 0.7,
                node.chaosX,
              ];
            const currentY = isMatrix
              ? node.matrixY
              : [
                node.chaosY,
                node.chaosY + node.floatOffsetY,
                node.chaosY - node.floatOffsetY * 0.5,
                node.chaosY,
              ];
            const currentRotate = isMatrix
              ? 0
              : [
                node.chaosRotate,
                node.chaosRotate + 180,
                node.chaosRotate + 90,
                node.chaosRotate,
              ];

            const nodeSize = isMatrix ? 6 : node.size * 2.5; // px

            return (
              <motion.div
                key={`node-${node.id}`}
                className={`absolute z-20 rounded-sm`}
                style={{
                  width: nodeSize,
                  height: nodeSize,
                  marginLeft: -nodeSize / 2,
                  marginTop: -nodeSize / 2,
                  backgroundColor: isMatrix
                    ? "var(--bg-void)"
                    : `rgba(var(--accent-green-rgb), ${node.nodeOpacity})`,
                  boxShadow: isMatrix
                    ? "0 0 10px rgba(var(--bg-surface-rgb), 0.5)"
                    : `0 0 ${6 + node.size * 3}px rgba(var(--accent-green-rgb), ${node.nodeOpacity * 0.6}), 0 0 ${2 + node.size}px rgba(var(--accent-green-rgb), ${node.nodeOpacity * 0.3})`,
                }}
                initial={{
                  x: node.chaosX,
                  y: node.chaosY,
                  rotate: node.chaosRotate,
                  opacity: 0,
                  scale: isMatrix ? 1 : node.initialScale,
                }}
                animate={{
                  x: currentX,
                  y: currentY,
                  rotate: currentRotate,
                  opacity: 1,
                  scale: isMatrix ? 1 : [1, 1.3, 0.8, 1],
                }}
                transition={
                  isMatrix
                    ? {
                      type: "spring",
                      stiffness: 60,
                      damping: 12,
                      mass: 0.5,
                      delay: (node.id % 4) * 0.1,
                    }
                    : {
                      duration: node.floatDuration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      opacity: { duration: 0.8, delay: node.id * 0.02 },
                      scale: {
                        duration: node.floatDuration * 1.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
                }
              />
            );
          })}
        </motion.div>

        {/* --- TYPOGRAPHY & INTERACTION LAYER --- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
          <AnimatePresence>
            {(phase === "initializing" || phase === "chaos") && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                transition={{ duration: 0.5 }}
                className="bg-black/50 backdrop-blur-sm border border-emerald-500/30 px-6 py-3 rounded-sm"
              >
                <div
                  key={phase}
                  className="font-mono text-emerald-400 text-sm overflow-hidden whitespace-nowrap border-r-2 border-emerald-400 pr-1 typewriter-text"
                >
                  {phase === "initializing"
                    ? "> Initializing Human Algorithm..."
                    : "> Awaiting inputs..."}
                </div>
                <div className="mt-4 text-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInteraction();
                    }}
                    className="font-mono text-[10px] tracking-widest text-emerald-400/80 uppercase hover:text-emerald-300 transition-colors bg-emerald-900/40 px-3 py-1.5 rounded border border-emerald-500/50 hover:bg-emerald-800/60 active:bg-emerald-700/80"
                  >
                    [ Skip to Content ]
                  </button>
                  <p className="font-mono text-[8px] tracking-wider text-emerald-400/40 uppercase mt-2 animate-pulse">
                    Or press any key to bypass
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {phase === "matrix" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-24 flex flex-col items-center gap-2"
              >
                <span className="font-mono text-xs tracking-widest text-white/50 animate-pulse uppercase">
                  [ System Structured. Click to Access. ]
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CSS for the blink cursor effect */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .typewriter-text {
            animation: typing 2s steps(40, end), blink-caret .75s step-end infinite;
          }
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: var(--accent-green); }
          }
        `,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ChaosToMatrixIntro;
