import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaPaperPlane, FaEnvelope, FaHeart } from 'react-icons/fa';
import { IconCloud } from '@/components/ui/icon-cloud';
import AOS from 'aos';
import 'aos/dist/aos.css';

const slugs = [
  "typescript", "javascript", "java", "react", "html5", "css3", "nodedotjs",
  "express", "nextdotjs", "prisma", "postgresql", "firebase", "vercel",
  "docker", "git", "github", "figma", "tailwindcss", "framer"
];

const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/AayushaGhimire" },
  { Icon: FaLinkedinIn, href: "https://linkedin.com/in/AayushaGhimire" },
  { Icon: FaEnvelope, href: "mailto:hello@aayusha.com" },
];

function UnderlineField({ label, placeholder, type = "text", isTextarea = false }) {
  const sharedClasses =
    "w-full bg-transparent border-none p-0 focus:ring-0 outline-none text-[10px] tracking-widest text-[#1e293b] font-normal placeholder:text-[#b4647d]/30 font-['Poppins'] transition-all duration-300";

  return (
    <div className="group border-b border-[#b4647d]/10 pb-1 focus-within:border-[#b4647d] transition-colors duration-500">
      <label className="text-[7.5px] uppercase tracking-[0.3em] text-[#b4647d]/50 font-normal block mb-1 font-['Poppins'] group-focus-within:text-[#b4647d] transition-colors">
        {label}
      </label>
      {isTextarea ? (
        <textarea rows={2} placeholder={placeholder} className={`${sharedClasses} resize-none`} />
      ) : (
        <input type={type} placeholder={placeholder} className={sharedClasses} />
      )}
    </div>
  );
}

export default function ContactSection() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-out-quint', once: false });
  }, []);

  return (
    <section id="contact" className="relative w-full min-h-screen bg-[#fce4ec] flex items-center justify-center overflow-hidden py-20">
      
      {/* ── Decorative Elements ── */}
      <div className="absolute top-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-white opacity-40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[25rem] h-[25rem] bg-[#b4647d] opacity-10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl px-8 flex flex-col items-center">
        
        {/* Cute Header */}
        <div className="mb-12 text-center" data-aos="fade-down">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-4 bg-[#b4647d]/20" />
            <span className="text-[8px] tracking-[0.6em] text-[#b4647d] uppercase font-normal font-['Poppins']">
              Let's Create Magic
            </span>
            <div className="h-[1px] w-4 bg-[#b4647d]/20" />
          </div>
          <h2 className="text-6xl md:text-7xl font-normal text-[#334155] leading-none font-['Playfair_Display']">
           Contact <span className="text-[#b4647d] ">Me.</span>
          </h2>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-8"
        >
          
          {/* LEFT Card */}
          <div className="w-full lg:w-[52%] flex">
            <div className="w-full bg-white/50 backdrop-blur-3xl p-10 md:p-12 rounded-[3.5rem] border border-white shadow-[0_20px_60px_-15px_rgba(180,100,125,0.1)] flex flex-col justify-center relative overflow-hidden">
              <FaHeart className="absolute top-8 right-8 text-[#b4647d]/5" size={40} />
              
              <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-10">
                  <UnderlineField label="Your Name" placeholder="Name..." />
                  <UnderlineField label="Your Email" placeholder="Email..." type="email" />
                </div>

                <UnderlineField label="The Vision" placeholder="Message..." isTextarea />

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#a3546d', boxShadow: "0 15px 30px -5px rgba(180,100,125,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 py-4 px-12 bg-[#b4647d] text-white rounded-full font-normal tracking-[0.4em] uppercase text-[8px] transition-all duration-500 font-['Poppins'] w-fit mt-4"
                >
                  Send
                  <FaPaperPlane size={9} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </motion.button>
              </form>
            </div>
          </div>

          {/* RIGHT Card */}
          <div className="w-full lg:w-[38%] flex">
            <div className="w-full bg-white/50 backdrop-blur-3xl p-10 rounded-[3.5rem] border border-white shadow-[0_20px_60px_-15px_rgba(180,100,125,0.1)] flex flex-col items-center justify-between">
              
              <div className="relative flex w-full aspect-square max-w-[220px] items-center justify-center flex-grow">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#fce4ec] to-white rounded-full blur-2xl opacity-40 scale-90" />
                <IconCloud images={images} />
              </div>

              <div className="text-center space-y-6 w-full pt-6">
                <div className="space-y-1">
                  <p className="text-[8px] uppercase tracking-[0.5em] text-[#b4647d] font-normal font-['Poppins']">
                    Aayusha Ghimire
                  </p>
                  <p className="text-[#1e293b]/30 text-[8px] font-normal tracking-[0.2em] font-['Poppins'] uppercase">
                    Lets Connect
                  </p>
                </div>

                <div className="flex gap-4 justify-center">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ y: -5, backgroundColor: '#fff', scale: 1.1 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/60 text-[#b4647d]/60 border border-white shadow-sm transition-all duration-500 hover:text-[#b4647d]"
                    >
                      <social.Icon size={16} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </motion.div>

        
      </div>
    </section>
  );
}