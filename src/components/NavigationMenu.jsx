import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Globe, ScanEye, Sun, Moon, Mail, FileText, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useRecruiterMode } from "../context/RecruiterModeContext";
import { useTheme } from "../context/ThemeContext";

const NavigationMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { t, language, toggleLanguage } = useLanguage();
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();
  const { isDark, setIsDark } = useTheme();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-[rgba(var(--bg-void-rgb),0.97)] flex flex-col justify-center items-center overflow-y-auto px-6 py-12"
      style={{ animation: 'navMenuFadeIn 200ms ease-out both' }}
      role="dialog"
      aria-modal="true"
      aria-label="Main Navigation Menu"
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-[var(--text-secondary)]/5 hover:bg-[var(--accent-red)]/10"
        aria-label="Close Menu"
      >
        <X size={24} />
      </button>

      <div className="w-full max-w-md mx-auto space-y-10 my-auto">
        {/* HEADER */}
        <div className="text-center space-y-2">
          <div className="font-mono text-[10px] text-[var(--accent-amber)] uppercase tracking-widest font-bold">
            {t("nav.system_directory") || "SYSTEM DIRECTORY"}
          </div>
          <div className="h-[1px] w-12 bg-[var(--border-color)] mx-auto" />
        </div>

        {/* PRIMARY DIRECTORY LINKS */}
        <nav className="flex flex-col gap-4 text-center">
          <Link
            to="/thoughts"
            onClick={onClose}
            className={`font-mono text-xl sm:text-2xl py-2 transition-all duration-300 block ${
              isActive("/thoughts")
                ? "text-[var(--accent-amber)] font-bold scale-105"
                : "text-[var(--text-primary)] hover:text-[var(--accent-amber)] hover:scale-105"
            }`}
          >
            THOUGHTS (JOURNAL)
          </Link>
          <Link
            to="/contact"
            onClick={onClose}
            className={`font-mono text-xl sm:text-2xl py-2 transition-all duration-300 block ${
              isActive("/contact")
                ? "text-[var(--accent-green)] font-bold scale-105"
                : "text-[var(--text-primary)] hover:text-[var(--accent-green)] hover:scale-105"
            }`}
          >
            {t("nav.contact") || "CONTACT"}
          </Link>
          <Link
            to="/cv"
            onClick={onClose}
            className={`font-mono text-xl sm:text-2xl py-2 transition-all duration-300 block ${
              isActive("/cv")
                ? "text-[var(--accent-blue)] font-bold scale-105"
                : "text-[var(--text-primary)] hover:text-[var(--accent-blue)] hover:scale-105"
            }`}
          >
            {t("nav.resume") || "RESUME / CV"}
          </Link>
        </nav>

        <div className="h-[1px] w-full bg-[var(--border-color)]" />

        {/* QUICK SETTINGS SECTION */}
        <div className="space-y-4">
          <div className="font-mono text-[9px] text-[var(--text-secondary)] uppercase tracking-wider text-center">
            {t("nav.system_preferences") || "SYSTEM PREFERENCES"}
          </div>
          
          <div className="grid grid-cols-1 gap-2.5">
            {/* Language Switcher */}
            <button
              onClick={() => {
                toggleLanguage();
                onClose();
              }}
              className="flex items-center justify-between w-full p-3.5 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-blue)] transition-colors min-h-[44px]"
            >
              <span className="flex items-center gap-2">
                <Globe size={14} className="text-[var(--accent-blue)]" />
                <span>{t("nav.language") || "Language"}</span>
              </span>
              <span className="font-bold text-[10px] px-2 py-0.5 rounded bg-[var(--border-color)] text-[var(--text-primary)]">
                {language === "en" ? "EN" : "ID"}
              </span>
            </button>

            {/* Recruiter Mode Switcher */}
            <button
              onClick={() => {
                toggleRecruiterMode();
                onClose();
              }}
              className={`flex items-center justify-between w-full p-3.5 bg-[var(--bg-card)] border rounded-lg font-mono text-xs uppercase tracking-wider transition-colors min-h-[44px] ${
                isRecruiterMode
                  ? "border-emerald-500/30 text-emerald-500 bg-emerald-500/[0.02] hover:bg-emerald-500/[0.05]"
                  : "border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-blue)]"
              }`}
            >
              <span className="flex items-center gap-2">
                <ScanEye size={14} className={isRecruiterMode ? "animate-pulse text-emerald-500" : "text-[var(--text-secondary)]"} />
                <span>{t("nav.recruiter_mode") || "Recruiter Mode"}</span>
              </span>
              <span className="font-bold text-[10px]">
                {isRecruiterMode ? "TERMINAL" : "STANDARD"}
              </span>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={() => {
                setIsDark(!isDark);
                onClose();
              }}
              className="flex items-center justify-between w-full p-3.5 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-amber)] transition-colors min-h-[44px]"
            >
              <span className="flex items-center gap-2">
                {isDark ? (
                  <Sun size={14} className="text-[var(--accent-amber)]" />
                ) : (
                  <Moon size={14} className="text-indigo-400" />
                )}
                <span>{t("nav.theme") || "Theme"}</span>
              </span>
              <span className="font-bold text-[10px]">
                {isDark ? "DARK" : "LIGHT"}
              </span>
            </button>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[var(--border-color)]" />

        {/* EXTERNAL CONNECTIONS */}
        <div className="flex gap-6 justify-center flex-wrap">
          <a
            href="https://linkedin.com/in/fadlyzaki"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-[10px] uppercase tracking-wider transition-colors py-2 min-h-[44px]"
          >
            <span>LinkedIn</span>
            <ArrowUpRight size={12} className="opacity-50" />
          </a>
          <a
            href="https://github.com/fadlyzaki"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-[10px] uppercase tracking-wider transition-colors py-2 min-h-[44px]"
          >
            <span>GitHub</span>
            <ArrowUpRight size={12} className="opacity-50" />
          </a>
          <a
            href="mailto:fadly.uzzaki@gmail.com"
            className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-[10px] uppercase tracking-wider transition-colors py-2 min-h-[44px]"
          >
            <Mail size={12} className="opacity-70" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
