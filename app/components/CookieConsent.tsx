"use client";

import { useState, useEffect } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (value: string) => {
    localStorage.setItem("cookie-consent", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <section className="cookie-consent" role="dialog" aria-modal="false" aria-labelledby="cookie-title" aria-describedby="cookie-description">
      <p id="cookie-description"><strong id="cookie-title">Your privacy choices</strong> We only use essential site storage and save your choice in this browser. Read our <a href="/cookies">Cookies Policy</a> and <a href="/privacy-policy">Privacy Policy</a>.</p>
      <div className="cookie-consent-actions">
        <button className="cookie-reject" type="button" onClick={() => handleChoice("rejected")}>Reject optional</button>
        <button className="cookie-accept" type="button" onClick={() => handleChoice("accepted")}>Accept</button>
      </div>
    </section>
  );
}
