import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // 3. Scroll Effect
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

  // Close mobile menu if i resize back to desktop
  useEffect(function() {
    if (isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  // Design Variables
  const pinkShadow = { textShadow: '1px 1px 2px rgba(255, 255, 255, 0.4)' };
  const links = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled || isOpen ? 'bg-white py-4 shadow-sm' : 'bg-transparent py-7'
      }`}>
        
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-16">
          
          {/* LOGO */}
          <Link 
            to="/" 
            className="text-xl font-semibold text-[#334155] tracking-tighter z-[110]"
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
                    className="text-[0.65rem] font-semibold text-slate-400 uppercase tracking-[0.3em] hover:text-[#d4849e] transition-colors"
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          )}

          {/* ACTIONS & HAMBURGER */}
          <div className="flex items-center gap-8 z-[110]">
            <button className="hidden sm:block bg-[#334155] text-white px-8 py-2.5 rounded-full text-[0.6rem] font-semibold tracking-[0.2em] uppercase hover:bg-[#d4849e] transition-all">
              Hire Me
            </button>

            {/* HAMBURGER BUTTON  */}
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
        <div className={`fixed inset-0 z-[90] bg-white transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {links.map(function(item) {
            return (
              <Link 
                key={item} 
                to="/" 
                onClick={function() { setIsOpen(false); }}
                className="text-2xl font-semibold text-[#334155] uppercase tracking-[0.2em] hover:text-[#d4849e]"
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