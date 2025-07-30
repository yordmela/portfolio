import React, { useState } from 'react'
import TitleHeader from '../component/TitleHeader'
import ContactExperience from '../component/HeroModels/ContactExperience'

const Contact = () => {
  const [FormData, setFormatData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormatData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
  }

  return (
    <section id='contact' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader title='Get In Touch With Me' sub='📧 Contact Information' />
        <div className='mt-16 grid-12-cols'>
          {/* contact form -left side */}
          <div className='xl:col-span-5 '>
            <div className='flex-center card-border rounded-xl p-10'>
              <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7' >
                <div >
                  <label htmlFor='name'>Name</label>
                  <input type='text' id='name' name='name' placeholder='Your Name' value={FormData.name} onChange={handleChange} required />
                </div>
                <div className='mb-6'>
                  <label htmlFor='email'>Email</label>
                  <input type='text' id='email' name='email' placeholder='Your Email' value={FormData.name} onChange={handleChange} required />
                </div>
                <div className='mb-6'>
                  <label htmlFor='message'>Message</label>
                  <textarea id='message' name='message' rows='5' placeholder='Your message' value={FormData.name} onChange={handleChange} required ></textarea>
                </div>

                <button type='submit'>
                  <div className='cta-button group'>
                    <div className='bg-circle' />
                    <p className='text'>Send Message</p>
                    <div className='arrow-wrapper'>
                      <img src='/images/arrow-down.svg' alt='arrow' />
                    </div>

                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* 3D Experience - Right Side */}
          <div className='xl:col-span-7 min-h-96'>
            <div className='w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden'>
              <ContactExperience />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact