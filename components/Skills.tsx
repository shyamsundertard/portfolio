"use client";

import React from 'react';
import { skills } from '@/Data';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';
import { useAdaptiveMotion } from '../hooks/useAdaptiveMotion';
import Image from 'next/image';

const Skills = () => {
  const { animations } = useAdaptiveMotion();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-20 relative rounded-2xl overflow-hidden">

      {/* background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-cyan-50/30 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-cyan-950/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={animations.header()}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={animations.text(0.2)}
            className="inline-flex items-center px-6 py-3 bg-surface/5 backdrop-blur-md border border-border rounded-full text-sm font-medium text-foreground shadow-lg mb-6"
          >
            <FaRocket className="mr-2 text-blue-400" />
            My Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={animations.text(0.4)}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6"
          >
            Skills & Technologies
          </motion.h2>
        </motion.div>

        {/* Skils card */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 group-hover:bg-card/90 group-hover:border-border/70 transition-all duration-300 h-full">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                        {category.category.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {category.category}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                  </div>

                  <div className="grid grid-cols-3 gap-2 max-h-[240px] overflow-visible pr-2 scrollbar-thin scrollbar-thumb-border/50 scrollbar-track-transparent hover:scrollbar-thumb-border/70 auto-rows-auto">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={animations.listItem(techIndex)}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.5 },
                          zIndex: 10
                        }}
                        className="group/tech relative overflow-hidden z-0 hover:z-10"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-muted/20 rounded-xl opacity-0 group-hover/tech:opacity-100 transition-all duration-300" />
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} background`}
                          fill
                          className="absolute inset-0 object-cover opacity-10 pointer-events-none rounded-xl"
                        />
                        <div className="relative flex flex-col items-center justify-center p-3 bg-foreground/5 backdrop-blur-sm border border-border/30 rounded-xl hover:border-border/50 transition-all duration-300 h-full">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={24}
                            height={24}
                            className="mb-1 group-hover/tech:scale-110 transition-transform duration-300 rounded-full p-[0.5px]"
                          />
                          <span className="text-[0.65rem] sm:text-xs font-medium text-center text-muted-foreground group-hover/tech:text-foreground transition-colors duration-300 leading-tight">
                            {tech.name}
                          </span>
                        </div>
                        <div className="absolute inset-0 ring-2 ring-transparent group-hover/tech:ring-blue-500/30 rounded-xl transition-all duration-300" />
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/30">
                    <div className="flex justify-center">
                      <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <div 
                            key={i}
                            className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Areas of Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Areas of Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                description: "Building responsive, interactive user interfaces with modern frameworks and best practices",
                technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
                icon: "🎨",
                gradient: "from-blue-500/10 to-cyan-500/10"
              },
              {
                title: "Backend Development", 
                description: "Creating robust APIs, database architecture, and server-side solutions",
                technologies: ["Node.js", "Express", "Prisma", "MongoDB"],
                icon: "⚙️",
                gradient: "from-purple-500/10 to-pink-500/10"
              },
              {
                title: "Full-Stack Solutions",
                description: "End-to-end development from concept to deployment with modern DevOps practices",
                technologies: ["Git", "Docker", "AWS", "Vercel"],
                icon: "🚀",
                gradient: "from-green-500/10 to-emerald-500/10"
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
                <div className={`relative bg-gradient-to-br ${area.gradient} backdrop-blur-sm border border-border/40 rounded-2xl p-8 hover:border-border/60 hover:shadow-xl transition-all duration-300 h-full`}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-card/50 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{area.icon}</span>
                    </div>
                    <h4 className="text-xl font-bold text-foreground">{area.title}</h4>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 bg-card/60 text-muted-foreground rounded-lg border border-border/30 hover:bg-card/80 hover:text-foreground transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
