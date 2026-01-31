import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Initialize from localStorage or default to true (Dark Mode)
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : true;
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
