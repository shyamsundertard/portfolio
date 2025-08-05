"use client";

import React from 'react';
import { FaCode, FaLightbulb, FaUsers, FaBrain, FaShieldAlt, FaBolt, FaPalette, FaCogs } from 'react-icons/fa';
import { useScrollSpeed } from '../hooks/useScrollSpeed';

import GridHeader from './grid/GridHeader';
import ExpertiseGrid from './grid/ExpertiseGrid';
import GridCTA from './grid/GridCTA';

const expertiseItems = [
  {
    id: 1,
    title: "Full-Stack Development",
    description: "End-to-end web application development with modern technologies and best practices",
    icon: FaCode,
    color: "blue",
    gradient: "from-cyan-500 to-zinc-500",
    features: ["React & Next.js", "Node.js & Express", "TypeScript", "MongoDB & Prisma"]
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive user interfaces with exceptional user experiences",
    icon: FaPalette,
    color: "purple",
    gradient: "from-blue-700 to-pink-600",
    features: ["Tailwind CSS", "Framer Motion", "Shadcn/ui", "Responsive Design"]
  },
  {
    id: 3,
    title: "Performance Optimization",
    description: "Building lightning-fast applications with optimized code and efficient architecture",
    icon: FaBolt,
    color: "yellow",
    gradient: "from-yellow-500 to-orange-500",
    features: ["Code Splitting", "Lazy Loading", "Caching", "SEO Optimization"]
  },
  {
    id: 4,
    title: "Problem Solving",
    description: "Analytical thinking and creative solutions for complex technical challenges",
    icon: FaBrain,
    color: "green",
    gradient: "from-green-500 to-emerald-500",
    features: ["Algorithm Design", "System Architecture", "Debugging", "Code Review"]
  },
  {
    id: 5,
    title: "Security & Best Practices",
    description: "Implementing robust security measures and following industry standards",
    icon: FaShieldAlt,
    color: "red",
    gradient: "from-blue-700 to-cyan-600",
    features: ["Authentication", "Data Protection", "API Security", "Testing"]
  },
  {
    id: 6,
    title: "DevOps & Deployment",
    description: "Streamlined deployment processes and cloud infrastructure management",
    icon: FaCogs,
    color: "indigo",
    gradient: "from-indigo-600 to-zinc-600",
    features: ["Docker", "AWS/Vercel", "CI/CD", "Monitoring"]
  }
];

const additionalFeatures = [
  {
    icon: FaCode,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code that stands the test of time",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    description: "Always exploring new technologies and approaches to solve complex problems",
    color: "yellow",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    description: "Thriving in team environments and effectively communicating technical concepts",
    color: "green",
    gradient: "from-green-500 to-emerald-500"
  }
];

const Grid = () => {
  const { getAdaptiveAnimationProps } = useScrollSpeed();

  return (
    <section id="grid" className="relative py-24 overflow-hidden select-none">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GridHeader getAdaptiveAnimationProps={getAdaptiveAnimationProps} />
        <ExpertiseGrid
          expertiseItems={expertiseItems}
          additionalFeatures={additionalFeatures}
          getAdaptiveAnimationProps={getAdaptiveAnimationProps}
        />
        <GridCTA getAdaptiveAnimationProps={getAdaptiveAnimationProps} />
      </div>
    </section>
  );
};

export default Grid;