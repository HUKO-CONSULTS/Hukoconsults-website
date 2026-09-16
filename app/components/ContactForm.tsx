"use client";

import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const openedAt = useRef(Date.now());
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    // Bots commonly fill fields that a real visitor cannot see. Do not send these submissions.
    if (String(formData.get("_honey") || "").trim()) {
      setFormStatus("success");
      formRef.current.reset();
      return;
    }

    if (Date.now() - openedAt.current < 2500) {
      setFormStatus("error");
      setErrorMessage("Please take a moment to review your message, then try again.");
      return;
    }

    formData.set("_subject", "New Huko Consults website enquiry");
    formData.set("_template", "table");
    formData.delete("_honey");
    setFormStatus("loading");
    setErrorMessage("");

    try {
      const result = await fetch("https://formsubmit.co/ajax/info@hukoconsults.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (result.ok) {
        setFormStatus("success");
        formRef.current.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setFormStatus("error");
      setErrorMessage("Sorry, we couldn't send your message. Please try again or contact us directly.");
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <label className="form-honeypot" aria-hidden="true">
          Leave this field empty
          <input name="_honey" type="text" tabIndex={-1} autoComplete="off" />
        </label>
        <div className="form-row">
          <label>
            Full name
            <input 
              name="name" 
              required 
              minLength={2}
              maxLength={80}
              autoComplete="name"
              placeholder="Your name" 
              disabled={formStatus === "loading"}
            />
          </label>
          <label>
            Work email
            <input 
              name="email" 
              type="email" 
              required 
              maxLength={120}
              autoComplete="email"
              placeholder="you@company.com" 
              disabled={formStatus === "loading"}
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Company <span>(optional)</span>
            <input 
              name="company" 
              placeholder="Company name" 
              maxLength={100}
              autoComplete="organization"
              disabled={formStatus === "loading"}
            />
          </label>
          <label>
            Phone <span>(optional)</span>
            <input 
              name="phone" 
              type="tel" 
              placeholder="+256..." 
              pattern="[+0-9() -]{7,24}"
              maxLength={24}
              autoComplete="tel"
              disabled={formStatus === "loading"}
            />
          </label>
        </div>
        <label>
          Tell us about your project
          <textarea 
            name="message" 
            required 
            rows={6} 
            minLength={20}
            maxLength={2500}
            placeholder="What would you like to create?" 
            disabled={formStatus === "loading"}
          />
        </label>
        <label className="contact-consent">
          <input type="checkbox" name="consent" value="agreed" required />
          <span>By submitting, you agree to our <a href="/privacy-policy">Privacy Policy</a>.</span>
        </label>
        <button 
          className="button button-red" 
          type="submit" 
          disabled={formStatus === "loading"}
        >
          {formStatus === "loading" ? "Sending..." : "Send enquiry"}
          <ArrowUpRight size={17} />
        </button>
        <p className="form-note">Your message is sent securely to info@hukoconsults.com. We use a honeypot and timing check to reduce spam.</p>
      </form>

      {/* Success Message */}
      {formStatus === "success" && (
        <div className="form-success-overlay">
          <div className="form-success-content">
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. We'll get back to you within one working day.</p>
            <button 
              onClick={() => setFormStatus("idle")}
              className="button button-red"
            >
              Send another message
            </button>
          </div>
        </div>
      )}

      {/* Error Message */}
      {formStatus === "error" && (
        <div className="form-error-overlay">
          <div className="form-error-content">
            <h3>Something went wrong</h3>
            <p>{errorMessage}</p>
            <button 
              onClick={() => setFormStatus("idle")}
              className="button button-red"
            >
              Try again
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .contact-form-wrapper {
          position: relative;
          max-width: 700px;
          width: 100%;
          margin: 0 auto;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .contact-form label {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-weight: 500;
          font-size: 0.9rem;
          color: #1a1a1a;
        }

        .contact-form label span {
          font-weight: 400;
          color: #888;
          font-size: 0.8rem;
        }

        .contact-consent {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: #444;
        }

        .contact-consent input {
          width: 16px;
          height: 16px;
          accent-color: #2fa3f1;
        }

        .contact-consent a {
          color: #2fa3f1;
        }

        .form-honeypot { position:absolute !important; left:-10000px !important; width:1px !important; height:1px !important; overflow:hidden !important; }

        .contact-form input,
        .contact-form textarea {
          padding: 0.8rem 1rem;
          border: 2px solid #e8e8e8;
          border-radius: 12px;
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.2s ease;
          background: #fafafa;
          color: #1a1a1a;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #2fa3f1;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(229, 62, 62, 0.08);
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: #aaa;
        }

        .contact-form input:disabled,
        .contact-form textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2rem;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #1a1a1a;
          color: white;
          justify-content: center;
        }

        .button-red {
          background: #2fa3f1;
          color: white;
        }

        .button-red:hover:not(:disabled) {
          background: #3986f3;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(55, 133, 216, 0.25);
        }

        .button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
        }

        .form-note {
          font-size: 0.85rem;
          color: #888;
          text-align: center;
          margin-top: 0.25rem;
        }

        /* Success and Error Overlays */
        .form-success-overlay,
        .form-error-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          animation: fadeIn 0.3s ease;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .form-success-content,
        .form-error-content {
          text-align: center;
          padding: 2rem;
          max-width: 400px;
        }

        .form-success-content h3 {
          font-size: 1.5rem;
          color: #16a34a;
          margin-bottom: 0.5rem;
        }

        .form-error-content h3 {
          font-size: 1.5rem;
          color: #2fa3f1;
          margin-bottom: 0.5rem;
        }

        .form-success-content p,
        .form-error-content p {
          font-size: 1rem;
          color: #555;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .form-success-content .button,
        .form-error-content .button {
          width: auto;
          min-width: 200px;
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .contact-form {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
