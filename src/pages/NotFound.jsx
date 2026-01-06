import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Terminal, Home, RefreshCcw, WifiOff } from 'lucide-react';

/* --- THEME CONFIGURATION --- */

const NotFound = () => {
  const [countdown, setCountdown] = useState(10);
  
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = "/";
    }
  }, [countdown]);

  const styles = { /*...*/ };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 font-mono selection:bg-[#EF4444] selection:text-white" style={{ backgroundColor: styles.background, color: styles.subtext }}>
      <div className="max-w-xl w-full border border-[#333] bg-[#111] p-8 md:p-12 relative shadow-[0_0_50px_rgba(239,68,68,0.1)]">
        {/* ... (Header & Log) ... */}
        
        <div className="flex flex-col sm:flex-row gap-4">
           <Link to="/" className="flex-1 flex items-center justify-center gap-2 bg-[#EF4444] text-black px-6 py-4 font-bold hover:bg-white transition-colors uppercase text-sm group">
             <Home size={16} />
             <span>Initiate Emergency Reboot</span>
           </Link>
           <button onClick={() => window.location.reload()} className="flex-1 flex items-center justify-center gap-2 border border-[#333] text-[#A1A1AA] px-6 py-4 hover:border-[#EF4444] hover:text-[#EF4444] transition-colors uppercase text-sm"><RefreshCcw size={16} /><span>Retry Connection</span></button>
        </div>

        <div className="mt-8 text-center text-xs opacity-40">System will attempt auto-redirect in {countdown}s...</div>
      </div>
    </div>
  );
};
export default NotFound;