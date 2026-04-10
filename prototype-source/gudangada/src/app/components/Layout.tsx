import { Outlet, Link, useLocation } from "react-router";
import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";

const navigation = [
  {
    title: "Foundations",
    items: [
      { title: "Color", path: "/foundations/color" },
      { title: "Typography", path: "/foundations/typography" },
      { title: "Spacing", path: "/foundations/spacing" },
      { title: "Elevation", path: "/foundations/elevation" },
      { title: "Grid", path: "/foundations/grid" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Buttons", path: "/components/buttons" },
      { title: "Forms", path: "/components/forms" },
      { title: "Navigation", path: "/components/navigation" },
      { title: "Feedback", path: "/components/feedback" },
      { title: "Selection Controls", path: "/components/selection-controls" },
      { title: "Data Display", path: "/components/data-display" },
      { title: "Misc", path: "/components/misc" },
    ],
  },
  {
    title: "Patterns",
    items: [{ title: "Layouts & Flows", path: "/patterns" }],
  },
  {
    title: "Guidelines",
    items: [{ title: "Accessibility", path: "/accessibility" }],
  },
  {
    title: "Resources",
    items: [{ title: "Downloads & Tokens", path: "/resources" }],
  },
];

export default function Layout() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-screen bg-neutral-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-neutral-200 flex flex-col">
        <div className="p-6 border-b border-neutral-200">
          <h1 className="text-xl text-teal-600">GudangAda</h1>
          <p className="text-sm text-neutral-500 mt-1">Design System</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          {navigation.map((section) => (
            <div key={section.title} className="mb-6">
              <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-2 px-3">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        location.pathname === item.path
                          ? "bg-teal-50 text-teal-700"
                          : "text-neutral-700 hover:bg-neutral-100"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-neutral-200">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span>Version 2.0.0</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-neutral-200 px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-700 border border-neutral-200 rounded-lg hover:bg-neutral-50">
              v2.0.0
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
