import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const AchievementsGrid = ({ achievements, t }) => {
    return (
        <section className="mb-32">
            <ScrollReveal>
                <div className="flex items-baseline gap-4 mb-12 border-b border-[var(--border-color)] pb-4">
                    <span className="font-mono text-4xl text-[var(--text-primary)] opacity-20 font-bold">🏆</span>
                    <h2 className="text-2xl font-mono text-[var(--text-primary)] uppercase tracking-tight">Achievements</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((award, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] p-0 hover:border-[var(--accent-amber)] transition-all duration-500 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-xl hover:shadow-[var(--accent-amber)]/5 origin-center"
                        >
                            {/* Visual ID / Side Bar */}
                            <div className="md:w-16 bg-[var(--bg-void)]/50 border-b md:border-b-0 md:border-r border-[var(--border-color)] flex md:flex-col items-center justify-between md:justify-center p-3 md:p-3 gap-3">
                                <div className="p-1.5 bg-[var(--bg-card)] rounded-lg text-[var(--accent-amber)] shadow-inner border border-[var(--border-color)]/20">
                                    <award.icon size={18} />
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div className="flex-grow p-5 md:p-6 relative">
                                <div className="flex flex-col h-full">
                                    <div className="mb-4">
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <span className="font-mono text-[9px] px-2 py-0.5 bg-[var(--accent-amber)]/10 text-[var(--accent-amber)] rounded-full font-bold uppercase tracking-widest border border-[var(--accent-amber)]/20">
                                                {award.issuer}
                                            </span>
                                            <span className="font-mono text-[10px] text-[var(--text-card-secondary)] opacity-60">
                                                {award.date}
                                            </span>
                                        </div>
                                        <h3 className="font-mono text-base md:text-lg text-[var(--text-card)] font-bold leading-tight group-hover:text-[var(--accent-amber)] transition-colors">
                                            {award.title}
                                        </h3>
                                    </div>

                                    {award.skills && (
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {award.skills.map(skill => (
                                                <span key={skill} className="text-[9px] font-mono text-[var(--text-card-secondary)] py-0.5 px-2 rounded-md bg-[var(--bg-void)]/30 border border-[var(--border-color)]/20 whitespace-nowrap">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="mt-auto pt-4 border-t border-[var(--border-color)]/10">
                                        <a
                                            href={award.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2.5 md:py-2 bg-[var(--bg-void)]/20 border border-[var(--border-color)] hover:border-[var(--accent-amber)] hover:bg-[var(--accent-amber)]/10 text-[var(--accent-amber)] rounded-lg transition-all font-mono text-[11px] md:text-[10px] uppercase tracking-widest font-bold"
                                        >
                                            {t('about.show_credential')}
                                            <ArrowUpRight size={12} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
};

export default AchievementsGrid;
