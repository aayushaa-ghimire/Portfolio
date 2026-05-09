// import React from 'react';
// import FallingText from './FallingText';

// function SkillsSection() {
//   return (
//     <section className="relative w-full h-screen bg-[#334155] overflow-hidden">
      
//       <div className="absolute top-10 left-10 pointer-events-none">
//         <span className="text-[#b4647d] text-[10px] tracking-[0.8em] uppercase opacity-30">
//           Interactive Skill Stack
//         </span>
//       </div>

//       <div className="absolute inset-0">
//         <FallingText />
//       </div>

//       <div className="absolute bottom-10 right-10 pointer-events-none text-right">
//         <p className="text-white/20 text-xs font-normal uppercase tracking-widest">
//           Grab and Toss to Explore
//         </p>
//       </div>

//     </section>
//   );
// }

// export default SkillsSection;



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