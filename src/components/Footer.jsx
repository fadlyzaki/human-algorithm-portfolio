import React, { useRef, useState, useEffect } from "react";
import {
  ArrowUpRight,
  Heart,
  Home,
  Briefcase,
  Rocket,
  User,
  Palette,
  Mail,
  Linkedin,
  Instagram,
  Dribbble,
  Github,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import FrequencyVisualizer from "./FrequencyVisualizer";
import TerminalHandshake from "./TerminalHandshake";
import { SYSTEM_CONFIG } from "../config/constants";

/**
 * FooterTooltipLink — Pill-shaped tooltip with icon + CTA text.
 * Inspired by footer-tooltip.learnframer.site
 */
const FooterTooltipLink = ({
  to,
  href,
  children,
  tooltip,
  icon: Icon,
  external = false,
}) => {
  const [show, setShow] = useState(false);
  const timeoutRef = useRef(null);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setShow(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setShow(false), 100);
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const linkClass =
    "relative text-sm hover:text-[var(--text-primary)] transition-colors duration-200 cursor-pointer";

  const tooltipEl = (
    <span
      className={`absolute left-1/2 bottom-full mb-3 flex items-center gap-2 px-3 py-2 rounded-full whitespace-nowrap
                bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900
                shadow-xl shadow-black/25 dark:shadow-black/10
                transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] pointer-events-none z-50
                ${show
          ? "opacity-100 -translate-x-1/2 translate-y-0 scale-100"
          : "opacity-0 -translate-x-1/2 translate-y-3 scale-90"
        }`}
    >
      {Icon && (
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/15 dark:bg-zinc-900/15 shrink-0">
          <Icon size={11} />
        </span>
      )}
      <span className="text-[11px] font-mono uppercase tracking-wider font-medium">
        {tooltip}
      </span>
    </span>
  );

  if (external || href) {
    return (
      <a
        href={href || to}
        target="_blank"
        rel="noreferrer"
        className={linkClass}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {tooltipEl}
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className={linkClass}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {tooltipEl}
      {children}
    </Link>
  );
};

const Footer = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const themeStyles = {
    "--bg-footer": "transparent",
  };

  return (
    <footer
      style={themeStyles}
      className="w-full pt-16 pb-6 px-6 md:px-12 bg-[var(--bg-footer)] text-[var(--text-primary)] font-sans transition-colors duration-500 relative overflow-hidden"
    >
      {/* 0. FREQUENCY VISUALIZER BACKGROUND */}
      <div className="absolute bottom-0 left-0 right-0 z-0 opacity-40 pointer-events-none">
        <FrequencyVisualizer />
      </div>

      <div className="relative z-10">
        {/* 1. MAIN HEADLINE (Editorial Style) */}
        <div className="max-w-7xl mx-auto mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic leading-tight mb-8">
            {t("footer.title")} <br />
            <span className="text-[var(--text-secondary)] not-italic font-light">
              {t("footer.subtitle")}
            </span>
          </h2>

          <TerminalHandshake />
        </div>

        {/* 2. CLUSTER NAVIGATION */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-24 border-t border-[var(--text-secondary)]/20 pt-12">
          {/* COL 1: SITEMAP */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">
              {t("footer.index")}
            </h4>
            <FooterTooltipLink to="/" icon={Home} tooltip={t("nav.ttp_start")}>
              {t("nav.home")}
            </FooterTooltipLink>
            <FooterTooltipLink
              to="/#work"
              icon={Briefcase}
              tooltip={t("nav.ttp_work")}
            >
              {t("nav.work")}
            </FooterTooltipLink>
            <FooterTooltipLink
              to="/about"
              icon={User}
              tooltip={t("nav.ttp_about")}
            >
              {t("nav.about")}
            </FooterTooltipLink>
            <FooterTooltipLink
              to="/side-projects"
              icon={Rocket}
              tooltip={t("nav.ttp_projects")}
            >
              {t("nav.side_projects")}
            </FooterTooltipLink>
            <FooterTooltipLink
              to="/thoughts"
              icon={Briefcase}
              tooltip={t("nav.ttp_thoughts")}
            >
              {t("nav.notes")}
            </FooterTooltipLink>
            <FooterTooltipLink
              to="/design-system"
              icon={Palette}
              tooltip={t("nav.ttp_design")}
            >
              {t("nav.design_system")}
            </FooterTooltipLink>
            <FooterTooltipLink to="/contact" icon={Mail} tooltip={t("nav.ttp_contact")}>
              {t("nav.contact")}
            </FooterTooltipLink>
          </div>

          {/* COL 2: SOCIALS */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">
              {t("footer.connect")}
            </h4>
            <FooterTooltipLink
              href="https://www.linkedin.com/in/fadlyzaki/"
              external
              icon={Linkedin}
              tooltip={t("nav.ttp_linkedin")}
            >
              LinkedIn
            </FooterTooltipLink>
            <FooterTooltipLink
              href="https://www.instagram.com/fadlyzaki"
              external
              icon={Instagram}
              tooltip={t("nav.ttp_instagram")}
            >
              Instagram
            </FooterTooltipLink>
            <FooterTooltipLink
              href="https://dribbble.com/fadlyzaki"
              external
              icon={Dribbble}
              tooltip={t("nav.ttp_dribbble")}
            >
              Dribbble
            </FooterTooltipLink>
            <FooterTooltipLink
              href="https://github.com/fadlyzaki/"
              external
              icon={Github}
              tooltip={t("nav.ttp_github")}
            >
              GitHub
            </FooterTooltipLink>
          </div>

          {/* COL 3: CONTEXT */}
          <div className="hidden md:flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">
              {t("footer.location")}
            </h4>
            <span className="text-[var(--text-secondary)] text-sm">
              Jakarta, Indonesia
            </span>
            <span className="text-[var(--text-secondary)] text-sm">
              GMT+7 / WIB
            </span>
          </div>

          {/* COL 4: META */}
          <div className="hidden md:flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">
              {t("footer.colophon")}
            </h4>
            <span className="text-[var(--text-secondary)] text-sm leading-relaxed whitespace-pre-line">
              {t("footer.colophon_desc")}
            </span>
          </div>
        </div>

        {/* PEAK-END RULE: A satisfying closure action */}
        <div className="max-w-7xl mx-auto mb-16 flex justify-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex flex-col items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
          >
            <div className="w-px h-12 bg-[var(--text-secondary)]/30 group-hover:bg-[var(--text-primary)] transition-colors duration-300"></div>
            <span className="font-mono text-[10px] uppercase tracking-widest">
              {t("footer.return") || "Return to Surface"}
            </span>
          </button>
        </div>

        {/* 3. SIGNATURE */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end md:items-center text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
          <div>
            © {year} Fadly Uzzaki.{" "}
            <span className="opacity-50">{t("footer.rights")}</span>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-pulse" />
              Neural-Enhanced Environment
            </div>
            <div className="opacity-30">|</div>
            <div className="flex items-center gap-2">
              Human-Algorithm <Heart size={10} className="fill-current text-red-500" />{" "}
              {SYSTEM_CONFIG.VERSION}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
