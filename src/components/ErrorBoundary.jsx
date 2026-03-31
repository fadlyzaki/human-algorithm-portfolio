import React from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="min-h-[100dvh] flex items-center justify-center bg-[var(--bg-void)] p-4 text-[var(--text-primary)]">
          <div className="max-w-md w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            
            <h1 className="text-2xl font-bold mb-2">System Interruption</h1>
            <p className="text-[var(--text-secondary)] mb-8 text-sm leading-relaxed">
              An unexpected error occurred while loading this component. This usually happens after a new deployment.
            </p>
            
            <div className="space-y-3">
              <button
                onClick={this.handleReload}
                className="w-full py-3 px-6 bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-medium"
              >
                <RefreshCw className="w-4 h-4" />
                Reload System
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="w-full py-3 px-6 bg-white/5 hover:bg-white/10 text-[var(--text-primary)] border border-white/10 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-medium"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </button>
            </div>
            
            {this.state.error && (
              <details className="mt-8 text-left group">
                <summary className="text-xs text-[var(--text-secondary)] cursor-pointer hover:text-[var(--text-primary)] transition-colors opacity-50 group-open:opacity-100">
                  Technical Details
                </summary>
                <div className="mt-4 p-4 bg-black/40 rounded-lg border border-white/5 overflow-x-auto">
                  <code className="text-[10px] text-red-400/80 font-mono whitespace-pre-wrap">
                    {this.state.error.toString()}
                  </code>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
