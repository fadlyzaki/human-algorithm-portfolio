import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

                    if (height > 0) {
                        setScrolled((winScroll / height) * 100);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-[var(--bg-surface)]">
            <div
                className="h-full bg-[var(--accent-green)] shadow-[0_0_10px_var(--accent-green)] transition-all duration-75 ease-out"
                style={{ width: `${scrolled}%` }}
            ></div>
        </div>
    );
};

export default ScrollProgressBar;
