

// import React from 'react';

// function HeroSection() {
//   return (
//     <section className="relative w-full h-screen overflow-hidden flex items-center justify-center"
//       style={{
//         background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #fff0f5 10%, #fce4ec 30%, #f8bbd0 60%, #D4849E 100%)',
//         fontFamily: "'Poppins', sans-serif",
//       }}>
      
//       <div className="absolute top-[-5%] left-[-5%] w-[55vw] h-[55vw] rounded-full blur-[160px] opacity-45 pointer-events-none bg-[#D4849E]" />
//       <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-40 pointer-events-none bg-[#D4849E]" />

//       <div className="relative w-full max-w-[1440px] h-full mx-auto px-16 grid grid-cols-12 items-center">
        
//         <div className="col-span-5 z-30">
//           <span 
//             className="block text-[0.7rem] tracking-[0.8em] text-[#b4647d] uppercase font-medium mb-6"
//             data-aos="fade-down" 
//             data-aos-delay="100"
//           >
//             Developer
//           </span>
//           <h1 className="text-[6.2rem] font-normal leading-[0.85] tracking-tighter text-[#334155]">
//             <span className="block" data-aos="fade-right" data-aos-delay="300">
//                 Aayusha
//             </span>
//             <span 
//               className="text-[#b4647d] block mt-1 italic font-light" 
//               data-aos="fade-right" 
//               data-aos-delay="500"
//             >
//                 Ghimire
//             </span>
//           </h1>
          
//           <div className="mt-14 flex items-center gap-6" data-aos="fade-up" data-aos-delay="800">
//              <div className="w-12 h-[1px] bg-[#334155]/30"></div>
//              <p className="text-[0.65rem] text-slate-600 font-normal tracking-[0.4em] uppercase">
//                 Frontend Architecture
//              </p>
//           </div>
//         </div>

//         {/* CENTER: Raw Image - Perfectly Centered */}
//         <div className="absolute inset-0 flex justify-center items-end z-20 pointer-events-none">
//           <img
//             src="/img4-nobg.png"
//             alt="Aayusha"
//             className="h-[85vh] w-auto object-contain object-bottom select-none"
//             style={{ filter: 'none' }}
//             data-aos="zoom-in-up"
//             data-aos-duration="1500"
//           />
//         </div>

//         {/* RIGHT: Developer Role Block */}
//         <div className="col-span-4 col-start-9 flex flex-col items-end z-30 text-right">
//           <div className="max-w-[300px]" data-aos="fade-left" data-aos-delay="600">
//             <h2 className="text-[3.8rem] font-light leading-[1] text-[#334155] tracking-tight mb-6">
//                 Frontend<br />
//                 <span className="text-[1.6rem] font-medium uppercase tracking-[0.3em] text-[#b4647d]">Developer</span>
//             </h2>
//             <p className="text-[0.75rem] leading-relaxed text-slate-600 font-normal mb-10 pl-8">
//                 Building desktop-first digital systems with a focus on clean, raw architecture.
//             </p>
            
//             <button className="bg-[#334155] text-white px-10 py-4 rounded-full text-[0.6rem] font-medium tracking-[0.3em] uppercase transition-all hover:bg-[#D4849E] hover:shadow-2xl active:scale-95">
//                 Explore Work →
//             </button>
//           </div>

//           <div 
//             className="mt-20 opacity-40 text-[0.55rem] uppercase tracking-[0.8em] text-[#334155]"
//             data-aos="fade-in"
//             data-aos-delay="1000"
//           >
//              Portfolio 2026
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default HeroSection;

import React from 'react';

function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{
        // A polished circular gradient that concentrates the pink intensity toward the edges
        background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #fff9fb 15%, #fce4ec 35%, #f8bbd0 70%, #D4849E 100%)',
        fontFamily: "'Poppins', sans-serif",
      }}>
      
      {/* Background Glows for Depth */}
      <div className="absolute top-[-5%] left-[-5%] w-[55vw] h-[55vw] rounded-full blur-[160px] opacity-40 pointer-events-none bg-[#D4849E]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-35 pointer-events-none bg-[#D4849E]" />

      <div className="relative w-full max-w-[1440px] h-full mx-auto px-16 grid grid-cols-12 items-center">
        
        {/* LEFT: Name Block - Perfectly Left Aligned */}
        <div className="col-span-5 z-30">
          <span 
            className="block text-[0.7rem] tracking-[0.8em] text-[#b4647d] uppercase font-medium mb-6"
            data-aos="fade-down" 
            data-aos-delay="100"
          >
            Developer
          </span>
          <h1 className="text-[6.2rem] font-normal leading-[0.85] tracking-tighter text-[#334155]">
            <span className="block" data-aos="fade-right" data-aos-delay="300">
                Aayusha
            </span>
            <span 
              className="text-[#b4647d] block mt-1 italic font-light" 
              data-aos="fade-right" 
              data-aos-delay="500"
            >
                Ghimire
            </span>
          </h1>
          
          <div className="mt-14 flex items-center gap-6" data-aos="fade-up" data-aos-delay="800">
             <div className="w-12 h-[1px] bg-[#334155]/20"></div>
             <p className="text-[0.65rem] text-slate-500 font-normal tracking-[0.4em] uppercase">
                Frontend Architecture
             </p>
          </div>
        </div>

        {/* CENTER: Raw Image - Slightly smaller (80vh) for better balance */}
        <div className="absolute inset-0 flex justify-center items-end z-20 pointer-events-none">
          <img
            src="/img4-nobg.png"
            alt="Aayusha"
            className="h-[80vh] w-auto object-contain object-bottom select-none transition-transform duration-1000"
            style={{ filter: 'none' }}
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          />
        </div>

        {/* RIGHT: Developer Role Block */}
        <div className="col-span-4 col-start-9 flex flex-col items-end z-30 text-right">
          <div className="max-w-[300px]" data-aos="fade-left" data-aos-delay="600">
            <h2 className="text-[3.8rem] font-light leading-[1] text-[#334155] tracking-tight mb-6">
                Frontend<br />
                <span className="text-[1.6rem] font-medium uppercase tracking-[0.3em] text-[#b4647d]">Developer</span>
            </h2>
            <p className="text-[0.75rem] leading-relaxed text-slate-500 font-normal mb-10 pl-8">
                Building desktop-first digital systems with a focus on clean, raw architecture.
            </p>
            
            <button className="bg-[#334155] text-white px-10 py-4 rounded-full text-[0.6rem] font-medium tracking-[0.3em] uppercase transition-all hover:bg-[#D4849E] hover:shadow-2xl active:scale-95">
                Explore Work →
            </button>
          </div>

          <div 
            className="mt-20 opacity-30 text-[0.55rem] uppercase tracking-[0.8em] text-[#334155]"
            data-aos="fade-in"
            data-aos-delay="1000"
          >
             Portfolio 2026
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;