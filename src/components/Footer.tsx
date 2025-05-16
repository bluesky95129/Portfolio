import React from 'react';
import { Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 sm:mb-0">
          © {year} AI Full Stack Developer. All rights reserved.
        </p>
        
        <div className="flex items-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center">
            Built with 
            <Heart className={`w-4 h-4 mx-1 ${
              theme === 'neon' ? 'text-neon-pink' : 'text-primary-500'
            }`} /> 
            using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;