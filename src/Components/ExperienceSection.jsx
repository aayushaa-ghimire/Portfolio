// import React from "react";
// import { motion } from "framer-motion";
// import "./ExperienceSection.css";

// const experiences = [
//   { year: "'26", role: "Frontend Lead", company: "Tech Studio", detail: "Architecting premium UI systems with a desktop-first philosophy." },
//   { year: "'24", role: "UI/UX Designer", company: "Creative Co", detail: "Focusing on clean, architectural layouts and branding." },
//   { year: "'23", role: "Junior Developer", company: "Web Flow", detail: "Building responsive digital products with raw, simple code." },
// ];

// export default function ExperienceSection() {
//   return (
//     <section className="experience-viewport">
//       <div className="experience-header">
//         <span className="eyebrow">Professional Path</span>
//         <h2 className="section-title">Experience</h2>
//       </div>
      
//       {experiences.map((exp, i) => (
//         <div className="card-scene" key={i}>
//           <motion.div
//             className="folder-container"
//             initial="initial"
//             whileInView="animate"
//             // Adjusted viewport to ensure the "going down" animation triggers visibly
//             viewport={{ once: false, amount: 0.3, margin: "-10% 0px -10% 0px" }}
//           >
//             <div className="folder-shape" />
            
//             <motion.div 
//               className="inner-white-card" 
//               variants={popUpVariants}
//             >
//               <div className="card-inner-content">
//                 <div className="card-header-group">
//                   <span className="big-year">{exp.year}</span>
//                   <div className="aesthetic-dot" />
//                 </div>
                
//                 <div className="card-footer-group">
//                   <div className="role-meta">
//                     <h3>{exp.role}</h3>
//                     <p className="company-tag">{exp.company}</p>
//                   </div>
//                   <p className="experience-description">{exp.detail}</p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       ))}
//     </section>
//   );
// }

// const popUpVariants = {
//   initial: { 
//     y: "115%", 
//     opacity: 0, 
//     scale: 0.95 
//   },
//   animate: { 
//     y: "5%", 
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: "spring",
//       damping: 25,
//       stiffness: 70,
//       mass: 1
//     }
//   }
// };

import React from "react";
import { motion } from "framer-motion";
import "./ExperienceSection.css";

const experiences = [
  { year: "'26", role: "Frontend Lead", company: "Tech Studio", detail: "Architecting premium UI systems with a desktop-first philosophy." },
  { year: "'24", role: "UI/UX Designer", company: "Creative Co", detail: "Focusing on clean, architectural layouts and branding." }
];

export default function ExperienceSection() {
  return (
    <section className="experience-viewport">
      {/* Header updated to match your new "About Me" reference */}
      <div className="experience-header">
        <div className="header-decor">
          <div className="sparkle">✦</div>
          <div className="dot-small" />
          <div className="dot-smaller" />
        </div>
        <span className="eyebrow-text">Philosophy</span>
        <h2 className="main-title">About <span className="title-accent">Me</span></h2>
      </div>
      
      {experiences.map((exp, i) => (
        <div className="card-scene" key={i}>
          <motion.div
            className="folder-container"
            initial="initial"
            whileInView="animate"
            exit="initial"
            // increased amount to 0.6 so the exit happens sooner, making the "going back down" very visible
            viewport={{ once: false, amount: 0.6 }}
          >
            <div className="folder-shape" />
            
            <motion.div 
              className="inner-white-card" 
              variants={cardVariants}
            >
              <div className="card-inner-content">
                <div className="card-header-group">
                  <span className="big-year">{exp.year}</span>
                  <div className="aesthetic-bar" />
                </div>
                
                <div className="card-footer-group">
                  <div className="role-meta">
                    <h3>{exp.role}</h3>
                    <p className="company-tag">{exp.company}</p>
                  </div>
                  <p className="experience-description">{exp.detail}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}

const cardVariants = {
  initial: { 
    y: "110%", 
    opacity: 0, 
    rotate: -2,
    scale: 0.9 
  },
  animate: { 
    y: "8%", 
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15, // Lower damping = more "pop" and bounce
      stiffness: 100,
      mass: 0.8
    }
  }
};