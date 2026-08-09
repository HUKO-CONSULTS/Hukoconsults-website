import Link from "next/link";
import { ArrowUpRight, Gauge, Lightbulb, ShieldCheck, Target, Zap } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { InnovationField } from "../components/InnovationField";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero about-hero">
        <div className="hero-grid" />
        <InnovationField />
        <div><p className="eyebrow"><span /> About Huko Consults</p><h1>Technology that<br /><em>helps you grow.</em></h1><p>We build useful digital tools that help businesses work better and grow.</p></div>
      </section>
      <section className="section challenge">
        <div><p className="eyebrow dark"><span /> What we solve</p><h2>We make technology <em>easier.</em></h2></div>
        <div className="challenge-copy">
          <article><b>01</b><div><h3>Old systems</h3><p>Old tools can make work slow and difficult. We help businesses move to better systems.</p></div></article>
          <article><b>02</b><div><h3>Projects that feel confusing</h3><p>We make a simple plan, explain each step and build the right solution with you.</p></div></article>
        </div>
        <div className="about-art"><div className="tech-frame frame-4"><Zap size={58} strokeWidth={1.4} /></div></div>
      </section>
      <section className="mission">
        <p className="eyebrow dark"><span /> Our purpose</p><h2>Mission & vision</h2>
        <div className="mission-grid">
          <article><span><Target size={27} /></span><h3>Our mission</h3><p>To build reliable technology that helps businesses solve problems and grow.</p></article>
          <article><span><Lightbulb size={27} /></span><h3>Our vision</h3><p>To become a trusted technology partner for businesses in Africa and around the world.</p></article>
        </div>
      </section>
      <section className="intelligence">
        <div className="team-art"><div>HUKO</div><span>Ideas grow stronger together.</span></div>
        <div><p className="eyebrow"><span /> How we work</p><h2>Better ideas come from <em>working together.</em></h2><p>We listen to our clients, share ideas and work as one team from start to finish.</p><div className="stat-grid"><b>150+<small>Projects shaped</small></b><b>24/7<small>Global support</small></b><b>12+<small>Specialist skills</small></b><b>98%<small>Client retention</small></b></div></div>
      </section>
      <section className="section integrity">
        <div><p className="eyebrow dark"><span /> Our promise</p><h2>Technology you can <em>trust.</em></h2><p>We build carefully, speak clearly and focus on work that gives you real value.</p></div>
        <div className="integrity-grid"><article><ShieldCheck size={27} /><h3>Safe</h3><p>We protect your system and information from the start.</p></article><article><Zap size={27} /><h3>Useful</h3><p>We use modern technology only when it helps your business.</p></article><article><Gauge size={27} /><h3>Fast</h3><p>We build systems that work well and can grow with you.</p></article></div>
      </section>
      <section className="presence"><p className="eyebrow dark"><span /> Where we work</p><h2>Based in Kampala. Ready to work anywhere.</h2><p>Our team can work with businesses in Africa and across the world.</p><div><span>Kampala</span><span>Nairobi</span><span>Lagos</span><span>Johannesburg</span><span>Accra</span></div></section>
      <section className="page-cta"><h2>Ready to build something useful?</h2><Link className="button light-button" href="/contact">Talk to us <ArrowUpRight size={17} /></Link></section>
      <SiteFooter />
    </main>
  );
}
