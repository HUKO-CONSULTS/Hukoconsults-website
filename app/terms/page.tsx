import type { Metadata } from "next";
import { LegalDocument, type LegalClause } from "../components/LegalDocument";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description: "Terms for using the Huko Consults website and contacting our team about services.",
  alternates: { canonical: "/terms" },
};

const clauses: LegalClause[] = [
  {
    title: "Acceptance of terms",
    text: "By accessing or using this website, you agree to be bound by these terms and conditions. If you do not agree, please do not use this site.",
  },
  {
    title: "Services",
    text: "Our services are provided \u201cas is\u201d. We strive for accuracy and quality but do not guarantee that our deliverables will be error-free or uninterrupted.",
  },
  {
    title: "Intellectual property",
    text: "All content on this site is the property of HukoConsults unless otherwise stated. You may not reproduce, distribute, or create derivative works without our written permission.",
  },
  {
    title: "Limitation of liability",
    text: "HukoConsults shall not be liable for any indirect, incidental, or consequential damages arising from your use of this site or our services.",
  },
  {
    title: "Contact",
    contact: true,
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      label="Terms & conditions"
      title="The terms of working together."
      description="The conditions that apply when you use this site or engage Huko Consults."
      summary="These terms set out how the website may be used and the general expectations around our services."
      clauses={clauses}
    />
  );
}
