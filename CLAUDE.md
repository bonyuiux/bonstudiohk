<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Project context

Read `docs/PROJECT-LOG.md` first (status, hosting, domain, next steps) and `docs/MARKETING.md` for tags and events. Update the log when you change something significant.

## Rules

- **Type:** only the 5 roles in `src/app/globals.css` (`t-display`, `t-title`, `t-heading`, `t-body`, `t-small`). Never set font size, family or weight by hand. A text block uses at most two roles (serif title + sans body). No eyebrow labels, no all-caps. This consistency was the main reason for the redesign.
- **Even numbers only:** every font size, line height, spacing, radius and offset is an even number of pixels at every breakpoint (owner's rule). Sizes step at `md`/`lg`; no fluid `clamp()`. Only 1px hairlines are exempt.
- **Layout: two alignment lines only.** The margin (logo, menu, rail, footer columns) and the content line (column 4 of 12 on desktop, 3 on tablet, the margin on phones). Every title, paragraph, link, form and gallery starts on the content line, left-aligned. Nothing is centred. Use `grid-site` + `axis-text` / `axis-wide` / `axis-media` / `axis-full`, and the `Band` component for sections.
- **Links** are `LineLink` (a line and a word). The only pill is the WhatsApp button (header, menu, contact page, form submit).
- **Motion:** use `data-reveal="text" | "image" | "line"` (see globals.css), `Figure` for photos and `Drift` for paired photos. Content must stay visible without JS.
- **Colour:** only the semantic roles (`paper`, `surface`, `line`, `ink`, `muted`, `accent`, `accent-soft`, `deep`, `on-deep`). No raw hex in components.
- **Content** lives in `src/content/` (site details, page copy, photo list). Components should not hard-code copy that the owner will want to change.
- **Leads go to WhatsApp.** Any new contact point must call `track()` from `src/lib/analytics.ts`, or be a plain `<a>` to wa.me / mailto / tel / instagram (auto-tracked by `Analytics.tsx`).
- Keep existing URLs: they carry the Google ranking from the Framer site.
