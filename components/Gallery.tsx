"use client";

import { useEffect, useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=85",
    srcLg: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1600&q=90",
    alt: "Luxury home theater with dramatic overhead lighting",
    title: "Cinema Noir",
    detail: "12-seat luxury home theater",
    colSpan: "lg:col-span-2",
    rowSpan: "",
    aspect: "aspect-[16/9]",
  },
  {
    src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=85",
    srcLg: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=90",
    alt: "Premium home cinema with immersive surround sound",
    title: "The Immersive Room",
    detail: "Dolby Atmos 7.4.2 surround",
    colSpan: "",
    rowSpan: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=85",
    srcLg: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=90",
    alt: "Custom home theater with velvet seating and aisle lighting",
    title: "Velvet Night",
    detail: "8-seat with aisle LEDs",
    colSpan: "",
    rowSpan: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?auto=format&fit=crop&w=700&q=85",
    srcLg: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?auto=format&fit=crop&w=1200&q=90",
    alt: "Dedicated home theater room with star ceiling",
    title: "Star Vault",
    detail: "Fiber optic star ceiling",
    colSpan: "",
    rowSpan: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=700&q=85",
    srcLg: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=90",
    alt: "Premium home theater with gold accent lighting",
    title: "The Gold Standard",
    detail: "Laser projection + bias lighting",
    colSpan: "",
    rowSpan: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&w=900&q=85",
    srcLg: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&w=1600&q=90",
    alt: "Modern home theater with ambient purple lighting",
    title: "Neon Luxe",
    detail: "RGB ambient system",
    colSpan: "lg:col-span-2",
    rowSpan: "",
    aspect: "aspect-[16/9]",
  },
];

export default function Gallery() {
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
    if (gridRef.current) {
      gridRef.current.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  // Keyboard nav for lightbox
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i! + 1) % photos.length);
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i! - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-cinema-black relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-14 animate-on-scroll">
          <p className="eyebrow mb-3">Our Work</p>
          <h2 className="heading-section text-white mb-4">
            Built for the <span className="gold-text">Bold & Discerning</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mt-5">
            Every build is one of a kind. Tap any photo to explore in detail.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`gallery-item ${photo.colSpan} ${photo.aspect} animate-on-scroll`}
              style={{ transitionDelay: `${index * 0.07}s` }}
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="gallery-overlay">
                <div className="flex items-end justify-between">
                  <div>
                    <h3
                      className="text-white font-bold text-lg"
                      style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                    >
                      {photo.title}
                    </h3>
                    <p className="text-gold-light text-sm">{photo.detail}</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                    <ZoomIn size={16} className="text-gold" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-400 mb-6 text-sm">
            Want to see more? We&apos;d love to show you our full portfolio in
            a personalized consultation.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline"
          >
            <span>Request Full Portfolio</span>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors text-xl font-bold z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i! - 1 + photos.length) % photos.length);
            }}
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[lightboxIndex].srcLg}
              alt={photos[lightboxIndex].alt}
              className="w-full h-full object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-3 text-center">
              <p
                className="text-white font-bold text-xl"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                {photos[lightboxIndex].title}
              </p>
              <p className="text-gold-light text-sm mt-1">
                {photos[lightboxIndex].detail}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors text-xl font-bold z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i! + 1) % photos.length);
            }}
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === lightboxIndex ? "bg-gold w-4" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
