/**
 * UnprovokedThoughtsIndex — Listing page for all MDX thoughts
 *
 * Displays all "Unprovoked Thoughts" posts in a clean editorial layout.
 * Follows the same structural pattern as SideProjectsIndex.jsx.
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getAllUnprovokedThoughts } from '../utils/mdx';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import NavigationMenu from '../components/NavigationMenu';

const UnprovokedThoughtsIndex = () => {
    const { isDark } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const thoughts = getAllUnprovokedThoughts();

    return (
        <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500">
            <SEO
                title="Unprovoked Thoughts"
                description="Essays, reflections, and unsolicited opinions on design, technology, and the spaces between."
                image={`https://fadlyzaki-design.vercel.app/api/og?page=${encodeURIComponent('/thoughts')}`}
                type="website"
                schema={{
                    '@context': 'https://schema.org',
                    '@type': 'CollectionPage',
                    name: 'Unprovoked Thoughts',
                    description: 'Essays, reflections, and unsolicited opinions on design, technology, and the spaces between.',
                    url: 'https://fadlyzaki-design.vercel.app/thoughts',
                    author: {
                        '@type': 'Person',
                        name: 'Fadly Uzzaki',
                    },
                }}
            />

            {/* Navigation */}
            <Navbar
                onOpenMenu={() => setIsMenuOpen(true)}
                title="Unprovoked Thoughts"
                backPath="/"
            />
            <NavigationMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />

            <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
                {/* Editorial Header */}
                <header className="mb-20 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)] animate-pulse" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                            Text-Based Transmissions
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif italic mb-6 tracking-tighter leading-[0.9]">
                        Unprovoked{' '}
                        <span className="text-[var(--text-secondary)]">Thoughts</span>
                    </h1>

                    <p className="text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl mx-auto">
                        Essays, reflections, and unsolicited opinions on design, technology,
                        and the spaces between.
                    </p>
                </header>

                {/* Thought Cards */}
                <div className="space-y-0">
                    {thoughts.map((thought, idx) => {
                        const { frontmatter, slug } = thought;

                        return (
                            <Link
                                key={slug}
                                to={`/thoughts/${slug}`}
                                className="group block py-10 border-b border-[var(--border-color)] first:border-t hover:bg-[var(--bg-surface)]/50 transition-colors duration-300 -mx-6 px-6"
                            >
                                <div className="flex items-start gap-6">
                                    {/* Emoji */}
                                    <div className="text-4xl mt-1 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shrink-0">
                                        {frontmatter.emoji}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h2 className="text-xl md:text-2xl font-serif font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-amber)] transition-colors duration-300 leading-tight">
                                            {frontmatter.title}
                                        </h2>

                                        {frontmatter.subtitle && (
                                            <p className="text-[var(--text-secondary)] font-light text-base leading-relaxed mb-4 line-clamp-2">
                                                {frontmatter.subtitle}
                                            </p>
                                        )}

                                        {/* Meta */}
                                        <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)] font-mono">
                                            {frontmatter.date && (
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar size={12} className="opacity-60" />
                                                    <span>
                                                        {new Date(frontmatter.date).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: 'numeric',
                                                        })}
                                                    </span>
                                                </div>
                                            )}
                                            {frontmatter.readTime && (
                                                <div className="flex items-center gap-1.5">
                                                    <Clock size={12} className="opacity-60" />
                                                    <span>{frontmatter.readTime}</span>
                                                </div>
                                            )}
                                            {frontmatter.tags?.length > 0 && (
                                                <div className="hidden sm:flex items-center gap-2">
                                                    {frontmatter.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="border border-[var(--border-color)] px-2 py-0.5 rounded text-[10px] uppercase tracking-wider"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="hidden md:flex items-center self-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                                        <ArrowRight size={20} className="text-[var(--accent-amber)]" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Empty State */}
                {thoughts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="font-mono text-sm text-[var(--text-secondary)] uppercase tracking-wider">
              // No thoughts transmitted yet
                        </p>
                    </div>
                )}
            </main>
            {/* Minimal Index Footer */}
            <footer className="w-full pt-16 pb-8 px-6 border-t border-[var(--border-color)] mt-0">
                <div className="max-w-4xl mx-auto">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-6">
                        Index
                    </h4>
                    <div className="flex flex-wrap gap-x-8 gap-y-3">
                        <Link to="/" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            Home
                        </Link>
                        <Link to="/#work" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            Work
                        </Link>
                        <Link to="/side-projects" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            Projects
                        </Link>
                        <Link to="/thoughts" className="text-sm text-[var(--accent-amber)] hover:text-[var(--text-primary)] transition-colors font-medium">
                            Thoughts
                        </Link>
                        <Link to="/about" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            About
                        </Link>
                        <Link to="/design-system" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            Design System
                        </Link>
                        <Link to="/contact" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            Contact
                        </Link>
                    </div>
                    <p className="font-mono text-[10px] text-[var(--text-secondary)] uppercase opacity-40 mt-8">
                        © 2026 Fadly Uzzaki. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default UnprovokedThoughtsIndex;
