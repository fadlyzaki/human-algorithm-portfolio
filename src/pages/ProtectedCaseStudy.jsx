import React, { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock, Unlock, AlertTriangle, ArrowRight, ShieldAlert, Database, Truck,
  ShoppingCart, FileText, Thermometer, Activity, PenTool, Sun, Moon, X, ArrowLeft, Monitor, Globe, ScanEye, Sparkles, RotateCcw,
  Lightbulb, BarChart, Rocket, Search
} from 'lucide-react';
import { WORK_CLUSTERS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import useThemeStyles from '../hooks/useThemeStyles';
import { useLanguage } from '../context/LanguageContext';
import { useHandCursor } from '../context/HandCursorContext';
import BackButton from '../components/BackButton';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import ZoomableImage from '../components/ZoomableImage';
import AiryDiagram from '../components/AiryDiagram';
import AIBrainstorm from '../components/AIBrainstorm';
import DeclassifiedMemo from '../components/DeclassifiedMemo';



/* --- THEME CONFIGURATION ---
   Aesthetic: "Classified Archives" meets "Human Reality"
   The lock screen is cold/digital. The content reveals the messy, human truth inside.
*/

const ProtectedCaseStudy = () => {
  const { id } = useParams();
  const baseThemeStyles = useThemeStyles();
  const [isLocked, setIsLocked] = useState(true);
  const [activeSummary, setActiveSummary] = useState('recruiter'); // Default to recruiter view
  const { isDark, setIsDark } = useTheme();
  const { t, toggleLanguage, language } = useLanguage();
  const { isGestureMode, toggleGestureMode } = useHandCursor();
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
  // Fallback if not found
  if (!projectData) {
    return (
      <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #333 25%, #333 26%, transparent 27%, transparent 74%, #333 75%, #333 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #333 25%, #333 26%, transparent 27%, transparent 74%, #333 75%, #333 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}>
        </div>
        <div className="z-10 text-center border border-red-900/50 bg-red-950/10 p-12 backdrop-blur-sm max-w-lg w-full">
          <ShieldAlert size={48} className="mx-auto text-red-500 mb-6 animate-pulse" />
          <h1 className="text-2xl font-bold text-red-500 mb-2 uppercase tracking-[0.2em]">{t('protected.access_denied') || "Access Denied"}</h1>
          <div className="h-px w-16 bg-red-800 mx-auto mb-6"></div>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            {t('protected.file_not_exist') || `The requested case file "${id}" does not exist or has been redacted from the archives.`}
          </p>
          <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-400 hover:text-red-300 border border-red-900/50 px-6 py-3 hover:bg-red-950/30 transition-all">
            <ArrowLeft size={14} /> {t('protected.return_base') || "Return to Base"}
          </Link>
        </div>
      </div>
    );
  }

  // Use mock case study data if specific fields missing
  const isId = language === 'id';

  // Resolve Case Data (Bilingual)
  const rawCaseData = projectData.caseStudy || {
    locked: true,
    memo: "CONFIDENTIAL DATA NOT AVAILABLE",
    metrics: []
  };

  const caseData = (isId && projectData.caseStudy_id) ? projectData.caseStudy_id : rawCaseData;

  // --- HANDLER: UNLOCK ---
  const handleUnlock = (e) => {
    e.preventDefault();
    if (password.trim().toLowerCase() === import.meta.env.VITE_PROTECTED_PASSWORD) {
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
  // --- STYLES ---
  const themeStyles = {
    ...baseThemeStyles,
    '--brand': parentCluster.brandColor || 'var(--accent-amber)'
  };



  if (isLocked) {
    return (
      <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-mono flex items-center justify-center p-6 relative overflow-hidden transition-colors duration-500">
        <SEO
          title={`🔒 Protected: ${projectData.title}`}
          description="Confidential Case Study. Access Restricted."
        />

        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: `linear-gradient(${isDark ? '#333' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#333' : '#000'} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
        </div>

        {/* Home Navigation (Abort) */}
        <div className="absolute top-6 left-6 z-20">
          <BackButton to={`/work/${parentCluster.id}`} label={t('protected.back') || "Run: Return_to_Base"} className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)]" />
        </div>

        <div className="absolute top-6 right-6 z-20 flex items-center gap-4">
          <button
            onClick={toggleGestureMode}
            className={`transition-colors p-1 ${isGestureMode ? 'text-[var(--brand)] animate-pulse' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
            title="Toggle Hand Tracking"
          >
            <ScanEye size={18} />
          </button>
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors p-2"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            title="Switch Language"
          >
            <Globe size={16} />
            <span className="font-mono text-xs uppercase tracking-widest">{language}</span>
          </button>
        </div>

        <div className="max-w-md w-full relative z-10">
          {/* Header Status */}
          <div className="flex justify-between items-center mb-8 text-xs text-[var(--accent-red)] uppercase tracking-widest border-b border-[var(--accent-red)] pb-2 opacity-80">
            <span className="flex items-center gap-2"><ShieldAlert size={14} /> {t('protected.system_locked') || "SYSTEM_LOCKED"}</span>
            <span>{t('protected.auth_required') || "AUTH_REQUIRED"}</span>
          </div>

          {!decrypting ? (
            <div className="space-y-8 animate-in fade-in zoom-in duration-500">

              {/* --- NEW: CONTEXT SWITCHER --- */}
              {caseData.summaries ? (
                <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl overflow-hidden shadow-2xl">
                  {/* Tab Header */}
                  <div className="flex border-b border-[var(--border-color)] bg-[var(--bg-surface)]">
                    {Object.keys(caseData.summaries).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setActiveSummary(mode)}
                        className={`flex-1 py-3 text-[10px] md:text-xs uppercase tracking-widest font-mono transition-colors
                          ${activeSummary === mode
                            ? 'bg-[var(--bg-card)] text-[var(--brand)] font-bold border-b-2 border-b-[var(--brand)]'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                          }`}
                      >
                        {caseData.summaries[mode].label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="p-6 md:p-8 text-left">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-2 rounded-lg 
                          ${activeSummary === 'eli5' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : ''}
                          ${activeSummary === 'recruiter' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : ''}
                          ${activeSummary === 'technical' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : ''}
                        `}>
                        {activeSummary === 'eli5' && <Sun size={20} />}
                        {activeSummary === 'recruiter' && <Activity size={20} />}
                        {activeSummary === 'technical' && <Database size={20} />}
                      </div>
                      <div>
                        <h3 className="font-serif italic text-xl md:text-2xl mb-2 text-[var(--text-primary)]">
                          "{caseData.summaries[activeSummary].title}"
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed pl-14 border-l-2 border-[var(--border-color)]">
                      {caseData.summaries[activeSummary].text}
                    </p>
                  </div>
                </div>
              ) : (
                /* Fallback for projects without summaries */
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                    <Lock size={32} className="text-[var(--text-secondary)]" />
                  </div>
                  <h1 className="text-2xl font-bold tracking-tight">{t('protected.restricted_file') || "RESTRICTED CASE FILE"}: {projectData.id.toUpperCase()}</h1>
                  <p className="text-[var(--text-secondary)] text-sm">
                    {t('protected.enter_credentials') || "Enter credentials to view the messy reality behind"} "{isId ? (projectData.title_id || projectData.title) : projectData.title}".
                  </p>
                </div>
              )}

              <form id="lock-form" onSubmit={handleUnlock} className="space-y-4">
                <div className="relative group">
                  <div className={`absolute inset-0 bg-[var(--accent-red)] blur opacity-20 transition-opacity ${error ? 'opacity-50' : ''}`}></div>
                  <input
                    ref={inputRef}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t('protected.enter_passkey') || "ENTER PASSKEY"}
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
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] py-3 hover:bg-[var(--accent-red)] hover:text-black hover:border-[var(--accent-red)] transition-all duration-200 uppercase text-xs tracking-widest flex items-center justify-center gap-2 group"
                >
                  <Unlock size={14} className="group-hover:unlock" />
                  {t('protected.decrypt_file') || "Decrypt File"}
                </button>
              </form>

              <div className="text-center">
                <p className="text-[10px] text-[var(--text-secondary)] opacity-50 mb-2">
                  {t('protected.unauthorized') || "// UNAUTHORIZED PERSONNEL"}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent-red)] border-b border-[var(--accent-red)] hover:bg-[var(--accent-red)] hover:text-black transition-all pb-1"
                >
                  {t('protected.request_access') || "Request Access Key"} <ArrowRight size={12} />
                </Link>
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
                <p>{'>'} {t('protected.decrypting') || "DECRYPTING_NARRATIVE..."}</p>
                {progress > 30 && <p>{'>'} {t('protected.loading_context') || "LOADING_HUMAN_CONTEXT..."}</p>}
                {progress > 60 && <p>{'>'} {t('protected.exposing_mistakes') || "EXPOSING_MISTAKES..."}</p>}
                {progress > 90 && <p>{'>'} {t('protected.access_granted') || "ACCESS_GRANTED."}</p>}
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
      <SEO
        title={isId ? (projectData.title_id || projectData.title) : projectData.title}
        description={caseData.challenge || (isId ? (projectData.details_id?.problem || projectData.details.problem) : projectData.details.problem)}
      />

      {/* AMBIENT MOOD BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{ background: `radial-gradient(circle at 50% 0%, ${themeStyles['--brand']} 0%, transparent 70%)` }}>
      </div>

      {/* Navbar Mock */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[var(--bg-void)]/80 backdrop-blur-md border-b border-[var(--border-color)] transition-all duration-500">
        <BackButton to={`/work/${parentCluster.id}`} label="Close" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]" />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-[var(--brand)] font-mono text-xs tracking-widest hidden md:flex">
          <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
          CASE_FILE_{projectData.id.toUpperCase()}
        </div>

        <div className="flex items-center gap-6">

          <div className="flex items-center gap-4">
            <button
              onClick={toggleGestureMode}
              className={`transition-colors p-1 ${isGestureMode ? 'text-[var(--brand)] animate-pulse' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
              title="Toggle Hand Tracking"
            >
              <ScanEye size={18} />
            </button>

            <button
              onClick={() => setIsDark(!isDark)}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors p-1"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title="Switch Language"
            >
              <Globe size={16} />
              <span className="font-mono text-xs uppercase tracking-widest">{language}</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 w-full pb-32">

        {/* 1. HERO: FULL BLEED HOOK */}
        <section className="flex flex-col items-center relative overflow-hidden px-6 text-center pt-24 md:pt-32 pb-20">
          {/* Technical Illustration Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="w-full h-full opacity-20 grayscale transition-all duration-1000">
              <ProjectCard type={projectData.type} expanded={true} id={projectData.id} showChrome={true} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-void)] via-[var(--bg-void)]/80 to-[var(--bg-void)]"></div>
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 w-full flex flex-col items-center">
            {/* WIP Label for incomplete projects */}
            {!['stoqo-logistics', 'stoqo-sales'].includes(projectData.id) && (
              <div className="mb-6 flex items-center justify-center">
                <div className="bg-amber-500/10 border border-amber-500/50 text-amber-600 dark:text-amber-400 px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm">
                  <AlertTriangle size={14} />
                  <span className="font-mono text-[10px] uppercase tracking-widest">
                    {t('protected.wip_label') || "Work in Progress"}
                  </span>
                </div>
              </div>
            )}

            {/* Cinematic Title */}
            <div className="mb-4">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--brand)] border-b border-[var(--brand)] pb-2 inline-block">
                {caseData.snapshot?.tagline || "Confidential Project"}
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif italic mb-8 leading-[0.9] tracking-tight max-w-5xl mx-auto">
              {isId ? (projectData.title_id || projectData.title) : projectData.title}
            </h1>

            <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto font-light leading-relaxed mb-16">
              {caseData.challenge || projectData.details.problem}
            </p>

            {/* Hero Visual Hook */}
            <div className="w-full max-w-6xl aspect-[21/9] bg-black dark:bg-white rounded-2xl border border-[var(--border-color)] shadow-2xl relative overflow-hidden group">
              <ProjectCard type={projectData.type} expanded={true} id={projectData.id} showChrome={true} image={null} priority={true} />
              <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase text-white dark:text-black bg-black/80 dark:bg-white/80 border border-[var(--border-color)] px-3 py-2 rounded shadow-xl hidden">Fig. 1.0 — System Architecture</div>
            </div>
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


        </section>

        {/* 3. UNIFIED DESIGN PROCESS FRAMEWORK */}
        {/* Renders the 5-step process if 'designProcess' data exists. Fallback to legacy layout if not. */}
        {caseData.designProcess ? (
          <section className="max-w-6xl mx-auto px-6 py-32 space-y-32">

            {/* Header */}
            <div className="flex items-baseline justify-between border-b border-[var(--border-color)] pb-6 mb-16">
              <h2 className="text-4xl font-serif italic">{t('protected.process_title') || "The Process"}</h2>
              <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">{t('protected.process_subtitle') || "Evolution of Thought"}</span>
            </div>

            {/* Steps Loop */}
            {caseData.designProcess.map((step, i) => {
              // Step Configuration based on Type
              const isOdd = i % 2 !== 0;
              const stepNumber = `0${i + 1}`;

              return (
                <div key={i} className={`relative ${step.type === 'insight' || step.type === 'measure' ? 'max-w-4xl mx-auto' : ''}`}>
                  {/* Connecting Line (Desktop) */}
                  {i !== caseData.designProcess.length - 1 && (
                    <div className={`absolute left-4 md:left-1/2 top-20 bottom-[-128px] w-px bg-gradient-to-b from-[var(--border-color)] to-transparent -translate-x-1/2 z-0 hidden md:block opacity-50`}></div>
                  )}

                  {/* RENDER: RESEARCH / SHIP (Standard Text + Image Layout) */}
                  {(step.type === 'research' || step.type === 'ship' || step.type === 'design') && (
                    <div className={`flex flex-col md:flex-row gap-12 items-center relative z-10 ${isOdd ? 'md:flex-row-reverse' : ''}`}>

                      {/* Visual Evidence */}
                      <div className="w-full md:w-1/2 group">
                        <div className={`relative bg-[var(--bg-card)] border border-[var(--border-color)] p-2 shadow-2xl transform transition-transform duration-500 hover:scale-[1.01] ${isOdd ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'}`}>
                          {/* Tape/Pin */}
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--brand)] shadow-lg border-2 border-[var(--bg-card)] z-20 opacity-80"></div>

                          <div className="min-h-[250px] bg-[var(--bg-surface)] overflow-hidden relative border border-[var(--border-color)]/50 flex items-center justify-center">
                            {step.image && step.image.startsWith('airy:') ? (
                              <div className="w-full h-[300px] bg-[var(--bg-surface)] p-4">
                                <AiryDiagram type={step.image.split(':')[1]} />
                              </div>
                            ) : step.image ? (
                              <ZoomableImage src={step.image} alt={step.title} className="max-w-full max-h-[400px] object-cover" />
                            ) : (
                              <div className="p-12 opacity-10">
                                {step.type === 'ship' ? <Rocket size={48} /> : <Search size={48} />}
                              </div>
                            )}
                          </div>
                          <div className="mt-2 flex justify-between items-center px-2">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">{step.type} EVIDENCE</span>
                            <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)] opacity-50">REF: {stepNumber}</span>
                          </div>
                        </div>
                      </div>

                      {/* Narrative */}
                      <div className={`w-full md:w-1/2 ${isOdd ? 'text-right md:pr-12' : 'md:pl-12'}`}>
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-[var(--brand)] text-[var(--brand)] flex items-center justify-center font-mono text-xs`}>
                            {i + 1}
                          </div>
                          <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">{t(`process.steps.${step.type}.title`) || step.type}</span>
                        </div>
                        <h3 className="text-3xl font-bold font-serif mb-6">{step.title}</h3>
                        <div className="prose prose-sm dark:prose-invert font-mono text-[var(--text-secondary)] leading-relaxed">
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* RENDER: INSIGHT (Highlight Card) */}
                  {step.type === 'insight' && (
                    <div className="bg-[var(--bg-card)] border border-[var(--brand)]/30 rounded-2xl p-8 md:p-12 relative overflow-hidden text-center group hover:border-[var(--brand)] transition-colors">
                      <div className="absolute top-0 left-0 w-full h-1 bg-[var(--brand)]"></div>
                      <Lightbulb size={32} className="mx-auto text-[var(--brand)] mb-6" />
                      <h3 className="text-2xl md:text-3xl font-serif italic mb-6 leading-tight text-[var(--text-primary)]">
                        "{step.title}"
                      </h3>
                      <p className="text-[var(--text-secondary)] font-mono text-sm leading-relaxed max-w-2xl mx-auto">
                        {step.desc}
                      </p>
                      <div className="mt-8 flex justify-center">
                        <span className="px-3 py-1 bg-[var(--brand)]/10 text-[var(--brand)] text-[10px] font-mono uppercase tracking-widest rounded-full">
                          Key Insight
                        </span>
                      </div>
                    </div>
                  )}

                  {/* RENDER: MEASURE (Metrics Grid) */}
                  {step.type === 'measure' && (
                    <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl overflow-hidden">
                      <div className="p-8 md:p-12 text-center border-b border-[var(--border-color)]">
                        <div className="max-w-2xl mx-auto">
                          <h3 className="text-2xl font-bold font-serif mb-4 flex items-center justify-center gap-3">
                            <BarChart size={24} className="text-[var(--accent-red)]" />
                            {step.title}
                          </h3>
                          <p className="text-[var(--text-secondary)] mb-0 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {/* Render Metrics Grid if data exists */}
                      {caseData.metrics && caseData.metrics.length > 0 && (
                        <div className="mx-6 mb-8 md:mx-12 md:mb-12 border border-[var(--border-color)] rounded-lg overflow-hidden flex flex-col md:flex-row bg-[var(--bg-surface)]">
                          {caseData.metrics.map((m, i) => (
                            <div key={i} className="flex-1 p-6 md:p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-[var(--border-color)] last:border-0 hover:bg-[var(--bg-card)] transition-colors group">
                              <div className="text-2xl md:text-4xl font-mono font-bold tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--brand)] transition-colors mb-2 break-words max-w-full leading-tight">{m.value}</div>
                              <div className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)] opacity-70">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                </div>
              );
            })}

          </section>
        ) : (
          /* LEGACY LAYOUT - Keep existing structure for backward compatibility */
          <>
            {/* 3. PROCESS: FILM STRIP */}
            <section className="max-w-6xl mx-auto px-6 py-32">
              <div className="flex items-baseline justify-between mb-16 border-b border-[var(--border-color)] pb-6">
                <h2 className="text-4xl font-serif italic">{t('protected.process_title') || "The Process"}</h2>
                <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">{t('protected.process_subtitle') || "Evolution of Thought"}</span>
              </div>

              <div className="space-y-24 relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border-color)] -translate-x-1/2 hidden md:block z-0"></div>

                {caseData.process && caseData.process.map((step, i) => (
                  <div key={i} className={`flex flex-col md:flex-row gap-12 items-center relative z-10 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/2 relative group">
                      <div className="relative bg-[var(--bg-card)] border border-[var(--border-color)] p-2 shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] hover:rotate-0 rotate-1">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-500/80 shadow-lg border-2 border-white/20 z-20"></div>
                        <div className="min-h-[200px] max-h-[400px] bg-[var(--bg-surface)] overflow-hidden relative border border-[var(--border-color)]/50 flex items-center justify-center">
                          {step.image && step.image.startsWith('airy:') ? (
                            <div className="w-full h-[300px] bg-[var(--bg-surface)] p-4">
                              <AiryDiagram type={step.image.split(':')[1]} />
                            </div>
                          ) : step.image ? (
                            <ZoomableImage
                              src={step.image}
                              alt={step.title}
                              className="max-w-full max-h-[380px] object-contain"
                            />
                          ) : (
                            <div className="w-full h-[200px] flex items-center justify-center opacity-20 bg-[var(--bg-card)]">
                              <Activity size={48} />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                        </div>

                        <div className="mt-2 flex justify-between items-center px-2">
                          <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">{t('protected.evidence') || "EVIDENCE"} #{i + 1}</span>
                          <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)] opacity-50">CONFIDENTIAL</span>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[var(--bg-void)] border border-[var(--brand)] text-[var(--brand)] font-mono text-xs z-20 relative">
                      {i + 1}
                    </div>

                    <div className={`w-full md:w-1/2 ${i % 2 === 1 ? 'text-right md:pr-12' : 'md:pl-12'}`}>
                      <div className={`inline-block font-mono text-xs text-[var(--brand)] border border-[var(--brand)] px-3 py-1 rounded-full mb-4 opacity-80`}>
                        {t('protected.step') || "STEP"} 0{i + 1}
                      </div>
                      <h3 className="text-3xl font-bold font-serif mb-6">{step.title}</h3>
                      <div className={`prose prose-sm dark:prose-invert font-mono text-[var(--text-secondary)] leading-relaxed ${i % 2 === 1 ? 'ml-auto' : ''}`}>
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. KEY INSIGHTS (Legacy) */}
            {caseData.insights && (
              <section className="bg-[var(--bg-card)] border-y border-[var(--border-color)] py-32 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-[var(--brand)] opacity-5 rounded-full blur-3xl"></div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                  <Sun size={32} className="mx-auto text-[var(--brand)] mb-8" />
                  <h2 className="text-3xl md:text-5xl font-serif italic mb-16 leading-tight">
                    {t('protected.insights_title') || "\"We realized that clarity was more valuable than features.\""}
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
          </>
        )}

        {/* 5. SOLUTION (Unified - Renders for both layouts) */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-4xl font-serif italic">{t('protected.solution_title') || "The Solution"}</h2>
            <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">{t('protected.solution_subtitle') || "Interface Design"}</span>
          </div>

          <div className="space-y-32">
            {caseData.solution ? (
              <>
                {/* 1. Interactive Prototypes (Grid or Centered) */}
                {caseData.solution.filter(s => s.componentId).length > 1 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {caseData.solution.filter(s => s.componentId).map((sol, i) => (
                      <div key={`int-${i}`} className="flex flex-col items-center">
                        <div className="w-full max-w-[320px] aspect-[9/19] bg-[var(--bg-card)] rounded-[2.5rem] border border-[var(--border-color)] relative shadow-2xl overflow-hidden group transition-transform duration-500 hover:scale-[1.02]">
                          <div className="absolute inset-0 w-full h-full bg-[var(--bg-surface)]">
                            <ProjectCard id={sol.componentId} expanded={true} showChrome={true} />
                          </div>
                        </div>
                        <div className="mt-8 text-center px-4 max-w-[320px]">
                          <div className="font-mono text-xs text-[var(--brand)] mb-2 uppercase tracking-widest font-bold">
                            {t('protected.live_prototype') || "Interactive Prototype"}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            {sol.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Single Item Centered Layout */
                  caseData.solution.filter(s => s.componentId).map((sol, i) => (
                    <div key={`int-${i}`} className="flex flex-col items-center mb-24 last:mb-12">
                      <div className="w-full md:w-1/2 aspect-[9/19] max-w-sm mx-auto bg-[var(--bg-card)] rounded-[2.5rem] border border-[var(--border-color)] relative shadow-2xl overflow-hidden group transition-transform duration-500 hover:scale-[1.02]">
                        <div className="absolute inset-0 w-full h-full bg-[var(--bg-surface)]">
                          <ProjectCard id={sol.componentId} expanded={true} showChrome={true} />
                        </div>
                      </div>
                      <div className="mt-10 text-center max-w-2xl mx-auto px-4">
                        <div className="font-mono text-xs text-[var(--brand)] mb-4 uppercase tracking-widest font-bold">
                          {t('protected.live_prototype') || "Interactive Prototype"}
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{sol.title}</h3>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                          {sol.desc}
                        </p>
                      </div>
                    </div>
                  ))
                )}

                {/* 2. Static Exhibits (Grid) */}
                {caseData.solution.filter(s => !s.componentId).length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-16 border-t border-[var(--border-color)] pt-16">
                    {caseData.solution.filter(s => !s.componentId).map((sol, i) => (
                      <div key={`static-${i}`} className="flex flex-col group">
                        <div className="aspect-video bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] relative shadow-lg overflow-hidden mb-6 transition-all duration-300 group-hover:shadow-xl group-hover:border-[var(--brand)]/30">
                          {sol.image && sol.image.startsWith('airy:') ? (
                            <div className="absolute inset-0 w-full h-full bg-[var(--bg-surface)] p-6">
                              <AiryDiagram type={sol.image.split(':')[1]} />
                            </div>
                          ) : sol.image ? (
                            <ZoomableImage
                              src={sol.image}
                              alt={sol.title}
                              containerClassName="absolute inset-0 w-full h-full"
                              className="w-full h-full object-contain bg-black/5 dark:bg-black/50"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                              <Monitor size={48} />
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-mono text-xs text-[var(--text-secondary)] mb-3 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-6 h-[1px] bg-[var(--text-secondary)] opacity-50"></span>
                            {t('protected.exhibit') || "Exhibit"} {String.fromCharCode(65 + i)}
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--brand)] transition-colors">{sol.title}</h3>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            {sol.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="p-12 border border-dashed border-[var(--border-color)] text-center text-[var(--text-secondary)] font-mono">
                {t('protected.classified_arch') || "[ CLASSIFIED SYSTEM ARCHITECTURE ]"}
              </div>
            )}
          </div>
        </section>

        {/* 6. IMPACT & OUTCOMES - Standardized Lumina Style */}
        {!caseData.designProcess && caseData.metrics && caseData.metrics.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 py-32">
            <div className="flex items-baseline justify-between mb-16 border-b border-[var(--border-color)] pb-6">
              <h2 className="text-4xl font-serif italic">{t('protected.impact_title') || "Impact & Outcomes"}</h2>
              <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">{t('protected.impact_subtitle') || "Measurable Results"}</span>
            </div>

            <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl overflow-hidden shadow-sm">
              <div className="flex flex-col md:flex-row">
                {caseData.metrics.map((m, i) => (
                  <div key={i} className="flex-1 p-8 md:p-12 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-[var(--border-color)] last:border-0 hover:bg-[var(--bg-card)] transition-colors group">
                    <div className="text-3xl md:text-5xl font-mono font-bold tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--brand)] transition-colors mb-4 break-words max-w-full leading-tight">
                      {m.value}
                    </div>
                    <div className="text-xs md:text-sm font-mono uppercase tracking-widest text-[var(--text-secondary)] opacity-70">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 7. AI BRAINSTORM (HUMAN + AI COLLABORATION) */}
        {(caseData.aiHypotheses || caseData.aiHypothesis) && (
          <AIBrainstorm
            hypotheses={caseData.aiHypotheses || [caseData.aiHypothesis]}
            t={t}
          />
        )}

        {/* 8. TAKEAWAYS (ARCHITECT'S NOTE) */}
        <section className="max-w-3xl mx-auto px-6 py-40 text-center">
          <FileText className="mx-auto text-[var(--text-secondary)] mb-8" size={32} />
          <h4 className="font-mono text-xs uppercase mb-8 opacity-50 tracking-[0.2em]">{t('protected.architect_debrief') || "// Architect's Debrief"}</h4>
          <p className="text-2xl md:text-3xl font-serif leading-relaxed text-[var(--text-primary)]">
            "{caseData.learnings || caseData.memo || "Confidential"}"
          </p>
          <div className="mt-12 w-24 h-1 bg-[var(--brand)] mx-auto"></div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[var(--border-color)] py-12 text-center opacity-40 hover:opacity-100 transition-opacity">
          <p className="font-mono text-[10px] uppercase tracking-widest">
            Human By Design Portfolio · Fadly Uzzaki 🧢 © 2025-2026
          </p>
        </footer>

      </main>
    </div >
  );
};

export default ProtectedCaseStudy;