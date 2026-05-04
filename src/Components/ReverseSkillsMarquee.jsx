import React from 'react';
import Marquee from "react-fast-marquee";

// Defensive check to handle the "got: object" error
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
    /* Matches the theme pink background and border */
    <div className="relative w-full bg-[#FFF5F8] py-6 overflow-hidden border-b border-[#D685A9]/20 z-[15]">
      <MarqueeComponent 
        gradient={false} 
        speed={80} 
        pauseOnHover={false}
        autoFill={true} 
        direction="right" /* This makes it move towards the right */
      >
        {secondarySkills.map(function(skill, index) {
          return (
            <div key={index} className="flex items-center">
              {/* Intense pink text with normal weight for clarity */}
              <span className="text-lg md:text-xl font-normal text-[#D685A9] tracking-[0.4em] uppercase px-16">
                {skill}
              </span>
              
              {/* Star separator */}
              <span className="text-[#D685A9]/40 text-xl">✦</span>
            </div>
          );
        })}
      </MarqueeComponent>
    </div>
  );
}

export default ReverseSkillsMarquee;