import React, { useState, useEffect } from "react";

const SCENES = {
  IDLE: "idle",       // Row 3 (index 2)
  THINKING: "thinking", // Row 4 (index 3)
  WALK: "walk",       // Row 1 (index 0)
};

const InteractiveAvatar = ({ className = "" }) => {
  const [currentScene, setCurrentScene] = useState(SCENES.IDLE);
  const [isWalking, setIsWalking] = useState(false);

  // Revert back to idle or thinking after a click-walk
  useEffect(() => {
    if (isWalking) {
      const timer = setTimeout(() => {
        setIsWalking(false);
        // If the mouse is still hovering after 2 seconds, it should go back to thinking, 
        // but simple idle is a safer fallback to prevent complex event listening hooks here.
        setCurrentScene(SCENES.IDLE);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isWalking]);

  const handleMouseEnter = () => {
    if (!isWalking) {
      setCurrentScene(SCENES.THINKING);
    }
  };

  const handleMouseLeave = () => {
    if (!isWalking) {
      setCurrentScene(SCENES.IDLE);
    }
  };

  const handleClick = () => {
    setIsWalking(true);
    setCurrentScene(SCENES.WALK);
  };

  return (
    <div 
      className={`relative w-full aspect-square md:aspect-[3/4] flex items-center justify-center cursor-pointer group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Container Background (Optional, matches ProfileScanner aesthetic) */}
      <div className="absolute inset-0 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] group-hover:border-[var(--accent-blue)] transition-colors duration-500 shadow-xl overflow-hidden">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        {/* Glare effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Sprite */}
      <div 
        className={`relative z-20 w-48 h-48 md:w-64 md:h-64 bg-[url('/images/sprite-transparent.png')] sprite-anim-${currentScene} drop-shadow-2xl transition-transform duration-300 group-hover:scale-105`}
        style={{
          backgroundSize: "800% 800%", /* 8 columns, 8 rows */
          imageRendering: "pixelated"
        }}
      />
    </div>
  );
};

export default InteractiveAvatar;
