import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";

const services = [
  ["01", "Software Engineering", "Robust web platforms, enterprise systems and APIs engineered for performance and scale."],
  ["02", "Product & UX Design", "Research-led digital experiences that make complex ideas intuitive and memorable."],
  ["03", "Cloud & DevOps", "Secure cloud foundations, automated delivery and infrastructure that grows with demand."],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <div className="hero-grid" /><div className="orb orb-one" /><div className="orb orb-two" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Engineering the future</p>
          <h1>Pioneering digital <em>innovation</em> for enterprise.</h1>
          <p className="hero-lead">HukoConsults delivers high-performance software, intelligent products and modern cloud systems for organisations ready to lead.</p>
          <div className="hero-actions">
            <Link className="button button-red" href="/contact">Start your project <span>↗</span></Link>
            <Link className="text-link" href="/services">Our solutions <span>→</span></Link>
          </div>
        </div>
        <div className="hero-console">
          <div className="console-top"><span /><span /><span /><b>HUKO / SYSTEMS</b></div>
          <div className="console-body">
            <div className="pulse-ring"><div className="pulse-core">H</div></div>
            <p><span>STATUS</span> READY TO BUILD</p><p><span>FOCUS</span> DIGITAL IMPACT</p><p><span>REGION</span> AFRICA → GLOBAL</p>
          </div>
        </div>
        <div className="hero-foot"><span>Strategy</span><b>+</b><span>Experience</span><b>+</b><span>Technology</span></div>
      </section>

      <section className="trust-strip">
        <p>Built for ambitious teams</p>
        <div><strong>01</strong><span>Business-first<br />thinking</span></div>
        <div><strong>02</strong><span>Senior technical<br />expertise</span></div>
        <div><strong>03</strong><span>End-to-end<br />delivery</span></div>
      </section>

      <section className="section services">
        <div className="section-heading">
          <div><p className="eyebrow dark"><span /> Core capabilities</p><h2>Strategic solutions for a <em>digital-first world.</em></h2></div>
          <p>We bring design, engineering and emerging technology together to solve high-value business challenges.</p>
        </div>
        <div className="service-grid three">
          {services.map(([number, title, text]) => (
            <article className="service-card" key={number}>
              <div className="service-number">{number}</div><div className="service-icon">⌁</div>
              <h3>{title}</h3><p>{text}</p>
              <Link href="/services">Explore capability <span>↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-visual"><div className="signal signal-a" /><div className="signal signal-b" /><div className="visual-label"><span>THE HUKO STANDARD</span><b>Precision-engineered<br />professionalism.</b></div></div>
        <div className="manifesto-copy">
          <p className="eyebrow"><span /> Why HukoConsults</p>
          <h2>Built for momentum. <em>Designed for impact.</em></h2>
          <p>We connect ambitious strategy with disciplined execution, giving our clients one accountable partner from opportunity to launch.</p>
          <div className="principles"><div><b>Clarity first</b><span>Focused thinking and honest advice.</span></div><div><b>Built to last</b><span>Quality foundations that scale.</span></div><div><b>One team</b><span>True collaboration throughout.</span></div></div>
        </div>
      </section>

      <section className="page-cta">
        <p className="eyebrow"><span /> Your next move</p><h2>Ready to engineer your <em>advantage?</em></h2>
        <Link className="button light-button" href="/contact">Begin a project <span>↗</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
