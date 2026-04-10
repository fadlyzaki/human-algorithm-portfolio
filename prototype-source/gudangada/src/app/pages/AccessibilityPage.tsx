import CodeBlock from "../components/CodeBlock";

export default function AccessibilityPage() {
  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Accessibility Guidelines</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Building accessible products ensures everyone can use our applications, regardless of their abilities or the technologies they use.
        </p>
      </div>

      {/* WCAG Compliance */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">WCAG 2.1 AA Compliance</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <p className="text-sm text-neutral-600 mb-4">
            Our design system follows WCAG 2.1 Level AA standards to ensure accessible digital experiences. Key principles include:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 rounded-lg p-4">
              <h3 className="text-sm mb-2">Perceivable</h3>
              <p className="text-xs text-neutral-600">
                Information and UI components must be presentable to users in ways they can perceive.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-4">
              <h3 className="text-sm mb-2">Operable</h3>
              <p className="text-xs text-neutral-600">
                UI components and navigation must be operable by all users.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-4">
              <h3 className="text-sm mb-2">Understandable</h3>
              <p className="text-xs text-neutral-600">
                Information and UI operation must be understandable.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-4">
              <h3 className="text-sm mb-2">Robust</h3>
              <p className="text-xs text-neutral-600">
                Content must be robust enough for a wide variety of user agents and assistive technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Contrast */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Color Contrast</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <p className="text-sm text-neutral-600 mb-4">
            Maintain minimum contrast ratios to ensure text readability:
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-neutral-900 text-white rounded-lg">
              <span className="text-base">Normal Text (14px+)</span>
              <span className="text-sm bg-white/10 px-3 py-1 rounded">4.5:1 minimum</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-neutral-900 text-white rounded-lg">
              <span className="text-lg">Large Text (18px+)</span>
              <span className="text-sm bg-white/10 px-3 py-1 rounded">3:1 minimum</span>
            </div>
            <div className="flex items-center justify-between p-4 border-2 border-neutral-900 rounded-lg">
              <span className="text-base">UI Components & Graphics</span>
              <span className="text-sm bg-neutral-100 px-3 py-1 rounded">3:1 minimum</span>
            </div>
          </div>
        </div>
      </section>

      {/* Keyboard Navigation */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Keyboard Navigation</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <p className="text-sm text-neutral-600 mb-4">
            All interactive elements must be keyboard accessible:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs uppercase text-neutral-600">Key</th>
                  <th className="px-4 py-3 text-left text-xs uppercase text-neutral-600">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">Tab</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">Move focus to next interactive element</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">Shift + Tab</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">Move focus to previous interactive element</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">Enter / Space</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">Activate buttons, links, and controls</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">Arrow Keys</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">Navigate within components (tabs, menus, etc.)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono">Esc</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">Close modals, dropdowns, and overlays</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Focus States */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Focus States</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <p className="text-sm text-neutral-600 mb-6">
            Always provide visible focus indicators:
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-teal-600 text-white rounded-lg ring-2 ring-teal-500 ring-offset-2">
              Focused Button
            </button>
            <input
              type="text"
              placeholder="Focused Input"
              className="px-4 py-3 border border-neutral-300 rounded-lg ring-2 ring-teal-500"
            />
            <a href="#" className="px-6 py-3 text-teal-600 rounded-lg ring-2 ring-teal-500 ring-offset-2">
              Focused Link
            </a>
          </div>
        </div>
      </section>

      {/* ARIA Labels */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">ARIA Labels & Landmarks</h2>
        <CodeBlock
          code={`// Button with ARIA label
<button aria-label="Close dialog">
  <X className="w-5 h-5" />
</button>

// Form input with proper labeling
<label htmlFor="email">Email Address</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-describedby="email-help"
/>
<span id="email-help">We'll never share your email</span>

// Navigation landmark
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

// Modal with proper ARIA
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
>
  <h2 id="dialog-title">Confirm Action</h2>
  <p id="dialog-description">Are you sure?</p>
</div>`}
        />
      </section>

      {/* Touch Targets */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Touch Target Size</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <p className="text-sm text-neutral-600 mb-4">
            Ensure all interactive elements meet minimum touch target sizes:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs">
                  ✓
                </div>
                <span className="text-sm">Minimum: 44x44px</span>
              </div>
              <p className="text-xs text-neutral-600">
                WCAG 2.1 Level AAA guideline for touch targets
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                  i
                </div>
                <span className="text-sm">Recommended: 48x48px</span>
              </div>
              <p className="text-xs text-neutral-600">
                Provides better comfort and reduces errors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl mb-6">Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-sm mb-2">Do</h3>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>• Provide text alternatives for images</li>
                  <li>• Use semantic HTML elements</li>
                  <li>• Test with screen readers and keyboard only</li>
                  <li>• Provide clear error messages and instructions</li>
                  <li>• Support browser zoom up to 200%</li>
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
                  <li>• Rely on color alone to convey information</li>
                  <li>• Use vague link text like "click here"</li>
                  <li>• Auto-play media without user control</li>
                  <li>• Remove focus indicators for aesthetics</li>
                  <li>• Create keyboard traps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
