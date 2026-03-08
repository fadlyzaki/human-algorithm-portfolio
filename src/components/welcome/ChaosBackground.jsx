import React, { useEffect, useRef } from "react";

const ChaosBackground = ({ phase }) => {
    const canvasRef = useRef(null);
    const animRef = useRef(null);
    const particlesRef = useRef([]);
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const dpr = window.devicePixelRatio || 1;

        const resize = () => {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);
            initParticles();
        };

        const w = () => window.innerWidth;
        const h = () => window.innerHeight;

        const initParticles = () => {
            particlesRef.current = Array.from({ length: 80 }, () => ({
                x: Math.random() * w(),
                y: Math.random() * h(),
                vx: (Math.random() - 0.5) * 2.5,
                vy: (Math.random() - 0.5) * 2.5,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.1,
                hue: Math.random() * 60 + 120, // green-cyan range
            }));
        };

        const animate = () => {
            timeRef.current += 0.016;
            const t = timeRef.current;
            ctx.clearRect(0, 0, w(), h());

            // --- Layer 1: Noise grain ---
            const imgData = ctx.createImageData(w(), h());
            const data = imgData.data;
            for (let i = 0; i < data.length; i += 16) {
                const noise = Math.random() * 18;
                data[i] = noise;
                data[i + 1] = noise + Math.random() * 8;
                data[i + 2] = noise;
                data[i + 3] = 25;
            }
            ctx.putImageData(imgData, 0, 0);

            // --- Layer 2: Pulsing radial glow ---
            const pulse = 0.3 + Math.sin(t * 1.5) * 0.15;
            const gradient = ctx.createRadialGradient(
                w() / 2,
                h() / 2,
                0,
                w() / 2,
                h() / 2,
                Math.max(w(), h()) * 0.6,
            );
            gradient.addColorStop(0, `rgba(var(--accent-green-rgb), ${pulse * 0.12})`);
            gradient.addColorStop(0.4, `rgba(6, 78, 59, ${pulse * 0.08})`);
            gradient.addColorStop(1, "rgba(var(--bg-void-rgb), 0)");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, w(), h());

            // --- Layer 3: Floating particles with trails ---
            const particles = particlesRef.current;
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < -10) p.x = w() + 10;
                if (p.x > w() + 10) p.x = -10;
                if (p.y < -10) p.y = h() + 10;
                if (p.y > h() + 10) p.y = -10;

                const flickerOpacity = p.opacity * (0.6 + Math.sin(t * 3 + i) * 0.4);
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, ${flickerOpacity})`;
                ctx.shadowColor = `hsla(${p.hue}, 90%, 50%, ${flickerOpacity * 0.8})`;
                ctx.shadowBlur = 8;
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        const lineOpacity = (1 - dist / 150) * 0.15;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(var(--accent-green-rgb), ${lineOpacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            ctx.shadowBlur = 0;

            // --- Layer 4: Scanlines ---
            ctx.fillStyle = "rgba(var(--bg-void-rgb), 0.04)";
            for (let y = 0; y < h(); y += 3) {
                ctx.fillRect(0, y, w(), 1);
            }

            // --- Layer 5: Glitch bars ---
            if (Math.random() < 0.03) {
                const glitchY = Math.random() * h();
                const glitchH = Math.random() * 8 + 2;
                ctx.fillStyle = `rgba(var(--accent-green-rgb), ${Math.random() * 0.15})`;
                ctx.fillRect(0, glitchY, w(), glitchH);
            }

            animRef.current = requestAnimationFrame(animate);
        };

        resize();
        animate();
        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
            if (animRef.current) cancelAnimationFrame(animRef.current);
        };
    }, []);

    const isActive = phase === "chaos" || phase === "initializing";

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0"
            style={{
                opacity: isActive ? 1 : 0,
                transition: "opacity 1.5s ease-out",
            }}
        />
    );
};

export default ChaosBackground;
