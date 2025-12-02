import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="bg-black relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[100px]"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-25">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-white text-5xl lg:text-7xl mb-8 tracking-tight" style={{ fontWeight: 700, lineHeight: 1.1 }}>
            Turn Visitors into Repeat Buyers
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-lg lg:text-xl mb-12 max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
            The WhatsApp Automation Platform that makes every penny spent on marketing, customer relationships, and support count.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <Link to="/demo" className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors inline-flex items-center gap-2 text-lg">
              Book a Demo
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-white"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <img 
              src="/hero.png" 
              alt="Hero" 
              className="mx-auto max-w-full h-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <div className="flex items-center gap-2 text-white">
              <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
              </div>
              <span>30% Less CAC</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
              </div>
              <span>8x ROAS</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
              </div>
              <span>2x Conversions</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
              </div>
              <span>2x Customer LTV</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}