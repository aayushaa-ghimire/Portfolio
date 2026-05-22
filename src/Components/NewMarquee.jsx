import React from 'react';
import { motion } from 'framer-motion';

export default function NewMarquee() {
  const skills = [
   "React.js", 
    "Javascript", 
    "Typescript", 
    "Tailwind CSS",  
    "HTML",
    "CSS",
    "Redux",
    "My SQL",
    "Git / Github"
  ];
  return (
    <div className="w-full overflow-hidden py-4 opacity-50">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...skills, ...skills].map((s, i) => (
          <span key={i} className="mx-6 text-[10px] font-bold tracking-[0.2em] text-[#b4647d]">{s}</span>
        ))}
      </motion.div>
    </div>
  );
}