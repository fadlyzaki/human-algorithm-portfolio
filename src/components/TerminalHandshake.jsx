import React, { useState, useEffect } from "react";
import { Terminal, Copy, Check } from "lucide-react";

const TerminalHandshake = () => {
    const [stage, setStage] = useState(0);
    // 0 = Idle, 1 = Connecting, 2 = Authenticating, 3 = Revealed
    const [displayText, setDisplayText] = useState("");
    const [copied, setCopied] = useState(false);

    const email = "fadly.uzzaki@gmail.com";

    const handleExecute = () => {
        if (stage !== 0) return;
        setStage(1);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
        if (stage === 1) {
            const text = "init_handshake --secure";
            let i = 0;
            setDisplayText("");
            const typeInterval = setInterval(() => {
                setDisplayText(text.substring(0, i + 1));
                i++;
                if (i >= text.length) {
                    clearInterval(typeInterval);
                    setTimeout(() => setStage(2), 400);
                }
            }, 30);
            return () => clearInterval(typeInterval);
        }

        if (stage === 2) {
            setDisplayText("Auth: OK. Decrypting payload...");
            const timer = setTimeout(() => {
                setStage(3);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [stage]);

    return (
        <div className="inline-block mt-4">
            {stage === 0 ? (
                <button
                    onClick={handleExecute}
                    className="group relative flex items-center gap-3 px-6 py-3 bg-[var(--bg-card)] dark:bg-white/10 border border-[var(--border-color)] dark:border-white/20 hover:border-[var(--brand)] transition-all overflow-hidden rounded-sm backdrop-blur-sm"
                >
                    {/* Animated Background Scan Line */}
                    <div className="absolute inset-0 w-full h-full bg-[var(--brand)]/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    <Terminal size={16} className="text-[var(--text-primary)] group-hover:text-[var(--brand)] transition-colors" />
                    <span className="font-mono text-sm uppercase tracking-widest text-[var(--text-primary)] group-hover:text-[var(--brand)] transition-colors font-semibold">
                        [Execute_Handshake]
                    </span>
                </button>
            ) : (
                <div className="flex flex-col gap-2 min-w-[280px]">
                    <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)]">
                        <span className="text-[var(--brand)]">guest@system:~$</span>
                        <span>
                            {stage === 1 && <span className="text-white">{displayText}<span className="animate-pulse">_</span></span>}
                            {stage === 2 && <span className="text-yellow-400">{displayText}</span>}
                            {stage === 3 && <span className="text-green-400">Connection secure.</span>}
                        </span>
                    </div>

                    {stage === 3 && (
                        <div className="flex items-center justify-between gap-4 mt-2 px-4 py-3 bg-[var(--bg-card)] border border-green-500/30 rounded-sm overflow-hidden relative">
                            <div className="absolute inset-0 bg-green-500/5 pointer-events-none data-noise" />
                            <span className="font-mono text-sm tracking-widest text-white relative z-10 selection:bg-green-500/30">
                                {email}
                            </span>
                            <button
                                onClick={handleCopy}
                                className="relative z-10 p-1.5 hover:bg-white/10 rounded transition-colors"
                                title="Copy to clipboard"
                            >
                                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="text-[var(--text-secondary)] hover:text-white" />}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TerminalHandshake;
