"use client";

import React from 'react'
import { motion } from 'framer-motion'

interface FloatingDotsProps {
  className?: string;
  dotsCount?: number;
}

const FloatingDots: React.FC<FloatingDotsProps> = ({ 
  className = "",
  dotsCount = 100
}) => {
  const dots = Array.from({ length: dotsCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1.5,
    duration: Math.random() * 15 + 8,
    delay: Math.random() * 5, 
  }))

  return (
    <div className={`fixed inset-0 pointer-events-none z-10 ${className}`}>
      <div className="absolute inset-0">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full shadow-lg"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              background: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default FloatingDots
