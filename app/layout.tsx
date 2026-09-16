import type { Metadata } from "next";
import "./globals.css";
import { CookieConsent } from "./components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://hukoconsults.com"),
  title: {
    default: "Huko Consults | Software, Digital Products & Growth in Kampala",
    template: "%s | Huko Consults",
  },
  description: "Huko Consults is a Kampala-based technology partner building practical software, digital products and growth systems for ambitious businesses.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "HukoConsults — Technology Built for Momentum",
    description: "African insight. Global execution. Digital products built for momentum.",
    images: [{ url: "/og.png", width: 1776, height: 888, alt: "Huko Consults — technology built for momentum" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HukoConsults — Technology Built for Momentum",
    description: "African insight. Global execution. Digital products built for momentum.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
