import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
   ArrowLeft, Search, MapPin, Users, FileText, Sun, Moon, Quote,
   GitBranch, Microscope, CheckCircle2, BarChart3, PieChart, FileDigit, Coffee, PenTool
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/* --- THEME: "THE FORENSIC AUDIT" ---
   Focus: Text density, evidence, mixed methods (Quant/Qual), "messy reality".
*/

const ResearchCaseStudy = () => {
   const { isDark, setIsDark } = useTheme();
   const [scrolled, setScrolled] = useState(0);

   // --- MOCK DATA ---
   const project = {
      title: "Understanding Trust in Unbanked Populations",
      type: "Mixed Methods Research",
      stats: [
         { label: "Sample Size", value: "N=45" },
         { label: "Duration", value: "4 Weeks" },
         { label: "Location", value: "West Java" }
      ],
      quantData: [
         { label: "Trusted Cash", val: 92, color: "bg-blue-500" },
         { label: "Trusted Apps", val: 14, color: "bg-red-500" },
         { label: "Kept Physical Log", val: 88, color: "bg-amber-500" }
      ]
   };

   // --- COMPONENT: STICKY NOTE ---
   const StickyNote = ({ children, rotation = "1", color = "bg-[#fffcda]", textColor = "text-gray-900" }) => (
      <div className={`font-serif italic text-sm ${textColor} ${color} p-4 shadow-md transform rotate-${rotation} hover:rotate-0 transition-transform duration-300 relative border border-black/5`}>
         <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-black/10 opacity-50 skew-x-12"></div>
         {children}
      </div>
   );

   // --- EFFECT: SCROLL ---
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
      '--bg-void': isDark ? '#111111' : '#F0F0F3',
      '--bg-paper': isDark ? '#181818' : '#FFFFFF',
      '--text-primary': isDark ? '#F4F4F5' : '#18181B',
      '--text-secondary': isDark ? '#A1A1AA' : '#52525B',
      '--accent-red': '#EF4444',
      '--accent-amber': '#F59E0B',
      '--accent-green': '#10B981', // Updated to standard Green
      '--border-color': isDark ? '#333' : '#E4E4E7',
   };

   return (
      <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500 selection:bg-[var(--accent-red)] selection:text-white">

         {/* Scroll Progress */}
         <div className="fixed top-0 left-0 w-full h-1 bg-[var(--bg-void)] z-50">
            <div className="h-full bg-[var(--accent-red)]" style={{ width: `${scrolled}%` }}></div>
         </div>

         {/* Header */}
         <nav className="fixed top-0 w-full bg-[var(--bg-void)]/90 backdrop-blur z-40 border-b border-[var(--border-color)] px-6 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-xs uppercase">
               <ArrowLeft size={14} /> Close File
            </Link>
            <div className="font-mono text-xs text-[var(--accent-green)] flex items-center gap-2">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-green)]"></span>
               </span>
               RESEARCH_LOG_ONLINE
            </div>
            <button onClick={() => setIsDark(!isDark)} className="text-[var(--text-secondary)] hover:text-[var(--accent-green)]">
               {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
         </nav>

         <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

            {/* 1. HERO: THE INVESTIGATION */}
            <section className="mb-24 relative">
               <div className="font-mono text-xs text-[var(--text-secondary)] mb-4 border border-[var(--border-color)] inline-block px-2 py-1 rounded">
                  AUDIT TYPE: {project.type.toUpperCase()}
               </div>
               <h1 className="text-3xl md:text-6xl font-serif font-bold leading-tight mb-8">
                  {project.title}
               </h1>

               <div className="grid grid-cols-3 gap-4 border-y border-[var(--border-color)] py-6">
                  {project.stats.map((stat, i) => (
                     <div key={i} className="text-center border-r border-[var(--border-color)] last:border-0">
                        <div className="font-mono text-2xl font-bold">{stat.value}</div>
                        <div className="text-[10px] uppercase text-[var(--text-secondary)] tracking-widest">{stat.label}</div>
                     </div>
                  ))}
               </div>

               {/* Human Touch: Sticky Note */}
               <div className="absolute top-0 right-0 hidden md:block">
                  <StickyNote rotation="2">
                     "Hypothesis failed.<br /> It wasn't complexity.<br /> It was invisibility."
                  </StickyNote>
               </div>
            </section>

            {/* 2. MODULE: QUANTITATIVE DATA (The Hard Numbers) */}
            <section className="mb-24">
               <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
                  <BarChart3 size={20} className="text-[var(--text-secondary)]" />
                  <h2 className="font-mono text-lg uppercase">The Data (What)</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                     <p className="text-[var(--text-secondary)] leading-relaxed">
                        We started with a survey to benchmark "Trust Levels." The numbers were brutal. Despite the app's clean UI, trust was non-existent compared to physical cash.
                     </p>
                     <div className="bg-[var(--bg-paper)] p-6 border border-[var(--border-color)] relative">
                        {/* Visual Annotation */}
                        <div className="absolute -top-3 -right-3 bg-red-600 text-white font-mono text-[10px] px-2 py-1 rotate-3">CRITICAL FAILURE</div>

                        <h4 className="font-mono text-xs uppercase mb-6 text-[var(--text-secondary)]">Survey: Payment Preference</h4>
                        <div className="space-y-4">
                           {project.quantData.map((data, i) => (
                              <div key={i}>
                                 <div className="flex justify-between text-xs mb-1">
                                    <span>{data.label}</span>
                                    <span>{data.val}%</span>
                                 </div>
                                 <div className="h-2 w-full bg-[var(--border-color)] rounded-full overflow-hidden">
                                    <div className={`h-full ${data.color}`} style={{ width: `${data.val}%` }}></div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Insight Highlight */}
                  <div className="flex flex-col justify-center border-l-2 border-[var(--accent-red)] pl-8">
                     <div className="text-4xl font-bold text-[var(--accent-red)] mb-2">14%</div>
                     <p className="text-lg font-serif italic text-[var(--text-primary)]">
                        "Only 14% of users trusted the 'Success' screen enough to let the customer leave without taking a screenshot first."
                     </p>
                     <div className="mt-4 font-mono text-xs text-[var(--text-secondary)]">
                    // NOTE: The green checkmark is not enough proof.
                     </div>
                  </div>
               </div>
            </section>

            {/* 3. MODULE: QUALITATIVE ARTIFACTS (The Messy Reality) */}
            <section className="mb-24">
               <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
                  <FileText size={20} className="text-[var(--text-secondary)]" />
                  <h2 className="font-mono text-lg uppercase">The Evidence (Why)</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Artifact 1: Field Note */}
                  <div className="bg-[#FDFBF7] text-black p-6 shadow-xl rotate-1 relative overflow-hidden group hover:rotate-0 transition-transform duration-300">
                     <div className="absolute top-0 left-0 w-full h-1 bg-red-500/20"></div>
                     <h4 className="font-mono text-[10px] text-gray-500 mb-4 uppercase flex justify-between">
                        <span>Field Note #04</span>
                        <span>14:30 PM</span>
                     </h4>
                     <p className="font-serif text-base leading-relaxed mb-4">
                        "Pak Asep keeps a physical book (Kasbon) next to the iPad. He inputs the data into the app, then immediately writes it in the book. Double entry. The app isn't saving him time; it's doubling his work."
                     </p>
                     <div className="border-t border-gray-300 pt-2 text-[10px] font-mono text-red-700">
                        OBSERVATION: Redundant Systems
                     </div>
                  </div>

                  {/* Artifact 2: Photo Evidence (Mock) */}
                  <div className="bg-[var(--bg-paper)] border border-[var(--border-color)] p-2 -rotate-1 hover:rotate-0 transition-transform duration-300">
                     <div className="w-full h-48 bg-[#222] flex flex-col items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                           <MapPin className="text-white/50 mb-1" size={24} />
                        </div>
                        <span className="text-[var(--text-secondary)] text-xs font-mono relative z-10">IMG_EVIDENCE_BOOK.jpg</span>
                     </div>
                     <div className="p-2 font-mono text-[10px] text-[var(--text-secondary)] text-center uppercase">
                        Fig 2. The Physical Ledger
                     </div>
                  </div>

                  {/* Artifact 3: Voice Memo */}
                  <div className="bg-[var(--bg-paper)] border border-[var(--border-color)] p-6 flex flex-col justify-between hover:border-[var(--accent-amber)] transition-colors">
                     <div>
                        <h4 className="font-mono text-xs text-[var(--accent-amber)] uppercase mb-2">Voice Transcript</h4>
                        <p className="font-serif italic text-sm text-[var(--text-primary)]">
                           "I don't know where the money goes. It flies into the cloud? I can't hold it. I trust cash."
                        </p>
                     </div>
                     <div className="w-full bg-[var(--border-color)] h-8 rounded-full mt-4 flex items-center px-2 gap-1">
                        <div className="w-2 h-2 rounded-full bg-[var(--text-primary)]"></div>
                        <div className="h-1 bg-[var(--text-primary)] flex-1"></div>
                        <span className="text-[8px] font-mono">0:14</span>
                     </div>
                  </div>
               </div>
            </section>

            {/* 4. MODULE: SYNTHESIS & PIVOT */}
            <section className="bg-[var(--bg-paper)] border border-[var(--border-color)] p-8 md:p-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-5">
                  <GitBranch size={120} />
               </div>

               <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12">
                  <div>
                     <h2 className="font-mono text-xl uppercase mb-6 flex items-center gap-3">
                        <CheckCircle2 className="text-[var(--accent-amber)]" />
                        The Design Pivot
                     </h2>
                     <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                        Users weren't rejecting the technology; they were rejecting the **abstraction**. The "Clean UI" felt empty. They needed **Skeuomorphic Reassurance**.
                     </p>
                     <div className="space-y-4">
                        <div className="flex gap-4 p-4 border border-[var(--border-color)] bg-[var(--bg-void)] opacity-50">
                           <div className="font-mono text-xs text-red-500 w-24 shrink-0">DISCARDED</div>
                           <div className="text-sm">Minimalist "Success" Toast. (Too subtle).</div>
                        </div>
                        <div className="flex justify-center">
                           <ArrowLeft className="rotate-[-90deg] text-[var(--text-secondary)]" />
                        </div>
                        <div className="flex gap-4 p-4 border border-[var(--accent-amber)] bg-[var(--accent-amber)]/5 relative">
                           {/* Scribble */}
                           <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-full bg-[var(--accent-amber)]"></div>
                           <div className="font-mono text-xs text-[var(--accent-amber)] w-24 shrink-0">ADOPTED</div>
                           <div className="text-sm">Digital "Receipt" that looks printable + Loud "Cash Register" sound effect.</div>
                        </div>
                     </div>
                  </div>

                  <div className="font-mono text-xs text-[var(--text-secondary)] space-y-4 border-l border-[var(--border-color)] pl-6 flex flex-col justify-center">
                     <div className="uppercase tracking-widest mb-2 text-[var(--text-primary)]">Impact Metrics</div>
                     <div>
                        <div className="text-2xl font-bold text-[var(--text-primary)]">45%</div>
                        <div>Decrease in "Double Entry" behavior</div>
                     </div>
                     <div>
                        <div className="text-2xl font-bold text-[var(--text-primary)]">9/10</div>
                        <div>Trust Score post-update</div>
                     </div>
                  </div>
               </div>
            </section>

            {/* FOOTER */}
            <section className="border-t border-[var(--border-color)] pt-12 text-center pb-24">
               <p className="font-mono text-xs text-[var(--text-secondary)] uppercase">
            // End of File · Fadly Uzzaki © 2025
               </p>
            </section>

         </main>
      </div>
   );
};

export default ResearchCaseStudy;