// // // // // import React from "react";
// // // // // import { motion } from "framer-motion";
// // // // // import "./ExperienceSection.css";

// // // // // const experiences = [
// // // // //   { 
// // // // //     year: "'2026", 
// // // // //     role: "Frontend Developer", 
// // // // //     company: "Vividify Solutions", 
// // // // //     detail: " Architecting premium UI systems with a desktop-first philosophy. Focused on high-end agency aesthetics and modular component architecture.",
// // // // //     category: "Web-development"
// // // // //   },
// // // // //   { 
// // // // //     year: "'2025", 
// // // // //     role: "Virtual Assistant", 
// // // // //     company: "Maven solutions", 
// // // // //     detail: "Crafting architectural layouts with refined typography and glassmorphism. Specializing in brand identity and user-centric digital experiences.",
// // // // //     category: "Communication"
// // // // //   }
// // // // // ];

// // // // // export default function ExperienceSection() {
// // // // //   const popVariants = {
// // // // //     initial: { 
// // // // //       y: "100%", 
// // // // //       opacity: 0 
// // // // //     },
// // // // //     animate: { 
// // // // //       y: "12%", 
// // // // //       opacity: 1,
// // // // //       transition: {
// // // // //         type: "spring",
// // // // //         damping: 22,
// // // // //         stiffness: 70
// // // // //       }
// // // // //     },
// // // // //     // SLOW EXIT LOGIC
// // // // //     exit: { 
// // // // //       y: "100%", 
// // // // //       opacity: 0,
// // // // //       transition: {
// // // // //         type: "spring",
// // // // //         damping: 45,   // Higher damping = less bounce, more control
// // // // //         stiffness: 25,  // Lower stiffness = much slower movement
// // // // //         mass: 1.2
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <section className="experience-viewport">
// // // // //       <div className="experience-header">
// // // // //         <span className="eyebrow">Experience</span>
// // // // //         <h2 className="section-title">
// // // // //           <span className="text-navy">Recent</span> <span className="text-mauve">Works</span>
// // // // //         </h2>
// // // // //       </div>
      
// // // // //       {experiences.map((exp, i) => (
// // // // //         <div className="card-scene" key={i}>
// // // // //           <motion.div
// // // // //             className="folder-container"
// // // // //             initial="initial"
// // // // //             whileInView="animate"
// // // // //             exit="exit"
// // // // //             viewport={{ once: false, amount: 0.7 }}
// // // // //           >
// // // // //             <div className="folder-shape" />
            
// // // // //             <motion.div 
// // // // //               className="inner-white-card" 
// // // // //               variants={popVariants}
// // // // //             >
// // // // //               <div className="card-top">
// // // // //                 <span className="category-tag">{exp.category}</span>
// // // // //                 <span className="big-year">{exp.year}</span>
// // // // //               </div>
              
// // // // //               <div className="card-content-area">
// // // // //                 <div className="aesthetic-line" />
// // // // //                 <h3>{exp.role}</h3>
// // // // //                 <p className="company-label">{exp.company}</p>
// // // // //                 <p className="description-text">{exp.detail}</p>
// // // // //               </div>
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         </div>
// // // // //       ))}
// // // // //     </section>
// // // // //   );
// // // // // }



// // // // import React from "react";
// // // // import { motion } from "framer-motion";
// // // // import "./ExperienceSection.css";

// // // // const experiences = [
// // // //   { 
// // // //     year: "'2026", 
// // // //     role: "Frontend Developer", 
// // // //     company: "Vividify Solutions", 
// // // //     detail: "Architecting premium UI systems with a desktop-first philosophy. Focused on high-end agency aesthetics and modular component architecture.",
// // // //     category: "Web-development"
// // // //   },
// // // //   { 
// // // //     year: "'2025", 
// // // //     role: "Virtual Assistant", 
// // // //     company: "Maven solutions", 
// // // //     detail: "Crafting architectural layouts with refined typography and glassmorphism. Specializing in brand identity and user-centric digital experiences.",
// // // //     category: "Communication"
// // // //   }
// // // // ];

// // // // export default function ExperienceSection() {
// // // //   const popVariants = {
// // // //     initial: { y: "100%", opacity: 0 },
// // // //     animate: { 
// // // //       y: "12%", 
// // // //       opacity: 1,
// // // //       transition: { type: "spring", damping: 22, stiffness: 70 }
// // // //     },
// // // //     exit: { 
// // // //       y: "100%", 
// // // //       opacity: 0,
// // // //       transition: { type: "spring", damping: 45, stiffness: 25, mass: 1.2 }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section className="experience-viewport">
// // // //       <div className="experience-header">
// // // //         <span className="eyebrow">EXPERIENCE</span>
// // // //         <h2 className="section-title">
// // // //           <span className="text-slate">Recent</span> <span className="text-mauve">Works</span>
// // // //         </h2>
// // // //       </div>
      
