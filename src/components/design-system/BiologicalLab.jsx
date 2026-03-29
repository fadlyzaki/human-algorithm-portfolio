import { Clock, Users, Activity, ExternalLink } from "lucide-react";

/**
 * BiologicalLab — Design System section documenting Human by Design subsystems
 */
const BiologicalLab = () => {

  const systems = [
    {
      id: "circadian",
      name: "Circadian UI Overlay",
      component: "CircadianOverlay.jsx",
      description:
        "A fixed full-screen overlay that shifts the global color temperature based on the visitor's local time of day. The effect is subconscious and purely ambient.",
      phases: [
        { time: "06:00 – 11:00", label: "Morning", color: "rgba(147, 197, 253, 0.06)", blend: "soft-light" },
        { time: "11:00 – 16:00", label: "Midday", color: "none (null render)", blend: "N/A" },
        { time: "16:00 – 20:00", label: "Golden Hour", color: "rgba(251, 191, 36, 0.05)", blend: "soft-light" },
        { time: "20:00 – 06:00", label: "Night", color: "rgba(99, 102, 241, 0.04)", blend: "color" },
      ],
    },
    {
      id: "typography",
      name: "Breath-Synced Typography",
      component: "useVariableTypography.js",
      description:
        "Modulates --font-weight-dynamic via requestAnimationFrame. Idle/reading mode oscillates between weights 370–410 (4s breathing period). Fast scrolling snaps to 440 for legibility.",
      config: {
        font: "Inter Variable (100–900 continuous axis)",
        idleRange: "370 – 410 wght",
        scanWeight: "440 wght",
        breathPeriod: "4000ms sine wave",
        renderPath: "document.body.style (bypasses React)",
      },
    },
    {
      id: "pacing",
      name: "Adaptive Cognitive Pacing",
      component: "useScrollPacing.js → ChaosCanvas.jsx",
      description:
        "Maps scroll velocity to a pacing multiplier consumed by the ChaosCanvas particle system. Honors reading pauses by slowing background motion.",
      config: {
        idlePace: "0.2x (calm, slow particles)",
        scanPace: "2.0x (energetic, fast particles)",
        velocityRange: "[-2000, 0, 2000] px/s",
        springDamping: "50",
        springStiffness: "400",
      },
    },
    {
      id: "biomimetic",
      name: "Biomimetic Motion",
      component: "VentureCard.jsx via MOTION_CONFIG",
      description:
        "All 5 card archetypes inherit a biological 'breathing' idle animation. Hover engagement overrides breathing with spring physics.",
      config: {
        idleAnimation: "y: [0, -3, 0] (easeInOut)",
        hoverSpring: "stiffness: 300, damping: 20",
        archetypes: "SystemCore (4s), CosmicPop (5s), Brutalist (3.5s), Bento (4.5s), Blueprint (4s)",
      },
    },
  ];

  return (
    <div className="space-y-12">
      <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-2xl">
        The Biological Layer introduces systems that respond to human physiology
        and behavior. These subsystems operate beneath conscious perception,
        creating an environment that feels alive without demanding attention.
      </p>

      {systems.map((system) => (
        <div
          key={system.id}
          className="border border-[var(--border-color)] rounded-lg overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-[var(--border-color)] bg-[var(--bg-surface)]">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                {system.name}
              </h3>
              <span className="font-mono text-[9px] px-2 py-1 border border-[var(--border-color)] rounded text-[var(--text-secondary)] uppercase tracking-widest">
                {system.component}
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {system.description}
            </p>
          </div>

          {/* Phase table (Circadian only) */}
          {system.phases && (
            <div className="p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                    <th className="pb-3 pr-4">Time</th>
                    <th className="pb-3 pr-4">Phase</th>
                    <th className="pb-3 pr-4">Color</th>
                    <th className="pb-3">Blend</th>
                  </tr>
                </thead>
                <tbody>
                  {system.phases.map((phase) => (
                    <tr
                      key={phase.label}
                      className="border-t border-[var(--border-color)]"
                    >
                      <td className="py-3 pr-4 font-mono text-xs text-[var(--text-primary)]">
                        {phase.time}
                      </td>
                      <td className="py-3 pr-4 text-[var(--text-primary)]">
                        {phase.label}
                      </td>
                      <td className="py-3 pr-4 font-mono text-[10px] text-[var(--text-secondary)]">
                        {phase.color}
                      </td>
                      <td className="py-3 font-mono text-[10px] text-[var(--text-secondary)]">
                        {phase.blend}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Config table (other systems) */}
          {system.config && (
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(system.config).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex flex-col gap-1 p-3 border border-[var(--border-color)] rounded bg-[var(--bg-card)]"
                  >
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--accent)]">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                    <span className="text-sm text-[var(--text-primary)]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BiologicalLab;
