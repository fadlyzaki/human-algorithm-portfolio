import React from "react";

/**
 * BackgroundTexture  -  Reusable SVG noise overlay
 *
 * Replaces duplicated noise texture blocks across pages
 * (Home, About, CompanyDetail, NotFound, Sketches, etc.)
 *
 * @param {string} position  - CSS position: "fixed" | "absolute" (default: "fixed")
 * @param {number} opacity   - Opacity value (default: 0.05)
 * @param {string} blend     - Mix blend mode for dark/light variants
 * @param {number} frequency - SVG feTurbulence baseFrequency (default: 0.8)
 */
const BackgroundTexture = ({
    position = "fixed",
    opacity = 0.05,
    blend,
    frequency = 0.8,
}) => {
    const blendClass = blend || "mix-blend-overlay";

    return (
        <div
            className={`${position} inset-0 z-0 pointer-events-none opacity-[${opacity}] ${blendClass}`}
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${frequency}' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
        />
    );
};

export default BackgroundTexture;
