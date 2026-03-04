import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "lucide-react";
import PixelImage from "./PixelImage";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const DraggablePhoto = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const [index, setIndex] = useState(0);
  const [designVariant] = useState(() => {
    const variants = [
      "industrial",
      "cyberpunk",
      "swiss",
      "glassmorphism",
      "retro",
      "neo-brutalism",
      "holographic",
    ];
    return variants[Math.floor(Math.random() * variants.length)];
  });

  const items = [
    { type: "identity", src: "/hero-id-v2.jpg" },
    {
      type: "image",
      src: "/hero-running.jpg",
      alt: "Motion as Medicine: Physical & Mental Recalibration",
    },
    {
      type: "image",
      src: "/hero-lumina-new.jpg",
      alt: "Lumina: Symptoms showing, but not knowing",
    },
    {
      type: "image",
      src: "/hero-stoqo.jpg",
      alt: "Farewell STOQO: Good memories interrupted by COVID",
    },
  ];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const currentItem = items[index];

  // --- VARIANTS RENDERERS ---

  const RenderIndustrial = () => (
    <div className={`w-full h-full border-[1px] relative group overflow-hidden rounded-xl flex flex-col shadow-xl ${isDark ? "bg-white border-black/20" : "bg-black border-white/20"}`}>
      {/* Punch Hole */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-2 bg-[#222] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] z-30 flex items-center justify-center">
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
      <div className={`h-12 border-t flex items-center justify-between px-4 relative overflow-hidden ${isDark ? "bg-white border-black/5" : "bg-[#222] border-white/5"}`}>
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

  const RenderCyberpunk = () => (
    <div className={`w-full h-full border-2 relative group overflow-hidden rounded-xl flex flex-col shadow-2xl ${isDark ? "bg-white border-black/50" : "bg-black border-white/20"}`}>
      {/* Grid Bg */}
      <div className={`absolute inset-0 bg-[size:20px_20px] pointer-events-none ${isDark ? "bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)]" : "bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]"}`}></div>

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

  const RenderSwiss = () => (
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
                WebkitTextStroke: `1px ${isDark ? "#000" : "#fff"}`,
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

  const RenderGlassmorphism = () => (
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

  const RenderRetro = () => (
    <div className={`w-full h-full border-4 border-t-8 border-b-8 relative group overflow-hidden rounded-md flex flex-col p-1 ${isDark ? "bg-white border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" : "bg-black border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"}`}>
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
        <div className={`w-24 h-28 border-2 z-10 p-1 ${isDark ? "bg-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "bg-black border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"}`}>
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

  const RenderNeoBrutalism = () => (
    <div className={`w-full h-full border-[6px] relative group overflow-hidden rounded-none flex flex-col p-2 ${isDark ? "bg-white border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]" : "bg-black border-white shadow-[12px_12px_0_0px_rgba(255,255,255,1)]"}`}>
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
        <div className={`w-[120px] h-[160px] border-[4px] z-10 p-1 mb-4 rotate-2 group-hover:-rotate-2 transition-transform duration-300 ${isDark ? "border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" : "border-white bg-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"}`}>
          <PixelImage src={currentItem.src} alt="Fadly" />
        </div>
        <div className={`w-full border-4 p-2 ${isDark ? "bg-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "bg-black border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"}`}>
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

  const RenderHolographic = () => (
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

  const renderCard = () => {
    const VariantMap = {
      cyberpunk: RenderCyberpunk,
      swiss: RenderSwiss,
      glassmorphism: RenderGlassmorphism,
      retro: RenderRetro,
      "neo-brutalism": RenderNeoBrutalism,
      holographic: RenderHolographic,
      industrial: RenderIndustrial,
    };

    // Fallback to industrial if variant not found
    const SelectedVariant = VariantMap[designVariant] || VariantMap.industrial;
    return <SelectedVariant />;
  };

  return (
    <div className="relative inline-block w-full mb-10">
      {" "}
      {/* Wrapper with extra bottom space */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.15}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        whileHover={{ scale: 1.02, rotate: 0, cursor: "grab" }}
        whileTap={{ scale: 0.98, cursor: "grabbing" }}
        initial={{ rotate: 2 }}
        animate={{ rotate: 0 }}
        whileDrag={{ scale: 1.05, rotate: 0, zIndex: 10 }}
        onClick={handleNext}
        className="md:block relative cursor-grab active:cursor-grabbing w-full aspect-[3/4.2] select-none group"
      >
        {/* Lanyard Clip Construction */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-4 h-20 z-0 pointer-events-none">
          {/* Strap Loop */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-[300px] border-[12px] border-[var(--bg-card)] dark:border-zinc-400 rounded-[50%] -z-10 shadow-xl"></div>

          {/* Metal Clip Body */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-10 bg-gradient-to-b from-zinc-300 to-zinc-500 rounded-md shadow-md flex flex-col items-center justify-end pb-1 border border-zinc-600 z-10">
            {/* Clip Spring */}
            <div className="w-4 h-3 bg-zinc-700 rounded-sm mb-1 opacity-80"></div>
          </div>

          {/* Connection to Card */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-4 bg-zinc-800/80 rounded-full z-20"></div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={designVariant + index} // Key includes design to trigger transition on switch
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="w-full h-full"
          >
            {currentItem.type === "identity" ? (
              renderCard()
            ) : (
              /* Generic Card Back / Alt Image */
              <div className="w-full h-full border border-[var(--border-color)] overflow-hidden relative select-none rounded-xl bg-black group-inner shadow-2xl">
                <img
                  src={currentItem.src}
                  alt={currentItem.alt}
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="bg-black/60 backdrop-blur-md px-2 py-1 text-[9px] font-mono text-white uppercase border border-white/10 pt-1.5">
                    REF_IMG_{index}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 backdrop-blur-md px-3 py-2 text-xs font-mono text-white leading-tight border border-white/10">
                    {currentItem.alt}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DraggablePhoto;
