import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Sun, 
  Moon, 
  Terminal, 
  Cpu, 
  Zap, 
  ScanEye, 
  FileJson, 
  CalendarClock, 
  ShieldCheck, 
  Palette, 
  Map, 
  ExternalLink,
  Code,
  GitBranch,
  Layers
} from 'lucide-react';

/* --- THEME CONFIGURATION ---
   Aesthetic: "R&D Lab" / "Experimental Builds"
   Focus: Work-in-progress, raw code, creative output.
*/

const ActiveDaemons = () => {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(0);

  // --- PROJECT DATA (6 Items) ---
  const daemons = [
    {
      id: "d1",
      title: "Modular Interactive Worksheets",
      version: "v0.8.2-beta",
      status: "RUNNING",
      type: "EdTech Tool",
      description: "Reducing friction in non-formal education. A drag-and-drop builder for teachers to create interactive mobile worksheets without coding.",
      stack: ["React", "Dnd-Kit", "Firebase"],
      icon: FileJson,
      color: "text-emerald-500",
      border: "border-emerald-500/50",
      bg: "bg-emerald-500/5"
    },
    {
      id: "d2",
      title: "AI Comic Localizer",
      version: "v0.4.0-alpha",
      status: "TRAINING",
      type: "Computer Vision",
      description: "An agent that detects speech bubbles in manga/comics, OCRs the text, and overlays Bahasa Indonesia translations while preserving font aesthetics.",
      stack: ["Python", "OpenCV", "Tesseract"],
      icon: ScanEye,
      color: "text-amber-500",
      border: "border-amber-500/50",
      bg: "bg-amber-500/5"
    },
    {
      id: "d3",
      title: "Manual 'Year in Review'",
      version: "v1.2.0-stable",
      status: "DEPLOYED",
      type: "Data Viz",
      description: "For the 'un-tracked'. A manual generator for people who don't use Spotify/Duolingo but still want a visual recap of their year. Zero-algorithm curation.",
      stack: ["Vue.js", "D3.js", "Canvas API"],
      icon: CalendarClock,
      color: "text-blue-500",
      border: "border-blue-500/50",
      bg: "bg-blue-500/5"
    },
    // --- NEW RECOMMENDATIONS ---
    {
      id: "d4",
      title: "The Ethical UI Library",
      version: "v0.1.0-concept",
      status: "QUEUED",
      type: "Design Resource",
      description: "A counter-archive to 'Dark Patterns'. A searchable component library focused on consent, clarity, and stopping doom-scrolling.",
      stack: ["Figma", "Storybook", "MDX"],
      icon: ShieldCheck,
      color: "text-purple-500",
      border: "border-purple-500/50",
      bg: "bg-purple-500/5"
    },
    {
      id: "d5",
      title: "Glitch_Art_Gen.exe",
      version: "v0.9.1-rc",
      status: "COMPILING",
      type: "Creative Coding",
      description: "A browser-based tool to intentionally corrupt image data for artistic effect. Exploring the beauty of system failure.",
      stack: ["p5.js", "WebGL", "GLSL"],
      icon: Palette,
      color: "text-pink-500",
      border: "border-pink-500/50",
      bg: "bg-pink-500/5"
    },
    {
      id: "d6",
      title: "Localhost: Jakarta",
      version: "v0.2.0-wip",
      status: "RECORDING",
      type: "Audio/Visual Map",
      description: "An interactive soundscape map of Jakarta's transit hubs. Preserving the auditory chaos of the city before modernization silences it.",
      stack: ["Mapbox", "Web Audio API", "Next.js"],
      icon: Map,
      color: "text-cyan-500",
      border: "border-cyan-500/50",
      bg: "bg-cyan-500/5"
    }
  ];

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
    '--bg-void': isDark ? '#0F0F0F' : '#F0F0F3',
    '--bg-surface': isDark ? '#181818' : '#FFFFFF',
    '--text-primary': isDark ? '#F4F4F5' : '#18181B',
    '--text-secondary': isDark ? '#A1A1AA' : '#52525B',
    '--border-color': isDark ? '#262626' : '#E4E4E7',
    '--accent-amber': isDark ? '#F59E0B' : '#D97706',
  };

  return (
    <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500">
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-[var(--bg-surface)]">
        <div className="h-full bg-[var(--accent-amber)] transition-all duration-100" style={{ width: `${scrolled}%` }}></div>
      </div>

      {/* Header */}
      <nav className="fixed top-0 w-full bg-[var(--bg-void)]/90 backdrop-blur z-40 border-b border-[var(--border-color)] px-6 py-4 flex justify-between items-center">
        <button className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-xs uppercase tracking-wider group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Return to Terminal</span>
        </button>
        
        <div className="font-mono text-xs text-[var(--accent-amber)] flex items-center gap-2">
           <Zap size={14} className="fill-current" />
           ACTIVE_DAEMONS // EXP_LAB
        </div>

        <button onClick={() => setIsDark(!isDark)} className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)]">
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        
        {/* HERO */}
        <section className="mb-20">
           <h1 className="text-4xl md:text-6xl font-mono font-bold uppercase mb-6">
             Experimental Builds
           </h1>
           <p className="text-[var(--text-secondary)] text-xl max-w-2xl leading-relaxed">
             This is the R&D lab. These projects are rough, unpolished, and built for the sake of learning. They keep the "Creator" driver updated while the "Manager" driver is offline.
           </p>
        </section>

        {/* THE GRID (6x6 concept -> 3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {daemons.map((daemon) => (
             <div 
               key={daemon.id} 
               className={`group relative bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 flex flex-col justify-between h-[320px] hover:border-opacity-100 transition-all duration-300 overflow-hidden ${isDark ? 'hover:border-white/20' : 'hover:border-black/20'}`}
             >
                {/* Background Decor */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity ${daemon.bg.replace('bg-', 'bg-')}`}></div>
                
                {/* Header */}
                <div className="relative z-10">
                   <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-lg border bg-[var(--bg-void)] ${daemon.color} ${daemon.border}`}>
                         <daemon.icon size={24} />
                      </div>
                      <div className="flex flex-col items-end">
                         <span className={`font-mono text-[10px] ${daemon.color} border ${daemon.border} px-2 py-0.5 rounded-full bg-[var(--bg-void)] uppercase`}>
                           {daemon.status}
                         </span>
                         <span className="font-mono text-[10px] text-[var(--text-secondary)] mt-1">{daemon.version}</span>
                      </div>
                   </div>
                   
                   <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-mono group-hover:underline decoration-1 underline-offset-4">
                     {daemon.title}
                   </h3>
                   <div className="flex items-center gap-2 mb-4">
                      <Cpu size={12} className="text-[var(--text-secondary)]" />
                      <span className="font-mono text-xs text-[var(--text-secondary)] uppercase">{daemon.type}</span>
                   </div>
                   <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                     {daemon.description}
                   </p>
                </div>

                {/* Footer / Tech Stack */}
                <div className="relative z-10 pt-6 border-t border-[var(--border-color)] mt-auto">
                   <div className="flex flex-wrap gap-2 mb-4">
                      {daemon.stack.map(tech => (
                        <span key={tech} className="text-[10px] font-mono text-[var(--text-secondary)] bg-[var(--bg-void)] px-1.5 py-0.5 border border-[var(--border-color)] rounded">
                           {tech}
                        </span>
                      ))}
                   </div>
                   
                   <button className={`w-full flex items-center justify-center gap-2 py-2 text-xs font-mono uppercase tracking-widest border border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-void)] transition-colors ${daemon.color}`}>
                      <Code size={14} />
                      View Source
                   </button>
                </div>
             </div>
           ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-20 flex items-center justify-center gap-2 text-[var(--text-secondary)] font-mono text-xs opacity-50">
           <GitBranch size={14} />
           <span>BRANCH: experimental/main</span>
           <span>•</span>
           <span>LAST_COMMIT: 2h ago</span>
        </div>

      </main>
    </div>
  );
};

export default ActiveDaemons;