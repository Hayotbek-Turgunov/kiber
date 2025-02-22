"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const particles: {
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      size: number;
      color: string;
    }[] = [];
    const particleCount = 70;
    const minDistance = 120;

    // Function to generate a color gradient
    function getColor(y: number): string {
      const hue = Math.floor((y / height) * 150) + 150; // Hue varies from 150 to 300 (green to purple)
      return `hsl(${hue}, 100%, 50%)`;
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const size = 2 + Math.random() * 3;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        size: size,
        color: getColor(Math.random() * height),
      });
    }

    function drawParticle(particle: {
      x: number;
      y: number;
      size: number;
      color: string;
    }) {
      if (!ctx) return;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawLine(x1: number, y1: number, x2: number, y2: number) {
      if (!ctx) return;
      ctx.strokeStyle = "rgba(0, 255, 70, 0.15)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    function updateParticles() {
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off the walls
        if (particle.x < 0 || particle.x > width) {
          particle.speedX = -particle.speedX;
        }
        if (particle.y < 0 || particle.y > height) {
          particle.speedY = -particle.speedY;
        }

        // Wrap around the screen
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        particle.color = getColor(particle.y);
      }
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < minDistance) {
            drawLine(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
          }
        }
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height); // Clear the entire canvas

      updateParticles();
      connectParticles();

      particles.forEach((particle) => {
        drawParticle(particle);
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
