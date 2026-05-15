import React, { useEffect, useRef, useState } from "react";
import "./HireMeStyles.css";

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
    // Calculate how far we've scrolled in units of "screens"
    setScrollProgress(scrollTop / clientHeight);
  };

  return (
    <section className="bg-[#fff5f8] h-screen w-full relative font-['Poppins']">
      {/* Full-screen Scroller */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="absolute inset-0 overflow-y-auto snap-y snap-mandatory no-scrollbar z-50"
      >
        {steps.map((_, i) => (
          <div key={i} className="w-full h-screen snap-start" />
        ))}
      </div>

      {/* Visual Header */}
      <div className=" top-10 left-0 w-full text-center z-10 pointer-events-none">
        <p className="text-[10px] tracking-[1em] text-[#b4647d] font-bold uppercase mb-2 opacity-60">Process</p>
        <h2 className="text-7xl font-['Playfair_Display'] text-[#4a1d1d]">
          Hire <span className="text-[#b4647d] italic">Me</span>
        </h2>
      </div>

      {/* Centered Card Viewport */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[600px] h-[400px] perspective-[1500px] transform-style-3d">
          {steps.map((step, i) => {
            // Distance from the "active" center (0 is perfectly centered)
            const distance = i - scrollProgress;
            const absDistance = Math.abs(distance);
            
            // The "Fly Out" Logic: Card pops out as it approaches the center
            const translateY = distance * 20; // Slight vertical stack
            const translateZ = absDistance < 0.5 ? (1 - absDistance * 2) * 200 : 0;
            const rotateX = absDistance < 0.5 ? distance * -40 : 0;
            const opacity = 1 - absDistance * 0.8;

            return (
              <div 
                key={step.id} 
                className="card absolute inset-0 m-auto w-[520px] h-[340px] rounded-[2.5rem] bg-[#b4647d] border border-white/20 p-10 shadow-2xl flex flex-col justify-between"
                style={{
                  transform: `translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg)`,
                  opacity: opacity,
                  zIndex: Math.round(10 - absDistance),
                  display: absDistance > 1.5 ? 'none' : 'flex' // Performance optimization
                }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase">{step.tag}</span>
                  <span className="text-white/80 text-xl font-serif">✦✦</span>
                </div>

                <div className="text-center flex flex-col items-center">
                  <span className="text-2xl font-['Playfair_Display'] text-white/90 italic">{step.id}</span>
                  <h3 className="text-5xl font-bold text-white tracking-tight leading-none mb-6 uppercase">
                    {step.title}
                  </h3>
                  
                  {/* Dotted lines from reference image */}
                  <div className="w-full space-y-2 opacity-30">
                    <div className="w-full border-b border-dotted border-white" />
                    <div className="w-full border-b border-dotted border-white" />
                    <div className="w-[60%] border-b border-dotted border-white mx-auto" />
                  </div>
                </div>

                <div className="flex justify-between items-center text-[9px] font-black tracking-[0.4em] text-white/50 uppercase">
                  <span>PHASE // HIREME</span>
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