import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastSpawnPos = useRef({ x: 0, y: 0 }); // Tracks spacing

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawHeart = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.beginPath();
      
      const s = p.size;
      // High-performance heart path
      ctx.moveTo(0, s * 0.3);
      ctx.bezierCurveTo(-s * 0.5, -s * 0.5, -s * 1.5, s * 0.5, 0, s * 1.5);
      ctx.bezierCurveTo(s * 1.5, s * 0.5, s * 0.5, -s * 0.5, 0, s * 0.3);
      
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life;
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.current.splice(i, 1);
        } else {
          drawHeart(p);
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const createParticles = (x, y) => {
      // Spawning 2 hearts at a time for a fuller but spaced look
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x,
          y,
          size: Math.random() * 3 + 5, // Keeping them small and cute
          color: '#b4647d',
          speedX: (Math.random() - 0.5) * 1.2,
          speedY: (Math.random() - 0.5) * 1.2,
          rotation: (Math.random() - 0.5) * 0.3,
          life: 1,
          decay: 0.025 
        });
      }
    };

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      mousePos.current = { x, y };

      // Calculate distance from last heart spawn
      const dist = Math.hypot(x - lastSpawnPos.current.x, y - lastSpawnPos.current.y);

      // Spacing check: Only spawn if moved more than 12 pixels
      if (dist > 12) { 
        createParticles(x, y);
        lastSpawnPos.current = { x, y };
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999
      }} 
    />
  );
}