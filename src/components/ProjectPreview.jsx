import React from 'react';
import { Smartphone, Monitor, Terminal, Activity, BarChart2, MessageSquare } from 'lucide-react';

// ABSTRACT UI COMPONENTS
const WindowControls = () => (
    <div className="flex gap-1.5 mb-2 opacity-50">
        <div className="w-2 h-2 rounded-full bg-red-400"></div>
        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
    </div>
);

const SkeletonLine = ({ width = "100%", opacity = 0.2 }) => (
    <div className="h-1.5 bg-current rounded-full" style={{ width, opacity }}></div>
);

const ProjectPreview = ({ type = 'Web' }) => {
    const isMobile = type.toLowerCase().includes('mobile') || type.toLowerCase().includes('app');
    const isDashboard = type.toLowerCase().includes('dashboard') || type.toLowerCase().includes('platform');

    // 1. MOBILE MOCKUP (Chat / List Interface)
    if (isMobile) {
        return (
            <div className="w-full h-full flex items-center justify-center p-6 relative group">
                <div className="w-[120px] aspect-[9/18] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[20px] p-2 relative shadow-2xl group-hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3 w-16 bg-[var(--bg-void)] rounded-b-lg z-10"></div>

                    {/* Screen Content */}
                    <div className="w-full h-full bg-[var(--bg-void)]/50 rounded-[14px] flex flex-col pt-6 px-2 gap-2">
                        {/* Header */}
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-[var(--brand)] opacity-20"></div>
                            <SkeletonLine width="60%" opacity={0.4} />
                        </div>
                        {/* Chat Bubbles */}
                        <div className="flex flex-col gap-2">
                            <div className="bg-[var(--brand)]/10 p-2 rounded-lg rounded-tl-none self-start max-w-[80%]">
                                <SkeletonLine width="30px" opacity={0.3} />
                            </div>
                            <div className="bg-[var(--text-secondary)]/10 p-2 rounded-lg rounded-tr-none self-end max-w-[80%]">
                                <SkeletonLine width="40px" opacity={0.3} />
                            </div>
                            <div className="bg-[var(--brand)]/10 p-2 rounded-lg rounded-tl-none self-start max-w-[80%]">
                                <SkeletonLine width="50px" opacity={0.3} />
                            </div>
                        </div>
                        {/* FAB */}
                        <div className="absolute bottom-3 right-3 w-8 h-8 bg-[var(--brand)] rounded-full shadow-lg flex items-center justify-center text-[var(--bg-void)]">
                            <MessageSquare size={12} fill="currentColor" />
                        </div>
                    </div>
                </div>
                {/* Decoration Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[var(--brand)] opacity-20 blur-3xl -z-10 group-hover:opacity-40 transition-opacity"></div>
            </div>
        );
    }

    // 2. DASHBOARD MOCKUP (Sidebar + Cards)
    if (isDashboard) {
        return (
            <div className="w-full h-full flex items-center justify-center p-8 relative group">
                <div className="w-full max-w-sm aspect-[16/10] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg shadow-xl relative overflow-hidden group-hover:shadow-[var(--brand)]/20 transition-all duration-500">
                    <div className="flex h-full">
                        {/* Sidebar */}
                        <div className="w-12 h-full border-r border-[var(--border-color)] bg-[var(--bg-void)]/30 flex flex-col items-center py-3 gap-3">
                            <div className="w-6 h-6 rounded bg-[var(--brand)] opacity-80"></div>
                            <div className="w-4 h-4 rounded bg-[var(--text-secondary)] opacity-20"></div>
                            <div className="w-4 h-4 rounded bg-[var(--text-secondary)] opacity-20"></div>
                            <div className="mt-auto w-4 h-4 rounded-full bg-[var(--text-secondary)] opacity-20"></div>
                        </div>
                        {/* Main Area */}
                        <div className="flex-1 p-4 flex flex-col gap-4">
                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <SkeletonLine width="30%" opacity={0.5} />
                                <div className="flex gap-2">
                                    <div className="w-20 h-6 bg-[var(--brand)]/10 rounded"></div>
                                </div>
                            </div>
                            {/* Metrics Cards */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-[var(--bg-void)]/50 p-2 rounded border border-[var(--border-color)]/50">
                                    <div className="flex justify-between items-start mb-2">
                                        <Activity size={12} className="text-[var(--brand)]" />
                                    </div>
                                    <SkeletonLine width="60%" opacity={0.8} />
                                </div>
                                <div className="bg-[var(--bg-void)]/50 p-2 rounded border border-[var(--border-color)]/50">
                                    <div className="flex justify-between items-start mb-2">
                                        <BarChart2 size={12} className="text-[var(--text-secondary)]" />
                                    </div>
                                    <SkeletonLine width="40%" opacity={0.5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
        );
    }

    // 3. SYSTEM / GENERIC (Terminal Code)
    return (
        <div className="w-full h-full flex items-center justify-center p-8 relative group">
            <div className="w-full max-w-sm aspect-[16/10] bg-[#1e1e1e] border border-[var(--border-color)] rounded-lg shadow-2xl relative overflow-hidden flex flex-col group-hover:-translate-y-1 transition-transform duration-500">
                {/* Header */}
                <div className="h-6 bg-[#252526] border-b border-[#333] flex items-center px-3">
                    <WindowControls />
                </div>
                {/* Code Content */}
                <div className="p-4 font-mono text-[10px] leading-relaxed text-gray-400">
                    <div>
                        <span className="text-purple-400">const</span> <span className="text-blue-400">Architect</span> = <span className="text-yellow-400">()</span> <span className="text-purple-400">={'>'}</span> <span className="text-yellow-400">{'{'}</span>
                    </div>
                    <div className="pl-4">
                        <span className="text-purple-400">return</span> (
                    </div>
                    <div className="pl-8">
                        <span className="text-gray-500">{'<'}</span>
                        <span className="text-green-400">System.Core</span>
                        <span className="text-sky-300"> status</span>=
                        <span className="text-orange-400">"stable"</span>
                        <span className="text-gray-500">{'/>'}</span>
                    </div>
                    <div className="pl-4 text-yellow-400">);</div>
                    <div className="text-yellow-400">{'}'};</div>

                    {/* Cursor */}
                    <div className="mt-2 w-2 h-4 bg-[var(--brand)] animate-pulse"></div>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[var(--brand)] opacity-10 blur-3xl -z-10"></div>
        </div>
    );
};

export default ProjectPreview;
