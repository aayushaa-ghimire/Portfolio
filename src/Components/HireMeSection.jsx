// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Mousewheel } from 'swiper/modules';

// // Import Swiper core styles directly
// import 'swiper/css';

// const steps = [
//   { id: "01", title: "Relevant Skills", tag: "React, Tailwind CSS, Git & GitHub, etc" },
//   { id: "02", title: "Work Experience", tag: "4 Months as Frontend dev" },
//   { id: "03", title: "Projects", tag: "Real world projects" },
//   { id: "04", title: "UI/UX Knowledge", tag: "Basic Knowledge of design and user experience" },
// ];

// export default function HireMeSection() {
//   const [swiperProgress, setSwiperProgress] = useState(0);

//   return (
//     <section className="bg-[#fff5f8] h-screen w-full relative font-['Poppins'] flex flex-col justify-between py-12 overflow-hidden select-none">
      
//       {/* 1. VISUAL HEADER */}
//       <div className="w-full text-center z-10 pt-4">
//         <p className="text-[10px] tracking-[1em] text-[#b4647d] font-bold uppercase mb-2 opacity-60">
//           Process
//         </p>
//         <h2 className="text-7xl font-['Playfair_Display'] text-[#4a1d1d] leading-none">
//           Hire <span className="text-[#b4647d] italic">Me</span>
//         </h2>
//       </div>

//       {/* 2. CENTRAL WORKING VIEWPORT FOR THE CARDS */}
//       <div className="w-full h-[400px] my-auto relative z-20 flex items-center justify-center">
        
//         {/* SWIPER CONTAINER COMPONENT */}
//         <Swiper
//           direction={'vertical'}
//           slidesPerView={1}
//           centeredSlides={true}
//           mousewheel={{
//             forceToAxis: true,
//             sensitivity: 1,
//           }}
//           modules={[Mousewheel]}
//           className="w-full h-full !overflow-visible"
//           onProgress={(swiper) => {
//             // swiper.progress maps seamlessly from 0.0 (first card) to 1.0 (last card)
//             // Multiply by index range to match card count timeline array (0 to 3)
//             setSwiperProgress(swiper.progress * (steps.length - 1));
//           }}
//         >
//           {steps.map((step, i) => {
//             // Calculate distance to current swiper progress active point
//             const distance = i - swiperProgress;

//             let translateY = 0;
//             let translateZ = 0;
//             let rotateX = 0;
//             let scale = 1;
//             let opacity = 1;

//             if (distance > 0) {
//               // UPCOMING CARDS: Layered perfectly flat and tightly stacked below the top card
//               const stackFactor = Math.min(distance, 1);
//               translateY = stackFactor * 12;
//               translateZ = stackFactor * -30;
//               scale = 1 - stackFactor * 0.03;
//               // Make deeper stacked layers transparent to prevent structural cluttering
//               opacity = Math.max(0, 1 - distance * 0.5);
//             } else {
//               // ACTIVE & PAST CARDS: Fly upwards and away smoothly on swipe movement
//               translateY = distance * 360;
//               translateZ = Math.abs(distance) * 120;
//               rotateX = distance * 25;
//               opacity = Math.max(0, 1 + distance * 2.5);
//             }

//             return (
//               <SwiperSlide 
//                 key={step.id} 
//                 className="!flex items-center justify-center !overflow-visible [perspective:1200px]"
//               >
//                 {/* Visual Card Frame */}
//                 <div 
//                   className="w-[540px] h-[350px] rounded-[2.5rem] bg-[#b4647d] border border-white/20 p-10 shadow-2xl flex flex-col justify-between transition-transform duration-75 ease-out"
//                   style={{
//                     transform: `translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) scale(${scale})`,
//                     opacity: opacity,
//                     zIndex: Math.round(100 - i),
//                     transformStyle: 'preserve-3d',
//                     visibility: Math.abs(distance) > 1.3 ? 'hidden' : 'visible'
//                   }}
//                 >
//                   {/* Card Top */}
//                   <div className="flex justify-between items-center">
//                     <span className="text-[10px] font-black tracking-[0.15em] text-white/60 uppercase max-w-[75%] truncate">
//                       {step.tag}
//                     </span>
//                     <span className="text-white/80 text-xl font-serif">✦✦</span>
//                   </div>

//                   {/* Card Center */}
//                   <div className="text-center flex flex-col items-center w-full">
//                     <span className="text-2xl font-['Playfair_Display'] text-white/90 italic mb-1">
//                       {step.id}
//                     </span>
//                     <h3 className="text-4xl font-bold text-white tracking-tight leading-tight mb-6 uppercase">
//                       {step.title}
//                     </h3>
                    
//                     {/* Dotted Lines Layout */}
//                     <div className="w-full space-y-2 opacity-30 px-4">
//                       <div className="w-full border-b border-dotted border-white/70" />
//                       <div className="w-full border-b border-dotted border-white/70" />
//                       <div className="w-[50%] border-b border-dotted border-white/70 mx-auto" />
//                     </div>
//                   </div>

