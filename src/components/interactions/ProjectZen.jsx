import React, { useState, useEffect } from 'react';
import {
    Clock,
    Battery,
    Zap,
    Moon,
    Play,
    Info,
    AlignLeft,
    Search,
    Bell,
    ChevronDown,
    VolumeX
} from 'lucide-react';

// --- DATA MODEL (Based on PRD Heuristics) ---
const contentDatabase = [
    {
        id: 1,
        title: "The Office",
        img: "🏢",
        durationMinutes: 22,
        durationDisplay: "22m",
        attention: "Low",
        tags: ["Sitcom", "Comfort"],
        description: "A mockumentary on a group of typical office workers...",
        match: "98%"
    },
    {
        id: 2,
        title: "Severance",
        img: "🧠",
        durationMinutes: 55,
        durationDisplay: "55m",
        attention: "High",
        tags: ["Thriller", "Mind-Bending"],
        description: "Mark leads a team of office workers whose memories have been surgically divided.",
        match: "95%"
    },
    {
        id: 3,
        title: "Street Food: Asia",
        img: "🍜",
        durationMinutes: 30,
        durationDisplay: "30m",
        attention: "Med",
        tags: ["Docu", "Visual"],
        description: "Embark on a global cultural journey into street food.",
        match: "91%"
    },
    {
        id: 4,
        title: "Friends",
        img: "☕",
        durationMinutes: 22,
        durationDisplay: "22m",
        attention: "Low",
        tags: ["Sitcom", "Laugh Track"],
        description: "Follow the lives of six reckless adults living in Manhattan.",
        match: "99%"
    },
    {
        id: 5,
        title: "Dune: Part One",
        img: "🏜️",
        durationMinutes: 155,
        durationDisplay: "2h 35m",
        attention: "Max",
        tags: ["Sci-Fi", "Epic", "Subtitles"],
        description: "Paul Atreides must travel to the most dangerous planet in the universe.",
        match: "97%"
    },
    {
        id: 6,
        title: "Moving Art",
        img: "🌺",
        durationMinutes: 20,
        durationDisplay: "20m",
        attention: "Low",
        tags: ["Ambient", "Music"],
        description: "Experience nature's beauty in this visual essay series.",
        match: "88%"
    },
    {
        id: 7,
        title: "Brooklyn 99",
        img: "👮",
        durationMinutes: 21,
        durationDisplay: "21m",
        attention: "Med",
        tags: ["Comedy", "Fast-Paced"],
        description: "Jake Peralta, an immature but talented NYPD detective...",
        match: "96%"
    },
    {
        id: 8,
        title: "Parasite",
        img: "🍑",
        durationMinutes: 132,
        durationDisplay: "2h 12m",
        attention: "Max",
        tags: ["Foreign", "Subtitles", "Dark"],
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship...",
        match: "99%"
    },
];

