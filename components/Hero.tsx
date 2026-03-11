"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Play, Star } from "lucide-react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Parallax scroll effect
  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (bgRef.current) {
          const scrollY = window.scrollY;
          bgRef.current.style.transform = `translateY(${scrollY * 0.6}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-1/4 -bottom-1/4"
        style={{ willChange: "transform" }}
      >
        <img
          src="https://images.unsplash.com/photo-1746439324737-2c9f9a3e81a6?auto=format&fit=crop&w=1920&q=80"
          alt="Luxurious home theater room with comfortable seating and large screen"
          className="w-full h-full object-cover object-center"
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-black/60 via-cinema-black/50 to-cinema-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-cinema-black/60 via-transparent to-cinema-black/40" />

      {/* Animated border bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div
          className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="h-px w-8 bg-gold" />
          <span className="eyebrow">Premium Home Theater Builds</span>
          <div className="h-px w-8 bg-gold" />
        </div>

        {/* Main Headline */}
        <h1
          className={`heading-display text-white mb-6 transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontSize: "clamp(38px, 7vw, 96px)",
            lineHeight: 1.05,
          }}
        >
          Transform Any Room Into
          <br />
          <span className="gold-shimmer">A Cinematic Experience</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Custom home theaters designed and hand-built by Jedidiah and the{" "}
          <strong className="text-gold-light font-semibold">
            Next Level Entertainment
          </strong>{" "}
          team — where your vision meets our craftsmanship.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-gold text-sm w-full sm:w-auto"
          >
            <span>Get Free Consultation</span>
          </button>
          <button
            onClick={() =>
              document
                .getElementById("gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline text-sm w-full sm:w-auto"
          >
            <Play size={14} />
            <span>View Our Work</span>
          </button>
        </div>

        {/* Trust signals */}
        <div
          className={`flex flex-wrap items-center justify-center gap-6 sm:gap-10 transition-all duration-700 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
              150+
            </p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">
              Theaters Built
            </p>
          </div>
          <div className="w-px h-8 bg-cinema-border hidden sm:block" />
          <div className="text-center">
            <div className="flex justify-center gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-gold fill-gold" />
              ))}
            </div>
            <p className="text-xs text-slate-400 uppercase tracking-widest">
              5-Star Rated
            </p>
          </div>
          <div className="w-px h-8 bg-cinema-border hidden sm:block" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
              10+
            </p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">
              Years Experience
            </p>
          </div>
          <div className="w-px h-8 bg-cinema-border hidden sm:block" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
              100%
            </p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">
              Satisfaction
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() =>
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-gold transition-all duration-300 group ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest">Explore</span>
        <ChevronDown
          size={20}
          className="animate-bounce group-hover:text-gold"
        />
      </button>
    </section>
  );
}
