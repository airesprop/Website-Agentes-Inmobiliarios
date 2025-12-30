import React from 'react';
import { ChevronRight } from 'lucide-react';

const CustomerStorySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Main Card Container */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden min-h-[650px] flex flex-col justify-between p-8 md:p-16 lg:p-20 text-white group cursor-pointer shadow-2xl transition-transform duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
             {/* Abstract Landscape Image to mimic the style */}
             <img 
               src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop" 
               alt="Abstract Landscape"
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.8] contrast-125"
             />
             
             {/* Gradients to ensure text readability and match the aesthetic */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#02182B] via-[#02182B]/80 to-transparent opacity-90"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#02182B] via-transparent to-transparent opacity-80"></div>
             
             {/* Golden glow effect to simulate the 'arch' light from the right */}
             <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-[100px] pointer-events-none"></div>
          </div>

          {/* Top Content */}
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase mb-8 text-blue-200/90 font-inter">
              Customer Story
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] mb-10 tracking-tight font-inter">
              See how Anthropic accelerates AI development with Mintlify
            </h2>
            <div className="inline-flex items-center gap-2 text-lg font-medium text-white group-hover:gap-4 transition-all duration-300">
              <span>Read story</span>
              <ChevronRight size={20} />
            </div>
          </div>

          {/* Bottom Stats Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 mt-24 md:mt-0 max-w-3xl">
            <div className="flex flex-col">
              <span className="text-6xl md:text-7xl font-normal mb-3 font-inter tracking-tight">2M+</span>
              <span className="text-gray-300 text-lg md:text-xl font-light">Monthly active developers</span>
            </div>
            <div className="flex flex-col">
              <span className="text-6xl md:text-7xl font-normal mb-3 font-inter tracking-tight">3+</span>
              <span className="text-gray-300 text-lg md:text-xl font-light leading-snug">
                Products serviced: Claude API, MCP, and Claude Code
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomerStorySection;