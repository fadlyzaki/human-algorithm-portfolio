import React, { useState } from 'react';
import {
    Signal, Wifi, Battery, ArrowLeft, MessageCircle,
    SkipBack, Pause, SkipForward, Phone, FileText,
    LayoutGrid, Mail, Info, AlertTriangle, AlertCircle, CheckCircle
} from 'lucide-react';

// --- SHARED COMPONENTS ---

const StatusBar = ({ variant = "dark" }) => {
    const textColor = variant === "light" ? "text-white" : "text-black dark:text-white";
    return (
        <div className={`w-full px-4 py-2 flex justify-between items-center ${textColor} text-xs font-medium z-50`}>
            <div className="flex flex-col">
                <span>8:13 PM</span>
            </div>
            <div className="flex items-center space-x-1">
                <Signal size={14} />
                <Wifi size={14} />
                <Battery size={14} />
            </div>
        </div>
    );
};

const Header = ({ title = "Order #74HB21G8Z3", showBack = true, onBack }) => {
    return (
        <div className="bg-[#f27f0d] text-white px-4 py-3 shadow-md sticky top-0 z-40 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                {showBack && (
                    <button onClick={onBack} className="focus:outline-none">
                        <ArrowLeft size={24} />
                    </button>
                )}
                <h1 className="text-lg font-bold truncate max-w-[180px]">{title}</h1>
            </div>
            <button className="focus:outline-none flex flex-col items-center opacity-90 hover:opacity-100">
                <MessageCircle size={24} />
                <span className="text-[10px] font-medium mt-0.5">Chat</span>
            </button>
        </div>
    );
};

const OrderItem = ({ name, price }) => (
    <div className="flex justify-between text-xs py-1">
        <span className="text-gray-600 dark:text-gray-400">{name}</span>
        <span className="font-medium text-gray-900 dark:text-gray-100">{price}</span>
    </div>
);

