import React from "react";
import { motion } from "framer-motion";
import Folder from "./Folder";

const experiences = [
  { 
    year: "Jan 2026 - April 2026", 
    role: ["Frontend", "Developer"], 
    company: ["Vividify", "Solutions"] 
  },
  { 
    year: "Feb 2025 - Nov 2025", 
    role: ["Virtual", "Assistant"], 
    company: ["Maven", "Solutions"] 
  }
];

export default function ExperienceSection() {
  return (
    <section className="w-full bg-[#fce4ec] py-20  ">
      <header 
      data-aos="fade"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false" className="text-center mb-10">
        <span className="font-['Poppins'] text-[10px] tracking-[0.6em] uppercase text-[#334155] font-bold opacity-60">
          My Experience
        </span>
        <h2 className="font-['Playfair_Display'] text-[#b4647d] text-5xl font-medium mt-2">Experience</h2>
      </header>

      {/* Added mt-24 to provide space for the popping-up cards */}
      <div 
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="5"
        data-aos-duration="600"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
        className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start  gap-12 mt-15 lg:mt-40 lg:mb-15 px-0 ">
        
        
      <div className="flex flex-row gap-12">
        {experiences.map((exp, i) => (
          <div key={i} className="md:scale-[1.8] md:ml-44 origin-left">
            <Folder 
              items={[
                // Role
                <div className="p-4 h-full flex flex-col items-start justify-center">
                  {exp.role.map((line, idx) => (
                    <h4 key={idx} className="text-[8px] uppercase text-[#334155f0] font-medium leading-relaxed text-center">
                      {line}
                    </h4>
                  ))}
                </div>,
                // Company
                <div className="p-4 h-full flex flex-col items-end justify-center">
                  {exp.company.map((line, idx) => (
                    <p key={idx} className="text-[9px] text-[#b4647d] leading-relaxed font-medium text-center">
                      {line}
                    </p>
                  ))}
                </div>,
                // Year
                <div className="p-3 h-full flex items-center justify-center">
                  <span className="text-[6px] font-bold uppercase tracking-widest text-gray-400">{exp.year}</span>
                </div>
              ]}
            />
          </div>
        ))}
      </div>
        <motion.a 
          href="/resume.pdf" 
          download
          whileHover={{ scale: 1.05, backgroundColor: "#b4647d", color: "#ffffff" }}
          className="flex items-center justify-center  text-[8px] uppercase tracking-[0.2em] text-[#b4647d] border border-[#b4647d]/30 px-6 py-3 lg:ml-30 rounded-full bg-white/40 backdrop-blur-md transition-colors"
        >
          Download My Resume <span className="ml-2">→</span>
        </motion.a>
      </div>
    </section>
  );
}

