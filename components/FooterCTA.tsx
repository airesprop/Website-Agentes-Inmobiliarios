import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import WaitlistModal from './WaitlistModal';

const FooterCTA: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-12 md:py-20 bg-white" style={{ width: '100%', height: 'fit-content', paddingTop: '58px', paddingBottom: '58px' }}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <Reveal>
            {/* Main Card Container */}
            <div className="relative w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden min-h-[auto] md:min-h-[600px] flex flex-col items-center justify-center text-center p-8 md:p-16 lg:p-20 text-white shadow-2xl">
            
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
            <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto py-12 md:py-0">
                
                <Reveal delay={0.2}>
                    <div className="inline-flex items-center gap-3 md:gap-4 pl-2 pr-6 md:pl-3 md:pr-8 py-2 md:py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8 md:mb-10 shadow-sm scale-90 md:scale-100" style={{ lineHeight: '15px', height: '58px' }}>
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
                        <span className="text-sm md:text-lg font-medium text-white tracking-wide" style={{ fontSize: '17px' }}>
                            Para Agentes Inmobiliarios de CABA y GBA
                        </span>
                    </div>
                </Reveal>

                <Reveal delay={0.3}>
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-6 md:mb-8 leading-[1.1] md:leading-[0.95]">
                    Accedé sin costo
                    </h2>
                </Reveal>

                <Reveal delay={0.4}>
                    <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed font-medium px-4">
                    Asegurá tu lugar entre los primeros agentes que van a retener clientes y evitar búsquedas manuales. Te avisamos cuando podés usar la plataforma. 
                    </p>
                </Reveal>

                {/* Buttons & Arrow Wrapper */}
                <Reveal delay={0.5}>
                    <div className="relative flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto">
                        
                        <button
                          onClick={() => setShowModal(true)}
                          className="inline-flex items-center gap-2 px-8 md:px-12 py-4 md:py-6 rounded-full bg-white text-black text-base md:text-lg font-bold uppercase tracking-widest hover:bg-gray-100 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 group shadow-xl"
                          style={{
                            height: 'fit-content',
                            width: 'fit-content',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            paddingLeft: '18px',
                            paddingRight: '10px'
                          }}
                        >
                          Acceso Anticipado
                          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-black flex items-center justify-center transition-transform group-hover:scale-110" style={{ width: '35px', height: '35px' }}>
                            <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" style={{ width: '24px', height: '24px' }} />
                          </div>
                        </button>
                        
                        <button 
                          className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all hover:shadow-lg backdrop-blur-sm"
                          style={{
                            paddingTop: '16px',
                            paddingBottom: '16px',
                            paddingLeft: '34px',
                            paddingRight: '34px'
                          }}
                        >
                            Hablar con el equipo
                        </button>
                    </div>
                </Reveal>
            </div>
            </div>
        </Reveal>
      </div>
      <WaitlistModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}

export default FooterCTA;