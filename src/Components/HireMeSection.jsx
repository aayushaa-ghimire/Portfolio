
// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const reasons = [
//   { title: "Experience", desc: "I already hold an experience of working in professional environment" },
//   { title: "Relevant Skills", desc: "I bring a diverse skill set to the table including programming, technical problem solving and creativity." },
//   { title: "Undergraduate", desc: "I am an undergraduate student pursuing a degree in relevant field" },
//   { title: "Design Knowledge", desc: "I have a good knowledge of web designing and i am always eager to learn new things" },
// ];

// export default function HireMeSection() {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });

//   const xLeft = useTransform(scrollYProgress, [0.4, 1], [0, -40]);
//   const xRight = useTransform(scrollYProgress, [0.4, 1], [0, 40]);
//   const yDown = useTransform(scrollYProgress, [0.4, 1], [0, 25]);

//   React.useEffect(() => {
//     AOS.init({ duration: 1000, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', once: false });
//   }, []);

//   return (
//     <section 
//       ref={sectionRef} 
//       className="relative w-full min-h-screen !bg-[#FFF5F8] font-['Poppins'] flex items-center py-10 z-10"
//     >
//       <motion.div style={{ x: xRight }} className="absolute bottom-[-1rem] right-[-2rem] opacity-[0.015] select-none z-0 pointer-events-none">
//         <h2 className="text-[16rem] font-bold text-[#b4647d] font-['Playfair_Display'] italic">
//           Me
//         </h2>
//       </motion.div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto px-10 md:px-16 flex flex-col md:flex-row justify-between items-center gap-12">
        
//         {/* Left Side: Content and Grid */}
//         <div className="w-full md:w-[50%] flex flex-col items-start justify-center">
//           <motion.div style={{ x: xLeft }} className="w-full">
//             <span data-aos="fade-right" className="text-[10px] tracking-[0.5em] text-[#b4647d] uppercase font-bold mb-4 block">
//               Collaboration
//             </span>
//             <h2 
//               data-aos="fade-right" data-aos-delay="200" 
//               className="text-6xl md:text-8xl font-normal text-[#334155] leading-[1.1] mb-14 font-['Playfair_Display']"
//             >
//               Hire <span className="text-[#b4647d]">Me</span>
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
//               {reasons.map((item, index) => (
//                 <motion.div 
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ 
//                     y: -8, 
//                     backgroundColor: "rgba(180, 100, 125, 0.05)",
//                     borderColor: "rgba(180, 100, 125, 0.1)"
//                   }}
//                   className="flex flex-col p-8 bg-[#fce4ece6] rounded-[2rem] min-h-[160px] border border-transparent shadow-sm transition-all duration-300 group"
//                 >
//                   <h3 className="text-xl font-normal text-[#334155] font-['Playfair_Display'] tracking-tight group-hover:text-[#b4647d] transition-colors duration-300 mb-4">
//                     {item.title}
//                   </h3>
//                   <p className="text-[11px] text-[#576577] leading-[1.8] font-normal opacity-80 group-hover:opacity-100">
//                     {item.desc}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* Right Side: Portrait and Badges */}
//         <motion.div 
//           className="w-full md:w-[40%] flex items-center justify-center relative"
//           style={{ x: xRight }}
//         >
//           {/* Result Driven Badge */}
//           <div data-aos="fade-left" data-aos-delay="400" className="absolute top-[30%] -right-8 z-[60]">
//             <div className="bg-[#b4647d] py-5 px-8 shadow-2xl rounded-sm rounded-tr-[2.5rem] text-center min-w-[150px]">
//               <span className="text-[9px] font-bold tracking-widest text-pink-100 uppercase block mb-1">Result Driven</span>
//               <h4 className="text-base font-normal text-white">Full-Time</h4>
//             </div>
//           </div>

//           <motion.img 
//             data-aos="fade-up" data-aos-duration="1200"
//             style={{ y: yDown }}
//             src="/img4-nobg.png" 
//             className="relative z-50 h-[500px] md:h-[650px] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]" 
//             alt="Portrait" 
//           />

