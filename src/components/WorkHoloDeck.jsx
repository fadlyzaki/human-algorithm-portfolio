import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Lock, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
        <div className="perspective-1000 mb-32 last:mb-0">
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => navigate(`/work/${cluster.id}`)}
                style={transformStyle}
                className="group relative w-full aspect-[4/5] md:aspect-[21/9] rounded-2xl transition-all duration-300 transform-gpu hover:shadow-2xl cursor-pointer"
            >
                {/* 1. KEY VISUAL LAYER (Background) */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)]">
                    {/* Base Image with Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-200 ease-out scale-110"
                        style={{
                            backgroundImage: `url(${cluster.heroImage || '/placeholder-bg.jpg'})`,
                            transform: 'translate(var(--t-x), var(--t-y)) scale(1.1)' // Moves slightly
                        }}
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>

                    {/* Brand Gradient Wash */}
                    <div
                        className="absolute inset-0 opacity-40 mix-blend-overlay transition-opacity duration-500"
                        style={{ background: `linear-gradient(135deg, ${brandColor}, transparent)` }}
                    ></div>
                </div>

                {/* 2. GLASS UI LAYER (Foreground) */}
                <div
                    className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between"
                    style={{ transform: 'translate(calc(var(--t-x) * -1), calc(var(--t-y) * -1))' }} // Moves opposite to bg
                >

                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center p-2 shadow-inner">
                                    <img src={cluster.logo} alt="logo" className="w-full h-full object-contain" />
                                </div>
                                <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white/80 text-[10px] font-mono uppercase tracking-widest">
                                    {cluster.company}
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-serif italic text-white drop-shadow-lg mb-2">
                                {isId ? (cluster.title_id || cluster.title) : cluster.title}
                            </h2>
                            <p className="text-white/80 max-w-xl text-lg md:text-xl font-light leading-relaxed drop-shadow-sm">
                                {isId ? (cluster.hook_id || cluster.hook) : cluster.hook}
                            </p>
                        </div>

                        <div className="hidden md:flex flex-col items-end gap-2 text-white/60 font-mono text-xs uppercase tracking-wider">
                            <span>{cluster.stats?.[1]?.value}</span>
                            <span>{cluster.stats?.[0]?.value}</span>
                        </div>
                    </div>

                    {/* Bottom Deck */}
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">

                        {/* Feature Cards Preview */}
                        <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto mask-linear-fade">
                            {cluster.projects.slice(0, 2).map((project, i) => (
                                <div key={i} className="flex-shrink-0 w-64 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 transition-colors group/card">
                                    <div className="aspect-video rounded-lg overflow-hidden mb-3 relative bg-black/20">
                                        {project.previewImage && (
                                            <img src={project.previewImage} className="w-full h-full object-cover opacity-60 group-hover/card:opacity-90 transition-opacity" alt="" />
                                        )}
                                        {project.caseStudy?.locked && (
                                            <div className="absolute top-2 right-2 p-1 bg-black/50 rounded-full">
                                                <Lock size={10} className="text-white/70" />
                                            </div>
                                        )}
                                    </div>
                                    <h4 className="text-white font-bold text-sm mb-1 truncate">
                                        {isId ? (project.title_id || project.title) : project.title}
                                    </h4>
                                    <p className="text-white/50 text-xs truncate">
                                        {isId ? project.tag_id : project.tag}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="group/btn flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full hover:bg-white/20 hover:scale-105 transition-all cursor-pointer shadow-xl">
                            <span className="text-white font-mono font-bold uppercase tracking-widest text-sm">
                                {isId ? "Buka Studi Kasus" : "Open Case Study"}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover/btn:rotate-[-45deg] transition-transform duration-300">
                                <ArrowRight size={16} />
                            </div>
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
