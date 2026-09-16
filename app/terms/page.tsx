import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description: "Terms for using the Huko Consults website and contacting our team about services.",
  alternates: { canonical: "/terms" },
};

const clauses = [
  {
    title: "Acceptance of terms",
    text: "By accessing or using this website, you agree to be bound by these terms and conditions. If you do not agree, please do not use this site.",
  },
  {
    title: "Services",
    text: "Our services are provided \u201cas is\u201d. We strive for accuracy and quality but do not guarantee that our deliverables will be error-free or uninterrupted.",
  },
  {
    title: "Intellectual property",
    text: "All content on this site is the property of HukoConsults unless otherwise stated. You may not reproduce, distribute, or create derivative works without our written permission.",
  },
  {
    title: "Limitation of liability",
    text: "HukoConsults shall not be liable for any indirect, incidental, or consequential damages arising from your use of this site or our services.",
  },
  {
    title: "Contact",
    text: "Questions about these terms should be directed to info@hukoconsults.com.",
  },
];

export default function TermsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero">
        <div className="hero-grid" />
        <div>
          <p className="eyebrow"><span /> Legal</p>
          <h1>Terms &amp; conditions</h1>
          <p>Terms for using the Huko Consults website and our services. Last updated: 14 September 2026.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark"><span /> The specifics</p>
            <h2>What you&rsquo;re <em>agreeing to.</em></h2>
          </div>
          <p>Please read these terms carefully before using our website or engaging our services.</p>
        </div>

        <div className="process-list">
          {clauses.map(({ title, text }, i) => (
            <article key={title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>
                {title === "Contact" ? (
                  <>
                    Questions about these terms should be directed to{" "}
                    <a href="mailto:info@hukoconsults.com">info@hukoconsults.com</a>.
                  </>
                ) : (
                  text
                )}
              </p>
              <i>&rarr;</i>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
