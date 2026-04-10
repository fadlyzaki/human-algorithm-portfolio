import CodeBlock from "../../components/CodeBlock";

const spacingScale = [
  { name: "2xs", value: "2px", token: "spacing-2xs", usage: "Minimal spacing, tight layouts" },
  { name: "xs", value: "4px", token: "spacing-xs", usage: "Icon padding, compact elements" },
  { name: "sm", value: "8px", token: "spacing-sm", usage: "Component padding, small gaps" },
  { name: "md", value: "12px", token: "spacing-md", usage: "Default component spacing" },
  { name: "lg", value: "16px", token: "spacing-lg", usage: "Section padding, card spacing" },
  { name: "xl", value: "24px", token: "spacing-xl", usage: "Large gaps, layout spacing" },
  { name: "2xl", value: "32px", token: "spacing-2xl", usage: "Major sections, containers" },
  { name: "3xl", value: "48px", token: "spacing-3xl", usage: "Page sections, hero spacing" },
];

export default function SpacingPage() {
  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Spacing</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Our spacing system provides consistent rhythm and hierarchy across all interfaces. Based on a 4px base unit, the scale grows predictably to maintain visual harmony.
        </p>
      </div>

      {/* Spacing Scale Visual */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Spacing Scale</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="space-y-6">
            {spacingScale.map((space) => (
              <div key={space.name} className="flex items-center gap-6">
                <div className="w-24 text-sm text-neutral-600">{space.name}</div>
                <div
                  className="h-12 bg-teal-500 rounded"
                  style={{ width: space.value }}
                />
                <div className="flex-1 text-sm">
                  <div className="text-neutral-700">{space.value}</div>
                  <div className="text-neutral-400">{space.usage}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
            <div className="bg-neutral-100 px-4 py-2 border-b border-neutral-200">
              <span className="text-xs text-neutral-600">Compact Layout (8px)</span>
            </div>
            <div className="p-2 space-y-2">
              <div className="bg-neutral-200 h-8 rounded" />
              <div className="bg-neutral-200 h-8 rounded" />
              <div className="bg-neutral-200 h-8 rounded" />
            </div>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
            <div className="bg-neutral-100 px-4 py-2 border-b border-neutral-200">
              <span className="text-xs text-neutral-600">Comfortable Layout (16px)</span>
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-neutral-200 h-8 rounded" />
              <div className="bg-neutral-200 h-8 rounded" />
              <div className="bg-neutral-200 h-8 rounded" />
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
  "spacing": {
    "2xs": "2px",
    "xs": "4px",
    "sm": "8px",
    "md": "12px",
    "lg": "16px",
    "xl": "24px",
    "2xl": "32px",
    "3xl": "48px"
  }
}`}
        />
      </section>

      {/* Implementation */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Implementation</h2>
        <CodeBlock
          code={`// Tailwind CSS
<div className="p-4 space-y-4">  {/* 16px padding, 16px gap */}
  <div className="mb-6">           {/* 24px margin bottom */}
    <h2 className="mb-2">Title</h2> {/* 8px margin bottom */}
  </div>
</div>

// CSS Variables
.card {
  padding: var(--spacing-lg);
  gap: var(--spacing-md);
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
                  <li>• Use spacing tokens consistently</li>
                  <li>• Create visual hierarchy with spacing</li>
                  <li>• Group related elements closer together</li>
                  <li>• Use larger spacing for major sections</li>
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
                  <li>• Use arbitrary spacing values</li>
                  <li>• Apply the same spacing everywhere</li>
                  <li>• Create uneven spacing in symmetric layouts</li>
                  <li>• Overcrowd content without breathing room</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
