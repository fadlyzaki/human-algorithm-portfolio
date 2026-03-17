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
    <div className="virtual-assistant-override fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Speech Bubble */}
      <div 
        className={`bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-3 rounded-2xl rounded-br-none shadow-xl mb-2 sm:mb-4 max-w-[160px] sm:max-w-[200px] transform transition-all duration-500 ease-out flex items-start gap-2 ${
          showMessage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <MessageSquare size={16} className="text-[var(--accent-blue)] mt-0.5 shrink-0" />
        <p className="leading-snug">{message}</p>
      </div>

      {/* Sprite Character */}
      <div 
        className={`w-24 h-24 sm:w-32 sm:h-32 bg-[url('/images/sprite-transparent.png')] sprite-anim-${currentScene} drop-shadow-lg scale-x-[-1] sm:scale-x-1 ${isDark ? "brightness-90 opacity-90" : ""}`}
        style={{
          backgroundSize: "800% 800%", /* 8 columns, 8 rows */
          imageRendering: "pixelated"
        }}
      ></div>
    </div>
  );
};

export default VirtualAssistant;
