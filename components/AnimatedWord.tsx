'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence, cubicBezier } from 'framer-motion';

interface AnimatedWordProps {
  words: string[];
  duration?: number; // duration each word is visible in seconds
  suffix?: ReactNode; // optional suffix to animate with the word
}

export default function AnimatedWord({ words, duration = 2, suffix }: AnimatedWordProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxWidth, setMaxWidth] = useState<number | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate the width of the longest word
  useEffect(() => {
    if (!containerRef.current) return;

    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.style.whiteSpace = 'nowrap';

    // Copy font styles from container
    const styles = window.getComputedStyle(containerRef.current);
    tempSpan.style.font = styles.font;
    tempSpan.style.letterSpacing = styles.letterSpacing;
    tempSpan.style.lineHeight = styles.lineHeight;

    document.body.appendChild(tempSpan);

    // Measure all words with suffix
    const widths = words.map(word => {
      tempSpan.innerHTML = word;
      if (suffix && typeof suffix === 'object' && 'props' in suffix) {
        tempSpan.innerHTML = word + '<span>.</span>';
      } else if (typeof suffix === 'string') {
        tempSpan.innerHTML = word + suffix;
      }
      return tempSpan.offsetWidth;
    });

    const max = Math.max(...widths);
    setMaxWidth(max);
    document.body.removeChild(tempSpan);
  }, [words, suffix]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  const variants = {
    enter: {
      y: 20,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: cubicBezier(0.34, 1.56, 0.64, 1),
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: cubicBezier(0.34, 1.56, 0.64, 1),
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="inline-block"
      style={{ width: maxWidth ? `${maxWidth}px` : 'auto', verticalAlign: 'baseline' }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="inline-block"
          style={{ verticalAlign: 'baseline' }}
        >
          {words[currentIndex]}
          {suffix}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
