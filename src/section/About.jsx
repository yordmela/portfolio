import { useRef } from 'react'
import TitleHeader from '../component/TitleHeader'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const notes = [
    {
        label: 'Currently',
        title: 'Majestic',
        detail: 'Junior Software Developer, full-time',
    },
    {
        label: 'Also',
        title: 'Freelance',
        detail: 'UI/UX and Flutter, including a delivery app',
    },
    {
        label: 'Earlier',
        title: 'A2SV',
        detail: 'DSA practice and a Flutter app',
    },
]

const About = () => {
    const sectionRef = useRef(null)

    useGSAP(() => {
        const blocks = sectionRef.current?.querySelectorAll('.about-block')
        if (!blocks?.length) return

        gsap.from(blocks, {
            y: 28,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        })
    }, [])

    return (
        <section id='about' ref={sectionRef} className='flex-center section-padding'>
            <div className='w-full md:px-10 px-5'>
                <TitleHeader title='About Me' sub='A bit of context' />

                <div className='about-layout mt-12 md:mt-16 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_15rem] gap-8 lg:gap-14 items-center'>
                    <div className='about-block card-border rounded-xl p-8 md:p-12'>
                        <div className='space-y-5 text-white-50 text-lg md:text-xl leading-relaxed text-left'>
                            <p>
                                I’m Yordanos Melaku, a software engineer from Ethiopia. I studied software engineering at Addis Ababa University and graduated in 2026. The later years of the degree focused more on AI.
                            </p>
                            <p>
                                I like the stretch between an idea and something people can actually use. That means thinking about how a product should work, shaping the experience, and building it — in design, mobile, or AI.
                            </p>
                        </div>
                    </div>

                    <div className='about-block flex justify-center lg:justify-end'>
                        <img
                            src='/images/profile.jpg'
                            alt='Yordanos Melaku'
                            className='w-40 sm:w-48 lg:w-full max-h-72 sm:max-h-[28rem] object-cover object-top rounded-xl border border-black-50'
                        />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6 max-w-5xl mx-auto'>
                    {notes.map((note) => (
                        <div key={note.label} className='about-block card-border rounded-xl p-6 md:p-7 text-left'>
                            <p className='text-blue-50 text-sm'>{note.label}</p>
                            <h3 className='text-white text-xl font-semibold mt-2'>{note.title}</h3>
                            <p className='text-white-50 mt-2'>{note.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
