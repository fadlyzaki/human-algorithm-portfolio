import React from "react";
import { Home, BarChart2, Store, User } from "lucide-react";
import { THEME } from "../../../../constants/stoqoTheme";

const BottomNav = ({ active, onNavigate }) => {
  const navItems = [
    { id: "home", icon: Home, label: "Home", screen: "home" },
    { id: "performa", icon: BarChart2, label: "Performa", screen: "dashboard" },
    { id: "account", icon: Store, label: "Account", screen: "#" },
    { id: "lead", icon: User, label: "Lead", screen: "#" },
  ];

  return (
    <div
      className="flex justify-around items-center h-16 pb-2 z-20 absolute bottom-0 w-full rounded-b-[20px] overflow-hidden border-t"
      style={{
        backgroundColor: THEME.colors.surfaceLight,
        borderColor: THEME.colors.borderLight,
      }}
    >
      {navItems.map((item) => {
        const isActive = active === item.id;
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => item.screen !== "#" && onNavigate(item.screen)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors`}
            style={{
              color: isActive
                ? THEME.colors.primaryOrange
                : THEME.colors.navInactive,
            }}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} className="mb-1" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
