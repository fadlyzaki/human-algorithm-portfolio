import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, X, Maximize2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Flipbook = ({
    pages,
    initialPage = 0
}) => {
    const { isDark } = useTheme();
    // We manage the current spread index. A spread is two pages (left and right).
    // spread 0: cover (right side only)
    // spread 1: page 0 (left) and 1 (right)
    const [spreadIndex, setSpreadIndex] = useState(initialPage > 0 ? Math.ceil(initialPage / 2) : 0);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // To act like a real book, the number of content pages should be even.
    // If odd, we add a blank page at the end so the back cover falls on the outside (left side).
    const paddedPages = pages.length % 2 !== 0 ? [...pages, null] : pages;
    const totalSpreads = (paddedPages.length / 2) + 2; // +1 for cover, +1 for back cover

    const handleNext = () => {
        if (spreadIndex < totalSpreads - 1) {
            setDirection(1);
            setSpreadIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (spreadIndex > 0) {
            setDirection(-1);
            setSpreadIndex(prev => prev - 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') return;
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [spreadIndex, totalSpreads]);

    // Determine book dimensions based on screen size
    const isMobile = windowWidth < 768;
    // On mobile, the book takes up 90% of the screen width and shows ONE page at a time.
    // On desktop, the book shows TWO pages at a time (a spread).
    const bookWidth = isMobile ? windowWidth * 0.9 : Math.min(windowWidth * 0.8, 1000);
    const bookHeight = isMobile ? bookWidth * 1.3 : bookWidth * 0.65;
    const pageWidth = isMobile ? bookWidth : bookWidth / 2;

    // Pages structure:
    // [Cover, P0, P1, P2, P3, ..., BackCover]
    const renderPageContent = (pageIndex) => {
        const bookMedium = pages[0]?.medium || 'pencil';

        if (pageIndex === -1) {
            // Front Cover
            if (bookMedium === 'digital') {
                return (
                    <div className={`w-full h-full flex flex-col items-center justify-center p-8 shadow-inner bg-zinc-950 border-zinc-900 border-r-0`}>
                        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900/10 to-transparent pointer-events-none"></div>

                        <div className="w-[80%] h-[90%] border border-blue-500/20 bg-black/40 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden z-10 backdrop-blur-sm">
                            <h1 className="text-4xl font-mono font-bold text-white mb-4 tracking-tight uppercase shadow-[0_0_15px_rgba(59,130,246,0.3)]">Sketches</h1>
                            <p className="text-blue-400/60 font-mono tracking-[0.4em] text-[10px] uppercase">DIGITAL ARCHIVE</p>
                        </div>
                        {/* Spine binding visualization */}
                        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/80 to-transparent pointer-events-none z-20"></div>
                    </div>
                );
            } else {
                return (
                    <div className={`w-full h-full flex flex-col items-center justify-center p-8 shadow-inner bg-[#2c2826] border-[#1d1b19]`}>
                        <div className="w-[80%] h-[90%] border-2 border-dashed border-white/10 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-30 mix-blend-overlay"></div>
                            <h1 className="text-4xl font-serif text-[#e4d9c7] mb-4 tracking-widest uppercase opacity-90">Sketches</h1>
                            <p className="text-[#e4d9c7]/40 font-mono tracking-[0.3em] text-[10px] uppercase">FADLY ZAKI ARCHIVE</p>
                        </div>
                        {/* Spine binding visualization */}
                        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-20"></div>
                    </div>
                );
            }
        }

        if (pageIndex === paddedPages.length) {
            // Back Cover
            if (bookMedium === 'digital') {
                return (
                    <div className={`w-full h-full flex items-center justify-center p-8 shadow-inner bg-zinc-950 border-zinc-900`}>
                        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                        <div className="w-[80%] h-[90%] flex flex-col items-center justify-center text-center relative z-10">
                            <div className="w-16 h-16 rounded-sm border border-blue-500/20 flex items-center justify-center bg-black/40 rotate-45">
                                <span className="text-blue-500/30 font-mono text-xl -rotate-45 font-bold">FZ</span>
                            </div>
                        </div>
                        {/* Spine binding visualization */}
                        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/80 to-transparent pointer-events-none z-20"></div>
                    </div>
                );
            } else {
                return (
                    <div className={`w-full h-full flex items-center justify-center p-8 shadow-inner bg-[#2c2826] border-[#1d1b19]`}>
                        <div className="w-[80%] h-[90%] flex flex-col items-center justify-center text-center relative">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-30 mix-blend-overlay"></div>
                            <div className="w-16 h-16 rounded-full border border-[#e4d9c7]/10 flex items-center justify-center">
                                <span className="text-[#e4d9c7]/20 font-serif italic text-xl">FZ</span>
                            </div>
                        </div>
                        {/* Spine binding visualization */}
                        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/60 to-transparent pointer-events-none z-20"></div>
                    </div>
                );
            }
        }

        const item = paddedPages[pageIndex];
        if (!item) return <div className="w-full h-full bg-[#f8f6f0]"></div>;

        const isDigital = item.medium === 'digital';

        return (
            <div className={`w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-6 md:p-12 ${isDark ? 'bg-[#2a2a2c] text-white/80' : 'bg-[#f8f6f0] text-zinc-800'}`}>
                {/* Paper Texture */}
                <div className={`absolute inset-0 z-0 pointer-events-none ${isDark ? 'opacity-5' : 'opacity-40'} mix-blend-multiply`}
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
                </div>

                {/* Center fold shadow */}
                {pageIndex % 2 === 0 ? (
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/20 to-transparent z-10 pointer-events-none"></div>
                ) : (
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/20 to-transparent z-10 pointer-events-none"></div>
                )}

                <div className="relative z-20 flex-1 w-full flex items-center justify-center">
                    <img
                        src={item.url}
                        alt={item.title}
                        draggable={false}
                        className={`max-w-full max-h-[60vh] object-contain shadow-sm ${!isDigital ? 'sepia-[0.1] contrast-105' : ''}`}
                    />
                </div>

                <div className="mt-8 relative z-20 flex flex-col items-center text-center w-full">
                    <span className="font-serif italic text-sm mb-2">{item.title}</span>
                    <div className={`w-8 h-[1px] mb-2 ${isDark ? 'bg-white/20' : 'bg-black/10'}`}></div>
                    <span className={`font-mono text-[9px] uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-zinc-400'}`}>
                        {pageIndex + 1}
                    </span>
                </div>
            </div>
        );
    };

    // Render logic for 3D flip effect
    // We render 3 blocks: Static Left, Static Right, and Flipping Page.

    const leftPageIndex = spreadIndex * 2 - 2;   // e.g. spread 1 -> left page index 0
    const rightPageIndex = spreadIndex * 2 - 1;  // e.g. spread 1 -> right page index 1

    const isCover = spreadIndex === 0;
    const isBackCover = spreadIndex === totalSpreads - 1;

    const bookStyleTransform = isMobile ? 'none' :
        isCover ? `translateX(-${pageWidth / 2}px)` :
            isBackCover ? `translateX(${pageWidth / 2}px)` : 'translateX(0px)';

    return (
        <div className="relative w-full flex-1 flex items-center justify-center p-4 overflow-hidden">

            {/* Book Container */}
            <div
                className="relative flex justify-center items-center perspective-[2000px] transition-transform duration-700 ease-[cubic-bezier(0.645,0.045,0.355,1.000)]"
                style={{
                    width: isMobile ? pageWidth : bookWidth,
                    height: bookHeight,
                    transform: bookStyleTransform
                }}
            >

                {/* --- MOBILE LOGIC --- */}
                {isMobile && (
                    <>
                        <div
                            className="absolute right-0 top-0 h-full origin-left bg-white shadow-[inset_2px_0_10px_rgba(0,0,0,0.1)]"
                            style={{
                                width: pageWidth,
                                display: !isCover || isBackCover ? 'none' : 'block',
                                left: 0,
                                transformStyle: 'preserve-3d',
                                zIndex: 10
                            }}
                        >
                            {renderPageContent(rightPageIndex)}
                        </div>

                        {!isCover && (
                            <div
                                className="absolute left-0 top-0 h-full w-full bg-white origin-left"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                                    <motion.div
                                        key={spreadIndex}
                                        custom={direction}
                                        initial={{ rotateY: direction === 1 ? 90 : -90, opacity: 0 }}
                                        animate={{ rotateY: 0, opacity: 1 }}
                                        exit={{ rotateY: direction === 1 ? -90 : 90, opacity: 0 }}
                                        transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
                                        className="absolute inset-0 w-full h-full backface-hidden"
                                    >
                                        {renderPageContent(rightPageIndex > -1 && !isBackCover ? rightPageIndex : leftPageIndex)}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        )}
                    </>
                )}

                {/* --- DESKTOP LOGIC (PHYSICAL SHEETS) --- */}
                {!isMobile && Array.from({ length: totalSpreads }).map((_, i) => {
                    const isFlipped = spreadIndex > i;
                    const isFlipping = (direction === 1 && spreadIndex - 1 === i) || (direction === -1 && spreadIndex === i);

                    // GPU Culling: Only render the top 2 sheets on either side of the spine
                    // to prevent overlapping 50 divs.
                    const isVisible = Math.abs(spreadIndex - i) <= 2;
                    if (!isVisible) return null;

                    // Fix Z-index stacking so the sheet closest to the viewer is always on top.
                    // When resting on the right (not flipped), lower index sheets (front of book) should be on top.
                    // When resting on the left (flipped), higher index sheets (back of book) should be on top.
                    const zIndex = isFlipping ? 50 : (isFlipped ? i : totalSpreads - i);

                    return (
                        <motion.div
                            key={`sheet-${i}`}
                            className={`absolute top-0 h-full origin-left pointer-events-none ${isFlipping ? 'shadow-2xl' : ''}`}
                            style={{
                                width: pageWidth,
                                left: '50%',
                                transformStyle: 'preserve-3d',
                                zIndex: zIndex
                            }}
                            initial={false}
                            animate={{
                                rotateY: isFlipped ? -180 : 0
                            }}
                            transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1.000] }}
                        >
                            {/* Front of Sheet (Right Page) */}
                            <div
                                className="absolute inset-0 w-full h-full backface-hidden bg-white pointer-events-auto"
                                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                            >
                                {renderPageContent(i * 2 - 1)}
                            </div>

                            {/* Back of Sheet (Left Page) */}
                            <div
                                className="absolute inset-0 w-full h-full backface-hidden bg-white pointer-events-auto"
                                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                            >
                                {renderPageContent(i * 2)}
                            </div>
                        </motion.div>
                    );
                })}

                {/* Navigation Overlay Areas (Invisible clickable areas) */}
                <div
                    className="absolute left-0 top-0 w-1/4 h-full z-50 cursor-pointer flex items-center justify-start group"
                    onClick={handlePrev}
                    style={{ display: spreadIndex > 0 ? 'flex' : 'none' }}
                >
                    <div className="p-4 ml-4 rounded-full bg-black/20 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm transform -translate-x-4 group-hover:translate-x-0 duration-300 pointer-events-none">
                        <ChevronLeft size={32} />
                    </div>
                </div>
                <div
                    className="absolute right-0 top-0 w-1/4 h-full z-50 cursor-pointer flex items-center justify-end group"
                    onClick={handleNext}
                    style={{ display: spreadIndex < totalSpreads - 1 ? 'flex' : 'none' }}
                >
                    <div className="p-4 mr-4 rounded-full bg-black/20 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm transform translate-x-4 group-hover:translate-x-0 duration-300 pointer-events-none">
                        <ChevronRight size={32} />
                    </div>
                </div>
            </div>

            {/* Pagination indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {Array.from({ length: totalSpreads }).map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-300 ${i === spreadIndex ? 'w-8 bg-black/40 dark:bg-white/60' : 'w-2 bg-black/10 dark:bg-white/20'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Flipbook;
