"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../utils/cn";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();

  const [visible, setVisible] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = section === "" ? document.body : document.getElementById(section);
        
        if (element) {
          const offsetTop = section === "" ? 0 : element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section === "" ? "/" : `#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const currentScrollY = current;
      const direction = currentScrollY - prevScrollY;

      if (currentScrollY < 0.03) {
        setVisible(false);
      } else {
        if (direction < -0.001) {
          setVisible(true);
        } else if (direction > 0.003) {
          setVisible(false);
        }
      }
      
      setPrevScrollY(currentScrollY);
    }
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -100,
          }}
          transition={{
            duration: 0.2,
            ease: [0.4, 0.0, 0.2, 1],
          }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border rounded-full shadow-2xl backdrop-blur-xl z-[5000] px-2 py-3 items-center justify-center bg-card/90 border-border/50 hover:border-border/80 transition-all duration-300",
          className
        )}
      >
        <a href="/" className="flex items-center justify-center">
          <Image
            src={theme === "dark" ? "/logos/logo_light.png" : "/logos/logo_dark.png"}
            alt="Logo"
            width={40}
            height={40}
            priority
            className="rounded-lg"
          />
        </a>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-xl opacity-50" />
        
        {navItems.map((navItem: any, idx: number) => {
          const isActive = activeSection === navItem.link;
          
          return (
            <motion.div
              key={`link=${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={idx === 0 ? "ml-2" : idx === navItems.length - 1 ? "mr-2" : "mx-2"}
            >
              <Link
                href={navItem.link}
                className={cn(
                  "relative group flex items-center space-x-2 px-2 py-2 rounded-full transition-all duration-300 hover:bg-accent/50",
                  isActive 
                    ? "text-foreground bg-accent/30 shadow-md" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full transition-opacity duration-300",
                  isActive ? "opacity-60" : "opacity-0 group-hover:opacity-100"
                )} />
                
                <span className={cn(
                  "relative z-10 flex items-center justify-center w-5 h-5 transition-transform duration-300",
                  isActive ? "scale-110 text-blue-500" : "group-hover:scale-110"
                )}>
                  {navItem.icon}
                </span>
                
                <span className={cn(
                  "relative z-10 hidden sm:block text-sm transition-all duration-300",
                  isActive ? "font-semibold" : "font-medium group-hover:font-semibold"
                )}>
                  {navItem.name}
                </span>
                
                <motion.div
                  className={cn(
                    "absolute -bottom-1 left-1/2 w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}
                  initial={{ scale: 0, x: "-50%" }}
                  animate={{ scale: isActive ? 1 : 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>
          );
        })}
        
        <div className="absolute top-1 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full blur-sm" />
        <div className="absolute bottom-1 right-1/4 w-1.5 h-1.5 bg-purple-400/30 rounded-full blur-sm" />
      </motion.div>
      )}
    </AnimatePresence>
  );
};
