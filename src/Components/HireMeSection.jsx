import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const reasons = [
  { id: "01", title: "Frontend Lead", desc: "Architecting React ecosystems with a desktop-first approach." },
  { id: "02", title: "Java & DSA", desc: "Merging backend rigor with high-end UI/UX design principles." },
  { id: "03", title: "UI Architect", desc: "Premium agency aesthetics: glassmorphism and refined type." },
  { id: "04", title: "UX Strategist", desc: "User-centric research paired with high-conversion interfaces." },
];

export default function HireMeSection() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const particles = useRef([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0.4, 1], [0, -40]);
  const xRight = useTransform(scrollYProgress, [0.4, 1], [0, 40]);
  const yDown = useTransform(scrollYProgress, [0.4, 1], [0, 25]);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', once: false });

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawStar = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        ctx.rotate(Math.PI / 2);
        ctx.lineTo(0, p.size);
        ctx.lineTo(p.size * 0.25, 0);
      }
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life;
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p, index) => {
        p.x += p.speedX; p.y += p.speedY;
        p.rotation += p.spin; p.life -= p.decay;
        if (p.life <= 0) particles.current.splice(index, 1);
        else drawStar(p);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    for (let i = 0; i < 2; i++) {
      particles.current.push({
        x, y, size: Math.random() * 3 + 1,
        color: Math.random() > 0.5 ? '#b4647d' : '#fce4ec',
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        rotation: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.04,
        life: 1, decay: Math.random() * 0.02 + 0.01
      });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
      className="relative w-full  pt-20 pb-20 overflow-hidden !bg-[#FFF5F8] font-['Poppins'] flex items-center z-10"
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[100]" />

      <motion.div style={{ x: xRight }} className="absolute bottom-[-1rem] right-[-2rem] opacity-[0.015] select-none z-0 pointer-events-none">
        <h2 className="text-[16rem] font-bold text-[#b4647d] font-['Playfair_Display'] italic">
          Me
        </h2>
      </motion.div>

      <div className="relative z-10 w-full h-full flex flex-row justify-around items-center">
        
        <div className="w-[50vw] flex flex-col items-start justify-center pl-16 md:pl-24">
          <motion.div style={{ x: xLeft }} className="w-full">
            <span data-aos="fade-right" className="text-[10px] tracking-[0.5em] text-[#b4647d] uppercase font-bold mb-3 block">
              Collaboration
            </span>
            <h2 
              data-aos="fade-right" data-aos-delay="200" 
              className="text-5xl md:text-7xl font-normal text-[#1e293b] leading-[1] mb-8 font-['Playfair_Display']"
            >
              Hire <span className="text-[#b4647d]">Me</span>
            </h2>

            <div className="space-y-4 w-full">
              {reasons.map((item, index) => (
                <div 
                  key={item.id}
                  data-aos="fade-right"
                  data-aos-delay={300 + (index * 100)}
                  className="flex gap-5 items-center py-4 px-5 bg-[#fce4ec] rounded-[1rem] border border-[#fce4ec] transition-all duration-500 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex flex-col items-center opacity-30">
                    <span className="text-[#b4647d] text-[8px] font-bold font-mono">//</span>
                    <span className="text-[#b4647d] text-[10px] font-bold font-mono">{item.id}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-[#1e293b] leading-tight">{item.title}</h3>
                    <p className="text-[11px] text-[#64748b] leading-relaxed font-normal mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="w-[35vw] h-full flex items-center justify-center relative pr-12"
          style={{ x: xRight }}
        >
          <div data-aos="fade-left" data-aos-delay="400" className="absolute top-[35%] right-[10%] z-[60]">
            <div className="bg-[#b4647d] py-4 px-6 shadow-xl rounded-sm rounded-tr-[2rem] text-center min-w-[110px]">
              <span className="text-[8px] font-bold tracking-widest text-pink-100 uppercase block">Result Driven</span>
              <h4 className="text-sm font-normal text-white">Full-Time</h4>
            </div>
          </div>

          <motion.img 
            data-aos="fade-up" data-aos-duration="1200"
            style={{ y: yDown }}
            src="/img4-nobg.png" 
            className="relative z-50 h-[85%] w-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.12)]" 
            alt="Portrait" 
          />

          {/* Location Badge */}
          <div data-aos="fade-right" data-aos-delay="600" className="absolute bottom-[22%] left-[2%] z-[60]">
            <div className="bg-white py-4 px-6 shadow-xl rounded-sm border-r-4 border-[#b4647d]">
              <span className="text-[8px] font-bold tracking-widest text-[#b4647d] uppercase block">Location</span>
              <h4 className="text-sm font-normal text-[#1e293b]">Remote / Hybrid</h4>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}