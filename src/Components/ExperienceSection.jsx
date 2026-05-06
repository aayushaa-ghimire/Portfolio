import React from "react";
import { motion } from "framer-motion";
import "./ExperienceSection.css";

const experiences = [
  { year: "'26", role: "Frontend Lead", company: "Tech Studio", detail: "Architecting premium UI systems with a desktop-first philosophy." },
  { year: "'24", role: "UI/UX Designer", company: "Creative Co", detail: "Focusing on clean, architectural layouts and branding." },
  { year: "'23", role: "Junior Developer", company: "Web Flow", detail: "Building responsive digital products with raw, simple code." },
];

export default function ExperienceSection() {
  return (
    <section className="experience-viewport">
      <div className="experience-header">
        <span className="eyebrow">Professional Path</span>
        <h2 className="section-title">Experience</h2>
      </div>
      
      {experiences.map((exp, i) => (
        <div className="card-scene" key={i}>
          <motion.div
            className="folder-container"
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="folder-shape" />
            
            <motion.div 
              className="inner-white-card" 
              variants={popUpVariants}
            >
              <div className="card-inner-content">
                <div className="card-top">
                  {/* Using the navy tone from your hero typography */}
                  <span className="big-year">{exp.year}</span>
                  <div className="accent-line" />
                </div>
                <div className="card-bottom">
                  <h3>{exp.role}</h3>
                  <p className="company-name">{exp.company}</p>
                  <p className="description">{exp.detail}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}

const popUpVariants = {
  initial: { y: "110%", opacity: 0 },
  animate: { 
    y: "5%", 
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 90,
      delay: 0.1
    }
  }
};