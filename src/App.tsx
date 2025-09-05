import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatIDo } from './components/WhatIDo';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { THEMES } from './constants';
import type { Theme } from './types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cursor from './components/Utils/Cursor';


export const ThemeContext = React.createContext({
  theme: THEMES[0],
  setTheme: (_: Theme) => { },
});

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(THEMES[0]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const themeInterval = setInterval(() => {
      setTheme(currentTheme => {
        const currentIndex = THEMES.findIndex(t => t.name === currentTheme.name);
        const nextIndex = (currentIndex + 1) % THEMES.length;
        return THEMES[nextIndex];
      });
    }, 5000);

    return () => clearInterval(themeInterval);
  }, []);


  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background', theme.colors.background);
    root.style.setProperty('--text', theme.colors.text);
    root.style.setProperty('--primary', theme.colors.primary);
    root.style.setProperty('--primary-light', theme.colors.primaryLight);
    root.style.setProperty('--card', theme.colors.card);
    root.style.setProperty('--border', theme.colors.border);

    if (theme.name.includes('light')) {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  }, [theme]);

  useEffect(() => {
    document.querySelectorAll('a').forEach(anchor => {
      anchor.setAttribute('data-cursor', 'disable');
    });
  }, []);


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="bg-[var(--background)] text-[var(--text)] font-sans transition-colors duration-300 ease-in-out">
        <Cursor />
        <Header />
        <main className="container mx-auto px-6 md:px-12">
          <Hero />
          <About />
          <WhatIDo />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
