

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function AboutMe() {
//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-[#fce4ec] font-['Poppins'] flex items-center z-10">
      
//       {/* 01 Landmark */}
//       <div className="absolute top-10 left-[-2rem] opacity-10 landmark-text select-none z-0">
//         <h2 className="text-[18rem] md:text-[25rem] font-bold text-[#b4647d] leading-none">01</h2>
//       </div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 items-center">
        
//         {/* Left Side: Image */}
//         <div className="col-span-12 md:col-span-5 flex justify-center" data-aos="fade-right">
//           <div className="relative">
//              <img 
//               src="/img4-nobg.png" 
//               className="h-[50vh] md:h-[70vh] w-auto object-contain" 
//               alt="Aayusha" 
//             />
//             {/* Your original decorative lines */}
//             <div className="absolute bottom-1/4 -right-10 w-20 h-[1px] bg-[#334155]/20 hidden md:block" />
//             <div className="absolute top-1/2 -left-10 w-6 h-6 border border-[#b4647d]/20 rotate-45 hidden md:block" />
//           </div>
//         </div>

//         {/* Right Side: Content */}
//         <div className="col-span-12 md:col-span-7 flex flex-col items-end text-right" data-aos="fade-left">
//           <span className="text-xs tracking-[0.5em] text-[#60A5FA] uppercase font-semibold mb-4">Philosophy</span>
//           <h2 className="text-6xl md:text-8xl font-medium text-[#334155] leading-[0.9] tracking-tighter mb-8">
//             About <span className="text-[#b4647d]">Me</span>
//           </h2>
//           <p className="max-w-lg text-slate-600 text-lg leading-relaxed font-normal mb-8">
//             I approach frontend architecture like an architect. By combining UI/UX design with a 
//             desktop-first philosophy, I build high-end agency experiences.
//           </p>
//           <div className="flex items-center gap-6">
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


// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function AboutMe() {
//   useEffect(function() {
//     AOS.init({ duration: 800 });
//   }, []);

//   // Slimmer, more subtle floating animation
//   const badgeVariants = {
//     animate: {
//       y: [0, -8, 0],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-[#fce4ec] font-['Poppins'] flex items-center z-10">
      
//       {/* Background Landmark '01' */}
//       <div className="absolute top-10 left-[-2rem] opacity-10 landmark-text select-none z-0">
//         <h2 className="text-[18rem] md:text-[25rem] font-bold text-[#b4647d] leading-none">01</h2>
//       </div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 items-center">
        
//         {/* Left Side: Image and Slim Badges */}
//         <div className="col-span-12 md:col-span-5 flex items-center justify-center relative h-[75vh]" data-aos="fade-right">
          
//           {/* SLIM FRONTEND DEVELOPER BADGE */}
//           <motion.div 
//             variants={badgeVariants}
//             animate="animate"
//             className="absolute top-[22%] left-[-1rem] md:left-[-2rem] z-30 bg-white/40 backdrop-blur-md border-l-2 border-[#b4647d] py-3 px-5 shadow-sm flex flex-col items-start"
//           >
//             <span className="text-[9px] font-bold tracking-[0.3em] text-[#b4647d] uppercase mb-1">Specialization</span>
//             <h4 className="text-lg font-medium text-[#334155] leading-none tracking-tight">Frontend Developer</h4>
//           </motion.div>

//           {/* THE IMAGE */}
//           <img 
//             src="/img4-nobg.png" 
//             className="relative z-10 h-full w-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.08)]" 
//             alt="Aayusha" 
//           />

//           {/* SLIM WEB DESIGNER BADGE */}
//           <motion.div 
//             variants={badgeVariants}
//             animate="animate"
//             transition={{ delay: 1 }}
//             className="absolute bottom-[28%] right-[-1rem] md:right-[-2rem] z-30 bg-[#334155] py-4 px-6 shadow-xl flex flex-col items-end text-right"
//           >
//             <span className="text-[9px] font-bold tracking-[0.4em] text-[#D685A9] uppercase mb-1">Visual Arts</span>
//             <h4 className="text-lg font-medium text-white leading-none tracking-tight">Web Designer</h4>
//           </motion.div>
          
//         </div>

//         {/* Right Side: Philosophy Content */}
//         <div className="col-span-12 md:col-span-7 flex flex-col items-end text-right md:pl-16" data-aos="fade-left">
//           <span className="text-xs tracking-[0.5em] text-[#b4647d] uppercase font-semibold mb-4">Philosophy</span>
//           <h2 className="text-6xl md:text-8xl font-medium text-[#334155] leading-[0.9] tracking-tighter mb-8">
//             About <span className="text-[#b4647d]">Me</span>
//           </h2>
//           <p className="max-w-lg text-slate-600 text-lg leading-relaxed font-normal mb-10">
//             I approach frontend architecture like an architect. By combining UI/UX design with a 
//             desktop-first philosophy, I build high-end agency experiences.
//           </p>
//           <div className="flex items-center gap-6">
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
    AOS.init({ duration: 800 });
  }, []);

  const badgeVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#fce4ec] font-['Poppins'] flex items-center z-10">
      
      {/* Landmark '01' */}
      <div className="absolute top-10 left-[-2rem] opacity-10 select-none z-0">
        <h2 className="text-[18rem] md:text-[25rem] font-bold text-[#b4647d] leading-none">01</h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 items-center">
        
        {/* Left Side: Image and Snug Badges */}
        <div className="col-span-12 md:col-span-5 flex items-center justify-center relative h-[70vh]" data-aos="fade-right">
          
          {/* FRONTEND DEVELOPER BADGE - Smaller & Tucked */}
          <motion.div 
            variants={badgeVariants}
            animate="animate"
            className="absolute top-[28%] left-4 md:left-8 z-10 bg-[#f8bbd0]/95 backdrop-blur-sm py-2 px-4 shadow-lg rounded-tr-2xl border-l-4 border-[#d81b60] flex flex-col items-start min-w-[150px]"
          >
            <span className="text-[8px] font-bold tracking-[0.2em] text-[#ad1457] uppercase">Architecture</span>
            <h4 className="text-sm font-semibold text-[#ad1457] tracking-tight">Frontend Developer</h4>
          </motion.div>

          {/* THE PORTRAIT - Highest Priority */}
          <img 
            src="/img4-nobg.png" 
            className="relative z-50 h-full w-auto object-contain drop-shadow-2xl" 
            alt="Portrait" 
          />

          {/* WEB DESIGNER BADGE - Smaller & Tucked */}
          <motion.div 
            variants={badgeVariants}
            animate="animate"
            transition={{ delay: 1.2 }}
            className="absolute bottom-[32%] right-4 md:right-8 z-10 bg-[#b4647d] py-2.5 px-5 shadow-xl rounded-bl-2xl flex flex-col items-end text-right min-w-[130px]"
          >
            <span className="text-[8px] font-bold tracking-[0.3em] text-[#fce4ec] uppercase">Visual Arts</span>
            <h4 className="text-sm font-semibold text-white tracking-tight">Web Designer</h4>
          </motion.div>
          
        </div>

        {/* Right Side: Content */}
        <div className="col-span-12 md:col-span-7 flex flex-col items-end text-right" data-aos="fade-left">
          <span className="text-xs tracking-[0.5em] text-[#b4647d] uppercase font-semibold mb-4">Philosophy</span>
          <h2 className="text-6xl md:text-8xl font-medium text-[#334155] leading-[0.9] tracking-tighter mb-8">
            About <span className="text-[#b4647d]">Me</span>
          </h2>
          <p className="max-w-lg text-slate-600 text-lg leading-relaxed font-normal mb-10">
            I approach frontend architecture like an architect. By combining UI/UX design with a 
            desktop-first philosophy, I build high-end agency experiences.
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