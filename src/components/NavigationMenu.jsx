import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Globe, ScanEye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getNavLinks, getMetaLinks } from "../data/navigationData";
import { useLanguage } from "../context/LanguageContext";
import { useRecruiterMode } from "../context/RecruiterModeContext";

const NavigationMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { t, language, toggleLanguage } = useLanguage();
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();

  const links = getNavLinks(t);
  const metaLinks = getMetaLinks(t);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const isActive = (path) => {
    if (path.startsWith("#")) return false; // Hash links handled by scroll or manual check
    return location.pathname === path;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[var(--bg-void)]/95 flex flex-col justify-center items-center overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Main Navigation"
        >
          <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-4 text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors"
        aria-label="Close Menu"
      >
        <X size={28} className="md:w-8 md:h-8" />
      </button>
      <div className="space-y-6 md:space-y-8 text-center px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="font-mono text-[10px] md:text-xs text-[var(--accent-amber)] uppercase tracking-widest mb-6 md:mb-8"
        >
          {t("nav.system_directory")}
        </motion.div>
        
        <motion.nav 
          className="flex flex-col gap-6"
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
             open: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
             closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } }
          }}
        >
          {links.map((link, idx) => (
            <motion.div 
               key={idx}
               variants={{
                 open: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 400, damping: 30 } },
                 closed: { opacity: 0, y: 20, scale: 0.95 }
               }}
            >
              <Link
                to={link.href.startsWith("/") ? link.href : "/" + link.href}
                onClick={onClose}
                className={`font-mono text-xl sm:text-2xl md:text-4xl transition-all inline-block ${
                  isActive(link.href)
                    ? "text-[var(--accent-blue)] scale-105 font-bold"
                    : "text-[var(--text-primary)] hover:text-[var(--accent-blue)] hover:scale-105"
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          
          {/* Mobile Language Toggle */}
          <motion.button
            variants={{
              open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
              closed: { opacity: 0, y: 20 }
            }}
            onClick={() => {
              toggleLanguage();
              onClose();
            }}
            className="flex items-center justify-center gap-2 font-mono text-base md:text-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] uppercase tracking-widest mt-2 md:mt-4 transition-colors"
          >
            <Globe size={18} className="md:w-5 md:h-5" />
            <span>{language === "en" ? "Bahasa Indonesia" : "English"}</span>
          </motion.button>

          {/* Mobile Recruiter Toggle */}
          <motion.button
            variants={{
              open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
              closed: { opacity: 0, y: 20 }
            }}
            onClick={() => {
              toggleRecruiterMode();
              onClose();
            }}
            className={`flex items-center justify-center gap-2 font-mono text-base md:text-xl uppercase tracking-widest mt-1 md:mt-2 transition-colors ${
              isRecruiterMode ? "text-emerald-500" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            <ScanEye size={18} className="md:w-5 md:h-5" />
            <span>{isRecruiterMode ? "Document Mode" : "Terminal Mode"}</span>
          </motion.button>
        </motion.nav>

        <motion.div 
           initial={{ opacity: 0, scaleX: 0 }}
           animate={{ opacity: 1, scaleX: 1 }}
           transition={{ delay: 0.3, duration: 0.5 }}
           className="w-16 h-px bg-[var(--border-color)] mx-auto my-6 md:my-8 origin-center"
        ></motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4, duration: 0.5 }}
           className="flex gap-4 md:gap-6 justify-center flex-wrap"
        >
          {metaLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-xs md:text-sm uppercase transition-colors"
            >
              <link.icon size={14} className="md:w-4 md:h-4" />
              {link.label}
            </Link>
          ))}
        </motion.div>
      </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
