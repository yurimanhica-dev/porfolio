"use client";
import { useEffect, useRef } from "react";

const DistortionEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const gridSize = 20;
    const cols = Math.ceil(width / gridSize);
    const rows = Math.ceil(height / gridSize);

    const offset = Array.from({ length: cols * rows }).map(() => ({
      x: 0,
      y: 0,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255,255,255,0.03)"; // cor da partícula

      let i = 0;
      for (let y = 0; y < height; y += gridSize) {
        for (let x = 0; x < width; x += gridSize) {
          const o = offset[i];
          if (!o) continue; // segurança extra

          ctx.fillRect(x + o.x, y + o.y, gridSize, gridSize);

          o.x += o.dx;
          o.y += o.dy;

          if (o.x > 2 || o.x < -2) o.dx *= -1;
          if (o.y > 2 || o.y < -2) o.dy *= -1;

          i++;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default DistortionEffect;
