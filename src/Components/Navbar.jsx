import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Menu, X } from 'lucide-react';

const DesktopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-lg shadow-sm py-4 border-b border-white/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-slate-900">
          Portfolio<span className="text-blue-600">.</span>
        </Link>
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
            Home
          </Link>
          <Link to="/about" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
            About
          </Link>
          <Link to="/projects" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
            Projects
          </Link>
          <Link to="/contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
            Contact
          </Link>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-100">
      <div className="px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-slate-900">
          Portfolio<span className="text-blue-600">.</span>
        </Link>
        <button
          onClick={toggleMenu}
          className="text-slate-900 p-2 focus:outline-none hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-5">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-slate-600 hover:text-blue-600 font-medium transition-colors text-lg"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block text-slate-600 hover:text-blue-600 font-medium transition-colors text-lg"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="block text-slate-600 hover:text-blue-600 font-medium transition-colors text-lg"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-slate-600 hover:text-blue-600 font-medium transition-colors text-lg"
          >
            Contact
          </Link>
          <div className="pt-4 border-t border-slate-100">
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium transition-colors w-full text-center shadow-md">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Navbar = () => {
  // Desktop navbar → screen width 768px and above
  // Mobile navbar → below 768px
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
};

export default Navbar;
