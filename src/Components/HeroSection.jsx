import React from 'react';

function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{
        // High-intensity pink circular gradient
        background: 'radial-gradient(circle at 50% 50%, #FFFFFF 0%, #FFF5F8 20%, #FDE2ED 45%, #F8BBCD 75%, #F48FB1 100%)',
        fontFamily: "'Poppins', sans-serif",
      }}>
      
      {/* Intense Muted Rose Ambient Glows */}
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-35 pointer-events-none bg-[#D4849E]" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[45vw] h-[45vw] rounded-full blur-[150px] opacity-30 pointer-events-none bg-[#D4849E]" />

      <div className="relative w-full max-w-[1440px] h-full mx-auto px-16 grid grid-cols-12 items-center">
        
        {/* LEFT: Name Block (Flush Left-Aligned) */}
        <div className="col-span-5 z-30" data-aos="fade-right" data-aos-duration="1200">
          <span className="block text-[0.7rem] tracking-[0.8em] text-[#D4849E] uppercase font-medium mb-6">
            Developer
          </span>
          <h1 className="text-[5.5rem] font-normal leading-[0.85] tracking-tighter text-[#334155]">
            Aayusha<br />
            <span className="text-[#D4849E] block mt-2 italic font-light">Ghimire</span>
          </h1>
          
          <div className="mt-14 flex items-center gap-6" data-aos="fade-up" data-aos-delay="400">
             <div className="w-12 h-[1px] bg-[#334155]/40"></div>
             <p className="text-[0.65rem] text-slate-500 font-normal tracking-[0.4em] uppercase">
                Frontend Architecture
             </p>
          </div>
        </div>

        {/* CENTER: Image (Centrally Aligned, Raw) */}
        <div className="absolute inset-0 flex justify-center items-end z-20 pointer-events-none" 
             data-aos="zoom-in" data-aos-duration="1800">
          <img
            src="/img4-nobg.png"
            alt="Aayusha"
            className="h-[84vh] w-auto object-contain object-bottom select-none"
            style={{ 
              filter: 'none' // Zero filters to maintain original skin tone
            }}
          />
        </div>

        {/* RIGHT: Developer Role Block */}
        <div className="col-span-4 col-start-9 flex flex-col items-end z-30 text-right" data-aos="fade-left" data-aos-duration="1200">
          <div className="max-w-[300px]">
            <h2 className="text-[3.8rem] font-light leading-[1] text-[#334155] tracking-tight mb-6">
                Frontend<br />
                <span className="text-[1.6rem] font-medium uppercase tracking-[0.3em] text-[#D4849E]">Developer</span>
            </h2>
            <p className="text-[0.75rem] leading-relaxed text-slate-600 font-normal mb-10">
                Building desktop-first digital systems with a focus on clean, raw architecture.
            </p>
            
            <button className="bg-[#334155] text-white px-10 py-4 rounded-full text-[0.6rem] font-medium tracking-[0.3em] uppercase transition-all hover:bg-[#D4849E] hover:shadow-xl active:scale-95">
                Explore Work →
            </button>
          </div>

          <div className="mt-20 opacity-40 text-[0.55rem] uppercase tracking-[0.8em] text-[#334155]">
             Portfolio 2026
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;