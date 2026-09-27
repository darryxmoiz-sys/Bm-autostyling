'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
export default function ParallaxImg({ src, alt }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -40]);
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-md" style={{ boxShadow: '0 0 0 3px rgba(255,63,216,.5), 8px 8px 0 0 rgba(47,199,255,.6)' }}>
      <motion.img src={src} alt={alt} style={{ y }} className="h-full w-full scale-110 object-cover" />
    </div>
  );
}
