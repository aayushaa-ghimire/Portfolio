import React from 'react';
import Marquee from "react-fast-marquee";

// Defensive check to handle the "got: object" error
const MarqueeComponent = Marquee.default || Marquee;

function SkillsMarquee() {
  const skills = [
    "React.js", 
    "UI/UX Design", 
    "Tailwind CSS v4", 
    "JavaScript", 
    "Bootstrap",
    "Redux",
    "TypeScript",
    "HTML/CSS"
  ];

  return (
    <div className="relative w-full bg-[#334155] py-4 overflow-hidden border-y border-[#b4647d]/10 z-[15]">
      <MarqueeComponent 
        gradient={false} 
        speed={100} // Faster speed for better energy
        pauseOnHover={true}
        autoFill={true} 
      >
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            {/* Reduced text size (text-xl/text-2xl) and increased tracking */}
            <span className="text-xl md:text-2xl font-normal text-[#fce4ec] tracking-[0.3em] uppercase px-12">
              {skill}
            </span>
            {/* Subtle separator using your theme pink */}
            <span className="text-[#b4647d]/40 text-xl font-light">/</span>
          </div>
        ))}
      </MarqueeComponent>
    </div>
  );
}

export default SkillsMarquee;