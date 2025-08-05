import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { FaCertificate } from 'react-icons/fa';
import { certifications } from '@/Data';

const AboutCertifications = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="mb-20"
  >
    <Card className="bg-white/5 backdrop-blur-md border-border text-foreground shadow-2xl hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-8">
        <CardTitle className="text-3xl text-foreground flex items-center">
          <div className="p-3 bg-yellow-500/20 rounded-xl mr-4">
            <FaCertificate className="text-2xl text-yellow-500" />
          </div>
          Professional Certifications
        </CardTitle>
        <CardDescription className="text-muted-foreground text-lg">
          Continuous learning and professional development
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group p-6 bg-white/5 rounded-xl border border-border hover:bg-white/10 hover:border-border/40 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <FaCertificate className="text-yellow-500" />
                </div>
                <span className="text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">
                  {cert.date}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-yellow-500 transition-colors">
                {cert.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-2">
                {cert.issuer}
              </p>
              <p className="text-muted-foreground text-xs font-mono">
                ID: {cert.credentialId}
              </p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default AboutCertifications; 