import CodeBlock from "../../components/CodeBlock";

const typeScale = [
  { name: "Display", size: "34px", lineHeight: "40px", weight: "600", usage: "Large headlines, hero text" },
  { name: "Heading 1", size: "28px", lineHeight: "36px", weight: "600", usage: "Page titles" },
  { name: "Heading 2", size: "24px", lineHeight: "32px", weight: "600", usage: "Section titles" },
  { name: "Heading 3", size: "20px", lineHeight: "28px", weight: "600", usage: "Subsection titles" },
  { name: "Heading 4", size: "18px", lineHeight: "24px", weight: "600", usage: "Card titles" },
  { name: "Body Large", size: "16px", lineHeight: "24px", weight: "400", usage: "Large body text" },
  { name: "Body", size: "14px", lineHeight: "20px", weight: "400", usage: "Default body text" },
  { name: "Body Small", size: "12px", lineHeight: "18px", weight: "400", usage: "Small text, captions" },
  { name: "Caption", size: "10px", lineHeight: "16px", weight: "400", usage: "Micro text, labels" },
];

const fontWeights = [
  { name: "Regular", value: "400", usage: "Body text, descriptions" },
  { name: "Medium", value: "500", usage: "Emphasized text, labels" },
  { name: "Semibold", value: "600", usage: "Headings, buttons" },
  { name: "Bold", value: "700", usage: "Strong emphasis" },
];

export default function TypographyPage() {
  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Typography</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Our typography system uses Inter as the primary typeface, providing excellent readability across all screen sizes. The scale follows a consistent rhythm optimized for digital interfaces.
        </p>
      </div>

      {/* Type Scale */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Type Scale</h2>
        <div className="bg-white border border-neutral-200 rounded-lg divide-y divide-neutral-200">
          {typeScale.map((type) => (
            <div key={type.name} className="p-6">
              <div className="flex items-baseline justify-between mb-4">
                <div
                  style={{
                    fontSize: type.size,
                    lineHeight: type.lineHeight,
                    fontWeight: type.weight,
                  }}
                >
                  The quick brown fox jumps
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-neutral-500">
                <span className="font-medium text-neutral-700">{type.name}</span>
                <span>{type.size}</span>
                <span>LH {type.lineHeight}</span>
                <span>Weight {type.weight}</span>
                <span className="text-neutral-400">• {type.usage}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Font Weights */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Font Weights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fontWeights.map((weight) => (
            <div key={weight.name} className="bg-white border border-neutral-200 rounded-lg p-6">
              <div
                className="text-2xl mb-3"
                style={{ fontWeight: weight.value }}
              >
                {weight.name}
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-neutral-500">{weight.value}</span>
                <span className="text-neutral-400">{weight.usage}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Implementation</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg mb-3">CSS Variables</h3>
            <CodeBlock
              language="css"
              code={`:root {
  --font-family: 'Inter', -apple-system, sans-serif;
  --text-display: 34px;
  --text-h1: 28px;
  --text-h2: 24px;
  --text-h3: 20px;
  --text-body: 14px;
  --text-caption: 10px;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}`}
            />
          </div>
          <div>
            <h3 className="text-lg mb-3">React + Tailwind</h3>
            <CodeBlock
              code={`<h1 className="text-[28px] leading-[36px] font-semibold">
  Page Title
</h1>

<p className="text-sm leading-5">
  Body text using default sizing
</p>`}
            />
          </div>
        </div>
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
                  <li>• Use the type scale consistently</li>
                  <li>• Maintain hierarchy with size and weight</li>
                  <li>• Keep line length between 45-75 characters</li>
                  <li>• Use appropriate line height for readability</li>
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
                  <li>• Use multiple typefaces in the same interface</li>
                  <li>• Set body text smaller than 14px</li>
                  <li>• Use all caps for long text blocks</li>
                  <li>• Justify text alignment in narrow columns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
