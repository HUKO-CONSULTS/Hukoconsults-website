"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`New HukoConsults enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nCompany: ${data.get("company") || "Not provided"}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\n\nProject details:\n${data.get("message")}`
    );
    setStatus("Your email app is opening with the enquiry ready to send.");
    window.location.href = `mailto:hukoconsults@gmail.com?subject=${subject}&body=${body}`;
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>Full name<input name="name" required placeholder="Your name" /></label>
        <label>Work email<input name="email" type="email" required placeholder="you@company.com" /></label>
      </div>
      <div className="form-row">
        <label>Company <span>(optional)</span><input name="company" placeholder="Company name" /></label>
        <label>Phone <span>(optional)</span><input name="phone" type="tel" placeholder="+256..." /></label>
      </div>
      <label>Tell us about your project<textarea name="message" required rows={6} placeholder="What would you like to create?" /></label>
      <button className="button button-red" type="submit">Send enquiry <span>↗</span></button>
      <p className="form-note" role="status">{status || "Your message will be addressed to hukoconsults@gmail.com."}</p>
    </form>
  );
}
