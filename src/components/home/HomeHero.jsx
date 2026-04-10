import React from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import {
  ArrowRight,
  FileText,
  MapPin,
  BookOpen,
  Headphones,
  Activity,
  PenLine,
} from "lucide-react";
import DraggablePhoto from "../DraggablePhoto";
import ScrollReveal from "../ScrollReveal";
import StickyNote from "../StickyNote";
import RichText from "../RichText";

const CHAR_SPEED = 0.015;
const LINE_GAP = 0.3;

const TypewriterText = ({ text, delay = 0, start = true }) => {
  if (!text) return null;

  // LCP Optimization: Render as a single text node instead of mapping 100+ DOM nodes
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={start ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.4, delay: delay, ease: "easeOut" }}
    >
      {text}
    </motion.span>
  );
};

const getDelay = (lines) => {
  let total = 0.1; // Initial rapid paint delay
  return lines.map(() => {
    const d = total;
    total += 0.15; // Fast block stagger instead of character length
    return d;
  });
};

const HomeHero = ({ t, renderIdCard = true, startTyping = true }) => {
  const roleLine = `${t("home.role")} ·`;
  const roleSubLine = t("home.role_sub");
  const titleLine = t("home.intro_title");
  const descLine = t("home.intro_desc");
  const delays = getDelay([roleLine, roleSubLine, titleLine, descLine]);

  return (
    <>
      <section className="relative mb-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 items-start">
          <div className="relative">
            <h1 className="font-mono text-3xl sm:text-4xl md:text-6xl uppercase leading-tight tracking-tight mb-8 text-[var(--text-primary)]">
              <TypewriterText
                text={roleLine}
                delay={delays[0]}
                start={startTyping}
              />
              <br />
              <span className="text-[var(--text-secondary)] font-serif italic lowercase tracking-normal">
                <TypewriterText
                  text={roleSubLine}
                  delay={delays[1]}
                  start={startTyping}
                />
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-mono text-[var(--text-primary)] mb-8 pb-4 inline-block border-b-2 border-[var(--accent-amber)]">
              <TypewriterText
                text={titleLine}
                delay={delays[2]}
                start={startTyping}
              />
            </h2>
            <div className="text-[var(--text-secondary)] text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-light">
              <p className="inline-block">
                <TypewriterText
                  text={descLine}
                  delay={delays[3]}
                  start={startTyping}
                />
              </p>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-widest opacity-30 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[var(--accent-blue)] animate-pulse" />
                AI-Human Hybrid Environment // Kernel 2026.03
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#work"
                aria-label="View Featured Work and Portfolio"
                className="px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-black font-mono text-sm font-bold uppercase tracking-wider hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 shadow-[4px_4px_0px_var(--accent-blue)] hover:shadow-[2px_2px_0px_var(--accent-blue)] hover:translate-x-[2px] hover:translate-y-[2px] rounded-lg"
              >
                {t("home.cta_work")} <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                aria-label="Contact Fadly Uzzaki / Let's Connect"
                className="px-8 py-4 border border-[var(--border-tag)] text-[var(--accent-blue)] font-mono text-sm font-bold uppercase tracking-wide hover:border-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/10 transition-all flex items-center justify-center gap-3 rounded-lg"
              >
                Let's Connect
              </Link>
            </div>
          </div>

          <div className="hidden md:block relative min-h-[400px]">
            {renderIdCard && (
              <motion.div layoutId="hero-id-card" layout className="w-full">
                <DraggablePhoto />
              </motion.div>
            )}
            <div className="space-y-4 font-mono text-xs text-[var(--text-secondary)] mt-4"></div>
          </div>
        </div>

        {/* Relocated Running Ticker */}
        <div className="border-y border-[var(--border-color)] my-12 overflow-hidden relative z-20 group cursor-default mx-[-1rem] sm:mx-0">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[var(--bg-backdrop)] via-[var(--bg-backdrop)]/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[var(--bg-backdrop)] via-[var(--bg-backdrop)]/80 to-transparent z-10"></div>

          <div className="flex whitespace-nowrap animate-marquee pause-on-hover py-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center gap-12 text-xs font-mono text-[var(--text-secondary)] uppercase tracking-widest px-6"
              >
                <span className="flex items-center gap-2 text-[var(--accent-blue)] font-bold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-blue)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-blue)]"></span>
                  </span>
                  [NEURAL_ENGINE]: OPTIMIZING
                </span>
                <span className="flex items-center gap-3">
                  <MapPin size={14} className="text-[var(--accent-red)]" />
                  {t("home.status_location")}
                </span>
                <a
                  href="https://www.goodreads.com/fadlyzaki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[var(--accent-amber)] transition-colors cursor-pointer"
                >
                  <BookOpen size={14} className="text-[var(--accent-amber)]" />
                  {t("home.status_reading")}
                </a>
                <a
                  href="https://music.youtube.com/watch?v=S02l82H9yks&si=9yoJMKDyzHDW8vgZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[var(--accent-blue)] transition-colors cursor-pointer"
                >
                  <Headphones size={14} className="text-[var(--accent-blue)]" />
                  {t("home.status_listening")}
                </a>
                <a
                  href="https://www.strava.com/athletes/129304799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  <Activity size={14} className="text-orange-500" />
                  {t("home.status_training")}
                </a>
                <a
                  href="https://substack.com/@fadlyzaki?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-purple-400 transition-colors cursor-pointer"
                >
                  <PenLine size={14} className="text-purple-400" />
                  {t("home.status_reflecting")}
                </a>
                <span className="flex items-center gap-2 text-[var(--accent-green)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-green)]"></span>
                  </span>
                  {t("home.status_collab")}
                </span>
              </div>
            ))}
          </div>
        </div>

        <ScrollReveal delay={500}>
          <div className="hidden md:flex flex-nowrap items-center gap-3 mt-8 overflow-x-visible">
            <StickyNote
              text={t("home.sticky_note")}
              className="text-[var(--accent-blue)] min-w-[200px]"
              rotate="lg:-rotate-1"
            />
            <StickyNote
              text={t("home.sticky_note_2")}
              className="text-[var(--accent-amber)] min-w-[200px]"
              rotate="lg:rotate-1"
            />
            <StickyNote
              text={t("home.sticky_note_3")}
              className="text-[var(--accent-green)] min-w-[200px]"
              rotate="lg:-rotate-1"
            />
            <StickyNote
              text={t("home.sticky_note_4")}
              className="text-[var(--accent-purple)] min-w-[200px]"
              rotate="lg:rotate-1"
            />
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};

export default HomeHero;
