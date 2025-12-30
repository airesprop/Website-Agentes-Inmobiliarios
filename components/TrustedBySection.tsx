import React from 'react';
import { ArrowRight, Check, BarChart3, UserCog, RefreshCw } from 'lucide-react';

const TrustedBySection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Top Header & Logos --- */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 tracking-tight">
            <span className="text-[#FF5D35]">Trusted by 500+</span> Entrepreneurs,<br />
            CEOs, and Founders
          </h2>

          {/* Logos Strip - Simulating the logos from the image */}
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-bold text-xl uppercase tracking-wider"><div className="w-6 h-6 bg-gray-800 rounded-full"></div> Black Point</div>
            <div className="font-semibold text-2xl tracking-tight text-gray-700">PointCard™</div>
            <div className="font-bold text-xl italic text-gray-800">Sprint <span className="text-sm font-normal not-italic">AIRAVE</span></div>
            <div className="flex items-center gap-2 font-bold text-lg"><div className="w-6 h-6 bg-gray-400 rounded-sm"></div> RABPOINT</div>
            <div className="font-mono text-xl tracking-widest border border-gray-400 px-2 py-1">LOXMET</div>
            <div className="font-serif text-xl tracking-wide text-gray-600">CAROLLINUM</div>
          </div>
        </div>

        {/* --- Main 3-Column Content --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-24">
          
          {/* LEFT COLUMN: Headlines & Checklist */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-2">
              Feeling Stuck or
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-6">
              Overwhelmed as a <br />
              <span className="text-[#FF5D35]">Business Owner?</span>
            </h2>

            <button className="bg-[#FF5D35] hover:bg-[#e04e2a] text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-all shadow-lg hover:shadow-xl mb-12 group">
              Let's Find
              <div className="bg-white text-[#FF5D35] rounded-full p-0.5 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={14} strokeWidth={3} />
              </div>
            </button>

            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="min-w-[24px] h-6 w-6 rounded-full bg-black flex items-center justify-center mt-1">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
                <p className="text-gray-600 leading-relaxed font-medium">
                  You’re struggling to scale and don’t know what to prioritize.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="min-w-[24px] h-6 w-6 rounded-full bg-black flex items-center justify-center mt-1">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
                <p className="text-gray-600 leading-relaxed font-medium">
                  You feel exhausted juggling too many roles in your business.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="min-w-[24px] h-6 w-6 rounded-full bg-black flex items-center justify-center mt-1">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
                <p className="text-gray-600 leading-relaxed font-medium">
                  You crave a clear, personalized roadmap to grow faster and smarter.
                </p>
              </li>
            </ul>
          </div>

          {/* MIDDLE COLUMN: Image */}
          <div className="lg:col-span-4 h-full flex justify-center">
            <div className="relative w-full max-w-sm lg:max-w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                alt="Business Owner Portrait" 
                className="w-full h-full object-cover"
              />
              {/* Optional: Subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* RIGHT COLUMN: Problem Descriptions */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-10 pl-0 lg:pl-4">
            
            {/* Item 1 */}
            <div className="group">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-4 text-[#FF5D35]">
                <BarChart3 size={20} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth Stuck</h3>
              <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
                Your business has plateaued, and you need fresh strategies to break through the ceiling.
              </p>
            </div>

            {/* Item 2 */}
            <div className="group">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-4 text-[#FF5D35]">
                <UserCog size={20} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wearing Hats</h3>
              <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
                You’re juggling everything alone—operations, marketing, sales—and it’s draining your energy fast.
              </p>
            </div>

            {/* Item 3 */}
            <div className="group">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-4 text-[#FF5D35]">
                <RefreshCw size={20} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lack Clarity</h3>
              <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
                Without a clear roadmap, every decision feels risky, slow, and emotionally exhausting to make.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;