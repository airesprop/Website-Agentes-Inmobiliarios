import React from 'react';
import Reveal from './Reveal';

const FeatureShowcase: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="beneficios">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
            <Reveal>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900 mb-4 md:mb-6 font-sans">
                    Beneficios
                </h2>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">
                    Descubre las herramientas diseñadas para potenciar tu productividad y maximizar tus resultados.
                </p>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 h-auto">
          
          {/* CARD 1 */}
          <div className="lg:col-span-2">
            <Reveal className="h-full">
                <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] min-h-[350px] md:min-h-[400px] group h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#022c22] via-[#065f46] to-[#10b981] opacity-95"></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 text-white">
                        <div className="flex-grow flex justify-end items-center relative">
                            {/* Placeholder Space for Future Image */}
                            <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[280px] md:w-[450px] h-[220px] md:h-[280px] bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm shadow-inner"></div>
                        </div>
                        
                        <div className="max-w-md mt-auto pt-32 md:pt-0 relative z-20">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Task Organizer</h3>
                            <p className="text-white/90 font-medium leading-relaxed text-sm md:text-base">
                                Easily sort, prioritize, and track your to-dos in one clean, intuitive workspace.
                            </p>
                        </div>
                    </div>
                </div>
            </Reveal>
          </div>

          {/* CARD 2 */}
          <div className="lg:col-span-1">
             <Reveal delay={0.2} className="h-full">
                <div className="bg-gray-50 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-between hover:bg-gray-100 transition-colors duration-300 h-full min-h-[300px]">
                    <div className="mb-6 md:mb-8 relative w-full h-[180px] md:h-[200px]">
                        <div className="w-full h-full rounded-xl bg-white border border-gray-200 shadow-sm"></div>
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 tracking-tight">Focus Timer</h3>
                        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                            Use built-in Pomodoro and time-blocking tools to stay in the zone and avoid burnout.
                        </p>
                    </div>
                </div>
             </Reveal>
          </div>

          {/* CARD 3 */}
          <div className="lg:col-span-1">
             <Reveal delay={0.3} className="h-full">
                <div className="bg-gray-50 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-end hover:bg-gray-100 transition-colors duration-300 min-h-[300px] md:min-h-[350px] h-full">
                    <div className="mb-6 md:mb-8">
                        <div className="flex items-center -space-x-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[3px] border-white bg-gray-200"></div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 tracking-tight">Smart Scheduling</h3>
                        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                            Plan your day with a drag-and-drop calendar that adapts to your workflow.
                        </p>
                    </div>
                </div>
             </Reveal>
          </div>

          {/* CARD 4 */}
          <div className="lg:col-span-2">
            <Reveal delay={0.1} className="h-full">
                <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] min-h-[350px] md:min-h-[400px] group h-full">
                    <div className="absolute inset-0 bg-gradient-to-bl from-[#064e3b] to-[#022c22]"></div>

                    <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 text-white">
                        <div className="max-w-md">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Custom Reminders</h3>
                            <p className="text-white/90 font-medium leading-relaxed text-sm md:text-base">
                                Get timely alerts and gentle nudges so nothing important slips through the cracks.
                            </p>
                        </div>
                        <div className="absolute right-0 bottom-0 h-[80%] md:h-[90%] w-[250px] md:w-[350px] bg-white/5 border-l border-t border-white/10 rounded-tl-[3rem] backdrop-blur-sm hidden sm:block"></div>
                    </div>
                </div>
             </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;