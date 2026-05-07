// import React, { useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function HeroSection() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: 'ease-out-quart',
//     });
//   }, []);

//   const { scrollYProgress } = useScroll();

//   // [0, 0.5, 1] means: Start of page, Middle of scroll, End of page.
//   // By repeating the second and third values, the image "locks" at 0.5.
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
//         {/* Left Content */}
//         <div className="flex flex-col items-start space-y-6" data-aos="fade-right">
//           <p className="text-xs tracking-[0.6em] text-[#b4647d] uppercase font-semibold">Developer</p>
//           <h1 className="text-6xl md:text-8xl font-medium text-[#334155] leading-[0.85] tracking-tighter">
//             Aayusha<br /><span className="text-[#b4647d]" style={softShadow}>Ghimire</span>
//           </h1>
//           <div className="flex items-center gap-4 pt-2">
//             <div className="w-12 h-[1px] bg-[#334155]/20"></div>
//             <p className="text-xs text-slate-500 font-medium tracking-widest uppercase">Frontend Architecture</p>
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="flex flex-col items-end text-right mt-32" data-aos="fade-left">
//           <div className="max-w-[340px]">
//             <h2 className="text-4xl md:text-5xl font-medium text-[#334155] leading-tight mb-2">
//               Frontend<br /><span className="text-sm font-semibold text-[#b4647d] tracking-widest uppercase">Developer</span>
//             </h2>
//             <p className="text-sm text-slate-500 font-normal leading-relaxed mb-6">
//               Building desktop-first digital systems with a focus on clean architecture.
//             </p>
//             <button className="bg-[#334155] text-white px-8 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-[#D4849E] transition-all active:scale-95">
//               Work →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* THE IMAGE: Use z-[99] to ensure it stays on top of the next section */}
//       <motion.div 
//         style={{ x, y, scale }} 
//         className="fixed inset-0 flex justify-center items-end z-[99] pointer-events-none"
//       >
//         <motion.img
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           src="/img4-nobg.png"
//           alt="Aayusha"
//           className="h-[45vh] md:h-[85vh] w-auto object-contain"
//         />
//       </motion.div>
//     </section>
//   );
// }

// export default HeroSection;




import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quart',
    });
  }, []);

  const softShadow = { textShadow: '1px 1px 2px rgba(255, 255, 255, 0.3)' };

  return (
    <section className="hero-viewport">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #fce4ec 35%, #f8bbd0 70%, #D4849E 100%)'
        }}
      />

      {/* Grid Layout - Locked for Responsiveness */}
      <div className="text-layer flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 items-center">
          
          {/* Left Side (Desktop-First) */}
          <div className="flex flex-col items-start space-y-6">
            <p data-aos="fade-right" data-aos-delay="100" className="text-xs tracking-[0.6em] text-[#b4647d] uppercase font-semibold">
              Developer
            </p>
            <h1 data-aos="fade-up" data-aos-delay="300" className="text-6xl md:text-8xl font-medium text-[#334155] leading-[0.85] tracking-tighter">
              Aayusha<br />
              <span className="text-[#b4647d]" style={softShadow}>Ghimire</span>
            </h1>
            <div data-aos="fade-up" data-aos-delay="500" className="flex items-center gap-4 pt-2">
              <div className="w-12 h-[1px] bg-[#334155]/20"></div>
              <p className="text-xs text-slate-500 font-medium tracking-widest uppercase">
                Frontend Architecture
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-end text-right mt-32">
            <div className="max-w-[340px]">
              <h2 data-aos="fade-left" data-aos-delay="700" className="text-4xl md:text-5xl font-medium text-[#334155] leading-tight mb-2">
                Frontend<br />
                <span className="text-sm font-semibold text-[#b4647d] tracking-widest uppercase">Developer</span>
              </h2>
              <p data-aos="fade-in" data-aos-delay="900" className="text-sm text-slate-500 font-normal leading-relaxed mb-6">
                Building desktop-first digital systems with a focus on clean architecture and premium aesthetics.
              </p>
              <button className="bg-[#334155] text-white px-8 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-[#b4647d] transition-all active:scale-95 shadow-md">
                Work →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sinking Image Layer */}
      <div className="image-layer scroll-smooth-img">
        <img
          src="/img4-nobg.png"
          alt="Aayusha"
          className="h-[45vh] md:h-[85vh] w-auto object-contain"
          /* AOS triggers the initial page-load entrance */
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
}

export default HeroSection;