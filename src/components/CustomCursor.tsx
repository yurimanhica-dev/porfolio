"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function DotCursor() {
  // posição base
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // ponto rápido
  const dotX = useSpring(x, { stiffness: 500, damping: 40 });
  const dotY = useSpring(y, { stiffness: 500, damping: 40 });

  // borda com delay (movimento mais suave)
  const ringX = useSpring(x, { stiffness: 200, damping: 20 });
  const ringY = useSpring(y, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 4);
      y.set(e.clientY - 4);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      {/* Ponto central (cursor principal) */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] w-2 h-2 bg-white rounded-full pointer-events-none mix-blend-difference"
        style={{ x: dotX, y: dotY }}
      />

      {/* Borda externa (círculo suave com delay) */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] w-7 h-7 border border-white rounded-full pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
