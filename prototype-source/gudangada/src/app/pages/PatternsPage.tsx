import CodeBlock from "../components/CodeBlock";

export default function PatternsPage() {
  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Patterns & Layouts</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Common layout patterns and interaction flows that solve recurring design challenges in consistent, user-friendly ways.
        </p>
      </div>

      {/* Dashboard Layout */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Dashboard Layout</h2>
        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-6" style={{ height: "400px" }}>
            <div className="col-span-3 bg-neutral-100 rounded-lg p-4">
              <div className="text-xs text-neutral-500 mb-4">Sidebar Navigation</div>
              <div className="space-y-2">
                <div className="h-8 bg-teal-200 rounded" />
                <div className="h-8 bg-neutral-200 rounded" />
                <div className="h-8 bg-neutral-200 rounded" />
                <div className="h-8 bg-neutral-200 rounded" />
              </div>
            </div>
            <div className="col-span-9 space-y-4">
              <div className="h-16 bg-neutral-100 rounded-lg flex items-center px-4">
                <div className="text-xs text-neutral-500">Header / Search Bar</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-24 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-neutral-500">Metric Card</div>
                </div>
                <div className="h-24 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-neutral-500">Metric Card</div>
                </div>
                <div className="h-24 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-neutral-500">Metric Card</div>
                </div>
              </div>
              <div className="h-40 bg-neutral-100 rounded-lg flex items-center justify-center">
                <div className="text-xs text-neutral-500">Main Content / Chart</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* List-Detail Pattern */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">List-Detail Pattern</h2>
        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
          <div className="grid grid-cols-12 gap-0" style={{ height: "320px" }}>
            <div className="col-span-4 border-r border-neutral-200 overflow-y-auto">
              <div className="divide-y divide-neutral-200">
                <div className="p-4 bg-teal-50 border-l-4 border-teal-600">
                  <div className="text-sm mb-1">Item Title 1</div>
                  <div className="text-xs text-neutral-500">Preview text...</div>
                </div>
                <div className="p-4 hover:bg-neutral-50">
                  <div className="text-sm mb-1">Item Title 2</div>
                  <div className="text-xs text-neutral-500">Preview text...</div>
                </div>
                <div className="p-4 hover:bg-neutral-50">
                  <div className="text-sm mb-1">Item Title 3</div>
                  <div className="text-xs text-neutral-500">Preview text...</div>
                </div>
                <div className="p-4 hover:bg-neutral-50">
                  <div className="text-sm mb-1">Item Title 4</div>
                  <div className="text-xs text-neutral-500">Preview text...</div>
                </div>
              </div>
            </div>
            <div className="col-span-8 p-6">
              <div className="h-full bg-neutral-50 rounded-lg flex items-center justify-center">
                <div className="text-xs text-neutral-500">Detail View Content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Layout */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Form Layout</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <h3 className="text-lg mb-4">Account Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-12 bg-neutral-100 rounded-lg flex items-center px-4">
                  <span className="text-xs text-neutral-500">First Name</span>
                </div>
                <div className="h-12 bg-neutral-100 rounded-lg flex items-center px-4">
                  <span className="text-xs text-neutral-500">Last Name</span>
                </div>
              </div>
            </div>
            <div>
              <div className="h-12 bg-neutral-100 rounded-lg flex items-center px-4">
                <span className="text-xs text-neutral-500">Email</span>
              </div>
            </div>
            <div className="border-t border-neutral-200 pt-6">
              <h3 className="text-lg mb-4">Company Details</h3>
              <div className="space-y-4">
                <div className="h-12 bg-neutral-100 rounded-lg flex items-center px-4">
                  <span className="text-xs text-neutral-500">Company Name</span>
                </div>
                <div className="h-24 bg-neutral-100 rounded-lg flex items-start p-4">
                  <span className="text-xs text-neutral-500">Address</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-end pt-4">
              <div className="h-10 w-24 bg-neutral-200 rounded-lg flex items-center justify-center">
                <span className="text-xs text-neutral-500">Cancel</span>
              </div>
              <div className="h-10 w-24 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-xs text-white">Save</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empty State */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Empty State Pattern</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-12">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-neutral-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="text-2xl text-neutral-400">📭</div>
            </div>
            <h3 className="text-lg mb-2">No items yet</h3>
            <p className="text-sm text-neutral-600 mb-6">
              Get started by creating your first item. It only takes a few seconds.
            </p>
            <button className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
              Create New Item
            </button>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Implementation Example</h2>
        <CodeBlock
          code={`// Dashboard Layout with Sidebar
<div className="flex h-screen">
  {/* Sidebar */}
  <aside className="w-64 bg-white border-r">
    <nav className="p-4">
      {/* Navigation items */}
    </nav>
  </aside>

  {/* Main Content */}
  <main className="flex-1 overflow-auto">
    <header className="bg-white border-b p-4">
      {/* Header content */}
    </header>

    <div className="p-6">
      {/* Dashboard content */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Metric cards */}
      </div>

      {/* Main chart or table */}
    </div>
  </main>
</div>

// Empty State Pattern
<div className="text-center p-12">
  <div className="w-16 h-16 bg-neutral-100 rounded-full mx-auto mb-4">
    📭
  </div>
  <h3 className="text-lg mb-2">No items yet</h3>
  <p className="text-neutral-600 mb-6">
    Get started by creating your first item.
  </p>
  <button className="px-6 py-3 bg-teal-600 text-white rounded-lg">
    Create Item
  </button>
</div>`}
        />
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
                  <li>• Use consistent patterns across the application</li>
                  <li>• Prioritize content hierarchy in layouts</li>
                  <li>• Provide empty states with clear actions</li>
                  <li>• Make layouts responsive and adaptive</li>
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
                  <li>• Create unique layouts for every page</li>
                  <li>• Overcomplicate simple interactions</li>
                  <li>• Show empty content without explanation</li>
                  <li>• Force desktop layouts on mobile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
