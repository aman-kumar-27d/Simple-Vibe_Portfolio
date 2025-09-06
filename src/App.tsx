import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { THEMES } from './constants';
import type { Theme } from './types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cursor from './components/Utils/Cursor';

const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const WhatIDo = lazy(() => import('./components/WhatIDo').then(module => ({ default: module.WhatIDo })));
const Skills = lazy(() => import('./components/Skills').then(module => ({ default: module.Skills })));
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Experience = lazy(() => import('./components/Experience').then(module => ({ default: module.Experience })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
const Certifications = lazy(() => import('./components/Certifications').then(module => ({ default: module.default })));
const ToolsIUse = lazy(() => import('./components/ToolsIUse').then(module => ({ default: module.default })));

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

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="bg-[var(--background)] text-[var(--text)] font-sans transition-colors duration-300 ease-in-out">
        <Cursor />
        <Header />
        <main className="container mx-auto px-6 md:px-12">
          <Hero />
          <Suspense fallback={<div className="text-center p-12">Loading...</div>}>
            <About />
            <WhatIDo />
            <Experience />
            <Projects />
            <ToolsIUse />
            <Skills />
            <Certifications />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
