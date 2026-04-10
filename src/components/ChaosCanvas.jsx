import React, { useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useScrollPacing } from "../hooks/useScrollPacing";

const ChaosCanvas = ({ intensity = 0 }) => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const intensityRef = useRef(intensity);
  const pace = useScrollPacing();

  useEffect(() => {
    intensityRef.current = intensity;
  }, [intensity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    let animationFrameId;
    let particles = [];

    // Performance optimization: limit particle density on mobile to fix INP
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 40 : 85;
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
      const chaos = Math.pow(intensityRef.current / 100, 2);
      
      // Speed multiplier and extreme jitter at high chaos
      p.x += p.vx * (1 + chaos * 15) + (Math.random() - 0.5) * chaos * 30;
      p.y += p.vy * (1 + chaos * 15) + (Math.random() - 0.5) * chaos * 30;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Mouse repel acts wildly at high chaos
      if (isMouseActive) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRepelRadius) {
          const force = (mouseRepelRadius - distance) / mouseRepelRadius;
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const repelStrength = 4 + (chaos * 20); // Mouse repel explodes
          p.x -= forceDirectionX * force * repelStrength;
          p.y -= forceDirectionY * force * repelStrength;
        }
      }
    };

    const drawParticle = (p) => {
      const chaos = Math.pow(intensityRef.current / 100, 2);
      ctx.beginPath();
      // Particles swell in size under chaos
      ctx.arc(p.x, p.y, p.size * (1 + chaos * 2), 0, Math.PI * 2);
      ctx.fillStyle = isDark
        ? `rgba(255, 255, 255, ${0.4 + chaos * 0.4})`
        : `rgba(0, 0, 0, ${0.2 + chaos * 0.6})`;
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
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.scale(dpr, dpr);
      initParticles();
    };

    const animate = () => {
      const currentPace = typeof pace.get === 'function' ? pace.get() : 1;
      const chaos = Math.pow(intensityRef.current / 100, 2);
      
      // At very high chaos, we don't clear the rect fully, leaving intense motion trails
      const clearOpacity = Math.max(0.1, 1 - chaos * 0.8);
      
      if (chaos > 0.8 && Math.random() > 0.8) {
         // Randomly skip clearing to cause massive streaking
      } else {
         ctx.fillStyle = isDark ? `rgba(0,0,0,${clearOpacity})` : `rgba(255,255,255,${clearOpacity})`;
         ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      }

      const dotOpacity = isDark ? 0.7 : 0.4;
      const baseLineOpacity = isDark ? 0.35 : 0.2;
      const lineOpacity = baseLineOpacity + (chaos * 0.4);

      // Color starts glitching (red/amber) at high chaos
      let colorAccent = isDark ? [100, 200, 255] : [0, 80, 255];
      if (chaos > 0.3 && Math.random() < chaos) {
         colorAccent = [255, 50 + Math.random() * 100, 50]; 
      }
      
      const colorBase = isDark ? [255, 255, 255] : [0, 0, 0];
      ctx.fillStyle = `rgba(${colorBase[0]}, ${colorBase[1]}, ${colorBase[2]}, ${dotOpacity})`;

      for (let i = 0; i < particles.length; i++) {
        // Adjust particle speed using currentPace to respond to reading speed (cognitive pacing)
        const cachedVx = particles[i].vx;
        const cachedVy = particles[i].vy;
        particles[i].vx *= currentPace;
        particles[i].vy *= currentPace;
        updateParticle(particles[i]);
        // Restore original velocities for next frame context
        particles[i].vx = cachedVx;
        particles[i].vy = cachedVy;
        drawParticle(particles[i]);

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const sqDistance = dx * dx + dy * dy; // INP Fix: Avoid Math.sqrt here

          // Connection distance increases dramatically under chaos
          const activeConnRes = connectionDistance * (1 + chaos * 1.5);
          const sqRes = activeConnRes * activeConnRes;

          if (sqDistance < sqRes) {
            const distance = Math.sqrt(sqDistance); // Only math.sqrt if strictly necessary
            const opacity = (1 - distance / activeConnRes) * lineOpacity;
            ctx.beginPath();

            const distToMouseI = Math.sqrt(
              Math.pow(particles[i].x - mouse.x, 2) +
              Math.pow(particles[i].y - mouse.y, 2),
            );
            if (isMouseActive && distToMouseI < mouseRepelRadius * (1.5 + chaos)) {
              ctx.strokeStyle = `rgba(${colorAccent[0]}, ${colorAccent[1]}, ${colorAccent[2]}, ${opacity * (1.5 + chaos * 2)})`;
              ctx.lineWidth = 1 + chaos * 2;
            } else {
              // Lines randomly turn red if corrupted
              if (chaos > 0.6 && Math.random() > 0.95) {
                 ctx.strokeStyle = `rgba(255, 0, 0, ${opacity})`;
              } else {
                 ctx.strokeStyle = `rgba(${colorBase[0]}, ${colorBase[1]}, ${colorBase[2]}, ${opacity})`;
              }
              ctx.lineWidth = 1;
            }

            ctx.moveTo(particles[i].x, particles[i].y);
            // Glitchy line drawing at max chaos
            if (chaos > 0.8 && Math.random() > 0.8) {
               ctx.lineTo(particles[j].x + (Math.random()-0.5)*50, particles[j].y + (Math.random()-0.5)*50);
            } else {
               ctx.lineTo(particles[j].x, particles[j].y);
            }
            ctx.stroke();
          }
        }
      }

      if (canvasRef.current && isVisibleRef.current) {
         animationFrameId = requestAnimationFrame(animate);
      }
    };

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

    // INP Optimization: Pause canvas when off-screen
    const isVisibleRef = useRef(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            // Resume if it comes back
            if (!animationFrameId) {
               animate();
            }
          } else {
             if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = undefined;
             }
          }
        });
      },
      { threshold: 0 }
    );

    if (canvas) observer.observe(canvas);
    
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    resize();
    animate();

    return () => {
      if (canvas) observer.unobserve(canvas);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isDark, pace]);

  const chaosFactor = Math.pow(intensity / 100, 2);
  const filterStyle = intensity > 0 
    ? `hue-rotate(${chaosFactor * 90}deg) contrast(${100 + chaosFactor * 100}%) blur(${chaosFactor * 3}px)`
    : "none";
    
  // Shake effect for the entire canvas
  const shakeX = 0;
  const shakeY = 0;

  return (
    <canvas
      ref={canvasRef}
      style={{ filter: filterStyle, transform: `translate(${shakeX}px, ${shakeY}px) scale(${1 + chaosFactor * 0.1})` }}
      className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${isDark ? "opacity-100 mix-blend-screen" : "opacity-100 mix-blend-multiply"}`}
      aria-hidden="true"
    />
  );
};

export default ChaosCanvas;
