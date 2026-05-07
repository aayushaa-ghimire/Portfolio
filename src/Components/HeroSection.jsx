// // import React, { useEffect } from 'react';
// // import { motion, useScroll, useTransform } from 'framer-motion';
// // import AOS from 'aos';
// // import 'aos/dist/aos.css';

// // function HeroSection() {
// //   useEffect(() => {
// //     AOS.init({
// //       duration: 800,
// //       once: true,
// //       easing: 'ease-out-quart',
// //     });
// //   }, []);

// //   const { scrollYProgress } = useScroll();

// //   // [0, 0.5, 1] means: Start of page, Middle of scroll, End of page.
// //   // By repeating the second and third values, the image "locks" at 0.5.
// //   const x = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '-42%', '-42%']);
// //   const y = useTransform(scrollYProgress, [0, 0.5, 1], ['0vh', '100vh', '100vh']);
// //   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.65, 0.65]);

// //   const softShadow = { textShadow: '1px 1px 2px rgba(255, 255, 255, 0.3)' };

// //   return (
// //     <section className="relative w-full h-screen overflow-hidden bg-[#fce4ec] flex items-center justify-center font-['Poppins']">
// //       <div 
// //         className="absolute inset-0 z-0"
// //         style={{
// //           background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #fce4ec 35%, #f8bbd0 70%, #D4849E 100%)'
// //         }}
// //       />

// //       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 h-full items-center">
// //         {/* Left Content */}
// //         <div className="flex flex-col items-start space-y-6" data-aos="fade-right">
// //           <p className="text-xs tracking-[0.6em] text-[#b4647d] uppercase font-semibold">Developer</p>
// //           <h1 className="text-6xl md:text-8xl font-medium text-[#334155] leading-[0.85] tracking-tighter">
// //             Aayusha<br /><span className="text-[#b4647d]" style={softShadow}>Ghimire</span>
// //           </h1>
// //           <div className="flex items-center gap-4 pt-2">
// //             <div className="w-12 h-[1px] bg-[#334155]/20"></div>
// //             <p className="text-xs text-slate-500 font-medium tracking-widest uppercase">Frontend Architecture</p>
// //           </div>
// //         </div>

// //         {/* Right Content */}
// //         <div className="flex flex-col items-end text-right mt-32" data-aos="fade-left">
// //           <div className="max-w-[340px]">
// //             <h2 className="text-4xl md:text-5xl font-medium text-[#334155] leading-tight mb-2">
// //               Frontend<br /><span className="text-sm font-semibold text-[#b4647d] tracking-widest uppercase">Developer</span>
// //             </h2>
// //             <p className="text-sm text-slate-500 font-normal leading-relaxed mb-6">
// //               Building desktop-first digital systems with a focus on clean architecture.
// //             </p>
// //             <button className="bg-[#334155] text-white px-8 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-[#D4849E] transition-all active:scale-95">
// //               Work →
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* THE IMAGE: Use z-[99] to ensure it stays on top of the next section */}
// //       <motion.div 
// //         style={{ x, y, scale }} 
// //         className="fixed inset-0 flex justify-center items-end z-[99] pointer-events-none"
// //       >
// //         <motion.img
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 1, delay: 0.5 }}
// //           src="/img4-nobg.png"
// //           alt="Aayusha"
// //           className="h-[45vh] md:h-[85vh] w-auto object-contain"
// //         />
// //       </motion.div>
// //     </section>
// //   );
// // }

// // export default HeroSection;


// import React, { useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function HeroSection() {
//   useEffect(function() {
//     // Smoother global settings
//     AOS.init({
//       duration: 1000,      // Slightly longer for a premium feel
//       easing: 'ease-out',  // Clean, organic deceleration
//       once: true,          // Animations happen once and stop (essential for performance)
//       offset: 50,          // Triggers slightly before element is in full view
//     });
//     AOS.refresh();
//   }, []);

//   const { scrollYProgress } = useScroll();

//   const x = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '-42%', '-42%']);
//   const y = useTransform(scrollYProgress, [0, 0.5, 1], ['0vh', '100vh', '100vh']);
//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.65, 0.65]);

