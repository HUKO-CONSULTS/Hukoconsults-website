import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  return (
    <form className="contact-form" action="https://formsubmit.co/hukoconsults@gmail.com" method="POST">
      <input type="hidden" name="_subject" value="New Huko Consults website enquiry" />
      <input type="hidden" name="_captcha" value="true" />
      <div className="form-row">
        <label>Full name<input name="name" required placeholder="Your name" /></label>
        <label>Work email<input name="email" type="email" required placeholder="you@company.com" /></label>
      </div>
      <div className="form-row">
        <label>Company <span>(optional)</span><input name="company" placeholder="Company name" /></label>
        <label>Phone <span>(optional)</span><input name="phone" type="tel" placeholder="+256..." /></label>
      </div>
      <label>Tell us about your project<textarea name="message" required rows={6} placeholder="What would you like to create?" /></label>
      <button className="button button-red" type="submit">Send enquiry <ArrowUpRight size={17} /></button>
      <p className="form-note">Your message will be sent directly to hukoconsults@gmail.com.</p>
    </form>
  );
}
