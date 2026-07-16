import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './contact.css'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    talent: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.contact__animate'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      }
    )
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://formspree.io/f/mknvarzz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          talent: formData.talent,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setStatus('success')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container contact__inner">
        <div className="contact__text contact__animate">
          <p className="eyebrow">Grow Business? Got Wish.</p>
          <h2>Think you can Dominate the World?</h2>
          <p className="contact__sub">
            Tell us what you do — , whatever it is — and our team will reach out
            about Any Help we can give.
          </p>
        </div>

        <form className="contact__form contact__animate" onSubmit={handleSubmit}>
          {status === 'success' ? (
            <div className="contact__success">You're in the queue. We'll be in touch. 🎤</div>
          ) : (
            <>
              <div className="contact__row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="talent"
                placeholder="What's your talent?"
                value={formData.talent}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us why you belong on that stage"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Submitting…' : 'Submit Application →'}
              </button>
              {status === 'error' && (
                <p className="contact__error">Submission failed. Please try again or refresh the page.</p>
              )}
            </>
          )}
        </form>
      </div>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} India's Got Latent. All roasts reserved.</span>
          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#episodes">Episodes</a>
            <a href="#about">About</a>
          </div>
        </div>
      </footer>
    </section>
  )
}
