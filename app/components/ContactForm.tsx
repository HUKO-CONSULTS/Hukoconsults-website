"use client";

import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

 
  const EMAILJS_SERVICE_ID = "service_5o38aeq";
  const EMAILJS_TEMPLATE_ID = "template_2oltcdj"; 
  const EMAILJS_PUBLIC_KEY = "e6vyXpgrY_GsZjCod";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setFormStatus("loading");
    setErrorMessage("");

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setFormStatus("success");
        formRef.current.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus("error");
      setErrorMessage("Sorry, we couldn't send your message. Please try again or contact us directly.");
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Full name
            <input 
              name="name" 
              required 
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
              disabled={formStatus === "loading"}
            />
          </label>
          <label>
            Phone <span>(optional)</span>
            <input 
              name="phone" 
              type="tel" 
              placeholder="+256..." 
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
            placeholder="What would you like to create?" 
            disabled={formStatus === "loading"}
          />
        </label>
        <button 
          className="button button-red" 
          type="submit" 
          disabled={formStatus === "loading"}
        >
          {formStatus === "loading" ? "Sending..." : "Send enquiry"}
          <ArrowUpRight size={17} />
        </button>
        <p className="form-note">Your message will be sent directly to info@hukoconsults.com.</p>
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