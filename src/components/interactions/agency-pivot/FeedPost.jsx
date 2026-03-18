import React from "react";
import {
  MapPin,
  MoreHorizontal,
  Video,
  ImageIcon,
  Bot,
  Heart,
  MessageCircle,
  Send,
} from "lucide-react";

const FeedPost = ({ post, idx, likedPosts, toggleLike, handleBlockTag }) => (
  <article
    className="bg-white pb-5 mb-2 border-b border-slate-100 last:border-0 shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-700"
    style={{ animationDelay: `${idx * 100}ms` }}
  >
    {/* POST HEADER */}
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full ${post.avatar} shadow-sm ring-2 ring-white cursor-pointer hover:ring-indigo-100 transition-all`}
        />
        <div className="leading-tight">
          <div className="flex items-center gap-1.5">
            <p className="text-sm font-bold text-slate-900 hover:text-indigo-600 cursor-pointer transition-colors">
              {post.handle}
            </p>
            {post.isAI && (
              <div className="bg-slate-100 text-[9px] font-bold text-slate-500 px-1.5 py-0.5 rounded border border-slate-200">
                AI
              </div>
            )}
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
    <div
      className="relative group cursor-pointer"
      onDoubleClick={() => toggleLike(post.id)}
    >
      <div
        className={`w-full aspect-[4/5] bg-gradient-to-br ${post.imageGradient} flex items-center justify-center overflow-hidden`}
      >
        {/* MOCK VISUAL */}
        {post.type === "video" ? (
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
          <div className="bg-indigo-100 p-1 rounded-full">
            <Bot className="w-3 h-3 text-indigo-600" />
          </div>
          <span className="text-[10px] font-bold text-slate-700">
            AI Generated
          </span>
        </div>
      )}

      {/* Like Animation */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${likedPosts.includes(post.id) ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
      >
        <Heart className="w-32 h-32 text-white drop-shadow-2xl fill-white" />
      </div>
    </div>

    {/* ACTION BAR */}
    <div className="px-4 pt-3 flex justify-between items-center">
      <div className="flex gap-4">
        <button
          onClick={() => toggleLike(post.id)}
          className="group transition-transform active:scale-90"
        >
          <Heart
            className={`w-7 h-7 transition-colors ${likedPosts.includes(post.id) ? "fill-red-500 text-red-500" : "text-slate-800 group-hover:text-red-500"}`}
          />
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
      <p className="text-sm font-bold text-slate-900 mb-1">
        {(
          post.likes + (likedPosts.includes(post.id) ? 1 : 0)
        ).toLocaleString()}{" "}
        likes
      </p>
      <p className="text-sm text-slate-700 leading-relaxed mb-3">
        <span className="font-bold mr-2 text-slate-900">
          {post.handle}
        </span>
        {post.caption}
      </p>

      {/* MICRO-BLOCKING TAGS */}
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
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
);

export default FeedPost;
