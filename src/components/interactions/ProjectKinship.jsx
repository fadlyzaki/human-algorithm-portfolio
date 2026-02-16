import React, { useState } from 'react';
import {
    ArrowLeft, MapPin, Heart, User, ChevronRight, ChevronLeft,
    Sparkles, Globe, Video, Check, Play, RotateCcw,
    Bike, Map, Zap, Loader2
} from 'lucide-react';

const ProjectKinship = () => {
    const [screen, setScreen] = useState('discovery');

    const goTo = (s) => setScreen(s);

    // Screen 1: Sender Discovery
    const DiscoveryScreen = () => (
        <div className="h-full flex flex-col bg-slate-50">
            <div className="px-4 pt-3 pb-4 bg-white rounded-b-3xl shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-extrabold text-slate-800 tracking-tighter">SuperApp</span>
                    <div className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                        <User size={14} />
                    </div>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="bg-indigo-600 text-white p-1.5 rounded-lg">
                        <MapPin size={14} />
                    </div>
                    <div className="flex-1">
                        <p className="text-[9px] text-slate-400 uppercase font-bold">Current Location</p>
                        <p className="text-xs font-bold text-slate-800">Metropolitan City</p>
                    </div>
                </div>
            </div>

            <div className="p-4 flex-1 overflow-y-auto">
                {/* Hero Feature */}
                <div
                    className="bg-indigo-500 text-white rounded-2xl p-4 shadow-lg shadow-indigo-200 relative overflow-hidden cursor-pointer group"
                    onClick={() => goTo('assistant')}
                >
                    <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition">
                        <Heart size={80} className="rotate-12" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-white/20 px-2 py-0.5 rounded text-[9px] font-bold tracking-wider">NEW FEATURE</span>
                        </div>
                        <h3 className="font-bold text-base leading-tight mb-3">Send Care Home<br />Across Borders.</h3>
                        <div className="bg-white text-indigo-600 text-[11px] font-bold py-2 px-3 rounded-lg inline-flex items-center gap-1.5 shadow-sm">
                            Try Teleport Mode <ChevronRight size={12} />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h4 className="font-bold text-slate-800 text-xs mb-2.5">Recent Transactions</h4>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-slate-100">
                            <div className="w-8 h-8 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center text-xs">🍔</div>
                            <div className="flex-1">
                                <p className="text-[11px] font-bold">Lunch Order</p>
                                <p className="text-[9px] text-slate-400">Yesterday</p>
                            </div>
                            <span className="text-[11px] font-bold">$ 12.50</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Screen 2: AI Gift Assistant
    const AssistantScreen = () => (
        <div className="h-full flex flex-col bg-white">
            <div className="px-3 pt-2 pb-2 border-b flex items-center gap-2.5">
                <button onClick={() => goTo('discovery')}>
                    <ArrowLeft size={16} className="text-slate-400" />
                </button>
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                        <Sparkles size={14} />
                    </div>
                    <div>
                        <h3 className="font-bold text-xs text-slate-800">Gift Assistant</h3>
                        <p className="text-[9px] text-indigo-500 font-bold">● Connected to Hometown</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-3 overflow-y-auto space-y-2">
                {/* Bot bubble */}
                <div className="bg-slate-100 text-slate-700 p-2.5 rounded-xl rounded-bl-sm text-[11px] max-w-[85%] leading-relaxed">
                    Hi! I see it's raining in <strong>[Hometown]</strong> right now. 🌧️<br />Want to send something warm to your family?
                </div>
                {/* User bubble */}
                <div className="bg-indigo-500 text-white p-2.5 rounded-xl rounded-br-sm text-[11px] max-w-[85%] self-end ml-auto leading-relaxed">
                    Yes. My mom loves soup, but keep it healthy. Low salt if possible.
                </div>

                {/* Processing */}
                <div className="flex items-center gap-1.5 px-1 py-1">
                    <Loader2 size={12} className="text-indigo-400 animate-spin" />
                    <span className="text-[9px] text-slate-400 font-bold uppercase">Scanning Local Inventories...</span>
                </div>

                {/* Result Card */}
                <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="p-2.5 bg-slate-50 border-b border-slate-100 flex gap-2.5">
                        <div className="w-12 h-12 bg-slate-200 rounded-lg" />
                        <div>
                            <h4 className="font-bold text-[11px] text-slate-800">Grandma's Chicken Soup</h4>
                            <div className="flex gap-1 text-[9px] text-slate-500 mt-0.5">
                                <span className="bg-green-100 text-green-600 px-1 rounded">Healthy Choice</span>
                                <span>• 4.8 Stars</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="p-2.5 bg-white flex justify-between items-center hover:bg-slate-50 cursor-pointer transition"
                        onClick={() => goTo('checkout')}
                    >
                        <span className="text-[11px] font-bold text-indigo-600">Select Item ($8.00)</span>
                        <ChevronRight size={12} className="text-slate-400" />
                    </div>
                </div>
            </div>
        </div>
    );

    // Screen 3: Checkout
    const CheckoutScreen = () => (
        <div className="h-full flex flex-col bg-slate-50">
            <div className="px-3 pt-2 pb-2 bg-white border-b flex items-center gap-2.5">
                <button onClick={() => goTo('assistant')}>
                    <ArrowLeft size={16} className="text-slate-400" />
                </button>
                <h3 className="font-bold text-xs text-slate-800">Review Gift</h3>
            </div>

            <div className="p-4 space-y-3 flex-1 overflow-y-auto">
                {/* Recipient */}
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-[9px] font-bold text-slate-400 uppercase mb-1.5">Recipient</p>
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 font-bold text-xs">M</div>
                        <div className="flex-1">
                            <h4 className="font-bold text-xs">Mom (Hometown)</h4>
                            <p className="text-[9px] text-slate-500">+1 234 567 890</p>
                        </div>
                    </div>

                    {/* USP */}
                    <div className="mt-2.5 flex items-start gap-1.5 bg-indigo-50 p-2 rounded-lg border border-indigo-100">
                        <Globe size={12} className="text-indigo-500 mt-0.5 shrink-0" />
                        <div className="flex-1">
                            <p className="text-[9px] font-bold text-indigo-900">Universal Bridge Enabled</p>
                            <p className="text-[9px] text-indigo-700 leading-tight">Mom doesn't need the app. We will send a secure web tracking link via SMS/WhatsApp.</p>
                        </div>
                    </div>
                </div>

                {/* Add-on */}
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex justify-between items-center">
                    <div className="flex items-center gap-2.5">
                        <Video size={14} className="text-slate-400" />
                        <span className="text-[11px] font-bold text-slate-600">Attach Video Message</span>
                    </div>
                    <div className="w-4 h-4 bg-indigo-600 rounded flex items-center justify-center">
                        <Check size={10} className="text-white" />
                    </div>
                </div>
            </div>

            <div className="p-4 bg-white border-t mt-auto">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-[11px] text-slate-500">Total (Inc. Delivery)</span>
                    <span className="font-bold text-base">$ 10.50</span>
                </div>
                <button
                    onClick={() => goTo('message')}
                    className="w-full bg-indigo-500 text-white py-3 rounded-2xl font-bold text-sm shadow-xl shadow-indigo-200 active:scale-95 transition-transform"
                >
                    Send Gift
                </button>
            </div>
        </div>
    );

    // Screen 4: Recipient Message View
    const MessageScreen = () => (
        <div className="h-full flex flex-col bg-[#f0f2f5]">
            <div className="px-3 pt-2 pb-2 bg-white border-b flex items-center gap-2.5 shadow-sm">
                <ChevronLeft size={16} className="text-blue-500" />
                <div className="w-7 h-7 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                    <Zap size={12} />
                </div>
                <div>
                    <h3 className="font-bold text-xs text-slate-800">SuperApp Official</h3>
                    <p className="text-[9px] text-slate-400">Verified Business</p>
                </div>
            </div>

            <div className="flex-1 p-3">
                <div className="text-center text-[9px] text-slate-400 mb-3">Today 7:30 PM</div>

                <div className="bg-white p-2.5 rounded-xl rounded-tl-none shadow-sm max-w-[85%] text-[11px] text-slate-700 leading-relaxed border border-slate-100">
                    Hello! 👋
                    <br /><br />
                    You have a surprise gift (Chicken Soup) arriving from <strong>[User Name]</strong>.
                    <br /><br />
                    <div
                        className="bg-slate-50 p-2 rounded border-l-4 border-indigo-500 cursor-pointer hover:bg-slate-100 transition"
                        onClick={() => goTo('tracking')}
                    >
                        <p className="font-bold text-indigo-600 text-[10px]">Track Driver & View Video Message</p>
                        <p className="text-[9px] text-blue-400 underline">superapp.link/track/x9s8</p>
                    </div>
                </div>
            </div>
        </div>
    );

    // Screen 5: Web Tracking View
    const TrackingScreen = () => (
        <div className="h-full flex flex-col bg-slate-100">
            <div className="px-4 pt-2 pb-2 bg-white shadow-sm flex justify-between items-center z-10">
                <span className="font-extrabold text-base text-indigo-600 tracking-tighter">SuperApp</span>
                <span className="text-[8px] font-bold bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 uppercase">Web View</span>
            </div>

            <div className="flex-1 relative">
                {/* Map BG */}
                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center opacity-40">
                    <Map size={64} className="text-slate-400" />
                </div>

                {/* Driver */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="bg-white px-2 py-0.5 rounded text-[9px] font-bold shadow mb-1 whitespace-nowrap">Driver is here!</div>
                    <Bike size={32} className="text-slate-800 drop-shadow-md animate-bounce" />
                </div>

                {/* Bottom Card */}
                <div className="absolute bottom-4 left-3 right-3 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100">
                    <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <Check size={16} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xs text-slate-800">Arriving Now</h3>
                            <p className="text-[9px] text-slate-400">Please meet driver at the door</p>
                        </div>
                    </div>

                    <button className="w-full bg-slate-900 text-white py-2.5 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 mb-2">
                        <Play size={12} /> Play Video Message
                    </button>

                    <div className="text-center">
                        <button onClick={() => goTo('discovery')} className="text-[9px] text-slate-400 underline flex items-center justify-center gap-1 mx-auto">
                            <RotateCcw size={10} /> Restart Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex justify-center font-sans antialiased rounded-xl overflow-hidden">
            <div className="w-full max-w-sm bg-white h-[600px] relative shadow-[0_0_40px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden">
                <div className={`h-full animate-in fade-in duration-300 ${screen === 'discovery' ? '' : 'hidden'}`}>
                    {screen === 'discovery' && <DiscoveryScreen />}
                </div>
                <div className={`h-full animate-in fade-in duration-300 ${screen === 'assistant' ? '' : 'hidden'}`}>
                    {screen === 'assistant' && <AssistantScreen />}
                </div>
                <div className={`h-full animate-in fade-in duration-300 ${screen === 'checkout' ? '' : 'hidden'}`}>
                    {screen === 'checkout' && <CheckoutScreen />}
                </div>
                <div className={`h-full animate-in fade-in duration-300 ${screen === 'message' ? '' : 'hidden'}`}>
                    {screen === 'message' && <MessageScreen />}
                </div>
                <div className={`h-full animate-in fade-in duration-300 ${screen === 'tracking' ? '' : 'hidden'}`}>
                    {screen === 'tracking' && <TrackingScreen />}
                </div>
            </div>
        </div>
    );
};

export default ProjectKinship;
