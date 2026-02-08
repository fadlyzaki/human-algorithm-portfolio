import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (height > 0) {
                setWidth((winScroll / height) * 100);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Trigger once on mount
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-[var(--bg-surface)]">
            <div
                className="h-full bg-[var(--accent-amber)] shadow-[0_0_10px_var(--accent-amber)]"
                style={{ width: `${width}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
