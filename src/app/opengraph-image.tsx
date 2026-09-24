import { ImageResponse } from "next/og";

export const alt =
  "Donn Lester Regalado — Headless WordPress + Next.js Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#f5f1e7",
          color: "#1b1710",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#6f6656",
          }}
        >
          Donn Lester Regalado
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 72, lineHeight: 1.05 }}>
            Headless WordPress
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 1.05,
              color: "#b8471f",
            }}
          >
            + Next.js Developer
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 30,
              color: "#6f6656",
            }}
          >
            Fast, modern frontends without disrupting your editors.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#a89d87",
          }}
        >
          donn.us.ci
        </div>
      </div>
    ),
    size
  );
}
