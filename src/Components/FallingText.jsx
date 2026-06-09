

import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

function FallingText() {
  const containerRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const constraintRef = useRef(null);
  const [items, setItems] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  
  const skills = [
    "React", "Tailwind v4", "Vite", "UI/UX", 
     "Web Dev",  "Vercel",
    "CSS", "HTML", "JavaScript", 
    "MySQL", "Git", "GitHub", "Animations", "Responsive", "Frontend"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setIsStarted(true);
    }, { threshold: 0.1 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isStarted || !containerRef.current) return;

    const { Engine, World, Bodies, Runner } = Matter;
    const engine = engineRef.current;
    
    // FASTER PHYSICS SETTINGS
    engine.gravity.y = 1.8; 

    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;

    const floor = Bodies.rectangle(width / 2, height - 10, width, 20, { isStatic: true, friction: 0.05 });
    const leftWall = Bodies.rectangle(-20, height / 2, 40, height, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 20, height / 2, 40, height, { isStatic: true });

    const chipBodies = skills.map((skill, i) => 
      Bodies.rectangle(
        Math.random() * (width - 140) + 70,
        -100 - (i * 50), 
        130, 
        45, 
        { 
          restitution: 0.8, 
          friction: 0.05, 
          chamfer: { radius: 22 }, 
          label: skill 
        }
      )
    );

    const runner = Runner.create();
    Runner.run(runner, engine);
    World.add(engine.world, [floor, leftWall, rightWall, ...chipBodies]);

    let requestID;
    function syncPhysics() {
      setItems(chipBodies.map(body => ({
        name: body.label,
        x: body.position.x,
        y: body.position.y,
        angle: body.angle,
        id: body.id
      })));
      requestID = requestAnimationFrame(syncPhysics);
    }
    syncPhysics();

    return () => {
      cancelAnimationFrame(requestID);
      Runner.stop(runner);
      Engine.clear(engine);
      World.clear(engine.world);
      engine.gravity.y = 1; 
    };
  }, [isStarted]);

  function handlePointerDown(e) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const clickedBody = Matter.Query.point(engineRef.current.world.bodies, { x, y })[0];
    
    if (clickedBody && !clickedBody.isStatic) {
      const constraint = Matter.Constraint.create({
        pointA: { x, y },
        bodyB: clickedBody,
        stiffness: 0.2,
        damping: 0.1
      });
      constraintRef.current = constraint;
      Matter.World.add(engineRef.current.world, constraint);
    }
  }

  function handlePointerMove(e) {
    if (constraintRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      constraintRef.current.pointA = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
  }

  function handlePointerUp() {
    if (constraintRef.current) {
      Matter.World.remove(engineRef.current.world, constraintRef.current);
      constraintRef.current = null;
    }
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#FFF5F8] py-16">
      <div className="text-center mb-12">
        <p className="font-['Poppins'] text-[10px] tracking-[0.6em] uppercase text-[#b4647d] font-normal opacity-60">Tech Stack</p>
        <h2 className="font-['Playfair_Display'] text-[#334155] text-5xl font-normal mt-2">
            My <span className="font-['Playfair_Display'] text-[#b4647d] text-5xl font-medium mt-4"> Skills</span>
        </h2>
      </div>

      <div 
        ref={containerRef} 
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        // Responsive Height: 60vh (mobile) to 75vh (desktop)
        className="relative w-[90%] md:w-[85%] max-w-4xl h-[60vh] md:h-[75vh] overflow-hidden bg-white/60 backdrop-blur-3xl rounded-[3.5rem] border-[16px] border-white shadow-[0_40px_100px_-20px_rgba(180,100,125,0.12)] cursor-grab active:cursor-grabbing touch-pan-y"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="absolute flex items-center justify-center bg-white text-[#b4647d] border border-[#b4647d]/10 rounded-full font-normal text-[10px] uppercase tracking-[0.2em] shadow-sm transition-transform font-['Poppins'] select-none"
            style={{
              width: '130px',
              height: '45px',
              transform: `translate(${item.x - 65}px, ${item.y - 22}px) rotate(${item.angle}rad)`,
              willChange: 'transform',
              zIndex: 10,
              pointerEvents: 'none'
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FallingText;