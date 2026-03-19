/**
 * MDX Component Map
 *
 * Maps standard Markdown/HTML elements to styled React components.
 * Optimized for a highly readable, engaging, and premium "text-heavy" blog reading experience.
 */
import React from 'react';
import { Hash, Quote } from 'lucide-react';

const MDXComponents = {
    // --- HEADINGS ---
    h1: (props) => (
        <h1
            className="text-4xl md:text-5xl font-serif font-extrabold leading-tight mt-16 mb-8 text-[var(--text-primary)] tracking-tight"
            {...props}
        />
    ),
    h2: (props) => (
        <h2
            className="text-2xl md:text-3xl font-bold mt-20 mb-6 font-sans tracking-tight text-[var(--text-primary)] flex items-center gap-3 border-b border-[var(--border-color)] pb-4 relative"
            {...props}
        >
            <Hash size={24} className="text-[var(--accent-amber)] opacity-70 shrink-0 absolute -left-8 hidden md:block" />
            <span>{props.children}</span>
        </h2>
    ),
    h3: (props) => (
        <h3
            className="text-xl md:text-2xl font-semibold mt-12 mb-4 font-sans text-[var(--text-primary)]"
            {...props}
        />
    ),

    // --- TEXT ---
    p: (props) => (
        <p
            className="mb-8 leading-[1.8] text-[var(--text-secondary)] font-serif text-[1.125rem] md:text-[1.25rem]"
            style={{ color: "var(--text-primary)", opacity: 0.95 }}
            {...props}
        />
    ),
    strong: (props) => (
        <strong className="font-bold text-[var(--text-primary)] bg-[var(--accent-amber)]/10 px-1 py-0.5 rounded shadow-sm" {...props} />
    ),
    em: (props) => (
        <em className="italic text-[var(--text-primary)]" {...props} />
    ),

    // --- LINKS ---
    a: (props) => (
        <a
            className="text-[var(--accent-amber)] hover:text-amber-600 font-medium border-b-2 border-[var(--accent-amber)]/30 hover:border-amber-600 transition-colors duration-200"
            target={props.href?.startsWith('http') ? '_blank' : undefined}
            rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            {...props}
        />
    ),

    // --- BLOCKQUOTE ---
    blockquote: (props) => (
        <blockquote
            className="my-14 pl-8 md:pl-10 italic border-l-4 border-[var(--accent-amber)] text-xl md:text-2xl text-[var(--text-primary)]/90 font-serif leading-relaxed bg-[var(--bg-surface)] py-8 pr-8 rounded-r-2xl shadow-xl shadow-black/5 relative overflow-hidden group"
            {...props}
        >
            <Quote className="text-[var(--accent-amber)]/10 w-24 h-24 absolute -bottom-4 -right-4 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700" />
            <div className="relative z-10">{props.children}</div>
        </blockquote>
    ),

    // --- CODE ---
    pre: (props) => {
        let lang = "Code Snippet";
        if (props.children?.props?.className) {
            lang = props.children.props.className.replace('language-', '').toUpperCase();
        }
        return (
            <div className="my-12 rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[#111111] shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 bg-[#1A1A1A] border-b border-white/10">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
                        {lang}
                    </div>
                </div>
                <div className="p-6 overflow-x-auto text-[14px] font-mono leading-loose CustomScrollbar text-gray-300">
                    <pre {...props} className="bg-transparent m-0 p-0 text-inherit leading-inherit font-inherit" />
                </div>
            </div>
        );
    },
    code: ({ className, children, ...props }) => {
        const isInline = !className;
        if (isInline) {
            return (
                <code
                    className="font-mono text-[0.85em] bg-[var(--bg-surface)] border border-[var(--border-color)] px-1.5 py-0.5 rounded text-[var(--text-primary)] font-bold shadow-sm inline-block translate-y-[-1px]"
                    {...props}
                >
                    {children}
                </code>
            );
        }
        return (
            <code className={`${className || ''} block`} {...props}>
                {children}
            </code>
        );
    },

    // --- LISTS ---
    ul: (props) => (
        <ul
            className="my-8 ml-6 md:ml-10 space-y-4 list-disc marker:text-[var(--accent-amber)]"
            {...props}
        />
    ),
    ol: (props) => (
        <ol
            className="my-8 ml-6 md:ml-10 space-y-4 list-decimal marker:text-[var(--accent-amber)] marker:font-bold"
            {...props}
        />
    ),
    li: (props) => (
        <li className="text-[1.125rem] md:text-[1.25rem] font-serif text-[var(--text-primary)]/95 leading-[1.8] pl-2">
            {props.children}
        </li>
    ),

    // --- HORIZONTAL RULE ---
    hr: () => (
        <div className="my-20 flex items-center justify-center gap-6 opacity-40">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)]" />
        </div>
    ),

    // --- IMAGES ---
    img: (props) => (
        <figure className="my-16">
            <div className="relative group overflow-hidden rounded-2xl border border-[var(--border-color)] shadow-xl shadow-black/10 text-center">
                <img
                    className="w-full h-auto max-h-[700px] object-cover bg-[var(--bg-surface)] transition-transform duration-700 hover:scale-[1.02]"
                    loading="lazy"
                    {...props}
                />
            </div>
            {props.alt && (
                <figcaption className="text-center text-sm font-sans tracking-wide text-[var(--text-secondary)] mt-5 italic">
                    {props.alt}
                </figcaption>
            )}
        </figure>
    ),
};

export default MDXComponents;