// // // //       {experiences.map((exp, i) => (
// // // //         <div className="card-scene" key={i}>
// // // //           <motion.div
// // // //             className="folder-container"
// // // //             initial="initial"
// // // //             whileInView="animate"
// // // //             exit="exit"
// // // //             viewport={{ once: false, amount: 0.7 }}
// // // //           >
// // // //             <div className="folder-shape" />
            
// // // //             <motion.div 
// // // //               className="inner-white-card" 
// // // //               variants={popVariants}
// // // //             >
// // // //               <div className="card-top">
// // // //                 <span className="category-tag">{exp.category}</span>
// // // //                 {/* Updated Year Typography */}
// // // //                 <span className="big-year">{exp.year}</span>
// // // //               </div>
              
// // // //               <div className="card-content-area">
// // // //                 <div className="aesthetic-line" />
// // // //                 {/* Updated Role Typography */}
// // // //                 <h3 className="role-title">{exp.role}</h3>
// // // //                 <p className="company-label">{exp.company}</p>
// // // //                 <p className="description-text">{exp.detail}</p>
// // // //               </div>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         </div>
// // // //       ))}
// // // //     </section>
// // // //   );
// // // // }

// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import "./ExperienceSection.css";

// // // const experiences = [
// // //   { 
// // //     year: "'2026", 
// // //     role: "Frontend Developer", 
// // //     company: "Vividify Solutions", 
// // //     detail: "Architecting premium UI systems with a desktop-first philosophy. Focused on high-end agency aesthetics and modular component architecture.",
// // //     category: "Web-development"
// // //   },
// // //   { 
// // //     year: "'2025", 
// // //     role: "Virtual Assistant", 
// // //     company: "Maven solutions", 
// // //     detail: "Crafting architectural layouts with refined typography and glassmorphism. Specializing in brand identity and user-centric digital experiences.",
// // //     category: "Communication"
// // //   }
// // // ];

// // // export default function ExperienceSection() {
// // //   const popVariants = {
// // //     initial: { 
// // //       y: "100%", 
// // //       opacity: 0 
// // //     },
// // //     animate: { 
// // //       y: "12%", 
// // //       opacity: 1,
// // //       transition: {
// // //         type: "spring",
// // //         damping: 28,   // Increased for a smoother, non-bouncy settle
// // //         stiffness: 40,  // Lowered for a more elegant, slower glide
// // //         mass: 1,
// // //         restDelta: 0.001
// // //       }
// // //     },
// // //     exit: { 
// // //       y: "100%", 
// // //       opacity: 0,
// // //       transition: {
// // //         type: "spring",
// // //         damping: 40,
// // //         stiffness: 30,
// // //         velocity: 2
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <section className="experience-viewport">
// // //       <div className="experience-header">
// // //         <span className="eyebrow">Experience</span>
// // //         <h2 className="section-title">
// // //           {/* Colors locked to brand palette */}
// // //           <span className="text-navy">Recent</span> <span className="text-mauve">Works</span>
// // //         </h2>
// // //       </div>
      
// // //       {experiences.map((exp, i) => (
// // //         <div className="card-scene" key={i}>
// // //           <motion.div
// // //             className="folder-container"
// // //             initial="initial"
// // //             whileInView="animate"
// // //             exit="exit"
// // //             viewport={{ once: false, amount: 0.6 }}
// // //           >
// // //             <div className="folder-shape" />
            
// // //             <motion.div 
// // //               className="inner-white-card" 
// // //               variants={popVariants}
// // //             >
// // //               <div className="card-top">
// // //                 <span className="category-tag">{exp.category}</span>
// // //                 <span className="big-year">{exp.year}</span>
// // //               </div>
              
// // //               <div className="card-content-area">
// // //                 <div className="aesthetic-line" />
// // //                 <h3>{exp.role}</h3>
// // //                 <p className="company-label">{exp.company}</p>
// // //                 <p className="description-text">{exp.detail}</p>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>
// // //       ))}
// // //     </section>
// // //   );
// // // }


// // import React from "react";
// // import { motion } from "framer-motion";
// // import "./ExperienceSection.css";

// // const experiences = [
// //   { 
// //     year: "'2026", 
// //     role: "Frontend Developer", 
// //     company: "Vividify Solutions", 
// //     detail: "Architecting premium UI systems with a desktop-first philosophy. Focused on high-end agency aesthetics.",
// //     category: "Web-development"
// //   },
// //   { 
// //     year: "'2025", 
// //     role: "Virtual Assistant", 
// //     company: "Maven solutions", 
// //     detail: "Crafting architectural layouts with refined typography and glassmorphism. Specializing in brand identity.",
// //     category: "Communication"
// //   }
// // ];

