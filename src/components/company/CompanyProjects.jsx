import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../ScrollReveal';
import ProjectCard from '../ProjectCard';
import IconMapper from '../ui/IconMapper';

const CompanyProjects = ({ cluster, t, isId }) => {
    const navigate = useNavigate();

    return (
        <div className="space-y-24">
            {cluster.projects.map((project, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                    <div
                        onClick={() => navigate(project.route)}
                        className="group bg-[var(--bg-card)] border border-[var(--border-color)] cursor-pointer hover:border-[var(--brand)] transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-2xl rounded-2xl flex flex-col"
                    >
                        {/* 1. UI PREVIEW (Top, Full Bleed) */}
                        <div className="h-64 w-full overflow-hidden relative border-b border-[var(--border-color)] bg-black dark:bg-white">
                            <div className="absolute inset-0 bg-[var(--brand)] mix-blend-overlay opacity-0 group-hover:opacity-10 transition-opacity z-10 pointer-events-none"></div>

                            {/* Abstract UI Component */}
                            <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out">
                                <ProjectCard type={project.type} id={project.id} expanded={true} />
                            </div>

                            {/* Overlay Pattern */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20 pointer-events-none"></div>

                            {/* Floating Badge */}
                            <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-2">
                                {/* WIP Label */}
                                {(!['stoqo-logistics', 'stoqo-sales'].includes(project.id)) && (
                                    <div className="bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 px-3 py-1.5 rounded-full border border-amber-200 dark:border-amber-700/50 text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm backdrop-blur-md">
                                        WORK IN PROGRESS
                                    </div>
                                )}
                                {/* Project Type Badge */}
                                <div className="flex items-center gap-2 bg-white dark:bg-black text-black dark:text-white px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-[11px] font-mono uppercase tracking-widest shadow-lg">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] animate-pulse"></div>
                                    {project.type}
                                </div>
                            </div>
                        </div>

                        {/* 2. TEXT CONTENT (Padded) */}
                        <div className="p-8 flex flex-col gap-6">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 border border-[var(--border-color)] bg-[var(--bg-void)] group-hover:border-[var(--brand)] transition-all rounded-xl shadow-inner group-hover:shadow-[0_0_15px_var(--brand)]/20">
                                        <IconMapper iconName={project.iconName} size={24} className="text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors" />
                                    </div>
                                    <h3 className="text-3xl font-serif italic group-hover:text-[var(--brand)] transition-colors">
                                        {isId ? (project.title_id || project.title) : project.title}
                                    </h3>
                                </div>
                                <div className="hidden md:flex items-center gap-2 text-[var(--brand)] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                                    <span className="text-xs font-mono uppercase tracking-widest">{t('company.view_case')}</span>
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[var(--border-color)] pt-6">
                                <div className="space-y-2">
                                    <span className="font-mono text-[11px] text-[var(--text-primary)] uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-1 h-1 bg-red-400 rounded-full"></span> {t('company.problem')}
                                    </span>
                                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                                        {isId ? (project.details_id?.problem || project.details.problem) : project.details.problem}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <span className="font-mono text-[11px] text-[var(--text-primary)] uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-1 h-1 bg-[var(--brand)] rounded-full"></span> {t('company.fix')}
                                    </span>
                                    <p className="text-sm font-medium text-[var(--text-primary)]">
                                        {isId ? (project.details_id?.outcome || project.details.outcome) : project.details.outcome}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>
    );
};

export default CompanyProjects;
