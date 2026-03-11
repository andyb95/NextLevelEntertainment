"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
    hearAbout: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    [headingRef, formRef, infoRef].forEach(
      (r) => r.current && observer.observe(r.current)
    );
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((d) => ({ ...d, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission (replace with actual API call)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-cinema-black relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-14 animate-on-scroll">
          <p className="eyebrow mb-3">Get In Touch</p>
          <h2 className="heading-section text-white mb-4">
            Ready to Go{" "}
            <span className="gold-text">Next Level?</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mt-5">
            Fill out the form and Jedidiah will reach out within one business
            day to schedule your free, no-obligation consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <div
            ref={formRef}
            className="lg:col-span-3 animate-on-scroll"
          >
            {submitted ? (
              <div className="glass-card rounded-xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-gold" />
                </div>
                <h3
                  className="text-white font-bold text-2xl mb-3"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  Message Received!
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Thank you for reaching out. Jedidiah will be in touch within
                  one business day to schedule your free consultation. We&apos;re
                  excited to hear about your project!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-xl p-7 sm:p-9 space-y-5"
              >
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Project Type + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="form-input appearance-none"
                    >
                      <option value="">Select type...</option>
                      <option value="dedicated">Dedicated Theater Room</option>
                      <option value="basement">Basement Build-out</option>
                      <option value="living-room">Living Room Upgrade</option>
                      <option value="media-room">Media / Multi-Use Room</option>
                      <option value="upgrade">Existing System Upgrade</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Estimated Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-input appearance-none"
                    >
                      <option value="">Select range...</option>
                      <option value="under-25k">Under $25,000</option>
                      <option value="25-50k">$25,000 – $50,000</option>
                      <option value="50-100k">$50,000 – $100,000</option>
                      <option value="100k-plus">$100,000+</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="form-label">Tell Us About Your Project</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your space, goals, and any specific features you're dreaming about..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input resize-none"
                  />
                </div>

                {/* How did you hear */}
                <div>
                  <label className="form-label">How Did You Hear About Us?</label>
                  <select
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    className="form-input appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="google">Google Search</option>
                    <option value="referral">Friend / Referral</option>
                    <option value="social">Social Media</option>
                    <option value="houzz">Houzz</option>
                    <option value="yelp">Yelp</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full justify-center mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4 text-cinema-black" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send My Request</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-500">
                  No spam, ever. Your information is kept private.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div
            ref={infoRef}
            className="lg:col-span-2 animate-on-scroll space-y-6"
            style={{ transitionDelay: "0.15s" }}
          >
            {/* Contact details */}
            <div className="glass-card rounded-xl p-6 space-y-5">
              <h3
                className="text-white font-bold text-xl mb-1"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Contact Information
              </h3>
              <div className="h-px bg-cinema-border" />

              <a
                href="tel:5558675309"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors mt-0.5">
                  <Phone size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Call or Text
                  </p>
                  <p className="text-white font-semibold group-hover:text-gold transition-colors">
                    (555) 867-5309
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Mon–Fri 8am–6pm · Sat 9am–4pm
                  </p>
                </div>
              </a>

              <a
                href="mailto:jedidiah@nextlevelent.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors mt-0.5">
                  <Mail size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Email Us
                  </p>
                  <p className="text-white font-semibold group-hover:text-gold transition-colors text-sm">
                    jedidiah@nextlevelent.com
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    We respond within 24 hours
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Service Area
                  </p>
                  <p className="text-white font-semibold">DFW Metroplex</p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Dallas · Fort Worth · Plano · Frisco
                    <br />
                    Allen · McKinney · Southlake
                  </p>
                </div>
              </div>
            </div>

            {/* Why choose us quick hits */}
            <div className="glass-card rounded-xl p-6">
              <h3
                className="text-white font-semibold text-base mb-4"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Why Clients Choose Us
              </h3>
              {[
                "Free, no-pressure in-home consultation",
                "Fixed-price contracts — no surprise overages",
                "2-year labor warranty on all installs",
                "Licensed electricians on every job",
                "Ongoing support & remote monitoring",
              ].map((point) => (
                <div key={point} className="flex items-start gap-2 mb-3 last:mb-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
