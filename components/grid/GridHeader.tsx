import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';

const GridHeader = ({ getAdaptiveAnimationProps }: { getAdaptiveAnimationProps: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={getAdaptiveAnimationProps(0.8)}
    className="text-center mb-20"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={getAdaptiveAnimationProps(0.6, 0.2)}
      className="inline-flex items-center px-6 py-3 bg-surface/5 backdrop-blur-md border border-border rounded-full text-sm font-medium text-foreground shadow-lg mb-6"
    >
      <FaRocket className="mr-2 text-blue-400" />
      My Expertise
    </motion.div>
    <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
      What I{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
        Specialize In
      </span>
    </h2>
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
      From full-stack development to cutting-edge technologies, here&apos;s what I bring to the table
    </p>
  </motion.div>
);

export default GridHeader;
