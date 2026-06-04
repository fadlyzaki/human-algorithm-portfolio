import React from "react";

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

const HoverNavLink = ({ to, label }) => {
  return (
    <div className="group relative flex items-center justify-center p-0.5">
      <Link
        to={to}
        className="relative z-10 block rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--text-secondary)] transition-colors duration-300 group-hover:font-bold group-hover:text-[var(--bg-void)] sm:text-xs"
      >
        <span className="relative z-10 block whitespace-nowrap">{label}</span>
      </Link>
      <div className="absolute inset-0 rotate-[-4deg] rounded-full bg-[var(--text-primary)] opacity-0 shadow-md transition-all duration-200 group-hover:rotate-0 group-hover:opacity-100" />
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
          <li><Link to="/">{t("nav.home") || "Home"}</Link></li>
          <li><Link to="/about">{t("nav.about") || "About"}</Link></li>
          <li><Link to="/#work">{t("nav.work") || "Work"}</Link></li>
          <li><Link to="/#side-projects">{t("nav.side_projects") || "Side Projects"}</Link></li>
          <li><Link to="/contact">{t("nav.contact") || "Contact"}</Link></li>
        </ul>
      </nav>

      {/* DESKTOP TOP BAR */}
      <div
        className={`fixed top-0 left-0 z-50 w-full transition-transform duration-300 ease-out ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="bg-[var(--bg-surface)]/80 backdrop-blur-md border-b border-[var(--border-color)] px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
          {/* LEFT: IDENTITY or BACK BUTTON */}
          <div className="flex items-center gap-2 sm:gap-6 z-10 relative">
            {title ? (
              <BackButton
                to={backPath}
                label={t("case_study.case_study_back") || "Back"}
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
                    <span className="inline-block transition-transform duration-700 group-hover:rotate-[360deg]">
                      🧢
                    </span>
                    Fadlyzaki
                  </span>
                </Link>

                {/* System Status Indicator */}
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)]">
                  <div className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                    {t("nav.open_to_work")}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* CENTER: PROCESS LINKS (Home) or TITLE (Subpage) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap hidden sm:block">
            {title ? (
              <h1 className="font-mono text-[10px] sm:text-sm uppercase tracking-wider text-[var(--text-primary)] font-bold">
                {title}
              </h1>
            ) : (
              <nav className="hidden md:flex items-center gap-1">
                <HoverNavLink to="/about" label={t("nav.about")} />
                <HoverNavLink to="/#work" label={t("nav.work")} />
                <HoverNavLink to="/#side-projects" label={t("nav.side_projects")} />
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

              {/* Universal View CV Button */}
              <Link
                to="/cv"
                className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded transition-all duration-300 border ${
                  isRecruiterMode 
                    ? "bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] border-[var(--accent-blue)]/30 hover:bg-[var(--accent-blue)]/20 shadow-[0_0_10px_var(--accent-blue)] shadow-[var(--accent-blue)]/10" 
                    : "bg-[var(--bg-void)] text-[var(--text-secondary)] border-[var(--border-color)] hover:text-[var(--text-primary)]"
                }`}
                title="View Resume / CV"
              >
                <FileText size={14} />
                <span className="font-mono text-[10px] uppercase tracking-wider">
                  {t("nav.resume")}
                </span>
              </Link>

              <button
                onClick={toggleRecruiterMode}
                className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded transition-all duration-300 border ${
                  isRecruiterMode 
                    ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/30" 
                    : "bg-[var(--bg-void)] text-[var(--text-secondary)] border-[var(--border-color)] hover:text-[var(--accent-blue)]"
                }`}
                title={isRecruiterMode ? t("nav.standard_view") : t("nav.recruiter_view")}
              >
                <ScanEye size={14} className={isRecruiterMode ? "animate-pulse" : ""} />
                <span className="font-mono text-[10px] uppercase tracking-wider">
                  {isRecruiterMode ? t("nav.standard_view") : t("nav.recruiter_view")}
                </span>
              </button>

              <button
                onClick={() => setIsDark(!isDark)}
                className="p-1.5 sm:p-2 rounded text-[var(--text-secondary)] hover:text-[var(--accent-amber)] hover:bg-[var(--text-secondary)]/10 transition-colors"
                aria-label={t("nav.toggle_theme")}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button
                onClick={toggleLanguage}
                className="px-1.5 py-1 sm:px-2 sm:py-1 font-mono text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--text-secondary)]/10 rounded transition-colors text-[10px] sm:text-xs uppercase tracking-wider"
                title={t("nav.switch_language")}
              >
                {language}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE CONTROL DECK (Floating Bottom) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden animate-in slide-in-from-bottom-10 fade-in duration-700">
        <div className="bg-[var(--bg-surface)]/90 backdrop-blur-xl border border-[var(--border-color)] rounded-full px-4 py-2.5 shadow-2xl flex items-center gap-3">
          {/* Quick: Work */}
          <Link
            to="/#work"
            className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors px-2 py-1"
          >
            {t("nav.work")}
          </Link>

          <div className="w-px h-5 bg-[var(--border-color)]"></div>

          {/* Menu */}
          <button
            onClick={onOpenMenu}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center -my-2"
            aria-label={t("nav.open_menu")}
          >
            <Grid size={18} />
          </button>

          <div className="w-px h-5 bg-[var(--border-color)]"></div>

          {/* Quick: Contact */}
          <Link
            to="/contact"
            className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors px-2 py-1"
          >
            {t("nav.contact")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
