import React, { useState } from "react";
import {
  BookOpen,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
  Sparkles,
} from "lucide-react";
import SEO from "../components/SEO";
import CoverLetterModal from "../components/CoverLetterModal";
import Navbar from "../components/Navbar";
import NavigationMenu from "../components/NavigationMenu";
import { RESUME_PDF_PATH, resumeData } from "../data/resumeData";
import { useLanguage } from "../context/LanguageContext";

const contactMailto =
  "mailto:fadly.uzzaki@gmail.com?subject=Product%20Design%20Opportunity%20-%20Fadly%20Uzzaki";

const getProfileLink = (label) =>
  resumeData.links.find((link) => link.label === label)?.href || "#";

const SectionHeading = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-3 mb-4 print:mb-2">
    <Icon size={18} className="text-[var(--accent-blue)] print:hidden" />
    <h2 className="font-mono text-sm sm:text-base uppercase tracking-[0.14em] font-bold border-b border-[var(--border-color)] w-full pb-2 print:border-black print:text-sm print:tracking-normal">
      {children}
    </h2>
  </div>
);

const ActionLink = ({ href, icon: Icon, children, download, target = "_blank" }) => (
  <a
    href={href}
    download={download}
    target={target}
    rel={target === "_blank" ? "noreferrer" : undefined}
    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--text-primary)] transition-colors hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)]"
  >
    <Icon size={15} />
    <span>{children}</span>
  </a>
);

const PrintButton = ({ label }) => (
  <button
    type="button"
    onClick={() => window.print()}
    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--text-primary)] transition-colors hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)]"
  >
    <Printer size={15} />
    <span>{label}</span>
  </button>
);

