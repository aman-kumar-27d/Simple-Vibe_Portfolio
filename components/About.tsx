import React, { useEffect, useRef } from 'react';

export const About: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'gsap' in window && 'ScrollTrigger' in window && sectionRef.current) {
            const { gsap } = window as any;
            gsap.from(sectionRef.current.children, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            });
        }
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-20 md:py-32">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
                About Me<span className="text-[var(--primary)]">.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-2">
                    <img 
                        src="https://picsum.photos/seed/aman-kumar-dev/600/600" 
                        alt="Aman Kumar" 
                        className="rounded-lg shadow-2xl w-full aspect-square object-cover"
                    />
                </div>
                <div className="md:col-span-3 text-slate-300 text-lg leading-relaxed space-y-4">
                    <p>
                        A driven final-year B.Tech student in Computer Science & Engineering, specializing in Artificial Intelligence & Machine Learning, with a strong passion for full-stack software development.
                    </p>
                    <p>
                        My experience spans both the theoretical and practical aspects of technology, from full-stack application design to cloud-based deployment. I excel in solving complex problems through creative and secure coding practices, with a proven track record in managing multiple priorities under high pressure.
                    </p>
                    <p>
                        I am committed to building innovative, scalable, and user-centric AI/ML solutions that create meaningful real-world impact.
                    </p>
                </div>
            </div>
        </section>
    );
};