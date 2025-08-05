"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import ScrollingGrid from '@/components/ui/ScrollingGrid';
import Image from 'next/image';

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <ScrollingGrid />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src={theme === 'dark' ? '/logos/logo_light.png' : '/logos/logo_dark.png'}
                alt="Logo"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 40px rgba(139, 92, 246, 0.4)",
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* 404 Number */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
          >
            404
          </motion.h1>

          {/* Error Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-muted-foreground text-lg mb-8 leading-relaxed"
          >
            Oops! The page you&apos;re looking for seems to have drifted into the cosmic void. 
            Let&apos;s get you back to familiar territory.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 bg-card text-foreground border border-border rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-accent"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse pointer-events-none"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/10 rounded-full blur-2xl animate-pulse pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </div>
  );
} 