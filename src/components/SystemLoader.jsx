import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

/**
 * SystemLoader - A premium loading component for the Human Algorithm system.
 * Designed to fit the systematic, minimalist aesthetic of Fadly Uzzaki's portfolio.
 */
export const SystemLoader = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 z-[var(--z-toast)] bg-[var(--bg-void)] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Systematic Noise/Grid (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none blueprint-grid" />
      
      <div className="relative flex flex-col items-center max-w-xs w-full px-8">
        {/* The "Hole" / Central Focal Point */}
        <motion.div 
          className="w-12 h-12 border border-[var(--border-color)] relative mb-12 flex items-center justify-center overflow-hidden rounded-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Pulsing Core */}
          <motion.div 
            className="w-4 h-4 bg-[var(--accent-green)] rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
              boxShadow: [
                "0 0 0px var(--accent-green)",
                "0 0 15px var(--accent-green)",
                "0 0 0px var(--accent-green)"
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          {/* Rotating Outer Frame */}
          <motion.div 
            className="absolute inset-0 border-t border-[var(--accent-green)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Status Text Block */}
        <div className="flex flex-col items-center gap-2">
          {/* Primary Monospace Lable */}
          <motion.div 
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-green)] flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-1 h-1 bg-[var(--accent-green)] rounded-full animate-pulse" />
            <span>{t("system.initializing") || "INITIALIZING SYSTEM"}</span>
            <span className="opacity-30">|</span>
            <span className="opacity-50">{t("system.memproses") || "MEMPROSES"}</span>
          </motion.div>

          {/* Dynamic "Code" Stream (Decorative) */}
          <div className="h-4 overflow-hidden relative w-full flex justify-center mt-4">
            <motion.div 
              className="font-mono text-[8px] text-[var(--text-secondary)] opacity-30 flex flex-col items-center whitespace-nowrap"
              animate={{ y: [0, -100] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(20)].map((_, i) => (
                <span key={i} className="mb-1">
                  0x{Math.random().toString(16).slice(2, 6).toUpperCase()} // BLOCK_{Math.floor(Math.random() * 9999)}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom "Progress" Line */}
        <div className="absolute bottom-12 left-0 right-0 px-12 flex flex-col items-center">
            <div className="w-full h-[1px] bg-[var(--border-color)] relative overflow-hidden">
                <motion.div 
                    className="absolute inset-0 bg-[var(--accent-green)] origin-left"
                    animate={{ 
                        scaleX: [0, 0.4, 0.3, 0.7, 0.6, 1],
                    }}
                    transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />
            </div>
            <motion.span 
              className="font-mono text-[8px] mt-2 opacity-20 uppercase tracking-widest"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
                Secure_Uplink_Established
            </motion.span>
        </div>
      </div>
    </div>
  );
};

/**
 * SystemSectionLoader - An inline version of the loader for section-level lazy loading.
 * Provides a contained systematic feel without the full-screen overlay.
 */
export const SystemSectionLoader = ({ height = "h-96" }) => {
  const { t } = useLanguage();
  
  return (
    <div className={`w-full ${height} border border-[var(--border-color)] bg-[var(--bg-void)]/50 relative overflow-hidden flex flex-col items-center justify-center rounded-3xl mb-12`}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none blueprint-grid" />
      
      {/* Moving Scanline */}
      <motion.div 
        className="absolute inset-x-0 h-[1px] bg-[var(--accent-green)] opacity-20"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      <div className="flex flex-col items-center gap-3 relative z-10">
        <motion.div 
           className="w-2 h-2 bg-[var(--accent-green)] rounded-full"
           animate={{ opacity: [0.2, 1, 0.2] }}
           transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--accent-green)] opacity-60">
          {t("system.initializing") || "DATA_LINK_PENDING"}
        </span>
      </div>
    </div>
  );
};

export default SystemLoader;
