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
    year: "2026", role: "Frontend Lead", company: "Vividify Solutions", 
    detail: "Architecting premium React systems with a desktop-first philosophy.",
    category: "Development"
  },
  { 
    year: "2025", role: "Virtual Assistant", company: "Maven Solutions", 
    detail: "Crafting architectural layouts with refined typography.",
    category: "Communication"
  }
];

export default function ExperienceSection() {
  const pinkTheme = "#b4647d";

  return (
    <section className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[#fce4ec] hide-scrollbar">
      {experiences.map((exp, i) => (
        <div key={i} className="h-screen w-full flex flex-col items-center justify-center snap-start relative">
          
          <div className="text-center mb-32 select-none pointer-events-none">
            <span className="text-[10px] tracking-[0.6em] text-[#b4647d] font-bold uppercase opacity-60">Portfolio</span>
            <h2 className="text-8xl font-['Playfair_Display'] font-bold text-[#334155] mt-4">
              Recent <span className="italic text-[#b4647d]">Works</span>
            </h2>
          </div>

          <Folder 
            size={2.5} 
            color={pinkTheme}
            items={[
              <div className="p-4 flex flex-col justify-between h-full bg-slate-50">
                 <span className="text-[6px] font-mono uppercase tracking-widest text-[#334155]/40">{exp.category}</span>
                 <h4 className="text-[9px] font-['Playfair_Display'] font-bold text-[#334155] leading-tight mb-2">{exp.role}</h4>
              </div>,
              <div className="p-4 flex flex-col justify-center items-center h-full text-center">
                 <p className="text-[8px] font-bold text-[#b4647d] mb-1">{exp.year}</p>
                 <p className="text-[7px] uppercase tracking-tighter text-[#334155] font-black">{exp.company}</p>
              </div>,
              <div className="p-5 flex flex-col h-full bg-white">
                <div className="w-4 h-[1px] bg-[#b4647d] mb-3" />
                <p className="text-[7px] text-[#334155]/80 font-['Poppins'] leading-relaxed font-normal">
                  {exp.detail}
                </p>
                <div className="mt-auto flex justify-end">
                  <span className="text-[5px] font-bold text-[#334155]/20 uppercase">0{i+1}</span>
                </div>
              </div>
            ]}
          />
          
          <div className="mt-24">
             <p className="font-['Poppins'] text-[10px] uppercase tracking-widest text-[#334155]/30">Click to expand</p>
          </div>
        </div>
      ))}
    </section>
  );
}