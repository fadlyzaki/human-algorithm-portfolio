import React from "react";
import { User } from "lucide-react";
import PixelImage from "../PixelImage";

const RetroCard = ({ t, isDark, currentItem }) => (
    <div className={`w-full h-full border-4 border-t-8 border-b-8 relative group overflow-hidden rounded-md flex flex-col p-1 ${isDark ? "bg-white border-black shadow-[8px_8px_0px_0px_rgba(var(--bg-void-rgb), 1)]" : "bg-black border-white shadow-[8px_8px_0px_0px_rgba(var(--bg-surface-rgb), 1)]"}`}>
      {/* Header */}
      <div className={`h-16 flex items-center justify-center border-b-2 border-dashed mb-2 ${isDark ? "border-black" : "border-white"}`}>
        <span className={`font-mono text-base font-bold uppercase tracking-widest leading-none text-center ${isDark ? "text-black" : "text-white"}`}>
          * IDENTITY *<br />
          <span className="text-[10px] tracking-normal">
            {t("id_card.human") || "HUMAN BY DESIGN"}
          </span>
        </span>
      </div>

      {/* Content */}
      <div className="flex-grow p-2 relative flex gap-4 items-start">
        <div className={`w-24 h-28 border-2 z-10 p-1 ${isDark ? "bg-white border-black shadow-[4px_4px_0px_0px_rgba(var(--bg-void-rgb), 1)]" : "bg-black border-white shadow-[4px_4px_0px_0px_rgba(var(--bg-surface-rgb), 1)]"}`}>
          <PixelImage src={currentItem.src} alt="Fadly" />
        </div>
        <div className="flex-1 space-y-2 pt-2">
          <div>
            <label className={`text-[9px] font-mono block uppercase underline ${isDark ? "text-black" : "text-white"}`}>
              {t("id_card.id_no") || "ID_NO"}
            </label>
            <span className={`text-sm font-mono font-bold ${isDark ? "text-black" : "text-white"}`}>
              1407-1995
            </span>
          </div>
          <div>
            <label className={`text-[9px] font-mono block uppercase underline ${isDark ? "text-black" : "text-white"}`}>
              {t("id_card.exp") || "EXP"}
            </label>
            <span className={`text-[10px] font-mono font-bold uppercase ${isDark ? "text-black" : "text-white"}`}>
              {t("id_card.indefinite") || "INDEFINITE"}
            </span>
          </div>
          <div>
            <label className={`text-[9px] font-mono block uppercase underline ${isDark ? "text-black" : "text-white"}`}>
              {t("company.role") || "ROLE"}
            </label>
            <span className={`text-[10px] leading-tight font-mono font-bold block ${isDark ? "text-black" : "text-white"}`}>
              {t("id_card.role") || "Product Designer // Systems Thinker"}
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`h-14 flex items-center justify-between px-4 mt-auto ${isDark ? "bg-black" : "bg-white"}`}>
        <h2 className={`text-base font-black font-mono tracking-tighter whitespace-nowrap ${isDark ? "text-white" : "text-black"}`}>
          FADLY UZZAKI 🧢
        </h2>
        <div className={`px-2 py-1 border text-[10px] font-bold font-mono ${isDark ? "bg-white border-black text-black" : "bg-black border-white text-white"}`}>
          {t("id_card.access_level") || "ROOT_ACCESS"}
        </div>
      </div>
    </div>
  );

export default RetroCard;
