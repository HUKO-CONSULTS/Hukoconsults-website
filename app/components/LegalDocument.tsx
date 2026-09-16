import { ArrowUpRight, Mail, ShieldCheck } from "lucide-react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export type LegalClause = {
  title: string;
  text?: string;
  contact?: boolean;
};

type LegalDocumentProps = {
  label: string;
  title: string;
  description: string;
  summary: string;
  clauses: LegalClause[];
};

export function LegalDocument({ label, title, description, summary, clauses }: LegalDocumentProps) {
  const links = clauses.map((clause) => ({
    ...clause,
    id: clause.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  }));

  return (
    <main className="legal-page">
      <SiteHeader />
      <section className="legal-hero">
        <div className="hero-grid" />
        <div className="legal-hero-copy">
          <p className="eyebrow"><span /> {label}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-summary">
          <div>
            <p className="eyebrow dark"><span /> Plain-language guide</p>
            <h2>Clear information, <em>without the clutter.</em></h2>
          </div>
          <p>{summary}</p>
        </div>

        <div className="legal-document">
          <aside className="legal-sidebar" aria-label={`${title} sections`}>
            <div>
              <ShieldCheck size={22} aria-hidden="true" />
              <p>On this page</p>
            </div>
            <nav>
              {links.map(({ id, title: clauseTitle }) => <a key={id} href={`#${id}`}>{clauseTitle}</a>)}
            </nav>
            <p className="legal-updated">Last updated<br /><strong>14 September 2026</strong></p>
          </aside>

          <div className="legal-clauses">
            {links.map(({ id, title: clauseTitle, text, contact }) => (
              <article className="legal-clause" id={id} key={id}>
                <h2>{clauseTitle}</h2>
                <p>
                  {contact ? (
                    <>
                      Questions about this {label.toLowerCase()} can be sent to{" "}
                      <a href="mailto:info@hukoconsults.com">info@hukoconsults.com</a>.
                    </>
                  ) : text}
                </p>
              </article>
            ))}
            <aside className="legal-contact-card">
              <Mail size={24} aria-hidden="true" />
              <div>
                <h2>Need help?</h2>
                <p>We&rsquo;re happy to clarify anything in this document.</p>
              </div>
              <a href="mailto:info@hukoconsults.com" aria-label="Email Huko Consults">
                <span>Email us</span><ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </aside>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
