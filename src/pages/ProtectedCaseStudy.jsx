import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Lock, Unlock, AlertTriangle, ArrowRight, ShieldAlert, Database, Truck,
  ShoppingCart, FileText, Thermometer, Activity, PenTool, Sun, Moon, X, ArrowLeft, Monitor
} from 'lucide-react';
import { WORK_CLUSTERS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

/* --- THEME CONFIGURATION ---
   Aesthetic: "Classified Archives" meets "Human Reality"
   The lock screen is cold/digital. The content reveals the messy, human truth inside.
*/

const ProtectedCaseStudy = () => {
  const { id } = useParams();
  const [isLocked, setIsLocked] = useState(true);
  const { isDark, setIsDark } = useTheme();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [decrypting, setDecrypting] = useState(false);
  const [progress, setProgress] = useState(0);
  const inputRef = useRef(null);

  // --- DATA RETRIEVAL ---
  // Flatten all projects to find the matching ID
  let projectData = null;
  let parentCluster = null;

  WORK_CLUSTERS.forEach(cluster => {
    const found = cluster.projects.find(p => p.id === id);
    if (found) {
      projectData = found;
      parentCluster = cluster;
    }
  });

  // Fallback if not found (or handle redirect)
  if (!projectData) {
    return <div className="min-h-screen flex items-center justify-center">Project Not Found</div>;
  }

  // Use mock case study data if specific fields missing
  const caseData = projectData.caseStudy || {
    locked: true,
    memo: "CONFIDENTIAL DATA NOT AVAILABLE",
    metrics: []
  };

  // --- HANDLER: UNLOCK ---
  const handleUnlock = (e) => {
    e.preventDefault();
    if (password.length > 0) {
      setDecrypting(true);
      setError(false);

      // Fake decryption loading sequence
      let p = 0;
      const interval = setInterval(() => {
        p += Math.random() * 15;
        if (p >= 100) {
          p = 100;
          clearInterval(interval);
          setTimeout(() => {
            setDecrypting(false);
            setIsLocked(false);
          }, 800);
        }
        setProgress(p);
      }, 200);
    } else {
      setError(true);
      const form = document.getElementById('lock-form');
      form.classList.add('animate-shake');
      setTimeout(() => form.classList.remove('animate-shake'), 500);
    }
  };

  // --- STYLES ---
  const themeStyles = {
    '--bg-void': isDark ? '#050505' : '#F0F0F3',
    '--bg-surface': isDark ? '#111111' : '#FFFFFF',
    '--bg-card': isDark ? '#181818' : '#FFFFFF',
    '--text-primary': isDark ? '#F4F4F5' : '#18181B',
    '--text-secondary': isDark ? '#A1A1AA' : '#52525B',
    '--accent-red': isDark ? '#EF4444' : '#DC2626',
    '--accent-amber': isDark ? '#F59E0B' : '#D97706',
    '--accent-green': isDark ? '#10B981' : '#059669',
    '--border-color': isDark ? '#333' : '#E4E4E7',
    '--brand': parentCluster.brandColor || 'var(--accent-amber)'
  };

  // --- COMPONENT: DECLASSIFIED MEMO ---
  const DeclassifiedMemo = ({ text, author }) => (
    <div className="relative bg-[#fff1c5] text-black p-6 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-sm mx-auto md:mx-0">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/10 -rotate-2"></div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-red-700 mb-2 border-b border-red-700/20 pb-1">
        CONFIDENTIAL // FIELD NOTE
      </div>
      <p className="font-serif italic text-sm leading-relaxed mb-4">
        "{text}"
      </p>
      <div className="font-mono text-xs opacity-60 text-right">
        — {author}
      </div>
    </div>
  );

  if (isLocked) {
    return (
      <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-mono flex items-center justify-center p-6 relative overflow-hidden transition-colors duration-500">

        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: `linear-gradient(${isDark ? '#333' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#333' : '#000'} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
        </div>

        {/* Home Navigation (Abort) */}
        <div className="absolute top-6 left-6 z-20">
          <Link to={`/work/${parentCluster.id}`} className="text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors flex items-center gap-2 font-mono text-xs uppercase p-2">
            <ArrowLeft size={16} /> Abort
          </Link>
        </div>

        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors p-2"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="max-w-md w-full relative z-10">
          {/* Header Status */}
          <div className="flex justify-between items-center mb-12 text-xs text-[var(--accent-red)] uppercase tracking-widest border-b border-[var(--accent-red)] pb-2 opacity-80">
            <span className="flex items-center gap-2"><ShieldAlert size={14} /> SYSTEM_LOCKED</span>
            <span>AUTH_REQUIRED</span>
          </div>

          {!decrypting ? (
            <div className="space-y-8 animate-in fade-in zoom-in duration-500">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                  <Lock size={32} className="text-[var(--text-secondary)]" />
                </div>
                <h1 className="text-2xl font-bold tracking-tight">RESTRICTED CASE FILE: {projectData.id.toUpperCase()}</h1>
                <p className="text-[var(--text-secondary)] text-sm">
                  Enter credentials to view the messy reality behind "{projectData.title}".
                </p>
              </div>

              <form id="lock-form" onSubmit={handleUnlock} className="space-y-4">
                <div className="relative group">
                  <div className={`absolute inset-0 bg-[var(--accent-red)] blur opacity-20 transition-opacity ${error ? 'opacity-50' : ''}`}></div>
                  <input
                    ref={inputRef}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="ENTER PASSKEY"
                    className="relative w-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] px-4 py-4 text-center tracking-[0.5em] focus:outline-none focus:border-[var(--accent-red)] transition-all placeholder:tracking-normal placeholder:text-[var(--text-secondary)]/50"
                    autoFocus
                  />
                </div>

                {error && (
                  <div className="text-center text-[var(--accent-red)] text-xs flex items-center justify-center gap-2">
                    <AlertTriangle size={12} />
                    <span>ACCESS_DENIED</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] py-3 hover:bg-[var(--accent-red)] hover:text-black hover:border-[var(--accent-red)] transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2 group"
                >
                  <Unlock size={14} className="group-hover:unlock" />
                  Decrypt File
                </button>
              </form>

              <div className="text-center">
                <p className="text-[10px] text-[var(--text-secondary)] opacity-50">
                  // FOR ACCESS: CONTACT ME
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="h-2 w-full bg-[var(--bg-surface)] border border-[var(--border-color)] overflow-hidden relative">
                <div
                  className="h-full bg-[var(--accent-green)] transition-all duration-200"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="font-mono text-xs text-[var(--accent-green)] space-y-1">
                <p>{'>'} DECRYPTING_NARRATIVE...</p>
                {progress > 30 && <p>{'>'} LOADING_HUMAN_CONTEXT...</p>}
                {progress > 60 && <p>{'>'} EXPOSING_MISTAKES...</p>}
                {progress > 90 && <p>{'>'} ACCESS_GRANTED.</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --- UNLOCKED VIEW (VISUAL STORYTELLING MODE) ---
  return (
    <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-[var(--brand)] selection:text-white transition-colors duration-500">

      {/* AMBIENT MOOD BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{ background: `radial-gradient(circle at 50% 0%, ${themeStyles['--brand']} 0%, transparent 70%)` }}>
      </div>

      {/* Navbar Mock */}
      <div className="fixed top-0 w-full bg-[var(--bg-void)]/80 backdrop-blur-md z-50 border-b border-[var(--border-color)] py-4 px-6 flex justify-between items-center transition-colors duration-500">
        <div className="flex items-center gap-2 text-[var(--brand)] font-mono text-xs tracking-widest">
          <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
          CASE_FILE_{projectData.id.toUpperCase()}
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors p-1"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => { setIsLocked(true); setPassword(''); setProgress(0); }}
            className="text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors flex items-center gap-2 font-mono text-xs uppercase"
          >
            <Lock size={14} />
            Lock System
          </button>
          <Link to={`/work/${parentCluster.id}`} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2 font-mono text-xs uppercase">
            <X size={14} /> Close
          </Link>
        </div>
      </div>

      <main className="relative z-10 w-full pb-32">

        {/* 1. HERO: FULL BLEED HOOK */}
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 text-center pt-24">
          {/* Cinematic Title */}
          <div className="mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--brand)] border-b border-[var(--brand)] pb-2 inline-block">
              {caseData.snapshot?.tagline || "Confidential Project"}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif italic mb-8 leading-[0.9] tracking-tight max-w-5xl mx-auto">
            {projectData.title}
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto font-light leading-relaxed mb-16">
            {caseData.challenge || projectData.details.problem}
          </p>

          {/* Hero Visual Hook */}
          <div className="w-full max-w-6xl aspect-[21/9] bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-void)] via-transparent to-[var(--brand)] opacity-20"></div>
            {/* Abstract UI representation */}
            <div className="absolute inset-x-0 bottom-0 h-3/4 flex items-end justify-center gap-4 px-12 pb-12 opacity-50 group-hover:opacity-80 transition-opacity duration-1000 transform group-hover:-translate-y-2">
              <div className="w-1/3 h-full bg-[var(--text-secondary)]/10 rounded-t-xl backdrop-blur-sm border-t border-x border-[var(--text-secondary)]/20"></div>
              <div className="w-1/2 h-[120%] bg-[var(--bg-surface)] rounded-t-xl shadow-2xl border border-[var(--border-color)] relative z-10">
                {/* Mock Interface Header */}
                <div className="h-12 border-b border-[var(--border-color)] flex items-center gap-2 px-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
              </div>
              <div className="w-1/3 h-4/5 bg-[var(--text-secondary)]/10 rounded-t-xl backdrop-blur-sm border-t border-x border-[var(--text-secondary)]/20"></div>
            </div>
            <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase text-[var(--text-secondary)]">Fig. 1.0 — System Architecture</div>
          </div>
        </section>

        {/* 2. CONTEXT STRIP */}
        <section className="bg-[var(--bg-card)] border-y border-[var(--border-color)] py-12 relative overflow-hidden">
          {/* Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 text-[10rem] font-black text-black/5 pointer-events-none select-none whitespace-nowrap z-0">
            TOP SECRET
          </div>

          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {[
              { label: "Client", value: caseData.context?.client || "Confidential" },
              { label: "Role", value: caseData.context?.role || projectData.role },
              { label: "Timeline", value: caseData.context?.timeline || projectData.timeline },
              { label: "Team", value: caseData.context?.team || "Product Team" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest mb-2 opacity-70">{item.label}</span>
                <span className="font-medium text-lg font-serif">{item.value}</span>
              </div>
            ))}
          </div>

          {/* CLASSIFIED DATA BLOCK (Redacted Content) */}
          <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-dashed border-[var(--border-color)]">
            <div className="flex items-center gap-4">
              <div className="bg-red-500/10 text-red-500 px-2 py-1 text-[9px] font-mono tracking-widest border border-red-500/20 rounded">
                RESTRICTED_ACCESS
              </div>
              <div className="flex-1 h-px bg-red-500/20"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 opacity-60">
              <div>
                <div className="font-mono text-[9px] uppercase text-[var(--text-secondary)] mb-1">Internal Code Name</div>
                <div className="font-mono text-sm">PROJECT_{projectData.id.toUpperCase()}_V1</div>
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase text-[var(--text-secondary)] mb-1">Budget Allocation</div>
                <div className="font-mono text-sm blur-[2px] hover:blur-none transition-all duration-300 select-none">$XXX,XXX.00</div>
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase text-[var(--text-secondary)] mb-1">Clearance Level</div>
                <div className="font-mono text-sm">LEVEL 5 (ARCHITECT)</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROCESS: FILM STRIP */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <div className="flex items-baseline justify-between mb-16 border-b border-[var(--border-color)] pb-6">
            <h2 className="text-4xl font-serif italic">The Process</h2>
            <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">Evolution of Thought</span>
          </div>

          {/* Horizontal Scroll / Grid -> Treating steps like film negatives */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseData.process && caseData.process.map((step, i) => (
              <div key={i} className="group relative">
                {/* 'Film Frame' Look */}
                <div className="aspect-[4/5] bg-[var(--bg-card)] border-[4px] border-white dark:border-[#222] shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--bg-surface)] p-6 flex flex-col justify-between">
                    <div className="text-[var(--brand)] opacity-20 text-6xl font-bold font-serif">{i + 1}</div>
                    <div className="space-y-4">
                      <Activity size={24} className="text-[var(--text-primary)]" />
                      <h3 className="text-xl font-bold border-b border-[var(--border-color)] pb-2">{step.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-mono">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  {/* Gloss overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                </div>
                <div className="text-center mt-4 font-mono text-[10px] text-[var(--text-secondary)] uppercase opacity-50">
                  Step 0{i + 1} // {step.title.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. KEY INSIGHTS (MOOD & TYPOGRAPHY) */}
        {caseData.insights && (
          <section className="bg-[var(--bg-card)] border-y border-[var(--border-color)] py-32 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-[var(--brand)] opacity-5 rounded-full blur-3xl"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
              <Sun size={32} className="mx-auto text-[var(--brand)] mb-8" />
              <h2 className="text-3xl md:text-5xl font-serif italic mb-16 leading-tight">
                "We realized that <span className="text-[var(--brand)]">clarity</span> was more valuable than <span className="text-[var(--text-secondary)] decoration-line-through decoration-1">features</span>."
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                {caseData.insights.map((insight, i) => (
                  <div key={i} className="border-l-2 border-[var(--brand)] pl-8 py-2">
                    <h3 className="font-bold uppercase tracking-widest text-xs mb-3 text-[var(--brand)]">{insight.title}</h3>
                    <p className="text-lg text-[var(--text-primary)] leading-relaxed">{insight.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. SOLUTION: ANNOTATED SCREENS */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-4xl font-serif italic">The Solution</h2>
            <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">Interface Design</span>
          </div>

          <div className="space-y-32">
            {caseData.solution ? caseData.solution.map((sol, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                {/* Annotated Image Area */}
                <div className="w-full md:w-2/3 aspect-video bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] relative shadow-2xl overflow-hidden group">
                  {/* Abstract Screen Content */}
                  <div className="absolute inset-4 bg-[var(--bg-surface)] rounded border border-[var(--border-color)]">
                    <div className="h-8 border-b border-[var(--border-color)] bg-[var(--bg-card)] flex items-center px-4 gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                    <div className="p-8 flex items-center justify-center opacity-10">
                      <Monitor size={64} />
                    </div>
                  </div>

                  {/* Annotation Hotspot (Animated) */}
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[var(--brand)] rounded-full animate-ping"></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[var(--brand)] rounded-full border-2 border-[var(--bg-void)]"></div>

                  {/* Caption Tooltip */}
                  <div className="absolute top-1/2 left-1/2 ml-8 -mt-12 bg-[var(--bg-void)]/90 backdrop-blur border border-[var(--border-color)] p-3 rounded max-w-xs text-xs shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-x-2">
                    <span className="font-bold text-[var(--brand)] block mb-1">Feature Highlight</span>
                    {sol.desc}
                  </div>
                </div>

                {/* Narrative Text */}
                <div className="w-full md:w-1/3">
                  <div className="font-mono text-xs text-[var(--text-secondary)] mb-4 uppercase tracking-widest">Exhibit {String.fromCharCode(65 + i)}</div>
                  <h3 className="text-2xl font-bold mb-4">{sol.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              </div>
            )) : (
              <div className="p-12 border border-dashed border-[var(--border-color)] text-center text-[var(--text-secondary)] font-mono">
                [ CLASSIFIED SYSTEM ARCHITECTURE ]
              </div>
            )}
          </div>
        </section>

        {/* 6. IMPACT & OUTCOMES */}
        <section className="bg-[var(--brand)] text-[var(--bg-void)] py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-black/10">
              {(caseData.metrics || []).map((m, i) => (
                <div key={i} className="pt-8 md:pt-0 md:px-8">
                  <div className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2">{m.label}</div>
                  <div className="text-6xl font-mono font-bold tracking-tighter">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. AI RETRO-FIT (NEW SECTION) */}
        {caseData.aiHypothesis && (
          <section className="bg-black text-white py-32 relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
              <div className="flex items-center gap-4 mb-12 text-emerald-400 font-mono text-xs uppercase tracking-widest">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                System Update // 2025 Vision
              </div>

              <h2 className="text-4xl md:text-5xl font-serif italic mb-8">
                "If I built this today..."
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Back then, we solved this with logic and loops. Today, I would solve it with <span className="text-white font-bold">{caseData.aiHypothesis.tech}</span>.
                  </p>
                  <div className="p-6 border border-white/10 bg-white/5 rounded-lg backdrop-blur-sm">
                    <h3 className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-2">The New Concept</h3>
                    <p className="text-xl font-bold">{caseData.aiHypothesis.title}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">Retro-Fit Logic</h4>
                    <p className="text-gray-300 leading-relaxed border-l-2 border-emerald-500/50 pl-4">{caseData.aiHypothesis.desc}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">Potential Impact</h4>
                    <div className="text-3xl font-mono font-bold text-emerald-400">{caseData.aiHypothesis.impact}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 8. TAKEAWAYS (ARCHITECT'S NOTE) */}
        <section className="max-w-3xl mx-auto px-6 py-40 text-center">
          <FileText className="mx-auto text-[var(--text-secondary)] mb-8" size={32} />
          <h4 className="font-mono text-xs uppercase mb-8 opacity-50 tracking-[0.2em]">// Architect's Debrief</h4>
          <p className="text-2xl md:text-3xl font-serif leading-relaxed text-[var(--text-primary)]">
            "{caseData.learnings || caseData.memo || "Confidential"}"
          </p>
          <div className="mt-12 w-24 h-1 bg-[var(--brand)] mx-auto"></div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[var(--border-color)] py-12 text-center opacity-40 hover:opacity-100 transition-opacity">
          <p className="font-mono text-[10px] uppercase tracking-widest">
            Human Algorithm Portfolio · Fadly Uzzaki © 2025
          </p>
        </footer>

      </main>
    </div>
  );
};

export default ProtectedCaseStudy;