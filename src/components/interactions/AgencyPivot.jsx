import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  MoreHorizontal,
  Zap,
  Coffee,
  Users,
  Check,
  ChevronDown,
  Bot,
  Search,
  Bell,
  Home,
  User,
  X,
  Sparkles,
  MapPin,
  Video,
  ImageIcon,
  Settings,
} from "lucide-react";

import { CURRENT_USER, STORIES, POSTS } from "../../data/agencyPivotData";
import StoryViewer from "./agency-pivot/StoryViewer";
import ModeItem from "./agency-pivot/ModeItem";
import FeedPost from "./agency-pivot/FeedPost";
import UserProfile from "./agency-pivot/UserProfile";


const AgencyPivot = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [feedMode, setFeedMode] = useState("For You");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewingStory, setViewingStory] = useState(null);
  const [bannedTags, setBannedTags] = useState([]);
  const [toast, setToast] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);

  // Filter Logic
  const getFilteredPosts = () => {
    return POSTS.filter((post) => {
      const hasBannedTag = post.tags.some((t) => bannedTags.includes(t));
      if (hasBannedTag) return false;
      if (feedMode === "Friends") return post.category === "friend";
      if (feedMode === "Chill")
        return post.intensity === "low" && post.category !== "viral";
      return true;
    });
  };

  const filteredPosts = getFilteredPosts();

  const handleBlockTag = (tag) => {
    // Subtle confirmation instead of browser alert
    setBannedTags((prev) => [...prev, tag]);
    showToast(`Hiding #${tag}`);
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const toggleLike = (id) => {
    if (likedPosts.includes(id)) {
      setLikedPosts((prev) => prev.filter((pid) => pid !== id));
    } else {
      setLikedPosts((prev) => [...prev, id]);
    }
  };

  return (
    <div className="flex justify-center bg-slate-900 font-sans antialiased text-slate-900 selection:bg-indigo-100 rounded-xl overflow-hidden">
      <div className="w-full max-w-md bg-white h-[600px] relative shadow-[0_0_40px_rgba(var(--bg-void-rgb), 0.3)] flex flex-col overflow-hidden">
        {/* --- TOAST NOTIFICATION --- */}
        <div
          className={`absolute top-24 left-1/2 transform -translate-x-1/2 z-[60] bg-slate-900/90 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-2xl flex items-center gap-2.5 transition-all duration-300 border border-white/10 ${toast ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"}`}
        >
          <div className="bg-emerald-500 rounded-full p-0.5">
            <Check className="w-3 h-3 text-white" strokeWidth={3} />
          </div>
          {toast}
        </div>

        {/* --- STORY VIEWER --- */}
        {viewingStory && (
          <StoryViewer
            story={viewingStory}
            onClose={() => setViewingStory(null)}
          />
        )}

        {/* --- HEADER --- */}
        {activeTab === "home" && (
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-4 h-16 flex items-center justify-between select-none transition-all">
            {/* INTERACTIVE MODE SWITCHER (Pill Design) */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`
                  group flex items-center gap-2 px-1 py-1 pr-3 rounded-full transition-all duration-300
                  ${isMenuOpen ? "bg-slate-100 ring-2 ring-indigo-500/20" : "bg-slate-50 hover:bg-slate-100"}
                `}
              >
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200">
                  {feedMode === "For You" && <Zap className="w-4 h-4" />}
                  {feedMode === "Friends" && <Users className="w-4 h-4" />}
                  {feedMode === "Chill" && <Coffee className="w-4 h-4" />}
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] font-bold text-slate-400 uppercase leading-none tracking-wider mb-0.5">
                    Vibe
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-sm tracking-tight text-slate-900">
                      {feedMode}
                    </span>
                    <ChevronDown
                      className={`w-3 h-3 text-slate-400 transition-transform duration-300 ${isMenuOpen ? "rotate-180 text-indigo-600" : ""}`}
                    />
                  </div>
                </div>
              </button>

              {/* DROPDOWN MENU */}
              {isMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 bg-slate-900/20 backdrop-blur-[1px] z-10 animate-in fade-in duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  />
                  <div className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_-10px_rgba(var(--bg-void-rgb), 0.1)] border border-white/20 ring-1 ring-slate-100 p-2 z-20 animate-in fade-in slide-in-from-top-2 duration-200 origin-top-left">
                    <div className="px-3 py-2 flex justify-between items-center">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Your Feed
                      </span>
                      <span className="text-[10px] font-bold text-indigo-600 cursor-pointer hover:underline">
                        Settings
                      </span>
                    </div>

                    <div className="space-y-1">
                      <ModeItem
                        label="For You"
                        modeID="For You"
                        icon={<Zap className="w-5 h-5" />}
                        desc="Default mix of friends & viral."
                        feedMode={feedMode}
                        setFeedMode={setFeedMode}
                        setIsMenuOpen={setIsMenuOpen}
                        showToast={showToast}
                      />
                      <ModeItem
                        label="Friends Only"
                        modeID="Friends"
                        icon={<Users className="w-5 h-5" />}
                        desc="No randoms. Just people you know."
                        feedMode={feedMode}
                        setFeedMode={setFeedMode}
                        setIsMenuOpen={setIsMenuOpen}
                        showToast={showToast}
                      />
                      <ModeItem
                        label="Chill Mode"
                        modeID="Chill"
                        icon={<Coffee className="w-5 h-5" />}
                        desc="Low stress. No politics."
                        feedMode={feedMode}
                        setFeedMode={setFeedMode}
                        setIsMenuOpen={setIsMenuOpen}
                        showToast={showToast}
                      />
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
          {activeTab === "home" && (
            <>
              {/* STORIES */}
              <div className="pt-4 pb-4 border-b border-slate-100 bg-white overflow-x-auto hide-scrollbar">
                <div className="flex gap-4 px-4 min-w-max">
                  {STORIES.map((story) => (
                    <div
                      key={story.id}
                      className="flex flex-col items-center gap-2 cursor-pointer group"
                      onClick={() => !story.isAdd && setViewingStory(story)}
                    >
                      <div
                        className={`
                        w-[72px] h-[72px] rounded-full p-[3px] transition-transform duration-300 group-hover:scale-105
                        ${story.isAdd ? "border-2 border-dashed border-slate-300" : story.isSeen ? "bg-slate-200" : "bg-gradient-to-tr from-yellow-400 via-pink-500 to-indigo-600 shadow-md"}
                      `}
                      >
                        <div
                          className={`w-full h-full rounded-full border-[3px] border-white ${story.img} flex items-center justify-center relative shadow-inner overflow-hidden`}
                        >
                          {story.isAdd && (
                            <span className="text-3xl text-slate-300 font-light">
                              +
                            </span>
                          )}
                          {!story.isAdd && (
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                          )}
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-600 truncate w-16 text-center group-hover:text-indigo-600 transition-colors">
                        {story.isAdd ? "My Story" : story.user}
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
                    <h3 className="font-bold text-slate-800 text-lg mb-2">
                      All Caught Up!
                    </h3>
                    <p className="text-slate-500 text-sm max-w-[200px] leading-relaxed">
                      No more posts match your current{" "}
                      <strong>{feedMode}</strong> vibe.
                    </p>
                    <button
                      onClick={() => {
                        setBannedTags([]);
                        setFeedMode("For You");
                      }}
                      className="mt-8 px-6 py-3 bg-white border border-slate-200 shadow-sm text-indigo-600 font-bold text-sm rounded-full hover:shadow-md hover:border-indigo-200 transition-all"
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  filteredPosts.map((post, idx) => (
                    <FeedPost
                      key={post.id}
                      post={post}
                      idx={idx}
                      likedPosts={likedPosts}
                      toggleLike={toggleLike}
                      handleBlockTag={handleBlockTag}
                    />
                  ))
                )}
              </div>
            </>
          )}

          {activeTab === "profile" && <UserProfile currentUser={CURRENT_USER} />}
        </main>

        {/* --- BOTTOM NAV --- */}
        <nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-100 px-6 py-2 pb-5 flex justify-between items-center z-50 shadow-[0_-10px_40px_-15px_rgba(var(--bg-void-rgb), 0.1)]">
          <button
            onClick={() => setActiveTab("home")}
            className={`p-3 rounded-2xl transition-all duration-300 ${activeTab === "home" ? "text-indigo-600 bg-indigo-50" : "text-slate-400 hover:bg-slate-50"}`}
          >
            <Home
              className="w-6 h-6"
              strokeWidth={activeTab === "home" ? 3 : 2}
            />
          </button>
          <button
            onClick={() => setActiveTab("search")}
            className={`p-3 rounded-2xl transition-all duration-300 ${activeTab === "search" ? "text-indigo-600 bg-indigo-50" : "text-slate-400 hover:bg-slate-50"}`}
          >
            <Search
              className="w-6 h-6"
              strokeWidth={activeTab === "search" ? 3 : 2}
            />
          </button>

          {/* Create Button */}
          <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-400 active:scale-90 transition-transform cursor-pointer -mt-4 ring-4 ring-white">
            <div className="w-4 h-4 border-2 border-white rounded-sm" />
          </div>

          <button className="p-3 text-slate-400 hover:bg-slate-50 rounded-2xl transition-all">
            <Heart className="w-6 h-6" strokeWidth={2} />
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`p-1 rounded-full transition-all duration-300 border-2 ${activeTab === "profile" ? "border-indigo-600 p-0.5" : "border-transparent"}`}
          >
            <div className={`w-7 h-7 rounded-full ${CURRENT_USER.avatar}`} />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default AgencyPivot;
