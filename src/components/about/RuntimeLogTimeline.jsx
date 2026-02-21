import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ScrollReveal';

const RuntimeLogTimeline = ({ runtimeLog, t }) => {
    return (
        <section className="mb-32 relative">
            <ScrollReveal>
                <div className="flex items-baseline gap-4 mb-12 border-b border-[var(--border-color)] pb-4">
                    <span className="font-mono text-4xl text-[var(--text-primary)] opacity-20 font-bold">{t('about.section_log')}</span>
                    <h2 className="text-2xl font-mono text-[var(--text-primary)] uppercase tracking-tight">{t('about.section_runtime')}</h2>
                </div>
            </ScrollReveal>

            <div className="relative border-l border-[var(--border-color)] ml-3 md:ml-6 space-y-12">
                {runtimeLog.map((item, index) => (
                    <ScrollReveal key={index} delay={index * 100}>
                        <div className="relative pl-8 md:pl-12 group">
                            {/* Timeline Node */}
                            <div className={`absolute -left-[5px] md:-left-[5px] top-1 w-[11px] h-[11px] rounded-full bg-[var(--bg-void)] border-2 ${item.highlight ? 'border-[var(--accent-red)] animate-pulse' : 'border-[var(--border-color)] group-hover:border-[var(--accent-blue)]'} transition-colors z-10`}></div>

                            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-12">
                                {/* Date & Type */}
                                <div className="font-mono text-xs">
                                    <span className="block text-[var(--text-secondary)] mb-1">{item.year}</span>
                                    <span className={`block font-bold ${item.color}`}>{item.type}</span>
                                </div>

                                {/* Content */}
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <item.icon size={18} className={`${item.color} opacity-80`} />
                                        <h3 className="text-xl text-[var(--text-primary)] font-medium">{item.title}</h3>
                                    </div>

                                    <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-4">
                                        {item.desc}
                                    </p>

                                    {/* WORK ITEM SPECIFIC EXTRAS */}
                                    {item.category === 'work' && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {item.tags.map(tag => (
                                                <span key={tag} className="font-mono text-[10px] text-[var(--accent-blue)] bg-[var(--bg-void)] px-2 py-1 rounded border border-[var(--border-color)]">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {item.link && (
                                        <Link
                                            to={item.linkType === 'side-project' ? `/side-project/${item.link}` : `/work/${item.link}`}
                                            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-primary)] hover:text-[var(--accent-blue)] transition-colors border-b border-[var(--text-primary)] hover:border-[var(--accent-blue)] pb-0.5 mb-2"
                                        >
                                            {t('about.log_explore')}
                                        </Link>
                                    )}

                                    {/* BIO ITEM SPECIFIC EXTRAS */}
                                    {item.highlight && (
                                        <div className="mt-4 p-4 bg-[var(--bg-card)] border-l-2 border-[var(--accent-red)] inline-block max-w-xl shadow-lg transform -rotate-1 hover:rotate-0 transition-transform rounded-e-lg">
                                            <p className="font-serif italic text-sm text-[var(--text-card)]">
                                                {t('about.log_6_quote')}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default RuntimeLogTimeline;
