import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

// --- GAME CONSTANTS ---
const SPRITE_W = 80; // Character visual width
const SPRITE_H = 112;
const GRAVITY = 0.6;
const JUMP_FORCE = -12;
const MOVE_SPEED = 4;
const GROUND_OFFSET = 120; // Distance from bottom of viewport
const PORTAL_SIZE = 64;

const NotFound = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const frameRef = useRef(null);
  const keysRef = useRef({});
  const gameRef = useRef({
    x: 100,
    y: 0,
    vy: 0,
    onGround: false,
    facingRight: true,
    isMoving: false,
  });

  const [pos, setPos] = useState({ x: 100, y: 0 });
  const [facingRight, setFacingRight] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [portalReached, setPortalReached] = useState(false);
  const [portalPos, setPortalPos] = useState({ x: 0, y: 0 });
  const [collectibles, setCollectibles] = useState([]);
  const [collected, setCollected] = useState(new Set());
  const [showHint, setShowHint] = useState(true);

  // Initialize portal position and collectibles
  useEffect(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const groundY = vh - GROUND_OFFSET;

    // Portal on the right side
    setPortalPos({
      x: vw - 140,
      y: groundY - PORTAL_SIZE,
    });

    // Place collectible "4", "0", "4" letters across the map
    const letters = [
      { char: "4", x: vw * 0.25, y: groundY - 60 },
      { char: "0", x: vw * 0.45, y: groundY - 120 },
      { char: "4", x: vw * 0.65, y: groundY - 60 },
    ];
    setCollectibles(letters);

    // Initial sprite position
    gameRef.current.x = 100;
    gameRef.current.y = groundY - SPRITE_H;

    // Hide hint after a few seconds
    const hintTimer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(hintTimer);
  }, []);

  // --- KEYBOARD HANDLERS ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["ArrowLeft", "ArrowRight", "ArrowUp", " ", "a", "d", "w"].includes(e.key)) {
        e.preventDefault();
        keysRef.current[e.key] = true;
      }
    };
    const handleKeyUp = (e) => {
      keysRef.current[e.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // --- GAME LOOP ---
  useEffect(() => {
    if (portalReached) return;

    const groundY = window.innerHeight - GROUND_OFFSET - SPRITE_H;
    const maxX = window.innerWidth - SPRITE_W;

    const loop = () => {
      const keys = keysRef.current;
      const g = gameRef.current;

      let moving = false;

      // Horizontal movement
      if (keys["ArrowLeft"] || keys["a"]) {
        g.x = Math.max(0, g.x - MOVE_SPEED);
        g.facingRight = false;
        moving = true;
      }
      if (keys["ArrowRight"] || keys["d"]) {
        g.x = Math.min(maxX, g.x + MOVE_SPEED);
        g.facingRight = true;
        moving = true;
      }

      // Jump
      if ((keys["ArrowUp"] || keys[" "] || keys["w"]) && g.onGround) {
        g.vy = JUMP_FORCE;
        g.onGround = false;
      }

      // Gravity
      g.vy += GRAVITY;
      g.y += g.vy;

      // Ground collision
      if (g.y >= groundY) {
        g.y = groundY;
        g.vy = 0;
        g.onGround = true;
      }

      g.isMoving = moving;

      // Update React state for rendering
      setPos({ x: g.x, y: g.y });
      setFacingRight(g.facingRight);
      setIsMoving(moving);
      setIsJumping(!g.onGround);

      // Check collectible collisions
      setCollectibles((prev) => {
        prev.forEach((c, i) => {
          if (
            !collected.has(i) &&
            Math.abs(g.x + SPRITE_W / 2 - c.x) < 40 &&
            Math.abs(g.y + SPRITE_H / 2 - c.y) < 40
          ) {
            setCollected((s) => new Set([...s, i]));
          }
        });
        return prev;
      });

      // Check portal collision
      if (
        Math.abs(g.x + SPRITE_W / 2 - (portalPos.x + PORTAL_SIZE / 2)) < 50 &&
        Math.abs(g.y + SPRITE_H - (portalPos.y + PORTAL_SIZE)) < 60
      ) {
        setPortalReached(true);
        setTimeout(() => navigate("/", { replace: true }), 1500);
        return;
      }

      frameRef.current = requestAnimationFrame(loop);
    };

    frameRef.current = requestAnimationFrame(loop);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [portalReached, portalPos, collected, navigate]);

  // --- MOBILE TOUCH CONTROLS ---
  const handleMobileInput = useCallback((key, isDown) => {
    keysRef.current[key] = isDown;
  }, []);

  const spriteScene = isJumping ? "think" : isMoving ? "walk" : "idle";

  return (
    <div
      className="min-h-screen font-mono select-none overflow-hidden relative bg-[var(--bg-void)]"
      style={{ touchAction: "none" }}
    >
      <SEO title="404 — Lost in the System" description="Page not found. But you found a game.">
        <meta name="robots" content="noindex, nofollow" />
      </SEO>

      {/* ─── STARFIELD / SCANLINES ─── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Scanlines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />
        {/* Floating 404 watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-[var(--text-primary)] opacity-[0.02] pointer-events-none">
          404
        </div>
      </div>

      {/* ─── GROUND ─── */}
      <div
        className="absolute left-0 right-0 z-10"
        style={{ bottom: GROUND_OFFSET - 2 }}
      >
        {/* Ground line */}
        <div className="h-[2px] bg-[var(--accent-error)] opacity-40" />
        {/* Ground pattern */}
        <div className="h-12 opacity-10" style={{
          backgroundImage: "repeating-linear-gradient(90deg, var(--accent-error) 0px, var(--accent-error) 1px, transparent 1px, transparent 40px)",
        }} />
      </div>

      {/* ─── HEADER ─── */}
      <div className="absolute top-6 left-6 right-6 z-30 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 text-[var(--accent-error)] animate-pulse mb-1">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-error)]" />
            <span className="text-xs uppercase tracking-[0.3em]">SYSTEM_ERROR</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-[var(--text-primary)]">
            KERNEL_PANIC
          </h1>
          <p className="text-xs text-[var(--text-secondary)] mt-1 font-mono">
            The page you're looking for has been lost in the system.
          </p>
        </div>

        {/* Score / Collected */}
        <div className="flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border-color)] px-4 py-2 rounded-lg">
          <span className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">Collected:</span>
          <span className="text-lg font-black text-[var(--accent-error)]">{collected.size}</span>
          <span className="text-xs text-[var(--text-secondary)]">/ 3</span>
        </div>
      </div>

      {/* ─── COLLECTIBLE LETTERS ─── */}
      {collectibles.map((c, i) => (
        <div
          key={i}
          className={`absolute z-20 transition-all duration-300 ${collected.has(i) ? "scale-0 opacity-0" : "animate-bounce"}`}
          style={{ left: c.x - 16, top: c.y - 16 }}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--accent-error)] text-black font-black text-lg shadow-[0_0_20px_rgba(239,68,68,0.4)]">
            {c.char}
          </div>
        </div>
      ))}

      {/* ─── PORTAL ─── */}
      <div
        className={`absolute z-20 transition-transform duration-500 ${portalReached ? "scale-150 opacity-0" : ""}`}
        style={{ left: portalPos.x, top: portalPos.y }}
      >
        <div className="relative">
          {/* Portal glow */}
          <div className="absolute -inset-4 rounded-full bg-emerald-500/20 animate-ping" />
          <div className="w-16 h-16 rounded-full border-2 border-emerald-400 bg-emerald-500/10 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <Home size={24} className="text-emerald-400" />
          </div>
          <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-emerald-400 whitespace-nowrap font-mono uppercase tracking-widest">
            HOME_PORT
          </p>
        </div>
      </div>

      {/* ─── SPRITE CHARACTER ─── */}
      <div
        className={`absolute z-30 transition-none ${portalReached ? "scale-0 opacity-0 transition-all duration-500" : ""}`}
        style={{
          left: pos.x,
          top: pos.y,
          width: SPRITE_W,
          height: SPRITE_H,
          transform: `scaleX(${facingRight ? 1 : -1})`,
        }}
      >
        <div className="w-full h-full overflow-hidden drop-shadow-lg">
          <img
            src={`/images/sprite-${spriteScene}.png`}
            alt="Player character"
            className={`sprite-img sprite-anim-${spriteScene}`}
          />
        </div>
      </div>

      {/* ─── PORTAL REACHED OVERLAY ─── */}
      {portalReached && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 animate-in fade-in duration-500">
          <div className="text-center">
            <p className="text-emerald-400 font-mono text-2xl font-bold mb-2">SYSTEM_RESTORED</p>
            <p className="text-[var(--text-secondary)] text-sm">Redirecting to home port...</p>
          </div>
        </div>
      )}

      {/* ─── KEYBOARD HINT ─── */}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${showHint ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <div className="hidden sm:flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--border-color)] px-4 py-2 rounded-lg text-xs text-[var(--text-secondary)]">
          <span className="px-2 py-1 bg-[var(--bg-void)] border border-[var(--border-color)] rounded text-[var(--text-primary)] font-bold">←</span>
          <span className="px-2 py-1 bg-[var(--bg-void)] border border-[var(--border-color)] rounded text-[var(--text-primary)] font-bold">→</span>
          <span>Move</span>
          <span className="mx-1 opacity-30">|</span>
          <span className="px-2 py-1 bg-[var(--bg-void)] border border-[var(--border-color)] rounded text-[var(--text-primary)] font-bold">↑</span>
          <span>Jump</span>
          <span className="mx-1 opacity-30">|</span>
          <span>Reach the</span>
          <Home size={12} className="text-emerald-400" />
          <span>portal</span>
        </div>
      </div>

      {/* ─── MOBILE CONTROLS ─── */}
      <div className="sm:hidden absolute bottom-6 left-0 right-0 z-40 flex justify-between px-6">
        {/* Left/Right */}
        <div className="flex gap-3">
          <button
            className="w-14 h-14 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center active:bg-[var(--accent-error)] active:text-black transition-colors touch-none"
            onTouchStart={(e) => { e.preventDefault(); handleMobileInput("ArrowLeft", true); }}
            onTouchEnd={(e) => { e.preventDefault(); handleMobileInput("ArrowLeft", false); }}
            onMouseDown={() => handleMobileInput("ArrowLeft", true)}
            onMouseUp={() => handleMobileInput("ArrowLeft", false)}
            onMouseLeave={() => handleMobileInput("ArrowLeft", false)}
          >
            <ArrowLeft size={24} className="text-[var(--text-primary)]" />
          </button>
          <button
            className="w-14 h-14 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center active:bg-[var(--accent-error)] active:text-black transition-colors touch-none"
            onTouchStart={(e) => { e.preventDefault(); handleMobileInput("ArrowRight", true); }}
            onTouchEnd={(e) => { e.preventDefault(); handleMobileInput("ArrowRight", false); }}
            onMouseDown={() => handleMobileInput("ArrowRight", true)}
            onMouseUp={() => handleMobileInput("ArrowRight", false)}
            onMouseLeave={() => handleMobileInput("ArrowRight", false)}
          >
            <ArrowRight size={24} className="text-[var(--text-primary)]" />
          </button>
        </div>

        {/* Jump */}
        <button
          className="w-14 h-14 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center active:bg-emerald-500 active:text-black transition-colors touch-none"
          onTouchStart={(e) => { e.preventDefault(); handleMobileInput("ArrowUp", true); }}
          onTouchEnd={(e) => { e.preventDefault(); handleMobileInput("ArrowUp", false); }}
          onMouseDown={() => handleMobileInput("ArrowUp", true)}
          onMouseUp={() => handleMobileInput("ArrowUp", false)}
          onMouseLeave={() => handleMobileInput("ArrowUp", false)}
        >
          <span className="text-[var(--text-primary)] font-bold text-xs">JUMP</span>
        </button>
      </div>

      {/* ─── TERMINAL LOG (Bottom Left - Desktop) ─── */}
      <div className="hidden sm:block absolute bottom-6 left-6 z-30">
        <div className="font-mono text-[10px] text-[var(--text-secondary)] opacity-50 space-y-0.5">
          <p>&gt; CRITICAL_ERROR: 404_PAGE_NOT_FOUND</p>
          <p>&gt; MODULE_MISSING: /requested_url</p>
          <p>&gt; RECOVERY_MODE: INTERACTIVE</p>
          <p className="text-emerald-400">&gt; Reach the HOME_PORT to reboot_</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
