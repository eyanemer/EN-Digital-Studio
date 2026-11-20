import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Reveal } from './Motion'

const questions = [
  { question: 'Comment se déroule un premier échange ?', answer: 'Nous échangeons sur votre activité, vos objectifs, votre public et votre calendrier. Cet échange nous permet de mieux cadrer le besoin avant de vous proposer une démarche adaptée.' },
  { question: 'Pouvez-vous accompagner un projet de A à Z ?', answer: 'Oui. Le studio peut vous accompagner de la réflexion et de la direction visuelle jusqu’à la réalisation et à la livraison, selon les besoins de votre projet.' },
  { question: 'Travaillez-vous avec des entrepreneurs et des PME ?', answer: 'Oui. Les projets sont conçus sur mesure pour les entrepreneurs, les marques et les petites et moyennes entreprises.' },
  { question: 'Comment demander un devis ?', answer: 'Présentez-nous votre projet via le formulaire de contact. Nous reviendrons vers vous pour préciser le périmètre et les prochaines étapes.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <Reveal className="faq-heading">
        <p className="section-label">— Questions fréquentes —</p>
        <h2 id="faq-title">Avant de <em>commencer.</em></h2>
        <p>Quelques réponses pour vous aider à préparer votre projet.</p>
      </Reveal>
      <div className="faq-list">
        {questions.map(({ question, answer }, index) => (
          <Reveal key={question} delay={index * .05}>
            <article className={`faq-item${open === index ? ' is-open' : ''}`}>
              <h3><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>{question}<ChevronDown size={19} aria-hidden="true" /></button></h3>
              <div className="faq-answer" aria-hidden={open !== index}><p>{answer}</p></div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
