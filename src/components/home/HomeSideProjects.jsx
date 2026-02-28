import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Archive } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';
import SectionTitle from '../SectionTitle';
import VentureCard from '../VentureCard';
import { SIDE_PROJECTS } from '../../data/portfolioData';

const HomeSideProjects = ({ t, isId }) => {
    const navigate = useNavigate();
    const homeSideProjects = SIDE_PROJECTS.filter(p => !p.hidden).slice(0, 3);

    // State to track which card is actively hovered (0, 1, 2 for projects, 3 for CTA)
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isDesktop, setIsDesktop] = useState(true);

    // Disable the fluid effect on mobile to prevent layout breakage
    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="side-projects" className="mb-24 scroll-mt-24">
            <ScrollReveal>
                <SectionTitle number="2" title={t('home.section_side_projects')} link="/side-projects" linkText={t('home.view_experiments')} />
            </ScrollReveal>

            {/* Creative Description */}
            <ScrollReveal>
                <div className="max-w-2xl mb-12 mt-[-1rem] text-[var(--text-secondary)] font-mono text-[11px] md:text-xs leading-relaxed border-l-2 border-[var(--accent-amber)] pl-4">
                    <p>
                        {t('home.side_projects_desc')}
                    </p>
                </div>
            </ScrollReveal>

            {/* FLUID ACCORDION CONTAINER */}
            <div
                className="flex flex-col lg:flex-row gap-4 lg:gap-4 lg:h-[450px] w-full"
                onMouseLeave={() => isDesktop && setHoveredIndex(null)}
            >
                {/* 3 Project Cards */}
                {homeSideProjects.map((item, i) => (
                    <motion.div
                        key={item.id || i}
                        onMouseEnter={() => isDesktop && setHoveredIndex(i)}
                        layout
                        initial={false}
                        animate={
                            isDesktop ? {
                                flex: hoveredIndex === i ? "1 1 50%" : hoveredIndex !== null ? "1 1 15%" : "1 1 25%",
                                filter: hoveredIndex === i ? "grayscale(0%) brightness(100%) blur(0px)" : hoveredIndex !== null ? "grayscale(80%) brightness(50%) blur(1px)" : "grayscale(0%) brightness(100%) blur(0px)",
                                y: hoveredIndex === i ? -10 : 0
                            } : {
                                flex: "1 1 auto",
                                filter: "grayscale(0%) brightness(100%)",
                                y: 0
                            }
                        }
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                            restDelta: 0.001
                        }}
                        className="relative overflow-hidden rounded-3xl h-[450px] lg:h-full w-full will-change-[flex,filter,transform] shadow-sm hover:shadow-2xl hover:z-10"
                    >
                        {/* Wrapper prevents content from squishing when container shrinks */}
                        <div className="absolute inset-0 w-full lg:w-[450px] h-full left-0 origin-left">
                            <ScrollReveal delay={i * 100} className="h-full block">
                                <VentureCard
                                    project={item}
                                    index={i}
                                    isIndonesian={isId}
                                    onClick={() => navigate(`/side-project/${item.id}`)}
                                />
                            </ScrollReveal>
                        </div>
                    </motion.div>
                ))}

                {/* 1 CTA Archive Block (Acts as the 4th fluid item) */}
                <motion.div
                    onMouseEnter={() => isDesktop && setHoveredIndex(3)}
                    layout
                    initial={false}
                    animate={
                        isDesktop ? {
                            flex: hoveredIndex === 3 ? "1 1 40%" : hoveredIndex !== null ? "1 1 15%" : "1 1 25%",
                            filter: hoveredIndex === 3 ? "grayscale(0%) brightness(100%) blur(0px)" : hoveredIndex !== null ? "grayscale(80%) brightness(50%) blur(1px)" : "grayscale(0%) brightness(100%) blur(0px)",
                            y: hoveredIndex === 3 ? -10 : 0
                        } : {
                            flex: "1 1 auto",
                            filter: "grayscale(0%) brightness(100%)",
                            y: 0
                        }
                    }
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="relative overflow-hidden rounded-3xl h-[450px] lg:h-full w-full bg-[var(--bg-card)] border border-[var(--border-color)] border-dashed will-change-[flex,filter,transform] hover:z-10"
                >
                    <ScrollReveal delay={300} className="h-full block">
                        <Link to="/side-projects" className="absolute inset-0 w-full lg:w-[350px] h-full group flex flex-col justify-center items-center text-center p-8 hover:bg-[var(--text-secondary)]/5 transition-colors cursor-pointer block z-10 mx-auto">
                            <Archive size={48} className={`text-[var(--text-primary)] mb-6 transition-colors ${hoveredIndex === 3 ? 'text-[var(--accent-blue)]' : ''}`} />
                            <h3 className={`text-3xl font-serif italic text-[var(--text-primary)] mb-4 transition-colors ${hoveredIndex === 3 ? 'text-[var(--accent-blue)]' : ''}`}>
                                {t('home.archive_title') || 'View All Ventures'}
                            </h3>
                            <p className={`text-[var(--text-secondary)] text-base max-w-xs font-light mb-8 transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== 3 ? 'opacity-0' : 'opacity-100'}`}>
                                {t('home.archive_desc') || 'Explore all experiments, products, and interactive prototypes.'}
                            </p>
                            <div className={`inline-flex items-center gap-2 text-[var(--accent-blue)] font-mono text-sm tracking-wider uppercase ${hoveredIndex === 3 ? 'underline' : ''}`}>
                                Explore Archive <ArrowRight size={16} className={`transition-transform duration-300 ${hoveredIndex === 3 ? 'translate-x-1' : ''}`} />
                            </div>
                        </Link>
                    </ScrollReveal>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeSideProjects;
