"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating phone button */}
      <a
        href="tel:5558675309"
        className={`floating-call transition-all duration-300 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
        }`}
        aria-label="Call Now"
      >
        <Phone size={22} className="text-cinema-black" />
      </a>

      {/* Bottom CTA bar */}
      <div
        className={`mobile-cta transition-all duration-300 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="btn-gold w-full justify-center py-3"
        >
          <span>Get Free Consultation</span>
        </button>
      </div>
    </>
  );
}
