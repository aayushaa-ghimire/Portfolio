import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutMe() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

 
  const xLeft = useTransform(scrollYProgress, [0.5, 1], [0, -300]);
  const xRight = useTransform(scrollYProgress, [0.5, 1], [0, 300]);
  const yDown = useTransform(scrollYProgress, [0.5, 1], [0, 200]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      once: false,
      mirror: true,
      offset: 50, 
    });
  }, []);

  const badgeVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen overflow-hidden bg-[#fce4ec] font-['Poppins'] flex items-center z-10"
    >
      <motion.div 
        style={{ x: xLeft }}
        className="absolute top-10 left-[-2rem] opacity-10 select-none z-0"
      >
        <h2 className="text-[15rem] md:text-[25rem] font-bold text-[#b4647d59]">Hi</h2>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 items-center">
        
        <motion.div 
          className="col-span-12 md:col-span-5 flex items-center justify-center relative h-[70vh]"
          style={{ x: xLeft }}
        >
          <div data-aos="fade-right" data-aos-delay="200" className="absolute top-[25%] left-0 z-[60]">
            <motion.div 
              variants={badgeVariants}
              animate="animate"
              className="bg-[#f8bbd0]/95 backdrop-blur-sm py-2 px-4 shadow-lg rounded-tr-2xl border-l-4 border-[#d81b60]"
            >
              <span className="text-[8px] font-bold tracking-widest text-[#ad1457] uppercase">Architecture</span>
              <h4 className="text-sm font-semibold text-[#ad1457]">Frontend Developer</h4>
            </motion.div>
          </div>

          <motion.img 
            data-aos="fade-up"
            data-aos-duration="1200"
            style={{ y: yDown }}
            src="/img4-nobg.png" 
            className="relative z-50 h-full w-auto object-contain drop-shadow-2xl" 
            alt="Portrait" 
          />

          <div data-aos="fade-left" data-aos-delay="400" className="absolute bottom-[30%] right-0 z-[60]">
            <motion.div 
              variants={badgeVariants}
              animate="animate"
              className="bg-[#b4647d] py-2.5 px-5 shadow-xl rounded-bl-2xl text-right"
            >
              <span className="text-[8px] font-bold tracking-widest text-[#fce4ec] uppercase">Visual Arts</span>
              <h4 className="text-sm font-semibold text-white">Web Designer</h4>
            </motion.div>
          </div>
        </motion.div>

        <div className="col-span-12 md:col-span-7 flex flex-col items-end text-right">
          <motion.div style={{ x: xRight }} className="flex flex-col items-end">
            <span data-aos="fade-down" className="text-xs tracking-[0.5em] text-[#b4647d] uppercase font-semibold mb-4">
              Philosophy
            </span>
            <h2 data-aos="fade-left" data-aos-delay="200" className="text-6xl md:text-8xl font-medium text-[#334155] leading-[0.9] tracking-tighter mb-8">
              About <span className="text-[#b4647d]">Me</span>
            </h2>
            <p data-aos="fade-left" data-aos-delay="300" className="max-w-lg text-slate-600 text-lg leading-relaxed mb-10">
              I approach frontend architecture like an architect. By combining UI/UX design with a 
              desktop-first philosophy, I build high-end agency experiences.
            </p>
          </motion.div>
          
          <div 
            data-aos="fade-up" 
            data-aos-offset="0" 
            data-aos-delay="500" 
            className="flex items-center gap-6"
          >
            <div className="text-right">
              <p className="text-[10px] text-[#b4647d] font-bold uppercase">Frontend Lead</p>
              <p className="text-[12px] text-slate-400 font-medium uppercase">UI/UX Designer</p>
            </div>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="h-[1px] bg-[#334155]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;