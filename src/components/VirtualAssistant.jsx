import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRecruiterMode } from "../context/RecruiterModeContext";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [currentScene, setCurrentScene] = useState(SCENES.IDLE);
  const [message, setMessage] = useState("");
  const [menuOptions, setMenuOptions] = useState(null); // Used to render the interactive menu
  const [showMessage, setShowMessage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSleeping, setIsSleeping] = useState(false);

  // Agentic States (Chat & TL;DR deprecated in v9.1 — LLM payload was degrading TTI)

  // Restore sleep state from session storage
  useEffect(() => {
    const sleepState = sessionStorage.getItem("assistant_sleeping");
    if (sleepState === "true") {
      setIsSleeping(true);
    }
  }, []);

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

  const toggleSleep = () => {
    const newState = !isSleeping;
    setIsSleeping(newState);
    sessionStorage.setItem("assistant_sleeping", newState.toString());
    
    if (newState) {
      clearAllTimers();
      setShowMessage(false);
    }
  };

  // Helper to get time-based greeting
  const getTimeGreeting = useCallback(() => {
    const hour = new Date().getHours();
    let timeKey = "late_night";
    if (hour >= 5 && hour < 12) timeKey = "morning";
    else if (hour >= 12 && hour < 17) timeKey = "afternoon";
    else if (hour >= 17 && hour < 22) timeKey = "evening";
    
    const variants = t(`virtual_assistant.time_greetings.${timeKey}`, { returnObjects: true });
    if (Array.isArray(variants)) {
      const randomIndex = Math.floor(Math.random() * variants.length);
      return variants[randomIndex];
    }
    return variants; // Fallback if not an array
  }, [t]);

  const showInteractiveMenu = () => {
    clearAllTimers();
    const actions = t("virtual_assistant.actions", { returnObjects: true });

    const options = [
      { label: actions[0], onClick: () => triggerContextMessage(true) }, // Explain this page
      { label: actions[2], onClick: () => { navigate("/contact"); handleDismiss(); } }, // Contact me
      { label: actions[1], onClick: toggleSleep } // Go to sleep
    ];
    
    setMenuOptions(options);
    
    setMessage(""); // Clear text message to show menu instead
    setShowMessage(true);
    setCurrentScene(SCENES.THINKING);

    // Auto-hide menu after 15 seconds if no interaction
    hideTimerRef.current = setTimeout(() => {
      handleDismiss();
    }, 15000);
  };

  // handleTLDR and handleChatSubmit deprecated in v9.1
  // LLM-powered features (Ask Echo.Z, Give TL;DR) removed to improve TTI performance

  const triggerContextMessage = (manualClick = false) => {
    clearAllTimers();
    const currentMsg = getRouteMessage(location.pathname, manualClick);
    setMenuOptions(null);
    setMessage(currentMsg);
    setShowMessage(true);
    setCurrentScene(SCENES.THINKING);
    
    // Auto-hide after 8 seconds
    hideTimerRef.current = setTimeout(() => {
      setShowMessage(false);
      setCurrentScene(SCENES.IDLE);
    }, manualClick ? 10000 : 8000);
  };

  const getRouteMessage = useCallback((path, isManual = false) => {
    const pov = isRecruiterMode ? "" : "terminal_pov.";

    // Simple helper to fetch translation with fallback to base key if pov key doesn't exist
    const getMsg = (key) => {
      const povKey = `virtual_assistant.${pov}${key}`;
      const baseKey = `virtual_assistant.${key}`;
      let translated = t(povKey);
      
      // If the translated value is just the key name, it means it's missing in terminal_pov
      if (translated === povKey && !isRecruiterMode) {
        translated = t(baseKey);
      }
      
      // Final safety: if the key is still missing (returns the key path), show home message or empty
      if (translated.startsWith('virtual_assistant.')) {
        return "";
      }
      
      return translated;
    };

    const msg = (() => {
      if (path === "/") {
        // On manual click, show the "Explain" message. On auto-trigger, show the greeting.
        return isManual ? getMsg("msg_home") : getTimeGreeting();
      } else if (path === "/about") {
        return getMsg("msg_about");
      } else if (path === "/side-projects") {
        return getMsg("msg_side_projects");
      } else if (path === "/design-system") {
        return getMsg("context.design-system");
      } else if (path === "/sketches") {
        return getMsg("context.sketches");
      } else if (path === "/contact") {
        return getMsg("context.contact");
      } else if (path === "/cv" || path === "/system-manifest") {
        return getMsg("context.system-manifest");
      } else if (path === "/thoughts") {
        return getMsg("context.unprovoked-thoughts");
      } else if (path.includes("/thoughts/") || path.includes("/case-study/") || path.includes("/side-project/") || path.includes("/work/") || path.includes("/blog/")) {
        const segments = path.split("/").filter(Boolean);
        let id = segments[segments.length - 1];
        
        // If we extracted a structural segment instead of a real ID
        if (id === 'work' || id === 'case-study' || id === 'side-project' || id === 'blog' || id === 'thoughts') {
          if (path.includes("/thoughts")) return getMsg("context.unprovoked-thoughts");
          return path.includes("/side-project") || path.includes("/blog") ? getMsg("msg_side_projects") : getMsg("msg_case_study");
        }

        const specificMsg = getMsg(`context.${id}`);
        if (specificMsg) return specificMsg;

        // Generic context-aware fallback
        if (path.includes("/thoughts/")) return getMsg("context.unprovoked-thoughts");
        return path.includes("/case-study/") || path.includes("/work/") ? getMsg("msg_case_study") : getMsg("msg_side_projects");
      }
      return getMsg("msg_home");
    })();

    // Prefix with [ECHO.Z] in terminal mode
    if (!isRecruiterMode && !isManual && msg) {
      return `[ECHO.Z]: ${msg}`;
    }
    return msg;
  }, [isRecruiterMode, getTimeGreeting, t]);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isSleeping) {
      toggleSleep(); // Wake up!
      triggerContextMessage(true);
    } else {
      showInteractiveMenu();
    }
  };

  const handleDismiss = (e) => {
    if (e) e.stopPropagation();
    setShowMessage(false);
    setMenuOptions(null);
    setCurrentScene(SCENES.IDLE);
  };

  // Determine message and animation based on route or interactions
  useEffect(() => {
    if (isSleeping) return;

    const path = location.pathname;
    const newMsg = getRouteMessage(path);

    // Only trigger the "vocal/walk" animation sequence if the path changed
    // If only the language changed, just update the message immediately
    const prevPath = localStorage.getItem("assistant_last_path");
    
    // Check if we've already walked this session
    const hasWalked = sessionStorage.getItem("assistant_has_walked");

    if (prevPath !== path) {
      clearAllTimers(); // Clear any existing sequences

      setShowMessage(false);
      setMenuOptions(null);
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
      if (showMessage && !menuOptions) {
        setMessage(newMsg);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, isRecruiterMode, t, isSleeping, getRouteMessage]);

  // Determine if we should hide on 404/catch-all
  // Valid top-level paths and prefixes
  const validPaths = ["/", "/about", "/side-projects", "/thoughts", "/design-system", "/sketches", "/contact", "/cv", "/system-manifest"];
  const validPrefixes = ["/case-study/", "/side-project/", "/work/", "/blog/", "/thoughts/"];
  
  const is404 = !validPaths.includes(location.pathname) && 
                !validPrefixes.some(p => location.pathname.startsWith(p));

  if (is404) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-5 duration-700 pointer-events-none virtual-assistant-override">
      {/* Sprite Speech Bubble */}
      <div className={`
        pointer-events-auto
        bg-[var(--bg-card)] border border-[var(--border-color)] 
        shadow-[0_0_20px_rgba(0,0,0,0.2)] 
        p-3 rounded-2xl rounded-br-sm
        max-w-[170px] sm:max-w-[220px] text-xs sm:text-sm text-[var(--text-primary)]
        flex items-start gap-3 relative
        transform origin-bottom-right transition-all duration-300
        ${(!showMessage && !isSleeping) ? "scale-95 opacity-0 rotate-2 translate-y-2 pointer-events-none" : "scale-100 opacity-100 rotate-0 translate-y-0"}
      `}>
        {!isSleeping && (
          <button 
            onClick={handleDismiss}
            className="absolute -top-2 -right-2 w-5 h-5 bg-[var(--bg-void)] border border-[var(--border-color)] rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)] transition-colors z-10"
          >
            <span className="text-[10px] leading-none">×</span>
          </button>
        )}
        
        <MessageSquare size={16} className="text-[var(--accent-blue)] mt-0.5 shrink-0" />
        
        <div className="w-full">
          {isSleeping ? (
            <p className="leading-snug pr-2 font-mono animate-pulse">{t("virtual_assistant.sleeping", "Zzz...")}</p>
          ) : menuOptions ? (
            <div className="flex flex-col gap-1.5 w-full pr-2 custom-scrollbar overflow-y-auto max-h-[200px]">
              {menuOptions.map((opt, i) => (
                <button 
                  key={i}
                  onClick={opt.onClick}
                  className="text-left w-full hover:bg-[var(--bg-void)] px-2 py-1.5 rounded transition-colors text-xs text-[var(--text-primary)] border border-transparent hover:border-[var(--border-color)]"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          ) : (
            <div className="leading-snug pr-2 text-xs sm:text-sm prose-sm prose-invert overflow-y-auto max-h-[250px] custom-scrollbar pointer-events-auto" dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, '<br />') }} />
          )}
        </div>
        
        {/* Bubble Tail */}
        <div className="absolute -bottom-2 right-10 w-4 h-4 bg-[var(--bg-card)] border-r border-b border-[var(--border-color)] rotate-45 z-[-1]" />
      </div>

      {/* Sprite Character */}
      <div className="relative pointer-events-auto cursor-pointer group/sprite">
        <div 
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-20 h-28 sm:w-24 sm:h-32 drop-shadow-lg scale-x-[-1] sm:scale-x-1 overflow-hidden transition-all duration-300 ${isHovered ? "scale-105" : ""} ${isDark ? "brightness-90 opacity-90" : ""} ${isSleeping ? "opacity-50 grayscale hover:grayscale-0 hover:opacity-100" : ""}`}
        >
          <img loading="lazy" decoding="async"
            key={isSleeping ? 'sleep' : currentScene}
            src={`/images/sprite-${isSleeping ? SCENES.IDLE : currentScene}.png`} 
            alt="Virtual Assistant Sprite" 
            className={`sprite-img ${isSleeping ? 'sprite-sleeping' : `sprite-anim-${currentScene}`}`} 
          />
        </div>

        {/* Name Label at Foot */}
        <div className={`
          absolute -bottom-2 left-1/2 -translate-x-1/2
          bg-[var(--bg-void)]/90 backdrop-blur-sm border border-[var(--border-color)] 
          px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-bold tracking-[0.2em] text-[var(--accent-blue)] 
          flex items-center gap-1.5 shadow-lg whitespace-nowrap
          transition-all duration-300
          ${isSleeping ? "opacity-40 grayscale" : "opacity-100"}
          ${isHovered ? "translate-y-[-2px] border-[var(--accent-blue)]/50" : "translate-y-0"}
        `}>
          <div className={`w-1 h-1 rounded-full bg-[var(--accent-blue)] ${isSleeping ? "" : "animate-pulse"}`} />
          {t("virtual_assistant.name") || "ECHO.Z"}
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistant;
