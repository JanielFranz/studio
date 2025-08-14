"use client";
import React, { useEffect, useRef } from "react";

// Lightweight animated particle noise background (moving black points)
// Renders a canvas full screen, behind all content.
export const NoiseBackground: React.FC<{ density?: number; speed?: number; className?: string }> = ({
  density = 0.00018, // particles per pixel
  speed = 0.15, // base speed multiplier
  className = ""
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const resizeTimeout = useRef<number>();

  interface Particle {
    x: number; y: number; r: number; vx: number; vy: number; a: number;
  }

  const createParticles = (w: number, h: number) => {
    const count = Math.min(400, Math.floor(w * h * density));
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.5 + Math.random() * 1.2,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      a: 0.3 + Math.random() * 0.7,
    }));
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width: w, height: h } = canvas;
    ctx.clearRect(0, 0, w, h);

    // subtle vignette background (optional) - disabled for performance
    // ctx.fillStyle = "rgba(0,0,0,0.02)";
    // ctx.fillRect(0,0,w,h);

    for (const p of particlesRef.current) {
      p.x += p.vx;
      p.y += p.vy;
      // wrap
      if (p.x < 0) p.x = w; else if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; else if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.fillStyle = `rgba(0,0,0,${p.a})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(draw);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
      createParticles(window.innerWidth, window.innerHeight);
    };

    setSize();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Dibujo estático sin animación para accesibilidad
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        for (const p of particlesRef.current) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(0,0,0,${p.a})`;
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      // Escuchar resize para re-render estático
      const handleResizeStatic = () => {
        window.clearTimeout(resizeTimeout.current);
        resizeTimeout.current = window.setTimeout(() => {
          setSize();
          const ctx2 = canvas.getContext('2d');
          if (ctx2) {
            ctx2.clearRect(0,0,canvas.width, canvas.height);
            for (const p of particlesRef.current) {
              ctx2.beginPath();
              ctx2.fillStyle = `rgba(0,0,0,${p.a})`;
              ctx2.arc(p.x, p.y, p.r, 0, Math.PI * 2);
              ctx2.fill();
            }
          }
        }, 150);
      };
      window.addEventListener('resize', handleResizeStatic);
      return () => window.removeEventListener('resize', handleResizeStatic);
    }

    draw();

    const handleResize = () => {
      window.clearTimeout(resizeTimeout.current);
      resizeTimeout.current = window.setTimeout(() => {
        setSize();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [density, speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={
        "pointer-events-none fixed inset-0 z-0 opacity-70 mix-blend-multiply " +
        "[mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)] " +
        className
      }
    />
  );
};

export default NoiseBackground;
