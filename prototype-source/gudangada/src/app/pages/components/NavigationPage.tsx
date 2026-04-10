import { useState } from "react";
import CodeBlock from "../../components/CodeBlock";
import { Home, Package, Users, Settings, Menu, X } from "lucide-react";

export default function NavigationPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Navigation</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Navigation components help users move through the application. They provide consistent wayfinding and context awareness.
        </p>
      </div>

      {/* Top Navigation Bar */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Top Navigation Bar</h2>
        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
          <div className="bg-teal-600 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-lg">GudangAda</div>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-sm hover:text-teal-100 transition-colors">Dashboard</a>
                <a href="#" className="text-sm hover:text-teal-100 transition-colors">Products</a>
                <a href="#" className="text-sm hover:text-teal-100 transition-colors">Orders</a>
                <a href="#" className="text-sm hover:text-teal-100 transition-colors">Analytics</a>
              </nav>
            </div>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Tabs</h2>
        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
          <div className="border-b border-neutral-200 flex">
            {["Overview", "Analytics", "Reports", "Settings"].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 text-sm transition-colors ${
                  activeTab === index
                    ? "text-teal-600 border-b-2 border-teal-600"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-6">
            <p className="text-sm text-neutral-600">Content for {["Overview", "Analytics", "Reports", "Settings"][activeTab]} tab</p>
          </div>
        </div>
      </section>

      {/* Bottom Navigation (Mobile) */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Bottom Navigation (Mobile)</h2>
        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden max-w-sm mx-auto">
          <div className="h-64 bg-neutral-50 flex items-center justify-center text-neutral-400">
            App Content
          </div>
          <div className="border-t border-neutral-200 flex justify-around py-2">
            <button className="flex flex-col items-center gap-1 px-4 py-2 text-teal-600">
              <Home className="w-6 h-6" />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 px-4 py-2 text-neutral-500 hover:text-neutral-700">
              <Package className="w-6 h-6" />
              <span className="text-xs">Products</span>
            </button>
            <button className="flex flex-col items-center gap-1 px-4 py-2 text-neutral-500 hover:text-neutral-700">
              <Users className="w-6 h-6" />
              <span className="text-xs">Customers</span>
            </button>
            <button className="flex flex-col items-center gap-1 px-4 py-2 text-neutral-500 hover:text-neutral-700">
              <Settings className="w-6 h-6" />
              <span className="text-xs">Settings</span>
            </button>
          </div>
        </div>
      </section>

      {/* Sidebar Navigation */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Sidebar Navigation</h2>
        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden flex" style={{ height: "320px" }}>
          <div className="w-64 border-r border-neutral-200 p-4">
            <nav className="space-y-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2 bg-teal-50 text-teal-700 rounded-lg">
                <Home className="w-5 h-5" />
                <span className="text-sm">Dashboard</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg">
                <Package className="w-5 h-5" />
                <span className="text-sm">Products</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg">
                <Users className="w-5 h-5" />
                <span className="text-sm">Customers</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg">
                <Settings className="w-5 h-5" />
                <span className="text-sm">Settings</span>
              </a>
            </nav>
          </div>
          <div className="flex-1 p-6 bg-neutral-50">
            <p className="text-sm text-neutral-600">Main content area</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Breadcrumb</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <nav className="flex items-center gap-2 text-sm">
            <a href="#" className="text-neutral-600 hover:text-neutral-900">Home</a>
            <span className="text-neutral-400">/</span>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">Products</a>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-900">Electronics</span>
          </nav>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Code Example</h2>
        <CodeBlock
          code={`// Tabs Component
const [activeTab, setActiveTab] = useState(0);

<div className="border-b border-neutral-200 flex">
  {["Tab 1", "Tab 2", "Tab 3"].map((tab, index) => (
    <button
      key={tab}
      onClick={() => setActiveTab(index)}
      className={\`px-6 py-3 text-sm transition-colors \${
        activeTab === index
          ? "text-teal-600 border-b-2 border-teal-600"
          : "text-neutral-600 hover:text-neutral-900"
      }\`}
    >
      {tab}
    </button>
  ))}
</div>

// Bottom Navigation
<nav className="flex justify-around">
  <button className="flex flex-col items-center gap-1 p-2 text-teal-600">
    <Home className="w-6 h-6" />
    <span className="text-xs">Home</span>
  </button>
</nav>`}
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
                  <li>• Keep navigation consistent across pages</li>
                  <li>• Highlight the current location</li>
                  <li>• Use clear, descriptive labels</li>
                  <li>• Limit top-level navigation items to 5-7</li>
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
                  <li>• Change navigation structure between pages</li>
                  <li>• Use vague labels like "Misc" or "Other"</li>
                  <li>• Disable navigation items without explanation</li>
                  <li>• Hide primary navigation on mobile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
