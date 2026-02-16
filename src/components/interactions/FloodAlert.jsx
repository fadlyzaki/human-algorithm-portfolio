import React, { useState } from 'react';
import {
    MapPin, ShieldCheck, Mountain, CloudRain, Navigation,
    ChevronLeft, Map, RefreshCw, Signal, Wifi
} from 'lucide-react';

const FloodAlert = () => {
    const [view, setView] = useState('home'); // 'home' | 'detail'
    const [infoNama, setInfoNama] = useState('');
    const [infoJarak, setInfoJarak] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const bukaInfo = (nama, jarak) => {
        setInfoNama(nama);
        setInfoJarak(jarak);
        setView('detail');
    };

    const tutupInfo = () => setView('home');

    const cariJalanAman = () => {
        setIsSearching(true);
        setTimeout(() => {
            setIsSearching(false);
            bukaInfo('Masjid Raya Sumbar', '800 meter');
        }, 1000);
    };

    return (
        <div className="flex justify-center font-sans antialiased rounded-xl overflow-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {/* Phone Frame */}
            <div className="relative w-full max-w-sm bg-slate-950 h-[600px] flex flex-col overflow-hidden">

                {/* Status Bar */}
                <div className="h-8 w-full flex justify-between items-center px-6 text-white text-[11px] z-50 pt-2 bg-transparent absolute top-0 left-0 right-0">
                    <span className="font-bold">14:20</span>
                    <div className="flex gap-1.5 items-center">
                        <Signal className="w-3 h-3" />
                        <Wifi className="w-3 h-3" />
                        <div className="w-4 h-2 border border-white/50 rounded-sm bg-white/20" />
                    </div>
                </div>

                {/* Map Area */}
                <div className="relative flex-1 overflow-hidden" style={{
                    backgroundColor: '#0f172a',
                    backgroundImage: `
                        radial-gradient(rgba(51, 65, 85, 0.5) 1px, transparent 1px),
                        linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px, 60px 60px, 60px 60px'
                }}>
                    {/* SVG Map Elements */}
                    <svg className="absolute inset-0 w-full h-full">
                        {/* River */}
                        <path d="M0 80 Q 120 120 160 320 T 200 640" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="20" fill="none" />
                        <path d="M 240 0 L 240 650" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />

                        {/* Flood Zone 1 */}
                        <path d="M 176 120 Q 224 96 280 144 T 256 240 L 200 224 Z"
                            fill="rgba(239, 68, 68, 0.35)"
                            stroke="#ef4444"
                            strokeWidth="2"
                            strokeDasharray="6"
                            style={{ filter: 'drop-shadow(0 0 15px rgba(239, 68, 68, 0.4))' }}
                        />

                        {/* Flood Zone 2 */}
                        <circle cx="64" cy="440" r="56"
                            fill="rgba(239, 68, 68, 0.35)"
                            stroke="#ef4444"
                            strokeWidth="2"
                            strokeDasharray="6"
                            style={{ filter: 'drop-shadow(0 0 15px rgba(239, 68, 68, 0.4))' }}
                        />
                    </svg>

                    {/* User Location */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="absolute -inset-6 bg-blue-500/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                        <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow-xl" />
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded shadow text-[9px] font-bold whitespace-nowrap text-blue-600">LOKASI KAMU</div>
                    </div>

                    {/* Safe Point 1 */}
                    <div
                        className="absolute top-[160px] left-[48px] cursor-pointer group"
                        onClick={() => bukaInfo('Masjid Raya Sumbar', '800 m')}
                    >
                        <div className="bg-green-500 p-2 rounded-2xl shadow-xl border-2 border-white transform hover:scale-110 transition flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-white" />
                            <span className="text-[9px] text-white font-bold">AMAN</span>
                        </div>
                    </div>

                    {/* Safe Point 2 */}
                    <div
                        className="absolute top-[480px] left-[192px] cursor-pointer group"
                        onClick={() => bukaInfo('Unand (Daerah Tinggi)', '3.5 km')}
                    >
                        <div className="bg-green-500 p-2 rounded-2xl shadow-xl border-2 border-white transform hover:scale-110 transition flex items-center gap-1.5">
                            <Mountain className="w-3.5 h-3.5 text-white" />
                            <span className="text-[9px] text-white font-bold">AMAN</span>
                        </div>
                    </div>

                    {/* Location Info Bar */}
                    <div className="absolute top-10 left-3 right-3 z-40 space-y-2">
                        <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 p-2.5 rounded-2xl flex items-center gap-2.5">
                            <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                            <p className="text-white text-[11px] font-semibold">Lokasi: <span className="text-slate-400">Padang, Sumbar</span></p>
                        </div>
                    </div>

                    {/* Weather Warning */}
                    <div className="absolute top-[72px] left-3 right-3 z-40 animate-pulse">
                        <div className="bg-orange-500/90 backdrop-blur-sm p-2.5 rounded-2xl border border-white/20 flex items-center gap-2.5 shadow-lg">
                            <CloudRain className="text-white w-4 h-4 shrink-0" />
                            <p className="text-white font-bold text-[10px] leading-tight">Waspada hujan lebat di pesisir Pantai Padang!</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Control Panel */}
                <div className="px-5 pt-3 pb-6 z-50" style={{
                    background: 'rgba(15, 23, 42, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '24px 24px 0 0',
                    boxShadow: '0 -10px 40px rgba(0,0,0,0.5)'
                }}>
                    <div className="w-10 h-1 bg-slate-800 rounded-full mx-auto mb-4" />

                    {/* Home View */}
                    {view === 'home' && (
                        <div className="animate-in fade-in duration-300">
                            <div className="flex justify-between items-end mb-4">
                                <div>
                                    <h2 className="text-base font-bold text-white">Padang Siaga</h2>
                                    <p className="text-slate-400 text-[10px]">Cari jalan aman dari banjir hari ini.</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-blue-400 font-bold text-xs">26° C</p>
                                    <p className="text-slate-500 text-[9px]">Berawan</p>
                                </div>
                            </div>

                            <button
                                onClick={cariJalanAman}
                                disabled={isSearching}
                                className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 rounded-2xl shadow-2xl flex flex-col items-center gap-0.5 transition-all active:scale-95 border-b-4 border-red-800 disabled:opacity-80"
                            >
                                {isSearching ? (
                                    <RefreshCw className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        <span className="flex items-center gap-2 text-sm">
                                            <Navigation className="w-4 h-4" />
                                            EVAKUASI SEKARANG
                                        </span>
                                        <span className="text-[8px] opacity-70 tracking-widest">CARI JALAN PALING AMAN</span>
                                    </>
                                )}
                            </button>
                        </div>
                    )}

                    {/* Detail View */}
                    {view === 'detail' && (
                        <div className="animate-in fade-in duration-300">
                            <button onClick={tutupInfo} className="mb-2 flex items-center gap-1 text-slate-500 text-[11px] hover:text-slate-300 transition-colors">
                                <ChevronLeft className="w-3 h-3" /> Balik ke Peta
                            </button>
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-base font-bold text-white">{infoNama}</h3>
                                <span className="bg-blue-600 text-[9px] font-bold px-2 py-1 rounded-md text-white">{infoJarak}</span>
                            </div>
                            <div className="flex gap-2 mb-4">
                                <div className="flex-1 bg-slate-800/50 p-2.5 rounded-xl border border-white/5">
                                    <p className="text-[8px] text-slate-500 uppercase font-bold mb-0.5">Status</p>
                                    <p className="text-green-400 font-bold text-xs">Aman & Kering</p>
                                </div>
                                <div className="flex-1 bg-slate-800/50 p-2.5 rounded-xl border border-white/5">
                                    <p className="text-[8px] text-slate-500 uppercase font-bold mb-0.5">Bantuan</p>
                                    <p className="text-white font-bold text-xs">Tersedia</p>
                                </div>
                            </div>
                            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-95">
                                <Map className="w-4 h-4" />
                                LIHAT RUTE
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FloodAlert;
