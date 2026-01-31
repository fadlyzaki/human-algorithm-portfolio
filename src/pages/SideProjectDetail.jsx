import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
   ArrowLeft, Sun, Moon, ArrowUpRight, Minus
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/* --- DESIGN SYSTEM: THE CURATOR ---
   Aesthetic: "Senior Product Designer / Editor"
   Focus: Storytelling, clean typography, editorial layout.
*/

const SideProjectDetail = () => {
   const { isDark, setIsDark } = useTheme();
   const [scrolled, setScrolled] = useState(0);
   const { id } = useParams();

   const projectDatabase = {
      "d1": {
         title: "Interactive Workbook",
         subtitle: "Bimbel Geera Platform",
         tldr: "Bridging the gap between static textbooks and gamified learning.",
         sections: {
            challenge: "Traditional workbooks are 'write-only' memory. Teachers can't track progress until the book is collected, and students lose motivation without instant feedback. We needed a loop.",
            approach: "I designed a bilingual interface that syncs student inputs to a teacher dashboard in real-time. It’s not just a quiz app; it’s a digital workbook that respects the classroom workflow."
         },
         stack: ["React", "Firebase", "Tailwind CSS"],
         links: { demo: "https://buku-kerja-interaktif.web.app/", repo: "github.com/fadly/interactive-workbook" }
      },
      "d3": {
         title: "Year in Review",
         subtitle: "Manual Data Visualization",
         tldr: "Privacy-first analytics for your 'un-tracked' life wins.",
         sections: {
            challenge: "Algorithms track our consumption (Spotify, Netflix) but ignore our creation. I wanted a way to visualize the books read, miles run, and code written—without handing that data to a corporation.",
            approach: "A purely client-side generator. You upload your JSON/CSV, pick from 12 editorial themes, and export high-res images. No database, no tracking, just design tools for personal data."
         },
         stack: ["React", "TypeScript", "Canvas API"],
         links: { demo: "https://year-in-review-jak.vercel.app/", repo: "github.com/fadly/manual-wrapped" }
      },
      "filter-me": {
         title: "FilterMe",
         subtitle: "AR Commerce Experiment",
         tldr: "Can augmented reality bridge the physical trust gap?",
         sections: {
            challenge: "In beauty e-commerce, the 'Trust Gap' is massive. Users can't touch the product. We hypothesized that hyper-realistic AR filters could simulate the 'try-on' experience better than static photos.",
            approach: "A 3-week design sprint using Face Mesh technology. We focused less on technical perfection and more on the 'Fun Factor'—making the shopping experience feel like a social media interaction."
         },
         stack: ["Sketch", "Principle", "AR Design"],
         links: { demo: "#", repo: "#" }
      },
      "grab-merantau": {
         title: "Grab Merantau",
         subtitle: "Cross-City Emotional Commerce",
         tldr: "Empowering the diaspora to care for family remotely.",
         sections: {
            challenge: "Sending food to parents in another city feels transactional. It lacks warmth. The current UI minimizes location context, making it hard to find 'safe' food for elderly parents.",
            approach: "I designed 'Merantau Mode'—a specific interface state. It uses an AI Concierge to recommend food based on texture (e.g., 'Soft meat for mom') and allows users to attach voice notes to the delivery."
         },
         stack: ["UX Research", "Figma", "AI Concept"],
         links: { demo: "#", repo: "#" }
      }
   };

   const project = projectDatabase[id] || projectDatabase["d1"];

   useEffect(() => {
      const handleScroll = () => {
         const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
         const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
         setScrolled((winScroll / height) * 100);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const themeStyles = {
      '--bg-void': isDark ? '#111111' : '#FFFFFF',
      '--bg-surface': isDark ? '#1C1C1C' : '#F9FAFB',
      '--text-primary': isDark ? '#F3F4F6' : '#111827',
      '--text-secondary': isDark ? '#9CA3AF' : '#6B7280',
      '--border-color': isDark ? '#374151' : '#E5E7EB',
      '--accent': isDark ? '#D4D4D8' : '#1F2937', // Mono accent
   };

   return (
      <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500 selection:bg-[var(--text-primary)] selection:text-[var(--bg-void)]">

         {/* Navigation */}
         <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
            <Link to="/" className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity flex items-center gap-2">
               <ArrowLeft size={16} /> INDEX
            </Link>
            <button onClick={() => setIsDark(!isDark)} className="hover:opacity-70 transition-opacity">
               {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
         </nav>

         <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">

            {/* HEADER: Editorial Center */}
            <header className="text-center mb-20 md:mb-32">
               <div className="inline-block border-b border-[var(--text-primary)] pb-1 mb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">{project.subtitle}</span>
               </div>
               <h1 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">
                  {project.title}
               </h1>
               <p className="text-xl md:text-2xl font-light text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                  {project.tldr}
               </p>
            </header>

            {/* CONTENT: Magazine Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">

               {/* Left (Meta) */}
               <aside className="md:col-span-3 space-y-12 md:text-right">
                  <div>
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-4">Tooling</h3>
                     <ul className="space-y-2 text-sm">
                        {project.stack.map((tool, i) => (
                           <li key={i}>{tool}</li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-4">Links</h3>
                     <ul className="space-y-2 text-sm">
                        {project.links.demo !== "#" && (
                           <li>
                              <a href={project.links.demo} target="_blank" rel="noreferrer" className="hover:underline flex items-center justify-end gap-1 group">
                                 Live Demo <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                              </a>
                           </li>
                        )}
                        {project.links.repo !== "#" && (
                           <li>
                              <a href={project.links.repo} target="_blank" rel="noreferrer" className="hover:underline opacity-70 hover:opacity-100">
                                 Source Code
                              </a>
                           </li>
                        )}
                     </ul>
                  </div>
               </aside>

               {/* Right (Story) */}
               <article className="md:col-span-9 space-y-16">
                  <section>
                     <h2 className="text-lg font-medium mb-4 flex items-center gap-3">
                        <Minus className="text-[var(--text-secondary)]" /> The Challenge
                     </h2>
                     <p className="text-lg md:text-xl leading-relaxed font-light text-[var(--text-secondary)]">
                        {project.sections.challenge}
                     </p>
                  </section>

                  <section>
                     <h2 className="text-lg font-medium mb-4 flex items-center gap-3">
                        <Minus className="text-[var(--text-secondary)]" /> Design Approach
                     </h2>
                     <p className="text-lg md:text-xl leading-relaxed font-light text-[var(--text-secondary)]">
                        {project.sections.approach}
                     </p>
                  </section>
               </article>

            </div>

         </main>

         {/* Footer */}
         <footer className="text-center py-12 border-t border-[var(--border-color)] mt-12 opacity-50">
            <p className="font-mono text-[10px] uppercase tracking-widest">Fadly Uzzaki · Systems Designer</p>
         </footer>

      </div>
   );
};

export default SideProjectDetail;