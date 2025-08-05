import React from 'react';
import { motion } from 'framer-motion';

const ContactHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
      Let&apos;s Connect
    </h2>
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
      I&apos;m always interested in new opportunities and exciting projects. 
      Feel free to reach out!
    </p>
  </motion.div>
);

export default ContactHeader; 