import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sun,
  Moon,
  ScanEye,
  FileText,
  Printer,
  Home,
  LayoutGrid,
  FolderGit2,
  User,
  Menu,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { useRecruiterMode } from "../context/RecruiterModeContext";
import LiveClock from "./LiveClock";
import BackButton from "./BackButton";
import useScrollDirection from "../hooks/useScrollDirection";

const HoverNavLink = ({ to, label, active, accentColor = "var(--accent-blue)" }) => {
  return (
    <div className="group relative flex items-center justify-center p-0.5">
      <Link
        to={to}
        className={`relative z-10 block rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors duration-300 sm:text-xs ${
          active
            ? "font-bold text-[var(--text-primary)]"
            : "text-[var(--text-secondary)] group-hover:font-bold group-hover:text-[var(--text-primary)]"
        }`}
      >
        <span className="relative z-10 block whitespace-nowrap">{label}</span>
      </Link>
      {/* Background Hover Pill */}
      <div className="absolute inset-0 rotate-[-4deg] rounded-full bg-[var(--text-secondary)]/10 opacity-0 transition-all duration-200 group-hover:rotate-0 group-hover:opacity-100" />
      {/* Active Dot indicator */}
      {active && (
        <span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full animate-pulse z-20"
          style={{ backgroundColor: accentColor, boxShadow: `0 0 8px ${accentColor}` }}
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
  const location = useLocation();

  const hookShowNav = useScrollDirection(false);
  const showNav = showNavOverride !== undefined ? showNavOverride : hookShowNav;

  const currentPath = location.pathname;
  const currentHash = location.hash;

  // Active route checking helper
  const isRouteActive = (to) => {
    if (to.startsWith("/#")) {
      const hash = to.substring(1); // '#work'
      return currentPath === "/" && currentHash === hash;
    }
    if (to === "/") {
      return currentPath === "/" && !currentHash;
    }
    return currentPath === to || currentPath.startsWith(to + "/");
  };

  // Get active tab for mobile bottom nav highlight
  const getActiveTab = () => {
    if (currentPath === "/" && !currentHash) return "home";
    if (currentPath === "/" && currentHash === "#work") return "work";
    if (currentPath === "/side-projects" || currentPath.startsWith("/side-project")) return "projects";
    if (currentPath === "/about") return "about";
    return "";
  };

  const activeTab = getActiveTab();

  return (
    <>
      {/* STATIC GHOST NAVIGATION FOR SCRAPERS/SEO */}
      <nav aria-label="Static Navigation" className="sr-only">
        <ul>
          <li><Link to="/">{t("nav.home") || "Home"}</Link></li>
          <li><Link to="/about">{t("nav.about") || "About"}</Link></li>
          <li><Link to="/#work">{t("nav.work") || "Work"}</Link></li>
          <li><Link to="/side-projects">{t("nav.side_projects") || "Side Projects"}</Link></li>
          <li><Link to="/thoughts">Thoughts</Link></li>
          <li><Link to="/contact">{t("nav.contact") || "Contact"}</Link></li>
        </ul>
      </nav>

      {/* DESKTOP TOP BAR */}
      <div
        className={`fixed top-0 left-0 z-50 w-full transition-transform duration-300 ease-out print:hidden ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-[rgba(var(--bg-surface-rgb),0.8)] backdrop-blur-md border-b border-[var(--border-color)] px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center h-14 sm:h-16 relative">
          {/* LEFT: IDENTITY & BREADCRUMBS */}
          <div className="flex items-center gap-2 sm:gap-4 z-10 relative">
            <Link
              to="/"
              onClick={() => {
                if (currentPath === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex min-h-[44px] items-center gap-2 group shrink-0"
            >
              <span className="font-mono font-bold text-base tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors flex items-center gap-1.5">
                <span className="inline-block transition-transform duration-700 group-hover:rotate-[360deg]">
                  🧢
                </span>
                <span className="font-mono text-sm tracking-tight font-bold">Fadlyzaki</span>
              </span>
            </Link>

            {title && (
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="font-mono text-[var(--text-secondary)] opacity-30 text-xs">/</span>
                {backPath && (
                  <>
                    <BackButton
                      to={backPath}
                      label={t("case_study.case_study_back") || "Back"}
                      className="!py-0 !min-h-0"
                    />
                    <span className="font-mono text-[var(--text-secondary)] opacity-30 text-xs">/</span>
                  </>
                )}
                <span className="font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider text-[var(--text-primary)] max-w-[120px] sm:max-w-[200px] truncate">
                  {title}
                </span>
              </div>
            )}

            {/* System Status Indicator (Only on wide desktop and when no title is active) */}
            {!title && (
              <div className="hidden 2xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)]">
                <div className="relative flex h-1.5 w-1.5">
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-secondary)]">
                  {t("nav.open_to_work") || "Open to work"}
                </span>
              </div>
            )}
          </div>

          {/* CENTER: DESKTOP NAV LINKS (Visible on desktop xl+ when no title is active to prevent overlap, z-20 to ensure clickable) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap hidden xl:block z-20">
            {!title && (
              <nav className="flex items-center gap-0.5">
                <HoverNavLink to="/" label={t("nav.home") || "Home"} active={isRouteActive("/")} accentColor="var(--accent-blue)" />
                <HoverNavLink to="/about" label={t("nav.about") || "About"} active={isRouteActive("/about")} accentColor="var(--accent-amber)" />
                <HoverNavLink to="/#work" label={t("nav.work") || "Work"} active={isRouteActive("/#work")} accentColor="var(--accent-blue)" />
                <HoverNavLink to="/side-projects" label={t("nav.side_projects") || "Projects"} active={isRouteActive("/side-projects")} accentColor="var(--accent-blue)" />
                <HoverNavLink to="/thoughts" label="Thoughts" active={isRouteActive("/thoughts")} accentColor="var(--accent-amber)" />
                <HoverNavLink to="/contact" label={t("nav.contact") || "Contact"} active={isRouteActive("/contact")} accentColor="var(--accent-green)" />
              </nav>
            )}
          </div>

          {/* RIGHT: UTILITIES & CLOCK */}
          <div className="flex items-center gap-1 sm:gap-3 z-10 relative">
            <LiveClock />

            <div className="flex items-center gap-0.5 sm:gap-1.5">
              {/* CV Actions */}
              {onViewCoverLetter && (
                <button
                  onClick={onViewCoverLetter}
                  className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--text-secondary)]/10 transition-colors"
                  title="View Cover Letter"
                  aria-label="View Cover Letter"
                >
                  <FileText size={16} />
                </button>
              )}
              {onPrint && (
                <button
                  onClick={onPrint}
                  className="hidden sm:flex min-h-[40px] min-w-[40px] items-center justify-center rounded text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--text-secondary)]/10 transition-colors"
                  title="Print CV (PDF)"
                  aria-label="Print CV (PDF)"
                >
                  <Printer size={16} />
                </button>
              )}

              {/* Universal View CV Button */}
              <Link
                to="/cv"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-200 border border-[var(--accent-blue)]/40 bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/20 shadow-sm"
                title="View Resume / CV System Manifest"
              >
                <FileText size={13} />
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider">
                  {t("nav.resume") || "CV / Manifest"}
                </span>
              </Link>

              <button
                onClick={toggleRecruiterMode}
                className={`hidden xl:flex items-center gap-1.5 p-2 xl:px-3 xl:py-1.5 rounded transition-all duration-300 border ${
                  isRecruiterMode
                    ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
                    : "bg-[var(--bg-void)] text-[var(--text-secondary)] border-[var(--border-color)] hover:text-[var(--accent-blue)]"
                }`}
                title={isRecruiterMode ? t("nav.standard_view") : t("nav.recruiter_view")}
              >
                <ScanEye size={14} className={isRecruiterMode ? "animate-pulse" : ""} />
                <span className="font-mono text-[9px] uppercase tracking-wider hidden xl:inline">
                  {isRecruiterMode ? t("nav.standard_view") || "Document" : t("nav.recruiter_view") || "Terminal"}
                </span>
              </button>

              <button
                onClick={() => setIsDark(!isDark)}
                className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded text-[var(--text-secondary)] hover:text-[var(--accent-amber)] hover:bg-[var(--text-secondary)]/10 transition-colors"
                aria-label={t("nav.toggle_theme")}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button
                onClick={toggleLanguage}
                className="min-h-[40px] min-w-[40px] flex items-center justify-center font-mono text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--text-secondary)]/10 rounded transition-colors text-[10px] sm:text-xs uppercase tracking-wider font-bold"
                title={t("nav.switch_language")}
                aria-label={t("nav.switch_language")}
              >
                {language}
              </button>

              {/* Show menu button on screens < xl or when title is active to ensure full directory access */}
              <button
                onClick={onOpenMenu}
                className={`min-h-[40px] min-w-[40px] items-center justify-center rounded text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--text-secondary)]/10 transition-colors border border-[var(--border-color)] ml-1 ${
                  title ? "flex" : "flex xl:hidden"
                }`}
                title="Open Navigation Menu"
                aria-label="Open Navigation Menu"
              >
                <Menu size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE BOTTOM NAV BAR (Full-width docked, z-[90] to avoid overlays, responsive to scroll direction) */}
      <nav
        aria-label="Mobile navigation"
        className={`fixed bottom-0 left-0 right-0 z-[90] md:hidden border-t border-[var(--border-color)] transition-transform duration-300 ease-out print:hidden bg-[rgba(var(--bg-surface-rgb),0.97)] backdrop-blur-xl pb-[env(safe-area-inset-bottom,0px)] ${
          showNav ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-around h-14">
          <Link
            to="/"
            className={`relative flex flex-col items-center justify-center flex-1 h-full gap-0.5 font-mono text-[9px] uppercase tracking-wider transition-all active:scale-95 ${
              activeTab === "home"
                ? "text-[var(--accent-blue)] font-bold scale-105"
                : "text-[var(--text-secondary)] active:text-[var(--text-primary)]"
            }`}
          >
            {activeTab === "home" && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[var(--accent-blue)]" />}
            <Home size={16} />
            <span>{t("nav.home") || "Home"}</span>
          </Link>

          <Link
            to="/#work"
            className={`relative flex flex-col items-center justify-center flex-1 h-full gap-0.5 font-mono text-[9px] uppercase tracking-wider transition-all active:scale-95 ${
              activeTab === "work"
                ? "text-[var(--accent-blue)] font-bold scale-105"
                : "text-[var(--text-secondary)] active:text-[var(--text-primary)]"
            }`}
          >
            {activeTab === "work" && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[var(--accent-blue)]" />}
            <LayoutGrid size={16} />
            <span>{t("nav.work") || "Work"}</span>
          </Link>

          <Link
            to="/side-projects"
            className={`relative flex flex-col items-center justify-center flex-1 h-full gap-0.5 font-mono text-[9px] uppercase tracking-wider transition-all active:scale-95 ${
              activeTab === "projects"
                ? "text-[var(--accent-blue)] font-bold scale-105"
                : "text-[var(--text-secondary)] active:text-[var(--text-primary)]"
            }`}
          >
            {activeTab === "projects" && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[var(--accent-blue)]" />}
            <FolderGit2 size={16} />
            <span>{t("nav.side_projects") || "Projects"}</span>
          </Link>

          <Link
            to="/about"
            className={`relative flex flex-col items-center justify-center flex-1 h-full gap-0.5 font-mono text-[9px] uppercase tracking-wider transition-all active:scale-95 ${
              activeTab === "about"
                ? "text-[var(--accent-amber)] font-bold scale-105"
                : "text-[var(--text-secondary)] active:text-[var(--text-primary)]"
            }`}
          >
            {activeTab === "about" && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[var(--accent-amber)]" />}
            <User size={16} />
            <span>{t("nav.about") || "About"}</span>
          </Link>

          <button
            onClick={onOpenMenu}
            className="flex flex-col items-center justify-center flex-1 h-full gap-0.5 font-mono text-[9px] uppercase tracking-wider text-[var(--text-secondary)] active:text-[var(--text-primary)] active:scale-95 transition-all"
            aria-label={t("nav.open_menu") || "Open Menu"}
          >
            <Menu size={16} />
            <span>{t("nav.menu") || "More"}</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
