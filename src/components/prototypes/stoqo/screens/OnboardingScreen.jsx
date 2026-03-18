import React from "react";
import { THEME } from "../../../../constants/stoqoTheme";
import StatusBar from "../shared/StatusBar";
import BottomNav from "../shared/BottomNav";
import KPIBadge from "../shared/KPIBadge";

const OnboardingScreen = ({ onNavigate }) => {
  return (
    <div
      className="relative w-full h-full flex flex-col font-sans overflow-hidden"
      style={{ backgroundColor: THEME.colors.backgroundLight }}
    >
      <StatusBar />
      <div
        className="px-4 py-3 flex items-center justify-between shadow-sm z-10 shrink-0"
        style={{ backgroundColor: THEME.colors.primaryOrange }}
      >
        <h1 className="text-white text-lg font-bold">Performa</h1>
      </div>

      {/* Background Content (Blurred) */}
      <div
        className="flex-1 overflow-y-auto relative filter blur-[2px] opacity-40 pointer-events-none"
        style={{ backgroundColor: THEME.colors.backgroundLight }}
      >
        <div className="flex justify-between items-center px-4 py-3 bg-gray-200 border-b border-gray-300">
          <span className="font-bold text-gray-700 text-sm">AGUSTUS 2019</span>
          <span className="text-xs text-gray-500 italic">
            diperbarui 15/08/19 14:00
          </span>
        </div>
        <div className="p-4 space-y-4">
          <div
            className="p-4 rounded-xl shadow"
            style={{ backgroundColor: THEME.colors.surfaceLight }}
          >
            <div className="flex items-center mb-2">
              <h2
                className="text-2xl font-bold"
                style={{ color: THEME.colors.textPrimaryLight }}
              >
                30 Outlet
              </h2>
              <KPIBadge />
            </div>
            <p
              className="text-sm"
              style={{ color: THEME.colors.textSecondaryLight }}
            >
              yang bisa dikelola dalam 30 hari terakhir
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="p-4 rounded-xl shadow h-24"
              style={{ backgroundColor: THEME.colors.surfaceLight }}
            ></div>
            <div
              className="p-4 rounded-xl shadow h-24"
              style={{ backgroundColor: THEME.colors.surfaceLight }}
            ></div>
          </div>
        </div>
      </div>

      {/* Overlay Modal */}
      <div
        className="absolute inset-0 z-30 flex items-center justify-center p-6 backdrop-blur-sm"
        style={{ backgroundColor: THEME.colors.overlayLight }}
      >
        <div
          className="w-full max-w-sm rounded-[24px] shadow-xl overflow-hidden animate-in fade-in zoom-in duration-300"
          style={{ backgroundColor: THEME.colors.surfaceLight }}
        >
          <div className="bg-gray-50 flex justify-center items-center py-8">
            <div className="relative w-32 h-32">
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" fill="var(--text-primary)" r="45"></circle>
                <rect
                  fill="var(--border-color)"
                  height="25"
                  rx="2"
                  stroke="#D1D5DB"
                  strokeWidth="2"
                  width="12"
                  x="25"
                  y="45"
                ></rect>
                <rect
                  fill="var(--border-color)"
                  height="35"
                  rx="2"
                  stroke="#D1D5DB"
                  strokeWidth="2"
                  width="12"
                  x="44"
                  y="35"
                ></rect>
                <rect
                  fill="var(--border-color)"
                  height="45"
                  rx="2"
                  stroke="#D1D5DB"
                  strokeWidth="2"
                  width="12"
                  x="63"
                  y="25"
                ></rect>
                <path
                  d="M25 65 L45 45 L60 50 L80 20"
                  stroke="#FF6B42"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                ></path>
                <path
                  d="M80 20 L80 30 M80 20 L70 20"
                  stroke="#FF6B42"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                ></path>
                <circle cx="25" cy="65" fill="#FF6B42" r="2"></circle>
                <circle cx="45" cy="45" fill="#FF6B42" r="2"></circle>
                <circle cx="60" cy="50" fill="#FF6B42" r="2"></circle>
                <circle cx="80" cy="20" fill="#FF6B42" r="2"></circle>
              </svg>
            </div>
          </div>
          <div className="px-6 pt-4 pb-6 text-center">
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: THEME.colors.textPrimaryLight }}
            >
              Halaman Performa
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: THEME.colors.textSecondaryLight }}
            >
              Anda dapat mengetahui hasil kerja terkini sebagai FA STOQO pada
              halaman ini
            </p>
            <button
              onClick={() => onNavigate("dashboard")}
              className="w-full font-bold py-3 px-4 rounded-full transition duration-200 shadow-md transform active:scale-95 text-white hover:opacity-90"
              style={{ backgroundColor: THEME.colors.blueCta }}
            >
              Siap Komandan!
            </button>
          </div>
        </div>
      </div>

      <BottomNav active="performa" onNavigate={onNavigate} />
    </div>
  );
};

export default OnboardingScreen;
