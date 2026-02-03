import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, FileText } from 'lucide-react';

const CoverLetterModal = ({ isOpen, onClose }) => {
    return (
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
                        className="fixed z-[9999] w-full max-w-2xl bg-white dark:bg-[#181818] border border-gray-200 dark:border-gray-800 shadow-2xl rounded-sm overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                                <FileText size={14} />
                                <span>Cover Letter</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-500 dark:text-gray-400"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 overflow-y-auto max-h-[70vh]">
                            <div className="prose dark:prose-invert max-w-none font-sans leading-relaxed text-gray-800 dark:text-gray-200">
                                <p className="font-serif italic text-xl mb-6 text-gray-900 dark:text-white">
                                    To the Hiring Manager & Future Teammates,
                                </p>

                                <p className="mb-4">
                                    We often talk about "User Experience," but we rarely talk about <strong>"User Agency."</strong>
                                </p>

                                <p className="mb-4">
                                    In the last 5 years, I’ve watched our industry drift. We went from building tools that empower people to building feeds that entrap them. We optimized for "Time on Site" instead of "Time Well Spent." We started treating users like data points instead of people.
                                </p>

                                <p className="mb-6 font-medium text-emerald-600 dark:text-emerald-400">
                                    I’m looking for a team that wants to reverse that drift.
                                </p>

                                <p className="mb-4">
                                    Whether I was designing for <strong>Lumina</strong> (helping blue-collar workers find dignity, not just jobs) or <strong>GudangAda</strong> (building trust in a $100B supply chain), my goal has always been the same: <strong>To hand the steering wheel back to the user.</strong>
                                </p>

                                <p className="mb-6">
                                    I don't just want to "increase conversion." I want to increase confidence. I want to build software that respects the human on the other side of the screen.
                                </p>

                                <p className="mb-8 border-l-2 border-emerald-500 pl-4 py-1 italic text-gray-600 dark:text-gray-400">
                                    If you’re building something that actually solves a problem—not just an engagement loop—then I’d love to help you build it.
                                </p>

                                <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 font-mono text-sm text-gray-500">
                                    <div>
                                        <div className="uppercase tracking-widest text-xs mb-1">Authorized By</div>
                                        <div className="font-bold text-gray-900 dark:text-white">Fadly Uzzaki</div>
                                    </div>
                                    <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>
                                    <div>
                                        <div className="uppercase tracking-widest text-xs mb-1">Status</div>
                                        <div className="text-emerald-500">Ready to Build</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="bg-gray-50 dark:bg-[#111] px-6 py-4 flex justify-end border-t border-gray-100 dark:border-gray-800">
                            <button
                                onClick={onClose}
                                className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-none uppercase font-mono text-xs tracking-wider font-bold hover:opacity-90 transition-opacity"
                            >
                                <span>Proceed to System Directory</span>
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CoverLetterModal;
