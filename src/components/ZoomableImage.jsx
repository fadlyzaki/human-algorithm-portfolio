import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

/**
 * ZoomableImage - Wraps an image with click-to-zoom modal functionality
 * @param {string} src - Image source URL
 * @param {string} alt - Image alt text
 * @param {string} className - Additional classes for the image
 * @param {string} containerClassName - Classes for the container
 */
const ZoomableImage = ({
    src,
    alt,
    className = '',
    containerClassName = ''
}) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!src) return null;

    return (
        <>
            {/* Thumbnail with zoom indicator */}
            <div
                className={`relative cursor-zoom-in group ${containerClassName}`}
                onClick={() => setIsOpen(true)}
            >
                <img
                    src={src}
                    alt={alt}
                    className={className}
                />
                {/* Zoom indicator on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-[var(--bg-void)]/90 backdrop-blur-sm p-3 rounded-full border border-[var(--border-color)]">
                        <ZoomIn size={20} className="text-[var(--text-primary)]" />
                    </div>
                </div>
            </div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
                        onClick={() => setIsOpen(false)}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-2 bg-[var(--bg-void)]/80 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors z-10"
                            aria-label="Close"
                        >
                            <X size={24} />
                        </button>

                        {/* Zoomed Image */}
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            src={src}
                            alt={alt}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Caption */}
                        {alt && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-[var(--bg-void)]/80 backdrop-blur-sm rounded-lg border border-[var(--border-color)]">
                                <p className="text-sm text-[var(--text-secondary)] font-mono">{alt}</p>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ZoomableImage;
