import React, { useEffect, useRef, useState } from "react";
import "./HireMeStyles.css";

const steps = [
  { id: "01", title: "Discovery", tag: "PHASE // AUDIT", desc: "Strategic alignment on frontend architecture and project scope." },
  { id: "02", title: "UI Precision", tag: "PHASE // VISUAL", desc: "High-end agency aesthetics with refined typography and whitespace." },
  { id: "03", title: "Raw Logic", tag: "PHASE // DEV", desc: "Performant React and Java systems built with architectural precision." },
  { id: "04", title: "Final Delivery", tag: "PHASE // LIVE", desc: "Zero-bloat performance optimization and final deployment." },
];

export default function HireMeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef(null);
  const scrollItemsRef = useRef([]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    
    const handleSnapChange = (event) => {
      const index = scrollItemsRef.current.indexOf(event.snapTargetBlock);
      if (index !== -1) setActiveIndex(index);
    };

    scroller.addEventListener("scrollsnapchange", handleSnapChange);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(scrollItemsRef.current.indexOf(entry.target));
          }
        });
      },
      { root: scroller, threshold: 0.6 }
    );

    scrollItemsRef.current.forEach((item) => item && observer.observe(item));

    return () => {
      scroller.removeEventListener("scrollsnapchange", handleSnapChange);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#fff5f8] min-h-screen flex items-center justify-center font-['Poppins'] overflow-hidden">
      <main 
        className="relative w-full max-w-[1000px] h-[750px] perspective-[1500px] transform-style-3d"
        data-active-index={activeIndex}
      >
        <div className="card-stack absolute inset-0 transform-style-3d pointer-events-none">
          {steps.map((step, i) => (
            <div 
              key={step.id} 
              className={`card absolute inset-0 m-auto w-[550px] h-[350px] rounded-[2.5rem] bg-[#c498a5] border border-white/20 p-10 shadow-2xl flex flex-col justify-between card-${i}`}
            >
              {/* Top Bar */}
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase">
                  {step.tag}
                </span>
                <span className="text-white/80 text-xl font-serif italic">✦</span>
              </div>

              {/* Main Content */}
              <div className="text-center flex flex-col items-center">
                <h2 className="text-6xl font-['Playfair_Display'] text-white leading-none mb-2">
                  Hire <span className="italic opacity-80">Me</span>
                </h2>
                <span className="text-3xl font-['Playfair_Display'] text-white/90 italic mb-1">{step.id}</span>
                <h3 className="text-5xl font-['Poppins'] font-bold text-white tracking-tight leading-none mb-6">
                  {step.title}
                </h3>
                
                {/* Dotted Line Aesthetic */}
                <div className="w-full space-y-3 opacity-40">
                  <div className="w-full border-b border-dotted border-white" />
                  <div className="w-full border-b border-dotted border-white" />
                  <div className="w-full border-b border-dotted border-white" />
                  <div className="w-[70%] border-b border-dotted border-white" />
                </div>
              </div>

              {/* Footer Bar */}
              <div className="flex justify-between items-center text-[9px] font-black tracking-widest text-white/50 uppercase">
                <span>Phase // HireMe</span>
                <span>{step.tag}</span>
              </div>
            </div>
          ))}
        </div>

        <div ref={scrollerRef} className="scroller w-full h-full overflow-y-auto snap-y snap-mandatory no-scrollbar relative z-30">
          {steps.map((_, i) => (
            <div 
              key={i} 
              ref={(el) => (scrollItemsRef.current[i] = el)} 
              className="scroll-item w-full h-full snap-start" 
            />
          ))}
        </div>
      </main>
    </div>
  );
}