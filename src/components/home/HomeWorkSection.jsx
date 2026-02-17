import React from 'react';
import Treasure from '../Treasure';
import ScrollReveal from '../ScrollReveal';
import SectionTitle from '../SectionTitle';
import WorkBento from '../WorkBento';
import { WORK_CLUSTERS } from '../../data/portfolioData';

const HomeWorkSection = ({ t }) => {
    return (
        <section id="work" className="mb-40 scroll-mt-24 relative">
            <Treasure
                id="home-work"
                className="top-0 left-0"
                type="crown"
            >
                ROYAL TREASURE!
            </Treasure>
            <ScrollReveal>
                <SectionTitle number="1" title={t('home.section_work')} />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {WORK_CLUSTERS.map((cluster, idx) => (
                    <ScrollReveal key={idx} delay={idx * 150}>
                        <WorkBento cluster={cluster} />
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default HomeWorkSection;
