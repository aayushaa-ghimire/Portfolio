// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function AboutMe() {
//   useEffect(function() {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-out',
//       once: false, // false so animations repeat on scroll
//       mirror: true, // Animates elements out while scrolling past them
//       offset: 50,
//     });
//     AOS.refresh();
//   }, []);

//   const badgeVariants = {
//     animate: {
//       y: [0, -10, 0],
//       transition: {
//         duration: 5,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-[#fce4ec] font-['Poppins'] flex items-center z-10">
      
//       {/* Landmark 'Hi' */}
//       <div 
//         data-aos="fade"
//         data-aos-duration="2000"
//         data-aos-mirror="true"
//         className="absolute top-10 left-[-2rem] opacity-10 select-none z-0"
//       >
//         <h2 className="text-[15rem] md:text-[25rem] font-bold text-[#b4647d59] pl-1.5 leading-tight">Hi</h2>
//       </div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 items-center">
        
//         {/* Left Side: Image and Snug Badges */}
//         <div className="col-span-12 md:col-span-5 flex items-center justify-center relative h-[70vh]">
          
//           {/* FRONTEND DEVELOPER BADGE */}
//           <motion.div 
//             data-aos="fade-right"
//             data-aos-delay="400"
//             data-aos-mirror="true"
//             variants={badgeVariants}
//             animate="animate"
//             className="absolute top-[28%] left-4 md:left-8 z-10 bg-[#f8bbd0]/95 backdrop-blur-sm py-2 px-4 shadow-lg rounded-tr-2xl border-l-4 border-[#d81b60] flex flex-col items-start min-w-[150px]"
//           >
//             <span className="text-[8px] font-bold tracking-[0.2em] text-[#ad1457] uppercase">Architecture</span>
//             <h4 className="text-sm font-semibold text-[#ad1457] tracking-tight">Frontend Developer</h4>
//           </motion.div>

//           {/* THE PORTRAIT */}
//           <img 
//             data-aos="fade-up"
//             data-aos-duration="1200"
//             data-aos-mirror="true"
//             src="/img4-nobg.png" 
//             className="relative z-50 h-full w-auto object-contain drop-shadow-2xl" 
//             alt="Portrait" 
//           />

//           {/* WEB DESIGNER BADGE */}
//           <motion.div 
//             data-aos="fade-left"
//             data-aos-delay="600"
//             data-aos-mirror="true"
//             variants={badgeVariants}
//             animate="animate"
//             className="absolute bottom-[32%] right-4 md:right-8 z-10 bg-[#b4647d] py-2.5 px-5 shadow-xl rounded-bl-2xl flex flex-col items-end text-right min-w-[130px]"
//           >
//             <span className="text-[8px] font-bold tracking-[0.3em] text-[#fce4ec] uppercase">Visual Arts</span>
//             <h4 className="text-sm font-semibold text-white tracking-tight">Web Designer</h4>
//           </motion.div>
          
//         </div>

//         {/* Right Side: Content */}
//         <div className="col-span-12 md:col-span-7 flex flex-col items-end text-right">
//           <span 
//             data-aos="fade-left"
//             data-aos-delay="100"
//             data-aos-mirror="true"
//             className="text-xs tracking-[0.5em] text-[#b4647d] uppercase font-semibold mb-4"
//           >
//             Philosophy
//           </span>
          
//           <h2 
//             data-aos="fade-left"
//             data-aos-delay="200"
//             data-aos-mirror="true"
//             className="text-6xl md:text-8xl font-medium text-[#334155] leading-[0.9] tracking-tighter mb-8"
//           >
//             About <span className="text-[#b4647d]">Me</span>
//           </h2>
          
//           <p 
//             data-aos="fade-in"
//             data-aos-delay="400"
//             data-aos-mirror="true"
//             className="max-w-lg text-slate-600 text-lg leading-relaxed font-normal mb-10"
//           >
//             I approach frontend architecture like an architect. By combining UI/UX design with a 
//             desktop-first philosophy, I build high-end agency experiences.
//           </p>
          
//           <div 
//             data-aos="fade-up"
//             data-aos-delay="600"
//             data-aos-mirror="true"
//             className="flex items-center gap-6"
//           >
//             <div className="text-right">
//               <p className="text-[10px] text-[#b4647d] font-bold tracking-widest uppercase">Frontend Lead</p>
//               <p className="text-[12px] text-slate-400 font-medium uppercase">UI/UX Designer</p>
//             </div>
//             <div className="w-20 h-[1px] bg-[#334155]"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutMe;




