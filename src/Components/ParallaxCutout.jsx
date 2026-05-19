import React from 'react';

const ParallaxCutout = () => {
  return (

    <div className="relative w-full  bg-[#fce4ec] flex items-center justify-center px-4 md:px-10 lg:px-20 py-10 md:py-20 box-border overflow-hidden">
      <h1 
        className="select-none text-[50vw] md:text-[45vw] lg:text-[40vw] uppercase tracking-tighter leading-none m-0 py-10 text-center w-full block"
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