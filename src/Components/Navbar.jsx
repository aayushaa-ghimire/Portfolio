import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

 
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(function () {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sync mobile menu
  useEffect(function() {
    if (isDesktop) setIsOpen(false);
  }, [isDesktop]);

  const pinkAccentShadow = { textShadow: '1px 1px 2px rgba(255, 255, 255, 0.4)' };

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled || isOpen ? 'bg-white/90 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-7'
        }`} 
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-16">
          
          {/* Logo */}
          <Link to="/" className="text-xl font-semibold text-[#334155] tracking-tighter z-[110]">
            Aayusha<span className="text-[#d4849e]" style={pinkAccentShadow}>.</span>
          </Link>

          {/* Desktop Links*/}
          {isDesktop && (
            <div className="flex items-center space-x-10 text-[0.65rem] font-semibold text-slate-400 tracking-[0.3em] uppercase">
              {navLinks.map(function (item, idx) {
                return (
                  <React.Fragment key={item}>
                    <Link to="/" className="hover:text-[#d4849e] transition-colors duration-300">
                      {item}
                    </Link>
                    {idx !== navLinks.length - 1 && (
                      <span className="text-slate-200/50 text-[8px] font-normal">|</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}

          <div className="flex items-center gap-8 z-[110]">
            <button className="hidden sm:block bg-[#334155] text-white px-8 py-2.5 rounded-full text-[0.6rem] font-semibold tracking-[0.2em] uppercase hover:bg-[#d4849e] hover:shadow-lg transition-all duration-300 active:scale-95">
              Hire Me
            </button>
            
            {/* Hamburger Toggle  */}
            {!isDesktop && (
              <button 
                onClick={function() { setIsOpen(!isOpen); }}
                className="w-6 h-5 flex flex-col justify-between cursor-pointer focus:outline-none"
              >
                <span className={`w-full h-[2px] bg-[#334155] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-[2px] bg-[#334155] transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-[2px] bg-[#334155] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {!isDesktop && (
        <div className={`fixed inset-0 z-[90] bg-white transition-transform duration-500 flex flex-col items-center justify-center space-y-8 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          {navLinks.map(function (item) {
            return (
              <Link 
                key={item}
                to="/" 
                onClick={function() { setIsOpen(false); }}
                className="text-2xl font-semibold text-[#334155] tracking-[0.2em] uppercase hover:text-[#d4849e] transition-colors"
              >
                {item}
              </Link>
            );
          })}
          <button className="mt-4 bg-[#334155] text-white px-10 py-4 rounded-full text-[0.7rem] font-semibold tracking-[0.2em] uppercase">
            Hire Me
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;