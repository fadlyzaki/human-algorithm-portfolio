import React, { useState } from "react";
import { THEME } from "../../../../constants/stoqoTheme";
import StatusBar from "../shared/StatusBar";
import BottomNav from "../shared/BottomNav";
import KPIBadge from "../shared/KPIBadge";
import { Info, ChevronUp, ChevronDown, ArrowLeft } from "lucide-react";

const OrderScreen = ({ onNavigate }) => {
  const [isOrderOpen, setIsOrderOpen] = useState(true);
  const [isGmvOpen, setIsGmvOpen] = useState(true);

  return (
    <div
      className="relative w-full h-full flex flex-col font-sans overflow-hidden"
      style={{ backgroundColor: THEME.colors.backgroundLight }}
    >
      <StatusBar />
      <div
        className="px-4 py-3 text-white shrink-0"
        style={{ backgroundColor: THEME.colors.primaryOrange }}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate("dashboard")}
            className="text-white hover:text-gray-200"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-semibold">Revenue & Orders</h1>
        </div>
      </div>

      <div className="bg-blue-50 px-4 py-3 flex items-start gap-3 border-b border-gray-200 shrink-0">
        <Info size={16} className="text-gray-500 mt-0.5" />
        <p className="text-xs text-gray-600 leading-relaxed">
          Data dibawah adalah hasil kerja Anda sampai tanggal{" "}
          <span className="font-bold text-gray-800">15 Agustus 2019</span> jam
          14:00
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24 no-scrollbar">
        {/* Order Card */}
        <div
          className="rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          style={{ backgroundColor: THEME.colors.cardLight }}
        >
          <div className="p-4 pb-2">
            <h2 className="text-2xl font-bold text-gray-800">30 Order</h2>
            <p className="text-sm text-gray-500 mt-1">yang berhasil dibuat</p>
          </div>
          <div
            onClick={() => setIsOrderOpen(!isOrderOpen)}
            className="border-t border-gray-100 px-4 py-2 flex justify-center items-center cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <span
              className="text-xs font-medium mr-1"
              style={{ color: THEME.colors.blueCta }}
            >
              {isOrderOpen ? "Tutup Detail" : "Lihat Detail"}
            </span>
            {isOrderOpen ? (
              <ChevronUp size={16} color={THEME.colors.blueCta} />
            ) : (
              <ChevronDown size={16} color={THEME.colors.blueCta} />
            )}
          </div>
          {isOrderOpen && (
            <div className="bg-gray-50 border-t border-gray-100 animate-fade-in-down">
              <div className="flex divide-x divide-gray-200">
                <div className="w-1/2 p-4">
                  <p className="text-lg font-bold text-gray-800">6</p>
                  <p className="text-xs text-gray-500 mt-1">Order Mandiri</p>
                </div>
                <div className="w-1/2 p-4">
                  <p className="text-lg font-bold text-gray-800">24</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Non Order Mandiri
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* GMV Card */}
        <div
          className="rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          style={{ backgroundColor: THEME.colors.cardLight }}
        >
          <div className="p-4 pb-2">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-bold text-gray-800">Rp.40.000.000</h2>
              <KPIBadge />
            </div>
            <p className="text-sm text-gray-500">Total GMV</p>
          </div>
          <div
            onClick={() => setIsGmvOpen(!isGmvOpen)}
            className="border-t border-gray-100 px-4 py-2 flex justify-center items-center cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <span
              className="text-xs font-medium mr-1"
              style={{ color: THEME.colors.blueCta }}
            >
              {isGmvOpen ? "Tutup Detail" : "Lihat Detail"}
            </span>
            {isGmvOpen ? (
              <ChevronUp size={16} color={THEME.colors.blueCta} />
            ) : (
              <ChevronDown size={16} color={THEME.colors.blueCta} />
            )}
          </div>
          {isGmvOpen && (
            <div className="bg-gray-50 border-t border-gray-100 animate-fade-in-down">
              <div className="flex divide-x divide-gray-200">
                <div className="w-1/2 p-4">
                  <p className="text-sm font-bold text-gray-800">
                    Rp.10.000.000
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Produk Segar (Fresh)
                  </p>
                </div>
                <div className="w-1/2 p-4">
                  <p className="text-sm font-bold text-gray-800">
                    Rp.10.000.000
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Sembako (Dry)</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <BottomNav active="performa" onNavigate={onNavigate} />
    </div>
  );
};

export default OrderScreen;
