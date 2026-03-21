import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Next Level Entertainment | Custom Home Theater Installation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #080b14 0%, #0e1320 40%, #080b14 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "Georgia, serif",
          overflow: "hidden",
        }}
      >
        {/* Gold radial glow */}
        <div
          style={{
            position: "absolute",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(197,146,12,0.18) 0%, transparent 70%)",
            top: "-100px",
            left: "250px",
          }}
        />

        {/* Top decorative line */}
        <div
          style={{
            position: "absolute",
            top: "48px",
            left: "80px",
            right: "80px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #C5920C, transparent)",
            opacity: 0.6,
          }}
        />

        {/* Bottom decorative line */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "80px",
            right: "80px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #C5920C, transparent)",
            opacity: 0.6,
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #C5920C, #F0C040)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "28px",
            boxShadow: "0 0 40px rgba(197,146,12,0.5)",
          }}
        >
          <span style={{ color: "#080b14", fontWeight: "bold", fontSize: "36px" }}>N</span>
        </div>

        {/* Brand name */}
        <div
          style={{
            color: "#ffffff",
            fontSize: "22px",
            fontWeight: "400",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "24px",
            opacity: 0.85,
          }}
        >
          Next Level Entertainment
        </div>

        {/* Main headline */}
        <div
          style={{
            color: "#ffffff",
            fontSize: "54px",
            fontWeight: "700",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: "860px",
            marginBottom: "24px",
          }}
        >
          Custom Home Theater
          <br />
          <span style={{ color: "#C5920C" }}>Design & Installation</span>
        </div>

        {/* Subtext */}
        <div
          style={{
            color: "#94a3b8",
            fontSize: "22px",
            textAlign: "center",
            maxWidth: "680px",
            lineHeight: 1.5,
            marginBottom: "36px",
          }}
        >
          Luxury theaters built for the Wasatch Front.
          <br />
          4K Projection · Dolby Atmos · Smart Home Integration
        </div>

        {/* CTA pill */}
        <div
          style={{
            background: "rgba(197,146,12,0.15)",
            border: "1px solid rgba(197,146,12,0.5)",
            borderRadius: "100px",
            padding: "12px 32px",
            color: "#C5920C",
            fontSize: "16px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          auraluxav.com
        </div>
      </div>
    ),
    { ...size }
  );
}
