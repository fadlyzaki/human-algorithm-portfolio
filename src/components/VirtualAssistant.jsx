import React, { useState, useEffect } from "react";
import { useRecruiterMode } from "../context/RecruiterModeContext";
import { useLocation } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const SCENES = {
  IDLE: "idle",       // Row 3 (index 2)
  THINKING: "thinking", // Row 4 (index 3)
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

  // Determine message and animation based on route or interactions
  useEffect(() => {
    if (!isRecruiterMode) return;

    setShowMessage(false);
    setCurrentScene(SCENES.WALK);

    let newMsg = "";
    if (location.pathname === "/") {
      newMsg = t("virtual_assistant.msg_home");
    } else if (location.pathname.includes("/case-study")) {
      newMsg = t("virtual_assistant.msg_case_study");
    } else if (location.pathname === "/about") {
      newMsg = t("virtual_assistant.msg_about");
    }

    // Simulate walk in, then think, then idle and show message
    const walkTimer = setTimeout(() => {
      setCurrentScene(SCENES.THINKING);
      
      const thinkTimer = setTimeout(() => {
        if (newMsg) {
          setMessage(newMsg);
          setShowMessage(true);
        }
        setCurrentScene(SCENES.IDLE);
      }, 2000);

      return () => clearTimeout(thinkTimer);
    }, 1500);

    return () => clearTimeout(walkTimer);
  }, [location.pathname, isRecruiterMode]);

  if (!isRecruiterMode) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-5 duration-700 pointer-events-none virtual-assistant-override">
      {/* Sprite Speech Bubble (pointer-events-auto so it can be interacted with if needed) */}
      <div className={`
        pointer-events-auto
        bg-[var(--bg-card)] border border-[var(--border-color)] 
        shadow-[0_0_20px_rgba(0,0,0,0.2)] 
        p-3 rounded-2xl rounded-br-sm
        max-w-[160px] sm:max-w-[200px] text-xs sm:text-sm text-[var(--text-primary)]
        flex items-start gap-3
        transform origin-bottom-right transition-all duration-300
        ${currentScene !== SCENES.IDLE ? "scale-95 opacity-0 rotate-2 translate-y-2 pointer-events-none" : "scale-100 opacity-100 rotate-0 translate-y-0"}
      `}>
        <MessageSquare size={16} className="text-[var(--accent-blue)] mt-0.5 shrink-0" />
        <p className="leading-snug">{message}</p>
      </div>

      {/* Sprite Character */}
      <div 
        className={`w-20 h-28 sm:w-24 sm:h-32 drop-shadow-lg scale-x-[-1] sm:scale-x-1 ${isDark ? "brightness-90 opacity-90" : ""} overflow-hidden`}
      >
        <img 
          src={`/images/sprite-${currentScene}.png`} 
          alt="Virtual Assistant Sprite" 
          className={`sprite-img sprite-anim-${currentScene}`} 
        />
      </div>
    </div>
  );
};

export default VirtualAssistant;