//           {/* Location Badge */}
//           <div data-aos="fade-right" data-aos-delay="600" className="absolute bottom-[15%] -left-8 z-[60]">
//             <div className="bg-white py-5 px-8 shadow-2xl rounded-sm border-r-8 border-[#b4647d]">
//               <span className="text-[9px] font-bold tracking-widest text-[#b4647d] uppercase block mb-1">Location</span>
//               <h4 className="text-base font-normal text-[#1e293b]">Remote / Hybrid</h4>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }


import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const reasons = [
  { title: "Experience", desc: "Experience working in professional environments." },
  { title: "Relevant Skills", desc: "Diverse skill set including programming and technical problem solving." },
  { title: "Undergraduate", desc: "Currently pursuing a degree in a relevant technical field." },
  { title: "Design Knowledge", desc: "Eager to learn and apply modern web design principles." },
];

export default function HireMeSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0.4, 1], [0, -30]);
  const xRight = useTransform(scrollYProgress, [0.4, 1], [0, 30]);
  const yDown = useTransform(scrollYProgress, [0.4, 1], [0, 20]);

  React.useEffect(() => {
    AOS.init({ duration: 1000, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', once: false });
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-screen bg-[#FCF9F9] font-['Poppins'] flex items-center py-16 md:py-24 overflow-hidden z-10"
    >
      {/* Background "Me" text refined */}
      <motion.div style={{ x: xRight }} className="absolute bottom-4 right-[-2rem] opacity-[0.03] select-none z-0 pointer-events-none hidden lg:block">
        <h2 className="text-[14rem] font-bold text-[#b4647d] font-['Playfair_Display'] italic">
          Me
        </h2>
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center gap-12">
        
        {/* Left Side: Content and Square Grid */}
        <div className="w-full lg:w-[55%] flex flex-col items-start">
          <motion.div style={{ x: xLeft }} className="w-full">
            <span data-aos="fade-right" className="text-[10px] tracking-[0.5em] text-[#b4647d] uppercase font-bold mb-4 block">
              Collaboration
            </span>
            <h2 
              data-aos="fade-right" data-aos-delay="200" 
              className="text-6xl md:text-8xl font-normal text-[#334155] leading-tight mb-12 font-['Playfair_Display']"
            >
              Hire <span className="text-[#b4647d]">Me</span>
            </h2>

            {/* Square Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {reasons.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  // Changed to bg-gradient, sharp corners (rounded-sm), and subtle border
                  className="flex flex-col p-7 bg-gradient-to-br from-[#FDEFF4] to-[#F3E7EB] rounded-sm border border-[#EEDDE2] shadow-sm transition-all duration-300 group"
                >
                  <h3 className="text-xl font-normal text-[#334155] font-['Playfair_Display'] mb-3 group-hover:text-[#b4647d] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#576577] leading-relaxed opacity-80 font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Portrait and Badges */}
        <motion.div 
          className="w-full lg:w-[45%] flex items-center justify-center relative mt-16 lg:mt-0"
          style={{ x: xRight }}
        >
          {/* Result Driven Badge - Matches image_f9fe25.png */}
          <div data-aos="fade-left" data-aos-delay="400" className="absolute top-[15%] -right-4 md:-right-6 z-[60]">
            <div className="bg-[#b4647d] py-4 px-7 shadow-2xl rounded-sm rounded-tr-[2rem] text-center">
              <span className="text-[8px] font-bold tracking-widest text-pink-100 uppercase block mb-1">Result Driven</span>
              <h4 className="text-sm font-normal text-white">Full-Time</h4>
            </div>
          </div>

          <motion.img 
            data-aos="fade-up" data-aos-duration="1200"
            style={{ y: yDown }}
            src="/img4-nobg.png" 
            className="relative z-50 h-[450px] md:h-[600px] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]" 
            alt="Portrait" 
          />

          {/* Location Badge */}
          <div data-aos="fade-right" data-aos-delay="600" className="absolute bottom-[10%] -left-4 md:-left-6 z-[60]">
            <div className="bg-white py-4 px-7 shadow-2xl rounded-sm border-r-4 border-[#b4647d]">
              <span className="text-[8px] font-bold tracking-widest text-[#b4647d] uppercase block mb-1">Location</span>
              <h4 className="text-sm font-normal text-[#1e293b]">Remote / Hybrid</h4>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}