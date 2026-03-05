import React from "react";
import { User } from "lucide-react";
import PixelImage from "../PixelImage";

const GlassmorphismCard = ({ t, isDark, currentItem }) => (
    <div className={`w-full h-full backdrop-blur-2xl border relative group overflow-hidden rounded-xl flex flex-col ${isDark ? "bg-white/70 border-white/40 shadow-xl" : "bg-black/70 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"}`}>
      {/* Glassmorphism Sheen/Noise */}
      <div className={`absolute inset-0 bg-gradient-to-br opacity-70 pointer-events-none z-20 ${isDark ? "from-white/40 via-transparent to-black/5" : "from-white/10 via-transparent to-transparent"}`}></div>

      {/* Floating Header badge over image */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-30 px-1">
        <div className={`flex flex-col backdrop-blur-md px-2 py-1 rounded border shadow-sm ${isDark ? "bg-white/40 border-white/40" : "bg-black/40 border-white/10"}`}>
          <span className={`font-mono text-[9px] font-bold tracking-[0.1em] ${isDark ? "text-black/90" : "text-white/90"}`}>
            {t("id_card.access_level") || "ROOT_ACCESS"}
          </span>
        </div>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center backdrop-blur-md shadow-sm ${isDark ? "border-white/40 bg-white/40" : "border-white/20 bg-black/40"}`}>
          <User size={14} className={isDark ? "text-black/80" : "text-white/80"} />
        </div>
      </div>

      {/* Floating Photo Frame */}
      <div className="w-full mt-14 flex items-center justify-center relative z-10 p-2">
        {/* Beautiful frosted frame for photo */}
        <div className={`w-28 h-36 p-1.5 rounded-2xl backdrop-blur-xl border-t border-l shadow-xl relative overflow-hidden group/frame transition-transform hover:scale-105 duration-300 ${isDark ? "bg-white/30 border-white/60 border-r-black/5 border-b-black/5" : "bg-black/40 border-white/20 border-r-black/40 border-b-black/40"}`}>
          <div className="w-full h-full rounded-xl overflow-hidden relative shadow-inner">
            <PixelImage src={currentItem.src} alt="Fadly" />
            <div className={`absolute inset-0 border rounded-xl pointer-events-none ${isDark ? "border-black/10" : "border-white/10"}`}></div>
          </div>
        </div>
      </div>

      {/* Bottom Half: Content */}
      <div className="flex-grow px-5 pb-5 relative z-30 flex flex-col justify-end">
        <div className="space-y-4">
          <div className="flex flex-col">
            <h2 className={`text-3xl font-black leading-[0.9] tracking-tighter whitespace-nowrap ${isDark ? "text-black drop-shadow-sm" : "text-white drop-shadow-none"}`}>
              UZZAKI
              <br />
              FADLY 🧢
            </h2>
            <span className={`text-[9px] font-mono uppercase tracking-widest mt-2 font-bold ${isDark ? "text-black/80" : "text-white/90"}`}>
              {t("id_card.role") || "Product Designer // Systems Thinker"}
            </span>
          </div>

          <div className={`h-[1px] w-full bg-gradient-to-r ${isDark ? "from-black/20 via-black/10 to-transparent" : "from-white/20 via-white/10 to-transparent"}`}></div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className={`text-[8px] font-mono block font-bold uppercase ${isDark ? "text-black/50" : "text-white/40"}`}>
                {t("id_card.id_no") || "ID_NO"}
              </label>
              <span className={`text-xs font-mono font-black ${isDark ? "text-black/90" : "text-white/90"}`}>
                1407-1995
              </span>
            </div>
            <div>
              <label className={`text-[8px] font-mono block font-bold uppercase ${isDark ? "text-black/50" : "text-white/40"}`}>
                {t("id_card.exp") || "EXP"}
              </label>
              <span className={`text-[10px] font-mono font-black uppercase ${isDark ? "text-black/90" : "text-white/90"}`}>
                {t("id_card.indefinite") || "INDEFINITE"}
              </span>
            </div>
            <div className="">
              <label className={`text-[8px] font-mono block font-bold uppercase ${isDark ? "text-black/50" : "text-white/40"}`}>
                {t("company.role") || "TYPE"}
              </label>
              <span className={`text-[9px] font-mono font-bold leading-tight block uppercase ${isDark ? "text-black/90" : "text-white/90"}`}>
                {t("id_card.human") || "HUMAN BY DESIGN"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default GlassmorphismCard;
