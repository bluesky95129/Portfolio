import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import SectionContainer from '../SectionContainer';

const Hero: React.FC = () => {
  const { theme } = useTheme();

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <SectionContainer id="home" className="relative flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto">
        <motion.h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
            theme === 'neon' ? 'neon-text' : 'text-primary-700'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          AI Full Stack Developer
        </motion.h1>

        <motion.h2 
          className="text-xl md:text-2xl font-medium mb-8 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Automation • CRM • VoIP
        </motion.h2>

        <motion.p 
          className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Building intelligent systems that bridge AI, automation, and real-world business needs.
          Let's create something impactful together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#contact" 
            className={`px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 
                       ${theme === 'neon' 
                           ? 'bg-neon-blue/20 text-white border border-neon-blue/50 shadow-neon-blue hover:bg-neon-blue/30' 
                           : 'bg-primary-500 text-white hover:bg-primary-600'
                       }`}
          >
            Get in Touch
          </a>
          <a 
            href="#projects" 
            className={`px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105
                       ${theme === 'neon'
                           ? 'bg-transparent border border-white/20 text-gray-300 hover:border-white/40 hover:text-white'
                           : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                       }`}
          >
            View Projects
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <button
          onClick={scrollToNext}
          className={`p-2 rounded-full transition-all 
                     ${theme === 'neon' 
                         ? 'text-neon-blue hover:bg-neon-blue/10' 
                         : 'text-primary-500 hover:bg-primary-50'
                     }`}
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </motion.div>
    </SectionContainer>
  );
};

export default Hero;