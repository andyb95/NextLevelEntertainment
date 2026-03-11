"use client";

import { useEffect, useRef } from "react";
import { MessageSquare, PenTool, Wrench, Tv } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Free Consultation",
    description:
      "We start with a conversation. Jedidiah visits your space (or meets virtually), listens to your vision, and walks you through every possibility — with zero pressure.",
    detail: "Typically 60–90 minutes",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Custom Design",
    description:
      "Our team produces a detailed design package: 3D room renderings, equipment specifications, acoustic plans, and a transparent, itemized project proposal.",
    detail: "Delivered within 5–7 business days",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Expert Installation",
    description:
      "Jedidiah and our in-house crew handle every phase — framing, wiring, speaker placement, AV rack installation, calibration, and smart home programming.",
    detail: "Most builds complete in 2–4 weeks",
  },
  {
    icon: Tv,
    number: "04",
    title: "Your Big Reveal",
    description:
      "We walk you through every feature, hand over full documentation, and make sure you're completely confident using your new theater. Then we hit play.",
    detail: "Plus ongoing support & warranty",
  },
];

export default function Process() {
  const headingRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    stepsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050814 0%, #0a0f1e 100%)" }}
    >
      {/* Decorative elements */}
      <div
        className="absolute left-0 top-1/4 w-96 h-96 opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute right-0 bottom-1/4 w-96 h-96 opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-20 animate-on-scroll">
          <p className="eyebrow mb-3">How It Works</p>
          <h2 className="heading-section text-white mb-4">
            A Simple Process,{" "}
            <span className="gold-text">Extraordinary Results</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mt-5">
            We&apos;ve refined our process over hundreds of installs so that
            yours is smooth, stress-free, and exactly on budget.
          </p>
        </div>

        {/* Steps */}
        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative flex items-start justify-between">
            <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gold/20 via-gold/50 to-gold/20" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  ref={(el) => { stepsRef.current[index] = el; }}
                  className="animate-on-scroll flex-1 px-6 text-center"
                  style={{ transitionDelay: `${index * 0.12}s` }}
                >
                  {/* Icon circle */}
                  <div className="relative inline-flex flex-col items-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-cinema-card border-2 border-gold/40 flex items-center justify-center shadow-xl shadow-black/40 relative z-10 hover:border-gold hover:shadow-gold/20 transition-all duration-300 group">
                      <Icon size={28} className="text-gold group-hover:scale-110 transition-transform" />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 text-xs font-bold text-gold/60 bg-cinema-black border border-gold/20 rounded-full w-6 h-6 flex items-center justify-center"
                      style={{ fontSize: "10px" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    className="text-white font-bold text-xl mb-3"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <p className="text-gold text-xs font-semibold uppercase tracking-wider">
                    {step.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <div
                key={step.number}
                ref={(el) => { stepsRef.current[index] = el; }}
                className="animate-on-scroll flex gap-5"
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                {/* Left: icon + line */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-cinema-card border-2 border-gold/40 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon size={22} className="text-gold" />
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 bg-gradient-to-b from-gold/30 to-transparent mt-2 min-h-[60px]" />
                  )}
                </div>

                {/* Right: content */}
                <div className={`pb-10 pt-1 ${isLast ? "pb-0" : ""}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-gold/60 uppercase tracking-wider">
                      Step {step.number}
                    </span>
                  </div>
                  <h3
                    className="text-white font-bold text-lg mb-2"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-2">
                    {step.description}
                  </p>
                  <p className="text-gold text-xs font-semibold uppercase tracking-wider">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-gold"
          >
            <span>Start Your Project Today</span>
          </button>
        </div>
      </div>
    </section>
  );
}
