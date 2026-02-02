import React from 'react';
import { AlertTriangle, RefreshCw, Home, Copy, Check } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
            copied: false,
            showDetails: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    handleHardRefresh = () => {
        // Clear cache and hard refresh
        if ('caches' in window) {
            caches.keys().then((names) => {
                names.forEach(name => caches.delete(name));
            });
        }
        // Clear localStorage for collection state
        localStorage.removeItem('foundEasterEggs');
        // Force hard reload
        window.location.reload(true);
    };

    handleGoHome = () => {
        window.location.href = '/';
    };

    handleCopyError = () => {
        const errorText = `Error: ${this.state.error?.toString() || 'Unknown error'}\n\nComponent Stack:${this.state.errorInfo?.componentStack || 'N/A'}`;
        navigator.clipboard.writeText(errorText);
        this.setState({ copied: true });
        setTimeout(() => this.setState({ copied: false }), 2000);
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center p-6">
                    <div className="max-w-lg w-full">
                        {/* Error Icon */}
                        <div className="flex justify-center mb-8">
                            <div className="relative">
                                <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center border-2 border-red-500/50 animate-pulse">
                                    <AlertTriangle size={48} className="text-red-500" />
                                </div>
                                <div className="absolute -inset-4 bg-red-500/10 rounded-full blur-xl -z-10"></div>
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl font-mono font-bold text-center mb-4 uppercase tracking-wider text-red-400">
                            System Failure
                        </h1>

                        {/* Description */}
                        <p className="text-gray-400 text-center mb-8 leading-relaxed">
                            Something went wrong. This is usually fixed by refreshing the page.
                        </p>

                        {/* Primary Action - Hard Refresh */}
                        <div className="space-y-4 mb-8">
                            <button
                                onClick={this.handleHardRefresh}
                                className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                            >
                                <RefreshCw size={20} />
                                Hard Refresh Page
                            </button>

                            <button
                                onClick={this.handleGoHome}
                                className="w-full py-3 px-6 border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-mono uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-3"
                            >
                                <Home size={18} />
                                Return to Homepage
                            </button>
                        </div>

                        {/* Manual Refresh Instructions */}
                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6">
                            <p className="font-mono text-sm text-amber-400 mb-2 font-bold">
                                💡 Manual Hard Refresh:
                            </p>
                            <div className="text-amber-200/80 text-sm space-y-1">
                                <p><strong>Mac:</strong> <code className="bg-black/30 px-2 py-0.5 rounded">Cmd + Shift + R</code></p>
                                <p><strong>Windows/Linux:</strong> <code className="bg-black/30 px-2 py-0.5 rounded">Ctrl + Shift + R</code></p>
                            </div>
                        </div>

                        {/* Error Details (Collapsible) */}
                        <div className="border border-gray-700 rounded-xl overflow-hidden">
                            <button
                                onClick={() => this.setState(prev => ({ showDetails: !prev.showDetails }))}
                                className="w-full py-3 px-4 bg-gray-800/50 hover:bg-gray-700/50 transition-colors flex items-center justify-between text-gray-400 text-sm font-mono"
                            >
                                <span>Technical Details</span>
                                <span>{this.state.showDetails ? '▲' : '▼'}</span>
                            </button>

                            {this.state.showDetails && (
                                <div className="p-4 bg-black/50 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <p className="text-red-400 text-xs font-mono break-all flex-1">
                                            {this.state.error && this.state.error.toString()}
                                        </p>
                                        <button
                                            onClick={this.handleCopyError}
                                            className="ml-4 p-2 text-gray-500 hover:text-white transition-colors"
                                            title="Copy error"
                                        >
                                            {this.state.copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                                        </button>
                                    </div>

                                    {this.state.errorInfo && (
                                        <pre className="text-gray-500 text-[10px] font-mono whitespace-pre-wrap max-h-40 overflow-auto bg-gray-900/50 p-3 rounded-lg">
                                            {this.state.errorInfo.componentStack}
                                        </pre>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Footer text */}
                        <p className="text-center text-gray-600 text-xs mt-6 font-mono">
                            If this keeps happening, please contact support.
                        </p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
