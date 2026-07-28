"use client";

import Link from "next/link";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav-shell" aria-label="Main navigation">
      <Link className="brand" href="/" aria-label="HukoConsults home">
        <span className="brand-mark">H</span>
        <span>Huko<span>Consults</span></span>
      </Link>
      <button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <i /><i />
      </button>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>Start a project <span>↗</span></Link>
      </div>
    </nav>
  );
}
