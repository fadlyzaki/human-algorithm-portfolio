import React, { useState } from 'react';
import {
    Signal, Wifi, Battery, LogOut, ClipboardList, History, User,
    Truck, CheckCircle, Clock, ArrowRight, Package, AlertCircle,
    ChevronDown, Plus, Minus, X, ArrowLeft, Check
} from 'lucide-react';

// --- STYLES & CONFIG ---
const THEME = {
    colors: {
        primary: "#ec5b13",
        primaryDark: "#d44d0f",
        secondary: "#5C6AC4",
        success: "#4CAF50",
        danger: "#F44336",
        warning: "#FFC107",
        bgLight: "#F3F4F6",
        bgDark: "#111827", // gray-900
        surfaceLight: "#FFFFFF",
        surfaceDark: "#1f2937", // gray-800
        textLight: "#111827",
        textDark: "#F9FAFB",
        textSecLight: "#6B7280",
        textSecDark: "#9CA3AF",
        borderLight: "#E5E7EB",
        borderDark: "#374151"
    }
};

// --- COMPONENTS ---

const StatusBar = ({ variant = "light" }) => {
    return (
        <div className={`h-11 ${variant === 'light' ? 'bg-[#ec5b13]' : 'bg-[#ec5b13]'} flex justify-between items-center px-6 text-white text-xs font-semibold z-50 shrink-0 w-full`}>
            <span>12:30</span>
            <div className="flex items-center space-x-1">
                <Signal size={14} />
                <Wifi size={14} />
                <Battery size={14} />
            </div>
        </div>
    );
};

const BottomNav = ({ onNavigate, currentPath }) => {
    const isTasks = currentPath === '/';

    return (
        <nav className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shrink-0">
            <div className="flex justify-around items-center h-16">
                <button onClick={() => onNavigate('/')} className={`flex flex-col items-center justify-center w-full h-full ${isTasks ? 'text-[#ec5b13]' : 'text-gray-500 dark:text-gray-400'}`}>
                    <ClipboardList size={24} />
                    <span className="text-[10px] mt-1 font-medium">Tasks</span>
                </button>
                <button className="flex flex-col items-center justify-center w-full h-full text-gray-500 dark:text-gray-400 hover:text-[#ec5b13] transition-colors">
                    <History size={24} />
                    <span className="text-[10px] mt-1 font-medium">History</span>
                </button>
                <button className="flex flex-col items-center justify-center w-full h-full text-gray-500 dark:text-gray-400 hover:text-[#ec5b13] transition-colors">
                    <User size={24} />
                    <span className="text-[10px] mt-1 font-medium">Profile</span>
                </button>
            </div>
        </nav>
    );
};

// --- SCREENS ---

