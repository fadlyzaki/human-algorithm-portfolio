import React, { useState, useEffect, useRef } from 'react';
import {
    Camera,
    ShoppingBag,
    X,
    ChevronRight,
    Sparkles,
    User,
    Share2,
    Heart,
    ArrowLeft,
    MoreHorizontal,
    Video
} from 'lucide-react';

// --- Mock Data ---

const PRODUCTS = [
    {
        id: 'none',
        name: 'Natural',
        brand: 'You',
        price: 0,
        type: 'none',
        color: 'transparent',
        iconColor: '#a1a1aa' // gray-400
    },
    {
        id: 'p1',
        name: 'Ruby Woo',
        brand: 'MAC Cosmetics',
        price: 19.00,
        type: 'lipstick',
        hex: '#D2042D', // Deep Red
        opacity: 0.6,
        blendMode: 'multiply',
        iconColor: '#D2042D'
    },
    {
        id: 'p2',
        name: 'Peachy Glow',
        brand: 'NARS',
        price: 30.00,
        type: 'blush',
        hex: '#FF9E9E', // Peach
        opacity: 0.5,
        blendMode: 'overlay',
        iconColor: '#FF9E9E'
    },
    {
        id: 'p3',
        name: 'Midnight Shade',
        brand: 'Ray-Ban',
        price: 150.00,
        type: 'glasses',
        asset: 'glasses-dark',
        iconColor: '#1f2937'
    },
    {
        id: 'p4',
        name: 'Golden Hour',
        brand: 'Fenty Beauty',
        price: 38.00,
        type: 'highlighter',
        hex: '#FFD700', // Gold
        opacity: 0.3,
        blendMode: 'screen',
        iconColor: '#FFD700'
    }
];

// --- Components ---

