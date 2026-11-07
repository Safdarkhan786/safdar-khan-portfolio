import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#06070A",
          backgroundImage:
            "radial-gradient(circle at 30% 25%, rgba(243, 229, 171, 0.22) 0%, rgba(212, 175, 55, 0.08) 45%, #06070A 80%)",
          borderRadius: "38px",
          border: "5px solid #D4AF37",
          color: "#F3E5AB",
          fontSize: "84px",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          fontFamily: "sans-serif",
        }}
      >
        SK
      </div>
    ),
    {
      ...size,
    }
  );
}

