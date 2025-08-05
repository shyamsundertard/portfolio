"use client";

import React, { useState } from 'react';
import { projects, freelanceProjects } from '@/Data';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { FaGithub, FaExternalLinkAlt, FaStar, FaUser, FaProjectDiagram, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';
import { useScrollSpeed } from '../hooks/useScrollSpeed';

const Projects = () => {
  const { getAdaptiveAnimationProps } = useScrollSpeed();
  const [filter, setFilter] = useState('All');
  const [section, setSection] = useState('personal');
  const personalCategories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];
  const freelanceCategories = freelanceProjects.length > 0 
    ? ['All', ...Array.from(new Set(freelanceProjects.map(project => (project as any).projectType)))]
    : ['All'];
  const categories = section === 'personal' ? personalCategories : freelanceCategories;

  const filteredProjects = section === 'personal' 
    ? (filter === 'All' ? projects : projects.filter(project => project.category === filter))
    : (filter === 'All' ? freelanceProjects : freelanceProjects.filter(project => (project as any).projectType === filter));

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={getAdaptiveAnimationProps(0.6)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my personal projects and client work
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={getAdaptiveAnimationProps(0.6, 0.1)}
          className="flex justify-center gap-4 mb-8"
        >
          <Button
            variant={section === 'personal' ? 'gradient' : 'outline'}
            onClick={() => {
              setSection('personal');
              setFilter('All');
            }}
            className="border-border hover:bg-accent hover:text-accent-foreground"
          >
            Personal Projects
          </Button>
          <Button
            variant={section === 'freelance' ? 'gradient' : 'outline'}
            onClick={() => {
              setSection('freelance');
              setFilter('All');
            }}
            className="border-border hover:bg-accent hover:text-accent-foreground"
          >
            Freelance Projects
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'gradient' : 'outline'}
              onClick={() => setFilter(category)}
              className="border-border hover:bg-accent hover:text-accent-foreground"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section === 'personal' ? (
            (filteredProjects as typeof projects).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-border/80 h-full flex flex-col justify-center items-center">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-foreground">
                          {project.title}
                          {project.featured && (
                            <FaStar className="inline ml-2 text-yellow-500" />
                          )}
                        </CardTitle>
                        <span className="inline-block px-2 py-1 text-xs bg-primary/20 text-primary rounded-full mt-2">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className={`mb-4 ${project.description.length > 150 ? 'max-h-28 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent pr-2' : ''}`}>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-foreground/10 text-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-foreground border-border hover:bg-foreground/10"
                      onClick={() => project.github && window.open(project.github, '_blank')}
                      disabled={!project.github}
                    >
                      <FaGithub className="mr-2" />
                      {project.github ? 'Code' : 'Unavailable'}
                    </Button>
                    <Button
                      variant="gradient"
                      size="sm"
                      className="flex-1"
                      onClick={() => project.live && window.open(project.live, '_blank')}
                      disabled={!project.live}
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      {project.live ? 'Live Demo' : 'Unavailable'}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            // Check if freelanceProjects is empty
            freelanceProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="col-span-full"
              >
                <Card className="bg-white/5 backdrop-blur-sm border-border/80 h-full">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                        <FaProjectDiagram className="text-2xl text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      Freelance Projects Coming Soon
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-lg">
                      I&apos;m currently working on some exciting freelance projects that will be showcased here soon.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Stay tuned for real-world projects, client collaborations, and professional case studies that demonstrate my expertise in delivering high-quality solutions.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="px-3 py-1 text-sm bg-foreground/10 text-foreground rounded-full">
                        Client Work
                      </span>
                      <span className="px-3 py-1 text-sm bg-foreground/10 text-foreground rounded-full">
                        Case Studies
                      </span>
                      <span className="px-3 py-1 text-sm bg-foreground/10 text-foreground rounded-full">
                        Professional Solutions
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-border hover:bg-accent bg-background/30 hover:text-accent-foreground"
                      onClick={() => setSection('personal')}
                    >
                      View Personal Projects
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ) : (
              (filteredProjects as any[]).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-border/80 h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl text-foreground flex items-center">
                            <FaProjectDiagram className="mr-2 text-primary" />
                            {project.projectName}
                          </CardTitle>
                          <CardDescription className="text-primary mt-2 flex items-center">
                            <FaUser className="mr-2" />
                            {project.client}
                          </CardDescription>
                          <div className="flex items-center justify-between mt-3">
                            <span className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30">
                              {project.projectType}
                            </span>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <FaCalendarAlt className="mr-1" />
                              {project.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className={`mb-4 ${project.description.length > 150 ? 'max-h-28 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent pr-2' : ''}`}>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech: string) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-foreground/10 text-foreground rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Results:</h4>
                        <ul className={`space-y-1 ${project.achievements.length > 3 ? 'max-h-20 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent pr-2' : ''}`}>
                          {project.achievements.map((achievement: string, achievementIndex: number) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start text-muted-foreground text-sm"
                            >
                              <span className="text-primary mr-2 mt-0.5 flex-shrink-0">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      {project.link && project.link.trim() !== '' ? (
                        <Button
                          variant="gradient"
                          size="sm"
                          className="w-full"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          {project.linkType === 'live' ? (
                            <>
                              <FaExternalLinkAlt className="mr-2" />
                              View Live Site
                            </>
                          ) : (
                            <>
                              <FaFileAlt className="mr-2" />
                              View Case Study
                            </>
                          )}
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-muted-foreground border-border"
                          disabled
                        >
                          <FaFileAlt className="mr-2" />
                          {project.linkType === 'live' ? 'Site Coming Soon' : 'Documentation Coming Soon'}
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border border-border backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Want to see more?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <Button
              variant="gradient"
              size="lg"
              onClick={() => window.open('https://github.com/shyamsundertard', '_blank')}
            >
              <FaGithub className="mr-2" />
              View GitHub Profile
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;