const TaskManagementPage = ({ onNavigate }) => {
    return (
        <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
            <StatusBar />
            <header className="bg-[#ec5b13] text-white pb-4 px-4 shadow-md z-10 shrink-0">
                <div className="flex justify-between items-center mt-2">
                    <div className="flex flex-col">
                        <span className="text-xs font-medium opacity-90">Checker</span>
                        <h1 className="text-xl font-bold">Alex Subagja</h1>
                    </div>
                    <button aria-label="Logout" className="p-2 rounded-full hover:bg-white/20 transition-colors">
                        <LogOut size={20} />
                    </button>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                    <div className="grid grid-cols-4 divide-x divide-gray-200 dark:divide-gray-700 text-center">
                        <div className="px-1">
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide">Checklist</p>
                            <p className="font-bold text-lg mt-1">MH</p>
                        </div>
                        <div className="px-1">
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide">Out. Gate</p>
                            <p className="font-bold text-lg mt-1">03</p>
                        </div>
                        <div className="px-1">
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide">Jumlah Ride</p>
                            <p className="font-bold text-lg mt-1">6</p>
                        </div>
                        <div className="px-1">
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide">Durasi</p>
                            <p className="font-bold text-lg mt-1 tracking-tight">01:00:00</p>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="flex items-center gap-2 mb-2">
                        <Truck className="text-[#ec5b13]" size={16} />
                        <span className="text-sm font-semibold text-[#ec5b13] uppercase tracking-wider">Active Task</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border-l-4 border-[#ec5b13]">
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Van H20 - TANGKOT 1</p>
                                    <h3 className="text-lg font-bold">F10R1</h3>
                                </div>
                                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wide">
                                    Sedang Dikerjakan
                                </span>
                            </div>
                            <div className="flex justify-between items-end mb-4">
                                <div>
                                    <p className="text-xs text-text-gray-500 dark:text-gray-400 mb-1">Status Pengecekan</p>
                                    <p className="text-sm font-medium">Sudah Dicek</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Waktu Loading</p>
                                    <p className="text-sm font-medium">01:00:00</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-3 mb-4">
                                <span>Progress Check</span>
                                <span className="font-semibold text-gray-900 dark:text-white">3 dari 7 order</span>
                            </div>
                            <button
                                onClick={() => onNavigate('/checking')}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md shadow transition-colors flex justify-center items-center gap-2">
                                <span>Lihat Checklist</span>
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-2 mb-2">
                        <Package className="text-gray-500 dark:text-gray-400" size={16} />
                        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Upcoming Tasks</span>
                    </div>
                    <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 opacity-90 border border-gray-200 dark:border-gray-700">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Van H20 - JAKBAR 2</p>
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white">B11R1</h3>
                                </div>
                                <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                                    Belum Dikerjakan
                                </span>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Status</p>
                                    <p className="text-sm font-medium">Sudah Dicek</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Estimasi</p>
                                    <p className="text-sm font-medium">3 dari 7 order</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 opacity-90 border border-gray-200 dark:border-gray-700">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Van H20 - TANGKOT 2</p>
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white">F12R3</h3>
                                </div>
                                <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                                    Belum Dikerjakan
                                </span>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Status</p>
                                    <p className="text-sm font-medium">Menunggu</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Total Order</p>
                                    <p className="text-sm font-medium">5 Order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <BottomNav onNavigate={onNavigate} currentPath="/" />
        </div>
    );
};

// Screen 5: Web Tracking View
const TrackingScreen = () => (
    <div className="h-full flex flex-col bg-slate-100">
        <div className="px-4 pt-2 pb-2 bg-white shadow-sm flex justify-between items-center z-10">
            <div className="flex items-center space-x-3">
                <button className="hover:bg-gray-100 rounded-full p-1 transition text-gray-600">
                    <ArrowLeft size={20} />
                </button>
                <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-medium">F10R1</span>
                    <h1 className="text-sm font-bold text-gray-900 leading-none">Warteg Jaya Bahari</h1>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Live</span>
            </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 relative">
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-48 w-full flex items-center justify-center relative overflow-hidden border border-white shadow-inner">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ec5b13_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="bg-white p-2 rounded-full shadow-lg z-10">
                    <Truck className="text-[#ec5b13]" size={24} />
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
                <div className="flex items-start space-x-3">
                    <div className="mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 ring-4 ring-green-100"></div>
                        <div className="w-0.5 h-full bg-gray-200 ml-[3px] mt-1"></div>
                    </div>
                    <div className="flex-1 pb-4">
                        <h3 className="text-sm font-bold text-gray-900">Pesanan Diterima</h3>
                        <p className="text-xs text-gray-500">10:30 AM • Gudang TANGKOT 1</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <div className="mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#ec5b13] ring-4 ring-orange-100 animate-pulse"></div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-sm font-bold text-gray-900">Sedang Diantar</h3>
                        <p className="text-xs text-gray-500">Estimasi tiba 11:15 AM</p>
                        <div className="mt-2 bg-blue-50 text-blue-700 text-xs p-2 rounded border border-blue-100 flex items-start gap-2">
                            <Clock size={14} className="mt-0.5 shrink-0" />
                            <span>Driver sedang dalam perjalanan menuju lokasi Anda. Mohon pastikan ada penerima.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="px-3 pt-2 pb-2 bg-gray-50 border-b flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold text-gray-500">Driver Info</span>
                    <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                    </div>
                </div>
                <div className="p-3 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border border-white shadow-sm">
                        <User size={20} className="text-gray-400" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-900">Budi Santoso</h3>
                        <p className="text-xs text-gray-500">B 1234 XYZ • Van</p>
                    </div>
                    <button className="ml-auto bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded-full transition-colors">
                        <Signal size={18} />
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const CheckingDetailPage = ({ onNavigate }) => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [items] = useState([
        { id: 1, name: 'Cabe Merah Keriting (Ekonomis)', qty: '20 Pak', sub: '1 kg/Pak', status: 'problem', icon: Package, iconColor: 'text-red-500', bgColor: 'bg-red-50 dark:bg-red-900/20' },
        { id: 2, name: 'Sawi Putih', qty: '20 Pak', sub: '1 kg/Pak', status: 'pending', icon: Package, iconColor: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-900/20' },
        { id: 3, name: 'Kentang Dieng', qty: '10 Pak', sub: '500 g/Pak', status: 'checked', icon: Package, iconColor: 'text-yellow-700', bgColor: 'bg-yellow-50 dark:bg-yellow-900/20' }
    ]);

    return (
        <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-900 relative font-sans">
            <StatusBar />
            <div className="bg-[#ec5b13] px-4 py-3 flex items-center justify-between text-white shrink-0 z-10 shadow-md">
                <div className="flex items-center space-x-3">
                    <button onClick={() => onNavigate('/')} className="hover:bg-white/20 rounded-full p-1 transition">
                        <ArrowLeft size={24} />
                    </button>
                    <h1 className="text-lg font-semibold tracking-wide">Checking</h1>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto pb-24 no-scrollbar">
                <div className="bg-white dark:bg-gray-800 px-4 py-4 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Van H20 - TANGKOT 1 • F10R1</p>
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">Belum Dicek</span>
                    </div>
                    <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3">Warteg Jaya Bahari - Tatang</h2>
                    <div className="flex items-center justify-between text-xs bg-gray-50 dark:bg-gray-800/50 p-2 rounded border border-gray-100 dark:border-gray-700">
                        <span className="text-gray-500 dark:text-gray-400">Jumlah SKU: <span className="text-gray-900 dark:text-white font-bold ml-1">10 Jenis</span></span>
                    </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/10 px-4 py-3 border-b border-blue-100 dark:border-blue-800/30">
                    <p className="text-[11px] leading-relaxed text-blue-800 dark:text-blue-200 flex items-center flex-wrap gap-1">
                        Jika SKU sesuai, beri tanda centang <span className="inline-flex items-center justify-center bg-green-500 text-white rounded-full w-4 h-4"><Check size={8} /></span>. Bila tidak sesuai, beri tanda silang <span className="inline-flex items-center justify-center bg-red-500 text-white rounded-full w-4 h-4"><X size={8} /></span> dan pilih keterangan.
                    </p>
                </div>

                <div className="p-4 space-y-4">
                    {items.map(item => (
                        <div key={item.id} className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 ${item.status === 'checked' ? 'opacity-60' : ''}`}>
                            <div className="p-3 flex items-start space-x-3">
                                <div className={`w-16 h-16 rounded ${item.bgColor} shrink-0 overflow-hidden relative flex items-center justify-center`}>
                                    <item.icon size={32} className={item.iconColor} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-0.5 leading-tight">{item.name}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{item.sub}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 flex items-center space-x-1">
                                            <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase">Jumlah:</span>
                                            <span className="text-xs font-bold text-gray-900 dark:text-white">{item.qty}</span>
                                        </div>
                                        <div className="flex space-x-2">
                                            {item.status === 'checked' ? (
                                                <button className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-sm">
                                                    <Check className="text-white" size={18} />
                                                </button>
                                            ) : (
                                                <>
                                                    <button className={`w-8 h-8 rounded-full ${item.status === 'problem' ? 'bg-red-500' : 'bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600'} flex items-center justify-center shadow-sm hover:opacity-90 transition`}>
                                                        <X className={`${item.status === 'problem' ? 'text-white' : 'text-gray-400'} text-lg`} size={18} />
                                                    </button>
                                                    <button className="w-8 h-8 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition">
                                                        <Check className="text-gray-400 dark:text-gray-400" size={18} />
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {item.status === 'problem' && (
                                <div className="bg-gray-50 dark:bg-gray-800/30 p-3 border-t border-gray-100 dark:border-gray-700 space-y-3">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-[10px] text-gray-500 dark:text-gray-400 mb-1 font-medium">Masalah:</label>
                                            <div className="relative">
                                                <select className="block w-full text-xs border-gray-300 dark:border-gray-600 rounded shadow-sm focus:border-[#ec5b13] focus:ring focus:ring-[#ec5b13] focus:ring-opacity-50 bg-white dark:bg-gray-700 text-gray-900 dark:text-white py-1.5 pl-2 pr-6 appearance-none">
                                                    <option>SKU Kurang</option>
                                                    <option>Rusak / Busuk</option>
                                                    <option>Salah Barang</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                                    <ChevronDown size={14} />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] text-gray-500 dark:text-gray-400 mb-1 font-medium">Jumlah:</label>
                                            <div className="flex items-center space-x-2">
                                                <button className="w-7 h-7 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-900/60 transition font-bold text-lg">
                                                    <Minus size={14} />
                                                </button>
                                                <input className="w-10 text-center text-xs font-semibold border-none bg-transparent text-gray-900 dark:text-white p-0 focus:ring-0" type="text" defaultValue="3" />
                                                <button className="w-7 h-7 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-900/60 transition font-bold text-lg">
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 pb-8 z-20 shadow-[0_-5px_10px_rgba(0,0,0,0.05)]">
                <button
                    onClick={() => setShowSuccess(true)}
                    className="w-full bg-[#ec5b13] hover:bg-[#d44d0f] text-white font-medium py-3 rounded-lg shadow-lg flex items-center justify-center space-x-2 transition-colors">
                    <span>Selesai Checking</span>
                </button>
            </div>

            {/* Success Modal Overlay */}
            {showSuccess && (
                <div className="absolute inset-0 z-[100] flex items-center justify-center px-6">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" onClick={() => setShowSuccess(false)}></div>
                    <div className="bg-white dark:bg-gray-800 w-full rounded-2xl shadow-2xl p-6 flex flex-col items-center relative animate-fade-in-up">
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            <X size={20} />
                        </button>

                        <div className="mb-6 mt-4 relative w-32 h-24 flex items-center justify-center">
                            <div className="relative w-20 h-16 border-2 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 z-0">
                                <div className="absolute -top-3 -left-2 w-24 h-4 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-sm"></div>
                            </div>
                            <div className="absolute -top-2 z-10 bg-[#ec5b13] rounded-full p-2 shadow-lg border-4 border-white dark:border-gray-800">
                                <Check size={28} className="text-white font-bold" />
                            </div>
                            <div className="absolute bottom-1 w-28 h-[2px] bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                            <div className="absolute -bottom-1 w-20 h-[2px] bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                        </div>

                        <h2 className="text-center text-lg font-bold text-gray-900 dark:text-white mb-1 leading-snug">
                            Hasil Checking Berhasil<br />Disimpan
                        </h2>
                        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mb-6 px-4">
                            Data telah berhasil diverifikasi dan tersimpan di sistem.
                        </p>
                        <button
                            onClick={() => onNavigate('/')}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Lanjut Ke Checking Lain
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// --- MAIN APP COMPONENT ---

const StoqoCheckerApp = () => {
    const [screen, setScreen] = useState('/');

    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            {/* Phone Frame */}
            <div className="relative w-full h-full bg-white dark:bg-gray-900 shadow-2xl overflow-hidden rounded-[30px] border-[8px] border-gray-900 flex flex-col mx-auto ring-1 ring-black/10">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-30"></div>

                {screen === '/' ? (
                    <TaskManagementPage onNavigate={setScreen} />
                ) : (
                    <CheckingDetailPage onNavigate={setScreen} />
                )}

                {/* Recreation Disclaimer Badge */}
                <div className="absolute bottom-6 left-0 w-full flex justify-center pointer-events-none z-50">
                    <span className="text-[9px] font-mono text-gray-400 bg-gray-100/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700 shadow-sm">
                        Recreated Checker App
                    </span>
                </div>
            </div>
        </div>
    );
};

export default StoqoCheckerApp;
