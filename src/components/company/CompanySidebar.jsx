import React from 'react';
import { Activity, Scan, Linkedin, ArrowUpRight } from 'lucide-react';
import IconMapper from '../ui/IconMapper';

const CompanySidebar = ({ cluster, t, isId, id }) => {
    return (
        <aside className="hidden lg:block h-full">
            <div className="sticky top-32 space-y-12">
                <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                        <Activity size={14} /> {t('company.context_title')}
                    </h3>
                    <p className="text-[var(--text-primary)] text-sm leading-relaxed opacity-80">
                        {isId ?
                            ((cluster.miniDesc_id || cluster.miniDesc) || "This ecosystem required a shift from manual boolean logic to fuzzy, human-centric algorithms.") :
                            (cluster.miniDesc || "This ecosystem required a shift from manual boolean logic to fuzzy, human-centric algorithms.")
                        }
                    </p>
                </div>

                <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg">
                    <div className="text-[var(--brand)] mb-4">
                        <IconMapper iconName={cluster.companyFocus?.icon || 'Cpu'} size={24} />
                    </div>
                    <h4 className="font-serif italic text-lg mb-2">
                        {isId ? (cluster.companyFocus_id?.title || cluster.companyFocus?.title || t('company.tech_core')) : (cluster.companyFocus?.title || t('company.tech_core'))}
                    </h4>
                    <ul className="space-y-2">
                        {(isId ? (cluster.companyFocus_id?.items || cluster.companyFocus?.items || ['React Ecosystem', 'Node.js', 'Python Data Science']) : (cluster.companyFocus?.items || ['React Ecosystem', 'Node.js', 'Python Data Science'])).map((t, i) => (
                            <li key={i} className="text-xs font-mono text-[var(--text-secondary)] flex items-center gap-2">
                                <span className="w-1 h-1 bg-[var(--text-primary)] rounded-full"></span> {t}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Designer's Log / Motivation */}
                <div className="relative p-6 pt-10 border border-[var(--border-color)] rounded-lg bg-[var(--bg-card)] overflow-hidden group">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--brand)] opacity-50 group-hover:h-full group-hover:opacity-[0.03] transition-all duration-500"></div>
                    <div className="absolute top-3 left-4 font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--text-secondary)] flex items-center gap-2">
                        <Scan size={10} className="text-[var(--brand)]" /> Designer's_Log // {id}
                    </div>

                    <blockquote className="relative">
                        <span className="absolute -top-4 -left-2 text-4xl text-[var(--brand)] opacity-20 font-serif">"</span>
                        <p className="text-sm font-serif italic leading-relaxed text-[var(--text-primary)] relative z-10">
                            {isId ? (cluster.motivation_id || cluster.motivation) : cluster.motivation}
                        </p>
                        <footer className="mt-4 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[9px] font-mono text-[var(--brand)] uppercase tracking-wider">FADLY_ZAKI</span>
                                <span className="text-[8px] font-mono text-[var(--text-secondary)] opacity-60">
                                    {(() => {
                                        const roleStat = cluster.stats?.find(s => s.label === 'Role');
                                        const roleValue = roleStat ? roleStat.value : 'Product Designer';
                                        return roleValue.toUpperCase().replace(/\s+/g, '_');
                                    })()}
                                </span>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-[var(--border-color)] p-1 bg-[var(--bg-void)]">
                                <img src="/about-portrait-new.jpg" alt="Author" className="w-full h-full object-cover rounded-full grayscale" />
                            </div>
                        </footer>
                    </blockquote>
                </div>

                {/* LinkedIn Link */}
                {cluster.linkedinUrl && (
                    <a
                        href={cluster.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 p-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg hover:border-[var(--brand)] hover:bg-[var(--brand)]/5 transition-all duration-300 group"
                    >
                        <Linkedin size={18} className="text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors" />
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors">{t('company.company_page')}</span>
                        <ArrowUpRight size={14} className="text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors" />
                    </a>
                )}
            </div>
        </aside>
    );
};

export default CompanySidebar;
