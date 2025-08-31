import React, { useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { GithubIcon, ExternalLinkIcon } from './icons';
import { gsap } from 'gsap';

export const Projects: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (sectionRef.current) {
            gsap.from(sectionRef.current.querySelectorAll('.project-card'), {
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
        <section id="projects" ref={sectionRef} className="py-20 md:py-32">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                Projects I've Built<span className="text-[var(--primary)]">.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="project-card bg-[var(--card)] p-8 rounded-lg border border-[var(--border)] flex flex-col hover:border-[var(--primary)] transition-colors duration-300 md:col-span-1 lg:col-span-1">
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                            <p className="text-slate-400 mb-6">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-semibold bg-[var(--border)] text-[var(--primary-light)] px-3 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-auto">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub for ${project.title}`} className="hover:text-[var(--primary)] transition-colors">
                                <GithubIcon />
                            </a>
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live demo for ${project.title}`} className="hover:text-[var(--primary)] transition-colors">
                                    <ExternalLinkIcon />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
