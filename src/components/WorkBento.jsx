import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from './ProjectCard';

const WorkBento = ({ cluster }) => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const isId = language === 'id';
    const [isHovered, setIsHovered] = useState(false);

    // Extract data
    const title = isId ? (cluster.title_id || cluster.title) : cluster.title;
    const role = cluster.stats?.find(s => s.label === 'Role')?.value || cluster.projects[0]?.role || "Product Designer";
    const rawTimeline = cluster.stats?.find(s => s.label === 'Timeline')?.value || "2020";

    // Parse Timeline: "May 2022 - Nov 2022" -> "2022", "2021 - Present" -> "2021 - Present"
    const years = rawTimeline.match(/\d{4}|Present/g) || [];
    let yearDisplay = years[0] || rawTimeline;
    if (years.length > 1) {
        if (years[0] === years[1]) {
            yearDisplay = years[0]; // Same year
        } else {
            yearDisplay = `${years[0]} - ${years[1]}`; // Range
        }
    }

    return (
        <div
            onClick={() => navigate(`/work/${cluster.id}`)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative flex flex-col h-[480px] border border-black/5 dark:border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            style={{
                backgroundColor: isHovered && cluster.brandColor ? cluster.brandColor : undefined
            }}
        >
            {/* Default Background (only visible when NOT hovered) */}
            <div className={`absolute inset-0 bg-gray-50 dark:bg-neutral-900 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />

            {/* Hover Action (Floating - Top Right) */}
            <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-white text-black px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                    View <ArrowUpRight size={12} />
                </div>
            </div>

            {/* 1. HEADER (Top) - Maximum Logo Impact + Dynamic Text Color */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 sm:p-8 pb-2 z-10 w-full gap-4 relative">

                {/* Left Side: Logo Only (Full Color, Clear, HUGE) */}
                <div className="shrink-0">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
                        {cluster.logo ? (
                            <img
                                src={cluster.logo}
                                alt={cluster.company || cluster.title}
                                className={`w-full h-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-110`}
                            />
                        ) : (
                            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full opacity-100 ${isHovered ? 'bg-white' : 'bg-current'}`} style={{ color: isHovered ? undefined : cluster.brandColor }}></div>
                        )}
                    </div>
                </div>

                {/* Right Side: Role + Period (Right Aligned on desktop, Left on mobile) */}
                <div className="flex flex-col items-start sm:items-end text-left sm:text-right transition-colors duration-300 sm:max-w-[140px]">
                    {/* Role (Top) */}
                    <p className={`text-sm font-bold leading-tight line-clamp-2 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-900 dark:text-gray-100'}`}>
                        {role}
                    </p>
                    {/* Period (Bottom) */}
                    <p className={`text-xs font-medium mt-1 transition-colors duration-300 ${isHovered ? 'text-white/90' : 'text-gray-500 dark:text-gray-400'}`}>
                        {yearDisplay}
                    </p>
                </div>
            </div>

            {/* 2. VISUAL (Bottom / Fill) */}
            <div className="relative flex-grow w-full overflow-hidden flex items-end justify-center px-8 pb-0 mt-4 z-10">
                {/* Gradient Background to blend bottom if needed */}
                <div
                    className="absolute inset-x-0 bottom-0 h-32 pointer-events-none z-10 opacity-50 transition-colors duration-500"
                    style={{
                        background: isHovered
                            ? `linear-gradient(to top, ${cluster.brandColor}, transparent)`
                            : undefined
                    }}
                >
                    {!isHovered && (
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-neutral-900 to-transparent" />
                    )}
                </div>



                {/* Device / Visual Frame */}
                <div className={`relative transform transition-transform duration-700 ${cluster.heroImage && cluster.heroImage.startsWith('/') ? 'w-[200px] mx-auto' : 'w-full max-w-[90%] group-hover:scale-105 origin-bottom'}`}>
                    {cluster.heroImage && cluster.heroImage.startsWith('/') ? (
                        <div className="relative rounded-t-[28px] overflow-hidden shadow-[0_12px_50px_-12px_rgba(0,0,0,0.5)] border-t-[6px] border-x-[6px] border-white/20 dark:border-white/10 bg-white dark:bg-neutral-800 aspect-[9/14] flex flex-col">
                            {/* Device Header/Notch Area - Protects mockup headers from card rounding */}
                            <div className="h-7 w-full flex items-center justify-center shrink-0 bg-white dark:bg-neutral-800 relative z-20">
                                <div className="w-16 h-4 bg-black dark:bg-neutral-900 rounded-b-xl flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-white/10 rounded-full blur-[0.5px]"></div>
                                </div>
                            </div>

                            {/* Inner Screen Container */}
                            <div className="relative flex-grow overflow-hidden rounded-t-lg">
                                <img
                                    src={cluster.heroImage}
                                    alt={title}
                                    className="w-full h-auto object-top transition-transform duration-[5000ms] ease-in-out group-hover:translate-y-[calc(-100%+280px)]"
                                    style={{ transformOrigin: 'top' }}
                                />
                                {/* Gloss/Reflection */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none mix-blend-overlay"></div>
                            </div>

                            {/* Inner Shadow for depth */}
                            <div className="absolute inset-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] pointer-events-none"></div>
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
