import './Services.css'
import { Code2, ShoppingCart, MonitorSmartphone, PenTool, FileText, Presentation } from 'lucide-react'
const services = [
  { icon: Code2, tag:'Web design', title: 'Sites web vitrines', text: 'Des sites élégants et professionnels pour présenter votre activité et attirer de nouveaux clients.' },
  { icon: ShoppingCart, tag:'E-commerce', title: 'Sites e-commerce', text: 'Des boutiques en ligne modernes pour présenter vos produits et développer vos ventes.' },
  { icon: MonitorSmartphone, tag:'Développement', title: 'Applications web', text: 'Des solutions web adaptées à vos besoins pour simplifier vos activités et vos processus.' },
  { icon: PenTool, tag:'Branding', title: 'Logo & identité visuelle', text: 'Une identité graphique cohérente et mémorable pour révéler la personnalité de votre marque.' },
  { icon: FileText, tag:'Carrière', title: 'CV optimisés ATS', text: 'Des CV professionnels, structurés et optimisés pour les logiciels de recrutement.' },
  { icon: Presentation, tag:'Présentation', title: 'Présentations PowerPoint', text: 'Des présentations visuelles et percutantes pour valoriser vos idées et vos projets.' },
]
function Services() { return <section className="services" id="services"><div className="services-heading"><p className="section-label">— Ce que nous proposons —</p><h2>Des solutions créatives <em>pour vos ambitions.</em></h2><p>De la conception à la réalisation, nous donnons forme à vos idées grâce à des solutions digitales pensées pour vous.</p></div><div className="services-grid">{services.map(({ icon: Icon, tag, title, text }, index) => <article className="service-card" key={title}><div className="service-top"><Icon className="service-icon" strokeWidth={1.6} /><span>0{index + 1}</span></div><p className="service-tag">{tag}</p><h3>{title}</h3><p>{text}</p></article>)}</div></section> }
export default Services
