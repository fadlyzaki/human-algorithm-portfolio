import React from 'react';

const DeclassifiedMemo = ({ text, author }) => (
    <div className="relative bg-[#fff1c5] text-black p-6 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-sm mx-auto md:mx-0">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/10 -rotate-2"></div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-red-700 mb-2 border-b border-red-700/20 pb-1">
            CONFIDENTIAL // FIELD NOTE
        </div>
        <p className="font-serif italic text-sm leading-relaxed mb-4">
            "{text}"
        </p>
        <div className="font-mono text-xs opacity-60 text-right">
            — {author}
        </div>
    </div>
);

export default DeclassifiedMemo;
