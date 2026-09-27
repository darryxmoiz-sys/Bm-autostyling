'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
export default function Cursor() {
  const x = useMotionValue(-600), y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 90, damping: 22 }), sy = useSpring(y, { stiffness: 90, damping: 22 });
  useEffect(() => {
    const move = (e) => { x.set(e.clientX - 220); y.set(e.clientY - 220); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);
  return (
    <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-40 hidden h-[440px] w-[440px] rounded-full md:block"
      style={{ x: sx, y: sy, background: 'radial-gradient(circle, rgba(255,63,216,.12), transparent 65%)' }} />
  );
}
