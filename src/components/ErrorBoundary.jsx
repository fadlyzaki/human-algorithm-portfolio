import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-black text-red-500 p-8 font-mono text-xs overflow-auto">
                    <h1 className="text-xl font-bold mb-4">SYSTEM_FAILURE</h1>
                    <p className="mb-4">The application crashed due to a runtime error.</p>
                    <div className="bg-red-900/10 border border-red-900 p-4 rounded mb-4">
                        <p className="font-bold">{this.state.error && this.state.error.toString()}</p>
                    </div>
                    <pre className="opacity-50 whitespace-pre-wrap">
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </pre>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
