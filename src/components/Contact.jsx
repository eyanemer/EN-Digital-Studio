import { useState } from 'react'
import { ArrowRight, CheckCircle2, Mail, MessageCircle, Send, TriangleAlert } from 'lucide-react'
import './Contact.css'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/endigitalstudio0@gmail.com'

function Contact() {
  const [status, setStatus] = useState('idle')
  const [values, setValues] = useState({ nom: '', email: '', service: '', message: '' })
  const [touched, setTouched] = useState({})

  function validate(name, value) {
    if (!value.trim()) return 'Ce champ est obligatoire.'
    if (name === 'nom' && value.trim().length < 2) return 'Saisissez au moins 2 caractères.'
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Saisissez une adresse e-mail valide.'
    if (name === 'message' && value.trim().length < 15) return 'Ajoutez quelques détails (15 caractères minimum).'
    return ''
  }

  function updateField(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (touched[name]) setErrors((current) => ({ ...current, [name]: validate(name, value) }))
    if (status !== 'idle') setStatus('idle')
  }
  const [errors, setErrors] = useState({})

  function blurField(event) {
    const { name, value } = event.target
    setTouched((current) => ({ ...current, [name]: true }))
    setErrors((current) => ({ ...current, [name]: validate(name, value) }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (formData.get('_honey')) return

    const nextErrors = Object.fromEntries(Object.entries(values).map(([name, value]) => [name, validate(name, value)]))
    setTouched({ nom: true, email: true, service: true, message: true })
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return

    setStatus('sending')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      if (!response.ok) throw new Error('Submission failed')

      form.reset()
      setValues({ nom: '', email: '', service: '', message: '' })
      setTouched({})
      setErrors({})
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
          <a href="https://wa.me/21655641245" target="_blank" rel="noreferrer" aria-label="Écrire au studio sur WhatsApp au +216 55 641 245">
            <svg className="contact-brand-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 11.8a8.2 8.2 0 0 1-12.1 7.2L4 20l1.1-4a8.2 8.2 0 1 1 15.1-4.2Z"/><path d="M9 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.4.8 1.1 1.5 1.9 1.9.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .5-.2 1-.6 1.3-.5.4-1 .6-1.7.5-1.2-.1-2.8-.9-4.1-2.1-1.2-1.2-2-2.7-2.1-3.8-.1-.7.1-1.2.5-1.5Z"/></svg>
            <span>+216 55 641 245</span>
          </a>
          <a href="https://www.instagram.com/en_digital_studio?fqnt=NmwycjFlMW9hMzZ2" target="_blank" rel="noreferrer" aria-label="Voir le profil Instagram EN Digital Studio">
            <svg className="contact-brand-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle className="icon-dot" cx="17.5" cy="6.8" r=".8"/></svg>
            <span>@en_digital_studio</span>
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input className="contact-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
        <input type="hidden" name="_subject" value="Nouvelle demande — EN Digital Studio" />
        <input type="hidden" name="_template" value="table" />

        <label htmlFor="contact-name">Nom complet
          <input id="contact-name" name="nom" type="text" placeholder="Votre nom" autoComplete="name" required minLength={2} value={values.nom} onChange={updateField} onBlur={blurField} aria-invalid={Boolean(touched.nom && errors.nom)} aria-describedby={touched.nom && errors.nom ? 'contact-name-error' : undefined} />
          {touched.nom && errors.nom && <span className="field-error" id="contact-name-error">{errors.nom}</span>}
        </label>
        <label htmlFor="contact-email">Adresse e-mail
          <input id="contact-email" name="email" type="email" placeholder="votre@email.com" autoComplete="email" required value={values.email} onChange={updateField} onBlur={blurField} aria-invalid={Boolean(touched.email && errors.email)} aria-describedby={touched.email && errors.email ? 'contact-email-error' : undefined} />
          {touched.email && errors.email && <span className="field-error" id="contact-email-error">{errors.email}</span>}
        </label>
        <label htmlFor="contact-service">Service souhaité
          <select id="contact-service" name="service" value={values.service} onChange={updateField} onBlur={blurField} required aria-invalid={Boolean(touched.service && errors.service)} aria-describedby={touched.service && errors.service ? 'contact-service-error' : undefined}>
            <option value="" disabled>Choisissez un service</option>
            <option>Site web vitrine</option>
            <option>Site e-commerce</option>
            <option>Application web</option>
            <option>Logo & identité visuelle</option>
            <option>Autre projet</option>
          </select>
          {touched.service && errors.service && <span className="field-error" id="contact-service-error">{errors.service}</span>}
        </label>
        <label htmlFor="contact-message">Parlez-nous de votre projet
          <textarea id="contact-message" name="message" rows="4" placeholder="Décrivez votre besoin..." required minLength={15} value={values.message} onChange={updateField} onBlur={blurField} aria-invalid={Boolean(touched.message && errors.message)} aria-describedby={touched.message && errors.message ? 'contact-message-error' : undefined} />
          {touched.message && errors.message && <span className="field-error" id="contact-message-error">{errors.message}</span>}
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
