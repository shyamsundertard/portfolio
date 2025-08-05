"use client";

import { useEffect, useState, useRef } from 'react';

export const useScrollSpeed = () => {
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      const currentTime = Date.now();
      const currentScrollY = window.scrollY;
      
      const timeDiff = currentTime - lastScrollTime.current;
      const scrollDiff = Math.abs(currentScrollY - lastScrollY.current);
      
      // Calculate pixels per millisecond, then convert to pixels per second
      const speed = timeDiff > 0 ? (scrollDiff / timeDiff) * 1000 : 0;
      
      setScrollSpeed(speed);
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Set scrolling to false after 150ms of no scroll events
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        setScrollSpeed(0);
      }, 150);
      
      lastScrollY.current = currentScrollY;
      lastScrollTime.current = currentTime;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  // Calculate adaptive animation duration based on scroll speed
  const getAdaptiveAnimationProps = (baseDuration: number = 0.6, baseDelay: number = 0) => {
    // Fast scroll threshold (pixels per second)
    const fastScrollThreshold = 2000;
    const veryFastScrollThreshold = 4000;
    
    let duration = baseDuration;
    let delay = baseDelay;
    
    if (scrollSpeed > veryFastScrollThreshold) {
      // Very fast scroll - instant animation
      duration = 0.1;
      delay = 0;
    } else if (scrollSpeed > fastScrollThreshold) {
      // Fast scroll - 50% duration
      duration = baseDuration * 0.3;
      delay = baseDelay * 0.2;
    } else if (scrollSpeed > 1000) {
      // Medium scroll - 75% duration
      duration = baseDuration * 0.6;
      delay = baseDelay * 0.5;
    }
    
    return {
      duration,
      delay,
      scrollSpeed,
      isScrolling
    };
  };

  return {
    scrollSpeed,
    isScrolling,
    getAdaptiveAnimationProps
  };
};
