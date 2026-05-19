import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

function FallingText() {
  const containerRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const chipRefs = useRef([]);
  const skills = [
    "React", "Java", "Tailwind v4", "Vite", "UI/UX", 
    "Generics", "Reflection", "Web Dev", "IntelliJ", "VS Code",
    "Figma", "CSS3", "HTML5", "JavaScript", "OOP", "Spring",
    "PostgreSQL", "Git", "Animations", "Responsive", "Frontend"
  ];

  useEffect(() => {
    const { Engine, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;
    const engine = engineRef.current;
    const container = containerRef.current;
    
    // Physics: Realistic gravity
    engine.world.gravity.y = 1.0; 

    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const CHIP_WIDTH = 120;
    const CHIP_HEIGHT = 40;

    // Boundaries
    const floor = Bodies.rectangle(width / 2, height + 20, width, 40, { isStatic: true });
    const leftWall = Bodies.rectangle(-20, height / 2, 40, height, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 20, height / 2, 40, height, { isStatic: true });

    // Chips
    const chipBodies = skills.map((_, i) => 
      Bodies.rectangle(Math.random() * width, -100 - (i * 100), CHIP_WIDTH, CHIP_HEIGHT, { 
        restitution: 0.3, 
        friction: 0.2, 
        frictionAir: 0.02, 
        chamfer: { radius: 20 }
      })
    );

    // Interaction: Mouse with Scroll-Fix
    const mouse = Mouse.create(container);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } }
    });

    // Scroll Fix: Only prevent scrolling if user is dragging a chip
    container.addEventListener("wheel", (e) => {
        if (mouseConstraint.body) e.preventDefault();
    }, { passive: false });

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        World.add(engine.world, [floor, leftWall, rightWall, ...chipBodies, mouseConstraint]);
        Runner.run(Runner.create(), engine);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    observer.observe(container);

    // Animation Loop
    const animate = () => {
      chipBodies.forEach((body, i) => {
        const el = chipRefs.current[i];
        if (el) {
          const { x, y } = body.position;
          el.style.transform = `translate(${x - CHIP_WIDTH / 2}px, ${y - CHIP_HEIGHT / 2}px) rotate(${body.angle}rad)`;
        }
      });
      requestAnimationFrame(animate);
    };
    const frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#FFF5F8] py-16 px-4">
      <div className="text-center mb-12">
        <p className="font-['Poppins'] text-[10px] tracking-[0.6em] uppercase text-[#b4647d] opacity-60">Tech Stack</p>
        <h2 className="font-['Playfair_Display'] text-[#334155] text-5xl mt-2">
            My <span className="text-[#b4647d] font-medium">Skills</span>
        </h2>
      </div>

      <div 
        ref={containerRef} 
        className="relative w-full max-w-4xl h-[60vh] md:h-[75vh] overflow-hidden bg-white/60 backdrop-blur-3xl rounded-[2rem] border-[8px] border-white shadow-2xl"
      >
        {/* Instruction Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <p className="font-['Poppins'] text-[#b4647d] opacity-20 text-sm md:text-lg uppercase tracking-[0.3em] text-center select-none">
            The elements are interactive!!!
          </p>
        </div>

        {/* Physics Chips */}
        {skills.map((skill, i) => (
          <div
            key={i}
            ref={(el) => (chipRefs.current[i] = el)}
            className="absolute flex items-center justify-center bg-white text-[#b4647d] border border-[#b4647d]/10 rounded-full text-[10px] uppercase tracking-[0.2em] shadow-sm font-['Poppins'] px-6 cursor-grab z-10"
            style={{ 
              width: '120px', 
              height: '40px', 
              willChange: 'transform',
              userSelect: 'none',
              WebkitUserSelect: 'none'
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FallingText;