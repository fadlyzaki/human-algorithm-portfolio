import { useState, useEffect, useRef } from 'react';

/**
 * Hook to detect scroll direction and determine navbar visibility.
 * Hides navbar on scroll down, shows on scroll up.
 * Respects gesture mode to prevent accidental hiding during interaction.
 * 
 * @param {boolean} isGestureMode - If true, prevents hiding the navbar
 * @returns {boolean} showNav - True if navbar should be visible
 */
const useScrollDirection = (isGestureMode = false) => {
    const [showNav, setShowNav] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Only trigger if difference is substantial to avoid flicker
            if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
                if (currentScrollY > lastScrollY.current && currentScrollY > 50 && !isGestureMode) {
                    setShowNav(false); // Scrolling DOWN -> HIDE
                } else {
                    setShowNav(true);  // Scrolling UP -> SHOW
                }
                lastScrollY.current = currentScrollY;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isGestureMode]);

    return showNav;
};

export default useScrollDirection;
