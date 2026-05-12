import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

const whyHireData = [
  { title: "Trending Skills", content: "React 19, Tailwind v4, and cinematic GSAP motion.", id: "01" },
  { title: "Proven Projects", content: "End-to-end IELTS platform and Vividify IT solutions.", id: "02" },
  { title: "Growth Mindset", content: "Frontend Lead experience with an insatiable hunger for learning.", id: "03" },
  { title: "Academic Base", content: "Bridging CS theory with hands-on production engineering.", id: "04" }
];

// Interactive Card Component with Tilt Effect
function TiltCard({ item, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group h-[280px] w-full rounded-[32px] bg-[#d6a1b0] p-8 cursor-none shadow-2xl shadow-[#d6a1b0]/20"
    >
      <div style={{ transform: "translateZ(50px)" }} className="h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-mono text-white/40 tracking-widest">SEC_{item.id}</span>
            <div className="h-[1px] w-full bg-white/20 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
          </div>
          <h4 className="text-2xl font-['Playfair_Display'] text-white font-bold mb-4">{item.title}</h4>
          <p className="text-white/80 font-['Poppins'] text-sm leading-relaxed max-w-[240px]">{item.content}</p>
        </div>
        
        <div className="flex gap-1.5 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div 
              key={i} 
              animate={{ scaleY: [1, 1.5, 1] }} 
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
              className="h-4 w-[2px] bg-white/30 rounded-full" 
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function InteractiveHireSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  // Floating background elements parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 px-6 lg:px-24 overflow-hidden perspective-1000" 
      style={{ backgroundColor: '#FFF5F8' }}
    >
      {/* Dynamic Background Elements */}
      <motion.div style={{ y: bgY }} className="absolute top-20 right-10 text-[20vw] font-['Playfair_Display'] font-black text-[#b4647d]/5 select-none pointer-events-none">
        AAYUSHA
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Static Content with Magnetic Pull */}
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-[#b4647d]" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#b4647d] font-bold font-['Poppins']">The Perspective</span>
              </div>
              <h3 className="text-6xl md:text-8xl font-['Playfair_Display'] text-[#334155] leading-[0.9] font-bold mb-8">
                Why <span className="text-[#b4647d]">Hire</span> Me?
              </h3>
              <p className="text-[#334155]/60 font-['Poppins'] max-w-sm text-lg leading-relaxed">
                I don't just build components. I engineer digital experiences that bridge the gap between human emotion and technical logic.
              </p>
            </motion.div>
          </div>

          {/* Grid of Interactive Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 md:pt-0">
            {whyHireData.map((item, index) => (
              <TiltCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Modern Detail Decor */}
      <div className="absolute bottom-10 left-10 flex gap-10">
        {['JAVA', 'REACT', 'UI/UX', 'DSA'].map((skill) => (
          <span key={skill} className="text-[10px] font-mono tracking-widest text-[#334155]/20">{skill}</span>
        ))}
      </div>
    </section>
  );
}