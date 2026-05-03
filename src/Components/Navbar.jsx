import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(function () {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-7'
      }`} 
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-16">
        {/* Logo in Tonal Slate */}
        <Link to="/" className="text-xl font-medium text-[#334155] tracking-tighter">
          Aayusha<span className="text-[#d4849e]">.</span>
        </Link>

        {/* Links with Muted Rose Hover */}
        <div className="hidden lg:flex items-center space-x-10 text-[0.6rem] font-medium text-slate-400 tracking-[0.3em] uppercase">
          {['Home', 'About', 'Projects', 'Contact'].map(function (item, idx) {
            return (
              <React.Fragment key={item}>
                <Link to="/" className="hover:text-[#d4849e] transition-colors duration-300">
                  {item}
                </Link>
                {idx !== 3 && <span className="text-slate-200/50 text-[8px]">|</span>}
              </React.Fragment>
            );
          })}
        </div>

        {/* Themed Button - No pure black */}
        <button className="bg-[#334155] text-white px-8 py-2.5 rounded-full text-[0.6rem] font-medium tracking-[0.2em] uppercase hover:bg-[#d4849e] hover:shadow-lg hover:shadow-pink-100 transition-all duration-300 active:scale-95">
          Hire Me
        </button>
      </div>
    </nav>
  );
}

export default Navbar;