import React from 'react';
import Reveal from './Reveal';

const FooterCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <Reveal>
            {/* Main Card Container */}
            <div className="relative w-full rounded-[2.5rem] overflow-hidden min-h-[600px] flex flex-col items-center justify-center text-center p-8 md:p-16 lg:p-20 text-white shadow-2xl">
            
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img 
                src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop" 
                alt="Background"
                className="w-full h-full object-cover filter brightness-[0.6] contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#02182B] via-[#02182B]/80 to-transparent opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#02182B] via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
                
                <Reveal delay={0.2}>
                    <div className="inline-flex items-center gap-4 pl-3 pr-8 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-10 shadow-sm">
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                        <img 
                            key={i} 
                            src={`https://i.pravatar.cc/100?img=${i + 15}`} 
                            alt="User" 
                            className="w-10 h-10 rounded-full border-2 border-[#02182B] object-cover"
                        />
                        ))}
                    </div>
                    <span className="text-lg font-semibold text-white tracking-wide">We have AI + Product Agencies</span>
                    </div>
                </Reveal>

                <Reveal delay={0.3}>
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.95]">
                    Get started for free
                    </h2>
                </Reveal>

                <Reveal delay={0.4}>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
                    From idea to investment, MVP to market — we adapt to your goals and build around what your product truly needs.
                    </p>
                </Reveal>

                {/* Buttons & Arrow Wrapper */}
                <Reveal delay={0.5}>
                    <div className="relative flex flex-col sm:flex-row items-center gap-6">
                        
                        <button className="px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-all hover:scale-105 shadow-xl hover:shadow-2xl">
                            Get Started
                        </button>
                        
                        <button className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all hover:shadow-lg backdrop-blur-sm">
                            Explore Pricing Plan
                        </button>

                        <div className="hidden lg:flex absolute left-[100%] top-1/2 -translate-y-1/2 ml-10 items-center gap-4 w-96 pointer-events-none">
                            <img 
                                src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688c6b2cbe982b077676b682_newsletter-arrow.svg"
                                alt="Arrow"
                                className="w-20 h-auto mb-2 opacity-80 invert"
                                style={{ filter: 'invert(1)' }} 
                            />
                            <p className="text-lg text-white/90 leading-tight text-left">
                                Got a concept? <br/> Let’s design it right.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FooterCTA;