//   const softShadow = { textShadow: '1px 1px 2px rgba(255, 255, 255, 0.3)' };

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-[#fce4ec] flex items-center justify-center font-['Poppins']">
//       <div 
//         className="absolute inset-0 z-0"
//         style={{
//           background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #fce4ec 35%, #f8bbd0 70%, #D4849E 100%)'
//         }}
//       />

//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 h-full items-center">
        
//         <div className="flex flex-col items-start space-y-6">
//           <p 
//             data-aos="fade-right"
//             data-aos-delay="100"
//             className="text-xs tracking-[0.6em] text-[#b4647d] uppercase font-semibold"
//           >
//             Developer
//           </p>
          
//           <h1 
//             data-aos="fade-up"
//             data-aos-delay="200"
//             className="text-6xl md:text-8xl font-medium text-[#334155] leading-[0.85] tracking-tighter"
//           >
//             Aayusha<br /><span className="text-[#b4647d]" style={softShadow}>Ghimire</span>
//           </h1>

//           <div 
//             data-aos="fade-up"
//             data-aos-delay="300"
//             className="flex items-center gap-4 pt-2"
//           >
//             <div className="w-12 h-[1px] bg-[#334155]/20"></div>
//             <p className="text-xs text-slate-500 font-medium tracking-widest uppercase">Frontend Architecture</p>
//           </div>
//         </div>

//         <div className="flex flex-col items-end text-right mt-32">
//           <div className="max-w-[340px]">
//             <h2 
//               data-aos="fade-left"
//               data-aos-delay="400"
//               className="text-4xl md:text-5xl font-medium text-[#334155] leading-tight mb-2"
//             >
//               Frontend<br />
//               <span className="text-sm font-semibold text-[#b4647d] tracking-widest uppercase">Developer</span>
//             </h2>
            
//             <p 
//               data-aos="fade-in"
//               data-aos-delay="500"
//               className="text-sm text-slate-500 font-normal leading-relaxed mb-6"
//             >
//               Building desktop-first digital systems with a focus on clean architecture.
//             </p>
            
//             <button 
//               data-aos="fade-up"
//               data-aos-delay="600"
//               className="bg-[#334155] text-white px-8 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-[#D4849E] transition-all active:scale-95"
//             >
//               Work →
//             </button>
//           </div>
//         </div>
//       </div>

//       <motion.div 
//         style={{ x, y, scale }} 
//         className="fixed inset-0 flex justify-center items-end z-[99] pointer-events-none"
//       >
//         <motion.img
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           src="/img4-nobg.png"
//           alt="Aayusha"
//           className="h-[45vh] md:h-[85vh] w-auto object-contain"
//         />
//       </motion.div>
//     </section>
//   );
// }

// export default HeroSection;


// import React, { useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function HeroSection() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       easing: 'ease-out-quint',
//       once: true,
//     });
//   }, []);

//   const { scrollYProgress } = useScroll();

//   // MOVEMENT: Moves down and aggressively to the left
//   const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
//   const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  
//   // FADE: Narrow range [0, 0.2] makes it disappear very fast
//   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

//   const softShadow = { textShadow: '1px 1px 2px rgba(255, 255, 255, 0.3)' };

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-[#fce4ec] flex items-center justify-center font-['Poppins']">
//       <div 
//         className="absolute inset-0 z-0"
//         style={{
//           background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #fce4ec 35%, #f8bbd0 70%, #D4849E 100%)'
//         }}
//       />

//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 h-full items-center">
//         {/* Left Content */}
//         <div className="flex flex-col items-start space-y-6">
//           <p 
//             data-aos="fade-right" 
//             data-aos-delay="100"
//             className="text-xs tracking-[0.6em] text-[#b4647d] uppercase font-semibold"
//           >
//             Developer
//           </p>
//           <h1 
//             data-aos="fade-up" 
//             data-aos-delay="300"
//             className="text-6xl md:text-8xl font-medium text-[#334155] leading-[0.85] tracking-tighter"
//           >
//             Aayusha<br /><span className="text-[#b4647d]" style={softShadow}>Ghimire</span>
//           </h1>
//           <div 
//             data-aos="fade-up" 
//             data-aos-delay="500"
//             className="flex items-center gap-4 pt-2"
//           >
//             <div className="w-12 h-[1px] bg-[#334155]/20"></div>
//             <p className="text-xs text-slate-500 font-medium tracking-widest uppercase">Frontend Architecture</p>
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="flex flex-col items-end text-right mt-32">
//           <div className="max-w-[340px]">
//             <h2 
//               data-aos="fade-left" 
//               data-aos-delay="700"
//               className="text-4xl md:text-5xl font-medium text-[#334155] leading-tight mb-2"
//             >
//               Frontend<br /><span className="text-sm font-semibold text-[#b4647d] tracking-widest uppercase">Developer</span>
//             </h2>
//             <p 
//               data-aos="fade-in" 
//               data-aos-delay="900"
//               className="text-sm text-slate-500 font-normal leading-relaxed mb-6"
//             >
//               Building desktop-first digital systems with a focus on clean architecture.
//             </p>
//             <button 
//               data-aos="fade-up" 
//               data-aos-delay="1100"
//               className="bg-[#334155] text-white px-8 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-[#D4849E] transition-all active:scale-95"
//             >
//               Work →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* THE IMAGE: Slides left and fades out early */}
//       <motion.div 
//         style={{ x, y, scale, opacity }} 
//         className="fixed inset-0 flex justify-center items-end z-[99] pointer-events-none"
//       >
//         <motion.img
//           initial={{ opacity: 0, y: 150 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ 
//             duration: 1.2, 
//             ease: [0.22, 1, 0.36, 1],
//             delay: 0.5 
//           }}
//           src="/img4-nobg.png"
//           alt="Aayusha"
//           className="h-[45vh] md:h-[85vh] w-auto object-contain"
//         />
//       </motion.div>
//     </section>
//   );
// }

// export default HeroSection;



import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-quint',
      once: true,
    });
  }, []);

  // Track scroll progress specifically for this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // AGGRESSIVE EXIT:
  // x: Moves from center to -100% left
  // y: Sinks down 50%
  // opacity: Completely disappears (0) very early at 0.4 progress
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);

  const softShadow = { textShadow: '1px 1px 2px rgba(255, 255, 255, 0.3)' };

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#fce4ec] flex items-center justify-center font-['Poppins']"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #fce4ec 35%, #f8bbd0 70%, #D4849E 100%)'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 h-full items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start space-y-6">
          <p 
            data-aos="fade-right" 
            data-aos-delay="100"
            className="text-xs tracking-[0.6em] text-[#b4647d] uppercase font-semibold"
          >
            Developer
          </p>
          <h1 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="text-6xl md:text-8xl font-medium text-[#334155] leading-[0.85] tracking-tighter"
          >
            Aayusha<br /><span className="text-[#b4647d]" style={softShadow}>Ghimire</span>
          </h1>
          <div 
            data-aos="fade-up" 
            data-aos-delay="500"
            className="flex items-center gap-4 pt-2"
          >
            <div className="w-12 h-[1px] bg-[#334155]/20"></div>
            <p className="text-xs text-slate-500 font-medium tracking-widest uppercase">Frontend Architecture</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-end text-right mt-32">
          <div className="max-w-[340px]">
            <h2 
              data-aos="fade-left" 
              data-aos-delay="700"
              className="text-4xl md:text-5xl font-medium text-[#334155] leading-tight mb-2"
            >
              Frontend<br /><span className="text-sm font-semibold text-[#b4647d] tracking-widest uppercase">Developer</span>
            </h2>
            <p 
              data-aos="fade-in" 
              data-aos-delay="900"
              className="text-sm text-slate-500 font-normal leading-relaxed mb-6"
            >
              Building desktop-first digital systems with a focus on clean architecture.
            </p>
            <button 
              data-aos="fade-up" 
              data-aos-delay="1100"
              className="bg-[#334155] text-white px-8 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-[#D4849E] transition-all active:scale-95"
            >
              Work →
            </button>
          </div>
        </div>
      </div>

      {/* THE IMAGE */}
      <motion.div 
        style={{ x, y, scale, opacity }} 
        className="fixed inset-0 flex justify-center items-end z-[99] pointer-events-none"
      >
        <motion.img
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.5 
          }}
          src="/img4-nobg.png"
          alt="Aayusha"
          className="h-[45vh] md:h-[85vh] w-auto object-contain"
        />
      </motion.div>
    </section>
  );
}

export default HeroSection;