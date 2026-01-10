import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import WaitlistModal from './WaitlistModal';

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
    text: "Mandás un Word o PDF con la informacion de la propiedad a tus clientes para que no vean el contacto del agente vendedor."
  }
];

const Hero: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

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
            <div className="inline-flex items-center gap-3 md:gap-4 pl-2 pr-6 md:pl-3 md:pr-8 py-2 md:py-3 rounded-full border border-gray-200/50 bg-gray-50/80 backdrop-blur-md mb-8 md:mb-10 shadow-sm scale-90 md:scale-100" style={{ lineHeight: '15px', height: '58px' }}>
              <div className="flex -space-x-3" style={{ width: '100px', height: 'fit-content' }}>
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i} 
                    src={`https://i.pravatar.cc/100?img=${i + 15}`} 
                    alt="User" 
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="text-sm md:text-lg font-medium text-gray-800 tracking-wide" style={{ fontSize: '17px' }}>
                Para Agentes Inmobiliarios de CABA y GBA
              </span>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-black leading-[0.95] mb-6 md:mb-8 break-words w-full" style={{ fontSize: '83px' }}>
                Dejá de Perder Clientes,
                <br className="hidden md:block" />
                <span className="md:hidden"> </span>
                Cerrá Más Operaciones
            </h1>
          </Reveal>
          
          <Reveal delay={0.3}>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mx-auto mb-8 md:mb-10 leading-relaxed font-medium px-2" style={{ width: '640px' }}>
                Una plataforma con TU marca que protege tu trabajo, tus clientes, y tus comisiones mientras accedes a propiedades que otros no encuentran.
            </p>
          </Reveal>
          
          <Reveal delay={0.4}>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-8 md:px-12 py-4 md:py-6 rounded-full bg-black text-white text-base md:text-lg font-bold uppercase tracking-widest hover:bg-[#00401a] hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(0,64,26,0.5)] transition-all duration-500 group shadow-xl"
              style={{
                height: 'fit-content',
                width: 'fit-content',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '20px',
                paddingRight: '10px'
              }}
            >
              Acceso Anticipado
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-110" style={{ width: '35px', height: '35px' }}>
                <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-black" style={{ width: '24px', height: '24px' }} />
              </div>
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
                    ¿Te sentis <br/> <span className="italic" style={{ color: 'rgba(0, 64, 26, 0.8)' }}>identificado?</span>
                    </h2>
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

      <WaitlistModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default Hero;