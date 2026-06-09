
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Track the active section's ID
  const [activeSection, setActiveSection] = useState('hero');

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // 1. Solid background on scroll effect
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

  // 2. Intersection Observer to track visible section on screen
  useEffect(function () {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
    
    const observerOptions = {
      root: null, // use the viewport
      rootMargin: '-30% 0px -60% 0px', // triggers when section occupies the sweet spot of the screen
      threshold: 0
    };

    const observerCallback = function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach(function (id) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return function () {
      sectionIds.forEach(function (id) {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  useEffect(function() {
    if (isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  const navLinks = [
    { label: 'Home', targetId: 'hero' },
    { label: 'About', targetId: 'about' },
    { label: 'Skills', targetId: 'skills' },
    { label: 'Projects', targetId: 'projects' },
    { label: 'Experience', targetId: 'experience' }
  ];

  const handleScrollToSection = (targetId) => {
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled || isOpen 
          ? 'bg-white/60 backdrop-blur-2xl py-4 shadow-sm border-b border-white/10' 
          : 'bg-transparent py-7'
      }`}>
        
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-16">
          
          <Link 
            to="/" 
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('hero');
            }}
            className="text-xl flex font-semibold text-[#334155] tracking-tighter z-[110]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Aayusha
          </Link>

          {/* DESKTOP LINKS */}
          {isDesktop && (
            <div className="flex items-center gap-10">
              {navLinks.map(function(item) {
                const isActive = activeSection === item.targetId;
                return (
                  <button 
                    key={item.label} 
                    onClick={() => handleScrollToSection(item.targetId)}
                    className={`text-[0.65rem] uppercase tracking-[0.3em] transition-all duration-300 cursor-pointer bg-transparent border-none outline-none font-['Poppins'] ${
                      isActive 
                        ? 'text-[#b4647d] font-bold scale-105' 
                        : 'text-slate-400 font-normal hover:text-[#b4647d]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* ACTIONS */}
          <div className="flex items-center gap-8 z-[110]">
            <button 
              onClick={() => handleScrollToSection('contact')}
              className={`hidden sm:block px-8 py-2.5 rounded-full text-[0.6rem] tracking-[0.2em] uppercase transition-all cursor-pointer font-['Poppins'] ${
                activeSection === 'contact'
                  ? 'bg-[#b4647d] text-white font-bold shadow-md'
                  : scrolled || isOpen
                    ? 'bg-[#b4647d] text-white font-normal'
                    : 'bg-[#334155] text-white font-normal hover:bg-[#b4647d]'
              }`}
            >
              Contact
            </button>

            {!isDesktop && (
              <button 
                onClick={function() { setIsOpen(!isOpen); }}
                className="flex flex-col gap-1.5 focus:outline-none cursor-pointer"
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
          {navLinks.map(function(item) {
            const isActive = activeSection === item.targetId;
            return (
              <button 
                key={item.label} 
                onClick={() => handleScrollToSection(item.targetId)}
                className={`text-2xl uppercase tracking-[0.2em] bg-transparent border-none outline-none cursor-pointer font-['Poppins'] ${
                  isActive ? 'text-[#b4647d] font-bold' : 'text-[#334155] font-normal'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <button 
            onClick={() => handleScrollToSection('contact')}
            className={`text-2xl uppercase tracking-[0.2em] bg-transparent border-none outline-none cursor-pointer font-['Poppins'] ${
              activeSection === 'contact' ? 'text-[#b4647d] font-bold' : 'text-[#b4647d] font-normal'
            }`}
          >
            Contact
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;