import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutMe() {
  useEffect(function() {
    AOS.init({
      // Lower duration = higher speed
      duration: 700, 
      // Sharp 'out' easing: fast start, instant settle
      easing: 'cubic-bezier(0.19, 1, 0.22, 1)', 
      once: false,
      mirror: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const badgeVariants = {
    animate: {
      // Increased vertical travel for a more active float
      y: [0, -18, 0],
      // Added a subtle scale pulse to make them feel "alive"
      scale: [1, 1.03, 1],
      transition: {
        duration: 3.5, // Faster cycle
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const softShadow = { textShadow: '1px 1px 2px rgba(255, 255, 255, 0.3)' };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#fce4ec] font-['Poppins'] flex items-center z-10">
      
      {/* Landmark 'Hi' - Using zoom-out for a more aggressive scale-down effect */}
      <div 
        data-aos="zoom-out"
        data-aos-duration="2000"
        data-aos-mirror="true"
        className="absolute top-10 left-[-2rem] opacity-10 select-none z-0"
      >
        <h2 className="text-[15rem] md:text-[25rem] font-bold text-[#b4647d59] pl-1.5 leading-tight">Hi</h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 items-center">
        
        {/* Left Side: Image and Snug Badges */}
        <div className="col-span-12 md:col-span-5 flex items-center justify-center relative h-[70vh]">
          
          {/* FRONTEND DEVELOPER BADGE */}
          <motion.div 
            data-aos="fade-right"
            data-aos-delay="200" // Reduced delay for snappier appearance
            data-aos-duration="600"
            variants={badgeVariants}
            animate="animate"
            className="absolute top-[28%] left-4 md:left-8 z-10 bg-[#f8bbd0]/95 backdrop-blur-sm py-2 px-4 shadow-lg rounded-tr-2xl border-l-4 border-[#d81b60] flex flex-col items-start min-w-[150px]"
          >
            <span className="text-[8px] font-bold tracking-[0.2em] text-[#ad1457] uppercase">Architecture</span>
            <h4 className="text-sm font-semibold text-[#ad1457] tracking-tight">Frontend Developer</h4>
          </motion.div>

          {/* THE PORTRAIT - Switched to zoom-in-up for a high-velocity entrance */}
          <img 
            data-aos="zoom-in-up"
            data-aos-duration="900"
            src="/img4-nobg.png" 
            className="relative z-50 h-full w-auto object-contain drop-shadow-2xl" 
            alt="Portrait" 
          />

          {/* WEB DESIGNER BADGE */}
          <motion.div 
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="600"
            variants={badgeVariants}
            animate="animate"
            className="absolute bottom-[32%] right-4 md:right-8 z-10 bg-[#b4647d] py-2.5 px-5 shadow-xl rounded-bl-2xl flex flex-col items-end text-right min-w-[130px]"
          >
            <span className="text-[8px] font-bold tracking-[0.3em] text-[#fce4ec] uppercase">Visual Arts</span>
            <h4 className="text-sm font-semibold text-white tracking-tight">Web Designer</h4>
          </motion.div>
          
        </div>

        {/* Right Side: Content */}
        <div className="col-span-12 md:col-span-7 flex flex-col items-end text-right">
          <span 
            data-aos="fade-down"
            data-aos-delay="100"
            className="text-xs tracking-[0.5em] text-[#b4647d] uppercase font-semibold mb-4"
          >
            Philosophy
          </span>
          
          <h2 
            data-aos="fade-left"
            data-aos-delay="200"
            className="text-6xl md:text-8xl font-medium text-[#334155] leading-[0.9] tracking-tighter mb-8"
          >
            About <span className="text-[#b4647d]">Me</span>
          </h2>
          
          <p 
            data-aos="fade-left"
            data-aos-delay="300"
            className="max-w-lg text-slate-600 text-lg leading-relaxed font-normal mb-10"
          >
            I approach frontend architecture like an architect. By combining UI/UX design with a 
            desktop-first philosophy, I build high-end agency experiences.
          </p>
          
          <div 
            data-aos="zoom-in"
            data-aos-delay="500"
            className="flex items-center gap-6"
          >
            <div className="text-right">
              <p className="text-[10px] text-[#b4647d] font-bold tracking-widest uppercase">Frontend Lead</p>
              <p className="text-[12px] text-slate-400 font-medium uppercase">UI/UX Designer</p>
            </div>
            {/* Animated bar using framer motion for a smooth width expansion */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
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