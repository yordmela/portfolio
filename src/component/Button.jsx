import React from 'react'


const Button = ({ id, className, text }) => {
    return (
        <a onClick={(e) => {
            e.preventDefault()
            const target = document.getElementById('counter')

            if (target && id) {
                const offset = window.innerHeight * 0.15;

                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top,
                    behavior: 'smooth',
                });
            }
        }
        }
            id={id} className={`${className ?? ''} cta-wrapper`} href="#projects">
            <div className='cta-button group'>
                <div className='bg-circle' />
                <p className='text'>{text}</p>
                <div className='arrow-wrapper'>
                    <img src='/images/arrow-down.svg' alt='arrow-down' />
                </div>
            </div>
        </a>
    )
}

export default Button