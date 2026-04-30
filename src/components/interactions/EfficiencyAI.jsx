import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChefHat, Clock, Leaf, Zap } from "lucide-react";

const suppliers = [
  { id: "s1", label: "ORG_FARM_A", x: 15, y: 25 },
  { id: "s2", label: "HYDROPONIC_B", x: 15, y: 50 },
  { id: "s3", label: "IMPORT_HUB", x: 15, y: 75 },
];

const hub = { id: "hub", label: "JIT_OPTIMIZER", x: 50, y: 50 };

const kitchens = [
  { id: "k1", label: "KITCHEN_01", x: 85, y: 30 },
  { id: "k2", label: "KITCHEN_02", x: 85, y: 70 },
];

const EfficiencyAI = ({ color = "var(--accent-orange)" }) => {
  const [cycle, setCycle] = useState(0);
  const [orders, setOrders] = useState([]);
  const [isAutoMode, setIsAutoMode] = useState(true);
  const [rushFlash, setRushFlash] = useState(null);

  // Auto simulation
  useEffect(() => {
    if (!isAutoMode) return;
    const interval = setInterval(() => {
      setCycle((prev) => prev + 1);
      const newOrder = {
        id: Date.now() + Math.random(),
        supplierIdx: Math.floor(Math.random() * 3),
        kitchenIdx: Math.floor(Math.random() * 2),
        isRush: false,
      };
      setOrders((prev) => [...prev.slice(-4), newOrder]);
    }, 2000);
    return () => clearInterval(interval);
  }, [isAutoMode]);

  // Cycle counter always ticks
  useEffect(() => {
    const t = setInterval(() => setCycle((p) => p + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const injectRushOrder = (kitchenIdx) => {
    setIsAutoMode(false);
    setRushFlash(kitchenIdx);
    setTimeout(() => setRushFlash(null), 600);

    const newOrder = {
      id: Date.now() + Math.random(),
      supplierIdx: Math.floor(Math.random() * 3),
      kitchenIdx,
      isRush: true,
    };
    setOrders((prev) => [...prev.slice(-4), newOrder]);
    setTimeout(() => setIsAutoMode(true), 4000);
  };

  return (
    <div className="w-full h-full min-h-[400px] relative overflow-hidden bg-black/5 rounded-xl border border-white/10 backdrop-blur-sm font-mono select-none">
      <div className="w-full h-full p-4 md:p-8 flex items-center justify-center relative">
        {/* Background Texture */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, ${color} 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Content Container */}
        <div className="relative w-full max-w-3xl h-[300px] flex justify-between items-center px-2 md:px-8">
          {/* SVG Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
            {/* Static Lines: Suppliers -> Hub */}
            {suppliers.map((s, i) => (
              <line
                key={`ls-${i}`}
                x1={`${s.x}%`}
                y1={`${s.y}%`}
                x2={`${hub.x}%`}
                y2={`${hub.y}%`}
                stroke={color}
                strokeWidth="1"
                strokeOpacity="0.1"
                strokeDasharray="4 4"
              />
            ))}

            {/* Static Lines: Hub -> Kitchens */}
            {kitchens.map((k, i) => (
              <line
                key={`lk-${i}`}
                x1={`${hub.x}%`}
                y1={`${hub.y}%`}
                x2={`${k.x}%`}
                y2={`${k.y}%`}
                stroke={color}
                strokeWidth="1"
                strokeOpacity="0.1"
                strokeDasharray="4 4"
              />
            ))}

            {/* Animated order pulses using framer-motion (no animateMotion) */}
            {orders.map((o) => {
              const s = suppliers[o.supplierIdx];
              const k = kitchens[o.kitchenIdx];
              const dur = o.isRush ? 0.5 : 1.2;

              return (
                <g key={o.id}>
                  {/* Segment 1: Supplier -> Hub */}
                  <motion.circle
                    r={o.isRush ? 5 : 3}
                    fill={o.isRush ? "#ef4444" : color}
                    initial={{ cx: `${s.x}%`, cy: `${s.y}%`, opacity: 0 }}
                    animate={{
                      cx: [`${s.x}%`, `${hub.x}%`],
                      cy: [`${s.y}%`, `${hub.y}%`],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{ duration: dur, ease: "easeInOut" }}
                  />
                  {/* Segment 2: Hub -> Kitchen (delayed) */}
                  <motion.circle
                    r={o.isRush ? 5 : 3}
                    fill={o.isRush ? "#ef4444" : color}
                    fillOpacity={0.6}
                    initial={{ cx: `${hub.x}%`, cy: `${hub.y}%`, opacity: 0 }}
                    animate={{
                      cx: [`${hub.x}%`, `${k.x}%`],
                      cy: [`${hub.y}%`, `${k.y}%`],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{ duration: dur, delay: dur, ease: "easeInOut" }}
                    onAnimationComplete={() =>
                      setOrders((prev) => prev.filter((p) => p.id !== o.id))
                    }
                  />
                </g>
              );
            })}
          </svg>

          {/* LEFT: SUPPLIERS */}
          <div className="flex flex-col gap-5 relative z-10 w-[28%] min-w-[110px]">
            {suppliers.map((s) => (
              <div key={s.id} className="group relative">
                <div className="flex items-center gap-2 p-2 pr-3 rounded-r-full border-y border-r border-white/5 bg-black/20 backdrop-blur-sm">
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <Leaf size={12} style={{ color, opacity: 0.8 }} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[8px] text-white/50 tracking-widest uppercase">SUPPLY</span>
                    <span className="text-[9px] text-white/90 font-bold truncate">{s.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER: JIT HUB */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="absolute w-24 h-24 rounded-full border border-dashed animate-[spin_10s_linear_infinite]" style={{ borderColor: `color-mix(in srgb, ${color} 20%, transparent)` }} />

            <div className="w-20 h-20 bg-black/50 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center relative" style={{ boxShadow: `0 0 40px color-mix(in srgb, ${color} 10%, transparent)` }}>
              <div className="absolute inset-0 rounded-full opacity-20 animate-ping" style={{ borderWidth: 1, borderStyle: "solid", borderColor: color }} />
              <div className="flex flex-col items-center gap-0.5">
                <Clock size={20} style={{ color }} />
                <span className="text-[7px] font-mono tracking-widest" style={{ color }}>JIT_SYNC</span>
                <span className="text-[11px] font-bold text-white">
                  00:{String(cycle % 60).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="mt-4 flex gap-1.5">
              <div className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[7px] text-white/50 backdrop-blur">
                INVENTORY: LOW
              </div>
              <div className="px-1.5 py-0.5 rounded border text-[7px] backdrop-blur" style={{ backgroundColor: `color-mix(in srgb, ${color} 10%, transparent)`, borderColor: `color-mix(in srgb, ${color} 20%, transparent)`, color }}>
                TURN: HIGH
              </div>
            </div>
          </div>

          {/* RIGHT: KITCHENS */}
          <div className="flex flex-col gap-8 relative z-10 w-[28%] min-w-[110px]">
            {kitchens.map((k, i) => (
              <div
                key={k.id}
                className="group relative cursor-pointer"
                onClick={() => injectRushOrder(i)}
              >
                <div className={`flex flex-row-reverse items-center gap-2 p-2 pl-3 rounded-l-full border-y border-l backdrop-blur-sm transition-all duration-300 text-right
                  ${rushFlash === i ? "border-red-500/50 bg-red-500/10" : "border-white/5 bg-black/20 hover:border-red-500/30 hover:bg-red-500/5"}
                `}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border shrink-0 transition-colors
                    ${rushFlash === i ? "bg-red-500/20 border-red-500/50" : "bg-white/5 border-white/10 group-hover:bg-red-500/10 group-hover:border-red-500/30"}
                  `}>
                    <ChefHat size={14} className={`transition-colors ${rushFlash === i ? "text-red-400" : "text-white/80 group-hover:text-red-400"}`} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className={`text-[8px] tracking-widest uppercase transition-colors ${rushFlash === i ? "text-red-400/70" : "text-white/50 group-hover:text-red-400/60"}`}>
                      DEMAND
                    </span>
                    <span className="text-[9px] text-white/90 font-bold truncate">{k.label}</span>
                  </div>
                </div>
                {/* Rush hint */}
                <div className="absolute -bottom-3 right-2 text-[7px] text-white/20 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Zap size={8} className="text-red-400" /> Rush Order
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-3 left-4 text-[9px] text-gray-500 font-mono tracking-widest flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: color }} />
            JIT_LOGISTICS — Click kitchens to inject rush orders
          </div>
        </div>
      </div>
    </div>
  );
};

export default EfficiencyAI;
