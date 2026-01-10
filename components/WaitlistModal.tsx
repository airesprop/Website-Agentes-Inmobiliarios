import React, { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:py-0">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-backdrop-enter"
        onClick={onClose}
      />
      
      {/* Modal Content - Smaller size */}
      <div className="relative bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden animate-modal-enter flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full transition-colors z-20 text-gray-800 backdrop-blur-md"
        >
          <X size={20} />
        </button>

        {/* Top Horizontal Image - Smaller height */}
        <div className="h-32 md:h-40 w-full relative flex-shrink-0">
          <img 
            src="/waitlist-modal.svg" 
            alt="AiresProp" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Text & Form */}
        <div className="p-6 md:p-8 text-left bg-white">
          <h3 className="text-2xl md:text-3xl font-serif-display text-gray-900 mb-3">
            <span className="italic">Accedé</span> al acceso anticipado
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
          Dejando tu email, te avisamos cuando podés ingresar a la plataforma. Vas a poder crear tu propio portal que fideliza tus clientes, realiza búsquedas autónomas y accedés a propiedades que tu competencia no encuentra.
          </p>

          <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="nombre@gmail.com" 
                required
                className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00401a] focus:ring-2 focus:ring-[#00401a]/20 outline-none transition-all placeholder:text-gray-400 text-gray-900 text-sm md:text-base"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-3 md:py-4 rounded-xl bg-[#00401a] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#003013] transition-all shadow-lg shadow-[#00401a]/20 hover:shadow-xl hover:scale-[1.01] flex items-center justify-center gap-2 group duration-300"
            >
              ASEGURAR MI LUGAR
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-xs md:text-sm text-gray-500 text-center mt-2">
              ✓ Cero compromiso · ✓ Acceso anticipado · ✓ Te avisamos cuando esté listo
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;

