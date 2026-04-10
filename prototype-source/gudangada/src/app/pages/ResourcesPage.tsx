import CodeBlock from "../components/CodeBlock";
import { Download, ExternalLink, FileCode, Figma, Package } from "lucide-react";

export default function ResourcesPage() {
  const designTokens = {
    color: {
      primary: {
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
    },
    spacing: {
      "2xs": "2px",
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "48px",
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      fontSize: {
        display: "34px",
        h1: "28px",
        h2: "24px",
        h3: "20px",
        h4: "18px",
        body: "14px",
        caption: "10px",
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Resources & Downloads</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Download design assets, implementation guides, and design tokens to get started with the GudangAda Design System.
        </p>
      </div>

      {/* Quick Links */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Quick Access</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="#figma"
            className="bg-white border border-neutral-200 rounded-lg p-6 hover:border-teal-300 hover:shadow-sm transition-all block"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
              <Figma className="w-6 h-6" />
            </div>
            <h3 className="text-lg mb-2">Figma Library</h3>
            <p className="text-sm text-neutral-600 mb-4">
              Complete component library with design tokens and styles
            </p>
            <div className="flex items-center gap-2 text-teal-600 text-sm">
              View Figma File
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

          <a
            href="#tokens"
            className="bg-white border border-neutral-200 rounded-lg p-6 hover:border-teal-300 hover:shadow-sm transition-all block"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
              <FileCode className="w-6 h-6" />
            </div>
            <h3 className="text-lg mb-2">Design Tokens</h3>
            <p className="text-sm text-neutral-600 mb-4">
              JSON tokens for colors, spacing, typography, and more
            </p>
            <div className="flex items-center gap-2 text-teal-600 text-sm">
              Download JSON
              <Download className="w-4 h-4" />
            </div>
          </a>

          <a
            href="#npm"
            className="bg-white border border-neutral-200 rounded-lg p-6 hover:border-teal-300 hover:shadow-sm transition-all block"
          >
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-lg mb-2">NPM Package</h3>
            <p className="text-sm text-neutral-600 mb-4">
              React component library with TypeScript support
            </p>
            <div className="flex items-center gap-2 text-teal-600 text-sm">
              View on NPM
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        </div>
      </section>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Installation</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg mb-3">React + TailwindCSS</h3>
            <CodeBlock
              language="bash"
              code={`# Install the component library
npm install @gudangada/design-system

# Install peer dependencies
npm install tailwindcss@latest react@^18.0.0`}
            />
          </div>
          <div>
            <h3 className="text-lg mb-3">Usage Example</h3>
            <CodeBlock
              code={`import { Button, Input, Card } from '@gudangada/design-system';
import '@gudangada/design-system/styles.css';

function App() {
  return (
    <Card>
      <Input label="Email" type="email" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}`}
            />
          </div>
        </div>
      </section>

      {/* Design Tokens */}
      <section className="mb-12" id="tokens">
        <h2 className="text-2xl mb-6">Design Tokens (JSON)</h2>
        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
          <div className="bg-neutral-50 border-b border-neutral-200 px-6 py-3 flex items-center justify-between">
            <span className="text-sm text-neutral-600">tokens.json</span>
            <button className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
          <div className="p-6 max-h-96 overflow-y-auto">
            <pre className="text-xs text-neutral-700 font-mono">
              {JSON.stringify(designTokens, null, 2)}
            </pre>
          </div>
        </div>
      </section>

      {/* Figma */}
      <section className="mb-12" id="figma">
        <h2 className="text-2xl mb-6">Figma Resources</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 shrink-0">
              <Figma className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg mb-2">GudangAda Design System Library</h3>
              <p className="text-sm text-neutral-600 mb-4">
                Complete component library with auto-layout, variants, and design tokens. Includes all foundations, components, and usage examples.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.figma.com/@gudangada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in Figma
                </a>
                <button className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 text-sm">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-200 pt-6">
            <h4 className="text-sm mb-3">What's Included</h4>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-neutral-600">
              <li>• All design tokens (colors, spacing, typography)</li>
              <li>• 50+ production-ready components</li>
              <li>• Component variants and states</li>
              <li>• Auto-layout templates</li>
              <li>• Icon library (Lucide Icons)</li>
              <li>• Usage documentation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* GitHub */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">GitHub Repository</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white shrink-0">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg mb-2">Source Code & Documentation</h3>
              <p className="text-sm text-neutral-600 mb-4">
                Access the complete source code, contribute, and report issues on GitHub.
              </p>
              <a
                href="https://github.com/gudangada/design-system"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section>
        <h2 className="text-2xl mb-6">Support & Community</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <h3 className="text-lg mb-2">Documentation</h3>
            <p className="text-sm text-neutral-600 mb-4">
              Comprehensive guides, tutorials, and API references.
            </p>
            <a href="/" className="text-sm text-teal-600 hover:text-teal-700">
              Browse Documentation →
            </a>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <h3 className="text-lg mb-2">Community</h3>
            <p className="text-sm text-neutral-600 mb-4">
              Join our community for support, discussions, and updates.
            </p>
            <a href="#" className="text-sm text-teal-600 hover:text-teal-700">
              Join Slack Channel →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
