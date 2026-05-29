import { ImageResponse } from "next/og";

export const alt = "Kwikfix Services — Professional Cleaning in Calgary";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #141c36 0%, #34499E 42%, #2a3b82 72%, #65C3A6 100%)",
          padding: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Kwikfix Services
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "rgba(255,255,255,0.92)",
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            Professional residential & commercial cleaning in Calgary, Alberta
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
