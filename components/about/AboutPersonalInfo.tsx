import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { FaUser, FaGlobe } from 'react-icons/fa';
import { personalInfo } from '@/Data';

const AboutPersonalInfo = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="md:h-full"
  >
    <Card className="bg-white/5 backdrop-blur-md border-border text-foreground shadow-2xl hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <CardHeader className="pb-6">
        <CardTitle className="text-3xl text-foreground flex items-center">
          <div className="p-3 bg-primary/20 rounded-xl mr-4">
            <FaUser className="text-2xl text-primary" />
          </div>
          Who I Am
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 flex-1 flex flex-col justify-around">
        <div className="text-center pb-6 border-b border-border">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block mb-6"
          >
            <div className="absolute inset-0 w-48 h-60 mx-auto rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl"></div>
            <div className="relative w-48 h-60 mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-2xl hover:shadow-3xl">
              <div className="relative w-full h-full">
                <Image
                  src="/profile-photo.png"
                  alt={`${personalInfo.name} - Professional Photo`}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                  priority
                  onError={(e) => {
                    console.error('Profile image failed to load:', e);
                  }}
                  onLoad={() => {
                    console.log('Profile image loaded successfully');
                  }}
                />
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
            <div className="absolute inset-0 w-48 h-60 mx-auto rounded-3xl border border-primary/20 animate-ping [animation-duration:3.5s] [animation-delay:0s]"></div>
            <div className="absolute inset-0 w-48 h-60 mx-auto rounded-3xl border border-primary/15 animate-ping [animation-duration:3.5s] [animation-delay:0.7s]"></div>
            <div className="absolute inset-0 w-48 h-60 mx-auto rounded-3xl border border-primary/10 animate-ping [animation-duration:3.5s] [animation-delay:1.4s]"></div>
            <div className="absolute inset-0 w-48 h-60 mx-auto rounded-3xl border border-primary/8 animate-ping [animation-duration:3.5s] [animation-delay:2.1s]"></div>
            <div className="absolute inset-0 w-48 h-60 mx-auto rounded-3xl border border-primary/5 animate-ping [animation-duration:3.5s] [animation-delay:2.8s]"></div>
          </motion.div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {personalInfo.name}
          </h3>
          <p className="text-primary text-lg font-medium">
            {personalInfo.title}
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-border"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-foreground text-sm">Available for work</span>
              </div>
              <span className="text-green-500 text-xs font-medium">Open</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-border"
            >
              <div className="flex items-center">
                <FaGlobe className="text-primary mr-3 text-sm" />
                <span className="text-foreground text-sm">Location</span>
              </div>
              <span className="text-muted-foreground text-xs">Remote/Worldwide</span>
            </motion.div>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default AboutPersonalInfo; 