import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeComponent = Marquee.default || Marquee;

function SkillsMarquee() {
  const skills = [
   "React.js", 
    "Javascript", 
    "Typescript", 
    "Tailwind CSS",  
    "HTML",
    "CSS",
    "Redux",
    "My SQL",
    "Git / Github"
  ];

  return (
    <div className="relative w-full bg-[#FFF5F8] py-5 overflow-hidden border-y border-[#b4647d]/10 z-15">
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
                className="text-md md:text-lg text-[#b4647d] tracking-[0.2em]  px-16"
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