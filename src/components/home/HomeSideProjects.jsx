import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Archive } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import SectionTitle from '../SectionTitle';
import ProjectCard from '../ProjectCard';
import IconMapper from '../ui/IconMapper';
import { SIDE_PROJECTS } from '../../data/portfolioData';

const HomeSideProjects = ({ t, isId }) => {
    const navigate = useNavigate();
    const homeSideProjects = SIDE_PROJECTS.filter(p => !p.hidden).slice(0, 2);

    return (
        <section id="side-projects" className="mb-40 scroll-mt-24">
            <ScrollReveal>
                <SectionTitle number="2" title={t('home.section_side_projects')} link="/side-projects" linkText={t('home.view_experiments')} />
            </ScrollReveal>

            {/* Creative Description */}
            <ScrollReveal>
                <p className="text-lg text-[var(--text-secondary)] max-w-2xl mb-12 font-light leading-relaxed">
                    {t('home.side_projects_desc')}
                </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Editorial Column */}
                <div className="space-y-10">
                    {homeSideProjects.map((item, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div
                                className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-blue)]/50 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-2xl overflow-hidden rounded-xl"
                                onClick={() => navigate(`/side-project/${item.id}`)}
                            >
                                {/* Technical Illustration Container (Replaces Banner Image) */}
                                <div className="aspect-[21/9] overflow-hidden relative bg-black dark:bg-white border-b border-[var(--border-color)]">
                                    <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                                        <ProjectCard type={item.type || 'Web'} expanded={true} id={item.id} image={item.coverImage} />
                                    </div>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>

                                    {/* Status Badge */}
                                    <div className="absolute top-4 left-4 flex items-center gap-2">
                                        <span className="font-mono text-[11px] text-black dark:text-white border border-black/10 dark:border-white/10 px-2 py-0.5 rounded-full bg-white dark:bg-black backdrop-blur-md uppercase tracking-wider">
                                            EXP_0{i + 1}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <IconMapper iconName={item.iconName} size={18} className="text-[var(--accent-blue)]" />
                                            <h3 className="text-2xl font-serif italic text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors">
                                                {isId ? (item.title_id || item.title) : item.title}
                                            </h3>
                                        </div>
                                        <ArrowUpRight size={18} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-blue)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                    </div>

                                    <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-6 text-sm line-clamp-2">
                                        {isId ? (item.desc_id || item.desc) : item.desc}
                                    </p>

                                    <div className="flex gap-2 flex-wrap">
                                        {item.stack.map((tech, tIdx) => (
                                            <span key={tIdx} className="text-[11px] font-mono border border-[var(--border-color)] px-2 py-0.5 rounded-md text-[var(--text-secondary)] uppercase tracking-wider bg-[var(--bg-surface)]/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent-blue)] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Call to Action Block */}
                <ScrollReveal delay={300} className="flex flex-col justify-center items-start border-l border-[var(--border-color)] pl-12">
                    <Link to="/side-projects" className="group block mb-8 p-6 bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm rotate-1 rounded-lg hover:border-[var(--accent-blue)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer hover:rotate-0">
                        <div className="flex justify-between items-start">
                            <Archive size={32} className="text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent-blue)] transition-colors" />
                            <ArrowRight size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-blue)] group-hover:translate-x-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </div>
                        <h3 className="text-2xl font-serif italic text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">{t('home.archive_title')}</h3>
                        <p className="text-[var(--text-secondary)] text-sm max-w-xs font-light">
                            {t('home.archive_desc')}
                        </p>
                    </Link>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default HomeSideProjects;
