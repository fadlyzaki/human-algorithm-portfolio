import { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * Hook to provide centralized theme colors based on current mode.
 * Now that index.css :root and .dark have been aligned, this hook
 * only needs to provide the accent overrides and card-specific aliases.
 * Core tokens (bg-void, text-primary, etc.) are handled by CSS.
 */
const useThemeStyles = () => {
  const { isDark } = useTheme();
  return useMemo(
    () => ({
      "--accent": isDark ? "#F59E0B" : "#D97706",
      "--text-card": isDark ? "var(--text-primary)" : "var(--text-primary)",
      "--text-card-secondary": isDark
        ? "var(--text-secondary)"
        : "var(--text-secondary)",
    }),
    [isDark],
  );
};

export default useThemeStyles;
