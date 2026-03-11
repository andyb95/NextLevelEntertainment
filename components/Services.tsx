"use client";

import { useEffect, useRef } from "react";
import {
  Monitor,
  Speaker,
  Lightbulb,
  Smartphone,
  Armchair,
  Ruler,
} from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Custom Design & Planning",
    description:
      "Every theater starts with your vision. We create detailed 3D renderings and acoustic blueprints tailored to your room dimensions, lifestyle, and aesthetic preferences.",
    features: ["3D room rendering", "Acoustic analysis", "Budget planning"],
  },
  {
    icon: Monitor,
    title: "4K Projection & Displays",
    description:
      "From 4K laser projectors to massive OLED screens, we source and install the finest display technology available — calibrated for perfection in your specific environment.",
    features: ["4K/8K projectors", "Giant screen installs", "Pro calibration"],
  },
  {
    icon: Speaker,
    title: "Immersive Audio Systems",
    description:
      "Experience Dolby Atmos and DTS:X surround sound that puts you inside the action. We design and tune multi-channel speaker systems that fill your room with flawless audio.",
    features: ["Dolby Atmos", "In-wall/ceiling speakers", "Pro tuning"],
  },
  {
    icon: Lightbulb,
    title: "Lighting & Ambiance",
    description:
      "Set the perfect mood with automated bias lighting, LED cove effects, star ceilings, and aisle lighting — all synced to your media for a truly immersive atmosphere.",
    features: ["Bias & bias lighting", "Star ceiling systems", "Scene control"],
  },
  {
    icon: Smartphone,
    title: "Smart Home Integration",
    description:
      "Control your entire theater — lights, audio, projector, shades, and climate — from a single touchscreen, voice command, or your smartphone. Seamlessly integrated.",
    features: ["One-touch control", "Voice assistant", "App control"],
  },
  {
    icon: Armchair,
    title: "Premium Seating & Finishes",
    description:
      "Luxury reclining theater seats, custom acoustic panels, plush carpet, and soundproof walls. We handle every detail so your room looks as incredible as it sounds.",
    features: ["Luxury recliners", "Acoustic panels", "Full room finishes"],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 80);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  const Icon = service.icon;

  return (
    <div ref={cardRef} className="animate-on-scroll glass-card rounded-xl p-7">
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
        <Icon size={22} className="text-gold" />
      </div>

      {/* Title */}
      <h3
        className="text-white font-bold text-xl mb-3"
        style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
            <span className="text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 lg:py-32 bg-cinema-dark relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16 animate-on-scroll">
          <p className="eyebrow mb-3">What We Do</p>
          <h2 className="heading-section text-white mb-4">
            Complete Theater Solutions,{" "}
            <span className="gold-text">Built to Impress</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-5">
            From initial design to final reveal, Next Level Entertainment
            handles every aspect of your custom home theater build — no
            subcontractors, no shortcuts.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-400 mb-6">
            Not sure where to start?{" "}
            <span className="text-gold font-medium">
              We offer free, no-obligation consultations.
            </span>
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-gold"
          >
            <span>Schedule Your Free Consultation</span>
          </button>
        </div>
      </div>
    </section>
  );
}
