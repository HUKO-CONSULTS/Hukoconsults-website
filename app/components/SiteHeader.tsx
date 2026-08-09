"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const active = (href: string) => pathname === href;
  return (
    <nav className="nav-shell" aria-label="Main navigation">
      <Link className="brand" href="/" aria-label="HukoConsults home">
        <img src="/huko-logo.png" alt="HukoConsults" />
        <span>Huko Consults</span>
      </Link>
      <button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <i /><i />
      </button>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link href="/" className={active("/") ? "active" : ""} aria-current={active("/") ? "page" : undefined} onClick={() => setOpen(false)}>Home</Link>
        <Link href="/services" className={active("/services") ? "active" : ""} aria-current={active("/services") ? "page" : undefined} onClick={() => setOpen(false)}>Services</Link>
        <Link href="/about" className={active("/about") ? "active" : ""} aria-current={active("/about") ? "page" : undefined} onClick={() => setOpen(false)}>About</Link>
        <Link href="/contact" className={`nav-cta ${active("/contact") ? "active" : ""}`} aria-current={active("/contact") ? "page" : undefined} onClick={() => setOpen(false)}>Get started <ArrowUpRight size={16} /></Link>
      </div>
    </nav>
  );
}
