import React from 'react'
import TitleHeader from '../component/TitleHeader'
import { education, expCards, programs } from '../constants'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const TimelineMark = ({ mark, logo }) => (
    <div className={`timeline-logo overflow-hidden ${logo ? 'bg-white' : ''}`} aria-hidden='true'>
        {logo ? (
            <img src={logo} alt='' className='w-[72%] h-[72%] object-contain' />
        ) : (
            <span className='text-white font-semibold text-xs md:text-lg tracking-tight'>{mark}</span>
        )}
    </div>
)

const Experience = () => {
    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                },
            })
        })

        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '70% center',
                onUpdate: (self) => {
                    gsap.to('.timeline', {
                        scaleY: 1 - self.progress,
                    })
                },
            },
        })

        gsap.utils.toArray('.expText').forEach((text) => {
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 60%',
                },
            })
        })
    }, [])

    return (
        <section id='experience' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
            <div className='w-full h-full md:px-20 px-5'>
                <TitleHeader title='Experience & Education' sub='💼 Where I’ve been learning and building' />

                <div className='mt-32 relative'>
                    <div className='relative z-50 xl:space-y-32 space-y-10'>
                        {expCards.map((card) => (
                            <div key={card.company} className='exp-card-wrapper'>
                                <div className='xl:w-2/6'>
                                    <div className='card card-border timeline-card rounded-xl p-8 md:p-10 mb-5'>
                                        <div className='glow' />
                                        <p className='text-blue-50 text-sm uppercase tracking-wide mb-2'>{card.company}</p>
                                        <h3 className='text-white text-2xl font-semibold mb-3'>{card.title}</h3>
                                        <p className='text-white-50 text-base'>{card.summary}</p>
                                    </div>
                                </div>

                                <div className='xl:w-4/6'>
                                    <div className='flex items-start'>
                                        <div className='timeline-wrapper'>
                                            <div className='timeline' />
                                            <div className='gradient-line w-1 h-full' />
                                        </div>

                                        <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                                            <TimelineMark mark={card.mark} logo={card.logo} />
                                            <div>
                                                <h1 className='font-semibold text-3xl'>{card.title}</h1>
                                                <p className='text-white-50 mt-2'>{card.company}</p>
                                                <p className='text-white-50 my-5'>📅 {card.date}</p>
                                                <p className='text-[#839cb5] italic'>Focus areas</p>
                                                <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                                                    {card.responsibilities.map((responsibility) => (
                                                        <li key={responsibility} className='text-lg'>
                                                            {responsibility}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Programs */}
                        {programs.map((program) => (
                            <div key={program.name} className='exp-card-wrapper'>
                                <div className='xl:w-2/6'>
                                    <div className='card card-border timeline-card rounded-xl p-8 md:p-10 mb-5'>
                                        <div className='glow' />
                                        <p className='text-blue-50 text-sm uppercase tracking-wide mb-2'>Program</p>
                                        <h3 className='text-white text-2xl font-semibold mb-3'>{program.name}</h3>
                                        <p className='text-white-50 text-base'>{program.org}</p>
                                    </div>
                                </div>

                                <div className='xl:w-4/6'>
                                    <div className='flex items-start'>
                                        <div className='timeline-wrapper'>
                                            <div className='timeline' />
                                            <div className='gradient-line w-1 h-full' />
                                        </div>

                                        <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                                            <TimelineMark mark={program.mark} logo={program.logo} />
                                            <div>
                                                <h1 className='font-semibold text-3xl'>{program.name}</h1>
                                                <p className='text-white-50 my-5'>📅 {program.date}</p>
                                                <p className='text-[#839cb5] italic'>Highlights</p>
                                                <ul className='list-disc ms-5 flex flex-col gap-5 text-white-50'>
                                                    {program.points.map((point) => (
                                                        <li key={point} className='text-lg'>{point}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Education */}
                        <div className='exp-card-wrapper'>
                            <div className='xl:w-2/6'>
                                <div className='card card-border timeline-card rounded-xl p-8 md:p-10 mb-5'>
                                    <div className='glow' />
                                    <p className='text-blue-50 text-sm uppercase tracking-wide mb-2'>Education</p>
                                    <h3 className='text-white text-2xl font-semibold mb-3'>{education.program}</h3>
                                    <p className='text-white-50 text-base'>{education.summary}</p>
                                </div>
                            </div>

                            <div className='xl:w-4/6'>
                                <div className='flex items-start'>
                                    <div className='timeline-wrapper'>
                                        <div className='timeline' />
                                        <div className='gradient-line w-1 h-full' />
                                    </div>

                                    <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                                        <TimelineMark mark={education.mark} logo={education.logo} />
                                        <div>
                                            <h1 className='font-semibold text-3xl'>{education.program}</h1>
                                            <p className='text-white-50 mt-2'>{education.school}</p>
                                            <p className='text-white-50 my-5'>📅 {education.date}</p>
                                            <p className='text-white-50 text-lg'>{education.detail}</p>
                                            <p className='text-white-50 text-lg mt-4'>{education.note}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
