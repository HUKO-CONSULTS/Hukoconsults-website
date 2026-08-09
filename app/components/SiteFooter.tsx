import Link from "next/link";
import { AtSign, BriefcaseBusiness, Camera, Mail, MapPin, MessageCircle, Music2, Phone, Play } from "lucide-react";

const socials = [
  { label: "X / Twitter", href: "https://twitter.com/hukodigital", Icon: AtSign },
  { label: "Instagram", href: "https://www.instagram.com/hukoconsults/", Icon: Camera },
  { label: "TikTok", href: "https://www.tiktok.com/@hukoconsults", Icon: Music2 },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/huko-consults/", Icon: BriefcaseBusiness },
  { label: "YouTube", href: "https://www.youtube.com/@hukoconsult", Icon: Play },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-about">
          <Link className="brand footer-brand" href="/"><img src="/huko-logo.png" alt="HukoConsults" /><span>Huko Consults</span></Link>
          <p>We combine technology, design and proven growth systems to help ambitious businesses build better products and increase revenue.</p>
          <div className="footer-socials" aria-label="HukoConsults social media">
            {socials.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}><Icon size={19} strokeWidth={1.8} /></a>)}
          </div>
        </div>
        <div className="footer-column"><h3>Explore</h3><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About us</Link><Link href="/contact">Get started</Link></div>
        <div className="footer-column footer-contact"><h3>Get in touch</h3><a href="tel:0758033100"><Phone size={17} /> 0758033100</a><a href="https://wa.me/256767625461" target="_blank" rel="noreferrer"><MessageCircle size={17} /> +256 767 625 461</a><a href="mailto:hukoconsults@gmail.com"><Mail size={17} /> hukoconsults@gmail.com</a></div>
        <div className="footer-column"><h3>Visit us</h3><p className="footer-address"><MapPin size={18} /> Kampala, Uganda<br />Building for Africa and the world.</p><h3 className="footer-mini-title">Availability</h3><p>Monday–Friday<br />8:00 AM–6:00 PM EAT</p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 HukoConsults. All rights reserved.</span></div>
    </footer>
  );
}
