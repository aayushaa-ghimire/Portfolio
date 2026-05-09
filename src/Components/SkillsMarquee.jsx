import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeComponent = Marquee.default || Marquee;

function SkillsMarquee() {
  const skills = [
    "React.js", 
    "UI/UX Design", 
    "Tailwind CSS v4", 
    "JavaScript", 
    "Java",
    "OOP",
    "IntelliJ IDEA",
    "Vite"
  ];

  return (
    <div className="relative w-full bg-[#FFF5F8] py-8 overflow-hidden border-y border-[#D685A9]/10 z-[15]">
      <MarqueeComponent 
        gradient={false} 
        speed={60} 
        pauseOnHover={false}
        autoFill={true} 
      >
        {skills.map(function(skill, index) {
          return (
            <div key={index} className="flex items-center">
             
              <span 
                className="text-xl md:text-2xl  text-[#D685A9] tracking-[0.3em] uppercase px-12 "
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {skill}
              </span>
              
              <span className="text-[#D685A9]/30 text-xl">✦</span>
            </div>
          );
        })}
      </MarqueeComponent>
    </div>
  );
}

export default SkillsMarquee;