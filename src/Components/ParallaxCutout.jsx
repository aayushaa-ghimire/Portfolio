import React from 'react';

const ParallaxCutout = () => {
  return (
   
    <div className="relative w-full h-screen bg-[#fce4ec] flex items-center justify-center overflow-hidden">
      <h1 
      
        className="select-none text-[48vw] uppercase tracking-tighter leading-none m-0 p-0 text-center w-full"
        style={{ 
          fontFamily: "'Poppins', sans-serif", 
          fontWeight: 900, 
          backgroundImage: "url('/img1.jpeg')",
          backgroundAttachment: 'fixed',
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          /* Force display if clipping occurs */
          display: 'block'
        }}
      >
        🎀
      </h1> 
    </div>
  );
};

export default ParallaxCutout;