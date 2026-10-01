import React from 'react'
import { contactInfo, socialImgs } from '../constants'

const Footer = () => {
    const visibleSocials = socialImgs.filter((img) => img.url)

    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='flex flex-col justify-center items-center md:items-start'>
                    <p className='text-white-50'>
                        {contactInfo.location}
                    </p>
                </div>

                <div className='socials'>
                    {visibleSocials.map((img) => (
                        <a className='icon' target='_blank' rel='noreferrer' href={img.url} key={img.name}>
                            <img src={img.imgPath} alt={img.name} />
                        </a>
                    ))}
                </div>

                <div className='flex flex-col justify-center'>
                        <p className='text-center md:text-end'>
                            {new Date().getFullYear()} {contactInfo.name || 'Yordanos'} © All rights reserved.
                        </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
