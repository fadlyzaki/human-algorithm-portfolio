import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import DesignSystemViewer from "../components/DesignSystemViewer";
import SEO from "../components/SEO";
import { useTheme } from "../context/ThemeContext";

const DesignSystem = () => {
  const { isDark } = useTheme();

  // Only page-specific accent override needed — core tokens come from index.css
  const themeStyles = {
    "--accent": isDark ? "some" : "some", // Amber for System
  };

  return (
    <div
      style={themeStyles}
      className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500 selection:bg-[var(--accent)] selection:text-white"
    >
      <SEO
        title="System Diagnostic // Fadlyzaki"
        description="Live design system and component library for the Human Algorithm portfolio."
        image="/og-square.png"
      />
      {/* Navbar for navigation back */}
      <Navbar
        backPath="/side-project/human-algorithm"
        title="design_kernel.sys"
      />

      <main className="pt-[72px]">
        <DesignSystemViewer />
      </main>
    </div>
  );
};

export default DesignSystem;
