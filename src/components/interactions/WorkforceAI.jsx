import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, Zap, MousePointerClick } from "lucide-react";

const CANDIDATES = [
  { id: "c1", role: "Forklift Driver", exp: "3y", matchIdx: 0 },
  { id: "c2", role: "Warehouse Admin", exp: "5y", matchIdx: 1 },
  { id: "c3", role: "Packer", exp: "1y", matchIdx: 2 },
  { id: "c4", role: "Logistic Coord", exp: "4y", matchIdx: 3 },
];

const JOBS = [
  { id: "j1", title: "PT. Logistik", type: "Driver" },
  { id: "j2", title: "Gudang Damai", type: "Admin" },
  { id: "j3", title: "Express Corp", type: "Packer" },
  { id: "j4", title: "Cargo X", type: "Coord" },
];

const WorkforceAI = ({ color = "var(--accent-teal)" }) => {
  const containerRef = useRef(null);
  const leftRefs = useRef([]);
  const rightRefs = useRef([]);
  const [dims, setDims] = useState(null);

  const [matches, setMatches] = useState([]);
  const [activeCandidate, setActiveCandidate] = useState(null);
  const [isAutoScanning, setIsAutoScanning] = useState(true);

  // Measure container + node positions for pixel-perfect SVG
  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();

    const leftPositions = leftRefs.current.map((el) => {
      if (!el) return { x: 0, y: 0 };
      const r = el.getBoundingClientRect();
      return { x: r.right - rect.left, y: r.top + r.height / 2 - rect.top };
    });

    const rightPositions = rightRefs.current.map((el) => {
      if (!el) return { x: 0, y: 0 };
      const r = el.getBoundingClientRect();
      return { x: r.left - rect.left, y: r.top + r.height / 2 - rect.top };
    });

    setDims({ w: rect.width, h: rect.height, left: leftPositions, right: rightPositions });
  }, []);

  useEffect(() => {
    measure();
    const obs = new ResizeObserver(measure);
    if (containerRef.current) obs.observe(containerRef.current);
    window.addEventListener("scroll", measure, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", measure);
    };
  }, [measure]);

  // Auto scanning
  useEffect(() => {
    if (!isAutoScanning) return;
    const interval = setInterval(() => {
      const cIdx = Math.floor(Math.random() * CANDIDATES.length);
      const jIdx = Math.floor(Math.random() * JOBS.length);
      triggerMatch(cIdx, jIdx, true);
    }, 2500);
    return () => clearInterval(interval);
  }, [isAutoScanning]);

  const triggerMatch = (cIdx, jIdx, isAuto = false) => {
    if (!isAuto) {
      setIsAutoScanning(false);
      setActiveCandidate(cIdx);
      setTimeout(() => {
        setActiveCandidate(null);
        setIsAutoScanning(true);
      }, 2000);
    }

    const newMatch = {
      id: Date.now() + Math.random(),
      cIdx,
      jIdx,
      score: Math.floor(Math.random() * 15) + 85,
      isManual: !isAuto,
    };
    setMatches((prev) => [...prev.slice(-2), newMatch]);
  };

  const handleManualMatch = (cIdx) => {
    const jIdx = CANDIDATES[cIdx].matchIdx;
    triggerMatch(cIdx, jIdx, false);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[400px] relative overflow-hidden bg-black/5 rounded-xl border border-white/10 backdrop-blur-sm font-mono select-none"
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(0deg, ${color} 1px, transparent 1px)`,
          backgroundSize: "100% 20px",
        }}
      />

      {/* SVG Connection Layer (pixel-perfect) */}
      {dims && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          style={{ width: dims.w, height: dims.h }}
        >
          <AnimatePresence>
            {matches.map((m) => {
              const from = dims.left[m.cIdx];
              const to = dims.right[m.jIdx];
              if (!from || !to) return null;

              const midX = (from.x + to.x) / 2;
              const pathD = `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`;

              return (
                <g key={m.id}>
                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke={color}
                    strokeWidth={m.isManual ? 2 : 1}
                    strokeOpacity={m.isManual ? 0.8 : 0.3}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />

                  {/* Traveling dot */}
                  <motion.circle
                    r="3"
                    fill={m.isManual ? color : "white"}
                    fillOpacity={m.isManual ? 1 : 0.6}
                    initial={{ offsetDistance: "0%", opacity: 0 }}
                    animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 0.8, ease: "linear" }}
                    style={{ offsetPath: `path("${pathD}")` }}
                  />

                  {/* Match score badge (manual only) */}
                  {m.isManual && (
                    <motion.foreignObject
                      x={midX - 40}
                      y={(from.y + to.y) / 2 - 14}
                      width={80}
                      height={28}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.4 }}
                      className="overflow-visible pointer-events-none"
                    >
                      <div className="flex justify-center items-center w-full h-full">
                        <div
                          className="px-2 py-0.5 text-white text-[9px] font-mono rounded whitespace-nowrap border border-white/20"
                          style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}` }}
                        >
                          Match: {m.score}%
                        </div>
                      </div>
                    </motion.foreignObject>
                  )}
                </g>
              );
            })}
          </AnimatePresence>
        </svg>
      )}

      {/* Content Grid */}
      <div className="absolute inset-0 flex items-center justify-between p-4 md:p-8">
        {/* LEFT: CANDIDATES */}
        <div className="flex flex-col gap-3 relative z-20 w-[35%] max-w-[200px]">
          <div className="text-[9px] uppercase tracking-widest text-white/40 border-b border-white/10 pb-1 flex justify-between mb-1">
            <span>Candidates</span>
            <span>N={CANDIDATES.length}</span>
          </div>
          {CANDIDATES.map((c, i) => (
            <div
              key={c.id}
              ref={(el) => (leftRefs.current[i] = el)}
              className="relative group cursor-pointer"
              onClick={() => handleManualMatch(i)}
            >
              <div
                className={`flex items-center gap-2 p-2 rounded-lg border backdrop-blur-sm transition-all duration-300 ${
                  activeCandidate === i
                    ? "border-white/40 bg-white/10 scale-[1.03]"
                    : "border-white/5 bg-black/20 hover:border-white/20"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded flex items-center justify-center border shrink-0 transition-colors ${
                    activeCandidate === i
                      ? "bg-white/20 border-white/40"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <User size={12} className="text-white/70" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-white/90 font-bold truncate">{c.role}</span>
                  <span className="text-[8px] text-white/50">{c.exp} Exp</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER: Engine Icon */}
        <div className="flex flex-col items-center gap-2 z-20 pointer-events-none">
          <div className="w-14 h-14 rounded-full border border-dashed border-white/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center animate-pulse"
              style={{ backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)`, boxShadow: `0 0 20px ${color}` }}
            >
              <Zap size={14} style={{ color }} />
            </div>
          </div>
          <span className="text-[8px] text-white/30 uppercase tracking-widest">Engine</span>
        </div>

        {/* RIGHT: JOBS */}
        <div className="flex flex-col gap-3 relative z-20 w-[35%] max-w-[200px]">
          <div className="text-[9px] uppercase tracking-widest text-white/40 border-b border-white/10 pb-1 flex justify-between mb-1">
            <span>Open Reqs</span>
            <span>Jobs</span>
          </div>
          {JOBS.map((j, i) => (
            <div
              key={j.id}
              ref={(el) => (rightRefs.current[i] = el)}
              className="relative group w-full"
            >
              <div className="flex items-center gap-2 p-2 rounded-lg border border-white/5 bg-black/20 backdrop-blur-sm w-full flex-row-reverse">
                <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Briefcase size={12} className="text-white/70" />
                </div>
                <div className="flex flex-col min-w-0 text-right w-full">
                  <span className="text-[10px] text-white/90 font-bold truncate">{j.title}</span>
                  <span className="text-[8px] text-white/50">{j.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end pointer-events-none z-30">
        <div className="text-[9px] text-gray-500 font-mono tracking-widest flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className={`w-1.5 h-1.5 rounded-full ${isAutoScanning ? "animate-pulse" : ""}`} style={{ backgroundColor: isAutoScanning ? color : "gray" }} />
            BIPARTITE_MATCHING_V3
          </div>
        </div>
        <div className="flex items-center gap-2 pointer-events-auto bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[9px] text-white/50 font-mono uppercase">
          <MousePointerClick size={12} style={{ color }} />
          <span className="hidden sm:inline">Click to Match</span>
        </div>
      </div>
    </div>
  );
};

export default WorkforceAI;
