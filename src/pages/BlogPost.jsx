import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Tag, Share2, BookOpen, Sun, Moon, Highlighter, Terminal, MessageSquare, ImageIcon } from 'lucide-react';

/* --- THEME CONFIGURATION --- */

const BlogPost = () => {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(0);

  // ... (Data & Effects) ...
  const post = { /*...*/ };

  const themeStyles = { /*...*/ };

  return (
    <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] transition-colors duration-500 font-sans">
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-[var(--bg-surface)]"><div className="h-full bg-[var(--accent-amber)] transition-all duration-100" style={{ width: `${scrolled}%` }}></div></div>

      <nav className="fixed top-0 w-full bg-[var(--bg-void)]/90 backdrop-blur z-40 border-b border-[var(--border-color)] px-6 py-4 flex justify-between items-center transition-colors duration-500">
        <Link to="/" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-xs uppercase tracking-wider group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Return to Terminal</span>
        </Link>
        <div className="flex gap-4">
           <button onClick={() => setIsDark(!isDark)} className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)]">{isDark ? <Sun size={18} /> : <Moon size={18} />}</button>
        </div>
      </nav>

      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        {/* ... (Header, Content) ... */}
        
        <div className="mt-20 pt-12 border-t border-[var(--border-color)] flex justify-between items-center">
           {/* ... (Author) ... */}
           <button className="flex items-center gap-2 px-4 py-2 border border-[var(--border-color)] hover:border-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors font-mono text-xs uppercase"><Share2 size={14} /> Share Protocol</button>
        </div>

        <footer className="mt-16 text-center">
           <p className="font-mono text-xs text-[var(--text-secondary)] uppercase">
             // Fadly Uzzaki © 2025
           </p>
        </footer>
      </main>
    </div>
  );
};
export default BlogPost;