import React from 'react';
import ScrollReveal from '../ScrollReveal';

const MaintenanceGrid = ({ streaks, t }) => {
    return (
        <section className="mb-32">
            <ScrollReveal>
                <div className="flex items-baseline gap-4 mb-12 border-b border-[var(--border-color)] pb-4">
                    <span className="font-mono text-4xl text-[var(--text-primary)] opacity-20 font-bold">{t('about.section_ops')}</span>
                    <h2 className="text-2xl font-mono text-[var(--text-primary)] uppercase tracking-tight">{t('about.section_maintenance')}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {streaks.map((habit, idx) => (
                        <a
                            key={idx}
                            href={habit.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--bg-card)] border border-[var(--border-color)] p-6 text-center group hover:border-[var(--accent-green)] hover:bg-[var(--accent-green)]/5 transition-all rounded-lg cursor-pointer"
                        >
                            <habit.icon size={28} className={`mx-auto mb-3 ${habit.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                            <div className="font-mono text-sm text-[var(--text-card)] font-bold mb-1">{habit.label}</div>
                            <div className="font-mono text-[10px] text-[var(--text-card-secondary)] uppercase tracking-widest mb-3 opacity-60">{habit.frequency}</div>
                            <div className="font-serif italic text-xs text-[var(--text-card-secondary)] border-t border-[var(--border-color)]/20 pt-3 mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                "{habit.note}"
                            </div>
                        </a>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
};

export default MaintenanceGrid;
