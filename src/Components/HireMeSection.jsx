// import React, { useEffect, useRef, useState } from "react";
// import "./HireMeStyles.css";

// const steps = [
//   { id: "01", title: "Discovery", tag: "PHASE // AUDIT" },
//   { id: "02", title: "UI Precision", tag: "PHASE // VISUAL" },
//   { id: "03", title: "Raw Logic", tag: "PHASE // DEV" },
//   { id: "04", title: "Final Delivery", tag: "PHASE // LIVE" },
// ];

// export default function HireMeSection() {
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const containerRef = useRef(null);

//   const handleScroll = (e) => {
//     const { scrollTop, clientHeight } = e.target;
//     // Calculate how far we've scrolled in units of "screens"
//     setScrollProgress(scrollTop / clientHeight);
//   };

//   return (
//     <section className="bg-[#fff5f8] h-screen w-full relative font-['Poppins']">
//       {/* Full-screen Scroller */}
//       <div 
//         ref={containerRef}
//         onScroll={handleScroll}
//         className="absolute inset-0 overflow-y-auto snap-y snap-mandatory no-scrollbar z-50"
//       >
//         {steps.map((_, i) => (
//           <div key={i} className="w-full h-screen snap-start" />
//         ))}
//       </div>

//       {/* Visual Header */}
//       <div className=" top-10 left-0 w-full text-center z-10 pointer-events-none">
//         <p className="text-[10px] tracking-[1em] text-[#b4647d] font-bold uppercase mb-2 opacity-60">Process</p>
//         <h2 className="text-7xl font-['Playfair_Display'] text-[#4a1d1d]">
//           Hire <span className="text-[#b4647d] italic">Me</span>
//         </h2>
//       </div>

//       {/* Centered Card Viewport */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <div className="relative w-[600px] h-[400px] perspective-[1500px] transform-style-3d">
//           {steps.map((step, i) => {
//             // Distance from the "active" center (0 is perfectly centered)
//             const distance = i - scrollProgress;
//             const absDistance = Math.abs(distance);
            
//             // The "Fly Out" Logic: Card pops out as it approaches the center
//             const translateY = distance * 20; // Slight vertical stack
//             const translateZ = absDistance < 0.5 ? (1 - absDistance * 2) * 200 : 0;
//             const rotateX = absDistance < 0.5 ? distance * -40 : 0;
//             const opacity = 1 - absDistance * 0.8;

//             return (
//               <div 
//                 key={step.id} 
//                 className="card absolute inset-0 m-auto w-[520px] h-[340px] rounded-[2.5rem] bg-[#b4647d] border border-white/20 p-10 shadow-2xl flex flex-col justify-between"
//                 style={{
//                   transform: `translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg)`,
//                   opacity: opacity,
//                   zIndex: Math.round(10 - absDistance),
//                   display: absDistance > 1.5 ? 'none' : 'flex' // Performance optimization
//                 }}
//               >
//                 <div className="flex justify-between items-center">
//                   <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase">{step.tag}</span>
//                   <span className="text-white/80 text-xl font-serif">✦✦</span>
//                 </div>

//                 <div className="text-center flex flex-col items-center">
//                   <span className="text-2xl font-['Playfair_Display'] text-white/90 italic">{step.id}</span>
//                   <h3 className="text-5xl font-bold text-white tracking-tight leading-none mb-6 uppercase">
//                     {step.title}
//                   </h3>
                  
//                   {/* Dotted lines from reference image */}
//                   <div className="w-full space-y-2 opacity-30">
//                     <div className="w-full border-b border-dotted border-white" />
//                     <div className="w-full border-b border-dotted border-white" />
//                     <div className="w-[60%] border-b border-dotted border-white mx-auto" />
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center text-[9px] font-black tracking-[0.4em] text-white/50 uppercase">
//                   <span>PHASE // HIREME</span>
//                   <span>{step.tag}</span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef, useState } from "react";

const steps = [
  { id: "01", title: "Discovery", tag: "PHASE // AUDIT" },
  { id: "02", title: "UI Precision", tag: "PHASE // VISUAL" },
  { id: "03", title: "Raw Logic", tag: "PHASE // DEV" },
  { id: "04", title: "Final Delivery", tag: "PHASE // LIVE" },
];

