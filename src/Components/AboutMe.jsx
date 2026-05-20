import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#FFF5F8] py-16 px-6 flex items-center overflow-hidden">
      
      <div className="absolute top-10 left-[-5%] opacity-5 select-none z-0 pointer-events-none">
        <h2 className="text-[10rem] md:text-[20rem] font-bold text-[#b4647d] italic leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>Hi</h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div
          data-aos="fade-up"
          data-aos-offset="5"
          data-aos-delay="40"
          data-aos-duration="1000"
          className="col-span-12 lg:col-span-5 flex items-center justify-center relative"
        >
          {/*  Badge 1 */}
          <div className="absolute top-[5%] sm:top-[10%] left-2 sm:left-0 z-[60] scale-[0.6] sm:scale-90 md:scale-100 animate-[float_4s_ease-in-out_infinite]">
            <div className="bg-[#f8bbd0]/95 backdrop-blur-sm py-2 px-4 shadow-lg rounded-tr-2xl border-l-4 border-[#d81b60]">
              <span className="text-[7px] font-bold tracking-widest text-[#ad1457] uppercase">Architecture</span>
              <h4 className="text-[11px] sm:text-sm font-semibold text-[#ad1457]">Frontend Developer</h4>
            </div>
          </div>

          <img src="/img3-nobg.png" className="h-[40vh] sm:h-[50vh] lg:h-auto lg:max-h-[70vh] w-auto object-contain drop-shadow-2xl" alt="Portrait" />

          {/*  Badge 2 */}
          <div className="absolute bottom-[5%] sm:bottom-[10%] right-2 sm:right-0 z-[60] scale-[0.6] sm:scale-90 md:scale-100 animate-[float_4s_ease-in-out_infinite_reverse]">
            <div className="bg-[#b4647d] py-2.5 px-5 shadow-xl rounded-bl-2xl text-right">
              <span className="text-[7px] font-medium tracking-widest text-[#fce4ec] uppercase">Visual Arts</span>
              <h4 className="text-[11px] sm:text-sm font-medium text-white">Web Designer</h4>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-offset="80"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="col-span-12 lg:col-span-7 text-center lg:text-right flex flex-col items-center lg:items-end"
        >
          <div className="flex flex-col items-center lg:items-end">
            <span className="text-[10px] tracking-[0.5em] text-[#b4647d] uppercase font-semibold mb-3">Philosophy</span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#334155] leading-[0.9] tracking-tighter mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              About <span className="text-[#b4647d]">Me</span>
            </h2>
            
            <p className="max-w-md md:max-w-lg text-[#334155]/80 text-sm md:text-md leading-[1.8] font-medium tracking-wide mb-8">
              I approach frontend architecture like an architect. By combining UI/UX design with a 
              desktop-first philosophy, I build high-end agency experiences.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-[9px] text-[#b4647d] font-bold uppercase">Frontend Lead</p>
              <p className="text-[10px] text-slate-400 font-medium uppercase">UI/UX Designer</p>
            </div>
            <div className="h-[1px] w-16 bg-[#334155] hidden sm:block" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
}

export default AboutMe;