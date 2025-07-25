import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const ShowCaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);




    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
        projects.forEach((project, index) => {
            gsap.fromTo(project, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: project,
                    start: "top bottom-=100",
                }
            });
        })
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )
    }, [])


    return (
        <section ref={sectionRef} id='work' className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* LEFT */}
                    <div ref={project1Ref} className='first-project-wrapper'>
                        <div className='image-wrapper'>
                            <img src='/images/project1.png' alt='Ride' />
                        </div>
                        <div className='text-content'>
                            <h2>
                                On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde
                            </h2>
                            <p className='text-white-50 md:text-xl'>
                                An app build with React Native, Expo, & TailWindCSS for a fast, user-friendly experience.
                            </p>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div ref={project2Ref} className='project'>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src='/images/project2.png' alt='Library Management Platform' />
                            </div>
                            <h2>Library Management</h2>
                        </div>
                        <div ref={project3Ref} className='project'>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src='/images/project3.png' alt='YC Directory' />
                            </div>
                            <h2>YC Directory- a startup showcase app</h2>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowCaseSection