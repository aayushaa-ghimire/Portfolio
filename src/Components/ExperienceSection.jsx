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
    <section className="min-h-screen w-full bg-[#fce4ec] flex flex-col justify-between relative">
      
      {/* Reduced padding-top and padding-bottom to bring folders up */}
      <header className="pt-10 pb-35 text-center relative z-50">
        <span className="font-['Poppins'] text-[10px] tracking-[0.6em] uppercase text-[#b4647d] font-bold opacity-60">
          Experience
        </span>
        <h2 className="font-['Playfair_Display'] text-6xl font-bold text-[#334155] mt-4">
          Recent <span className="text-[#b4647d] italic">Works</span>
        </h2>
      </header>

      {/* Adjusted padding around folders for a tighter fit */}
      <div className="flex-1 flex items-center w-full">
        <div className="flex w-full snap-x snap-mandatory no-scrollbar px-[10vw]">
          {experiences.map((exp, i) => (
            <div className="min-w-full lg:min-w-[50%] flex items-center justify-center snap-center py-12" key={i}>
              <Folder 
                size={2.4} 
                color={pinkTheme}
                items={[
                  /* Card 1: Role Only */
                  <div className="p-4 flex flex-col items-center justify-center h-full bg-gradient-to-br from-white to-slate-50 border-b border-black/[0.03]">
                    <h4 className="text-[9px] font-['Poppins'] font-normal text-[#334155] tracking-tight text-center uppercase">
                      {exp.role}
                    </h4>
                  </div>,
                  
                  /* Card 2: Company Name Only */
                  <div className="p-4 flex flex-col items-center justify-center h-full bg-white shadow-[inset_0_0_20px_rgba(255,255,255,0.8)]">
                    <p className="text-[10px] font-['Playfair_Display'] italic text-[#b4647d] font-bold text-center">
                      {exp.company}
                    </p>
                  </div>,
                  
                  /* Card 3: Timeframe Only */
                  <div className="p-4 flex flex-col items-center justify-center h-full bg-[#fdfdfd] shadow-sm">
                    <span className="text-[7px] font-['Poppins'] font-medium text-[#334155]/40 tracking-widest uppercase">
                      {exp.year}
                    </span>
                  </div>
                ]}
              />
            </div>
          ))}
        </div>
      </div>

      <footer className="pb-16 pt-10 text-center relative z-50">
        <motion.a 
          href="/resume.pdf" 
          download 
          whileHover={{ scale: 1.05 }}
          className="inline-block font-['Poppins'] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b4647d] border border-[#b4647d] px-8 py-3 rounded-full hover:bg-[#b4647d] hover:text-white transition-colors bg-white/50 backdrop-blur-sm"
        >
          Download My Resume <span className="ml-2">→</span>
        </motion.a>
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}