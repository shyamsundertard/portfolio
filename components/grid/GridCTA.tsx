import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaHeart } from 'react-icons/fa';

const GridCTA = ({ getAdaptiveAnimationProps }: { getAdaptiveAnimationProps: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={getAdaptiveAnimationProps(0.8, 0.7)}
    className="text-center px-4 sm:px-0"
  >
    <div className="relative bg-gradient-to-r from-blue-600/10 via-purple-600/20 to-pink-600/20 rounded-2xl p-6 sm:p-8 md:p-12 border border-border overflow-hidden mx-auto max-w-5xl">
      <div className="relative z-10 w-full">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mb-6 mx-auto"
        >
          <FaStar className="text-2xl text-white" />
        </motion.div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 px-2">
          Ready to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-400">
            Collaborate?
          </span>
        </h3>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 px-2">
          Let&apos;s work together to bring your ideas to life. I&apos;m passionate about creating exceptional digital experiences that make a difference.
        </p>
        <motion.a
          href="#contact"
          animate={{ scale: 1 }}
          whileHover={{
            scale: 1.06,
            transition: {
              type: "spring",
              stiffness: 600,
              damping: 20,
              mass: 0.3
            }
          }}
          whileTap={{
            scale: 0.94,
            transition: {
              type: "spring",
              stiffness: 800,
              damping: 25
            }
          }}
          exit={{
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 600,
              damping: 20,
              mass: 0.3
            }
          }}
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold text-white text-base sm:text-lg shadow-2xl hover:shadow-blue-500/30 transition-shadow duration-150 ease-out mx-auto cursor-pointer w-full max-w-full overflow-x-auto justify-center text-center whitespace-normal"
        >
          <FaHeart className="mr-2 sm:mr-3 scale-[3] sm:scale-100" />
          <span>Let&apos;s Create Something Amazing</span>
        </motion.a>
      </div>
    </div>
  </motion.div>
);

export default GridCTA;
