import React from "react";
import { ChevronDown } from "lucide-react";
import SolutionDropdown from "./SolutionDropdown";
import ResourcesDropdown from "./ResourcesDropdown";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="w-full sticky top-0 z-50 bg-black">
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="bg-green-500 text-white px-2 py-0.5 rounded text-sm">
            New
          </span>
          <Link to="/click-to-instagram-ads" className="text-white text-sm hover:underline">
            Click-to-Instagram Direct Ads
          </Link>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-white"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="QuickRevert Logo" className="w-8 h-8 rounded-full" />
              <span className="text-white">
                <span className="font-semibold">Quick</span>
                <span>Revert.tech</span>
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/pricing" className="text-white hover:text-gray-300 transition-colors">
                Pricing
              </Link>
              
              {/* Solutions Dropdown */}
              <SolutionDropdown />
              
              {/* Resources Dropdown */}
              <ResourcesDropdown />
              
              <a href="#case-studies" className="text-white hover:text-gray-300 transition-colors">
                Case Studies
              </a>
              <Link to="/integration" className="text-white hover:text-gray-300 transition-colors">
                Integrations
              </Link>
              <a href="#partners" className="text-white hover:text-gray-300 transition-colors">
                Partners
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 ml-4">
              <Link to="/login" className="text-white px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors">
                Login
              </Link>
              <Link to="/demo" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}