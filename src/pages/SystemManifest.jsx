import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
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
  BookOpen
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { WORK_CLUSTERS } from '../data/portfolioData';

/* --- THEME CONFIGURATION ---
   A 'High Contrast' mode designed for readability and printing.
   Less noise, more structure.
*/

const SystemManifest = () => {
  const { isDark, setIsDark } = useTheme();

  // --- DATA: RAW SPECS ---
  const header = {
    name: "Fadly Uzzaki",
    role: "Product Designer | UX/UI Designer | Systems Specialist",
    location: "Jakarta, Indonesia",
    status: "Available for Hire",
    links: [
      { label: "linkedin.com/in/fadlyzaki", url: "https://www.linkedin.com/in/fadlyzaki/", icon: Linkedin },
      { label: "fadlyzaki-design.vercel.app", url: "https://fadlyzaki-design.vercel.app/", icon: Globe },
      { label: "fadly.uzzaki@gmail.com", url: "mailto:fadly.uzzaki@gmail.com", icon: Mail }
    ]
  };


  // Transform WORK_CLUSTERS data to CV format
  const experience = WORK_CLUSTERS.map(cluster => {
    const rolestat = cluster.stats?.find(s => s.label === 'Role');
    const timelineStat = cluster.stats?.find(s => s.label === 'Timeline');

    // Extract key achievements from the first 2-3 projects
    const metrics = cluster.projects?.slice(0, 3).map(project => {
      const { caseStudy } = project;
      if (caseStudy?.metrics && caseStudy.metrics.length > 0) {
        const metricStr = caseStudy.metrics.map(m => `${m.label}: ${m.value}`).join(', ');
        return `${project.title}: ${metricStr}`;
      }
      return project.details?.outcome || project.tag;
    }).filter(Boolean) || [];

    // Extract stack from projects
    const stack = ['Figma', 'Linear', 'Mixpanel']; // Default tools

    return {
      company: cluster.company,
      role: rolestat?.value || 'Product Designer',
      period: timelineStat?.value || '2020 - 2023',
      summary: cluster.miniDesc || cluster.hook,
      metrics: metrics.length > 0 ? metrics : [cluster.hook],
      stack
    };
  });


  const education = [
    {
      school: "University of Indonesia",
      degree: "Bachelor of Computer Science",
      year: "2014 - 2018",
      note: "Specialized in Human-Computer Interaction. Teaching Assistant for Interaction Design."
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
    <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-300 p-8 md:p-12 print:p-0 print:bg-white print:text-black">

      {/* TOOLBAR */}
      <div className="max-w-[210mm] mx-auto flex justify-between items-center mb-12 print:hidden">
        <Link to="/" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-sm uppercase">
          <ArrowLeft size={16} /> Return
        </Link>
        <div className="flex gap-4">
          <button onClick={() => setIsDark(!isDark)} className="p-2 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]" aria-label="Toggle Theme">
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[var(--text-primary)] text-[var(--bg-void)] font-mono text-sm uppercase font-bold hover:opacity-90">
            <Printer size={16} /> Print / PDF
          </button>
        </div>
      </div>

      {/* DOCUMENT SHEET (A4 Width Capable) */}
      <div className="max-w-[210mm] mx-auto bg-[var(--bg-void)] md:bg-[var(--bg-panel)] md:p-12 md:shadow-2xl md:border border-[var(--border-color)] print:border-none print:shadow-none print:p-0">


        {/* HEADER */}
        <header className="border-b-2 border-[var(--text-primary)] pb-6 mb-8">
          <div className="mb-4">
            <h1 className="text-4xl md:text-5xl font-mono uppercase tracking-tight mb-2">{header.name}</h1>
            <h2 className="text-lg text-[var(--text-secondary)] font-mono mb-3">{header.role}</h2>
            <div className="flex items-center gap-2 text-sm font-mono text-[var(--accent-mono)]">
              <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
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

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-12">

          {/* MAIN COLUMN (Experience) */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Terminal size={18} />
              <h3 className="font-mono text-lg uppercase font-bold border-b border-[var(--border-color)] w-full pb-1">Professional Experience</h3>
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

                  <ul className="space-y-2 mb-4">
                    {job.metrics.map((metric, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-3 text-sm leading-relaxed">
                        <CheckCircle size={14} className="mt-1 shrink-0 text-[var(--text-secondary)] opacity-50" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    {job.stack.map(tool => (
                      <span key={tool} className="text-[10px] font-mono border border-[var(--border-color)] px-1.5 py-0.5 rounded text-[var(--text-secondary)]">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SIDEBAR (Skills & Education) */}
          <aside className="space-y-10">

            {/* SKILLS */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Hash size={18} />
                <h3 className="font-mono text-lg uppercase font-bold border-b border-[var(--border-color)] w-full pb-1">Skills & Expertise</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="font-mono text-xs text-[var(--text-secondary)] uppercase mb-2">Design</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Product Design', 'UX/UI Design', 'User Research', 'Design Systems', 'Prototyping', 'Wireframing', 'User Testing', 'Information Architecture'].map(s => (
                      <span key={s} className="bg-[var(--border-color)] px-2 py-1 text-xs font-mono rounded-sm">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-mono text-xs text-[var(--text-secondary)] uppercase mb-2">Tools & Methods</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Sketch', 'Adobe XD', 'HTML/CSS', 'JavaScript', 'React', 'Git', 'Jira', 'Linear', 'Mixpanel', 'Agile', 'Scrum', 'Design Thinking'].map(s => (
                      <span key={s} className="border border-[var(--border-color)] px-2 py-1 text-xs font-mono rounded-sm text-[var(--text-secondary)]">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* EDUCATION */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={18} />
                <h3 className="font-mono text-lg uppercase font-bold border-b border-[var(--border-color)] w-full pb-1">Education</h3>
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
                  // Generated by Human Algorithm<br />
                  // Fadly Uzzaki © 2025
              </p>
            </div>

          </aside>
        </div>
      </div>


    </div>
  );
};

export default SystemManifest;