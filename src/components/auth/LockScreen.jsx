
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, ArrowRight, Sun, Moon, ScanEye, Globe, Lock, Unlock, AlertTriangle, Activity, Database } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { useHandCursor } from '../../context/HandCursorContext';
import BackButton from '../BackButton';
import SEO from '../SEO';

const LockScreen = ({ project, parentCluster, onSuccess }) => {
    const { t, language, toggleLanguage, isIndonesian } = useLanguage();
    const { isDark, setIsDark } = useTheme();
    const { isGestureMode, toggleGestureMode } = useHandCursor();

    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [decrypting, setDecrypting] = useState(false);
    const [progress, setProgress] = useState(0);
    const [activeSummary, setActiveSummary] = useState('recruiter');
    const inputRef = useRef(null);

    // Resolve Bilingual Content
    const isId = language === 'id';
    const caseData = (isId && project?.caseStudy_id) ? project.caseStudy_id : (project?.caseStudy || {});

    // --- HANDLER: UNLOCK ---
    const handleUnlock = (e) => {
        e.preventDefault();
        // Use Vite env variable for simple client-side check
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
                        onSuccess(); // Trigger unlock in parent
                    }, 800);
                }
                setProgress(p);
            }, 200);
        } else {
            setError(true);
            const form = document.getElementById('lock-form');
            if (form) {
                form.classList.add('animate-shake');
                setTimeout(() => form.classList.remove('animate-shake'), 500);
            }
        }
    };

    if (!project || !parentCluster) return null;

    return (
        <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-mono flex items-center justify-center p-6 relative overflow-hidden transition-colors duration-500">
            <SEO
                title={`🔒 Protected: ${project.title}`}
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

                        {/* --- CONTEXT SWITCHER --- */}
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
                                <h1 className="text-2xl font-bold tracking-tight">{t('protected.restricted_file') || "RESTRICTED CASE FILE"}: {project.id.toUpperCase()}</h1>
                                <p className="text-[var(--text-secondary)] text-sm">
                                    {t('protected.enter_credentials') || "Enter credentials to view the messy reality behind"} "{isId ? (project.title_id || project.title) : project.title}".
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
};

export default LockScreen;
