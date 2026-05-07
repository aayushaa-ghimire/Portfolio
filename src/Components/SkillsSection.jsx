import React from 'react';
import FallingText from './FallingText';

function SkillsSection() {
  return (
    <section className="relative w-full h-screen bg-[#334155] overflow-hidden">
      
      <div className="absolute top-10 left-10 pointer-events-none">
        <span className="text-[#b4647d] text-[10px] tracking-[0.8em] uppercase opacity-30">
          Interactive Skill Stack
        </span>
      </div>

      <div className="absolute inset-0">
        <FallingText />
      </div>

      <div className="absolute bottom-10 right-10 pointer-events-none text-right">
        <p className="text-white/20 text-xs font-normal uppercase tracking-widest">
          Grab and Toss to Explore
        </p>
      </div>

    </section>
  );
}

export default SkillsSection;