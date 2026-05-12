import React from 'react';

const ParallaxCutout = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#fce4ec] flex items-center justify-center px-10 py-20 box-border">
      <h1 
        className="select-none text-[40vw] uppercase tracking-tighter leading-none m-0 p-0 text-center w-full block"
        style={{ 
          fontFamily: "'Poppins', sans-serif",  
          fontWeight: 400, 
          backgroundImage: "url('/img4.jpeg')",
          backgroundAttachment: 'fixed',
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        🎀
      </h1> 
    </div>
  );
};

export default ParallaxCutout;