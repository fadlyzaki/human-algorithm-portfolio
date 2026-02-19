import React, { createContext, useState, useEffect, useContext, useMemo } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Initialize from localStorage or default to true (Dark Mode)
    // Initialize from localStorage or default to system preference
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme !== null) {
            return JSON.parse(savedTheme);
        }
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return true;
        }
        return false;
    });

    // Listen for SYSTEM changes (only if user hasn't overridden)
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (localStorage.getItem('theme') === null) {
                setIsDark(e.matches);
            }
        };

        // Modern browsers
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange);
        } else {
            // Fallback for older browsers
            mediaQuery.addListener(handleChange);
        }

        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handleChange);
            } else {
                mediaQuery.removeListener(handleChange);
            }
        };
    }, []);

    // Apply dark class to document element for Tailwind dark: variants
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    // Toggle and SAVE to localStorage
    const toggleTheme = () => {
        setIsDark(prev => {
            const newValue = !prev;
            localStorage.setItem('theme', JSON.stringify(newValue));
            return newValue;
        });
    };

    const value = useMemo(() => ({ isDark, setIsDark, toggleTheme }), [isDark]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
