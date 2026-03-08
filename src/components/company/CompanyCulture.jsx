import React from "react";
import ScrollReveal from "../ScrollReveal";
import ZoomableImage from "../ZoomableImage";

const CompanyCulture = ({ cluster, isId }) => {
  if (!cluster.culture) return null;

  return (
    <section className="py-24 border-t border-[var(--border-color)] relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-12 max-w-4xl">
            <h3 className="font-serif italic text-4xl mb-4">
              {isId
                ? cluster.culture_id?.title || cluster.culture.title
                : cluster.culture.title}
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {isId
                ? cluster.culture_id?.description || cluster.culture.description
                : cluster.culture.description}
            </p>
            {(isId
              ? cluster.culture_id?.disclaimer || cluster.culture.disclaimer
              : cluster.culture.disclaimer) && (
                <p className="text-xs text-[var(--text-secondary)] opacity-60 mt-3 italic">
                  ✉{" "}
                  {isId
                    ? cluster.culture_id?.disclaimer || cluster.culture.disclaimer
                    : cluster.culture.disclaimer}
                </p>
              )}
          </div>
        </ScrollReveal>

        {cluster.culture.layout === "masonry" ? (
          <div className="columns-1 md:columns-3 gap-4">
            {cluster.culture.images.map((img, i) => (
              <ScrollReveal
                key={i}
                delay={i * 80}
                className="break-inside-avoid mb-4 relative group [perspective:1000px]"
              >
                <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)] shadow-sm group-hover:shadow-lg rounded-xl">
                  {/* Front: Caption */}
                  <div
                    className="w-full h-full [backface-visibility:hidden] rounded-xl flex items-center justify-center p-6 text-center border border-[var(--border-color)]"
                    style={{ backgroundColor: cluster.brandColor || 'var(--bg-card)', color: 'var(--bg-void)' }}
                  >
                    <span className="text-sm font-medium leading-relaxed drop-shadow-sm">
                      {img.caption}
                    </span>
                  </div>
                  {/* Back: Photo */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)]">
                    <ZoomableImage
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : cluster.culture.layout === "symmetric-grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[260px]">
            {cluster.culture.images.map((img, i) => (
              <ScrollReveal
                key={i}
                delay={i * 100}
                className={`relative group h-full [perspective:1000px] ${img.span || ""}`}
              >
                <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)] shadow-sm group-hover:shadow-lg rounded-xl">
                  {/* Front: Caption */}
                  <div
                    className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-xl flex flex-col items-center justify-center p-6 text-center border border-[var(--border-color)]"
                    style={{ backgroundColor: cluster.brandColor || 'var(--bg-card)', color: 'var(--bg-void)' }}
                  >
                    <span className="text-sm font-medium leading-relaxed drop-shadow-sm">
                      {img.caption}
                    </span>
                  </div>
                  {/* Back: Photo */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)]">
                    <ZoomableImage
                      src={img.src}
                      alt={img.caption}
                      className={`w-full h-full object-cover ${img.pos || "object-top"}`}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
            {cluster.culture.images.map((img, i) => (
              <ScrollReveal
                key={i}
                delay={i * 100}
                className={`relative group h-full [perspective:1000px] ${img.span || "col-span-1"}`}
              >
                <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)] shadow-sm group-hover:shadow-lg rounded-xl">
                  {/* Front: Caption */}
                  <div
                    className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-xl flex flex-col items-center justify-center p-6 text-center border border-[var(--border-color)]"
                    style={{ backgroundColor: cluster.brandColor || 'var(--bg-card)', color: 'var(--bg-void)' }}
                  >
                    <span className="text-sm font-medium leading-relaxed drop-shadow-sm">
                      {img.caption}
                    </span>
                  </div>
                  {/* Back: Photo */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)]">
                    <ZoomableImage
                      src={img.src}
                      alt={img.caption}
                      className={`w-full h-full object-cover ${img.pos || "object-top"}`}
                    />
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
