import React from "react";
import { User } from "lucide-react";
import PixelImage from "../PixelImage";

const IndustrialCard = ({ t, isDark, currentItem }) => (
    <div className={`w-full h-full border-[1px] relative group overflow-hidden rounded-xl flex flex-col shadow-xl ${isDark ? "bg-white border-black/20" : "bg-black border-white/20"}`}>
      {/* Punch Hole */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-2 bg-[var(--border-color)] rounded-full shadow-[inset_0_2px_4px_rgba(var(--bg-void-rgb), 0.8)] z-30 flex items-center justify-center">
        <div className="w-6 h-0.5 bg-black/50 rounded-full"></div>
      </div>
      {/* Holographic Sheen */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-duration-700 pointer-events-none z-20 mix-blend-overlay bg-no-repeat"
        style={{ backgroundSize: "200% 200%" }}
      ></div>
      {/* Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-color-burn z-10"></div>

      {/* Header */}
      <div className={`h-24 relative flex items-center justify-between px-4 pt-4 border-b-2 border-[var(--accent)] ${isDark ? "bg-white" : "bg-black"}`}>
        <div className="flex flex-col">
          <span className="text-[var(--accent)] font-mono text-[10px] font-bold tracking-[0.2em]">
            {t("id_card.access_level") || "ROOT_ACCESS"}
          </span>
          <span className={`font-sans text-xs font-bold tracking-wide mt-1 ${isDark ? "text-black" : "text-white"}`}>
            {t("id_card.human") || "HUMAN BY DESIGN"}
          </span>
        </div>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${isDark ? "border-black/20" : "border-white/20"}`}>
          <User size={14} className={isDark ? "text-black/60" : "text-white/60"} />
        </div>
      </div>

      {/* Content */}
      <div className={`flex-grow p-4 relative ${isDark ? "bg-white" : "bg-black"}`}>
        <div className={`absolute top-4 right-4 w-10 h-8 rounded-md border shadow-sm flex flex-wrap gap-[1px] content-center justify-center p-[2px] opacity-90 ${isDark ? "bg-gray-200 border-gray-400" : "bg-gray-800 border-gray-600"}`}>
          <div className={`w-2.5 h-3 border rounded-tl-sm ${isDark ? "border-gray-400/50" : "border-gray-500/50"}`}></div>
          <div className={`w-2.5 h-3 border rounded-tr-sm ${isDark ? "border-gray-400/50" : "border-gray-500/50"}`}></div>
          <div className={`w-2.5 h-3 border rounded-bl-sm ${isDark ? "border-gray-400/50" : "border-gray-500/50"}`}></div>
          <div className={`w-2.5 h-3 border rounded-br-sm ${isDark ? "border-gray-400/50" : "border-gray-500/50"}`}></div>
        </div>
        <div className="w-28 h-36 bg-gray-300 border border-black/10 shadow-inner mb-4 relative overflow-hidden contrast-125 brightness-110">
          <PixelImage src={currentItem.src} alt="Fadly" />
        </div>
        <div className="space-y-3">
          <div className="flex flex-col">
            <h2 className={`text-xl font-bold leading-none uppercase tracking-tight whitespace-nowrap ${isDark ? "text-black" : "text-white"}`}>
              UZZAKI, FADLY 🧢
            </h2>
            <span className={`text-[10px] font-mono uppercase tracking-widest mt-1 ${isDark ? "text-gray-600" : "text-gray-400"}`}>
              {t("id_card.role") || "Product Designer // Systems Thinker"}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <label className={`text-[8px] font-mono uppercase block ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                {t("id_card.id_no") || "ID_NO"}
              </label>
              <span className={`text-xs font-mono font-medium ${isDark ? "text-black" : "text-white"}`}>
                1407-1995
              </span>
            </div>
            <div>
              <label className={`text-[8px] font-mono uppercase block ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                {t("id_card.exp") || "EXP"}
              </label>
              <span className={`text-xs font-mono font-medium ${isDark ? "text-black" : "text-white"}`}>
                {t("id_card.indefinite") || "INDEFINITE"}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className={`h-12 border-t flex items-center justify-between px-4 relative overflow-hidden ${isDark ? "bg-white border-black/5" : "bg-[var(--border-color)] border-white/5"}`}>
        <div className={`flex items-center gap-[2px] h-6 opacity-40 w-full ${isDark ? "mix-blend-multiply" : "mix-blend-screen"}`}>
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className={isDark ? "bg-black" : "bg-white"}
              style={{
                width: (i * 13) % 7 > 3 ? "2px" : "4px",
                height: "100%",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );

export default IndustrialCard;
