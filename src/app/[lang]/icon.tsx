import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Warm monogram favicon: burgundy tile with a gold "RY". */
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
          background:
            "linear-gradient(135deg, #6b1f32 0%, #4e1624 100%)",
          color: "#d4b16a",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: -1,
          fontFamily: "serif",
        }}
      >
        RY
      </div>
    ),
    { ...size },
  );
}
