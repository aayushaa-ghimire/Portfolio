// import React, { useState, useEffect, useRef } from 'react';
// import SkillsMarquee from './SkillsMarquee';
// import ReverseSkillsMarquee from './ReverseSkillsMarquee';

// const offerings = [
//   {
//     title: "Production-Ready Frontend",
//     description: "Maximizing user retention through lightning-fast loading speeds. Optimized with strategic code-splitting, asset compression, and premier Core Web Vitals scores."
//   },
//   {
//     title: "Pixel-Perfect UI Execution",
//     description: "Bridging the gap between complex Figma designs and flawless code. I deliver responsive, highly polished user interfaces with sharp attention to spacing and layout tokens."
//   },
//   {
//     title: "Performance & Optimization",
//     description: "Maximizing user retention through lightning-fast loading speeds. Optimized with strategic code-splitting, asset compression, and premier Core Web Vitals scores."
//   },
//   {
//     title: "Agile & Maintainable Workflow",
//     description: "Writing self-documenting, reusable components with future scaling in mind. Rigid lints and structured workflows drastically eliminate long-term technical debt."
//   }
// ];

// export default function HireMe() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const scrollAccumulator = useRef(0);
//   const lastScrollTime = useRef(Date.now());
//   const touchStartY = useRef(0);
//   const containerRef = useRef(null);

//   // Scroll Lock logic: Prevent page scroll when hovering/interacting with component
//   const toggleBodyScroll = (lock) => {
//     document.body.style.overflow = lock ? 'hidden' : 'auto';
//   };

//   useEffect(() => {
//     const container = containerRef.current;
    
//     const handleWheel = (e) => {
//       const isAtStart = activeIndex === 0 && e.deltaY < 0;
//       const isAtEnd = activeIndex === offerings.length - 1 && e.deltaY > 0;

//       // If we are at the boundaries, release the scroll lock
//       if (isAtStart || isAtEnd) {
//         toggleBodyScroll(false);
//         return;
//       }

//       e.preventDefault();
//       toggleBodyScroll(true); // Lock the rest of the page

//       const now = Date.now();
//       if (now - lastScrollTime.current > 200) scrollAccumulator.current = 0;
//       lastScrollTime.current = now;

//       scrollAccumulator.current += e.deltaY;

//       if (Math.abs(scrollAccumulator.current) >= 40) {
//         if (scrollAccumulator.current > 0) {
//           setActiveIndex((prev) => Math.min(prev + 1, offerings.length - 1));
//         } else {
//           setActiveIndex((prev) => Math.max(prev - 1, 0));
//         }
//         scrollAccumulator.current = 0;
//       }
//     };

//     if (container) {
//       container.addEventListener('wheel', handleWheel, { passive: false });
//       container.addEventListener('mouseenter', () => toggleBodyScroll(true));
//       container.addEventListener('mouseleave', () => toggleBodyScroll(false));
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener('wheel', handleWheel);
//         toggleBodyScroll(false); // Cleanup
//       }
//     };
//   }, [activeIndex]);

//   return (
//     <>
//       <SkillsMarquee className="pb-20" />

//       <div 
//         ref={containerRef}
//         id="services-viewport-container"
//         className="w-full bg-[#FFF5F8] px-6 sm:px-12 sm:py-8 md:px-20 md:py-10 lg:px-32 xl:px-44 flex items-center lg:py-14 justify-center select-none relative overflow-hidden py-16 md:py-0"
//       >
//         {/* Container content remains same as your logic */}
//         <div className="w-full max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-16 lg:gap-24 relative z-10">
//           <div className="w-full md:w-5/12 flex flex-col justify-center text-left">
//             <span className="text-[10px] sm:text-[11px] font-normal tracking-[0.35em] uppercase text-[#334155]/60 block mb-2 font-sans">
//               Qualities
//             </span>
//             <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#b4647d] tracking-normal leading-none relative inline-block">
//               What I Offer
//             </h2>
//           </div>

