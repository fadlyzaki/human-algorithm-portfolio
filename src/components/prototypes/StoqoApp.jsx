import React, { useState } from "react";
import OnboardingScreen from "./stoqo/screens/OnboardingScreen";
import DashboardScreen from "./stoqo/screens/DashboardScreen";
import OrderScreen from "./stoqo/screens/OrderScreen";

// --- APP CONTAINER ---

const StoqoApp = () => {
  const [currentScreen, setCurrentScreen] = useState("home");

  const renderScreen = () => {
    const ScreenMap = {
      home: OnboardingScreen,
      dashboard: DashboardScreen,
      orders: OrderScreen,
    };
    const CurrentScreenRef = ScreenMap[currentScreen] || ScreenMap.home;
    return <CurrentScreenRef onNavigate={setCurrentScreen} />;
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      {/* Phone Frame */}
      <div className="relative w-full max-w-[320px] h-[640px] bg-white shadow-2xl overflow-hidden rounded-[30px] border-[8px] border-gray-900 flex flex-col mx-auto ring-1 ring-black/10">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-30"></div>

        {renderScreen()}

        {/* Recreation Disclaimer Badge */}
        <div className="absolute bottom-6 left-0 w-full flex justify-center pointer-events-none z-50">
          <span className="text-[9px] font-mono text-gray-400 bg-gray-100/90 backdrop-blur-sm px-2 py-0.5 rounded border border-gray-200 shadow-sm">
            Recreated 2018 Prototype
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoqoApp;
