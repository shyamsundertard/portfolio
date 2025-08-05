"use client";

import React from 'react';
import { experience } from '@/Data';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { FaBriefcase, FaCalendarAlt, FaMapPin } from 'react-icons/fa';
import { useScrollSpeed } from '../hooks/useScrollSpeed';
import Image from 'next/image';

const Experience = () => {
  const { getAdaptiveAnimationProps } = useScrollSpeed();
  
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={getAdaptiveAnimationProps(0.6)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        {/* Work Experience Section */}
        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={getAdaptiveAnimationProps(0.6, index * 0.1)}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-border/80 text-foreground">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl text-foreground flex items-center">
                        <FaBriefcase className="mr-3 text-primary" />
                        {job.position}
                      </CardTitle>
                      <div className="flex items-center mt-2 gap-1">
                        {job.logo && (
                          <Image
                            src={job.logo}
                            alt={`${job.company} logo`}
                            width={40}
                            height={40}
                            className="mr-2 rounded-md bg-primary/10 scale-[1.25] border border-primary/30"
                          />
                        )}
                        <CardDescription className="text-xl text-primary">
                          {job.company}
                        </CardDescription>
                      </div>
                    </div>
                    <div className='flex flex-col'>
                    <div className="flex items-center text-muted-foreground mt-4 md:mt-0">
                      <FaCalendarAlt className="mr-2" />
                      {job.duration}
                    </div>
                    {job.location && (
                      <div className="text-sm text-muted-foreground mt-1 flex items-center">
                        <span className="mr-2"><FaMapPin/></span>
                        {job.location}
                      </div>
                    )}
                      
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start text-muted-foreground"
                        >
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={getAdaptiveAnimationProps(0.6, 0.3)}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border border-border backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready for the Next Challenge
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always looking for new opportunities to grow and contribute to innovative projects. 
              Let&apos;s discuss how I can add value to your team.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;