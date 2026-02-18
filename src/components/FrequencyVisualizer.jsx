import React, { useEffect, useRef, useState } from 'react';

const FrequencyVisualizer = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let lastScrollY = window.scrollY;
        let scrollSpeed = 0;
        let time = 0;

        const resize = () => {
            if (containerRef.current && canvas) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                // Double resolution for retina displays
                const dpr = window.devicePixelRatio || 1;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;
            }
        };

        window.addEventListener('resize', resize);
        resize();

        const render = () => {
            if (!canvas || !containerRef.current) return;

            // Calculate scroll speed for "excitement"
            const currentScrollY = window.scrollY;
            const delta = Math.abs(currentScrollY - lastScrollY);
            // Smoothly decay or spike scroll speed
            scrollSpeed = scrollSpeed * 0.9 + delta * 0.1;
            lastScrollY = currentScrollY;

            const width = canvas.width / (window.devicePixelRatio || 1);
            const height = canvas.height / (window.devicePixelRatio || 1);

            // Clear canvas
            ctx.clearRect(0, 0, width, height);

            // Settings
            const barWidth = 4;
            const gap = 2;
            const totalBars = Math.floor(width / (barWidth + gap));

            // Get theme colors from CSS variables (requires computing styles if dynamic, 
            // but for perf we can grab them once or just use a standard color)
            // Let's use the computed style of the container to get the text color
            const computedStyle = getComputedStyle(containerRef.current);
            const color = computedStyle.getPropertyValue('--text-secondary').trim() || '#6B7280';

            ctx.fillStyle = color;

            // Draw bars
            for (let i = 0; i < totalBars; i++) {
                // Base idle wave: A mix of sine waves moving over time
                const idleWave = Math.sin(i * 0.1 + time * 0.05) * Math.cos(i * 0.05 - time * 0.02) * 10;

                // Active wave: Driven by scroll speed
                // Random noise that scales with speed
                const activeNoise = Math.random() * scrollSpeed * 2;

                // Combined height
                // Base height of 4px + idle wave + scroll excitement
                let barHeight = 4 + Math.abs(idleWave) + activeNoise;

                // Clamp height
                barHeight = Math.min(height, Math.max(2, barHeight));

                const x = i * (barWidth + gap);
                // Draw from bottom up
                const y = height - barHeight;

                // Opacity based on height (taller = more opaque)
                const opacity = Math.min(1, 0.2 + (barHeight / height));
                ctx.globalAlpha = opacity;

                ctx.fillRect(x, y, barWidth, barHeight);
            }

            time += 1;
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-24 pointer-events-none select-none opacity-50 mix-blend-screen dark:mix-blend-overlay"
            aria-hidden="true"
        >
            <canvas ref={canvasRef} />
        </div>
    );
};

export default FrequencyVisualizer;
