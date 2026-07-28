import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand footer-brand" href="/">
        <span className="brand-mark">H</span><span>Huko<span>Consults</span></span>
      </Link>
      <p>Technology consultancy for the next generation of ambitious organisations.</p>
      <div className="footer-links">
        <Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 HukoConsults. All rights reserved.</span>
        <span>Kampala, Uganda · Building globally</span>
      </div>
    </footer>
  );
}
