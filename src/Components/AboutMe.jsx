import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutMe() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const particles = useRef([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0.5, 1], [0, -300]);
  const xRight = useTransform(scrollYProgress, [0.5, 1], [0, 300]);
  const yDown = useTransform(scrollYProgress, [0.5, 1], [0, 200]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      once: false,
      mirror: true,
      offset: 50, 
    });

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
      
      // Original 4-pointed star logic with sharp edges
      for (let i = 0; i < 4; i++) {
        ctx.rotate(Math.PI / 2);
        ctx.lineTo(0, p.size);
        ctx.lineTo(p.size * 0.25, 0); // Kept sharp, not a "+"
      }
      
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life;
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p, index) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.spin;
        p.life -= p.decay;
        if (p.life <= 0) {
          particles.current.splice(index, 1);
        } else {
          drawStar(p);
        }
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
        x,
        y,
        size: Math.random() * 8 + 4,
        color: Math.random() > 0.5 ? '#b4647d' : '#f8bbd0', // Reverted to original colors
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        rotation: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.05,
        life: 1,
        decay: Math.random() * 0.02 + 0.01
      });
    }
  };

  const badgeVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden bg-[#FFF5F8] font-['Poppins'] flex items-center z-10 cursor-none"
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-[100]" 
      />

      <motion.div 
        style={{ x: xLeft }}
        className="absolute top-10 left-[-2rem] opacity-10 select-none z-0"
      >
        <h2 
          className="text-[15rem] md:text-[25rem] font-bold text-[#b4647d59] italic"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Hi
        </h2>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 items-center">
        
        <motion.div 
          className="col-span-12 md:col-span-5 flex items-center justify-center relative h-[70vh]"
          style={{ x: xLeft }}
        >
          <div data-aos="fade-right" data-aos-delay="200" className="absolute top-[25%] left-0 z-[60]">
            <motion.div 
              variants={badgeVariants}
              animate="animate"
              className="bg-[#f8bbd0]/95 backdrop-blur-sm py-2 px-4 shadow-lg rounded-tr-2xl border-l-4 border-[#d81b60]"
            >
              <span className="text-[8px] font-bold tracking-widest text-[#ad1457] uppercase">Architecture</span>
              <h4 className="text-sm font-semibold text-[#ad1457]">Frontend Developer</h4>
            </motion.div>
          </div>

          <motion.img 
            data-aos="fade-up"
            data-aos-duration="1200"
            style={{ y: yDown }}
            src="/img3-nobg.png" 
            className="relative z-50 h-full w-auto object-contain drop-shadow-2xl" 
            alt="Portrait" 
          />

          <div data-aos="fade-left" data-aos-delay="400" className="absolute bottom-[30%] right-0 z-[60]">
            <motion.div 
              variants={badgeVariants}
              animate="animate"
              className="bg-[#b4647d] py-2.5 px-5 shadow-xl rounded-bl-2xl text-right"
            >
              <span className="text-[8px] font-bold tracking-widest text-[#fce4ec] uppercase">Visual Arts</span>
              <h4 className="text-sm font-semibold text-white">Web Designer</h4>
            </motion.div>
          </div>
        </motion.div>

        <div className="col-span-12 md:col-span-7 flex flex-col items-end text-right">
          <motion.div style={{ x: xRight }} className="flex flex-col items-end">
            <span data-aos="fade-down" className="text-xs tracking-[0.5em] text-[#b4647d] uppercase font-semibold mb-4">
              Philosophy
            </span>
            <h2 
              data-aos="fade-left" 
              data-aos-delay="200" 
              className="text-6xl md:text-8xl font-medium text-[#334155] leading-[0.9] tracking-tighter mb-8 "
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About <span className="text-[#b4647d]">Me</span>
            </h2>
            <p 
              data-aos="fade-left" 
              data-aos-delay="300" 
              className="max-w-lg text-[#334155]/80 text-lg leading-[1.8] font-light tracking-wide mb-10"
            >
              I approach frontend architecture like an architect. By combining UI/UX design with a 
              desktop-first philosophy, I build high-end agency experiences.
            </p>
          </motion.div>
          
          <div data-aos="fade-up" data-aos-offset="0" data-aos-delay="500" className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-[10px] text-[#b4647d] font-bold uppercase">Frontend Lead</p>
              <p className="text-[12px] text-slate-400 font-medium uppercase">UI/UX Designer</p>
            </div>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="h-[1px] bg-[#334155]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;