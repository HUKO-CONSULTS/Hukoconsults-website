import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero about-hero">
        <div className="hero-grid" />
        <div><p className="eyebrow"><span /> Architecting tomorrow</p><h1>Engineering<br /><em>digital authority.</em></h1><p>HukoConsults is an elite technology firm dedicated to transforming complex enterprise challenges into seamless, innovative solutions.</p></div>
        <div className="page-index">02 <span>/ ABOUT</span></div>
      </section>
      <section className="section challenge">
        <div><p className="eyebrow dark"><span /> The challenge</p><h2>Navigating digital <em>complexity.</em></h2></div>
        <div className="challenge-copy">
          <article><b>01</b><div><h3>Technological exhaustion</h3><p>Legacy systems and outdated architectures limit the speed at which organisations can innovate.</p></div></article>
          <article><b>02</b><div><h3>Inefficient implementation</h3><p>We replace fragmented execution with a focused, strategic delivery model.</p></div></article>
        </div>
        <div className="about-art"><div className="tech-frame frame-4"><b>HC</b></div></div>
      </section>
      <section className="mission">
        <p className="eyebrow dark"><span /> Core directives</p><h2>Mission & vision</h2>
        <div className="mission-grid">
          <article><span>◎</span><h3>Our mission</h3><p>To provide the architectural backbone for the next generation of industry leaders through exceptional technology delivery.</p></article>
          <article><span>◇</span><h3>Our vision</h3><p>To redefine the standard of digital innovation by being the preferred benchmark for technical excellence.</p></article>
        </div>
      </section>
      <section className="intelligence">
        <div className="team-art"><div>HUKO</div><span>Ideas grow stronger together.</span></div>
        <div><p className="eyebrow"><span /> Our DNA</p><h2>Collaborative <em>intelligence.</em></h2><p>We believe the strongest solutions are born at the intersection of diverse expertise and rigorous technical standards.</p><div className="stat-grid"><b>150+<small>Projects shaped</small></b><b>24/7<small>Global support</small></b><b>12+<small>Specialist disciplines</small></b><b>98%<small>Client retention</small></b></div></div>
      </section>
      <section className="section integrity">
        <div><p className="eyebrow dark"><span /> Our promise</p><h2>Technological <em>integrity.</em></h2><p>We build responsibly, communicate clearly and pursue excellence through every decision.</p></div>
        <div className="integrity-grid"><article><b>01</b><h3>Security</h3><p>Enterprise-grade protection from day one.</p></article><article><b>02</b><h3>Innovation</h3><p>Modern thinking applied where it creates value.</p></article><article><b>03</b><h3>Performance</h3><p>Fast, resilient systems measured by outcomes.</p></article></div>
      </section>
      <section className="presence"><p className="eyebrow dark"><span /> Global reach</p><h2>A presence without boundaries</h2><p>Headquartered in Kampala with a distributed network built for international delivery.</p><div><span>Kampala</span><span>Nairobi</span><span>Lagos</span><span>Johannesburg</span><span>Accra</span></div></section>
      <section className="page-cta"><h2>Ready to engineer your future?</h2><Link className="button light-button" href="/contact">Begin consultation <span>↗</span></Link></section>
      <SiteFooter />
    </main>
  );
}
