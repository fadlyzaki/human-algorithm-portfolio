import React from 'react';
import ScrollReveal from '../ScrollReveal';
import ZoomableImage from '../ZoomableImage';

const CompanyCulture = ({ cluster, isId }) => {
    if (!cluster.culture) return null;

    return (
        <section className="py-24 border-t border-[var(--border-color)] relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6">
                <ScrollReveal>
                    <div className="mb-12 max-w-4xl">
                        <h3 className="font-serif italic text-4xl mb-4">{isId ? (cluster.culture_id?.title || cluster.culture.title) : cluster.culture.title}</h3>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            {isId ? (cluster.culture_id?.description || cluster.culture.description) : cluster.culture.description}
                        </p>
                        {(isId ? (cluster.culture_id?.disclaimer || cluster.culture.disclaimer) : cluster.culture.disclaimer) && (
                            <p className="text-xs text-[var(--text-secondary)] opacity-60 mt-3 italic">
                                ✉ {isId ? (cluster.culture_id?.disclaimer || cluster.culture.disclaimer) : cluster.culture.disclaimer}
                            </p>
                        )}
                    </div>
                </ScrollReveal>

                {cluster.culture.layout === 'masonry' ? (
                    <div className="columns-1 md:columns-3 gap-4">
                        {cluster.culture.images.map((img, i) => (
                            <ScrollReveal key={i} delay={i * 80} className="break-inside-avoid mb-4 relative group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]">
                                <ZoomableImage
                                    src={img.src}
                                    alt={img.caption}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-xs font-mono text-white/90 uppercase tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10">
                                            {img.caption}
                                        </span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                ) : cluster.culture.layout === 'symmetric-grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[260px]">
                        {cluster.culture.images.map((img, i) => (
                            <ScrollReveal key={i} delay={i * 100} className={`relative group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] ${img.span || ''}`}>
                                <ZoomableImage
                                    src={img.src}
                                    alt={img.caption}
                                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${img.pos || 'object-top'}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-xs font-mono text-white/90 uppercase tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10">
                                            {img.caption}
                                        </span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
                        {cluster.culture.images.map((img, i) => (
                            <ScrollReveal key={i} delay={i * 100} className={`relative group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] ${img.span || 'col-span-1'}`}>
                                <ZoomableImage
                                    src={img.src}
                                    alt={img.caption}
                                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${img.pos || 'object-top'}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-xs font-mono text-white/90 uppercase tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10">
                                            {img.caption}
                                        </span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default CompanyCulture;
