import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github as GitHub, Linkedin, Send } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import SectionContainer from '../SectionContainer';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', formState);
    // Form submission would go here
    
    // Reset form
    setFormState({
      name: '',
      email: '',
      message: ''
    });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <SectionContainer id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:.2 }}
        >
          Let's discuss how we can work together to build intelligent, innovative solutions for your business needs.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                Connect With Me
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:example@example.com" 
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-neon-blue transition-colors"
                >
                  <div className={`p-2 rounded-full ${theme === 'neon' ? 'bg-neon-blue/10' : 'bg-primary-100'}`}>
                    <Mail className={`w-5 h-5 ${theme === 'neon' ? 'text-neon-blue' : 'text-primary-600'}`} />
                  </div>
                  <span>bluesky950129@gmail.com</span>
                </a>

                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-neon-blue transition-colors"
                >
                  <div className={`p-2 rounded-full ${theme === 'neon' ? 'bg-neon-blue/10' : 'bg-primary-100'}`}>
                    <GitHub className={`w-5 h-5 ${theme === 'neon' ? 'text-neon-blue' : 'text-primary-600'}`} />
                  </div>
                  <span>github.com/bluesky95129</span>
                </a>

                {/* <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-neon-blue transition-colors"
                >
                  <div className={`p-2 rounded-full ${theme === 'neon' ? 'bg-neon-blue/10' : 'bg-primary-100'}`}>
                    <Linkedin className={`w-5 h-5 ${theme === 'neon' ? 'text-neon-blue' : 'text-primary-600'}`} />
                  </div>
                  <span>linkedin.com/in/username</span>
                </a> */}
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                Availability
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                I'm currently available for freelance work and full-time opportunities.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Response time: <span className="font-medium text-primary-600 dark:text-neon-blue">24-48 hours</span>
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 dark:text-white">
                Send a Message
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-neon-blue dark:bg-gray-800/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-neon-blue dark:bg-gray-800/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-neon-blue dark:bg-gray-800/50"
                  />
                </div>
                
                <button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2
                             ${theme === 'neon' 
                                 ? 'bg-neon-blue/20 text-white border border-neon-blue/50 shadow-neon-blue hover:bg-neon-blue/30' 
                                 : 'bg-primary-500 text-white hover:bg-primary-600'
                             } transition-all`}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;