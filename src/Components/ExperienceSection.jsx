// import React from "react";
// import { motion } from "framer-motion";
// import "./ExperienceSection.css";

// const experiences = [
//   { 
//     year: "'Jan 2026 - April 2026", 
//     role: "Frontend Developer", 
//     company: "Vividify Solutions", 
//     detail: "Architecting premium UI systems with a desktop-first philosophy. Focused on high-end agency aesthetics.",
//     category: "Web-development"
//   },
//   { 
//     year: "'Feb 2025 - Nov 2025", 
//     role: "Virtual Assistant", 
//     company: "Maven solutions", 
//     detail: "Crafting architectural layouts with refined typography and glassmorphism. Specializing in brand identity.",
//     category: "Communication"
//   }
// ];

// export default function ExperienceSection() {
//   const popVariants = {
//     initial: { y: "100%", opacity: 0 },
//     animate: { 
//       y: "8%", 
//       opacity: 1,
//       transition: {
//         type: "spring",
//         damping: 25,
//         stiffness: 55,
//         mass: 0.8
//       }
//     },
//     exit: { 
//       y: "100%", 
//       opacity: 0,
//       transition: { duration: 0.4 }
//     }
//   };

//   return (
//     <section className="experience-viewport">
//       <div className="experience-header">
//         <span className="eyebrow">Experience</span>
//         <h2 className="section-title">
//           <span className="text-navy">Recent</span> <span className="text-mauve">Works</span>
//         </h2>
//       </div>
      
//       <div className="experience-list">
//         {experiences.map((exp, i) => (
//           <div className="card-scene" key={i}>
//             <motion.div
//               className="folder-container"
//               initial="initial"
//               whileInView="animate"
//               exit="exit"
//               viewport={{ once: false, amount: 0.8 }}
//             >
//               <div className="folder-shape" />
              
//               <motion.div 
//                 className="inner-white-card" 
//                 variants={popVariants}
//               >
//                 <div className="card-top">
//                   <span className="category-tag">{exp.category}</span>
//                   <span className="big-year">{exp.year}</span>
//                 </div>
                
//                 <div className="card-content-area">
//                   <div className="aesthetic-line" />
//                   <h3>{exp.role}</h3>
//                   <p className="company-label">{exp.company}</p>
//                   <p className="description-text">{exp.detail}</p>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         ))}
//       </div>

//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="resume-footer"
//       >
//         <a href="/resume.pdf" download className="resume-btn">
//           Download My Resume <span className="btn-arrow">→</span>
//         </a>
//       </motion.div>

//     </section>
//   );
// }

import React from "react";
import Folder from "./Folder";

const experiences = [
  { 
    role: "Frontend Developer", 
    company: "Vividify Solutions", 
    duration: "Jan 2026 - April 2026",
    details: "Architecting premium React systems with a desktop-first philosophy."
  },
  { 
    role: "Virtual Assistant", 
    company: "Maven Solutions", 
    duration: "Feb 2025 - Nov 2025",
    details: "Crafting architectural layouts with refined typography."
  }
];

export default function ExperienceSection() {
  const pinkTheme = "#b4647d";

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section className="h-screen bg-[#fce4ec] relative overflow-hidden flex flex-col">
        {/* Static Header */}
        <div className="pt-20 pb-10 text-center z-10">
          <span className="text-[10px] tracking-[0.6em] text-[#b4647d] font-bold uppercase opacity-60">Career Path</span>
          <h2 className="text-7xl font-['Playfair_Display'] font-bold text-[#334155] mt-4">
            Recent <span className="italic text-[#b4647d]">Works</span>
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex-1 overflow-x-scroll snap-x snap-mandatory no-scrollbar flex items-center px-[10vw]">
          {experiences.map((exp, i) => (
            <div key={i} className="min-w-full lg:min-w-[50vw] h-full flex items-center justify-center snap-center">
              <Folder 
                size={2.8} 
                color={pinkTheme}
                items={[
                  // Paper 1: Role
                  <div className="p-3 flex flex-col items-center justify-center h-full bg-slate-50">
                     <h4 className="text-[7px] font-['Poppins'] font-normal text-[#334155] text-center tracking-tight leading-tight">{exp.role}</h4>
                  </div>,
                  // Paper 2: Company
                  <div className="p-3 flex flex-col items-center justify-center h-full">
                     <p className="text-[7px] font-['Playfair_Display'] italic text-[#b4647d] font-bold text-center">{exp.company}</p>
                  </div>,
                  // Paper 3: Full Detailed Card
                  <div className="p-4 flex flex-col justify-between h-full bg-white font-['Poppins']">
                    <div className="flex justify-between items-start border-b border-black/[0.03] pb-2">
                      <h4 className="text-[8px] font-bold text-[#334155] leading-none">{exp.role}</h4>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#b4647d]" />
                    </div>
                    
                    <div className="text-center py-2">
                      <p className="text-[6px] font-medium text-[#334155] uppercase tracking-widest">{exp.company}</p>
                    </div>
                    
                    <div className="flex justify-between items-end border-t border-black/[0.03] pt-2">
                      <p className="text-[5px] text-[#334155]/40 font-mono tracking-tighter uppercase">{exp.duration}</p>
                      <span className="text-[5px] font-bold text-[#b4647d]/30">0{i+1}</span>
                    </div>
                  </div>
                ]}
              />
            </div>
          ))}
        </div>

        {/* Horizontal Indicator */}
        <div className="pb-16 text-center">
           <p className="font-['Poppins'] text-[10px] uppercase tracking-[0.4em] text-[#b4647d] font-bold animate-pulse">
             Swipe or Scroll Horizontally
           </p>
        </div>
      </section>
    </>
  );
}