


import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeComponent = Marquee.default || Marquee;

function ReverseSkillsMarquee() {
  const secondarySkills = [
    "Figma", 
    "PostgreSQL", 
    "Spring Boot", 
    "Git / GitHub", 
    "Reflection API",
    "Generics",
    "VS Code",
    "Responsive Design"
  ];

  return (
    <div className="relative w-full bg-[#FFF5F8] py-10 overflow-hidden border-b border-[#b4647d]/10 z-[15]">
      <MarqueeComponent 
        gradient={false} 
        speed={50} 
        pauseOnHover={false}
        autoFill={true} 
        direction="right"
      >
        {secondarySkills.map(function(skill, index) {
          return (
            <div key={index} className="flex items-center">
              {/* 
                  Typography Adjustments:
                  - Color matched to #b4647d 
                  - Font weight normal (400) for clarity
                  - Playfair Display without forced italics per your project titles
              */}
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

export default ReverseSkillsMarquee;