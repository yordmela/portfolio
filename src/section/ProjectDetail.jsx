import React, { useEffect } from 'react'
import { getProjectById } from '../constants'
import gsap from 'gsap'

const linkLabels = {
    live: "Website",
    play: "Google Play",
    figma: "Figma",
    github: "GitHub",
}

const ProjectDetail = ({ projectId, onBack }) => {
    const project = getProjectById(projectId)

    useEffect(() => {
        window.scrollTo(0, 0)
        gsap.fromTo(
            '.project-detail',
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
        )
    }, [projectId])

    if (!project) {
        return (
            <section className='section-padding min-h-screen flex-center'>
                <div className='text-center space-y-6'>
                    <h1 className='text-3xl font-semibold'>Project not found</h1>
                    <button type='button' onClick={onBack} className='cta-wrapper'>
                        <div className='cta-button group'>
                            <div className='bg-circle' />
                            <p className='text'>Back to work</p>
                            <div className='arrow-wrapper'>
                                <img src='/images/arrow-down.svg' alt='' className='rotate-90' />
                            </div>
                        </div>
                    </button>
                </div>
            </section>
        )
    }

    const linkEntries = Object.entries(project.links || {}).filter(([, url]) => Boolean(url))

    return (
        <article className='project-detail w-full padding-x-lg pt-28 md:pt-36 pb-24'>
            <div className='w-full'>
                <button
                    type='button'
                    onClick={onBack}
                    className='text-white-50 hover:text-white transition-colors mb-8 md:mb-12 inline-flex items-center gap-2'
                >
                    ← Back to work
                </button>

                {project.shareScreenshots ? (
                    <div
                        className='shot-frame shot-frame-cover rounded-xl overflow-hidden mb-8 md:mb-12'
                        style={{ backgroundColor: project.coverBg || '#1a1a1f' }}
                    >
                        <img src={project.coverImage} alt={project.title} />
                    </div>
                ) : (
                    <div className='card-border rounded-xl p-6 md:p-8 mb-8 md:mb-12'>
                        <p className='text-white text-lg font-semibold'>Screenshots aren’t public for this project.</p>
                        <p className='text-white-50 mt-2'>The write-up below is the case study.</p>
                    </div>
                )}

                <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag) => (
                        <span key={tag} className='hero-badge'>{tag}</span>
                    ))}
                </div>

                <h1 className='text-3xl md:text-5xl font-semibold mb-4'>{project.title}</h1>
                <p className='text-white-50 text-lg md:text-xl max-w-3xl mb-10'>{project.shortDescription}</p>

                <div className='grid md:grid-cols-2 gap-8 md:gap-12 mb-12'>
                    <div>
                        <h2 className='text-xl font-semibold mb-3'>My role</h2>
                        <p className='text-white-50'>{project.role}</p>
                    </div>
                    {project.tools?.length > 0 && (
                        <div>
                            <h2 className='text-xl font-semibold mb-3'>Technologies</h2>
                            <div className='flex flex-wrap gap-2'>
                                {project.tools.map((tool) => (
                                    <span key={tool} className='hero-badge text-white-50'>{tool}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {project.overview && (
                    <section className='mb-12'>
                        <h2 className='text-2xl font-semibold mb-4'>Overview</h2>
                        <p className='text-white-50 text-lg leading-relaxed'>{project.overview}</p>
                    </section>
                )}

                {project.problem && (
                    <section className='mb-12'>
                        <h2 className='text-2xl font-semibold mb-4'>Problem / context</h2>
                        <p className='text-white-50 text-lg leading-relaxed'>{project.problem}</p>
                    </section>
                )}

                {project.contribution && (
                    <section className='mb-12'>
                        <h2 className='text-2xl font-semibold mb-4'>What I did</h2>
                        <p className='text-white-50 text-lg leading-relaxed'>{project.contribution}</p>
                    </section>
                )}

                {project.productThinking && (
                    <section className='mb-12 card-border rounded-xl p-6 md:p-8'>
                        <h2 className='text-2xl font-semibold mb-4'>Approach</h2>
                        <p className='text-white-50 text-lg leading-relaxed'>{project.productThinking}</p>
                    </section>
                )}

                {project.process?.length > 0 && (
                    <section className='mb-12'>
                        <h2 className='text-2xl font-semibold mb-4'>Process</h2>
                        <ol className='space-y-3'>
                            {project.process.map((step, index) => (
                                <li key={step} className='flex gap-4 text-white-50 text-lg'>
                                    <span className='text-blue-50 font-semibold w-8 shrink-0'>{String(index + 1).padStart(2, '0')}</span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ol>
                    </section>
                )}

                {project.shareScreenshots && project.gallery?.length > 0 && (
                    <section className='mb-12'>
                        <h2 className='text-2xl font-semibold mb-6'>Screenshots</h2>
                        <div className='shot-grid grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5'>
                            {project.gallery.map((src, index) => (
                                <div
                                    key={`${src}-${index}`}
                                    className='shot-frame rounded-xl overflow-hidden card-border'
                                    style={{ backgroundColor: project.coverBg || '#141418' }}
                                >
                                    <img
                                        src={src}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        loading='lazy'
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {project.outcome && (
                    <section className='mb-12'>
                        <h2 className='text-2xl font-semibold mb-4'>Outcome</h2>
                        <p className='text-white-50 text-lg leading-relaxed'>{project.outcome}</p>
                    </section>
                )}

                {linkEntries.length > 0 && (
                    <section className='mb-8'>
                        <h2 className='text-2xl font-semibold mb-4'>Links</h2>
                        <div className='flex flex-wrap gap-4'>
                            {linkEntries.map(([label, url]) => (
                                <a
                                    key={label}
                                    href={url}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='hero-badge hover:bg-black-50 transition-colors capitalize'
                                >
                                    {linkLabels[label] || label}
                                </a>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </article>
    )
}

export default ProjectDetail
