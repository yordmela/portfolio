import React from 'react'
import { aboutHighlights } from '../constants'

const AboutHighlights = () => {
    return (
        <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
            <div className='mx-auto grid-3-cols'>
                {aboutHighlights.map((item) => (
                    <div key={item.label} className='bg-zinc-900 rounded-lg p-8 md:p-10 flex flex-col justify-center gap-2'>
                        <p className='text-blue-50 text-sm uppercase tracking-wide'>{item.label}</p>
                        <p className='text-white text-2xl md:text-3xl font-bold'>{item.value}</p>
                        <p className='text-white-50 text-base md:text-lg'>{item.detail}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutHighlights
