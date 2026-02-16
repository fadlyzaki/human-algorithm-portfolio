import React, { useState, useEffect } from 'react';
import {
    Heart, MessageCircle, Send, MoreHorizontal,
    Zap, Coffee, Users, Check, ChevronDown,
    Bot, Search, Bell, Home, User, X,
    Settings, TrendingUp, Image as ImageIcon, Video, Filter,
    Sparkles, MapPin
} from 'lucide-react';

// --- MOCK DATA ---

const CURRENT_USER = {
    handle: "sarah_design",
    name: "Sarah Jenkins",
    avatar: "bg-gradient-to-br from-indigo-500 to-purple-600",
    followers: "1.2k",
    following: "450"
};

const STORIES = [
    { id: 0, user: "You", img: "bg-slate-800", isSeen: false, isAdd: true },
    { id: 1, user: "mike_t", img: "bg-emerald-500", isSeen: false, content: "Hiking trip 🏔️" },
    { id: 2, user: "jess_m", img: "bg-blue-500", isSeen: false, content: "New puppy! 🐶" },
    { id: 3, user: "alex_r", img: "bg-purple-500", isSeen: true, content: "Work setup 🖥️" },
    { id: 4, user: "dave_c", img: "bg-orange-500", isSeen: true, content: "Lunch time 🍔" },
];

const POSTS = [
    {
        id: 1,
        author: "Jessica M.",
        handle: "jess_m",
        avatar: "bg-blue-500",
        location: "Yosemite National Park",
        contentColor: "bg-slate-200",
        imageGradient: "from-blue-100 to-slate-200",
        type: "image",
        caption: "Weekend vibes were unmatched. Needed this reset. 🌲✨",
        tags: ["Nature", "Travel", "Chill"],
        likes: 245,
        isAI: false,
        category: "friend",
        intensity: "low"
    },
    {
        id: 2,
        author: "Crypto King",
        handle: "crypto_hype",
        avatar: "bg-yellow-500",
        location: null,
        contentColor: "bg-yellow-100",
        imageGradient: "from-yellow-100 to-orange-100",
        type: "video",
        caption: "BITCOIN IS MOONING! 🚀 BUY NOW OR CRY LATER! 🚨🤑",
        tags: ["Crypto", "Hype", "Finance"],
        likes: 12042,
        isAI: false,
        category: "viral",
        intensity: "high"
    },
    {
        id: 3,
        author: "Future Art Bot",
        handle: "future_art",
        avatar: "bg-fuchsia-600",
        location: "Digital Realm",
        contentColor: "bg-fuchsia-100",
        imageGradient: "from-fuchsia-100 to-indigo-100",
        type: "image",
        caption: "Concept art for the new era. (Generated with Midjourney v6)",
        tags: ["Art", "AI", "Design"],
        likes: 3400,
        isAI: true,
        category: "viral",
        intensity: "low"
    },
    {
        id: 4,
        author: "Mike T.",
        handle: "mike_t",
        avatar: "bg-emerald-500",
        location: "Downtown Coffee",
        contentColor: "bg-emerald-100",
        imageGradient: "from-emerald-50 to-teal-100",
        type: "image",
        caption: "Best pour-over in the city. ☕️",
        tags: ["Coffee", "Lifestyle", "Chill"],
        likes: 89,
        isAI: false,
        category: "friend",
        intensity: "low"
    },
    {
        id: 5,
        author: "News Daily",
        handle: "news_daily",
        avatar: "bg-red-600",
        location: "Washington D.C.",
        contentColor: "bg-red-100",
        imageGradient: "from-red-50 to-orange-100",
        type: "video",
        caption: "BREAKING: Senate passes new bill regarding social media regulation.",
        tags: ["Politics", "News", "Serious"],
        likes: 5600,
        isAI: false,
        category: "viral",
        intensity: "high"
    }
];

// --- COMPONENTS ---

const StoryViewer = ({ story, onClose }) => (
    <div className="absolute inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex flex-col animate-in fade-in zoom-in-95 duration-300">
        <div className="h-1 flex gap-1 p-2 pt-4 safe-area-top">
            <div className="flex-1 bg-white/20 rounded-full overflow-hidden h-1">
                <div className="h-full bg-white w-1/3 animate-[shimmer_2s_infinite]" />
            </div>
        </div>

        <div className="flex items-center justify-between px-4 mt-4">
            <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${story.img} border border-white/20`} />
                <div>
                    <span className="text-white font-bold text-sm block leading-none">{story.user}</span>
                    <span className="text-white/60 text-[10px] font-medium">2h ago</span>
                </div>
            </div>
            <button onClick={onClose} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <X className="text-white w-5 h-5" />
            </button>
        </div>

        <div className={`flex-1 flex items-center justify-center relative mx-2 my-6 rounded-3xl overflow-hidden ${story.img}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
            <span className="text-white font-bold text-3xl drop-shadow-xl px-8 text-center z-10">{story.content || "Story Content"}</span>
        </div>

        <div className="px-4 pb-8 mb-4">
            <div className="relative flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Send message..."
                    className="flex-1 bg-white/10 border border-white/20 rounded-full py-3.5 px-6 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all backdrop-blur-md"
                />
                <button className="p-3 bg-white/10 rounded-full hover:bg-red-500/20 hover:text-red-500 transition-colors">
                    <Heart className="text-white w-6 h-6" />
                </button>
            </div>
        </div>
    </div>
);

const AgencyPivot = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [feedMode, setFeedMode] = useState('For You');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [viewingStory, setViewingStory] = useState(null);
    const [bannedTags, setBannedTags] = useState([]);
    const [toast, setToast] = useState(null);
    const [likedPosts, setLikedPosts] = useState([]);

    // Filter Logic
    const getFilteredPosts = () => {
        return POSTS.filter(post => {
            const hasBannedTag = post.tags.some(t => bannedTags.includes(t));
            if (hasBannedTag) return false;
            if (feedMode === 'Friends') return post.category === 'friend';
            if (feedMode === 'Chill') return post.intensity === 'low' && post.category !== 'viral';
            return true;
        });
    };

    const filteredPosts = getFilteredPosts();

    const handleBlockTag = (tag) => {
        // Subtle confirmation instead of browser alert
        setBannedTags(prev => [...prev, tag]);
        showToast(`Hiding #${tag}`);
    };

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(null), 2500);
    };

    const toggleLike = (id) => {
        if (likedPosts.includes(id)) {
            setLikedPosts(prev => prev.filter(pid => pid !== id));
        } else {
            setLikedPosts(prev => [...prev, id]);
        }
    };

    const ModeItem = ({ label, icon, desc, modeID }) => (
        <button
            onClick={() => { setFeedMode(modeID); setIsMenuOpen(false); showToast(`${label} Active`); }}
            className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 group
        ${feedMode === modeID
                    ? 'bg-indigo-50 border border-indigo-100 shadow-sm'
                    : 'hover:bg-slate-50 border border-transparent'}`}
        >
            <div className={`p-2 rounded-full ${feedMode === modeID ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500 group-hover:bg-white group-hover:shadow-sm'}`}>
                {icon}
            </div>
            <div className="flex-1">
                <div className={`font-bold text-sm ${feedMode === modeID ? 'text-indigo-900' : 'text-slate-700'}`}>{label}</div>
                <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{desc}</div>
            </div>
            {feedMode === modeID && <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />}
        </button>
    );

    return (
        <div className="flex justify-center bg-slate-900 font-sans antialiased text-slate-900 selection:bg-indigo-100 rounded-xl overflow-hidden">
            <div className="w-full max-w-md bg-white h-[600px] relative shadow-[0_0_40px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden">

                {/* --- TOAST NOTIFICATION --- */}
                <div className={`absolute top-24 left-1/2 transform -translate-x-1/2 z-[60] bg-slate-900/90 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-2xl flex items-center gap-2.5 transition-all duration-300 border border-white/10 ${toast ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`}>
                    <div className="bg-emerald-500 rounded-full p-0.5"><Check className="w-3 h-3 text-white" strokeWidth={3} /></div>
                    {toast}
                </div>

                {/* --- STORY VIEWER --- */}
                {viewingStory && <StoryViewer story={viewingStory} onClose={() => setViewingStory(null)} />}

                {/* --- HEADER --- */}
                {activeTab === 'home' && (
                    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-4 h-16 flex items-center justify-between select-none transition-all">

                        {/* INTERACTIVE MODE SWITCHER (Pill Design) */}
                        <div className="relative">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`
                  group flex items-center gap-2 px-1 py-1 pr-3 rounded-full transition-all duration-300
                  ${isMenuOpen ? 'bg-slate-100 ring-2 ring-indigo-500/20' : 'bg-slate-50 hover:bg-slate-100'}
                `}
                            >
                                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200">
                                    {feedMode === 'For You' && <Zap className="w-4 h-4" />}
                                    {feedMode === 'Friends' && <Users className="w-4 h-4" />}
                                    {feedMode === 'Chill' && <Coffee className="w-4 h-4" />}
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase leading-none tracking-wider mb-0.5">Vibe</span>
                                    <div className="flex items-center gap-1">
                                        <span className="font-bold text-sm tracking-tight text-slate-900">{feedMode}</span>
                                        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-300 ${isMenuOpen ? 'rotate-180 text-indigo-600' : ''}`} />
                                    </div>
                                </div>
                            </button>

                            {/* DROPDOWN MENU */}
                            {isMenuOpen && (
                                <>
                                    <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-[1px] z-10 animate-in fade-in duration-300" onClick={() => setIsMenuOpen(false)} />
                                    <div className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-white/20 ring-1 ring-slate-100 p-2 z-20 animate-in fade-in slide-in-from-top-2 duration-200 origin-top-left">
                                        <div className="px-3 py-2 flex justify-between items-center">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Your Feed</span>
                                            <span className="text-[10px] font-bold text-indigo-600 cursor-pointer hover:underline">Settings</span>
                                        </div>

                                        <div className="space-y-1">
                                            <ModeItem label="For You" modeID="For You" icon={<Zap className="w-5 h-5" />} desc="Default mix of friends & viral." />
                                            <ModeItem label="Friends Only" modeID="Friends" icon={<Users className="w-5 h-5" />} desc="No randoms. Just people you know." />
                                            <ModeItem label="Chill Mode" modeID="Chill" icon={<Coffee className="w-5 h-5" />} desc="Low stress. No politics." />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="flex items-center gap-4 text-slate-800">
                            <div className="relative group cursor-pointer">
                                <div className="absolute inset-0 bg-slate-200 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                                <Bell className="w-6 h-6 relative z-10 hover:text-indigo-600 transition-colors" />
                                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white z-20" />
                            </div>
                            <div className="relative group cursor-pointer">
                                <div className="absolute inset-0 bg-slate-200 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                                <Send className="w-6 h-6 -rotate-12 mb-1 relative z-10 hover:text-indigo-600 transition-colors" />
                            </div>
                        </div>
                    </header>
                )}

                {/* --- MAIN CONTENT --- */}
                <main className="flex-1 overflow-y-auto pb-24 bg-slate-50/50 scroll-smooth">

                    {activeTab === 'home' && (
                        <>
                            {/* STORIES */}
                            <div className="pt-4 pb-4 border-b border-slate-100 bg-white overflow-x-auto hide-scrollbar">
                                <div className="flex gap-4 px-4 min-w-max">
                                    {STORIES.map((story) => (
                                        <div key={story.id} className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => !story.isAdd && setViewingStory(story)}>
                                            <div className={`
                        w-[72px] h-[72px] rounded-full p-[3px] transition-transform duration-300 group-hover:scale-105
                        ${story.isAdd ? 'border-2 border-dashed border-slate-300' : story.isSeen ? 'bg-slate-200' : 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-indigo-600 shadow-md'}
                      `}>
                                                <div className={`w-full h-full rounded-full border-[3px] border-white ${story.img} flex items-center justify-center relative shadow-inner overflow-hidden`}>
                                                    {story.isAdd && <span className="text-3xl text-slate-300 font-light">+</span>}
                                                    {!story.isAdd && <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />}
                                                </div>
                                            </div>
                                            <span className="text-[11px] font-semibold text-slate-600 truncate w-16 text-center group-hover:text-indigo-600 transition-colors">
                                                {story.isAdd ? 'My Story' : story.user}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FEED */}
                            <div className="flex flex-col gap-2 pt-2">
                                {filteredPosts.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center py-20 px-6 text-center animate-in fade-in zoom-in duration-500">
                                        <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                            <Sparkles className="w-10 h-10 text-indigo-400" />
                                        </div>
                                        <h3 className="font-bold text-slate-800 text-lg mb-2">All Caught Up!</h3>
                                        <p className="text-slate-500 text-sm max-w-[200px] leading-relaxed">No more posts match your current <strong>{feedMode}</strong> vibe.</p>
                                        <button
                                            onClick={() => { setBannedTags([]); setFeedMode('For You'); }}
                                            className="mt-8 px-6 py-3 bg-white border border-slate-200 shadow-sm text-indigo-600 font-bold text-sm rounded-full hover:shadow-md hover:border-indigo-200 transition-all"
                                        >
                                            Reset Filters
                                        </button>
                                    </div>
                                ) : (
                                    filteredPosts.map((post, idx) => (
                                        <article key={post.id} className="bg-white pb-5 mb-2 border-b border-slate-100 last:border-0 shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${idx * 100}ms` }}>

                                            {/* POST HEADER */}
                                            <div className="flex items-center justify-between px-4 py-3">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-full ${post.avatar} shadow-sm ring-2 ring-white cursor-pointer hover:ring-indigo-100 transition-all`} />
                                                    <div className="leading-tight">
                                                        <div className="flex items-center gap-1.5">
                                                            <p className="text-sm font-bold text-slate-900 hover:text-indigo-600 cursor-pointer transition-colors">{post.handle}</p>
                                                            {post.isAI && <div className="bg-slate-100 text-[9px] font-bold text-slate-500 px-1.5 py-0.5 rounded border border-slate-200">AI</div>}
                                                        </div>
                                                        {post.location && (
                                                            <div className="flex items-center gap-1 mt-0.5 text-slate-400 text-[11px]">
                                                                <MapPin className="w-3 h-3" />
                                                                <span>{post.location}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <button className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
                                                    <MoreHorizontal className="w-5 h-5" />
                                                </button>
                                            </div>

                                            {/* CONTENT */}
                                            <div className="relative group cursor-pointer" onDoubleClick={() => toggleLike(post.id)}>
                                                <div className={`w-full aspect-[4/5] bg-gradient-to-br ${post.imageGradient} flex items-center justify-center overflow-hidden`}>
                                                    {/* MOCK VISUAL */}
                                                    {post.type === 'video' ? (
                                                        <div className="relative w-full h-full flex items-center justify-center">
                                                            <Video className="w-20 h-20 text-black/10 mix-blend-multiply" />
                                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
                                                        </div>
                                                    ) : (
                                                        <ImageIcon className="w-20 h-20 text-black/10 mix-blend-multiply" />
                                                    )}
                                                </div>

                                                {/* AI Overlay Badge */}
                                                {post.isAI && (
                                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md pl-2 pr-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg border border-white/40">
                                                        <div className="bg-indigo-100 p-1 rounded-full"><Bot className="w-3 h-3 text-indigo-600" /></div>
                                                        <span className="text-[10px] font-bold text-slate-700">AI Generated</span>
                                                    </div>
                                                )}

                                                {/* Like Animation */}
                                                <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${likedPosts.includes(post.id) ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                                                    <Heart className="w-32 h-32 text-white drop-shadow-2xl fill-white" />
                                                </div>
                                            </div>

                                            {/* ACTION BAR */}
                                            <div className="px-4 pt-3 flex justify-between items-center">
                                                <div className="flex gap-4">
                                                    <button onClick={() => toggleLike(post.id)} className="group transition-transform active:scale-90">
                                                        <Heart className={`w-7 h-7 transition-colors ${likedPosts.includes(post.id) ? 'fill-red-500 text-red-500' : 'text-slate-800 group-hover:text-red-500'}`} />
                                                    </button>
                                                    <button className="group transition-transform active:scale-90">
                                                        <MessageCircle className="w-7 h-7 text-slate-800 group-hover:text-indigo-600 transition-colors" />
                                                    </button>
                                                    <button className="group transition-transform active:scale-90">
                                                        <Send className="w-7 h-7 text-slate-800 group-hover:text-indigo-600 transition-colors" />
                                                    </button>
                                                </div>
                                                <button className="text-slate-800 hover:text-indigo-600 transition-colors">
                                                    <div className="w-6 h-7 border-2 border-current rounded-sm" />
                                                </button>
                                            </div>

                                            {/* DETAILS */}
                                            <div className="px-4 pt-2">
                                                <p className="text-sm font-bold text-slate-900 mb-1">{(post.likes + (likedPosts.includes(post.id) ? 1 : 0)).toLocaleString()} likes</p>
                                                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                                                    <span className="font-bold mr-2 text-slate-900">{post.handle}</span>
                                                    {post.caption}
                                                </p>

                                                {/* MICRO-BLOCKING TAGS (Improved Visuals) */}
                                                <div className="flex flex-wrap gap-2">
                                                    {post.tags.map(tag => (
                                                        <button
                                                            key={tag}
                                                            onClick={() => handleBlockTag(tag)}
                                                            className="
                                group relative overflow-hidden
                                text-[10px] font-semibold text-slate-500 bg-slate-100 
                                px-3 py-1.5 rounded-full border border-slate-200 
                                transition-all duration-300
                                hover:border-red-200 hover:text-red-600 hover:shadow-sm
                              "
                                                        >
                                                            <span className="relative z-10">#{tag}</span>
                                                            <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        </button>
                                                    ))}
                                                </div>
                                                <div className="mt-3 text-[10px] font-medium text-slate-400 uppercase tracking-wide">
                                                    View all 42 comments • 2 hours ago
                                                </div>
                                            </div>
                                        </article>
                                    ))
                                )}
                            </div>
                        </>
                    )}

                    {activeTab === 'profile' && (
                        <div className="bg-white min-h-full">
                            <div className="px-6 py-8 border-b border-slate-50 bg-gradient-to-b from-white to-slate-50/50">
                                <div className="flex flex-col items-center mb-6">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-xl shadow-indigo-200 mb-4">
                                        <div className="w-full h-full bg-slate-100 rounded-full border-4 border-white" />
                                    </div>
                                    <h2 className="font-bold text-xl text-slate-900">{CURRENT_USER.name}</h2>
                                    <p className="text-sm text-slate-500 font-medium">@{CURRENT_USER.handle}</p>
                                </div>

                                <div className="flex justify-center gap-8 mb-8">
                                    <div className="text-center"><div className="font-bold text-xl text-slate-900">142</div><div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Posts</div></div>
                                    <div className="text-center"><div className="font-bold text-xl text-slate-900">{CURRENT_USER.followers}</div><div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Followers</div></div>
                                    <div className="text-center"><div className="font-bold text-xl text-slate-900">{CURRENT_USER.following}</div><div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Following</div></div>
                                </div>

                                <p className="text-sm text-slate-600 text-center mb-6 max-w-xs mx-auto leading-relaxed">
                                    Product Designer based in San Francisco. 🌉 <br /> Obsessed with coffee and pixels.
                                </p>

                                <div className="flex gap-3">
                                    <button className="flex-1 bg-slate-900 text-white py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-slate-200 active:scale-95 transition-transform">Edit Profile</button>
                                    <button className="bg-white border border-slate-200 p-2.5 rounded-xl text-slate-700 shadow-sm active:scale-95 transition-transform"><Settings className="w-5 h-5" /></button>
                                </div>
                            </div>

                            {/* Profile Grid */}
                            <div className="grid grid-cols-3 gap-0.5 bg-slate-100 border-t border-slate-100">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="aspect-square bg-white hover:opacity-90 transition-opacity cursor-pointer relative group">
                                        {i % 2 === 0 && <div className="absolute top-2 right-2 text-white drop-shadow-md"><Bot className="w-4 h-4" /></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </main>

                {/* --- BOTTOM NAV --- */}
                <nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-100 px-6 py-2 pb-5 flex justify-between items-center z-50 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
                    <button onClick={() => setActiveTab('home')} className={`p-3 rounded-2xl transition-all duration-300 ${activeTab === 'home' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-400 hover:bg-slate-50'}`}>
                        <Home className="w-6 h-6" strokeWidth={activeTab === 'home' ? 3 : 2} />
                    </button>
                    <button onClick={() => setActiveTab('search')} className={`p-3 rounded-2xl transition-all duration-300 ${activeTab === 'search' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-400 hover:bg-slate-50'}`}>
                        <Search className="w-6 h-6" strokeWidth={activeTab === 'search' ? 3 : 2} />
                    </button>

                    {/* Create Button */}
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-400 active:scale-90 transition-transform cursor-pointer -mt-4 ring-4 ring-white">
                        <div className="w-4 h-4 border-2 border-white rounded-sm" />
                    </div>

                    <button className="p-3 text-slate-400 hover:bg-slate-50 rounded-2xl transition-all">
                        <Heart className="w-6 h-6" strokeWidth={2} />
                    </button>
                    <button onClick={() => setActiveTab('profile')} className={`p-1 rounded-full transition-all duration-300 border-2 ${activeTab === 'profile' ? 'border-indigo-600 p-0.5' : 'border-transparent'}`}>
                        <div className={`w-7 h-7 rounded-full ${CURRENT_USER.avatar}`} />
                    </button>
                </nav>

            </div>
        </div>
    );
};

export default AgencyPivot;
