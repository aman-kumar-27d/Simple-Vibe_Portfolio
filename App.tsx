
import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { THEMES } from './constants';
import type { Theme } from './types';

export const ThemeContext = React.createContext({
  theme: THEMES[0],
  setTheme: (theme: Theme) => {},
});

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(THEMES[0]);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

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
    // Check if window and gsap are available
    if (typeof window !== 'undefined' && 'gsap' in window) {
      const { gsap } = window as any;
      
      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: 'power2.out',
        });
        gsap.to(cursorFollowerRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.4,
          ease: 'power2.out',
        });
      };
      
      window.addEventListener('mousemove', moveCursor);

      return () => {
        window.removeEventListener('mousemove', moveCursor);
      };
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="bg-[var(--background)] text-[var(--text)] font-sans transition-colors duration-300 ease-in-out">
        <div 
            ref={cursorRef} 
            className="hidden lg:block w-3 h-3 bg-[var(--primary)] rounded-full fixed top-0 left-0 z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div 
            ref={cursorFollowerRef} 
            className="hidden lg:block w-12 h-12 bg-[var(--primary)] rounded-full fixed top-0 left-0 z-40 pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-10 blur-xl"
        ></div>
        
        <Header />
        <main className="container mx-auto px-6 md:px-12">
          <Hero />
          <About />
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