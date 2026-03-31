/**
 * UnprovokedThoughtDetail  -  Individual MDX thought reader page
 *
 * Resolves slug from URL params > renders MDX content inside MDXProvider.
 * Includes scroll progress, editorial header, and EmojiFeedback.
 */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import {
    Calendar,
    Clock,
    User,
    Share2,
    ChevronRight,
} from 'lucide-react';
import { getThoughtBySlug, getAllUnprovokedThoughts } from '../utils/mdx';
import MDXComponents from '../components/mdx/MDXComponents';
import EmojiFeedback from '../components/mdx/EmojiFeedback';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import NavigationMenu from '../components/NavigationMenu';
import { useLanguage } from '../context/LanguageContext';

const UnprovokedThoughtDetail = () => {
    const { t, language } = useLanguage();
    const { slug } = useParams();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(0);

    // Resolve thought by slug and language
    const thought = getThoughtBySlug(slug, language);

    // Get all thoughts for "next thought" navigation
    const allThoughts = getAllUnprovokedThoughts(language);
    const currentIndex = allThoughts.findIndex((t) => t.slug === slug);
    const nextThought = allThoughts[(currentIndex + 1) % allThoughts.length];

    // Scroll progress tracking
    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setScrolled(height > 0 ? (winScroll / height) * 100 : 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle share
    const handleShare = async () => {
        const url = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: thought?.frontmatter.title,
                    text: thought?.frontmatter.subtitle,
                    url,
                });
            } catch {
                // User cancelled or share failed
            }
        } else {
            await navigator.clipboard.writeText(url);
        }
    };

    // 404 fallback
    if (!thought) {
        return (
            <div className="min-h-[100dvh] bg-[var(--bg-void)] text-[var(--text-primary)] flex flex-col items-center justify-center font-sans">
                <Navbar
                    onOpenMenu={() => setIsMenuOpen(true)}
                    title="404"
                    backPath="/thoughts"
                />
                <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                <div className="text-center">
                    <span className="text-6xl mb-6 block">💭</span>
                    <h1 className="text-3xl font-serif font-bold mb-4">Thought Not Found</h1>
                    <p className="text-[var(--text-secondary)] mb-8 font-mono text-sm">
                        This thought hasn't been provoked yet.
                    </p>
                    <Link
                        to="/thoughts"
                        className="font-mono text-xs uppercase tracking-widest text-[var(--accent-amber)] hover:text-[var(--text-primary)] transition-colors border-b border-[var(--accent-amber)] pb-1"
                    >
                        ← Back to all thoughts
                    </Link>
                </div>
            </div>
        );
    }

    const { Component, frontmatter } = thought;

    // Merge EmojiFeedback into component map so MDX files can use <EmojiFeedback />
    const components = {
        ...MDXComponents,
        EmojiFeedback,
    };

    return (
        <div className="min-h-[100dvh] bg-[var(--bg-void)] text-[var(--text-primary)] transition-colors duration-500 font-sans">
            <SEO
                title={frontmatter.title}
                description={frontmatter.subtitle}
                image={`https://fadlyzaki-design.vercel.app/api/og?page=${encodeURIComponent(`/thoughts/${slug}`)}`}
                type="article"
                schema={{
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    headline: frontmatter.title,
                    description: frontmatter.subtitle,
                    author: {
                        '@type': 'Person',
                        name: 'Fadly Uzzaki',
                    },
                    datePublished: frontmatter.date,
                    keywords: frontmatter.tags?.join(', '),
                    publisher: {
                        '@type': 'Person',
                        name: 'Fadly Uzzaki',
                    },
                    mainEntityOfPage: {
                        '@type': 'WebPage',
                        '@id': `https://fadlyzaki-design.vercel.app/thoughts/${slug}`,
                    },
                }}
            >
                {/* Article-specific OG meta */}
                <meta property="article:published_time" content={frontmatter.date} />
                <meta property="article:author" content="Fadly Uzzaki" />
                {frontmatter.tags?.map((tag) => (
                    <meta key={tag} property="article:tag" content={tag} />
                ))}
            </SEO>

            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-[var(--bg-void)]">
                <div
                    className="h-full bg-[var(--accent-amber)] transition-all duration-100 ease-out"
                    style={{ width: `${scrolled}%` }}
                />
            </div>

            {/* Navigation */}
            <Navbar
                onOpenMenu={() => setIsMenuOpen(true)}
                title="Unprovoked Thoughts"
                backPath="/thoughts"
            />
            <NavigationMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />

            <main className="pt-32 pb-24 max-w-3xl mx-auto px-6">
                {/* Article Header */}
                <header className="mb-16">
                    {/* Tags */}
                    {frontmatter.tags?.length > 0 && (
                        <div className="flex gap-3 mb-6 flex-wrap">
                            {frontmatter.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="font-mono text-[10px] uppercase tracking-widest border border-[var(--border-color)] px-2 py-1 rounded text-[var(--text-secondary)]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8 text-balance">
                        {frontmatter.title}
                    </h1>

                    {/* Subtitle */}
                    {frontmatter.subtitle && (
                        <p className="text-xl text-[var(--text-secondary)] leading-relaxed font-light mb-8 border-l-4 border-[var(--accent-amber)] pl-6">
                            {frontmatter.subtitle}
                        </p>
                    )}

                    {/* Meta bar */}
                    <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)] font-mono border-y border-[var(--border-color)] py-4">
                        {frontmatter.date && (
                            <div className="flex items-center gap-2">
                                <Calendar size={14} />
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
                            <div className="flex items-center gap-2">
                                <Clock size={14} />
                                <span>{frontmatter.readTime}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-2">
                            <User size={14} />
                            <span>Fadly Uzzaki 🧢</span>
                        </div>
                    </div>
                </header>

                {/* MDX Content */}
                <article className="prose prose-lg md:prose-xl max-w-none">
                    <MDXProvider components={components}>
                        <Component />
                    </MDXProvider>
                </article>

                {/* Footer / Share */}
                <div className="mt-20 pt-12 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="font-mono text-sm uppercase text-[var(--text-secondary)] mb-1">
                            Written By
                        </h3>
                        <div className="font-bold text-lg">Fadly Uzzaki 🧢</div>
                    </div>

                    <button
                        onClick={handleShare}
                        className="flex items-center justify-center gap-3 px-8 py-4 bg-[var(--accent-amber)] hover:bg-[var(--accent-amber)]/90 text-black rounded-lg transition-all duration-300 font-mono text-sm uppercase tracking-widest font-bold shadow-lg shadow-[var(--accent-amber)]/20 hover:shadow-[var(--accent-amber)]/40 hover:-translate-y-1 group w-full md:w-auto"
                    >
                        <Share2
                            size={18}
                            className="group-hover:rotate-12 transition-transform"
                        />
                        <span>Share Protocol</span>
                    </button>
                </div>

                {/* Next Thought Link */}
                {nextThought && nextThought.slug !== slug && (
                    <Link
                        to={`/thoughts/${nextThought.slug}`}
                        className="block mt-20 p-10 bg-gradient-to-b from-[var(--bg-surface)]/60 to-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-amber)] rounded-3xl group transition-all duration-500 text-center shadow-lg hover:shadow-2xl hover:shadow-[var(--accent-amber)]/10 hover:-translate-y-1 relative overflow-hidden"
                    >
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent-amber)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h4 className="font-mono text-[10px] text-[var(--accent-amber)] font-bold uppercase tracking-[0.2em] mb-3">
                            Next_Transmission
                        </h4>
                        <div className="text-xl md:text-2xl font-bold flex flex-col sm:flex-row items-center justify-center gap-4 font-serif text-[var(--text-primary)]">
                            <span className="text-4xl sm:text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">{nextThought.frontmatter.emoji}</span>
                            <span>{nextThought.frontmatter.title}</span>
                            <ChevronRight
                                size={20}
                                className="opacity-0 -ml-4 sm:ml-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 text-[var(--accent-amber)] hidden sm:block"
                            />
                        </div>
                    </Link>
                )}

            </main>

            {/* Minimal Index Footer */}
            <footer className="w-full pt-16 pb-8 px-6 border-t border-[var(--border-color)] mt-0">
                <div className="max-w-3xl mx-auto">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-6">
                        {t("footer.index")}
                    </h4>
                    <div className="flex flex-wrap gap-x-8 gap-y-3">
                        <Link to="/" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            {t("nav.home")}
                        </Link>
                        <Link to="/#work" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            {t("nav.work")}
                        </Link>
                        <Link to="/side-projects" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            {t("nav.side_projects")}
                        </Link>
                        <Link to="/thoughts" className="text-sm text-[var(--accent-amber)] hover:text-[var(--text-primary)] transition-colors font-medium">
                            {t("nav.notes")}
                        </Link>
                        <Link to="/about" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            {t("nav.about")}
                        </Link>
                        <Link to="/design-system" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            {t("nav.design_system")}
                        </Link>
                        <Link to="/contact" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            {t("nav.contact")}
                        </Link>
                    </div>
                    <p className="font-mono text-[10px] text-[var(--text-secondary)] uppercase opacity-40 mt-8">
                        © {new Date().getFullYear()} Fadly Uzzaki. {t("footer.rights") || "All rights reserved."}
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default UnprovokedThoughtDetail;
