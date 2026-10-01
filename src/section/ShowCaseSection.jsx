import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TitleHeader from '../component/TitleHeader'
import { featuredProjects, technicalProjects } from '../constants'

gsap.registerPlugin(ScrollTrigger)

const ProjectCard = ({ project, featured = false, onOpen, cardRef, className = '' }) => {
    if (featured) {
        return (
            <button
                type='button'
                ref={cardRef}
                onClick={() => onOpen(project.id)}
                className={`first-project-wrapper text-left cursor-pointer group ${className}`}
            >
                <div
                    className='image-wrapper overflow-hidden rounded-xl'
                    style={{ backgroundColor: project.coverBg || '#1a1a1f' }}
                >
                    <img
                        src={project.coverImage}
                        alt={project.title}
                        loading='lazy'
                        className='transition-transform duration-500 group-hover:scale-[1.02]'
                    />
                </div>
                <div className='text-content'>
                    <div className='badges flex flex-wrap gap-2 mb-3'>
                        {project.tags.map((tag) => (
                            <span key={tag} className='hero-badge text-white-50'>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h2>{project.title}</h2>
                    <p className='text-white-50 md:text-xl'>{project.shortDescription}</p>
                    <p className='text-blue-50 mt-2 text-sm md:text-base'>View case study →</p>
                </div>
            </button>
        )
    }

    return (
        <button
            type='button'
            ref={cardRef}
            onClick={() => onOpen(project.id)}
            className={`project text-left cursor-pointer group w-full ${className}`}
        >
            <div
                className='image-wrapper overflow-hidden'
                style={{ backgroundColor: project.coverBg || '#1a1a1f' }}
            >
                <img
                    src={project.coverImage}
                    alt={project.title}
                    loading='lazy'
                    className='transition-transform duration-500 group-hover:scale-[1.03]'
                />
            </div>
            <h2>{project.title}</h2>
            <p className='text-white-50 text-sm md:text-base mt-2'>{project.shortDescription}</p>
            <div className='flex flex-wrap gap-2 mt-3'>
                {project.tags.map((tag) => (
                    <span key={tag} className='text-blue-50 text-xs md:text-sm'>
                        {tag}
                    </span>
                ))}
            </div>
        </button>
    )
}

const ShowCaseSection = ({ onOpenProject }) => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

    const [primary, secondary, tertiary] = featuredProjects

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current].filter(Boolean)
        projects.forEach((project, index) => {
            gsap.fromTo(
                project,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: project,
                        start: 'top bottom-=100',
                    },
                }
            )
        })
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
    }, [])

    return (
        <section ref={sectionRef} id='work' className='app-showcase'>
            <div className='w-full'>
                <div className='mb-12 md:mb-16'>
                    <TitleHeader title='Selected Work' sub='🧩 Design, product & engineering' />
                </div>

                <div className='showcaselayout'>
                    {primary && (
                        <ProjectCard
                            project={primary}
                            featured
                            onOpen={onOpenProject}
                            cardRef={project1Ref}
                        />
                    )}

                    <div className='project-list-wrapper overflow-hidden'>
                        {secondary && (
                            <ProjectCard
                                project={secondary}
                                onOpen={onOpenProject}
                                cardRef={project2Ref}
                            />
                        )}
                        {tertiary && (
                            <ProjectCard
                                project={tertiary}
                                onOpen={onOpenProject}
                                cardRef={project3Ref}
                            />
                        )}
                    </div>
                </div>

                <div className='mt-20 md:mt-28'>
                    <h3 className='text-2xl md:text-3xl font-semibold mb-3'>Technical Projects</h3>
                    <p className='text-white-50 text-base md:text-lg mb-8 max-w-2xl'>
                        Mobile, AI, and software projects alongside the design work above.
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                        {technicalProjects.map((project) => (
                            <button
                                type='button'
                                key={project.id}
                                onClick={() => onOpenProject(project.id)}
                                className='card-border rounded-xl overflow-hidden text-left cursor-pointer group bg-transparent'
                            >
                                <div
                                    className='h-48 md:h-56 overflow-hidden'
                                    style={{ backgroundColor: project.coverBg || '#1a1a1f' }}
                                >
                                    <img
                                        src={project.coverImage}
                                        alt={project.title}
                                        loading='lazy'
                                        className='w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]'
                                    />
                                </div>
                                <div className='p-5 md:p-6 space-y-2'>
                                    <h4 className='text-xl font-semibold'>{project.title}</h4>
                                    <p className='text-white-50 text-sm md:text-base'>{project.shortDescription}</p>
                                    <div className='flex flex-wrap gap-x-3 gap-y-1 pt-1'>
                                        {project.tags.map((tag) => (
                                            <span key={tag} className='text-blue-50 text-xs md:text-sm'>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowCaseSection
