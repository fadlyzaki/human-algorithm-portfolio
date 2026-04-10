import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import SEO from "../components/SEO";

// --- GAME CONSTANTS ---
const SPRITE_W = 80;
const SPRITE_H = 112;
const GRAVITY = 0.55;
const JUMP_FORCE = -13;
const MAX_SPEED = 5;
const ACCELERATION = 0.5;
const FRICTION = 0.85;
const GROUND_OFFSET = 120;
const PORTAL_SIZE = 64;

// --- PLATFORM DATA (x, y, width) ---
const makePlatforms = (vw, groundY) => {
  const isMobile = vw < 640;
  if (isMobile) {
    return [
      { x: vw * 0.1, y: groundY - 70, w: 80 },
      { x: vw * 0.45, y: groundY - 140, w: 90 },
      { x: vw * 0.7, y: groundY - 80, w: 80 },
      { x: vw * 0.2, y: groundY - 200, w: 70 },
    ];
  }
  return [
    { x: vw * 0.18, y: groundY - 80, w: 100 },
    { x: vw * 0.38, y: groundY - 140, w: 120 },
    { x: vw * 0.58, y: groundY - 90, w: 100 },
    { x: vw * 0.75, y: groundY - 160, w: 90 },
  ];
};

const NotFound = () => {
  useTheme();
  const navigate = useNavigate();
  const frameRef = useRef(null);
  const keysRef = useRef({});
  const particlesRef = useRef([]);
  const gameRef = useRef({
    x: 60, y: 0, vx: 0, vy: 0,
    onGround: false, facingRight: true, isMoving: false,
  });
  const collectedRef = useRef(new Set());

  const [pos, setPos] = useState({ x: 60, y: 0 });
  const [facingRight, setFacingRight] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [portalReached, setPortalReached] = useState(false);
  const [portalPos, setPortalPos] = useState({ x: 0, y: 0 });
  const [collectibles, setCollectibles] = useState([]);
  const [collected, setCollected] = useState(new Set());
  const [showHint, setShowHint] = useState(true);
  const [platforms, setPlatforms] = useState([]);
  const [particles, setParticles] = useState([]);
  const [timer, setTimer] = useState(0);

  // Initialize
  useEffect(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const groundY = vh - GROUND_OFFSET;

    // Batch initial layout calculations
    const plats = makePlatforms(vw, groundY);
     
    setPlatforms(plats);
    setPortalPos({ x: vw - 140, y: groundY - PORTAL_SIZE });
    setCollectibles([
      { char: "4", x: plats[0].x + plats[0].w / 2, y: plats[0].y - 30 },
      { char: "0", x: plats[1].x + plats[1].w / 2, y: plats[1].y - 30 },
      { char: "4", x: plats[2].x + plats[2].w / 2, y: plats[2].y - 30 },
    ]);

    gameRef.current.x = 60;
    gameRef.current.y = groundY - SPRITE_H;

    const hintTimer = setTimeout(() => setShowHint(false), 6000);
    return () => clearTimeout(hintTimer);
  }, []);

  // Timer
  useEffect(() => {
    if (portalReached) return;
    const interval = setInterval(() => setTimer((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [portalReached]);

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["ArrowLeft", "ArrowRight", "ArrowUp", " ", "a", "d", "w"].includes(e.key)) {
        e.preventDefault();
        keysRef.current[e.key] = true;
      }
    };
    const handleKeyUp = (e) => { keysRef.current[e.key] = false; };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Spawn particles
  const spawnParticles = useCallback((cx, cy, color) => {
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: cx, y: cy,
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.8) * 5,
      life: 1,
      color,
    }));
    particlesRef.current = [...particlesRef.current, ...newParticles];
  }, []);

  // Game Loop
  useEffect(() => {
    if (portalReached) return;

    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const groundY = vh - GROUND_OFFSET - SPRITE_H;
    const maxX = vw - SPRITE_W;
    const plats = makePlatforms(vw, vh - GROUND_OFFSET);

    const loop = () => {
      const keys = keysRef.current;
      const g = gameRef.current;
      let moving = false;

      // Horizontal acceleration
      if (keys["ArrowLeft"] || keys["a"]) {
        g.vx = Math.max(-MAX_SPEED, g.vx - ACCELERATION);
        g.facingRight = false;
        moving = true;
      }
      if (keys["ArrowRight"] || keys["d"]) {
        g.vx = Math.min(MAX_SPEED, g.vx + ACCELERATION);
        g.facingRight = true;
        moving = true;
      }

      // Friction
      if (!moving) g.vx *= FRICTION;
      if (Math.abs(g.vx) < 0.1) g.vx = 0;

      // Jump
      if ((keys["ArrowUp"] || keys[" "] || keys["w"]) && g.onGround) {
        g.vy = JUMP_FORCE;
        g.onGround = false;
      }

      // Gravity
      g.vy += GRAVITY;
      g.y += g.vy;
      g.x += g.vx;

      // Bounds
      g.x = Math.max(0, Math.min(maxX, g.x));

      // Ground collision
      g.onGround = false;
      if (g.y >= groundY) {
        g.y = groundY;
        g.vy = 0;
        g.onGround = true;
      }

      // Platform collisions (only from above)
      plats.forEach((p) => {
        const spriteBottom = g.y + SPRITE_H;
        const spriteCenterX = g.x + SPRITE_W / 2;
        if (
          g.vy >= 0 &&
          spriteBottom >= p.y && spriteBottom <= p.y + 16 &&
          spriteCenterX >= p.x && spriteCenterX <= p.x + p.w
        ) {
          g.y = p.y - SPRITE_H;
          g.vy = 0;
          g.onGround = true;
        }
      });

      g.isMoving = moving || Math.abs(g.vx) > 0.5;

      setPos({ x: g.x, y: g.y });
      setFacingRight(g.facingRight);
      setIsMoving(g.isMoving);
      setIsJumping(!g.onGround);

      // Check collectibles
      collectibles.forEach((c, i) => {
        if (
          !collectedRef.current.has(i) &&
          Math.abs(g.x + SPRITE_W / 2 - c.x) < 42 &&
          Math.abs(g.y + SPRITE_H / 2 - c.y) < 42
        ) {
          collectedRef.current.add(i);
          setCollected(new Set(collectedRef.current));
          spawnParticles(c.x, c.y, "rgba(239, 68, 68, 1)");
        }
      });

      // Check portal
      if (
        Math.abs(g.x + SPRITE_W / 2 - (portalPos.x + PORTAL_SIZE / 2)) < 50 &&
        Math.abs(g.y + SPRITE_H - (portalPos.y + PORTAL_SIZE)) < 60
      ) {
        setPortalReached(true);
        spawnParticles(portalPos.x + PORTAL_SIZE / 2, portalPos.y + PORTAL_SIZE / 2, "rgba(16, 185, 129, 1)");
        setTimeout(() => navigate("/", { replace: true }), 2000);
        return;
      }

      // Update particles
      particlesRef.current = particlesRef.current
        .map((p) => ({ ...p, x: p.x + p.vx, y: p.y + p.vy, vy: p.vy + 0.15, life: p.life - 0.03 }))
        .filter((p) => p.life > 0);
      setParticles([...particlesRef.current]);

      frameRef.current = requestAnimationFrame(loop);
    };

    frameRef.current = requestAnimationFrame(loop);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portalReached, portalPos, navigate, spawnParticles]);

  const handleMobileInput = useCallback((key, isDown) => { keysRef.current[key] = isDown; }, []);

  const spriteScene = isJumping ? "think" : isMoving ? "walk" : "idle";
  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="min-h-[100dvh] font-mono select-none overflow-hidden relative bg-[var(--bg-void)]" style={{ touchAction: "none" }}>
      <SEO title="404  -  Lost in the System" description="Page not found. But you found a game." noindex>
        <meta name="robots" content="noindex, nofollow" />
      </SEO>

      {/* ─── BACKGROUND ─── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] font-black text-[var(--text-primary)] opacity-[0.015] pointer-events-none">404</div>
        {/* Parallax grid dots */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "radial-gradient(circle, var(--text-secondary) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      {/* ─── GROUND ─── */}
      <div className="absolute left-0 right-0 z-10" style={{ bottom: GROUND_OFFSET - 2 }}>
        <div className="h-[2px] bg-[var(--accent-error)] opacity-40" />
        <div className="h-16 opacity-[0.07]" style={{
          backgroundImage: `repeating-linear-gradient(90deg, var(--accent-error) 0px, var(--accent-error) 1px, transparent 1px, transparent 30px),
                            repeating-linear-gradient(0deg, var(--accent-error) 0px, var(--accent-error) 1px, transparent 1px, transparent 30px)`,
        }} />
      </div>

      {/* ─── PLATFORMS ─── */}
      {platforms.map((p, i) => (
        <div key={i} className="absolute z-10" style={{ left: p.x, top: p.y, width: p.w }}>
          <div className="h-[3px] bg-[var(--accent-amber)] opacity-70 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.3)]" />
          <div className="h-2 opacity-20 border-x border-dashed border-[var(--accent-amber)]" />
        </div>
      ))}

      {/* ─── HEADER ─── */}
      <div className="absolute top-5 left-5 right-5 z-30 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 text-[var(--accent-error)] mb-1">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-error)] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em]">SYSTEM_ERROR</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter text-[var(--text-primary)]">KERNEL_PANIC</h1>
          <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] mt-0.5 font-mono max-w-[200px] sm:max-w-none">
            Page lost in the system. Find the portal to escape.
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          {/* Timer */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] px-3 py-1.5 rounded-lg font-mono text-sm text-[var(--text-primary)] tabular-nums">
            {formatTime(timer)}
          </div>
          {/* Score */}
          <div className="flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--border-color)] px-3 py-1.5 rounded-lg">
            <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">Items</span>
            <span className="text-sm font-black text-[var(--accent-error)]">{collected.size}</span>
            <span className="text-[10px] text-[var(--text-secondary)]">/ 3</span>
          </div>
        </div>
      </div>

      {/* ─── PARTICLES ─── */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute z-40 rounded-full pointer-events-none"
          style={{
            left: p.x, top: p.y,
            width: 6, height: 6,
            backgroundColor: p.color,
            opacity: p.life,
            boxShadow: `0 0 8px ${p.color}`,
            transform: `scale(${p.life})`,
          }}
        />
      ))}

      {/* ─── COLLECTIBLE LETTERS ─── */}
      {collectibles.map((c, i) => (
        <div
          key={i}
          className={`absolute z-20 transition-all duration-300 ${collected.has(i) ? "scale-0 opacity-0" : ""}`}
          style={{ left: c.x - 18, top: c.y - 18 }}
        >
          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--accent-error)] text-black font-black text-base shadow-[0_0_20px_rgba(239,68,68,0.3)] animate-[float_2s_ease-in-out_infinite]">
            {c.char}
          </div>
        </div>
      ))}

      {/* ─── PORTAL ─── */}
      <div
        className={`absolute z-20 transition-all duration-700 ${portalReached ? "scale-[2] opacity-0" : ""}`}
        style={{ left: portalPos.x, top: portalPos.y }}
      >
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-emerald-500/20 animate-ping" />
          <div className="absolute -inset-2 rounded-full bg-emerald-500/10 animate-pulse" />
          <div className="w-16 h-16 rounded-full border-2 border-emerald-400 bg-emerald-500/10 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <Home size={24} className="text-emerald-400" />
          </div>
          <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-emerald-400 whitespace-nowrap font-mono uppercase tracking-[0.2em]">
            HOME_PORT
          </p>
        </div>
      </div>

      {/* ─── SPRITE ─── */}
      <div
        className={`absolute z-30 ${portalReached ? "scale-0 opacity-0 transition-all duration-700" : ""}`}
        style={{
          left: pos.x, top: pos.y,
          width: SPRITE_W, height: SPRITE_H,
          transform: `scaleX(${facingRight ? 1 : -1})`,
          transition: "none",
        }}
      >
        <div className="w-full h-full overflow-hidden drop-shadow-lg">
          <img loading="lazy" decoding="async"
            src={`/images/sprite-${spriteScene}.png`}
            alt="Player character"
            className={`sprite-img sprite-anim-${spriteScene}`}
          />
        </div>
      </div>

      {/* ─── PORTAL REACHED OVERLAY ─── */}
      {portalReached && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 animate-in fade-in duration-700">
          <div className="text-center space-y-3">
            <p className="text-emerald-400 font-mono text-2xl sm:text-3xl font-bold tracking-tight">SYSTEM_RESTORED</p>
            <p className="text-[var(--text-secondary)] text-sm">Time: {formatTime(timer)} · Items: {collected.size}/3</p>
            <p className="text-[var(--text-secondary)] text-xs animate-pulse">Redirecting to home port...</p>
          </div>
        </div>
      )}

      {/* ─── KEYBOARD HINT ─── */}
      <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-700 ${showHint ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <div className="hidden sm:flex items-center gap-2 bg-[var(--bg-card)]/90 backdrop-blur border border-[var(--border-color)] px-4 py-2.5 rounded-xl text-xs text-[var(--text-secondary)]">
          <span className="px-2 py-1 bg-[var(--bg-void)] border border-[var(--border-color)] rounded text-[var(--text-primary)] font-bold text-sm">←</span>
          <span className="px-2 py-1 bg-[var(--bg-void)] border border-[var(--border-color)] rounded text-[var(--text-primary)] font-bold text-sm">→</span>
          <span>Move</span>
          <span className="mx-1 opacity-20">·</span>
          <span className="px-2 py-1 bg-[var(--bg-void)] border border-[var(--border-color)] rounded text-[var(--text-primary)] font-bold text-sm">↑</span>
          <span>Jump</span>
          <span className="mx-1 opacity-20">·</span>
          <span>Collect</span>
          <span className="text-[var(--accent-error)] font-bold">4 0 4</span>
          <span className="mx-1 opacity-20">·</span>
          <span>Reach</span>
          <Home size={12} className="text-emerald-400" />
        </div>
      </div>

      <div className="sm:hidden absolute bottom-8 left-0 right-0 z-40 flex justify-between px-8">
        <div className="flex gap-4">
          <button
            className="w-16 h-16 rounded-2xl bg-[var(--bg-card)]/80 backdrop-blur-md border border-[var(--border-color)] flex items-center justify-center active:bg-[var(--accent-error)] active:border-[var(--accent-error)] active:text-black active:scale-95 transition-all touch-none shadow-xl"
            onTouchStart={(e) => { e.preventDefault(); handleMobileInput("ArrowLeft", true); }}
            onTouchEnd={(e) => { e.preventDefault(); handleMobileInput("ArrowLeft", false); }}
            onMouseDown={() => handleMobileInput("ArrowLeft", true)}
            onMouseUp={() => handleMobileInput("ArrowLeft", false)}
            onMouseLeave={() => handleMobileInput("ArrowLeft", false)}
          >
            <ArrowLeft size={28} className="text-[var(--text-primary)]" />
          </button>
          <button
            className="w-16 h-16 rounded-2xl bg-[var(--bg-card)]/80 backdrop-blur-md border border-[var(--border-color)] flex items-center justify-center active:bg-[var(--accent-error)] active:border-[var(--accent-error)] active:text-black active:scale-95 transition-all touch-none shadow-xl"
            onTouchStart={(e) => { e.preventDefault(); handleMobileInput("ArrowRight", true); }}
            onTouchEnd={(e) => { e.preventDefault(); handleMobileInput("ArrowRight", false); }}
            onMouseDown={() => handleMobileInput("ArrowRight", true)}
            onMouseUp={() => handleMobileInput("ArrowRight", false)}
            onMouseLeave={() => handleMobileInput("ArrowRight", false)}
          >
            <ArrowRight size={28} className="text-[var(--text-primary)]" />
          </button>
        </div>
        <button
          className="w-16 h-16 rounded-2xl bg-[var(--bg-card)]/80 backdrop-blur-md border border-[var(--border-color)] flex items-center justify-center active:bg-emerald-500 active:border-emerald-500 active:text-black active:scale-95 transition-all touch-none shadow-xl"
          onTouchStart={(e) => { e.preventDefault(); handleMobileInput("ArrowUp", true); }}
          onTouchEnd={(e) => { e.preventDefault(); handleMobileInput("ArrowUp", false); }}
          onMouseDown={() => handleMobileInput("ArrowUp", true)}
          onMouseUp={() => handleMobileInput("ArrowUp", false)}
          onMouseLeave={() => handleMobileInput("ArrowUp", false)}
        >
          <ArrowUp size={28} className="text-[var(--text-primary)]" />
        </button>
      </div>

      {/* ─── TERMINAL LOG ─── */}
      <div className="hidden sm:block absolute bottom-6 left-6 z-30">
        <div className="font-mono text-[10px] text-[var(--text-secondary)] opacity-40 space-y-0.5">
          <p>&gt; CRITICAL_ERROR: 404_PAGE_NOT_FOUND</p>
          <p>&gt; RECOVERY_MODE: INTERACTIVE</p>
          <p className="text-emerald-400/70">&gt; Collect items and reach HOME_PORT to reboot_</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
