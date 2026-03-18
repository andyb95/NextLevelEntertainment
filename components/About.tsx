"use client";

import { useEffect, useRef } from "react";
import { Award, Shield, Users, Zap } from "lucide-react";

const credentials = [
  {
    icon: Award,
    label: "CEDIA Certified",
    description: "Industry-recognized home theater certification",
  },
  {
    icon: Shield,
    label: "Licensed & Insured",
    description: "Full liability coverage and warranty on all installs",
  },
  {
    icon: Users,
    label: "In-House Team",
    description: "No subcontractors — Jedidiah's crew handles everything",
  },
  {
    icon: Zap,
    label: "Brand Agnostic",
    description: "We recommend what's right for you, not what's cheapest",
  },
];

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 lg:py-32 bg-cinema-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background: "radial-gradient(ellipse at 80% 50%, #C5920C 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <div
            ref={leftRef}
            className="animate-on-scroll relative"
            style={{ animationDelay: "0s" }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/60">
                <img
                  src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80"
                  alt="Luxury home theater interior with dramatic lighting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cinema-black/40 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 glass rounded-xl p-5 shadow-2xl">
                <p
                  className="text-4xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  10+
                </p>
                <p className="text-xs text-gold uppercase tracking-widest font-semibold mt-1">
                  Years Building
                  <br />
                  Dream Theaters
                </p>
              </div>

              {/* Gold accent line */}
              <div className="absolute -left-4 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-gold via-gold-light to-transparent" />
            </div>
          </div>

          {/* Right: Content */}
          <div
            ref={rightRef}
            className="animate-on-scroll"
            style={{ animationDelay: "0.15s" }}
          >
            <p className="eyebrow mb-4">About Us</p>
            <h2
              className="heading-section text-white mb-6"
            >
              Built on Passion,{" "}
              <span className="gold-text">Delivered with Precision</span>
            </h2>
            <div className="section-divider-left" />

            <div className="space-y-5 text-slate-300 text-base leading-relaxed mt-6">
              <p>
                <strong className="text-white">Jedidiah</strong> founded Next
                Level Entertainment after years of working in professional AV
                and quickly realizing that homeowners deserved better — better
                design, better craftsmanship, and a partner who truly cared
                about the finished product.
              </p>
              <p>
                We don't believe in cookie-cutter builds or upselling hardware
                you don't need. Every project starts with listening — to your
                space, your habits, and your dreams — then applying the
                technical expertise to make it real.
              </p>
              <p>
                Our in-house team handles everything from acoustic framing and
                wiring to AV calibration and smart home programming. When
                Jedidiah hands you the remote, you'll know exactly why Next
                Level isn't just a name — it's a promise.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {credentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={cred.label}
                    className="flex items-start gap-3 p-4 rounded-lg bg-cinema-card border border-cinema-border hover:border-gold/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-md bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {cred.label}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {cred.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-gold"
              >
                <span>Work With Jedidiah</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
