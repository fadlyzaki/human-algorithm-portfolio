import React from 'react';
import {
    Smartphone, Monitor, Terminal, Activity, BarChart2, MessageCircle,
    Shield, Plane, BookOpen, Heart, Eye, Map, List, CheckCircle2, TrendingUp,
    Clock, DollarSign, Camera, Users, Truck, Cpu, Trophy
} from 'lucide-react';

// ABSTRACT UI COMPONENTS
const WindowControls = () => (
    <div className="flex gap-1.5 mb-2 opacity-30">
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
            <Container figIndex="6.2" schematicType="TIMELINE_SPIRAL">
                <div className="w-full h-full p-8 flex items-center justify-center relative overflow-hidden">
                    {/* Vertical Timeline */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[var(--brand)]/30 to-transparent"></div>

                    {/* Event Nodes */}
                    <div className="flex flex-col gap-6 w-full items-center z-10">
                        <div className="flex items-center gap-4 translate-x-8">
                            <div className="w-2 h-2 rounded-full bg-[var(--brand)] shadow-[0_0_10px_var(--brand)]"></div>
                            <div className="text-[6px] uppercase tracking-widest text-slate-400 font-mono">Q1_START</div>
                        </div>
                        <div className="flex items-center gap-4 -translate-x-8">
                            <div className="text-[6px] uppercase tracking-widest text-slate-400 font-mono">MILESTONE_A</div>
                            <div className="w-2 h-2 rounded-full bg-white border border-[var(--brand)]"></div>
                        </div>
                        <div className="flex items-center gap-4 translate-x-6">
                            <div className="w-3 h-3 rounded-full bg-[var(--brand)]/10 border border-[var(--brand)] flex items-center justify-center">
                                <div className="w-1 h-1 bg-[var(--brand)] rounded-full"></div>
                            </div>
                            <div className="text-[6px] uppercase tracking-widest text-slate-400 font-mono">Q3_PEAK</div>
                        </div>
                    </div>

                    {/* Background Spirals */}
                    <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 200 120">
                        <path d="M100,0 Q150,30 100,60 T100,120" fill="none" stroke="currentColor" strokeWidth="20" />
                    </svg>
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
                <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="relative w-48 h-48">
                        {/* Face Mesh Topology */}
                        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
                            {/* Jawline */}
                            <path d="M20,40 Q50,90 80,40" fill="none" stroke="var(--brand)" strokeWidth="0.5" />
                            {/* Eyes */}
                            <ellipse cx="35" cy="40" rx="8" ry="4" fill="none" stroke="var(--brand)" strokeWidth="0.5" />
                            <ellipse cx="65" cy="40" rx="8" ry="4" fill="none" stroke="var(--brand)" strokeWidth="0.5" />
                            {/* Nodes */}
                            {[20, 30, 40, 50, 60, 70, 80].map(x => (
                                <circle key={x} cx={x} cy={40 + Math.sin(x / 10) * 5} r="1" fill="var(--brand)" />
                            ))}
                            <path d="M50,40 L50,60" fill="none" stroke="var(--brand)" strokeWidth="0.5" strokeDasharray="2 2" />
                        </svg>

                        {/* Scanner Line */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand)]/5 to-transparent animate-scan" style={{ height: '20%' }}></div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="px-3 py-1 bg-white ring-1 ring-slate-100 rounded-full shadow-lg flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-[8px] font-mono whitespace-nowrap text-slate-500">MESH_TRACKING_ACTIVE</span>
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
            <Container figIndex="3.2" schematicType="UNIFIED_STREAM_TOPOLOGY">
                <div className="w-full h-full p-8 flex items-center justify-center">
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                        {/* Incoming fragmented sources */}
                        <div className="absolute top-0 w-full flex justify-between px-8 opacity-40">
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-px h-8 bg-slate-300"></div>
                                <span className="text-[6px] font-mono">SMS</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-px h-8 bg-[var(--brand)]"></div>
                                <span className="text-[6px] font-mono text-[var(--brand)]">WA</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-px h-8 bg-slate-300"></div>
                                <span className="text-[6px] font-mono">IN-APP</span>
                            </div>
                        </div>

                        {/* Merging Point (Funnel) */}
                        <div className="w-16 h-16 rounded-full border border-dashed border-slate-200 flex items-center justify-center mt-4 bg-white z-10 relative">
                            <div className="absolute inset-0 rounded-full border border-[var(--brand)]/20 animate-ping opacity-20"></div>
                            <MessageCircle size={16} className="text-[var(--brand)]" />
                        </div>

                        {/* Unified Output Stream */}
                        <div className="w-px h-16 bg-gradient-to-b from-slate-200 to-[var(--brand)] mt-0 relative">
                            <div className="absolute top-1/2 -left-3 px-2 py-1 bg-[var(--brand)] text-white text-[8px] font-mono rounded shadow-lg whitespace-nowrap">
                                UNIFIED_THREAD_ID
                            </div>
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
            <Container figIndex="8.0" schematicType="SUPPLY_CHAIN_HUB">
                <div className="w-full h-full p-8 flex items-center justify-center relative">
                    {/* Center Hub (Warehouse) */}
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white border border-[var(--brand)]/30 rounded-full flex items-center justify-center shadow-[0_0_30px_var(--brand)_inset] shadow-[var(--brand)]/5">
                            <div className="w-8 h-8 bg-[var(--brand)] rounded-full flex items-center justify-center">
                                <Truck size={14} className="text-white" />
                            </div>
                        </div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            <span className="px-2 py-0.5 bg-[var(--brand)]/10 text-[var(--brand)] text-[8px] font-mono rounded border border-[var(--brand)]/20">CENTRAL_HUB</span>
                        </div>
                    </div>

                    {/* Spokes */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 120">
                        <line x1="100" y1="60" x2="40" y2="30" stroke="var(--brand)" strokeWidth="0.5" strokeDasharray="2 2" />
                        <line x1="100" y1="60" x2="160" y2="30" stroke="var(--brand)" strokeWidth="0.5" strokeDasharray="2 2" />
                        <line x1="100" y1="60" x2="40" y2="90" stroke="var(--brand)" strokeWidth="0.5" strokeDasharray="2 2" />
                        <line x1="100" y1="60" x2="160" y2="90" stroke="var(--brand)" strokeWidth="0.5" strokeDasharray="2 2" />
                    </svg>

                    {/* Endpoints (Retailers) */}
                    <div className="absolute top-8 left-8 w-6 h-6 bg-white border border-slate-200 rounded flex items-center justify-center shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                    </div>
                    <div className="absolute top-8 right-8 w-6 h-6 bg-white border border-slate-200 rounded flex items-center justify-center shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                    </div>
                    <div className="absolute bottom-8 left-8 w-6 h-6 bg-white border border-slate-200 rounded flex items-center justify-center shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                    </div>
                    <div className="absolute bottom-8 right-8 w-6 h-6 bg-white border border-slate-200 rounded flex items-center justify-center shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-slate-200"></div>
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
            <Container figIndex="10.4" schematicType="DECISION_TREE_LOGIC">
                <div className="w-full h-full p-8 flex flex-col items-center justify-start pt-12">
                    {/* Root Node */}
                    <div className="w-24 h-8 border border-slate-200 bg-white rounded flex items-center justify-center text-[8px] font-mono text-slate-400 mb-2">
                        CART_TOTAL &gt; 50k
                    </div>
                    <div className="h-4 w-px bg-slate-300"></div>

                    {/* Decision Diamond */}
                    <div className="w-8 h-8 rotate-45 border border-[var(--brand)] bg-[var(--brand)]/5 flex items-center justify-center mb-2 z-10 relative">
                        <div className="w-1 h-1 bg-[var(--brand)] -rotate-45"></div>
                    </div>

                    {/* Branches */}
                    <div className="flex gap-16 w-full justify-center relative">
                        {/* Connecting Lines */}
                        <svg className="absolute -top-2 left-0 w-full h-8 pointer-events-none" style={{ overflow: 'visible' }}>
                            <path d="M100,0 L100,6 L150,6 L150,20" fill="none" stroke="var(--brand)" strokeWidth="1" opacity="0.5" />
                            <path d="M100,0 L100,6 L50,6 L50,20" fill="none" stroke="currentColor" className="text-slate-200" strokeWidth="1" />
                        </svg>

                        {/* No Path */}
                        <div className="flex flex-col items-center pt-6 gap-2 opacity-40">
                            <div className="w-12 h-6 border border-slate-200 bg-slate-50 rounded flex items-center justify-center text-[6px]">
                                REJECT
                            </div>
                        </div>

                        {/* Yes Path */}
                        <div className="flex flex-col items-center pt-6 gap-2">
                            <div className="px-3 py-1 bg-[var(--brand)] text-white rounded shadow-md text-[8px] font-mono flex items-center gap-1">
                                <CheckCircle2 size={8} /> APPLY_DISC
                            </div>
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

    // 14. INCENTIVE SALES AGENT (Gamification)
    if (id === 'stoqo-sales') {
        return (
            <Container figIndex="5.5" schematicType="GAMIFIED_LEADERBOARD">
                <div className="w-full h-full p-10 flex flex-col items-center justify-end pb-8">
                    {/* Podium */}
                    <div className="flex items-end gap-1">
                        {/* 2nd Place */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-16 bg-slate-50 border border-slate-200 rounded-t-sm relative">
                                <div className="absolute top-2 w-full text-center text-[8px] font-mono text-slate-300">02</div>
                            </div>
                        </div>
                        {/* 1st Place */}
                        <div className="flex flex-col items-center gap-2">
                            <Trophy size={16} className="text-[var(--brand)] animate-bounce" />
                            <div className="w-12 h-24 bg-[var(--brand)]/5 border border-[var(--brand)]/30 rounded-t-sm relative">
                                <div className="absolute top-2 w-full text-center text-[10px] font-mono text-[var(--brand)] font-bold">01</div>
                            </div>
                        </div>
                        {/* 3rd Place */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-t-sm relative">
                                <div className="absolute top-2 w-full text-center text-[8px] font-mono text-slate-300">03</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    // 15. PAPER TO PAPERLESS (OCR/Scanning)
    if (id === 'p11') {
        return (
            <Container figIndex="3.0" schematicType="OPTICAL_CHAR_RECOGNITION">
                <div className="w-full h-full p-10 flex flex-col items-center justify-center">
                    <div className="relative w-24 h-32 bg-white border border-slate-200 shadow-sm flex flex-col p-2 gap-2">
                        {/* Document Lines */}
                        <div className="w-full h-1 bg-slate-100 mb-1"></div>
                        <div className="w-2/3 h-1 bg-slate-100 mb-4"></div>
                        <div className="w-full h-1 bg-slate-100"></div>
                        <div className="w-full h-1 bg-slate-100"></div>
                        <div className="w-3/4 h-1 bg-slate-100"></div>

                        {/* Scanning BeamOverlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand)]/20 to-transparent h-1/4 animate-[scan_2s_linear_infinite] border-b border-[var(--brand)]/50"></div>

                        {/* Extracted Data Box */}
                        <div className="absolute -right-8 top-8 bg-[var(--brand)] text-white text-[6px] font-mono px-2 py-1 rounded shadow-lg animate-pulse">
                            DATA_EXTRACTED
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

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
