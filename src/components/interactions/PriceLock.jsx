import React, { useState, useEffect } from 'react';
import { Plane, Shield, Clock, ChevronRight, Info, CheckCircle, AlertCircle, ArrowLeft, Home, User, Bell } from 'lucide-react';

const PriceLock = () => {
    const [screen, setScreen] = useState('search');
    const [lockedItem, setLockedItem] = useState(null);
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

    useEffect(() => {
        if (lockedItem && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [lockedItem, timeLeft]);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}h ${m}m ${s}s`;
    };

    const flight = {
        id: 1,
        airline: "Garuda Indonesia",
        code: "GA-402",
        route: "CGK → DPS",
        time: "08:00 - 10:55",
        duration: "1h 55m",
        price: 1500000,
        lockFee: 29000,
        risk: "High",
    };

    const handleLock = () => {
        setLockedItem(flight);
        setScreen('success');
    };

    const Header = ({ title, showBack }) => (
        <div className="bg-blue-600 text-white p-3 flex items-center shadow-md sticky top-0 z-50">
            {showBack && (
                <button onClick={() => setScreen('search')} className="mr-3">
                    <ArrowLeft size={20} />
                </button>
            )}
            <h1 className="text-sm font-bold flex-1">{title}</h1>
            <Bell size={16} />
        </div>
    );

    const BottomNav = () => (
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around p-2 text-[10px] text-gray-500 z-50">
            <button
                onClick={() => setScreen('search')}
                className={`flex flex-col items-center ${screen === 'search' ? 'text-blue-600' : ''}`}
            >
                <Home size={18} className="mb-0.5" />
                Search
            </button>
            <button
                onClick={() => setScreen('bookings')}
                className={`flex flex-col items-center ${screen === 'bookings' || screen === 'success' ? 'text-blue-600' : ''}`}
            >
                <Clock size={18} className="mb-0.5" />
                My Trips
            </button>
            <button className="flex flex-col items-center">
                <User size={18} className="mb-0.5" />
                Profile
            </button>
        </div>
    );

    const SearchScreen = () => (
        <div className="bg-gray-50 h-full pb-14 overflow-y-auto">
            <Header title="Jakarta to Bali" showBack={false} />

            {/* Date Strip */}
            <div className="bg-white p-2 flex overflow-x-auto space-x-2 shadow-sm mb-3">
                {['Today', 'Tomorrow', 'Wed, 24', 'Thu, 25'].map((d, i) => (
                    <div key={i} className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-medium ${i === 1 ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'text-gray-500 border border-gray-200'}`}>
                        {d}
                    </div>
                ))}
            </div>

            <div className="px-3 space-y-3">
                <div className="flex justify-between items-center text-[11px] text-gray-500">
                    <span>3 flights found</span>
                    <span>Filter & Sort</span>
                </div>

                {/* Flight Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-3">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white text-[10px] font-bold">GA</div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-xs">{flight.airline}</h3>
                                    <p className="text-[10px] text-gray-500">{flight.code} • Direct</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="block text-sm font-bold text-orange-500">Rp 1.500.000</span>
                                <span className="text-[10px] text-gray-400">/pax</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-3 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                            <div className="text-center">
                                <span className="block font-bold text-xs">08:00</span>
                                <span className="text-[10px] text-gray-400">CGK</span>
                            </div>
                            <div className="flex flex-col items-center px-3 w-full">
                                <span className="text-[10px] text-gray-400">{flight.duration}</span>
                                <div className="w-full h-[1px] bg-gray-300 relative my-1">
                                    <Plane size={10} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 bg-gray-50 p-[1px]" />
                                </div>
                            </div>
                            <div className="text-center">
                                <span className="block font-bold text-xs">10:55</span>
                                <span className="text-[10px] text-gray-400">DPS</span>
                            </div>
                        </div>

                        {/* Price Lock CTA */}
                        <div
                            onClick={() => setScreen('lock-modal')}
                            className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-2.5 flex items-center justify-between cursor-pointer hover:bg-blue-100 transition-colors"
                        >
                            <div className="flex items-center space-x-2">
                                <div className="bg-blue-600 p-1.5 rounded-full text-white shadow-sm">
                                    <Shield size={12} />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold text-blue-900">Price Lock Available</p>
                                    <p className="text-[9px] text-blue-700">Freeze this price for 24h. No commitment.</p>
                                </div>
                            </div>
                            <ChevronRight size={14} className="text-blue-400" />
                        </div>
                    </div>

                    <div className="bg-gray-50 px-3 py-2 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-[10px] text-green-600 font-medium flex items-center">
                            <CheckCircle size={10} className="mr-1" /> Refundable
                        </span>
                        <button className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-[11px] font-bold shadow-md hover:bg-orange-600">
                            Select
                        </button>
                    </div>
                </div>

                {/* Dummy Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 opacity-70">
                    <div className="flex justify-between mb-2">
                        <div className="font-bold text-gray-600 text-xs">Lion Air</div>
                        <div className="font-bold text-gray-600 text-xs">Rp 1.100.000</div>
                    </div>
                    <div className="text-[10px] text-gray-400">Price Lock unavailable for this flight</div>
                </div>
            </div>
        </div>
    );

    const LockModal = () => (
        <div className="absolute inset-0 bg-black/60 z-50 flex items-end justify-center backdrop-blur-sm">
            <div className="bg-white w-full rounded-t-2xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-300">
                {/* Modal Header */}
                <div className="bg-blue-600 p-3 text-white flex justify-between items-start">
                    <div>
                        <h2 className="text-sm font-bold flex items-center gap-1.5">
                            <Shield className="fill-blue-400 text-white" size={16} />
                            Secure Price
                        </h2>
                        <p className="text-[10px] text-blue-100 mt-0.5">Don't let the price jump while you decide.</p>
                    </div>
                    <button onClick={() => setScreen('search')} className="text-white/80 hover:text-white text-sm">✕</button>
                </div>

                <div className="p-4">
                    {/* Flight Summary */}
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                        <div>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wide">Flight Price</p>
                            <p className="text-lg font-bold text-gray-800">Rp 1.500.000</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] text-gray-500 uppercase tracking-wide">Lock Duration</p>
                            <p className="text-sm font-bold text-blue-600 flex items-center justify-end gap-1">
                                <Clock size={14} /> 24 Hours
                            </p>
                        </div>
                    </div>

                    {/* AI Insight */}
                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-2.5 mb-4 flex gap-2">
                        <div className="mt-0.5"><AlertCircle size={14} className="text-yellow-600" /></div>
                        <div>
                            <p className="text-[10px] font-bold text-yellow-800">AI Price Prediction</p>
                            <p className="text-[10px] text-yellow-700 mt-0.5 leading-relaxed">
                                We detect high demand for this route. Prices are <strong>85% likely to increase</strong> by tomorrow.
                            </p>
                        </div>
                    </div>

                    {/* Fee */}
                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-200 mb-4">
                        <div>
                            <p className="text-xs font-bold text-gray-700">Price Lock Fee</p>
                            <p className="text-[10px] text-gray-500">Non-refundable service fee</p>
                        </div>
                        <p className="text-sm font-bold text-gray-800">Rp {flight.lockFee.toLocaleString()}</p>
                    </div>

                    {/* Action */}
                    <button
                        onClick={handleLock}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95 text-sm"
                    >
                        Pay Rp {flight.lockFee.toLocaleString()} & Lock
                    </button>

                    <p className="text-[9px] text-center text-gray-400 mt-3">
                        By continuing, you agree to the Terms & Conditions of Price Lock.
                    </p>
                </div>
            </div>
        </div>
    );

    const SuccessScreen = () => (
        <div className="h-full bg-blue-600 flex flex-col items-center justify-center p-4 text-white text-center">
            <div className="bg-white/20 p-4 rounded-full mb-4 animate-bounce">
                <Shield size={48} className="text-white fill-white" />
            </div>
            <h2 className="text-xl font-bold mb-1">Price Locked!</h2>
            <p className="text-blue-100 mb-6 max-w-[240px] text-xs">
                You have secured the price of <strong>Rp 1.500.000</strong> for the next 24 hours.
            </p>

            <div className="bg-white/10 rounded-xl p-3 w-full max-w-[240px] backdrop-blur-sm mb-6">
                <p className="text-[10px] text-blue-200 mb-1">Time Remaining</p>
                <p className="text-lg font-mono font-bold tracking-wider">{formatTime(timeLeft)}</p>
            </div>

            <button
                onClick={() => setScreen('bookings')}
                className="bg-white text-blue-600 font-bold py-2.5 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-colors w-full max-w-[240px] text-sm"
            >
                View My Bookings
            </button>
        </div>
    );

    const BookingsScreen = () => (
        <div className="bg-gray-50 h-full pb-14 overflow-y-auto">
            <Header title="My Trips" showBack={false} />

            <div className="p-3">
                {/* Tabs */}
                <div className="flex mb-4 border-b border-gray-200">
                    <button className="flex-1 pb-2 text-[11px] font-bold text-blue-600 border-b-2 border-blue-600">Saved & Locked</button>
                    <button className="flex-1 pb-2 text-[11px] font-medium text-gray-400">Upcoming</button>
                    <button className="flex-1 pb-2 text-[11px] font-medium text-gray-400">Past</button>
                </div>

                {lockedItem ? (
                    <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
                        {/* Countdown Header */}
                        <div className="bg-blue-600 p-2.5 flex justify-between items-center text-white">
                            <div className="flex items-center gap-1.5">
                                <Clock size={14} />
                                <span className="text-[10px] font-bold uppercase">Expires in</span>
                            </div>
                            <span className="font-mono font-bold text-xs">{formatTime(timeLeft)}</span>
                        </div>

                        <div className="p-3">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 className="font-bold text-sm text-gray-800">Bali (DPS) Trip</h3>
                                    <p className="text-[11px] text-gray-500">{lockedItem.airline} • {lockedItem.code}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] text-gray-400 line-through">Rp 1.850.000</p>
                                    <p className="text-sm font-bold text-blue-600">Rp 1.500.000</p>
                                </div>
                            </div>

                            <div className="bg-blue-50 text-blue-800 text-[10px] p-2.5 rounded-lg mb-3 flex gap-1.5 items-start">
                                <Info size={12} className="mt-0.5 flex-shrink-0" />
                                <p>Current market price has risen to Rp 1.850.000. You saved Rp 350.000 by locking!</p>
                            </div>

                            <div className="flex gap-2">
                                <button className="flex-1 border border-gray-300 text-gray-600 font-bold py-2 rounded-lg text-[11px]">
                                    Cancel
                                </button>
                                <button className="flex-[2] bg-orange-500 text-white font-bold py-2 rounded-lg text-[11px] shadow-md shadow-orange-200">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-16 text-gray-400 text-xs">
                        <p>No active locks.</p>
                    </div>
                )}
            </div>
            <BottomNav />
        </div>
    );

    return (
        <div className="flex justify-center font-sans antialiased rounded-xl overflow-hidden">
            <div className="w-full max-w-sm bg-white h-[600px] relative shadow-[0_0_40px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden">
                {screen === 'search' && <SearchScreen />}
                {screen === 'search' && <BottomNav />}
                {screen === 'lock-modal' && (
                    <>
                        <SearchScreen />
                        <LockModal />
                    </>
                )}
                {screen === 'success' && <SuccessScreen />}
                {screen === 'bookings' && <BookingsScreen />}
            </div>
        </div>
    );
};

export default PriceLock;
