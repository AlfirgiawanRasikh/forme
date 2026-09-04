'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ImageRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function ImageReveal({ children, delay = 0 }: ImageRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { scale: 0.985 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: '160px 0px' }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.55,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-image-reveal
    >
      {children}
    </motion.div>
  );
}
