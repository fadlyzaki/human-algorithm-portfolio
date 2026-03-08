import React, { useState } from "react";
import Navbar from "./Navbar";
import NavigationMenu from "./NavigationMenu";
import { useTheme } from "../context/ThemeContext";

/**
 * PageShell — Shared layout wrapper
 * Encapsulates the Navbar, mobile NavigationMenu, and the global background texture.
 */
const PageShell = ({ children, navbarProps = {}, showTexture = true }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDark } = useTheme();

    return (
        <>
            {/* Background Texture Overlay */}
            {showTexture && (
                <div
                    className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500"
                    style={{
                        backgroundImage: [
                            `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            isDark
                                ? "radial-gradient(circle at 50% 0%, rgba(50,50,50,0.4), rgba(17,17,17,1) 80%)"
                                : "none",
                            `linear-gradient(${isDark ? "var(--bg-void)" : "var(--bg-void)"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "var(--bg-void)" : "var(--bg-void)"} 1px, transparent 1px)`,
                        ].join(", "),
                        backgroundSize: "auto, auto, 40px 40px",
                        opacity: isDark ? 1 : 0.03,
                        mixBlendMode: isDark ? "overlay" : "multiply",
                    }}
                />
            )}

            {/* Global Navigation */}
            <Navbar onOpenMenu={() => setIsMenuOpen(true)} {...navbarProps} />
            <NavigationMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />

            {/* Page Content */}
            {children}
        </>
    );
};

export default PageShell;
