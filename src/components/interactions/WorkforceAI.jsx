import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, Zap, MousePointerClick } from "lucide-react";

const WorkforceAI = ({ color = "var(--accent-teal)" }) => {
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

  const [matches, setMatches] = useState([]);
  const [activeCandidate, setActiveCandidate] = useState(null);
  const [isAutoScanning, setIsAutoScanning] = useState(true);

  // Approximate Y centers for 4 items in our specific flex layout (in percentages 0-100 of the SVG viewBox)
  // Header takes ~15%, then 4 items with gaps. 
  // We use 100x100 viewBox with preserveAspectRatio="none"
  const yCoords = [25, 48, 71, 94]; 

  // Auto Scanning Logic
  useEffect(() => {
    if (!isAutoScanning) return;

    const interval = setInterval(() => {
      const cIdx = Math.floor(Math.random() * CANDIDATES.length);
      const jIdx = Math.floor(Math.random() * JOBS.length);
      
      triggerMatch(cIdx, jIdx, true);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoScanning]);

  const triggerMatch = (cIdx, jIdx, isAuto = false) => {
    if (!isAuto) {
      setIsAutoScanning(false);
      setActiveCandidate(cIdx);
      setTimeout(() => setActiveCandidate(null), 1500);
    }

    const newMatch = {
      id: Date.now() + Math.random(),
      cIdx,
      jIdx,
      score: Math.floor(Math.random() * 15) + 85,
      isManual: !isAuto
    };

    setMatches((prev) => [...prev.slice(-2), newMatch]); // Keep max 3 lines
  };

  const handleManualMatch = (cIdx) => {
    // Determine best job match (using predefined matchIdx for demo logic)
    const jIdx = CANDIDATES[cIdx].matchIdx;
    triggerMatch(cIdx, jIdx, false);
  };

  return (
    <div className="w-full h-full min-h-[400px] relative overflow-hidden bg-black/5 rounded-xl border border-white/10 backdrop-blur-sm font-mono select-none">
      <div className="w-full h-full p-4 md:p-8 flex flex-col items-center justify-center relative">
        
        {/* Background Texture */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(0deg, ${color} 1px, transparent 1px)`,
            backgroundSize: "100% 20px",
          }}
        ></div>

        {/* Central "Airy" Split Container */}
        <div className="relative w-full max-w-3xl h-[300px] flex justify-between items-center px-2 md:px-8">
          
          {/* LEFT COLUMN: CANDIDATES */}
          <div className="flex flex-col gap-4 relative z-20 w-[30%] min-w-[140px]">
            <div className="mb-2 text-[9px] uppercase tracking-widest text-white/40 border-b border-white/10 pb-1 flex justify-between">
              <span>Candidates</span>
              <span className="hidden sm:inline">N={CANDIDATES.length}</span>
            </div>
            
            {CANDIDATES.map((c, i) => (
              <div 
                key={c.id} 
                className="relative group cursor-pointer"
                onClick={() => handleManualMatch(i)}
              >
                <div className={`flex items-center gap-3 p-2 rounded-lg border backdrop-blur-sm transition-all duration-300
                  ${activeCandidate === i ? `border-[${color}] bg-[${color}]/10 scale-105` : 'border-white/5 bg-black/20 hover:border-white/30'}
                `}>
                  <div className={`w-8 h-8 rounded flex items-center justify-center border transition-colors
                    ${activeCandidate === i ? `bg-[${color}]/20 border-[${color}]/50 text-[${color}]` : 'bg-white/5 border-white/10 text-white/70'}
                  `}>
                    <User size={14} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/90 font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                      {c.role}
                    </span>
                    <span className="text-[8px] text-white/50">
                      {c.exp} Exp
                    </span>
                  </div>
                </div>
                
                {/* Connector Point Left */}
                <div className={`absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-colors ${activeCandidate === i ? `bg-[${color}] shadow-[0_0_8px_${color}]` : 'bg-white/20'}`}></div>
              </div>
            ))}
          </div>

          {/* CENTER: SVG CONNECTION LAYER */}
          <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
             {/* Central Synapse Node */}
             <div className="absolute w-16 h-16 rounded-full border border-dashed border-white/20 flex items-center justify-center animate-[spin_10s_linear_infinite]"></div>
             <div className="absolute w-8 h-8 bg-[var(--brand)]/10 rounded-full flex items-center justify-center shadow-[0_0_20px_var(--brand)] animate-pulse">
              <Zap size={14} style={{ color: color }} />
             </div>

            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
              <AnimatePresence>
                {matches.map((m) => {
                  const y1 = yCoords[m.cIdx];
                  const y2 = yCoords[m.jIdx];
                  // Start at 30% width (end of left col), End at 70% width (start of right col)
                  const pathD = `M 30 ${y1} C 50 ${y1}, 50 ${y2}, 70 ${y2}`;

                  return (
                    <g key={m.id}>
                      {/* Connection Line */}
                      <motion.path
                        d={pathD}
                        fill="none"
                        stroke={color}
                        strokeWidth="0.5"
                        strokeOpacity={m.isManual ? "0.8" : "0.3"}
                        vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />

                      {/* Moving Packet */}
                      <motion.circle
                        r="3"
                        fill="var(--bg-void)"
                        stroke={color}
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                        initial={{ offsetDistance: "0%", scale: 1 }}
                        animate={{ offsetDistance: "100%", scale: [1, 1.5, 1] }}
                        transition={{ duration: 0.8, ease: "linear" }}
                        style={{ offsetPath: `path("${pathD}")` }}
                      />

                      {/* Match Score Badge (Only show on manual match for impact) */}
                      {m.isManual && (
                         <motion.foreignObject
                         x="40%"
                         y={`${(y1 + y2) / 2 - 5}%`}
                         width="20%"
                         height="10%"
                         initial={{ scale: 0, opacity: 0 }}
                         animate={{ scale: 1, opacity: 1 }}
                         exit={{ scale: 0, opacity: 0 }}
                         transition={{ delay: 0.4 }}
                         className="overflow-visible"
                       >
                         <div className="flex justify-center items-center w-full h-full">
                           <div className="px-2 py-1 bg-[var(--brand)] text-white text-[9px] font-mono rounded shadow-[0_0_15px_var(--brand)] whitespace-nowrap border border-white/20">
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
          </div>

          {/* RIGHT COLUMN: JOBS */}
          <div className="flex flex-col gap-4 relative z-20 w-[30%] min-w-[140px] text-right">
            <div className="mb-2 text-[9px] uppercase tracking-widest text-white/40 border-b border-white/10 pb-1 flex justify-between w-full">
              <span className="hidden sm:inline">Open_Reqs</span>
              <span>Jobs</span>
            </div>
            
            {JOBS.map((j) => (
              <div key={j.id} className="relative group w-full flex justify-end">
                {/* Connector Point Right */}
                <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/20"></div>

                <div className="flex items-center gap-3 p-2 rounded-lg border border-white/5 bg-black/20 backdrop-blur-sm transition-all w-full flex-row-reverse">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
                    <Briefcase size={14} className="text-white/70" />
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="text-[10px] text-white/90 font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                      {j.title}
                    </span>
                    <span className="text-[8px] text-white/50">
                      {j.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Controls & Metadata */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
           <div className="text-[9px] text-gray-500 font-mono tracking-widest flex items-center gap-3">
             <div className="flex items-center gap-1">
               <div className={`w-1.5 h-1.5 rounded-full ${isAutoScanning ? 'bg-[var(--brand)] animate-pulse' : 'bg-gray-500'}`}></div>
               ALGORITHM: BIPARTITE_MATCHING_V3
             </div>
             <span className="opacity-50 hidden sm:inline">|</span>
             <span className="opacity-70 hidden sm:inline">LATENCY: 12ms</span>
           </div>
           
           <div className="flex items-center gap-2 pointer-events-auto bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[9px] text-white/60 font-mono uppercase">
              <MousePointerClick size={12} className="text-[var(--brand)]" />
              <span>Click Candidate to Match</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WorkforceAI;
