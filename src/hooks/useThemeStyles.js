import { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Hook to provide centralized theme colors based on current mode
 * Reduces code duplication across pages
 */
const useThemeStyles = () => {
    const { isDark } = useTheme();
    return useMemo(() => ({
        '--bg-void': isDark ? '#111111' : '#F0F0F3',
        '--bg-surface': isDark ? '#1F1F1F' : '#FFFFFF',
        '--bg-card': isDark ? '#181818' : '#FFFFFF',
        '--text-primary': isDark ? '#F4F4F5' : '#18181B',
        '--text-secondary': isDark ? '#A1A1AA' : '#52525B',
        '--text-card': isDark ? '#18181B' : '#F4F4F5',
        '--text-card-secondary': isDark ? '#52525B' : '#A1A1AA',
        '--border-color': isDark ? '#262626' : '#E4E4E7',
        '--accent-amber': isDark ? '#F59E0B' : '#D97706',
        '--accent-blue': isDark ? '#3B82F6' : '#2563EB',
        '--accent-green': isDark ? '#10B981' : '#059669',
        '--accent-red': isDark ? '#EF4444' : '#DC2626',
    }), [isDark]);
};

export default useThemeStyles;
