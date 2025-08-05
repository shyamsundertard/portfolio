import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { FaGraduationCap } from 'react-icons/fa';
import { education } from '@/Data';

const AboutEducation = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <Card className="bg-white/5 backdrop-blur-md border-border text-foreground shadow-2xl hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-6">
        <CardTitle className="text-3xl text-foreground flex items-center">
          <div className="p-3 bg-green-500/20 rounded-xl mr-4">
            <FaGraduationCap className="text-2xl text-green-500" />
          </div>
          Education Journey
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative pl-8 pb-6 border-l-2 border-green-500/50 hover:border-green-500 transition-colors duration-300"
          >
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50" />
            <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {edu.degree}
              </h3>
              <p className="text-green-500 text-lg font-medium mb-2">
                {edu.institution}
              </p>
              <p className="text-muted-foreground text-sm mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {edu.duration}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                {edu.description}
              </p>
              {edu.gpa && (
                <div className="inline-flex items-center px-3 py-1 bg-green-500/20 rounded-full">
                  <span className="text-green-500 text-sm font-medium">
                    GPA: {edu.gpa}
                  </span>
                </div>
              )}
              {edu.percentage && (
                <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 rounded-full ml-2">
                  <span className="text-blue-500 text-sm font-medium">
                    Percentage: {edu.percentage}%
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  </motion.div>
);

export default AboutEducation; 