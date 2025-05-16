import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';
import SectionContainer from '../SectionContainer';

const skills: Skill[] = [
  {
    category: 'Frontend',
    items: [
      'React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 
      'Material UI', 'Bootstrap', 'TypeScript', 'JavaScript'
    ]
  },
  {
    category: 'Backend',
    items: [
      'Node.js (Express, NestJS)', 'Python (FastAPI, Flask, Django)', 
      'REST APIs', 'GraphQL', 'WebSockets', 'Microservices',
      'Serverless Functions'
    ]
  },
  {
    category: 'AI & Automation',
    items: [
      'OpenAI (GPT, RAG, fine-tuning)', 'LangChain', 'LlamaIndex',
      'Agent Architectures', 'Prompt Engineering', 'Vector DBs',
      'Custom AI Integrations'
    ]
  },
  {
    category: 'CRM & VoIP',
    items: [
      'Salesforce', 'HubSpot', 'Zoho CRM', 'Asterisk', 'FreePBX',
      'Twilio', 'WebRTC', 'SIP Integration'
    ]
  },
  {
    category: 'Database & DevOps',
    items: [
      'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Docker',
      'Kubernetes', 'GitHub Actions', 'CI/CD Pipelines',
      'AWS', 'DigitalOcean', 'Vercel'
    ]
  }
];

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 } 
    }
  };

  return (
    <SectionContainer id="skills">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="glass-card rounded-xl p-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-neon-blue text-primary-600">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li 
                    key={idx}
                    className="text-gray-700 dark:text-gray-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 dark:bg-neon-blue/70 mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Skills;