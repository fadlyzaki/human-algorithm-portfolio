import { Link } from "react-router";
import { Palette, Type, Ruler, Box, Grid3x3, Component, Navigation, AlertCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">GudangAda Design System</h1>
        <p className="text-lg text-neutral-600 max-w-2xl">
          A comprehensive design system providing foundations, components, and guidelines for building consistent, accessible digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <QuickLinkCard
          icon={<Palette className="w-6 h-6" />}
          title="Foundations"
          description="Color palettes, typography, spacing, and core design tokens"
          to="/foundations/color"
        />
        <QuickLinkCard
          icon={<Component className="w-6 h-6" />}
          title="Components"
          description="Reusable UI components with code examples and usage guidelines"
          to="/components/buttons"
        />
        <QuickLinkCard
          icon={<Grid3x3 className="w-6 h-6" />}
          title="Patterns"
          description="Common layout patterns and interaction flows"
          to="/patterns"
        />
        <QuickLinkCard
          icon={<AlertCircle className="w-6 h-6" />}
          title="Accessibility"
          description="WCAG compliance guidelines and best practices"
          to="/accessibility"
        />
        <QuickLinkCard
          icon={<Box className="w-6 h-6" />}
          title="Resources"
          description="Download design tokens, Figma files, and code packages"
          to="/resources"
        />
      </div>

      <div className="border-t border-neutral-200 pt-12">
        <h2 className="text-2xl mb-6">Getting Started</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <h3 className="text-lg mb-2">For Designers</h3>
            <p className="text-neutral-600 text-sm mb-4">
              Use our Figma library with pre-built components, design tokens, and style guides.
            </p>
            <Link
              to="/resources"
              className="text-sm text-teal-600 hover:text-teal-700"
            >
              Download Figma Library →
            </Link>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <h3 className="text-lg mb-2">For Developers</h3>
            <p className="text-neutral-600 text-sm mb-4">
              Install our React component library with built-in Tailwind CSS integration.
            </p>
            <Link
              to="/resources"
              className="text-sm text-teal-600 hover:text-teal-700"
            >
              View Installation Guide →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickLinkCard({ icon, title, description, to }: { icon: React.ReactNode; title: string; description: string; to: string }) {
  return (
    <Link
      to={to}
      className="block bg-white border border-neutral-200 rounded-lg p-6 hover:border-teal-300 hover:shadow-sm transition-all"
    >
      <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg mb-2">{title}</h3>
      <p className="text-sm text-neutral-600">{description}</p>
    </Link>
  );
}
