import TitleHeader from '../component/TitleHeader'
import { skillCategories } from '../constants'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo(
            '.skill-card',
            { y: 40 },
            {
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top 75%',
                },
            }
        )
    })

    return (
        <div id='skills' className='flex-center section-padding'>
            <div className='w-full h-full md:px-10 px-5'>
                <TitleHeader
                    title='Skills & Tools'
                    sub='🛠️ Design, engineering & AI'
                />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-16'>
                    {skillCategories.map((category) => (
                        <div key={category.title} className='skill-card card-border rounded-xl p-6 md:p-8'>
                            <h3 className='text-xl md:text-2xl font-semibold mb-5'>{category.title}</h3>
                            <ul className='flex flex-wrap gap-2'>
                                {category.skills.map((skill) => (
                                    <li key={skill} className='hero-badge text-white-50'>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack
