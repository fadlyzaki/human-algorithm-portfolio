import React from "react";

const ModeItem = ({
  label,
  icon,
  desc,
  modeID,
  feedMode,
  setFeedMode,
  setIsMenuOpen,
  showToast,
}) => (
  <button
    onClick={() => {
      setFeedMode(modeID);
      setIsMenuOpen(false);
      showToast(`${label} Active`);
    }}
    className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 group
    ${
      feedMode === modeID
        ? "bg-indigo-50 border border-indigo-100 shadow-sm"
        : "hover:bg-slate-50 border border-transparent"
    }`}
  >
    <div
      className={`p-2 rounded-full ${feedMode === modeID ? "bg-indigo-100 text-indigo-600" : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:shadow-sm"}`}
    >
      {icon}
    </div>
    <div className="flex-1">
      <div
        className={`font-bold text-sm ${feedMode === modeID ? "text-indigo-900" : "text-slate-700"}`}
      >
        {label}
      </div>
      <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
        {desc}
      </div>
    </div>
    {feedMode === modeID && (
      <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
    )}
  </button>
);

export default ModeItem;
