import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft, Clock, Calendar, Tag, Share2, BookOpen, Sun, Moon,
  Highlighter, Terminal, MessageSquare, ImageIcon, User, Hash, ChevronRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/* --- THEME CONFIGURATION ---
   Aesthetic: "Digital Editorial"
   Focus: Readability, typography overlap, stark contrast.
*/

const BlogPost = () => {
  const { isDark, setIsDark } = useTheme();
  const [scrolled, setScrolled] = useState(0);
  const { id } = useParams();

  // --- MOCK DATABASE ---
  const posts = {
    "future-of-ai": {
      title: "The End of The Screen: Why interfaces are dissolving into ambient computing.",
      subtitle: "We are moving from 'Glassholes' to 'Air-gapped' interactions. Here is what that means for designers.",
      date: "Oct 12, 2025",
      readTime: "8 min read",
      tags: ["Philosophy", "HCI", "Hardware"],
      coverImage: "linear-gradient(45deg, #111, #333)",
      content: [
        {
          type: "paragraph",
          text: "The glass rectangle has been our primary mode of interaction for nearly two decades. From the original iPhone to the latest bezel-less vision, we have been obsessed with 'more pixels'. But the next era of computing isn't about better screens. It's about no screens at all."
        },
        {
          type: "heading",
          text: "The Ambient Era"
        },
        {
          type: "paragraph",
          text: "Imagine a world where the internet isn't a place you go (a phone, a laptop), but a layer on top of reality. This isn't just AR glasses. It's audio-first interfaces, haptic feedback suits for remote workers, and AI agents that negotiate your calendar without you ever opening an app."
        },
        {
          type: "blockquote",
          text: "The best interface is no interface. The best interaction is the one you didn't have to perform."
        },
        {
          type: "paragraph",
          text: "As designers, we are trained to organize buttons on a grid. But how do you design a 'gesture'? How do you design a 'whisper'? The skill set is shifting from Visual Design to Behavioral Choreography."
        },
        {
          type: "code",
          lang: "python",
          code: `def ambient_interaction(user_intent):
    if context.is_busy():
        return haptic_nudge(intensity=0.2)
    else:
        return voice_summary(verbosity="low")`
        },
        {
          type: "paragraph",
          text: "We need to stop thinking in pages and start thinking in flows. The 'User Journey' is no longer a linear path through a sitemap; it's a probabilistic cloud of intent."
        }
      ]
    }
  };

  // Default to the mock post if ID not found
  const post = posts[id] || posts["future-of-ai"];

  // --- SCROLL LISTENER ---
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrolled((winScroll / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themeStyles = {
    '--bg-void': isDark ? '#111111' : '#FFFFFF',
    '--bg-paper': isDark ? '#1F1F1F' : '#F4F4F5',
    '--text-primary': isDark ? '#F4F4F5' : '#18181B',
    '--text-secondary': isDark ? '#A1A1AA' : '#52525B',
    '--accent-color': isDark ? '#F59E0B' : '#D97706', // Amber for editorial feel
    '--border-color': isDark ? '#333' : '#E4E4E7',
  };

  return (
    <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] transition-colors duration-500 font-sans selection:bg-[var(--accent-color)] selection:text-white">

      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-[var(--bg-void)]">
        <div className="h-full bg-[var(--accent-color)] transition-all duration-100 ease-out" style={{ width: `${scrolled}%` }}></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[var(--bg-void)]/90 backdrop-blur z-40 border-b border-[var(--border-color)] px-6 py-4 flex justify-between items-center transition-colors duration-500">
        <Link to="/" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-xs uppercase tracking-wider group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Return to Terminal</span>
        </Link>
        <div className="flex gap-4">
          <button onClick={() => setIsDark(!isDark)} className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6">

        {/* Header */}
        <header className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex gap-3 mb-6">
            {post.tags.map(tag => (
              <span key={tag} className="font-mono text-[10px] uppercase tracking-widest border border-[var(--border-color)] px-2 py-1 rounded text-[var(--text-secondary)]">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8 text-balance">
            {post.title}
          </h1>

          <p className="text-xl text-[var(--text-secondary)] leading-relaxed font-light mb-8 border-l-4 border-[var(--accent-color)] pl-6">
            {post.subtitle}
          </p>

          <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)] font-mono border-y border-[var(--border-color)] py-4">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={14} />
              <span>Fadly Uzzaki</span>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <article className="prose prose-lg md:prose-xl max-w-none">
          {post.content.map((block, i) => {
            switch (block.type) {
              case 'paragraph':
                return (
                  <p key={i} className="mb-8 leading-relaxed text-[var(--text-primary)] font-serif">
                    {block.text}
                  </p>
                );
              case 'heading':
                return (
                  <h2 key={i} className="text-2xl font-bold mt-12 mb-6 font-sans tracking-tight text-[var(--text-primary)] flex items-center gap-3">
                    <Hash size={20} className="text-[var(--accent-color)]" />
                    {block.text}
                  </h2>
                );
              case 'blockquote':
                return (
                  <blockquote key={i} className="my-10 pl-8 italic border-l-4 border-[var(--accent-color)] text-2xl text-[var(--text-primary)] font-serif bg-[var(--bg-paper)] py-6 pr-4 rounded-r-lg relative">
                    <QuoteIcon />
                    "{block.text}"
                  </blockquote>
                );
              case 'code':
                return (
                  <div key={i} className="my-8 rounded-lg overflow-hidden border border-[var(--border-color)] bg-[#0d1117]">
                    <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                      </div>
                      <span className="font-mono text-xs text-gray-400 uppercase">{block.lang}</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-300">
                      <code>{block.code}</code>
                    </pre>
                  </div>
                );
              default:
                return null;
            }
          })}
        </article>

        {/* Footer / Share */}
        <div className="mt-20 pt-12 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-mono text-sm uppercase text-[var(--text-secondary)] mb-1">Written By</h3>
            <div className="font-bold text-lg">Fadly Uzzaki</div>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 border border-[var(--border-color)] hover:border-[var(--accent-color)] text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors font-mono text-xs uppercase tracking-widest group">
            <Share2 size={14} className="group-hover:rotate-12 transition-transform" />
            <span>Share Protocol</span>
          </button>
        </div>

        <Link to="/" className="block mt-12 p-8 bg-[var(--bg-paper)] border border-[var(--border-color)] hover:border-[var(--accent-color)] group transition-colors text-center">
          <h4 className="font-mono text-xs text-[var(--text-secondary)] uppercase mb-2">Next Artifact</h4>
          <div className="text-xl font-bold flex items-center justify-center gap-2">
            Explore System Manifest <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        <footer className="mt-24 text-center">
          <p className="font-mono text-xs text-[var(--text-secondary)] uppercase opacity-50">
             // End of File · Fadly Uzzaki © 2025
          </p>
        </footer>
      </main>
    </div>
  );
};

const QuoteIcon = () => (
  <svg className="absolute top-4 left-2 w-4 h-4 text-[var(--accent-color)] opacity-40 transform -translate-x-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21L14.017 18C14.017 16.896 14.325 15.923 14.941 15.082C15.557 14.242 16.368 13.562 17.373 13.042V11.896C16.89 11.533 16.516 11.233 16.251 10.996C15.987 10.758 15.786 10.51 15.65 10.252C15.514 9.994 15.422 9.71 15.375 9.402C15.328 9.094 15.304 8.762 15.304 8.406C15.304 7.642 15.539 7.002 16.009 6.486C16.48 5.97 17.159 5.712 18.047 5.712C18.897 5.712 19.566 5.966 20.053 6.474C20.539 6.982 20.783 7.658 20.783 8.502C20.783 9.774 20.245 11.138 19.168 12.594C18.09 14.05 16.374 16.85 14.017 21ZM5.017 21L5.017 18C5.017 16.896 5.325 15.923 5.941 15.082C6.557 14.242 7.368 13.562 8.373 13.042V11.896C7.89 11.533 7.516 11.233 7.251 10.996C6.987 10.758 6.786 10.51 6.65 10.252C6.514 9.994 6.422 9.71 6.375 9.402C6.328 9.094 6.304 8.762 6.304 8.406C6.304 7.642 6.539 7.002 7.009 6.486C7.48 5.97 8.159 5.712 9.047 5.712C9.897 5.712 10.566 5.966 11.053 6.474C11.539 6.982 11.783 7.658 11.783 8.502C11.783 9.774 11.245 11.138 10.168 12.594C9.09 14.05 7.374 16.85 5.017 21Z" />
  </svg>
);

export default BlogPost;