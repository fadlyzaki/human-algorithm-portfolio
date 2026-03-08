import React from "react";
import { User } from "lucide-react";
import PixelImage from "../PixelImage";

const NeoBrutalismCard = ({ t, isDark, currentItem }) => (
    <div className={`w-full h-full border-[6px] relative group overflow-hidden rounded-none flex flex-col p-2 ${isDark ? "bg-white border-black shadow-[12px_12px_0px_0px_rgba(var(--bg-void-rgb), 1)]" : "bg-black border-white shadow-[12px_12px_0_0px_rgba(var(--bg-surface-rgb), 1)]"}`}>
      {/* Header */}
      <div className={`h-16 flex items-center justify-between border-b-4 pb-2 mb-2 ${isDark ? "border-black" : "border-white"}`}>
        <span className={`font-mono text-2xl font-black uppercase tracking-tighter leading-none ${isDark ? "text-black" : "text-white"}`}>
          ID_CARD
          <br />
          <span className="text-[10px] tracking-normal font-bold">
            {t("id_card.human") || "HUMAN BY DESIGN"}
          </span>
        </span>
        <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center ${isDark ? "border-black bg-white" : "border-white bg-black"}`}>
          <User size={16} className={isDark ? "text-black" : "text-white"} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow relative flex flex-col items-center">
        <div className={`w-[120px] h-[160px] border-[4px] z-10 p-1 mb-4 rotate-2 group-hover:-rotate-2 transition-transform duration-300 ${isDark ? "border-black bg-white shadow-[8px_8px_0px_0px_rgba(var(--bg-void-rgb), 1)]" : "border-white bg-black shadow-[8px_8px_0px_0px_rgba(var(--bg-surface-rgb), 1)]"}`}>
          <PixelImage src={currentItem.src} alt="Fadly" />
        </div>
        <div className={`w-full border-4 p-2 ${isDark ? "bg-white border-black shadow-[4px_4px_0px_0px_rgba(var(--bg-void-rgb), 1)]" : "bg-black border-white shadow-[4px_4px_0px_0px_rgba(var(--bg-surface-rgb), 1)]"}`}>
          <h2 className={`text-2xl font-black tracking-tighter leading-none mb-1 uppercase whitespace-nowrap ${isDark ? "text-black" : "text-white"}`}>
            🧢 FADLY UZZAKI
          </h2>
          <span className={`text-[10px] leading-tight font-mono font-bold block uppercase ${isDark ? "text-black" : "text-white"}`}>
            {t("id_card.role") || "Product Designer // Systems Thinker"}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className={`h-12 border-t-4 flex items-center justify-between mt-auto pt-2 ${isDark ? "border-black" : "border-white"}`}>
        <div className="flex flex-col">
          <span className={`text-[11px] font-mono font-black uppercase leading-tight ${isDark ? "text-black" : "text-white"}`}>
            {t("id_card.id_no") || "ID_NO"}: 1407-1995
          </span>
          <span className={`text-[10px] font-mono font-bold uppercase leading-tight ${isDark ? "text-black" : "text-white"}`}>
            {t("id_card.exp") || "EXP"}:{" "}
            {t("id_card.indefinite") || "INDEFINITE"}
          </span>
        </div>
        <div className={`px-2 py-1 border-2 text-[10px] font-black font-mono uppercase ${isDark ? "bg-black text-white border-black" : "bg-white text-black border-white"}`}>
          {t("id_card.access_level") || "ROOT_ACCESS"}
        </div>
      </div>
    </div>
  );

export default NeoBrutalismCard;
