'use client';

import React from 'react';
import { Palette, Sparkles } from 'lucide-react';

const FloatingCanvas = () => {
  return (
    <div className="relative w-full h-[600px]">
      {/* Main Canvas Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Background Glow */}
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]"></div>
        
        {/* Canvas Frame */}
        <div className="relative w-[500px] h-[400px] bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm">
          {/* Canvas Content - Mockup of sketch area */}
          <div className="absolute inset-4 bg-gray-900/30 rounded-2xl">
            {/* Sketch placeholder - left side with blue sketch */}
            <div className="absolute left-0 top-0 w-1/2 h-full p-6">
              <div className="w-full h-full bg-gray-800/40 rounded-xl border border-blue-400/20 flex items-center justify-center">
                <div className="space-y-3">
                  {/* Simple sketch representation */}
                  <div className="w-32 h-32 border-4 border-blue-400 rounded-full relative">
                    <div className="absolute top-6 left-6 w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div className="absolute top-6 right-6 w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-16 bg-blue-400 rounded-lg"></div>
                    <div className="w-10 h-16 bg-blue-400 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Art placeholder - right side with red/orange art */}
            <div className="absolute right-0 top-0 w-1/2 h-full p-6">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/30 flex items-center justify-center overflow-hidden">
                {/* Paperclip-like design */}
                <div className="relative w-full h-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-48">
                    <div className="absolute inset-0 border-8 border-red-500 rounded-[40px] transform rotate-12"></div>
                    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-12 h-24 bg-red-500/30"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider line */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-3/4 bg-white/10"></div>
          </div>

          {/* Floating Action Button */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all cursor-pointer">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Floating Badges */}
        {/* Sketch Badge - Top Left */}
        <div className="absolute top-12 left-12 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-float">
          Sketch
        </div>

        {/* AI Art Badge - Top Right */}
        <div className="absolute top-20 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2 animate-float-delayed">
          <Palette className="w-4 h-4" />
          AI Art
        </div>

        {/* Floating Icon - Bottom Right */}
        <div className="absolute bottom-32 right-8 bg-gradient-to-br from-gray-700 to-gray-800 border border-white/10 rounded-2xl p-4 shadow-xl animate-float">
          <Sparkles className="w-8 h-8 text-purple-400" />
        </div>
      </div>
    </div>
  );
};

export default FloatingCanvas;
