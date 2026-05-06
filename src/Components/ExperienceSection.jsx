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
      <div className="experience-header">
        <div className="header-visuals">
          <span className="sparkle-icon">✦</span>
          <div className="accent-dots" />
        </div>
        <span className="eyebrow">Experience</span>
        <h2 className="section-title">
          <span className="text-navy">Recent</span> <span className="text-mauve">Works</span>
        </h2>
      </div>
      
      {experiences.map((exp, i) => (
        <div className="card-scene" key={i}>
          <motion.div
            className="folder-container"
            initial="initial"
            whileInView="animate"
            exit="initial"
            viewport={{ once: false, amount: 0.8, margin: "-5% 0px -5% 0px" }}
          >
            <div className="folder-shape" />
            
            <motion.div 
              className="inner-white-card" 
              variants={popVariants}
            >
              <div className="card-inner-content">
                <div className="card-top">
                  <span className="big-year">{exp.year}</span>
                  <div className="aesthetic-line" />
                </div>
                
                <div className="card-bottom">
                  <div className="role-group">
                    <h3>{exp.role}</h3>
                    <p className="company-label">{exp.company}</p>
                  </div>
                  <p className="description-text">{exp.detail}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}

const popVariants = {
  initial: { 
    y: "100%", 
    opacity: 0,
    scale: 0.99
  },
  animate: { 
    y: "8%", 
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 80,
      mass: 1
    }
  }
};