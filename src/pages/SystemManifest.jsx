import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
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
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { WORK_CLUSTERS } from '../data/portfolioData';
import CoverLetterModal from '../components/CoverLetterModal';
import BackButton from '../components/BackButton';

/* --- THEME CONFIGURATION ---
   A 'High Contrast' mode designed for readability and printing.
   Less noise, more structure.
*/

const SystemManifest = () => {
  const { isDark, setIsDark } = useTheme();
  const { t, language, toggleLanguage } = useLanguage();
  const [showCoverLetter, setShowCoverLetter] = useState(true);

  // --- DATA: RAW SPECS ---
  const header = {
    name: "Fadly Uzzaki",
    role: t('manifest.role'),
    location: "Jakarta, Indonesia",
    status: t('manifest.status'),
    links: [
      { label: "linkedin.com/in/fadlyzaki", url: "https://www.linkedin.com/in/fadlyzaki/", icon: Linkedin },
      { label: "fadlyzaki-design.vercel.app", url: "https://fadlyzaki-design.vercel.app/", icon: Globe },
      { label: "fadly.uzzaki@gmail.com", url: "mailto:fadly.uzzaki@gmail.com", icon: Mail }
    ]
  };

  const summary = t('manifest.summary_text');

  // Transform WORK_CLUSTERS data to CV format
  const experience = useMemo(() => WORK_CLUSTERS.map(cluster => {
    const rolestat = cluster.stats?.find(s => s.label === 'Role');
    const timelineStat = cluster.stats?.find(s => s.label === 'Timeline');
    const isId = language === 'id';

    // Extract key achievements from the projects
    const metrics = cluster.projects?.map(project => {
      const { caseStudy } = project;
      const pTitle = isId ? (project.title_id || project.title) : project.title;
      const pOutcome = isId ? (project.details_id?.outcome || project.details.outcome) : project.details?.outcome;

      if (caseStudy?.metrics && caseStudy.metrics.length > 0) {
        // Find the most impactful metric or join them
        return `${pTitle}: ${caseStudy.metrics.map(m => `${m.label} ${m.value}`).join(', ')}`;
      }
      return pOutcome ? `${pTitle}: ${pOutcome}` : null;
    }).filter(Boolean).slice(0, 3) || [];

    return {
      company: cluster.company,
      role: rolestat?.value || 'Product Designer',
      period: timelineStat?.value || 'Ongoing',
      summary: isId ? (cluster.miniDesc_id || cluster.miniDesc || cluster.hook_id || cluster.hook) : (cluster.miniDesc || cluster.hook),
      metrics: metrics.length > 0 ? metrics : [isId ? (cluster.hook_id || cluster.hook) : cluster.hook]
    };
  }), [language]);

  const education = [
    {
      school: t('manifest.edu_master_school'),
      degree: t('manifest.edu_master_degree'),
      year: "2023 - 2025",
      note: t('manifest.edu_master_note')
    },
    {
      school: t('manifest.edu_school'),
      degree: t('manifest.edu_degree'),
      year: "2014 - 2018",
      note: t('manifest.edu_note')
    }
  ];

  // --- STYLES ---
  const themeStyles = {
    '--bg-void': isDark ? '#111111' : '#FFFFFF',
    '--bg-panel': isDark ? '#181818' : '#F4F4F5',
    '--text-primary': isDark ? '#F4F4F5' : '#111111',
    '--text-secondary': isDark ? '#A1A1AA' : '#52525B',
    '--border-color': isDark ? '#333' : '#E4E4E7',
    '--accent-mono': isDark ? '#F59E0B' : '#000000',
  };

  return (
    <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-mono selection:bg-black selection:text-white print:bg-white print:text-black">
      <SEO
        title="Curriculum Vitae"
        description="System Manifest: Professional experience validation and skill inventory."
      />

      {/* FIXED NAVBAR - HIDDEN IN PRINT */}
      <div className="fixed top-0 left-0 w-full z-50 print:hidden">
        <header className="flex justify-between items-center px-6 py-6 bg-[var(--bg-void)]/95 backdrop-blur border-b border-[var(--border-color)]">
          <BackButton to="/about" label={t('manifest.back')} />

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title="Switch Language"
            >
              <Globe size={18} />
              <span className="font-mono text-xs uppercase tracking-widest">{language}</span>
            </button>

            <button
              onClick={() => setShowCoverLetter(true)}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title="View Cover Letter"
            >
              <Mail size={18} />
            </button>

            <button
              onClick={() => setIsDark(!isDark)}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-mono)] transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-[var(--text-primary)] text-[var(--bg-void)] font-mono text-xs uppercase font-bold rounded-lg hover:opacity-90 flex items-center gap-2 transition-opacity"
            >
              <Printer size={14} />
              <span className="hidden md:inline">{t('manifest.print')}</span>
            </button>
          </div>
        </header>
      </div>

      {/* SPACER FOR FIXED HEADER & DOCUMENT SHEET */}
      <div className="h-24 md:h-32 print:hidden"></div>
      <div className="max-w-[210mm] mx-auto bg-[var(--bg-void)] md:bg-[var(--bg-panel)] md:p-12 md:shadow-2xl md:border border-[var(--border-color)] print:border-none print:shadow-none print:p-0 relative z-10">


        {/* HEADER */}
        <header className="border-b-2 border-[var(--text-primary)] pb-6 mb-8">
          <div className="mb-4">
            <h1 className="text-4xl md:text-5xl font-mono uppercase tracking-tight mb-2">{header.name}</h1>
            <h2 className="text-lg text-[var(--text-secondary)] font-mono mb-3">{header.role}</h2>
            <div className="flex items-center gap-2 text-sm font-mono text-[var(--accent-mono)]">
              <div className="w-2 h-2 bg-current rounded-full animate-pulse print:hidden"></div>
              {header.status}
            </div>
          </div>

          {/* Contact Links - Horizontal Layout with Location */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-mono text-[var(--text-secondary)] pt-4 border-t border-[var(--border-color)]">
            {header.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors group"
              >
                <link.icon size={14} className="shrink-0 opacity-60" />
                <span className="group-hover:underline">{link.label}</span>
              </a>
            ))}
            <div className="flex items-center gap-2">
              <MapPin size={14} className="shrink-0 opacity-60" />
              <span>{header.location}</span>
            </div>
          </div>
        </header>

        {/* PROFILE SUMMARY */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <User size={18} className="print:hidden" />
            <h3 className="font-mono text-lg uppercase font-bold border-b border-[var(--border-color)] w-full pb-1 print:border-black">{t('manifest.summary_title')}</h3>
          </div>
          <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base font-light">
            {summary}
          </p>
        </section>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] print:grid-cols-1 gap-12 print:gap-8">

          {/* MAIN COLUMN (Experience) */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Terminal size={18} className="print:hidden" />
              <h3 className="font-mono text-lg uppercase font-bold border-b border-[var(--border-color)] w-full pb-1 print:border-black">{t('manifest.exp_title')}</h3>
            </div>

            <div className="space-y-10">
              {experience.map((job, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-xl font-bold">{job.company}</h4>
                    <span className="font-mono text-sm text-[var(--text-secondary)]">{job.period}</span>
                  </div>
                  <div className="text-[var(--accent-mono)] font-mono text-sm mb-3">{job.role}</div>
                  <p className="text-[var(--text-secondary)] italic mb-4 text-sm">"{job.summary}"</p>

                  <ul className="space-y-2">
                    {job.metrics.map((metric, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-3 text-sm leading-relaxed">
                        <CheckCircle size={14} className="mt-1 shrink-0 text-[var(--text-secondary)] opacity-50" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* SIDEBAR (Skills & Education) */}
          <aside className="space-y-10">

            {/* SKILLS */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Hash size={18} className="print:hidden" />
                <h3 className="font-mono text-lg uppercase font-bold border-b border-[var(--border-color)] w-full pb-1 print:border-black">{t('manifest.skills_title')}</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="font-mono text-xs text-[var(--text-secondary)] uppercase mb-2 print:text-black print:font-bold">{t('manifest.skills_design')}</h5>
                  <div className="flex flex-wrap gap-2 print:gap-0">
                    {['Product Design', 'UI/UX Design', 'User Research', 'Design Systems', 'Prototyping', 'Wireframing', 'User Testing', 'Information Architecture'].map((s, i, arr) => (
                      <span key={s} className="bg-[var(--border-color)] px-2 py-1 text-xs font-mono rounded-sm print:bg-transparent print:px-0 print:py-0 print:text-black">{s}{i < arr.length - 1 ? <span className="hidden print:inline">, </span> : ''}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-mono text-xs text-[var(--text-secondary)] uppercase mb-2 print:text-black print:font-bold">{t('manifest.skills_tools')}</h5>
                  <div className="flex flex-wrap gap-2 print:gap-0">
                    {['Figma', 'Sketch', 'Adobe XD', 'HTML/CSS', 'JavaScript', 'React', 'Git', 'Jira', 'Linear', 'Mixpanel', 'Agile', 'Scrum', 'Design Thinking'].map((s, i, arr) => (
                      <span key={s} className="border border-[var(--border-color)] px-2 py-1 text-xs font-mono rounded-sm text-[var(--text-secondary)] print:border-none print:px-0 print:py-0 print:text-black">{s}{i < arr.length - 1 ? <span className="hidden print:inline">, </span> : ''}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* EDUCATION */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={18} className="print:hidden" />
                <h3 className="font-mono text-lg uppercase font-bold border-b border-[var(--border-color)] w-full pb-1 print:border-black">{t('manifest.edu_title')}</h3>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="mb-4">
                  <div className="font-bold text-sm">{edu.school}</div>
                  <div className="text-sm text-[var(--text-secondary)]">{edu.degree}</div>
                  <div className="font-mono text-xs text-[var(--accent-mono)] mt-1">{edu.year}</div>
                </div>
              ))}
            </section>

            {/* QR / FOOTER AREA FOR PRINT */}
            <div className="pt-12 mt-12 border-t border-[var(--border-color)] print:block hidden">
              <p className="font-mono text-[10px] text-[var(--text-secondary)]">
                {t('manifest.footer_gen')}<br />
                  // Fadly Uzzaki 🧢 © 2025-2026
              </p>
            </div>

          </aside>
        </div>
      </div>


      <CoverLetterModal isOpen={showCoverLetter} onClose={() => setShowCoverLetter(false)} />
    </div>
  );
};

export default SystemManifest;