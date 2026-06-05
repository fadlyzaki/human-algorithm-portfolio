import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Globe, ScanEye } from "lucide-react";
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-[var(--bg-void)]/95 flex flex-col justify-center items-center overflow-hidden animate-in fade-in duration-150"
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
        <div className="font-mono text-[10px] md:text-xs text-[var(--accent-amber)] uppercase tracking-wider mb-6 md:mb-8">
          {t("nav.system_directory")}
        </div>
        
        <nav className="flex flex-col gap-6">
          {links.map((link, idx) => (
            <div key={idx}>
              <Link
                to={link.href}
                onClick={onClose}
                className={`font-mono text-xl sm:text-2xl md:text-4xl transition-all inline-block ${
                  isActive(link.href)
                    ? "text-[var(--accent-blue)] scale-105 font-bold"
                    : "text-[var(--text-primary)] hover:text-[var(--accent-blue)] hover:scale-105"
                }`}
              >
                {link.label}
              </Link>
            </div>
          ))}
          
          {/* Mobile Language Toggle */}
          <button
            onClick={() => {
              toggleLanguage();
              onClose();
            }}
            className="flex items-center justify-center gap-2 font-mono text-base md:text-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] uppercase tracking-wider mt-2 md:mt-4 transition-colors"
          >
            <Globe size={18} className="md:w-5 md:h-5" />
            <span>{language === "en" ? "Bahasa Indonesia" : "English"}</span>
          </button>

          {/* Mobile Recruiter Toggle */}
          <button
            onClick={() => {
              toggleRecruiterMode();
              onClose();
            }}
            className={`flex items-center justify-center gap-2 font-mono text-base md:text-xl uppercase tracking-wider mt-1 md:mt-2 transition-colors ${
              isRecruiterMode ? "text-emerald-500" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            <ScanEye size={18} className="md:w-5 md:h-5" />
            <span>{isRecruiterMode ? "Document Mode" : "Terminal Mode"}</span>
          </button>
        </nav>

        <div className="w-16 h-px bg-[var(--border-color)] mx-auto my-6 md:my-8 origin-center" />

        <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
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
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
