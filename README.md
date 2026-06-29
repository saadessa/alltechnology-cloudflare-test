# NexTech Insight

Production-ready Next.js 15 technology blog platform with App Router, TypeScript, TailwindCSS, MDX content, structured data, RSS, sitemap, robots, AdSense-ready ad slots, and Vercel-oriented deployment defaults.

## Stack

- Next.js 15 App Router
- TypeScript
- TailwindCSS
- MDX via `next-mdx-remote/rsc`
- Static generation with ISR
- Dynamic Metadata API
- JSON-LD schema for website, organization, articles, breadcrumbs, and FAQs
- RSS feed at `/rss.xml`
- Sitemap at `/sitemap.xml`
- Robots at `/robots.txt`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run typecheck
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` and update:

```bash
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com
NEXT_PUBLIC_SITE_NAME=NexTech Insight
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-your-id
CONTACT_EMAIL=editor@yourdomain.com
```

## Content Workflow

Add articles as `.mdx` files in `content/posts`. Frontmatter is validated during build. Required fields include title, description, category, tags, author, dates, image, feature flags, and FAQs.

## Vercel Deployment

1. Push the project to a Git provider.
2. Import the repository in Vercel.
3. Set the environment variables above.
4. Use the default build command: `npm run build`.
5. Assign the production domain before submitting the site to Google Search Console or AdSense.

## AdSense Notes

Ad containers are intentionally reserved with stable dimensions to minimize layout shift. Replace placeholder slots or extend `components/ads/ad-slot.tsx` once your AdSense account and ad units are approved.
