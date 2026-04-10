import { useState } from "react";
import CodeBlock from "../../components/CodeBlock";
import { Eye, EyeOff, Search, AlertCircle } from "lucide-react";

export default function FormsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Form Inputs</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Form inputs allow users to enter and edit information. They should be clear, accessible, and provide helpful feedback.
        </p>
      </div>

      {/* Text Input */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Text Input</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="max-w-md space-y-6">
            <div>
              <label className="block text-sm mb-2 text-neutral-700">Label</label>
              <input
                type="text"
                placeholder="Placeholder text"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-neutral-700">With Helper Text</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <p className="text-xs text-neutral-500 mt-2">We'll never share your email with anyone else.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Input States */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Input States</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="max-w-md space-y-6">
            <div>
              <label className="block text-sm mb-2 text-neutral-700">Default</label>
              <input
                type="text"
                placeholder="Default state"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-neutral-700">Focused</label>
              <input
                type="text"
                placeholder="Focused state"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg ring-2 ring-teal-500 border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-neutral-700">Disabled</label>
              <input
                type="text"
                placeholder="Disabled state"
                disabled
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg bg-neutral-100 text-neutral-400 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-neutral-700">Error</label>
              <input
                type="text"
                placeholder="Error state"
                className="w-full px-4 py-3 border-2 border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <div className="flex items-center gap-2 mt-2 text-xs text-red-600">
                <AlertCircle className="w-4 h-4" />
                This field is required
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Input with Icon */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Input with Icon</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="max-w-md space-y-6">
            <div>
              <label className="block text-sm mb-2 text-neutral-700">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2 text-neutral-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 pr-10 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Textarea */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Textarea</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="max-w-md">
            <label className="block text-sm mb-2 text-neutral-700">Description</label>
            <textarea
              rows={4}
              placeholder="Enter description..."
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
            />
          </div>
        </div>
      </section>

      {/* Select Dropdown */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Select Dropdown</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="max-w-md">
            <label className="block text-sm mb-2 text-neutral-700">Country</label>
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none bg-white"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: "right 0.5rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
                paddingRight: "2.5rem",
              }}
            >
              <option value="">Select a country</option>
              <option value="id">Indonesia</option>
              <option value="sg">Singapore</option>
              <option value="my">Malaysia</option>
              <option value="th">Thailand</option>
            </select>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Code Example</h2>
        <CodeBlock
          code={`// Text Input with Error State
<div>
  <label className="block text-sm mb-2 text-neutral-700">
    Email
  </label>
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full px-4 py-3 border-2 border-red-500 rounded-lg
               focus:outline-none focus:ring-2 focus:ring-red-500"
  />
  <div className="flex items-center gap-2 mt-2 text-xs text-red-600">
    <AlertCircle className="w-4 h-4" />
    Please enter a valid email address
  </div>
</div>

// Select Dropdown
<select className="w-full px-4 py-3 border border-neutral-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-teal-500">
  <option>Select an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>`}
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
                  <li>• Provide clear, descriptive labels</li>
                  <li>• Show helpful placeholder text</li>
                  <li>• Display validation errors inline</li>
                  <li>• Use appropriate input types (email, tel, etc.)</li>
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
                  <li>• Use placeholder text as labels</li>
                  <li>• Validate before user finishes typing</li>
                  <li>• Show generic error messages</li>
                  <li>• Disable paste functionality</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