const BulletList = ({ items }) => (
  <ul className="space-y-2 print:list-disc print:pl-5 print:space-y-1">
    {items.map((item) => (
      <li
        key={item}
        className="flex gap-3 text-sm leading-relaxed text-[var(--text-secondary)] print:block print:text-black print:leading-snug"
      >
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-blue)] print:hidden" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ChipList = ({ items }) => (
  <div className="flex flex-wrap gap-2 print:block">
    {items.map((item, index) => (
      <span
        key={item}
        className="inline-flex rounded-md border border-[var(--border-color)] bg-[var(--bg-card)] px-2.5 py-1.5 font-mono text-[11px] text-[var(--text-secondary)] print:border-0 print:bg-transparent print:p-0 print:text-black print:text-sm"
      >
        {item}
        {index < items.length - 1 && (
          <span className="hidden print:inline">, </span>
        )}
      </span>
    ))}
  </div>
);

const SystemManifest = () => {
  const { t } = useLanguage();
  const [showCoverLetter, setShowCoverLetter] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resumeData.name,
    jobTitle: "Product Designer",
    email: resumeData.email,
    telephone: resumeData.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "Indonesia",
    },
    url: "https://fadlyzaki-design.vercel.app/cv",
    sameAs: resumeData.links.map((link) => link.href),
    knowsAbout: resumeData.keywords,
  };

  return (
    <div className="min-h-[100dvh] bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-black selection:text-white print:bg-white print:text-black">
      <SEO
        title={t("manifest.seo_title")}
        description={t("manifest.seo_desc")}
        schema={schema}
      />

      <div className="print:hidden">
        <Navbar
          onOpenMenu={() => setIsMenuOpen(true)}
          title={t("manifest.nav_title")}
          backPath="/"
          onViewCoverLetter={() => setShowCoverLetter(true)}
          onPrint={() => window.print()}
        />
        <NavigationMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>

      <div className="h-24 md:h-32 print:hidden" />
      <main className="relative z-10 mx-auto max-w-[960px] px-4 pb-20 print:max-w-full print:p-0">
        <article className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] p-5 shadow-2xl sm:p-8 md:p-10 print:border-0 print:bg-white print:p-0 print:shadow-none">
          <header className="border-b-2 border-[var(--text-primary)] pb-6 print:border-black print:pb-4">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-[var(--border-color)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-secondary)] print:hidden">
                  <FileText size={13} />
                  <span>{t("manifest.pdf_source")}: {resumeData.updated}</span>
                </div>
                <h1 className="font-mono text-4xl font-black uppercase tracking-normal sm:text-5xl print:text-3xl">
                  {resumeData.name}
                </h1>
                <p className="mt-2 text-base font-semibold text-[var(--text-secondary)] print:text-black">
                  {resumeData.headline}
                </p>
              </div>

              <div className="grid gap-2 text-sm text-[var(--text-secondary)] print:text-black">
                <a href={contactMailto} className="flex items-center gap-2 hover:text-[var(--accent-blue)] print:block">
                  <Mail size={15} className="print:hidden" />
                  {resumeData.email}
                </a>
                <a href={`tel:${resumeData.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-[var(--accent-blue)] print:block">
                  <Phone size={15} className="print:hidden" />
                  {resumeData.phone}
                </a>
                <span className="flex items-center gap-2 print:block">
                  <MapPin size={15} className="print:hidden" />
                  {resumeData.location}
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--text-secondary)] print:mt-3 print:text-black print:text-xs">
              {resumeData.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[var(--accent-blue)] print:inline print:text-black"
                >
                  <ExternalLink size={13} className="print:hidden" />
                  {link.value}
                </a>
              ))}
            </div>
          </header>

          <section className="my-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-void)] p-4 print:hidden">
            <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
              <Sparkles size={14} />
              <span>{t("manifest.recruiter_pack")}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <ActionLink href={RESUME_PDF_PATH} icon={Download} download>
                {t("manifest.download_pdf")}
              </ActionLink>
              <PrintButton label={t("manifest.print_short")} />
              <ActionLink href={contactMailto} icon={Mail} target="_self">
                {t("manifest.email")}
              </ActionLink>
              <ActionLink href={getProfileLink("LinkedIn")} icon={Linkedin}>
                LinkedIn
              </ActionLink>
              <ActionLink href={getProfileLink("GitHub")} icon={Github}>
                GitHub
              </ActionLink>
              <ActionLink href={getProfileLink("Portfolio")} icon={Globe}>
                {t("manifest.portfolio")}
              </ActionLink>
            </div>
          </section>

          <section className="my-8 print:my-5">
            <SectionHeading icon={Sparkles}>{t("manifest.summary_title")}</SectionHeading>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] print:text-black print:leading-snug">
              {resumeData.summary}
            </p>
          </section>

          <section className="my-8 print:my-5">
            <SectionHeading icon={ExternalLink}>
              {t("manifest.portfolio_evidence")}
            </SectionHeading>
            <div className="grid gap-4 md:grid-cols-2 print:block">
              {resumeData.portfolioEvidence.map((item) => (
                <div
                  key={item.claim}
                  className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-void)] p-4 print:mb-2 print:border-0 print:bg-white print:p-0"
                >
                  <h3 className="font-bold leading-snug">{item.claim}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)] print:text-black print:leading-snug">
                    {item.evidence}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 print:mt-1 print:block">
                    {item.links.map((link, index) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-card)] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--text-primary)] transition-colors hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] print:border-0 print:bg-white print:p-0 print:text-xs print:normal-case print:tracking-normal"
                      >
                        <ExternalLink size={12} className="print:hidden" />
                        {link.label}
                        {index < item.links.length - 1 && (
                          <span className="hidden print:inline">, </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="my-8 print:my-5">
            <SectionHeading icon={BriefcaseBusiness}>
              {t("manifest.exp_title")}
            </SectionHeading>
            <div className="space-y-8 print:space-y-5">
              {resumeData.experience.map((job) => (
                <div key={`${job.company}-${job.period}`} className="print:break-inside-avoid">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-xl font-bold print:text-base">
                      {job.company} | {job.role}
                    </h3>
                    <span className="font-mono text-xs font-semibold text-[var(--text-secondary)] print:text-black">
                      {job.period}
                    </span>
                  </div>
                  <p className="mb-3 mt-1 font-mono text-xs text-[var(--text-secondary)] print:mb-2 print:text-black">
                    {job.context}
                  </p>
                  <BulletList items={job.bullets} />
                </div>
              ))}
            </div>
          </section>

          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] print:block">
            <section className="print:my-5">
              <SectionHeading icon={FileText}>{t("manifest.public_case_studies")}</SectionHeading>
              <div className="space-y-4 print:space-y-2">
                {resumeData.caseStudies.map((study) => (
                  <a
                    key={study.title}
                    href={study.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-lg border border-[var(--border-color)] p-4 transition-colors hover:border-[var(--accent-blue)] print:border-0 print:p-0"
                  >
                    <h3 className="font-bold text-[var(--text-primary)] print:text-black">
                      {study.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)] print:text-black print:leading-snug">
                      {study.description}
                    </p>
                  </a>
                ))}
              </div>
            </section>

            <aside className="space-y-8 print:space-y-5">
              <section>
                <SectionHeading icon={Sparkles}>{t("manifest.core_product_design_skills")}</SectionHeading>
                <ChipList items={resumeData.coreSkills} />
              </section>

              <section>
                <SectionHeading icon={FileText}>{t("manifest.tools_technical_skills")}</SectionHeading>
                <ChipList items={resumeData.tools} />
              </section>
            </aside>
          </div>

          <section className="my-8 print:my-5">
            <SectionHeading icon={Globe}>{t("manifest.side_projects_experiments")}</SectionHeading>
            <div className="grid gap-4 md:grid-cols-2 print:block">
              {resumeData.sideProjects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-lg border border-[var(--border-color)] p-4 print:border-0 print:p-0 print:mb-2"
                >
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)] print:text-black print:leading-snug">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[var(--text-secondary)] print:text-black">
              {t("manifest.additional_concepts")}: {resumeData.additionalConcepts}
            </p>
          </section>

          <div className="grid gap-8 lg:grid-cols-2 print:block">
            <section className="print:my-5">
              <SectionHeading icon={BookOpen}>{t("manifest.edu_title")}</SectionHeading>
              <div className="space-y-4 print:space-y-2">
                {resumeData.education.map((item) => (
                  <div key={item.school} className="print:break-inside-avoid">
                    <h3 className="font-bold">{item.school}</h3>
                    <p className="text-sm text-[var(--text-secondary)] print:text-black">
                      {item.degree} | {item.period}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)] print:text-black print:leading-snug">
                      {item.focus}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="print:my-5">
              <SectionHeading icon={Sparkles}>{t("manifest.achievements")}</SectionHeading>
              <BulletList items={resumeData.achievements} />
            </section>
          </div>

          <section className="my-8 print:my-5">
            <SectionHeading icon={FileText}>
              {t("manifest.certifications_credentials")}
            </SectionHeading>
            <BulletList items={resumeData.certifications} />
          </section>

          <section className="mt-8 print:mt-5">
            <SectionHeading icon={Sparkles}>{t("manifest.keywords")}</SectionHeading>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] print:text-black print:leading-snug">
              {resumeData.keywords.join(", ")}.
            </p>
          </section>
        </article>
      </main>

      <CoverLetterModal
        isOpen={showCoverLetter}
        onClose={() => setShowCoverLetter(false)}
      />
    </div>
  );
};

export default SystemManifest;
