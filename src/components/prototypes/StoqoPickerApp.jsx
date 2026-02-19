```
import React, { useState } from 'react';
import {
    Signal, Wifi, Battery, ArrowLeft,
    Camera, CheckCircle, Box, Scan, X,
    ChevronRight, List, AlertCircle
} from 'lucide-react';

// --- SHARED COMPONENTS ---

const StatusBar = ({ variant = "dark" }) => {
    const textColor = variant === "light" ? "text-white" : "text-black dark:text-white";
    return (
        <div className={`w - full px - 4 py - 2 flex justify - between items - center ${ textColor } text - xs font - medium z - 50`}>
            <div className="flex flex-col">
                <span>10:42 AM</span>
            </div>
            <div className="flex items-center space-x-1">
                <Signal size={14} />
                <Wifi size={14} />
                <Battery size={14} />
            </div>
        </div>
    );
};

const Header = ({ title = "Pick Task #9928", showBack = true, onBack, rightAction }) => {
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
            {rightAction}
        </div>
    );
};

// --- SCREENS ---

// Screen 1: Pick List
const PickListScreen = ({ onNavigate }) => {
    const [items] = useState([
        { id: 1, name: "Tropicana Slim (500g)", qty: 24, unit: "Box", status: "pending", location: "A-04-2" },
        { id: 2, name: "Indomie Goreng (40 pcs)", qty: 10, unit: "Karton", status: "pending", location: "B-12-1" },
        { id: 3, name: "Gulaku Kuning (1kg)", qty: 50, unit: "Pack", status: "done", location: "C-01-4" },
    ]);

    return (
        <div className="relative w-full h-full flex flex-col bg-gray-50 dark:bg-gray-900 font-sans">
            <StatusBar variant="dark" />
            <Header
                title="Picking List #8821"
                showBack={false}
                rightAction={
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] opacity-80">Progress</span>
                        <span className="text-xs font-bold">1/3</span>
                    </div>
                }
            />

            <div className="flex-1 overflow-y-auto p-4 space-y-3 relative">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Zone A - Dry Goods</div>

                {/* Completed Item */}
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 opacity-60">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                <CheckCircle size={16} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 line-through">Gulaku Kuning (1kg)</h3>
                                <p className="text-xs text-gray-500">Loc: C-01-4 • 50 Pack</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pending Items */}
                {items.filter(i => i.status === 'pending').map((item, idx) => (
                    <button
                        key={item.id}
                        onClick={() => onNavigate('scan', { item })}
                        className="w-full bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col gap-3 text-left hover:border-orange-400 dark:hover:border-orange-500 transition-colors group relative overflow-hidden"
                    >
                        {/* Active Indicator Strip */}
                        {idx === 0 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f27f0d]"></div>}

                        <div className="flex justify-between items-start w-full">
                            <div>
                                <h3 className="text-sm font-bold text-gray-800 dark:text-white">{item.name}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs font-mono bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-gray-600 dark:text-gray-300">
                                        Loc: {item.location}
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-lg font-bold text-[#f27f0d]">{item.qty}</span>
                                <span className="text-[10px] block text-gray-500 uppercase">{item.unit}</span>
                            </div>
                        </div>

                        <div className="w-full pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                            <span className="text-xs text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1">
                                <Scan size={14} /> Scan Barcode
                            </span>
                            <ChevronRight size={16} className="text-gray-400 group-hover:text-[#f27f0d] transition-colors" />
                        </div>
                    </button>
                ))}
            </div>

            {/* Bottom Action */}
            <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full py-3 bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 font-bold rounded-lg text-sm cursor-not-allowed">
                    Finish Picking (1/3)
                </button>
            </div>
        </div>
    );
};

// Screen 2: Scan Camera
const ScanScreen = ({ onNavigate, item }) => {
    const [scanning, setScanning] = useState(true);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        let timer;
        if (scanning) {
            timer = setTimeout(() => {
                setScanning(false);
                setScanned(true);
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [scanning]);

    return (
        <div className="relative w-full h-full flex flex-col bg-black font-sans">
            {/* Camera Viewport Simulation */}
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center overflow-hidden">
                {/* Simulated Camera Feed (Static BG + Noise) */}
                <div className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                ></div>

                {/* Fake shelves background implies context */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>

                <div className="relative z-10 text-white/50 text-xs font-mono mb-32">
                    Scanning {item?.name}...
                </div>
            </div>

            {/* UI Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between z-20">
                <div className="p-4 pt-12 flex justify-between items-center">
                    <button onClick={() => onNavigate('list')} className="w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-md">
                        <X size={18} />
                    </button>
                    <div className="px-3 py-1 bg-black/40 rounded-full backdrop-blur-md">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">AR Mode</span>
                    </div>
                    <div className="w-8"></div>
                </div>

                {/* Scanner Box */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-40 border-2 border-white/80 rounded-lg relative">
                    {/* Corners */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-[#f27f0d]"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-[#f27f0d]"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-[#f27f0d]"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-[#f27f0d]"></div>

                    {/* Scan Laser */}
                    {scanning && (
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500 shadow-[0_0_10px_red] animate-[scan_2s_linear_infinite]"></div>
                    )}

                    {scanned && (
                        <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center backdrop-blur-sm animate-in fade-in zoom-in duration-300">
                            <div className="bg-white rounded-full p-2">
                                <CheckCircle size={32} className="text-green-600" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Bottom Controls */}
                <div className="p-8 pb-12 flex flex-col items-center gap-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <p className="text-white text-sm font-medium text-center">
                        {scanned ? "Barcode Verified!" : "Point camera at item barcode"}
                    </p>

                    {scanned ? (
                        <button
                            onClick={() => onNavigate('details', { item })}
                            className="w-full bg-[#f27f0d] text-white font-bold py-3 rounded-full shadow-lg animate-bounce"
                        >
                            Confirm Item
                        </button>
                    ) : (
                        <button
                            className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center mb-4"
                            onClick={() => { setScanning(false); setScanned(true); }}
                        >
                            <div className="w-12 h-12 bg-white rounded-full"></div>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

// Screen 3: Detail / Confirmation
const DetailScreen = ({ onNavigate, item }) => {
    return (
        <div className="relative w-full h-full flex flex-col bg-gray-50 dark:bg-gray-900 font-sans">
            <StatusBar variant="dark" />
            <Header title="Confirm Pick" onBack={() => onNavigate('list')} />

            <div className="flex-1 p-6 flex flex-col items-center pt-12">
                <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center mb-6 border border-gray-100 dark:border-gray-700 relative">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md border-2 border-white dark:border-gray-800">
                        <CheckCircle size={16} className="text-white" />
                    </div>
                    <Box size={40} className="text-[#f27f0d]" />
                </div>

                <h2 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-1">{item?.name}</h2>
                <p className="text-gray-500 text-sm mb-8">SKU: 89988212001</p>

                {/* Qty Input */}
                <div className="w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-4">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Quantity Picked</label>
                    <div className="flex items-center justify-between">
                        <button className="w-10 h-10 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold text-xl flex items-center justify-center">-</button>
                        <span className="text-3xl font-bold text-gray-800 dark:text-white">{item?.qty}</span>
                        <button className="w-10 h-10 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold text-xl flex items-center justify-center">+</button>
                    </div>
                </div>

                <div className="w-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-3 rounded-lg flex gap-3 items-start mb-auto">
                    <AlertCircle size={16} className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                    <p className="text-xs text-blue-700 dark:text-blue-300 leading-snug">
                        Ensure expiry date is above 6 months from today.
                    </p>
                </div>

                <button
                    onClick={() => onNavigate('list')}
                    className="w-full py-3 bg-[#f27f0d] text-white font-bold rounded-lg shadow-md hover:bg-[#d9700b] transition-colors mt-4"
                >
                    Confirm & Next
                </button>
            </div>
        </div>
    );
};


const StoqoPickerApp = () => {
    const [screen, setScreen] = useState('list');
    const [selectedItem, setSelectedItem] = useState(null);

    const handleNavigate = (target, data = null) => {
        if (data) setSelectedItem(data.item);
        setScreen(target);
    };

    const renderScreen = () => {
        switch (screen) {
            case 'list': return <PickListScreen onNavigate={handleNavigate} />;
            case 'scan': return <ScanScreen onNavigate={handleNavigate} item={selectedItem} />;
            case 'details': return <DetailScreen onNavigate={handleNavigate} item={selectedItem} />;
            default: return <PickListScreen onNavigate={handleNavigate} />;
        }
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            {/* Phone Frame */}
            <div className="relative w-full h-full bg-white dark:bg-gray-900 shadow-2xl overflow-hidden rounded-[30px] border-[8px] border-gray-900 flex flex-col mx-auto ring-1 ring-black/10">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-30"></div>

                {renderScreen()}

                {/* Recreation Disclaimer Badge */}
                <div className="absolute bottom-6 left-0 w-full flex justify-center pointer-events-none z-50">
                    <span className="text-[9px] font-mono text-gray-400 bg-gray-100/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700 shadow-sm">
                        Recreated Warehouse App
                    </span>
                </div>
            </div>
        </div>
    );
};

export default StoqoPickerApp;
