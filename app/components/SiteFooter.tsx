import Link from "next/link";
import { Camera, Mail, MapPin, MessageCircle, Music2, Phone, Play } from "lucide-react";

function XIcon({ size = 19, strokeWidth = 1.8 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ size = 19, strokeWidth = 1.8 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socials = [
  { label: "X / Twitter", href: "https://x.com/hukoconsults", Icon: XIcon, bgColor: "#000", hoverBg: "#1a1a1a" },
  { label: "Instagram", href: "https://www.instagram.com/hukoconsults/", Icon: Camera, bgColor: "#E4405F", hoverBg: "#F77737" },
  { label: "TikTok", href: "https://www.tiktok.com/@hukoconsults", Icon: Music2, bgColor: "#000000", hoverBg: "#69C9D0" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/hukoconsults/", Icon: LinkedInIcon, bgColor: "#0A66C2", hoverBg: "#0077B5" },
  { label: "YouTube", href: "https://www.youtube.com/@hukoconsult", Icon: Play, bgColor: "#FF0000", hoverBg: "#CC0000" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-about">
          <Link className="brand footer-brand" href="/">
            <img src="/huko-logo.png" alt="HukoConsults" />
            <span>Huko Consults</span>
          </Link>
          <p>We combine technology, design and proven growth systems to help ambitious businesses build better products and increase revenue.</p>
          <div className="footer-socials" aria-label="HukoConsults social media">
            {socials.map(({ label, href, Icon, bgColor, hoverBg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                style={{ background: bgColor, borderColor: bgColor }}
              >
                <Icon size={19} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About us</Link>
          <Link href="/contact">Get started</Link>
        </div>
        <div className="footer-column footer-contact">
          <h3>Get in touch</h3>
          <a href="tel:+256758033100">
            <Phone size={17} /> +256 758 033 100
          </a>
          <a href="https://wa.me/256767625461" target="_blank" rel="noreferrer">
            <MessageCircle size={17} /> +256 767 625 461
          </a>
          <a href="mailto:info@hukoconsults.com">
            <Mail size={17} /> info@hukoconsults.com
          </a>
        </div>
        <div className="footer-column footer-visit">
          <h3>Visit us</h3>
          <p className="footer-address"><MapPin size={18} /> Kampala, Uganda<br />Building for Africa and the world.</p>
          <h3 className="footer-mini-title">Availability</h3>
          <p>Monday–Friday<br />8:00 AM–6:00 PM EAT</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 HukoConsults. All rights reserved.</span>
      </div>
    </footer>
  );
}
