import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ContactForm } from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero contact-hero">
        <div className="hero-grid" />
        <div><p className="eyebrow"><span /> Let’s build something exceptional</p><h1>Start your next<br /><em>digital chapter.</em></h1><p>Tell us where you want to go. We’ll help define the smartest route and assemble the right expertise to get there.</p></div>
        <div className="page-index">03 <span>/ CONTACT</span></div>
      </section>
      <section className="contact contact-page">
        <div className="contact-intro">
          <p className="eyebrow"><span /> Direct channels</p><h2>Speak with our <em>strategy team.</em></h2><p>We welcome ambitious problems, early ideas and transformation projects. Reach us through the channel that suits you.</p>
          <div className="contact-direct">
            <a href="mailto:hukoconsults@gmail.com"><small>Email us</small>hukoconsults@gmail.com <span>↗</span></a>
            <a href="tel:075800100"><small>Call us</small>075800100 <span>↗</span></a>
            <a href="https://wa.me/256767625461" target="_blank" rel="noreferrer"><small>WhatsApp</small>+256 767 625 461 <span>↗</span></a>
          </div>
        </div>
        <ContactForm />
      </section>
      <section className="contact-notes"><article><span>01</span><h3>Fast response</h3><p>Expect a thoughtful reply within one business day.</p></article><article><span>02</span><h3>Confidential by default</h3><p>Your project details are treated with care and discretion.</p></article><article><span>03</span><h3>Clear next steps</h3><p>We’ll recommend a practical path, team and engagement model.</p></article></section>
      <SiteFooter />
    </main>
  );
}
