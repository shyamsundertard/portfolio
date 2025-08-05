"use client";

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaRocket } from 'react-icons/fa'
import { personalInfo } from '@/Data'
import { useScrollSpeed } from '../hooks/useScrollSpeed';
import dynamic from 'next/dynamic';
const LogoGalaxy = dynamic(() => import('./LogoGalaxy'), { ssr: false });
import Image from 'next/image';
import { useTheme } from "next-themes";

const Hero = () => {
  const { getAdaptiveAnimationProps } = useScrollSpeed();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible bg-gradient-to-br from-hero-start to-hero-end select-none">
      {mounted && (
        <a href="/" className="absolute top-1 left-2 z-50 block">
          <motion.div
            key={theme}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Image
              src={theme === "dark" ? "/logos/logo_light.png" : "/logos/logo_dark.png"}
              alt="Logo"
              width={64}
              height={64}
              priority
              className="transition-all duration-300"
            />
          </motion.div>
        </a>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-gradient-start via-orb-blue to-orb-purple" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-visible">
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 overflow-visible">
          <div className="flex-1 w-full z-50">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getAdaptiveAnimationProps(1)}
              className="space-y-12 pt-1"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={getAdaptiveAnimationProps(0.6, 0.2)}
                className="inline-flex items-center px-6 py-2 mt-16 rounded-full text-sm font-medium text-foreground bg-white/10 backdrop-blur-lg border border-blue-400/30 shadow-md relative"
              >
                <span className="absolute -inset-1 rounded-full pointer-events-none bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-40 blur-md" />
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse shadow shadow-green-400/40 border border-white/60" />
                <span className="font-semibold tracking-wide">
                  Available for new opportunities
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={getAdaptiveAnimationProps(0.8, 0.3)}
                className="space-y-6"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground leading-tight">
                  Hi, I&apos;m{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    {personalInfo.name}
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary">
                  {personalInfo.title}
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={getAdaptiveAnimationProps(0.8, 0.4)}
                className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              >
                <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
                  {personalInfo.summary}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={getAdaptiveAnimationProps(0.8, 0.5)}
                className="flex flex-wrap justify-center gap-4"
              >
                {[
                  { name: 'React', icon: '/logos/react.png', alt: 'React' },
                  { name: 'Next.js', icon: '/logos/next.png', alt: 'Next.js' },
                  { name: 'TypeScript', icon: '/logos/ts.png', alt: 'TypeScript' },
                  { name: 'Node.js', icon: '/logos/node.png', alt: 'Node.js' },
                  { name: 'MongoDB', icon: '/logos/mongodb.png', alt: 'MongoDB' }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={getAdaptiveAnimationProps(0.5, 0.6 + index * 0.1)}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { type: "tween", duration: 0.15, ease: "easeInOut" }
                    }}
                    className="group px-6 py-3 bg-surface/5 backdrop-blur-md border border-border rounded-xl text-foreground/90 hover:bg-surface/10 hover:border-border/40 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.alt}
                      width={24}
                      height={24}
                      className="inline mr-2"
                    />
                    <span className="font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={getAdaptiveAnimationProps(0.8, 0.6)}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.a
                  href="#projects"
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "tween", duration: 0.15, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl font-semibold text-white text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <FaCode className="inline mr-3 text-xl" />
                  View My Work
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                </motion.a>
                
                <motion.a
                  href="#contact"
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "tween", duration: 0.15, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-border rounded-xl font-semibold text-foreground text-lg hover:bg-surface/10 hover:border-border/60 transition-all duration-300 backdrop-blur-sm"
                >
                  <FaRocket className="inline mr-3 text-xl" />
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          <div className="flex-1 w-full md:max-w-md overflow-visible flex justify-center items-center">
            <div className="w-full max-w-[320px] aspect-square mx-auto md:max-w-md md:mx-0">
              <LogoGalaxy />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero;
