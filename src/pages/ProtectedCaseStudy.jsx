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

  // --- UNLOCKED VIEW ---
  return (
    <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-[var(--brand)] selection:text-white transition-colors duration-500">

      {/* Navbar Mock */}
      <div className="fixed top-0 w-full bg-[var(--bg-void)]/90 backdrop-blur z-50 border-b border-[var(--border-color)] py-4 px-6 flex justify-between items-center transition-colors duration-500">
        <div className="flex items-center gap-2 text-[var(--accent-green)] font-mono text-xs">
          <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
          DECLASSIFIED_MODE
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
            <X size={14} /> Close File
          </Link>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

        {/* 1. PROJECT SNAPSHOT */}
        <section className="mb-24 text-center">
          <div className="inline-block px-3 py-1 border border-[var(--brand)] text-[var(--brand)] font-mono text-xs mb-6 rounded-full bg-[var(--brand)]/10">
            CASE FILE: {projectData.id.toUpperCase()}
          </div>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6 leading-tight">
            {projectData.title}
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto font-light leading-relaxed">
            {caseData.snapshot?.tagline || caseData.memo}
          </p>
          {/* Snapshot Image */}
          <div className="mt-12 w-full aspect-video rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] relative">
            <div className="absolute inset-0 bg-[var(--brand)] opacity-10 mix-blend-overlay"></div>
            {/* Using new wireframe previews if no image */}
            <div className="w-full h-full flex items-center justify-center text-[var(--text-secondary)] opacity-30 font-mono text-xs uppercase tracking-widest">
              [ VISUAL EVIDENCE: {projectData.type} ]
            </div>
          </div>
        </section>

        {/* 2. CONTEXT */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-[var(--border-color)] mb-24">
          {[
            { label: "Client", value: caseData.context?.client || "Confidential" },
            { label: "Role", value: caseData.context?.role || projectData.role },
            { label: "Timeline", value: caseData.context?.timeline || projectData.timeline },
            { label: "Team", value: caseData.context?.team || "Product Team" }
          ].map((item, i) => (
            <div key={i} className="text-center md:text-left">
              <span className="block font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest mb-2">{item.label}</span>
              <span className="text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </section>

        {/* 3. CHALLENGE */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="font-mono text-xl uppercase flex items-center gap-2 text-[var(--accent-red)]">
              <AlertTriangle size={20} /> The Challenge
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-3xl font-serif leading-relaxed">
              "{caseData.challenge || projectData.details.problem}"
            </p>
          </div>
        </section>

        {/* 4. PROCESS (THE PLOT) */}
        {caseData.process && (
          <section className="mb-32">
            <div className="flex items-center gap-3 mb-12">
              <PenTool size={20} className="text-[var(--text-secondary)]" />
              <h2 className="font-mono text-xl uppercase">The Process</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseData.process.map((step, i) => (
                <div key={i} className="group">
                  <div className="aspect-square bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                    <span className="text-9xl font-mono opacity-5 group-hover:opacity-10 transition-opacity absolute">{i + 1}</span>
                    <Activity className="opacity-20 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. KEY INSIGHTS (CLIMAX) */}
        {caseData.insights && (
          <section className="mb-32 bg-[var(--bg-card)] border border-[var(--border-color)] p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sun size={100} />
            </div>
            <h2 className="font-mono text-xl uppercase mb-8 flex items-center gap-2 text-[var(--accent-amber)]">
              <Sun size={20} /> Key Insights
            </h2>
            <div className="space-y-8 relative z-10">
              {caseData.insights.map((insight, i) => (
                <div key={i}>
                  <h3 className="text-xl md:text-2xl font-serif italic mb-2">{insight.title}</h3>
                  <p className="text-[var(--text-secondary)]">{insight.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. SOLUTION */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-12">
            <Database size={20} className="text-[var(--text-secondary)]" />
            <h2 className="font-mono text-xl uppercase">The Solution</h2>
          </div>

          {caseData.solution ? (
            <div className="grid grid-cols-1 gap-12">
              {caseData.solution.map((sol, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-[var(--border-color)] rounded-xl overflow-hidden bg-[var(--bg-card)]">
                  <div className="aspect-video bg-[var(--bg-surface)] relative group cursor-pointer border-r border-[var(--border-color)]">
                    {/* Placeholder for Solution UI */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                      <Monitor size={48} />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-lg font-bold mb-2">{sol.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DeclassifiedMemo text={projectData.details.system} author="System Architect" />
            </div>
          )}
        </section>

        {/* 7. IMPACT */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-12">
            <Activity size={20} className="text-[var(--accent-green)]" />
            <h2 className="font-mono text-xl uppercase text-[var(--accent-green)]">Impact & Outcomes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(caseData.metrics || []).map((m, i) => (
              <div key={i} className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] text-center rounded-lg hover:border-[var(--accent-green)] transition-colors">
                <div className="text-[var(--text-secondary)] text-xs uppercase mb-2 tracking-widest">{m.label}</div>
                <div className="text-4xl md:text-5xl font-mono text-[var(--accent-green)] mb-2">{m.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. TAKEAWAYS */}
        <section className="border-t border-[var(--border-color)] pt-16">
          <div className="flex gap-4 items-start">
            <FileText className="text-[var(--text-secondary)] mt-1 shrink-0" size={20} />
            <div className="max-w-3xl">
              <h4 className="font-mono text-sm uppercase mb-4 opacity-70">Architect's Debrief (Takeaways)</h4>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed font-light">
                "{caseData.learnings || caseData.memo || "Confidential"}"
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--border-color)] pt-12 mt-12 text-center pb-24">
          <p className="font-mono text-xs text-[var(--text-secondary)] uppercase">
            // End of File · Fadly Uzzaki © 2025
          </p>
        </section>

      </main>
    </div>
  );
};

export default ProtectedCaseStudy;