// // export default function ExperienceSection() {
// //   const popVariants = {
// //     initial: { y: "100%", opacity: 0 },
// //     animate: { 
// //       y: "10%", 
// //       opacity: 1,
// //       transition: {
// //         type: "spring",
// //         damping: 25,   // Balanced damping
// //         stiffness: 55,  // Mid-range stiffness for "just right" speed
// //         mass: 0.8
// //       }
// //     },
// //     exit: { 
// //       y: "100%", 
// //       opacity: 0,
// //       transition: { duration: 0.4 }
// //     }
// //   };

// //   return (
// //     <section className="experience-viewport">
// //       <div className="experience-header">
// //         <span className="eyebrow">Experience</span>
// //         <h2 className="section-title">
// //           <span className="text-navy">Recent</span> <span className="text-mauve">Works</span>
// //         </h2>
// //       </div>
      
// //       {experiences.map((exp, i) => (
// //         <div className="card-scene" key={i}>
// //           <motion.div
// //             className="folder-container"
// //             initial="initial"
// //             whileInView="animate"
// //             exit="exit"
// //             viewport={{ once: false, amount: 0.8 }}
// //           >
// //             <div className="folder-shape" />
            
// //             <motion.div 
// //               className="inner-white-card" 
// //               variants={popVariants}
// //             >
// //               <div className="card-top">
// //                 <span className="category-tag">{exp.category}</span>
// //                 <span className="big-year">{exp.year}</span>
// //               </div>
              
// //               <div className="card-content-area">
// //                 <div className="aesthetic-line" />
// //                 <h3>{exp.role}</h3>
// //                 <p className="company-label">{exp.company}</p>
// //                 <p className="description-text">{exp.detail}</p>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       ))}
// //     </section>
// //   );
// // }


// import React from "react";
// import { motion } from "framer-motion";
// import "./ExperienceSection.css";

// const experiences = [
//   { 
//     year: "'2026", 
//     role: "Frontend Developer", 
//     company: "Vividify Solutions", 
//     detail: "Architecting premium UI systems with a desktop-first philosophy. Focused on high-end agency aesthetics.",
//     category: "Web-development"
//   },
//   { 
//     year: "'2025", 
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
//       y: "10%", 
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

//       {/* Resume Download Section */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.2 }}
//         className="resume-footer"
//       >
//         <a href="/path-to-your-resume.pdf" download className="resume-btn">
//           Download My Resume
//           <span className="btn-arrow">→</span>
//         </a>
//       </motion.div>
//     </section>
//   );
// }



import React from "react";
import { motion } from "framer-motion";
import "./ExperienceSection.css";

const experiences = [
  { 
    year: "'Jan 2026 - April 2026", 
    role: "Frontend Developer", 
    company: "Vividify Solutions", 
    detail: "Architecting premium UI systems with a desktop-first philosophy. Focused on high-end agency aesthetics.",
    category: "Web-development"
  },
  { 
    year: "'Feb 2025 - Nov 2025", 
    role: "Virtual Assistant", 
    company: "Maven solutions", 
    detail: "Crafting architectural layouts with refined typography and glassmorphism. Specializing in brand identity.",
    category: "Communication"
  }
];

export default function ExperienceSection() {
  const popVariants = {
    initial: { y: "100%", opacity: 0 },
    animate: { 
      y: "8%", 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 55,
        mass: 0.8
      }
    },
    exit: { 
      y: "100%", 
      opacity: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="experience-viewport">
      <div className="experience-header">
        <span className="eyebrow">Experience</span>
        <h2 className="section-title">
          <span className="text-navy">Recent</span> <span className="text-mauve">Works</span>
        </h2>
      </div>
      
      <div className="experience-list">
        {experiences.map((exp, i) => (
          <div className="card-scene" key={i}>
            <motion.div
              className="folder-container"
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{ once: false, amount: 0.8 }}
            >
              <div className="folder-shape" />
              
              <motion.div 
                className="inner-white-card" 
                variants={popVariants}
              >
                <div className="card-top">
                  <span className="category-tag">{exp.category}</span>
                  <span className="big-year">{exp.year}</span>
                </div>
                
                <div className="card-content-area">
                  <div className="aesthetic-line" />
                  <h3>{exp.role}</h3>
                  <p className="company-label">{exp.company}</p>
                  <p className="description-text">{exp.detail}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="resume-footer"
      >
        <a href="/resume.pdf" download className="resume-btn">
          Download My Resume <span className="btn-arrow">→</span>
        </a>
      </motion.div>
    </section>
  );
}