export default function HireMeSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight } = e.target;
    setScrollProgress(scrollTop / clientHeight);
  };

  return (
    <section className="bg-[#fff5f8] h-screen w-full relative font-['Poppins'] overflow-hidden">
      {/* Invisible Full-screen Scroller Track */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="absolute inset-0 overflow-y-auto snap-y snap-mandatory z-50 pointer-events-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {steps.map((_, i) => (
          <div key={i} className="w-full h-screen snap-start" />
        ))}
      </div>

      {/* Visual Content Layer */}
      <div className="absolute inset-0 flex flex-col pt-20 pb-16 pointer-events-none z-10">
        
        {/* Fixed Header */}
        <div className="w-full text-center mb-16"> {/* Increased bottom margin for explicit breathing room */}
          <p className="text-[10px] tracking-[1em] text-[#b4647d] font-bold uppercase mb-2 opacity-60">
            Process
          </p>
          <h2 className="text-7xl font-['Playfair_Display'] text-[#4a1d1d] leading-none">
            Hire <span className="text-[#b4647d] italic">Me</span>
          </h2>
        </div>

        {/* Card Viewport Area */}
        <div className="w-full flex-1 flex items-start justify-center relative overflow-visible [perspective:1500px]">
          {steps.map((step, i) => {
            // How far this specific card is from being perfectly in focus
            const distance = i - scrollProgress;
            
            let translateY = 0;
            let translateZ = 0;
            let rotateX = 0;
            let opacity = 1;

            // NEW MATH: Delays the onset of stacking or flying away
            // The card remains flat and fully visible until it transitions past center thresholds
            if (distance > 0.1) {
              // Cards sitting flat at the bottom waiting their turn
              // They only compress into a neat stack when the active card moves away
              const stackFactor = Math.min(distance, 1);
              translateY = stackFactor * 12; 
              translateZ = stackFactor * -20; 
              opacity = Math.max(0, 1 - distance * 0.4);
            } else if (distance < -0.1) {
              // Active card flies upward and away only after passing the active zone
              translateY = distance * 220; 
              translateZ = Math.abs(distance) * 120; 
              rotateX = distance * 30; 
              opacity = Math.max(0, 1 + distance * 1.8); 
            } else {
              // CARD IS FULLY VISIBLE & CENTERED: Neutralizes transformations in the sweet spot
              translateY = 0;
              translateZ = 0;
              rotateX = 0;
              opacity = 1;
            }

            return (
              <div 
                key={step.id} 
                className="absolute w-[540px] h-[350px] rounded-[2.5rem] bg-[#b4647d] border border-white/20 p-10 shadow-2xl flex flex-col justify-between transition-all duration-100 ease-out"
                style={{
                  transform: `translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg)`,
                  opacity: opacity,
                  zIndex: Math.round(100 - i), 
                  transformStyle: 'preserve-3d',
                  visibility: Math.abs(distance) > 1.8 ? 'hidden' : 'visible'
                }}
              >
                {/* Card Top */}
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase">
                    {step.tag}
                  </span>
                  <span className="text-white/80 text-xl font-serif">✦✦</span>
                </div>

                {/* Card Center */}
                <div className="text-center flex flex-col items-center w-full">
                  <span className="text-2xl font-['Playfair_Display'] text-white/90 italic mb-1">
                    {step.id}
                  </span>
                  <h3 className="text-5xl font-bold text-white tracking-tight leading-none mb-6 uppercase">
                    {step.title}
                  </h3>
                  
                  {/* Dotted lines */}
                  <div className="w-full space-y-2 opacity-30 px-4">
                    <div className="w-full border-b border-dotted border-white/70" />
                    <div className="w-full border-b border-dotted border-white/70" />
                    <div className="w-[50%] border-b border-dotted border-white/70 mx-auto" />
                  </div>
                </div>

                {/* Card Bottom */}
                <div className="flex justify-between items-center text-[9px] font-black tracking-[0.4em] text-white/50 uppercase">
                  <span>Phase // HireMe</span>
                  <span>{step.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}