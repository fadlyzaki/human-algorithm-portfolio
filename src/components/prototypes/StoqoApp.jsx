
import React, { useState } from 'react';
import {
    Signal, Wifi, Battery, Home, BarChart2, Store, User,
    Info, ChevronUp, ChevronDown, ArrowRight, ArrowLeft
} from 'lucide-react';

// --- CUSTOM THEME CONSTANTS ---
const THEME = {
    colors: {
        primary: "#f9f506",
        primaryOrange: "#FF6B42",
        primaryLight: "#FF8A65",
        secondaryBlue: "#EBF2FF",
        secondaryBlueDark: "#1E3A8A",
        kpiYellow: "#FFE082",
        backgroundLight: "#F2F2F2",
        backgroundDark: "#121212",
        surfaceLight: "#FFFFFF",
        surfaceDark: "#1E1E1E",
        overlayLight: "rgba(0, 0, 0, 0.5)",
        overlayDark: "rgba(0, 0, 0, 0.7)",
        blueCta: "#5B80FF",
        textPrimaryLight: "#333333",
        textPrimaryDark: "#EEEEEE",
        textSecondaryLight: "#666666",
        textSecondaryDark: "#AAAAAA",
        cardLight: "#FFFFFF",
        cardDark: "#1E1E1E",
        navInactive: "#9E9E9E",
        borderLight: "#E0E0E0",
        borderDark: "#333333"
    }
};

// --- SHARED COMPONENTS ---

