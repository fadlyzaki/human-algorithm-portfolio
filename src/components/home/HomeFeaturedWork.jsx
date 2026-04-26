import React, { useState, useMemo } from "react";
import { WORK_CLUSTERS } from "../../data/portfolioData";
import { useLanguage } from "../../context/LanguageContext";
import { mapProjectToStudy } from "../../utils/projectMappers";
import CloneCard from "../case-study/CloneCard";
import ScrollReveal from "../ScrollReveal";
import SectionTitle from "../SectionTitle";

const HomeFeaturedWork = () => {
  const { language } = useLanguage();
  const isId = language === "id";

  // Pick 1 random project indices per company once on mount
  const [selectedProjectIndices] = useState(() => 
    WORK_CLUSTERS.map(cluster => Math.floor(Math.random() * cluster.projects.length))
  );

  // Map those stable indices to translated studies whenever language changes
  const featuredStudies = useMemo(() => {
    return WORK_CLUSTERS.map((cluster, i) => {
      const proj = cluster.projects[selectedProjectIndices[i]];
      return mapProjectToStudy(proj, cluster, isId);
    });
  }, [isId, selectedProjectIndices]);

  return (
    <section id="featured-work" className="mb-24 scroll-mt-24 relative">
      <ScrollReveal>
        <SectionTitle 
          number="1" 
          title={isId ? "Studi Kasus Pilihan" : "Curated Case Studies"} 
        />
        <div className="max-w-2xl mb-12 mt-[-1rem] text-[var(--text-secondary)] font-mono text-[11px] md:text-xs leading-relaxed border-l-2 border-[var(--accent-blue)] pl-4">
          <p>
            {isId
              ? "Menyederhanakan kompleksitas operasional. Pilihan dinamis studi kasus yang menonjolkan arsitektur sistemik, solusi masalah bisnis kritis, dan eksekusi visual tingkat tinggi."
              : "Operational complexity, simplified. A dynamic selection of case studies showcasing systemic architecture, business-critical problem solving, and high-fidelity visual execution."}
          </p>
        </div>
      </ScrollReveal>

      {/* 3-Card Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredStudies.map((cs, idx) => (
          <ScrollReveal key={cs.id} delay={idx * 150}>
            <div className="flex items-center justify-center py-4 sm:py-12">
              <div className="scale-90 sm:scale-100 origin-center relative z-10">
                <CloneCard study={cs} isId={isId} />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default HomeFeaturedWork;
