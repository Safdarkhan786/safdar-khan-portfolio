import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "7px",
          border: "1.5px solid #D4AF37",
          color: "#F3E5AB",
          fontSize: "15px",
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

