import React from 'react';
import FallingText from './FallingText';

function SkillsSection() {
  return (
    
    <section className="relative w-full min-h-screen bg-[#FFF5F8] py-20 md:py-40 flex flex-col font-['Poppins'] ">
      
      <div className="absolute top-8 left-8 md:top-12 md:left-12 pointer-events-none z-20">
      </div>
      
      <div className="absolute inset-0 z-10">
        <FallingText />
      </div>
      
      <div className="absolute -bottom-16 -left-16 md:-bottom-24 md:-left-24 w-64 h-64 md:w-96 md:h-96 bg-[#b4647d] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}

export default SkillsSection;