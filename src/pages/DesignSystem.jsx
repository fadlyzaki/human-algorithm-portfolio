import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import DesignSystemViewer from '../components/DesignSystemViewer';
import SEO from '../components/SEO';
import { useTheme } from '../context/ThemeContext';

const DesignSystem = () => {
    const { isDark } = useTheme();

    const themeStyles = {
        '--bg-void': isDark ? '#111111' : '#F0F0F3',
        '--bg-surface': isDark ? '#1F1F1F' : '#FFFFFF',
        '--bg-card': isDark ? '#181818' : '#FFFFFF',
        '--text-primary': isDark ? '#F4F4F5' : '#18181B',
        '--text-secondary': isDark ? '#A1A1AA' : '#52525B',
        '--border-color': isDark ? '#262626' : '#E4E4E7',
        '--accent': isDark ? '#F59E0B' : '#D97706', // Amber for System
    };

    return (
        <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500 selection:bg-[var(--accent)] selection:text-white">
            <SEO
                title="System Diagnostic // Fadlyzaki"
                description="Live design system and component library for the Human Algorithm portfolio."
                image="/og-square.png"
            />
            {/* Navbar for navigation back */}
            <Navbar backPath="/side-project/human-algorithm" title="design_kernel.sys" />

            <main className="pt-24 px-6 md:px-0">
                <DesignSystemViewer />
            </main>
        </div>
    );
};

export default DesignSystem;
