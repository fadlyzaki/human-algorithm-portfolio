import React from 'react';
import {
    Smartphone, Monitor, Terminal, Activity, BarChart2, MessageSquare,
    Shield, Plane, BookOpen, Heart, Eye, Map, List, CheckCircle2, TrendingUp,
    Clock, DollarSign, Camera
} from 'lucide-react';

// ABSTRACT UI COMPONENTS
const WindowControls = () => (
    <div className="flex gap-1.5 mb-2 opacity-50">
        <div className="w-2 h-2 rounded-full bg-red-400"></div>
        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
    </div>
);

const SkeletonLine = ({ width = "100%", opacity = 0.2, height = "1.5px" }) => (
    <div className="bg-current rounded-full" style={{ width, opacity, height }}></div>
);

const ProjectPreview = ({ type = 'Web', expanded = false, image = null }) => {
    const t = type.toLowerCase();

    // IF IMAGE IS PROVIDED, RENDER IT INSIDE THE TECHNICAL FRAME
    if (image) {
        return (
            <div className={`w-full h-full flex items-center justify-center ${expanded ? 'p-0' : 'p-6'} relative group`}>
                <div className={`w-full ${expanded ? 'h-full border-none' : 'max-w-sm aspect-[16/10] border border-[var(--border-color)] rounded-lg shadow-xl'} bg-[var(--bg-surface)] overflow-hidden flex flex-col group-hover:border-[var(--brand)]/30 transition-all duration-500`}>
                    <div className="h-6 bg-[var(--bg-surface)] border-b border-[var(--border-color)] flex items-center px-3 shrink-0">
                        <WindowControls />
                        <div className="ml-auto flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[var(--brand)] animate-pulse"></div>
                            <span className="font-mono text-[8px] uppercase tracking-tighter opacity-50">{type}</span>
                        </div>
                    </div>
                    <div className="flex-1 relative overflow-hidden bg-[var(--bg-void)]">
                        {/* THE ACTUAL PROJECT IMAGE */}
                        <img
                            src={image}
                            alt={type}
                            className={`w-full h-full ${expanded ? 'object-cover' : 'object-cover'} opacity-80 group-hover:opacity-100 transition-all duration-700 ${expanded ? 'scale-100' : 'scale-100 group-hover:scale-105'}`}
                        />

                        {/* TECHNICAL OVERLAYS (Scanlines/Grid) */}
                        <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>

                        {/* DATA STAMP */}
                        <div className="absolute bottom-4 right-4 z-10 flex flex-col items-end gap-1 pointer-events-none">
                            <div className="font-mono text-[8px] uppercase tracking-widest text-white/40 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm border border-white/5">
                                SOURCE: {type.toUpperCase()}
                            </div>
                            <div className="flex gap-1">
                                {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-[var(--brand)] rounded-full opacity-30"></div>)}
                            </div>
                        </div>
                    </div>
                </div>
                {/* AMBIENT GLOW */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[var(--brand)] opacity-5 blur-3xl -z-10 group-hover:opacity-15 transition-opacity"></div>
            </div>
        );
    }

    // 1. EDUCATION (Interactive Workbook)
    if (t.includes('education') || t.includes('learning')) {
        return (
            <div className={`w-full h-full flex items-center justify-center ${expanded ? 'p-0' : 'p-6'} relative group`}>
                <div className={`w-full ${expanded ? 'h-full border-none' : 'max-w-sm aspect-[16/10] border border-[var(--border-color)] rounded-lg'} bg-[var(--bg-card)] shadow-xl overflow-hidden flex flex-col group-hover:shadow-[var(--brand)]/10 transition-all duration-500`}>
                    <div className="h-6 bg-[var(--bg-surface)] border-b border-[var(--border-color)] flex items-center px-3">
                        <WindowControls />
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[var(--brand)]/10 flex items-center justify-center text-[var(--brand)]">
                                <BookOpen size={16} />
                            </div>
                            <div className="flex-1 flex flex-col gap-1.5">
                                <SkeletonLine width="60%" opacity={0.6} height="3px" />
                                <SkeletonLine width="40%" opacity={0.3} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="p-3 border border-[var(--border-color)] rounded bg-[var(--bg-void)]/20">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="w-3 h-3 rounded-full bg-[var(--brand)] opacity-40"></div>
                                        <CheckCircle2 size={10} className="text-[var(--brand)] opacity-20" />
                                    </div>
                                    <SkeletonLine width="80%" opacity={0.3} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[var(--brand)] opacity-10 blur-3xl -z-10"></div>
            </div>
        );
    }

    // 2. FINTECH (Price Lock)
    if (t.includes('fintech') || t.includes('lock')) {
        return (
            <div className={`w-full h-full flex items-center justify-center ${expanded ? 'p-0' : 'p-8'} relative group`}>
                <div className={`w-full ${expanded ? 'max-w-full h-full border-none' : 'max-w-sm aspect-[16/10] border border-[var(--border-color)]'} bg-[var(--bg-card)] rounded-lg shadow-xl relative overflow-hidden group-hover:border-[var(--brand)]/30 transition-all duration-500`}>
                    <div className="h-full border-l-4 border-[var(--brand)] p-6 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-[var(--brand)]">
                                    <Shield size={18} />
                                    <span className="text-[10px] font-mono tracking-widest uppercase opacity-80">Secured Price</span>
                                </div>
                                <SkeletonLine width="120px" opacity={0.7} height="4px" />
                            </div>
                            <div className="p-2 bg-[var(--brand)]/10 rounded flex flex-col items-center">
                                <Plane size={16} className="text-[var(--brand)]" />
                                <div className="mt-1 h-3 w-0.5 bg-[var(--brand)] opacity-20"></div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-end border-b border-[var(--border-color)] pb-4">
                                <div>
                                    <SkeletonLine width="60px" opacity={0.2} className="mb-2" />
                                    <div className="flex items-center gap-1 text-[var(--text-primary)]">
                                        <DollarSign size={14} className="opacity-50" />
                                        <div className="h-5 w-24 bg-[var(--brand)]/10 rounded animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <Clock size={12} className="text-[var(--brand)] opacity-40" />
                                    <SkeletonLine width="40px" opacity={0.3} />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="h-8 w-full bg-[var(--brand)] opacity-20 rounded border border-[var(--brand)]/30 flex items-center justify-center">
                                    <SkeletonLine width="40%" opacity={0.5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--brand)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
        );
    }

    // 3. DATAVIZ (Year in Review)
    if (t.includes('dataviz') || t.includes('review') || t.includes('dashboard')) {
        return (
            <div className={`w-full h-full flex items-center justify-center ${expanded ? 'p-0' : 'p-8'} relative group`}>
                <div className={`w-full ${expanded ? 'max-w-full h-full border-none' : 'max-w-sm aspect-[16/10] border border-[var(--border-color)]'} bg-[var(--bg-card)] rounded-lg shadow-xl relative overflow-hidden flex group-hover:shadow-[var(--brand)]/20 transition-all duration-500`}>
                    <div className="flex-1 p-6 flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <SkeletonLine width="40%" opacity={0.5} height="3px" />
                            <div className="flex gap-1">
                                {[1, 2, 3].map(i => <div key={i} className="w-4 h-1 bg-[var(--brand)]/20 rounded"></div>)}
                            </div>
                        </div>
                        <div className="flex-1 flex items-end gap-2 px-2">
                            {[40, 70, 45, 90, 60, 80, 50, 65].map((h, i) => (
                                <div key={i} className="flex-1 bg-[var(--brand)]/10 border border-[var(--brand)]/20 rounded-t relative group/bar" style={{ height: `${h}%` }}>
                                    <div className="absolute inset-0 bg-[var(--brand)] opacity-0 group-hover/bar:opacity-30 transition-opacity"></div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-[var(--border-color)] flex justify-between">
                            <div className="flex items-center gap-3">
                                <TrendingUp size={14} className="text-[var(--brand)]" />
                                <SkeletonLine width="80px" opacity={0.3} />
                            </div>
                            <div className="flex items-center gap-2">
                                <Activity size={12} className="opacity-20" />
                                <BarChart2 size={12} className="opacity-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 4. AR / CAMERA (FilterMe)
    if (t.includes('ar') || t.includes('camera') || t.includes('filter')) {
        return (
            <div className={`w-full h-full flex items-center justify-center ${expanded ? 'p-0' : 'p-6'} relative group`}>
                <div className={`${expanded ? 'w-full h-full rounded-none border-none' : 'w-[120px] aspect-[9/18] rounded-[24px] border border-[var(--border-color)]'} bg-[var(--bg-card)] p-2 relative shadow-2xl group-hover:-translate-y-2 transition-transform duration-500 overflow-hidden`}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-20 bg-[var(--bg-void)] rounded-b-xl z-20"></div>
                    <div className="w-full h-full bg-[var(--bg-void)]/80 rounded-[18px] relative overflow-hidden">
                        {/* Scanning Mesh Effect */}
                        <div className="absolute inset-0 z-0 opacity-20"
                            style={{ backgroundImage: 'linear-gradient(var(--brand) 1px, transparent 1px), linear-gradient(90deg, var(--brand) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 border-4 border-[var(--brand)]/20 rounded-full animate-ping"></div>
                            <Camera size={32} className="text-[var(--brand)] opacity-40 absolute" />
                        </div>
                        {/* UI Overlays */}
                        <div className="absolute bottom-6 inset-x-0 px-4 flex justify-around">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border border-[var(--brand)]/30 bg-[var(--brand)]/5 backdrop-blur-sm flex items-center justify-center">
                                    <div className={`w-6 h-6 rounded-full ${i === 2 ? 'bg-[var(--brand)]/40' : 'bg-[var(--text-secondary)]/10'}`}></div>
                                </div>
                            ))}
                        </div>
                        {/* Scanning Line */}
                        <div className="absolute left-0 right-0 h-0.5 bg-[var(--brand)]/40 blur-[1px] top-1/2 animate-scan-slow shadow-[0_0_10px_var(--brand)]"></div>
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[var(--brand)] opacity-10 blur-3xl -z-10 group-hover:opacity-30 transition-opacity"></div>
            </div>
        );
    }

    // 5. SERVICE / LOGISTICS (Project Kinship)
    if (t.includes('service') || t.includes('logistics') || t.includes('kinship')) {
        return (
            <div className={`w-full h-full flex items-center justify-center ${expanded ? 'p-0' : 'p-8'} relative group`}>
                <div className={`w-full ${expanded ? 'max-w-full h-full border-none' : 'max-w-sm aspect-[16/10] border border-[var(--border-color)] rounded-lg shadow-xl'} bg-[var(--bg-card)] relative overflow-hidden flex group-hover:border-[var(--brand)]/30 transition-all duration-500`}>
                    <div className="absolute inset-0 opacity-20"
                        style={{ backgroundImage: 'radial-gradient(circle at 12px 12px, var(--brand) 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                    </div>
                    <svg className="absolute inset-0 w-full h-full p-10" viewBox="0 0 100 60">
                        <path d="M10,40 C30,10 70,50 90,20" fill="none" stroke="var(--brand)" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-40" />
                        <circle cx="10" cy="40" r="3" className="fill-[var(--brand)] opacity-40" />
                        <circle cx="90" cy="20" r="3" className="fill-[var(--brand)]" />
                        <circle cx="90" cy="20" r="8" className="stroke-[var(--brand)] fill-none opacity-20 animate-ping" />
                    </svg>
                    <div className="absolute bottom-6 right-6 w-44 bg-[var(--bg-void)]/90 backdrop-blur-md border border-[var(--border-color)] rounded-lg p-4 shadow-xl flex flex-col gap-2.5">
                        <div className="flex items-center gap-2">
                            <div className="p-1 px-1.5 bg-[var(--brand)]/10 rounded flex items-center gap-1.5">
                                <Heart size={10} className="text-[var(--brand)]" />
                                <span className="text-[8px] font-mono text-[var(--brand)] uppercase tracking-tighter">Emotional Link</span>
                            </div>
                        </div>
                        <SkeletonLine width="90%" opacity={0.6} height="2px" />
                        <div className="flex justify-between items-center mt-1">
                            <SkeletonLine width="40%" opacity={0.3} />
                            <div className="h-4 w-4 rounded-full bg-[var(--brand)]/10 border border-[var(--brand)]/20 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // DEFAULT WEB/SYSTEM (Abstract)
    return (
        <div className={`w-full h-full flex items-center justify-center ${expanded ? 'p-0' : 'p-8'} relative group`}>
            <div className={`w-full ${expanded ? 'max-w-full h-full border-none' : 'max-w-sm aspect-[16/10] border border-[var(--border-color)]'} bg-[#1e1e1e] rounded-lg shadow-2xl relative overflow-hidden flex flex-col group-hover:-translate-y-1 transition-transform duration-500`}>
                <div className="h-6 bg-[#252526] border-b border-[#333] flex items-center px-3">
                    <WindowControls />
                </div>
                <div className="p-4 font-mono text-[10px] leading-relaxed text-gray-400">
                    <div className="mb-2 flex items-center gap-2 text-sky-400/60">
                        <Terminal size={12} />
                        <span className="opacity-50">system_architecture.v3</span>
                    </div>
                    <div className="pl-4">
                        <span className="text-purple-400">const</span> <span className="text-blue-400">Project</span> = <span className="text-yellow-400">()</span> <span className="text-purple-400">={'>'}</span> <span className="text-yellow-400">{'{'}</span>
                    </div>
                    <div className="pl-8">
                        <span className="text-purple-400">return</span> (
                    </div>
                    <div className="pl-12">
                        <span className="text-gray-500">{'<'}</span>
                        <span className="text-green-400">Component.Solution</span>
                        <span className="text-sky-300"> status</span>=
                        <span className="text-orange-400">"stable"</span>
                        <span className="text-gray-500">{'/>'}</span>
                    </div>
                    <div className="pl-8 text-yellow-400">);</div>
                    <div className="pl-4 text-yellow-400">{'}'};</div>
                    <div className="mt-4 w-2 h-4 bg-[var(--brand)] animate-pulse"></div>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[var(--brand)] opacity-10 blur-3xl -z-10"></div>
        </div>
    );
};

export default ProjectPreview;
