import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  User,
  Heart,
  Cpu,
  Activity,
  Flame,
  BookOpen,
  PenLine,
  Palette,
  Terminal,
  X,
} from "lucide-react";
import SectionTitle from "../SectionTitle";
import ProfileScanner from "../ProfileScanner";
import RichText from "../RichText";
import { useRecruiterMode } from "../../context/RecruiterModeContext";

const INTERESTS = [
  {
    emoji: "🔥",
    label: "Duolingo",
    val: "Daily",
    url: "https://www.duolingo.com/profile/fadlyzaki",
    color: "var(--accent-orange)",
  },
  {
    emoji: "🏃",
    label: "Strava",
    val: "5K/Wk",
    url: "https://www.strava.com/athletes/129304799",
    color: "var(--accent-orange)",
  },
  {
    emoji: "📚",
    label: "Goodreads",
    val: "Daily",
    url: "https://www.goodreads.com/user/show/32928962-fadlyzaki",
    color: "var(--accent-amber)",
  },
  {
    emoji: "✍️",
    label: "Substack",
    val: "Weekly",
    url: "https://substack.com/@fadlyzaki",
    color: "var(--accent-purple)",
  },
  {
    emoji: "🎬",
    label: "Movies",
    val: "Comedy & cooking series",
    color: "var(--accent-pink)",
  },
  {
    emoji: "📷",
    label: "Photography",
    val: "City, beach & life",
    url: "https://unsplash.com/@fadlyzaki",
    color: "var(--accent-sky)",
  },
  {
    emoji: "👨‍🏫",
    label: "Teaching",
    val: "Teach small humans",
    color: "var(--accent-green)",
  },
];

