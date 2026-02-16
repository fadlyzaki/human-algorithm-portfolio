import React from 'react';
import DotGrid from '../ui/DotGrid';

const Container = ({ children, expanded = false, showChrome = false, backgroundOnly = false }) => {
    if (backgroundOnly) {
        return (
            <div className="w-full h-full relative overflow-hidden">
                {children}
            </div>
        );
    }
    return (
        <div className={`w-full h-full flex items-center justify-center ${expanded ? 'p-0' : 'p-4'} relative group transition-colors duration-300`}>
            <div className={`w-full ${expanded ? 'h-full border-none' : 'max-w-sm aspect-[16/10] border border-slate-100 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]'} bg-white dark:bg-transparent overflow-hidden flex flex-col group-hover:border-[var(--brand)]/20 transition-all duration-700`}>
                {(!expanded || showChrome) && <DotGrid />}
                <div className="flex-1 relative overflow-hidden flex flex-col">
                    {children}
                </div>
            </div>
            {/* Ambient Base Glow (Very Subtle) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--brand)] opacity-[0.02] blur-3xl -z-10 group-hover:opacity-[0.05] transition-opacity"></div>
        </div>
    );
};

export default Container;
