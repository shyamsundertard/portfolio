import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaGlobe } from 'react-icons/fa';
import { contactInfo } from '@/Data';

const ContactInfo = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="space-y-6"
  >
    <Card className="bg-white/5 backdrop-blur-sm border-border/80">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Get in Touch</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-primary text-xl" />
          <div>
            <p className="text-foreground font-medium">Email</p>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-primary text-xl" />
          <div>
            <p className="text-foreground font-medium">Location</p>
            <p className="text-muted-foreground">{contactInfo.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card className="bg-white/5 backdrop-blur-sm border-border/80">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Follow Me</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 p-3 bg-accent/50 rounded-lg hover:bg-accent transition-colors"
          >
            <FaLinkedin className="text-primary" />
            <span className="text-foreground">LinkedIn</span>
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 p-3 bg-accent/50 rounded-lg hover:bg-accent transition-colors"
          >
            <FaGithub className="text-foreground" />
            <span className="text-foreground">GitHub</span>
          </a>
          <a
            href={contactInfo.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 p-3 bg-accent/50 rounded-lg hover:bg-accent transition-colors"
          >
            <FaTwitter className="text-primary" />
            <span className="text-foreground">Twitter</span>
          </a>
          <a
            href={contactInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 p-3 bg-accent/50 rounded-lg hover:bg-accent transition-colors"
          >
            <FaGlobe className="text-primary" />
            <span className="text-foreground">Website</span>
          </a>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default ContactInfo; 