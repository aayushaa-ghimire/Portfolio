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
    <div className="relative w-full bg-[#FFF5F8] py-10 overflow-hidden border-y border-[#b4647d]/10 z-[15]">
      <MarqueeComponent 
        gradient={false} 
        speed={50} 
        pauseOnHover={false}
        autoFill={true} 
      >
        {skills.map(function(skill, index) {
          return (
            <div key={index} className="flex items-center">
            
              <span 
                className="text-lg md:text-xl text-[#b4647d] tracking-[0.4em] uppercase px-16"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400 
                }}
              >
                {skill}
              </span>
              
              <span className="text-[#b4647d]/40 text-lg">✦</span>
            </div>
          );
        })}
      </MarqueeComponent>
    </div>
  );
}

export default SkillsMarquee;