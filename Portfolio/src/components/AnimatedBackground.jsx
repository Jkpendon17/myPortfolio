import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set full viewport size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Enhanced particles with better visibility
    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 5), 150);

    class Particle {
      constructor() {
        this.reset();
        this.baseSize = Math.random() * 2 + 1;
        this.sizeVariation = Math.random() * 1.5;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = this.baseSize + Math.sin(Date.now() * 0.001) * this.sizeVariation;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
        this.color = `hsla(${Math.random() * 60 + 200}, 80%, 65%, 0.8)`;  // More vibrant
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size = this.baseSize + Math.sin(Date.now() * 0.001) * this.sizeVariation;
        
        if (this.x > canvas.width + 50 || this.x < -50 || 
            this.y > canvas.height + 50 || this.y < -50) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections first (behind particles)
      ctx.shadowBlur = 0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.strokeStyle = `hsla(200, 80%, 70%, ${0.7 - distance/170})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Then draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="animated-background"
    />
  );
};

export default AnimatedBackground;