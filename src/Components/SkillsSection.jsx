import React from 'react';
import FallingText from './FallingText';

function SkillsSection() {
  return (
    <section className="relative w-full h-screen bg-[#FFF5F8] overflow-hidden flex flex-col font-['Poppins']">
      
      <div className="absolute top-12 left-12 pointer-events-none z-20">
       
        
      </div>

      <div className="absolute inset-0 z-10">
        <FallingText />
      </div>

     

      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#b4647d] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}

export default SkillsSection;