import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../../types';
import SectionContainer from '../SectionContainer';

const experiences: Experience[] = [
  {
    title: 'AI-Driven CRM Platforms',
    description: 'Developed and deployed AI-driven CRM platforms with embedded automation for sales and support teams.',
    highlights: [
      'Reduced manual tasks by 60% through intelligent workflow automation',
      'Implemented adaptive lead scoring using machine learning',
      'Created custom dashboards with real-time analytics',
      'Integrated GPT-based agents for automated customer responses'
    ]
  },
  {
    title: 'VoIP Dashboards & Systems',
    description: 'Built real-time VoIP dashboards with call tracking and live metrics for global call centers.',
    highlights: [
      'Implemented WebRTC-based communication systems',
      'Developed custom call routing based on agent availability and skill matching',
      'Created real-time analytics dashboards with live call monitoring',
      'Integrated with existing CRM platforms for unified customer data'
    ]
  },
  {
    title: 'Enterprise Chatbots & Assistants',
    description: 'Led the architecture and development of intelligent chatbots for enterprise clients.',
    highlights: [
      'Utilized OpenAI and LangChain for advanced conversational capabilities',
      'Implemented RAG systems with custom knowledge bases',
      'Automated support workflows reducing response times by 80%',
      'Deployed multi-channel bot interfaces (web, mobile, messaging platforms)'
    ]
  },
  {
    title: 'Internal Knowledge Systems',
    description: 'Integrated LLMs into internal business tools for knowledge management and process automation.',
    highlights: [
      'Built comprehensive knowledge retrieval systems with vector search',
      'Developed automated documentation generators',
      'Created custom Q&A systems tailored to specific domains',
      'Implemented semantic search across enterprise documents'
    ]
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <SectionContainer id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary-300 to-primary-600 dark:from-neon-blue dark:to-neon-purple transform -translate-x-1/2 md:block hidden"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`md:flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary-500 dark:bg-neon-blue shadow-lg transform -translate-x-1/2 md:block hidden"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'} pl-10 md:pl-0`}>
                    <div className="glass-card rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-2 dark:text-neon-blue text-primary-600">
                        {exp.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li 
                            key={idx} 
                            className="text-gray-600 dark:text-gray-400 flex items-start"
                          >
                            <span className="text-primary-500 dark:text-neon-blue mr-2">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;