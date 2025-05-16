import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../SectionContainer';

const About: React.FC = () => {
  return (
    <SectionContainer id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="space-y-4 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              I'm a Full Stack Developer with a strong specialization in AI-integrated systems, 
              process automation, CRM architecture, and VoIP development. With several years of 
              hands-on experience building scalable, production-grade solutions, I combine deep 
              backend knowledge with a sharp frontend sensibility and an AI-first mindset.
            </p>
            <p>
              My solutions frequently include advanced AI agents, custom automation workflows, 
              data pipelines, CRM integrations, and real-time VoIP features. I'm highly experienced 
              in bridging traditional software systems with modern AI tools, helping businesses 
              automate, optimize, and scale with confidence.
            </p>
            <p>
              I combine technical precision with a strong sense of business priorities to deliver 
              intelligent, future-ready solutions that work seamlessly at scale.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="glass-card rounded-2xl p-6 lg:p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4 dark:text-white">What I Do</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-primary-500 dark:text-neon-blue mr-2">•</span>
              <span>Design and build intelligent full stack applications that solve real-world business challenges</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 dark:text-neon-blue mr-2">•</span>
              <span>Develop AI-driven systems with custom agents, RAG implementations, and advanced LLM integrations</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 dark:text-neon-blue mr-2">•</span>
              <span>Create seamless CRM solutions with automated workflows and intelligent lead scoring</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 dark:text-neon-blue mr-2">•</span>
              <span>Build real-time VoIP systems with call tracking, analytics, and custom routing</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 dark:text-neon-blue mr-2">•</span>
              <span>Implement automated data pipelines that connect services and streamline operations</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 dark:text-neon-blue mr-2">•</span>
              <span>Architect comprehensive frontend experiences with modern frameworks and responsive designs</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default About;