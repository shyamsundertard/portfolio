import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaCode } from 'react-icons/fa';

const AboutCTA = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="text-center"
  >
    <div className="relative bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-12 border border-border overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--foreground)/0.02)_50%,transparent_75%)] bg-[length:20px_20px]" />
      <div className="relative z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6"
        >
          <FaLightbulb className="text-2xl text-white" />
        </motion.div>
        <h3 className="text-3xl font-bold text-foreground mb-6">
          Passion for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
            Innovation
          </span>
        </h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
          I believe in the power of technology to solve real-world problems. 
          Every project is an opportunity to learn, grow, and create something meaningful that makes a difference.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:from-blue-700 hover:to-cyan-700"
        >
          <FaCode className="mr-3 scale-[3] sm:scale-[1]" />
          Let&apos;s Build Something Amazing
        </motion.a>
      </div>
    </div>
  </motion.div>
);

export default AboutCTA; 