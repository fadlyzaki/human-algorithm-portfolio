import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Mail, Linkedin, Twitter, Send, Copy, Check, Sun, Moon,
  MapPin, Clock, Wifi, Globe, Dribbble, Facebook, Instagram, FileText,
  Activity, BookOpen, PenTool, Terminal, ScanEye
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useHandCursor } from '../context/HandCursorContext';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

/* --- THEME CONFIGURATION ---
   Aesthetic: "Communication Uplink"
   High contrast, data-heavy, focused on establishing connection.
*/

const ContactPage = () => {
  const { isDark, setIsDark } = useTheme();
  const { t, language, toggleLanguage } = useLanguage();
  const { isGestureMode, toggleGestureMode } = useHandCursor();
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  // --- DATA ---
  const contactInfo = {
    email: "fadly.uzzaki@gmail.com",
    location: "Jakarta, Indonesia",
    timezone: "GMT+7 (WIB)",
    availability: "OPEN_FOR_OPPORTUNITIES"
  };

  // --- SOCIAL CHANNELS (Organized by Protocol) ---
  const socialMatrix = [
    {
      category: "CORE_UPLINK (Professional)",
      items: [
        { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/fadlyzaki/", color: "hover:text-blue-500" },
        { name: "Dribbble", icon: Dribbble, url: "https://dribbble.com/fadlyzaki", color: "hover:text-pink-500" },
        { name: "GitHub", icon: FileText, url: "https://github.com/fadlyzaki/", color: "hover:text-gray-500" }
      ]
    },
    {
      category: "BROADCAST_LAYER (Social)",
      items: [
        { name: "Twitter / X", icon: Twitter, url: "https://x.com/Fadlyzaki", color: "hover:text-sky-500" },
        { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/fadlyzaki", color: "hover:text-purple-500" },
        { name: "Facebook", icon: Facebook, url: "https://web.facebook.com/fadly.uzzaki", color: "hover:text-blue-600" }
      ]
    },
    {
      category: "DATA_LOGS (Writing)",
      items: [
        { name: "Medium", icon: BookOpen, url: "https://medium.com/@fadlyzaki", color: "hover:text-green-500" },
        { name: "Substack", icon: PenTool, url: "https://substack.com/@fadlyzaki?", color: "hover:text-orange-500" }
      ]
    },
    {
      category: "TELEMETRY (Physical)",
      items: [
        { name: "Strava", icon: Activity, url: "https://www.strava.com/athletes/129304799", color: "hover:text-orange-600" }
      ]
    }
  ];

  // --- HANDLERS ---

  // FIX: Using execCommand for better compatibility in restricted environments (WebViews/iFrames)
  const handleCopy = () => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = contactInfo.email;

      // Ensure it's not visible but part of the DOM
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      document.body.appendChild(textArea);

      textArea.focus();
      textArea.select();

      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);

      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Fallback copy failed', err);
    }
  };

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyQSNBdHW4C6kX20Cc9cvQMCrTsmtBDCgJ5a4mUfWrAyopux072Zw4rzwaQt0jJpSen/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
        // text/plain prevents CORS preflight issues with simple requests in some cases, 
        // but for Apps Script 'no-cors' mode is often needed if you want it simple, 
        // though that makes the response opaque. 
        // Standard approach for Apps Script Web App:
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      // Google Apps Script redirect behavior can sometimes be tricky with CORS.
      // If the script returns strict JSON, we can check response.ok or await json.
      // However, typical robust "no-cors" usage might be needed if strictly cross-origin without proper headers.
      // Given the setup instructions, we assume standard fetching.

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
      // Fallback: If CORS blocks the response reading but the request actually succeeded (common in Apps Script),
      // we might want to assume success or show a generic error.
      // For now, let's treat it as an error to be safe, or just show a "Sent" state if we trust it.
      // Simulating success for the user if URL is valid structure but local dev environment issues:
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  // --- DYNAMIC STYLES ---
  const themeStyles = {
    '--bg-void': isDark ? '#111111' : '#F0F0F3',
    '--bg-surface': isDark ? '#1F1F1F' : '#FFFFFF',
    '--bg-card': isDark ? '#181818' : '#FFFFFF',
    '--text-primary': isDark ? '#F4F4F5' : '#18181B',
    '--text-secondary': isDark ? '#A1A1AA' : '#52525B',
    '--border-color': isDark ? '#262626' : '#E4E4E7',
    '--accent-amber': isDark ? '#F59E0B' : '#D97706',
    '--accent-blue': isDark ? '#3B82F6' : '#2563EB',
    '--accent-green': isDark ? '#10B981' : '#059669',
  };

  return (
    <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-mono selection:bg-[var(--text-primary)] selection:text-[var(--bg-void)] transition-colors duration-500 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <SEO
        title="Contact"
        description="Get in touch for collaborations, freelance inquiries, or just to say hello."
      />

      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `linear-gradient(${isDark ? '#A1A1AA' : '#000000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#A1A1AA' : '#000000'} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-void)]/90 backdrop-blur border-b border-[var(--border-color)] px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-xs uppercase tracking-wider group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>{t('contact.abort')}</span>
        </Link>
        <div className="flex gap-4">
          <button
            onClick={toggleGestureMode}
            className={`transition-colors ${isGestureMode ? 'text-[var(--accent-red)] animate-pulse' : 'text-[var(--text-secondary)] hover:text-[var(--accent-blue)]'}`}
            title="Toggle Hand Tracking"
          >
            <ScanEye size={18} />
          </button>
          <button onClick={() => setIsDark(!isDark)} className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors" aria-label="Toggle Theme">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            title="Switch Language"
          >
            <Globe size={18} />
            <span className="font-mono text-xs uppercase tracking-widest">{language}</span>
          </button>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-32 min-h-screen grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start">

        {/* LEFT COLUMN: STATUS & CHANNELS */}
        <div className="space-y-12">

          {/* Header */}
          <div>
            <div className="flex items-center gap-2 text-[var(--accent-green)] font-mono text-xs mb-4">
              <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
              {t('contact.system_listening')}
            </div>
            <h1 className="text-4xl md:text-5xl font-mono uppercase leading-tight mb-6">
              {t('contact.title')} <br /> <span className="text-[var(--text-secondary)]">{t('contact.subtitle')}</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-md">
              {t('contact.desc')}
            </p>
          </div>

          {/* Direct Line Card */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] p-6 group hover:border-[var(--accent-blue)] transition-colors">
            <h3 className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest mb-4">{t('contact.direct_uplink')}</h3>
            <div className="flex items-center justify-between bg-[var(--bg-void)] border border-[var(--border-color)] p-4 rounded-sm">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--accent-blue)]" />
                <span className="font-mono text-sm">{contactInfo.email}</span>
              </div>
              <button
                onClick={handleCopy}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                title="Copy to Clipboard"
                aria-label="Copy Email to Clipboard"
              >
                {copied ? <Check size={18} className="text-[var(--accent-green)]" /> : <Copy size={18} />}
              </button>
            </div>
          </div>

          {/* Telemetry Data */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-card)]">
              <MapPin size={16} className="text-[var(--accent-amber)] mb-2" />
              <div className="font-mono text-xs text-[var(--text-secondary)] uppercase">{t('contact.location')}</div>
              <div className="font-bold text-sm">{contactInfo.location}</div>
            </div>
            <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-card)]">
              <Clock size={16} className="text-[var(--accent-amber)] mb-2" />
              <div className="font-mono text-xs text-[var(--text-secondary)] uppercase">{t('contact.timezone')}</div>
              <div className="font-bold text-sm">{contactInfo.timezone}</div>
            </div>
          </div>

          {/* NETWORK MATRIX (Socials) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[var(--text-secondary)] border-b border-[var(--border-color)] pb-2">
              <Globe size={16} />
              <h3 className="font-mono text-xs uppercase tracking-widest">{t('contact.network_matrix')}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialMatrix.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="font-mono text-[10px] text-[var(--accent-blue)] opacity-70 uppercase">{section.category}</h4>
                  <div className="grid gap-2">
                    {section.items.map((item, i) => (
                      <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-3 border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--text-primary)] transition-all group ${item.color}`}
                      >
                        <item.icon size={16} className="text-[var(--text-secondary)] group-hover:text-current transition-colors" />
                        <span className="font-mono text-sm text-[var(--text-primary)]">{item.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: THE INPUT BUFFER (FORM) */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] p-8 md:p-10 relative overflow-hidden sticky top-32">
          {/* Decorative Scanline */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-blue)] to-transparent"></div>

          <h2 className="font-mono text-lg text-[var(--text-primary)] mb-8 flex items-center gap-2">
            <Terminal size={18} />
            {t('contact.protocol_message')}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="space-y-2">
              <label className="font-mono text-xs text-[var(--text-secondary)] uppercase">{t('contact.label_name')}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[var(--bg-void)] border border-[var(--border-color)] text-[var(--text-primary)] p-4 focus:outline-none focus:border-[var(--accent-blue)] transition-colors font-mono text-sm"
                placeholder={t('contact.placeholder_name')}
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-[var(--text-secondary)] uppercase">{t('contact.label_email')}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[var(--bg-void)] border border-[var(--border-color)] text-[var(--text-primary)] p-4 focus:outline-none focus:border-[var(--accent-blue)] transition-colors font-mono text-sm"
                placeholder={t('contact.placeholder_email')}
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-[var(--text-secondary)] uppercase">{t('contact.label_message')}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-[var(--bg-void)] border border-[var(--border-color)] text-[var(--text-primary)] p-4 focus:outline-none focus:border-[var(--accent-blue)] transition-colors font-mono text-sm resize-none"
                placeholder={t('contact.placeholder_message')}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus === 'sending' || formStatus === 'success'}
              className={`w-full py-4 font-mono text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${formStatus === 'success'
                ? 'bg-[var(--accent-green)] text-black border-transparent'
                : (formStatus === 'error' ? 'bg-red-500 text-white' : 'bg-[var(--text-primary)] text-[var(--bg-void)] hover:opacity-90')
                }`}
            >
              {formStatus === 'idle' && (
                <>
                  <span>{t('contact.btn_transmit')}</span>
                  <Send size={16} />
                </>
              )}
              {formStatus === 'sending' && (
                <>
                  <span className="animate-pulse">{t('contact.btn_sending')}</span>
                </>
              )}
              {formStatus === 'success' && (
                <>
                  <Check size={16} />
                  <span>{t('contact.btn_success')}</span>
                </>
              )}
              {formStatus === 'error' && (
                <>
                  <span>{t('contact.btn_error')}</span>
                </>
              )}
            </button>

            {/* ERROR RECOVERY: FALLBACK (REC-01) */}
            {formStatus === 'error' && (
              <a
                href={`mailto:${contactInfo.email}?subject=Project Inquiry: ${formData.name}&body=${formData.message}`}
                className="mt-4 w-full py-3 border border-red-500 text-red-500 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-colors animate-in fade-in slide-in-from-top-2"
              >
                <Mail size={14} />
                SWITCH TO MANUAL PROTOCOL
              </a>
            )}

          </form>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;