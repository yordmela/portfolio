import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = ({ onNavigateHome }) => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleHomeClick = (e, hash = 'hero') => {
        if (onNavigateHome) {
            e.preventDefault()
            onNavigateHome(hash)
        }
    }

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className='inner'>
                <a className='logo' href='#hero' onClick={(e) => handleHomeClick(e, 'hero')}>
                    Yordanos
                </a>

                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className='group'>
                                <a href={link} onClick={(e) => handleHomeClick(e, link.replace('#', ''))}>
                                    <span>{name}</span>
                                    <span className='underline'></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a className='contact-btn group' href='#contact' onClick={(e) => handleHomeClick(e, 'contact')}>
                    <div className='inner'>
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default NavBar
