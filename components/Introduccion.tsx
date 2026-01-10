import React, { useState } from 'react';
import Reveal from './Reveal';

const Introduccion: React.FC = () => {
  return (
    <section id="de-que-se-trata" className="py-12 md:py-16 bg-[#F6F5F4] flex flex-col justify-start items-center w-full px-4 md:px-6">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center">
            
            {/* Header Section */}
            <div className="text-center mb-0 max-w-3xl">
                <Reveal>
                    <div style={{ width: '652px' }}>
                        <div className="flex items-center justify-center gap-4 mb-4 md:mb-6" style={{ height: 'fit-content' }}>
                            <img 
                                src="/logo-AP.png" 
                                alt="AiresProp Logo" 
                                className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                                style={{ height: '74px', width: '89px' }}
                            />
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-[#050505] font-sans" style={{ fontFamily: 'Riccione', letterSpacing: '0px', height: 'fit-content' }}>
                                AiresProp
                            </h2>
                        </div>
                        <p className="text-[#37352f] text-lg font-medium w-full mx-auto text-gray-500" style={{ height: 'fit-content', fontSize: '18px', lineHeight: '26px' }}>
                        Conectamos agentes inmobiliarios con propiedades de inmobiliarias que compartan comisión. Tenés tu propio portal donde tus clientes ven propiedades pero con tu contacto.
                        </p>
                    </div>
                </Reveal>
            </div>


            {/* Feature Carousel Component (Unified Container) */}
            <div className="w-full pt-[20px] pb-[20px]">
                <Reveal delay={0.5}>
                    <FeatureCarousel />
                </Reveal>
            </div>

        </div>
    </section>
  );
};

const FeatureCarousel: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            id: 0,
            title: "Tu propio Portal con tu Marca",
            desc: "Tus clientes se crean un perfil en tu portal, ponen sus datos y configuran sus preferencias de búsqueda. El sistema compara cada propiedad con estos criterios.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2664&q=80"
        },
        {
            id: 1,
            title: "Búsqueda Automática con Triage",
            desc: "El sistema busca propiedades de forma autónoma 24/7, según las preferencias de cada cliente. Con el triage activado, las propiedades tienen que ser aprobadas por vos para que le aparezcan a tu cliente dentro de tu portal",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
        },
        {
            id: 2,
            title: "Protección de Contacto",
            desc: "Tus clientes ven toda la información de propiedad pero cuando quieren consultar o coordinar una visita, solo aparece TU contacto. NO pueden ver el contacto del agente vendedor.",
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
        }
    ];

    const nextTab = () => {
        setActiveTab((prev) => (prev === tabs.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full mt-2 md:mt-6">
            {/* Unified Container Card */}
            <div className="bg-white rounded-[24px] md:rounded-[32px] border border-gray-200 shadow-xl flex flex-col lg:flex-row overflow-hidden min-h-[auto] lg:h-[500px]">
                
                {/* LEFT SIDE: Content List */}
                <div 
                    className="w-full lg:w-[45%] flex flex-col justify-center bg-white p-4 md:p-6 lg:p-8 relative z-10 order-2 lg:order-1"
                >
                    <div className="flex flex-col gap-0 relative">
                        {tabs.map((tab, idx) => {
                            const isActive = activeTab === idx;
                            return (
                                <button 
                                    key={tab.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={`
                                        relative text-left w-full pl-6 md:pl-8 pr-4 py-3 md:py-4 rounded-xl transition-colors duration-300 ease-out group outline-none
                                        ${isActive ? 'bg-transparent' : 'hover:bg-gray-50/50'}
                                    `}
                                >
                                    {/* PROGRESS LINE */}
                                    {isActive && (
                                        <div className="absolute left-0 top-4 bottom-4 md:top-5 md:bottom-5 w-1 bg-gray-200 rounded-full overflow-hidden">
                                            <div 
                                                className="w-full bg-[#050505] rounded-full animate-progress origin-top"
                                                onAnimationEnd={nextTab}
                                            />
                                        </div>
                                    )}

                                    <div className="flex flex-col gap-1 md:gap-2">
                                        <h3 className={`text-base md:text-xl font-sans tracking-tight transition-colors duration-300 ${isActive ? 'text-[#050505] font-bold' : 'text-gray-400 font-medium group-hover:text-gray-600'}`} style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
                                            {tab.title}
                                        </h3>
                                        
                                        {/* Accordion content */}
                                        <div 
                                            className={`
                                                grid transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
                                                ${isActive ? 'grid-rows-[1fr] opacity-100 mt-1' : 'grid-rows-[0fr] opacity-0 mt-0'}
                                            `}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed font-medium pr-2">
                                                    {tab.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT SIDE: Image/Carousel */}
                <div 
                    className="w-full lg:w-[55%] bg-[#F7F7F5] relative h-[250px] md:h-[350px] lg:h-full border-b lg:border-b-0 lg:border-l border-gray-100 overflow-hidden group order-1 lg:order-2"
                >
                    
                    {/* Images */}
                    {tabs.map((tab, idx) => (
                        <div 
                            key={tab.id}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeTab === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                            <img 
                                src={tab.image} 
                                alt={tab.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Introduccion;