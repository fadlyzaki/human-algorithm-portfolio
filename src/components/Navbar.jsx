import React, { useState } from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import {
  Sun,
  Moon,
  ScanEye,
  Grid,
  FileText,
  Printer,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { useRecruiterMode } from "../context/RecruiterModeContext";
import LiveClock from "./LiveClock";

import BackButton from "./BackButton";
import useScrollDirection from "../hooks/useScrollDirection";

// Shared layoutId ensures the underline "glides" between active items
const HoverNavLink = ({ to, label }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative flex items-center justify-center p-0.5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={to}
        className={`relative z-10 px-4 py-1.5 font-mono text-[11px] sm:text-xs uppercase tracking-widest transition-colors duration-300 rounded-full block ${isHovered ? 'text-[var(--bg-void)] font-bold' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
      >
        <span className="relative z-10 block whitespace-nowrap">{label}</span>
      </Link>
      {isHovered && (
        <motion.div
          layoutId="navbar-pill-bg"
          className="absolute inset-0 bg-[var(--text-primary)] rounded-full shadow-md"
          initial={{ rotate: -5 }}
          animate={{ rotate: 0 }}
          exit={{ rotate: 5 }}
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 35,
          }}
        />
      )}
    </div>
  );
};

const Navbar = ({
  onOpenMenu,
  title,
  backPath,
  onViewCoverLetter,
  onPrint,
  showNavOverride,
}) => {
  const { isDark, setIsDark } = useTheme();
  const { t, language, toggleLanguage } = useLanguage();
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();

  const hookShowNav = useScrollDirection(false);
  const showNav = showNavOverride !== undefined ? showNavOverride : hookShowNav;

  return (
    <>
      {/* STATIC GHOST NAVIGATION FOR SCRAPERS/SEO */}
      <nav aria-label="Static Navigation" className="sr-only">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">{t("nav.about") || "About"}</Link></li>
          <li><Link to="/#work">{t("nav.work") || "Work"}</Link></li>
          <li><Link to="/#side-projects">Side Projects</Link></li>
          <li><Link to="/contact">{t("nav.contact") || "Contact"}</Link></li>
        </ul>
      </nav>

      {/* DESKTOP TOP BAR */}
      <motion.div
        initial={false}
        animate={{ y: showNav ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="bg-[var(--bg-surface)]/80 backdrop-blur-md border-b border-[var(--border-color)] px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
          {/* LEFT: IDENTITY or BACK BUTTON */}
          <div className="flex items-center gap-2 sm:gap-6 z-10 relative">
            {title ? (
              <BackButton
                to={backPath}
                label="Back"
              />
            ) : (
              <div className="flex items-center gap-6">
                <Link
                  to="/"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="flex items-center gap-3 group"
                >
                  {/* Logo / Glitch Text */}
                  <span className="font-mono font-bold text-lg tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors flex items-center gap-2">
                    <motion.span
                      whileHover={{ 
                        rotate: 360,
                        transition: { duration: 0.8, ease: "easeInOut" }
                      }}
                      className="inline-block"
                    >
                      🧢
                    </motion.span>
                    Fadlyzaki
                  </span>
                </Link>

                {/* System Status Indicator */}
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)]">
                  <div className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                    Open to Work
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* CENTER: PROCESS LINKS (Home) or TITLE (Subpage) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap hidden sm:block">
            {title ? (
              <h1 className="font-mono text-[10px] sm:text-sm uppercase tracking-widest text-[var(--text-primary)] font-bold">
                {title}
              </h1>
            ) : (
              <nav className="hidden md:flex items-center gap-1">
                <HoverNavLink to="/about" label={t("nav.about")} />
                <HoverNavLink to="/#work" label={t("nav.work")} />
                <HoverNavLink to="/#side-projects" label="Projects" />
                <HoverNavLink to="/contact" label={t("nav.contact")} />
              </nav>
            )}
          </div>

          {/* RIGHT: UTILITIES & CLOCK */}
          <div className="flex items-center gap-2 sm:gap-4 z-10 relative">
            {/* Live Clock */}
            <LiveClock />

            <div className="flex items-center gap-1 sm:gap-2">
              {/* CV Actions */}
              {onViewCoverLetter && (
                <button
                  onClick={onViewCoverLetter}
                  className="p-1.5 sm:p-2 rounded text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--text-secondary)]/10 transition-colors"
                  title="View Cover Letter"
                >
                  <FileText size={16} />
                </button>
              )}
              {onPrint && (
                <button
                  onClick={onPrint}
                  className="hidden sm:flex p-1.5 sm:p-2 rounded text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--text-secondary)]/10 transition-colors"
                  title="Print CV (PDF)"
                >
                  <Printer size={16} />
                </button>
              )}

              <button
                onClick={toggleRecruiterMode}
                className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded transition-all duration-300 border ${
                  isRecruiterMode 
                    ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/30" 
                    : "bg-[var(--bg-void)] text-[var(--text-secondary)] border-[var(--border-color)] hover:text-[var(--accent-blue)]"
                }`}
                title="Toggle Recruiter Mode"
              >
                <ScanEye size={14} className={isRecruiterMode ? "animate-pulse" : ""} />
                <span className="font-mono text-[10px] uppercase tracking-wider">
                  {isRecruiterMode ? "Recruiter" : "Terminal"}
                </span>
              </button>

              <button
                onClick={() => setIsDark(!isDark)}
                className="p-1.5 sm:p-2 rounded text-[var(--text-secondary)] hover:text-[var(--accent-amber)] hover:bg-[var(--text-secondary)]/10 transition-colors"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button
                onClick={toggleLanguage}
                className="px-1.5 py-1 sm:px-2 sm:py-1 font-mono text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--text-secondary)]/10 rounded transition-colors text-[10px] sm:text-xs uppercase tracking-widest"
                title="Switch Language"
              >
                {language}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* MOBILE CONTROL DECK (Floating Bottom) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden animate-in slide-in-from-bottom-10 fade-in duration-700">
        <div className="bg-[var(--bg-surface)]/90 backdrop-blur-xl border border-[var(--border-color)] rounded-full px-4 py-2.5 shadow-2xl flex items-center gap-3">
          {/* Quick: Work */}
          <Link
            to="/#work"
            className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors px-2 py-1"
          >
            Work
          </Link>

          <div className="w-px h-5 bg-[var(--border-color)]"></div>

          {/* Menu */}
          <button
            onClick={onOpenMenu}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1"
            aria-label="Open Menu"
          >
            <Grid size={18} />
          </button>

          <div className="w-px h-5 bg-[var(--border-color)]"></div>

          {/* Quick: Contact */}
          <Link
            to="/contact"
            className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors px-2 py-1"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
