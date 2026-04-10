import CodeBlock from "../../components/CodeBlock";
import { Check } from "lucide-react";

export default function MiscPage() {
  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Miscellaneous Components</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Additional components that enhance the user experience and provide essential functionality.
        </p>
      </div>

      {/* Loading Indicators */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Loading Indicators</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="flex flex-wrap items-center gap-8">
            <div className="text-center">
              <div className="w-10 h-10 border-4 border-neutral-200 border-t-teal-600 rounded-full animate-spin mx-auto mb-2" />
              <p className="text-xs text-neutral-500">Spinner</p>
            </div>
            <div className="text-center">
              <div className="flex gap-2 mb-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
              <p className="text-xs text-neutral-500">Dots</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-2 bg-neutral-200 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-teal-600 rounded-full animate-pulse" style={{ width: "60%" }} />
              </div>
              <p className="text-xs text-neutral-500">Progress Bar</p>
            </div>
            <div className="text-center">
              <div className="relative w-10 h-10 mx-auto mb-2">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-neutral-200"
                    strokeWidth="3"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-teal-600"
                    strokeWidth="3"
                    strokeDasharray="100"
                    strokeDashoffset="25"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="text-xs text-neutral-500">Circular</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stepper */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Stepper</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center mb-2">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-xs text-teal-600">Account</span>
            </div>
            <div className="flex-1 h-0.5 bg-teal-600 -mx-4" />
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center mb-2">
                2
              </div>
              <span className="text-xs text-teal-600">Details</span>
            </div>
            <div className="flex-1 h-0.5 bg-neutral-200 -mx-4" />
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center mb-2">
                3
              </div>
              <span className="text-xs text-neutral-500">Review</span>
            </div>
            <div className="flex-1 h-0.5 bg-neutral-200 -mx-4" />
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center mb-2">
                4
              </div>
              <span className="text-xs text-neutral-500">Complete</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chips */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Chips</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded-full text-sm">
              <span>Default Chip</span>
              <button className="text-neutral-500 hover:text-neutral-700">
                ×
              </button>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm">
              <span>Primary Chip</span>
              <button className="text-teal-600 hover:text-teal-800">
                ×
              </button>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm">
              <div className="w-4 h-4 rounded-full bg-blue-600" />
              <span>With Icon</span>
              <button className="text-blue-600 hover:text-blue-800">
                ×
              </button>
            </div>
            <button className="inline-flex items-center gap-2 px-3 py-1.5 border border-neutral-300 text-neutral-700 rounded-full text-sm hover:bg-neutral-50">
              Clickable Chip
            </button>
          </div>
        </div>
      </section>

      {/* Avatar */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Avatar</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs mb-2">
                SM
              </div>
              <p className="text-xs text-neutral-500">Small (32px)</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm mb-2">
                MD
              </div>
              <p className="text-xs text-neutral-500">Medium (40px)</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center mb-2">
                LG
              </div>
              <p className="text-xs text-neutral-500">Large (48px)</p>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-sm">
                  ON
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <p className="text-xs text-neutral-500 mt-2">With Badge</p>
            </div>
            <div className="text-center">
              <div className="flex -space-x-2 mb-2">
                <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm border-2 border-white">
                  A
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm border-2 border-white">
                  B
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm border-2 border-white">
                  C
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-300 text-neutral-700 flex items-center justify-center text-xs border-2 border-white">
                  +5
                </div>
              </div>
              <p className="text-xs text-neutral-500">Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Code Example</h2>
        <CodeBlock
          code={`// Spinner
<div className="w-10 h-10 border-4 border-neutral-200 border-t-teal-600
                rounded-full animate-spin" />

// Stepper
<div className="flex items-center">
  <div className="flex flex-col items-center">
    <div className="w-10 h-10 rounded-full bg-teal-600 text-white
                    flex items-center justify-center">
      <Check className="w-5 h-5" />
    </div>
    <span className="text-xs">Step 1</span>
  </div>
  <div className="flex-1 h-0.5 bg-teal-600" />
  <div className="flex flex-col items-center">
    <div className="w-10 h-10 rounded-full bg-neutral-200 text-neutral-500
                    flex items-center justify-center">
      2
    </div>
    <span className="text-xs">Step 2</span>
  </div>
</div>

// Chip
<div className="inline-flex items-center gap-2 px-3 py-1.5
                bg-teal-100 text-teal-700 rounded-full text-sm">
  <span>Tag</span>
  <button>×</button>
</div>

// Avatar
<div className="w-10 h-10 rounded-full bg-teal-600 text-white
                flex items-center justify-center text-sm">
  JD
</div>`}
        />
      </section>

      {/* Guidelines */}
      <section>
        <h2 className="text-2xl mb-6">Usage Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-sm mb-2">Do</h3>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>• Show loading states for async operations</li>
                  <li>• Use steppers for multi-step processes</li>
                  <li>• Use chips for removable tags or filters</li>
                  <li>• Use avatars to represent users or entities</li>
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
                  <li>• Show loading spinners for instant operations</li>
                  <li>• Use steppers for single-page forms</li>
                  <li>• Create non-removable chips</li>
                  <li>• Use avatars without accessible alt text</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
