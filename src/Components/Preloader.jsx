

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ finishLoading }) {
  const [count, setCount] = useState(0);

  useEffect(function() {
    const handleCounting = setInterval(function() {
      setCount(function(prev) {
        if (prev >= 100) {
          clearInterval(handleCounting);
          setTimeout(function() {
            finishLoading();
          }, 350);
          return 100;
        }
        
        const increment = Math.floor(Math.random() * 6) + 2; 
        return Math.min(prev + increment, 100);
      });
    }, 45);

    const handleWindowLoad = function() {
      setCount(100);
    };

    if (document.readyState === 'complete') {
      setCount(100);
    } else {
      window.addEventListener('load', handleWindowLoad);
    }

    return function() {
      clearInterval(handleCounting);
      window.removeEventListener('load', handleWindowLoad);
    };
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: '-100vh',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 } 
      }}
      style={{ backgroundColor: '#FFF5F8' }}
      className="fixed inset-0 z-[9999] flex flex-col justify-between p-12 md:p-20 select-none"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center w-full">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#334155]/40 font-['Poppins']">
          Aayusha Ghimire
        </span>
        <div className="h-[1px] w-12 bg-[#b4647d]/20" />
      </div>

      {/* Centered Small Counter Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none">
        <div className="flex items-baseline justify-center pl-4">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-[#9b586d] tracking-normal leading-none">
            {count}
          </h1>
          <span className="text-xs text-[#9b586d]/60 font-light font-sans ml-1">%</span>
        </div>
        
        {/* Minimal Progress Bar beneath number */}
        <div className="w-16 h-[1px] bg-[#334155]/5 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#b4647d]/60" 
            animate={{ width: `${count}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Bottom Status Layout */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
        <p className="text-[10px] tracking-widest uppercase text-[#334155]/40 font-['Poppins']">
          Loading Experience
        </p>
        <span className="text-[9px] tracking-[0.2em] uppercase text-[#334155]/30 font-['Poppins']">
          Please Wait
        </span>
      </div>
    </motion.div>
  );
}