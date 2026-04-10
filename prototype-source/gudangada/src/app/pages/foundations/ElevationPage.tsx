import CodeBlock from "../../components/CodeBlock";

const elevationLevels = [
  {
    name: "Level 0",
    value: "none",
    shadow: "none",
    usage: "Flat elements, inline content",
  },
  {
    name: "Level 1",
    value: "sm",
    shadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    usage: "Cards, buttons, slight elevation",
  },
  {
    name: "Level 2",
    value: "md",
    shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    usage: "Dropdowns, popovers, hover states",
  },
  {
    name: "Level 3",
    value: "lg",
    shadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    usage: "Modals, floating panels",
  },
  {
    name: "Level 4",
    value: "xl",
    shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    usage: "Dialogs, overlays, maximum emphasis",
  },
];

export default function ElevationPage() {
  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Elevation</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Elevation creates depth and hierarchy through shadows. Use elevation sparingly to indicate interactive elements and layering relationships.
        </p>
      </div>

      {/* Elevation Levels */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Elevation Levels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {elevationLevels.map((level) => (
            <div key={level.name} className="text-center">
              <div
                className="bg-white rounded-lg p-8 mb-4"
                style={{ boxShadow: level.shadow }}
              >
                <div className="text-4xl text-neutral-300">□</div>
              </div>
              <h3 className="text-sm mb-1">{level.name}</h3>
              <p className="text-xs text-neutral-500">{level.usage}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Example */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Interactive States</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white border border-neutral-200 rounded-lg p-6 mb-3">
                <div className="text-sm text-neutral-700">Default</div>
              </div>
              <p className="text-xs text-neutral-500">No elevation</p>
            </div>
            <div className="text-center">
              <div
                className="bg-white border border-neutral-200 rounded-lg p-6 mb-3 transition-shadow"
                style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="text-sm text-neutral-700">Hover</div>
              </div>
              <p className="text-xs text-neutral-500">Level 2 elevation</p>
            </div>
            <div className="text-center">
              <div
                className="bg-white border border-neutral-200 rounded-lg p-6 mb-3"
                style={{ boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" }}
              >
                <div className="text-sm text-neutral-700">Pressed</div>
              </div>
              <p className="text-xs text-neutral-500">Level 1 elevation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Tokens */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Design Tokens</h2>
        <CodeBlock
          language="json"
          code={`{
  "elevation": {
    "none": "none",
    "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  }
}`}
        />
      </section>

      {/* Implementation */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Implementation</h2>
        <CodeBlock
          code={`// Tailwind CSS
<div className="shadow-md">Card with elevation</div>
<button className="shadow-sm hover:shadow-md transition-shadow">
  Button with hover elevation
</button>

// CSS
.card {
  box-shadow: var(--elevation-md);
}

.card:hover {
  box-shadow: var(--elevation-lg);
}`}
        />
      </section>

      {/* Guidelines */}
      <section>
        <h2 className="text-2xl mb-6">Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-sm mb-2">Do</h3>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>• Use elevation to indicate interactive elements</li>
                  <li>• Increase elevation on hover for buttons and cards</li>
                  <li>• Decrease elevation on press for tactile feedback</li>
                  <li>• Maintain consistent elevation within component types</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm shrink-0 mt-1">
                ✕
              </div>
              <div>
                <h3 className="text-sm mb-2">Don't</h3>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>• Apply heavy shadows to all elements</li>
                  <li>• Mix elevation levels randomly</li>
                  <li>• Use elevation as the only affordance indicator</li>
                  <li>• Create custom shadow values outside the system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
