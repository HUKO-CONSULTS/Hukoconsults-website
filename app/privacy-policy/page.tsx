import type { Metadata } from "next";
import { LegalDocument, type LegalClause } from "../components/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Read how Huko Consults collects, uses, stores and protects personal information submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
};

const clauses: LegalClause[] = [
  {
    title: "Information we collect",
    text: "We collect information you provide directly to us, such as your name, email address, company name, phone number, and project details when you fill out our contact form or communicate with us.",
  },
  {
    title: "How we use your information",
    text: "We use your information to respond to your enquiry, discuss requested services, and maintain our client records. We do not sell or rent personal data. We only share it with service providers where necessary to deliver the website or respond to your request.",
  },
  {
    title: "Data security",
    text: "We use proportionate technical and organisational safeguards to reduce unauthorised access, alteration, disclosure or loss. No online system can guarantee absolute security, so please avoid sending passwords or sensitive financial information through the contact form.",
  },
  {
    title: "Your choices and rights",
    text: "You may ask us to access, correct or delete personal data we hold about you, or object to certain processing, subject to applicable law. Contact us using the details below and include enough information for us to identify your request.",
  },
  {
    title: "Contact",
    contact: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      label="Privacy policy"
      title="Your privacy matters."
      description="A straightforward explanation of the information we collect and how we handle it."
      summary="We only collect the details needed to respond to your enquiry and deliver our services. We do not sell your personal information."
      clauses={clauses}
    />
  );
}
