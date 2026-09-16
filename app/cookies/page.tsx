import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Cookies policy",
  description: "Learn about the essential browser storage used by the Huko Consults website and how to control it.",
  alternates: { canonical: "/cookies" },
};

const clauses = [
  {
    title: "What are cookies?",
    text: "Cookies are small text files stored on your device when you visit a website. They help us improve your experience and understand how the site is used.",
  },
  {
    title: "How we use cookies",
    text: "We use essential browser storage to remember your cookie preference and keep the website working properly. We do not currently set advertising or analytics cookies through this website.",
  },
  {
    title: "Managing cookies",
    text: "You can manage or disable cookies through your browser settings. Disabling certain cookies may affect the functionality of the website.",
  },
  {
    title: "Contact",
    isContact: true,
  },
];

export default function CookiesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero">
        <div className="hero-grid" />
        <div>
          <p className="eyebrow"><span /> Legal</p>
          <h1>Cookies policy</h1>
          <p>How and why we use cookies on the Huko Consults website. Last updated: 14 September 2026.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark"><span /> Small files, plain language</p>
            <h2>How we <em>use cookies.</em></h2>
          </div>
          <p>What cookies do on this site, and how you can control them.</p>
        </div>

        <div className="process-list">
          {clauses.map(({ title, text, isContact }, i) => (
            <article key={title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>
                {isContact ? (
                  <>
                    If you have questions about our cookie usage, contact us at{" "}
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
