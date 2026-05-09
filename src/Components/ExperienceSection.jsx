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