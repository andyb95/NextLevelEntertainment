import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Level Entertainment | Custom Home Theater Installation",
  description:
    "Next Level Entertainment builds luxury custom home theaters tailored to your vision. Expert design, premium audio & video, smart home integration. Serving homeowners who demand the best.",
  keywords: [
    "custom home theater",
    "home theater installation",
    "home cinema",
    "luxury home theater",
    "custom theater design",
    "home theater builder",
    "dedicated home theater",
    "4K projection",
    "Dolby Atmos",
    "smart home theater",
    "home theater installation Utah",
    "home theater Salt Lake City",
    "Wasatch Front home theater",
  ],
  authors: [{ name: "Next Level Entertainment" }],
  creator: "Next Level Entertainment",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://auraluxav.com",
    title: "Next Level Entertainment | Custom Home Theater Installation",
    description:
      "Transform any room into a cinematic experience. Custom home theaters designed and built by experts.",
    siteName: "Next Level Entertainment",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Next Level Entertainment | Custom Home Theater Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Level Entertainment | Custom Home Theater Installation",
    description:
      "Transform any room into a cinematic experience. Custom home theaters designed and built by experts.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Next Level Entertainment",
              description:
                "Custom home theater design and installation serving the Wasatch Front in Utah",
              "@id": "https://auraluxav.com",
              url: "https://auraluxav.com",
              telephone: "(801) 839-9236",
              priceRange: "$$$$",
              image: "https://auraluxav.com/opengraph-image",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1067 S 400 E",
                addressLocality: "Salt Lake City",
                addressRegion: "UT",
                postalCode: "84111",
                addressCountry: "US",
              },
              areaServed: [
                "Salt Lake City, UT",
                "Park City, UT",
                "Provo, UT",
                "Orem, UT",
                "Heber City, UT",
                "Ogden, UT",
                "American Fork, UT",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "150",
              },
              sameAs: [
                "https://facebook.com/auraluxav.com",
                "https://instagram.com/auraluxav.com",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
