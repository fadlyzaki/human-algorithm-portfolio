import React from 'react';
import { Link } from 'react-router-dom';
import Treasure from '../Treasure';
import ScrollReveal from '../ScrollReveal';
import SectionTitle from '../SectionTitle';
import WorkBento from '../WorkBento';
import { WORK_CLUSTERS } from '../../data/portfolioData';

const HomeWorkSection = ({ t }) => {
    return (
        <section id="work" className="mb-24 scroll-mt-24 relative">
            <Treasure
                id="home-work"
                className="-top-6 right-12 rotate-12"
                type="crown"
            >
                {t('home.royal_treasure')}
            </Treasure>
            <ScrollReveal>
                <SectionTitle number="1" title={t('home.section_work')} />
                <div className="max-w-2xl mb-12 mt-[-1rem] text-[var(--text-secondary)] font-mono text-[11px] md:text-xs leading-relaxed border-l-2 border-[var(--accent-amber)] pl-4">
                    <p>
                        {t('home.work_subtitle_1')}
                        <Link to="/side-projects" className="text-[var(--accent-blue)] hover:text-white transition-colors underline decoration-dotted underline-offset-4">
                            {t('home.work_subtitle_link')}
                        </Link>
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {WORK_CLUSTERS.map((cluster, idx) => (
                    <ScrollReveal key={idx} delay={idx * 150}>
                        <WorkBento cluster={cluster} priority={idx === 0} />
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default HomeWorkSection;
