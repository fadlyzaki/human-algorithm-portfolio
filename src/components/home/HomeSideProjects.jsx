import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Archive } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import SectionTitle from '../SectionTitle';
import VentureCard from '../VentureCard';
import { SIDE_PROJECTS } from '../../data/portfolioData';

const HomeSideProjects = ({ t, isId }) => {
    const navigate = useNavigate();
    const homeSideProjects = SIDE_PROJECTS.filter(p => !p.hidden).slice(0, 3);

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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-1000">
                {homeSideProjects.map((item, i) => (
                    <ScrollReveal key={item.id || i} delay={i * 100} className="h-full block">
                        <VentureCard
                            project={item}
                            index={i}
                            isIndonesian={isId}
                            onClick={() => navigate(`/side-project/${item.id}`)}
                        />
                    </ScrollReveal>
                ))}

                {/* Call to Action Block */}
                <ScrollReveal delay={300} className="h-full block">
                    <Link to="/side-projects" className="group flex flex-col justify-center items-center text-center h-[450px] p-8 bg-[var(--bg-card)] border border-[var(--border-color)] border-dashed shadow-sm rounded-[40px] hover:border-[var(--accent-blue)] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                        <Archive size={48} className="text-[var(--text-primary)] mb-6 group-hover:text-[var(--accent-blue)] transition-colors" />
                        <h3 className="text-3xl font-serif italic text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent-blue)] transition-colors">
                            {t('home.archive_title') || 'View All Ventures'}
                        </h3>
                        <p className="text-[var(--text-secondary)] text-base max-w-xs font-light mb-8">
                            {t('home.archive_desc') || 'Explore all experiments, products, and interactive prototypes.'}
                        </p>
                        <div className="inline-flex items-center gap-2 text-[var(--accent-blue)] font-mono text-sm tracking-wider uppercase group-hover:underline">
                            Explore Archive <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default HomeSideProjects;
