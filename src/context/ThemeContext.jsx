import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Initialize from localStorage or default to true (Dark Mode)
    const [isDark, setIsDark] = useState(() => {
        // 1. Check localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme !== null) {
            return JSON.parse(savedTheme);
        }
        // 2. Check System Preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return true;
        }
        // 3. Default to Light (or Dark if you prefer, but usually match system)
        return false;
    });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(isDark));
        // Optional: Add/remove class from body if using Tailwind dark mode class strategy
        // if (isDark) {
        //   document.documentElement.classList.add('dark');
        // } else {
        //   document.documentElement.classList.remove('dark');
        // }
    }, [isDark]);

    const toggleTheme = () => setIsDark(prev => !prev);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
