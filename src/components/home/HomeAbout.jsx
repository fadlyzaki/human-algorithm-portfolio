import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Heart, Cpu, Activity, Flame, BookOpen, PenLine, Palette } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import ProfileScanner from '../ProfileScanner';
import RichText from '../RichText';

const HomeAbout = ({ t }) => {
    return (
        <section id="about" className="mb-24 scroll-mt-24">
            <SectionTitle number="3" title={t('home.section_about')} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* 1. MAIN BIO (Span 2 cols) */}
                <div className="md:col-span-2 p-8 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <User size={120} strokeWidth={0.5} />
                    </div>
                    <div className="prose prose-invert max-w-none relative z-10">
                        <p className="text-xl md:text-3xl text-[var(--text-primary)] leading-tight mb-8 font-serif italic opacity-90">
                            {t('home.about_quote')}
                        </p>
                        <div className="text-[var(--text-secondary)] space-y-6 text-lg font-light leading-relaxed">
                            <p><RichText text={t('home.about_p1')} /></p>
                            <p><RichText text={t('home.about_p2')} /></p>
                        </div>
                    </div>
                </div>

                {/* 2. VISUAL MODULE (Span 1 col) */}
                <div className="md:col-span-1 h-full min-h-[300px]">
                    <ProfileScanner
                        imageSrc="/about-fadly.jpg"
                        aspectRatio="h-full"
                        showBadge={true}
                        className="shadow-xl h-full"
                    />
                </div>

                {/* 3. PHILOSOPHY (Span 1 col) */}
                <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl flex flex-col justify-between group hover:border-[var(--accent-amber)] transition-colors">
                    <div>
                        <h4 className="font-mono text-[var(--accent-amber)] text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Heart size={14} className="text-[var(--accent-amber)]" /> {t('home.philosophy_title')}
                        </h4>
                        <blockquote className="text-lg text-[var(--text-primary)] font-light leading-relaxed mb-6">
                            <RichText text={t('home.philosophy_quote')} />
                        </blockquote>
                    </div>
                    <Link to="/about" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--accent-amber)] transition-colors">
                        {t('home.read_philosophy')} <ArrowRight size={14} />
                    </Link>
                </div>

                {/* 4. CURRENT FOCUS (Span 1 col) */}
                <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl relative overflow-hidden group hover:border-[var(--accent-blue)] transition-colors">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-30 transition-opacity">
                        <Cpu size={64} strokeWidth={1} />
                    </div>
                    <h4 className="font-mono text-[var(--accent-blue)] text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Cpu size={14} className="text-[var(--accent-blue)]" />
                        {t('home.current_focus')}
                    </h4>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed relative z-10">
                        <RichText text={t('home.current_focus_desc')} />
                    </p>
                </div>

                {/* 5. RUNTIME METRICS (Span 1 col) */}
                <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:border-[var(--text-primary)] transition-colors">
                    <h4 className="font-mono text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Activity size={14} className="text-[var(--text-secondary)]" /> {t('home.personal_interests')}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { label: "Duolingo", val: "Daily", icon: Flame, color: "text-orange-500", url: "https://www.duolingo.com/profile/fadlyzaki" },
                            { label: "Strava", val: "5K/Wk", icon: Activity, color: "text-orange-600", url: "https://www.strava.com/athletes/129304799" },
                            { label: "Goodreads", val: "Daily", icon: BookOpen, color: "text-amber-200", url: "https://www.goodreads.com/user/show/32928962-fadlyzaki" },
                            { label: "Substack", val: "Weekly", icon: PenLine, color: "text-purple-400", url: "https://substack.com/@fadlyzaki" }
                        ].map((interest, i) => (
                            <a
                                key={i}
                                href={interest.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col p-2 bg-[var(--bg-surface)] rounded border border-[var(--border-color)] hover:border-[var(--text-primary)] hover:-translate-y-0.5 transition-all"
                            >
                                <interest.icon size={16} className={`mb-2 ${interest.color}`} />
                                <span className="text-xs font-bold text-[var(--text-primary)]">{interest.label}</span>
                                <span className="text-[10px] font-mono text-[var(--text-secondary)] opacity-70">{interest.val}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* 6. SKETCHES TEASER (Span 3 cols — Full Width) */}
                <Link
                    to="/sketches"
                    className="md:col-span-3 group relative overflow-hidden rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-amber)] transition-all duration-500 cursor-pointer"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10 flex items-center justify-between p-6 md:p-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-amber)] transition-colors">
                                <Palette size={20} className="text-[var(--accent-amber)] opacity-60 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div>
                                <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-1">
                                    Sketches
                                </h4>
                                <p className="text-[var(--text-primary)] text-sm md:text-base font-light">
                                    Before the pixels, there were pencils.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="hidden md:inline-block font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Explore the raw side →
                            </span>
                            <div className="px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] font-mono text-xs text-[var(--accent-amber)]">
                                90+ pieces
                            </div>
                        </div>
                    </div>
                </Link>

            </div>
        </section>
    );
};

export default HomeAbout;
