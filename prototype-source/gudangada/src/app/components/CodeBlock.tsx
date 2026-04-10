import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-neutral-900 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-700">
        <span className="text-xs text-neutral-400">{language}</span>
        <button
          onClick={copyCode}
          className="flex items-center gap-2 text-xs text-neutral-400 hover:text-neutral-200 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-neutral-100 font-mono">{code}</code>
      </pre>
    </div>
  );
}
