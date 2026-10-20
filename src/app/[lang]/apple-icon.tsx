import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon: burgundy tile with a gold "RY" monogram. */
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
          background: "linear-gradient(135deg, #6b1f32 0%, #4e1624 100%)",
          color: "#d4b16a",
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: -2,
          fontFamily: "serif",
        }}
      >
        RY
      </div>
    ),
    { ...size },
  );
}
