import CodeBlock from "../../components/CodeBlock";

export default function GridPage() {
  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Grid System</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Our grid system provides a flexible foundation for responsive layouts. Use a 12-column grid for desktop and a 4-column grid for mobile devices.
        </p>
      </div>

      {/* Desktop Grid */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Desktop Grid (12 Columns)</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <div className="grid grid-cols-12 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-teal-100 border border-teal-300 rounded p-4 text-center text-xs text-teal-700"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 text-sm text-neutral-600">
          <p>• Max width: 1200px</p>
          <p>• Gutter: 24px (between columns)</p>
          <p>• Margin: 48px (left and right)</p>
        </div>
      </section>

      {/* Mobile Grid */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Mobile Grid (4 Columns)</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-6 max-w-sm">
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-teal-100 border border-teal-300 rounded p-4 text-center text-xs text-teal-700"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 text-sm text-neutral-600">
          <p>• Gutter: 16px (between columns)</p>
          <p>• Margin: 16px (left and right)</p>
        </div>
      </section>

      {/* Layout Examples */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Common Layouts</h2>
        <div className="space-y-6">
          {/* Two Column */}
          <div>
            <h3 className="text-sm text-neutral-600 mb-3">Two Column (6 + 6)</h3>
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 bg-neutral-100 rounded p-6 text-center text-sm text-neutral-600">
                  6 columns
                </div>
                <div className="col-span-6 bg-neutral-100 rounded p-6 text-center text-sm text-neutral-600">
                  6 columns
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Layout */}
          <div>
            <h3 className="text-sm text-neutral-600 mb-3">Sidebar Layout (4 + 8)</h3>
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 bg-neutral-100 rounded p-6 text-center text-sm text-neutral-600">
                  4 columns
                </div>
                <div className="col-span-8 bg-neutral-100 rounded p-6 text-center text-sm text-neutral-600">
                  8 columns
                </div>
              </div>
            </div>
          </div>

          {/* Three Column */}
          <div>
            <h3 className="text-sm text-neutral-600 mb-3">Three Column (4 + 4 + 4)</h3>
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 bg-neutral-100 rounded p-6 text-center text-sm text-neutral-600">
                  4 columns
                </div>
                <div className="col-span-4 bg-neutral-100 rounded p-6 text-center text-sm text-neutral-600">
                  4 columns
                </div>
                <div className="col-span-4 bg-neutral-100 rounded p-6 text-center text-sm text-neutral-600">
                  4 columns
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Implementation</h2>
        <CodeBlock
          code={`// Tailwind CSS - Responsive Grid
<div className="grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-6">
  <div className="col-span-4 md:col-span-6">Left Column</div>
  <div className="col-span-4 md:col-span-6">Right Column</div>
</div>

// CSS Grid
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 0 16px;
  }
}`}
        />
      </section>

      {/* Breakpoints */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Breakpoints</h2>
        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs uppercase text-neutral-600">Breakpoint</th>
                <th className="px-6 py-3 text-left text-xs uppercase text-neutral-600">Min Width</th>
                <th className="px-6 py-3 text-left text-xs uppercase text-neutral-600">Columns</th>
                <th className="px-6 py-3 text-left text-xs uppercase text-neutral-600">Margin</th>
                <th className="px-6 py-3 text-left text-xs uppercase text-neutral-600">Gutter</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              <tr>
                <td className="px-6 py-4 text-sm">Mobile</td>
                <td className="px-6 py-4 text-sm">320px</td>
                <td className="px-6 py-4 text-sm">4</td>
                <td className="px-6 py-4 text-sm">16px</td>
                <td className="px-6 py-4 text-sm">16px</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">Tablet</td>
                <td className="px-6 py-4 text-sm">768px</td>
                <td className="px-6 py-4 text-sm">8</td>
                <td className="px-6 py-4 text-sm">32px</td>
                <td className="px-6 py-4 text-sm">20px</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">Desktop</td>
                <td className="px-6 py-4 text-sm">1024px</td>
                <td className="px-6 py-4 text-sm">12</td>
                <td className="px-6 py-4 text-sm">48px</td>
                <td className="px-6 py-4 text-sm">24px</td>
              </tr>
            </tbody>
          </table>
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
                  <li>• Use the grid system for consistent layouts</li>
                  <li>• Align content to grid columns</li>
                  <li>• Maintain gutters and margins</li>
                  <li>• Stack columns on mobile for readability</li>
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
                  <li>• Create custom grid systems</li>
                  <li>• Ignore responsive breakpoints</li>
                  <li>• Remove gutters between columns</li>
                  <li>• Force narrow content into wide columns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
