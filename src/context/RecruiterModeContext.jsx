/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";

export const RecruiterModeContext = createContext();

export const RecruiterModeProvider = ({ children }) => {
  const [isRecruiterMode, setIsRecruiterMode] = useState(() => {
    // 1. Check URL override
    const params = new URLSearchParams(window.location.search);
    if (params.get("recruiter") === "true") return true;
    if (params.get("recruiter") === "false") return false;

    // 2. Fallback to localStorage
    const savedMode = localStorage.getItem("recruiter-mode-active");
    if (savedMode !== null) {
      return savedMode === "true";
    }

    return false; // Default
  });

  const toggleRecruiterMode = () => {
    setIsRecruiterMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("recruiter-mode-active", isRecruiterMode.toString());
    
    // Dynamically apply/remove global CSS class
    if (isRecruiterMode) {
      document.body.classList.add("recruiter-mode");
    } else {
      document.body.classList.remove("recruiter-mode");
    }
  }, [isRecruiterMode]);

  return (
    <RecruiterModeContext.Provider
      value={{ isRecruiterMode, toggleRecruiterMode }}
    >
      {children}
    </RecruiterModeContext.Provider>
  );
};

export const useRecruiterMode = () => {
  const context = useContext(RecruiterModeContext);
  if (context === undefined) {
    throw new Error("useRecruiterMode must be used within a RecruiterModeProvider");
  }
  return context;
};
