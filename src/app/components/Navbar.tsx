'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">Nano Canvas</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="#features" 
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Features
            </Link>
            <Link 
              href="#gallery" 
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Gallery
            </Link>
            <Link 
              href="#pricing" 
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Pricing
            </Link>
            <Link 
              href="#faq" 
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              FAQ
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-gray-300 hover:text-white transition-colors text-sm">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;