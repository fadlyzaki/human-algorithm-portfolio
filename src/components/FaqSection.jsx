import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import ScrollReveal from './ScrollReveal';

const FAQ_DATA = [
    {
        id: '01',
        q: 'What exactly is a "Systems Thinker" in Product Design?',
        a: "It means I don't just design isolated screens. I design the logical rules, component architectures, and scalable patterns that govern how an entire product ecosystem behaves and grows over time."
    },
    {
        id: '02',
        q: 'How do you approach complex, data-heavy interfaces?',
        a: "By prioritizing cognitive load. I break down dense information into progressive disclosures, ensuring users only see what they need, exactly when they need it, backed by a rigid typographic hierarchy."
    },
    {
        id: '03',
        q: 'Do you actually code the interfaces you design?',
        a: "Yes. I bridge the gap between Figma and production. I actively prototype and build in React, ensuring the final interactive experience perfectly matches the design intent without compromising performance."
    },
    {
        id: '04',
        q: 'What is your handoff process to engineering?',
        a: "Handoff isn't a single event, it's a continuous conversation. I deliver comprehensive component rules, exact CSS properties, heavily documented design tokens, and often, interactive coded prototypes."
    },
    {
        id: '05',
        q: 'Are you currently available for new projects?',
        a: "I am currently open to full-time roles and select freelance inquiries."
    }
];

const FaqSection = () => {
    // Determine which FAQ is actively expanded (default to the first one)
    const [activeId, setActiveId] = useState(FAQ_DATA[0].id);
    // Track if the mouse is currently hovering over ANY of the FAQ links
    const [hoveredId, setHoveredId] = useState(null);

    // Derived state: calculate the currently "focused" item.
    // If hovering, focus the hovered item. Otherwise, focus the active item.
    const focusedId = hoveredId || activeId;

    const handleNext = () => {
        const currentIndex = FAQ_DATA.findIndex(item => item.id === activeId);
        const nextIndex = (currentIndex + 1) % FAQ_DATA.length;
        setActiveId(FAQ_DATA[nextIndex].id);
    };

    const handlePrev = () => {
        const currentIndex = FAQ_DATA.findIndex(item => item.id === activeId);
        const prevIndex = (currentIndex - 1 + FAQ_DATA.length) % FAQ_DATA.length;
        setActiveId(FAQ_DATA[prevIndex].id);
    };

    const focusedItemData = FAQ_DATA.find(item => item.id === focusedId);

    return (
        <section id="faqs" className="w-full py-12 md:py-16 mb-24 border-t border-[var(--border-color)] scroll-mt-24">
            <ScrollReveal>
                <div className="max-w-3xl mx-auto px-6 lg:px-8 mb-12">
                    <SectionTitle number="4" title="FAQS" />
                </div>
            </ScrollReveal>
            <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-12">

                {/* TOP HALF: The Interactive Question List */}
                <div className="w-full" onMouseLeave={() => setHoveredId(null)}>
                    <div className="flex flex-col gap-2">
                        {FAQ_DATA.map((item) => {
                            // The logic for the "blur" state:
                            // If this item is NOT the currently focused item, it should blur.
                            const isFocused = item.id === focusedId;
                            const isActive = item.id === activeId;

                            // Opacity depends on whether a hover is currently happening at all.
                            // If no hover is happening, active is 1, rest are dim.
                            // If hover IS happening, hovered is 1, rest are very dim.
                            let opacityState = 1;
                            if (hoveredId) {
                                opacityState = item.id === hoveredId ? 1 : 0.3;
                            } else {
                                opacityState = isActive ? 1 : 0.5;
                            }

                            return (
                                <motion.button
                                    key={item.id}
                                    onClick={() => setActiveId(item.id)}
                                    className="text-left w-full group relative flex items-center gap-4 py-2"
                                    onHoverStart={() => setHoveredId(item.id)}
                                    animate={{
                                        filter: isFocused ? 'blur(0px)' : 'blur(4px)',
                                        opacity: opacityState,
                                        zIndex: isFocused ? 10 : 1
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                        mass: 0.5
                                    }}
                                >
                                    {/* Active Arrow Indicator (Only visible if truly active, not just hovered) */}
                                    <div className="w-6 flex shrink-0 opacity-50 justify-center">
                                        {isActive && (
                                            <motion.span
                                                layoutId="faq-active-indicator"
                                                className="text-[var(--accent-blue)] text-lg"
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            >
                                                →
                                            </motion.span>
                                        )}
                                    </div>

                                    {/* Question Text with Independent Scaling */}
                                    <motion.span
                                        className={`font-mono text-lg md:text-xl md:tracking-tight ${isFocused ? 'text-[var(--text-primary)] font-semibold' : 'text-[var(--text-secondary)]'} transition-colors duration-300 block`}
                                        animate={{
                                            scale: isFocused ? 1 : 0.98,
                                        }}
                                        style={{ transformOrigin: 'left center' }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 25
                                        }}
                                    >
                                        {item.q}
                                    </motion.span>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* BOTTOM HALF: The Answer "Terminal" */}
                <div className="w-full flex flex-col">
                    <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl relative overflow-hidden flex flex-col">
                        {/* Terminal Header */}
                        <div className="flex justify-between items-center bg-[var(--border-color)]/20 px-6 py-4 border-b border-[var(--border-color)]">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-blue)]">
                                SYSTEM_RESPONSE
                            </span>
                            <div className="flex gap-4">
                                <button onClick={handlePrev} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors opacity-50 hover:opacity-100">
                                    ↑
                                </button>
                                <button onClick={handleNext} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors opacity-50 hover:opacity-100">
                                    ↓
                                </button>
                            </div>
                        </div>

                        {/* Animated Content Area */}
                        <div className="min-h-[220px] p-6 md:p-10 relative flex flex-col bg-transparent">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={focusedItemData.id}
                                    initial={{ opacity: 0, filter: 'blur(8px)', y: 10 }}
                                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                    exit={{ opacity: 0, filter: 'blur(8px)', y: -10 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }}
                                    className="flex flex-col relative"
                                >
                                    <div className="font-mono text-xs md:text-sm text-[var(--text-secondary)] mb-6 leading-relaxed uppercase tracking-widest opacity-60">
                                        IN: {focusedItemData.q}
                                    </div>
                                    <div className="text-[var(--text-primary)] text-sm md:text-lg leading-relaxed pl-6 border-l-2 border-[var(--accent-blue)]">
                                        {focusedItemData.a}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Fake Loading Bar / Decoration */}
                        <div className="absolute bottom-0 left-0 h-1 w-full bg-[var(--border-color)]/30">
                            <motion.div
                                key={`bar-${focusedItemData.id}`}
                                className="h-full bg-[var(--accent-blue)]"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3, ease: "linear" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
