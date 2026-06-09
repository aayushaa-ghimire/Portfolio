
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(function () {
    function handleScroll() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(function() {
    if (isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  const links = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled || isOpen 
          ? 'bg-white/60 backdrop-blur-2xl py-4 shadow-sm border-b border-white/10' 
          : 'bg-transparent py-7'
      }`}>
        
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-16">
          
          {/* LOGO - Greyish color remains */}
          <Link 
            to="/" 
            className="text-xl flex font-semibold text-[#334155] tracking-tighter z-[110]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
Aayusha
          </Link>

          {/* DESKTOP LINKS */}
          {isDesktop && (
            <div className="flex items-center gap-10">
              {links.map(function(item) {
                return (
                  <Link 
                    key={item} 
                    to="/" 
                    className="text-[0.65rem] font-normal text-slate-400 uppercase tracking-[0.3em] hover:text-[#b4647d] transition-colors"
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          )}

          {/* ACTIONS */}
          <div className="flex items-center gap-8 z-[110]">
            <button className={`hidden sm:block px-8 py-2.5 rounded-full text-[0.6rem] font-semibold tracking-[0.2em] uppercase transition-all ${
              scrolled || isOpen 
                ? 'bg-[#b4647d] text-white' 
                : 'bg-[#334155] text-white hover:bg-[#b4647d]' 
            }`}>
              Hire Me
            </button>

            {!isDesktop && (
              <button 
                onClick={function() { setIsOpen(!isOpen); }}
                className="flex flex-col gap-1.5 focus:outline-none"
              >
                <div className={`w-6 h-[2px] bg-[#334155] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-6 h-[2px] bg-[#334155] transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-[2px] bg-[#334155] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE MENU PANEL */}
      {!isDesktop && (
        <div className={`fixed inset-0 z-[90] bg-white/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {links.map(function(item) {
            return (
              <Link 
                key={item} 
                to="/" 
                onClick={function() { setIsOpen(false); }}
                className="text-2xl font-semibold text-[#334155] uppercase tracking-[0.2em] hover:text-[#b4647d]"
              >
                {item}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Navbar;