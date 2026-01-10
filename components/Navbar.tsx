import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight, Menu, X, Lightbulb, Sparkles, HelpCircle } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

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


  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <a 
            href="#" 
            onClick={handleScrollToTop}
            className="z-50 relative flex items-center gap-2 group cursor-pointer"
          >
            <img 
              src="/logo-AP.png" 
              alt="AiresProp Logo" 
              className="h-6 w-auto object-contain flex-shrink-0 transition-transform group-hover:scale-105"
            />
            <span 
              className="text-black text-2xl font-bold font-riccione transition-colors group-hover:text-[#00401a]"
              style={{ fontFamily: 'Riccione, sans-serif', fontWeight: 700, fontSize: '25px' }}
            >
              AiresProp
            </span>
          </a>

          {/* Desktop Menu - Centered absolutely relative to the container */}
          <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-gray-100">
              {/* ¿De que se trata? Link - Neutral Style initially */}
              <a 
                href="#de-que-se-trata" 
                onClick={(e) => handleScrollTo(e, 'de-que-se-trata')}
                className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-all"
              >
                  <Lightbulb size={18} className="text-gray-500 group-hover:text-black" />
                  <span className="text-base font-medium">¿De que se trata?</span>
              </a>

              {/* Beneficios Link */}
              <a 
                href="#beneficios" 
                onClick={(e) => handleScrollTo(e, 'beneficios')}
                className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-all"
              >
                  <Sparkles size={18} strokeWidth={2} className="text-gray-500 hover:text-black" />
                  <span className="text-base font-medium">Beneficios</span>
              </a>

              {/* Preguntas Link */}
              <a 
                href="#preguntas" 
                onClick={(e) => handleScrollTo(e, 'preguntas')}
                className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-all"
              >
                  <HelpCircle size={18} strokeWidth={2} className="text-gray-500 hover:text-black" />
                  <span className="text-base font-medium">Preguntas</span>
              </a>
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="hidden md:flex items-center gap-2 px-8 md:px-12 py-4 md:py-6 rounded-full bg-black text-white text-base md:text-lg font-bold uppercase tracking-widest hover:bg-[#00401a] hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(0,64,26,0.5)] transition-all duration-500 group shadow-xl"
              style={{
                height: 'fit-content',
                width: 'fit-content',
                fontSize: '14px',
                paddingTop: '8px',
                paddingBottom: '8px',
                paddingLeft: '18px',
                paddingRight: '10px'
              }}
            >
              Acceso Anticipado
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-110" style={{ width: '35px', height: '35px' }}>
                <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-black" style={{ width: '24px', height: '24px' }} />
              </div>
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

      <WaitlistModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;