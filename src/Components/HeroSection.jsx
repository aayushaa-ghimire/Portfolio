import React, { useEffect, useState } from 'react';

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const leftMove = !isMobile ? { transform: `translateX(-${scrollY * 0.8}px)`, opacity: 1 - scrollY / 600 } : {};
  const rightMove = !isMobile ? { transform: `translateX(${scrollY * 0.8}px)`, opacity: 1 - scrollY / 600 } : {};
  const imgMove = !isMobile ? { transform: `translateY(${scrollY * 0.4}px)`, opacity: 1 - scrollY / 800 } : {};

  const softShadow = { textShadow: '1px 1px 2px rgba(255, 255, 255, 0.3)' };

  return (
    <section className="hero-viewport relative overflow-hidden bg-white font-['Poppins'] pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #fce4ec 35%, #f8bbd0 70%, #D4849E 100%)' }}
      />

      <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 md:items-center md:justify-center md:min-h-[calc(100vh-80px)] w-full max-w-7xl mx-auto px-6 py-10 items-center">
        
        {/* Name Section */}
        <div style={leftMove} className="order-1 text-center md:text-left w-full transition-transform duration-75 ease-out">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <p data-aos="fade-right" className="text-[10px] tracking-[0.6em] text-[#b4647d] uppercase font-semibold">
              Developer
            </p>
            <h1 data-aos="fade-right" className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-normal text-[#334155] leading-[0.85] tracking-tight">
              Aayusha<br />
              <span className="text-[#b4647d]" style={softShadow}>Ghimire</span>
            </h1>
          </div>
        </div>

        {/* Image Section */}
        <div style={imgMove} className="order-2 my-10 flex justify-center w-full md:block md:my-0 md:absolute md:inset-0 md:flex md:items-center md:justify-center md:pointer-events-none z-20 transition-transform duration-75 ease-out">
          <img
            src="/img4-nobg.png"
            alt="Aayusha"
            className="h-[30vh] sm:h-[40vh] md:h-[65vh] lg:h-[85vh] w-auto object-contain"
            data-aos="fade-up" 
            data-aos-duration="1200" 
          />
        </div>

        {/* Description Section */}
        <div style={rightMove} className="order-3 text-center md:text-right w-full flex flex-col items-center md:items-end transition-transform duration-75 ease-out">
          <div className="max-w-[340px]">
            <h2 data-aos="fade-left" className="font-['Playfair_Display'] text-4xl font-normal text-[#334155] leading-tight mb-4">
              Frontend<br />
              <span className="font-['Poppins'] not-italic text-[10px] font-semibold text-[#b4647d] tracking-[0.4em] uppercase">Developer</span>
            </h2>
            <p data-aos="fade-left" className="hidden md:block text-sm text-slate-500 font-light leading-relaxed mb-6">
              Building desktop-first digital systems with a focus on clean architecture and premium aesthetics.
            </p>
            <div data-aos="fade-left">
              <button 
                onClick={handleScrollToContact}
                className="bg-[#334155] text-white px-8 py-2.5 rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase cursor-pointer hover:bg-[#b4647d] transition-colors"
              >
                Work →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
