import React, { useRef, useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

/**
 * ContactScratch — An HTML5 Canvas "Scratch Reveal" component.
 * Allows the user to playfully "scratch" away a metallic foil 
 * layer to reveal the email underneath.
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

    // Give it a metallic/scratch-card look
    ctx.fillStyle = "#1e1e1e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add generative noise for realism
    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < imgData.data.length; i += 4) {
        if (Math.random() > 0.5) {
          const noise = Math.random() * 20;
          imgData.data[i] += noise;
          imgData.data[i + 1] += noise;
          imgData.data[i + 2] += noise;
        }
      }
      ctx.putImageData(imgData, 0, 0);
    } catch (e) {
      // In case getImageData fails in some environments, fallback gracefully
      console.warn("Noise generation skipped", e);
    }

    // Draw grid pattern overlays
    ctx.strokeStyle = "#ffffff08";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 10) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // Draw typography instruction
    ctx.fillStyle = "#888";
    ctx.font = "bold 12px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("[ SCRATCH TO REVEAL ]", canvas.width / 2, canvas.height / 2);
  }, []);

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
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let transparentPixels = 0;
      
      // Iterate over alpha values
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] < 128) {
          transparentPixels++;
        }
      }
      
      const percentage = transparentPixels / (pixels.length / 4);
      // Reveal everything if they scratch more than 45%
      if (percentage > 0.45) {
        setIsScratched(true);
      }
    } catch(e) { /* ignore */ }
  };

  const scratch = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 30;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    if (lastPos.current) {
      ctx.moveTo(lastPos.current.x, lastPos.current.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    } else {
      ctx.arc(x, y, 15, 0, Math.PI * 2);
      ctx.fill();
    }
    lastPos.current = { x, y };
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
      {/* Container ensures sizing identically to canvas overlay */}
      <div 
        className="relative flex items-center justify-between bg-[var(--bg-void)] border border-[var(--border-color)] overflow-hidden rounded-sm select-none"
        style={{ width: canvasConfig.width, height: canvasConfig.height }}
      >
        
        {/* Underlying Secret Layer */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-100 z-0 bg-zinc-900 shadow-inner">
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
        </div>

        {/* Scratch Canvas Overlay */}
        {!isScratched && (
          <canvas
            ref={canvasRef}
            width={canvasConfig.width}
            height={canvasConfig.height}
            // `touch-none` prevents mobile pull-to-refresh & normal scrolling while over canvas
            className={`absolute inset-0 z-10 w-full h-full cursor-crosshair touch-none transition-opacity duration-500`}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            onTouchCancel={stopDrawing}
          />
        )}
      </div>
      
      {/* Help text */}
      <div className="mt-2 flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)]">
        <span className="text-[var(--brand)]">guest@system:~$</span>
        <span>{isScratched ? "Connection secure." : "Decrypt payload manually..."}</span>
      </div>
    </div>
  );
};

export default ContactScratch;
