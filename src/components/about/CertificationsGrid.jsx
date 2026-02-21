import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const CertificationsGrid = ({ certifications, t }) => {
    return (
        <section className="mb-32">
            <ScrollReveal>
                <div className="flex items-baseline gap-4 mb-12 border-b border-[var(--border-color)] pb-4">
                    <span className="font-mono text-4xl text-[var(--text-primary)] opacity-20 font-bold">{t('about.section_edu')}</span>
                    <h2 className="text-2xl font-mono text-[var(--text-primary)] uppercase tracking-tight">{t('about.section_knowledge_upgrades')}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] p-0 hover:border-[var(--accent-blue)] transition-all duration-500 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-xl hover:shadow-[var(--accent-blue)]/5 origin-center"
                        >
                            {/* Visual ID / Side Bar */}
                            <div className="md:w-16 bg-[var(--bg-void)]/50 border-b md:border-b-0 md:border-r border-[var(--border-color)] flex md:flex-col items-center justify-between md:justify-center p-3 md:p-3 gap-3">
                                <div className="p-1.5 bg-[var(--bg-card)] rounded-lg text-[var(--accent-blue)] shadow-inner border border-[var(--border-color)]/20">
                                    <cert.icon size={18} />
                                </div>
                                <div className="font-mono text-[8px] text-[var(--text-card-secondary)] opacity-40 uppercase tracking-tighter md:rotate-180 md:[writing-mode:vertical-lr]">
                                    REF_{2048 + idx}
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div className="flex-grow p-5 md:p-6 relative">
                                {/* Background ID Watermark */}
                                <div className="absolute top-2 right-4 md:top-4 md:right-4 font-mono text-2xl md:text-[40px] font-black text-[var(--text-card)] opacity-[0.015] md:opacity-[0.02] select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                                    0{idx + 1}
                                </div>

                                <div className="flex flex-col h-full">
                                    <div className="mb-4">
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <span className="font-mono text-[9px] px-2 py-0.5 bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] rounded-full font-bold uppercase tracking-widest border border-[var(--accent-blue)]/20">
                                                {cert.issuer}
                                            </span>
                                            <span className="font-mono text-[10px] text-[var(--text-card-secondary)] opacity-60">
                                                {cert.date}
                                            </span>
                                        </div>
                                        <h3 className="font-mono text-base md:text-lg text-[var(--text-card)] font-bold leading-tight group-hover:text-[var(--accent-blue)] transition-colors">
                                            {cert.title}
                                        </h3>
                                    </div>

                                    {cert.skills && (
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {cert.skills.map(skill => (
                                                <span key={skill} className="text-[9px] font-mono text-[var(--text-card-secondary)] py-0.5 px-2 rounded-md bg-[var(--bg-void)]/30 border border-[var(--border-color)]/20 whitespace-nowrap">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="mt-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-4 border-t border-[var(--border-color)]/10">
                                        {cert.id && cert.id !== 'N/A' && (
                                            <div className="flex md:flex-col gap-2 md:gap-0.5 items-center md:items-start">
                                                <span className="font-mono text-[8px] text-[var(--text-card-secondary)] opacity-40 uppercase">Certificate_ID</span>
                                                <span className="font-mono text-[9px] text-[var(--text-card-secondary)] opacity-80 select-all">
                                                    {cert.id}
                                                </span>
                                            </div>
                                        )}
                                        <a
                                            href={cert.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2.5 md:py-2 bg-[var(--bg-void)]/20 border border-[var(--border-color)] hover:border-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] rounded-lg transition-all font-mono text-[11px] md:text-[10px] uppercase tracking-widest font-bold ${(!cert.id || cert.id === 'N/A') ? 'md:ml-auto' : ''}`}
                                        >
                                            {t('about.show_credential')}
                                            <ArrowUpRight size={12} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                                <div className="absolute top-0 right-0 border-t-2 border-r-2 border-[var(--accent-blue)] w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
};

export default CertificationsGrid;
