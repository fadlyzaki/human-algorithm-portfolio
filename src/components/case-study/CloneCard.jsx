import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Lock, BookOpen } from "lucide-react";


import AiryDiagram from "../AiryDiagram";

/**
 * High-fidelity 3D Flip Card component.
 * Inspired by Framer University's immersive interactions.
 */
function CloneCard({ study, isId }) {
  const repeatedText = Array(30).fill(study.fullText).join(" ");
  // We re-check the original mock project or the study object


  return (
    <div className="relative w-[292px] h-[376px] [perspective:1500px]">
      <motion.div
        className="w-full h-full relative cursor-pointer [transform-style:preserve-3d]"
        initial="initial"
        whileHover="hover"
      >
        {/* CLICK TO READ TAG */}
        <motion.div 
          className="absolute rounded-[8px] flex items-center justify-end z-[3]"
          style={{ 
            backgroundColor: 'var(--bg-card)', 
            transformOrigin: '0% 100% 0',
            width: '265px',
            height: '318px',
            top: 'calc(50% - 159px)',
            left: 'calc(50% - 132.5px)'
          }}
          variants={{
            initial: { rotateZ: 0 },
            hover: { rotateZ: 4 }
          }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        >
          <div className="absolute right-[-21px] top-[21%] flex items-center justify-center" style={{ transform: 'translateY(-50%) rotate(-90deg)' }}>
            <span className="text-[var(--text-muted)] text-[12px] font-mono font-semibold tracking-wider whitespace-nowrap uppercase">
              {isId ? "KLIK UNTUK BACA" : "CLICK TO READ"}
            </span>
          </div>
        </motion.div>

        {/* FRONT SIDE */}
        <motion.div 
          className="absolute inset-0 rounded-[8px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] flex flex-col items-start p-[30px] z-[4]"
          style={{ backgroundColor: study.frontBg, transformOrigin: '0% 100% 0' }}
          variants={{
            initial: { rotateY: -1, z: 1 },
            hover: { rotateY: -35, z: 1 }
          }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        >
          {/* Floating Stickers */}
          {study.stickers.map((sticker, i) => (
            <div key={i} className={`absolute flex items-center justify-center p-3 bg-white shadow-xl pointer-events-none rounded-[14px] ${sticker.className}`}>
              {sticker.src && sticker.src.startsWith("airy:") ? (
                <div className="w-full h-full overflow-hidden flex items-center justify-center">
                  <AiryDiagram type={sticker.src.split(":")[1]} className="scale-125" />
                </div>
              ) : (
                <img src={sticker.src} alt={sticker.alt} className="w-full h-auto object-contain drop-shadow-sm" />
              )}
            </div>
          ))}

          <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-[8px] pointer-events-none" />

          {/* Top-Left Category Area */}
          <div className="flex items-center space-x-1.5 relative z-10 mb-[12px] h-[13px]">
            {study.locked && (
              <Lock className="w-[10px] h-[10px]" style={{ color: study.logoColor }} />
            )}
            <span className="text-[10px] font-mono tracking-wider font-bold uppercase" style={{ color: study.logoColor }}>
              {study.tag}
            </span>
          </div>

          {/* Main Title Area */}
          <div className="flex flex-col flex-1 relative z-10 w-full overflow-hidden">
             <div className="flex flex-wrap gap-x-1 mb-4 pr-16 line-clamp-6">
                {study.titleFragments.map((frag, i) => (
                   <span key={i} style={{ color: frag.color }} className="text-[20px] sm:text-[22px] font-semibold tracking-tight leading-[1.3em]">
                     {frag.text}
                   </span>
                ))}
             </div>
          </div>

          {/* Bottom-Left Brand Area */}
          <div className="flex items-center relative z-10 mt-auto pt-4">
            {study.logo && (
               <img src={study.logo} alt="Brand Logo" className="h-7 w-auto object-contain drop-shadow-sm" />
            )}
          </div>
        </motion.div>

        {/* BACK SIDE */}
        <div 
          className="absolute inset-0 rounded-[8px] overflow-hidden z-[2]"
          style={{ backgroundColor: study.backBg, transform: 'translateZ(-1px)', transformOrigin: '0% 100% 0' }}
        >
           <motion.div 
             className="w-[292px] p-[20px] flex flex-col gap-4 text-justify text-[12px] font-mono tracking-tight font-semibold leading-[1.6em]"
             style={{ color: "#7c8991" }}
             animate={{ y: ["0%", "-50%"] }}
             transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
           >
              <div>{repeatedText}</div>
              <div>{repeatedText}</div>
           </motion.div>
        </div>
        <Link to={study.route} className="absolute inset-0 z-[10]">
          <span className="sr-only">View {study.tag} Case Study</span>
        </Link>
      </motion.div>
    </div>
  );
}

export default CloneCard;
