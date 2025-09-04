import "./Styles/Experience.css";
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EXPERIENCES } from '../constants';

gsap.registerPlugin(ScrollTrigger);

export const Experience: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            const ctx = gsap.context(() => {
                const careerTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 20%", // triggers when 20% of section is in view
                        end: "bottom center",
                        scrub: true,
                        invalidateOnRefresh: false,
                    },
                });
                careerTimeline
                    .fromTo(
                        ".career-timeline",
                        { maxHeight: "10%" },
                        { maxHeight: "100%", duration: 0.5 },
                        0
                    )
                    .fromTo(
                        ".career-timeline",
                        { opacity: 0 },
                        { opacity: 1, duration: 0.1 },
                        0
                    )
                    .fromTo(
                        ".career-info-box",
                        { opacity: 1 },
                        { opacity: 1, stagger: 0.1, duration: 0.5 },
                        0
                    )
                    .fromTo(
                        ".career-dot",
                        { animationIterationCount: "infinite" },
                        {
                            animationIterationCount: "1",
                            delay: 0.1,
                            duration: 0.1,
                        },
                        0
                    );

                if (window.innerWidth > 1024) {
                    careerTimeline.fromTo(
                        ".career-section",
                        { y: 0 },
                        { y: "20%", duration: 0.5, delay: 0.2 },
                        0
                    );
                } else {
                    careerTimeline.fromTo(
                        ".career-section",
                        { y: 0 },
                        { y: 0, duration: 0.5, delay: 0.2 },
                        0
                    );
                }
            }, sectionRef);

            return () => ctx.revert();
        }
    }, []);

    return (
        <div className="career-section section-container max-w-4xl" ref={sectionRef}>
            <div className="career-container">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                    My Career & Experience<span className="text-[var(--primary)]">.</span>
                </h2>
                <div className="career-info">
                    <div className="career-timeline">
                        <div className="career-dot"></div>
                    </div>
                    {EXPERIENCES.map((exp, index) => (
                        <div key={index} className="career-info-box">
                            <div className="career-info-in">
                                <div className="career-role">
                                    <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)]">{exp.role}</h4>
                                    <h5>{exp.company}</h5>
                                </div>
                                <h3>{exp.period}</h3>
                            </div>
                            <p className="mt-4 md:mt-0 text-slate-300">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
