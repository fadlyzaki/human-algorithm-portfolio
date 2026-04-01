import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

const FAQ_POOL = [
  {
    id: "01",
    q: 'What exactly is a "Systems Thinker" in Product Design?',
    a: "It means I don't just design isolated screens. I design the logical rules, component architectures, and scalable patterns that govern how an entire product ecosystem behaves and grows over time.",
  },
  {
    id: "02",
    q: "How do you approach complex, data-heavy interfaces?",
    a: "By prioritizing cognitive load. I break down dense information into progressive disclosures, ensuring users only see what they need, exactly when they need it, backed by a rigorous typographic hierarchy.",
  },
  {
    id: "03",
    q: "Do you actually code the interfaces you design?",
    a: "Yes. I bridge the gap between Figma and production. I actively prototype and build in React, ensuring the final interactive experience perfectly matches the design intent.",
  },
  {
    id: "04",
    q: "What is your handoff process to engineering?",
    a: "Handoff isn't a single event; it's a continuous conversation. I deliver comprehensive component rules, heavily documented design tokens, and often, interactive coded prototypes.",
  },
  {
    id: "05",
    q: "How do you handle disagreement with Product Managers?",
    a: "I treat disagreements as data gaps. Instead of debating opinions, we map out the logic, identify what user insight we are missing, and run rapid prototypes to let the user's behavior decide.",
  },
  {
    id: "06",
    q: "How do you measure the success of a B2B design?",
    a: "B2B success isn't about dopamine loops; it's about task completion speed and error reduction. I measure success by how quickly a user completes a complex workflow without contacting support.",
  },
  {
    id: "07",
    q: "What is your philosophy on 'Human by Design'?",
    a: "Algorithms should absorb the complexity, not the user. 'Human by Design' means creating interfaces where the machine does the cognitive heavy lifting, allowing the human to focus on decisions.",
  },
  {
    id: "08",
    q: "Can you adapt to an existing, messy legacy codebase?",
    a: "Absolutely. I don't believe in 'nuke and pave' redesigns. I incrementally introduce robust design primitives, cleaning up the technical debt piece by piece without halting feature delivery.",
  },
  {
    id: "09",
    q: "What role does animation play in your work?",
    a: "Animation isn't decoration; it's communication. In complex systems, motion directs attention, explains state changes, and provides immediate, visceral feedback that static screens simply cannot.",
  },
  {
    id: "10",
    q: "Have you ever designed an interface for AI or LLMs?",
    a: "Yes. In AI-native workflows, the challenge is trust and steerability. I focus on designing transparent feedback loops so users understand why an algorithm made a decision and how to correct it.",
  },
  {
    id: "11",
    q: "How do you organize a Figma file for large teams?",
    a: "Strictly systemic. My files follow a rigorous taxonomy: core primitives, molecular components, and composed templates. A developer can instantly read the system's DNA without explanation.",
  },
  {
    id: "12",
    q: "What is your approach to balancing speed versus quality?",
    a: "Quality in architecture, speed in execution. I spend time getting the core design tokens and primitives rigidly perfect so that assembling high-fidelity screens later becomes incredibly rapid.",
  },
  {
    id: "13",
    q: "How do you involve engineers early in your process?",
    a: "Engineers are my co-designers. I involve them during the wireframe phase to evaluate technical feasibility and data structures, catching edge cases before a single high-fidelity pixel is drawn.",
  },
  {
    id: "14",
    q: "What do you consider your greatest weakness?",
    a: "I have a low tolerance for 'black box' solutions. If I don't understand the underlying technical constraints, I over-index on asking engineering until the system's architecture becomes completely transparent.",
  },
  {
    id: "15",
    q: "Are you currently available for new projects or full-time roles?",
    a: "I am exclusively focused on finding a high-impact, full-time Product Designer role, though I occasionally accept select, technically challenging freelance inquiries.",
  },
];

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

const FaqSection = () => {
  const [activeFaqs] = useState(() => {
    const shuffled = [...FAQ_POOL].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  });
  const [activeId, setActiveId] = useState(() => activeFaqs[0].id);
  const [hoveredId, setHoveredId] = useState(null);

  const focusedId = hoveredId || activeId;

  const handleNext = () => {
    if (activeFaqs.length === 0) return;
    const currentIndex = activeFaqs.findIndex((item) => item.id === activeId);
    const nextIndex = (currentIndex + 1) % activeFaqs.length;
    setActiveId(activeFaqs[nextIndex].id);
  };

  const handlePrev = () => {
    if (activeFaqs.length === 0) return;
    const currentIndex = activeFaqs.findIndex((item) => item.id === activeId);
    const prevIndex = (currentIndex - 1 + activeFaqs.length) % activeFaqs.length;
    setActiveId(activeFaqs[prevIndex].id);
  };

  if (activeFaqs.length === 0 || !activeId) return null;

  const focusedItemData = activeFaqs.find((item) => item.id === focusedId);

  return (
    <section id="faqs" className="mb-12 scroll-mt-24">
      <ScrollReveal>
        <SectionTitle number="4" title="FAQS" />
      </ScrollReveal>
      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        {/* TOP HALF: The Interactive Question List */}
        <div className="w-full" onMouseLeave={() => setHoveredId(null)}>
          <div className="flex flex-col gap-2">
            {activeFaqs.map((item) => {
              const isFocused = item.id === focusedId;
              const isActive = item.id === activeId;

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
                    filter: isFocused ? "blur(0px)" : "blur(4px)",
                    opacity: opacityState,
                    zIndex: isFocused ? 10 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    mass: 0.5,
                  }}
                >
                  {/* Active Arrow Indicator */}
                  <div className="w-6 flex shrink-0 opacity-50 justify-center">
                    {isActive && (
                      <motion.span
                        layoutId="faq-active-indicator"
                        className="text-[var(--accent-blue)] text-lg"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      >
                        →
                      </motion.span>
                    )}
                  </div>

                  {/* Question Text */}
                  <motion.span
                    className={`font-mono text-lg md:text-xl md:tracking-tight ${
                      isFocused
                        ? "text-[var(--text-primary)] font-semibold"
                        : "text-[var(--text-secondary)]"
                    } transition-colors duration-300 block`}
                    animate={{
                      scale: isFocused ? 1 : 0.98,
                    }}
                    style={{ transformOrigin: "left center" }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
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
                <button
                  onClick={handlePrev}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors opacity-50 hover:opacity-100"
                >
                  ↑
                </button>
                <button
                  onClick={handleNext}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors opacity-50 hover:opacity-100"
                >
                  ↓
                </button>
              </div>
            </div>

            {/* Animated Content Area */}
            <div className="min-h-[220px] p-6 md:p-10 relative flex flex-col bg-transparent">
              <AnimatePresence mode="wait">
                <motion.div
                  key={focusedItemData.id}
                  initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  exit={{ opacity: 0, filter: "blur(8px)", y: -10 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="flex flex-col relative"
                >
                  <div className="font-mono text-xs md:text-sm text-[var(--text-secondary)] mb-6 leading-relaxed uppercase tracking-widest opacity-60">
                    IN: {focusedItemData.q}
                  </div>
                  <div className="text-[var(--text-primary)] text-sm md:text-lg leading-relaxed pl-6 border-l-2 border-[var(--accent-blue)]">
                    <TypewriterText text={focusedItemData.a} />
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
