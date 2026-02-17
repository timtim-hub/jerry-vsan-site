import { ImageResponse } from "next/og";
export const size = {
  width: 64,
  height: 64
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
          background: "#0F0F12",
          border: "4px solid #FF2E2E",
          color: "#D9D9D9",
          fontSize: 34,
          fontWeight: 900,
          letterSpacing: 2
        }}
      >
        JV
      </div>
    ),
    {
      ...size
    }
  );
}
