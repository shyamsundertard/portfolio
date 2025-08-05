"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [justUnhovered, setJustUnhovered] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setIsToggling(true);
    setTheme(theme === "dark" ? "light" : "dark");
    setTimeout(() => setIsToggling(false), 300);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setJustUnhovered(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setJustUnhovered(true);
    setTimeout(() => setJustUnhovered(false), 300);
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      onClick={handleToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-card/90 backdrop-blur-md border border-border/60 hover:bg-accent hover:border-border shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        rotate: isToggling ? 180 : 0,
        scale: isToggling ? 1.1 : 1
      }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 10 
      }}
      style={{
        boxShadow: isToggling 
          ? "0 0 20px rgba(59, 130, 246, 0.5)" 
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      }}
    >
      <div className="relative">
        <AnimatePresence mode="wait">
          {theme === "dark" ? (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                rotate: isHovered ? 25 : justUnhovered ? -25 : 0, 
                scale: 1 
              }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Sun className="h-5 w-5 text-yellow-500 dark:text-yellow-400 drop-shadow-sm" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                rotate: isHovered ? -25 : justUnhovered ? 25 : 0, 
                scale: 1 
              }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Moon className="h-5 w-5 text-blue-600 dark:text-blue-400 drop-shadow-sm" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}
