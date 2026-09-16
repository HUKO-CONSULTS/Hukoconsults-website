import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { InnovationField } from "./components/InnovationField";

const services = [
  { title: "Web & Mobile Apps", text: "We build fast, user-friendly web and mobile apps that work seamlessly across every device.", image: "/project-bookbite.png", alt: "BookBite ecommerce website displayed on a desktop browser" },
  { title: "UX Design", text: "We turn complex ideas into simple, intuitive digital experiences.", image: "/ugandan-ux-design.png", alt: "Ugandan product designers collaborating around a laptop and whiteboard" },
  { title: "Business Growth", text: "We help you improve sales, reach more customers and build a clear plan for growth.", image: "/ugandan-business-growth.png", alt: "Ugandan business team reviewing a digital growth strategy" },
];

export const metadata: Metadata = {
  title: "Software, digital products & growth systems in Kampala",
  description: "Huko Consults helps ambitious businesses build practical software, customer-friendly digital products and measurable growth systems.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <div className="hero-photo" aria-hidden="true" /><div className="hero-grid" />
        <InnovationField />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Welcome to HukoConsults</p>
          <h1>Building intelligent<br /><em>software</em> for<br />ambitious businesses.</h1>
          <p className="hero-lead">Huko Consults delivers custom software, digital experiences and scalable growth solutions.</p>
          <div className="hero-actions">
            <Link className="button button-red" href="/contact">Start your project <ArrowUpRight size={17} /></Link>
            <Link className="text-link" href="/services">Our solutions <ArrowRight size={16} /></Link>
          </div>
        </div>
        <div className="hero-foot"><span>Strategy</span><b>+</b><span>Experience</span><b>+</b><span>Technology</span></div>
      </section>

      <section className="trust-strip">
        <p>Think. Build. Scale.</p>
        <div><strong>01</strong><span>Business-first<br />thinking</span></div>
        <div><strong>02</strong><span>Technical<br />expertise</span></div>
        <div><strong>03</strong><span>End-to-end<br />delivery</span></div>
      </section>

      <section className="section services">
        <div className="section-heading">
          <div><p className="eyebrow dark"><span /> Core capabilities</p><h2>Creating solutions for a <em>digital-first future.</em></h2></div>
          <p>We combine design, technology and strategy to solve real business challenges.</p>
        </div>
        <div className="service-grid three">
          {services.map(({ title, text, image, alt }) => (
            <article className="service-card" key={title}>
              <div className="home-service-image"><img src={image} alt={alt} width="1200" height="800" loading="lazy" decoding="async" /></div>
              <h3>{title}</h3><p>{text}</p>
              <Link href="/services">Explore capability <ArrowUpRight size={16} /></Link>
            </article>
          ))}
        </div>
        <div className="services-more"><Link className="button button-red" href="/services">More services <ArrowUpRight size={17} /></Link></div>
      </section>

      <section className="manifesto">
        <div className="manifesto-visual people-visual"><div className="signal signal-a" /><div className="signal signal-b" /><div className="visual-label"><span>THE HUKO STANDARD</span><b>Precision. Partnership.<br />Performance.</b></div></div>
        <div className="manifesto-copy">
          <p className="eyebrow"><span /> Why HukoConsults</p>
          <h2>Think. Build. Scale. <em>Results Over Promises.</em></h2>
          <p>We partner with forward-thinking businesses to turn ideas into practical, scalable digital solutions.</p>
          <div className="principles"><div><b>Clarity first</b><span>Focused thinking and honest advice.</span></div><div><b>Built to last</b><span>Quality foundations that scale.</span></div><div><b>One team</b><span>True collaboration throughout.</span></div></div>
        </div>
      </section>

      <section className="page-cta">
        <p className="eyebrow"><span /> Your next move</p><h2>Ready to bring your ideas to life? <em>Let’s discuss your goals.</em></h2>
        <Link className="button light-button" href="/contact">Start your project <ArrowUpRight size={17} /></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
