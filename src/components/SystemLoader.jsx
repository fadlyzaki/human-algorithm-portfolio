import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Cpu, Terminal, Activity, Database } from "lucide-react";

const BOOT_LOGS = [
  "Archiving legacy assumptions...",
  "Mounting VDOM physics engine [framer-motion]",
  "Initializing GPU Canvas [ChaosMatrix]",
  "Establishing secure LLM uplink...",
  "Waking Companion Protocol (Echo.Z)...",
  "Resolving polymorphic layout archetypes...",
  "Applying CSS Token Architecture...",
  "Awaiting user input syntax..."
];

export const SystemLoader = () => {
  const { t } = useLanguage();
  const [logIndex, setLogIndex] = useState(0);

  // Cycle through boot logs quickly to simulate a terminal boot
  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev < BOOT_LOGS.length - 1 ? prev + 1 : prev));
    }, 400); // Fast log progression
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[var(--z-toast)] bg-[var(--bg-void)] flex flex-col items-center justify-center overflow-hidden font-mono selection:bg-[var(--accent-blue)]/30">
      {/* Background Matrix Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{
            backgroundImage: "linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
        }}
      />
      
      {/* Moving Scanline Overlay */}
      <motion.div 
        className="absolute inset-x-0 h-[2px] bg-[var(--accent-blue)] opacity-10 blur-sm"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Decorative Corner Diagnostics */}
      <div className="absolute top-6 left-6 text-[8px] text-[var(--text-secondary)] uppercase tracking-widest hidden md:block">
        <p>SYS_VER: 8.1.0</p>
        <p className="animate-pulse text-[var(--accent-blue)] mt-1">Status: DECRYPTING_CHUNKS</p>
      </div>
      
      <div className="absolute bottom-6 right-6 text-[8px] text-[var(--text-secondary)] uppercase tracking-widest text-right hidden md:block">
        <p>MEM_ALLOC: 42MB / 128MB</p>
        <p>latency: &lt;15ms</p>
      </div>

      <div className="relative flex flex-col items-center w-full max-w-md px-8 z-10">
        
        {/* The Geometrical Core */}
        <div className="relative w-32 h-32 mb-12 flex items-center justify-center">
          {/* Outer Spin Ring */}
          <motion.div 
            className="absolute inset-0 rounded-full border border-dashed border-[var(--text-secondary)] opacity-30"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Fast Ring */}
          <motion.div 
            className="absolute inset-2 rounded-full border-t border-[var(--accent-blue)] opacity-80"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Center Symbol */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-[var(--accent-blue)]"
          >
            <Cpu size={32} strokeWidth={1} />
          </motion.div>
        </div>

        {/* Status Text Block */}
        <div className="w-full space-y-4">
          <div className="flex justify-between items-end border-b border-[var(--border-color)] pb-2">
            <motion.div 
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent-blue)] flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Terminal size={12} />
              <span>{t("system.initializing") || "KERNEL BOOT SEQUENCE"}</span>
            </motion.div>
            <span className="text-[9px] text-[var(--text-secondary)]">[(O) OK]</span>
          </div>

          {/* Console Log Area */}
          <div className="h-20 w-full bg-[var(--bg-card)]/50 border border-[var(--border-color)] rounded-md p-3 overflow-hidden shadow-inner flex flex-col justify-end">
            <AnimatePresence mode="popLayout">
              {BOOT_LOGS.slice(0, logIndex + 1).slice(-3).map((log, index, arr) => (
                <motion.div 
                  key={log}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="font-mono text-[9px] sm:text-[10px] text-[var(--text-secondary)] flex gap-2 mb-1 w-full"
                >
                  <span className="text-[var(--accent-green)] shrink-0">&gt;</span>
                  <span className={`truncate ${index === arr.length - 1 ? "text-[var(--text-primary)]" : ""}`}>{log}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Bar Loader */}
        <div className="w-full mt-8">
            <div className="flex justify-between text-[8px] uppercase tracking-widest text-[var(--text-secondary)] mb-2">
                <span>Compiling Logic...</span>
                <span className="text-[var(--accent-blue)] animate-pulse">Running</span>
            </div>
            <div className="w-full h-[2px] bg-[var(--border-color)] relative overflow-hidden rounded-full">
                <motion.div 
                    className="absolute inset-y-0 left-0 bg-[var(--accent-blue)]"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: "circOut"
                    }}
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export const SystemSectionLoader = ({ height = "h-96" }) => {
  const { t } = useLanguage();
  
  return (
    <div className={`w-full ${height} border border-[var(--border-color)] bg-[var(--bg-card)]/30 relative overflow-hidden flex flex-col items-center justify-center rounded-xl mb-12`}>
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
            backgroundImage: "linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
        }}
      />
      
      <div className="flex justify-center items-center gap-6 relative z-10 opacity-60">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
          <Activity size={18} className="text-[var(--accent-blue)]" />
        </motion.div>
        
        <div className="flex flex-col gap-1 items-center max-w-[200px]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-primary)] font-bold text-center whitespace-nowrap">
            {t("system.initializing") || "FETCHING CONTEXT"}
          </span>
          <div className="flex gap-1 items-center">
            <motion.div className="w-1.5 h-1.5 bg-[var(--border-color)]" animate={{ opacity: [1, 0.2] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0 }} />
            <motion.div className="w-1.5 h-1.5 bg-[var(--border-color)]" animate={{ opacity: [1, 0.2] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.15 }} />
            <motion.div className="w-1.5 h-1.5 bg-[var(--border-color)]" animate={{ opacity: [1, 0.2] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.3 }} />
          </div>
        </div>

        <motion.div animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
          <Database size={18} className="text-[var(--text-secondary)]" />
        </motion.div>
      </div>
    </div>
  );
};

export default SystemLoader;
