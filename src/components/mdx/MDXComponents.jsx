/**
 * MDX Component Map
 *
 * Maps standard Markdown/HTML elements to styled React components
 * using the existing design system tokens and "Digital Editorial" aesthetic.
 */
import React from 'react';
import { Hash } from 'lucide-react';

const MDXComponents = {
    // --- HEADINGS ---
    h1: (props) => (
        <h1
            className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8 text-[var(--text-primary)] tracking-tight"
            {...props}
        />
    ),
    h2: (props) => (
        <h2
            className="text-2xl md:text-3xl font-bold mt-14 mb-6 font-sans tracking-tight text-[var(--text-primary)] flex items-center gap-3"
            {...props}
        >
            <Hash size={20} className="text-[var(--accent-amber)] opacity-70 shrink-0" />
            <span>{props.children}</span>
        </h2>
    ),
    h3: (props) => (
        <h3
            className="text-xl md:text-2xl font-semibold mt-10 mb-4 font-sans text-[var(--text-primary)]"
            {...props}
        />
    ),

    // --- TEXT ---
    p: (props) => (
        <p
            className="mb-6 leading-relaxed text-[var(--text-primary)] font-serif text-lg"
            {...props}
        />
    ),
    strong: (props) => (
        <strong className="font-bold text-[var(--text-primary)]" {...props} />
    ),
    em: (props) => (
        <em className="italic text-[var(--text-primary)]" {...props} />
    ),

    // --- LINKS ---
    a: (props) => (
        <a
            className="text-[var(--accent-blue)] hover:text-[var(--accent-amber)] underline underline-offset-4 decoration-1 decoration-[var(--accent-blue)]/30 hover:decoration-[var(--accent-amber)] transition-colors duration-200"
            target={props.href?.startsWith('http') ? '_blank' : undefined}
            rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            {...props}
        />
    ),

    // --- BLOCKQUOTE ---
    blockquote: (props) => (
        <blockquote
            className="my-10 pl-8 italic border-l-4 border-[var(--accent-amber)] text-xl md:text-2xl text-[var(--text-primary)] font-serif bg-[var(--bg-surface)] py-6 pr-6 rounded-r-lg relative"
            {...props}
        />
    ),

    // --- CODE ---
    pre: (props) => (
        <div className="my-8 rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface)]">
            <div className="flex items-center justify-between px-4 py-2 bg-[var(--bg-card)] border-b border-[var(--border-color)]">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-wider">
                    code
                </span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm font-mono text-[var(--text-primary)] leading-relaxed" {...props} />
        </div>
    ),
    code: ({ className, children, ...props }) => {
        // Inline code (not inside a pre block)
        const isInline = !className;
        if (isInline) {
            return (
                <code
                    className="font-mono text-sm bg-[var(--bg-surface)] border border-[var(--border-color)] px-1.5 py-0.5 rounded text-[var(--accent-amber)]"
                    {...props}
                >
                    {children}
                </code>
            );
        }
        // Block code (inside pre) — render as-is
        return (
            <code className={`${className || ''} font-mono`} {...props}>
                {children}
            </code>
        );
    },

    // --- LISTS ---
    ul: (props) => (
        <ul
            className="my-6 ml-6 space-y-3 list-none"
            {...props}
        />
    ),
    ol: (props) => (
        <ol
            className="my-6 ml-6 space-y-3 list-decimal marker:text-[var(--accent-amber)] marker:font-mono"
            {...props}
        />
    ),
    li: (props) => (
        <li className="text-lg font-serif text-[var(--text-primary)] leading-relaxed pl-2 relative before:content-['—'] before:absolute before:-left-5 before:text-[var(--accent-amber)] before:opacity-60">
            {props.children}
        </li>
    ),

    // --- HORIZONTAL RULE ---
    hr: () => (
        <hr className="my-12 border-none h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
    ),

    // --- IMAGES ---
    img: (props) => (
        <figure className="my-8">
            <img
                className="w-full rounded-lg border border-[var(--border-color)]"
                loading="lazy"
                {...props}
            />
            {props.alt && (
                <figcaption className="text-center text-sm text-[var(--text-secondary)] mt-3 font-mono">
                    {props.alt}
                </figcaption>
            )}
        </figure>
    ),
};

export default MDXComponents;