//                   {/* Card Bottom */}
//                   <div className="flex justify-center items-center text-[9px] font-black tracking-[0.15em] text-white/50 uppercase text-center px-4 line-clamp-1">
//                     <span>{step.tag}</span>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>

//       </div>

//       {/* 3. LOWER VIEWPORT ALIGNMENT BUFFER */}
//       <div className="w-full h-12 pointer-events-none select-none z-10" />

//     </section>
//   );
// }


import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

// Import Swiper core styles directly
import 'swiper/css';

const steps = [
  { id: "01", title: "Relevant Skills", tag: "React, Tailwind CSS, Git & GitHub, etc" },
  { id: "02", title: "Work Experience", tag: "4 Months as Frontend dev" },
  { id: "03", title: "Projects", tag: "Real world projects" },
  { id: "04", title: "UI/UX Knowledge", tag: "Basic Knowledge of design and user experience" },
];

export default function HireMeSection() {
  const [swiperProgress, setSwiperProgress] = useState(0);

  return (
    <section className="bg-[#fff5f8] h-screen w-full relative font-['Poppins'] flex flex-col justify-between py-12 overflow-hidden select-none">
      
      {/* 1. FIXED VISUAL HEADER */}
      <div className="w-full text-center z-10 pt-4">
        <p className="text-[10px] tracking-[1em] text-[#b4647d] font-bold uppercase mb-2 opacity-60">
          Process
        </p>
        <h2 className="text-7xl font-['Playfair_Display'] text-[#4a1d1d] leading-none">
          Hire <span className="text-[#b4647d] italic">Me</span>
        </h2>
      </div>

      {/* 2. LOCKED CARD VIEWPORT LAYER */}
      <div className="w-full h-[400px] my-auto relative z-20 flex items-center justify-center">
        
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          centeredSlides={true}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            // MAGIC PROP: Releases wheel lock to let page scroll normally at start/end card boundaries!
            releaseOnEdges: true, 
          }}
          modules={[Mousewheel]}
          className="w-full h-full !overflow-visible"
          onProgress={(swiper) => {
            // Maps swiper timeline safely from 0 to 3
            setSwiperProgress(swiper.progress * (steps.length - 1));
          }}
        >
          {steps.map((step, i) => {
            const distance = i - swiperProgress;

            let translateY = 0;
            let translateZ = 0;
            let rotateX = 0;
            let scale = 1;
            let opacity = 1;

            if (distance > 0) {
              // UPCOMING STACK: Rests beautifully even and flat at the base
              const stackFactor = Math.min(distance, 1);
              translateY = stackFactor * 12;
              translateZ = stackFactor * -30;
              scale = 1 - stackFactor * 0.03;
              opacity = Math.max(0, 1 - distance * 0.5);
            } else {
              // ACTIVE & PAST CARDS: Fly upward and arc away smoothly on mousewheel swipe
              translateY = distance * 360;
              translateZ = Math.abs(distance) * 120;
              rotateX = distance * 25;
              opacity = Math.max(0, 1 + distance * 2.5);
            }

            return (
              <SwiperSlide 
                key={step.id} 
                className="!flex items-center justify-center !overflow-visible [perspective:1200px]"
              >
                {/* Clean, Uniform Card Shape */}
                <div 
                  className="w-[540px] h-[350px] rounded-[2.5rem] bg-[#b4647d] border border-white/20 p-10 shadow-2xl flex flex-col justify-between transition-transform duration-75 ease-out will-change-transform"
                  style={{
                    transform: `translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) scale(${scale})`,
                    opacity: opacity,
                    zIndex: Math.round(100 - i),
                    transformStyle: 'preserve-3d',
                    visibility: Math.abs(distance) > 1.3 ? 'hidden' : 'visible'
                  }}
                >
                  {/* Card Top */}
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black tracking-[0.15em] text-white/60 uppercase max-w-[75%] truncate">
                      {step.tag}
                    </span>
                    <span className="text-white/80 text-xl font-serif">✦✦</span>
                  </div>

                  {/* Card Center */}
                  <div className="text-center flex flex-col items-center w-full">
                    <span className="text-2xl font-['Playfair_Display'] text-white/90 italic mb-1">
                      {step.id}
                    </span>
                    <h3 className="text-4xl font-bold text-white tracking-tight leading-tight mb-6 uppercase">
                      {step.title}
                    </h3>
                    
                    {/* Dotted Accent Lines */}
                    <div className="w-full space-y-2 opacity-30 px-4">
                      <div className="w-full border-b border-dotted border-white/70" />
                      <div className="w-full border-b border-dotted border-white/70" />
                      <div className="w-[50%] border-b border-dotted border-white/70 mx-auto" />
                    </div>
                  </div>

                  {/* Card Bottom */}
                  <div className="flex justify-center items-center text-[9px] font-black tracking-[0.15em] text-white/50 uppercase text-center px-4 line-clamp-1">
                    <span>{step.tag}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>

      {/* 3. ALIGNMENT SPACING BUFFER */}
      <div className="w-full h-12 pointer-events-none select-none z-10" />

    </section>
  );
}