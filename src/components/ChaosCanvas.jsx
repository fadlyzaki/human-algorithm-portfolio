import React, { useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const ChaosCanvas = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    let animationFrameId;
    let particles = [];

    // Performance optimization: limit particle density on mobile
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 60 : 130;
    const connectionDistance = isMobile ? 130 : 200;
    const mouseRepelRadius = 250;

    let mouse = { x: -1000, y: -1000 };
    let isMouseActive = false;

    // --- PARTICLE LOGIC ---
    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2.5 + 1,
      };
    };

    const updateParticle = (p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      if (isMouseActive) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRepelRadius) {
          const force = (mouseRepelRadius - distance) / mouseRepelRadius;
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const repelStrength = 4;
          p.x -= forceDirectionX * force * repelStrength;
          p.y -= forceDirectionY * force * repelStrength;
        }
      }
    };

    const drawParticle = (p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = isDark
        ? "rgba(255, 255, 255, 0.4)"
        : "rgba(0, 0, 0, 0.2)";
      ctx.fill();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    // --- RENDERING PIPELINE ---
    const resize = () => {
      // Handle high-DPI displays for crisp rendering
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      // CSS Scaling back down
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.scale(dpr, dpr);
      initParticles();
    };

    const animate = () => {
      // Semi-transparent clear creates a slight motion trail effect
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Dynamic Theme Formatting
      const dotOpacity = isDark ? "0.7" : "0.4";
      const lineOpacity = isDark ? 0.35 : 0.2;

      // We read CSS variables via literal RGBA mapping (Assuming white/black scheme)
      const colorAccent = isDark ? [100, 200, 255] : [0, 80, 255]; // Brighter electric blue
      const colorBase = isDark ? [255, 255, 255] : [0, 0, 0];

      ctx.fillStyle = `rgba(${colorBase[0]}, ${colorBase[1]}, ${colorBase[2]}, ${dotOpacity})`;

      for (let i = 0; i < particles.length; i++) {
        updateParticle(particles[i]);
        drawParticle(particles[i]);

        // Draw constellation lines (Data Topology)
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * lineOpacity;
            ctx.beginPath();

            // If near mouse, lines illuminate (accent color)
            const distToMouseI = Math.sqrt(
              Math.pow(particles[i].x - mouse.x, 2) +
              Math.pow(particles[i].y - mouse.y, 2),
            );
            if (isMouseActive && distToMouseI < mouseRepelRadius * 1.5) {
              ctx.strokeStyle = `rgba(${colorAccent[0]}, ${colorAccent[1]}, ${colorAccent[2]}, ${opacity * 1.5})`;
            } else {
              ctx.strokeStyle = `rgba(${colorBase[0]}, ${colorBase[1]}, ${colorBase[2]}, ${opacity})`;
            }

            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // --- EVENT TRIGGERS ---
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isMouseActive = true;
    };

    const handleMouseLeave = () => {
      isMouseActive = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    // Startup Spin
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]); // Re-bind if dark mode is toggled for dynamic coloring

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${isDark ? "opacity-100 mix-blend-screen" : "opacity-100 mix-blend-multiply"}`}
      aria-hidden="true"
    />
  );
};

export default ChaosCanvas;
