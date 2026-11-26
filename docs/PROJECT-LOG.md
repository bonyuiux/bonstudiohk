# Project log: bonstudiohk.com

> **Agents: read this first.** Update it (newest entry at the top of "Log") when you change something significant.

## Current status (2026-11-25)

- **Code:** GitHub `bonyuiux/bonstudiohk`, branch `main`.
- **Live site:** still on **Framer** until the domain is switched (see "Go-live checklist").
- **What it is:** a 1:1 code replica of the Framer site (same pages, URLs, look and copy), with the enquiry form sending to WhatsApp and a marketing layer underneath (GA4, GTM, Google Ads, Meta and TikTok tags, lead events, UTM attribution, SEO).
- **Photos:** taken from the Framer CDN at their original upload resolution (up to 7008px), then resized to a 2400px long edge in `public/images/`. The owner has the originals and can re-export any photo with `npm run photos`.
- **Language:** English only for now. Traditional Chinese may come later (Next.js i18n routing, `/zh-hk/...`).
- **Content editing:** decision pending (keep editing files with an AI tool, or add a visual CMS later).

## Decisions

- **Current direction (2026-11-26):** the original Framer structure, with a simplified type and spacing system and a carousel hero (see `docs/DESIGN.md`). The exact replica is at tag `og-replica`.
- **Enquiries go to WhatsApp** (owner's choice). The form writes a message from the answers and opens WhatsApp, then shows `/thankyou`. There is no server, database or email service to maintain.
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

### 2026-11-26: New type + spacing system, Rinko-style nav, carousel hero (owner's pain points)
- Pain points: too many type sizes and styles (labels above titles, descriptions, tags); inconsistent spacing (5–6 values in one block on the Hong Kong page); the sticky sidebar touched the top; the hero text was too big and too loose; the "I capture quiet moments" section was unnecessary.
- References: rinkokawauchi.com/publications (minimal left text menu, clear spacing), mikiyatakimoto.com (full-bleed image, name top-left).
- Now: 2 families (Italiana = logo face, Jost), 4 roles, 2 weights; spacing scale 8/16/24/48/section; text-only sidebar with a dot for the current page, sticky at 48px; phone Menu; hero = auto carousel (film + 4 photos) with a line indicator and **3 text versions (A image only / B tagline / C captions) in a temporary switcher**. About-statement section removed. /work pages now use the shell instead of a second hero. Inter dropped; form fields use Jost 16 (no iOS zoom).
- Verified at 1440/900/390px: exactly 4 text styles per screen size, no odd pixel values, no console errors.
- Installed design-system-ops (36 skills) at `.claude/skills/design-system-ops`; guide in `docs/DESIGN-SYSTEM-OPS.md`.
- The previous exact Framer replica is kept at tag `og-replica`.

### 2026-11-25: 1:1 replica of the original Framer site (owner decision: "back to OG, 100%")
- All redesign work (paper/dark versions, new type system) is replaced by an exact rebuild of the live Framer site. Measured every text element, photo and section on all 12 pages at 1440, 810 and 390px, rebuilt to those numbers, then diffed: text and photos land within 3px of the original everywhere checked.
- Kept from the migration: WhatsApp enquiry flow (the original form's fields), GA4/GTM/Ads/Meta/TikTok tags and lead events, UTM attribution, SEO (original titles/descriptions, sitemap, JSON-LD, alt text).
- Original quirks kept on purpose: copy as written ("I captures…", "alive.With", "2025 Own by Bon Studio."), phone has no menu (only the logo bar and the Works tabs on home), unlabelled "Facebook" text, blue phone number.
- Original quirks NOT copied: the 200px blank strip under the footer; the Event page's duplicate Wedding title; the tablet Event sidebar highlighting Wedding; a tablet-only crop of one /work photo.

### 2026-11-25: Back to the original layout, with a clean type and spacing system (owner decision)
- Owner rejected the dark Izanami direction overall. Kept from it: the type hierarchy of the service blocks (number → title → ink summary → grey detail → line link).
- Restored the original Framer structure: sticky sidebar nav on the left of every page, content on the right; home keeps the full-width hero above. Light warm-paper palette restored.
- New `TextBlock` component is the only way text is laid out; new named spacing scale (tight/stack/block/row/section/gallery) used by every component.
- Checked on 8 pages: at 1440px all headings and paragraphs start at x=48 (sidebar) or x=320 (content); at 390px all at x=20. No odd pixel values.
- Removed: dark palette, section rail, parallax drift, clock, full-screen desktop menu.

### 2026-11-25: Izanami-style layout, dark palette, motion (owner feedback)
- Feedback: "multiple alignments within the same site look messy"; reference https://izanami-official.com/ for layout, transitions and vibe. Owner chose a **dark** palette.
- Palette: warm night (`#110d09` background, `#ede6dc` text, `#a39788` muted at 6.9:1). Semantic role names unchanged, so components did not need new class names.
- Layout: two alignment lines (`grid-site`, `axis-*` utilities in globals.css). Checked on 8 pages at 1440px: headings and paragraphs start only at x=112 (margin) or x=422 (content line); the footer clock aligns to the right margin.
- Services are now full-width sections (words left, photo right) instead of four equal cards. Navigation moved into a full-screen menu; the WhatsApp pill stays in the header.
- Motion: CSS reveals driven by one IntersectionObserver (`RevealObserver`), `Drift` parallax (desktop only), page crossfade (`app/template.tsx`), menu clip-path wipe. Reduced motion removes movement.
- Removed `ServiceList`, `ButtonLink`, `PageIntro`, `Reveal`; added `Band`, `PageHead`, `LineLink`, `Figure`, `Drift`, `HKClock`, `ServiceSections`.

### 2026-11-25: Type system simplified (owner feedback)
- Feedback: "the font system is too complex; there are multiple styles within the same area" (home intro, About "approach" block).
- 8 roles → 5 (`t-display`, `t-title`, `t-heading`, `t-body`, `t-small`); 5 weights → 3 (Cormorant 300/400, Jost 400). Lead and body merged into one 18px reading size. All 23 eyebrow labels removed. Inline links are now body text with an underline.
- Owner rule: every size, line height and spacing value is an even number of pixels. Fluid `clamp()` sizes replaced with steps at 768px and 1024px. Checked by scanning computed styles on 9 pages at 390, 820 and 1440px: no odd values except the browser's own `<option>` padding.

### 2026-11-25: Migration from Framer
- Scraped all 12 Framer pages (text, 66 photos, hero video, logos, favicon, social image).
- Built in Next.js 16 with the new design system, all pages kept at the same URLs, plus `/styleguide`.
- Marketing layer: `src/lib/analytics.ts`, `src/components/Analytics.tsx`, `src/lib/attribution.ts`. Tested with dummy IDs; all tags received the expected events.
- SEO: per-page metadata, sitemap, robots, JSON-LD, alt text written for every photo.