const OrderSection = ({ title, subTitle, status, statusColorClass, statusTextClass, alertMessage, alertType = "info", items, total }) => {
    const alertStyles = {
        info: "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-200 dark:border-blue-800",
        warning: "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-900/20 dark:text-amber-200 dark:border-amber-800",
        danger: "bg-red-50 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-200 dark:border-red-800",
        success: "bg-[#FFF8E1] text-gray-800 border-[#FFC107] dark:bg-yellow-900/20 dark:text-gray-200 dark:border-yellow-600",
    };

    const AlertIcon = {
        info: Info,
        warning: AlertTriangle,
        danger: AlertTriangle, // Using AlertTriangle for warning/danger
        success: CheckCircle
    }[alertType] || Info;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden mb-4 border border-gray-100 dark:border-gray-700">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white">{title}</h3>
                    {subTitle && <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">{subTitle}</p>}
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${statusColorClass} ${statusTextClass}`}>
                    {status}
                </span>
            </div>

            {alertMessage && (
                <div className={`px-4 py-3 border-l-4 text-xs ${alertStyles[alertType] || alertStyles.info} flex gap-2 items-start`}>
                    <div className="shrink-0 mt-0.5">
                        <AlertIcon size={14} />
                    </div>
                    <p className="leading-snug">{alertMessage}</p>
                </div>
            )}

            <div className="p-4 space-y-2 bg-white dark:bg-gray-800">
                {items.map((item, idx) => (
                    <OrderItem key={idx} {...item} />
                ))}
            </div>

            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 flex justify-between items-center text-sm border-t border-gray-100 dark:border-gray-700">
                <span className="font-bold text-gray-500 dark:text-gray-400">Total</span>
                <span className="font-bold text-gray-900 dark:text-white">{total}</span>
            </div>
        </div>
    );
};

// --- Screen Components ---

// Screen 1: Notification Home
const NotificationHome = ({ onNavigate }) => {
    return (
        <div className="relative w-full h-full flex flex-col bg-black font-sans">
            {/* Wallpaper Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <StatusBar variant="light" />

            <div className="relative z-10 w-full h-full flex flex-col pt-12 px-2">
                {/* Music Player Widget */}
                <div className="bg-[#2C2C2C]/90 backdrop-blur-sm rounded-md p-3 mb-2 flex items-center shadow-lg mx-1">
                    <div className="w-10 h-10 bg-gray-600 rounded mr-3 overflow-hidden shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-white text-xs font-medium truncate">Coldplay - A Sky....</h3>
                        <p className="text-white/60 text-[10px]">Playing..</p>
                    </div>
                    <div className="flex items-center space-x-3 text-white">
                        <SkipBack size={18} fill="currentColor" />
                        <Pause size={20} fill="currentColor" />
                        <SkipForward size={18} fill="currentColor" />
                    </div>
                </div>

                {/* Notification Card */}
                <button onClick={() => onNavigate('details-processing')} className="block transform transition hover:scale-[1.02] active:scale-95 text-left w-full">
                    <div className="bg-white dark:bg-gray-800 rounded-md p-3 shadow-xl mx-1 border-l-4 border-[#f27f0d]">
                        <div className="flex justify-between items-start mb-1">
                            <div className="flex items-center space-x-2">
                                <div className="w-5 h-5 bg-[#f27f0d] rounded-full flex items-center justify-center shrink-0">
                                    <span className="text-white font-bold text-[10px]">S</span>
                                </div>
                                <span className="text-gray-800 dark:text-gray-200 text-xs font-bold">Pemberitahuan dari Stoqo</span>
                            </div>
                            <span className="text-gray-500 dark:text-gray-400 text-[10px]">8:13 PM</span>
                        </div>
                        <div className="pl-7">
                            <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                                Pesanan Anda sedang diproses. <br />
                                Lihat jam kedatangan besok.
                            </p>
                        </div>
                    </div>
                </button>

                {/* Fake App Icons Grid at Bottom */}
                <div className="mt-auto pb-8 px-2 flex flex-col items-center">
                    <div className="flex space-x-2 mb-8">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                    </div>
                    <div className="flex justify-between w-full px-4 mb-4">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-blue-600/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/10">
                                <Phone className="text-blue-400" size={24} />
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-cyan-600/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/10">
                                <FileText className="text-cyan-400" size={24} />
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/10">
                                <LayoutGrid className="text-white" size={30} />
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-orange-600/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/10 relative overflow-hidden">
                                <div className="w-8 h-8 rounded-full border-4 border-gray-300 bg-gray-800 flex items-center justify-center">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-red-600/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/10">
                                <Mail className="text-red-500" size={18} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 w-full h-8 flex justify-center items-center">
                    <div className="w-32 h-1 bg-white rounded-full opacity-50"></div>
                </div>
            </div>
        </div>
    );
};

// Shared Layout for Details Screens
const OrderDetailsLayout = ({ children, onNavigate, activeScreen }) => {
    const navButtons = [
        { id: 'home', label: 'Home' },
        { id: 'details-processing', label: 'Processing' },
        { id: 'details-ready', label: 'Ready' },
        { id: 'details-ontheway', label: 'On Way' },
        { id: 'details-delayed', label: 'Delayed' },
        { id: 'details-delivered', label: 'Delivered' }
    ];

    return (
        <div className="relative w-full h-full flex flex-col bg-gray-100 dark:bg-gray-900 font-sans">
            <StatusBar variant="dark" />
            <Header onBack={() => onNavigate('home')} />
            <main className="flex-1 overflow-y-auto p-4 no-scrollbar">
                <div className="px-1 mb-4">
                    <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rincian Pesanan</h2>
                </div>
                {children}

                {/* Navigation Helper for Prototype */}
                <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-bold mb-2 text-gray-500 uppercase flex items-center gap-2">
                        <AlertCircle size={12} />
                        Prototype Status Control
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                        {navButtons.map(btn => (
                            <button
                                key={btn.id}
                                onClick={() => onNavigate(btn.id)}
                                className={`p-2 rounded text-center transition-colors ${activeScreen === btn.id
                                    ? 'bg-[#f27f0d] text-white font-bold'
                                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-center">
                        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded border border-gray-200 dark:border-gray-600">
                            Recreated 2018 Prototype
                        </span>
                    </div>
                </div>
            </main>
            <div className="absolute bottom-0 w-full h-8 flex justify-center items-center bg-transparent pointer-events-none">
                <div className="w-32 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            </div>
        </div>
    );
};

// Screen 2: Processing
const DetailsProcessing = ({ onNavigate }) => {
    return (
        <OrderDetailsLayout onNavigate={onNavigate} activeScreen="details-processing">
            <OrderSection
                title="Pengiriman Produk Segar"
                status="Sedang Diproses"
                statusColorClass="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800"
                statusTextClass="text-blue-600 dark:text-blue-300"
                alertMessage={<span>Pesanan sedang diproses dan tiba besok sekitar jam <span className="font-bold">05:00 - 06:30</span></span>}
                alertType="info"
                items={[
                    { name: "Cabai Merah Keriting (8 pak)", price: "Rp 38.000" },
                    { name: "Wortel Ekonomis (8 pak)", price: "Rp 16.000" },
                    { name: "Ongkos Kirim", price: "Rp 30.000" }
                ]}
                total="Rp 84.000"
            />

            <OrderSection
                title="Pengiriman Sembako"
                subTitle="dikirim sesuai jam buka tutup"
                status="Sedang Diproses"
                statusColorClass="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800"
                statusTextClass="text-blue-600 dark:text-blue-300"
                alertMessage="Pesanan sedang diproses dan tiba besok sesuai dengan jam buka tutup"
                alertType="warning"
                items={[
                    { name: "Kapal Api Kopi Instan (10 pak)", price: "Rp 102.000" }
                ]}
                total="Rp 102.000"
            />
        </OrderDetailsLayout>
    );
};

// Screen 3: Ready to Deliver
const DetailsReady = ({ onNavigate }) => {
    return (
        <OrderDetailsLayout onNavigate={onNavigate} activeScreen="details-ready">
            <OrderSection
                title="Pengiriman Produk Segar"
                status="Siap Diantarkan"
                statusColorClass="bg-blue-100 dark:bg-blue-900"
                statusTextClass="text-blue-700 dark:text-blue-200"
                alertMessage={<span>Pesanan siap diantarkan dan tiba sekitar jam <span className="font-bold">05:00 - 06:30</span></span>}
                alertType="warning"
                items={[
                    { name: "Cabai Merah Keriting (8 pak)", price: "Rp 38.000" },
                    { name: "Wortel Ekonomis (8 pak)", price: "Rp 16.000" },
                    { name: "Ongkos Kirim", price: "Rp 30.000" }
                ]}
                total="Rp 84.000"
            />

            <OrderSection
                title="Pengiriman Sembako"
                subTitle="dikirim sesuai jam buka tutup"
                status="Sedang Diproses"
                statusColorClass="bg-gray-200 dark:bg-gray-700"
                statusTextClass="text-gray-700 dark:text-gray-200"
                alertMessage="Pesanan sedang diproses dan tiba sesuai dengan jam buka tutup"
                alertType="warning"
                items={[
                    { name: "Kapal Api Kopi Instan (10 pak)", price: "Rp 102.000" }
                ]}
                total="Rp 102.000"
            />
        </OrderDetailsLayout>
    );
};

// Screen 4: On The Way
const DetailsOnTheWay = ({ onNavigate }) => {
    return (
        <OrderDetailsLayout onNavigate={onNavigate} activeScreen="details-ontheway">
            <OrderSection
                title="Pengiriman Produk Segar"
                status="Diperjalanan"
                statusColorClass="bg-[#DCEDC8] dark:bg-[#33691E]"
                statusTextClass="text-[#558B2F] dark:text-[#DCEDC8]"
                alertMessage="Kurir sedang menuju lokasi pengiriman. Persiapkan uang untuk pembayaran ke kurir."
                alertType="warning"
                items={[
                    { name: "Cabai Merah Keriting (8 pak)", price: "Rp 38.000" },
                    { name: "Wortel Ekonomis (8 pak)", price: "Rp 16.000" },
                    { name: "Ongkos Kirim", price: "Rp 30.000" }
                ]}
                total="Rp 84.000"
            />

            <OrderSection
                title="Pengiriman Sembako"
                subTitle="dikirim sesuai jam buka tutup"
                status="Sedang Diproses"
                statusColorClass="bg-blue-50 dark:bg-blue-900/40"
                statusTextClass="text-blue-600 dark:text-blue-200"
                alertMessage={<span>Pesanan sedang diproses dan tiba sekitar jam <strong>07:00 - 18:00</strong></span>}
                alertType="warning"
                items={[
                    { name: "Kapal Api Kopi Instan (10 pak)", price: "Rp 102.000" }
                ]}
                total="Rp 102.000"
            />
        </OrderDetailsLayout>
    );
};

// Screen 5: Delayed
const DetailsDelayed = ({ onNavigate }) => {
    return (
        <OrderDetailsLayout onNavigate={onNavigate} activeScreen="details-delayed">
            <OrderSection
                title="Pengiriman Produk Segar"
                status="Diperjalanan"
                statusColorClass="bg-[#E6F4EA] dark:bg-[#064E3B]"
                statusTextClass="text-[#166534] dark:text-[#6EE7B7]"
                alertMessage={<span>Mohon maaf, pengiriman ini diperkirakan akan tiba pada jam <strong>07:00 - 08:00</strong></span>}
                alertType="danger"
                items={[
                    { name: "Cabai Merah Keriting (8 pak)", price: "Rp 38.000" },
                    { name: "Wortel Ekonomis (8 pak)", price: "Rp 16.000" },
                    { name: "Ongkos Kirim", price: "Rp 30.000" }
                ]}
                total="Rp 84.000"
            />

            <OrderSection
                title="Pengiriman Sembako"
                subTitle="dikirim sesuai jam buka tutup"
                status="Sedang Diproses"
                statusColorClass="bg-[#E0F2FE] dark:bg-[#0C4A6E]"
                statusTextClass="text-[#0369A1] dark:text-[#7DD3FC]"
                alertMessage={<span>Pesanan sedang diproses dan tiba sekitar jam <strong>07:00 - 18:00</strong></span>}
                alertType="warning"
                items={[
                    { name: "Kapal Api Kopi Instan (10 pak)", price: "Rp 102.000" }
                ]}
                total="Rp 102.000"
            />
        </OrderDetailsLayout>
    );
};

// Screen 6: Delivered
const DetailsDelivered = ({ onNavigate }) => {
    return (
        <OrderDetailsLayout onNavigate={onNavigate} activeScreen="details-delivered">
            <OrderSection
                title="Pengiriman Produk Segar"
                status="Sudah Sampai"
                statusColorClass="bg-[#DCEDC8] dark:bg-green-900"
                statusTextClass="text-[#558B2F] dark:text-green-200"
                alertMessage="Pesanan sudah sampai dan mohon lakukan pengecekan barang."
                alertType="success"
                items={[
                    { name: "Cabai Merah Keriting (8 pak)", price: "Rp 38.000" },
                    { name: "Wortel Ekonomis (8 pak)", price: "Rp 16.000" },
                    { name: "Ongkos Kirim", price: "Rp 30.000" }
                ]}
                total="Rp 84.000"
            />

            <OrderSection
                title="Pengiriman Sembako"
                subTitle="dikirim sesuai jam buka tutup"
                status="Sedang Diproses"
                statusColorClass="bg-[#E1F5FE] dark:bg-blue-900"
                statusTextClass="text-[#0277BD] dark:text-blue-200"
                alertMessage={<span>Pesanan sedang diproses dan tiba sekitar jam <span className="font-bold">07:00 - 18:00</span></span>}
                alertType="warning"
                items={[
                    { name: "Kapal Api Kopi Instan (10 pak)", price: "Rp 102.000" }
                ]}
                total="Rp 102.000"
            />
        </OrderDetailsLayout>
    );
};

const StoqoLogisticsApp = () => {
    const [currentScreen, setCurrentScreen] = useState('home');

    const renderScreen = () => {
        switch (currentScreen) {
            case 'home': return <NotificationHome onNavigate={setCurrentScreen} />;
            case 'details-processing': return <DetailsProcessing onNavigate={setCurrentScreen} />;
            case 'details-ready': return <DetailsReady onNavigate={setCurrentScreen} />;
            case 'details-ontheway': return <DetailsOnTheWay onNavigate={setCurrentScreen} />;
            case 'details-delayed': return <DetailsDelayed onNavigate={setCurrentScreen} />;
            case 'details-delivered': return <DetailsDelivered onNavigate={setCurrentScreen} />;
            default: return <NotificationHome onNavigate={setCurrentScreen} />;
        }
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            {/* Phone Frame */}
            <div className="relative w-full h-full bg-white shadow-2xl overflow-hidden rounded-[30px] border-[8px] border-gray-900 flex flex-col mx-auto ring-1 ring-black/10">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-30"></div>
                {renderScreen()}
            </div>
        </div>
    );
};

export default StoqoLogisticsApp;
