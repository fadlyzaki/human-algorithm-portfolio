import React from "react";
import { User } from "lucide-react";
import PixelImage from "../PixelImage";

const SwissCard = ({ t, isDark, currentItem }) => (
    <div className={`w-full h-full border relative group overflow-hidden rounded-md flex flex-col shadow-2xl ${isDark ? "bg-white border-black/10" : "bg-black border-white/10"}`}>
      {/* Bold Header */}
      <div className={`h-32 p-4 flex flex-col justify-between ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
        <div className="flex justify-between items-start">
          <span className="font-bold text-2xl tracking-tighter leading-none">
            ID.
            <br />
            CARD
          </span>
          <div className={`w-4 h-4 rounded-full ${isDark ? "bg-white" : "bg-black"}`}></div>
        </div>
        <span className="font-mono text-xs opacity-80 uppercase">
          {t("id_card.human") || "Human By Design"}
        </span>
      </div>

      {/* Content */}
      <div className={`flex-grow p-4 relative ${isDark ? "bg-white" : "bg-black"}`}>
        <div className={`absolute -top-12 right-4 w-24 h-32 border-4 shadow-lg z-10 ${isDark ? "bg-gray-200 border-white" : "bg-gray-800 border-black"}`}>
          <PixelImage src={currentItem.src} alt="Fadly" />
        </div>

        <div className="mt-8 space-y-4">
          <div>
            <h2 className={`text-3xl font-black tracking-tighter leading-none ${isDark ? "text-black" : "text-white"}`}>
              UZZAKI
            </h2>
            <h2
              className={`text-3xl font-black tracking-tighter leading-none whitespace-nowrap`}
              style={{
                WebkitTextStroke: `1px ${isDark ? "var(--bg-void)" : "var(--bg-void)"}`,
                WebkitTextFillColor: "transparent",
              }}
            >
              FADLY 🧢
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="space-y-3">
              <div>
                <label className={`font-bold text-xs block mb-1 ${isDark ? "text-black" : "text-white"}`}>
                  {t("id_card.id_no") || "ID NO"}
                </label>
                <span className={`font-mono text-sm ${isDark ? "text-black" : "text-white"}`}>
                  1407-1995
                </span>
              </div>
              <div>
                <label className={`font-bold text-xs block mb-1 ${isDark ? "text-black" : "text-white"}`}>
                  {t("id_card.exp") || "EXP"}
                </label>
                <span className={`font-mono text-sm uppercase ${isDark ? "text-black" : "text-white"}`}>
                  {t("id_card.indefinite") || "INDEFINITE"}
                </span>
              </div>
            </div>
            <div>
              <label className={`font-bold text-xs block mb-1 ${isDark ? "text-black" : "text-white"}`}>
                {t("company.role") || "Role"}
              </label>
              <span className={`font-mono text-sm leading-tight block ${isDark ? "text-black" : "text-white"}`}>
                {t("id_card.role") || "Product Designer // Systems Thinker"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default SwissCard;