// --- MAIN COMPONENT ---
export default function NetflixContextUI() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll listener for sticky header effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // --- FILTER LOGIC (Based on PRD Section 5.1 & 6) ---
    const filteredContent = contentDatabase.filter(item => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'quick') return item.durationMinutes <= 30;
        if (activeFilter === 'chill') return item.attention === 'Low';
        if (activeFilter === 'focus') return item.attention === 'High' || item.attention === 'Max';
        return true;
    });

    // Determine if "Calm Mode" is active (PRD 5.4)
    // PRD: "Reduction in aggressive UI patterns when Chill or Quick Bites mode is active"
    const isCalmMode = activeFilter === 'chill' || activeFilter === 'quick';

    return (
        <div className="bg-[#141414] min-h-screen text-white font-sans overflow-x-hidden pb-20 relative">

            {/* --- HEADER --- */}
            <div className={`absolute top-0 w-full z-50 transition-all duration-300 px-4 md:px-12 py-4 flex justify-between items-center ${isScrolled ? 'bg-[#141414]/95 shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
                <div className="flex items-center gap-8">
                    <h1 className="text-[#E50914] text-2xl md:text-4xl font-black tracking-tighter cursor-pointer">NETFLIX <span className="hidden md:inline text-white font-thin text-sm ml-2 opacity-70">ZEN</span></h1>
                    <ul className="hidden md:flex gap-5 text-sm font-medium text-gray-300">
                        <li className="text-white font-bold cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer transition">Series</li>
                        <li className="hover:text-white cursor-pointer transition">Films</li>
                        <li className="hover:text-white cursor-pointer transition">New & Popular</li>
                    </ul>
                </div>
                <div className="flex items-center gap-5 text-gray-300">
                    <Search size={20} className="cursor-pointer hover:text-white" />
                    <Bell size={20} className="cursor-pointer hover:text-white" />
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-xs font-bold">😊</div>
                        <ChevronDown size={16} className="group-hover:rotate-180 transition" />
                    </div>
                </div>
            </div>

            {/* --- HERO AREA (Simplified for Prototype) --- */}
            <div className="relative h-[50vh] md:h-[60vh] w-full bg-zinc-900 flex items-end pb-12 px-4 md:px-12">
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30 z-10"></div>
                {/* Abstract Hero Background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 text-[10rem] select-none pointer-events-none grayscale">
                    🎥
                </div>

                <div className="relative z-20 max-w-2xl">
                    <span className="flex items-center gap-2 text-[#E50914] font-bold tracking-widest uppercase text-sm mb-2">
                        <div className="w-1 h-4 bg-[#E50914]"></div> Project Zen
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black mb-4 leading-none">The Context UI</h2>
                    <p className="text-lg text-gray-200 mb-6 drop-shadow-md">
                        Stop scrolling. Start watching. Filter your library based on your energy level and available time.
                    </p>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded font-bold hover:bg-gray-200 transition">
                            <Play size={20} fill="black" /> Play Demo
                        </button>
                        <button className="flex items-center gap-2 bg-gray-500/40 text-white px-6 py-2.5 rounded font-bold hover:bg-gray-500/60 backdrop-blur-sm transition">
                            <Info size={20} /> Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* --- THE SOLUTION: CONTEXT FILTER BAR (PRD 5.1) --- */}
            <main className="px-4 md:px-12 -mt-8 relative z-30">

                <div className="mb-2 flex items-center gap-2 text-gray-400 text-sm font-semibold uppercase tracking-widest">
                    <span>What's the vibe?</span>
                    {isCalmMode && <span className="text-xs normal-case bg-green-900/50 text-green-400 px-2 py-0.5 rounded border border-green-800 flex items-center gap-1"><VolumeX size={10} /> Calm Mode Active</span>}
                </div>

                {/* Scrollable Container */}
                <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide mask-fade-right">
                    <FilterButton
                        icon={<Zap size={18} />}
                        label="All Content"
                        isActive={activeFilter === 'all'}
                        onClick={() => setActiveFilter('all')}
                    />
                    <FilterButton
                        icon={<Clock size={18} />}
                        label="Quick Bites"
                        sub="< 30 mins"
                        isActive={activeFilter === 'quick'}
                        onClick={() => setActiveFilter('quick')}
                    />
                    <FilterButton
                        icon={<Moon size={18} />}
                        label="Chill"
                        sub="Low Attention"
                        isActive={activeFilter === 'chill'}
                        onClick={() => setActiveFilter('chill')}
                    />
                    <FilterButton
                        icon={<Battery size={18} />}
                        label="Deep Focus"
                        sub="High Attention"
                        isActive={activeFilter === 'focus'}
                        onClick={() => setActiveFilter('focus')}
                    />
                </div>

                {/* --- CONTENT GRID --- */}
                <h3 className="text-white font-bold text-xl mb-4">Top Picks for You</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-y-8 md:gap-x-4">
                    {filteredContent.map((item) => (
                        <ContentCard
                            key={item.id}
                            item={item}
                            isHovered={hoveredItem === item.id}
                            setHovered={setHoveredItem}
                            isCalmMode={isCalmMode}
                        />
                    ))}
                </div>

                {filteredContent.length === 0 && (
                    <div className="w-full py-20 flex flex-col items-center justify-center text-gray-500 border border-dashed border-gray-800 rounded-lg">
                        <Moon size={48} className="mb-4 opacity-50" />
                        <p className="text-xl">No matches found for this specific mood.</p>
                        <button onClick={() => setActiveFilter('all')} className="mt-4 text-white underline">Reset Filters</button>
                    </div>
                )}
            </main>
        </div>
    );
}

// --- SUB-COMPONENTS ---

function FilterButton({ icon, label, sub, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`
        relative flex-shrink-0 flex flex-col items-start p-4 rounded-lg border transition-all duration-200 snap-start text-left min-w-[150px]
        ${isActive
                    ? 'bg-[#E50914] border-[#E50914] text-white shadow-[0_4px_20px_rgba(229,9,20,0.4)] transform scale-105'
                    : 'bg-[#1e1e1e] border-transparent text-gray-400 hover:bg-[#2a2a2a] hover:text-gray-200'}
      `}
        >
            <div className={`mb-2 ${isActive ? 'text-white' : 'text-gray-500'}`}>{icon}</div>
            <span className="font-bold text-sm block">{label}</span>
            {sub && <span className={`text-[11px] font-medium mt-0.5 block ${isActive ? 'text-red-100 opacity-90' : 'text-gray-600'}`}>{sub}</span>}
        </button>
    );
}

function ContentCard({ item, isHovered, setHovered, isCalmMode }) {
    // PRD 5.3: Duration must be visible on the unselected state.
    return (
        <div
            className="relative group h-full"
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
        >
            {/* --- BASE CARD (Visible when not hovered) --- */}
            <div className={`
        relative bg-[#181818] rounded md:rounded-md overflow-hidden transition-all duration-300 origin-center
        ${isHovered ? 'z-10 opacity-0' : 'z-0 opacity-100'}
      `}>
                {/* Image Placeholder */}
                <div className="aspect-video bg-zinc-800 flex items-center justify-center text-6xl relative">
                    {item.img}
                    {/* PRD 5.3: Duration Badge always visible */}
                    <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-bold text-gray-200 border border-white/10 flex items-center gap-1 shadow-sm font-mono">
                        {item.durationDisplay}
                    </div>
                    {/* Netflix "N" Logo watermark */}
                    <div className="absolute top-2 left-2 text-[#E50914] font-black text-xs tracking-tighter opacity-80">N</div>
                </div>
            </div>

            {/* --- HOVER CARD (Expanded State) --- */}
            {/* PRD 5.4 Calm Mode:
         "Disable Auto-Play Trailers: Hovering a tile expands it but does not play video/audio."
         We simulate this by checking isCalmMode. If active, we show a static expanded state.
         If not active (default), we would normally play video, but for this prototype we simulate the 'Active' UI.
      */}
            {isHovered && (
                <div className={`
          absolute top-0 left-0 w-full bg-[#181818] rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.7)] z-50 overflow-hidden
          transition-all duration-300 transform scale-125 -translate-y-6
        `}>
                    {/* Expanded Image Area */}
                    <div className="aspect-video bg-zinc-700 flex items-center justify-center text-6xl relative">
                        {/* Simulated Content */}
                        {item.img}

                        {/* Mute icon to signify Calm Mode / No Autoplay if in that mode */}
                        {isCalmMode && (
                            <div className="absolute top-2 right-2 bg-black/40 p-1 rounded-full"><VolumeX size={12} /></div>
                        )}
                    </div>

                    {/* Expanded Metadata Area */}
                    <div className="p-3">
                        {/* Action Buttons */}
                        <div className="flex gap-2 mb-3">
                            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                                <Play size={16} fill="black" className="ml-0.5" />
                            </button>
                            <button className="w-8 h-8 border-2 border-gray-500 rounded-full flex items-center justify-center text-gray-300 hover:border-white hover:text-white transition">
                                <AlignLeft size={16} />
                            </button>
                            <button className="w-8 h-8 border-2 border-gray-500 rounded-full flex items-center justify-center text-gray-300 ml-auto hover:border-white hover:text-white transition">
                                <Info size={16} />
                            </button>
                        </div>

                        {/* Title & Match Score */}
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-green-500 font-bold text-xs">{item.match} Match</span>
                            <span className="text-gray-400 text-xs border border-gray-600 px-1 rounded">HD</span>
                            <span className="text-gray-400 text-xs">{item.durationDisplay}</span>
                        </div>

                        {/* PRD 5.2: Attention Score Visualization */}
                        <div className="mt-3 mb-2 bg-[#252525] p-2 rounded border border-gray-800">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Cognitive Load</span>
                                <span className={`text-[10px] font-bold ${getAttentionColor(item.attention, 'text')}`}>
                                    {item.attention === 'Low' ? 'Chill' : item.attention === 'Med' ? 'Engage' : 'Focus'}
                                </span>
                            </div>
                            {/* The Meter */}
                            <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                                <div className={`h-full ${getAttentionColor(item.attention, 'bg')} transition-all duration-300`} style={{ width: getAttentionWidth(item.attention) }}></div>
                            </div>
                        </div>

                        {/* Genre Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-2">
                            {item.tags.map(tag => (
                                <span key={tag} className="text-[10px] text-gray-300 flex items-center">
                                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-1.5"></span>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// --- HELPER FUNCTIONS ---
function getAttentionColor(level, type) {
    // PRD 5.2 Implementation Logic
    // Low = Green, Med = Yellow, High = Red
    if (level === 'Low') return type === 'bg' ? 'bg-emerald-500' : 'text-emerald-500';
    if (level === 'Med') return type === 'bg' ? 'bg-amber-400' : 'text-amber-400';
    return type === 'bg' ? 'bg-rose-600' : 'text-rose-600';
}

function getAttentionWidth(level) {
    if (level === 'Low') return '33%';
    if (level === 'Med') return '66%';
    return '100%';
}
