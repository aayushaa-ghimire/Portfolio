import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutMe() {
  useEffect(() => {
    // Refresh AOS to catch the correct heights
    AOS.init({ 
      duration: 1000, 
      once: false,
      mirror: true 
    });
  }, []);

  return (
    <section className="flip-container relative w-full min-h-screen overflow-hidden bg-[#fce4ec] flex items-center">
      
      {/* 01 Landmark - Added landmark-text class to prevent overflow */}
      <div className="absolute top-10 left-[-2rem] opacity-10 landmark-text select-none z-0">
        <h2 className="text-[18rem] md:text-[25rem] font-bold text-[#b4647d] leading-none">01</h2>
      </div>

      <div 
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-center"
        data-aos="page-flip"
      >
        
        {/* IMAGE ZONE: Left Side (5 Columns) */}
        <div className="col-span-12 md:col-span-5 flex justify-center" data-aos="fade-right">
          <div className="relative inline-block">
             <img 
              src="/img4-nobg.png" 
              className="h-[50vh] md:h-[75vh] w-auto object-contain" 
              alt="Aayusha" 
            />
            {/* Decorative Elements */}
            <div className="absolute bottom-1/4 -right-10 w-20 h-[1px] bg-[#334155]/20 hidden md:block" />
            <div className="absolute top-1/2 -left-10 w-6 h-6 border border-[#b4647d]/20 rotate-45 hidden md:block" />
          </div>
        </div>

        {/* CONTENT ZONE: Right Side (7 Columns) */}
        <div className="col-span-12 md:col-span-7 flex flex-col items-end text-right" data-aos="fade-left">
          <span className="text-xs tracking-[0.5em] text-[#60A5FA] uppercase font-semibold mb-4">Philosophy</span>
          <h2 className="text-6xl md:text-8xl font-medium text-[#334155] leading-[0.9] tracking-tighter mb-8">
            About <span className="text-[#b4647d]">Me</span>
          </h2>
          <p className="max-w-lg text-slate-600 text-lg leading-relaxed font-normal mb-8">
            I approach frontend architecture like an architect. By combining UI/UX design with a 
            desktop-first philosophy, I build high-end agency experiences that are raw, 
            simple, and technically robust.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-[10px] text-[#b4647d] font-bold tracking-widest uppercase">Frontend Lead</p>
              <p className="text-[12px] text-slate-400 font-medium uppercase">UI/UX Designer</p>
            </div>
            <div className="w-20 h-[1px] bg-[#334155]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;