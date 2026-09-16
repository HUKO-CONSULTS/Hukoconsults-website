import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Read how Huko Consults collects, uses, stores and protects personal information submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
};

const clauses = [
  {
    title: "Information we collect",
    text: "We collect information you provide directly to us, such as your name, email address, company name, phone number, and project details when you fill out our contact form or communicate with us.",
  },
  {
    title: "How we use your information",
    text: "We use your information to respond to your enquiry, discuss requested services, and maintain our client records. We do not sell or rent personal data. We only share it with service providers where necessary to deliver the website or respond to your request.",
  },
  {
    title: "Data security",
    text: "We use proportionate technical and organisational safeguards to reduce unauthorised access, alteration, disclosure or loss. No online system can guarantee absolute security, so please avoid sending passwords or sensitive financial information through the contact form.",
  },
  {
    title: "Your choices and rights",
    text: "You may ask us to access, correct or delete personal data we hold about you, or object to certain processing, subject to applicable law. Contact us using the details below and include enough information for us to identify your request.",
  },
  {
    title: "Contact",
    isContact: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero">
        <div className="hero-grid" />
        <div>
          <p className="eyebrow"><span /> Legal</p>
          <h1>Privacy policy</h1>
          <p>How Huko Consults collects, uses, and protects your personal information. Last updated: 14 September 2026.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark"><span /> Your data</p>
            <h2>How we <em>protect it.</em></h2>
          </div>
          <p>A straightforward look at what we collect, why, and how it&rsquo;s kept safe.</p>
        </div>

        <div className="process-list">
          {clauses.map(({ title, text, isContact }, i) => (
            <article key={title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>
                {isContact ? (
                  <>
                    If you have questions about this privacy policy, please contact us at{" "}
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
