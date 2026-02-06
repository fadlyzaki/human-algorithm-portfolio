import React from 'react';

/**
 * RichText Component
 * Safely renders text with markdown-like formatting for bolding.
 * Replaces **text** with <strong class="text-[var(--text-primary)]">text</strong>
 * Also handles *text* if needed for emphasis.
 * 
 * @param {string} text - The text to render
 * @param {string} className - Optional class name for the container
 */
const RichText = ({ text, className = "" }) => {
    if (!text) return null;

    // Split by ** delimiters
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return (
        <span className={className}>
            {parts.map((part, index) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    // Extract content between **
                    const content = part.substring(2, part.length - 2);
                    return (
                        <strong key={index} className="text-[var(--text-primary)] font-medium">
                            {content}
                        </strong>
                    );
                }
                // Return normal text
                return part;
            })}
        </span>
    );
};

export default RichText;