//           <div className="w-full md:w-7/12 flex flex-col sm:flex-row gap-8 sm:gap-10 items-start sm:items-center relative min-h-[260px] md:min-h-[280px]">
//             <div className="flex flex-row sm:flex-col gap-5 justify-center items-center shrink-0 order-first sm:order-none w-full sm:w-auto">
//               {offerings.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveIndex(index)}
//                   className="relative outline-none transition-all duration-300 w-6 h-6 flex items-center justify-center"
//                 >
//                   {index === activeIndex ? (
//                     <svg width="20" height="20" viewBox="0 0 24 24" className="transform scale-110">
//                       <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#b4647d" />
//                     </svg>
//                   ) : (
//                     <div className="w-2 h-2 rounded-full bg-[#334155]/20" />
//                   )}
//                 </button>
//               ))}
//             </div>

//             <div className="flex-1 min-w-0 relative overflow-hidden h-[240px] sm:h-[260px] w-full">
//               {offerings.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 w-full h-full flex flex-col justify-center text-left transition-all duration-[650ms] ease-[cubic-bezier(0.25,1,0.3,1)] ${
//                     index === activeIndex ? 'opacity-100 translate-y-0' : index < activeIndex ? 'opacity-0 -translate-y-12' : 'opacity-0 translate-y-12'
//                   }`}
//                 >
//                   <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-serif font-normal text-[#334155] mb-3">{item.title}</h3>
//                   <p className="text-[13px] sm:text-[14px] md:text-[15px] font-sans font-normal text-[#334155]/80 leading-loose max-w-xl">{item.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <ReverseSkillsMarquee />
//     </>
//   );
// }

import React from 'react';
import SkillsMarquee from './SkillsMarquee';
import ReverseSkillsMarquee from './ReverseSkillsMarquee';

export default function HireMe() {
  const offerings = [
  {
    title: "Production-Ready Frontend",
    description: "Maximizing user retention through lightning-fast loading speeds. Optimized with strategic code-splitting, asset compression, and premier Core Web Vitals scores."
  },
  {
    title: "Pixel-Perfect UI Execution",
    description: "Bridging the gap between complex Figma designs and flawless code. I deliver responsive, highly polished user interfaces with sharp attention to spacing and layout tokens."
  },
  {
    title: "Performance & Optimization",
    description: "Maximizing user retention through lightning-fast loading speeds. Optimized with strategic code-splitting, asset compression, and premier Core Web Vitals scores."
  },
  {
    title: "Agile & Maintainable Workflow",
    description: "Writing self-documenting, reusable components with future scaling in mind. Rigid lints and structured workflows drastically eliminate long-term technical debt."
  }
];
  return (
    <>
      <SkillsMarquee  className="pb-20" />

      <div 
        className="w-full bg-[#FFF5F8] px-6 sm:px-12 sm:py-8 md:px-20 md:py-10 lg:px-32 xl:px-44 flex items-center lg:py-14 justify-center relative overflow-hidden py-16 md:py-0"
      >
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-16 lg:gap-24 relative z-10">
          
          {/* Left Column - Remains unchanged */}
          <div className="w-full md:w-5/12 flex flex-col justify-center text-left">
            <span className="text-[10px] sm:text-[11px] font-normal tracking-[0.35em] uppercase text-[#334155]/60 block mb-2 font-sans">
              Qualities
            </span>
            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#b4647d] tracking-normal leading-none">
              What I Offer
            </h2>
          </div>

          {/* Right Column - 2x2 Card Grid */}
          <div className="w-full md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {offerings.map((item, index) => (
              <div 
                key={index}
                className="bg-white/50 backdrop-blur-sm border border-[#b4647d]/10 p-6 rounded-3xl transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(180,100,125,0.15)] hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-full bg-[#b4647d]/5 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#b4647d]" />
                </div>
                <h3 className="text-lg font-serif font-normal text-[#334155] mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] font-sans font-normal text-[#334155]/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <ReverseSkillsMarquee />
    </>
  );
}