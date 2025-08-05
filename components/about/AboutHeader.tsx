import React from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

const AboutHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-20"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-md border border-border rounded-full text-sm font-medium text-foreground shadow-lg mb-6"
    >
      <FaUser className="mr-2 text-primary" />
      About Me
    </motion.div>
    <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
      Get to Know{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
        Me Better
      </span>
    </h2>
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
      Discover my journey, passion for technology, and what drives me to create innovative solutions
    </p>
  </motion.div>
);

export default AboutHeader; 