const InterestSelector = ({ t }) => {
  const [selected, setSelected] = useState(new Set());
  const [hovered, setHovered] = useState(null);
  const [bursts, setBursts] = useState([]);

  const toggle = (i) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const burstCounter = useRef(0);
  const triggerBurst = (i) => {
    const id = burstCounter.current++;
    setBursts((prev) => [...prev, { id, index: i }]);
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id));
    }, 600);
  };

  return (
    <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:border-[var(--text-primary)] transition-colors overflow-hidden">
      <h4 className="font-mono text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
        <Activity size={14} className="text-[var(--text-secondary)]" />{" "}
        {t("home.personal_interests")}
      </h4>

      <div className="flex flex-wrap justify-center gap-2 pb-5 items-start">
        {INTERESTS.map((item, i) => {
          const isOn = selected.has(i);

          const handleClick = () => {
            toggle(i);
            triggerBurst(i);
            
            if (item.url) {
              // Open URL with a slight delay to allow the burst to be seen
              setTimeout(() => {
                window.open(item.url, "_blank", "noopener,noreferrer");
              }, 300);
            }
          };

          return (
            <div
              key={i}
              className={`relative flex flex-col items-center justify-start ${hovered === i ? "z-10" : "z-0"}`}
            >
              <button
                onClick={handleClick}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`inline-flex items-center gap-1.5 rounded-full text-xs font-medium
                                    px-3 py-1.5 border cursor-pointer select-none
                                    transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                                    hover:scale-105
                                    ${isOn
                    ? "border-transparent shadow-sm"
                    : "border-[var(--border-color)] bg-[var(--bg-surface)]"
                  }`}
                style={{
                  backgroundColor: isOn ? `${item.color}18` : undefined,
                  borderColor: isOn ? `${item.color}40` : undefined,
                }}
              >
                <span className="text-sm leading-none">{item.emoji}</span>
                <span className="text-[var(--text-primary)] whitespace-nowrap">
                  {item.label}
                </span>
              </button>

              {/* Giant emoji burst on click */}
              {bursts
                .filter((b) => b.index === i)
                .map((b) => (
                  <span
                    key={b.id}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                    style={{
                      animation: "emojiBurst 0.6s ease-out forwards",
                    }}
                  >
                    <span className="text-5xl">{item.emoji}</span>
                  </span>
                ))}

              {/* Caption below this pill (Expands to push other pills) */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out flex flex-col items-center justify-start ${hovered === i ? "max-h-12 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}`}
              >
                <span
                  className="text-[10px] font-mono uppercase tracking-widest leading-tight text-center pointer-events-none w-max max-w-[120px]"
                  style={{ color: item.color }}
                >
                  {item.val}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Burst animation keyframes */}
      <style>{`
                @keyframes emojiBurst {
                    0% { transform: scale(0.5); opacity: 1; }
                    50% { transform: scale(2.5); opacity: 0.8; }
                    100% { transform: scale(4); opacity: 0; }
                }
            `}</style>
    </div>
  );
};

export const TerminalWindowCard = ({ 
  lsOutput,
  terminalCommand,
  executeLabel,
  accentColorClass = "text-[var(--accent-blue)]",
  accentBgClass = "bg-[var(--accent-blue)]/10",
  accentBorderClass = "border-[var(--accent-blue)]/30",
  hoverBorderClass = "hover:border-[var(--accent-blue)]",
  children,
  defaultExpanded = false 
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  React.useEffect(() => {
    setIsExpanded(defaultExpanded);
  }, [defaultExpanded]);

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`relative overflow-hidden group h-full w-full flex flex-col transition-colors duration-300 ${
        isExpanded
          ? "bg-[var(--bg-surface)] backdrop-blur-2xl border border-[var(--border-color)] shadow-2xl rounded-3xl p-6 md:p-8"
          : `bg-[var(--bg-void)] border border-[var(--border-color)] rounded-2xl p-6 md:p-8 cursor-pointer ${hoverBorderClass}`
      }`}
      onClick={() => {
        if (!isExpanded) setIsExpanded(true);
      }}
    >
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-mono text-sm sm:text-base space-y-4 text-[var(--text-secondary)] h-full flex flex-col justify-center"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Terminal size={18} className="text-[var(--text-primary)]" />
                <span className="text-[var(--text-primary)] font-bold tracking-wider uppercase text-xs">Terminal</span>
              </div>
              <div className="flex gap-1.5 opacity-50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
            </div>

            <p>
              <span className="text-emerald-500">root@human-algorithm</span>:<span className="text-blue-400">~/system</span>$ ls
              <br />
              <span className="opacity-70">{lsOutput}</span>
            </p>
            <p>
              <span className="text-emerald-500">root@human-algorithm</span>:<span className="text-blue-400">~/system</span>$ {terminalCommand}
              <br />
              <span className={`inline-block mt-6 px-4 py-2 rounded border animate-pulse text-xs uppercase tracking-widest font-bold ${accentBgClass} ${accentColorClass} ${accentBorderClass}`}>
                {executeLabel}
              </span>
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="glass"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.05, duration: 0.3 }}
            className="relative z-10 w-full h-full flex flex-col justify-center"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              className="absolute -top-2 -right-2 md:-top-4 md:-right-4 p-2 rounded-full bg-[var(--text-secondary)]/10 hover:bg-[var(--text-secondary)]/20 transition-colors text-[var(--text-primary)] z-20"
            >
              <X size={16} />
            </button>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DraggableBento = ({ id, activeId, setActiveId, constraintsRef, className, children }) => {
  const [isDesktop, setIsDesktop] = React.useState(false);
  const isActive = activeId === id;

  React.useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (!isDesktop) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      onPointerDown={() => setActiveId(id)}
      whileDrag={{ scale: 1.02, cursor: "grabbing" }}
      dragElastic={0.1}
      className={`${className} cursor-grab relative`}
      style={{ zIndex: isActive ? 50 : 1 }}
    >
      {children}
    </motion.div>
  );
};

const HomeAbout = ({ t }) => {
  const constraintsRef = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const { isRecruiterMode } = useRecruiterMode();

  return (
    <section id="about" ref={constraintsRef} className="mb-24 scroll-mt-24 relative">
      <SectionTitle number="3" title={t("home.section_about")} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 w-full h-full">
        {/* 1. MAIN BIO (Span 2 cols) - Command Line to Glassmorphism interaction */}
        <DraggableBento id="bio" activeId={activeId} setActiveId={setActiveId} constraintsRef={constraintsRef} className="md:col-span-2">
          <TerminalWindowCard
            lsOutput="manifest.json  architect_bio.md  execute_logic.sh"
            terminalCommand="cat architect_bio.md"
            executeLabel="[ Click to Execute Payload ]"
            accentColorClass="text-[var(--accent-blue)]"
            accentBgClass="bg-[var(--accent-blue)]/10"
            accentBorderClass="border-[var(--accent-blue)]/30"
            hoverBorderClass="hover:border-[var(--accent-blue)]"
            defaultExpanded={isRecruiterMode}
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <User size={120} strokeWidth={0.5} />
            </div>

            <div className="prose prose-invert max-w-none relative z-10">
              <p className="text-xl md:text-3xl text-[var(--text-primary)] leading-tight mb-8 font-serif italic drop-shadow-sm">
                {typeof t("home.about_quote") === "string" ? t("home.about_quote").replace(/<[^>]*>/g, "") : t("home.about_quote")}
              </p>

              <div className="text-[var(--text-secondary)] space-y-6 text-lg font-light leading-relaxed">
                <p>
                  {typeof t("home.about_p1") === "string" ? t("home.about_p1").replace(/<[^>]*>/g, "") : t("home.about_p1")}
                </p>
                <p>
                  {typeof t("home.about_p2") === "string" ? t("home.about_p2").replace(/<[^>]*>/g, "") : t("home.about_p2")}
                </p>
              </div>
            </div>
          </TerminalWindowCard>
        </DraggableBento>

        {/* 2. VISUAL MODULE (Span 1 col) */}
        <DraggableBento id="visual" activeId={activeId} setActiveId={setActiveId} constraintsRef={constraintsRef} className="md:col-span-1 h-full min-h-[300px]">
          <ProfileScanner
            imageSrc="/about-fadly.jpg"
            aspectRatio="h-full"
            showBadge={true}
            className="shadow-xl h-full"
          />
        </DraggableBento>

        {/* 3. PHILOSOPHY (Span 1 col) */}
        <DraggableBento id="philosophy" activeId={activeId} setActiveId={setActiveId} constraintsRef={constraintsRef} className="h-full">
          <TerminalWindowCard
            lsOutput="core_values.json  ethics.md  philosophy.json"
            terminalCommand="cat philosophy.json"
            executeLabel="[ Decrypt Core Values ]"
            accentColorClass="text-[var(--accent-amber)]"
            accentBgClass="bg-[var(--accent-amber)]/10"
            accentBorderClass="border-[var(--accent-amber)]/30"
            hoverBorderClass="hover:border-[var(--accent-amber)]"
            defaultExpanded={isRecruiterMode}
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Heart size={120} strokeWidth={0.5} />
            </div>
            
            <div className="flex flex-col justify-between h-full relative z-10">
              <div>
                <h4 className="font-mono text-[var(--accent-amber)] text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Heart size={14} className="text-[var(--accent-amber)]" />{" "}
                  {t("home.philosophy_title")}
                </h4>
                <blockquote className="text-lg text-[var(--text-primary)] font-light leading-relaxed mb-6">
                  {typeof t("home.philosophy_quote") === "string"
                    ? t("home.philosophy_quote").replace(/<[^>]*>/g, "")
                    : t("home.philosophy_quote")}
                </blockquote>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors self-start"
              >
                {t("home.read_philosophy")} <ArrowRight size={14} />
              </Link>
            </div>
          </TerminalWindowCard>
        </DraggableBento>

        {/* 4. CURRENT FOCUS (Span 1 col) */}
        <DraggableBento id="focus" activeId={activeId} setActiveId={setActiveId} constraintsRef={constraintsRef} className="h-full">
          <TerminalWindowCard
            lsOutput="system_focus.exe  memory.log"
            terminalCommand="run system_focus.exe"
            executeLabel="[ Compile Logic ]"
            accentColorClass="text-[#a855f7]"
            accentBgClass="bg-[#a855f7]/10"
            accentBorderClass="border-[#a855f7]/30"
            hoverBorderClass="hover:border-[#a855f7]"
            defaultExpanded={isRecruiterMode}
          >
            <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
              <Cpu size={120} strokeWidth={0.5} />
            </div>

            <div className="relative z-10">
              <h4 className="font-mono text-[#a855f7] text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <Cpu size={14} className="text-[#a855f7]" />
                {t("home.current_focus")}
              </h4>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {typeof t("home.current_focus_desc") === "string"
                  ? t("home.current_focus_desc").replace(/<[^>]*>/g, "")
                  : t("home.current_focus_desc")}
              </p>
            </div>
          </TerminalWindowCard>
        </DraggableBento>

        {/* 5. PERSONAL INTERESTS  -  Interactive Emoji Selector */}
        <DraggableBento id="interests" activeId={activeId} setActiveId={setActiveId} constraintsRef={constraintsRef} className="h-full">
          <TerminalWindowCard
            lsOutput="hobbies/  sports/  leisure/"
            terminalCommand="./start_human_hobbies.sh"
            executeLabel="[ Boot Applications ]"
            accentColorClass="text-emerald-500"
            accentBgClass="bg-emerald-500/10"
            accentBorderClass="border-emerald-500/30"
            hoverBorderClass="hover:border-emerald-500"
            defaultExpanded={isRecruiterMode}
          >
            <div className="relative z-10 pt-4">
              <InterestSelector t={t} />
            </div>
          </TerminalWindowCard>
        </DraggableBento>

        {/* 6. SKETCHES & THOUGHTS TEASERS (Span 3 cols split into 2) */}
        <DraggableBento id="links" activeId={activeId} setActiveId={setActiveId} constraintsRef={constraintsRef} className="md:col-span-3">
          <TerminalWindowCard
            lsOutput="archives/ sketches/ thoughts/"
            terminalCommand="ls -la /archives/"
            executeLabel="[ Mount Directory ]"
            accentColorClass="text-[var(--text-secondary)]"
            accentBgClass="bg-[var(--text-secondary)]/10"
            accentBorderClass="border-[var(--text-secondary)]/30"
            hoverBorderClass="hover:border-[var(--text-secondary)]"
            defaultExpanded={isRecruiterMode}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative z-10 pt-4 pb-2">
              <Link
                to="/sketches"
                className="group relative overflow-hidden rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-amber)] transition-all duration-500 cursor-pointer flex flex-col justify-center min-h-[140px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-amber)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 md:p-8 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-amber)] transition-colors shrink-0">
                      <Palette
                        size={20}
                        className="text-[var(--accent-amber)] opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-1">
                        {t("nav.sketches")}
                      </h4>
                      <p className="text-[var(--text-primary)] text-sm font-light">
                        {t("about.sketches_desc")}
                      </p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] font-mono text-xs text-[var(--accent-amber)] whitespace-nowrap self-start sm:self-auto">
                    {t("about.sketches_count")}
                  </div>
                </div>
              </Link>

              <Link
                to="/thoughts"
                className="group relative overflow-hidden rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-amber)] transition-all duration-500 cursor-pointer flex flex-col justify-center min-h-[140px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--accent-amber)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 md:p-8 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-amber)] transition-colors shrink-0">
                      <BookOpen
                        size={20}
                        className="text-[var(--accent-amber)] opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-1">
                        {t("nav.notes")}
                      </h4>
                      <p className="text-[var(--text-primary)] text-sm font-light">
                        {t("about.thoughts_desc")}
                      </p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] font-mono text-xs text-[var(--accent-amber)] whitespace-nowrap self-start sm:self-auto">
                    {t("about.read_btn")}
                  </div>
                </div>
              </Link>
            </div>
          </TerminalWindowCard>
        </DraggableBento>
      </div>
    </section>
  );
};

export default HomeAbout;
