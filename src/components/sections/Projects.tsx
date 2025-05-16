import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import SectionContainer from '../SectionContainer';

const projects: Project[] = [
  {
    title: 'AI-Enhanced CRM Dashboard',
    description: 'A comprehensive CRM platform with AI-powered insights, automated workflows, and real-time analytics for sales teams.',
    technologies: ['React', 'Node.js', 'OpenAI', 'MongoDB', 'WebSockets'],
    image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'VoIP Analytics Platform',
    description: 'Real-time call center analytics system with agent performance tracking, call quality monitoring, and customer sentiment analysis.',
    technologies: ['Vue.js', 'FastAPI', 'WebRTC', 'PostgreSQL', 'Redis'],
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Intelligent Document Processor',
    description: 'Advanced document processing system that automates data extraction, classification, and routing using AI and machine learning.',
    technologies: ['Next.js', 'Python', 'LangChain', 'Pinecone', 'Docker'],
    image: 'https://images.pexels.com/photos/8092507/pexels-photo-8092507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Automated Support Bot Platform',
    description: 'Enterprise-grade support bot platform with multi-channel deployment, knowledge base integration, and ticket management.',
    technologies: ['React', 'NestJS', 'GraphQL', 'MongoDB', 'LlamaIndex'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Projects: React.FC = () => {
  return (
    <SectionContainer id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-700 dark:bg-neon-blue/10 dark:text-neon-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Projects;