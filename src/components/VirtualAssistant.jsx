import React, { useState, useEffect, useRef } from "react";
import { useRecruiterMode } from "../context/RecruiterModeContext";
import { useLocation } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const SCENES = {
  IDLE: "idle",       // Row 3 (index 2)
  THINKING: "think",    // Row 4 (index 3) - Changed from 'thinking' to 'think' to match filename
  WALK: "walk",       // Row 1 (index 0)
};

const VirtualAssistant = () => {
  const { isRecruiterMode } = useRecruiterMode();
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const location = useLocation();
  const [currentScene, setCurrentScene] = useState(SCENES.IDLE);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Use refs to store timeout IDs so we can clear them reliably
  const hideTimerRef = useRef(null);
  const walkTimerRef = useRef(null);
  const thinkTimerRef = useRef(null);

  // Clear all pending animation/hide timers
  const clearAllTimers = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    if (walkTimerRef.current) clearTimeout(walkTimerRef.current);
    if (thinkTimerRef.current) clearTimeout(thinkTimerRef.current);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => clearAllTimers();
  }, []);

  // Helper to pick a random tip that isn't the current message
  const showRandomTip = () => {
    const tips = t("virtual_assistant.tips", { returnObjects: true });
    if (!tips || !Array.isArray(tips)) return;
    
    let randomTip = tips[Math.floor(Math.random() * tips.length)];
    // Prevent showing the exact same tip twice in a row if possible
    let attempts = 0;
    while (randomTip === message && attempts < 3) {
      randomTip = tips[Math.floor(Math.random() * tips.length)];
      attempts++;
    }

    clearAllTimers(); // Cancel any existing sequences
    setMessage(randomTip);
    setShowMessage(true);
    setCurrentScene(SCENES.THINKING);

    // Auto-hide after 6 seconds
    hideTimerRef.current = setTimeout(() => {
      setShowMessage(false);
      setCurrentScene(SCENES.IDLE);
    }, 6000);
  };

  const handleClick = () => {
    showRandomTip();
  };

  const handleDismiss = (e) => {
    e.stopPropagation();
    setShowMessage(false);
    setCurrentScene(SCENES.IDLE);
  };

  // Determine message and animation based on route or interactions
  useEffect(() => {
    if (!isRecruiterMode) return;

    let newMsg = "";
    const path = location.pathname;

    if (path === "/") {
      newMsg = t("virtual_assistant.msg_home");
    } else if (path === "/about") {
      newMsg = t("virtual_assistant.msg_about");
    } else if (path === "/side-projects") {
      newMsg = t("virtual_assistant.msg_side_projects");
    } else if (path === "/design-system") {
      newMsg = t("virtual_assistant.context.design-system");
    } else if (path === "/sketches") {
      newMsg = t("virtual_assistant.context.sketches");
    } else if (path === "/contact") {
      newMsg = t("virtual_assistant.context.contact");
    } else if (path === "/cv" || path === "/system-manifest") {
      newMsg = t("virtual_assistant.context.system-manifest");
    } else if (path === "/unprovoked-thoughts" || path.includes("/unprovoked-thought/")) {
      newMsg = t("virtual_assistant.context.unprovoked-thoughts");
    } else if (path.includes("/case-study/") || path.includes("/side-project/")) {
      // Extract ID from /case-study/id or /side-project/id
      const segments = path.split("/").filter(Boolean);
      const id = segments[segments.length - 1];
      
      const specificMsg = t(`virtual_assistant.context.${id}`);
      if (specificMsg && specificMsg !== `virtual_assistant.context.${id}`) {
        newMsg = specificMsg;
      } else {
        newMsg = path.includes("/case-study/") 
          ? t("virtual_assistant.msg_case_study") 
          : t("virtual_assistant.msg_side_projects");
      }
    }

    // Only trigger the "vocal/walk" animation sequence if the path changed
    // If only the language changed, just update the message immediately
    const prevPath = localStorage.getItem("assistant_last_path");
    
    // Check if we've already walked this session
    const hasWalked = sessionStorage.getItem("assistant_has_walked");

    if (prevPath !== path) {
      clearAllTimers(); // Clear any existing sequences
      setShowMessage(false);
      localStorage.setItem("assistant_last_path", path);

      // Only walk if it's the first route change in this session
      if (!hasWalked) {
        setCurrentScene(SCENES.WALK);
        sessionStorage.setItem("assistant_has_walked", "true");
        
        walkTimerRef.current = setTimeout(() => {
          setCurrentScene(SCENES.THINKING);
          thinkTimerRef.current = setTimeout(() => {
            if (newMsg) {
              setMessage(newMsg);
              setShowMessage(true);
              
              hideTimerRef.current = setTimeout(() => {
                setShowMessage(false);
              }, 10000);
            }
            setCurrentScene(SCENES.IDLE);
          }, 2000);
        }, 1500);
      } else {
        // If already walked, just show the message with a brief thinking animation
        setCurrentScene(SCENES.THINKING);
        thinkTimerRef.current = setTimeout(() => {
          if (newMsg) {
            setMessage(newMsg);
            setShowMessage(true);
            
            hideTimerRef.current = setTimeout(() => {
              setShowMessage(false);
            }, 8000);
          }
          setCurrentScene(SCENES.IDLE);
        }, 800); // Shorter thinking time without walking
      }
    } else {
      // Language flip: just update the message text if currently visible
      setMessage(newMsg);
    }
  }, [location.pathname, isRecruiterMode, t]);

  if (!isRecruiterMode) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-5 duration-700 pointer-events-none virtual-assistant-override">
      {/* Sprite Speech Bubble (pointer-events-auto so it can be interacted with if needed) */}
      {/* Sprite Speech Bubble */}
      <div className={`
        pointer-events-auto
        bg-[var(--bg-card)] border border-[var(--border-color)] 
        shadow-[0_0_20px_rgba(0,0,0,0.2)] 
        p-3 rounded-2xl rounded-br-sm
        max-w-[160px] sm:max-w-[200px] text-xs sm:text-sm text-[var(--text-primary)]
        flex items-start gap-3 relative
        transform origin-bottom-right transition-all duration-300
        ${!showMessage ? "scale-95 opacity-0 rotate-2 translate-y-2 pointer-events-none" : "scale-100 opacity-100 rotate-0 translate-y-0"}
      `}>
        <button 
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-5 h-5 bg-[var(--bg-void)] border border-[var(--border-color)] rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)] transition-colors z-10"
        >
          <span className="text-[10px] leading-none">×</span>
        </button>
        <MessageSquare size={16} className="text-[var(--accent-blue)] mt-0.5 shrink-0" />
        <p className="leading-snug pr-2">{message}</p>
        
        {/* Bubble Tail - Positioning it to point to the character */}
        <div className="absolute -bottom-2 right-10 w-4 h-4 bg-[var(--bg-card)] border-r border-b border-[var(--border-color)] rotate-45 z-[-1]" />
      </div>

      {/* Sprite Character */}
      <div 
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-20 h-28 sm:w-24 sm:h-32 drop-shadow-lg scale-x-[-1] sm:scale-x-1 overflow-hidden pointer-events-auto cursor-pointer transition-transform duration-200 ${isHovered ? "scale-105" : ""} ${isDark ? "brightness-90 opacity-90" : ""}`}
      >
        <img 
          key={currentScene}
          src={`/images/sprite-${currentScene}.png`} 
          alt="Virtual Assistant Sprite" 
          className={`sprite-img sprite-anim-${currentScene}`} 
        />
      </div>
    </div>
  );
};

export default VirtualAssistant;
