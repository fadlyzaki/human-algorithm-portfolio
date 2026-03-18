import React from "react";
import { X, Heart } from "lucide-react";

const StoryViewer = ({ story, onClose }) => (
  <div className="absolute inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex flex-col animate-in fade-in zoom-in-95 duration-300">
    <div className="h-1 flex gap-1 p-2 pt-4 safe-area-top">
      <div className="flex-1 bg-white/20 rounded-full overflow-hidden h-1">
        <div className="h-full bg-white w-1/3 animate-[shimmer_2s_infinite]" />
      </div>
    </div>

    <div className="flex items-center justify-between px-4 mt-4">
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full ${story.img} border border-white/20`}
        />
        <div>
          <span className="text-white font-bold text-sm block leading-none">
            {story.user}
          </span>
          <span className="text-white/60 text-[10px] font-medium">2h ago</span>
        </div>
      </div>
      <button
        onClick={onClose}
        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
      >
        <X className="text-white w-5 h-5" />
      </button>
    </div>

    <div
      className={`flex-1 flex items-center justify-center relative mx-2 my-6 rounded-3xl overflow-hidden ${story.img}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      <span className="text-white font-bold text-3xl drop-shadow-xl px-8 text-center z-10">
        {story.content || "Story Content"}
      </span>
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

export default StoryViewer;
