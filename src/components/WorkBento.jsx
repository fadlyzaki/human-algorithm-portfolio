import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from './ProjectCard';

const WorkBento = ({ cluster }) => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const isId = language === 'id';

    // Extract data
    // For the reference style, we focus on Company, Role, and Visual.
    const title = isId ? (cluster.title_id || cluster.title) : cluster.title;
    const role = cluster.stats?.find(s => s.label === 'Role')?.value || cluster.projects[0]?.role || "Product Designer";
    const timeline = cluster.stats?.find(s => s.label === 'Timeline')?.value || "2020";

    // Format Timeline for the box (Split by " - " if possible for stacking)
    const [start, end] = timeline.includes(' - ') ? timeline.split(' - ') : [timeline, ''];

    return (
        <div
            onClick={() => navigate(`/work/${cluster.id}`)}
            className="group relative flex flex-col h-[480px] bg-gray-50 dark:bg-neutral-900 border border-black/5 dark:border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
        >
            {/* 1. HEADER (Top) - Reference Match */}
            <div className="flex justify-between items-start p-8 pb-2 z-10 w-full gap-4">

                {/* Left: Logo */}
                <div className="shrink-0 pt-1">
                    <div className="w-16 h-16 bg-white dark:bg-black rounded-2xl border border-black/5 dark:border-white/10 flex items-center justify-center shadow-sm p-3">
                        {cluster.logo ? (
                            <img src={cluster.logo} alt="logo" className="w-full h-full object-contain" />
                        ) : (
                            <div className="w-full h-full bg-current rounded-full opacity-20" style={{ color: cluster.brandColor }}></div>
                        )}
                    </div>
                </div>

                {/* Middle: Company & Role */}
                <div className="flex-grow flex flex-col justify-start pt-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight mb-1">
                        {cluster.company || cluster.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-snug w-3/4">
                        {role}
                    </p>
                </div>

                {/* Right: Timeline (Boxed) */}
                <div className="shrink-0 pt-1">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 flex flex-col items-end bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                        <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono font-bold uppercase tracking-widest whitespace-nowrap">
                            {start}
                        </span>
                        {end && (
                            <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono font-bold uppercase tracking-widest whitespace-nowrap mt-0.5">
                                {end}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* 2. VISUAL (Bottom / Fill) */}
            <div className="relative flex-grow w-full overflow-hidden flex items-end justify-center px-8 pb-0 mt-4">
                {/* Gradient Background to blend bottom if needed */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 dark:from-neutral-900 to-transparent pointer-events-none z-10 opacity-50"></div>

                {/* Hover Action (Floating) */}
                <div className="absolute top-0 right-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white dark:bg-black text-black dark:text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                        View <ArrowUpRight size={12} />
                    </div>
                </div>

                {/* Device / Visual Frame */}
                {/* We simulate a 'device' look by adding a border/shadow to the image */}
                <div className="relative w-full max-w-[90%] transform transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2 origin-bottom">
                    {cluster.heroImage && cluster.heroImage.startsWith('/') ? (
                        <div className="relative rounded-t-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border-t-[6px] border-x-[6px] border-gray-900/10 dark:border-white/10 bg-gray-900">
                            <img
                                src={cluster.heroImage}
                                alt={title}
                                className="w-full h-auto object-cover block"
                            />
                            {/* Gloss/Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none mix-blend-overlay"></div>
                        </div>
                    ) : (
                        <div className="w-full aspect-[4/3] bg-white dark:bg-black/20 rounded-t-2xl border-t border-x border-black/5 flex items-center justify-center relative overflow-hidden shadow-xl">
                            <ProjectCard id={cluster.id} expanded={true} showChrome={false} backgroundOnly={false} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkBento;
