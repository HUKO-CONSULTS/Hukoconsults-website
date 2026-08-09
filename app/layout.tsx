import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://hukoconsults.com"),
  title: "HukoConsults — Technology Built for Momentum",
  description: "Huko Consults builds clear, useful digital products and growth solutions for ambitious businesses.",
  icons: { icon: "/huko-logo.png", shortcut: "/huko-logo.png" },
  openGraph: {
    title: "HukoConsults — Technology Built for Momentum",
    description: "African insight. Global execution. Digital products built for momentum.",
    images: [{ url: "/og.png", width: 1776, height: 888, alt: "HukoConsults technology team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HukoConsults — Technology Built for Momentum",
    description: "African insight. Global execution. Digital products built for momentum.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
