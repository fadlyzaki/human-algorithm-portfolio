import React from 'react';
import { Layout, Smartphone, PieChart, Monitor, Code } from 'lucide-react';

const ProjectPreview = ({ type = 'Web' }) => {
    // Determine Type
    const isMobile = type.toLowerCase().includes('mobile') || type.toLowerCase().includes('app');
    const isDashboard = type.toLowerCase().includes('dashboard') || type.toLowerCase().includes('platform');
    const isSystem = type.toLowerCase().includes('system') || type.toLowerCase().includes('architecture') || type.toLowerCase().includes('code');

    // Abstract UI Components
    const WindowControls = () => (
        <div className="flex gap-1.5 mb-3 opacity-30">
            <div className="w-2 h-2 rounded-full bg-current"></div>
            <div className="w-2 h-2 rounded-full bg-current"></div>
            <div className="w-2 h-2 rounded-full bg-current"></div>
        </div>
    );

    const SkeletonLines = ({ count = 3, width = "100%" }) => (
        <div className="space-y-2 opacity-20">
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="h-2 bg-current rounded-full" style={{ width: i === count - 1 ? '60%' : width }}></div>
            ))}
        </div>
    );

    // 1. MOBILE MOCKUP
    if (isMobile) {
        return (
            <div className="w-full h-full flex items-center justify-center p-8 bg-[var(--bg-void)]/20">
                <div className="w-32 h-[200px] border-2 border-[var(--text-secondary)] rounded-2xl p-2 relative flex flex-col gap-3 opacity-60 group-hover:opacity-100 group-hover:border-[var(--brand)] group-hover:scale-105 transition-all duration-500">
                    <div className="w-10 h-3 bg-[var(--text-secondary)]/20 rounded-full mx-auto mb-2"></div>
                    {/* UI Body */}
                    <div className="flex-1 space-y-2">
                        <div className="w-full aspect-video bg-[var(--text-secondary)]/10 rounded"></div>
                        <SkeletonLines count={4} />
                    </div>
                    {/* Floating Action Button */}
                    <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-[var(--brand)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            </div>
        );
    }

    // 2. DASHBOARD MOCKUP
    if (isDashboard) {
        return (
            <div className="w-full h-full flex items-center justify-center p-8 bg-[var(--bg-void)]/20">
                <div className="w-full max-w-sm aspect-[4/3] border border-[var(--text-secondary)] rounded-lg p-4 relative flex flex-col gap-4 opacity-60 group-hover:opacity-100 group-hover:border-[var(--brand)] group-hover:-translate-y-1 transition-all duration-500 bg-[var(--bg-card)]">
                    {/* Sidebar + Main */}
                    <div className="flex gap-4 h-full">
                        <div className="w-12 h-full bg-[var(--text-secondary)]/10 rounded flex flex-col gap-2 p-1">
                            <div className="w-full aspect-square bg-[var(--text-secondary)]/20 rounded-sm"></div>
                            <div className="w-full aspect-square bg-[var(--text-secondary)]/20 rounded-sm"></div>
                        </div>
                        <div className="flex-1 flex flex-col gap-3">
                            <div className="flex justify-between items-center mb-1">
                                <div className="w-20 h-2 bg-[var(--text-secondary)]/20 rounded"></div>
                                <div className="w-4 h-4 rounded-full bg-[var(--text-secondary)]/10"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="aspect-video bg-[var(--text-secondary)]/5 border border-[var(--text-secondary)]/10 rounded p-2">
                                    <div className="w-4 h-4 rounded-full border border-current opacity-20 mb-1"></div>
                                    <div className="w-full h-1 bg-current opacity-10 rounded"></div>
                                </div>
                                <div className="aspect-video bg-[var(--text-secondary)]/5 border border-[var(--text-secondary)]/10 rounded p-2">
                                    <div className="w-4 h-4 rounded-full border border-current opacity-20 mb-1"></div>
                                    <div className="w-full h-1 bg-current opacity-10 rounded"></div>
                                </div>
                            </div>
                            <SkeletonLines count={2} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 3. SYSTEM / GENERIC MOCKUP
    return (
        <div className="w-full h-full flex items-center justify-center p-8 bg-[var(--bg-void)]/20">
            <div className="w-full max-w-sm aspect-[16/10] border border-[var(--text-secondary)] rounded-lg p-4 relative flex flex-col opacity-50 group-hover:opacity-100 group-hover:border-[var(--brand)] transition-all duration-500 bg-[var(--bg-card)] shadow-xl">
                <WindowControls />
                <div className="flex-1 font-mono text-[8px] leading-relaxed opacity-40 p-2 text-[var(--text-secondary)] overflow-hidden">
                    <span className="text-[var(--brand)]">import</span> React <span className="text-[var(--brand)]">from</span> 'react';<br />
                    <span className="text-[var(--brand)]">const</span> System = () ={'>'} {'{'}<br />
                    &nbsp;&nbsp;<span className="text-yellow-500">return</span> (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className="text-[var(--brand)]">Component</span> /{'>'}<br />
                    &nbsp;&nbsp;);<br />
                    {'}'}
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;
