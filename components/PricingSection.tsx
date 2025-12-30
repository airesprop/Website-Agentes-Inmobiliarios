import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Reveal from './Reveal';

const features = [
  "Access to 21,000+ verified investors",
  "Verified emails & direct mobile numbers",
  "Unlimited searches & 500 exports per month",
  "Advanced filters by stage, sector, revenue, and more",
  "Immediate platform access after secure checkout"
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
            <Reveal>
                <span className="inline-block py-2 px-5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 mb-8 bg-white shadow-sm">
                    Pricing
                </span>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                    Simple, transparent pricing
                </h2>
                <p className="text-xl text-gray-500 font-light">
                    Choose the plan that works best for you
                </p>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* --- LEFT CARD: Monthly --- */}
          <Reveal delay={0.1} className="h-full">
            <div className="bg-white rounded-[2rem] border border-gray-200 p-8 md:p-12 flex flex-col items-center text-center h-full hover:shadow-lg transition-shadow duration-300">
                
                <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Monthly</h3>
                <p className="text-gray-500 mb-8 font-medium">
                    Flexible month-to-month access
                </p>
                
                <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-6xl font-bold text-gray-900 tracking-tight">$49</span>
                    <span className="text-gray-500 text-lg font-medium">/month</span>
                </div>
                
                <p className="text-gray-500 mb-8 text-sm">Cancel anytime</p>

                <button className="w-full py-4 rounded-xl border border-gray-200 text-gray-900 font-bold text-sm bg-white hover:bg-gray-50 transition-all flex items-center justify-center gap-2 mb-10 shadow-sm group">
                    Get Started
                    <ArrowRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                </button>
                
                {/* Feature List */}
                <div className="w-full text-left">
                    <ul className="space-y-5">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 flex-shrink-0 text-gray-900">
                                <Check size={18} strokeWidth={2} />
                            </span>
                            <span className="text-[15px] text-gray-600 leading-snug font-medium">
                                {feature}
                            </span>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
          </Reveal>


          {/* --- RIGHT CARD: Lifetime Access (Best Value) --- */}
          <Reveal delay={0.2} className="h-full">
             <div className="relative bg-white rounded-[2rem] border-2 border-gray-900 p-8 md:p-12 flex flex-col items-center text-center h-full shadow-2xl transform md:-translate-y-2">
                
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1f1f1f] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
                    Best Value
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Lifetime Access</h3>
                <p className="text-gray-500 mb-8 font-medium">
                    One payment, yours forever
                </p>
                
                <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl font-bold text-gray-300 line-through decoration-gray-300 decoration-2">$199</span>
                    <span className="text-6xl font-bold text-gray-900 tracking-tight">$99</span>
                </div>
                
                <p className="text-gray-500 mb-8 text-sm">one-time payment + unlimited updates</p>

                <button className="w-full py-4 rounded-xl bg-[#1f1f1f] text-white font-bold text-sm hover:bg-black transition-all flex items-center justify-center gap-2 mb-10 shadow-lg hover:shadow-xl group hover:scale-[1.02]">
                    Get Lifetime Access ($99)
                    <ArrowRight size={16} className="text-white/70 group-hover:translate-x-1 transition-transform" />
                </button>
                
                {/* Feature List */}
                <div className="w-full text-left">
                    <ul className="space-y-5">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 flex-shrink-0 text-gray-900">
                                <Check size={18} strokeWidth={2} />
                            </span>
                            <span className="text-[15px] text-gray-600 leading-snug font-medium">
                                {feature}
                            </span>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;