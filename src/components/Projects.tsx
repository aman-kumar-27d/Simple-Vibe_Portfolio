import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../constants';
import { GithubIcon, ExternalLinkIcon } from './icons';

gsap.registerPlugin(ScrollTrigger);

export const Projects: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollingWrapperRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const scrollingWrapper = scrollingWrapperRef.current;
            if (!scrollingWrapper) return;

            // Calculate the total distance to scroll horizontally
            const scrollDistance = scrollingWrapper.scrollWidth - window.innerWidth;

            // Ensure there's something to scroll
            if (scrollDistance > 0) {
                gsap.to(scrollingWrapper, {
                    x: -scrollDistance, // Move left by the calculated distance
                    ease: 'none', // Linear movement
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        pin: true,
                        scrub: 1,
                        // Set the end point based on the calculated scroll distance
                        end: `+=${scrollDistance}`,
                        invalidateOnRefresh: true,
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-20 md:py-32 overflow-x-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                    Projects I've Built<span className="text-[var(--primary)]">.</span>
                </h2>
            </div>
            <div ref={scrollingWrapperRef} className="flex flex-nowrap gap-8 px-4">
                {PROJECTS.map((project, index) => (
                    <div key={index} data-cursor="disable" className="project-card bg-[var(--card)] p-8 rounded-lg border border-[var(--border)] flex flex-col hover:border-[var(--primary)] transition-colors duration-300 w-[80vw] md:w-[40vw] lg:w-[30vw] min-w-[400px] flex-shrink-0">
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
                {/* Invisible Spacer Card */}
                <div className="flex-shrink-0 w-[20vw] lg:w-[20vw]" />
            </div>
        </section>
    );
};
