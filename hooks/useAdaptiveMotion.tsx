"use client";

import { useScrollSpeed } from './useScrollSpeed';

// Higher-order component or hook for adaptive animations
export const useAdaptiveMotion = () => {
  const { getAdaptiveAnimationProps, scrollSpeed, isScrolling } = useScrollSpeed();

  // Pre-configured animation props for common use cases
  const animations = {
    // Header animations
    header: (delay: number = 0) => getAdaptiveAnimationProps(0.8, delay),
    
    // Card animations with staggered delays
    card: (index: number) => getAdaptiveAnimationProps(0.6, index * 0.1),
    
    // List item animations
    listItem: (index: number) => getAdaptiveAnimationProps(0.3, index * 0.05),
    
    // Section animations
    section: (delay: number = 0.5) => getAdaptiveAnimationProps(0.8, delay),
    
    // Button animations
    button: () => getAdaptiveAnimationProps(0.4, 0),
    
    // Text animations
    text: (delay: number = 0.2) => getAdaptiveAnimationProps(0.6, delay),
    
    // Image animations
    image: (delay: number = 0.3) => getAdaptiveAnimationProps(0.7, delay),
    
    // Grid animations
    grid: (delay: number = 0.3) => getAdaptiveAnimationProps(0.8, delay),
    
    // Custom animation with specific duration and delay
    custom: (duration: number, delay: number = 0) => getAdaptiveAnimationProps(duration, delay)
  };

  // Common motion variants that adapt to scroll speed
  const variants = {
    container: {
      hidden: { opacity: 0 },
      visible: (custom: any) => ({
        opacity: 1,
        transition: {
          duration: custom?.duration || 0.6,
          delay: custom?.delay || 0,
          staggerChildren: custom?.stagger || 0.1
        }
      })
    },
    
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: (custom: any) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: custom?.duration || 0.4,
          delay: custom?.delay || 0
        }
      })
    },
    
    slideUp: {
      hidden: { opacity: 0, y: 30 },
      visible: (custom: any) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: custom?.duration || 0.6,
          delay: custom?.delay || 0
        }
      })
    },
    
    slideIn: {
      hidden: { opacity: 0, x: -20 },
      visible: (custom: any) => ({
        opacity: 1,
        x: 0,
        transition: {
          duration: custom?.duration || 0.5,
          delay: custom?.delay || 0
        }
      })
    },
    
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: (custom: any) => ({
        opacity: 1,
        scale: 1,
        transition: {
          duration: custom?.duration || 0.5,
          delay: custom?.delay || 0
        }
      })
    }
  };

  return {
    animations,
    variants,
    scrollSpeed,
    isScrolling,
    getAdaptiveAnimationProps
  };
};

export default useAdaptiveMotion;
