import { useState } from "react";
import CodeBlock from "../../components/CodeBlock";
import { AlertCircle, CheckCircle, Info, X, AlertTriangle } from "lucide-react";

export default function FeedbackPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Feedback</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Feedback components communicate the results of user actions and system states. They help users understand what's happening in the application.
        </p>
      </div>

      {/* Banners */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Banners</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="text-sm text-blue-900 mb-1">Information</h3>
              <p className="text-sm text-blue-700">This is an informational message to help guide the user.</p>
            </div>
            <button className="text-blue-600 hover:text-blue-800">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="text-sm text-green-900 mb-1">Success</h3>
              <p className="text-sm text-green-700">Your action has been completed successfully.</p>
            </div>
            <button className="text-green-600 hover:text-green-800">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="text-sm text-yellow-900 mb-1">Warning</h3>
              <p className="text-sm text-yellow-700">Please review this information before proceeding.</p>
            </div>
            <button className="text-yellow-600 hover:text-yellow-800">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="text-sm text-red-900 mb-1">Error</h3>
              <p className="text-sm text-red-700">An error occurred while processing your request.</p>
            </div>
            <button className="text-red-600 hover:text-red-800">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Snackbar */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Snackbar (Toast)</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <button
            onClick={() => {
              setShowSnackbar(true);
              setTimeout(() => setShowSnackbar(false), 3000);
            }}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            Show Snackbar
          </button>
          {showSnackbar && (
            <div className="mt-6 bg-neutral-900 text-white px-4 py-3 rounded-lg flex items-center justify-between max-w-sm shadow-lg">
              <span className="text-sm">Action completed successfully</span>
              <button
                onClick={() => setShowSnackbar(false)}
                className="text-white hover:text-neutral-300 ml-4"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Tooltip */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Tooltip</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="inline-block relative group">
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg">
              Hover me
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-neutral-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              This is a tooltip
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-neutral-900" />
            </div>
          </div>
        </div>
      </section>

      {/* Dialog */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Dialog (Modal)</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <button
            onClick={() => setShowDialog(true)}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            Open Dialog
          </button>
          {showDialog && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowDialog(false)}>
              <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg">Confirm Action</h3>
                  <button onClick={() => setShowDialog(false)} className="text-neutral-400 hover:text-neutral-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-neutral-600 mb-6">
                  Are you sure you want to perform this action? This cannot be undone.
                </p>
                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => setShowDialog(false)}
                    className="px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowDialog(false)}
                    className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Loading States */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Loading States</h2>
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="flex items-center gap-8">
            <div className="w-8 h-8 border-4 border-neutral-200 border-t-teal-600 rounded-full animate-spin" />
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Code Example</h2>
        <CodeBlock
          code={`// Banner Component
<div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
  <div className="flex-1">
    <h3 className="text-sm text-green-900 mb-1">Success</h3>
    <p className="text-sm text-green-700">Your action completed successfully.</p>
  </div>
  <button className="text-green-600 hover:text-green-800">
    <X className="w-5 h-5" />
  </button>
</div>

// Loading Spinner
<div className="w-8 h-8 border-4 border-neutral-200 border-t-teal-600
                rounded-full animate-spin" />`}
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
                  <li>• Use appropriate severity levels</li>
                  <li>• Provide clear, actionable messages</li>
                  <li>• Auto-dismiss success messages after 3-5s</li>
                  <li>• Include dismiss actions for persistent messages</li>
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
                  <li>• Show multiple banners simultaneously</li>
                  <li>• Use technical jargon in error messages</li>
                  <li>• Auto-dismiss error messages</li>
                  <li>• Block critical actions with modals unnecessarily</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
