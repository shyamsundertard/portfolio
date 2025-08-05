"use client";

import React from 'react';
import { contactInfo, personalInfo } from '@/Data';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative rounded-xl bg-gradient-to-t from-primary/5 to-background border-t border-border/50 select-none">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-border/80 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {personalInfo.name}
              </h3>
              <p className="text-lg text-primary mb-4 font-medium">
                {personalInfo.title}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {personalInfo.summary}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-primary text-sm" />
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-primary text-sm" />
                  <span className="text-muted-foreground text-sm">
                    {contactInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-primary transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary/20 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Let&apos;s Connect
            </h3>
            <div className="space-y-4">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-accent/50 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FaGithub className="text-lg" />
                </div>
                <span>GitHub</span>
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-accent/50 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FaLinkedin className="text-lg" />
                </div>
                <span>LinkedIn</span>
              </a>
              <a
                href={contactInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-accent/50 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FaTwitter className="text-lg" />
                </div>
                <span>Twitter</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-bounce" />
              <span>by Shyamsunder Tard</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 