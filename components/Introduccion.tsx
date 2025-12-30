import React, { useState } from 'react';
import { Shield, Zap, Calendar, Search, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

const Introduccion: React.FC = () => {
  return (
    <section id="de-que-se-trata" className="py-16 bg-[#F6F5F4] flex flex-col justify-center items-center w-full px-4 md:px-6">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center">
            
            {/* Header Section */}
            <div className="text-center mb-12 max-w-3xl">
                <Reveal>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#050505] mb-6 font-sans">
                        AiresProp
                    </h2>
                    <p className="text-[#37352f] text-xl md:text-2xl leading-relaxed font-light max-w-2xl mx-auto text-gray-600">
                        Tu plataforma para retener clientes compradores y cerrar más operaciones.
                    </p>
                </Reveal>
            </div>

            {/* NOTION STYLE GRID */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 items-stretch">
                
                {/* CARD 1 */}
                <Reveal className="h-full" delay={0.2}>
                    <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden flex flex-col group h-full min-h-[500px]">
                        {/* Visual Area - Top */}
                        <div className="h-[280px] lg:flex-1 w-full bg-[#F4F2EE] relative overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop" 
                                alt="Abstract Art" 
                                className="w-full h-full object-cover opacity-90 mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute bottom-6 left-8 w-14 h-14 bg-[#337EA9] rounded-2xl flex items-center justify-center text-white shadow-xl z-10">
                                <Shield size={28} strokeWidth={2} />
                            </div>
                        </div>

                        {/* Content Area - Bottom */}
                        <div className="p-8 flex flex-col gap-4 relative z-20 bg-white border-t border-gray-50">
                            <h3 className="text-3xl font-bold text-[#050505] tracking-tight">
                                Blindaje de Comisiones
                            </h3>
                            <p className="text-lg text-gray-500 leading-relaxed font-medium">
                            Tus clientes ven toda la info, pero con <strong>TU contacto</strong>. Nadie ve al vendedor original.
                            </p>
                            
                            <div className="mt-4">
                                <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-50 text-[#050505] text-sm font-bold hover:bg-gray-100 transition-colors border border-gray-200">
                                    Ver ejemplo
                                </button>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col gap-6 h-full">

                    {/* CARD 2 */}
                    <Reveal delay={0.3} className="flex-1">
                        <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row items-center h-full min-h-[240px] group p-8 pb-0 md:pb-8 md:pr-0">
                            <div className="flex-1 flex flex-col justify-center items-start gap-3 mb-6 md:mb-0">
                                <div className="mb-2 w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                                    <Zap size={20} strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#050505] tracking-tight">
                                    Infraestructura
                                </h3>
                                <p className="text-[15px] text-gray-500 leading-relaxed font-medium max-w-[240px]">
                                    Búsqueda autónoma 24/7. Te avisa de nuevas oportunidades al instante.
                                </p>
                            </div>
                            
                            {/* Asset Area */}
                            <div className="w-full md:w-1/2 h-[200px] bg-[#F7F7F5] rounded-tl-2xl border-t border-l border-gray-200 relative overflow-hidden shadow-inner translate-y-4 md:translate-y-8 md:translate-x-4">
                                <div className="p-5 space-y-4">
                                    <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                                        <span>Nuevas Propiedades</span>
                                        <Search size={10} />
                                    </div>
                                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                                            <Search size={14} />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-1.5 w-16 bg-gray-200 rounded-full"></div>
                                            <div className="h-1.5 w-10 bg-gray-100 rounded-full"></div>
                                        </div>
                                        <div className="text-[9px] text-gray-400 font-medium">Now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* CARD 3 */}
                    <Reveal delay={0.4} className="flex-1">
                        <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row items-center h-full min-h-[240px] group p-8 pb-0 md:pb-8 md:pr-0">
                            <div className="flex-1 flex flex-col justify-center items-start gap-3 mb-6 md:mb-0">
                                <div className="mb-2 w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                                    <Calendar size={20} strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#050505] tracking-tight">
                                    Tu Marca
                                </h3>
                                <p className="text-[15px] text-gray-500 leading-relaxed font-medium max-w-[240px]">
                                    Tus clientes comparan, marcan favoritos y piden visitas en TU plataforma.
                                </p>
                            </div>
                            
                            {/* Asset Area */}
                            <div className="w-full md:w-1/2 h-[200px] bg-[#fff] rounded-tl-2xl border-t border-l border-gray-200 relative overflow-hidden shadow-inner translate-y-4 md:translate-y-8 md:translate-x-4">
                                <div className="p-0 font-sans">
                                    <div className="bg-[#FAFAFA] border-b border-gray-100 p-4 flex justify-between items-center">
                                        <span className="text-[10px] font-bold text-gray-700">Octubre 2025</span>
                                    </div>
                                    <div className="grid grid-cols-7 gap-px bg-gray-50">
                                        {Array.from({length: 21}).map((_, i) => (
                                            <div key={i} className={`bg-white h-8 flex items-center justify-center text-[10px] relative ${i === 10 ? 'bg-red-50 text-red-600 font-bold' : 'text-gray-400 font-medium'}`}>
                                                {i + 1}
                                                {i === 10 && <div className="absolute w-1 h-1 bg-red-500 rounded-full bottom-1"></div>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>

            {/* Feature Carousel Component (Unified Container) */}
            <div className="w-full">
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
            title: "Delegá lo operativo",
            desc: "Lo que antes tomaba días, ahora son minutos. Decile tu objetivo y mirá cómo trabaja.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2664&q=80"
        },
        {
            id: 1,
            title: "Colabora con tu equipo",
            desc: "Es como tener un usuario avanzado integrado que trabaja junto a tu equipo inmobiliario.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
        },
        {
            id: 2,
            title: "Sabe todo lo que sabés",
            desc: "Busca en todas tus páginas, mensajes, archivos y la web para mostrarte exactamente lo que necesitás.",
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
        },
        {
            id: 3,
            title: "Personalizado para vos",
            desc: "Tu agente aprende cómo trabajás. Vos controlás todo, desde cómo se comporta hasta cómo se ve.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2671&q=80"
        }
    ];

    const nextTab = () => {
        setActiveTab((prev) => (prev === tabs.length - 1 ? 0 : prev + 1));
    };

    const prevTab = () => {
        setActiveTab((prev) => (prev === 0 ? tabs.length - 1 : prev - 1));
    };

    return (
        <div className="w-full mt-6">
            {/* Unified Container Card */}
            <div className="bg-white rounded-[32px] border border-gray-200 shadow-xl flex flex-col lg:flex-row overflow-hidden min-h-[500px] lg:h-[500px]">
                
                {/* LEFT SIDE: Content List */}
                <div 
                    className="lg:w-[45%] flex flex-col justify-center bg-white p-6 lg:p-8 relative z-10"
                >
                    <div className="flex flex-col gap-0 relative">
                        {tabs.map((tab, idx) => {
                            const isActive = activeTab === idx;
                            return (
                                <button 
                                    key={tab.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={`
                                        relative text-left w-full pl-8 pr-4 py-4 rounded-xl transition-colors duration-300 ease-out group outline-none
                                        ${isActive ? 'bg-transparent' : 'hover:bg-gray-50/50'}
                                    `}
                                >
                                    {/* 
                                        THE PROGRESS LINE
                                        - Shows ONLY on active tab.
                                        - Consists of a gray track and a black filling bar.
                                        - Driven by CSS keyframe animation for perfect 6s timing.
                                        - onAnimationEnd triggers nextTab, serving as the auto-play timer.
                                    */}
                                    {isActive && (
                                        <div className="absolute left-0 top-5 bottom-5 w-1 bg-gray-200 rounded-full overflow-hidden">
                                            <div 
                                                className="w-full bg-[#050505] rounded-full animate-progress origin-top"
                                                onAnimationEnd={nextTab}
                                            />
                                        </div>
                                    )}

                                    <div className="flex flex-col gap-2">
                                        <h3 className={`text-lg md:text-xl font-sans tracking-tight transition-colors duration-300 ${isActive ? 'text-[#050505] font-bold' : 'text-gray-400 font-medium group-hover:text-gray-600'}`}>
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
                                                <p className="text-[15px] text-gray-500 leading-relaxed font-medium pr-2">
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
                    className="lg:w-[55%] bg-[#F7F7F5] relative h-[350px] lg:h-full border-t lg:border-t-0 lg:border-l border-gray-100 overflow-hidden group"
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
                    
                    {/* Navigation Controls (Overlay) */}
                    <div className="absolute bottom-8 right-8 z-20 flex gap-4">
                        <button 
                            onClick={(e) => { e.stopPropagation(); prevTab(); }} 
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-[#050505] shadow-lg backdrop-blur-sm border border-white/20 transition-all hover:scale-110 active:scale-95 group"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                        </button>
                        <button 
                            onClick={(e) => { e.stopPropagation(); nextTab(); }} 
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#050505] hover:bg-[#1a1a1a] text-white shadow-lg transition-all hover:scale-110 active:scale-95 group"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Introduccion;