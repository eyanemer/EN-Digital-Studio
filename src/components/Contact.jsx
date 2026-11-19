import { useState } from 'react'
import { ArrowRight, CheckCircle2, Mail, MessageCircle, Send, TriangleAlert } from 'lucide-react'
import './Contact.css'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/endigitalstudio0@gmail.com'

function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (formData.get('_honey')) return

    setStatus('sending')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      if (!response.ok) throw new Error('Submission failed')

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-info">
        <p className="section-label">— Parlons de votre projet —</p>
        <h2 id="contact-title">Votre prochaine idée <em>commence ici.</em></h2>
        <p>Vous avez un projet en tête ? Présentez-nous votre besoin et construisons ensemble votre présence digitale.</p>
        <div className="contact-details">
          <a href="mailto:endigitalstudio0@gmail.com"><Mail size={16} /><span><b>Email</b>endigitalstudio0@gmail.com</span></a>
          <span><MessageCircle size={16} /><span><b>Studio</b>EN Digital Studio</span></span>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input className="contact-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
        <input type="hidden" name="_subject" value="Nouvelle demande — EN Digital Studio" />
        <input type="hidden" name="_template" value="table" />

        <label htmlFor="contact-name">Nom complet
          <input id="contact-name" name="nom" type="text" placeholder="Votre nom" autoComplete="name" required />
        </label>
        <label htmlFor="contact-email">Adresse e-mail
          <input id="contact-email" name="email" type="email" placeholder="votre@email.com" autoComplete="email" required />
        </label>
        <label htmlFor="contact-service">Service souhaité
          <select id="contact-service" name="service" defaultValue="" required>
            <option value="" disabled>Choisissez un service</option>
            <option>Site web vitrine</option>
            <option>Site e-commerce</option>
            <option>Application web</option>
            <option>Logo & identité visuelle</option>
            <option>Autre projet</option>
          </select>
        </label>
        <label htmlFor="contact-message">Parlez-nous de votre projet
          <textarea id="contact-message" name="message" rows="4" placeholder="Décrivez votre besoin..." required />
        </label>
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? <>Envoi en cours… <Send size={15} /></> : <>Envoyer ma demande <ArrowRight size={15} /></>}
        </button>

        <p className={`contact-feedback ${status}${status === 'success' || status === 'error' ? ' is-visible' : ''}`} role="status" aria-live="polite">
          {status === 'success' && <><CheckCircle2 size={16} /> Merci, votre demande a bien été envoyée.</>}
          {status === 'error' && <><TriangleAlert size={16} /> L&apos;envoi a échoué. Écrivez-nous directement par e-mail.</>}
        </p>
      </form>
    </section>
  )
}

export default Contact
