import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];

const socials = [
  { Icon: FaGithub, href: "https://github.com/aayushaa-ghimire", label: "GitHub" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/aayushaghimire/", label: "LinkedIn" },
  { Icon: FaEnvelope, href: "mailto:ayushaghimireg@gmail.com", label: "Email" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FFF5F8] border-t border-[#b4647d]/10 pt-24 pb-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start text-center md:text-left pb-20">
          
          {/* Left Column: Identity (Aligned to match center/right column spacing) */}
          <div className="flex flex-col space-y-5">
            <Link 
              to="/" 
              className="text-xl flex justify-center font-bold text-[#b4647d] tracking-wide  font-['Poppins']"
            >
              <img src="/Favicon1.png" alt="Aayusha" className="h-6 w-auto object-contain mx-auto md:mx-0" /> <span>ayusha</span>

            </Link>
            <p className="text-[12px] tracking-widest text-center uppercase text-[#334155]/60 leading-relaxed max-w-[260px] font-normal mx-auto md:mx-0 font-['Poppins']">
              Building thoughtful, high-fidelity web interfaces.
            </p>
          </div>

          {/* Center Column: Navigation */}
          <div className="flex flex-col space-y-5 md:items-center">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#9b586d]/60 font-bold font-['Poppins']">
              Navigation
            </span>
            <nav className="flex flex-col space-y-3.5">
              {quickLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-[12px] tracking-widest uppercase text-[#334155]/70 hover:text-[#b4647d] transition-colors duration-300 font-['Poppins']"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Column: Connect */}
          <div className="flex flex-col space-y-5 md:items-end">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#9b586d]/60 font-bold font-['Poppins']">
              Connect
            </span>
            <div className="flex flex-col space-y-3.5 items-center md:items-end">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-[12px] tracking-widest uppercase text-[#334155]/70 hover:text-[#b4647d] transition-colors duration-300 font-['Poppins']"
                >
                  <span>{social.label}</span>
                  <social.Icon size={13} className="text-[#334155]/40 group-hover:text-[#b4647d] transition-colors" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="border-t border-[#b4647d]/10 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[11px] tracking-widest uppercase text-[#334155]/50 font-['Poppins']">
            © {currentYear} All rights reserved.
          </p>

          <p className="text-[11px] tracking-widest uppercase text-[#334155]/50 font-['Poppins'] flex items-center gap-2">
            Crafted with 
            <FaHeart className="text-[#b4647d]/60 animate-pulse" size={11} /> 
            by me
          </p>
        </div>

      </div>
    </footer>
  );
}