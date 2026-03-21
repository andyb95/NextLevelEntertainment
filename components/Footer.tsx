"use client";

import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Custom Theater Design",
  "4K Projection Systems",
  "Immersive Audio (Atmos)",
  "Smart Home Integration",
  "Lighting & Ambiance",
  "Luxury Seating & Finishes",
];

const scrollTo = (href: string) => {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-cinema-black border-t border-cinema-border">
      {/* Top gold line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

      {/* CTA Banner */}
      <div
        className="relative py-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a0e1a 0%, #161b27 50%, #0a0e1a 100%)",
        }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, #C5920C 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="eyebrow mb-3">Limited Availability</p>
          <h2
            className="text-white font-bold text-3xl sm:text-4xl mb-4"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Ready to Transform Your Space?
          </h2>
          <p className="text-slate-400 text-base mb-8 max-w-xl mx-auto">
            We only take on a limited number of projects per quarter to
            ensure every client receives his full attention. Reserve your
            consultation today.
          </p>
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-gold mx-auto"
          >
            <span>Book Your Free Consultation</span>
          </button>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg shadow-gold/20">
                <span
                  className="text-cinema-black font-bold text-lg"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  N
                </span>
              </div>
              <div>
                <p
                  className="text-white font-bold text-lg leading-tight"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  Next Level
                </p>
                <p className="text-gold text-xs font-medium tracking-widest uppercase leading-tight">
                  Entertainment
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Building extraordinary home theaters for discerning homeowners
              across the Wasatch Front. Every project is personal. Every build
              is next level.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-cinema-card border border-cinema-border flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold/40 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-cinema-card border border-cinema-border flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold/40 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-cinema-card border border-cinema-border flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold/40 transition-all"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 text-sm hover:text-gold transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-slate-400 text-sm hover:text-gold transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:5558675309"
                  className="flex items-start gap-3 text-slate-400 hover:text-gold transition-colors group"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0 group-hover:text-gold" />
                  <span className="text-sm">(801) 839-9236</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:nextlevelavutah@gmail.com.com"
                  className="flex items-start gap-3 text-slate-400 hover:text-gold transition-colors group"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 group-hover:text-gold" />
                  <span className="text-sm break-all">nextlevelavutah@gmail.com.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 text-gold" />
                  <div className="text-sm">
                    <p className="text-white font-medium mb-1">DFW Metroplex</p>
                    <p>Dallas · Fort Worth · Plano</p>
                    <p>Frisco · Allen · McKinney</p>
                    <p>Southlake · Flower Mound</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-cinema-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Next Level Entertainment. All rights
            reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-slate-500 text-xs hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 text-xs hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
