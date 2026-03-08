import React from "react";
import { User } from "lucide-react";
import PixelImage from "../PixelImage";

const CyberpunkCard = ({ t, isDark, currentItem }) => (
    <div className={`w-full h-full border-2 relative group overflow-hidden rounded-xl flex flex-col shadow-2xl ${isDark ? "bg-white border-black/50" : "bg-black border-white/20"}`}>
      {/* Grid Bg */}
      <div className={`absolute inset-0 bg-[size:20px_20px] pointer-events-none ${isDark ? "bg-[linear-gradient(rgba(var(--bg-void-rgb), 0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--bg-void-rgb), 0.05)_1px,transparent_1px)]" : "bg-[linear-gradient(rgba(var(--bg-surface-rgb), 0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--bg-surface-rgb), 0.05)_1px,transparent_1px)]"}`}></div>

      {/* Header */}
      <div className={`h-20 flex items-center justify-between px-4 border-b backdrop-blur-sm z-10 ${isDark ? "bg-black/5 border-black/10" : "bg-white/5 border-white/10"}`}>
        <div className="flex flex-col">
          <span className={`font-mono text-xs font-bold animate-pulse uppercase ${isDark ? "text-black" : "text-white"}`}>
            {t("id_card.access_level") || "ROOT_ACCESS"}
          </span>
          <span className={`font-mono text-[10px] ${isDark ? "text-black/70" : "text-white/70"}`}>
            {t("id_card.human") || "HUMAN BY DESIGN"}
          </span>
        </div>
        <div className={`w-8 h-8 border rotate-45 flex items-center justify-center ${isDark ? "border-black/40" : "border-white/40"}`}>
          <div className={`w-6 h-6 -rotate-45 ${isDark ? "bg-black/10" : "bg-white/10"}`}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow p-4 relative z-10">
        <div className="flex gap-4">
          <div className={`w-24 h-32 border relative overflow-hidden bg-gray-900 ${isDark ? "border-black/20" : "border-white/20"}`}>
            <PixelImage src={currentItem.src} alt="Fadly" />
            <div className={`absolute inset-0 mix-blend-overlay ${isDark ? "bg-black/5" : "bg-white/5"}`}></div>
          </div>
          <div className="flex-1 space-y-2">
            <div>
              <label className={`text-[9px] font-mono block ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                {t("id_card.identity") || "IDENTITY"}
              </label>
              <h2 className={`text-lg font-bold font-mono tracking-tighter leading-tight ${isDark ? "text-black" : "text-white"}`}>
                UZZAKI,
                <br />
                FADLY 🧢
              </h2>
            </div>
            <div>
              <label className={`text-[9px] font-mono block ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                {t("company.role") || "ROLE"}
              </label>
              <span className={`text-xs font-mono ${isDark ? "text-gray-600" : "text-gray-300"}`}>
                {t("id_card.role") || "Product Designer // Systems Thinker"}
              </span>
            </div>
            <div className="pt-2">
              <span className={`text-[8px] font-mono block mb-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                {t("id_card.exp")}: {t("id_card.indefinite")}
              </span>
              <div className={`h-1 w-full rounded-full overflow-hidden ${isDark ? "bg-gray-300" : "bg-gray-800"}`}>
                <div className={`h-full w-[100%] animate-pulse ${isDark ? "bg-black" : "bg-white"}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`h-10 border-t flex items-center justify-between px-4 z-10 ${isDark ? "bg-black/10 border-black/10" : "bg-white/10 border-white/10"}`}>
        <span className={`text-[10px] font-mono ${isDark ? "text-gray-600" : "text-gray-400"}`}>
          {t("id_card.id_no")}: 1407-1995
        </span>
        <div className="flex gap-1">
          <div className={`w-2 h-2 rounded-full animate-ping ${isDark ? "bg-black" : "bg-white"}`}></div>
          <span className={`text-[8px] font-mono ${isDark ? "text-gray-700" : "text-gray-300"}`}>
            {t("id_card.online") || "ONLINE"}
          </span>
        </div>
      </div>
    </div>
  );

export default CyberpunkCard;
