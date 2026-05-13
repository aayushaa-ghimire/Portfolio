// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub, FaLinkedinIn, FaInstagram, FaPaperPlane, FaEnvelope } from 'react-icons/fa';
// import { IconCloud } from '@/components/ui/icon-cloud';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // Tech logo slugs for the icon cloud sphere
// const slugs = [
//   "typescript", "javascript", "java", "react", "html5", "css3", "nodedotjs",
//   "express", "nextdotjs", "prisma", "postgresql", "firebase", "vercel",
//   "docker", "git", "github", "figma", "tailwindcss", "framer"
// ];

// // Social / direct links data
// const socialLinks = [
//   { Icon: FaGithub, href: "https://github.com/AayushaGhimire", label: "GitHub" },
//   { Icon: FaLinkedinIn, href: "https://linkedin.com/in/AayushaGhimire", label: "LinkedIn" },
//   { Icon: FaInstagram, href: "https://instagram.com/AayushaGhimire", label: "Instagram" },
// ];

// // Reusable underline input field
// function UnderlineField({ label, placeholder, type = "text", isTextarea = false }) {
//   const sharedClasses =
//     "w-full bg-transparent border-none p-0 focus:ring-0 outline-none text-xs tracking-widest text-[#1e293b] font-normal placeholder:text-slate-300 font-['Poppins']";

//   return (
//     <div className="border-b border-[#b4647d]/20 pb-2 focus-within:border-[#b4647d] transition-colors duration-300">
//       <label className="text-[9px] uppercase tracking-[0.2em] text-[#b4647d]/60 font-normal block mb-1.5 font-['Poppins']">
//         {label}
//       </label>
//       {isTextarea ? (
//         <textarea
//           rows={3}
//           placeholder={placeholder}
//           className={`${sharedClasses} resize-none`}
//         />
//       ) : (
//         <input
//           type={type}
//           placeholder={placeholder}
//           className={sharedClasses}
//         />
//       )}
//     </div>
//   );
// }

// export default function ContactSection() {
//   // Build image URLs for the cloud
//   const images = slugs.map(
//     (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
//   );

//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: 'ease-out-back', once: false });
//   }, []);

//   return (
//     <section
//       id="contact"
//       className="relative w-full min-h-screen bg-[#fce4ec] font-['Poppins'] flex items-center justify-center py-24 overflow-hidden"
//     >
//       {/* Subtle decorative background text */}
//       <div className="absolute bottom-[-2rem] left-[-1rem] opacity-[0.018] select-none pointer-events-none z-0">
//         <h2 className="text-[14rem] font-normal text-[#b4647d] font-['Playfair_Display'] italic leading-none">
//           Contact
//         </h2>
//       </div>

//       {/* ── Main Content Grid ────────────────────────────── */}
//       <div className="relative z-10 w-full max-w-7xl px-8 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">

//         {/* ─── LEFT SIDE: Glassmorphism Inquiry Form ───── */}
//         <div className="w-full lg:w-[48%]" data-aos="fade-right">

//           {/* Section header */}
//           <div className="mb-10">
//             <span className="text-[10px] tracking-[0.5em] text-[#b4647d] uppercase font-normal block mb-3 font-['Poppins']">
//               Get In Touch
//             </span>
//             <h2 className="text-5xl md:text-6xl font-normal text-[#1e293b] leading-[1.05] font-['Playfair_Display']">
//               Let's <span className="text-[#b4647d]">Talk</span>
//             </h2>
//           </div>

//           {/* Glass card */}
//           <div className="bg-white/40 backdrop-blur-2xl p-10 md:p-12 rounded-[3.5rem] border border-white/60 shadow-2xl shadow-pink-200/30">
//             <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>

//               {/* Name + Email row */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <UnderlineField label="Full Name" placeholder="YOUR NAME" />
//                 <UnderlineField label="Email Address" placeholder="HELLO@AAYUSHA.COM" type="email" />
//               </div>

//               {/* Subject */}
//               <UnderlineField label="Subject" placeholder="PROJECT INQUIRY" />

