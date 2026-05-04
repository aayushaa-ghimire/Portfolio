import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutMe() {
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
      
      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 h-full items-center gap-8">
        
        {/* Left Side: The Image (Receives the animation) */}
        <div className="flex justify-center md:justify-start items-center h-full pt-20 md:pt-0">
          <motion.img
            layoutId="profile-image" // MAGIC: Must match HeroSection exactly
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            src="/img4-nobg.png"
            alt="Aayusha"
            className="h-[40vh] md:h-[65vh] w-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Right Side: About Text */}
        <div 
          className="flex flex-col items-center md:items-end text-center md:text-right space-y-4 md:space-y-6"
          data-aos="fade-left"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-[#334155] leading-tight">
            About <span className="text-[#b4647d]" style={softShadow}>Me</span>
          </h2>
          
          <div className="flex items-center gap-4 justify-end">
            <p className="text-[10px] md:text-xs text-slate-500 font-medium tracking-[0.3em] uppercase">
              UI/UX Designer & Lead
            </p>
            <div className="hidden md:block w-12 h-[1px] bg-[#334155]/20"></div>
          </div>

          <p className="max-w-md text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
            I approach frontend architecture with a "desktop-first" philosophy, focusing on 
            clean, high-end agency aesthetics. My goal is to build systems that are raw, 
            simple, and technically robust.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;