import React from "react";
import { Settings, Bot } from "lucide-react";

const UserProfile = ({ currentUser }) => (
  <div className="bg-white min-h-full">
    <div className="px-6 py-8 border-b border-slate-50 bg-gradient-to-b from-white to-slate-50/50">
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-xl shadow-indigo-200 mb-4">
          <div className="w-full h-full bg-slate-100 rounded-full border-4 border-white" />
        </div>
        <h2 className="font-bold text-xl text-slate-900">
          {currentUser.name}
        </h2>
        <p className="text-sm text-slate-500 font-medium">
          @{currentUser.handle}
        </p>
      </div>

      <div className="flex justify-center gap-8 mb-8">
        <div className="text-center">
          <div className="font-bold text-xl text-slate-900">142</div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Posts
          </div>
        </div>
        <div className="text-center">
          <div className="font-bold text-xl text-slate-900">
            {currentUser.followers}
          </div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Followers
          </div>
        </div>
        <div className="text-center">
          <div className="font-bold text-xl text-slate-900">
            {currentUser.following}
          </div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Following
          </div>
        </div>
      </div>

      <p className="text-sm text-slate-600 text-center mb-6 max-w-xs mx-auto leading-relaxed">
        Product Designer based in San Francisco. 🌉 <br /> Obsessed
        with coffee and pixels.
      </p>

      <div className="flex gap-3">
        <button className="flex-1 bg-slate-900 text-white py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-slate-200 active:scale-95 transition-transform">
          Edit Profile
        </button>
        <button className="bg-white border border-slate-200 p-2.5 rounded-xl text-slate-700 shadow-sm active:scale-95 transition-transform">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </div>

    {/* Profile Grid */}
    <div className="grid grid-cols-3 gap-0.5 bg-slate-100 border-t border-slate-100">
      {[...Array(9)].map((_, i) => (
        <div
          key={`profile-grid-${i}`}
          className="aspect-square bg-white hover:opacity-90 transition-opacity cursor-pointer relative group"
        >
          {i % 2 === 0 && (
            <div className="absolute top-2 right-2 text-white drop-shadow-md">
              <Bot className="w-4 h-4" />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default UserProfile;
