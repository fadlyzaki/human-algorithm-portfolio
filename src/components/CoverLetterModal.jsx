import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { X, ArrowRight, FileText } from 'lucide-react';

const CoverLetterModal = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
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
                        className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
                    >
                        <div className="w-full max-w-2xl bg-white dark:bg-[#181818] border border-gray-200 dark:border-gray-800 shadow-2xl rounded-sm overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col">
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800 shrink-0">
                                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                                    <FileText size={14} />
                                    <span>{t('cover_letter.title')}</span>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-500 dark:text-gray-400"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                                <div className="prose dark:prose-invert max-w-none font-sans leading-relaxed text-gray-800 dark:text-gray-200">
                                    <p className="font-serif italic text-xl mb-6 text-gray-900 dark:text-white">
                                        {t('cover_letter.greeting')}
                                    </p>

                                    <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('cover_letter.p1') }}></p>

                                    <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('cover_letter.p2') }}></p>

                                    <p className="mb-6 font-medium text-emerald-600 dark:text-emerald-400" dangerouslySetInnerHTML={{ __html: t('cover_letter.p3') }}></p>

                                    <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('cover_letter.p4') }}></p>

                                    <p className="mb-6" dangerouslySetInnerHTML={{ __html: t('cover_letter.p5') }}></p>

                                    <p className="mb-8 border-l-2 border-emerald-500 pl-4 py-1 italic text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: t('cover_letter.p6') }}></p>

                                    <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 font-mono text-sm text-gray-500">
                                        <div>
                                            <div className="uppercase tracking-widest text-xs mb-1">{t('cover_letter.authorized_by')}</div>
                                            <div className="font-bold text-gray-900 dark:text-white">Fadly Uzzaki</div>
                                        </div>
                                        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>
                                        <div>
                                            <div className="uppercase tracking-widest text-xs mb-1">{t('cover_letter.status_label')}</div>
                                            <div className="text-emerald-500">{t('cover_letter.status_ready')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="bg-gray-50 dark:bg-[#111] px-6 py-4 flex justify-end border-t border-gray-100 dark:border-gray-800 shrink-0">
                                <button
                                    onClick={onClose}
                                    className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-none uppercase font-mono text-xs tracking-wider font-bold hover:opacity-90 transition-opacity"
                                >
                                    <span>{t('cover_letter.cta_proceed')}</span>
                                    <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default CoverLetterModal;
