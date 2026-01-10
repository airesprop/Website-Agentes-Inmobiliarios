import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  {
    question: "¿Cuánto cuesta?",
    answer: "Todas las personas que entren en el acceso anticipado van a recibir un mes entero sin costo, con todas las funcionalidades. Pasado ese mes, podrás seguir teniendo acceso a la plataforma y a sus funcionalidades por $20 USD/mes."
  },
  {
    question: "¿Qué pasa con mis clientes actuales?",
    answer: "Son tuyos. La plataforma solo protege que no se te escapen. Ellos crean su cuenta en tu portal, configuran sus preferencias y, a partir de ahí, el sistema le envía al agente posibles propiedades que sean de interés para sus clientes. Dentro de la plataforma, tus clientes ven tu contacto, no el del agente vendedor."
  },
  {
    question: "¿Tengo que compartir comisión?",
    answer: "Sí. Si no estás dispuesto a compartir comisión, esto no es para vos. Todas las propiedades en AiresProp tienen acuerdo de comisión compartida. La filosofía es: mejor 50% de comisión que $0 USD."
  },
  {
    question: "¿Cuántas propiedades hay en la plataforma?",
    answer: "Estamos integrando inmobiliarias activamente. Para el lanzamiento, esperamos tener aproximadamente el 75% de las propiedades en venta del mercado inmobiliario que sí comparten comisión."
  },
  {
    question: "¿Cuándo estará listo?",
    answer: "Primer trimestre 2025. Los de lista de espera entran primero. Te avisamos por email 1 semana antes del lanzamiento oficial."
  },
  {
    question: "¿Qué pasa si no me sirve después de empezar a usarlo?",
    answer: "Cancelás tu suscripción en cualquier momento sin preguntas. No hay contratos anuales ni compromisos. Si no te genera valor, te vas y listo."
  },
  {
    question: "¿Puedo tener múltiples clientes al mismo tiempo?",
    answer: "Sí. Capacidad ilimitada. Cada cliente tiene su propio perfil, preferencias y búsquedas activas. Vos gestionás todo desde tu panel de administración."
  },
  {
    question: "Si me anoto en lista de espera, ¿tengo que pagar algo hoy?",
    answer: "No. Cero. Solo dejás tu email. Te avisamos cuando abramos la plataforma. Ahí decidís si querés entrar o no. Compromiso cero."
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="py-24 bg-white" style={{ paddingTop: '67px', paddingBottom: '67px' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Preguntas Frecuentes</h2>
          </Reveal>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 0.05}>
                <div 
                className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-gray-50/50 ring-1 ring-gray-900/5' : 'bg-white hover:bg-gray-50'}`}
                >
                <button
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                    onClick={() => toggleFaq(index)}
                >
                    <span className="text-lg md:text-xl font-medium text-gray-900 pr-8 leading-snug">{faq.question}</span>
                    <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-300 ${openIndex === index ? 'bg-black border-black text-white' : 'bg-white border-gray-200 text-gray-400'}`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                </button>
                
                <div 
                    className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden">
                    <p className="px-6 md:px-8 pb-8 text-gray-500 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                    </p>
                    </div>
                </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;