import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Send,
  Copy,
  Check,
  Sun,
  Moon,
  MapPin,
  Clock,
  Wifi,
  Globe,
  Terminal,
  ScanEye,
  Activity,
} from "lucide-react";
import { contactInfo, socialMatrix } from "../data/contactData";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

import Navbar from "../components/Navbar";
import NavigationMenu from "../components/NavigationMenu";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import SignalAI from "../components/interactions/SignalAI";
import NeuralDecryption from "../components/interactions/NeuralDecryption";
import ContactScratch from "../components/ContactScratch";

/* --- THEME CONFIGURATION ---
   Aesthetic: "Communication Uplink"
   High contrast, data-heavy, focused on establishing connection.
*/

const ContactPage = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success, error
  const [pingCount, setPingCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for Navbar menu

  const handleOpenMenu = useCallback(() => setIsMenuOpen(true), []);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState("");
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_CONTACT_FORM_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        setEmailError("INVALID_EMAIL_PROTOCOL");
      } else {
        setEmailError("");
      }
    }

    setPingCount((prev) => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailError) return;
    setFormStatus("sending");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        mode: "no-cors",
      });
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-[var(--bg-void)] text-[var(--text-primary)] font-mono selection:bg-[var(--text-primary)] selection:text-[var(--bg-void)] transition-colors duration-500 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <SEO
        title="Contact Fadly Uzzaki"
        description="Get in touch with Fadly Uzzaki (Fadlyzaki) for product design collaborations, freelance inquiries, or design consulting. Senior Product Designer specializing in B2B SaaS and EdTech."
      />

      {/* GENERATIVE AI BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4]">
        <SignalAI
          color={isDark ? "some" : "some"}
          manualPing={pingCount}
        />
      </div>

      {/* STATIC BACKGROUND GRID */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(${isDark ? "white" : "black"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "white" : "black"} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <Navbar onOpenMenu={handleOpenMenu} title="Communication" backPath="/" />
      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-32 min-h-[100dvh] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
        {/* LEFT COLUMN */}
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-2 text-[var(--accent-green)] font-mono text-xs mb-4">
              <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
              {t("contact.system_listening")}
            </div>
            <h1 className="text-4xl md:text-5xl font-mono uppercase leading-tight mb-6">
              {t("contact.title")} <br />
              <span className="text-[var(--text-secondary)]">
                {t("contact.subtitle")}
              </span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-md">
              {t("contact.desc")}
            </p>
          </div>

          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] p-6 group hover:border-[var(--accent-blue)] transition-colors">
            <h3 className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest mb-2">
              {t("contact.direct_uplink")}
            </h3>
            <ContactScratch email={contactInfo.email} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-card)]">
              <MapPin size={16} className="text-[var(--accent-amber)] mb-2" />
              <div className="font-mono text-xs text-[var(--text-secondary)] uppercase">
                {t("contact.location")}
              </div>
              <div className="font-bold text-sm">{contactInfo.location}</div>
            </div>
            <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-card)]">
              <Clock size={16} className="text-[var(--accent-amber)] mb-2" />
              <div className="font-mono text-xs text-[var(--text-secondary)] uppercase">
                {t("contact.timezone")}
              </div>
              <div className="font-bold text-sm">{contactInfo.timezone}</div>
            </div>
          </div>

          <div className="space-y-6 relative">
            <div className="flex items-center gap-3 text-[var(--text-secondary)] border-b border-[var(--border-color)] pb-2">
              <Globe size={16} />
              <h3 className="font-mono text-xs uppercase tracking-widest">
                {t("contact.network_matrix")}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialMatrix.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="font-mono text-[10px] text-[var(--accent-blue)] opacity-70 uppercase">
                    {section.category}
                  </h4>
                  <div className="grid gap-2">
                    {section.items.map((item, i) => (
                      <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative flex items-center justify-between p-2 pl-4 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden group transition-all duration-500 hover:border-transparent ${item.color}`}
                      >
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--text-primary)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[30] origin-center z-0"></div>
                        <span className="relative z-10 font-mono text-sm text-[var(--text-primary)] transition-colors duration-500 group-hover:text-[var(--bg-void)]">
                          {item.name}
                        </span>
                        <div className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full bg-transparent">
                          <item.icon
                            size={14}
                            className="text-[var(--bg-void)] transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] p-8 md:p-10 relative overflow-hidden sticky top-32">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-blue)] to-transparent"></div>

          <h2 className="font-mono text-lg text-[var(--text-primary)] mb-8 flex items-center gap-2">
            <Terminal size={18} />
            {t("contact.protocol_message")}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="font-mono text-xs text-[var(--text-secondary)] uppercase">
                <NeuralDecryption text={t("contact.label_name")} />
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[var(--bg-void)] border border-[var(--border-color)] text-[var(--text-primary)] p-4 focus:outline-none focus:border-[var(--accent-blue)] transition-colors font-mono text-sm"
                placeholder={t("contact.placeholder_name")}
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-[var(--text-secondary)] uppercase flex justify-between">
                <NeuralDecryption text={t("contact.label_email")} />
                {emailError && (
                  <span className="text-red-500 animate-pulse">
                    {emailError}
                  </span>
                )}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[var(--bg-void)] border border-[var(--border-color)] text-[var(--text-primary)] p-4 focus:outline-none focus:border-[var(--accent-blue)] transition-colors font-mono text-sm"
                placeholder={t("contact.placeholder_email")}
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-[var(--text-secondary)] uppercase">
                <NeuralDecryption text={t("contact.label_message")} />
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-[var(--bg-void)] border border-[var(--border-color)] text-[var(--text-primary)] p-4 focus:outline-none focus:border-[var(--accent-blue)] transition-colors font-mono text-sm resize-none"
                placeholder={t("contact.placeholder_message")}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus === "sending" || formStatus === "success"}
              className={`w-full py-4 font-mono text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${formStatus === "success"
                ? "bg-[var(--accent-green)] text-black border-transparent"
                : formStatus === "error"
                  ? "bg-red-500 text-white"
                  : "bg-[var(--text-primary)] text-[var(--bg-void)] hover:opacity-90"
                }`}
            >
              {formStatus === "idle" && (
                <>
                  <span>{t("contact.btn_transmit")}</span>
                  <Send size={16} />
                </>
              )}
              {formStatus === "sending" && (
                <>
                  <span className="animate-pulse">
                    {t("contact.btn_sending")}
                  </span>
                </>
              )}
              {formStatus === "success" && (
                <>
                  <Check size={16} />
                  <span>{t("contact.btn_success")}</span>
                </>
              )}
              {formStatus === "error" && (
                <>
                  <span>{t("contact.btn_error")}</span>
                </>
              )}
            </button>
          </form>

          {/* ENCRYPTED PAYLOAD PREVIEW */}
          <div className="mt-8 pt-8 border-t border-[var(--border-color)]">
            <div className="flex items-center gap-2 mb-4 text-[var(--text-secondary)]">
              <Terminal size={14} />
              <span className="text-[10px] font-mono tracking-widest uppercase">
                Payload_Preview
              </span>
            </div>

            <motion.div
              layout
              className="bg-[var(--bg-void)] border border-[var(--border-color)] p-5 rounded-sm relative font-mono text-[10px] sm:text-xs text-[var(--text-secondary)]"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent-blue)]"></div>
              <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-[var(--accent-blue)]/10 animate-pulse"></div>

              <div className="space-y-3">
                <div className="flex items-baseline gap-4">
                  <span className="w-20 opacity-40 uppercase shrink-0 font-bold">[TX_ID]</span>
                  <span className="text-[var(--accent-green)] truncate">
                    TX-{Math.abs(formData.name.length + formData.email.length + formData.message.length).toString(16).padStart(4, '0').toUpperCase()}
                  </span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="w-20 opacity-40 uppercase shrink-0 font-bold">[SOURCE]</span>
                  <span className={formData.name ? "text-[var(--text-primary)]" : "text-red-500/50 italic"}>
                    {formData.name || "AWAITING_INPUT"}
                  </span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="w-20 opacity-40 uppercase shrink-0 font-bold">[UPLINK]</span>
                  <span className={formData.email ? "text-[var(--text-primary)]" : "text-red-500/50 italic"}>
                    {formData.email || "NO_PROTOCOL_ESTABLISHED"}
                  </span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="w-20 opacity-40 uppercase shrink-0 font-bold">[SIZE]</span>
                  <span className="text-[var(--accent-amber)] font-bold">
                    {formData.message.length.toString().padStart(3, '0')} BYTES
                  </span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="w-20 opacity-40 uppercase shrink-0 font-bold">[STATUS]</span>
                  <span className="text-[var(--accent-blue)]">
                    {formStatus === 'idle' ? 'READY_FOR_TRANSMISSION' : formStatus.toUpperCase()}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* PACKET EXCHANGE ANIMATION */}
            <div className="mt-8 relative h-12 bg-[var(--bg-void)] border border-[var(--border-color)]/30 rounded-lg overflow-hidden flex items-center justify-between px-6">
              <div className="flex items-center gap-2 relative z-10">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
                <span className="text-[8px] font-mono text-[var(--accent-blue)] font-bold">USER_NODE</span>
              </div>
              <div className="absolute inset-x-20 top-1/2 -translate-y-1/2 h-px bg-[var(--border-color)]/20" />
              <AnimatePresence>
                {Object.values(formData).some(v => v.length > 0) && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ left: "15%", opacity: 0 }}
                        animate={{ 
                          left: ["15%", "85%"],
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.6, ease: "linear" }}
                        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[var(--accent-blue)] shadow-[0_0_8px_var(--accent-blue)] rounded-full z-0"
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
              <div className="flex items-center gap-2 relative z-10">
                <span className="text-[8px] font-mono text-[var(--accent-green)] font-bold">SYSTEM_CORE</span>
                <div className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
              </div>
            </div>

            {/* HANDSHAKE STEPS */}
            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <Activity size={10} className="animate-pulse" />
                  <span>Human_Connection_Sync</span>
                </div>
                <span>
                  {Object.values(formData).filter(v => v.length > 0).length === 3 ? "STABLE_UPLINK" : "INITIALIZING"}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "SYNC_VALUES", condition: formData.name.length > 0 },
                  { label: "ALIGN_GOALS", condition: formData.email.length > 0 },
                  { label: "ESTABLISH_CONN", condition: formData.message.length > 0 }
                ].map((step, idx) => (
                  <div 
                    key={idx}
                    className={`flex flex-col items-center justify-center p-2 border transition-all duration-500 ${
                      step.condition ? "border-[var(--accent-green)] bg-[var(--accent-green)]/5 text-[var(--accent-green)]" : "border-[var(--border-color)] opacity-20"
                    }`}
                  >
                    <span className="font-mono text-[9px] font-bold">{step.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer hideHeadline={true} />
    </div>
  );
};

export default ContactPage;
