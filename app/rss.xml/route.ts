import { getAllPosts } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const revalidate = 3600;

export function GET() {
  const posts = getAllPosts();
  const items = posts
    .map(
      (post) => `<item>
        <title><![CDATA[${post.title}]]></title>
        <description><![CDATA[${post.description}]]></description>
        <link>${siteConfig.url}/posts/${post.slug}</link>
        <guid>${siteConfig.url}/posts/${post.slug}</guid>
        <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      </item>`
    )
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${siteConfig.name}</title>
        <description>${siteConfig.description}</description>
        <link>${siteConfig.url}</link>
        ${items}
      </channel>
    </rss>`,
    {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8"
      }
    }
  );
}
