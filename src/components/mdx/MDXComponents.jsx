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
            className="mb-8 leading-relaxed text-[var(--text-primary)]/90 font-serif text-lg md:text-xl"
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
            className="my-14 pl-8 md:pl-10 italic border-l-4 border-[var(--accent-amber)] text-xl md:text-3xl text-[var(--text-primary)] font-serif leading-relaxed bg-[var(--accent-amber)]/5 py-8 pr-8 rounded-r-3xl relative group"
            {...props}
        >
            <div className="absolute -left-[4px] top-0 w-[4px] h-0 bg-[var(--text-primary)] group-hover:h-full transition-all duration-700 ease-in-out" />
        </blockquote>
    ),

    // --- CODE ---
    pre: (props) => (
        <div className="my-10 rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface)]/50 backdrop-blur-sm shadow-xl shadow-black/10 group">
            <div className="flex items-center justify-between px-5 py-3 bg-[var(--bg-card)] border-b border-[var(--border-color)]">
                <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-red)]/40 group-hover:bg-[var(--accent-red)] transition-colors" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-amber)]/40 group-hover:bg-[var(--accent-amber)] transition-colors" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-green)]/40 group-hover:bg-[var(--accent-green)] transition-colors" />
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--text-secondary)] opacity-50 group-hover:opacity-100 transition-opacity">
                    Data_Packet_Segment
                </div>
            </div>
            <pre className="p-6 overflow-x-auto text-[13px] md:text-sm font-mono text-[var(--text-primary)]/90 leading-relaxed CustomScrollbar" {...props} />
        </div>
    ),
    code: ({ className, children, ...props }) => {
        const isInline = !className;
        if (isInline) {
            return (
                <code
                    className="font-mono text-[0.9em] bg-[var(--accent-amber)]/10 border border-[var(--accent-amber)]/20 px-1.5 py-0.5 rounded text-[var(--accent-amber)] font-medium"
                    {...props}
                >
                    {children}
                </code>
            );
        }
        return (
            <code className={`${className || ''} font-mono`} {...props}>
                {children}
            </code>
        );
    },

    // --- LISTS ---
    ul: (props) => (
        <ul
            className="my-8 ml-4 space-y-4 list-none"
            {...props}
        />
    ),
    ol: (props) => (
        <ol
            className="my-8 ml-4 space-y-4 list-decimal marker:text-[var(--accent-amber)] marker:font-mono marker:text-sm"
            {...props}
        />
    ),
    li: (props) => (
        <li className="text-lg md:text-xl font-serif text-[var(--text-primary)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-[-1.5rem] before:top-[0.8em] before:w-4 before:h-[1px] before:bg-[var(--accent-amber)] before:opacity-40 group hover:before:opacity-100 hover:before:w-6 transition-all duration-300">
            {props.children}
        </li>
    ),

    // --- HORIZONTAL RULE ---
    hr: () => (
        <hr className="my-16 border-none h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent opacity-50" />
    ),

    // --- IMAGES ---
    img: (props) => (
        <figure className="my-12">
            <div className="relative group overflow-hidden rounded-2xl border border-[var(--border-color)] shadow-2xl shadow-black/20">
                <img
                    className="w-full transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="lazy"
                    {...props}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {props.alt && (
                <figcaption className="text-center text-xs text-[var(--text-secondary)] mt-4 font-mono uppercase tracking-widest opacity-60">
                    // {props.alt}
                </figcaption>
            )}
        </figure>
    ),
};

export default MDXComponents;
