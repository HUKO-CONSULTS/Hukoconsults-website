import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { InnovationField } from "../components/InnovationField";

const capabilities = [
  { title: "Software Development", code: "ENGINEER", image: "/service-software.png", text: "We build robust, secure and scalable software tailored to your business requirements.", items: ["Custom enterprise apps", "API development", "Legacy modernisation", "SaaS architecture"] },
  { title: "Web & Mobile Apps", code: "EXPERIENCE", image: "/project-bookbite.png", project: true, text: "Fast, intuitive digital products designed to work beautifully across every device.", items: ["React & Next.js apps", "Mobile products", "Cross-platform delivery", "Responsive design"] },
  { title: "UI/UX Design", code: "DESIGN", image: "/service-ux.png", text: "Research, strategy and interface systems that turn complex tasks into clear experiences.", items: ["User research", "Product strategy", "Prototyping", "Design systems"] },
  { title: "Sales Growth & Digital Consulting", code: "GROWTH", image: "/service-sales.png", sales: true, text: "We build proven sales systems that move inventory, grow revenue and turn marketing into measurable results in 30–90 days.", items: ["Conversion-focused ad strategy", "Funnel and offer optimisation", "Sales team training and audits", "Ecommerce marketplace growth", "30–60–90 day sales roadmap", "Revenue and campaign analytics"] },
];

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero">
        <div className="hero-grid" /><InnovationField />
        <div><p className="eyebrow"><span /> Capabilities and expertise</p><h1>Digital solutions<br />that work.</h1><p>We build clear, useful technology that helps your business move forward.</p></div>
      </section>
      <section className="capability-list immersive-services">
        {capabilities.map((item, index) => (
          <article className={`capability-row ${index % 2 ? "reverse" : ""} ${item.sales ? "sales-service" : ""}`} key={item.title}>
            <div className="capability-art service-scene">
              <img src={item.image} alt={`${item.title} service visual`} />
              {item.project && <a className="project-badge" href="https://bookbite.net/" target="_blank" rel="noreferrer">Live project · BookBite <ArrowUpRight size={15} /></a>}
            </div>
            <div className="capability-copy">
              <p className="eyebrow dark"><span /> {item.code}</p><h2>{item.title}</h2><p>{item.text}</p>
              <div className="capability-items">{item.items.map((entry) => <span key={entry}>{entry}</span>)}</div>
              {item.project ? <a className="outline-button" href="https://bookbite.net/" target="_blank" rel="noreferrer">View BookBite live <ArrowUpRight size={15} /></a> : item.sales ? <a className="outline-button" href="https://wa.me/256767625461?text=Hello%20HukoConsults%2C%20I%20would%20like%20a%20free%20sales%20strategy%20call." target="_blank" rel="noreferrer">Book your free strategy call <ArrowUpRight size={15} /></a> : <Link className="outline-button" href="/contact">Explore solutions <ArrowUpRight size={15} /></Link>}
            </div>
          </article>
        ))}
      </section>
      <section className="sales-proof">
        <p className="eyebrow"><span /> Why HukoConsults</p>
        <h2>Stop guessing. Build a sales engine that moves.</h2>
        <div><article><strong>30–90</strong><span>Day growth roadmap</span></article><article><strong>200M+</strong><span>UGX ecommerce sales delivered in two weeks</span></article><article><strong>350M</strong><span>UGX high-ticket launch revenue in one month</span></article></div>
      </section>
      <section className="page-cta"><p className="eyebrow"><span /> Take the next step</p><h2>Ready to build what grows your business?</h2><Link className="button light-button" href="/contact">Contact strategy team <ArrowUpRight size={17} /></Link></section>
      <SiteFooter />
    </main>
  );
}
