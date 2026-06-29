# AllTechnology English Edition — Editorial Template

**Version:** 1.1  
**Applies to:** All MDX files in `content/posts-en/`  
**Default:** Required unless a topic genuinely requires a different structure (e.g., pure glossary, release notes). Note exceptions in the PR or commit message.

---

## File format

- **Extension:** `.mdx` only (`.md` files in this folder are ignored by the build).
- **Path:** `content/posts-en/[slug].mdx`
- **URL:** `/en/posts/[slug]`
- **Internal links:** `/en/posts/[slug]` or `/en/category/[slug]` — paths starting with `/` render as Next.js `<Link>`.

---

## Frontmatter schema (required)

```yaml
---
title: ""          # SEO title — min 12 characters
description: ""    # Meta description — min 40 characters
category: ""       # One primary category (see allowed values below)
tags:              # Min 2 tags
  - ""
  - ""
author: ""         # Must match an author in lib/site-en.ts
publishedAt: ""    # ISO date: YYYY-MM-DD
updatedAt: ""      # ISO date: YYYY-MM-DD
image: ""          # Path under /public, e.g. /images/posts/ai.svg
featured: false    # true for pillar pages and flagship content
trending: false    # true for high-priority launch articles
draft: false       # true only while unpublished
arabicSlug: ""     # Optional — only when reciprocal Arabic article exists
faqs:              # Min 0; pillar pages should include 3–5
  - question: ""   # Min 8 characters
    answer: ""     # Min 12 characters
---
```

### Allowed categories

| Slug | Use for |
|------|---------|
| `ai-tools` | AI software, coding assistants, LLM apps |
| `ai-agents` | Autonomous agents, orchestration, tool use |
| `programming` | Languages, frameworks, architecture |
| `cybersecurity` | AppSec, DevSecOps, secure engineering |
| `developer-tools` | IDEs, CLIs, testing, DX tooling |
| `cloud-devops` | Cloud, CI/CD, containers, platform engineering |
| `productivity` | Workflows, automation, knowledge work |
| `software` | SaaS comparisons, platform analysis |
| `open-source` | OSS projects, licensing, community |
| `emerging-technology` | LLM foundations, edge AI, new platforms |

### Available images

`/images/posts/ai.svg` · `programming.svg` · `security.svg` · `software.svg` · `productivity.svg` · `tutorial.svg` · `future.svg`

---

## Body structure (standard article)

Use `##` for major sections and `###` for subsections. The site auto-generates a **table of contents** in the sidebar from these headings — do not add a manual TOC block in the body.

### Required section order

| # | Section | Heading | Notes |
|---|---------|---------|-------|
| 1 | **Introduction** | `## Introduction` | 1–3 short paragraphs. Lead with a concrete problem or observation from production work. No filler or generic openers. |
| 2 | **Key takeaways** | `## Key takeaways` | 4–7 bullet points. Scannable summary for busy readers and SERP snippets. |
| 3 | **Audience** | `## Who is this guide for?` | 3–6 bullets naming roles, experience level, and situations where this article applies. |
| 4 | **Anti-patterns** | `## When should you NOT use this?` | 3–6 bullets. State clear boundaries — when the advice, tool, or pattern is the wrong choice. |
| 5 | **Main content** | Topic-specific `##` headings | Core analysis, comparisons, or tutorials. Use 3–8 sections depending on article type. |
| 6 | **Use cases** | `## Real-world use cases` | 3–5 scenarios drawn from practical engineering work — specific enough to act on. |
| 7 | **Best practices** | `## Best practices` | Numbered actionable recommendations from production experience. |
| 8 | **Pitfalls** | `## Common pitfalls` | 4–8 mistakes with brief explanation and fix. Replaces the older "Common mistakes" heading. |
| 9 | **Checklist** | `## Decision checklist` | 6–12 yes/no or if-then items the reader can apply before committing to a approach. |
| 10 | **FAQ** | Frontmatter `faqs` only | Rendered automatically below the article body. **Do not** duplicate with `## FAQ` in the body. |
| 11 | **Related articles** | `## Related articles` | Only link to **published** English articles. See linking policy below. |
| 12 | **Conclusion** | `## Conclusion` | 1–2 short paragraphs. Reinforce the main thesis and next step. |

---

## Content block patterns

### Comparison tables

Use when comparing tools, approaches, or options.

```markdown
| Criterion | Option A | Option B |
|-----------|----------|----------|
| When to choose | Concrete trigger | Concrete trigger |
| Trade-off | Specific cost | Specific cost |
```

- First row is always the header.
- Columns must contain **actionable criteria** — when to choose, trade-offs, failure modes — not marketing language or feature slogans.
- Keep cells concise.
- Prefer 3–5 columns; split wide tables into multiple tables.

### Step-by-step guides

Use for workflows, setup instructions, or adoption playbooks.

```markdown
### Step 1: [Action verb + outcome]

Brief context, then:

1. First action
2. Second action
3. Third action
```

- Number steps sequentially within each `### Step N` block.
- One goal per step group.
- Include verification criteria ("you should see…") where helpful.

### Code examples (when relevant)

Use fenced blocks with language tags:

````markdown
```typescript
// example
```
````

Keep examples minimal and copy-paste safe.

