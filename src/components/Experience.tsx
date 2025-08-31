import React, { useEffect, useRef } from 'react';
import { EXPERIENCES } from '../constants';
import { gsap } from 'gsap';

export const Experience: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            const items = sectionRef.current.querySelectorAll('.timeline-item');
            
            gsap.from(timelineRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                    end: 'bottom 80%',
                    scrub: 1,
                },
                scaleY: 0,
                transformOrigin: 'top',
            });

            items.forEach(item => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                    opacity: 0,
                    x: -50,
                    duration: 0.8,
                    ease: 'power3.out',
                });
            });
        }
    }, []);

    return (
        <section id="experience" ref={sectionRef} className="py-20 md:py-32">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                My Career & Experience<span className="text-[var(--primary)]">.</span>
            </h2>
            <div className="relative max-w-2xl mx-auto">
                <div ref={timelineRef} className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-[var(--border)] rounded-full"></div>
                {EXPERIENCES.map((exp, index) => (
                    <div key={index} className="timeline-item mb-12 relative pl-12 md:pl-0">
                        <div className="md:flex items-center">
                            <div className="md:w-1/2 md:pr-8 md:text-right">
                                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)]">{exp.role}</h3>
                                <p className="font-semibold">{exp.company}</p>
                                <p className="text-sm text-slate-400">{exp.period}</p>
                            </div>
                            <div className="md:w-1/2 md:pl-8">
                                <p className="mt-4 md:mt-0 text-slate-300">{exp.description}</p>
                            </div>
                        </div>
                        <div className="absolute top-1 left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--background)] border-2 border-[var(--primary)] -translate-x-1/2 -translate-y-1/2">
                            <div className="w-full h-full bg-[var(--primary)] rounded-full scale-50"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
