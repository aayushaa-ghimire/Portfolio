import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroSection() {
  useEffect(() => {
    
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quart',
    });
  }, []);

  const softShadow = { textShadow: '1px 1px 2px rgba(255, 255, 255, 0.3)' };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#fce4ec] flex items-center justify-center font-['Poppins']">
      
      {/* BACKGROUND GRADIENT */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #fff9fb 15%, #fce4ec 35%, #f8bbd0 70%, #D4849E 100%)'
        }}
      />

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 h-full items-center">
        
        {/* Left Side: Name and Title */}
        <div 
          className="flex flex-col items-start space-y-3 md:space-y-6"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <p className="text-[9px] md:text-xs tracking-[0.6em] text-[#b4647d] uppercase font-semibold" style={softShadow}>
            Developer
          </p>
          
          <h1 className="text-[1.6rem] sm:text-5xl md:text-6xl lg:text-8xl font-medium text-[#334155] leading-[0.85] tracking-tighter">
            Aayusha<br />
            <span className="text-[#b4647d]" style={softShadow}>Ghimire</span>
          </h1>

          <div className="flex items-center gap-4 pt-2">
            <div className="w-6 md:w-12 h-[1px] bg-[#334155]/20"></div>
            <p className="text-[8px] md:text-xs text-slate-500 font-medium tracking-widest uppercase">
              Frontend Architecture
            </p>
          </div>
        </div>

        {/* Right Side: Description Box */}
        <div 
          className="flex flex-col items-end text-right space-y-4 self-center mt-16 sm:mt-32"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="max-w-[100px] sm:max-w-[220px] md:max-w-[300px] lg:max-w-[340px]">
            <h2 className="text-base sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#334155] leading-tight mb-2">
              Frontend<br />
              <span className="text-[9px] sm:text-sm md:text-lg font-semibold text-[#b4647d] tracking-widest uppercase" style={softShadow}>
                Developer
              </span>
            </h2>
            
            <p className="text-[8px] sm:text-xs md:text-sm text-slate-500 font-medium leading-relaxed mb-4">
              Building desktop-first digital systems with a focus on clean architecture.
            </p>

            <button className="relative z-30 bg-[#334155] text-white px-4 py-1.5 rounded-full text-[8px] md:text-xs font-semibold tracking-widest uppercase hover:bg-[#D4849E] transition-all active:scale-95">
              Work →
            </button>
          </div>
        </div>
      </div>

      {/* IMAGE LAYER: Positioned to fix the "sinking" and "centering" issues */}
      <div 
        className="absolute inset-0 flex justify-center items-end z-20 pointer-events-none"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <img
          src="/img4-nobg.png"
          alt="Aayusha"
          className="
            /* Default Heights */
            h-[45vh] sm:h-[65vh] md:h-[70vh] lg:h-[85vh] 
            w-auto object-contain select-none transition-transform duration-700
            
            /* The Vertical Fix (Lifting the image up) */
            -translate-y-[15vh] sm:translate-y-0
            
            /* Center Alignment Fix for ultra-small screens */
            mx-auto
          "
        />
      </div>

    </section>
  );
}

export default HeroSection;