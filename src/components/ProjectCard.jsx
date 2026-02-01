import React from 'react';
import {
    Smartphone, Monitor, Terminal, Activity, BarChart2, MessageCircle,
    Shield, Plane, BookOpen, Heart, Eye, Map, List, CheckCircle2, TrendingUp,
    Clock, DollarSign, Camera, Users, Truck, Cpu
} from 'lucide-react';

// ABSTRACT UI COMPONENTS
const WindowControls = () => (
    <div className="flex gap-1.5 mb-2 opacity-30">
        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
    </div>
);

const SkeletonLine = ({ width = "100%", opacity = 0.15, height = "2px" }) => (
    <div className="bg-current rounded-full" style={{ width, opacity, height }}></div>
);

const FigLabel = ({ index = "1.0", type = "SCHEMATIC" }) => (
    <div className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 pointer-events-none flex items-center gap-2">
        <span className="px-1.5 py-0.5 border border-slate-200 rounded text-[8px] font-bold text-slate-500">FIG {index}</span>
        <span>{type}</span>
    </div>
);

const DotGrid = () => (
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
    </div>
);

const ProjectCard = ({ type = 'Web', expanded = false, image = null, id = null }) => {
    const t = type.toLowerCase();

    // THE CONTAINER (White Diagram Sheet)
    const Container = ({ children, figIndex = "1.0", schematicType = "SYSTEM_ARCHITECTURE" }) => (
        <div className={`w-full h-full flex items-center justify-center ${expanded ? 'p-0' : 'p-4'} relative group transition-colors duration-500`}>
            <div className={`w-full ${expanded ? 'h-full border-none' : 'max-w-sm aspect-[16/10] border border-slate-100 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]'} bg-white overflow-hidden flex flex-col group-hover:border-[var(--brand)]/20 transition-all duration-700`}>
                <DotGrid />
                <div className="flex-1 relative overflow-hidden flex flex-col">
                    {children}
                    <FigLabel index={figIndex} type={schematicType} />
                </div>
            </div>
            {/* Ambient Base Glow (Very Subtle) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--brand)] opacity-[0.02] blur-3xl -z-10 group-hover:opacity-[0.05] transition-opacity"></div>
        </div>
    );

    // IF IMAGE IS PROVIDED, RENDER IT AS A FLOATING DOCUMENT
    if (image) {
        return (
            <Container figIndex="2.1" schematicType={`${type.toUpperCase()}_DOCUMENTATION`}>
                <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="relative w-full h-full max-w-[85%] max-h-[80%] rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100 transform group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-700">
                        <img
                            src={image}
                            alt={type}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                        />
                        {/* Technical Overlay on Image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand)]/10 to-transparent mix-blend-overlay"></div>
                    </div>
                    {/* Floating Tech Badges */}
                    <div className="absolute top-12 right-12 w-12 h-12 rounded-full border border-slate-100 bg-white/80 backdrop-blur shadow-sm flex items-center justify-center text-[var(--brand)] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                        <Monitor size={20} />
                    </div>
                </div>
            </Container>
        );
    }

    // --------------------------------------------------------------------------
    // UNIQUE DIAGRAMS PER PROJECT ID
    // --------------------------------------------------------------------------

    // 1. INTERACTIVE WORKBOOK (Education)
    if (id === 'interactive-workbook') {
        return (
            <Container figIndex="4.0" schematicType="PEDAGOGICAL_STRUCTURE">
                <div className="w-full h-full p-10 grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className={`p-4 bg-white border ${i % 2 === 0 ? 'border-[var(--brand)]/30 shadow-md' : 'border-slate-100'} rounded-xl flex flex-col gap-3 group/item`}>
                            <div className="flex justify-between items-center">
                                <BookOpen size={14} className={i % 2 === 0 ? 'text-[var(--brand)]' : 'text-slate-200'} />
                                <div className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-[var(--brand)]' : 'bg-slate-100'}`}></div>
                            </div>
                            <SkeletonLine width="80%" opacity={0.1} />
                        </div>
                    ))}
                </div>
            </Container>
        );
    }

    // 2. YEAR IN REVIEW (DataViz)
    if (id === 'year-in-review') {
        return (
            <Container figIndex="6.2" schematicType="QUARTAL_PERFORMANCE_METRICS">
                <div className="w-full h-full p-12 flex flex-col">
                    <div className="flex-1 flex items-end gap-3 px-4">
                        {[40, 70, 45, 90, 60, 80, 50, 65].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                <div className="w-full bg-slate-50 rounded-t-lg group-hover:bg-[var(--brand)]/10 transition-colors relative overflow-hidden"
                                    style={{ height: `${h}%` }}>
                                    <div className="absolute inset-x-0 top-0 h-1 bg-[var(--brand)]/40"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
                        <TrendingUp size={16} className="text-[var(--brand)] opacity-40" />
                        <div className="flex gap-2">
                            <SkeletonLine width="40px" opacity={0.1} />
                            <SkeletonLine width="20px" opacity={0.05} />
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    // 3. PRICE LOCK (Fintech)
    if (id === 'price-lock') {
        return (
            <Container figIndex="5.5" schematicType="FINANCIAL_ESCROW_WRAPPER">
                <div className="w-full h-full p-12 flex items-center justify-center">
                    <div className="w-full bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-xl relative overflow-hidden group-hover:border-[var(--brand)]/20 transition-all">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--brand)]/5 -mr-12 -mt-12 rounded-full"></div>
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <Shield size={16} className="text-[var(--brand)]" />
                                    <span className="font-mono text-[9px] tracking-widest text-slate-400">SECURE_AUTH</span>
                                </div>
                                <SkeletonLine width="100px" opacity={0.2} height="4px" />
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                                <DollarSign size={20} className="text-[var(--brand)] opacity-40" />
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-10 border-t border-slate-50 mt-4">
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    // 4. PROJECT KINSHIP / STOQO LOGISTICS (Logistics)
    if (id === 'project-kinship' || id === 'stoqo-logistics') {
        return (
            <Container figIndex="1.2" schematicType="SOCIAL_LOGISTICS_PATH">
                <div className="w-full h-full p-12">
                    <svg className="w-full h-full" viewBox="0 0 100 60">
                        {/* Dashed Path */}
                        <path
                            d="M20,40 C35,40 45,20 60,25 C75,30 85,15 90,10"
                            fill="none"
                            stroke="var(--brand)"
                            strokeWidth="3"
                            strokeDasharray="6 8"
                            strokeLinecap="round"
                            className="opacity-20"
                        />
                        <circle cx="20" cy="40" r="4" className="fill-[var(--brand)] opacity-20" />
                        <circle cx="90" cy="10" r="4" className="fill-[var(--brand)]" />
                    </svg>
                    {/* Floating Detail Card */}
                    <div className="absolute bottom-10 right-10 w-48 bg-white border border-slate-100 rounded-lg p-4 shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex flex-col gap-2.5">
                        <div className="flex items-center gap-2">
                            <Truck size={10} className="text-orange-500" />
                            <span className="font-mono text-[8px] uppercase tracking-widest text-orange-500 font-bold">LAST_MILE_NODE</span>
                        </div>
                        <div className="h-px w-full bg-slate-200"></div>
                        <div className="flex items-center justify-between">
                            <div className="w-12 h-1 bg-slate-100 rounded-full"></div>
                            <div className="w-3 h-3 rounded-full border-2 border-slate-200"></div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    // 5. FILTER ME (AR)
    if (id === 'filter-me') {
        return (
            <Container figIndex="7.1" schematicType="COMPUTER_VISION_NODE_MESH">
                <div className="w-full h-full flex items-center justify-center p-12">
                    <div className="relative w-40 h-40">
                        {/* Abstract Mesh Nodes */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-full rounded-full border border-dashed border-slate-200 animate-spin-slow"></div>
                            <div className="absolute w-3/4 h-3/4 rounded-full border border-dashed border-slate-100 animate-reverse-spin"></div>
                        </div>
                        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 p-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                                <div key={i} className="flex items-center justify-center">
                                    <div className={`w-1.5 h-1.5 rounded-full ${i === 5 ? 'bg-[var(--brand)] scale-150' : 'bg-slate-200'} transition-transform duration-700`}></div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                            <div className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-100 rounded-full shadow-sm">
                                <Camera size={10} className="text-[var(--brand)]" />
                                <span className="text-[8px] font-mono whitespace-nowrap">NODE_LOCKED</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    // 6. WORKFORCE CHAT / DIRECT APPLY (Messaging)
    if (id === 'workforce-chat' || id === 'direct-apply') {
        return (
            <Container figIndex="3.2" schematicType="CONVERSATIONAL_UI_FLOW">
                <div className="w-full h-full p-12 flex flex-col gap-6">
                    <div className="self-start w-2/3 p-4 bg-slate-50 border border-slate-100 rounded-2xl rounded-tl-sm flex flex-col gap-2">
                        <SkeletonLine width="90%" opacity={0.1} />
                        <SkeletonLine width="60%" opacity={0.05} />
                    </div>
                    <div className="self-end w-3/4 p-4 bg-[var(--brand)]/5 border border-[var(--brand)]/10 rounded-2xl rounded-tr-sm flex flex-col gap-2 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-4 h-4 rounded-full bg-[var(--brand)] opacity-20"></div>
                            <div className="w-12 h-1 bg-[var(--brand)] opacity-20 rounded-full"></div>
                        </div>
                        <SkeletonLine width="100%" opacity={0.1} />
                    </div>
                    <div className="self-center mt-4">
                        <div className="px-6 py-2 rounded-full bg-[var(--brand)] text-white text-[9px] font-mono tracking-widest shadow-lg shadow-[var(--brand)]/20 animate-pulse">
                            {id === 'direct-apply' ? 'INSTANT_APPLY_SENT' : 'REPLY_AUTO_DRAFTED'}
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    // 7. ATS DASHBOARD (Kanban)
    if (id === 'ats-dashboard') {
        return (
            <Container figIndex="1.4" schematicType="RECRUITMENT_PIPELINE">
                <div className="w-full h-full p-12 flex flex-col">
                    <div className="flex justify-between items-center mb-10">
                        {[1, 2, 3, 4].map(i => (
                            <React.Fragment key={i}>
                                <div className={`w-8 h-8 rounded-full border-2 ${i === 1 ? 'border-[var(--brand)] bg-[var(--brand)]/5' : 'border-slate-100 bg-white'} flex items-center justify-center`}>
                                    <Users size={12} className={i === 1 ? 'text-[var(--brand)]' : 'text-slate-300'} />
                                </div>
                                {i < 4 && <div className="flex-1 h-px bg-slate-100 mx-2 border-t-2 border-dashed border-slate-100"></div>}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="flex-1 flex gap-4 pr-12">
                        <div className="w-full h-24 bg-white border border-slate-100 rounded-xl shadow-sm p-4 flex flex-col gap-3">
                            <div className="mt-auto flex justify-end">
                                <div className="h-5 w-16 bg-[var(--brand)]/10 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    // 8. APP NAVIGATION (Sitemap)
    if (id === 'app-navigation') {
        return (
            <Container figIndex="8.8" schematicType="INFORMATION_ARCHITECTURE">
                <div className="w-full h-full p-12 flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center gap-6">
                        <div className="w-24 h-12 border border-[var(--brand)] bg-[var(--brand)]/5 rounded-lg flex items-center justify-center">
                            <div className="w-8 h-1 bg-[var(--brand)]/20 rounded-full"></div>
                        </div>
                        <div className="w-px h-8 bg-slate-200"></div>
                        <div className="flex gap-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex flex-col items-center gap-4">
                                    <div className="w-px h-4 bg-slate-200"></div>
                                    <div className="w-16 h-10 border border-slate-100 bg-white rounded-lg"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    // 9. MARKETPLACE CHECKOUT (Cart)
    if (id === 'marketplace-checkout') {
        return (
            <Container figIndex="8.0" schematicType="TRANSACTIONAL_GRID">
                <div className="w-full h-full p-10 flex flex-col gap-3">
                    <div className="flex-1 grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className={`rounded border ${i === 2 ? 'border-[var(--brand)] bg-[var(--brand)]/5' : 'border-slate-100 bg-white'} relative overflow-hidden group/item`}>
                                <div className="absolute inset-x-2 top-2 bottom-6 bg-slate-50 rounded-sm"></div>
                                {i === 2 && <div className="absolute top-1 right-1 w-2 h-2 bg-[var(--brand)] rounded-full shadow-sm"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        );
    }

    // 10. OFFICIAL STORE (Storefront)
    if (id === 'brand-official-store') {
        return (
            <Container figIndex="9.9" schematicType="BRAND_MICROSERVICE">
                <div className="w-full h-full p-12 flex flex-col gap-4">
                    <div className="w-full h-24 border border-[var(--brand)]/30 rounded-lg relative overflow-hidden bg-[var(--brand)]/5">
                        <div className="absolute inset-0 grid grid-cols-12 gap-1 p-1 opacity-20">
                            {[...Array(36)].map((_, i) => <div key={i} className="bg-[var(--brand)]"></div>)}
                        </div>
                        <div className="absolute bottom-4 left-4 flex gap-2">
                            <div className="w-8 h-8 bg-white rounded border border-[var(--brand)]/20"></div>
                            <div className="flex flex-col justify-center gap-1">
                                <div className="w-16 h-2 bg-[var(--brand)]/20 rounded"></div>
                                <div className="w-8 h-1 bg-[var(--brand)]/10 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    // 11. PROMO ENGINE (Logic Gate)
    if (id === 'promo-engine') {
        return (
            <Container figIndex="10.4" schematicType="LOGIC_GATE_CIRCUIT">
                <div className="w-full h-full p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4">
                        <div className="w-16 p-2 border border-slate-200 rounded bg-white text-center">
                            <div className="h-1 w-8 bg-slate-200 mx-auto rounded-full mb-1"></div>
                        </div>
                        <div className="flex-1 h-px bg-slate-300 relative"></div>
                        <div className="w-12 h-12 rounded border-2 border-[var(--brand)] bg-white flex items-center justify-center relative shadow-lg shadow-[var(--brand)]/10">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]"></div>
                        </div>
                        <div className="flex-1 h-px bg-slate-300 relative"></div>
                        <div className="w-16 p-2 border border-[var(--brand)]/30 rounded bg-[var(--brand)]/5 text-center">
                            <div className="h-1 w-8 bg-[var(--brand)]/20 mx-auto rounded-full"></div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    // 12. DESIGN SYSTEM (Atomic)
    if (id === 'design-system-gudangada') {
        return (
            <Container figIndex="9.1" schematicType="ATOMIC_COMPONENT_LIBRARY">
                <div className="w-full h-full p-12 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-full max-w-[200px]">
                        <div className="p-3 border border-slate-100 rounded-lg flex flex-col gap-2 bg-white shadow-sm">
                            <span className="text-[6px] font-mono text-slate-300 uppercase">ATOM_BTN</span>
                            <div className="h-6 w-full rounded bg-[var(--brand)] flex items-center justify-center"></div>
                        </div>
                        <div className="col-span-2 p-3 border border-[var(--brand)]/20 rounded-lg flex flex-col gap-2 bg-[var(--brand)]/5">
                            <span className="text-[6px] font-mono text-[var(--brand)] uppercase">MOL_CARD</span>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    // 13. APP NAV (Navigation) - Duplicated check, already covered above but added for completeness if diff logic needed.
    // Keeping it simple.

    // DEFAULT FALLBACK
    return (
        <Container figIndex="0.1" schematicType="ABSTRACT_COMPOSITION">
            <div className="w-full h-full p-12 flex flex-col gap-4">
                <div className="flex-1 border border-dashed border-slate-200 rounded-2xl flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                        <Cpu size={32} className="text-slate-100 group-hover:text-[var(--brand)]/20 transition-colors duration-700" />
                        <SkeletonLine width="80px" opacity={0.05} />
                    </div>
                </div>
            </div>
        </Container>
    );
};


export default ProjectCard;
// Force deployment update
