import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useVelocity } from "framer-motion";

const reasons = [
  { id: "01", title: "Frontend Lead", desc: "Architecting React 19 ecosystems with a desktop-first approach." },
  { id: "02", title: "Java & DSA", desc: "Merging backend rigor with high-end UI/UX design principles." },
  { id: "03", title: "UI Architect", desc: "Premium agency aesthetics: glassmorphism, whitespace, and refined type." },
  { id: "04", title: "Product Focus", desc: "Building complex platforms like IELTS practice modules and IT agency sites." }
];

export default function HireMeSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  const springX = useSpring(x, { stiffness: 100, damping: 30 });

  const scrollVelocity = useVelocity(scrollYProgress);
  const skewX = useSpring(useTransform(scrollVelocity, [-1, 1], [-20, 20]), {
    stiffness: 400,
    damping: 90
  });

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#FFF5F8]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
          <motion.h2 
            style={{ x: useTransform(scrollYProgress, [0, 1], [0, -500]) }}
            className="text-[30vw] font-black font-['Playfair_Display'] whitespace-nowrap text-[#b4647d]"
          >
            AAYUSHA GHIMIRE
          </motion.h2>
        </div>

        <div className="px-6 lg:px-24 mb-12 relative z-10">
          <motion.h2 
            className="text-7xl md:text-9xl font-['Playfair_Display'] text-[#334155] font-bold"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0.3]) }}
          >
            Why <span className="text-[#b4647d]">Me</span>
          </motion.h2>
        </div>

        <motion.div style={{ x: springX, skewX }} className="flex gap-8 px-6 lg:px-24">
          {reasons.map((item, index) => (
            <VelocityCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>

        <div className="absolute bottom-20 left-6 lg:left-24 right-6 lg:right-24 h-[1px] bg-[#334155]/10">
          <motion.div 
            style={{ scaleX: scrollYProgress }} 
            className="h-full bg-[#b4647d] origin-left w-full" 
          />
        </div>
      </div>
    </section>
  );
}

function VelocityCard({ item, index }) {
  return (
    <motion.div 
      whileHover={{ y: -20 }}
      className="shrink-0 w-[400px] md:w-[500px] h-[350px] md:h-[450px] bg-white rounded-[48px] p-12 border border-[#fce4ec] shadow-sm hover:shadow-2xl hover:shadow-[#b4647d]/10 transition-all duration-700 flex flex-col justify-between group"
    >
      <div>
        <span className="text-[12px] font-mono font-bold text-[#b4647d] tracking-[0.5em] block mb-6">
          // {item.id}
        </span>
        <h3 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#334155] font-bold leading-tight group-hover:text-[#0c5adb] transition-colors duration-500">
          {item.title}
        </h3>
      </div>
      
      <p className="text-lg md:text-xl text-[#334155]/60 font-['Poppins'] leading-relaxed font-normal">
        {item.desc}
      </p>

      <div className="relative h-1 w-full bg-[#fce4ec] rounded-full overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
          className="absolute inset-0 bg-[#b4647d]"
        />
      </div>
    </motion.div>
  );
}