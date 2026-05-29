import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
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
          background: "linear-gradient(135deg, #141c36 0%, #34499E 50%, #65C3A6 100%)",
          borderRadius: 36,
          color: "#ffffff",
          fontSize: 96,
          fontWeight: 800,
        }}
      >
        K
      </div>
    ),
    { ...size },
  );
}
