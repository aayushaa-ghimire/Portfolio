import './App.css';
import AppRoutes from './Routes/AppRoutes';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  // Use MotionValues for high-performance tracking (zero re-renders)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // useSpring creates that "heavy" high-end fluid movement
  const springConfig = { damping: 40, stiffness: 250, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(function() {
    AOS.init();
    AOS.refresh();

    const handleMouseMove = function(e) {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return function() {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-none">
      {/* Global Sparkly Aesthetic Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Main Sparkle - Glow added for visibility */}
          <span className="text-[#f06292] text-3xl drop-shadow-[0_0_10px_rgba(240,98,146,0.6)]">
            ✧
          </span>
          
          {/* Elegant Dust Particles */}
          {[...Array(5)].map(function(_, i) {
            return (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-[#f48fb1] rounded-full"
                animate={{
                  x: [0, (i - 2) * 25, 0],
                  y: [0, (i - 2) * -25, 0],
                  opacity: [0, 0.7, 0],
                  scale: [0, 1.3, 0]
                }}
                transition={{
                  duration: 4, // Slower for elegance
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </div>
      </motion.div>

      <ScrollToTop />
      <AppRoutes />
    </div>
  );
}

export default App;