import React from "react";
import { User } from "lucide-react";
import PixelImage from "../PixelImage";

const HolographicCard = ({ t, isDark, currentItem }) => (
    <div className={`w-full h-full relative group overflow-hidden rounded-[20px] ${isDark ? "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" : "shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"}`}>
      {/* Dynamic Mono Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-1000 z-10 mix-blend-overlay pointer-events-none group-hover:opacity-40 ${isDark ? "from-white via-gray-400 to-black opacity-40" : "from-black via-gray-600 to-white opacity-20"}`}></div>

      {/* Inner card */}
      <div className={`w-full h-full backdrop-blur-xl relative flex flex-col overflow-hidden border z-20 ${isDark ? "bg-gray-100/95 border-white/40" : "bg-black/80 border-white/10"}`}>
        {/* Header */}
        <div className={`h-16 flex items-center justify-between px-4 z-10 pt-2 border-b ${isDark ? "border-black/10" : "border-white/10"}`}>
          <div className="flex flex-col">
            <span className={`font-mono text-[10px] font-black tracking-widest uppercase ${isDark ? "text-gray-900" : "text-gray-200"}`}>
              {t("id_card.access_level") || "ROOT_ACCESS"}
            </span>
            <span className={`font-sans text-[10px] font-bold mt-1 uppercase ${isDark ? "text-gray-700" : "text-gray-400"}`}>
              {t("id_card.human") || "HUMAN BY DESIGN"}
            </span>
          </div>
          <div className={`w-8 h-8 rounded-full border flex items-center justify-center backdrop-blur-md ${isDark ? "bg-white/40 border-black/10" : "bg-black/40 border-white/10"}`}>
            <User size={14} className={isDark ? "text-gray-900" : "text-gray-200"} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow p-4 relative z-10 flex flex-col items-center justify-center">
          <div className={`w-28 h-36 rounded-2xl p-[2px] bg-gradient-to-br border shadow-xl relative overflow-hidden group/frame ${isDark ? "from-white to-black/10 border-white/80" : "from-white/20 to-white/5 border-white/20"}`}>
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <PixelImage src={currentItem.src} alt="Fadly" />
            </div>
            {/* Gloss overlay on photo */}
            <div className={`absolute inset-0 bg-gradient-to-b pointer-events-none rounded-xl ${isDark ? "from-white/40 to-transparent" : "from-white/10 to-transparent"}`}></div>
          </div>
        </div>

        {/* Footer */}
        <div className={`p-4 z-10 backdrop-blur-md border-t ${isDark ? "bg-white/30 border-black/10" : "bg-black/30 border-white/10"}`}>
          <div className="flex justify-between items-end mb-2">
            <div>
              <h2 className={`text-2xl font-black tracking-tighter leading-none mb-1 text-transparent bg-clip-text bg-gradient-to-br whitespace-nowrap ${isDark ? "from-gray-900 via-gray-700 to-gray-500" : "from-white dark:via-gray-300 dark:to-gray-500"}`}>
                🧢 FADLY UZZAKI
              </h2>
              <span className={`text-[9px] font-mono uppercase tracking-widest block font-bold ${isDark ? "text-gray-900" : "text-gray-400"}`}>
                {t("id_card.role") || "Product Designer"}
              </span>
            </div>
            <div className="text-right flex flex-col items-end justify-end">
              <span className={`text-[10px] font-mono font-bold leading-none ${isDark ? "text-gray-900" : "text-gray-300"}`}>
                1407-1995
              </span>
              <span className={`text-[8px] font-mono mt-1 uppercase leading-none ${isDark ? "text-gray-700" : "text-gray-400"}`}>
                {t("id_card.exp") || "EXP"}:{" "}
                {t("id_card.indefinite") || "INDEFINITE"}
              </span>
            </div>
          </div>
          {/* Tech grid bottom detail */}
          <div className="flex gap-[2px] mt-3 h-[2px]">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-full rounded-full ${isDark ? "bg-gray-900/40" : "bg-gray-400/30"}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

export default HolographicCard;
