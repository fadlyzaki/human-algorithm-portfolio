import React from 'react';

const StickyNote = ({ text, color = 'text-[var(--text-secondary)]', className = '', rotate = 'lg:rotate-1' }) => (
    <div className={`font-serif italic text-base ${color} opacity-90 mt-8 p-4 bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xl ${rotate} transition-transform hover:rotate-0 duration-300 rounded-lg max-w-md ${className}`}>
        <div className="w-2 h-2 rounded-full bg-current opacity-50 mb-2"></div>
        "{text}"
    </div>
);

export default StickyNote;
