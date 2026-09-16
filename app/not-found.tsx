import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function NotFound() {
  return (
    <main>
      <SiteHeader />
      <section className="not-found">
        <div className="hero-grid" />
        <p className="eyebrow"><span /> Error 404</p>
        <p className="not-found-number">404</p>
        <h1>That page has<br /><em>moved on.</em></h1>
        <p>It may have been renamed, removed or never existed. Let&rsquo;s get you somewhere useful.</p>
        <div className="hero-actions">
          <Link className="button button-red" href="/">Back to home <ArrowLeft size={17} /></Link>
          <Link className="text-link" href="/contact">Start a project <ArrowUpRight size={16} /></Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
