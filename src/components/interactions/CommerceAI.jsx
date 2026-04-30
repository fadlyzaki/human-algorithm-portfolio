import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Factory, Store, Truck } from "lucide-react";

// Supply Chain Nodes (percentage-based positions)
const hubs = [
  { id: "sup1", type: "supplier", x: 15, y: 30, label: "PRINCIPAL_A" },
  { id: "sup2", type: "supplier", x: 15, y: 70, label: "PRINCIPAL_B" },
  { id: "hub_main", type: "hub", x: 50, y: 50, label: "SMART_WAREHOUSE" },
  { id: "ret1", type: "retailer", x: 85, y: 20, label: "TOKO_ALI" },
  { id: "ret2", type: "retailer", x: 85, y: 50, label: "WARUNG_BU_DE" },
  { id: "ret3", type: "retailer", x: 85, y: 80, label: "SANTOSO_CORP" },
];

const connections = [
  { from: "sup1", to: "hub_main" },
  { from: "sup2", to: "hub_main" },
  { from: "hub_main", to: "ret1" },
  { from: "hub_main", to: "ret2" },
  { from: "hub_main", to: "ret3" },
];

const CommerceAI = ({ color = "var(--accent-teal)" }) => {
  const [pulses, setPulses] = useState([]);
  const [demand, setDemand] = useState(50);
  const [activeNode, setActiveNode] = useState(null);

  useEffect(() => {
    const frequency = 1200 - demand * 10;
    const interval = setInterval(
      () => {
        const isInbound = Math.random() > 0.4;
        let path;
        if (isInbound) {
          path = connections.slice(0, 2)[Math.floor(Math.random() * 2)];
        } else {
          path = connections.slice(2)[Math.floor(Math.random() * 3)];
        }

        const fromHub = hubs.find((h) => h.id === path.from);
        const toHub = hubs.find((h) => h.id === path.to);

        const newPulse = {
          id: Date.now() + Math.random(),
          x1: fromHub.x,
          y1: fromHub.y,
          x2: toHub.x,
          y2: toHub.y,
          type: isInbound ? "inbound" : "outbound",
        };

        setPulses((prev) => [...prev.slice(-12), newPulse]);
      },
      Math.max(150, frequency),
    );

    return () => clearInterval(interval);
  }, [demand]);

  // Node status data (deterministic per node to avoid flicker)
  const getNodeStatus = (hub) => {
    if (hub.type === "supplier") {
      return { stock: demand > 50 ? "DEPLETING" : "STABLE", fill: demand > 50 ? 85 - demand * 0.4 : 72 };
    }
    if (hub.type === "hub") {
      return { throughput: demand > 70 ? "CRITICAL" : "NOMINAL", queue: Math.round(demand * 0.3) };
    }
    return { orders: Math.round(demand * 0.5 + 10), eta: demand > 60 ? "DELAYED" : "ON_TIME" };
  };

  return (
    <div className="w-full h-full min-h-[400px] relative overflow-hidden bg-black/5 rounded-xl border border-white/10 backdrop-blur-sm font-mono select-none">
      <div className="w-full h-full p-4 md:p-8 flex flex-col items-center justify-center relative">
        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(90deg, ${color} 1px, transparent 1px), linear-gradient(0deg, ${color} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            backgroundPosition: "center center",
          }}
        />

        {/* Network Visualization Container */}
        <div className="relative w-full max-w-3xl aspect-[2/1] mb-6">
          {/* SVG Layer for Lines & Pulses */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            {/* Static Connections */}
            {connections.map((c, i) => {
              const from = hubs.find((h) => h.id === c.from);
              const to = hubs.find((h) => h.id === c.to);
              return (
                <g key={i}>
                  <line
                    x1={`${from.x}%`}
                    y1={`${from.y}%`}
                    x2={`${to.x}%`}
                    y2={`${to.y}%`}
                    stroke={color}
                    strokeOpacity="0.1"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <motion.line
                    x1={`${from.x}%`}
                    y1={`${from.y}%`}
                    x2={`${to.x}%`}
                    y2={`${to.y}%`}
                    stroke={color}
                    strokeOpacity="0.1"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, -8] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </g>
              );
            })}

            {/* Active Pulses */}
            {pulses.map((p) => (
              <motion.circle
                key={p.id}
                r="3"
                fill={color}
                initial={{ cx: `${p.x1}%`, cy: `${p.y1}%`, opacity: 0 }}
                animate={{
                  cx: [`${p.x1}%`, `${p.x2}%`],
                  cy: [`${p.y1}%`, `${p.y2}%`],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                onAnimationComplete={() =>
                  setPulses((prev) => prev.filter((item) => item.id !== p.id))
                }
              />
            ))}
          </svg>

          {/* Nodes (HTML Layer) */}
          {hubs.map((hub) => (
            <div
              key={hub.id}
              onClick={() => setActiveNode(activeNode === hub.id ? null : hub.id)}
              className="absolute flex flex-col items-center gap-1.5 group cursor-pointer z-20"
              style={{
                left: `${hub.x}%`,
                top: `${hub.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Icon Container */}
              <div
                className={`relative flex items-center justify-center rounded-lg border bg-black/40 backdrop-blur-md shadow-xl transition-all duration-300
                  ${hub.type === "hub" ? "w-16 h-16 md:w-20 md:h-20" : "w-10 h-10 md:w-12 md:h-12"}
                  ${activeNode === hub.id ? "border-white/40 scale-110" : "border-white/10 group-hover:border-white/30"}
                `}
                style={
                  hub.type === "hub"
                    ? { borderColor: activeNode === hub.id ? "white" : `color-mix(in srgb, ${color} 40%, transparent)`, boxShadow: `0 0 30px color-mix(in srgb, ${color} 15%, transparent)` }
                    : {}
                }
              >
                {hub.type === "hub" && (
                  <div className="absolute inset-0 rounded-lg opacity-10 animate-pulse" style={{ backgroundColor: color }} />
                )}
                {hub.type === "supplier" && <Factory size={18} className="text-white/60" />}
                {hub.type === "hub" && <Truck size={28} style={{ color }} />}
                {hub.type === "retailer" && <Store size={16} className="text-white/60" />}

                {/* Status Dot */}
                <div
                  className={`absolute -top-1 -right-1 w-2 h-2 rounded-full border border-black ${demand > 20 ? "bg-green-500" : "bg-yellow-500"}`}
                />
              </div>

              {/* Label */}
              <div
                className={`px-1.5 py-0.5 rounded border bg-black/50 backdrop-blur text-[7px] md:text-[8px] font-mono tracking-widest uppercase whitespace-nowrap transition-colors duration-300
                  ${activeNode === hub.id ? "text-white border-white/30" : "text-white/50 border-white/10 group-hover:text-white/80"}
                `}
              >
                {hub.label}
              </div>

              {/* Status Popup */}
              <AnimatePresence>
                {activeNode === hub.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute top-full mt-1 w-28 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-2 shadow-2xl z-50 pointer-events-none"
                  >
                    <div className="text-[7px] font-mono text-white/50 mb-1 border-b border-white/10 pb-1">NODE_STATUS</div>
                    {hub.type === "supplier" && (
                      <>
                        <div className="flex justify-between text-[8px] font-mono mb-0.5">
                          <span className="text-white/60">Stock:</span>
                          <span className={getNodeStatus(hub).stock === "DEPLETING" ? "text-orange-400" : "text-green-400"}>{getNodeStatus(hub).stock}</span>
                        </div>
                        <div className="flex justify-between text-[8px] font-mono">
                          <span className="text-white/60">Fill:</span>
                          <span className="text-white">{getNodeStatus(hub).fill.toFixed(0)}%</span>
                        </div>
                      </>
                    )}
                    {hub.type === "hub" && (
                      <>
                        <div className="flex justify-between text-[8px] font-mono mb-0.5">
                          <span className="text-white/60">Load:</span>
                          <span className={getNodeStatus(hub).throughput === "CRITICAL" ? "text-red-400" : "text-green-400"}>{getNodeStatus(hub).throughput}</span>
                        </div>
                        <div className="flex justify-between text-[8px] font-mono">
                          <span className="text-white/60">Queue:</span>
                          <span className="text-white">{getNodeStatus(hub).queue}</span>
                        </div>
                      </>
                    )}
                    {hub.type === "retailer" && (
                      <>
                        <div className="flex justify-between text-[8px] font-mono mb-0.5">
                          <span className="text-white/60">Orders:</span>
                          <span className="text-white">{getNodeStatus(hub).orders}</span>
                        </div>
                        <div className="flex justify-between text-[8px] font-mono">
                          <span className="text-white/60">ETA:</span>
                          <span className={getNodeStatus(hub).eta === "DELAYED" ? "text-orange-400" : "text-green-400"}>{getNodeStatus(hub).eta}</span>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Control Panel */}
        <div className="w-full max-w-sm bg-black/40 p-3 rounded-xl border border-white/10 backdrop-blur-md z-10 flex items-center gap-4">
          <div className="flex flex-col gap-0.5 min-w-[70px]">
            <span className="text-[9px] uppercase tracking-widest text-white/50">Demand</span>
            <span className="text-lg font-mono text-white leading-none">{demand}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={demand}
            onChange={(e) => setDemand(parseInt(e.target.value))}
            className="flex-1 h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer hover:bg-white/20 transition-colors"
          />
        </div>

        {/* Footer */}
        <div className="absolute bottom-3 left-4 text-[9px] text-white/20 font-mono tracking-widest flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: color }} />
          SUPPLY_CHAIN_V4 — Click nodes to inspect
        </div>
      </div>
    </div>
  );
};

export default CommerceAI;
