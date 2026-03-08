import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL_NODES = 120;
const COLS = 10;
const ROWS = 10;
const GRID_SIZE = 45;

const ChaosBackground = ({ phase }) => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const w = () => window.innerWidth;
    const h = () => window.innerHeight;

    const initParticles = () => {
      particlesRef.current = Array.from({ length: 80 }, () => ({
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 2.5,
        vy: (Math.random() - 0.5) * 2.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        hue: Math.random() * 60 + 120,
      }));
    };

    const animate = () => {
      timeRef.current += 0.016;
      const t = timeRef.current;
      ctx.clearRect(0, 0, w(), h());

      const imgData = ctx.createImageData(w(), h());
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 16) {
        const noise = Math.random() * 18;
        data[i] = noise;
        data[i + 1] = noise + Math.random() * 8;
        data[i + 2] = noise;
        data[i + 3] = 25;
      }
      ctx.putImageData(imgData, 0, 0);

      const pulse = 0.3 + Math.sin(t * 1.5) * 0.15;
      const gradient = ctx.createRadialGradient(
        w() / 2, h() / 2, 0, w() / 2, h() / 2, Math.max(w(), h()) * 0.6
      );
      gradient.addColorStop(0, `rgba(16, 185, 129, ${pulse * 0.12})`);
      gradient.addColorStop(0.4, `rgba(6, 78, 59, ${pulse * 0.08})`);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w(), h());

      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = w() + 10;
        if (p.x > w() + 10) p.x = -10;
        if (p.y < -10) p.y = h() + 10;
        if (p.y > h() + 10) p.y = -10;

        const flickerOpacity = p.opacity * (0.6 + Math.sin(t * 3 + i) * 0.4);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, ${flickerOpacity})`;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 50%, ${flickerOpacity * 0.8})`;
        ctx.shadowBlur = 8;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const lineOpacity = (1 - dist / 150) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      ctx.shadowBlur = 0;

      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      for (let y = 0; y < h(); y += 3) {
        ctx.fillRect(0, y, w(), 1);
      }

      if (Math.random() < 0.03) {
        const glitchY = Math.random() * h();
        const glitchH = Math.random() * 8 + 2;
        ctx.fillStyle = `rgba(16, 185, 129, ${Math.random() * 0.15})`;
        ctx.fillRect(0, glitchY, w(), glitchH);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const isActive = phase === "chaos" || phase === "initializing";

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 transition-opacity duration-1500"
      style={{
        opacity: isActive ? 1 : 0,
        transition: "opacity 1.5s ease-out",
      }}
    />
  );
};

const ChaosMatrixBackground = ({ phase = "chaos" }) => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const initTimer = setTimeout(() => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      setIsMounted(true);
    }, 0);
    return () => clearTimeout(initTimer);
  }, []);

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
      const matrixX = startX + col * GRID_SIZE;
      const matrixY = startY + row * GRID_SIZE;

      const rx1 = pseudoRandom(i + 1);
      const rx2 = pseudoRandom(i + 2);
      const ry1 = pseudoRandom(i + 3);
      const ry2 = pseudoRandom(i + 4);
      const rFloat = pseudoRandom(i + 5);

      const chaosX = (i % 3 === 0) ? rx1 * width : (rx2 * width * 0.8 + width * 0.1);
      const chaosY = (i % 2 === 0) ? ry1 * height : (ry2 * height * 0.8 + height * 0.1);
      const chaosRotate = (i * 15) % 360;

      const floatDuration = 2.5 + Math.floor(rFloat * 5);
      const floatOffsetX = ((i * 13) % 400) - 200;
      const floatOffsetY = ((i * 17) % 400) - 200;

      const size = (i % 3) + 1;
      const nodeOpacity = 0.5 + ((i % 5) * 0.1);

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
      };
    });
  }, [dimensions]);

  const gridLines = useMemo(() => {
    if (!isMounted) return [];
    const lines = [];
    const { width, height } = dimensions;
    const gridWidth = (COLS - 1) * GRID_SIZE;
    const gridHeight = (ROWS - 1) * GRID_SIZE;
    const startX = width / 2 - gridWidth / 2;
    const startY = height / 2 - gridHeight / 2;

    for (let row = 0; row < ROWS; row++) {
      const y = startY + row * GRID_SIZE;
      lines.push(`M ${startX} ${y} L ${startX + gridWidth} ${y}`);
    }
    for (let col = 0; col < COLS; col++) {
      const x = startX + col * GRID_SIZE;
      lines.push(`M ${x} ${startY} L ${x} ${startY + gridHeight}`);
    }
    return lines;
  }, [dimensions, isMounted]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-0 bg-[var(--bg-void)] overflow-hidden flex items-center justify-center pointer-events-none">
      <ChaosBackground phase={phase} />

      <motion.div
        className="absolute inset-0 w-full h-full transform-gpu"
        animate={
          phase === "unlocked"
            ? { scale: 5, opacity: 0, filter: "blur(10px)" }
            : { scale: 1, opacity: 1, filter: "blur(0px)" }
        }
        transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1.0] }}
      >
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <g stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" fill="none">
            {gridLines.map((path, i) => (
              <motion.path
                key={`line-${i}`}
                d={path}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: phase === "matrix" || phase === "unlocked" ? 1 : 0,
                  opacity: phase === "matrix" || phase === "unlocked" ? 1 : 0,
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: phase === "matrix" ? (i * 0.02) : 0,
                }}
              />
            ))}
          </g>
        </svg>

        {nodes.map((node) => {
          const isMatrix = phase === "matrix" || phase === "unlocked";
          if (isMatrix && node.id >= COLS * ROWS) return null;

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

          const nodeSize = isMatrix ? 6 : node.size * 2.5;

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
                  : `rgba(16, 185, 129, ${node.nodeOpacity})`,
                boxShadow: isMatrix
                  ? "0 0 10px rgba(255, 255, 255, 0.5)"
                  : `0 0 ${6 + node.size * 3}px rgba(16, 185, 129, ${node.nodeOpacity * 0.6}), 0 0 ${2 + node.size}px rgba(16, 185, 129, ${node.nodeOpacity * 0.3})`,
              }}
              initial={{
                x: node.chaosX,
                y: node.chaosY,
                rotate: node.chaosRotate,
                opacity: 0,
                scale: isMatrix ? 1 : 1.25,
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
                    opacity: { duration: 0.8, delay: (node.id % 30) * 0.02 },
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
    </div>
  );
};

export default ChaosMatrixBackground;