const FilterMeApp = () => {
    const [activeFilterId, setActiveFilterId] = useState('none');
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [notification, setNotification] = useState(null);
    const [cameraError, setCameraError] = useState(null);
    const videoRef = useRef(null);

    const activeProduct = PRODUCTS.find(p => p.id === activeFilterId);

    // --- Camera Logic ---
    useEffect(() => {
        let stream = null;

        const startCamera = async () => {
            try {
                stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: 'user',
                        width: { ideal: 720 },
                        height: { ideal: 1280 }
                    },
                    audio: false
                });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
                setCameraError(null);
            } catch (err) {
                console.error("Camera error:", err);
                setCameraError("Camera access denied or unavailable.");
            }
        };

        if (!showCart) {
            startCamera();
        }

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [showCart]);

    const addToCart = (product) => {
        if (product.id === 'none') return;
        setCart([...cart, product]);
        showNotification(`Added ${product.name} to bag!`);
    };

    const showNotification = (msg) => {
        setNotification(msg);
        setTimeout(() => setNotification(null), 3000);
    };

    // --- AR Overlay Logic (The "Magic") ---
    const renderAROverlay = () => {
        if (!activeProduct || activeProduct.id === 'none') return null;

        // Base styles for the simulated overlays
        const commonStyle = {
            position: 'absolute',
            transition: 'all 0.5s ease-in-out',
            pointerEvents: 'none', // Allow clicks to pass through
            zIndex: 10,
        };

        const RenderMap = {
            lipstick: () => (
                <div style={{
                    ...commonStyle,
                    bottom: '27%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '22%',
                    height: '5%',
                    backgroundColor: activeProduct.hex,
                    opacity: activeProduct.opacity,
                    mixBlendMode: activeProduct.blendMode,
                    filter: 'blur(3px)',
                    borderRadius: '40% 40% 60% 60% / 30% 30% 70% 70%'
                }} />
            ),
            blush: () => (
                <>
                    <div style={{
                        ...commonStyle, bottom: '36%', left: '28%', width: '18%', height: '12%',
                        backgroundColor: activeProduct.hex, opacity: activeProduct.opacity, mixBlendMode: activeProduct.blendMode,
                        filter: 'blur(20px)', borderRadius: '50%'
                    }} />
                    <div style={{
                        ...commonStyle, bottom: '36%', right: '28%', width: '18%', height: '12%',
                        backgroundColor: activeProduct.hex, opacity: activeProduct.opacity, mixBlendMode: activeProduct.blendMode,
                        filter: 'blur(20px)', borderRadius: '50%'
                    }} />
                </>
            ),
            highlighter: () => (
                <>
                    <div style={{
                        ...commonStyle, bottom: '42%', left: '50%', transform: 'translateX(-50%)',
                        width: '3%', height: '15%', backgroundColor: activeProduct.hex, opacity: activeProduct.opacity,
                        mixBlendMode: activeProduct.blendMode, filter: 'blur(5px)'
                    }} />
                    <div style={{
                        ...commonStyle, bottom: '43%', left: '25%', width: '12%', height: '4%',
                        backgroundColor: activeProduct.hex, opacity: activeProduct.opacity, mixBlendMode: activeProduct.blendMode,
                        filter: 'blur(8px)', transform: 'rotate(-25deg)'
                    }} />
                    <div style={{
                        ...commonStyle, bottom: '43%', right: '25%', width: '12%', height: '4%',
                        backgroundColor: activeProduct.hex, opacity: activeProduct.opacity, mixBlendMode: activeProduct.blendMode,
                        filter: 'blur(8px)', transform: 'rotate(25deg)'
                    }} />
                </>
            ),
            glasses: () => (
                <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[70%] animate-in fade-in duration-500 z-20 pointer-events-none">
                    <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20 C 10 20, 30 10, 50 10 C 70 10, 90 20, 90 40 C 90 60, 70 70, 50 70 C 30 70, 10 60, 10 40 Z" fill="black" fillOpacity="0.8" />
                        <path d="M110 20 C 110 20, 130 10, 150 10 C 170 10, 190 20, 190 40 C 190 60, 170 70, 150 70 C 130 70, 110 60, 110 40 Z" fill="black" fillOpacity="0.8" />
                        <path d="M90 30 Q 100 20 110 30" stroke="gold" strokeWidth="3" fill="none" />
                        <path d="M10 20 C 10 20, 30 10, 50 10 C 70 10, 90 20, 90 40 C 90 60, 70 70, 50 70 C 30 70, 10 60, 10 40 Z" stroke="gold" strokeWidth="2" />
                        <path d="M110 20 C 110 20, 130 10, 150 10 C 170 10, 190 20, 190 40 C 190 60, 170 70, 150 70 C 130 70, 110 60, 110 40 Z" stroke="gold" strokeWidth="2" />
                    </svg>
                </div>
            )
        };
        const RenderComponent = RenderMap[activeProduct.type];
        return RenderComponent ? <RenderComponent /> : null;
    };

    // --- Main Render ---

    return (
        <div className="flex items-center justify-center min-h-[740px] bg-gray-100 p-4 font-sans text-gray-900">

            {/* Phone Frame */}
            <div className="relative w-[360px] h-[740px] bg-black rounded-[3rem] shadow-2xl overflow-hidden border-[8px] border-gray-800 ring-1 ring-gray-900/10">

                {/* -- Status Bar -- */}
                <div className="absolute top-0 w-full px-6 py-3 flex justify-between items-center z-50 text-white text-xs font-medium">
                    <span>9:41</span>
                    <div className="flex gap-1.5">
                        <div className="w-4 h-2.5 bg-white rounded-[2px]" />
                        <div className="w-0.5 h-2.5 bg-white rounded-full" />
                    </div>
                </div>

                {/* -- Screen Content -- */}
                {showCart ? (
                    // === CART VIEW ===
                    <div className="bg-white w-full h-full pt-12 pb-8 px-6 flex flex-col animate-in slide-in-from-right duration-300">
                        <div className="flex items-center gap-4 mb-8">
                            <button onClick={() => setShowCart(false)} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
                                <ArrowLeft size={24} />
                            </button>
                            <h2 className="text-2xl font-bold">Shopping Bag</h2>
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar">
                            {cart.length === 0 ? (
                                <div className="text-center text-gray-400 mt-20">
                                    <ShoppingBag size={48} className="mx-auto mb-4 opacity-50" />
                                    <p>Your bag is empty.</p>
                                    <button onClick={() => setShowCart(false)} className="mt-4 text-blue-600 font-semibold text-sm">Start Trying On</button>
                                </div>
                            ) : (
                                cart.map((item, idx) => (
                                    <div key={idx} className="flex gap-4 p-3 border rounded-xl shadow-sm">
                                        <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">
                                            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: item.iconColor }}></div>
                                        </div>
                                        <div className="flex-1 text-left">
                                            <h3 className="font-bold">{item.name}</h3>
                                            <p className="text-sm text-gray-500">{item.brand}</p>
                                            <p className="font-semibold mt-1">${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="border-t pt-4 mt-4">
                            <div className="flex justify-between text-lg font-bold mb-4">
                                <span>Total</span>
                                <span>${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-black text-white py-4 rounded-full font-bold text-lg active:scale-95 transition-transform">
                                Checkout
                            </button>
                        </div>
                    </div>

                ) : (
                    // === AR CAMERA VIEW ===
                    <div className="relative w-full h-full bg-gray-900">

                        {/* 1. The Camera Feed */}
                        <div className="absolute inset-0 z-0 bg-black flex items-center justify-center overflow-hidden">
                            {cameraError ? (
                                <div className="text-white text-center p-8">
                                    <Video size={48} className="mx-auto mb-4 text-gray-500" />
                                    <p className="mb-4">{cameraError}</p>
                                    <p className="text-sm text-gray-400">Since this is a prototype, please allow camera access or view in a secure context.</p>
                                </div>
                            ) : (
                                <>
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        playsInline
                                        muted
                                        className="h-full w-full object-cover transform scale-x-[-1]" // Mirror effect
                                    />

                                    {/* Face Guide Overlay - Helps user position themselves since we don't have FaceMesh */}
                                    <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-48 h-64 border-2 border-dashed border-white/30 rounded-[50%] pointer-events-none opacity-50 flex items-center justify-center">
                                        <span className="text-white/50 text-xs font-bold bg-black/20 px-2 py-1 rounded">Align Face Here</span>
                                    </div>

                                    {/* The "Intelligence" Overlay (AR Effects) */}
                                    {renderAROverlay()}
                                </>
                            )}
                        </div>

                        {/* 2. Top UI Controls */}
                        <div className="absolute top-12 left-0 w-full px-4 flex justify-between items-start z-20 text-white">
                            <div className="flex gap-4">
                                <button className="p-2 bg-black/20 backdrop-blur-md rounded-full">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="flex flex-col gap-4">
                                <button className="p-2 bg-black/20 backdrop-blur-md rounded-full" onClick={() => setShowCart(true)}>
                                    <div className="relative">
                                        <ShoppingBag size={20} />
                                        {cart.length > 0 && (
                                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[8px] flex items-center justify-center">
                                                {cart.length}
                                            </span>
                                        )}
                                    </div>
                                </button>
                                <button className="p-2 bg-black/20 backdrop-blur-md rounded-full">
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>
                        </div>

                        {/* 3. Bottom Controls / Filter Selector */}
                        <div className="absolute bottom-0 w-full z-30 pb-8 pt-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent">

                            {/* Product Info Card (Only appears if a product is selected) */}
                            {activeProduct.id !== 'none' && (
                                <div className="mx-6 mb-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg animate-in slide-in-from-bottom-4 duration-300">
                                    <div className="flex justify-between items-start">
                                        <div className="text-left">
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{activeProduct.brand}</p>
                                            <h3 className="text-lg font-bold text-gray-900 leading-tight">{activeProduct.name}</h3>
                                            <p className="text-sm font-medium text-gray-900 mt-1">${activeProduct.price.toFixed(2)}</p>
                                        </div>
                                        <button
                                            onClick={() => addToCart(activeProduct)}
                                            className="bg-black text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg active:scale-95 transition-transform flex items-center gap-2"
                                        >
                                            Add <ShoppingBag size={14} />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Scrollable Filter Carousel */}
                            <div className="flex overflow-x-auto gap-4 px-6 pb-2 no-scrollbar snap-x items-end h-24">
                                {PRODUCTS.map((prod) => {
                                    const isActive = activeFilterId === prod.id;
                                    return (
                                        <button
                                            key={prod.id}
                                            onClick={() => setActiveFilterId(prod.id)}
                                            className={`
                        relative flex-shrink-0 rounded-full border-[3px] transition-all duration-300 flex items-center justify-center overflow-hidden
                        ${isActive ? 'w-20 h-20 border-yellow-400 -translate-y-2' : 'w-16 h-16 border-white/60'}
                      `}
                                        >
                                            <div className="w-full h-full bg-white flex items-center justify-center relative">
                                                {/* Icon / Preview inside the bubble */}
                                                {prod.id === 'none' ? (
                                                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                                        <span className="text-xs text-gray-600 font-bold uppercase tracking-tight">OFF</span>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="w-full h-full"
                                                        style={{ backgroundColor: prod.iconColor }}
                                                    />
                                                )}

                                                {/* Label Overlay on Active */}
                                                {isActive && (
                                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                                        <Sparkles size={20} className="text-white" />
                                                    </div>
                                                )}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="mt-4 flex justify-center gap-8 text-white text-[10px] font-bold uppercase tracking-[0.15em] opacity-80">
                                <span className="text-yellow-400 border-b border-yellow-400 pb-0.5">TRY ON</span>
                                <span>LIVE SHOP</span>
                                <span>STORIES</span>
                            </div>
                        </div>

                        {/* Notification Toast */}
                        {notification && (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-2xl z-50 animate-in fade-in zoom-in duration-200">
                                {notification}
                            </div>
                        )}

                    </div>
                )}

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50 pointer-events-none" />
            </div>

            {/* Description / Desktop Context */}
            <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 max-w-sm text-gray-600 text-left">
                <h1 className="text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tighter">FilterMe</h1>
                <p className="mb-8 text-xl leading-relaxed font-medium">
                    The 2018 concept re-imagined. Bridging the gap between social stories and e-commerce through intelligent AR try-ons.
                </p>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 shrink-0 rounded-full bg-black text-white flex items-center justify-center"><Sparkles size={18} /></div>
                        <div>
                            <p className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-1">Understand Phase</p>
                            <p className="text-sm">Solving the "can't touch/feel" problem of online shopping.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 shrink-0 rounded-full bg-black text-white flex items-center justify-center"><User size={18} /></div>
                        <div>
                            <p className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-1">Sketch Phase</p>
                            <p className="text-sm">Utilizing the familiar "Stories" UI for Millennial shoppers.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 shrink-0 rounded-full bg-black text-white flex items-center justify-center"><ShoppingBag size={18} /></div>
                        <div>
                            <p className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-1">Prototype</p>
                            <p className="text-sm">Seamless add-to-cart directly from the try-on experience.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FilterMeApp;
