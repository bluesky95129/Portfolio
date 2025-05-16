import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import ExperienceSection from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import useScrollSpy from './hooks/useScrollSpy';
import { navItems } from './data/navItems';

function App() {
  const sectionIds = navItems.map(item => item.id);
  const activeSection = useScrollSpy(sectionIds, 100);

  return (
    <ThemeProvider>
      <div className="relative">
        <BackgroundAnimation />
        
        <Header 
          activeSection={activeSection} 
          navItems={navItems} 
        />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <ExperienceSection />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;