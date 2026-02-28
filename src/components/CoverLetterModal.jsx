import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { X, ArrowRight, FileText, Stamp } from 'lucide-react';

const CoverLetterModal = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    // Internal state: Controls whether the letter face is expanded globally.
    // It resets to false whenever the modal itself is closed and reopened.
    const [isLetterOpen, setIsLetterOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            // Give time for exit animation before resetting
            setTimeout(() => setIsLetterOpen(false), 300);
        }
    }, [isOpen]);

    return ReactDOM.createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
                    />

                    {/* Modal Wrapper (Ensures scrolling if the expanded letter is too tall) */}
                    <div className="fixed inset-0 z-[9999] flex py-12 items-start sm:items-center justify-center pointer-events-none overflow-y-auto">

                        {/* THE INTERACTIVE TRI-FOLD LETTER container */}
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="w-full max-w-2xl pointer-events-auto flex flex-col relative px-4 sm:px-0"
                            onClick={() => !isLetterOpen && setIsLetterOpen(true)}
                        >
                            {/* Close Button (Floating top right relative to viewport, or relative to letter) */}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={(e) => { e.stopPropagation(); onClose(); }}
                                className="absolute -top-12 right-4 sm:-right-12 sm:top-0 p-2 bg-[var(--bg-surface)] hover:bg-[var(--bg-card)] rounded-full transition-colors text-[var(--text-secondary)] border border-[var(--border-color)] z-50 backdrop-blur-sm shadow-lg pointer-events-auto"
                            >
                                <X size={20} />
                            </motion.button>

                            {/* 1. TOP TIER (The Envelope Face / Header) - Clickable to toggle */}
                            <motion.div
                                layout
                                onClick={(e) => {
                                    if (isLetterOpen) {
                                        e.stopPropagation();
                                        setIsLetterOpen(false);
                                    }
                                }}
                                className={`bg-[#EAE6DF] dark:bg-[#1A1A1A] p-6 sm:p-8 flex justify-between items-start z-30 relative shadow-md transition-colors ${!isLetterOpen ? 'cursor-pointer hover:bg-[#E2DDD5] dark:hover:bg-[#222]' : 'cursor-pointer'}`}
                                style={{
                                    borderTopLeftRadius: '0.5rem',
                                    borderTopRightRadius: '0.5rem',
                                    borderBottomLeftRadius: isLetterOpen ? '0' : '0.5rem',
                                    borderBottomRightRadius: isLetterOpen ? '0' : '0.5rem',
                                    border: '1px solid var(--border-color)'
                                }}
                            >
                                <div className="flex flex-col">
                                    <h4 className="font-serif italic text-2xl sm:text-3xl text-gray-900 dark:text-white">
                                        Fadly Uzzaki,
                                    </h4>
                                    <p className="text-xs sm:text-sm font-mono text-gray-500 mt-2 uppercase tracking-widest flex items-center gap-2">
                                        <FileText size={14} className="text-emerald-600" />
                                        {t('cover_letter.title')}
                                    </p>
                                </div>
                                {/* Graphic Stamp */}
                                <div className="w-16 h-20 bg-red-800/10 dark:bg-red-900/20 border-2 border-dashed border-red-800/30 flex items-center justify-center rounded-sm shrink-0">
                                    <Stamp size={24} className="text-red-800/50" />
                                </div>

                                {/* Pulse Indicator prompting user to open (Only visible when closed) */}
                                {!isLetterOpen && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest text-emerald-600/70 dark:text-emerald-400/70 animate-pulse"
                                    >
                                        [ Click to unseal ]
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* 2. MIDDLE TIER (The Body Content) */}
                            <motion.div
                                layout
                                initial={false}
                                animate={{
                                    height: isLetterOpen ? "auto" : 0,
                                    opacity: isLetterOpen ? 1 : 0
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 25,
                                    // Slight stagger entering vs exiting
                                    opacity: { duration: 0.2 }
                                }}
                                className="bg-[#FAF8F5] dark:bg-[#111111] overflow-hidden z-20 relative border-x border-[var(--border-color)]"
                                // The inner shadow creates the illusion that this sits *below* the top fold
                                style={{
                                    boxShadow: 'inset 0 16px 24px -16px rgba(0,0,0,0.15), inset 0 24px 24px -24px rgba(0,0,0,0.5)'
                                }}
                            >
                                <div className="p-6 sm:p-10 pb-4">
                                    <div className="prose dark:prose-invert max-w-none font-sans leading-relaxed text-gray-800 dark:text-gray-200">
                                        <p className="font-serif italic text-xl mb-6 text-gray-900 dark:text-white">
                                            {t('cover_letter.greeting')}
                                        </p>
                                        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('cover_letter.p1') }}></p>
                                        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('cover_letter.p2') }}></p>
                                        <p className="mb-6 font-medium text-emerald-600 dark:text-emerald-400" dangerouslySetInnerHTML={{ __html: t('cover_letter.p3') }}></p>
                                        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('cover_letter.p4') }}></p>
                                        <p className="mb-6" dangerouslySetInnerHTML={{ __html: t('cover_letter.p5') }}></p>
                                        <p className="mb-2 border-l-2 border-emerald-500 pl-4 py-1 italic text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: t('cover_letter.p6') }}></p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 3. BOTTOM TIER (The Footer / Signature section) */}
                            <motion.div
                                layout
                                initial={false}
                                animate={{
                                    height: isLetterOpen ? "auto" : 0,
                                    opacity: isLetterOpen ? 1 : 0
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 25,
                                    // Delay the footer expanding out to create a 3-part cascading fold effect
                                    delay: isLetterOpen ? 0.05 : 0
                                }}
                                className="bg-[#EAE6DF] dark:bg-[#1A1A1A] overflow-hidden z-10 relative border border-[var(--border-color)]"
                                style={{
                                    borderBottomLeftRadius: '0.5rem',
                                    borderBottomRightRadius: '0.5rem',
                                    // Subtle shadow to separate it from the body
                                    boxShadow: 'inset 0 10px 15px -10px rgba(0,0,0,0.1)'
                                }}
                            >
                                <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                    <div className="flex items-center gap-6 font-mono text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                        <div>
                                            <div className="uppercase tracking-widest text-[10px] mb-1 opacity-70">{t('cover_letter.authorized_by')}</div>
                                            <div className="font-bold text-gray-900 dark:text-white">F. Uzzaki</div>
                                        </div>
                                        <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
                                        <div>
                                            <div className="uppercase tracking-widest text-[10px] mb-1 opacity-70">{t('cover_letter.status_label')}</div>
                                            <div className="text-emerald-600 dark:text-emerald-400">{t('cover_letter.status_ready')}</div>
                                        </div>
                                    </div>

                                    {/* Action button: Close or Print. For now, it just closes the letter. */}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black px-6 py-3 rounded-sm uppercase font-mono text-xs tracking-wider font-bold transition-colors"
                                    >
                                        <span>Close Letter</span>
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default CoverLetterModal;
