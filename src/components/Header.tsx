import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { NavItem } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  activeSection: string | null;
  navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ activeSection, navItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setClickedItem(id);
    setTimeout(() => setClickedItem(null), 300); // Reset after animation

    const element = document.getElementById(id);
    const headerOffset = 100; // Increased offset to account for header height
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 glass shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#home" 
          className={`text-xl md:text-2xl font-bold transition-colors ${
            theme === 'neon' 
              ? 'text-white neon-text' 
              : 'text-primary-700'
          }`}
        >
          DevPortfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`px-1 py-2 text-sm transition-all relative ${
                    clickedItem === item.id
                      ? 'scale-95'
                      : ''
                  } ${
                    activeSection === item.id
                      ? theme === 'neon'
                        ? 'text-neon-blue font-medium'
                        : 'text-primary-600 font-medium'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span 
                      className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full ${
                        theme === 'neon' 
                          ? 'bg-neon-blue shadow-neon-blue' 
                          : 'bg-primary-500'
                      }`} 
                    />
                  )}
                  {clickedItem === item.id && (
                    <span 
                      className={`absolute inset-0 rounded-lg ${
                        theme === 'neon'
                          ? 'bg-neon-blue/10'
                          : 'bg-primary-100'
                      } animate-ping`}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t mt-2 py-4">
          <nav className="container mx-auto px-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 w-full text-left relative transition-all ${
                      clickedItem === item.id
                        ? 'scale-95'
                        : ''
                    } ${
                      activeSection === item.id
                        ? theme === 'neon'
                          ? 'text-neon-blue font-medium'
                          : 'text-primary-600 font-medium'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {item.label}
                    {clickedItem === item.id && (
                      <span 
                        className={`absolute inset-0 ${
                          theme === 'neon'
                            ? 'bg-neon-blue/10'
                            : 'bg-primary-100'
                        } animate-ping`}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;