import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code2, Check, Globe, RefreshCw, Box, Layers } from "lucide-react";

export default function SummarizerAI({ color = "var(--accent-blue, #3b82f6)" }) {
  const [step, setStep] = useState(0);

  const URL = "https://example.com/competitor";
  const JSON_RESULT = `{
  "product_brand": "ExampleCorp",
  "value_prop": "Fastest analytics",
  "audience": "Growth teams",
  "cta": ["Start Free", "Demo"],
  "trust": ["SOC2", "1M+ Users"]
}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((p) => (p >= 5 ? 0 : p + 1));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[400px] relative overflow-hidden bg-black/5 rounded-xl border border-[var(--border-color)] font-mono select-none text-[10px] sm:text-xs">
      {/* Background Matrix */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(0deg, var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        
        {/* URL Input Simulation */}
        <div className="w-full max-w-md bg-[var(--bg-card)] border border-[var(--border-color)] rounded-md mb-8 shadow-2xl relative z-10 overflow-hidden">
          <div className="flex bg-black/10 border-b border-[var(--border-color)] p-2 items-center gap-2">
            <div className="flex gap-1.5 px-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
            </div>
            <div className="flex-1 text-center text-[var(--text-secondary)] opacity-50 tracking-widest text-[9px] uppercase">
              MCP_CLIENT
            </div>
          </div>
          <div className="p-4 flex items-center gap-4">
            <Globe className={step === 0 ? "text-blue-400" : "text-[var(--text-secondary)]"} size={16} />
            <div className="flex-1 border-b border-[var(--border-color)] pb-1 relative">
              <span className="opacity-80">{URL}</span>
              {step === 0 && (
                <motion.div className="w-2 h-4 bg-blue-400 inline-block align-middle ml-1" animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} />
              )}
            </div>
            <motion.div animate={step === 1 ? { rotate: 360 } : {}} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}>
              <Search size={16} className={step === 1 ? "text-blue-400" : "text-[var(--text-secondary)] opacity-50"} />
            </motion.div>
          </div>
        </div>

        {/* Processing Node */}
        <div className="relative w-full max-w-md flex justify-center mb-8 h-16">
          <AnimatePresence>
            {step >= 1 && step < 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute flex items-center gap-4 bg-[var(--bg-void)] border border-[var(--border-color)] rounded-full px-6 py-2 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-[var(--text-secondary)] tracking-widest text-[10px]">
                  {step === 1 && "ADK_AGENT_INIT..."}
                  {step === 2 && "MCP: FETCH_DOM..."}
                  {step === 3 && "LLM: PARSE_UX..."}
                </span>
                <RefreshCw size={12} className="text-blue-400 animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* JSON Output Simulation */}
        <div className="w-full max-w-md h-40 bg-[var(--bg-void)] border border-blue-500/30 rounded-md shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500"></div>
          <div className="p-4 h-full">
            <AnimatePresence mode="popLayout">
              {step >= 4 ? (
                <motion.pre
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-emerald-400 whitespace-pre-wrap font-mono text-[9px] leading-relaxed"
                >
                  {JSON_RESULT}
                </motion.pre>
              ) : (
                <motion.div
                  exit={{ opacity: 0 }}
                  className="h-full flex items-center justify-center text-[var(--text-secondary)] opacity-30 flex-col gap-2"
                >
                  <Box size={20} />
                  <span>AWAITING_INPUT</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {step === 5 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute bottom-4 right-4 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-black"
            >
              <Check size={12} />
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}
