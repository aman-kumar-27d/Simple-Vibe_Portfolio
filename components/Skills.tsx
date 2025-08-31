import React, { useEffect, useRef } from 'react';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'gsap' in window && 'ScrollTrigger' in window && sectionRef.current) {
            const { gsap } = window as any;
            gsap.from(sectionRef.current.querySelectorAll('.skill-card'), {
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
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                My Tech Stack<span className="text-[var(--primary)]">.</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                {SKILLS.map(({ name, Icon }) => (
                    <div key={name} className="skill-card group flex flex-col items-center justify-center p-6 bg-[var(--card)] rounded-lg border border-[var(--border)] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--primary)]/20 hover:shadow-2xl">
                        <Icon className="w-12 h-12 mb-4 text-[var(--primary-light)] transition-transform duration-300 group-hover:scale-110" />
                        <span className="font-medium text-center">{name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};