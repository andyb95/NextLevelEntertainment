import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import ParallaxBanner from "@/components/ParallaxBanner";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />

      {/* Parallax quote banner between Services and About */}
      <ParallaxBanner
        imageUrl="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Premium home theater seating and display"
        speed={0.25}
      >
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Our Philosophy</p>
          <blockquote
            className="text-white font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(28px, 4vw, 52px)",
            }}
          >
            &ldquo;A great home theater isn&apos;t about the gear.{" "}
            <span className="gold-text">
              It&apos;s about the feeling you get every time you walk in.
            </span>
            &rdquo;
          </blockquote>
          <p className="text-gold font-semibold text-lg">— Jedidiah</p>
          <p className="text-slate-400 text-sm">Founder, Next Level Entertainment</p>
        </div>
      </ParallaxBanner>

      <About />
      <Gallery />

      {/* Parallax stats banner between Gallery and Process */}
      <ParallaxBanner
        imageUrl="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Home cinema room with dramatic lighting"
        speed={0.2}
      >
        <div className="text-center">
          <p className="eyebrow mb-6">By The Numbers</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {[
              { value: "150+", label: "Theaters Built" },
              { value: "10+", label: "Years Experience" },
              { value: "5★", label: "Average Rating" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="gold-text font-bold"
                  style={{
                    fontFamily: "var(--font-playfair, Georgia, serif)",
                    fontSize: "clamp(36px, 5vw, 64px)",
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-slate-300 text-sm uppercase tracking-widest mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ParallaxBanner>

      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
