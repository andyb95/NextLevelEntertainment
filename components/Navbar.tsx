"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Highlight active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink(`#${id}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cinema-black/95 backdrop-blur-xl border-b border-gold/10 shadow-2xl shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-3 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg shadow-gold/30 group-hover:shadow-gold/50 transition-shadow">
                <span className="text-cinema-black font-bold text-lg leading-none" style={{ fontFamily: "Georgia, serif" }}>
                  N
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                  Next Level
                </p>
                <p className="text-gold text-xs font-medium tracking-widest uppercase leading-tight">
                  Entertainment
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeLink === link.href
                      ? "text-gold-light"
                      : "text-slate-300 hover:text-gold"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Phone quick-dial */}
              <a
                href="tel:5558675309"
                className="hidden lg:flex items-center gap-2 text-sm text-slate-400 hover:text-gold transition-colors"
              >
                <Phone size={14} />
                <span>(801) 839-9236</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="hidden md:block btn-gold text-xs py-2.5 px-5"
              >
                <span>Free Consultation</span>
              </a>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 text-slate-300 hover:text-gold transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-out-expo ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-cinema-black/98 backdrop-blur-xl border-t border-cinema-border px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-slate-300 hover:text-gold hover:bg-cinema-card rounded-lg transition-all"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 pb-2">
              <a
                href="tel:5558675309"
                className="flex items-center gap-2 px-4 py-3 text-slate-400 hover:text-gold transition-colors text-sm"
              >
                <Phone size={16} />
                <span>(801) 839-9236</span>
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-gold w-full justify-center mt-2"
              >
                <span>Get Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