//               {/* Message */}
//               <UnderlineField label="Message" placeholder="TELL ME ABOUT YOUR PROJECT" isTextarea />

//               {/* Submit button — pill, pink, paper-plane icon */}
//               <motion.button
//                 whileHover={{ scale: 1.03, backgroundColor: '#a3546d' }}
//                 whileTap={{ scale: 0.97 }}
//                 type="submit"
//                 className="group flex items-center gap-4 py-4 px-14 bg-[#b4647d] text-white rounded-full font-normal tracking-[0.35em] uppercase text-[9px] shadow-lg shadow-pink-200/50 transition-colors duration-300 cursor-pointer font-['Poppins']"
//                 style={{ backgroundColor: '#b4647d' }}
//               >
//                 Send Inquiry
//                 <FaPaperPlane
//                   size={11}
//                   className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
//                 />
//               </motion.button>
//             </form>
//           </div>
//         </div>

//         {/* ─── RIGHT SIDE: Icon Cloud + Direct Links ───── */}
//         <div
//           className="w-full lg:w-[48%] flex flex-col items-center justify-center"
//           data-aos="fade-left"
//         >

//           {/* Icon Cloud sphere */}
//           <div className="relative flex w-full aspect-square max-w-[420px] items-center justify-center overflow-hidden">
//             <IconCloud images={images} />
//           </div>

//           {/* ── Direct Links Dock ─────────────────────── */}
//           <div className="mt-8 flex flex-col items-center gap-8 w-full">

//             {/* Email link */}
//             <div className="text-center">
//               <p className="text-[9px] uppercase tracking-[0.5em] text-[#b4647d] font-normal mb-2 font-['Poppins']">
//                 Direct Email
//               </p>
//               <motion.a
//                 whileHover={{ letterSpacing: '0.12em' }}
//                 href="mailto:hello@aayusha.com"
//                 className="text-xl text-[#1e293b] hover:text-[#b4647d] transition-all duration-300 font-normal font-['Poppins']"
//               >
//                 hello@aayusha.com
//               </motion.a>
//             </div>

//             {/* Social icon dock */}
//             <div className="flex gap-5 justify-center">
//               {socialLinks.map((social, i) => (
//                 <motion.a
//                   key={i}
//                   whileHover={{
//                     y: -8,
//                     backgroundColor: 'rgba(255,255,255,0.95)',
//                     borderColor: '#b4647d',
//                   }}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   className="w-16 h-16 flex items-center justify-center rounded-[1.25rem] bg-white/40 text-[#1e293b]/60 border border-white/60 shadow-sm transition-all duration-300 hover:text-[#b4647d] hover:shadow-md"
//                 >
//                   <social.Icon size={22} />
//                 </motion.a>
//               ))}

//               {/* Envelope / mail icon */}
//               <motion.a
//                 whileHover={{
//                   y: -8,
//                   backgroundColor: 'rgba(255,255,255,0.95)',
//                   borderColor: '#b4647d',
//                 }}
//                 href="mailto:hello@aayusha.com"
//                 aria-label="Email"
//                 className="w-16 h-16 flex items-center justify-center rounded-[1.25rem] bg-white/40 text-[#1e293b]/60 border border-white/60 shadow-sm transition-all duration-300 hover:text-[#b4647d] hover:shadow-md"
//               >
//                 <FaEnvelope size={22} />
//               </motion.a>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaPaperPlane, FaEnvelope } from 'react-icons/fa';
import { IconCloud } from '@/components/ui/icon-cloud';
import AOS from 'aos';
import 'aos/dist/aos.css';

const slugs = [
  "typescript", "javascript", "java", "react", "html5", "css3", "nodedotjs",
  "express", "nextdotjs", "prisma", "postgresql", "firebase", "vercel",
  "docker", "git", "github", "figma", "tailwindcss", "framer"
];

const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/AayushaGhimire", label: "GitHub" },
  { Icon: FaLinkedinIn, href: "https://linkedin.com/in/AayushaGhimire", label: "LinkedIn" },
  { Icon: FaEnvelope, href: "mailto:hello@aayusha.com", label: "Email" },
];

