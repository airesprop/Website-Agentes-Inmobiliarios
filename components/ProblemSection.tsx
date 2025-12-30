import React from 'react';

const problems = [
  {
    text: "Perdés 9 de cada 10 clientes que te contactan directo al dueño."
  },
  {
    text: "Gastás 10-15 horas/mes buscando propiedades que después no cierran."
  },
  {
    text: "Llamás para coordinar visita y te dicen \"no compartimos comisión\"."
  }
];

const ProblemSection: React.FC = () => {
  return (
    <section className="py-32 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:w-2/5 sticky top-32">
            <h2 className="text-6xl md:text-8xl font-serif-display leading-[0.9] text-gray-900 mb-6">
              ¿Te sientes <br/> <span className="italic text-gray-400">identificado?</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-sm">
              La industria inmobiliaria tiene fricciones que consumen tu energía. Es hora de identificarlas para poder avanzar.
            </p>
          </div>

          {/* Right Column: The List */}
          <div className="lg:w-3/5 flex flex-col gap-0 border-l border-gray-100">
            {problems.map((item, i) => (
              <div key={i} className="pl-10 py-12 border-b border-gray-100 group hover:bg-gray-50 transition-colors cursor-default">
                <div className="flex items-start gap-8">
                  <span className="text-5xl font-serif-display text-gray-200 group-hover:text-[#00401a] transition-colors duration-300 select-none">
                    0{i+1}
                  </span>
                  <p className="text-2xl md:text-3xl text-gray-800 font-light leading-snug group-hover:text-black transition-colors">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;