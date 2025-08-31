import React, { useEffect, useRef } from 'react';
import { SKILLS } from '../constants';
import { gsap } from 'gsap';

export const Skills: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            gsap.from(sectionRef.current.querySelectorAll('.skill-item'), {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                opacity: 0,
                y: 40,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
            });
        }
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="py-20 md:py-32">
            <div className="flex flex-row flex-wrap justify-center items-center gap-x-10 gap-y-12 md:gap-x-16 mb-24">
                {SKILLS.map(({ name, Icon }, index) => (
                    <div key={name} className="skill-item group flex flex-col items-center text-center w-24 transition-transform duration-300 hover:-translate-y-2">
                        <div className="relative w-16 h-16 flex items-center justify-center">
                            <div 
                                className="absolute inset-0 rounded-full blur-xl"
                                style={{
                                    backgroundColor: 'var(--primary)',
                                    animation: `pulse-glow 4s ease-in-out infinite`,
                                    animationDelay: `${index * 150}ms`,
                                }}
                            ></div>
                            <Icon className="relative z-10 w-16 h-16 text-slate-300 transition-all duration-300 group-hover:text-[var(--primary-light)] group-hover:drop-shadow-[0_0_8px_var(--primary)]" />
                        </div>
                        <span className="mt-4 font-medium text-sm text-slate-400 group-hover:text-[var(--text)] transition-colors">{name}</span>
                    </div>
                ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-[0.3em] uppercase text-center text-slate-500">
                MY TECH STACK
            </h2>
        </section>
    );
};
