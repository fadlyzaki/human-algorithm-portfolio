import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

/**
 * ZoomableImage - Wraps an image with click-to-zoom modal functionality
 * Uses React Portal to render modal at document body level (avoids overflow:hidden issues)
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
    const [hasError, setHasError] = useState(false);

    if (!src) return null;

    const handleClick = (e) => {
        if (hasError) return;
        e.stopPropagation();
        setIsOpen(true);
    };

    const handleClose = (e) => {
        e.stopPropagation();
        setIsOpen(false);
    };

    if (hasError) {
        return (
            <div className={`flex flex-col items-center justify-center bg-[var(--bg-card)] border border-[var(--border-color)] p-8 rounded-lg opacity-50 ${containerClassName} ${className}`} style={{ minHeight: '200px' }}>
                <div className="w-12 h-12 rounded-full bg-[var(--bg-surface)] flex items-center justify-center mb-3">
                    <X size={20} className="text-[var(--text-secondary)]" />
                </div>
                <p className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-widest text-center">
                    Image Unavailable
                </p>
                <p className="text-[10px] text-[var(--text-secondary)] opacity-50 mt-1 font-mono">{alt}</p>
            </div>
        );
    }

    return (
        <>
            {/* Thumbnail with zoom indicator */}
            <div
                className={`relative cursor-zoom-in group w-full h-full ${containerClassName}`}
                onClick={handleClick}
            >
                <img
                    src={src}
                    alt={alt}
                    className={className}
                    onError={() => setHasError(true)}
                />
                {/* Zoom indicator on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                    <div className="bg-[var(--bg-void)]/90 backdrop-blur-sm p-3 rounded-full border border-[var(--border-color)]">
                        <ZoomIn size={20} className="text-[var(--text-primary)]" />
                    </div>
                </div>
            </div>

            {/* Fullscreen Modal - Rendered via Portal to document.body */}
            {ReactDOM.createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
                            onClick={handleClose}
                        >
                            {/* Close button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors z-10"
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
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-lg border border-white/20">
                                    <p className="text-sm text-white/90 font-mono">{alt}</p>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

export default ZoomableImage;

