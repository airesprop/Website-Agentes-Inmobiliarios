import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
  },
  {
    question: "Can I change my plan later?",
    answer: "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid."
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add as much information as you need to your invoices. This includes company name, address, and VAT number."
  },
  {
    question: "How does billing work?",
    answer: "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces."
  },
  {
    question: "How do I change my account email?",
    answer: "You can change the email address associated with your account by going to your Account Settings page."
  }
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Frequently asked questions</h2>
          </Reveal>
          <Reveal delay={0.1}>
             <p className="text-lg text-gray-500">Everything you need to know about the product and billing.</p>
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