---

## Article types

| Type | Main content focus | Typical length |
|------|-------------------|----------------|
| **Pillar** | Comprehensive hub; broad coverage | 2,000–4,000 words |
| **Guide / How-to** | Single workflow end-to-end | 1,200–2,500 words |
| **Comparison** | Head-to-head tables + decision framework | 1,500–2,500 words |
| **Best-of list** | Ranked or categorized tool roundup | 1,500–2,500 words |

Pillar pages: set `featured: true`. Launch articles: consider `trending: true`.

---

## Internal linking policy

### Rule: published articles only

**Never link to planned or unpublished articles.** Broken internal links hurt trust and SEO.

Before adding a link, confirm the target file exists in `content/posts-en/` and `draft: false`.

### Allowed link targets (check at write time)

```text
/en/posts/[slug]      — published English article
/en/category/[slug]   — category hub
/en/search            — site search
```

### Related articles section

- Include **2–5 links** to published articles only.
- Prefer same-cluster or logical cross-cluster peers.
- Use descriptive anchor text (not "click here").
- When a planned article is published later, add its link in the next edit of related hub/pillar pages.

### In-body links

- Use sparingly (2–4 per article).
- Same rule: published targets only.
- Pillar pages may link to published cluster support articles as they become available.

---

## Writing standards

| Standard | Requirement |
|----------|-------------|
| **Voice** | First-hand, practitioner-first — write from production experience, not as a generic summary |
| **Authority** | Authoritative, practical, and concise — every paragraph must earn its place |
| **Audience** | Developers, AI engineers, technical leads, security practitioners |
| **Accuracy** | No fabricated benchmarks, pricing, or version numbers — qualify when uncertain |
| **Headings** | Sentence case; no keyword stuffing |
| **Paragraphs** | 2–4 sentences max; one idea per paragraph |
| **Lists** | Parallel structure; lead with the most important item |
| **Jargon** | Define acronyms on first use |
| **Evergreen pillars** | Minimize references that expire quickly (version launch hype, "top tools this year" lists). Focus on durable concepts, decision frameworks, and patterns. |
| **Banned patterns** | Avoid generic AI phrasing: "in today's fast-paced world", "it's no secret", "game-changer", "landscape", "delve", "whether you're a beginner or expert", "this comprehensive guide will explore" |

### Experience-first writing

Articles must read as if written by someone who has shipped, debugged, or operated the thing being discussed:

- Prefer "In production, we…" / "Teams typically hit this when…" over abstract definitions alone.
- Include specific failure modes observed in real projects.
- Replace vague advice ("choose the right tool") with decision criteria ("choose X when your deploy target is static HTML only").
- If you have not verified a claim, qualify it or omit it.

---

## SEO checklist (before publish)

- [ ] `title` includes primary keyword naturally
- [ ] `description` is 140–160 characters with clear value proposition
- [ ] `category` matches primary topic
- [ ] `tags` include 2–4 relevant terms (no tag spam)
- [ ] `## Introduction` opens with a concrete problem — not a generic overview
- [ ] `## Key takeaways` present
- [ ] `## Who is this guide for?` present
- [ ] `## When should you NOT use this?` present
- [ ] `## Real-world use cases` present
- [ ] `## Best practices` and `## Common pitfalls` present
- [ ] `## Decision checklist` present
- [ ] Comparison tables use actionable criteria, not marketing copy
- [ ] Pillar articles are evergreen — no hype tied to a single release cycle
- [ ] `faqs` has 3–5 entries for pillar/guide articles
- [ ] `## Related articles` links only to existing published posts
- [ ] No links to unpublished slugs anywhere in the body
- [ ] `draft: false` when ready for production

---

## MDX skeleton (copy for new articles)

```mdx
---
title: ""
description: ""
category: ""
tags:
  - ""
  - ""
author: "Saad Elfallah"
publishedAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"
image: "/images/posts/ai.svg"
featured: false
trending: false
draft: false
faqs:
  - question: ""
    answer: ""
  - question: ""
    answer: ""
  - question: ""
    answer: ""
---

## Introduction

[1–3 short paragraphs — concrete opening from production experience]

## Key takeaways

- [Takeaway 1]
- [Takeaway 2]
- [Takeaway 3]
- [Takeaway 4]

## Who is this guide for?

- [Role / situation 1]
- [Role / situation 2]

## When should you NOT use this?

- [Boundary 1]
- [Boundary 2]

## [Main topic section 1]

[Content]

## [Main topic section 2]

[Content]

## Real-world use cases

### [Use case 1]

[Specific scenario and outcome]

## Best practices

1. [Practice 1]
2. [Practice 2]
3. [Practice 3]

## Common pitfalls

### [Pitfall 1]

[Explanation and fix]

## Decision checklist

- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

## Related articles

- [Article title](/en/posts/existing-slug-only)

## Conclusion

[1–2 short paragraphs]
```

---

## Changelog

| Version | Date | Change |
|---------|------|--------|
| 1.1 | 2026-07-01 | Experience-first voice, required audience/anti-pattern/use-case/checklist sections, actionable tables, evergreen pillar guidance |
| 1.0 | 2026-06-30 | Initial template — standard sections, linking policy, frontmatter schema |
