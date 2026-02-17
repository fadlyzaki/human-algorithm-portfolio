import React from 'react';
import { ArrowUpRight, BookOpen, PenTool } from 'lucide-react';
import { SUBSTACK_POSTS } from '../../data/portfolioData';
import ScrollReveal from '../ScrollReveal';

const HomeBlogSection = ({ t }) => {
    return (
        <section id="writing" className="py-24 md:py-32 border-b border-[var(--border-color)]">
            <div className="max-w-5xl mx-auto px-6">

                {/* SECTION HEADER */}
                <ScrollReveal>
                    <div className="flex items-end justify-between mb-16">
                        <div className="relative">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-[var(--text-primary)] mb-4">
                                Writing
                            </h2>
                            <div className="h-2 w-24 bg-[var(--accent-amber)]/50 absolute -bottom-2 left-0"></div>
                            <p className="font-mono text-sm text-[var(--text-secondary)] uppercase tracking-widest mt-6 max-w-md">
                // ENGINEERING_THOUGHTS // DESIGN_PHILOSOPHY
                            </p>
                        </div>

                        <a
                            href="https://fadlyzaki.substack.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[var(--accent-amber)] transition-colors group"
                        >
                            <span>View All Posts</span>
                            <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </ScrollReveal>

                {/* POSTS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SUBSTACK_POSTS.map((post, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <a
                                href={post.link}
                                target="_blank"
                                rel="noreferrer"
                                className="block group h-full"
                            >
                                <article className="h-full flex flex-col justify-between p-8 bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--accent-amber)] transition-colors duration-300 rounded-xl relative overflow-hidden">

                                    {/* Hover Accent */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-amber)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">
                                                {post.pubDate}
                                            </span>
                                            <PenTool size={14} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-amber)] transition-colors" />
                                        </div>

                                        <h3 className="text-xl font-bold leading-tight mb-4 group-hover:text-[var(--accent-amber)] transition-colors">
                                            {post.title}
                                        </h3>

                                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 line-clamp-3">
                                            {post.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors mt-auto">
                                        <span>Read Article</span>
                                        <ArrowUpRight size={12} />
                                    </div>
                                </article>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>

                {/* MOBILE CTA */}
                <div className="mt-12 md:hidden text-center">
                    <a
                        href="https://fadlyzaki.substack.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border border-[var(--border-color)] px-6 py-3 rounded-full hover:bg-[var(--bg-surface)] hover:text-[var(--accent-amber)] transition-colors"
                    >
                        <span>View All Posts</span>
                        <ArrowUpRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default HomeBlogSection;
