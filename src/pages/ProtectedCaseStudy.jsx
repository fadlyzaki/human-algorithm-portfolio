import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Lock, Unlock, AlertTriangle, ArrowRight, ShieldAlert, Database, Truck,
  ShoppingCart, FileText, Thermometer, Activity, PenTool, Sun, Moon, X, ArrowLeft
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/* --- THEME CONFIGURATION ---
   Aesthetic: "Classified Archives" meets "Human Reality"
   The lock screen is cold/digital. The content reveals the messy, human truth inside.
*/

const ProtectedCaseStudy = () => {
  const [isLocked, setIsLocked] = useState(true);
  const { isDark, setIsDark } = useTheme();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [decrypting, setDecrypting] = useState(false);
  const [progress, setProgress] = useState(0);
  const inputRef = useRef(null);

  // --- MOCK DATA: MARKETPLACE PROJECT ---
  const project = {
    title: "The Commerce Engine",
    subtitle: "Organizing the chaos of supply chains.",
    role: "Lead Product Designer",
    timeline: "1 Year 2 Months",
    tags: ["Supply Chain", "High Scale", "Legacy Integration"],
    metrics: [
      { label: "Cart Abandonment", value: "-12%", trend: "positive" },
      { label: "Promo Usage", value: "+25%", trend: "positive" },
      { label: "Trust Score", value: "9.2/10", trend: "positive" }
    ]
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
          <Link to="/" className="text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors flex items-center gap-2 font-mono text-xs uppercase p-2">
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
                <h1 className="text-2xl font-bold tracking-tight">RESTRICTED CASE FILE</h1>
                <p className="text-[var(--text-secondary)] text-sm">
                  Enter credentials to view the messy reality behind the "Commerce Engine".
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
                  // HINT: Try "jakipadang"
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
    <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-amber)] selection:text-black transition-colors duration-500">

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
          <Link to="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2 font-mono text-xs uppercase">
            <X size={14} /> Close File
          </Link>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

        {/* HERO */}
        <section className="mb-24">
          <div className="inline-block px-3 py-1 border border-[var(--accent-amber)] text-[var(--accent-amber)] font-mono text-xs mb-6 rounded-full bg-[var(--accent-amber)]/10">
            PROJECT: COMMERCE ENGINE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase mb-8 leading-tight">
            The Commerce Engine: <br />
            <span className="text-[var(--text-secondary)] font-serif italic font-normal lowercase">Organizing the chaos of 10,000 SKUs.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-[var(--border-color)] py-8">
            {project.metrics.map((m, i) => (
              <div key={i} className="px-4 border-l border-[var(--border-color)] first:border-l-0">
                <div className="text-[var(--text-secondary)] text-xs uppercase mb-2 tracking-widest">{m.label}</div>
                <div className="text-3xl font-mono text-[var(--accent-green)]">{m.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTEXT: THE HUMAN CHAOS */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 mb-32 items-start">
          <div className="prose prose-invert prose-lg">
            <h2 className="font-mono text-xl text-[var(--text-primary)] uppercase mb-6 flex items-center gap-3">
              <Thermometer className="text-[var(--accent-red)]" />
              The Environment (40°C)
            </h2>
            <p className="text-[var(--text-secondary)]">
              I didn't design this system in an air-conditioned office. I designed it in a warehouse in Surabaya where the temperature hit 40°C by noon.
            </p>
            <p className="text-[var(--text-secondary)]">
              The "database" wasn't a SQL server. It was a guy named Pak Eko shouting orders across the loading dock. The problem wasn't code; it was that the digital reality didn't match the physical sweating reality of the workers.
            </p>
            <p className="text-[var(--text-secondary)] border-l-2 border-[var(--accent-amber)] pl-4 italic">
              If the app lagged for 2 seconds, Pak Eko would ignore it and go back to his whiteboard.
            </p>
          </div>

          {/* Declassified Note Component */}
          <div className="mt-8 lg:mt-0">
            <DeclassifiedMemo
              text="We found 40% of orders failed because the stock didn't actually exist. The UI was lying to the users because the sync was too slow for the fork-lifts."
              author="Field Audit Log, Day 3"
            />
          </div>
        </section>

        {/* DIAGRAM: THE REFACTOR */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-8">
            <Database size={20} className="text-[var(--accent-amber)]" />
            <h2 className="font-mono text-xl uppercase">Refactoring Trust</h2>
          </div>

          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] p-8 md:p-12 relative overflow-hidden group">
            {/* ASCII / DIAGRAM MOCKUP */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-mono text-xs relative z-10 items-center">

              {/* Legacy: Chaos */}
              <div className="space-y-4 opacity-50">
                <div className="p-4 border border-[var(--border-color)] border-dashed rounded relative">
                  Legacy "System"
                  <div className="absolute -top-3 -right-3 bg-red-500/20 text-red-500 px-2 py-1 text-[8px]">UNSTABLE</div>
                </div>
                <div className="text-[var(--accent-red)] animate-pulse text-[10px]">Sync Latency: ~45 mins</div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center justify-center text-[var(--accent-green)] gap-2">
                <div className="h-px w-full bg-[var(--border-color)] md:hidden"></div>
                <ArrowRight size={24} className="hidden md:block" />
                <span className="bg-[var(--bg-surface)] px-2 text-[10px] border border-[var(--border-color)] rounded">WebSocket Impl.</span>
              </div>

              {/* New System: Clarity */}
              <div className="space-y-4">
                <div className="p-4 border border-[var(--accent-green)] bg-[var(--accent-green)]/5 rounded text-[var(--accent-green)] shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                  Real-time Inventory
                </div>
                <div className="text-[var(--text-secondary)] text-[10px]">Sync Latency: &lt; 200ms</div>
              </div>
            </div>

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: `radial-gradient(${isDark ? '#FFF' : '#000'} 1px, transparent 1px)`, backgroundSize: '20px 20px' }}>
            </div>
          </div>

          <div className="mt-6 flex gap-4 text-xs font-mono text-[var(--text-secondary)] opacity-70">
            <div className="flex items-center gap-2">
              <Activity size={12} /> Live Status: STABLE
            </div>
            <div className="flex items-center gap-2">
              <PenTool size={12} /> Design: High Contrast
            </div>
          </div>
        </section>

        {/* UI GALLERY: HUMAN CENTERED */}
        <section className="mb-24">
          <h3 className="font-mono text-lg uppercase mb-8 text-[var(--text-primary)]">The Interface Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 group cursor-pointer">
              <div className="aspect-[4/3] bg-[var(--bg-card)] border border-[var(--border-color)] relative flex items-center justify-center overflow-hidden transition-all group-hover:border-[var(--accent-amber)]">
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#050505]' : 'from-[#F0F0F3]'} to-transparent opacity-60 z-10`}></div>
                <Truck size={64} className="text-[var(--text-secondary)] opacity-20 group-hover:opacity-100 group-hover:scale-110 group-hover:text-[var(--accent-amber)] transition-all duration-700" />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-[var(--text-primary)] font-bold group-hover:text-[var(--accent-amber)] transition-colors">Logistics Dashboard</h3>
                  <p className="text-xs text-[var(--text-secondary)]">Big buttons for gloved hands.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:mt-12 group cursor-pointer">
              <div className="aspect-[4/3] bg-[var(--bg-card)] border border-[var(--border-color)] relative flex items-center justify-center overflow-hidden transition-all group-hover:border-[var(--accent-green)]">
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#050505]' : 'from-[#F0F0F3]'} to-transparent opacity-60 z-10`}></div>
                <ShoppingCart size={64} className="text-[var(--text-secondary)] opacity-20 group-hover:opacity-100 group-hover:scale-110 group-hover:text-[var(--accent-green)] transition-all duration-700" />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-[var(--text-primary)] font-bold group-hover:text-[var(--accent-green)] transition-colors">Smart Cart</h3>
                  <p className="text-xs text-[var(--text-secondary)]">Auto-splitting orders by warehouse location.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER NOTE */}
        <section className="border-t border-[var(--border-color)] pt-12">
          <div className="flex gap-4 items-start">
            <FileText className="text-[var(--accent-amber)] mt-1 shrink-0" size={20} />
            <div>
              <h4 className="font-mono text-sm text-[var(--text-primary)] uppercase mb-2">Architect's Debrief</h4>
              <p className="text-sm text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                "This project taught me that in B2B, 'boring' is a feature. Traders don't want delight; they want predictability. We removed 40% of the UI animations to make the app feel faster on low-end devices, and user trust immediately went up. <br /><br />
                <span className="text-[var(--text-primary)] font-serif italic">Sometimes the best algorithm is just listening to the guy shouting in the warehouse.</span>"
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