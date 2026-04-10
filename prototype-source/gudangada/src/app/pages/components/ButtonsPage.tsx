import { useState } from "react";
import CodeBlock from "../../components/CodeBlock";
import { Plus, ArrowRight, Download } from "lucide-react";

export default function ButtonsPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Buttons</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Buttons trigger actions and enable user interactions. They communicate calls to action to the user and allow users to interact with pages in a variety of ways.
        </p>
      </div>

      {/* Anatomy */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Anatomy</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="flex items-center gap-4 justify-center">
            <div className="relative inline-flex">
              <button className="px-6 py-3 bg-teal-600 text-white rounded-lg flex items-center gap-2">
                <Download className="w-5 h-5" />
                Button Label
              </button>
              <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-xs text-neutral-500">
                Icon (optional) →
              </div>
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-xs text-neutral-500">
                ← Label
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Variants</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="text-xs text-neutral-500 uppercase tracking-wider">Primary</div>
              <button className="w-full px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                Button
              </button>
            </div>
            <div className="space-y-3">
              <div className="text-xs text-neutral-500 uppercase tracking-wider">Outline</div>
              <button className="w-full px-4 py-3 border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors">
                Button
              </button>
            </div>
            <div className="space-y-3">
              <div className="text-xs text-neutral-500 uppercase tracking-wider">Text</div>
              <button className="w-full px-4 py-3 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                Button
              </button>
            </div>
            <div className="space-y-3">
              <div className="text-xs text-neutral-500 uppercase tracking-wider">Destructive</div>
              <button className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Sizes</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-3 py-1.5 bg-teal-600 text-white rounded-lg text-sm">
              Small
            </button>
            <button className="px-4 py-2.5 bg-teal-600 text-white rounded-lg text-sm">
              Medium
            </button>
            <button className="px-6 py-3 bg-teal-600 text-white rounded-lg">
              Large
            </button>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">States</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="text-xs text-neutral-500 uppercase tracking-wider">Default</div>
              <button className="w-full px-4 py-3 bg-teal-600 text-white rounded-lg">
                Button
              </button>
            </div>
            <div className="space-y-3">
              <div className="text-xs text-neutral-500 uppercase tracking-wider">Hover</div>
              <button className="w-full px-4 py-3 bg-teal-700 text-white rounded-lg shadow-md">
                Button
              </button>
            </div>
            <div className="space-y-3">
              <div className="text-xs text-neutral-500 uppercase tracking-wider">Pressed</div>
              <button className="w-full px-4 py-3 bg-teal-800 text-white rounded-lg">
                Button
              </button>
            </div>
            <div className="space-y-3">
              <div className="text-xs text-neutral-500 uppercase tracking-wider">Disabled</div>
              <button className="w-full px-4 py-3 bg-neutral-300 text-neutral-500 rounded-lg cursor-not-allowed" disabled>
                Button
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* With Icons */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">With Icons</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-3 bg-teal-600 text-white rounded-lg flex items-center gap-2 hover:bg-teal-700 transition-colors">
              <Plus className="w-5 h-5" />
              Add Item
            </button>
            <button className="px-4 py-3 bg-teal-600 text-white rounded-lg flex items-center gap-2 hover:bg-teal-700 transition-colors">
              Continue
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="p-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FAB */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Floating Action Button</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="flex gap-4 items-center">
            <button className="w-14 h-14 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700 transition-all hover:shadow-lg">
              <Plus className="w-6 h-6" />
            </button>
            <button className="px-6 py-4 bg-teal-600 text-white rounded-full flex items-center gap-2 hover:bg-teal-700 transition-all hover:shadow-lg">
              <Plus className="w-5 h-5" />
              New Item
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Playground */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Interactive Playground</h2>
        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
          <div className="border-b border-neutral-200 flex">
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-6 py-3 text-sm transition-colors ${
                activeTab === "preview"
                  ? "text-teal-600 border-b-2 border-teal-600"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-6 py-3 text-sm transition-colors ${
                activeTab === "code"
                  ? "text-teal-600 border-b-2 border-teal-600"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Code
            </button>
          </div>
          <div className="p-8">
            {activeTab === "preview" ? (
              <button className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 active:bg-teal-800 transition-colors">
                Click me
              </button>
            ) : (
              <CodeBlock
                code={`<button className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 active:bg-teal-800 transition-colors">
  Click me
</button>`}
              />
            )}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
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
                  <li>• Use primary buttons for main actions</li>
                  <li>• Keep button labels clear and action-oriented</li>
                  <li>• Maintain adequate touch target size (44x44px minimum)</li>
                  <li>• Use icons to clarify button purpose</li>
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
                  <li>• Use multiple primary buttons in the same context</li>
                  <li>• Write long button labels that wrap</li>
                  <li>• Disable buttons without explanation</li>
                  <li>• Use destructive style for non-destructive actions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
