import React from 'react'
import { howIWork } from '../constants'
import TitleHeader from '../component/TitleHeader'

const FeatureSection = () => {
    return (
        <section id='approach' className='w-full padding-x-lg md:my-20 my-10'>
            <div className='mb-12 md:mb-16'>
                <TitleHeader title='How I Work' sub='🧭 From problem to product' />
            </div>
            <div className='mx-auto grid-3-cols'>
                {howIWork.map(({ imgPath, title, desc }) => (
                    <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4'>
                        <div className='size-14 flex items-center justify-center rounded-full'>
                            <img src={imgPath} alt='' />
                        </div>
                        <h3 className='text-white text-2xl font-semibold'>{title}</h3>
                        <p className='text-white-50 text-lg'>{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeatureSection
