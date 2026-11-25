# Project log: bonstudiohk.com

> **Agents: read this first.** Update it (newest entry at the top of "Log") when you change something significant.

## Current status (2026-11-25)

- **Code:** GitHub `bonyuiux/bonstudiohk`, branch `main`.
- **Live site:** still on **Framer** until the domain is switched (see "Go-live checklist").
- **What it is:** a redesign of the Framer site with the same pages and URLs, a new consistent design system, a WhatsApp-first enquiry flow and a marketing layer (GA4, GTM, Google Ads, Meta and TikTok tags, lead events, UTM attribution, SEO).
- **Photos:** taken from the Framer CDN at their original upload resolution (up to 7008px), then resized to a 2400px long edge in `public/images/`. The owner has the originals and can re-export any photo with `npm run photos`.
- **Language:** English only for now. Traditional Chinese may come later (Next.js i18n routing, `/zh-hk/...`).
- **Content editing:** decision pending (keep editing files with an AI tool, or add a visual CMS later).

## Decisions

- **Redesign, not a pixel copy.** The owner's main complaint was an inconsistent type system. The Framer site used Italiana, Jost, DM Sans and a system font across 11 sizes. Now: Cormorant Garamond and Jost, 5 named type roles, even-pixel values only (see `/styleguide`).
- **Enquiries go to WhatsApp** (owner's choice). The form writes a message from the answers and opens WhatsApp, then shows `/thankyou`. There is no server, database or email service to maintain.
- **Navigation** moved from a left sidebar to a top bar with an always-visible WhatsApp button, plus a floating WhatsApp button on phones.
- **Facebook link:** the Framer contact page said "Facebook" but had no URL, so it is left out. Add it to `site.ts` if there is a page.
- Location captions from the Framer gallery ("Croatia, 2025"…) were not attached to specific photos in Framer, so they are not shown, to avoid labelling photos wrongly.

## Go-live checklist

1. **Vercel:** import `bonyuiux/bonstudiohk` at vercel.com/new (Next.js preset, no settings). Add the environment variables from `.env.example`.
2. Check the `*.vercel.app` preview on a phone: the enquiry form, the WhatsApp buttons and every page.
3. **Domain** (Cloudflare, account Bonphotograph@gmail.com, same as bonyuiux.work). In Vercel → Settings → Domains, add `bonstudiohk.com` and `www.bonstudiohk.com`. In Cloudflare DNS, remove the Framer records (`A` 31.43.160.6 / 31.43.161.6 and `CNAME www → sites.framer.app` or similar) and add the records Vercel shows, set to **DNS only** (grey cloud), as for bonyuiux.work.
4. **Google Search Console:** submit `/sitemap.xml`. Use URL Inspection on the home page.
5. **GA4:** check Realtime, then mark `generate_lead` as a key event.
6. Cancel the Framer plan once Vercel shows the domains as Valid.

## Log (newest first)

### 2026-11-25: Type system simplified (owner feedback)
- Feedback: "the font system is too complex; there are multiple styles within the same area" (home intro, About "approach" block).
- 8 roles → 5 (`t-display`, `t-title`, `t-heading`, `t-body`, `t-small`); 5 weights → 3 (Cormorant 300/400, Jost 400). Lead and body merged into one 18px reading size. All 23 eyebrow labels removed. Inline links are now body text with an underline.
- Owner rule: every size, line height and spacing value is an even number of pixels. Fluid `clamp()` sizes replaced with steps at 768px and 1024px. Checked by scanning computed styles on 9 pages at 390, 820 and 1440px: no odd values except the browser's own `<option>` padding.

### 2026-11-25: Migration from Framer
- Scraped all 12 Framer pages (text, 66 photos, hero video, logos, favicon, social image).
- Built in Next.js 16 with the new design system, all pages kept at the same URLs, plus `/styleguide`.
- Marketing layer: `src/lib/analytics.ts`, `src/components/Analytics.tsx`, `src/lib/attribution.ts`. Tested with dummy IDs; all tags received the expected events.
- SEO: per-page metadata, sitemap, robots, JSON-LD, alt text written for every photo.
