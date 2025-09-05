import React, { useEffect, useRef } from 'react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined' && 'gsap' in window && heroRef.current) {
      const { gsap } = window as any;
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' }});

      timeline.fromTo(
        heroRef.current.querySelectorAll('.hero-line'),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
      );
    }
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="min-h-screen flex flex-col justify-center items-start text-left">
      <div className="w-full animate-slide-up">
        <h1 className=" text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-4">
          <div className="hero-line block overflow-hidden">Hello! I'm</div>
          <div className="hero-line block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)]">
            Aman Kumar
          </div>
        </h1>
        <div className="hero-line w-full md:w-3/4 lg:w-2/3 text-lg md:text-xl lg:text-2xl text-slate-400 font-light">
          An
          <span className="font-bold text-[var(--text)] mx-2">AI/ML Engineer</span> &
          <span className="font-bold text-[var(--text)] mx-2">Full-Stack Developer</span>
          <br />
          <p className="text-xl text-muted-foreground mb-8 max-w-md">
          I build innovative and user-centric solutions with modern technologies and clean code.
          </p>
        </div>
        <div className="hero-line mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="animate-glow w-full sm:w-auto text-center px-8 py-4 bg-[var(--primary)] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                View My Work
            </a>
            <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="animate-float w-full sm:w-auto text-center px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] font-semibold rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors duration-300">
                Get In Touch
            </a>
        </div>
      </div>
    </section>
  );
};
