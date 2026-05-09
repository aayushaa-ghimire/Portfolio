// import React from 'react';
// import Marquee from "react-fast-marquee";

// // Defensive check to handle the "got: object" error
// const MarqueeComponent = Marquee.default || Marquee;

// function ReverseSkillsMarquee() {
//   const secondarySkills = [
//     "Figma", 
//     "PostgreSQL", 
//     "Spring Boot", 
//     "Git / GitHub", 
//     "Reflection API",
//     "Generics",
//     "VS Code",
//     "Responsive Design"
//   ];

//   return (
//     /* Matches the theme pink background and border */
//     <div className="relative w-full bg-[#FFF5F8] py-6 overflow-hidden border-b border-[#D685A9]/20 z-[15]">
//       <MarqueeComponent 
//         gradient={false} 
//         speed={80} 
//         pauseOnHover={false}
//         autoFill={true} 
//         direction="right" /* This makes it move towards the right */
//       >
//         {secondarySkills.map(function(skill, index) {
//           return (
//             <div key={index} className="flex items-center">
//               {/* Intense pink text with normal weight for clarity */}
//               <span className="text-lg md:text-xl font-normal text-[#D685A9] tracking-[0.4em] uppercase px-16">
//                 {skill}
//               </span>
              
//               {/* Star separator */}
//               <span className="text-[#D685A9]/40 text-xl">✦</span>
//             </div>
//           );
//         })}
//       </MarqueeComponent>
//     </div>
//   );
// }

// export default ReverseSkillsMarquee;

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
    /* Background and padding matched to the main marquee for perfect symmetry */
    <div className="relative w-full bg-[#FFF5F8] py-8 overflow-hidden border-b border-[#D685A9]/10 z-[15]">
      <MarqueeComponent 
        gradient={false} 
        speed={60} 
        pauseOnHover={false}
        autoFill={true} 
        direction="right" /* Reverse direction maintained */
      >
        {secondarySkills.map(function(skill, index) {
          return (
            <div key={index} className="flex items-center">
              {/* 
                  Typography matched exactly:
                  - Playfair Display Italic
                  - #D685A9 color
                  - Refined 0.3em tracking
              */}
              <span 
                className="text-xl md:text-2xl font-medium text-[#D685A9] tracking-[0.3em] uppercase px-12 italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {skill}
              </span>
              
              {/* Star separator matched */}
              <span className="text-[#D685A9]/30 text-2xl">✦</span>
            </div>
          );
        })}
      </MarqueeComponent>
    </div>
  );
}

export default ReverseSkillsMarquee;