import type { Metadata } from "next";
import { LegalDocument, type LegalClause } from "../components/LegalDocument";

export const metadata: Metadata = {
  title: "Cookies policy",
  description: "Learn about the essential browser storage used by the Huko Consults website and how to control it.",
  alternates: { canonical: "/cookies" },
};

const clauses: LegalClause[] = [
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
    contact: true,
  },
];

export default function CookiesPage() {
  return (
    <LegalDocument
      label="Cookies policy"
      title="Cookies, explained simply."
      description="What this website stores in your browser and the choices you have."
      summary="This website only uses essential browser storage to remember your privacy preference. It does not use advertising or analytics cookies."
      clauses={clauses}
    />
  );
}
