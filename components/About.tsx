"use client";

import React from 'react';
import AboutHeader from './about/AboutHeader';
import AboutPersonalInfo from './about/AboutPersonalInfo';
import AboutStory from './about/AboutStory';
import AboutEducation from './about/AboutEducation';
// import AboutCertifications from './about/AboutCertifications';
import AboutCTA from './about/AboutCTA';

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orb-blue rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orb-purple rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orb-purple rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHeader />
        <div className="space-y-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AboutPersonalInfo />
            <AboutStory />
          </div>
          <AboutEducation />
        </div>
        {/* <AboutCertifications /> */}
        <AboutCTA />
      </div>
    </section>
  );
};

export default About;