import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../App';
import { THEMES } from '../constants';
import type { Theme } from '../types';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? 'bg-[var(--background)]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        <a href="#" className="text-xl md:text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)]">
          Aman Kumar
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, link.toLowerCase())}
              className="text-sm font-medium hover:text-[var(--primary)] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          {THEMES.map((t: Theme) => (
            <button
              key={t.name}
              onClick={() => setTheme(t)}
              className={`w-5 h-5 rounded-full border-2 transition-transform duration-200 ${
                theme.name === t.name ? 'border-[var(--text)] scale-125' : 'border-transparent'
              }`}
              style={{ backgroundColor: t.colors.primary }}
              aria-label={`Switch to ${t.name} theme`}
            />
          ))}
        </div>
      </div>
    </header>
  );
};