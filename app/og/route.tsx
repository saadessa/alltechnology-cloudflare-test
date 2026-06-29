import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8fafc",
          padding: "72px",
          color: "#111827",
          fontFamily: "Inter"
        }}
      >
        <div style={{ fontSize: 28, color: "#2563eb", fontWeight: 700 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 800, maxWidth: 920 }}>
          AI, Programming, Cybersecurity and Future Tech
        </div>
        <div style={{ fontSize: 30, color: "#475569" }}>{siteConfig.url.replace("https://", "")}</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