function UnderlineField({ label, placeholder, type = "text", isTextarea = false }) {
  const sharedClasses =
    "w-full bg-transparent border-none p-0 focus:ring-0 outline-none text-xs tracking-widest text-[#1e293b] font-normal placeholder:text-slate-300 font-['Poppins']";

  return (
    <div className="border-b border-[#b4647d]/20 pb-2 focus-within:border-[#b4647d] transition-colors duration-300">
      <label className="text-[9px] uppercase tracking-[0.2em] text-[#b4647d]/60 font-normal block mb-1.5 font-['Poppins']">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          rows={3}
          placeholder={placeholder}
          className={`${sharedClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={sharedClasses}
        />
      )}
    </div>
  );
}

export default function ContactSection() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out-back', once: false });
  }, []);

  return (
    <section id="contact" className="relative w-full min-h-screen bg-[#fce4ec] flex items-center justify-center py-24 overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-[-5rem] right-[-5rem] w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl px-8 md:px-12 flex flex-col lg:flex-row items-stretch justify-between gap-12">
        
        {/* LEFT SIDE: Inquiry Form */}
        <div className="w-full lg:w-[48%]" data-aos="fade-right">
          <div className="mb-10">
            <span className="text-[10px] tracking-[0.5em] text-[#b4647d] uppercase font-normal block mb-3 font-['Poppins']">
              Get In Touch
            </span>
            <h2 className="text-5xl md:text-6xl font-normal text-[#1e293b] leading-[1.05] font-['Playfair_Display']">
              Let's <span className="text-[#b4647d] italic">Talk</span>
            </h2>
          </div>

          <div className="bg-white/40 backdrop-blur-2xl p-10 md:p-12 rounded-[3.5rem] border border-white/60 shadow-2xl shadow-pink-200/30 h-[500px] flex flex-col justify-center">
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <UnderlineField label="Full Name" placeholder="YOUR NAME" />
                <UnderlineField label="Email Address" placeholder="HELLO@AAYUSHA.COM" type="email" />
              </div>

              {/* Subject Removed as requested */}

              <UnderlineField label="Message" placeholder="TELL ME ABOUT YOUR PROJECT" isTextarea />

              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: '#a3546d' }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="group flex items-center gap-4 py-4 px-14 bg-[#b4647d] text-white rounded-full font-normal tracking-[0.35em] uppercase text-[9px] shadow-lg shadow-pink-200/50 transition-colors duration-300 cursor-pointer font-['Poppins'] w-fit"
              >
                Send Inquiry
                <FaPaperPlane size={11} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE: Icon Cloud + Links (Integrated Card) */}
        <div className="w-full lg:w-[45%] flex flex-col pt-16 lg:pt-28" data-aos="fade-left">
          <div className="bg-white/40 backdrop-blur-2xl p-10 rounded-[3.5rem] border border-white/60 shadow-2xl shadow-pink-200/30 flex flex-col items-center h-[500px] justify-center">
            
            {/* Anchored Sphere */}
            <div className="relative flex w-full aspect-square max-w-[320px] items-center justify-center overflow-hidden">
              <IconCloud images={images} />
            </div>

            <div className="mt-8 flex flex-col items-center gap-6 w-full">
              <div className="text-center">
                <p className="text-[9px] uppercase tracking-[0.5em] text-[#b4647d] font-normal mb-1 font-['Poppins']">
                  Direct Email
                </p>
                <motion.a
                  whileHover={{ letterSpacing: '0.1em' }}
                  href="mailto:hello@aayusha.com"
                  className="text-lg text-[#1e293b] hover:text-[#b4647d] transition-all duration-300 font-normal font-['Poppins']"
                >
                  hello@aayusha.com
                </motion.a>
              </div>

              {/* Social dock - Instagram Removed */}
              <div className="flex gap-4 justify-center">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.9)', borderColor: '#b4647d' }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/40 text-[#1e293b]/60 border border-white/60 shadow-sm transition-all duration-300 hover:text-[#b4647d]"
                  >
                    <social.Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}