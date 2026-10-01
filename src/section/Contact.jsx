import React, { useRef, useState } from 'react'
import TitleHeader from '../component/TitleHeader'
import ContactExperience from '../component/HeroModels/ContactExperience'
import emailjs from '@emailjs/browser'
import { contactInfo } from '../constants'

const Contact = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      setFormData({ name: '', email: '', message: '' })
      setStatus('sent')
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id='contact' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader title='Get In Touch' sub='📧 Let’s talk about ideas, products, or opportunities' />
        {contactInfo.email ? (
          <p className='text-center text-white-50 mt-6'>
            <a className='text-white underline underline-offset-4' href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>
            {contactInfo.phone ? (
              <>
                {' '}
                ·{' '}
                <a className='text-white underline underline-offset-4' href={`tel:${contactInfo.phone}`}>
                  {contactInfo.phone}
                </a>
              </>
            ) : null}
            {contactInfo.location ? ` · ${contactInfo.location}` : ''}
          </p>
        ) : null}
        <div className='mt-16 grid-12-cols'>
          <div className='xl:col-span-5'>
            <div className='flex-center card-border rounded-xl p-10'>
              <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7' ref={formRef}>
                <div>
                  <label htmlFor='name'>Name</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Your name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Your email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor='message'>Message</label>
                  <textarea
                    id='message'
                    name='message'
                    rows='5'
                    placeholder='What would you like to talk about?'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type='submit' disabled={loading}>
                  <div className='cta-button group'>
                    <div className='bg-circle' />
                    <p className='text'>{loading ? 'Sending…' : 'Send Message'}</p>
                    <div className='arrow-wrapper'>
                      <img src='/images/arrow-down.svg' alt='' />
                    </div>
                  </div>
                </button>
                {status === 'sent' ? (
                  <p className='text-white-50 text-center'>Message sent. I’ll reply by email.</p>
                ) : null}
                {status === 'error' ? (
                  <p className='text-white-50 text-center'>
                    That didn’t send. Email me at{' '}
                    <a className='text-white underline underline-offset-4' href={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </a>
                    .
                  </p>
                ) : null}
              </form>
            </div>
          </div>

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
