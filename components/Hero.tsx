import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import Reveal from './Reveal';

const problems = [
  {
    text: "Perdés 9 de cada 10 clientes que te contactan directo al dueño."
  },
  {
    text: "Gastás 10-15 horas/mes buscando propiedades que después no cierran."
  },
  {
    text: "Llamás para coordinar visita y te dicen \"no compartimos comisión\"."
  },
  {
    text: "Mandás Word o PDF con la información de la propiedad a tus clientes para que no vean el contacto del agente vendedor."
  }
];

const Hero: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section className="relative pt-28 pb-16 md:pt-48 w-full min-h-[80vh] flex flex-col justify-between overflow-x-hidden">
      
      {/* 
        ELEGANT GREEN TINT BACKGROUND (Aurora Style)
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="relative w-full h-full">
            {/* 1. Global Tint */}
            <div 
                className="absolute top-0 left-0 w-full h-[80vh] opacity-100"
                style={{
                    background: 'linear-gradient(to bottom, #F0FDF4 0%, #ffffff 100%)' 
                }}
            />

            {/* 2. The "Glow" - Soft Green Radial */}
            <div 
                className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[140vw] h-[100vh] opacity-60"
                style={{
                    background: `
                        radial-gradient(
                            50% 50% at 50% 50%, 
                            rgba(52, 211, 153, 0.15) 0%,     /* Soft Emerald */
                            rgba(16, 185, 129, 0.05) 40%,    /* Faint Green */
                            rgba(255, 255, 255, 0) 70%       /* Transparent */
                        )
                    `,
                    filter: 'blur(100px)',
                }}
            />
            
            {/* 3. Bottom Fade Mask */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center flex-grow w-full">
        
        {/* Text Content */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20 flex flex-col items-center">
          
          <Reveal delay={0.1}>
            <p className="font-serif-display italic text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4 md:mb-6 tracking-wide">
              Para agentes que están cansados de regalar clientes.
            </p>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-black leading-[0.95] mb-6 md:mb-8 break-words w-full">
                Dejá de Perder Clientes,
                <br className="hidden md:block" />
                <span className="md:hidden"> </span>
                Cerrá Más Operaciones
            </h1>
          </Reveal>
          
          <Reveal delay={0.3}>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed font-medium px-2">
                Una plataforma con TU marca que protege tu trabajo, tus clientes, y tus comisiones mientras accedes a propiedades que otros no encuentran.
            </p>
          </Reveal>
          
          <Reveal delay={0.4}>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-6 rounded-full bg-black text-white text-base md:text-lg font-bold uppercase tracking-widest hover:bg-[#00401a] hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(0,64,26,0.5)] transition-all duration-500 group shadow-xl"
            >
              Acceso Anticipado
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>

        {/* 
            PROBLEM SECTION CONTENT
        */}
        <div className="w-full max-w-7xl mx-auto text-left mt-4 md:mt-8 mb-12">
            <div className="flex flex-col lg:flex-row gap-10 md:gap-20 items-start">
            
            {/* Left Column: Title - sticky behavior enabled only on desktop */}
            <div className="lg:w-2/5 relative lg:sticky lg:top-32 h-fit mb-8 lg:mb-0">
                <Reveal>
                    <h2 className="text-5xl md:text-6xl lg:text-8xl font-serif-display leading-[0.9] text-gray-900 mb-4 md:mb-6">
                    ¿Te sientes <br/> <span className="italic text-gray-400">identificado?</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-500 max-w-sm">
                    La industria inmobiliaria tiene fricciones que consumen tu energía. Es hora de identificarlas para poder avanzar.
                    </p>
                </Reveal>
            </div>

            {/* Right Column: The List */}
            <div className="lg:w-3/5 flex flex-col gap-0 border-l border-gray-100 w-full">
                {problems.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                    <div className="pl-6 md:pl-10 py-8 md:py-12 border-b border-gray-100 group hover:bg-emerald-50/30 transition-colors cursor-default">
                        <div className="flex items-start gap-4 md:gap-8">
                        <span className="text-4xl md:text-5xl font-serif-display text-gray-300 group-hover:text-[#00401a] transition-colors duration-300 select-none flex-shrink-0">
                            0{i+1}
                        </span>
                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-light leading-snug group-hover:text-black transition-colors">
                            {item.text}
                        </p>
                        </div>
                    </div>
                </Reveal>
                ))}
            </div>
            </div>
        </div>

      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:py-0">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-md animate-backdrop-enter"
                onClick={() => setShowModal(false)}
            />
            
            {/* Modal Content - Added max-h and overflow for mobile landscape/small screens */}
            <div className="relative bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-2xl w-full max-w-3xl overflow-hidden animate-modal-enter flex flex-col max-h-[90vh] md:max-h-none">
                <button 
                    onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/50 hover:bg-white rounded-full transition-colors z-20 text-gray-800 backdrop-blur-md"
                >
                    <X size={20} />
                </button>

                {/* Top Horizontal Image - Reduced height on mobile */}
                <div className="h-48 md:h-72 w-full relative flex-shrink-0">
                    <img 
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                        alt="Workspace" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Text & Form - Scrollable area */}
                <div className="p-6 md:p-10 lg:p-14 text-left bg-white overflow-y-auto">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif-display text-gray-900 mb-3 md:mb-4">
                        <span className="italic">Join</span> the waitlist
                    </h3>
                    <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-base md:text-xl">
                        Be the first to experience the future of productivity. Enter your email to get early access and exclusive updates.
                    </p>

                    <form className="flex flex-col gap-4 md:gap-5" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="name@company.com" 
                                required
                                className="w-full px-5 py-4 md:px-6 md:py-5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00401a] focus:ring-2 focus:ring-[#00401a]/20 outline-none transition-all placeholder:text-gray-400 text-gray-900 text-base md:text-lg"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full py-4 md:py-5 rounded-xl bg-[#00401a] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#003013] transition-all shadow-lg shadow-[#00401a]/20 hover:shadow-xl hover:scale-[1.01] flex items-center justify-center gap-2 group duration-300"
                        >
                            Get Early Access
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Hero;