'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import FloatingCanvas from './FloatingCanvas';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-purple-300 font-medium">AI-Powered Art Studio</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                Draw. Improve.
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Transform.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-gray-400 max-w-xl">
              Sketch freely, get AI feedback, and transform your ideas into finished artwork.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl text-base font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2">
                Start Drawing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-white/10 transition-all">
                See Gallery
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-500">Artists</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">500K+</div>
                <div className="text-sm text-gray-500">Artworks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white flex items-center gap-1">
                  4.9
                  <span className="text-yellow-500">★</span>
                </div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - FloatingCanvas component */}
          <div className="hidden lg:block">
            <FloatingCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;