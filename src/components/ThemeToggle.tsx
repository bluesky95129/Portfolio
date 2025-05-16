import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 ease-in-out 
                 hover:bg-gray-200 dark:hover:bg-gray-800 
                 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-neon-blue"
      aria-label={`Switch to ${theme === 'light' ? 'neon' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-700" />
      ) : (
        <Sun className="w-5 h-5 text-neon-yellow" />
      )}
    </button>
  );
};

export default ThemeToggle;