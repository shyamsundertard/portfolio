"use client";

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ScrollingGridProps {
  className?: string;
}

const ScrollingGrid: React.FC<ScrollingGridProps> = ({ 
  className = ""
}) => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentLoaded(true);
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none z-10 ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: isContentLoaded ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          background: `
            linear-gradient(90deg, 
              rgba(15, 23, 42, 0.8) 0%, 
              rgba(30, 41, 59, 0.6) 50%, 
              rgba(15, 23, 42, 0.8) 100%
            )
          `,
          display: isContentLoaded ? 'none' : 'block',
        }}
      />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isContentLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <motion.div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at center, transparent 30px, currentColor 31px, currentColor 32px, transparent 33px),
              radial-gradient(circle at 50% 0%, transparent 30px, currentColor 31px, currentColor 32px, transparent 33px),
              radial-gradient(circle at 100% 50%, transparent 30px, currentColor 31px, currentColor 32px, transparent 33px),
              radial-gradient(circle at 50% 100%, transparent 30px, currentColor 31px, currentColor 32px, transparent 33px),
              radial-gradient(circle at 0% 50%, transparent 30px, currentColor 31px, currentColor 32px, transparent 33px),
              radial-gradient(circle at 25% 25%, transparent 30px, currentColor 31px, currentColor 32px, transparent 33px)
            `,
            backgroundSize: '100px 87px, 100px 87px, 100px 87px, 100px 87px, 100px 87px, 100px 87px',
            backgroundPosition: `
              0px 0px,
              50px 43.5px,
              0px 43.5px,
              50px 87px,
              0px 87px,
              25px 21.75px
            `,
            opacity: 0.3,
            width: '100%',
            height: '120vh',
            top: '-10vh',
            filter: 'blur(0.2px)',
          }}
          animate={{
            color: [
              'rgba(59, 130, 246, 0.4)', 
              'rgba(139, 92, 246, 0.4)', 
              'rgba(236, 72, 153, 0.4)', 
              'rgba(34, 197, 94, 0.4)',  
              'rgba(245, 158, 11, 0.4)', 
              'rgba(59, 130, 246, 0.4)', 
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div 
          className="absolute inset-0"
          style={{
            background: `
              conic-gradient(from 0deg at 50% 50%, 
                transparent 0deg, 
                currentColor 60deg, 
                transparent 120deg, 
                currentColor 180deg, 
                transparent 240deg, 
                currentColor 300deg, 
                transparent 360deg
              )
            `,
            backgroundSize: '80px 69px',
            backgroundPosition: '40px 34.5px',
            opacity: 0.1,
            width: '100%',
            height: '120vh',
            top: '-10vh',
            filter: 'blur(0.5px)',
          }}
          animate={{
            color: [
              'rgba(139, 92, 246, 0.3)',
              'rgba(236, 72, 153, 0.3)',
              'rgba(34, 197, 94, 0.3)',
              'rgba(245, 158, 11, 0.3)',
              'rgba(59, 130, 246, 0.3)',
              'rgba(139, 92, 246, 0.3)',
            ]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.08) 0%, transparent 60%),
              radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.08) 0%, transparent 60%),
              radial-gradient(circle at 50% 20%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)
            `,
            opacity: 0.7,
          }}
        />
      </motion.div>
    </div>
  )
}

export default ScrollingGrid
