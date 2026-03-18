import React from "react";
import { Signal, Wifi, Battery } from "lucide-react";
import { THEME } from "../../../../constants/stoqoTheme";

const StatusBar = () => (
  <div
    className="h-6 w-full flex justify-between items-center px-4 pt-1 z-20 text-white text-[10px] font-medium shrink-0"
    style={{ backgroundColor: THEME.colors.primaryOrange }}
  >
    <div className="flex space-x-1 items-center">
      <Signal size={12} strokeWidth={2.5} />
      <span className="leading-none">Indosat</span>
    </div>
    <div className="flex items-center space-x-2">
      <Wifi size={12} strokeWidth={2.5} />
      <Battery size={12} strokeWidth={2.5} />
      <span>12:30</span>
    </div>
  </div>
);

export default StatusBar;
