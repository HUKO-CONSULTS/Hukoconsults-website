import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ContactForm } from "../components/ContactForm";
import { ArrowUpRight, Clock3, Mail, MessageCircle, Phone, Route, ShieldCheck } from "lucide-react";
import { InnovationField } from "../components/InnovationField";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero contact-hero">
        <div className="hero-grid" />
        <InnovationField />
        <div><p className="eyebrow"><span /> Let’s build something useful</p><h1>Let’s build your<br /><em>next big idea.</em></h1><p>Tell us what you need. We will listen, make a clear plan and help you build it.</p></div>
      </section>
      <section className="contact contact-page">
        <div className="contact-intro">
          <p className="eyebrow"><span /> Contact us</p><h2>Talk with our <em>team.</em></h2><p>You can contact us with a new idea, a problem or a project. Choose the easiest way to reach us.</p>
          <div className="contact-direct">
            <a href="mailto:hukoconsults@gmail.com"><small><Mail size={15} /> Email us</small>hukoconsults@gmail.com <ArrowUpRight size={16} /></a>
            <a href="tel:0758033100"><small><Phone size={15} /> Call us</small>0758033100 <ArrowUpRight size={16} /></a>
            <a href="https://wa.me/256767625461" target="_blank" rel="noreferrer"><small><MessageCircle size={15} /> WhatsApp</small>+256 767 625 461 <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <ContactForm />
      </section>
      <section className="contact-notes"><article><Clock3 size={25} /><h3>Quick reply</h3><p>We aim to reply within one working day.</p></article><article><ShieldCheck size={25} /><h3>Your idea is safe</h3><p>We keep your project information private.</p></article><article><Route size={25} /><h3>A clear plan</h3><p>We will explain what should happen next and how we can help.</p></article></section>
      <SiteFooter />
    </main>
  );
}
