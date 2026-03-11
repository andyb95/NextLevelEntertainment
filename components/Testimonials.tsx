"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael R.",
    location: "Dallas, TX",
    project: "Dedicated Home Theater",
    stars: 5,
    quote:
      "Jedidiah and his team absolutely nailed it. From the first consultation to the final reveal, every step was professional and the result is beyond anything I imagined. My 14-seat theater is the envy of everyone who visits. Worth every penny.",
    avatar: "MR",
  },
  {
    name: "Sarah & Tom K.",
    location: "Austin, TX",
    project: "Living Room Conversion",
    stars: 5,
    quote:
      "We were skeptical that our existing living room could become a real home theater. Next Level transformed it completely — recessed speakers, a 130\" screen, bias lighting, and smart controls — without sacrificing the room's style. Absolutely magical.",
    avatar: "SK",
  },
  {
    name: "David L.",
    location: "Houston, TX",
    project: "Basement Theater Build",
    stars: 5,
    quote:
      "I've worked with AV companies before but nobody comes close to Jedidiah's level of detail and care. He caught acoustic issues that two other installers missed and delivered a Dolby Atmos experience that rivals a real movie theater.",
    avatar: "DL",
  },
  {
    name: "Jennifer M.",
    location: "Plano, TX",
    project: "Custom Media Room",
    stars: 5,
    quote:
      "The star ceiling alone was worth it. But the entire package — the seating, the sound, the smart lighting — is phenomenal. Jed was patient with every question I had and never made me feel like I was asking too much. 10/10 recommend.",
    avatar: "JM",
  },
  {
    name: "Carlos P.",
    location: "San Antonio, TX",
    project: "Sports & Theater Room",
    stars: 5,
    quote:
      "Watching the Super Bowl in my new room felt like being at the stadium. The 4K laser projector with Dolby Atmos is insane. Jedidiah designed around how I actually use the space and the result is perfect.",
    avatar: "CP",
  },
];

export default function Testimonials() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  const navigate = (dir: 1 | -1) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 200);
  };

  // Auto-advance on mobile (every 5s)
  useEffect(() => {
    const timer = setInterval(() => navigate(1), 5000);
    return () => clearInterval(timer);
  }, []);

  // Visible testimonials (responsive: 1 on mobile, 3 on desktop)
  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-cinema-dark relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Background quote decoration */}
      <div className="absolute top-20 right-10 opacity-5 pointer-events-none">
        <Quote size={200} className="text-gold rotate-180" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-14 animate-on-scroll">
          <p className="eyebrow mb-3">What Clients Say</p>
          <h2 className="heading-section text-white mb-4">
            Real Theaters,{" "}
            <span className="gold-text">Real Reactions</span>
          </h2>
          <div className="section-divider" />
          <div className="flex items-center justify-center gap-3 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-gold fill-gold" />
            ))}
            <span className="text-slate-300 text-sm ml-1">
              5.0 average across 80+ reviews
            </span>
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className={`glass-card rounded-xl p-7 transition-all duration-300 ${
                isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              }`}
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(t.stars)].map((_, si) => (
                  <Star key={si} size={14} className="text-gold fill-gold" />
                ))}
              </div>
              <Quote size={20} className="text-gold/30 mb-3 rotate-180" />
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-cinema-border">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-xs font-bold">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gold text-xs">{t.project}</p>
                  <p className="text-slate-500 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: single card with nav */}
        <div className="md:hidden mb-8">
          <div
            className={`glass-card rounded-xl p-6 transition-all duration-300 ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(testimonials[current].stars)].map((_, i) => (
                <Star key={i} size={14} className="text-gold fill-gold" />
              ))}
            </div>
            <Quote size={18} className="text-gold/30 mb-3 rotate-180" />
            <p className="text-slate-300 text-base leading-relaxed mb-6 italic">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-cinema-border">
              <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0">
                <span className="text-gold text-xs font-bold">
                  {testimonials[current].avatar}
                </span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  {testimonials[current].name}
                </p>
                <p className="text-gold text-xs">
                  {testimonials[current].project}
                </p>
                <p className="text-slate-500 text-xs">
                  {testimonials[current].location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full border border-cinema-border flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold/40 transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2 bg-gold"
                    : "w-2 h-2 bg-cinema-border hover:bg-gold/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => navigate(1)}
            className="w-10 h-10 rounded-full border border-cinema-border flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold/40 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
