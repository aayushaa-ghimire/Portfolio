import React, { useEffect, useRef, useState } from "react";

const steps = [
  { id: "01", title: "Discovery", tag: "PHASE // AUDIT" },
  { id: "02", title: "UI Precision", tag: "PHASE // VISUAL" },
  { id: "03", title: "Raw Logic", tag: "PHASE // DEV" },
  { id: "04", title: "Final Delivery", tag: "PHASE // LIVE" },
];

export default function HireMeSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollTrackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollTrackRef.current) return;
      
      const rect = scrollTrackRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Calculate how far the section has scrolled relative to the viewport
      const totalScrollableDistance = rect.height - viewHeight;
      const currentScrollProgress = -rect.top / totalScrollableDistance;
      
      // Clamp values between 0 and the max index of steps
      const normalizedProgress = Math.max(0, Math.min(1, currentScrollProgress)) * (steps.length - 1);
      setScrollProgress(normalizedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={scrollTrackRef} className="relative h-[300vh] bg-[#fff5f8]">
      
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-16 pb-24 overflow-hidden">
        
        <div className="w-full text-center select-none z-10">
          <p className="text-[10px] tracking-[1em] text-[#b4647d] font-bold uppercase mb-2 opacity-60">
            Process
          </p>
          <h2 className="text-7xl font-['Playfair_Display'] text-[#4a1d1d] leading-none">
            Hire <span className="text-[#b4647d] italic">Me</span>
          </h2>
        </div>

       
        <div className="w-full h-[350px] my-auto flex items-center justify-center relative [perspective:1500px] z-20">
          {steps.map((step, i) => {
            const distance = i - scrollProgress;
            
            let translateY = 0;
            let translateZ = 0;
            let rotateX = 0;
            let opacity = 1;

            if (distance > 0.1) {
              const stackFactor = Math.min(distance, 1);
              translateY = stackFactor * 8; 
              translateZ = stackFactor * -20; 
              opacity = Math.max(0, 1 - distance * 0.35);
            } else if (distance < -0.1) {
              translateY = distance * 260; 
              translateZ = Math.abs(distance) * 150; 
              rotateX = distance * 35; 
              opacity = Math.max(0, 1 + distance * 2.5); 
            } else {
              translateY = 0;
              translateZ = 0;
              rotateX = 0;
              opacity = 1;
            }

            return (
              <div 
                key={step.id} 
                className="absolute w-[540px] h-[350px] rounded-[2.5rem] bg-[#b4647d] border border-white/20 p-10 shadow-2xl flex flex-col justify-between pointer-events-none transition-all duration-100 ease-out"
                style={{
                  transform: `translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg)`,
                  opacity: opacity,
                  zIndex: Math.round(100 - i), 
                  transformStyle: 'preserve-3d',
                  visibility: Math.abs(distance) > 1.2 ? 'hidden' : 'visible'
                }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase">
                    {step.tag}
                  </span>
                  <span className="text-white/80 text-xl font-serif">✦✦</span>
                </div>

                <div className="text-center flex flex-col items-center w-full">
                  <span className="text-2xl font-['Playfair_Display'] text-white/90 italic mb-1">
                    {step.id}
                  </span>
                  <h3 className="text-5xl font-bold text-white tracking-tight leading-none mb-6 uppercase">
                    {step.title}
                  </h3>
                  
                  <div className="w-full space-y-2 opacity-30 px-4">
                    <div className="w-full border-b border-dotted border-white/70" />
                    <div className="w-full border-b border-dotted border-white/70" />
                    <div className="w-[50%] border-b border-dotted border-white/70 mx-auto" />
                  </div>
                </div>

                <div className="flex justify-between items-center text-[9px] font-black tracking-[0.4em] text-white/50 uppercase">
                  <span>Phase // HireMe</span>
                  <span>{step.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

        
        <div className="w-full h-8 pointer-events-none select-none" />

      </div>
    </div>
  );
}