import React from 'react';
import Reveal from './Reveal';

const FeatureShowcase: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="beneficios">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-0">
        
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
            <Reveal>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900 mb-4 md:mb-6 font-sans" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif', marginBottom: '0px' }}>
                    Beneficios
                </h2>
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
                        </div>
                        
                        <div className="max-w-md mt-auto pt-32 md:pt-0 relative z-20">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Dejar de perder clientes compradores</h3>
                            <p className="text-white/90 font-medium leading-relaxed text-sm md:text-base">
                            Tus clientes ven toda la información de propiedad pero con tu contacto. Tienen todo lo que necesitan dentro de tu plataforma, no tienen motivo para buscar por fuera, recuperando 5-10 clientes al año que actualmente perdés.
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
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 tracking-tight">Incrementar el volumen de operaciones</h3>
                        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                        Todas las propiedades dentro de la plataforma comparten comisión. Con búsqueda automática y capacidad ilimitada de clientes, cerrás 5-10 operaciones extra al año sin aumentar tus horas trabajadas.
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
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 tracking-tight">Acceso a propiedades que la competencia no encuentra</h3>
                        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                        Tu competencia no puede buscar en todos los portales inmobiliarios por cada cliente. Vos accedés a todas las propiedades de forma centralizada sin tener que buscar manualmente en cada portal inmobiliario.
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
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Evitar perder 10-15 horas al mes buscando propiedades</h3>
                            <p className="text-white/90 font-medium leading-relaxed text-sm md:text-base">
                            El sistema busca propiedades de forma autónoma 24/7 según las preferencias de cada cliente, avisándote cuando aparecen nuevas oportunidades. Recuperando 100-120 horas al año.
                            </p>
                        </div>
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