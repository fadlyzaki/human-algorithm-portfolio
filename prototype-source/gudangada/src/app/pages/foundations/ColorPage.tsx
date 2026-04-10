import { useState } from "react";
import CodeBlock from "../../components/CodeBlock";
import { Check } from "lucide-react";

const colorScales = {
  neutral: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
  teal: {
    50: "#F0FDFA",
    100: "#CCFBF1",
    200: "#99F6E4",
    300: "#5EEAD4",
    400: "#2DD4BF",
    500: "#14B8A6",
    600: "#0D9488",
    700: "#0F766E",
    800: "#115E59",
    900: "#134E4A",
  },
  blue: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
  },
  green: {
    50: "#F0FDF4",
    100: "#DCFCE7",
    200: "#BBF7D0",
    300: "#86EFAC",
    400: "#4ADE80",
    500: "#22C55E",
    600: "#16A34A",
    700: "#15803D",
    800: "#166534",
    900: "#14532D",
  },
  yellow: {
    50: "#FEFCE8",
    100: "#FEF9C3",
    200: "#FEF08A",
    300: "#FDE047",
    400: "#FACC15",
    500: "#EAB308",
    600: "#CA8A04",
    700: "#A16207",
    800: "#854D0E",
    900: "#713F12",
  },
  red: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626",
    700: "#B91C1C",
    800: "#991B1B",
    900: "#7F1D1D",
  },
};

const usageExamples = [
  { label: "Primary", color: "teal-600", usage: "Primary actions, links, focus states" },
  { label: "Secondary", color: "blue-600", usage: "Secondary actions, informational elements" },
  { label: "Success", color: "green-600", usage: "Success messages, confirmation states" },
  { label: "Warning", color: "yellow-500", usage: "Warning messages, caution states" },
  { label: "Error", color: "red-600", usage: "Error messages, destructive actions" },
  { label: "Neutral", color: "neutral-600", usage: "Text, borders, backgrounds" },
];

export default function ColorPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Color</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Our color system uses a consistent scale from 50 to 900 across all color families. Teal is our primary brand color, complemented by functional colors for different UI states.
        </p>
      </div>

      {/* Usage Examples */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Usage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {usageExamples.map((example) => (
            <div key={example.label} className="bg-white border border-neutral-200 rounded-lg p-4">
              <div className={`w-full h-16 rounded-lg bg-${example.color} mb-3`} />
              <h3 className="text-sm mb-1">{example.label}</h3>
              <p className="text-xs text-neutral-500">{example.usage}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Color Scales */}
      {Object.entries(colorScales).map(([name, scale]) => (
        <section key={name} className="mb-12">
          <h2 className="text-2xl mb-6 capitalize">{name === "teal" ? `${name} (Primary)` : name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-3">
            {Object.entries(scale).map(([shade, hex]) => (
              <button
                key={shade}
                onClick={() => copyToClipboard(hex)}
                className="group relative bg-white border border-neutral-200 rounded-lg p-3 hover:shadow-md transition-all"
              >
                <div
                  className="w-full h-16 rounded-lg mb-2"
                  style={{ backgroundColor: hex }}
                />
                <div className="text-xs text-neutral-600">{shade}</div>
                <div className="text-xs text-neutral-400 font-mono">{hex}</div>
                {copiedColor === hex && (
                  <div className="absolute inset-0 bg-white/90 rounded-lg flex items-center justify-center">
                    <div className="flex items-center gap-1 text-teal-600 text-sm">
                      <Check className="w-4 h-4" />
                      Copied
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </section>
      ))}

      {/* Design Tokens */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Design Tokens</h2>
        <CodeBlock
          language="json"
          code={`{
  "color": {
    "primary": {
      "50": "#F0FDFA",
      "500": "#14B8A6",
      "600": "#0D9488"
    },
    "neutral": {
      "50": "#F9FAFB",
      "500": "#6B7280",
      "900": "#111827"
    }
  }
}`}
        />
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
                  <li>• Use teal for primary actions and brand elements</li>
                  <li>• Maintain 4.5:1 contrast ratio for text</li>
                  <li>• Use semantic colors (green for success, red for error)</li>
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
                  <li>• Mix color families for the same purpose</li>
                  <li>• Use color as the only way to convey information</li>
                  <li>• Apply bright colors to large background areas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
