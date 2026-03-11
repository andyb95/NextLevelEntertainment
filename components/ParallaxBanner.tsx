"use client";

import { useEffect, useRef } from "react";

interface ParallaxBannerProps {
  imageUrl: string;
  imageAlt: string;
  children: React.ReactNode;
  speed?: number;
}

export default function ParallaxBanner({
  imageUrl,
  imageAlt,
  children,
  speed = 0.5,
}: ParallaxBannerProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!bgRef.current || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const offset = (elementCenter - viewportCenter) * speed;
        bgRef.current.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <section
      ref={containerRef}
      className="relative py-28 sm:py-36 overflow-hidden"
    >
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute -inset-x-0 -top-16 -bottom-16"
        style={{ willChange: "transform" }}
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-cinema-black/75 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-cinema-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
