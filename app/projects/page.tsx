import type { Metadata } from "next";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Selected projects",
  description: "See selected digital products and ecommerce websites delivered by Huko Consults, including The Hub UG, BookBite and Nexus Computers.",
  alternates: { canonical: "/projects" },
};

const projects = [
  {
    name: "The Hub UG",
    type: "Ecommerce website",
    description:
      "A clear, mobile-ready online shop for genuine phones, laptops, audio and accessories in Kampala.",
    image: "/project-the-hub-ug.png",
    alt: "The Hub UG online store showing its latest smartphones",
    href: "https://thehub.ug/",
    tags: ["Ecommerce", "Product discovery", "Mobile-first"],
  },
  {
    name: "BookBite",
    type: "Ecommerce website",
    description:
      "An inviting online bookstore designed to make discovering and buying books straightforward.",
    image: "/project-bookbite.png",
    alt: "BookBite online bookstore homepage showing a featured book",
    href: "https://bookbite.net/",
    tags: ["Ecommerce", "Website build", "Customer experience"],
  },
  {
    name: "Nexus Computers",
    type: "Ecommerce website",
    description:
      "A product-focused online store that makes it simple to browse computers, smartphones and accessories.",
    image: "/project-nexus-computers.png",
    alt: "Nexus Computers online storefront with technology categories and featured products",
    href: "https://nexuscomputers.ug/",
    tags: ["Ecommerce", "Product catalogue", "Mobile-first"],
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero projects-hero">
        <div className="hero-grid" />
        <div>
          <p className="eyebrow"><span /> Selected work</p>
          <h1>Built for real<br /><em>business momentum.</em></h1>
          <p>Digital products designed around how customers browse, decide and buy.</p>
        </div>
      </section>

      <section className="section projects-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark"><span /> Recent launches</p>
            <h2>Work that earns its <em>place in the market.</em></h2>
          </div>
          <p>Every project starts with the customer journey, then turns it into a fast, focused and practical digital experience.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-image">
                <img src={project.image} alt={project.alt} width="1400" height="900" loading="lazy" decoding="async" />
                <span>{project.type}</span>
              </div>
              <div className="project-copy">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  Visit live website <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="page-cta">
        <p className="eyebrow"><span /> Your project</p>
        <h2>Want a website that helps customers take action?</h2>
        <a className="button light-button" href="/contact">Start your project <ArrowUpRight size={17} /></a>
      </section>
      <SiteFooter />
    </main>
  );
}
