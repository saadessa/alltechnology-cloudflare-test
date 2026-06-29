import { ImageResponse } from "next/og";

import { getPostBySlugEn } from "@/lib/content-en";
import { siteConfigEn } from "@/lib/site-en";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlugEn(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8fafc",
          color: "#111827",
          padding: "64px",
          fontFamily: "Inter"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, fontWeight: 700 }}>
          <span>{post?.category || "Technology"}</span>
          <span style={{ color: "#2563eb" }}>{siteConfigEn.name}</span>
        </div>
        <div style={{ fontSize: 66, lineHeight: 1.06, fontWeight: 800, maxWidth: 980 }}>
          {post?.title || "Technology analysis for builders"}
        </div>
        <div style={{ fontSize: 28, color: "#475569" }}>{post?.author || "Editorial Team"}</div>
      </div>
    ),
    size
  );
}
