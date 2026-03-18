import React, { useState } from "react";
import { THEME } from "../../../../constants/stoqoTheme";
import StatusBar from "../shared/StatusBar";
import BottomNav from "../shared/BottomNav";
import KPIBadge from "../shared/KPIBadge";
import { Info, ChevronUp, ChevronDown, ArrowRight } from "lucide-react";

const DashboardScreen = ({ onNavigate }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(true);

  return (
    <div
      className="relative w-full h-full flex flex-col font-sans overflow-hidden"
      style={{ backgroundColor: THEME.colors.backgroundLight }}
    >
      <StatusBar />
      <header
        className="px-4 py-3 pb-6 text-white shadow-md z-10 shrink-0"
        style={{ backgroundColor: THEME.colors.primaryOrange }}
      >
        <h1 className="text-xl font-bold tracking-wide">Performa</h1>
      </header>

      <main className="flex-1 overflow-y-auto pb-24 relative no-scrollbar">
        <div
          className="px-4 py-3 flex items-start space-x-3 text-sm border-b"
          style={{
            backgroundColor: THEME.colors.secondaryBlue,
            borderColor: THEME.colors.borderLight,
          }}
        >
          <Info size={18} className="text-blue-500 mt-0.5" />
          <p className="leading-snug text-xs text-gray-700">
            Data dibawah adalah hasil kerja Anda sampai tanggal{" "}
            <span className="font-bold text-gray-900">15 Agustus 2019</span> jam
            14:00
          </p>
        </div>

        <div className="p-4 space-y-4">
          {/* Main Metrics Card */}
          <div
            className="rounded-xl shadow overflow-hidden"
            style={{ backgroundColor: THEME.colors.cardLight }}
          >
            <div className="p-4 pb-2">
              <div className="flex items-center space-x-2 mb-1">
                <span
                  className="text-3xl font-medium"
                  style={{ color: THEME.colors.textPrimaryLight }}
                >
                  30
                </span>
                <span
                  className="text-xl font-normal"
                  style={{ color: THEME.colors.textPrimaryLight }}
                >
                  Outlet
                </span>
                <KPIBadge />
              </div>
              <p
                className="text-xs"
                style={{ color: THEME.colors.navInactive }}
              >
                yang bisa dikelola dalam 30 hari terakhir
              </p>
            </div>
            <div
              onClick={() => setIsDetailOpen(!isDetailOpen)}
              className="border-t border-b border-gray-100 py-2.5 flex justify-center items-center cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <span
                className="text-xs font-medium"
                style={{ color: THEME.colors.blueCta }}
              >
                {isDetailOpen ? "Tutup Detail" : "Lihat Detail"}
              </span>
              {isDetailOpen ? (
                <ChevronUp
                  size={16}
                  color={THEME.colors.blueCta}
                  className="ml-1"
                />
              ) : (
                <ChevronDown
                  size={16}
                  color={THEME.colors.blueCta}
                  className="ml-1"
                />
              )}
            </div>

            {isDetailOpen && (
              <div className="bg-gray-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <h3
                    className="text-xs font-bold uppercase tracking-wide mb-2"
                    style={{ color: THEME.colors.navInactive }}
                  >
                    Berdasarkan Status Outlet
                  </h3>
                  <div className="flex items-start mb-4">
                    <div className="w-1/2 border-r border-gray-200 pr-2">
                      <div className="flex items-baseline space-x-1">
                        <span
                          className="text-2xl font-medium"
                          style={{ color: THEME.colors.textPrimaryLight }}
                        >
                          25
                        </span>
                        <span
                          className="text-xs"
                          style={{ color: THEME.colors.navInactive }}
                        >
                          Outlet Aktif
                        </span>
                      </div>
                      <div className="mt-2 space-y-1">
                        <div className="text-xs flex items-center">
                          <span className="font-bold text-gray-700 w-4">8</span>
                          <span
                            className="ml-1"
                            style={{ color: THEME.colors.navInactive }}
                          >
                            Outlet Loyal
                          </span>
                        </div>
                        <div className="text-xs flex items-center">
                          <span className="font-bold text-gray-700 w-4">8</span>
                          <span
                            className="ml-1"
                            style={{ color: THEME.colors.navInactive }}
                          >
                            Outlet Reguler
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 pl-4 pt-1">
                      <div className="flex items-baseline space-x-1">
                        <span
                          className="text-2xl font-medium"
                          style={{ color: THEME.colors.textPrimaryLight }}
                        >
                          5
                        </span>
                        <span
                          className="text-xs"
                          style={{ color: THEME.colors.navInactive }}
                        >
                          Outlet Non Aktif
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Link to Orders */}
          <button
            onClick={() => onNavigate("orders")}
            className="block w-full group text-left"
          >
            <div
              className="border rounded-xl p-4 flex justify-between items-center transition"
              style={{
                backgroundColor: "rgba(91, 128, 255, 0.1)",
                borderColor: THEME.colors.blueCta,
              }}
            >
              <div className="flex flex-col">
                <span
                  className="text-sm font-bold"
                  style={{ color: THEME.colors.blueCta }}
                >
                  Lihat Order & Revenue
                </span>
                <span className="text-xs text-gray-500">
                  Detail performa penjualan
                </span>
              </div>
              <ArrowRight
                size={20}
                color={THEME.colors.blueCta}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </button>

          {/* Grid Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div
              className="rounded-xl shadow p-3 flex flex-col justify-between h-24"
              style={{ backgroundColor: THEME.colors.cardLight }}
            >
              <div className="flex items-start justify-between">
                <span
                  className="text-2xl font-medium"
                  style={{ color: THEME.colors.textPrimaryLight }}
                >
                  30
                </span>
                <KPIBadge />
              </div>
              <span
                className="text-xs leading-tight"
                style={{ color: THEME.colors.navInactive }}
              >
                Total visit
              </span>
            </div>
            <div
              className="rounded-xl shadow p-3 flex flex-col justify-between h-24"
              style={{ backgroundColor: THEME.colors.cardLight }}
            >
              <span
                className="text-2xl font-medium"
                style={{ color: THEME.colors.textPrimaryLight }}
              >
                7
              </span>
              <span
                className="text-xs leading-tight"
                style={{ color: THEME.colors.navInactive }}
              >
                Rata-rata visit per hari
              </span>
            </div>
            <div
              className="rounded-xl shadow p-3 flex flex-col justify-between h-24"
              style={{ backgroundColor: THEME.colors.cardLight }}
            >
              <span
                className="text-2xl font-medium"
                style={{ color: THEME.colors.textPrimaryLight }}
              >
                25
              </span>
              <div className="flex flex-col">
                <span
                  className="text-xs leading-tight"
                  style={{ color: THEME.colors.navInactive }}
                >
                  Total visit
                </span>
                <span
                  className="text-xs leading-tight"
                  style={{ color: THEME.colors.navInactive }}
                >
                  to order
                </span>
              </div>
            </div>
            <div
              className="rounded-xl shadow p-3 flex flex-col justify-between h-24"
              style={{ backgroundColor: THEME.colors.cardLight }}
            >
              <div className="flex items-start justify-between">
                <span
                  className="text-2xl font-medium"
                  style={{ color: THEME.colors.textPrimaryLight }}
                >
                  15
                </span>
                <KPIBadge />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-xs leading-tight"
                  style={{ color: THEME.colors.navInactive }}
                >
                  Outlet yang
                </span>
                <span
                  className="text-xs leading-tight"
                  style={{ color: THEME.colors.navInactive }}
                >
                  selesai diedukasi
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNav active="performa" onNavigate={onNavigate} />
    </div>
  );
};

export default DashboardScreen;