const StatusBar = () => (
    <div className="h-6 w-full flex justify-between items-center px-4 pt-1 z-20 text-white text-[10px] font-medium shrink-0" style={{ backgroundColor: THEME.colors.primaryOrange }}>
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

const BottomNav = ({ active, onNavigate }) => {
    const navItems = [
        { id: 'home', icon: Home, label: 'Home', screen: 'home' },
        { id: 'performa', icon: BarChart2, label: 'Performa', screen: 'dashboard' },
        { id: 'account', icon: Store, label: 'Account', screen: '#' },
        { id: 'lead', icon: User, label: 'Lead', screen: '#' },
    ];

    return (
        <div className="flex justify-around items-center h-16 pb-2 z-20 absolute bottom-0 w-full rounded-b-[20px] overflow-hidden border-t"
            style={{ backgroundColor: THEME.colors.surfaceLight, borderColor: THEME.colors.borderLight }}>
            {navItems.map((item) => {
                const isActive = active === item.id;
                const Icon = item.icon;
                return (
                    <button
                        key={item.id}
                        onClick={() => item.screen !== '#' && onNavigate(item.screen)}
                        className={`flex flex-col items-center justify-center w-full h-full transition-colors`}
                        style={{ color: isActive ? THEME.colors.primaryOrange : THEME.colors.navInactive }}
                    >
                        <Icon size={24} strokeWidth={isActive ? 2.5 : 2} className="mb-1" />
                        <span className="text-[10px] font-medium">{item.label}</span>
                    </button>
                );
            })}
        </div>
    );
};

const KPIBadge = () => (
    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold ml-2 text-yellow-800" style={{ backgroundColor: THEME.colors.kpiYellow }}>
        KPI
    </span>
);

// --- SCREENS ---

const OnboardingScreen = ({ onNavigate }) => {
    return (
        <div className="relative w-full h-full flex flex-col font-sans overflow-hidden" style={{ backgroundColor: THEME.colors.backgroundLight }}>
            <StatusBar />
            <div className="px-4 py-3 flex items-center justify-between shadow-sm z-10 shrink-0" style={{ backgroundColor: THEME.colors.primaryOrange }}>
                <h1 className="text-white text-lg font-bold">Performa</h1>
            </div>

            {/* Background Content (Blurred) */}
            <div className="flex-1 overflow-y-auto relative filter blur-[2px] opacity-40 pointer-events-none" style={{ backgroundColor: THEME.colors.backgroundLight }}>
                <div className="flex justify-between items-center px-4 py-3 bg-gray-200 border-b border-gray-300">
                    <span className="font-bold text-gray-700 text-sm">AGUSTUS 2019</span>
                    <span className="text-xs text-gray-500 italic">diperbarui 15/08/19 14:00</span>
                </div>
                <div className="p-4 space-y-4">
                    <div className="p-4 rounded-xl shadow" style={{ backgroundColor: THEME.colors.surfaceLight }}>
                        <div className="flex items-center mb-2">
                            <h2 className="text-2xl font-bold" style={{ color: THEME.colors.textPrimaryLight }}>30 Outlet</h2>
                            <KPIBadge />
                        </div>
                        <p className="text-sm" style={{ color: THEME.colors.textSecondaryLight }}>yang bisa dikelola dalam 30 hari terakhir</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl shadow h-24" style={{ backgroundColor: THEME.colors.surfaceLight }}></div>
                        <div className="p-4 rounded-xl shadow h-24" style={{ backgroundColor: THEME.colors.surfaceLight }}></div>
                    </div>
                </div>
            </div>

            {/* Overlay Modal */}
            <div className="absolute inset-0 z-30 flex items-center justify-center p-6 backdrop-blur-sm" style={{ backgroundColor: THEME.colors.overlayLight }}>
                <div className="w-full max-w-sm rounded-[24px] shadow-xl overflow-hidden animate-in fade-in zoom-in duration-300" style={{ backgroundColor: THEME.colors.surfaceLight }}>
                    <div className="bg-gray-50 flex justify-center items-center py-8">
                        <div className="relative w-32 h-32">
                            <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" fill="#f3f4f6" r="45"></circle>
                                <rect fill="#E5E7EB" height="25" rx="2" stroke="#D1D5DB" strokeWidth="2" width="12" x="25" y="45"></rect>
                                <rect fill="#E5E7EB" height="35" rx="2" stroke="#D1D5DB" strokeWidth="2" width="12" x="44" y="35"></rect>
                                <rect fill="#E5E7EB" height="45" rx="2" stroke="#D1D5DB" strokeWidth="2" width="12" x="63" y="25"></rect>
                                <path d="M25 65 L45 45 L60 50 L80 20" stroke="#FF6B42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                                <path d="M80 20 L80 30 M80 20 L70 20" stroke="#FF6B42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                                <circle cx="25" cy="65" fill="#FF6B42" r="2"></circle>
                                <circle cx="45" cy="45" fill="#FF6B42" r="2"></circle>
                                <circle cx="60" cy="50" fill="#FF6B42" r="2"></circle>
                                <circle cx="80" cy="20" fill="#FF6B42" r="2"></circle>
                            </svg>
                        </div>
                    </div>
                    <div className="px-6 pt-4 pb-6 text-center">
                        <h3 className="text-xl font-bold mb-2" style={{ color: THEME.colors.textPrimaryLight }}>Halaman Performa</h3>
                        <p className="text-sm leading-relaxed mb-6" style={{ color: THEME.colors.textSecondaryLight }}>
                            Anda dapat mengetahui hasil kerja terkini sebagai FA STOQO pada halaman ini
                        </p>
                        <button
                            onClick={() => onNavigate('dashboard')}
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

const DashboardScreen = ({ onNavigate }) => {
    const [isDetailOpen, setIsDetailOpen] = useState(true);

    return (
        <div className="relative w-full h-full flex flex-col font-sans overflow-hidden" style={{ backgroundColor: THEME.colors.backgroundLight }}>
            <StatusBar />
            <header className="px-4 py-3 pb-6 text-white shadow-md z-10 shrink-0" style={{ backgroundColor: THEME.colors.primaryOrange }}>
                <h1 className="text-xl font-bold tracking-wide">Performa</h1>
            </header>

            <main className="flex-1 overflow-y-auto pb-24 relative no-scrollbar">
                <div className="px-4 py-3 flex items-start space-x-3 text-sm border-b" style={{ backgroundColor: THEME.colors.secondaryBlue, borderColor: THEME.colors.borderLight }}>
                    <Info size={18} className="text-blue-500 mt-0.5" />
                    <p className="leading-snug text-xs text-gray-700">
                        Data dibawah adalah hasil kerja Anda sampai tanggal <span className="font-bold text-gray-900">15 Agustus 2019</span> jam 14:00
                    </p>
                </div>

                <div className="p-4 space-y-4">
                    {/* Main Metrics Card */}
                    <div className="rounded-xl shadow overflow-hidden" style={{ backgroundColor: THEME.colors.cardLight }}>
                        <div className="p-4 pb-2">
                            <div className="flex items-center space-x-2 mb-1">
                                <span className="text-3xl font-medium" style={{ color: THEME.colors.textPrimaryLight }}>30</span>
                                <span className="text-xl font-normal" style={{ color: THEME.colors.textPrimaryLight }}>Outlet</span>
                                <KPIBadge />
                            </div>
                            <p className="text-xs" style={{ color: THEME.colors.navInactive }}>yang bisa dikelola dalam 30 hari terakhir</p>
                        </div>
                        <div
                            onClick={() => setIsDetailOpen(!isDetailOpen)}
                            className="border-t border-b border-gray-100 py-2.5 flex justify-center items-center cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                            <span className="text-xs font-medium" style={{ color: THEME.colors.blueCta }}>{isDetailOpen ? 'Tutup Detail' : 'Lihat Detail'}</span>
                            {isDetailOpen ? <ChevronUp size={16} color={THEME.colors.blueCta} className="ml-1" /> : <ChevronDown size={16} color={THEME.colors.blueCta} className="ml-1" />}
                        </div>

                        {isDetailOpen && (
                            <div className="bg-gray-50">
                                <div className="px-4 py-3 border-b border-gray-100">
                                    <h3 className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: THEME.colors.navInactive }}>Berdasarkan Status Outlet</h3>
                                    <div className="flex items-start mb-4">
                                        <div className="w-1/2 border-r border-gray-200 pr-2">
                                            <div className="flex items-baseline space-x-1">
                                                <span className="text-2xl font-medium" style={{ color: THEME.colors.textPrimaryLight }}>25</span>
                                                <span className="text-xs" style={{ color: THEME.colors.navInactive }}>Outlet Aktif</span>
                                            </div>
                                            <div className="mt-2 space-y-1">
                                                <div className="text-xs flex items-center">
                                                    <span className="font-bold text-gray-700 w-4">8</span>
                                                    <span className="ml-1" style={{ color: THEME.colors.navInactive }}>Outlet Loyal</span>
                                                </div>
                                                <div className="text-xs flex items-center">
                                                    <span className="font-bold text-gray-700 w-4">8</span>
                                                    <span className="ml-1" style={{ color: THEME.colors.navInactive }}>Outlet Reguler</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 pl-4 pt-1">
                                            <div className="flex items-baseline space-x-1">
                                                <span className="text-2xl font-medium" style={{ color: THEME.colors.textPrimaryLight }}>5</span>
                                                <span className="text-xs" style={{ color: THEME.colors.navInactive }}>Outlet Non Aktif</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Link to Orders */}
                    <button onClick={() => onNavigate('orders')} className="block w-full group text-left">
                        <div className="border rounded-xl p-4 flex justify-between items-center transition" style={{ backgroundColor: 'rgba(91, 128, 255, 0.1)', borderColor: THEME.colors.blueCta }}>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold" style={{ color: THEME.colors.blueCta }}>Lihat Order & Revenue</span>
                                <span className="text-xs text-gray-500">Detail performa penjualan</span>
                            </div>
                            <ArrowRight size={20} color={THEME.colors.blueCta} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </button>

                    {/* Grid Metrics */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl shadow p-3 flex flex-col justify-between h-24" style={{ backgroundColor: THEME.colors.cardLight }}>
                            <div className="flex items-start justify-between">
                                <span className="text-2xl font-medium" style={{ color: THEME.colors.textPrimaryLight }}>30</span>
                                <KPIBadge />
                            </div>
                            <span className="text-xs leading-tight" style={{ color: THEME.colors.navInactive }}>Total visit</span>
                        </div>
                        <div className="rounded-xl shadow p-3 flex flex-col justify-between h-24" style={{ backgroundColor: THEME.colors.cardLight }}>
                            <span className="text-2xl font-medium" style={{ color: THEME.colors.textPrimaryLight }}>7</span>
                            <span className="text-xs leading-tight" style={{ color: THEME.colors.navInactive }}>Rata-rata visit per hari</span>
                        </div>
                        <div className="rounded-xl shadow p-3 flex flex-col justify-between h-24" style={{ backgroundColor: THEME.colors.cardLight }}>
                            <span className="text-2xl font-medium" style={{ color: THEME.colors.textPrimaryLight }}>25</span>
                            <div className="flex flex-col">
                                <span className="text-xs leading-tight" style={{ color: THEME.colors.navInactive }}>Total visit</span>
                                <span className="text-xs leading-tight" style={{ color: THEME.colors.navInactive }}>to order</span>
                            </div>
                        </div>
                        <div className="rounded-xl shadow p-3 flex flex-col justify-between h-24" style={{ backgroundColor: THEME.colors.cardLight }}>
                            <div className="flex items-start justify-between">
                                <span className="text-2xl font-medium" style={{ color: THEME.colors.textPrimaryLight }}>15</span>
                                <KPIBadge />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs leading-tight" style={{ color: THEME.colors.navInactive }}>Outlet yang</span>
                                <span className="text-xs leading-tight" style={{ color: THEME.colors.navInactive }}>selesai diedukasi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <BottomNav active="performa" onNavigate={onNavigate} />
        </div>
    );
};

const OrderScreen = ({ onNavigate }) => {
    const [isOrderOpen, setIsOrderOpen] = useState(true);
    const [isGmvOpen, setIsGmvOpen] = useState(true);

    return (
        <div className="relative w-full h-full flex flex-col font-sans overflow-hidden" style={{ backgroundColor: THEME.colors.backgroundLight }}>
            <StatusBar />
            <div className="px-4 py-3 text-white shrink-0" style={{ backgroundColor: THEME.colors.primaryOrange }}>
                <div className="flex items-center gap-2">
                    <button onClick={() => onNavigate('dashboard')} className="text-white hover:text-gray-200">
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-lg font-semibold">Revenue & Orders</h1>
                </div>
            </div>

            <div className="bg-blue-50 px-4 py-3 flex items-start gap-3 border-b border-gray-200 shrink-0">
                <Info size={16} className="text-gray-500 mt-0.5" />
                <p className="text-xs text-gray-600 leading-relaxed">
                    Data dibawah adalah hasil kerja Anda sampai tanggal <span className="font-bold text-gray-800">15 Agustus 2019</span> jam 14:00
                </p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24 no-scrollbar">

                {/* Order Card */}
                <div className="rounded-xl shadow-sm border border-gray-200 overflow-hidden" style={{ backgroundColor: THEME.colors.cardLight }}>
                    <div className="p-4 pb-2">
                        <h2 className="text-2xl font-bold text-gray-800">30 Order</h2>
                        <p className="text-sm text-gray-500 mt-1">yang berhasil dibuat</p>
                    </div>
                    <div
                        onClick={() => setIsOrderOpen(!isOrderOpen)}
                        className="border-t border-gray-100 px-4 py-2 flex justify-center items-center cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                        <span className="text-xs font-medium mr-1" style={{ color: THEME.colors.blueCta }}>{isOrderOpen ? "Tutup Detail" : "Lihat Detail"}</span>
                        {isOrderOpen ? <ChevronUp size={16} color={THEME.colors.blueCta} /> : <ChevronDown size={16} color={THEME.colors.blueCta} />}
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
                                    <p className="text-xs text-gray-500 mt-1">Non Order Mandiri</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* GMV Card */}
                <div className="rounded-xl shadow-sm border border-gray-200 overflow-hidden" style={{ backgroundColor: THEME.colors.cardLight }}>
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
                        <span className="text-xs font-medium mr-1" style={{ color: THEME.colors.blueCta }}>{isGmvOpen ? "Tutup Detail" : "Lihat Detail"}</span>
                        {isGmvOpen ? <ChevronUp size={16} color={THEME.colors.blueCta} /> : <ChevronDown size={16} color={THEME.colors.blueCta} />}
                    </div>
                    {isGmvOpen && (
                        <div className="bg-gray-50 border-t border-gray-100 animate-fade-in-down">
                            <div className="flex divide-x divide-gray-200">
                                <div className="w-1/2 p-4">
                                    <p className="text-sm font-bold text-gray-800">Rp.10.000.000</p>
                                    <p className="text-xs text-gray-500 mt-1">Produk Segar (Fresh)</p>
                                </div>
                                <div className="w-1/2 p-4">
                                    <p className="text-sm font-bold text-gray-800">Rp.10.000.000</p>
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

// --- APP CONTAINER ---

const StoqoApp = () => {
    const [currentScreen, setCurrentScreen] = useState('home');

    const renderScreen = () => {
        const ScreenMap = {
            home: OnboardingScreen,
            dashboard: DashboardScreen,
            orders: OrderScreen
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

