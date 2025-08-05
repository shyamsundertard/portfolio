"use client";

import React from 'react'
import ScrollingGrid from './ScrollingGrid'
import FloatingDots from './FloatingDots'

interface AnimatedBackgroundProps {
  className?: string;
  dotsCount?: number;
  showOrbs?: boolean;
  showGrid?: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  className = "",
  dotsCount = 100,
  showOrbs = true,
  showGrid = true
}) => {
  return (
    <>
      {showGrid && <ScrollingGrid className={className} />}
      {showOrbs && <FloatingDots className={className} dotsCount={dotsCount} />}
    </>
  )
}

export default AnimatedBackground
