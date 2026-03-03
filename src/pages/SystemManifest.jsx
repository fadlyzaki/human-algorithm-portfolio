import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Download,
  Printer,
  Mail,
  Linkedin,
  Globe,
  MapPin,
  ExternalLink,
  CheckCircle,
  Hash,
  Terminal,
  BookOpen,
  User,
  Phone,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import SEO from "../components/SEO";
import { useLanguage } from "../context/LanguageContext";
import { WORK_CLUSTERS } from "../data/portfolioData";
import CoverLetterModal from "../components/CoverLetterModal";
import Navbar from "../components/Navbar";
import NavigationMenu from "../components/NavigationMenu";

/* --- THEME CONFIGURATION ---
   A 'High Contrast' mode designed for readability and printing.
   Less noise, more structure.
*/

const SystemManifest = () => {
  const { isDark, setIsDark } = useTheme();
  const { t, language, toggleLanguage } = useLanguage();
  const [showCoverLetter, setShowCoverLetter] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- DATA: RAW SPECS ---
  const header = {
    name: "Fadly Uzzaki",
    role: t("manifest.role"),
    location: "Jakarta, Indonesia",
    links: [
      {
        label: "linkedin.com/in/fadlyzaki",
        url: "https://www.linkedin.com/in/fadlyzaki/",
        icon: Linkedin,
      },
      {
        label: "fadlyzaki-design.vercel.app",
        url: "https://fadlyzaki-design.vercel.app/",
        icon: Globe,
      },
      {
        label: "fadly.uzzaki@gmail.com",
        url: "mailto:fadly.uzzaki@gmail.com",
        icon: Mail,
      },
    ],
  };

  const summary = t("manifest.summary_text");

  // Transform WORK_CLUSTERS data to CV format
  const experience = useMemo(
    () =>
      WORK_CLUSTERS.map((cluster) => {
        const rolestat = cluster.stats?.find((s) => s.label === "Role");
        const timelineStat = cluster.stats?.find((s) => s.label === "Timeline");
        const isId = language === "id";

        // Extract key achievements from the projects
        const metrics =
          cluster.projects
            ?.map((project) => {
              const { caseStudy } = project;
              const pTitle = isId
                ? project.title_id || project.title
                : project.title;
              const pOutcome = isId
                ? project.details_id?.outcome || project.details.outcome
                : project.details?.outcome;

              if (caseStudy?.metrics && caseStudy.metrics.length > 0) {
                // Find the most impactful metric or join them
                return `${pTitle}: ${caseStudy.metrics.map((m) => `${m.label} ${m.value}`).join(", ")}`;
              }
              return pOutcome ? `${pTitle}: ${pOutcome}` : null;
            })
            .filter(Boolean)
            .slice(0, 3) || [];

        return {
          company: cluster.company,
          role: rolestat?.value || "Product Designer",
          period: timelineStat?.value || "Ongoing",
          summary: isId
            ? cluster.miniDesc_id ||
            cluster.miniDesc ||
            cluster.hook_id ||
            cluster.hook
            : cluster.miniDesc || cluster.hook,
          metrics:
            metrics.length > 0
              ? metrics
              : [isId ? cluster.hook_id || cluster.hook : cluster.hook],
        };
      }),
    [language],
  );

  const education = [
    {
      school: t("manifest.edu_master_school"),
      degree: t("manifest.edu_master_degree"),
      year: "July 2024 - Jan 2026",
      note: t("manifest.edu_master_note"),
    },
    {
      school: t("manifest.edu_school"),
      degree: t("manifest.edu_degree"),
      year: "2014 - 2018",
      note: t("manifest.edu_note"),
    },
  ];

  // --- STYLES ---
  const themeStyles = {
    "--bg-panel": isDark ? "var(--bg-card)" : "some",
    "--accent-mono": isDark ? "some" : "some",
  };

  return (
    <div
      style={themeStyles}
      className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-mono selection:bg-black selection:text-white print:bg-white print:text-black"
    >
      <SEO
        title="Curriculum Vitae"
        description="System Manifest: Professional experience validation and skill inventory."
      />

      {/* --- NAVIGATION SYSTEM --- */}
      <div className="print:hidden">
        <Navbar
          onOpenMenu={() => setIsMenuOpen(true)}
          title="System Manifest"
          backPath="/"
          onToggleTheme={() => setIsDark(!isDark)}
          onToggleLanguage={toggleLanguage}
          onViewCoverLetter={() => setShowCoverLetter(true)}
          onPrint={() => window.print()}
          isDark={isDark}
          language={language}
        />
        <NavigationMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>

      {/* SPACER FOR FIXED HEADER & DOCUMENT SHEET */}
      <div className="h-24 md:h-32 print:hidden"></div>
      <div className="max-w-[210mm] mx-auto bg-[var(--bg-void)] md:bg-[var(--bg-panel)] md:p-12 md:shadow-2xl md:border border-[var(--border-color)] print:border-none print:shadow-none print:p-0 print:max-w-full relative z-10">
        {/* HEADER */}
        <header className="border-b-2 border-[var(--text-primary)] pb-6 mb-8 print:border-black print:pb-4 print:mb-6">
          <div className="mb-4 print:mb-2 text-center md:text-left print:text-left">
            <h1 className="text-4xl md:text-5xl font-mono uppercase tracking-tight mb-2 print:text-3xl print:mb-1 print:tracking-normal print:font-bold">
              {header.name}
            </h1>
            <h2 className="text-lg text-[var(--text-secondary)] font-mono mb-3 print:text-base print:text-black print:m-0">
              {header.role}
            </h2>
          </div>

          {/* Contact Links - Horizontal Layout with Location */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-mono text-[var(--text-secondary)] pt-4 border-t border-[var(--border-color)] print:pt-2 print:border-t-0 print:text-black print:text-xs">
            {header.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors group print:gap-1"
              >
                <link.icon size={14} className="shrink-0 opacity-60 print:hidden" />
                <span className="group-hover:underline">{link.label}</span>
              </a>
            ))}
            <div className="flex items-center gap-2 print:gap-1">
              <MapPin size={14} className="shrink-0 opacity-60 print:hidden" />
              <span>{header.location}</span>
            </div>
          </div>
        </header>

        {/* PROFILE SUMMARY */}
        <section className="mb-12 print:mb-6">
          <div className="flex items-center gap-3 mb-4 print:mb-2">
            <User size={18} className="print:hidden" />
            <h3 className="font-mono text-lg uppercase font-bold border-b border-[var(--border-color)] w-full pb-1 print:border-black print:text-base">
              {t("manifest.summary_title")}
            </h3>
          </div>
          <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base font-light print:text-black print:text-sm print:leading-normal">
            {summary}
          </p>
        </section>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] print:grid-cols-1 gap-12 print:gap-6 print:block">
          {/* MAIN COLUMN (Experience) */}
          <section className="print:mb-6">
            <div className="flex items-center gap-3 mb-6 print:mb-4">
              <Terminal size={18} className="print:hidden" />
              <h3 className="font-mono text-lg uppercase font-bold border-b border-[var(--border-color)] w-full pb-1 print:border-black print:text-base">
                {t("manifest.exp_title")}
              </h3>
            </div>

            <div className="space-y-10 print:space-y-6">
              {experience.map((job, idx) => (
                <div key={idx} className="group print:break-inside-avoid">
                  <div className="flex justify-between items-baseline mb-2 print:mb-1">
                    <h4 className="text-xl font-bold print:text-lg">{job.company}</h4>
                    <span className="font-mono text-sm text-[var(--text-secondary)] print:text-black print:text-sm print:font-semibold">
                      {job.period}
                    </span>
                  </div>
                  <div className="text-[var(--accent-mono)] font-mono text-sm mb-3 print:mb-1 print:text-black print:font-bold print:italic">
                    {job.role}
                  </div>
                  <p className="text-[var(--text-secondary)] italic mb-4 text-sm print:mb-2 print:text-black print:not-italic print:leading-snug">
                    "{job.summary}"
                  </p>

                  <ul className="space-y-2 print:space-y-1 print:list-disc print:pl-5 print:ml-2">
                    {job.metrics.map((metric, mIdx) => (
                      <li
                        key={mIdx}
                        className="flex items-start gap-3 text-sm leading-relaxed print:block print:text-sm print:text-black print:leading-snug"
                      >
                        <CheckCircle
                          size={14}
                          className="mt-1 shrink-0 text-[var(--text-secondary)] opacity-50 print:hidden"
                        />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* SIDEBAR (Skills & Education) */}
          <aside className="space-y-10 print:space-y-6">
            {/* SKILLS */}
            <section className="print:break-inside-avoid">
              <div className="flex items-center gap-3 mb-6 print:mb-2">
                <Hash size={18} className="print:hidden" />
                <h3 className="font-mono text-lg uppercase font-bold border-b border-[var(--border-color)] w-full pb-1 print:border-black print:text-base">
                  {t("manifest.skills_title")}
                </h3>
              </div>

              <div className="space-y-6 print:space-y-2">
                <div className="print:flex print:gap-2 print:items-start text-sm print:text-sm">
                  <h5 className="font-mono text-xs text-[var(--text-secondary)] uppercase mb-2 print:text-black print:font-bold print:m-0 print:whitespace-nowrap print:text-sm print:capitalize">
                    {t("manifest.skills_design")}:
                  </h5>
                  <div className="flex flex-wrap gap-2 print:gap-0 print:inline-block">
                    {[
                      "Product Design",
                      "UI/UX",
                      "User Research",
                      "Design Systems",
                      "Prototyping",
                      "Wireframing",
                      "Information Architecture",
                    ].map((s, i, arr) => (
                      <span
                        key={s}
                        className="bg-[var(--border-color)] px-2 py-1 text-xs font-mono rounded-sm print:bg-transparent print:px-0 print:py-0 print:text-black print:text-sm"
                      >
                        {s}
                        {i < arr.length - 1 ? (
                          <span className="hidden print:inline">, </span>
                        ) : (
                          ""
                        )}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="print:flex print:gap-2 print:items-start text-sm print:text-sm">
                  <h5 className="font-mono text-xs text-[var(--text-secondary)] uppercase mb-2 print:text-black print:font-bold print:m-0 print:whitespace-nowrap print:text-sm print:capitalize">
                    {t("manifest.skills_tools")}:
                  </h5>
                  <div className="flex flex-wrap gap-2 print:gap-0 print:inline-block">
                    {[
                      "Figma",
                      "Sketch",
                      "HTML/CSS/JS",
                      "React",
                      "Git",
                      "Jira",
                      "Mixpanel",
                      "Agile/Scrum",
                    ].map((s, i, arr) => (
                      <span
                        key={s}
                        className="border border-[var(--border-color)] px-2 py-1 text-xs font-mono rounded-sm text-[var(--text-secondary)] print:border-none print:px-0 print:py-0 print:text-black print:text-sm"
                      >
                        {s}
                        {i < arr.length - 1 ? (
                          <span className="hidden print:inline">, </span>
                        ) : (
                          ""
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* EDUCATION */}
            <section className="print:break-inside-avoid">
              <div className="flex items-center gap-3 mb-6 print:mb-2 mt-4 print:mt-2">
                <BookOpen size={18} className="print:hidden" />
                <h3 className="font-mono text-lg uppercase font-bold border-b border-[var(--border-color)] w-full pb-1 print:border-black print:text-base">
                  {t("manifest.edu_title")}
                </h3>
              </div>

              <div className="print:flex print:gap-12 print:justify-between">
                {education.map((edu, idx) => (
                  <div key={idx} className="mb-4 print:mb-1 print:flex-1">
                    <div className="font-bold text-sm print:text-sm">{edu.school}</div>
                    <div className="text-sm text-[var(--text-secondary)] print:text-black print:text-sm">
                      {edu.degree}
                    </div>
                    <div className="font-mono text-xs text-[var(--accent-mono)] mt-1 print:text-black print:text-sm print:font-semibold">
                      {edu.year}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* QR / FOOTER AREA FOR PRINT */}
            <div className="pt-12 mt-12 border-t border-[var(--border-color)] print:block hidden">
              <p className="font-mono text-[10px] text-[var(--text-secondary)]">
                {t("manifest.footer_gen")}
                <br />
                // Fadly Uzzaki 🧢 © 2025-2026
              </p>
            </div>
          </aside>
        </div>
      </div>

      <CoverLetterModal
        isOpen={showCoverLetter}
        onClose={() => setShowCoverLetter(false)}
      />
    </div>
  );
};

export default SystemManifest;
