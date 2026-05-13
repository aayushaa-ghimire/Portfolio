import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Github } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out-back', once: false });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#fce4ec] font-['Poppins'] flex items-center justify-center py-20 px-6 md:px-24 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-[#b4647d] opacity-5 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#0c5adb] opacity-5 rounded-full blur-3xl"
      />

      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row gap-16 items-start">
        
        {/* LEFT SIDE: CONNECT WITH ME */}
        <div className="w-full md:w-[40%]" data-aos="fade-right">
          <span className="text-[10px] tracking-[0.5em] text-[#b4647d] uppercase font-bold mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-7xl font-normal text-[#1e293b] leading-[1.1] mb-8 font-['Playfair_Display']">
            Let’s create <br /> 
            <span className="text-[#b4647d] italic">magic</span> together.
          </h2>
          
          <p className="text-sm text-[#64748b] font-normal leading-relaxed mb-12 max-w-sm">
            Whether you have a question about a project or just want to say hi, my inbox is always open.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#b4647d] transition-colors duration-500">
                <Mail size={20} className="text-[#b4647d] group-hover:text-white" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#b4647d] font-bold">Email Me</p>
                <p className="text-[#1e293b] font-normal">hello@aayusha.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#0c5adb] transition-colors duration-500">
                <MapPin size={20} className="text-[#0c5adb] group-hover:text-white" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#0c5adb] font-bold">Based In</p>
                <p className="text-[#1e293b] font-normal">Remote / Global</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-16">
            {[Instagram, Linkedin, Github].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -5 }}
                href="#"
                className="w-10 h-10 rounded-full border border-[#b4647d]/20 flex items-center justify-center text-[#b4647d] hover:bg-[#b4647d] hover:text-white transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: CONTACT FORM */}
        <div className="w-full md:w-[60%]" data-aos="fade-left" data-aos-delay="200">
          <div className="bg-white/40 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-2xl shadow-pink-200/50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#b4647d] font-bold ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Aayusha Ghimire"
                    className="w-full bg-white/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#b4647d]/20 outline-none transition-all placeholder:text-slate-300 text-sm font-normal"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#b4647d] font-bold ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full bg-white/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#b4647d]/20 outline-none transition-all placeholder:text-slate-300 text-sm font-normal"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#b4647d] font-bold ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-white/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#b4647d]/20 outline-none transition-all placeholder:text-slate-300 text-sm font-normal"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#b4647d] font-bold ml-1">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell me about your dream project..."
                  className="w-full bg-white/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#b4647d]/20 outline-none transition-all placeholder:text-slate-300 text-sm font-normal resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-[#b4647d] text-white rounded-2xl font-normal tracking-widest uppercase text-xs shadow-lg shadow-pink-200 hover:bg-[#0c5adb] transition-colors duration-500"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}