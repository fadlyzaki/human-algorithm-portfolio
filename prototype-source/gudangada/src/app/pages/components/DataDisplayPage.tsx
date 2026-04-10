import CodeBlock from "../../components/CodeBlock";
import { MoreVertical, ArrowUp, ArrowDown } from "lucide-react";

const tableData = [
  { id: "001", product: "Coffee Beans", category: "Beverages", stock: 1250, status: "In Stock" },
  { id: "002", product: "Rice (5kg)", category: "Grains", stock: 850, status: "In Stock" },
  { id: "003", product: "Cooking Oil", category: "Cooking", stock: 45, status: "Low Stock" },
  { id: "004", product: "Sugar (1kg)", category: "Sweeteners", stock: 0, status: "Out of Stock" },
  { id: "005", product: "Tea Leaves", category: "Beverages", stock: 620, status: "In Stock" },
];

export default function DataDisplayPage() {
  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Data Display</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Data display components organize and present information in structured, scannable formats.
        </p>
      </div>

      {/* Table */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Table</h2>
        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th className="px-6 py-3 text-left">
                  <div className="flex items-center gap-2 text-xs uppercase text-neutral-600">
                    ID
                    <button className="text-neutral-400 hover:text-neutral-600">
                      <ArrowUp className="w-3 h-3" />
                    </button>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs uppercase text-neutral-600">Product</th>
                <th className="px-6 py-3 text-left text-xs uppercase text-neutral-600">Category</th>
                <th className="px-6 py-3 text-left text-xs uppercase text-neutral-600">Stock</th>
                <th className="px-6 py-3 text-left text-xs uppercase text-neutral-600">Status</th>
                <th className="px-6 py-3 text-left text-xs uppercase text-neutral-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {tableData.map((row) => (
                <tr key={row.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-4 text-sm text-neutral-600">{row.id}</td>
                  <td className="px-6 py-4 text-sm text-neutral-900">{row.product}</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">{row.category}</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">{row.stock}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        row.status === "In Stock"
                          ? "bg-green-100 text-green-700"
                          : row.status === "Low Stock"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-neutral-400 hover:text-neutral-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* List Items */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">List Items</h2>
        <div className="bg-white border border-neutral-200 rounded-lg divide-y divide-neutral-200">
          <div className="p-4 hover:bg-neutral-50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                JD
              </div>
              <div>
                <div className="text-sm text-neutral-900">John Doe</div>
                <div className="text-xs text-neutral-500">john.doe@example.com</div>
              </div>
            </div>
            <button className="text-neutral-400 hover:text-neutral-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 hover:bg-neutral-50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                JS
              </div>
              <div>
                <div className="text-sm text-neutral-900">Jane Smith</div>
                <div className="text-xs text-neutral-500">jane.smith@example.com</div>
              </div>
            </div>
            <button className="text-neutral-400 hover:text-neutral-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 hover:bg-neutral-50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                MB
              </div>
              <div>
                <div className="text-sm text-neutral-900">Mike Brown</div>
                <div className="text-xs text-neutral-500">mike.brown@example.com</div>
              </div>
            </div>
            <button className="text-neutral-400 hover:text-neutral-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Divider</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="space-y-4">
            <div>Section Content</div>
            <div className="border-t border-neutral-200" />
            <div>Section Content</div>
            <div className="flex items-center gap-4">
              <div className="flex-1 border-t border-neutral-200" />
              <span className="text-xs text-neutral-500 uppercase">Or</span>
              <div className="flex-1 border-t border-neutral-200" />
            </div>
            <div>Section Content</div>
          </div>
        </div>
      </section>

      {/* Badge */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Badge</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex px-2.5 py-0.5 text-xs rounded-full bg-neutral-100 text-neutral-700">
              Default
            </span>
            <span className="inline-flex px-2.5 py-0.5 text-xs rounded-full bg-teal-100 text-teal-700">
              Primary
            </span>
            <span className="inline-flex px-2.5 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700">
              Info
            </span>
            <span className="inline-flex px-2.5 py-0.5 text-xs rounded-full bg-green-100 text-green-700">
              Success
            </span>
            <span className="inline-flex px-2.5 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-700">
              Warning
            </span>
            <span className="inline-flex px-2.5 py-0.5 text-xs rounded-full bg-red-100 text-red-700">
              Error
            </span>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Code Example</h2>
        <CodeBlock
          code={`// Table Component
<table className="w-full">
  <thead className="bg-neutral-50 border-b border-neutral-200">
    <tr>
      <th className="px-6 py-3 text-left text-xs uppercase text-neutral-600">
        Column
      </th>
    </tr>
  </thead>
  <tbody className="divide-y divide-neutral-200">
    <tr className="hover:bg-neutral-50">
      <td className="px-6 py-4 text-sm">Cell content</td>
    </tr>
  </tbody>
</table>

// Badge
<span className="px-2.5 py-0.5 text-xs rounded-full
                 bg-green-100 text-green-700">
  Active
</span>

// List Item
<div className="p-4 hover:bg-neutral-50 flex items-center gap-4">
  <div className="w-10 h-10 rounded-full bg-teal-100
                  flex items-center justify-center">
    JD
  </div>
  <div>
    <div className="text-sm">John Doe</div>
    <div className="text-xs text-neutral-500">john@example.com</div>
  </div>
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
                  <li>• Use tables for comparing data across columns</li>
                  <li>• Make column headers sortable when appropriate</li>
                  <li>• Use hover states to improve scannability</li>
                  <li>• Align numbers to the right for easy comparison</li>
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
                  <li>• Use tables for layout purposes</li>
                  <li>• Create tables with too many columns</li>
                  <li>• Remove row hover states</li>
                  <li>• Use badges for long descriptive text</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
