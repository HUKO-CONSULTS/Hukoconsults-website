import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

const capabilities = [
  { title: "Software Development", code: "ENGINEER", text: "We build robust, secure and scalable software tailored to your business requirements.", items: ["Custom enterprise apps", "API development", "Legacy modernisation", "SaaS architecture"] },
  { title: "Web & Mobile Apps", code: "EXPERIENCE", text: "Fast, intuitive digital products designed to work beautifully across every device.", items: ["React & Next.js apps", "Mobile products", "Cross-platform delivery", "Responsive design"] },
  { title: "UI/UX Design", code: "DESIGN", text: "Research, strategy and interface systems that turn complex tasks into clear experiences.", items: ["User research", "Product strategy", "Prototyping", "Design systems"] },
  { title: "Cloud & DevOps", code: "INFRASTRUCTURE", text: "Resilient infrastructure, automated pipelines and secure cloud architecture.", items: ["Cloud migration", "CI/CD pipelines", "Monitoring", "Security"] },
  { title: "AI & Automation", code: "INTELLIGENCE", text: "Useful AI that connects your information, automates work and improves decisions.", items: ["AI integrations", "Process automation", "Predictive analytics", "Intelligent workflows"] },
  { title: "Digital Consulting", code: "STRATEGY", text: "A practical roadmap from your current technology landscape to your desired future.", items: ["Tech audits", "Product roadmaps", "Transformation", "Team mentoring"] },
];

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero">
        <div className="hero-grid" />
        <div><p className="eyebrow"><span /> Capabilities & expertise</p><h1>Architecting <em>digital</em><br />foundations.</h1><p>From precision software engineering to strategic technology consulting, we deliver the expertise needed to move your business forward.</p></div>
        <div className="page-index">01 <span>/ SERVICES</span></div>
      </section>
      <section className="capability-list">
        {capabilities.map((item, index) => (
          <article className={`capability-row ${index % 2 ? "reverse" : ""}`} key={item.title}>
            <div className="capability-art"><span>0{index + 1}</span><div className={`tech-frame frame-${index + 1}`}><b>{item.code.slice(0, 2)}</b></div></div>
            <div className="capability-copy">
              <p className="eyebrow dark"><span /> {item.code}</p><h2>{item.title}</h2><p>{item.text}</p>
              <div className="capability-items">{item.items.map((entry) => <span key={entry}>● {entry}</span>)}</div>
              <Link className="outline-button" href="/contact">Explore solutions <span>↗</span></Link>
            </div>
          </article>
        ))}
      </section>
      <section className="specialties">
        <div><p className="eyebrow"><span /> Focused specialties</p><h2>Technology, sharpened by <em>expertise.</em></h2></div>
        <div className="specialty-grid"><article><b>BR</b><h3>Branding</h3><p>Identity systems built for digital products.</p></article><article><b>DB</b><h3>Database</h3><p>Optimised data architecture for scale.</p></article><article><b>GW</b><h3>Global Web</h3><p>Localised platforms for international reach.</p></article></div>
      </section>
      <section className="page-cta"><p className="eyebrow"><span /> Take the next step</p><h2>Ready to evolve your <em>infrastructure?</em></h2><Link className="button light-button" href="/contact">Contact strategy team <span>↗</span></Link></section>
      <SiteFooter />
    </main>
  );
}
