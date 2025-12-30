import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, CircleDot, BookOpen, DollarSign } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle Scroll for Smart Navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show at the very top or if mobile menu is open
      if (currentScrollY < 10 || mobileMenuOpen) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Threshold to prevent jitter on small scrolls
      if (Math.abs(currentScrollY - lastScrollY) < 5) return;

      if (currentScrollY > lastScrollY) {
        // Scrolling down -> hide
        setIsVisible(false);
      } else {
        // Scrolling up -> show
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 pt-8 transition-all duration-500 ease-in-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold tracking-tight z-50 relative text-black">
            AiresProp
          </a>

          {/* Desktop Menu - Centered absolutely relative to the container */}
          <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-gray-100">
              {/* ¿De que se trata? Link - Neutral Style initially */}
              <a 
                href="#de-que-se-trata" 
                onClick={(e) => handleScrollTo(e, 'de-que-se-trata')}
                className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-all"
              >
                  <CircleDot size={18} className="text-gray-500 group-hover:text-black" />
                  <span className="text-base font-medium">¿De que se trata?</span>
              </a>

              {/* Beneficios Link */}
              <a 
                href="#beneficios" 
                onClick={(e) => handleScrollTo(e, 'beneficios')}
                className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-all"
              >
                  <BookOpen size={18} strokeWidth={2} className="text-gray-500 hover:text-black" />
                  <span className="text-base font-medium">Beneficios</span>
              </a>

              {/* Preguntas Link */}
              <a 
                href="#preguntas" 
                onClick={(e) => handleScrollTo(e, 'preguntas')}
                className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-all"
              >
                  <DollarSign size={18} strokeWidth={2} className="text-gray-500 hover:text-black" />
                  <span className="text-base font-medium">Preguntas</span>
              </a>
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="hidden md:flex items-center gap-2 px-8 py-3.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-[#00401a] hover:scale-105 transition-all shadow-md group"
            >
              Acceso Anticipado
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              className="md:hidden z-50 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden ${
            mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <a href="#de-que-se-trata" className="text-3xl font-serif-display italic text-gray-900" onClick={(e) => { handleScrollTo(e, 'de-que-se-trata'); setMobileMenuOpen(false); }}>¿De que se trata?</a>
          <a href="#beneficios" className="text-3xl font-serif-display italic text-gray-900" onClick={(e) => { handleScrollTo(e, 'beneficios'); setMobileMenuOpen(false); }}>Beneficios</a>
          <a href="#preguntas" className="text-3xl font-serif-display italic text-gray-900" onClick={(e) => { handleScrollTo(e, 'preguntas'); setMobileMenuOpen(false); }}>Preguntas</a>
          
          <button
              onClick={() => { setMobileMenuOpen(false); setShowModal(true); }}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-[#00401a] transition-colors mt-4 shadow-lg"
            >
              Acceso Anticipado
              <ArrowRight className="w-4 h-4" />
            </button>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-md animate-backdrop-enter"
                onClick={() => setShowModal(false)}
            />
            
            {/* Modal Content */}
            <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-3xl overflow-hidden animate-modal-enter">
                <button 
                    onClick={() => setShowModal(false)}
                    className="absolute top-6 right-6 p-2 bg-white/50 hover:bg-white rounded-full transition-colors z-20 text-gray-800 backdrop-blur-md"
                >
                    <X size={20} />
                </button>

                {/* Top Horizontal Image */}
                <div className="h-72 w-full relative">
                    <img 
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                        alt="Workspace" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Text & Form */}
                <div className="p-10 md:p-14 text-left bg-white">
                    <h3 className="text-4xl md:text-5xl font-serif-display text-gray-900 mb-4">
                        <span className="italic">Join</span> the waitlist
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg md:text-xl">
                        Be the first to experience the future of productivity. Enter your email to get early access and exclusive updates.
                    </p>

                    <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="name@company.com" 
                                required
                                className="w-full px-6 py-5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00401a] focus:ring-2 focus:ring-[#00401a]/20 outline-none transition-all placeholder:text-gray-400 text-gray-900 text-lg"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full py-5 rounded-xl bg-[#00401a] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#003013] transition-all shadow-lg shadow-[#00401a]/20 hover:shadow-xl hover:scale-[1.01] flex items-center justify-center gap-2 group duration-300"
                        >
                            Get Early Access
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Navbar;