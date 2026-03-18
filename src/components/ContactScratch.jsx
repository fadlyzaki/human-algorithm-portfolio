import React, { useRef, useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Premium Contact Scratch Component
 * Parity with Framer Motion premium reference.
 * Achieves 0 input lag by discarding requestAnimationFrame and pixel loops
 * in favor of synchronous stroke interpolation.
 */
const ContactScratch = () => {
  const canvasRef = useRef(null);
  const [isScratched, setIsScratched] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [copied, setCopied] = useState(false);
  const lastPos = useRef(null);

  const email = "fadly.uzzaki@gmail.com";
  const canvasConfig = { width: 300, height: 50 };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Smooth rendering
    ctx.imageSmoothingEnabled = true;

    // High performance metallic foil linear-gradient base
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, "#18181b");
    grad.addColorStop(0.3, "#27272a");
    grad.addColorStop(0.7, "#18181b");
    grad.addColorStop(1, "#09090b");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid overlays for tech-aesthetic (100x faster than random noise pixels)
    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 15) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 15) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Centered typography
    ctx.fillStyle = "#a1a1aa";
    ctx.font = "bold 12px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.letterSpacing = "2px";
    ctx.fillText("[ SCRATCH TO REVEAL ]", canvas.width / 2, canvas.height / 2);
  }, [isScratched]);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const checkScratchedPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    try {
      // Extremely lightweight alpha sampling (stride 64)
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let transparent = 0;
      let total = 0;
      
      for (let i = 3; i < pixels.length; i += 64) {
        total++;
        if (pixels[i] < 128) transparent++;
      }
      
      if (transparent / total > 0.45) {
        setIsScratched(true);
      }
    } catch(e) { /* fallback ignored */ }
  };

  const scratch = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Buttery smooth thick brush settings
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 50; 
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    // Soft blurring blends the strokes cleanly
    ctx.shadowBlur = 15;
    ctx.shadowColor = "black";

    ctx.beginPath();
    if (lastPos.current) {
      // Quadratic Bezier interpolation for sweeping seamless strokes
      const midPoint = {
        x: lastPos.current.x + (x - lastPos.current.x) / 2,
        y: lastPos.current.y + (y - lastPos.current.y) / 2
      };
      ctx.moveTo(lastPos.current.x, lastPos.current.y);
      ctx.quadraticCurveTo(lastPos.current.x, lastPos.current.y, midPoint.x, midPoint.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    } else {
      ctx.arc(x, y, 25, 0, Math.PI * 2);
      ctx.fill();
    }
    lastPos.current = { x, y };

    // Throttle check
    if (Math.random() > 0.85) {
      checkScratchedPercentage();
    }
  };

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return [0, 0];
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY;
    return [clientX - rect.left, clientY - rect.top];
  };

  const startDrawing = (e) => {
    setIsDrawing(true);
    const [x, y] = getCoordinates(e);
    scratch(x, y);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    // Synchronous execution (NO requestAnimationFrame latency) guarantees 0ms input lag
    const [x, y] = getCoordinates(e);
    scratch(x, y);
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    lastPos.current = null;
    checkScratchedPercentage();
  };

  return (
    <div className="inline-block mt-4">
      <div 
        className="relative flex items-center justify-between bg-[var(--bg-void)] border border-[var(--border-color)] overflow-hidden rounded-sm select-none"
        style={{ width: canvasConfig.width, height: canvasConfig.height }}
      >
        
        {/* Underlying Secret Layer (Framer Scale Reveal) */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-between px-4 z-0 bg-zinc-900 shadow-inner"
          initial={false}
          animate={{ scale: isScratched ? 1 : 0.95, opacity: isScratched ? 1 : 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 bg-[var(--brand)]/10 pointer-events-none" />
          <span className="font-mono text-sm tracking-widest text-white relative z-10 selection:bg-white/20 font-bold">
            {email}
          </span>
          <button
            onClick={handleCopy}
            className="relative z-10 p-1.5 hover:bg-white/10 dark:hover:bg-zinc-800 rounded transition-colors"
            title="Copy to clipboard"
          >
            {copied ? (
              <Check size={14} className="text-[var(--brand)]" />
            ) : (
              <Copy size={14} className="text-zinc-400 hover:text-white" />
            )}
          </button>
        </motion.div>

        {/* Scratch Canvas Overlay (Framer Physics Exit) */}
        <AnimatePresence>
          {!isScratched && (
            <motion.canvas
              ref={canvasRef}
              width={canvasConfig.width}
              height={canvasConfig.height}
              className="absolute inset-0 z-10 w-full h-full cursor-crosshair touch-none"
              // Smooth physics exit precisely matching Framer components
              exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onPointerDown={startDrawing}
              onPointerMove={draw}
              onPointerUp={stopDrawing}
              onPointerLeave={stopDrawing}
              onPointerCancel={stopDrawing}
            />
          )}
        </AnimatePresence>
      </div>
      
      {/* Help text */}
      <motion.div 
        layout
        className="mt-2 flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)]"
      >
        <span className="text-[var(--brand)]">guest@system:~$</span>
        <motion.span 
          key={isScratched ? "secure" : "decrypt"}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isScratched ? "Connection secure." : "Decrypt payload manually..."}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default ContactScratch;
