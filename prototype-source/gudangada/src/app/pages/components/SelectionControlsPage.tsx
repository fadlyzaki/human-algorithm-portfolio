import { useState } from "react";
import CodeBlock from "../../components/CodeBlock";

export default function SelectionControlsPage() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [switchValue, setSwitchValue] = useState(false);
  const [segmentedValue, setSegmentedValue] = useState("list");

  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Selection Controls</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Selection controls allow users to select options, toggle settings, and make choices within the interface.
        </p>
      </div>

      {/* Checkbox */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Checkbox</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="w-5 h-5 text-teal-600 border-neutral-300 rounded focus:ring-2 focus:ring-teal-500"
              />
              <span className="text-sm text-neutral-700">Accept terms and conditions</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 text-teal-600 border-neutral-300 rounded focus:ring-2 focus:ring-teal-500"
              />
              <span className="text-sm text-neutral-700">Subscribe to newsletter</span>
            </label>
            <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
              <input
                type="checkbox"
                disabled
                className="w-5 h-5 text-teal-600 border-neutral-300 rounded"
              />
              <span className="text-sm text-neutral-700">Disabled option</span>
            </label>
          </div>
        </div>
      </section>

      {/* Radio Buttons */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Radio Buttons</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="radio-group"
                value="option1"
                checked={radioValue === "option1"}
                onChange={(e) => setRadioValue(e.target.value)}
                className="w-5 h-5 text-teal-600 border-neutral-300 focus:ring-2 focus:ring-teal-500"
              />
              <span className="text-sm text-neutral-700">Option 1</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="radio-group"
                value="option2"
                checked={radioValue === "option2"}
                onChange={(e) => setRadioValue(e.target.value)}
                className="w-5 h-5 text-teal-600 border-neutral-300 focus:ring-2 focus:ring-teal-500"
              />
              <span className="text-sm text-neutral-700">Option 2</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="radio-group"
                value="option3"
                checked={radioValue === "option3"}
                onChange={(e) => setRadioValue(e.target.value)}
                className="w-5 h-5 text-teal-600 border-neutral-300 focus:ring-2 focus:ring-teal-500"
              />
              <span className="text-sm text-neutral-700">Option 3</span>
            </label>
          </div>
        </div>
      </section>

      {/* Switch */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Switch</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer max-w-md">
              <span className="text-sm text-neutral-700">Enable notifications</span>
              <button
                type="button"
                onClick={() => setSwitchValue(!switchValue)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  switchValue ? "bg-teal-600" : "bg-neutral-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    switchValue ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </label>
            <label className="flex items-center justify-between cursor-pointer max-w-md">
              <span className="text-sm text-neutral-700">Auto-save changes</span>
              <button
                type="button"
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-300"
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
              </button>
            </label>
          </div>
        </div>
      </section>

      {/* Segmented Control */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Segmented Control</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="inline-flex bg-neutral-100 rounded-lg p-1">
            <button
              onClick={() => setSegmentedValue("list")}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                segmentedValue === "list"
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              List
            </button>
            <button
              onClick={() => setSegmentedValue("grid")}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                segmentedValue === "grid"
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setSegmentedValue("compact")}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                segmentedValue === "compact"
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Compact
            </button>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Code Example</h2>
        <CodeBlock
          code={`// Checkbox
<label className="flex items-center gap-3 cursor-pointer">
  <input
    type="checkbox"
    className="w-5 h-5 text-teal-600 border-neutral-300 rounded
               focus:ring-2 focus:ring-teal-500"
  />
  <span className="text-sm">Accept terms</span>
</label>

// Switch Component
const [enabled, setEnabled] = useState(false);

<button
  onClick={() => setEnabled(!enabled)}
  className={\`relative inline-flex h-6 w-11 items-center rounded-full
              transition-colors \${enabled ? "bg-teal-600" : "bg-neutral-300"}\`}
>
  <span className={\`inline-block h-4 w-4 rounded-full bg-white
                    transition-transform \${enabled ? "translate-x-6" : "translate-x-1"}\`} />
</button>

// Segmented Control
<div className="inline-flex bg-neutral-100 rounded-lg p-1">
  <button className="px-4 py-2 rounded-lg bg-white shadow-sm">Active</button>
  <button className="px-4 py-2 rounded-lg text-neutral-600">Inactive</button>
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
                  <li>• Use checkboxes for multiple selections</li>
                  <li>• Use radio buttons for single selections</li>
                  <li>• Use switches for on/off settings</li>
                  <li>• Provide clear labels for all controls</li>
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
                  <li>• Use radio buttons for multi-select</li>
                  <li>• Apply immediate destructive actions with switches</li>
                  <li>• Create overly long lists of options</li>
                  <li>• Use selection controls without labels</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
