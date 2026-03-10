import React, { Suspense, lazy } from "react";
import DesignSystemViewer from "../components/DesignSystemViewer";
import SEO from "../components/SEO";
import { useTheme } from "../context/ThemeContext";
import PageShell from "../components/PageShell";
const ChaosCanvas = lazy(() => import("../components/ChaosCanvas"));

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

      {/* Background Atmosphere */}
      <Suspense fallback={null}>
        <ChaosCanvas />
      </Suspense>

      <PageShell navbarProps={{ backPath: "/side-project/human-algorithm", title: "design_kernel.sys" }}>
        <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-12 md:pt-24 pb-0 border-x border-[var(--border-color)] min-h-screen bg-white/95 dark:bg-black/95 backdrop-blur-md transition-colors duration-500 overflow-x-hidden shadow-2xl">
          <div className="pt-16">
            <DesignSystemViewer />
          </div>
        </main>
      </PageShell>
    </div>
  );
};

export default DesignSystem;
