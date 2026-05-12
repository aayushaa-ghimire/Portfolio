

import React from "react";
import { motion } from "framer-motion";
import Folder from "./Folder";

const experiences = [
  { 
    year: "Jan 2026 - April 2026", 
    role: "Frontend Developer", 
    company: "Vividify Solutions", 
    category: "Web-development"
  },
  { 
    year: "Feb 2025 - Nov 2025", 
    role: "Virtual Assistant", 
    company: "Maven solutions", 
    category: "Communication"
  }
];

export default function ExperienceSection() {
  const pinkTheme = "#b4647d";

  return (
    <section className="min-h-screen w-full bg-[#fce4ec] pb-30 flex flex-col justify-between relative overflow-hidden">
      
      <header  
      
     className="pt-15 pb-40 text-center relative z-50">
        <span className="font-['Poppins'] text-[10px] tracking-[0.6em] uppercase text-[#334155] font-bold opacity-60">
          Recent Works
        </span>
        <h2 className="font-['Playfair_Display'] text-[#b4647d] text-6xl font-medium mt-4">
          Experience 
        </h2>
      </header>

     
      <div  
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-delay="10"
      data-aos-duration="700"
      data-aos-easing="ease-in"
      data-aos-mirror="true"
      data-aos-once="false"
       className="flex-1 flex flex-row items-center justify-center w-full px-[5vw] gap-40">
        
        {experiences.map((exp, i) => (
          <div className="flex items-center justify-center py-12" key={i}>
            <Folder 
              className="ml-35 "
              size={2.4} 
              color={pinkTheme}
              items={[
                <div className="p-4 flex flex-col items-center justify-center h-full bg-gradient-to-br from-white to-slate-50 border-b border-black/[0.03]">
                  <h4 className="text-[9px] font-['Poppins'] font-normal text-[#334155] tracking-tight text-center uppercase">
                    {exp.role}
                  </h4>
                </div>,
                
                <div className="p-4 flex flex-col items-center justify-center h-full bg-white shadow-[inset_0_0_20px_rgba(255,255,255,0.8)]">
                  <p className="text-[10px] font-['Playfair_Display'] italic text-[#b4647d] font-bold text-center">
                    {exp.company}
                  </p>
                </div>,
                
                <div className="p-4 flex flex-col items-center justify-center h-full bg-[#fdfdfd] shadow-sm">
                  <span className="text-[7px] font-['Poppins'] font-normal text-[#334155]/40 tracking-widest uppercase">
                    {exp.year}
                  </span>
                </div>
              ]}
            />
          </div>
        ))}

        <div className="relative z-50">
          <motion.a 
            href="/resume.pdf" 
            download 
            whileHover={{ scale: 1.05 }}
            className="inline-block font-['Poppins'] text-[10px] font-normal uppercase tracking-[0.2em] text-[#b4647d] border border-[#b4647d]/30 px-8 py-4 rounded-full hover:bg-[#b4647d] hover:text-white transition-colors bg-white/40 backdrop-blur-md shadow-sm"
          >
            Download My Resume <span className="ml-2">→</span>
          </motion.a>
        </div>
      </div>

      <footer className="pb-16" />

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

