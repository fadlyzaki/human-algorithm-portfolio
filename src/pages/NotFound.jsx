import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Terminal, Home, RefreshCcw, WifiOff, Activity } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NotFound = () => {
  const { isDark } = useTheme();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = "/";
    }
  }, [countdown]);

  const themeStyles = {
    '--bg-void': isDark ? '#050505' : '#F9FAFB',
    '--text-primary': isDark ? '#F3F4F6' : '#111827',
    '--text-secondary': isDark ? '#52525B' : '#6B7280',
    '--accent-error': '#EF4444', // Red for Error
  };

  return (
    <div className="min-h-screen flex flex-col font-mono selection:bg-[var(--accent-error)] selection:text-white bg-[var(--bg-void)] transition-colors duration-500" style={themeStyles}>

      {/* MAIN CONTENT CENTERED */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">

        {/* BACKGROUND NOISE */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        <div className="max-w-2xl w-full border border-[var(--accent-error)]/30 bg-[var(--bg-void)] p-8 md:p-12 relative shadow-[0_0_50px_rgba(239,68,68,0.1)] z-10">

          {/* DECORATIVE CORNERS */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--accent-error)]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--accent-error)]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--accent-error)]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--accent-error)]"></div>

          {/* ERROR HEADER */}
          <div className="flex items-center gap-4 mb-8 text-[var(--accent-error)] animate-pulse">
            <AlertTriangle size={32} />
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">KERNEL_PANIC</h1>
          </div>

          {/* TERMINAL ERROR LOG */}
          <div className="font-mono text-xs md:text-sm text-[var(--text-secondary)] mb-12 space-y-2 border-l-2 border-[var(--accent-error)]/20 pl-4 py-2">
            <p className="flex gap-4"><span className="opacity-50">00:00:01</span> <span>CRITICAL_ERROR: 404_PAGE_NOT_FOUND</span></p>
            <p className="flex gap-4"><span className="opacity-50">00:00:02</span> <span>MODULE_MISSING: /requested_url</span></p>
            <p className="flex gap-4"><span className="opacity-50">00:00:03</span> <span>ATTEMPTING_RECOVERY... [FAILED]</span></p>
            <p className="flex gap-4 text-[var(--accent-error)]"><span className="opacity-50">00:00:04</span> <span>SYSTEM_HALTED. PLEASE_REBOOT.</span></p>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/" className="flex-1 flex items-center justify-center gap-2 bg-[var(--accent-error)] text-black px-6 py-4 font-bold hover:bg-white transition-colors uppercase text-sm group tracking-wider">
              <Home size={16} />
              <span>Initiate Emergency Reboot</span>
            </Link>
            <button onClick={() => window.location.reload()} className="flex-1 flex items-center justify-center gap-2 border border-[var(--text-secondary)] text-[var(--text-secondary)] px-6 py-4 hover:border-[var(--accent-error)] hover:text-[var(--accent-error)] transition-colors uppercase text-sm tracking-wider">
              <RefreshCcw size={16} />
              <span>Retry Connection</span>
            </button>
          </div>

          {/* AUTO REDIRECT */}
          <div className="mt-8 pt-6 border-t border-[var(--text-secondary)]/10">
            <div className="flex justify-between text-xs text-[var(--text-secondary)] uppercase tracking-widest mb-2">
              <span>Auto-Redirect Sequence</span>
              <span>{countdown}s</span>
            </div>
            <div className="w-full h-1 bg-[var(--text-secondary)]/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--accent-error)] transition-all duration-1000 ease-linear"
                style={{ width: `${(countdown / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* ERROR CODE OVERLAY */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-[var(--text-primary)] opacity-[0.02] pointer-events-none select-none z-0">
          404
        </div>
      </div>
    </div>
  );
};
export default NotFound;