import { ImageResponse } from "next/og";

export const alt =
  "Safdar Khan — IT Infrastructure & AI Technology Specialist | IT Infrastructure | AI Automation | Software Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#06070A",
          backgroundImage:
            "radial-gradient(circle at 82% 22%, rgba(243, 229, 171, 0.16) 0%, rgba(212, 175, 55, 0.12) 28%, rgba(13, 15, 20, 0.94) 62%, #06070A 100%)",
          padding: "60px 72px",
          color: "#F8F9FA",
          fontFamily: "sans-serif",
          border: "2px solid rgba(212, 175, 55, 0.4)",
          position: "relative",
        }}
      >
        {/* Top Brand Row: SK Personal Monogram Logo + Domain Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {/* SK Geometric Monogram Box */}
            <div
              style={{
                height: "68px",
                width: "68px",
                borderRadius: "16px",
                border: "2px solid #D4AF37",
                backgroundColor: "#0D0F14",
                boxShadow: "0 0 28px rgba(212, 175, 55, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F3E5AB",
                fontSize: "28px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              SK
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: "#F8F9FA",
                  textTransform: "uppercase",
                }}
              >
                Safdar Khan
              </span>
              <span
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.24em",
                  color: "#D4AF37",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                IT + AI Solutions
              </span>
            </div>
          </div>

          <div
            style={{
              padding: "10px 22px",
              borderRadius: "999px",
              border: "1px solid rgba(243, 229, 171, 0.35)",
              backgroundColor: "rgba(20, 23, 32, 0.85)",
              color: "#F3E5AB",
              fontSize: "14px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            MS Computer Science • 10+ Years Experience
          </div>
        </div>

        {/* Center Identity Composition */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#F8F9FA",
            }}
          >
            Safdar Khan
          </div>

          <div
            style={{
              fontSize: "36px",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#F3E5AB",
            }}
          >
            IT Infrastructure &amp; AI Technology Specialist
          </div>
        </div>

        {/* Bottom Pillar Strip: IT Infrastructure | AI Automation | Software Solutions */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(212, 175, 55, 0.38)",
            paddingTop: "26px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "#D4AF37",
            }}
          >
            <span style={{ color: "#F8F9FA" }}>IT Infrastructure</span>
            <span style={{ color: "#D4AF37" }}>|</span>
            <span style={{ color: "#F3E5AB" }}>AI Automation</span>
            <span style={{ color: "#D4AF37" }}>|</span>
            <span style={{ color: "#A8B2C1" }}>Software Solutions</span>
          </div>

          <div
            style={{
              fontSize: "15px",
              letterSpacing: "0.12em",
              color: "#94A3B8",
              textTransform: "uppercase",
            }}
          >
            Executive Portfolio
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
