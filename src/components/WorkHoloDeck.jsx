import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Lock, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from './ProjectCard';

const WorkHoloDeck = ({ cluster }) => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const isId = language === 'id';
    const cardRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        // Smooth out values slightly or just pass raw -0.5 to 0.5
        setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: 0, y: 0 });
    };

    const brandColor = cluster.brandColor || '#3B82F6';

    // Parallax Calculations
    // We want layers to move in opposite direction of mouse to create depth
    // Background moves slightly (far away)
    // Content moves more (in front)
    // Glass Reflection moves dynamically

    const transformStyle = {
        '--r-x': `${mousePos.y * 10}deg`,
        '--r-y': `${-mousePos.x * 10}deg`,
        '--t-x': `${-mousePos.x * 20}px`,
        '--t-y': `${-mousePos.y * 20}px`,
    };

    return (
        <div className="perspective-1000 w-full">
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => navigate(`/work/${cluster.id}`)}
                style={transformStyle}
                className="group relative w-full rounded-2xl transition-all duration-300 transform-gpu hover:shadow-2xl cursor-pointer"
            >
                {/* 1. KEY VISUAL LAYER (Background) */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#0A0A0A] dark:bg-white border border-[var(--border-color)]">
                    {/* Airy Diagram Background */}
                    <div
                        className="absolute inset-0 transition-transform duration-200 ease-out scale-110 opacity-60 group-hover:opacity-80 transition-opacity"
                        style={{
                            transform: 'translate(var(--t-x), var(--t-y)) scale(1.1)' // Moves slightly
                        }}
                    >
                        <ProjectCard id={cluster.id} expanded={true} showChrome={false} backgroundOnly={true} />
                    </div>

                    {/* Brand Gradient Wash */}
                    <div
                        className="absolute inset-0 opacity-20 mix-blend-overlay transition-opacity duration-500"
                        style={{ background: `linear-gradient(135deg, ${brandColor}, transparent)` }}
                    ></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* 2. GLASS UI LAYER (Foreground) */}
                <div
                    className="relative z-10 p-8 md:p-12 flex flex-col justify-between gap-10"
                    style={{ transform: 'translate(calc(var(--t-x) * -1), calc(var(--t-y) * -1))' }} // Moves opposite to bg
                >

                    {/* Header Group */}
                    <div className="flex flex-col gap-4">
                        <div className="w-32 h-32 flex items-end justify-start">
                            <img src={cluster.logo} alt="logo" className="w-full h-full object-contain drop-shadow-lg" />
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-6xl font-serif italic text-white drop-shadow-lg leading-tight tracking-tighter">
                                {isId ? (cluster.title_id || cluster.title) : cluster.title}
                            </h2>
                            <p className="text-white/80 max-w-xl text-lg md:text-xl font-light leading-snug drop-shadow-sm">
                                {isId ? (cluster.hook_id || cluster.hook) : cluster.hook}
                            </p>
                        </div>
                    </div>

                    {/* Bottom Deck */}
                    <div className="w-full">
                        {/* Feature Cards Preview */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                            {cluster.projects.slice(0, 3).map((project, i) => (
                                <div
                                    key={i}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(project.route);
                                    }}
                                    className="w-full p-4 rounded-xl bg-white/90 dark:bg-white/90 backdrop-blur-md border border-black/10 dark:border-black/10 hover:bg-white transition-colors group/card cursor-pointer"
                                >
                                    <div className="aspect-video rounded-lg overflow-hidden mb-3 relative bg-white">
                                        {/* Airy Diagram Preview */}
                                        <div className="absolute inset-0 opacity-80">
                                            <ProjectCard id={project.id} expanded={true} showChrome={false} backgroundOnly={true} />
                                        </div>

                                        {/* Lock Icon Overlay */}
                                        {project.caseStudy?.locked && (
                                            <div className="absolute top-2 right-2 p-1 bg-black/50 rounded-full z-10">
                                                <Lock size={10} className="text-white/70" />
                                            </div>
                                        )}
                                    </div>
                                    <h4 className="text-black font-bold text-sm mb-1 truncate">
                                        {isId ? (project.title_id || project.title) : project.title}
                                    </h4>
                                    <p className="text-black/50 text-xs truncate">
                                        {isId ? project.tag_id : project.tag}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. REFLECTION GRADIENT (Dynamic Lighting) */}
                <div
                    className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                        background: `radial-gradient(
              circle at ${50 + (mousePos.x * 100)}% ${50 + (mousePos.y * 100)}%, 
              rgba(255,255,255,0.1) 0%, 
              rgba(255,255,255,0.05) 20%, 
              transparent 60%
            )`
                    }}
                />

            </div>

            {/* 3D Context Shadow underneath */}
            <div
                className="w-[90%] h-8 mx-auto bg-black/20 blur-xl rounded-[100%] transition-transform duration-300"
                style={{ transform: `scale(${1 - (Math.abs(mousePos.x) * 0.1)}) translateX(${mousePos.x * -20}px)` }}
            ></div>

        </div>
    );
};

export default WorkHoloDeck;
