import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { FaHeart, FaRocket, FaGlobe } from 'react-icons/fa';
import { personalInfo } from '@/Data';

const AboutStory = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.1 }}
    className="md:h-full"
  >
    <Card className="bg-white/5 backdrop-blur-md border-border text-foreground shadow-2xl hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <CardHeader className="pb-6">
        <CardTitle className="text-3xl text-foreground flex items-center">
          <div className="p-3 bg-blue-500/20 rounded-xl mr-4">
            <FaHeart className="text-2xl text-blue-500" />
          </div>
          My Journey
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 flex-1">
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <FaHeart className="mr-2 text-red-500" />
            My Story
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <FaRocket className="mr-2 text-green-500" />
            What Drives Me
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            {personalInfo.about}
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <FaGlobe className="mr-2 text-primary" />
            Interests & Hobbies
          </h4>
          <div className="flex flex-wrap gap-3">
            {personalInfo.interests.map((interest, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-4 py-2 text-sm bg-primary/20 text-primary rounded-full border border-primary/30 hover:bg-primary/30 transition-all duration-300"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default AboutStory; 